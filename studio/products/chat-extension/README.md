# Conversation Shelf

A Chrome extension (manifest v3) for the AI chat sites. Milestone 1 adds a side panel that lists the conversations the page already links to, filters them by title, marks the one you are in, and keeps up with the page as it re-renders. Milestone 2 adds folders: create, rename and delete them, file a conversation from the drop-down beside its title, and filter the shelf by folder or by the unfiled set. Milestone 3 adds search: the box matches titles and, for every conversation you have opened while the shelf was on, the message text, with a snippet and the match marked.

```
node scripts/make-icons.mjs   # renders icons/ from an inline SVG (already committed)
node test/run.mjs             # serves the fixtures and checks the shelf with Playwright
```

Load unpacked for a manual look: chrome://extensions, Developer mode, Load unpacked, pick this folder.

## How it finds conversations

`src/adapters.js` holds one entry per site with the hostnames and the shape of a conversation URL (`/c/<id>`, `/chat/<id>`, `/app/<id>`). `src/content.js` picks the adapter by hostname, or by whichever URL shape matches the most links when the host is unknown, then collects every matching link, deduplicates by id, and prefers links inside `nav`, `aside` or a navigation landmark so that links inside messages are ignored. No CSS class names are used; the sites change those often and URL shapes rarely.

## Storage

`src/store.js` keeps folders and assignments per site under `chrome.storage.local` inside the extension (the only permission requested), and falls back to `localStorage` when that API is absent, which is how the fixture tests run. The data is `{ folders: [{ id, name }], assign: { conversationId: folderId } }`; a conversation whose folder was deleted shows as unfiled.

## Search

The sites do not expose other conversations' messages, only the open one's, so the shelf indexes what it can see: when a conversation is open, the text of `main` (or the body without navigation) is captured once the page settles and stored per site under `chrome.storage.local` as `{ [conversationId]: { title, text, at } }`, capped at 20,000 characters per conversation and 400 conversations per site (oldest dropped). A query matches when every word appears in the title or the stored text of one conversation; hits from text carry an "in messages" badge and a snippet. The meta line says how many of the listed conversations are searchable in full, and Clear forgets the stored text. Nothing leaves the device.

## Fixtures

`test/fixtures/*.html` are hand-written pages that follow each site's link shapes and include the traps the code must survive: duplicates (pinned and recent), absolute and relative hrefs, links without an id, and conversation links inside a message. Each fixture fills `main` with a short message exchange for the current conversation id after a delay, the way the real pages render after navigation, so the search index can be tested. They are not captures of the live sites, which need a signed-in account. When the owner opens the real sites, a saved copy of each page's navigation can replace the fixtures.

## Milestones

1. Skeleton and conversation list: done.
2. Folders stored locally: done.
3. Search over titles and opened conversations' text: done.
4. Export to Markdown.
5. Paddle licence check for a paid tier.
6. Store listing assets.

Publishing needs a Chrome Web Store developer registration, listed in `studio/APPROVALS.md`. The name is provisional.
