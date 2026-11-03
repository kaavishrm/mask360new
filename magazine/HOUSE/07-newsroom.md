# 07. The newsroom

An office that runs itself. Twelve desks, one editor, no meetings. Every desk is an agent with a written brief; the brief is the file in `.claude/agents/m360-*.md` and the prompt in `newsroom/prompts/`. The same brief runs in two lanes.

## The two lanes

**Lane A, the engine (GitHub Actions).** `newsroom/run.mjs` runs three times a day on a cron (07:30, 13:30, 19:30 IST). It scouts, pitches, writes, edits, legal-checks, renders the carousel, builds the site, commits to `main` and posts to Instagram and LinkedIn when tokens are present. Needs one secret: `ANTHROPIC_API_KEY`. Posting needs `IG_USER_ID`, `IG_ACCESS_TOKEN`, `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_AUTHOR_URN`. Hosting needs the repo connected to Netlify or Vercel once. See `newsroom/README.md`.

**Lane B, the editor's desk (Claude Code scheduled session).** A daily scheduled task opens a fresh Claude Code session in this repo at 06:30 IST with the prompt in `newsroom/SESSION.md`. It runs the same editorial day with live web research, the in-repo agents and the same scripts, then pushes a PR titled `newsroom: YYYY-MM-DD`. The auto-merge workflow merges any PR with that title that touches only `magazine/content/**` and `magazine/public/**` and passes lint. Lane B works with zero setup from the publisher. When Lane A is live too, Lane B switches to the Deep Pour, the weekly audit and the monetization outreach drafts (the session prompt reads `newsroom/STATE.json` to decide).

## The desks

| Desk | Agent | Owns | Reads | Writes |
|---|---|---|---|---|
| Editor | m360-editor | the day: what runs, in which format, in what order; the kill decisions; the legal checklist; the daily INBOX line | HOUSE/, STATE.json, the pitch list, the calendar | `newsroom/STATE.json`, `OPS/INBOX/YYYY-MM-DD.md` |
| Scout | m360-scout | finding the tea: reads the source list, the public filings, the socials; scores every candidate on freshness, industry relevance, shareability, receipt availability, monetization adjacency | 05-sections.md source list | `newsroom/queue/YYYY-MM-DD-pitches.json` |
| Writer | m360-writer | the story file: headline, dek, slides, web body, caption, alt, sources | HOUSE 03, 04, the pitch | `content/stories/...md` (draft) |
| Fact desk | m360-facts | verifies every claim against the sources, marks unsupported claims, downgrades SPILLED to BREWING when the primary source is missing | the draft, the sources | the draft with `facts:` block |
| Copy desk | m360-copy | runs the voice rules, the banned list, the slide word counts, the headline rules, the caption format; rewrites, never re-reports | HOUSE 04 | the draft, final |
| Legal | m360-legal | runs the 10-point checklist on BREWING, BITTER, Receipts and any story naming a person; holds or clears | HOUSE 04 legal, the draft | the draft `legal:` block, HOLD or CLEAR |
| Art | m360-art | runs the evidence collector on the story's sources, picks the media receipts that prove the claim and captions them, picks cover type, writes the coverText, sources a licensed photo when the story needs one, writes per-slide alt text, runs the renderer and looks at the output | HOUSE 02, 06 | `public/assets/img/stories/<slug>/` (evidence files and evidence.json), `public/carousels/<slug>/` |
| Social | m360-social | captions for IG and LinkedIn, hashtags, posting time, the paid partnership tag, posts via the APIs, logs the post IDs | HOUSE 04 captions | `newsroom/outbox/`, `newsroom/posted.json` |
| Growth | m360-growth | SEO titles and descriptions, internal links, the newsletter (Sunday), the weekly metrics read from the IG and LinkedIn APIs and Search Console, the phase check against the 09-inventory thresholds, the plan adjustments | 08-growth, 09-inventory | `content/newsletters/`, `newsroom/metrics/YYYY-WW.json`, `STATE.json` phase |
| Sales | m360-sales | the inventory (09-inventory.md), the proof deck, the computed prices, the Advertise page, and from Phase 2 the weekly list of brands we covered SWEET or SPILLED with outreach drafts (for the Mask360 sales fleet to send); in Phase 1 it prepares and does not pitch | 08-growth, 09-inventory, story tags, metrics, STATE.json phase | `OPS/SALES/proof-YYYY-MM.md`, `OPS/SALES/YYYY-WW.md`, `content/pages/advertise.md` |
| Librarian | m360-librarian | the archive: tags, the Watchlist, the sitemap, the corrections log, the monthly house audit (are the stories following the formats) | everything | `content/corrections.md`, audit lines in INBOX |
| Sentinel | m360-sentinel | the health of the engine: did the cron run, did the build pass, did the posts go out, are the tokens expiring (IG tokens die every 60 days, refreshed by the script), is the Pages or Netlify deploy green | the Actions log, posted.json, STATE.json | `OPS/INCIDENTS/` on failure, one INBOX line |

