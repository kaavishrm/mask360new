# The newsroom

An office that runs itself. The desks and the day are described in `../HOUSE/07-newsroom.md`. This file is the setup and the controls.

## Two lanes

**Lane A, the engine** (`.github/workflows/newsroom.yml`). Runs `run.mjs` at 07:30, 13:30 and 19:30 IST: feeds and web search, the scout, the editor, the writer, the fact desk, the copy desk, the legal desk, the renderer, lint, build, commit to `main`, post. Two stories a run by default (`NEWSROOM_SLOTS`). Needs the secrets below.

**Lane B, the editor's desk** (a Claude Code scheduled task, daily at 06:30 IST, prompt in `SESSION.md`). A fresh session reads the house, runs the day with the agents in `.claude/agents/`, writes 3 stories, pushes a branch and opens a PR titled `newsroom: YYYY-MM-DD`. `.github/workflows/newsroom-merge.yml` merges it when it only touches content paths and lint and build pass. When Lane A is alive, Lane B does the weekly work instead (Deep Pour, Hot Take, the newsletter, the sales list, incidents).

## Setup (the publisher's four actions)

| # | Action | Where | Why |
|---|---|---|---|
| 1 | Add repository secret `ANTHROPIC_API_KEY` | GitHub repo Settings, Secrets and variables, Actions | Lane A cannot run without it |
| 2 | Connect `magazine/` to Netlify or Vercel, set `SITE_URL` as a repo variable and as the host's env var | Netlify or Vercel dashboard, GitHub repo Settings, Variables | the site goes live; posting needs live slide URLs |
| 3 | Add `IG_USER_ID` and `IG_ACCESS_TOKEN` (a Meta Business Suite System User token with `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`; the Instagram account must be Business or Creator and linked to a Facebook Page) | GitHub secrets | Instagram carousels post themselves |
| 4 | Add `LINKEDIN_ACCESS_TOKEN` (Community Management API, `w_organization_social`) and `LINKEDIN_AUTHOR_URN` (`urn:li:organization:<id>`) | GitHub secrets | LinkedIn document posts post themselves |

Optional: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets make the engine deploy directly after each run instead of waiting for the host's git build. `NEWSROOM_MODEL` overrides the model (default `claude-opus-5-5`). `YT_COOKIES` (a YouTube cookies.txt export) lets the collector download campaign films for stills and 12 second clips; without it YouTube usually refuses datacenter downloads and the collector falls back to the film's thumbnail.

Until 3 and 4 exist, every story's ready-to-post package (caption, slide URLs, PDF path, LinkedIn text) is written to `outbox/<slug>.md`.

## Run by hand

```
cd magazine/newsroom && npm ci
cd magazine && ANTHROPIC_API_KEY=... node newsroom/run.mjs --slots 2 --no-post --no-commit   # produce stories locally
cd magazine && node newsroom/run.mjs --dry                                                  # scout and plan only, nothing written
cd magazine && node newsroom/post.mjs content/stories/2026/11/slug.md                       # post one story (needs tokens and a live site)
```

`workflow_dispatch` on the GitHub Action takes `slots`, `section` and `dry` inputs.

## Files

- `run.mjs` the editorial day; `llm.mjs` the Claude client (web search for research, structured outputs for drafts, prompt caching on the house docs, server-side refusal fallbacks); `schemas.mjs` the desk output shapes; `prompts/` the desk briefs (the same briefs the agents in `.claude/agents/` carry).
- `lint.mjs` every machine-checkable house rule; `yaml.mjs` the front matter parser; `md.mjs` the web body renderer; `story-json.mjs` the renderer payload.
- `evidence.mjs` the media receipt collector: the page's own image and the largest image the page declares, embedded or named films (`film:`) as stills and a clip via yt-dlp and ffmpeg, and a 2x Playwright screenshot for every source URL, into `public/assets/img/stories/<slug>/` with `evidence.json`; `attach-evidence.mjs` puts the filmstrip and the best receipts on slides, matches Edit and Moves items to their images, and sets `clip:`. No story passes lint without a media receipt.
- `render.py` the carousel, card, hero, OG and PDF renderer (Pillow only); `fonts/` the TTFs it uses.
- `sources.mjs` the feed list the scout reads first (failures are skipped; web search is the primary path).
- `post.mjs` Instagram Graph API carousel publishing and LinkedIn document posts; `posted.json` the log; `outbox/` the queue.
- `STATE.json` runs, held stories and spend; `queue/held/` stories that failed a gate, with the reason in `STATE.json`.
- `SESSION.md` the Lane B prompt.

## Cost

At two stories a run, three runs a day, a run is roughly 12 to 16 model calls and 40 to 60 web searches. Expect USD 3 to 6 a day on Claude Opus 5.5, under INR 15,000 a month. `STATE.json` records the spend per run.

## What is not automated yet

Instagram's paid partnership tag on sponsored posts (the caption carries the ASCI disclosure; the tag is switched on by hand when a Brand Drop runs). Instagram token refresh for non System User tokens (use a System User token and it never expires). Image rights lookups (covers are typographic by default; photos are attached by the art desk when a licence exists).
