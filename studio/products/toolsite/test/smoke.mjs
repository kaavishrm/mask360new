// Serves public/ on a local port and exercises every tool page with Playwright.
import http from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const { chromium, devices } = createRequire(import.meta.url)('playwright');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const shots = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'shots');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(root, p);
  try { await stat(file); res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' }); res.end(await readFile(file)); }
  catch { res.writeHead(404); res.end('nf'); }
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;
await mkdir(shots, { recursive: true });

const checks = [
  ['/', async (p) => { const n = await p.locator('.card').count(); if (n < 13) throw new Error('home cards ' + n); }],
  ['/income-tax-calculator/', async (p) => { const t = await p.locator('#out .stat b').first().innerText(); if (!t.startsWith('₹')) throw new Error(t); const rows = await p.locator('#out table tr').count(); if (rows < 8) throw new Error('rows ' + rows); return t; }],
  ['/gst-calculator/', async (p) => { await p.fill('input[name=amt]', '11800'); await p.click('label[for=m2]'); const t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹11,800.00') throw new Error(t); const base = await p.locator('#out .stat b').first().innerText(); if (base !== '₹10,000.00') throw new Error(base); return base + ' / ' + t; }],
  ['/emi-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹26,035') throw new Error(t); return t; }],
  ['/sip-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (!/^₹5\d,\d\d,\d\d\d$/.test(t)) throw new Error(t); return t; }],
  ['/fd-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (!/^₹6,1\d,\d\d\d$/.test(t)) throw new Error(t); return t; }],
  ['/ppf-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (!/^₹40,\d\d,\d\d\d$/.test(t)) throw new Error(t); return t; }],
  ['/gratuity-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹2,42,308') throw new Error(t); return t; }],
  ['/hra-calculator/', async (p) => { const t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹1,56,000') throw new Error(t); return t; }],
  ['/rent-receipt-generator/', async (p) => { await p.fill('input[name=tenant]', 'Rahul Sharma'); await p.fill('input[name=landlord]', 'Sunita Verma'); await p.click('#go'); const n = await p.locator('.receipt').count(); if (n !== 12) throw new Error('receipts ' + n); const w = await p.locator('.receipt').first().innerText(); if (!w.includes('Eighteen Thousand')) throw new Error(w.slice(0, 200)); return n + ' receipts'; }],
  ['/salary-slip-generator/', async (p) => { const w = await p.locator('#sheet').innerText(); if (!w.includes('₹66,800.00')) throw new Error(w.slice(0, 300)); return 'net 66,800'; }],
  ['/gst-invoice-generator/', async (p) => { let w = await p.locator('#sheet').innerText(); if (!w.includes('₹29,500.00') || !w.includes('CGST')) throw new Error(w.slice(0, 300)); await p.selectOption('#pos', '07'); w = await p.locator('#sheet').innerText(); if (!w.includes('IGST') || !w.includes('₹4,500.00')) throw new Error(w.slice(0, 300)); return 'intra + inter ok'; }],
  ['/in-hand-salary-calculator/', async (p) => { let t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹90,200') throw new Error('MH full ' + t); await p.selectOption('select[name=state]', 'NONE'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹90,400') throw new Error('no PT ' + t); await p.selectOption('select[name=pf]', 'cap'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹94,000') throw new Error('cap ' + t); await p.fill('input[name=ctc]', '2400000'); await p.selectOption('select[name=pf]', 'full'); await p.selectOption('select[name=state]', 'KA'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹1,58,721') throw new Error('24L KA ' + t); return 'MH 90,200 / none 90,400 / cap 94,000 / 24L 1,58,721'; }],
  ['/tds-on-salary-calculator/', async (p) => { let t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹8,125') throw new Error('base ' + t); await p.fill('input[name=done]', '20000'); await p.fill('input[name=months]', '10'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹7,750') throw new Error('mid-year ' + t); await p.selectOption('select[name=regime]', 'old'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹18,982') throw new Error('old ' + t); return 'new 8,125 / mid-year 7,750 / old 18,982'; }],
  ['/about/', async () => 'ok'], ['/privacy/', async () => 'ok'], ['/terms/', async () => 'ok'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
let failed = 0;
for (const [url, fn] of checks) {
  try {
    const r = await page.goto(base + url);
    if (r.status() !== 200) throw new Error('status ' + r.status());
    const out = await fn(page);
    await page.screenshot({ path: path.join(shots, url.replace(/\//g, '_') || '_home') + '.png' });
    console.log('PASS', url, out || '');
  } catch (e) { failed++; console.log('FAIL', url, e.message); }
}
// Mobile pass on two pages
const mob = await browser.newContext({ ...devices['iPhone 13'] });
const mp = await mob.newPage();
await mp.goto(base + '/gst-invoice-generator/');
const overflow = await mp.evaluate(() => { const w = document.documentElement.clientWidth; const bad = [...document.querySelectorAll('body *')].filter((el) => el.getBoundingClientRect().right > w + 1).map((el) => el.tagName + '.' + el.className).slice(0, 5); return document.documentElement.scrollWidth > w + 1 ? bad : null; });
if (overflow) { failed++; console.log('FAIL mobile overflow on invoice page', overflow); } else console.log('PASS mobile no horizontal overflow');
await mp.goto(base + '/in-hand-salary-calculator/');
const overflow2 = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
if (overflow2) { failed++; console.log('FAIL mobile overflow on in-hand salary page'); } else console.log('PASS mobile no horizontal overflow on in-hand salary page');
await mp.screenshot({ path: path.join(shots, '_mobile_inhand.png'), fullPage: false });
await mp.goto(base + '/rent-receipt-generator/'); await mp.fill('input[name=tenant]', 'A'); await mp.fill('input[name=landlord]', 'B'); await mp.click('#go');
await mp.emulateMedia({ media: 'print' });
const printOk = await mp.evaluate(() => getComputedStyle(document.querySelector('.nav')).display === 'none' && getComputedStyle(document.querySelector('#sheet')).display !== 'none' && document.querySelectorAll('.receipt').length === 12);
if (!printOk) { failed++; console.log('FAIL print stylesheet'); } else console.log('PASS print stylesheet hides chrome and keeps receipts');
await mp.emulateMedia({ media: 'screen' });
await mp.screenshot({ path: path.join(shots, '_mobile_invoice.png'), fullPage: false });
await mp.goto(base + '/');
await mp.screenshot({ path: path.join(shots, '_mobile_home.png'), fullPage: false });
await browser.close(); server.close();
if (errors.length) { console.log('Console/page errors:', errors); failed++; }
console.log(failed ? `${failed} failure(s)` : 'All checks passed');
process.exit(failed ? 1 : 0);