## The editorial day (what `run.mjs` does)

1. **Scout** pulls the source list (RSS and page fetches, plus the model's web search tool for the socials and filings), dedupes against `content/index.json` and `queue/`, scores and writes 12 to 20 pitches.
2. **Editor** picks the run's slots from the cadence table (`03-story-formats.md`), assigns formats and kickers, and rejects pitches with no receipt. Minimum 2 stories a run, maximum 4 plus Brand Drops from `content/briefs/`.
3. **Writer** writes each story file from the pitch and the format spec, with the web search tool for reporting, into a draft.
4. **Facts** checks every claim; unsupported claims are cut or the kicker drops to BREWING.
5. **Copy** rewrites to the voice rules and the slide limits.
6. **Legal** runs the checklist where it applies and marks CLEAR or HOLD. HOLD stories go to `queue/held/` with the reason; the editor retries them next run with the fix applied or kills them after 48 hours.
7. **Evidence** (`evidence.mjs`) pulls the media receipts from the story's sources: the page's own image, the film's stills, a screenshot of the page or the post. **Art** picks the one or two that prove the claim, inserts them as receipt slides with captions and credits (`attach-evidence.mjs`, then a caption pass), sets `cover`, `coverText` and alt text; `render.py` renders the slides, the cover, the OG image and the LinkedIn PDF. A story with no media receipt fails lint.
8. **Lint** (`lint.mjs`) checks every rule a machine can check. A failing story does not build.
9. **Build** (`build.mjs`) rebuilds the site. **Commit** to `main` with the message `newsroom: N stories, YYYY-MM-DD HH:MM IST`.
10. **Social** posts to Instagram (carousel) and LinkedIn (document) when tokens exist, else writes the post to `outbox/` with everything ready. Logs IDs.
11. **Editor** appends the INBOX line: `[newsroom] N published (slugs), M held (reasons), posts: IG ids, LI ids, metrics snapshot`.
12. **Sentinel** checks the run's own output and opens an incident file on any failure. The next run reads open incidents first.

## Gates (no story passes without them)

- `lint.mjs` PASS: front matter complete, no em dash, no banned word, slide counts and word counts in range, caption format, paid labelling consistent, sources present for SPILLED, BITTER and Receipts.
- `legal:` CLEAR on the formats that need it.
- Carousel rendered with every slide, cover and OG present.
- A story is not posted until it is live on the web (the link in bio must resolve).

## Severities

- **SEV1**: a factual error about a named person or company is live, or a paid story went out unlabelled, or a post went to the wrong account. Pull the post within the hour, correct the web story with a dated note, log in `content/corrections.md`, publisher notified.
- **SEV2**: the engine missed a run, a token expired, the build is red, the deploy failed. Fix within 24 hours.
- **SEV3**: a slide is ugly, a hashtag is wrong, a thumbnail is cropped. Batch into the weekly maintenance run.

## Publisher involvement (the honest list)

Zero in the daily loop. Four one-time actions, each under five minutes: add the API key secret, connect the repo to a host, connect the Instagram and LinkedIn accounts (token creation), and buy a domain. After that the publisher reads the INBOX when they feel like it and answers the sales desk's weekly outreach list, or ignores it and the engine keeps running.
