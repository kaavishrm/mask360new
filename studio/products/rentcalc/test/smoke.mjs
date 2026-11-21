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
  let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  const file = path.join(root, p);
  try { await stat(file); res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' }); res.end(await readFile(file)); } catch { res.writeHead(404); res.end('nf'); }
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port; const base = `http://127.0.0.1:${port}`;
await mkdir(shots, { recursive: true });

const best = (p) => p.locator('#out .stat.best b').innerText();
const checks = [
  ['/', async (p) => { const n = await p.locator('.card').count(); if (n < 2) throw new Error('home cards ' + n); return n + ' cards'; }],
  ['/prorated-rent-calculator/', async (p) => {
    let t = await best(p); if (t !== '$725.81') throw new Error('actual days ' + t);
    const stats = await p.locator('#out .stat b').allInnerTexts(); if (stats[1] !== '$750.00' || stats[2] !== '$739.73') throw new Error('other methods ' + stats);
    await p.click('label[for=k2]'); await p.fill('input[name=date]', '2026-12-10'); t = await best(p); if (t !== '$483.87') throw new Error('move-out ' + t);
    await p.click('label[for=k1]'); await p.fill('input[name=date]', '2027-02-10'); t = await best(p); if (t !== '$1,017.86') throw new Error('february ' + t);
    await p.selectOption('select[name=due]', '15'); await p.fill('input[name=date]', '2026-12-20'); t = await best(p); if (t !== '$1,258.06') throw new Error('due on 15th ' + t);
    return 'Dec 17 725.81 / out Dec 10 483.87 / Feb 1,017.86 / due 15th 1,258.06';
  }],
  ['/security-deposit-return-deadline-calculator/', async (p) => {
    const run = async (st, term, out) => { await p.selectOption('#state', st); await p.fill('input[name=term]', term); await p.fill('input[name=out]', out); return best(p); };
    let t = await run('NY', '2026-10-31', '2026-11-01'); if (t !== 'November 15, 2026') throw new Error('NY ' + t);
    t = await run('FL', '2026-10-31', '2026-10-31'); if (t !== 'November 15, 2026') throw new Error('FL ' + t);
    const fl = await p.locator('#out table tbody tr').nth(1).innerText(); if (!fl.includes('30 days') || !fl.includes('November 30, 2026')) throw new Error('FL claim notice ' + fl);
    t = await run('OH', '2026-10-31', '2026-11-02'); if (t !== 'December 2, 2026') throw new Error('OH later of two ' + t);
    t = await run('OH', '2026-11-05', '2026-11-02'); if (t !== 'December 5, 2026') throw new Error('OH termination later ' + t);
    t = await run('NC', '2026-10-31', '2026-11-02'); if (t !== 'December 2, 2026') throw new Error('NC ' + t);
    const nc = await p.locator('#out table tbody tr').nth(1).innerText(); if (!nc.includes('60 days') || !nc.includes('January 1, 2027')) throw new Error('NC final accounting ' + nc);
    const cite = await p.locator('#out .tiny').innerText(); if (!cite.includes('§ 42-52') || !cite.includes('2026-11-21')) throw new Error('citation ' + cite.slice(0, 120));
    t = await run('CA', '2026-10-31', '2026-11-01'); if (t !== 'November 22, 2026') throw new Error('CA 21 days ' + t);
    t = await run('PA', '2026-10-31', '2026-11-02'); if (t !== 'November 30, 2026') throw new Error('PA earlier-of ' + t);
    t = await run('IL', '2026-10-31', '2026-11-01'); if (t !== 'December 1, 2026') throw new Error('IL statement ' + t);
    const il = await p.locator('#out table tbody tr').nth(1).innerText(); if (!il.includes('45 days') || !il.includes('December 16, 2026')) throw new Error('IL 45 from vacating ' + il);
    t = await run('GA', '2026-10-31', '2026-11-02'); if (t !== 'December 2, 2026') throw new Error('GA possession ' + t);
    t = await run('NJ', '2026-10-31', '2026-11-05'); if (t !== 'November 30, 2026') throw new Error('NJ termination ' + t);
    t = await run('TX', '2026-10-31', '2026-11-01'); if (t !== 'December 1, 2026') throw new Error('TX surrender ' + t);
    const txNote = await p.locator('#out .note').first().innerText(); if (!txNote.includes('forwarding address')) throw new Error('TX note missing');
    await p.fill('input[name=fwd]', '2026-12-15'); t = await best(p); if (t !== 'December 15, 2026') throw new Error('TX address later ' + t);
    await p.fill('input[name=fwd]', '');
    const n = await p.locator('#state option').count(); if (n !== 10) throw new Error('states ' + n);
    return 'NY 14d / FL 15d+30d / OH later-of / NC 30d+60d / CA 21d / PA earlier-of / IL 30d+45d / GA / NJ / TX address rule, 10 states cited';
  }],
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
  try { const r = await page.goto(base + url); if (r.status() !== 200) throw new Error('status ' + r.status()); const out = await fn(page); await page.screenshot({ path: path.join(shots, url.replace(/\//g, '_') || '_home') + '.png' }); console.log('PASS', url, out || ''); }
  catch (e) { failed++; console.log('FAIL', url, e.message); }
}
const mob = await browser.newContext({ ...devices['iPhone 13'] });
const mp = await mob.newPage();
for (const u of ['/security-deposit-return-deadline-calculator/', '/prorated-rent-calculator/']) {
  await mp.goto(base + u);
  const over = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (over) { failed++; console.log('FAIL mobile overflow on ' + u); } else console.log('PASS mobile no horizontal overflow on ' + u);
}
await mp.screenshot({ path: path.join(shots, '_mobile_prorated.png') });
await browser.close(); server.close();
if (errors.length) { console.log('Console/page errors:', errors); failed++; }
console.log(failed ? `${failed} failure(s)` : 'All checks passed');
process.exit(failed ? 1 : 0);
