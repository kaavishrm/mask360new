# Mask360, the magazine

Said *three six tea*. A social-first Indian magazine that spills corporate goss on the business of brands: campaigns, events, hospitality, fashion, agency people moves and the culture brands touch. Instagram carousels are the product; this site is the archive, the search asset and the rate card. Design: the MAGAZIN editorial template (Instrument Serif and Amulya, black on white, section colours), used as is.

## Map

```
HOUSE/              the house system, binding on every desk and on the build
  01-identity.md    the name, the positioning, who reads, who pays
  02-design-system.md  type, colour, layout, the carousel slide spec
  03-story-formats.md  the ten formats, the kickers, the cadence, the story file schema
  04-voice-and-copy.md the corporate goss voice, captions, the legal checklist, banned words
  05-sections.md    six sections, desks, colours, the daily source list
  06-visual-direction.md  covers, receipts as images, licensed photos, video
  07-newsroom.md    the twelve desks, the two lanes, the editorial day, gates, severities
  08-growth-and-monetization.md  the 1M impressions math, channels, the rate card
content/
  stories/YYYY/MM/slug.md   one Markdown file per story (front matter + web body)
  pages/            about.md, advertise.md
  briefs/           paid briefs drop here (Brand Drops) and run labelled PAID
  newsletters/      Sunday Steep drafts
newsroom/           the engine: run.mjs (the editorial day), lint.mjs, render.py (carousels), post.mjs (Instagram, LinkedIn),
                    llm.mjs (Claude), schemas.mjs, sources.mjs (feeds), prompts/ (desk briefs), SESSION.md (Lane B prompt),
                    STATE.json, posted.json, queue/held/, outbox/, fonts/
OPS/                INBOX/YYYY-MM-DD.md (one line per run), INCIDENTS/, SALES/
public/             the built site; assets/ (css, js, fonts) are committed, everything else is build output
build.mjs           the static site generator: lint, render missing carousels, write every page, feeds, sitemap
config.mjs          the publication config: name, URL, handle, newsletter, promo band, analytics ids
```

## Build and run locally

```
cd magazine && node build.mjs            # lint, render missing carousels (needs python3 + Pillow), write public/
cd magazine && node newsroom/lint.mjs    # lint every story
cd magazine && RENDER=force node build.mjs   # re-render every carousel
cd magazine/public && python3 -m http.server 8787
```

The build refuses to run if any story fails lint. Lint enforces the schema, the formats, the word counts, the caption shape, paid labelling, sources on confirmed stories, the legal block on critical stories, and the no em dash rule.

## Add a story by hand

Copy any file in `content/stories/`, keep the front matter shape, write, then `node newsroom/lint.mjs <file>` until PASS and `node build.mjs`. The renderer makes the slides, the card, the hero, the OG image and the LinkedIn PDF from the story file; nothing is designed by hand.

## Deploy

Hosting needs one connection by the publisher (GitHub Pages is off for this private repo):

- **Netlify**: New site from Git, pick this repo, base directory `magazine`. `magazine/netlify.toml` sets the build (`pip install pillow && node build.mjs`) and publish folder. Set the env var `SITE_URL` to the final URL.
- **Vercel**: Import the repo, root directory `magazine`. `magazine/vercel.json` sets the build. Set `SITE_URL`.

Every push to `main` that touches `magazine/` deploys. The newsroom engine commits to `main` three times a day.

## The newsroom

See `newsroom/README.md` for the setup (one API key, optional posting tokens), the schedule, and how the two lanes work.
