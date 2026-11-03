// Evidence collector: turns a story's sources into media receipts. For every source URL it fetches the page's own image
// (og:image), grabs the YouTube thumbnail and stills when the source is a film, and takes a screenshot of the page itself.
// Files land in public/assets/img/stories/<slug>/ with evidence.json describing each one. Nothing is invented: every
// file is a copy of something at a URL in the story's sources, kept for criticism and review, and credited.
// Usage: node newsroom/evidence.mjs <story.md> [more stories...]   (env EVIDENCE_SCREENSHOTS=0 to skip Playwright)
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, renameSync } from 'node:fs';
import { join, basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { parseFrontMatter } from './yaml.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function sourceUrls(data) {
  return (Array.isArray(data.sources) ? data.sources : []).map((s) => { const m = /(https?:\/\/\S+)/.exec(String(s)); return m ? { url: m[1].replace(/[),.]+$/, ''), note: String(s).replace(m[1], '').replace(/^\s*\(|\)\s*$/g, '').trim() } : null; }).filter(Boolean);
}

async function fetchText(url, ms = 20000) {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), ms);
  try { const r = await fetch(url, { headers: { 'user-agent': UA, accept: 'text/html,*/*' }, signal: ctrl.signal, redirect: 'follow' }); if (!r.ok) return null; return await r.text(); } catch { return null; } finally { clearTimeout(t); }
}
async function fetchBuffer(url, ms = 30000) {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), ms);
  try { const r = await fetch(url, { headers: { 'user-agent': UA }, signal: ctrl.signal, redirect: 'follow' }); if (!r.ok) return null; const ct = r.headers.get('content-type') || ''; if (!/image/.test(ct)) return null; return Buffer.from(await r.arrayBuffer()); } catch { return null; } finally { clearTimeout(t); }
}
const meta = (html, prop) => { const re = new RegExp(`<meta[^>]+(?:property|name)=["']${prop}["'][^>]*content=["']([^"']+)["']`, 'i'); const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["']${prop}["']`, 'i'); const m = re.exec(html) || re2.exec(html); return m ? m[1].replace(/&amp;/g, '&') : ''; };
const titleOf = (html) => { const t = meta(html, 'og:title') || (/<title[^>]*>([^<]*)<\/title>/i.exec(html) || [])[1] || ''; return t.replace(/\s+/g, ' ').trim().slice(0, 140); };
const youtubeId = (url) => { const m = /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/.exec(url); return m ? m[1] : null; };

/** The largest image a page declares: srcset descriptors, width attributes and -WxH filename hints, resolved to absolute URLs. */
function largestImage(html, pageUrl) {
  const cands = [];
  const add = (u, w) => { if (!u || /\.(svg|gif)(\?|$)/i.test(u) || /data:/.test(u)) return; try { cands.push({ url: new URL(u.replace(/&amp;/g, '&'), pageUrl).href, w: w || 0 }); } catch { /* bad url */ } };
  for (const m of html.matchAll(/srcset=["']([^"']+)["']/gi)) for (const part of m[1].split(',')) { const [u, d] = part.trim().split(/\s+/); const w = d && /w$/.test(d) ? parseInt(d) : 0; add(u, w); }
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0]; const src = (/(?:data-src|data-lazy-src|data-original|src)=["']([^"']+)["']/i.exec(tag) || [])[1];
    const w = parseInt((/\bwidth=["']?(\d+)/i.exec(tag) || [])[1] || '0');
    const hint = parseInt((/-(\d{3,4})x\d{3,4}\./.exec(src || '') || [])[1] || '0');
    add(src, Math.max(w, hint));
  }
  cands.sort((a, b) => b.w - a.w);
  return cands.filter((c) => c.w >= 1200).slice(0, 2);
}
const youtubeEmbeds = (html) => Array.from(new Set(Array.from(html.matchAll(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/g)).map((m) => m[1])));

/** YouTube search via yt-dlp (no download): the first result's id, title and uploader. */
function youtubeSearch(query) {
  const r = spawnSync('yt-dlp', [`ytsearch4:${query}`, '--flat-playlist', '--print', '%(id)s\t%(title)s\t%(uploader)s'], { encoding: 'utf8', timeout: 120000 });
  const rows = (r.stdout || '').trim().split('\n').filter(Boolean).map((l) => { const [id, title, uploader] = l.split('\t'); return { id, title: title || '', uploader: uploader || '' }; }).filter((x) => x.id && x.id.length === 11);
  // the brand (first word of the query) must appear in the title or the uploader, else the search is a miss
  const brand = String(query).split(/\s+/)[0].toLowerCase();
  return rows.find((x) => (x.title + ' ' + x.uploader).toLowerCase().includes(brand)) || null;
}

async function youtubeTitle(id) {
  try { const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, { headers: { 'user-agent': UA } }); if (!r.ok) return null; const j = await r.json(); return { title: j.title || '', author: j.author_name || '' }; } catch { return null; }
}

/** Download a film and cut four stills and a 12 second clip. Returns null when YouTube refuses (datacenter IPs often need cookies). */
let ytBlocked = false;
function filmAssets(id, dir, n) {
  if (ytBlocked) return null;
  const tmp = join(dir, `film-${id}.mp4`);
  const args = ['-f', 'bv*[height<=1080][ext=mp4]+ba[ext=m4a]/b[ext=mp4]/b', '--no-playlist', '--quiet', '--no-warnings', '--socket-timeout', '20', '--retries', '1', '-o', tmp, `https://www.youtube.com/watch?v=${id}`];
  if (process.env.YT_COOKIES_FILE) args.push('--cookies', process.env.YT_COOKIES_FILE);
  const dl = spawnSync('yt-dlp', args, { encoding: 'utf8', timeout: 120000 });
  if (dl.status !== 0 || !existsSync(tmp)) {
    if (/sign in to confirm|not a bot|429/i.test(dl.stderr || '')) { ytBlocked = true; console.error('youtube refuses downloads from this address; using thumbnails for the rest of the run'); }
    try { execFileSync('sh', ['-c', `rm -f "${tmp}"* `]); } catch { /* fine */ }
    return null;
  }
  const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', tmp], { encoding: 'utf8' });
  const dur = parseFloat(probe.stdout) || 30;
  const frames = [], times = [];
  [0.12, 0.37, 0.62, 0.87].forEach((k, i) => {
    const t = Math.max(0.5, dur * k); const f = join(dir, `ev-${n + i + 1}.jpg`);
    const r = spawnSync('ffmpeg', ['-y', '-v', 'error', '-ss', String(t), '-i', tmp, '-frames:v', '1', '-q:v', '2', f]);
    if (r.status === 0 && existsSync(f)) { frames.push(f); const mm = Math.floor(t / 60), ss = Math.floor(t % 60); times.push(`${mm}:${String(ss).padStart(2, '0')}`); }
  });
  const clip = join(dir, 'clip.mp4');
  const start = Math.max(0, Math.min(dur * 0.25, dur - 12));
  spawnSync('ffmpeg', ['-y', '-v', 'error', '-ss', String(start), '-i', tmp, '-t', '12', '-vf', "scale=1080:-2,pad=1080:1350:(ow-iw)/2:(oh-ih)/2:color=#0E0D0B", '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', clip]);
  try { execFileSync('rm', ['-f', tmp]); } catch { /* fine */ }
  return { frames, times, clip: existsSync(clip) ? clip : null, dur };
}

function fit(file) {
  // keep up to 2400 wide, JPEG q90, return {w,h}
  const out = spawnSync('python3', ['-I', '-c', `
import sys
from PIL import Image
p=sys.argv[1]; im=Image.open(p); im=im.convert('RGB')
if im.width>2400: im=im.resize((2400,int(im.height*2400/im.width)), Image.LANCZOS)
im.save(p,'JPEG',quality=90,optimize=True); print(im.width, im.height)`, file]);
  if (out.status !== 0) return null;
  const [w, h] = out.stdout.toString().trim().split(' ').map(Number);
  return { w, h };
}

async function screenshot(url, file) {
  if (process.env.EVIDENCE_SCREENSHOTS === '0') return false;
  let pw; try { pw = await import('playwright'); } catch { return false; }
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 2, userAgent: UA, locale: 'en-IN' });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(2500);
    // dismiss the most common cookie and consent bars
    for (const sel of ['button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("I agree")', 'button:has-text("Got it")', '[aria-label="Close"]']) { try { const b = page.locator(sel).first(); if (await b.isVisible({ timeout: 500 })) await b.click({ timeout: 1000 }); } catch { /* none */ } }
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1280, height: 1000 } });
    await ctx.close();
    return true;
  } catch { return false; } finally { await browser.close(); }
}

