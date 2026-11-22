// Folder storage for Conversation Shelf. Uses chrome.storage.local inside the extension and falls back to
// localStorage when that API is absent, which is the case for the saved fixtures the tests run against.
// Data is kept per site: { folders: [{ id, name }], assign: { [conversationId]: folderId } }.
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
  const newId = () => 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  return { load, save, newId, backend: () => (hasChrome() ? 'chrome.storage.local' : 'localStorage') };
})();
