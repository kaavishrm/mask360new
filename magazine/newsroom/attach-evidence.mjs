// Attach media receipts to a story from its evidence.json: inserts up to two "receipt image" slides (the actual post,
// article, still or release) after the first tea slide, with caption and credit, and keeps alt in step.
// The art desk refines the choice; this makes sure no story ships without a visual receipt.
// Usage: node newsroom/attach-evidence.mjs <story.md> ... [--max 2] [--force]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter, stringifyFrontMatter } from './yaml.mjs';
import { fixAlt } from './alt.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

export function attach(storyPath, { max = 2, force = false } = {}) {
  const slug = basename(storyPath, '.md');
  const src = readFileSync(storyPath, 'utf8');
  const { data, body } = parseFrontMatter(src);
  const manifestPath = join(ROOT, 'public', 'assets', 'img', 'stories', slug, 'evidence.json');
  if (!existsSync(manifestPath)) return { slug, attached: 0, reason: 'no evidence.json' };
  const ev = JSON.parse(readFileSync(manifestPath, 'utf8')).filter((e) => e.w >= 600);
  // item slides (The Edit, The Guest List, Moves): give each item the evidence image whose page title names it
  let itemImages = 0;
  for (const sl of data.slides || []) {
    if (sl.type !== 'item' || sl.image) continue;
    const key = String(sl.name || '').split(/[,:]/)[0].trim().split(/\s+/).filter((w) => w.length >= 4)[0];
    if (!key) continue;
    const re = new RegExp(`\\b${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const hit = ev.find((e) => re.test(String(e.title || '')) && e.kind !== 'screenshot');
    if (hit) { sl.image = hit.file; itemImages++; }
  }
  const hasImage = (data.slides || []).some((s) => s.type === 'receipt' && (s.kind === 'image' || s.kind === 'frames'));
  if (hasImage && !force) { if (itemImages) { writeFileSync(storyPath, stringifyFrontMatter(data, body)); } return { slug, attached: 0, itemImages, reason: 'already has a media receipt' }; }
  // rank: film stills first, then the page's own image in the order the writer listed the sources (primary sources come
  // first), then screenshots; one per source; reference sites that never show the thing itself are skipped
  const rank = { frame: 0, thumbnail: 0, image: 1, screenshot: 2, clip: 9 };
  const skipDomains = /wikipedia\.org|wikimedia\.org|linkedin\.com\/company|crunchbase\.com|facebook\.com\/pages/;
  const order = (Array.isArray(data.sources) ? data.sources : []).map((s) => String(s));
  const idx = (e) => { const i = order.findIndex((s) => s.includes(e.source)); return i < 0 ? 99 : i; };
  const seen = new Set();
  const clip = ev.find((e) => e.kind === 'clip');
  const frames = ev.filter((e) => e.kind === 'frame').slice(0, 4);
  const picks = ev.filter((e) => !skipDomains.test(e.source) && e.kind !== 'clip' && e.kind !== 'frame').sort((a, b) => (rank[a.kind] ?? 5) - (rank[b.kind] ?? 5) || idx(a) - idx(b) || b.w * b.h - a.w * a.h).filter((e) => { if (seen.has(e.source)) return false; seen.add(e.source); return true; }).slice(0, frames.length >= 2 ? Math.max(1, max - 1) : max);
  if (!picks.length && frames.length < 2) return { slug, attached: 0, reason: 'no usable evidence' };
  if (clip) data.clip = clip.file;
  const removed = force ? data.slides.map((s, i) => (s.type === 'receipt' && (s.kind === 'image' || s.kind === 'frames') ? i : -1)).filter((i) => i >= 0) : [];
  const slides = data.slides.filter((s, i) => !removed.includes(i));
  const alt = String(data.alt || '').split('\n').filter(Boolean).filter((l, i) => !(removed.includes(i) && /^Receipt slide,/.test(l)));
  const clean = (t) => String(t || '').replace(/\p{Extended_Pictographic}/gu, '').replace(/[\u2013\u2014]/g, ',').replace(/!/g, '.').replace(/\s+/g, ' ').trim();
  // insert after the first tea or item slide; keep the close last
  let at = slides.findIndex((s) => s.type === 'tea' || s.type === 'item');
  at = at < 0 ? 1 : at + 1;
  let inserted = 0;
  if (frames.length >= 2) {
    slides.splice(at, 0, { type: 'receipt', kind: 'frames', frames: frames.map((f) => f.file), times: frames.map((f) => f.time || ''), caption: clean(`Four frames from the film, in order. ${frames[0].title || ''}`).split(' ').slice(0, 28).join(' '), credit: clean(`Stills: YouTube, ${frames[0].title || frames[0].note || ''}`), source: frames[0].source });
    alt.splice(at, 0, 'Receipt slide, four stills from the film with timestamps');
    inserted = 1;
  }
  picks.forEach((e, i) => {
    const caption = clean(e.kind === 'thumbnail' ? `The film, as published. ${e.title || e.note || ''}` : e.kind === 'screenshot' ? `${e.title || e.domain}, as published. ${e.note || ''}` : `${e.title || e.domain}. ${e.note || ''}`);
    slides.splice(at + inserted + i, 0, { type: 'receipt', kind: 'image', image: e.file, caption: caption.split(' ').slice(0, 28).join(' ').slice(0, 160), credit: clean(e.credit), source: e.source });
    alt.splice(at + inserted + i, 0, `Receipt slide, ${e.kind === 'thumbnail' ? 'a still from the film' : e.kind === 'screenshot' ? 'a screenshot of ' + e.domain : 'an image from ' + e.domain}`);
  });
  data.slides = slides;
  data.alt = alt.join('\n') + '\n';
  writeFileSync(storyPath, stringifyFrontMatter(data, body));
  fixAlt(storyPath); // regenerate alt if the writer's lines no longer match the slides
  return { slug, attached: picks.length, itemImages, picks: picks.map((p) => `${p.kind} ${p.domain}`) };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const max = args.includes('--max') ? Number(args[args.indexOf('--max') + 1]) : 2;
  const force = args.includes('--force');
  const files = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--max');
  for (const f of files) console.log(JSON.stringify(attach(resolve(f), { max, force })));
}
