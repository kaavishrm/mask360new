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

Colour is a label, never a ground. Grounds are paper and ink. The photograph is the colour.

| Token | Hex | Use |
|---|---|---|
| ink | #0E0D0B | text, rules, the masthead, cover panels, verdict and close slides, the footer and promo band |
| paper | #F3EFE7 | the page ground, tea, receipt and item slides, type on ink |
| white | #FFFFFF | inputs, nothing else |
| tea | #B4532A | the one accent: the tagline, kicker pills, "The read" and "The receipt" labels, the rule under a pull line, item numerals, Scorecard totals, link underlines, "Presented by" |
| grey | #6F6A62 | meta, credits, page numbers |
| line | ink at 100 percent, 1px | the hairlines; secondary rules at 18 percent |
| campaigns | #8B1E1E | section label and spine only |
| events | #5A2D5C | section label and spine only |
| hospitality | #9A6A12 | section label and spine only |
| fashion | #1E2A57 | section label and spine only |
| people | #2F5A3F | section label and spine only |
| culture | #1F5A63 | section label and spine only |

The section inks are six muted printing inks. They never fill a slide, a card, a band or a button. The spine at the top of every page shows the six in nav order.

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

Canvas 1080 x 1350 (4:5). Safe area 72px on all sides. Seven slide types, all rendered by `newsroom/render.py` from the story file. Grounds alternate paper and ink; the photograph does the colour work.

| Slide | Ground | Content |
|---|---|---|
| Cover (photo-led, the default) | the lead media receipt photograph top 63 percent, an ink panel below | section label top left in paper, kicker pill top right in tea, a soft ink scrim over the top of the photo; headline in Instrument Serif 80px (shrinks to 48) in paper on the ink panel; masthead 44px bottom left; swipe arrow bottom right; "Presented by" above the masthead when sponsored |
| Cover (Scorecard) | the same, panel taller | the total in tea at 230px with "/10", the headline under it |
| Cover (typographic, only when no evidence exists) | ink | headline in paper serif 124px (shrinks to 72), the coverText as an italic tea line above it |
| Tea | paper | section label in the section ink; a pull line in ink serif 104px (max 3 lines); a 120px tea rule; the text in Amulya 42px, ink; the block anchored to the middle; page number bottom right |
| Receipt, image (mandatory, at least one per story) | paper | "THE RECEIPT" in tea; the screenshot, still, release or menu inside a 1px ink frame; caption in Amulya 34px; credit in grey 22px |
| Receipt, number, quote, compare | paper | the number in ink serif 360px over a tea rule; the quote in italic 76px with a tea open quote; the comparison in two serif columns with a hairline |
| Verdict | ink | "THE READ" in tea; the text in paper serif 92px (shrinks to 52), anchored to the middle; the Scorecard total bottom right in tea |
| Item (The Edit, The Guest List, Moves) | paper | the index numeral in tea serif 96px; the item's evidence photograph in a 1px frame when one exists; name in ink serif 72px; why in Amulya 36px; "The catch" in grey 30px; PAID PARTNERSHIP pill when paid |
| Close | ink | the spine; "Forward it to the group." in paper serif 104px; "XO, Mask360" in tea 48px; "Three. Six. Tea." in paper 36px; the handle and the site; "Presented by" when sponsored |

Masthead on every slide bottom left so a screenshot still carries the brand. Page numbers on every inner slide. Type never smaller than 22px on a carousel (credits), 30px for anything a reader must read. Maximum 12 slides, minimum 5. Alt text written per slide.

Sponsored variants: `sponsor:` sets "PRESENTED BY BRAND" in Amulya 500 22px uppercase above the masthead on the cover and the close; a paid item slide carries the PAID PARTNERSHIP pill; a Brand Drop carries the pill on every slide. The sponsor never gets the colour, the type or the order: the placement is a position, not a redesign.

LinkedIn: the same slides exported as a PDF document post. The cover photograph (or the ink tile) is the web card at 4:5 and the hero at 16:9; the OG image is 1200 x 630 on ink with the photograph on the right.

## Covers

The cover is the story's lead media receipt: the actual campaign still, the room, the ramp, the signing, the announcement as published, cropped 4:5 with the headline on an ink panel below. The art desk picks it (a vision pass ranks the evidence; logos, logo walls and stock art rank last; a person, a place or the work itself ranks first) and may override with `cover: photo:<path>`. `cover: type` forces the typographic cover on ink; it is the fallback, not a style. The Scorecard cover carries the total.

## What we refuse

Rounded cards, drop shadows, gradients outside the hero and cover scrims, a section colour as a ground, a giant word as a cover, monogram circles, stock photography of people laughing at salads, logos as covers when a photograph exists, emoji in headlines, more than one typeface per role, centred body text, carousels with more than 60 words a slide, any slide without the masthead.
