// Evidence collector: turns a story's sources into media receipts. For every source URL it fetches the page's own image
// (og:image), grabs the YouTube thumbnail and stills when the source is a film, and takes a screenshot of the page itself.
// Files land in public/assets/img/stories/<slug>/ with evidence.json describing each one. Nothing is invented: every
// file is a copy of something at a URL in the story's sources, kept for criticism and review, and credited.
// Usage: node newsroom/evidence.mjs <story.md> [more stories...]   (env EVIDENCE_SCREENSHOTS=0 to skip Playwright)
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
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

function fit(file) {
  // resize to max 1400 wide, JPEG q82, return {w,h}
  const out = spawnSync('python3', ['-I', '-c', `
import sys
from PIL import Image
p=sys.argv[1]; im=Image.open(p); im=im.convert('RGB')
if im.width>1400: im=im.resize((1400,int(im.height*1400/im.width)), Image.LANCZOS)
im.save(p,'JPEG',quality=82,optimize=True); print(im.width, im.height)`, file]);
  if (out.status !== 0) return null;
  const [w, h] = out.stdout.toString().trim().split(' ').map(Number);
  return { w, h };
}

async function screenshot(url, file) {
  if (process.env.EVIDENCE_SCREENSHOTS === '0') return false;
  let pw; try { pw = await import('playwright'); } catch { return false; }
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1, userAgent: UA, locale: 'en-IN' });
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
  for (const { url, note } of sourceUrls(data)) {
    if (n >= max) break;
    const domain = url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
    const yt = youtubeId(url);
    if (yt && !have.has(url + '|thumbnail')) {
      for (const q of ['maxresdefault', 'sddefault', 'hqdefault']) {
        const buf = await fetchBuffer(`https://img.youtube.com/vi/${yt}/${q}.jpg`);
        if (buf && buf.length > 5000) { const f = join(dir, `ev-${n + 1}.jpg`); writeFileSync(f, buf); const s = fit(f); if (s) add({ file: rel(f), kind: 'thumbnail', source: url, note, title: 'YouTube', domain: 'youtube.com', credit: `Still: YouTube, ${note || url}`, ...s }); break; }
      }
      if (n >= max) break;
      continue;
    }
    const html = await fetchText(url);
    if (html) {
      const og = meta(html, 'og:image') || meta(html, 'twitter:image');
      const title = titleOf(html);
      if (og && !have.has(url + '|image')) {
        const abs = og.startsWith('http') ? og : new URL(og, url).href;
        const buf = await fetchBuffer(abs);
        if (buf && buf.length > 8000) { const f = join(dir, `ev-${n + 1}.jpg`); writeFileSync(f, buf); const s = fit(f); if (s && s.w >= 600) add({ file: rel(f), kind: 'image', source: url, note, title, domain, credit: `Image: ${domain}, ${note || title}`, ...s }); }
      }
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