export async function collect(storyPath, { max = 6 } = {}) {
  const slug = basename(storyPath, '.md');
  const { data } = parseFrontMatter(readFileSync(storyPath, 'utf8'));
  const dir = join(ROOT, 'public', 'assets', 'img', 'stories', slug);
  mkdirSync(dir, { recursive: true });
  const manifestPath = join(dir, 'evidence.json');
  const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : [];
  const have = new Set(manifest.map((m) => m.source + '|' + m.kind));
  let n = manifest.length;
  const rel = (f) => `assets/img/stories/${slug}/${basename(f)}`;
  const add = (entry) => { manifest.push(entry); have.add(entry.source + '|' + entry.kind); n++; };
  const haveYt = (id) => manifest.some((m) => m.youtube === id);
  const brandWords = [...(Array.isArray(data.tags) ? data.tags.map(String) : []), String(data.title || '').split(/\s+/)[0] || ''].map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, '')).filter((w) => w.length >= 4);
  const film = async (id, note, why, fromEmbed = false) => {
    if (haveYt(id)) return;
    const info = await youtubeTitle(id);
    if (info) why = `${info.title}${info.author ? `, ${info.author}` : ''}`.slice(0, 120);
    if (fromEmbed) {
      const hay = `${info?.title || ''} ${info?.author || ''}`.toLowerCase().replace(/[^a-z0-9 ]/g, '');
      if (!info || !brandWords.some((w) => hay.includes(w))) return; // an unrelated video on the page
    }
    let got = null;
    try { got = filmAssets(id, dir, n); } catch { got = null; }
    if (got && got.frames.length) {
      got.frames.forEach((f, i) => { const sz = fit(f); if (sz) add({ file: rel(f), kind: 'frame', source: `https://www.youtube.com/watch?v=${id}`, note, title: why, domain: 'youtube.com', credit: `Still: YouTube, ${note || why}, ${got.times[i]}`, time: got.times[i], youtube: id, ...sz }); });
      if (got.clip) manifest.push({ file: rel(got.clip), kind: 'clip', source: `https://www.youtube.com/watch?v=${id}`, note, title: why, domain: 'youtube.com', credit: `Clip: YouTube, ${note || why}`, youtube: id, w: 1080, h: 1350, seconds: 12 });
      return;
    }
    for (const q of ['maxresdefault', 'sddefault', 'hqdefault']) {
      const buf = await fetchBuffer(`https://img.youtube.com/vi/${id}/${q}.jpg`);
      if (buf && buf.length > 5000) { const f = join(dir, `ev-${n + 1}.jpg`); writeFileSync(f, buf); const sz = fit(f); if (sz && sz.w >= 600) add({ file: rel(f), kind: 'thumbnail', source: `https://www.youtube.com/watch?v=${id}`, note, title: why, domain: 'youtube.com', credit: `Still: YouTube, ${note || why}`, youtube: id, ...sz }); break; }
    }
  };
  // a story may name its film: film: <YouTube URL or a search query>
  if (data.film) {
    const id = youtubeId(String(data.film)) || (youtubeSearch(String(data.film)) || {}).id;
    if (id) await film(id, String(data.film), 'the film');
  }
  for (const { url, note } of sourceUrls(data)) {
    if (n >= max) break;
    const domain = url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
    const yt = youtubeId(url);
    if (yt) { await film(yt, note, 'the film'); if (n >= max) break; continue; }
    const html = await fetchText(url);
    if (html) {
      const title = titleOf(html);
      // the page's own image, then the largest image the page declares, keep whichever is bigger
      let best = null;
      const og = meta(html, 'og:image') || meta(html, 'twitter:image');
      let cand = 0;
      const tryImg = async (abs) => { const buf = await fetchBuffer(abs); if (!buf || buf.length < 8000) return; const f = join(dir, `cand-${n + 1}-${++cand}.jpg`); writeFileSync(f, buf); const sz = fit(f); if (!sz || sz.w < 600) { try { execFileSync('rm', ['-f', f]); } catch { /* fine */ } return; } if (!best || sz.w * sz.h > best.w * best.h * 1.3) { if (best) { try { execFileSync('rm', ['-f', best.f]); } catch { /* fine */ } } best = { f, ...sz }; } else { try { execFileSync('rm', ['-f', f]); } catch { /* fine */ } } };
      if (og && !have.has(url + '|image')) {
        await tryImg(og.startsWith('http') ? og : new URL(og, url).href);
        for (const c of largestImage(html, url)) await tryImg(c.url);
        if (best) { const f = join(dir, `ev-${n + 1}.jpg`); renameSync(best.f, f); add({ file: rel(f), kind: 'image', source: url, note, title, domain, credit: `Image: ${domain}, ${note || title}`, w: best.w, h: best.h }); }
      }
      // films embedded on the page
      for (const id of youtubeEmbeds(html).slice(0, 2)) { if (n >= max) break; await film(id, note || title, title, true); }
      if (n >= max) break;
    }
    if (!have.has(url + '|screenshot')) {
      const f = join(dir, `ev-${n + 1}.jpg`);
      const png = f.replace(/\.jpg$/, '.png');
      if (await screenshot(url, png)) {
        const conv = spawnSync('python3', ['-I', '-c', `from PIL import Image; import sys; Image.open(sys.argv[1]).convert('RGB').save(sys.argv[2],'JPEG',quality=82,optimize=True)`, png, f]);
        try { execFileSync('rm', ['-f', png]); } catch { /* fine */ }
        if (conv.status === 0) { const s = fit(f); if (s) add({ file: rel(f), kind: 'screenshot', source: url, note, title: html ? titleOf(html) : domain, domain, credit: `Screenshot: ${domain}, ${note || ''}`.replace(/, $/, ''), ...s }); }
      }
    }
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  return manifest;
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const files = process.argv.slice(2);
  if (!files.length) { console.error('usage: node newsroom/evidence.mjs <story.md> ...'); process.exit(2); }
  for (const f of files) {
    const m = await collect(resolve(f));
    console.log(`${basename(f, '.md')}: ${m.length} evidence files (${m.map((x) => x.kind).join(', ')})`);
  }
}
