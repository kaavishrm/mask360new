#!/usr/bin/env node
// The editorial day. node newsroom/run.mjs [--slots N] [--dry] [--no-post] [--no-commit] [--section x] [--only-build]
// Scout -> Editor -> Writer -> Facts -> Copy -> Legal -> Art -> lint -> render -> build -> commit -> post -> INBOX.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, renameSync, appendFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { research, draft, look, cost, MODEL } from './llm.mjs';
import { fetchFeeds } from './sources.mjs';
import { ScoutOut, EditorOut, Story, FactsOut, CopyOut, LegalOut } from './schemas.mjs';
import { parseFrontMatter, stringifyFrontMatter } from './yaml.mjs';
import { lintStory, allStoryFiles, SECTIONS, FORMATS, ROOT } from './lint.mjs';
import { storyPayload } from './story-json.mjs';
import { collect } from './evidence.mjs';
import { attach } from './attach-evidence.mjs';
import { ArtOut, CoverPick } from './schemas.mjs';
import { site } from '../config.mjs';
import { postStory } from './post.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const args = Object.fromEntries(process.argv.slice(2).map((a, i, arr) => a.startsWith('--') ? [a.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : true] : []).filter(Boolean));
const DRY = !!args.dry, NO_POST = !!args['no-post'], NO_COMMIT = !!args['no-commit'];
const SLOTS = Number(args.slots || process.env.NEWSROOM_SLOTS || 3);
const IST = (d = new Date()) => new Date(d.getTime() + 5.5 * 3600 * 1000);
const today = IST().toISOString().slice(0, 10);
const nowIST = IST().toISOString().slice(11, 16);
const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][IST().getUTCDay()];
const STATE_FILE = join(HERE, 'STATE.json');
const state = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, 'utf8')) : { runs: [], held: [], published: [] };
const usages = [];
const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);
const sh = (cmd, a, opts = {}) => execFileSync(cmd, a, { cwd: join(ROOT, '..'), stdio: ['ignore', 'pipe', 'inherit'], ...opts }).toString();

function published() {
  return allStoryFiles(ROOT).map((f) => { const { data } = parseFrontMatter(readFileSync(f, 'utf8')); return { slug: basename(f, '.md'), title: data.title, section: data.section, format: data.format, kicker: data.kicker, date: String(data.date), tags: data.tags || [] }; }).sort((a, b) => b.date.localeCompare(a.date));
}

const CADENCE = { Monday: ['moves', 'tea'], Tuesday: ['tea', 'scorecard'], Wednesday: ['tea', 'edit'], Thursday: ['tea', 'guestlist|spotted'], Friday: ['scorecard|receipts', 'edit'], Saturday: ['deeppour'], Sunday: ['hottake'] };

function weekSummary(pub) {
  const since = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
  const week = pub.filter((p) => p.date >= since);
  const byFormat = {}, bySection = {};
  for (const p of week) { byFormat[p.format] = (byFormat[p.format] || 0) + 1; bySection[p.section] = (bySection[p.section] || 0) + 1; }
  return { count: week.length, byFormat, bySection, titles: week.map((p) => `${p.date} ${p.section}/${p.format} ${p.title}`) };
}

async function scout(pub) {
  log('scout: reading feeds');
  const feeds = await fetchFeeds({ maxAgeHours: 72 });
  log(`scout: ${feeds.length} feed items, searching`);
  const feedText = feeds.slice(0, 120).map((f) => `- [${f.feed}] ${f.title} (${f.date}) ${f.link}\n  ${f.summary}`).join('\n');
  const notes = await research({ role: 'scout', maxSearches: 16, effort: 'medium', user: `Today is ${today} (${DAY}) IST. Find 12 to 20 story candidates for the Mask360 newsroom.\n\nAlready published (do not repeat these subjects):\n${pub.slice(0, 60).map((p) => `- ${p.date} ${p.title}`).join('\n')}\n\nFeed items from the last 72 hours:\n${feedText || '(no feed items reached us; rely on search)'}\n\nSearch beyond the feeds: LinkedIn public posts about appointments, ASCI orders, festival and event sponsor announcements, restaurant and hotel openings in Mumbai, Delhi, Bangalore and Goa, luxury and beauty brand news in India, celebrity x brand deals, and anything with a number in it. Write your notes as a list of candidates with every URL you saw.` });
  usages.push(notes.usage);
  const out = await draft({ role: 'scout', schema: ScoutOut, effort: 'low', user: `Turn these research notes into the candidate list. Keep only candidates with a real URL you saw in the notes. Today is ${today}.\n\n${notes.text}` });
  usages.push(out.usage);
  const cands = out.data.candidates.filter((c) => Object.values(c.score).reduce((a, b) => a + b, 0) >= 30 && c.sources.length);
  log(`scout: ${out.data.candidates.length} candidates, ${cands.length} kept (${notes.searches} searches)`);
  return cands;
}

