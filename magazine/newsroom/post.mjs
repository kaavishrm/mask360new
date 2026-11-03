// Posting: Instagram carousel (Graph API) and LinkedIn document post. Without tokens the post is queued in outbox/ with everything ready.
// Secrets: IG_USER_ID, IG_ACCESS_TOKEN (a System User token from Meta Business Suite does not expire), LINKEDIN_ACCESS_TOKEN, LINKEDIN_AUTHOR_URN (urn:li:organization:ID).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter, stringifyFrontMatter } from './yaml.mjs';
import { site } from '../config.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const POSTED = join(HERE, 'posted.json');
const GRAPH = 'https://graph.facebook.com/v21.0';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const posted = () => (existsSync(POSTED) ? JSON.parse(readFileSync(POSTED, 'utf8')) : {});
const savePosted = (p) => writeFileSync(POSTED, JSON.stringify(p, null, 2));

async function liveUrl(url, tries = 20, waitMs = 30000) {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url, { method: 'HEAD', redirect: 'follow' }); if (r.ok) return true; } catch { /* retry */ }
    await sleep(waitMs);
  }
  return false;
}

async function graph(path, params) {
  const body = new URLSearchParams(params);
  const r = await fetch(`${GRAPH}/${path}`, { method: 'POST', body });
  const j = await r.json();
  if (!r.ok || j.error) throw new Error(`Graph ${path}: ${j.error?.message || r.status}`);
  return j;
}

export async function postInstagram({ slug, caption, slideUrls, alt }) {
  const { IG_USER_ID: uid, IG_ACCESS_TOKEN: tok } = process.env;
  if (!uid || !tok) return null;
  const children = [];
  for (const [i, url] of slideUrls.entries()) {
    const j = await graph(`${uid}/media`, { image_url: url, is_carousel_item: 'true', access_token: tok, ...(alt[i] ? { alt_text: alt[i] } : {}) });
    children.push(j.id);
  }
  const c = await graph(`${uid}/media`, { media_type: 'CAROUSEL', children: children.join(','), caption, access_token: tok });
  // the container needs a moment to be ready
  for (let i = 0; i < 10; i++) {
    const s = await fetch(`${GRAPH}/${c.id}?fields=status_code&access_token=${tok}`).then((r) => r.json());
    if (s.status_code === 'FINISHED') break;
    if (s.status_code === 'ERROR') throw new Error('Instagram container error');
    await sleep(5000);
  }
  const p = await graph(`${uid}/media_publish`, { creation_id: c.id, access_token: tok });
  const perm = await fetch(`${GRAPH}/${p.id}?fields=permalink&access_token=${tok}`).then((r) => r.json()).catch(() => ({}));
  return { id: p.id, url: perm.permalink || null };
}

export async function postLinkedIn({ text, pdfPath, title }) {
  const { LINKEDIN_ACCESS_TOKEN: tok, LINKEDIN_AUTHOR_URN: author } = process.env;
  if (!tok || !author) return null;
  const H = { Authorization: `Bearer ${tok}`, 'LinkedIn-Version': '202411', 'X-Restli-Protocol-Version': '2.0.0', 'Content-Type': 'application/json' };
  const init = await fetch('https://api.linkedin.com/rest/documents?action=initializeUpload', { method: 'POST', headers: H, body: JSON.stringify({ initializeUploadRequest: { owner: author } }) }).then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(`LinkedIn init: ${JSON.stringify(j).slice(0, 200)}`); return j.value; });
  const up = await fetch(init.uploadUrl, { method: 'PUT', headers: { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/pdf' }, body: readFileSync(pdfPath) });
  if (!up.ok) throw new Error(`LinkedIn upload: ${up.status}`);
  const post = await fetch('https://api.linkedin.com/rest/posts', { method: 'POST', headers: H, body: JSON.stringify({ author, commentary: text, visibility: 'PUBLIC', distribution: { feedDistribution: 'MAIN_FEED', targetEntities: [], thirdPartyDistributionChannels: [] }, content: { media: { title, id: init.document } }, lifecycleState: 'PUBLISHED', isReshareDisabledByAuthor: false }) });
  if (!post.ok) throw new Error(`LinkedIn post: ${post.status} ${(await post.text()).slice(0, 200)}`);
  const id = post.headers.get('x-restli-id');
  return { id, url: id ? `https://www.linkedin.com/feed/update/${id}/` : null };
}

/** Post one story by file path. Writes post ids back into the story file (post: block) and posted.json. */
export async function postStory(path) {
  const slug = basename(path, '.md');
  const src = readFileSync(path, 'utf8');
  const { data, body } = parseFrontMatter(src);
  const log = posted();
  if (log[slug]?.ig && log[slug]?.li) return { slug, ig: log[slug].ig, li: log[slug].li };
  const base = site.url.replace(/\/$/, '');
  const n = data.slides.length;
  const slideUrls = Array.from({ length: n }, (_, i) => `${base}/carousels/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);
  const storyUrl = `${base}/${data.section}/${slug}/`;
  const alt = String(data.alt || '').split('\n').filter(Boolean);
  const caption = String(data.caption || '').trim();
  const li = String(data.linkedin || '').trim() + `\n\n${storyUrl}`;
  const pdf = join(ROOT, 'public', 'carousels', slug, 'carousel.pdf');
  const out = { slug };
  const haveIg = process.env.IG_USER_ID && process.env.IG_ACCESS_TOKEN;
  const haveLi = process.env.LINKEDIN_ACCESS_TOKEN && process.env.LINKEDIN_AUTHOR_URN;
  if (!haveIg && !haveLi) {
    const dir = join(HERE, 'outbox'); mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${slug}.md`), `# ${data.title}\n\nStory: ${storyUrl}\nSlides: ${slideUrls.join('\n')}\nPDF: ${pdf}\n\n## Instagram caption\n\n${caption}\n\n## LinkedIn\n\n${li}\n`);
    return { slug, queued: true };
  }
  if (!(await liveUrl(slideUrls[0]))) throw new Error(`slides not live yet at ${slideUrls[0]}`);
  const rec = log[slug] || {};
  if (haveIg && !rec.ig) { const r = await postInstagram({ slug, caption, slideUrls, alt }); if (r) { rec.ig = r.id; rec.igUrl = r.url; out.ig = r.id; } }
  if (haveLi && !rec.li) { try { const r = await postLinkedIn({ text: li, pdfPath: pdf, title: data.title }); if (r) { rec.li = r.id; rec.liUrl = r.url; out.li = r.id; } } catch (e) { rec.liError = e.message; out.liError = e.message; } }
  rec.at = new Date().toISOString();
  log[slug] = rec; savePosted(log);
  if (rec.igUrl || rec.liUrl) {
    data.post = { ...(rec.igUrl ? { ig: rec.igUrl } : {}), ...(rec.liUrl ? { li: rec.liUrl } : {}) };
    writeFileSync(path, stringifyFrontMatter(data, body));
  }
  return out;
}

if (process.argv[1] && process.argv[1].endsWith('post.mjs')) {
  const files = process.argv.slice(2);
  for (const f of files) postStory(f).then((r) => console.log(JSON.stringify(r))).catch((e) => { console.error(e.message); process.exitCode = 1; });
}
