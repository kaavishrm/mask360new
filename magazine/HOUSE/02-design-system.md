# 02. Design system

The reference is the MAGAZIN Framer template (magazin.framer.wiki). We use its design as is: typography, grid, chrome, colour logic, the red reveal footer. These tokens are the single source for the website (`public/assets/css/site.css`), the carousel renderer (`newsroom/render.py`) and the OG images. Change a token here, then in the two files, never only in one.

## Type

| Role | Face | Weight | Size (desktop) | Tracking | Leading |
|---|---|---|---|---|---|
| Masthead | Instrument Serif | 400 | 324px (clamp to 22vw) | -0.04em | 1.0 |
| Section masthead (section pages) | Instrument Serif | 400 | 324px | -0.04em | 1.0 |
| Tagline | Instrument Serif | 400 | 40px | -0.02em | 1.0 |
| Nav | Instrument Serif | 400 | 32px | -0.04em | 1.0 |
| Section head ("Top of the pot") | Instrument Serif | 400 | 64px | -0.04em | 1.1 |
| Card title | Instrument Serif | 400 | 36px | -0.03em | 1.08 |
| Article title | Instrument Serif | 400 | 74px | -0.04em | 1.1 |
| Article h2 | Instrument Serif | 700 (synth) | 40px | -0.02em | 1.0 |
| Article h3 | Instrument Serif | 700 | 26px | -0.02em | 1.2 |
| Hero title (on image) | Instrument Serif | 400 | 44px | -0.03em | 1.17 |
| Author / watchlist names | Instrument Serif Italic | 400 | 94px | -0.04em | 1.1 |
| Body | Amulya | 400 | 16px | -0.02em | 1.3 |
| Dek (card) | Amulya | 400 | 14px | -0.02em | 1.2 |
| Section label | Amulya | 500 | 14px | -0.04em | 1.0, uppercase |
| Meta (date, read time) | Amulya | 400 | 16px | -0.02em | 1.2 |
| Micro (legal) | Amulya | 400 | 12px | +0.05em | 1.2, uppercase |

Instrument Serif: Google Fonts, SIL OFL, self-hosted woff2 (latin, latin-ext, roman and italic). Amulya: Fontshare (Indian Type Foundry), free for commercial use, self-hosted woff2 400/500/700. Bold serif headings use `font-synthesis: weight` because Instrument Serif ships one weight, which is what the reference does.

Mobile scale: masthead 96px, nav 26px, section head 40px, card title 28px, article title 44px, body 16px.

## Colour

| Token | Hex | Use |
|---|---|---|
| ink | #000000 | text, rules, masthead |
| white | #FFFFFF | page ground |
| grey | #808080 | tagline, secondary meta |
| line | #000000 at 100 percent, 1px | the hairlines above and below nav and under section heads |
| field | #EAEAEA | input fields, image placeholders |
| campaigns | #FF3332 | section colour, footer ground |
| events | #FF00B7 | section colour |
| hospitality | #F9C728 | section colour, watchlist band |
| fashion | #6E2CF4 | section colour |
| people | #3FAD57 | section colour |
| culture | #0000EE | section colour |

Rule: a section colour appears only on the section label, the carousel ground, the generated cover ground and the spine stripe. Never on body text, never as a tint. Page chrome is black on white, always.

The spine: the five short colour strokes centred at the very top of every page (the reference has three). We show six, one per section, in nav order.

## Layout

