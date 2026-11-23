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
  ['/', async (p) => { const n = await p.locator('.card').count(); if (n < 3) throw new Error('home cards ' + n); return n + ' cards'; }],
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
    t = await run('WA', '2026-10-31', '2026-11-02'); if (t !== 'December 2, 2026') throw new Error('WA later-of ' + t);
    t = await run('MA', '2026-10-31', '2026-11-02'); if (t !== 'November 30, 2026') throw new Error('MA termination ' + t);
    t = await run('AZ', '2026-10-31', '2026-11-02'); if (t !== 'November 20, 2026') throw new Error('AZ 14 business days from Monday Nov 2 ' + t);
    const az = await p.locator('#out table tbody tr').first().innerText(); if (!az.includes('14 business days')) throw new Error('AZ row ' + az);
    t = await run('AZ', '2026-11-06', '2026-11-06'); if (t !== 'November 26, 2026') throw new Error('AZ from Friday Nov 6 ' + t);
    t = await run('MI', '2026-10-31', '2026-11-01'); if (t !== 'November 30, 2026') throw new Error('MI ' + t);
    const mi = await p.locator('#out table tbody tr').allInnerTexts(); if (mi.length !== 3 || !mi[0].includes('November 4, 2026') || !mi[2].includes('December 15, 2026')) throw new Error('MI rows ' + mi);
    if ((await p.locator('#out table tbody tr.tenant').count()) !== 1) throw new Error('MI tenant row');
    t = await run('VA', '2026-10-31', '2026-11-02'); if (t !== 'December 17, 2026') throw new Error('VA 45 ' + t);
    const va = await p.locator('#out table tbody tr').nth(1).innerText(); if (!va.includes('60 days') || !va.includes('January 1, 2027')) throw new Error('VA extra 15 ' + va);
    t = await run('CO', '2026-10-31', '2026-11-02'); if (t !== 'December 2, 2026') throw new Error('CO one month ' + t);
    t = await run('CO', '2026-01-31', '2026-01-31'); if (t !== 'February 28, 2026') throw new Error('CO month clamp ' + t);
    const co = await p.locator('#out table tbody tr').first().innerText(); if (!co.includes('one month')) throw new Error('CO row ' + co);
    t = await run('MD', '2026-10-31', '2026-11-02'); if (t !== 'December 15, 2026') throw new Error('MD 45 from end ' + t);
    t = await run('TN', '2026-10-31', '2026-11-01'); if (t !== 'No fixed deadline') throw new Error('TN ' + t);
    const tn = await p.locator('#out table tbody tr').first().innerText(); if (!tn.includes('December 1, 2026')) throw new Error('TN discovery cutoff ' + tn);
    t = await run('IN', '2026-10-31', '2026-11-02'); if (t !== 'December 17, 2026') throw new Error('IN 45 ' + t);
    const inNote = await p.locator('#out .note').first().innerText(); if (!inNote.includes('forwarding address')) throw new Error('IN note missing');
    await p.fill('input[name=fwd]', '2026-12-20'); t = await best(p); if (t !== 'December 20, 2026') throw new Error('IN address later ' + t);
    const inNote2 = await p.locator('#out .note').first().innerText(); if (!inNote2.includes('45 days from') || !inNote2.includes('December 17, 2026')) throw new Error('IN late-address note ' + inNote2);
    await p.fill('input[name=fwd]', '');
    t = await run('MO', '2026-10-31', '2026-11-03'); if (t !== 'November 30, 2026') throw new Error('MO termination ' + t);
    const mo = await p.locator('#out .tiny').innerText(); if (!mo.includes('535.300') || !mo.includes('2026-11-23')) throw new Error('MO citation ' + mo.slice(0, 120));
    const n = await p.locator('#state option').count(); if (n !== 20) throw new Error('states ' + n);
    return 'NY 14d / FL 15d+30d / OH later-of / NC 30d+60d / CA 21d / PA earlier-of / IL 30d+45d / GA / NJ / TX address rule / WA / MA / AZ 14 business days / MI 4+30+45 / VA 45+60 / CO month / MD / TN none / IN address / MO, 20 states cited';
  }],
  ['/late-rent-fee-checker/', async (p) => {
    const set = async (o) => { for (const [k, v] of Object.entries(o)) { if (k === 'state' || k === 'period' || k === 'units') await p.selectOption('select[name=' + k + ']', v); else await p.fill('input[name=' + k + ']', v); } return best(p); };
    const stats = () => p.locator('#out .stat b').allInnerTexts();
    const verdict = () => p.locator('#verdict').innerText();
    let t = await set({ state: 'TX', rent: '1500', period: 'm', due: '2026-11-01', paid: '2026-11-10', fee: '100', unpaid: '1500', units: '4' });
    let st = await stats(); if (t !== '$100.00' || st[1] !== '$180.00' || st[2] !== 'November 4, 2026' || st[3] !== '9') throw new Error('TX ' + st);
    if (!(await p.locator('#units-wrap').isVisible())) throw new Error('TX units hidden');
    t = await set({ units: '5' }); st = await stats(); if (st[1] !== '$150.00') throw new Error('TX 10 percent ' + st);
    t = await set({ paid: '2026-11-03', units: '4' }); if (t !== '$0.00' || !(await verdict()).includes('before November 4, 2026')) throw new Error('TX two full days ' + t);
    t = await set({ state: 'NY', paid: '2026-11-10' }); st = await stats(); if (t !== '$50.00' || st[1] !== '$50.00' || st[2] !== 'November 7, 2026' || !(await verdict()).includes('above the New York cap')) throw new Error('NY ' + t + ' ' + st);
    if (await p.locator('#units-wrap').isVisible()) throw new Error('NY units shown');
    t = await set({ state: 'NC' }); st = await stats(); if (t !== '$75.00' || st[2] !== 'November 6, 2026') throw new Error('NC ' + st);
    t = await set({ period: 'w', rent: '300', unpaid: '300' }); st = await stats(); if (st[1] !== '$15.00') throw new Error('NC weekly ' + st);
    t = await set({ state: 'CO', period: 'm', rent: '1500', unpaid: '1500' }); st = await stats(); if (t !== '$75.00' || st[2] !== 'November 8, 2026') throw new Error('CO ' + st);
    t = await set({ unpaid: '500' }); st = await stats(); if (st[1] !== '$50.00') throw new Error('CO floor ' + st);
    t = await set({ state: 'MA', unpaid: '1500' }); st = await stats(); if (t !== '$0.00' || st[1] !== 'No cap' || st[2] !== 'December 1, 2026') throw new Error('MA thirty days ' + st);
    t = await set({ state: 'MD' }); st = await stats(); if (t !== '$75.00' || st[2] !== 'No grace period') throw new Error('MD ' + st);
    t = await set({ state: 'VA' }); st = await stats(); if (t !== '$100.00' || st[1] !== '$150.00') throw new Error('VA ' + st);
    t = await set({ unpaid: '500' }); if (t !== '$50.00') throw new Error('VA remaining balance ' + t);
    t = await set({ state: 'TN', unpaid: '1500' }); st = await stats(); if (t !== '$100.00' || st[1] !== '$150.00' || st[2] !== 'November 6, 2026') throw new Error('TN ' + st);
    t = await set({ paid: '2026-11-05' }); if (t !== '$0.00') throw new Error('TN grace ' + t);
    t = await set({ state: 'NJ', paid: '2026-11-10' }); st = await stats(); if (t !== '$100.00' || st[1] !== 'No cap' || st[2] !== 'November 7, 2026' || !(await verdict()).includes('covered group')) throw new Error('NJ ' + st);
    t = await set({ state: 'AZ' }); st = await stats(); if (t !== '$100.00' || st[1] !== 'No cap' || st[2] !== 'No grace period') throw new Error('AZ ' + st);
    t = await set({ state: 'WA' }); st = await stats(); if (t !== '$100.00' || st[1] !== 'No cap' || st[2] !== 'November 7, 2026') throw new Error('WA ' + st);
    t = await set({ paid: '2026-11-06' }); if (t !== '$0.00') throw new Error('WA within five days ' + t);
    t = await set({ state: 'CA', paid: '2026-11-10' }); if (t !== '$100.00' || !(await verdict()).includes('No statewide statute')) throw new Error('CA ' + t);
    const cite = await p.locator('#out .tiny').innerText(); if (!cite.includes('2026-11-23') || !cite.includes('secondary-source')) throw new Error('CA source ' + cite.slice(0, 120));
    const n = await p.locator('#state option').count(); if (n !== 20) throw new Error('states ' + n);
    return 'TX 12/10 pct + 2 full days / NY 50 / NC 75, weekly 15 / CO 75, floor 50 / MA 30 days / MD / VA balance / TN grace / NJ business days / AZ / WA five days / CA none, 20 states';
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
for (const u of ['/security-deposit-return-deadline-calculator/', '/prorated-rent-calculator/', '/late-rent-fee-checker/']) {
  await mp.goto(base + u);
  const over = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (over) { failed++; console.log('FAIL mobile overflow on ' + u); } else console.log('PASS mobile no horizontal overflow on ' + u);
}
await mp.screenshot({ path: path.join(shots, '_mobile_prorated.png') });
await browser.close(); server.close();
if (errors.length) { console.log('Console/page errors:', errors); failed++; }
console.log(failed ? `${failed} failure(s)` : 'All checks passed');
process.exit(failed ? 1 : 0);
