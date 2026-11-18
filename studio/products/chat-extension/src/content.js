// Conversation Shelf, milestone 1: list the conversations the page already links to.
(function () {
  const ADAPTERS = window.ConversationShelfAdapters || [];
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

  function titleOf(el) {
    return (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').replace(/\s+/g, ' ').trim();
  }

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
.shelf{position:fixed;top:72px;right:12px;width:280px;max-height:70vh;display:flex;flex-direction:column;background:#fff;color:#1b1f1c;border:1px solid #e4e1d8;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.08);font:13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;z-index:2147483000;overflow:hidden}
.head{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #e4e1d8;background:#faf8f3}
.head b{flex:1;font-weight:600}
.head .count{color:#5d655f;font-size:12px}
.head button{all:unset;cursor:pointer;color:#5d655f;padding:2px 6px;border-radius:6px}
.head button:hover{background:#e6f1ea;color:#0f5132}
.filter{margin:8px 10px 4px;padding:6px 8px;border:1px solid #e4e1d8;border-radius:8px;font:inherit;color:inherit;background:#fff;outline:none}
.filter:focus{border-color:#0f5132}
.list{list-style:none;margin:0;padding:4px 6px 8px;overflow:auto}
.list a{display:block;padding:6px 8px;border-radius:8px;color:inherit;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.list a:hover{background:#f1efe8}
.list a.active{background:#e6f1ea;color:#0f5132;font-weight:600}
.empty{padding:10px;color:#5d655f}
.shelf.collapsed .filter,.shelf.collapsed .list,.shelf.collapsed .empty{display:none}
.shelf.collapsed{width:auto}
`;

  let shadow, panel, listEl, countEl, filterEl, nameEl, lastItems = [];

  function mount() {
    if (document.getElementById(HOST_ID)) return;
    const host = document.createElement('div'); host.id = HOST_ID;
    shadow = host.attachShadow({ mode: 'open' });
    const style = document.createElement('style'); style.textContent = CSS;
    panel = document.createElement('div'); panel.className = 'shelf';
    panel.innerHTML = '<div class="head"><b><span class="name">Conversations</span></b><span class="count">0</span><button type="button" class="toggle" title="Collapse or expand">–</button></div>' +
      '<input class="filter" type="search" placeholder="Filter by title" aria-label="Filter conversations">' +
      '<ul class="list" id="shelf-list"></ul>';
    shadow.append(style, panel);
    listEl = panel.querySelector('.list'); countEl = panel.querySelector('.count'); filterEl = panel.querySelector('.filter'); nameEl = panel.querySelector('.name');
    let collapsed = false;
    try { collapsed = localStorage.getItem(KEY) === '1'; } catch (e) { /* storage may be blocked */ }
    setCollapsed(collapsed);
    panel.querySelector('.toggle').addEventListener('click', () => setCollapsed(!panel.classList.contains('collapsed')));
    filterEl.addEventListener('input', () => render(lastItems, lastActive));
    (document.body || document.documentElement).appendChild(host);
  }

  function setCollapsed(on) {
    panel.classList.toggle('collapsed', on);
    panel.querySelector('.toggle').textContent = on ? '+' : '–';
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) { /* ignore */ }
  }

  let lastActive = null;
  function render(items, active) {
    lastItems = items; lastActive = active;
    const q = (filterEl.value || '').trim().toLowerCase();
    const shown = q ? items.filter((c) => c.title.toLowerCase().includes(q)) : items;
    countEl.textContent = String(items.length);
    listEl.innerHTML = '';
    if (!shown.length) { const li = document.createElement('li'); li.className = 'empty'; li.textContent = items.length ? 'No titles match.' : 'No conversations found on this page yet.'; listEl.appendChild(li); return; }
    for (const c of shown) {
      const li = document.createElement('li'); const a = document.createElement('a');
      a.href = c.href; a.textContent = c.title; a.title = c.title; a.dataset.id = c.id;
      if (c.id === active) a.className = 'active';
      li.appendChild(a); listEl.appendChild(li);
    }
  }

  let timer = null, adapter = null;
  function refresh() {
    adapter = detect();
    if (!adapter) return;
    if (nameEl) nameEl.textContent = adapter.name + ' conversations';
    render(collect(adapter), currentId(adapter));
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(refresh, 250); }

  function start() {
    mount();
    refresh();
    // The sites render their history after load and re-render it on navigation. Changes inside our own
    // shadow root are not seen by this observer, so our renders do not trigger it.
    new MutationObserver(schedule).observe(document.body || document.documentElement, { childList: true, subtree: true });
    let lastHref = location.href;
    setInterval(() => { if (location.href !== lastHref) { lastHref = location.href; schedule(); } }, 1000);
    window.addEventListener('popstate', schedule);
  }

  window.ConversationShelf = { detect, collect, refresh, version: '0.1.0' };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
