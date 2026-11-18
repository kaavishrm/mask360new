# Conversation Shelf

A Chrome extension (manifest v3) for the AI chat sites. Milestone 1 adds a side panel that lists the conversations the page already links to, filters them by title, marks the one you are in, and keeps up with the page as it re-renders.

```
node scripts/make-icons.mjs   # renders icons/ from an inline SVG (already committed)
node test/run.mjs             # serves the fixtures and checks the shelf with Playwright
```

Load unpacked for a manual look: chrome://extensions, Developer mode, Load unpacked, pick this folder.

## How it finds conversations

`src/adapters.js` holds one entry per site with the hostnames and the shape of a conversation URL (`/c/<id>`, `/chat/<id>`, `/app/<id>`). `src/content.js` picks the adapter by hostname, or by whichever URL shape matches the most links when the host is unknown, then collects every matching link, deduplicates by id, and prefers links inside `nav`, `aside` or a navigation landmark so that links inside messages are ignored. No CSS class names are used; the sites change those often and URL shapes rarely.

## Fixtures

`test/fixtures/*.html` are hand-written pages that follow each site's link shapes and include the traps the code must survive: duplicates (pinned and recent), absolute and relative hrefs, links without an id, and conversation links inside a message. They are not captures of the live sites, which need a signed-in account. When the owner opens the real sites, a saved copy of each page's navigation can replace the fixtures.

## Milestones

1. Skeleton and conversation list: done.
2. Folders stored locally.
3. Search over conversation text.
4. Export to Markdown.
5. Paddle licence check for a paid tier.
6. Store listing assets.

Publishing needs a Chrome Web Store developer registration, listed in `studio/APPROVALS.md`. The name is provisional.
