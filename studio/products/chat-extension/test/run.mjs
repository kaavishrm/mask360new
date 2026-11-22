// Loads each saved fixture, injects the content scripts the way the browser would, and checks the shelf.
// Run: node test/run.mjs
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixtureFor = (p) => p.startsWith('/c/') ? 'chatgpt' : p.startsWith('/chat/') ? 'claude' : p.startsWith('/app/') ? 'gemini' : null;
const server = http.createServer(async (req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const fx = fixtureFor(p);
  const file = fx ? path.join(root, 'test', 'fixtures', fx + '.html') : path.join(root, p);
  try { await stat(file); res.writeHead(200, { 'content-type': file.endsWith('.js') ? 'text/javascript' : file.endsWith('.json') ? 'application/json' : 'text/html' }); res.end(await readFile(file)); }
  catch { res.writeHead(404); res.end('nf'); }
});
await new Promise((r) => server.listen(0, r));
const base = `http://127.0.0.1:${server.address().port}`;

let failed = 0;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' ' + detail : '')); if (!ok) failed++; };

// Manifest sanity
const manifest = JSON.parse(await readFile(path.join(root, 'manifest.json'), 'utf8'));
check('manifest v3', manifest.manifest_version === 3);
check('manifest content scripts cover the three sites', ['https://chatgpt.com/*', 'https://claude.ai/*', 'https://gemini.google.com/*'].every((m) => manifest.content_scripts[0].matches.includes(m)));
for (const f of [...manifest.content_scripts[0].js, ...Object.values(manifest.icons)]) { try { await stat(path.join(root, f)); check('file exists ' + f, true); } catch { check('file exists ' + f, false); } }
check('only the storage permission is requested', JSON.stringify(manifest.permissions) === JSON.stringify(['storage']));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
async function load(url) {
  await page.goto(base + url);
  for (const js of manifest.content_scripts[0].js) await page.addScriptTag({ url: base + '/' + js });
  await page.waitForSelector('#conversation-shelf', { state: 'attached' });
}
const titles = () => page.locator('#shelf-list a').allInnerTexts();

// ChatGPT fixture, served at a conversation URL so the active item can be checked
await load('/c/aaa-111');
check('chatgpt adapter detected from link shapes', await page.evaluate(() => window.ConversationShelf.detect().id) === 'chatgpt');
let t = await titles();
check('chatgpt: three conversations, deduplicated, nav only', JSON.stringify(t) === JSON.stringify(['Trip to Goa budget', 'Python regex help', 'Resume rewrite']), JSON.stringify(t));
check('chatgpt: hrefs are absolute', (await page.locator('#shelf-list a').evaluateAll((as) => as.every((a) => a.href.startsWith('http')))));
check('chatgpt: current conversation marked active', await page.locator('#shelf-list a.active').getAttribute('data-id') === 'aaa-111');
check('chatgpt: count shows 3', (await page.locator('#conversation-shelf .count').innerText()) === '3');
// Live update when the site adds a conversation
await page.evaluate(() => { const li = document.createElement('li'); li.innerHTML = '<a href="/c/ddd-444">New chat about PF</a>'; document.querySelector('nav ol:last-of-type').appendChild(li); });
await page.waitForFunction(() => document.querySelector('#conversation-shelf').shadowRoot.querySelectorAll('#shelf-list a').length === 4, null, { timeout: 3000 }).catch(() => {});
t = await titles();
check('chatgpt: list updates after the page adds a link', t.length === 4 && t[3] === 'New chat about PF', JSON.stringify(t));
// Filter
await page.locator('#conversation-shelf .filter').fill('regex');
t = await titles();
check('chatgpt: filter narrows the list', JSON.stringify(t) === JSON.stringify(['Python regex help']), JSON.stringify(t));
await page.locator('#conversation-shelf .filter').fill('');
// Collapse persists across reload
await page.locator('#conversation-shelf .toggle').click();
check('collapse hides the list', await page.locator('#shelf-list').isHidden());
await load('/c/aaa-111');
check('collapsed state survives reload', await page.locator('#conversation-shelf .shelf').evaluate((el) => el.classList.contains('collapsed')));
await page.locator('#conversation-shelf .toggle').click();
check('expand shows the list again', await page.locator('#shelf-list').isVisible());
const shots = path.join(root, 'test', 'shots');
await import('node:fs/promises').then((fs) => fs.mkdir(shots, { recursive: true }));
await page.screenshot({ path: path.join(shots, 'chatgpt.png') });