async function plan(cands, pub) {
  const week = weekSummary(pub);
  const held = state.held.filter((h) => h.until > today);
  const out = await draft({ role: 'editor', schema: EditorOut, effort: 'medium', user: `Today is ${today}, ${DAY}, ${nowIST} IST. Fill ${SLOTS} slots this run. Cadence floor for ${DAY}: ${CADENCE[DAY].join(', ')} (a|b means either). ${args.section ? `This run is restricted to section "${args.section}".` : ''}\n\nThis week so far (${week.count} stories): by format ${JSON.stringify(week.byFormat)}, by section ${JSON.stringify(week.bySection)}.\n${week.titles.join('\n')}\n\nHeld stories (retry only if fixable today): ${held.length ? held.map((h) => `${h.slug}: ${h.reason}`).join('; ') : 'none'}\n\nCandidates (index: details):\n${cands.map((c, i) => `${i}: [${c.section}/${c.format}/${c.kicker}] ${c.headline}\n   receipt: ${c.receipt}\n   why: ${c.why}\n   monetization: ${c.monetization}\n   sources: ${c.sources.join(' ')}`).join('\n')}` });
  usages.push(out.usage);
  log(`editor: ${out.data.picks.length} picks. ${out.data.note}`);
  return out.data.picks.slice(0, SLOTS + 1);
}

function slideDefaults(s) { return Object.fromEntries(Object.entries(s).filter(([k, v]) => v !== null && v !== undefined && v !== '')); }