- Page gutter 24px at every width. Content width 100 percent minus gutters, max 1920px. The reference runs edge to edge; so do we.
- Grid: 3 columns on desktop (gap 64px), 2 at 720 to 1000px, 1 below 720px.
- Cards: label, title, dek, image, then a meta row with the date left and the read time right. Image aspect follows the asset (portrait 4:5 for carousel covers, 1:1 or 3:2 for photos). No card borders, no shadows, no radius. Hover: image scales 1.03 over 1.2s, title stays.
- Hero: full-width image card 16:9 with a dark gradient, label top left, title 44px white, "Read more" link, a strip of five thumbnails bottom left, arrows on mobile. On the web the hero rotates through the five Top stories.
- Section head rows: 64px serif left, "Explore all" 32px serif right, 1px rule under.
- Hairlines: 1px black, full width, above nav, below nav, under each section head, under the article title row.
- Article: 10 column body (max 780px) left, 4 column "Latest" rail right with 132px thumbnails. Title, date, cover 4:3 or 4:5, body. Pull quotes in Instrument Serif 32px. Lists with a bullet dot and 20px indent.
- Section page: the section name set as a 324px masthead replaces the Mask360 masthead; nav stays.
- Footer: fixed behind the page, revealed on scroll, full viewport, campaigns red, "Mask360" at 397px white, two-line description, links row, "ALL RIGHTS RESERVED" micro. The page body gets a bottom margin of 100vh so the footer shows beneath it.
- Load more: 9 cards, then "Load more" in 32px serif, centred, reveals 9 more from the index JSON.
- Spacing: 120px between home sections, 80px on mobile. 32px between card rows.

## Motion

Image scale on hover. Hero crossfade every 6 seconds. The footer reveal. Nothing else moves. `prefers-reduced-motion` turns off the crossfade.

## Carousel (the product)

Canvas 1080 x 1350 (4:5). Safe area 72px on all sides. Six slide types, all rendered by `newsroom/render.py` from the story file. The grounds alternate so a swipe reads as a rhythm: colour, white, colour, white.

| Slide | Ground | Content |
|---|---|---|
| Cover | section colour | section label top left in Amulya 500 28px uppercase; title in Instrument Serif 120px (auto shrinks to fit 6 lines); "Mask360" masthead 56px bottom left; a swipe arrow bottom right; the kicker tag (BREWING, SPILLED, SWEET, BITTER) top right in a black pill |
| Tea | white | one claim per slide: a 36px Amulya paragraph (max 60 words) with an Instrument Serif 88px pull line above it; slide number bottom left as "02 / 07" |
| Receipt | white with 2px black frame | the evidence: a quote with source and date, or a number set at 200px with a one-line caption, or a side by side (two columns, labels above) |
| Verdict | section colour | "The read" label and a 64px serif paragraph, max 45 words; this is the slide people screenshot |
| Edit item | white | for The Edit and The Guest List: a 1:1 photo or monogram top, name 56px serif, one-line why 32px, "the catch" 28px grey; PAID PARTNERSHIP label where applicable |
| Close | black | "Steeped by Mask360" 72px serif white, "Three. Six. Tea." 36px, handle, "Send this to the one person who needs it" 28px, the spine stripe |

Sponsored variants: `sponsor:` sets "PRESENTED BY BRAND" in Amulya 500 24px uppercase under the kicker pill on the cover and above the handle on the close slide; a paid item slide carries the PAID PARTNERSHIP pill top right; a Brand Drop carries the pill on every slide. The sponsor never gets the colour, the type or the order: the placement is a position, not a redesign.

Masthead on every slide bottom left at 40px so a screenshot still carries the brand. Page numbers on every inner slide. Type never smaller than 28px on a carousel. Maximum 10 slides, minimum 5. Alt text written per slide.

LinkedIn: the same slides exported as a PDF document post. The cover slide doubles as the website card image and the OG image at 1200 x 630 (cropped, title re-set at 72px).

## Generated covers

When a story has no rights-cleared photograph, the cover is typographic: section colour ground, the title or a number or a single word set huge in Instrument Serif, one small object (a circle, a rule, a monogram) and the label. This is the reference's "40,000,00" and "broccoli on yellow" cards made systematic. Photos only when licensed (brand-supplied under a written release, Wikimedia Commons under CC BY, CC BY-SA or CC0 with credit, or Unsplash under its licence with credit). Credit appears under the image on the web story and on the Receipt slide that uses it.

## What we refuse

Rounded cards, drop shadows, gradients outside the hero scrim, stock photography of people laughing at salads, emoji in headlines, more than one typeface per role, centred body text, carousels with more than 60 words a slide, any slide without the masthead.