// Folders (milestone 2), on the chatgpt fixture with the localStorage fallback
await load('/c/aaa-111');
const chips = () => page.locator('#shelf-folders .chip[data-id]').allInnerTexts();
check('folders: the new-folder form is hidden until asked for', await page.locator('#shelf-newf').isHidden());
check('folders: only the All chip before any folder exists', JSON.stringify(await chips()) === JSON.stringify(['All3']), JSON.stringify(await chips()));
await page.locator('#shelf-folders .add').click();
await page.locator('#shelf-newf input').fill('Trips');
await page.locator('#shelf-newf button[type=submit]').click();
check('folders: the form hides again after saving', await page.locator('#shelf-newf').isHidden());
check('folders: new folder appears, selected, empty', JSON.stringify(await chips()) === JSON.stringify(['All3', 'Trips0', 'Unfiled3']), JSON.stringify(await chips()));
check('folders: selected folder shows its empty message', (await page.locator('#shelf-list .empty').innerText()) === 'Nothing in this folder yet.');
await page.locator('#shelf-folders .chip[data-id=""]').click();
await page.locator('#shelf-list select[data-id="aaa-111"]').selectOption({ label: 'Trips' });
check('folders: filing a conversation updates the counts', JSON.stringify(await chips()) === JSON.stringify(['All3', 'Trips1', 'Unfiled2']), JSON.stringify(await chips()));
await page.locator('#shelf-folders .chip', { hasText: 'Trips' }).click();
t = await titles();
check('folders: folder filter shows only the filed conversation', JSON.stringify(t) === JSON.stringify(['Trip to Goa budget']), JSON.stringify(t));
await page.locator('#shelf-folders .chip', { hasText: 'Unfiled' }).click();
t = await titles();
check('folders: unfiled filter shows the rest', JSON.stringify(t) === JSON.stringify(['Python regex help', 'Resume rewrite']), JSON.stringify(t));
await load('/c/bbb-222');
check('folders: folder and filing survive reload', JSON.stringify(await chips()) === JSON.stringify(['All3', 'Trips1', 'Unfiled2']), JSON.stringify(await chips()));
check('folders: the select shows the stored folder after reload', (await page.locator('#shelf-list select[data-id="aaa-111"]').evaluate((s) => s.selectedOptions[0].textContent)) === 'Trips');
await page.locator('#shelf-folders .chip', { hasText: 'Trips' }).click();
await page.locator('#shelf-tools .rename').click();
await page.locator('#shelf-newf input').fill('Travel');
await page.locator('#shelf-newf button[type=submit]').click();
check('folders: rename keeps the filing', JSON.stringify(await chips()) === JSON.stringify(['All3', 'Travel1', 'Unfiled2']), JSON.stringify(await chips()));
await page.locator('#shelf-folders .chip', { hasText: 'Travel' }).click();
await page.locator('#shelf-tools .del').click();
check('folders: delete removes the folder and unfiles its conversations', JSON.stringify(await chips()) === JSON.stringify(['All3']), JSON.stringify(await chips()));
check('folders: data persisted in localStorage for the site', await page.evaluate(() => { const d = JSON.parse(localStorage.getItem('conversationShelf.v1.chatgpt')); return d && d.folders.length === 0 && Object.keys(d.assign).length === 0; }));
await page.screenshot({ path: path.join(shots, 'folders.png') });

// Storage backend: with a chrome.storage.local shim present, folders go there and not to localStorage
const ctx2 = await browser.newContext({ viewport: { width: 1200, height: 800 } });
await ctx2.addInitScript(() => { window.chrome = { storage: { local: { _d: {}, get(k, cb) { cb({ [k]: this._d[k] }); }, set(o, cb) { Object.assign(this._d, o); if (cb) cb(); } } } }; });
const p2 = await ctx2.newPage();
await p2.goto(base + '/c/aaa-111');
for (const js of manifest.content_scripts[0].js) await p2.addScriptTag({ url: base + '/' + js });
await p2.waitForSelector('#conversation-shelf', { state: 'attached' });
check('store: chrome.storage.local backend detected when present', await p2.evaluate(() => window.ConversationShelfStore.backend()) === 'chrome.storage.local');
await p2.locator('#shelf-folders .add').click(); await p2.locator('#shelf-newf input').fill('Work'); await p2.locator('#shelf-newf button[type=submit]').click();
check('store: folder written to chrome.storage.local, not localStorage', await p2.evaluate(() => { const d = window.chrome.storage.local._d['conversationShelf.v1.chatgpt']; return d && d.folders.length === 1 && d.folders[0].name === 'Work' && localStorage.getItem('conversationShelf.v1.chatgpt') === null; }));
await ctx2.close();

// Claude fixture
await load('/chat/9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d');
check('claude adapter detected', await page.evaluate(() => window.ConversationShelf.detect().id) === 'claude');
t = await titles();
check('claude: two conversations from the nav, message link ignored', JSON.stringify(t) === JSON.stringify(['Lease agreement review', 'Weekly meal plan']), JSON.stringify(t));
check('claude: active item is the second', await page.locator('#shelf-list a.active').innerText() === 'Weekly meal plan');

// Gemini fixture: no nav element, so every matching link counts; "/app" without an id does not
await load('/app/0a1b2c3d4e5f');
check('gemini adapter detected', await page.evaluate(() => window.ConversationShelf.detect().id) === 'gemini');
t = await titles();
check('gemini: three conversations, new-chat link excluded', JSON.stringify(t) === JSON.stringify(['Email to landlord', 'Marathon training', 'Gift ideas']), JSON.stringify(t));
check('gemini: panel title names the site', (await page.locator('#conversation-shelf .name').innerText()) === 'Gemini conversations');

// Hostname detection without links
check('hostname detection', await page.evaluate(() => window.ConversationShelf.detect(document, 'chat.openai.com').id) === 'chatgpt');

await browser.close(); server.close();
if (errors.length) { check('no page errors', false, errors.join(' | ')); } else check('no page errors', true);
console.log(failed ? `${failed} failure(s)` : 'All checks passed');
process.exit(failed ? 1 : 0);