function toFile(st, legal) {
  const slug = st.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);
  const data = {
    title: st.title, dek: st.dek, section: st.section, format: st.format, kicker: st.kicker, date: today, time: nowIST, desk: st.desk,
    cover: 'generated', coverText: st.coverText, credit: '', sources: st.sources, tags: st.tags.map((t) => t.toLowerCase()), paid: st.paid, partner: st.partner || '',
  };
  if (st.score) data.score = st.score;
  if (st.sponsor) data.sponsor = st.sponsor;
  if (st.film) data.film = st.film;
  if (legal) { data.legal = legal.verdict; data.legalNote = legal.legalNote; }
  data.slides = st.slides.map(slideDefaults);
  data.caption = st.caption.trim() + '\n';
  data.linkedin = st.linkedin.trim() + '\n';
  data.alt = st.alt.join('\n') + '\n';
  const [y, m] = today.split('-');
  const dir = join(ROOT, 'content', 'stories', y, m);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${slug}.md`);
  writeFileSync(path, stringifyFrontMatter(data, st.body.trim() + '\n'));
  return { path, slug };
}

async function produce(pick, cand) {
  const needsLegal = pick.kicker === 'BREWING' || pick.kicker === 'BITTER' || pick.format === 'receipts';
  const spec = FORMATS[pick.format];
  log(`writer: researching "${pick.headline}"`);
  const notes = await research({ role: 'writer', maxSearches: 10, effort: 'medium', user: `Research this story for Mask360. Today is ${today}.\nEditor's brief: ${pick.brief}\nFormat: ${pick.format} (${spec.name}). Kicker: ${pick.kicker}. Section: ${pick.section}.\nCandidate: ${cand.headline}\nReceipt: ${cand.receipt}\nKnown sources: ${cand.sources.join(' ')}\n\nRead the known sources and find the primary source behind them (the release, the filing, the post, the price list). Collect every number, name, date, title and quote you will need, each with its URL. Note which claims you could not verify. Do not write the story yet.` });
  usages.push(notes.usage);
  log(`writer: drafting (${notes.searches} searches)`);
  const w = await draft({ role: 'writer', schema: Story, effort: 'high', maxTokens: 20000, user: `Write the story file as JSON. Today is ${today}. Desk: ${SECTIONS[pick.section].desk}${pick.format === 'hottake' ? ' (sign the Hot Take "The Mask")' : ''}. Format: ${pick.format}, slides ${spec.slides[0]} to ${spec.slides[1]}, web body ${spec.words[0]} to ${spec.words[1]} words. Kicker: ${pick.kicker}. coverText idea: ${pick.coverText}.\nEditor's brief: ${pick.brief}\n\nResearch notes:\n${notes.text}\n\nSlug: lowercase words with hyphens, brand first. Set paid false and partner null. For receipt slides set kind and only that kind's fields; set unused fields to null. alt has one entry per slide.` });
  usages.push(w.usage);
  let st = w.data;

  log('facts: checking');
  const fnotes = await research({ role: 'facts', maxSearches: 6, effort: 'medium', user: `Verify the claims in this draft against its sources and your own search. List each claim with a verdict and the supporting URL.\n\n${JSON.stringify(st)}` });
  usages.push(fnotes.usage);
  const f = await draft({ role: 'facts', schema: FactsOut, effort: 'medium', maxTokens: 20000, user: `Apply these verification notes to the draft and return the corrected story. Notes:\n${fnotes.text}\n\nDraft:\n${JSON.stringify(st)}` });
  usages.push(f.usage);
  if (f.data.hold) return { held: `facts: ${f.data.holdReason}` };
  st = f.data.story;
  const unsupported = f.data.checks.filter((c) => c.verdict === 'unsupported' || c.verdict === 'contradicted').length;
  log(`facts: ${f.data.checks.length} claims, ${unsupported} cut or fixed`);

  log('copy: editing');
  const c = await draft({ role: 'copy', schema: CopyOut, effort: 'medium', maxTokens: 20000, user: `Edit to the house rules and return the full story. Format ${st.format}: slides ${spec.slides[0]} to ${spec.slides[1]}, body ${spec.words[0]} to ${spec.words[1]} words.\n\n${JSON.stringify(st)}` });
  usages.push(c.usage);
  st = c.data.story;

  let legal = null;
  if (needsLegal || st.kicker === 'BREWING' || st.kicker === 'BITTER' || st.format === 'receipts') {
    log('legal: checklist');
    const l = await draft({ role: 'legal', schema: LegalOut, effort: 'high', maxTokens: 20000, user: `Run the checklist. Today is ${today}. Right of reply: ${st.askedForComment || 'not yet sought; if the format requires it, the story must say comment was invited via tea@mask360.agency and the kicker must be honest about that'}.\n\n${JSON.stringify(st)}` });
    usages.push(l.usage);
    if (l.data.verdict !== 'CLEAR') return { held: `legal: ${l.data.fixRequired || 'HOLD'}` };
    legal = l.data; st = l.data.story;
  }

  if (!st.coverText) st.coverText = st.title.split(' ').slice(0, 3).join(' ');
  if (st.alt.length !== st.slides.length) st.alt = st.slides.map((s, i) => st.alt[i] || `${s.type} slide ${i + 1}`);
  let { path, slug } = toFile(st, legal);
  // evidence: the media receipts, pulled from the story's own sources, then captioned by the art desk
  log('evidence: collecting');
  const ev = await collect(path, { max: 6 });
  const att = attach(path, { max: 2 });
  log(`evidence: ${ev.length} files, ${att.attached} attached${att.reason ? ` (${att.reason})` : ''}`);
  if (att.attached) {
    try {
      const cur = parseFrontMatter(readFileSync(path, 'utf8'));
      const imgs = cur.data.slides.map((s, i) => ({ i, s })).filter((x) => x.s.type === 'receipt' && x.s.kind === 'image');
      const a = await draft({ role: 'art', schema: ArtOut, effort: 'low', user: `Caption these media receipts for the story. Story title: ${cur.data.title}. Dek: ${cur.data.dek}.\n\nReceipts:\n${imgs.map((x) => `slide ${x.i + 1}: kind ${ev.find((e) => e.file === x.s.image)?.kind || 'image'}, from ${x.s.source}, page title "${ev.find((e) => e.file === x.s.image)?.title || ''}", current caption "${x.s.caption}", credit "${x.s.credit}"`).join('\n')}\n\nReturn one caption per slide (under 25 words, what the picture shows and why it matters to the claim) and keep or tighten the credit.` });
      usages.push(a.usage);
      for (const c of a.data.captions) { const sl = cur.data.slides[c.slide - 1]; if (sl && sl.type === 'receipt' && sl.kind === 'image') { sl.caption = c.caption; if (c.credit) sl.credit = c.credit; } }
      writeFileSync(path, stringifyFrontMatter(cur.data, cur.body));
    } catch (e) { log(`art caption pass skipped: ${e.message}`); }
  }
  // the art desk looks at the evidence and picks the cover: a person, a place or the work itself over a logo wall
  try {
    const cands = ev.filter((e) => e.kind !== 'screenshot' && e.w >= 600).slice(0, 6);
    if (cands.length > 1) {
      const thumbs = cands.map((e) => execFileSync('python3', ['-I', '-c', `import sys,base64,io
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGB'); im.thumbnail((800,800)); b=io.BytesIO(); im.save(b,'JPEG',quality=78); print(base64.b64encode(b.getvalue()).decode())`, join(ROOT, 'public', e.file)]).toString().trim());
      const pick = await look({ role: 'art', schema: CoverPick, images: thumbs, user: `These ${cands.length} images are the evidence collected for the story "${st.title}" (${st.dek}). They are numbered 1 to ${cands.length} in order. Pick the one that works as the magazine cover: the work itself, a person or a place, well lit, not a logo, not a logo wall, not a stock image, not a screenshot of text. Return best (1 to ${cands.length}), a one-line reason, and reject (the numbers that are logos, logo walls or stock and must not be used as receipts either).` });
      usages.push(pick.usage);
      const chosen = cands[pick.data.best - 1];
      if (chosen) {
        const cur = parseFrontMatter(readFileSync(path, 'utf8'));
        cur.data.cover = `photo:${chosen.file}`;
        cur.data.credit = chosen.credit;
        const bad = new Set(pick.data.reject.map((n) => cands[n - 1]?.file).filter(Boolean));
        const keep = cur.data.slides.filter((sl) => !(sl.type === 'receipt' && sl.kind === 'image' && bad.has(sl.image) && cur.data.slides.filter((x) => x.type === 'receipt' && x.kind === 'image').length > 1));
        if (keep.length !== cur.data.slides.length) { const altLines = String(cur.data.alt || '').split('\n').filter(Boolean); cur.data.alt = altLines.filter((_, i) => keep.includes(cur.data.slides[i])).join('\n') + '\n'; cur.data.slides = keep; }
        writeFileSync(path, stringifyFrontMatter(cur.data, cur.body));
        log(`art: cover ${chosen.file.split('/').pop()} (${pick.data.reason})`);
      }
    }
  } catch (e) { log(`art cover pick skipped: ${e.message}`); }
  let r = lintStory(path);
  if (r.errors.length) {
    log(`lint: ${r.errors.length} errors, repairing`);
    const fix = await draft({ role: 'copy', schema: CopyOut, effort: 'medium', maxTokens: 20000, user: `The linter rejected the story. Fix every error and return the full story. Errors:\n${r.errors.map((e) => `- ${e}`).join('\n')}\n\nStory:\n${JSON.stringify(st)}` });
    usages.push(fix.usage);
    st = fix.data.story;
    if (st.alt.length !== st.slides.length) st.alt = st.slides.map((s, i) => st.alt[i] || `${s.type} slide ${i + 1}`);
    ({ path, slug } = toFile(st, legal));
    r = lintStory(path);
    if (r.errors.length) { renameSync(path, join(HERE, 'queue', 'held', `${slug}.md`)); return { held: `lint: ${r.errors.join('; ')}` }; }
  }
  log(`render: ${slug}`);
  execFileSync('python3', ['-I', join(HERE, 'render.py')], { input: JSON.stringify(storyPayload(path)), stdio: ['pipe', 'pipe', 'inherit'] });
  return { slug, path, title: st.title, section: st.section, format: st.format, kicker: st.kicker };
}

