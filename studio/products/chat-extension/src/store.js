// Storage for Conversation Shelf. Uses chrome.storage.local inside the extension and falls back to
// localStorage when that API is absent, which is the case for the saved fixtures the tests run against.
// Folders are kept per site: { folders: [{ id, name }], assign: { [conversationId]: folderId } }.
// The search index is kept per site under its own key: { [conversationId]: { title, text, at } }, where
// text is the visible message text captured the last time the conversation was open, capped in length.
window.ConversationShelfStore = (function () {
  const KEY = 'conversationShelf.v1';
  const hasChrome = () => typeof chrome !== 'undefined' && !!(chrome.storage && chrome.storage.local);
  function normalize(d) {
    const folders = d && Array.isArray(d.folders) ? d.folders.filter((f) => f && typeof f.id === 'string' && typeof f.name === 'string') : [];
    const assign = d && d.assign && typeof d.assign === 'object' ? d.assign : {};
    return { folders, assign };
  }
  async function load(site) {
    const k = KEY + '.' + site;
    if (hasChrome()) { const r = await new Promise((res) => chrome.storage.local.get(k, res)); return normalize(r && r[k]); }
    try { return normalize(JSON.parse(localStorage.getItem(k))); } catch (e) { return normalize(null); }
  }
  async function save(site, data) {
    const k = KEY + '.' + site;
    if (hasChrome()) return new Promise((res) => chrome.storage.local.set({ [k]: data }, res));
    try { localStorage.setItem(k, JSON.stringify(data)); } catch (e) { /* storage may be blocked */ }
  }
  const INDEX = 'conversationShelf.index.v1', TEXT_CAP = 20000, MAX_ENTRIES = 400;
  async function getRaw(k) {
    if (hasChrome()) { const r = await new Promise((res) => chrome.storage.local.get(k, res)); return r ? r[k] : undefined; }
    try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return undefined; }
  }
  async function setRaw(k, v) {
    if (hasChrome()) return new Promise((res) => chrome.storage.local.set({ [k]: v }, res));
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage may be blocked or full */ }
  }
  async function loadIndex(site) { const d = await getRaw(INDEX + '.' + site); return d && typeof d === 'object' && !Array.isArray(d) ? d : {}; }
  // Stores the text of one conversation; drops the oldest entries past MAX_ENTRIES. Returns true if anything changed.
  async function indexText(site, id, title, text) {
    const idx = await loadIndex(site);
    const t = String(text || '').slice(0, TEXT_CAP), cur = idx[id];
    if (cur && cur.text === t && cur.title === title) return false;
    idx[id] = { title: title || (cur && cur.title) || '', text: t, at: Date.now() };
    const ids = Object.keys(idx);
    if (ids.length > MAX_ENTRIES) for (const k of ids.sort((a, b) => idx[a].at - idx[b].at).slice(0, ids.length - MAX_ENTRIES)) delete idx[k];
    await setRaw(INDEX + '.' + site, idx);
    return true;
  }
  async function clearIndex(site) { await setRaw(INDEX + '.' + site, {}); }
  const newId = () => 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  return { load, save, loadIndex, indexText, clearIndex, newId, TEXT_CAP, backend: () => (hasChrome() ? 'chrome.storage.local' : 'localStorage') };
})();
