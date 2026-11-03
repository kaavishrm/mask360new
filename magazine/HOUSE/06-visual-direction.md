# 06. Visual direction

## The one idea

A broadsheet set by a type foundry. Black serif on white, hard rules, and colour only where the section lives. The carousel is a magazine page you swipe. Nothing on the feed looks like a template because nothing on the feed uses a photo it did not earn.

## Imagery hierarchy

1. **Typographic covers** (default). The section colour, the title or a number or one word set at the largest size that fits, the kicker pill, the masthead. Deterministic, always on brand, zero rights risk. The reference does this with "40,000,00" and a broccoli; we do it with the words of the story.
2. **Receipts as images (mandatory).** Every story carries at least one media receipt slide: the screenshot of the public post, the article or the release, the still from the film (with the timestamp), the menu with the price, the invite, the price list, the LinkedIn post announcing the move, set inside the 2px frame with a caption and the credit line ("Screenshot: domain, date", "Still: YouTube, the film's title"). The evidence collector (`newsroom/evidence.mjs`) pulls these from the story's own sources: the page's own image, the film's stills, a screenshot of the page; the art desk picks the two that prove the claim and writes the captions. Used for criticism and review, credited, never altered beyond cropping. Faces of private individuals blurred. No evidence, no story.
3. **Licensed photographs.** Brand-supplied under a written release (Brand Drop, paid Guest List), Wikimedia Commons under CC BY, CC BY-SA or CC0 with the credit line, Unsplash with credit. The credit line is "Photo: Name, Source, Licence" under the image on the web and on the slide that uses it.
4. **Mask360 Studio photography.** When the agency shoots an event or a venue, the frames can run in the magazine with "Photo: Mask360 Studio". The studio's commercial client work does not run unless the client is the subject of a labelled PAID story.
5. **AI-generated imagery.** Allowed only for illustration of a concept, never to depict a real person, a real product or a real place as if photographed. Labelled "Illustration: Mask360" on the slide. Off by default; the pipeline enables it only when an image API key is configured.

## Covers that work

- A number: "40 cr", "8.5", "0 press". Set at 320px, the caption under it.
- A word from the headline: "the font", "dal", "quietly". Set at 240px, lower case.
- The headline itself when it is under 8 words, at 120px, left aligned, ragged.
- A brand's name is never set in its own typeface. Our serif only.

## Monograms

Brands and people on the Watchlist and on Edit items get a monogram: the initial letters in Instrument Serif inside a black circle on the section colour. No logos. Logos are theirs, and a feed of logos looks like a sponsor wall.

## Video (when a brand pays and supplies it)

The brand's video is wrapped: a 2-second house cover frame (section colour, title, PAID PARTNERSHIP), the video at 4:5 or 9:16, a 2-second close frame. Captions burned in using Amulya 500 at 48px. We do not colour grade a brand's film without permission. Reels are not a format we chase until a brand pays for one; carousels are the engine.

## Web images

Cover 4:5 (the carousel cover) for cards, 1200 x 630 for OG, 1600 wide for the article. WebP at quality 82, plus a JPG for OG. Every image has alt text written by the writer agent, not the file name.

## Accessibility

Contrast on colour grounds: black type on hospitality yellow and people green, white type on campaigns red, events pink, fashion violet and culture blue. Slide type never under 28px. Alt text per slide in the story file and in the IG post.