function build() { log('build'); console.log(sh('node', [join(ROOT, 'build.mjs')])); }

function commit(done) {
  if (NO_COMMIT || DRY || !done.length) return null;
  const repo = join(ROOT, '..');
  const git = (a) => spawnSync('git', a, { cwd: repo, stdio: ['ignore', 'pipe', 'pipe'] });
  git(['config', 'user.name', 'Mask360 Newsroom']); git(['config', 'user.email', 'tea@mask360.agency']);
  git(['add', '-A', 'magazine/content', 'magazine/public', 'magazine/newsroom/STATE.json', 'magazine/newsroom/posted.json', 'magazine/newsroom/queue', 'magazine/OPS']);
  const msg = `newsroom: ${done.length} ${done.length === 1 ? 'story' : 'stories'}, ${today} ${nowIST} IST\n\n${done.map((d) => `- ${d.section}/${d.format} ${d.kicker}: ${d.title}`).join('\n')}`;
  const c = git(['commit', '-m', msg]);
  if (c.status !== 0) { log('commit: nothing to commit'); return null; }
  const branch = process.env.NEWSROOM_BRANCH || 'main';
  for (let i = 0; i < 4; i++) {
    git(['pull', '--rebase', 'origin', branch]);
    const p = git(['push', 'origin', `HEAD:${branch}`]);
    if (p.status === 0) { log(`push: ${branch}`); return msg; }
    log(`push failed (${i + 1}/4): ${p.stderr.toString().trim().slice(0, 200)}`);
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 2000 * 2 ** i);
  }
  throw new Error('push failed after 4 attempts');
}

