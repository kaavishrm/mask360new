// Story linter: every rule a machine can check from HOUSE/03 and HOUSE/04. Run: node newsroom/lint.mjs [files...]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter } from './yaml.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(HERE, '..');

export const SECTIONS = {
  campaigns: { name: 'Campaigns', color: '#FF3332', desk: 'Campaigns Desk', ink: '#FFFFFF' },
  events: { name: 'Events', color: '#FF00B7', desk: 'Events Desk', ink: '#FFFFFF' },
  hospitality: { name: 'Hospitality', color: '#F9C728', desk: 'Hospitality Desk', ink: '#000000' },
  fashion: { name: 'Fashion', color: '#6E2CF4', desk: 'Fashion Desk', ink: '#FFFFFF' },
  people: { name: 'People', color: '#3FAD57', desk: 'People Desk', ink: '#000000' },
  culture: { name: 'Culture', color: '#0000EE', desk: 'Culture Desk', ink: '#FFFFFF' },
};
export const FORMATS = {
  tea: { name: 'The Tea', words: [350, 600], slides: [7, 9] },
  scorecard: { name: 'Scorecard', words: [400, 700], slides: [7, 9] },
  guestlist: { name: 'The Guest List', words: [300, 500], slides: [7, 10] },
  moves: { name: 'Moves', words: [250, 700], slides: [6, 10] },
  edit: { name: 'The Edit', words: [400, 600], slides: [7, 9] },
  spotted: { name: 'Spotted', words: [120, 200], slides: [3, 4] },
  branddrop: { name: 'Brand Drop', words: [250, 400], slides: [5, 8] },
  deeppour: { name: 'Deep Pour', words: [1200, 2000], slides: [8, 10] },
  hottake: { name: 'Hot Take', words: [500, 800], slides: [5, 7] },
  receipts: { name: 'Receipts', words: [300, 500], slides: [6, 9] },
};
export const KICKERS = ['SPILLED', 'BREWING', 'SWEET', 'BITTER', 'PAID'];
export const SLIDE_TYPES = ['cover', 'tea', 'receipt', 'verdict', 'item', 'close'];

export const BANNED = ['elevate', 'seamless', 'journey', 'unlock', 'curated', 'bespoke', 'iconic', 'game-changer', 'game changer', 'disrupt', 'synergy', 'delve', 'tapestry', 'testament', 'vibrant', 'nestled', 'boasts', 'stunning', 'must-visit', 'hidden gem', 'foodie', 'guilty pleasure', 'treat yourself', 'netizens', 'slams', 'breaks the internet', 'slay', 'periodt', 'no cap', 'bestie', 'bussin', "it's giving", 'fam'];
const BANNED_RE = BANNED.map((w) => new RegExp(`(^|[^\\w'])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=$|[^\\w])`, 'i'));
const EMOJI_RE = /\p{Extended_Pictographic}/gu;
const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

