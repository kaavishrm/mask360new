// Conversation Shelf, milestone 2: list the conversations the page links to, and file them into folders.
(function () {
  const ADAPTERS = window.ConversationShelfAdapters || [];
  const STORE = window.ConversationShelfStore;
  const HOST_ID = 'conversation-shelf';
  const KEY = 'conversationShelf.collapsed';

  function detect(doc, host) {
    doc = doc || document; host = host || location.hostname;
    const byHost = ADAPTERS.find((a) => a.hosts.some((h) => host === h || host.endsWith('.' + h)));
    if (byHost) return byHost;
    let best = null, bestCount = 0;
    const anchors = Array.from(doc.querySelectorAll('a[href]'));
    for (const a of ADAPTERS) {
      const n = anchors.filter((el) => a.href.test(el.getAttribute('href') || '')).length;
      if (n > bestCount) { best = a; bestCount = n; }
    }
    return best;
  }
  function titleOf(el) { return (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').replace(/\s+/g, ' ').trim(); }
  // Every link whose href looks like a conversation, deduplicated by id. If the page has a navigation
  // area that holds conversations, only those count; links inside messages or share dialogs are ignored.
  function collect(adapter, doc) {
    doc = doc || document;
    const seen = new Map();
    for (const el of doc.querySelectorAll('a[href]')) {
      const m = adapter.href.exec(el.getAttribute('href') || '');
      if (!m) continue;
      const id = m[1], title = titleOf(el), inNav = !!el.closest('nav, aside, [role="navigation"]');
      const cur = seen.get(id);
      if (!cur) seen.set(id, { id, title, href: el.href, inNav });
      else { if (!cur.title && title) cur.title = title; if (inNav) cur.inNav = true; }
    }
    const all = Array.from(seen.values());
    const nav = all.filter((c) => c.inNav);
    return (nav.length ? nav : all).map((c) => ({ id: c.id, title: c.title || 'Untitled conversation', href: c.href }));
  }
  function currentId(adapter) { const m = adapter.href.exec(location.pathname); return m ? m[1] : null; }

  const CSS = `
:host{all:initial}
.shelf{position:fixed;top:72px;right:12px;width:300px;max-height:72vh;display:flex;flex-direction:column;background:#fff;color:#1b1f1c;border:1px solid #e4e1d8;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.08);font:13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;z-index:2147483000;overflow:hidden}
.head{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #e4e1d8;background:#faf8f3}
.head b{flex:1;font-weight:600}
.head .count{color:#5d655f;font-size:12px}
button{all:unset;cursor:pointer;color:#5d655f;padding:2px 6px;border-radius:6px;font:inherit}
button:hover{background:#e6f1ea;color:#0f5132}
.folders{display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px 0;align-items:center}
.chip{border:1px solid #e4e1d8;border-radius:999px;padding:3px 10px;color:#1b1f1c;background:#fff}
.chip.on{background:#0f5132;color:#fff;border-color:#0f5132}
.chip .n{opacity:.7;margin-left:4px;font-size:11px}
.tools{display:flex;gap:4px;padding:4px 10px 0;font-size:12px}
.newf{display:flex;gap:6px;padding:6px 10px 0}
.newf[hidden]{display:none}
.newf input{flex:1;padding:5px 8px;border:1px solid #e4e1d8;border-radius:8px;font:inherit;color:inherit;background:#fff;outline:none;min-width:0}
.newf input:focus{border-color:#0f5132}
.newf button{border:1px solid #0f5132;color:#0f5132;padding:4px 10px}
.filter{margin:8px 10px 4px;padding:6px 8px;border:1px solid #e4e1d8;border-radius:8px;font:inherit;color:inherit;background:#fff;outline:none}
.filter:focus{border-color:#0f5132}
.list{list-style:none;margin:0;padding:4px 6px 8px;overflow:auto}
.list li{display:flex;align-items:center;gap:4px}
.list a{flex:1;min-width:0;display:block;padding:6px 8px;border-radius:8px;color:inherit;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.list a:hover{background:#f1efe8}
.list a.active{background:#e6f1ea;color:#0f5132;font-weight:600}
.list select{font:inherit;font-size:11px;color:#5d655f;border:1px solid transparent;border-radius:6px;background:transparent;max-width:92px;padding:2px}
.list select:hover,.list select:focus{border-color:#e4e1d8;background:#fff;outline:none}
.empty{padding:10px;color:#5d655f}
.shelf.collapsed .folders,.shelf.collapsed .tools,.shelf.collapsed .newf,.shelf.collapsed .filter,.shelf.collapsed .list,.shelf.collapsed .empty{display:none}
.shelf.collapsed{width:auto}
`;

  let shadow, panel, listEl, countEl, filterEl, nameEl, foldersEl, toolsEl, newForm, newInput;
  let adapter = null, siteId = 'unknown', data = { folders: [], assign: {} }, folder = '', lastItems = [], lastActive = null, editing = null, timer = null;

  function mount() {
    if (document.getElementById(HOST_ID)) return;
    const host = document.createElement('div'); host.id = HOST_ID;
    shadow = host.attachShadow({ mode: 'open' });
    const style = document.createElement('style'); style.textContent = CSS;
    panel = document.createElement('div'); panel.className = 'shelf';
    panel.innerHTML = '<div class="head"><b><span class="name">Conversations</span></b><span class="count">0</span><button type="button" class="toggle" title="Collapse or expand">–</button></div>' +
      '<div class="folders" id="shelf-folders"></div><div class="tools" id="shelf-tools"></div>' +
      '<form class="newf" id="shelf-newf" hidden><input type="text" maxlength="40" placeholder="Folder name" aria-label="Folder name"><button type="submit">Save</button><button type="button" class="cancel">Cancel</button></form>' +
      '<input class="filter" type="search" placeholder="Filter by title" aria-label="Filter conversations">' +
      '<ul class="list" id="shelf-list"></ul>';
    shadow.append(style, panel);
    listEl = panel.querySelector('.list'); countEl = panel.querySelector('.count'); filterEl = panel.querySelector('.filter'); nameEl = panel.querySelector('.name');
    foldersEl = panel.querySelector('#shelf-folders'); toolsEl = panel.querySelector('#shelf-tools'); newForm = panel.querySelector('#shelf-newf'); newInput = newForm.querySelector('input');
    let collapsed = false;
    try { collapsed = localStorage.getItem(KEY) === '1'; } catch (e) { /* storage may be blocked */ }
    setCollapsed(collapsed);
    panel.querySelector('.toggle').addEventListener('click', () => setCollapsed(!panel.classList.contains('collapsed')));
    filterEl.addEventListener('input', () => render(lastItems, lastActive));
    newForm.addEventListener('submit', async (e) => { e.preventDefault(); const name = newInput.value.trim(); if (!name) return; if (editing) { const f = data.folders.find((x) => x.id === editing); if (f) f.name = name; } else { const id = STORE.newId(); data.folders.push({ id, name }); folder = id; } editing = null; newForm.hidden = true; newInput.value = ''; await persist(); render(lastItems, lastActive); });
    newForm.querySelector('.cancel').addEventListener('click', () => { editing = null; newForm.hidden = true; newInput.value = ''; });
    (document.body || document.documentElement).appendChild(host);
  }
  function setCollapsed(on) { panel.classList.toggle('collapsed', on); panel.querySelector('.toggle').textContent = on ? '+' : '–'; try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) { /* ignore */ } }
  async function persist() { try { await STORE.save(siteId, data); } catch (e) { console.error(e); } }
  function openForm(id) { editing = id || null; newInput.value = id ? (data.folders.find((x) => x.id === id) || {}).name || '' : ''; newForm.hidden = false; newInput.focus(); }

  function renderFolders(items) {
    const counts = {}; for (const c of items) { const fid = data.assign[c.id]; if (fid) counts[fid] = (counts[fid] || 0) + 1; }
    const unfiled = items.filter((c) => !data.folders.some((f) => f.id === data.assign[c.id])).length;
    const chip = (id, name, n) => '<button type="button" class="chip' + (folder === id ? ' on' : '') + '" data-id="' + id + '">' + esc(name) + '<span class="n">' + n + '</span></button>';
    foldersEl.innerHTML = chip('', 'All', items.length) + data.folders.map((f) => chip(f.id, f.name, counts[f.id] || 0)).join('') + (data.folders.length ? chip('__unfiled', 'Unfiled', unfiled) : '') + '<button type="button" class="chip add" title="New folder">+ Folder</button>';
    foldersEl.querySelectorAll('.chip[data-id]').forEach((b) => b.addEventListener('click', () => { folder = b.dataset.id; render(lastItems, lastActive); }));
    foldersEl.querySelector('.add').addEventListener('click', () => openForm(null));
    const cur = data.folders.find((f) => f.id === folder);
    toolsEl.innerHTML = cur ? '<button type="button" class="rename">Rename ' + esc(cur.name) + '</button><button type="button" class="del">Delete folder</button>' : '';
    if (cur) {
      toolsEl.querySelector('.rename').addEventListener('click', () => openForm(cur.id));
      toolsEl.querySelector('.del').addEventListener('click', async () => { data.folders = data.folders.filter((f) => f.id !== cur.id); for (const k of Object.keys(data.assign)) if (data.assign[k] === cur.id) delete data.assign[k]; folder = ''; await persist(); render(lastItems, lastActive); });
    }
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function render(items, active) {
    lastItems = items; lastActive = active;
    renderFolders(items);
    const q = (filterEl.value || '').trim().toLowerCase();
    let shown = items;
    if (folder === '__unfiled') shown = shown.filter((c) => !data.folders.some((f) => f.id === data.assign[c.id]));
    else if (folder) shown = shown.filter((c) => data.assign[c.id] === folder);
    if (q) shown = shown.filter((c) => c.title.toLowerCase().includes(q));
    countEl.textContent = String(items.length);
    listEl.innerHTML = '';
    if (!shown.length) { const li = document.createElement('li'); li.className = 'empty'; li.textContent = items.length ? (folder ? 'Nothing in this folder yet.' : 'No titles match.') : 'No conversations found on this page yet.'; listEl.appendChild(li); return; }
    for (const c of shown) {
      const li = document.createElement('li'); const a = document.createElement('a');
      a.href = c.href; a.textContent = c.title; a.title = c.title; a.dataset.id = c.id;
      if (c.id === active) a.className = 'active';
      const sel = document.createElement('select'); sel.className = 'file'; sel.setAttribute('aria-label', 'Folder for ' + c.title); sel.dataset.id = c.id;
      sel.innerHTML = '<option value="">Unfiled</option>' + data.folders.map((f) => '<option value="' + f.id + '">' + esc(f.name) + '</option>').join('');
      sel.value = data.folders.some((f) => f.id === data.assign[c.id]) ? data.assign[c.id] : '';
      sel.addEventListener('change', async () => { if (sel.value) data.assign[c.id] = sel.value; else delete data.assign[c.id]; await persist(); render(lastItems, lastActive); });
      li.append(a, sel); listEl.appendChild(li);
    }
  }

  async function refresh() {
    const a = detect();
    if (!a) return;
    if (a !== adapter) { adapter = a; siteId = a.id; data = await STORE.load(siteId); if (nameEl) nameEl.textContent = a.name + ' conversations'; }
    render(collect(adapter), currentId(adapter));
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(refresh, 250); }
  function start() {
    mount();
    refresh();
    // Changes inside our shadow root are not seen by this observer, so our own renders do not trigger it.
    new MutationObserver(schedule).observe(document.body || document.documentElement, { childList: true, subtree: true });
    let lastHref = location.href;
    setInterval(() => { if (location.href !== lastHref) { lastHref = location.href; schedule(); } }, 1000);
    window.addEventListener('popstate', schedule);
  }

  window.ConversationShelf = { detect, collect, refresh, version: '0.2.0' };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
