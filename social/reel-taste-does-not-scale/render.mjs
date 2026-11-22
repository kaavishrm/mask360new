// Renders the reel to PNG frames with headless Chromium.
//   node render.mjs                 all 720 frames
//   node render.mjs --stills 0,60   only these frames, into .cache/stills (for checking layouts)
//   node render.mjs --from 336 --to 384
// Frames that the timeline marks for motion blur are shot several times inside the frame
// and averaged by blend.py afterwards.
import { createServer } from 'node:http';
import { readFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(join(process.env.NODE_PATH || '/opt/node22/lib/node_modules', 'playwright'))); }

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');                       // repo root, so the page can read website/public/assets
const CACHE = process.env.REEL_CACHE || join(HERE, '.cache');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > -1 ? process.argv[i + 1] : d; };
const flag = k => process.argv.includes('--' + k);

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const cachePrefix = '/social/reel-taste-does-not-scale/.cache/';
    const file = p.startsWith(cachePrefix) ? join(CACHE, p.slice(cachePrefix.length)) : join(ROOT, p);
    if (!file.startsWith(ROOT) && !file.startsWith(CACHE)) { res.writeHead(403).end(); return; }
    const buf = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream', 'cache-control': 'max-age=3600' }).end(buf);
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/social/reel-taste-does-not-scale/src/index.html`;

const stills = arg('stills');
const guides = flag('guides');
const SHUTTER = 0.6;
const WORKERS = Number(arg('workers', stills ? 2 : 4));
const outDir = stills ? join(CACHE, 'stills') : join(CACHE, 'frames');
const subDir = join(CACHE, 'sub');
await mkdir(outDir, { recursive: true }); await mkdir(subDir, { recursive: true });

const browser = await chromium.launch({ args: ['--font-render-hinting=none', '--disable-lcd-text', '--force-color-profile=srgb'] });
async function open() {
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('pageerror', e => { console.error('PAGE ERROR', e.message); process.exitCode = 1; });
  page.on('console', m => { if (m.type() === 'error') console.error('console:', m.text()); });
  await page.goto(base + (guides ? '?guides=1' : ''));
  await page.evaluate(() => window.ready);
  return page;
}
const first = await open();
const meta = await first.evaluate(() => window.META);
// --rects "<css selector>" with --stills <frame>: print where matching elements sit (layout checks)
if (arg('rects')) {
  const f = Number((stills || '0').split(',')[0]);
  await first.evaluate(x => window.seek(x), f);
  const out = await first.evaluate(sel => [...document.querySelectorAll(sel)].filter(e => e.offsetParent !== null).map(e => { const r = e.getBoundingClientRect(); return `${Math.round(r.left)},${Math.round(r.top)} -> ${Math.round(r.right)},${Math.round(r.bottom)}  ${(e.textContent || '').trim().slice(0, 40)}`; }), arg('rects'));
  console.log(out.join('\n')); await browser.close(); server.close(); process.exit(0);
}
let frames;
if (stills) frames = stills.split(',').map(Number);
else { const a = Number(arg('from', 0)), b = Number(arg('to', meta.TOTAL)); frames = Array.from({ length: b - a }, (_, i) => a + i); }

const name = f => String(f).padStart(5, '0');
const clip = { x: 0, y: 0, width: 1080, height: 1920 };
let done = 0; const t0 = Date.now();
async function work(page, list) {
  for (const f of list) {
    const n = stills && !flag('blur') ? 1 : await page.evaluate(x => window.samples(x), f);
    if (n === 1) {
      await page.evaluate(x => window.seek(x), f);
      await page.screenshot({ path: join(outDir, name(f) + '.png'), clip });
    } else {
      for (let i = 0; i < n; i++) {
        await page.evaluate(x => window.seek(x), f + (i / n) * SHUTTER);
        await page.screenshot({ path: join(subDir, `${name(f)}_${i}.png`), clip });
      }
    }
    if (++done % 48 === 0) console.log(`${done}/${frames.length} frames, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
}
const pages = [first]; for (let i = 1; i < Math.min(WORKERS, frames.length); i++) pages.push(await open());
const buckets = pages.map(() => []); frames.forEach((f, i) => buckets[i % pages.length].push(f));
await Promise.all(pages.map((p, i) => work(p, buckets[i])));
console.log(`rendered ${frames.length} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s -> ${outDir}`);
await browser.close(); server.close();