async function post(done) {
  if (NO_POST || DRY) return [];
  const results = [];
  for (const d of done) {
    try { results.push(await postStory(d.path)); } catch (e) { log(`post failed for ${d.slug}: ${e.message}`); results.push({ slug: d.slug, error: e.message }); }
  }
  return results;
}

function inbox(line) {
  const dir = join(ROOT, 'OPS', 'INBOX'); mkdirSync(dir, { recursive: true });
  const f = join(dir, `${today}.md`);
  if (!existsSync(f)) writeFileSync(f, `# INBOX ${today}\n\n`);
  appendFileSync(f, `- ${line}\n`);
}

function incident(title, detail) {
  const dir = join(ROOT, 'OPS', 'INCIDENTS'); mkdirSync(dir, { recursive: true });
  const f = join(dir, `${today}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}.md`);
  writeFileSync(f, `# ${title}\n\nOpened ${today} ${nowIST} IST by the newsroom run.\n\n${detail}\n\nStatus: OPEN\n`);
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) { console.error('No ANTHROPIC_API_KEY. The engine cannot run without it. See newsroom/README.md.'); process.exit(2); }
  mkdirSync(join(HERE, 'queue', 'held'), { recursive: true });
  log(`newsroom run: ${today} ${DAY} ${nowIST} IST, model ${MODEL}, slots ${SLOTS}${DRY ? ', DRY' : ''}`);
  const pub = published();
  const done = [], held = [];
  try {
    const cands = await scout(pub);
    const picks = await plan(cands, pub);
    for (const pick of picks) {
      if (done.length >= SLOTS) break;
      const cand = cands[pick.index];
      if (!cand) continue;
      try {
        const r = await produce(pick, cand);
        if (r.held) { held.push({ slug: pick.headline, reason: r.held, until: new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10) }); log(`held: ${r.held}`); }
        else done.push(r);
      } catch (e) { log(`story failed: ${e.message}`); held.push({ slug: pick.headline, reason: `error: ${e.message.slice(0, 160)}`, until: today }); }
    }
    if (done.length) build();
  } catch (e) {
    log(`run failed: ${e.message}`);
    incident('Newsroom run failed', `${e.stack || e.message}\n\nStories completed before the failure: ${done.map((d) => d.slug).join(', ') || 'none'}`);
    inbox(`[newsroom] RUN FAILED at ${nowIST}: ${e.message.slice(0, 200)}. Incident opened.`);
    process.exitCode = 1;
  }
  const spend = cost(usages);
  state.runs = [...state.runs.slice(-60), { at: `${today} ${nowIST}`, published: done.map((d) => d.slug), held: held.map((h) => h.reason), usd: Number(spend.usd.toFixed(2)) }];
  state.held = [...state.held.filter((h) => h.until > today), ...held];
  state.published = [...(state.published || []), ...done.map((d) => d.slug)].slice(-500);
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  let pushed = null;
  try { pushed = commit(done); } catch (e) { incident('Newsroom push failed', e.message); log(e.message); }
  const posts = await post(done);
  inbox(`[newsroom] ${done.length} published (${done.map((d) => d.slug).join(', ') || 'none'}), ${held.length} held (${held.map((h) => h.reason.slice(0, 60)).join('; ') || 'none'}), posts: ${posts.map((p) => p.error ? `${p.slug} FAILED` : `${p.slug} IG ${p.ig || 'queued'} LI ${p.li || 'queued'}`).join('; ') || 'none'}, spend USD ${spend.usd.toFixed(2)}, ${pushed ? 'pushed' : 'not pushed'}`);
  if (pushed && posts.length) { try { commit([]); } catch { /* second commit for posted.json is best effort */ } }
  log(`done: ${done.length} published, ${held.length} held, USD ${spend.usd.toFixed(2)}`);
}

main();
