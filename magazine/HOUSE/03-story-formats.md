# 03. Story formats

Every story is one of these formats. The format decides the slide sequence, the web structure, the headline rule and whether it can be sold. The writer agent picks the format at pitch time; the format name goes in the story file as `format:`.

Every story carries one **kicker** that tells the reader how sure we are and how we feel. It sits in the black pill on the cover slide and as a label on the web.

| Kicker | Meaning | Rule |
|---|---|---|
| SPILLED | confirmed, on record | at least one primary source: filing, release, post, statement, public event |
| BREWING | credible, unconfirmed | two independent signals, the story says "we have asked X for comment", never names a private individual |
| SWEET | praise | the work is named, the credit is given, the reason is specific |
| BITTER | critique | the work is critiqued, the people are not; a fix is suggested |
| PAID | sponsored, brand-supplied | labelled PAID PARTNERSHIP on cover, every slide and the web story; ASCI disclosure in caption |

## 1. The Tea

The core format. Something happened in the industry and here is what it means.
- Slides: Cover, 3 to 5 Tea slides (one development each, in order), 1 or 2 Receipt slides, Verdict, Close. 7 to 9 slides.
- Web: 350 to 600 words. Title, dek, "The tea" section with the developments, "The receipts" with sources linked, "The read".
- Headline rule: a person, brand or thing plus a verb in the present tense plus the twist. Under 11 words. "Zomato's new campaign has one problem, and it is the font."
- Sellable: no. Trust format.

## 2. Scorecard

A campaign, launch, menu, opening or event rated out of 10 on four lines: the idea, the craft, the fit, the courage. Brands quote good scores; that is the point.
- Slides: Cover with the score set huge (the number is the cover), four Tea slides (one per line with the sub-score), Receipt (the work itself, stills or quote), Verdict with the total, Close. 8 slides.
- Web: 400 to 700 words plus a score table.
- Headline rule: brand plus work plus score. "Tanishq's wedding film, scored: 8.5."
- Sellable: the format can be sponsored ("Scorecard, presented by"), the score cannot. A brand can request to be scored and pay for the production; the score is ours and they sign that in advance.

## 3. The Guest List

Event coverage. Who threw it, who came, what was served, what was said, the one thing everyone talked about.
- Slides: Cover (venue or host), "The room" Tea slide, 3 to 5 Edit-item slides (moments, not people under director level), Receipt (the menu, the invite, the setlist, the budget signal), Verdict, Close.
- Web: 300 to 500 words, the list as a list.
- Headline rule: the event plus the detail that tells you everything. "The Dior dinner served dal. Everyone noticed."
- Sellable: yes. Paid coverage is PAID. Unpaid coverage of a paid-for event (we were invited) says "invited" in the caption.

## 4. Moves

People and account moves. The purest industry goss.
- Slides: Cover ("Moves, week 45"), one Tea slide per move (who, from, to, why it matters, one line each), Receipt (the LinkedIn post, the release), Verdict (what the week says about the market), Close. 6 to 10 slides.
- Web: a dated list, one paragraph per move, source linked.
- Headline rule: the biggest move of the week as the headline. "Ogilvy loses its Mumbai CCO to a startup nobody has heard of."
- Sellable: the weekly format can be sponsored by a recruiter, a tool, a business school. Never an individual move.

## 5. The Edit

The monetizable curation, done with a point of view. Five places, drops, menus, rooms, campaigns. Every item has "the catch".
- Slides: Cover (the theme), five Edit-item slides, Verdict (the one we would pick), Close. 8 slides.
- Web: 400 to 600 words, each item with name, why, the catch, address or link.
- Headline rule: the theme plus a constraint. "Five Bandra bars where the drink costs less than the valet."
- Sellable: yes. Up to two of five items can be PAID placements, labelled on the item slide and in the caption. The order is editorial, never bought. The catch is written for paid items too; brands are told this before they buy.

## 6. Spotted

Short. A celebrity in a brand's clothes, a billboard that says the quiet part, a logo in the wrong place.
- Slides: Cover (the image or the quote), one Tea slide, Close. 3 to 4 slides.
- Web: 120 to 200 words.
- Headline rule: starts with "Spotted:".
- Sellable: no.

## 7. Brand Drop

Sponsored launch content. The brand supplies the assets, including video. We supply the edit, the design and the audience.
- Slides: brand assets re-set in the house system, 5 to 8 slides, or a video post with a house cover frame. PAID PARTNERSHIP on every frame.
- Web: 250 to 400 words, labelled, with the brand's links.
- Headline rule: the brand, the thing, one true adjective. No superlatives we did not verify.
- Sellable: entirely. Rate card line one.

## 8. Deep Pour

The weekly long read. One subject, reported.
- Slides: a 10-slide summary carousel pointing to the web.
- Web: 1,200 to 2,000 words with sections, pull quotes, a sources list.
- Headline rule: a claim, not a topic. "Mumbai's restaurant boom is a real estate story."
- Sellable: the series can be sponsored. The reporting cannot.

## 9. Hot Take

The column. Signed "The Mask". An argument about the industry.
- Slides: Cover (the thesis in 10 words), 3 Tea slides (three reasons), Verdict, Close.
- Web: 500 to 800 words.
- Sellable: no.

## 10. Receipts

The call-out format. A claim versus the evidence. Used for plagiarised campaigns, inflated numbers, deleted posts, quietly changed prices.
- Slides: Cover ("Receipts:"), Receipt slides side by side, Tea slide (what we asked and what they said), Verdict, Close.
- Web: 300 to 500 words with the evidence embedded.
- Rule: right of reply is sought before publishing and the reply or the silence is printed. Legal checklist in `04-voice-and-copy.md` runs before this format goes out, every time.
- Sellable: never.

## Cadence (the floor)

| Day | Carousels | Formats |
|---|---|---|
| Monday | 2 | Moves (weekly), The Tea |
| Tuesday | 2 | The Tea, Scorecard |
| Wednesday | 2 | The Tea, The Edit |
| Thursday | 2 | The Tea, The Guest List or Spotted |
| Friday | 2 | Scorecard or Receipts, The Edit (weekend) |
| Saturday | 1 | Deep Pour summary |
| Sunday | 1 | Hot Take, plus the newsletter |

12 carousels a week minimum, 72 slides and 12 web stories. Brand Drops are added on top of the floor, never instead of it, and never more than two a day.

## The story file

One Markdown file per story at `magazine/content/stories/YYYY/MM/slug.md`:

```
---
title: Zomato's new campaign has one problem, and it is the font
dek: The idea is sharp. The typography is a stock template. Here is the receipt.
section: campaigns
format: tea
kicker: BITTER
date: 2026-11-03
desk: Campaigns Desk
cover: generated            # generated | photo:assets/img/stories/slug/cover.jpg
coverText: the font         # the word or number set huge on a generated cover
credit:                     # image credit when cover is a photo
sources:
  - https://... (what it is, date)
tags: [zomato, outdoor, typography]
paid: false
partner:                    # brand name when paid
slides:
  - type: cover
    title: Zomato's new campaign has one problem, and it is the font
  - type: tea
    pull: The idea lands.
    text: ...
  - type: receipt
    kind: quote | number | compare
    ...
  - type: verdict
    text: ...
  - type: close
caption: |
  the Instagram caption, hashtags on the last line
alt: |
  one line per slide
---
Web body in Markdown. Headings with ##. Sources as links in the text.
```

The build refuses a story that is missing title, dek, section, format, kicker, date, slides, caption or alt, that has an em dash anywhere, or that breaks the voice rules the linter checks.