export function lintStory(path) {
  const src = readFileSync(path, 'utf8');
  const errors = [], warnings = [];
  const E = (m) => errors.push(m), W = (m) => warnings.push(m);
  let data, body;
  try { ({ data, body } = parseFrontMatter(src)); } catch (e) { return { errors: [e.message], warnings, data: null, body: '' }; }

  const slug = basename(path).replace(/\.md$/, '');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) E(`slug "${slug}" must be lowercase words joined by hyphens`);
  if (slug.length > 70) E('slug over 70 characters');
  if (/[–—]/.test(src)) E('em dash or en dash found (use commas, colons or periods)');

  for (const k of ['title', 'dek', 'section', 'format', 'kicker', 'date', 'desk', 'slides', 'caption', 'alt']) if (data[k] === undefined || data[k] === '' || data[k] === null) E(`missing ${k}`);
  if (data.section && !SECTIONS[data.section]) E(`unknown section "${data.section}"`);
  if (data.format && !FORMATS[data.format]) E(`unknown format "${data.format}"`);
  if (data.kicker && !KICKERS.includes(data.kicker)) E(`unknown kicker "${data.kicker}"`);
  if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))) E('date must be YYYY-MM-DD');
  if (data.section && data.desk && data.desk !== SECTIONS[data.section].desk && data.desk !== 'The Mask') E(`desk must be "${SECTIONS[data.section].desk}" (or "The Mask" for a Hot Take)`);
  if (data.format === 'hottake' && data.desk !== 'The Mask') W('Hot Take is usually signed "The Mask"');

  // headline and dek
  const title = String(data.title || '');
  if (words(title) > 11) E(`headline is ${words(title)} words, maximum 11`);
  if (/\?\s*$/.test(title)) E('headline must not be a question');
  if (/^(here'?s why|everything you need|this brand just|you won'?t believe)/i.test(title)) E('headline uses a banned opener');
  if (words(data.dek) > 25) E(`dek is ${words(data.dek)} words, maximum 25`);
  if (data.dek && title && String(data.dek).trim().toLowerCase() === title.trim().toLowerCase()) E('dek repeats the headline');

  // cover
  const cover = String(data.cover || 'generated');
  if (!(cover === 'generated' || cover.startsWith('photo:'))) E('cover must be "generated" or "photo:<path>"');
  if (cover.startsWith('photo:') && !data.credit) E('photo cover needs a credit line');
  if (cover === 'generated' && !data.coverText) W('generated cover without coverText (the renderer will set the headline)');

  // paid
  const paid = data.paid === true;
  if (paid) {
    if (data.kicker !== 'PAID') E('paid stories carry the PAID kicker');
    if (!data.partner) E('paid stories need partner:');
    if (!/^Paid partnership with /i.test(String(data.caption || '').trim())) E('paid caption must open with "Paid partnership with [Brand]"');
    if (!/#ad\b/i.test(String(data.caption || ''))) E('paid caption must include #ad');
  } else if (data.kicker === 'PAID') E('PAID kicker on a story that is not paid: true');

  // sources
  const sources = Array.isArray(data.sources) ? data.sources : [];
  if (['SPILLED', 'BITTER', 'BREWING'].includes(data.kicker) && sources.length === 0) E(`${data.kicker} stories need at least one source`);
  if (data.format === 'receipts' && sources.length < 2) E('Receipts needs at least two sources');
  for (const s of sources) if (!/https?:\/\//.test(String(s))) W(`source without a URL: ${String(s).slice(0, 60)}`);

  // legal
  const needsLegal = data.kicker === 'BREWING' || data.kicker === 'BITTER' || data.format === 'receipts';
  if (needsLegal) {
    if (data.legal !== 'CLEAR') E('this story needs legal: CLEAR after the 10 point checklist in HOUSE/04');
    if (!data.legalNote) E('legal stories need legalNote: (who ran the checklist, what was checked, right of reply status)');
  }
  if (data.kicker === 'BREWING' && !/asked .* for comment|has asked|we asked/i.test(src)) E('BREWING stories must say who was asked for comment');

  // slides
  const slides = Array.isArray(data.slides) ? data.slides : [];
  const fmt = FORMATS[data.format];
  if (fmt && (slides.length < fmt.slides[0] || slides.length > fmt.slides[1])) E(`${fmt.name} runs ${fmt.slides[0]} to ${fmt.slides[1]} slides, this has ${slides.length}`);
  if (slides.length && slides[0].type !== 'cover') E('first slide must be type: cover');
  if (slides.length && slides[slides.length - 1].type !== 'close') E('last slide must be type: close');
  slides.forEach((s, i) => {
    const n = i + 1;
    if (!s || typeof s !== 'object') { E(`slide ${n} is not a map`); return; }
    if (!SLIDE_TYPES.includes(s.type)) E(`slide ${n}: unknown type "${s.type}"`);
    if (s.type === 'tea') {
      const w = words(s.text);
      if (!s.text) E(`slide ${n} (tea): missing text`);
      else if (w < 20 || w > 60) E(`slide ${n} (tea): ${w} words, must be 20 to 60`);
      if (s.pull && words(s.pull) > 8) E(`slide ${n} (tea): pull over 8 words`);
    }
    if (s.type === 'verdict') { const w = words(s.text); if (!s.text) E(`slide ${n} (verdict): missing text`); else if (w > 45) E(`slide ${n} (verdict): ${w} words, maximum 45`); }
    if (s.type === 'receipt') {
      if (!['quote', 'number', 'compare'].includes(s.kind)) E(`slide ${n} (receipt): kind must be quote, number or compare`);
      if (s.kind === 'quote' && (!s.quote || !s.source)) E(`slide ${n} (receipt quote): needs quote and source`);
      if (s.kind === 'quote' && words(s.quote) > 45) E(`slide ${n} (receipt quote): over 45 words`);
      if (s.kind === 'number' && (!s.number || !s.caption)) E(`slide ${n} (receipt number): needs number and caption`);
      if (s.kind === 'compare' && !(s.leftLabel && s.leftText && s.rightLabel && s.rightText)) E(`slide ${n} (receipt compare): needs leftLabel, leftText, rightLabel, rightText`);
      if (s.kind === 'compare' && (words(s.leftText) > 40 || words(s.rightText) > 40)) E(`slide ${n} (receipt compare): sides over 40 words`);
    }
    if (s.type === 'item') {
      if (!s.name || !s.why || !s.catch) E(`slide ${n} (item): needs name, why and catch`);
      if (words(s.why) > 30) E(`slide ${n} (item): why over 30 words`);
      if (words(s.catch) > 24) E(`slide ${n} (item): catch over 24 words`);
      if (s.paid === true && !paid) E(`slide ${n} (item): paid item in an unpaid story (set paid: true and kicker PAID)`);
    }
    if (s.type === 'cover' && s.title && words(s.title) > 14) E(`slide ${n} (cover): title over 14 words`);
    for (const [k, v] of Object.entries(s)) if (typeof v === 'string' && /!/.test(v)) E(`slide ${n}: exclamation mark in ${k}`);
    for (const [k, v] of Object.entries(s)) if (typeof v === 'string' && EMOJI_RE.test(v)) E(`slide ${n}: emoji in ${k}`);
  });
  const paidItems = slides.filter((s) => s.type === 'item' && s.paid === true).length;
  if (paidItems > 2) E('more than two paid items in one story');

  // alt
  const altLines = String(data.alt || '').split('\n').map((l) => l.trim()).filter(Boolean);
  if (slides.length && altLines.length !== slides.length) E(`alt has ${altLines.length} lines, slides has ${slides.length}; one line per slide`);

  // caption
  const cap = String(data.caption || '').trim();
  const capLines = cap.split('\n').map((l) => l.trim()).filter(Boolean);
  if (capLines.length) {
    if (capLines[0].length > 100) E(`caption hook is ${capLines[0].length} characters, maximum 100`);
    const last = capLines[capLines.length - 1];
    const tags = last.split(/\s+/).filter((t) => t.startsWith('#'));
    if (tags.length < 5 || tags.length > 8 || tags.length !== last.split(/\s+/).length) E('caption must end with a line of 5 to 8 hashtags and nothing else');
    const em = (cap.match(EMOJI_RE) || []).length;
    if (em > 2) E(`caption has ${em} emoji, maximum 2`);
    if (/!/.test(cap)) E('exclamation mark in caption');
  }
  if (data.linkedin) { const li = String(data.linkedin); const t = (li.match(/#\w+/g) || []).length; if (t > 3) E('linkedin text has more than 3 hashtags'); }

  // body
  const bodyWords = words(body.replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.replace(/\([^)]*\)/, '')));
  if (fmt) { const [lo, hi] = fmt.words; if (bodyWords < Math.floor(lo * 0.8)) E(`web body is ${bodyWords} words, ${fmt.name} needs at least ${lo}`); if (bodyWords > Math.ceil(hi * 1.25)) E(`web body is ${bodyWords} words, ${fmt.name} tops out at ${hi}`); }
  if (/!/.test(body.replace(/\]\([^)]*\)/g, ''))) E('exclamation mark in web body');
  if (EMOJI_RE.test(body)) E('emoji in web body');
  if (/^#\s/m.test(body)) E('web body must not use # (h1); use ## and ###');
  if (!/^##\s/m.test(body) && bodyWords > 250) W('web body has no ## headings');
  if (data.format === 'tea' && !/^##\s+The read/mi.test(body)) W('The Tea format usually ends with a "## The read" section');

  // banned words everywhere that is copy
  const copy = [title, data.dek, cap, body, ...slides.flatMap((s) => Object.values(s || {}).filter((v) => typeof v === 'string'))].join('\n');
  BANNED_RE.forEach((re, i) => { if (re.test(copy)) E(`banned word: "${BANNED[i]}"`); });
  for (const f of [title, data.dek]) if (f && EMOJI_RE.test(String(f))) E('emoji in headline or dek');
  if (/!/.test(title + ' ' + (data.dek || ''))) E('exclamation mark in headline or dek');
  if (/\b(amazing|incredible|unbelievable)\b/i.test(title + ' ' + (data.dek || ''))) W('"amazing/incredible/unbelievable" in headline or dek; allowed only when quoting');

  return { errors, warnings, data, body, slug };
}

export function allStoryFiles(root = ROOT) {
  const dir = join(root, 'content', 'stories');
  const out = [];
  const walk = (d) => { let items = []; try { items = readdirSync(d); } catch { return; } for (const f of items) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f.endsWith('.md')) out.push(p); } };
  walk(dir);
  return out.sort();
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const files = process.argv.slice(2).length ? process.argv.slice(2) : allStoryFiles();
  let bad = 0;
  for (const f of files) {
    const r = lintStory(f);
    const rel = f.replace(ROOT + '/', '');
    if (r.errors.length) { bad++; console.log(`FAIL ${rel}`); r.errors.forEach((e) => console.log(`  error: ${e}`)); }
    else console.log(`PASS ${rel}${r.warnings.length ? ` (${r.warnings.length} warning${r.warnings.length > 1 ? 's' : ''})` : ''}`);
    r.warnings.forEach((w) => console.log(`  warn: ${w}`));
  }
  console.log(`${files.length - bad}/${files.length} stories pass`);
  process.exit(bad ? 1 : 0);
}
