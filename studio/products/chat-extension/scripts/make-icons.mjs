// Renders the extension icons from an inline SVG. Run once: node scripts/make-icons.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'icons');
const svg = (s) => `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 128 128"><rect width="128" height="128" rx="28" fill="#0f5132"/><rect x="24" y="34" width="80" height="12" rx="6" fill="#fff"/><rect x="24" y="58" width="80" height="12" rx="6" fill="#fff" opacity=".85"/><rect x="24" y="82" width="52" height="12" rx="6" fill="#fff" opacity=".7"/></svg>`;
const browser = await chromium.launch();
for (const s of [16, 48, 128]) {
  const page = await browser.newPage({ viewport: { width: s, height: s }, deviceScaleFactor: 1 });
  await page.setContent(`<body style="margin:0;background:transparent">${svg(s)}</body>`);
  await page.screenshot({ path: path.join(out, s + '.png'), omitBackground: true, clip: { x: 0, y: 0, width: s, height: s } });
}
await browser.close();
console.log('icons written to', out);
