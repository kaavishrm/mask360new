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
  ['/', async (p) => { const n = await p.locator('.card').count(); if (n < 20) throw new Error('home cards ' + n); }],
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
  ['/income-tax-calculator-fy-2025-26/', async (p) => { const late = () => p.locator('#late b').innerText(); let t = await late(); if (t !== '₹5,000') throw new Error('default ' + t); await p.fill('input[name=salary]', '1500000'); t = await late(); if (t !== '₹8,900') throw new Error('15L 4 months ' + t); const b = await p.locator('#out .stat.best b').innerText(); if (b !== '₹97,500') throw new Error('best ' + b); await p.fill('input[name=filed]', '2026-12-01'); t = await late(); if (t !== '₹9,875') throw new Error('5 months ' + t); await p.fill('input[name=paid]', '97500'); t = await late(); if (t !== '₹5,000') throw new Error('paid ' + t); await p.fill('input[name=filed]', '2026-07-15'); t = await late(); if (t !== '₹0') throw new Error('on time ' + t); const old = await p.locator('#out .stat').nth(1).innerText(); if (old.includes('not available')) throw new Error('old regime should be open on time'); return 'fee 5,000 / 4 months 8,900 / 5 months 9,875 / paid 5,000 / on time 0'; }],
  ['/capital-gains-calculator-shares/', async (p) => { const tax = () => p.locator('#tax b').innerText(); let t = await tax(); if (t !== '₹0') throw new Error('default ' + t); await p.fill('input[name=sprice]', '3500'); t = await tax(); if (t !== '₹16,250') throw new Error('LT 2.5L ' + t); await p.fill('input[name=sdate]', '2025-03-01'); t = await tax(); if (t !== '₹52,000') throw new Error('ST ' + t); await p.fill('input[name=other]', '200000'); t = await tax(); if (t !== '₹10,400') throw new Error('shortfall ' + t); await p.fill('input[name=other]', '1200000'); await p.fill('input[name=bdate]', '2015-01-01'); await p.fill('input[name=sdate]', '2026-10-10'); await p.fill('input[name=bprice]', '100'); await p.fill('input[name=fmv]', '400'); await p.fill('input[name=sprice]', '700'); const g = await p.locator('#out .stat b').first().innerText(); if (g !== '₹30,000') throw new Error('grandfathered gain ' + g); t = await tax(); if (t !== '₹0') throw new Error('grandfathered tax ' + t); await p.fill('input[name=prevl]', '125000'); t = await tax(); if (t !== '₹3,900') throw new Error('exemption used ' + t); return 'LT 0 / 16,250 / ST 52,000 / shortfall 10,400 / grandfathered 30,000 gain, 0 then 3,900'; }],
  ['/epf-calculator/', async (p) => { let t = await p.locator('#out .stat.best b').innerText(); if (!/^₹\d,\d\d,\d\d,\d\d\d$/.test(t)) throw new Error('default ' + t); await p.fill('input[name=age]', '55'); await p.fill('input[name=g]', '0'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹3,04,651') throw new Error('3 years ' + t); const rows = await p.locator('#out table tbody tr').count(); if (rows !== 3) throw new Error('rows ' + rows); const r1 = await p.locator('#out table tbody tr').first().innerText(); if (!r1.includes('₹2,717') || !r1.includes('₹2,083')) throw new Error(r1); await p.selectOption('select[name=base]', 'cap'); t = await p.locator('#out .stat.best b').innerText(); if (t !== '₹2,31,700') throw new Error('capped ' + t); let pen = await p.locator('#out .stat').nth(3).innerText(); if (!pen.startsWith('₹0')) throw new Error('pension under 10 years ' + pen.slice(0, 20)); await p.fill('input[name=past]', '20'); pen = await p.locator('#out .stat').nth(3).innerText(); if (!pen.startsWith('₹8,929')) throw new Error('pension 23y + 2 ' + pen.slice(0, 20)); await p.fill('input[name=ret]', '57'); pen = await p.locator('#out .stat').nth(3).innerText(); if (!pen.startsWith('₹7,857')) throw new Error('no weightage before 58 ' + pen.slice(0, 20)); return '3y full 3,04,651 / capped 2,31,700 / pension 0, 8,929, 7,857'; }],
  ['/nps-calculator/', async (p) => { let t = await p.locator('#out .stat.best b').innerText(); if (!/^₹1,1\d,\d\d,\d\d\d$/.test(t)) throw new Error('default ' + t); await p.fill('input[name=age]', '58'); t = await p.locator('#out .stat.best b').innerText(); if (!/^₹1,33,33[67]$/.test(t)) throw new Error('2 years ' + t); const pen = await p.locator('#out .stat').nth(3).innerText(); if (!pen.startsWith('₹267')) throw new Error('pension ' + pen.slice(0, 20)); return '2y 1,33,33x / pension 267'; }],
  ['/bill-of-supply-generator/', async (p) => { let w = await p.locator('#sheet').innerText(); if (!w.includes('Bill of Supply') || !w.includes('not eligible to collect tax on supplies') || !w.includes('₹25,000.00') || w.includes('CGST')) throw new Error(w.slice(0, 300)); await p.selectOption('select[name=reason]', 'unreg'); w = await p.locator('#sheet').innerText(); if (!w.includes('not registered under GST')) throw new Error(w.slice(0, 200)); return 'composition + unregistered ok'; }],
  ['/quotation-generator/', async (p) => { let w = await p.locator('#sheet').innerText(); if (!w.includes('Quotation') || !w.includes('₹29,500.00') || !w.includes('CGST') || !w.includes('not a tax invoice')) throw new Error(w.slice(0, 300)); await p.selectOption('#pos', '07'); w = await p.locator('#sheet').innerText(); if (!w.includes('IGST') || !w.includes('₹4,500.00')) throw new Error(w.slice(0, 300)); return 'intra + inter ok'; }],
  ['/delivery-challan-generator/', async (p) => { let w = await p.locator('#sheet').innerText(); if (!w.includes('Delivery Challan') || !w.includes('ORIGINAL FOR CONSIGNEE') || !w.includes('₹25,000.00') || w.includes('CGST') || w.includes('IGST')) throw new Error(w.slice(0, 300)); await p.selectOption('select[name=purpose]', 'supply'); await p.selectOption('#pos', '27'); await p.selectOption('select[name=copy]', 'DUPLICATE FOR TRANSPORTER'); w = await p.locator('#sheet').innerText(); if (!w.includes('IGST') || !w.includes('₹4,500.00') || !w.includes('DUPLICATE FOR TRANSPORTER') || !w.includes('₹29,500.00')) throw new Error(w.slice(0, 400)); return 'job work + supply ok'; }],
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
await mp.goto(base + '/delivery-challan-generator/');
const overflow3 = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
if (overflow3) { failed++; console.log('FAIL mobile overflow on delivery challan page'); } else console.log('PASS mobile no horizontal overflow on delivery challan page');
await mp.goto(base + '/in-hand-salary-calculator/');
const overflow2 = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
if (overflow2) { failed++; console.log('FAIL mobile overflow on in-hand salary page'); } else console.log('PASS mobile no horizontal overflow on in-hand salary page');
await mp.screenshot({ path: path.join(shots, '_mobile_inhand.png'), fullPage: false });
await mp.goto(base + '/rent-receipt-generator/'); await mp.fill('input[name=tenant]', 'A'); await mp.fill('input[name=landlord]', 'B'); await mp.click('#go');
await mp.emulateMedia({ media: 'print' });
// A hidden ancestor leaves an element with no client rects, so this catches the sheet being inside a hidden form.
const printOk = await mp.evaluate(() => { const visible = (sel) => document.querySelector(sel).getClientRects().length > 0; return !visible('.nav') && !visible('h1') && visible('#sheet') && visible('.receipt') && document.querySelectorAll('.receipt').length === 12; });
if (!printOk) { failed++; console.log('FAIL print stylesheet'); } else console.log('PASS print stylesheet hides chrome and keeps receipts');
await mp.emulateMedia({ media: 'screen' });
await mp.goto(base + '/delivery-challan-generator/'); await mp.emulateMedia({ media: 'print' });
const challanPrint = await mp.evaluate(() => { const visible = (sel) => document.querySelector(sel).getClientRects().length > 0; return !visible('#items') && !visible('.nav') && visible('#sheet') && visible('#sheet table'); });
if (!challanPrint) { failed++; console.log('FAIL print view of the delivery challan'); } else console.log('PASS print view hides the challan form and shows the sheet');
await mp.emulateMedia({ media: 'screen' });
await mp.screenshot({ path: path.join(shots, '_mobile_invoice.png'), fullPage: false });
await mp.goto(base + '/');
await mp.screenshot({ path: path.join(shots, '_mobile_home.png'), fullPage: false });
await browser.close(); server.close();
if (errors.length) { console.log('Console/page errors:', errors); failed++; }
console.log(failed ? `${failed} failure(s)` : 'All checks passed');
process.exit(failed ? 1 : 0);
