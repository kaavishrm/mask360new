# Web design and digital craft

What this file is for: the web as a design medium at Awwwards standard, from the first line of HTML to the launch checklist, so that Claude can direct, specify, critique and QA a luxury site, commerce store, microsite or email for Mask360. As of October 2026. Taste lives in the design-taste skill; this file is the craft and technical layer beneath it.

## Contents

- [1. The medium](#1-the-medium)
- [2. HTML and CSS literacy for a creative director](#2-html-and-css-literacy-for-a-creative-director)
- [3. Typography on the web](#3-typography-on-the-web)
- [4. Images and media](#4-images-and-media)
- [5. Performance as craft](#5-performance-as-craft)
- [6. Motion on the web](#6-motion-on-the-web)
- [7. Frameworks and platforms](#7-frameworks-and-platforms)
- [8. Ecommerce craft](#8-ecommerce-craft)
- [9. SEO and discoverability](#9-seo-and-discoverability)
- [10. Email design](#10-email-design)
- [11. Microsites and campaign pages](#11-microsites-and-campaign-pages)
- [12. Experimentation and analytics literacy](#12-experimentation-and-analytics-literacy)
- [13. Design engineering](#13-design-engineering)
- [14. Cross browser and device reality](#14-cross-browser-and-device-reality)
- [15. Launch QA checklist and maintenance plan](#15-launch-qa-checklist-and-maintenance-plan)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. The medium

### 1.1 The viewport is unknown

A web page is rendered by a device the designer has never seen, at a width that can be anything from 320px (an older iPhone SE in portrait) to 5120px (an ultrawide monitor), with a user zoom level, a system font size and a colour scheme preference the designer does not control. John Allsopp's "A Dao of Web Design" (A List Apart, 2000) set the founding attitude: accept the ebb and flow of things, design for flexibility instead of fighting it. Every rule in this file descends from that.

Three working consequences:

- Fixed pixel layouts break on the first device the designer did not test. Fluid units (percent, vw, rem, fr, cqi) and the clamp() function (section 2.9) replace them.
- Content must survive without any single enhancement: a font that fails to load, a script that is blocked, an image that is slow. This is progressive enhancement: build the HTML so the page works with nothing else, then layer CSS, then JavaScript (Steven Champeon coined the term in 2003).
- Mobile first (Luke Wroblewski, 2009 essay and 2011 book) means the default CSS is the narrow layout and media queries add complexity as width grows. The reason is arithmetic: in India, Android is 93.89 percent of mobile OS share and iOS 6.05 percent (StatCounter, September 2026); in the UAE, Android is 73.3 percent and iOS 26.68 percent. A luxury audience in Dubai is heavily iPhone; a luxury audience in Mumbai is still mostly Android. Both are phones first.

### 1.2 The responsive lineage, 2010 to 2026

| Year | Event | What it changed |
|---|---|---|
| 2010 | Ethan Marcotte, "Responsive Web Design", A List Apart, 25 May | Fluid grids, flexible images, media queries as one discipline |
| 2012 to 2015 | Flexbox stabilises across browsers | One-dimensional layout without floats |
| 2017 | CSS Grid ships in Chrome 57, Firefox 52, Safari 10.1 within one month (March) | Two-dimensional layout; the editorial grid becomes native |
| 2018 | Jen Simmons names "intrinsic web design" | Layouts that respond to content and container, using min-content, max-content, fr, minmax(), and auto-fill |
| 2020 | clamp() reaches all engines | Fluid type and spacing without media queries |
| 2023 | Container queries Baseline (Chrome 105, Safari 16, Firefox 110) | Components respond to their container, so a card is designed once |
| 2023 | Scroll-driven animations in Chrome 115 | Scroll narrative without a JavaScript scroll loop |
| 2025 | Safari 26.0 (15 September 2025) ships anchor positioning, scroll-driven animations, text-wrap: pretty, WebGPU | The last holdout engine for the scroll narrative stack |
| 2026 | Interop 2026 (announced 12 February 2026) names anchor positioning, container style queries, dialogs and popovers, scroll-driven animations, view transitions, scroll snap, contrast-color() among its focus areas | Expect convergence by end of 2026 |

Intrinsic web design (Simmons, 2018) is the current frame. The six ingredients she lists: fluid and fixed combined, stages of squishiness (fixed, fr, minmax, auto), truly two-dimensional layout, nested contexts, expanding and contracting content, and media queries only when needed. The practical rule for a creative director: specify a layout as a set of behaviours (this column never narrower than 40ch, this image never wider than 60vw, this gap fluid between 24px and 96px) instead of three fixed artboards.

### 1.3 What the web does that print and apps do not

- Addressable: every state can have a URL, so a campaign page, a deal sheet, a single product and a single frame of a film can each be linked, shared on WhatsApp and indexed.
- Uninstalled: there is no store review, no download, no update prompt. The cost of a visit is one tap. The cost of a bad first second is the visit.
- Indexed: Google, Bing and the answer engines read the HTML. A page is also a document for machines (section 9).
- Unbounded: no page size, no trim, no fixed duration. Scroll is the timeline.
- Accessible by default: semantic HTML gives screen readers, keyboard users and search engines the same structure for free, until a designer removes it.
- Live: content changes without a reprint, and the page can read the time, the viewport, the preferences and the connection.

The cost of these powers is that the web is the only medium where the designer does not control the final rendering. Craft on the web is the discipline of specifying behaviour precisely enough that the unknown device still produces the intended result.

### 1.4 Anatomy of an Awwwards Site of the Day

Awwwards (founded 2009, Valencia) remains the reference jury for the kind of site Mask360 sells. What it measures, from its own site pages: Design 40 percent, Usability 30 percent, Creativity 20 percent, Content 10 percent. A jury of professionals scores each submission on those four, each juror giving an overall mark; a real example, the Lyon Béton Site of the Day page, shows 18 jurors, criterion averages of Design 7.57, Usability 7.3, Creativity 7.11, Content 7.3, and a winning SOTD score of 7.37 out of 10, alongside a separate "Awwwards users" score of 8.91 that does not count toward the jury award. One juror's published description of the process (Hon Tran) adds that at least 18 jurors score independently, the three scores furthest from the mean are dropped, and voting runs about five days; treat those details as a juror's account rather than an official rubric.

What the numbers teach: Design and Usability together are 70 percent of the score. A site that is spectacular and unusable scores lower than a site that is beautiful and works. Creativity at 20 percent rewards the one idea (design-taste, section 1, "the single idea"), and Content at 10 percent still punishes lorem ipsum, stock imagery and generic copy.

Awards in the system: Site of the Day (daily), Site of the Month, Site of the Year, Honorable Mention (scores just below SOTD), Developer Award (judged separately on code quality and performance), and the Mobile Excellence tag.

What winners share, read across the 2024 to 2026 SOTD archive: a single visual idea carried through every section; typography as the system (one family, extreme scale contrast); one peak interaction (a WebGL transition, an image sequence, a pinned chapter); custom loaders that belong to the idea; real photography or real 3D, never stock; an ending that closes the page. What winners also share, and what the house refuses: page weights of 10 to 40MB, custom cursors, scroll hijacking that breaks on a mid-range Android. The Mask360 position: take the craft, the pacing and the typography of the SOTD archive, and hold the site to the performance budgets in section 5. A luxury site that stutters on a phone reads cheap on the device the client's customer actually holds.

## 2. HTML and CSS literacy for a creative director

A creative director does not need to write production CSS. A creative director does need to know what the medium can do natively as of October 2026, because every feature below replaces a library, a hack or a compromise that used to cost weight, time or quality. Baseline status is the shared browser-support vocabulary: "Baseline newly available" means the feature works in the current versions of Chrome, Edge, Firefox and Safari; "Baseline widely available" means it has done so for 30 months, so almost every device in use has it; "limited availability" means at least one engine lacks it.

### 2.1 Semantic HTML and the document outline

Semantic HTML means using the element that names the content: header, nav, main, article, section, aside, footer, h1 to h6, figure and figcaption, time, address, button for actions and a for navigation. The reason is threefold: screen readers announce the structure (a VoiceOver user jumps between headings and landmarks), search engines and answer engines weight it, and the page works before CSS loads. One h1 per page, headings in order without skipping levels, and the document reads as an outline when styles are off. A luxury page built from div soup with headlines as images has no outline, which is the first cause of the "beautiful and invisible" problem in section 9.7.

Rules a creative director can check in two minutes: view the page with CSS disabled (a browser extension or the reader view) and confirm it reads top to bottom in the intended order; tab through the page and confirm every interactive element receives focus in a sensible sequence; confirm buttons are button elements and links are a elements (a div with a click handler is invisible to the keyboard).

### 2.2 The cascade and cascade layers

The cascade is the algorithm that decides which of several competing declarations wins: origin and importance first (user agent, user, author; !important reverses), then cascade layers, then specificity, then source order. Cascade layers (@layer, Baseline since March 2022 with Chrome 99, Firefox 97, Safari 15.4) let a stylesheet declare named layers in priority order, so that a reset layer always loses to a components layer, which always loses to an overrides layer, regardless of selector specificity. The practical win for agency work: a third-party embed, a CMS theme or a component library can be dropped into a lower layer and never fight the house styles.

```css
@layer reset, tokens, base, components, utilities, overrides;
@layer components { .card { padding: var(--space-m); } }
```

### 2.3 Custom properties and token wiring

Custom properties (CSS variables, written --name and read with var(--name)) are the mechanism that turns a design token into a live value. The house tokens (design-taste, section 7; the website folder's DESIGN.md) wire as follows:

```css
:root {
  --ink: #0A0A0A; --paper: #F3F2EE; --flame: #F53901; --white: #FFFFFF;
  --hairline: color-mix(in oklab, var(--ink) 12%, transparent);
  --radius-card: 20px; --radius-image: 14px;
  --gutter: clamp(16px, 6vw, 96px);
}
```

Tokens are set once on :root, redefined under a dark scheme or a data attribute, and never hard-coded inside a component. The test: changing a brand colour on a client deck is one line. Colour functions (oklch(), color-mix(), relative colour syntax, contrast-color()) are covered in 04-colour.md, section 6; use oklch for any palette that must hold perceptual lightness across a tint ramp.

### 2.4 Flexbox, grid and subgrid

Flexbox lays out one dimension (a row or a column) and distributes space along it; grid lays out two dimensions at once with named lines and areas. The house rule: grid for the page and for any layout that must align across both axes (an editorial grid of mixed-span image cells), flexbox for components (a label beside an icon, a row of pills). Subgrid (Baseline since September 2023, Chrome 117, Firefox 71, Safari 16) lets a nested element adopt the parent grid's tracks, so card titles, images and captions align across a row even when their heights differ. Before subgrid, that alignment needed JavaScript or fixed heights; now it is one line: grid-template-rows: subgrid.

The 12-column habit from print is not a rule. A 6-column grid with 6vw gutters at desktop and a 4-column grid at phone covers most luxury layouts; the design-taste principle of "a grid you can feel, broken once" needs a grid simple enough to feel.

### 2.5 Container queries and container units

A container query (@container, Baseline February 2023) styles an element according to the size of its containing element instead of the viewport. A product card can switch from stacked to side by side when its container exceeds 420px, whether that container is a sidebar, a two-up or a full-width hero. Container query units: cqi is 1 percent of the container's inline size (cqw, cqh, cqb, cqmin, cqmax also exist). A caption set at font-size: clamp(0.75rem, 2cqi, 1rem) scales with its card, which is how one component serves a 320px phone and a 2560px wall display. Container style queries (@container style(--theme: dark)) are an Interop 2026 focus area; as of October 2026 treat them as progressive enhancement.

### 2.6 Selectors: :has(), :is(), :where(), nesting

- :has() (Baseline December 2023 once Firefox 121 shipped) is the parent selector: article:has(img) styles an article that contains an image; form:has(:invalid) styles a form with an invalid field; body:has(dialog[open]) can lock scroll when a dialog is open. It removes a class of JavaScript state toggles.
- :is() and :where() group selectors. :is() takes the specificity of its most specific argument; :where() has zero specificity, so it is the tool for base styles and resets that must be easy to override.
- Native CSS nesting (Baseline 2023; relaxed syntax that no longer requires the & prefix landed in all engines by 2024) lets a component's states live inside its rule, which reads the way designers think about a component.

### 2.7 Logical properties

Logical properties replace physical directions with flow-relative ones: margin-inline-start instead of margin-left, padding-block instead of padding-top and padding-bottom, inset-inline-end instead of right, border-start-start-radius for the top-left corner in left-to-right text. The reason is Arabic. A Mask360 site for a Dubai client that ships an Arabic version with dir="rtl" on the html element flips automatically when every spacing and alignment rule is logical, and breaks in a hundred places when it is physical. Rule for the house: logical properties only, from the first line, on every project that may ever have an Arabic, Hebrew, Urdu or Persian edition.

### 2.8 Fluid everything: clamp() and the Utopia method

clamp(min, preferred, max) returns the preferred value held between a floor and a ceiling. Written as clamp(1rem, 0.5rem + 2vw, 2rem), the middle term grows with the viewport while the outer terms cap it. Utopia (James Gilyead and Trys Mudford, utopia.fyi, 2021 onwards) is the method that generates a whole type and space scale this way. Its defaults, read from the calculator in October 2026: minimum viewport 360px with an 18px base and a 1.2 ratio (minor third), maximum viewport 1240px with a 20px base and a 1.25 ratio (major third), steps from --step--2 to --step-5. The generated base step is:

```css
--step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);
```

The derivation, for a creative director who wants to check a developer's numbers: slope = (maxSize - minSize) / (maxViewport - minViewport); intercept = minSize - slope x minViewport; preferred = intercept in rem + (slope x 100) vw. For the base step: slope = (20 - 18) / (1240 - 360) = 0.002273; intercept = 18 - 0.002273 x 360 = 17.18px = 1.0739rem; vw term = 0.2273vw. The same formula produces fluid spacing (Utopia's space calculator) so that gutters, section spacing and grid gaps all breathe together. The house applies it with a wider range: a display headline that is 44px at 360px and 160px at 1440px follows the same arithmetic. See 03-typography.md, section 8 for the type scale theory behind the ratios.

### 2.9 Layout and media features worth knowing

| Feature | What it does | Status, October 2026 | Why it matters to the house |
|---|---|---|---|
| aspect-ratio | Reserves the box ratio before media loads | Baseline widely available (2021) | Kills layout shift on image grids; set 4/5 for portrait product cells |
| scroll-snap-type and scroll-snap-align | Snaps scroll to section or item boundaries | Baseline widely available; Interop 2026 focus area for remaining bugs | A horizontal lookbook that snaps per frame without JavaScript |
| Scroll-driven animations (animation-timeline: scroll() and view(), animation-range) | Binds a CSS animation's progress to scroll position or an element's progress through the viewport | Chrome 115 (July 2023), Safari 26 (September 2025); Firefox had it behind a flag at the time of writing and it is an Interop 2026 focus area, so verify Firefox before relying on it without a fallback | The scroll narrative without a JavaScript scroll loop, off the main thread |
| View Transitions (document.startViewTransition and @view-transition) | Animates between two DOM states or two pages with a crossfade or a shared-element move | Same-document transitions in Chrome 111, Safari 18, Firefox 144 (Baseline newly available around October 2025, verify); cross-document in Chrome 126 and Safari 18.2, Firefox pending; Interop 2026 focus area | Product grid to product page morph on a multi-page Shopify store, with no framework |
| @scope | Limits a rule to a subtree, with an optional lower boundary | Baseline newly available since March 2026 (MDN) | Scoped styles for a CMS rich text block without a build step |
| Anchor positioning (anchor-name, position-anchor, anchor(), position-area, @position-try) | Positions an element relative to another element | Baseline newly available since January 2026 when Firefox 147 shipped it; @position-try fallbacks need Safari 18.4 or newer (secondary sources; verify on MDN) | Tooltips, size guides and menus without Popper or Floating UI |
| popover attribute | Native top-layer popover with light dismiss | Baseline January 2025 (Chrome 114, Safari 17, Firefox 125) | Menus and filters that always sit above everything, no z-index wars |
| dialog element | Native modal with focus trap, inert background and Escape to close | Baseline widely available (Safari 15.4, March 2022); Safari 26 added the toggle event | Newsletter capture, size chart, video lightbox: accessible for free |
| details and summary | Native disclosure | Baseline widely available | FAQ and product specifications without JavaScript; the house styles the marker |
| text-wrap: balance | Equalises line lengths in short blocks (up to 6 lines in Chromium, 10 in Firefox) | Baseline since March 2024 | Headlines never leave an orphan on the second line |
| text-wrap: pretty | Slower paragraph-level line breaking that avoids short last lines and poor rags | Chrome 117, Safari 26 (Safari applies it to all lines); MDN flags varying support across values | Body copy rag control (section 3.4) |
| hanging-punctuation | Hangs opening quotes and brackets outside the text block | Limited availability: Safari only | Use as enhancement on pull quotes; never depend on it |
| font-variant-* and font-feature-settings | Switches OpenType features: small caps, ligatures, tabular figures, stylistic sets | Baseline widely available | font-variant-numeric: tabular-nums on every price table |
| text-box-trim and text-box-edge | Trims the leading above the cap height and below the baseline so type sits optically in its box | Baseline newly available since August 2026 (MDN) | A 160px headline aligned to a hairline without hand-tuned negative margins |
| dvh, svh, lvh | Viewport height units that account for the mobile browser chrome appearing and hiding | Baseline November 2023 (Chrome 108, Safari 15.4, Firefox 101) | A 100dvh hero never leaves a strip behind the Safari toolbar |
| prefers-reduced-motion | Media query that is true when the user asked the OS for less motion | Baseline widely available | The house wraps every non-essential animation in @media (prefers-reduced-motion: no-preference) |
| prefers-color-scheme | Media query for light or dark preference | Baseline widely available | Client decks on #0A0A0A still need a light fallback for print |
| forced-colors | Media query true under Windows High Contrast mode, where the OS replaces colours | Baseline (Chrome 89, Firefox 89, Safari 16) | Hairlines and ghost buttons vanish unless borders are real borders |
| color functions | oklch(), color-mix(), relative colour syntax, contrast-color() (Safari 26 first) | See 04-colour.md, section 6 | Palette ramps that hold perceptual lightness |

### 2.10 The house CSS stance

One stylesheet, custom properties for every token, cascade layers for order, logical properties for direction, container queries for components, clamp() for everything that scales, scroll-driven animations where supported and a static fallback where not, native dialog and popover for any overlay. No CSS-in-JS runtime on a marketing site (it costs main-thread time on every render for nothing a static stylesheet cannot do). Tailwind is acceptable in design-engineering work (section 13) when the team already uses it; for a house microsite the hand-written stylesheet in the website folder is the reference.

## 3. Typography on the web

Type theory, pairing and the house faces are in 03-typography.md and design-taste, references/type.md. This section is the delivery mechanics that decide whether that typography arrives on the device intact.

### 3.1 Loading strategy

- Format: WOFF2 only. It is Baseline everywhere that matters and about 30 percent smaller than WOFF because of Brotli compression. Shipping TTF or OTF to the browser is a 2015 habit.
- Self-host. Google Fonts served from fonts.googleapis.com costs a second connection (DNS, TLS, round trip) before the font request starts, and the EU's Munich court ruled in January 2022 that embedding Google Fonts from Google's servers transfers IP addresses without consent, which is a GDPR issue for any site with European visitors. The house site self-hosts Space Grotesk in website/public/assets/fonts.
- Subset. A Latin subset of a grotesk is 15 to 30KB per weight in WOFF2; the full file with Cyrillic, Greek and Vietnamese is 2 to 4 times that. Use unicode-range so the browser only downloads the subset a page needs: Latin for the English site, Devanagari for Hindi, Arabic for the Gulf edition.
- Preload the one or two files above the fold with link rel="preload" as="font" type="font/woff2" crossorigin, and nothing else; preloading six weights delays the LCP image.
- font-display: swap shows fallback text immediately and swaps when the font arrives; optional shows the fallback and only uses the web font if it arrives within about 100ms, otherwise keeps the fallback for that page view. The house uses swap for the brand face with a metric-matched fallback (3.2), so the swap is invisible, and optional for any decorative face.
- Budget: two files for a one-family site (a variable font covers it), 120KB of fonts in total on first view, under 60KB when the site is one weight. A luxury site with 400KB of webfonts is spending its performance budget on weights nobody sees.

### 3.2 Metrics and fallbacks

A font swap causes layout shift when the fallback has different widths and vertical metrics. The fix is a metric-matched fallback: an @font-face rule that loads a local system font and adjusts it with size-adjust (scales glyph widths), ascent-override, descent-override and line-gap-override (vertical metrics). Tools such as Fontaine or the capsize library generate the values. Example for a grotesk:

```css
@font-face {
  font-family: "Grotesk Fallback";
  src: local("Arial");
  size-adjust: 104%; ascent-override: 92%; descent-override: 24%; line-gap-override: 0%;
}
```

The result: text set in the fallback occupies the same lines as text in the web font, so the swap moves nothing and CLS stays at zero. font-size-adjust (Baseline July 2024) is the related property that normalises x-height across families in the stack.

### 3.3 The fluid type scale with exact formulas

Section 2.8 gives the Utopia derivation. A house scale, written as clamp() values from 360px to 1440px viewports, with the reason for each range:

| Token | Min (360px) | Max (1440px) | clamp() | Role |
|---|---|---|---|---|
| --display | 44px | 160px | clamp(2.75rem, -0.9028rem + 10.7407vw, 10rem) | h1 at 700, leading 0.95, tracking -3 percent; the design-taste "huge against tiny" |
| --h2 | 32px | 72px | clamp(2rem, 0.75rem + 3.7037vw, 4.5rem) | Section heads at 600, leading 1.0 |
| --lede | 20px | 28px | clamp(1.25rem, 1.0833rem + 0.7407vw, 1.75rem) | Opening paragraphs at 300, leading 1.3 |
| --body | 17px | 19px | clamp(1.0625rem, 1.0208rem + 0.1852vw, 1.1875rem) | Body at 300, leading 1.5 |
| --micro | 11px | 11px | 0.6875rem | Fixed; caps labels at 400 with +12 percent tracking do not scale |

Formula per row: slope = (max - min) / (1440 - 360) = (max - min) / 1080; intercept = min - slope x 360; the clamp middle is intercept in rem plus slope x 100 in vw. Check the display row: slope = 116 / 1080 = 0.10741; intercept = 44 - 38.67 = 5.33px... the sign shows why the display row has a negative rem intercept: a range this steep crosses zero below 360px, which is fine because clamp() floors it at 2.75rem. Fluid type is set on the html element with a base of 100 percent so that a user's browser font size preference still scales everything; setting html { font-size: 62.5% } to make 1rem equal 10px defeats that preference and is a defect.

### 3.4 Line length, rag, hyphens, kerning, optical size

- Line length: 45 to 75 characters per line for body copy (Bringhurst's range; 66 is the classic target). On the web: max-width: 65ch on the paragraph container, where ch is the width of the 0 glyph in the current font. A lede at 28px set across a 1440px viewport runs 120 characters and is unreadable; cap it.
- Rag: text-wrap: pretty on body paragraphs and text-wrap: balance on headlines and captions (up to six lines). Never justify body copy on the web; browsers lack the paragraph-level justification of InDesign and produce rivers.
- Hyphens: hyphens: auto needs a lang attribute on the html element (lang="en-GB", lang="hi", lang="ar") because the dictionary is per language. Use it on narrow columns under 40ch; combine with hyphenate-limit-chars: 7 3 3 where supported so that two-letter fragments do not appear.
- Kerning: font-kerning: normal is the default in current engines; set it explicitly on display sizes and check that the font actually carries a kern table (many free faces do not). Tracking on the web is letter-spacing in em: -0.03em for display grotesks, +0.12em for 11px caps labels (house values). Tracking in px breaks when the size is fluid.
- Optical size: font-optical-sizing: auto (the default) lets a variable font with an opsz axis choose the design for the rendered size: finer hairlines at 160px, sturdier strokes at 11px. Faces with opsz worth knowing: Roboto Flex, Source Serif 4, Fraunces, Literata, Newsreader. A display cut used at text size without opsz reads thin and cheap; a text cut used at 160px reads clumsy.
- Figures: font-variant-numeric: tabular-nums on any column of prices or dates; lining figures in caps labels; oldstyle figures (onum) in running serif text.

### 3.5 The system font stack and variable font performance

The system stack is the zero-byte option:

```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

It renders San Francisco on Apple, Segoe on Windows, Roboto on Android, and arrives at 0KB with no swap. The house never uses it as the brand voice (design-taste: Inter and its clones are not a voice; the system stack is the same problem) but uses it for form fields, legal pages and the dashboard chrome of a tool.

A variable font carries an axis range (weight 300 to 700, width, optical size, italic) in one file. One Space Grotesk variable file at about 60 to 80KB WOFF2 replaces five static weights at 25KB each; the saving is small in bytes and large in requests, and every intermediate weight becomes available for fine tuning (a 450 for bold inside 300 body). The cost: the file loads as one unit, so a page that only needs 300 waits for the whole range, and animating font-variation-settings triggers layout on every frame (animate transforms, never type axes, on anything that runs longer than a hover). Arabic and Devanagari variable fonts exist (Noto Sans Arabic, Noto Sans Devanagari, IBM Plex Sans Arabic) and are 2 to 5 times the byte size of Latin because of glyph count; subset by script and load per language edition.

## 4. Images and media

### 4.1 Responsive images

The srcset attribute lists candidate files with width descriptors; the sizes attribute tells the browser how wide the image will render at each breakpoint so it can pick the smallest adequate file before layout. Without sizes the browser assumes 100vw and downloads the largest candidate on every phone.

```html
<img src="pavilion-1200.webp"
     srcset="pavilion-720.webp 720w, pavilion-1200.webp 1200w, pavilion-1800.webp 1800w"
     sizes="(min-width: 1024px) 60vw, 100vw"
     width="1800" height="1125" alt="The Anantara pavilion at dusk" decoding="async">
```

The house set, from website/README.md: landscape at 1800, 1200 and 720 wide; portrait at 1440, 1000 and 640. Always width and height attributes (the browser reserves the aspect ratio before load, which is what keeps CLS at zero). Art direction, when the phone needs a different crop and the desktop a wide one, uses the picture element with media attributes and separate sources; a single wide hero cropped by object-fit on a phone loses the subject in two cases out of three, so the house shoots and crops a portrait variant for every hero.

The 2x rule: cap device pixel ratio at 2. A 3x file for an iPhone Pro is 2.25 times the bytes of the 2x file and indistinguishable at viewing distance for photographic content; a browser given a srcset will pick 3x if it exists. Line art and UI icons go to SVG where the question disappears.

### 4.2 Formats, October 2026

| Format | Use | Savings | Support | Notes |
|---|---|---|---|---|
| AVIF | Photography, the hero | About 30 to 50 percent smaller than JPEG at matched quality | All engines since Edge 121 (January 2024) | Slow to encode; encode once in the pipeline, not on the fly; quality 50 to 65 in most encoders is the luxury sweet spot |
| WebP | Photography fallback, UI imagery | 25 to 34 percent smaller than JPEG (Google's own figure) | Everywhere since Safari 14 (2020) | The house default today because the toolchain is mature; quality 75 to 82 |
| JPEG XL (.jxl) | Future photography format; lossless JPEG recompression saves about 20 percent | Comparable to AVIF for photos, better for lossless and progressive | Safari 17 (September 2023, no animation or progressive); Chromium reversed its 2022 removal in November 2025 and Chrome 155 shipped it in October 2026 with the Rust decoder jxl-rs; Mozilla announced adoption in August 2026 and the shipping version was unsettled at the time of writing | Serve through picture with AVIF and WebP fallbacks; do not make it the only source until a year of all-engine support has passed |
| JPEG (mozjpeg, progressive) | Universal fallback, email | Baseline | Everything | Quality 75 to 85; progressive so the hero paints in passes |
| PNG | Only for true lossless needs: screenshots with text, flat UI with transparency where SVG is impossible | None for photos (10 times a JPEG) | Everything | A PNG photograph on a luxury site is the single most common weight defect |
| SVG | Logos, icons, line art, type set as outlines for a mark | Tiny | Everything | Hygiene below |

SVG hygiene: run every exported file through SVGO (removes editor metadata, which is often 60 to 90 percent of the file); no embedded raster images; viewBox present and width and height absent so it scales; ids unique when inlined (duplicates break gradients and clip paths across inlined symbols); fill="currentColor" on icons so CSS colours them; aria-hidden on decorative icons and a title element on meaningful ones; fonts converted to outlines in a logo so no font dependency ships inside the mark.

### 4.3 Compression targets and the LCP image

- The hero image under 200KB at 1800 wide in AVIF or WebP. A full-bleed luxury photograph with real grain compresses worse than a clean render; shoot and grade knowing that grain costs bytes, and add grain as a CSS overlay (a tiled 200px noise PNG at 8KB, mix-blend-mode: overlay) instead of baking it into a 900KB JPEG.
- The LCP image is the largest image or text block in the first viewport; it is the single element that decides Largest Contentful Paint (section 5.1). Rules: never loading="lazy" on it (lazy loading defers the request until the browser has laid out the page, which adds hundreds of milliseconds); add fetchpriority="high" so the browser requests it before the fonts and scripts; preload it with link rel="preload" as="image" and imagesrcset when the hero is set as a CSS background (CSS backgrounds are discovered late, after the stylesheet parses); inline a 20 to 40 byte dominant colour or a blurred 20px placeholder in the markup so the first paint has the composition.
- Everything below the fold: loading="lazy" and decoding="async".
- The grid page: 12 product images at 60KB each is 720KB before the page has done anything; serve 640 wide WebP at quality 75 for cells, defer below the fold, and the first view is under 300KB of imagery.

### 4.4 Image CDNs

An image CDN stores one master and serves resized, reformatted, compressed variants from a URL parameter, with the format negotiated per browser (Accept header) so AVIF goes to Chrome and WebP to an older Safari.

| Service | Model | Numbers, October 2026 | When |
|---|---|---|---|
| Cloudinary | URL transformations (f_auto, q_auto, w_, c_fill, g_auto) with AI cropping | Free tier of 25 monthly credits; one credit is 1,000 transformations or 1GB storage or 1GB bandwidth (verify current terms) | CMS-driven sites with editors who upload anything |
| imgix | URL rendering API on top of your bucket | Priced on origin images and bandwidth; verify | Teams that already own an S3 or GCS bucket |
| Vercel Image Optimization | next/image or the /_vercel/image endpoint | Hobby: 5,000 transformations, 300,000 cache reads, 100,000 cache writes a month; on demand transformations $0.05 to $0.0812 per 1,000; source max 8192px a side; accepts JPEG, PNG, WebP, AVIF; transformed output capped at 10MB (Vercel docs, updated 11 August 2026) | Next.js sites on Vercel |
| Cloudflare Images and Transformations | Transform via URL on any zone | 5,000 unique transformations a month free, then $0.50 per 1,000 (Cloudflare pricing page) | Static sites on Cloudflare Pages |
| Shopify CDN | Liquid image_url filters with width and format | Included in the plan | Every Shopify store; do not route product images elsewhere |

The house default for a static microsite is none of these: pre-render the WebP set in the build (website/build.mjs and assets-manifest.json), because a page with 30 images needs no runtime service.

### 4.5 Video on the web

Autoplay rules: a video autoplays only when it is muted (the muted attribute, and on iOS the attribute must be present in the HTML, not set later by script in some cases), has playsinline so iOS does not force fullscreen, and ideally loop for an ambient hero. WebKit set this policy for iOS 10 in 2016 and for macOS Safari 11 in 2017; Chrome 66 (April 2018) adopted the same muted-autoplay rule. Low Power Mode on iOS blocks autoplay entirely, so the poster attribute must be a frame that stands alone as the hero image, and the poster must be the LCP-grade image (section 4.3), encoded as WebP, never the default black frame.

Formats and codecs:

| Codec | Container | Support | Use |
|---|---|---|---|
| H.264 (AVC) | MP4 | Universal, hardware decoded everywhere | The fallback and often the only file; CRF 23 for a film, 28 to 30 for an ambient loop |
| H.265 (HEVC) | MP4 (hvc1 tag for Safari) | Safari and iOS hardware; Chrome only where the OS has a licensed decoder | 30 to 40 percent smaller than H.264 at matched quality; serve to Safari via a source with type="video/mp4; codecs=hvc1" |
| AV1 | MP4 or WebM | Chrome, Firefox, Edge; Safari 17 on iPhone 15 Pro and later with hardware decode; software decode elsewhere drains batteries | 30 to 50 percent smaller than H.264; the right choice for Chrome on Android in India when a hardware decoder exists (2023 and later mid-range chips) |
| VP9 | WebM | Chrome, Firefox, Edge, Safari 14.1 and later on macOS, patchy on iOS | The house second file for loops (README: VP9 CRF 36) |

Source order matters: the browser takes the first source it can play, so list AV1 or HEVC before H.264.

Streaming: HLS (HTTP Live Streaming, Apple's segmented format with an .m3u8 playlist) is native in Safari and used through a library (hls.js) elsewhere; DASH (MPEG-DASH, the open equivalent) plays through Media Source Extensions, which iPhone Safari lacked until Managed Media Source in iOS 17.1 (2023), so HLS is the practical universal choice. Both deliver adaptive bitrate: several renditions (240p to 1080p or 4K) and the player switches by measured bandwidth, which is the only way a 90-second brand film plays cleanly on a Jio 4G connection in Jaipur and on fibre in Dubai Marina from one URL.

Hosted video, October 2026 list prices:

| Service | Price | Notes |
|---|---|---|
| Mux | On demand encoding free (1080p basic), storage $0.003 per minute per month, delivery $0.001 per minute after the first 100,000 delivery minutes a month free; $20 monthly credit on pay as you go | Player, data and captions included; the design-engineering default |
| Cloudflare Stream | $5 per 1,000 minutes stored per month, $1 per 1,000 minutes delivered | No free tier listed; predictable for a campaign film with known views |
| Vimeo | Plan based; embeds carry Vimeo chrome unless on Pro or above with a custom player | Fine for a client's showreel; weak for a 5-second ambient loop |
| Bunny Stream | Low per-GB pricing (verify current rates) | Budget option for Indian clients |
| YouTube | Free | Never on a luxury page: the embed loads about 500KB to 1MB of script and the end screen shows competitors |

Background video weight budgets: a hero loop at 1280 wide, 24fps, muted, 6 to 10 seconds, under 2.5MB in H.264 and under 1.5MB in VP9 or AV1; a looping portrait reel for the phone cut separately at 720 wide under 1.2MB; preload="metadata" so the browser fetches headers only until it is about to play; poster set. The hero video that kills LCP: a 20MB autoplay film with no poster. The browser reports LCP on the first frame painted, which arrives after megabytes of download; the fix is the poster image as LCP candidate, the video lazily attached after the page is interactive, and never more than one autoplay video in the viewport at once.

### 4.6 3D, WebGL, canvas and shaders

WebGL is the browser API for GPU rendering, universal since 2014; WebGPU is its successor, with compute shaders and a modern pipeline, shipped in Chrome 113 (2023), Safari 26 (September 2025) and Firefox on Windows in 2025, reported as Baseline newly available from January 2026 by secondary sources (verify on webstatus.dev). Libraries: three.js (the standard scene graph library, versioned as rNNN monthly releases, with a WebGPU renderer that falls back to WebGL), React Three Fiber (three.js as React components, by Poimandres, used with drei helpers), Babylon.js (Microsoft, heavier, stronger for configurators), model-viewer (Google's web component that shows a glTF model with orbit, AR on Android via Scene Viewer and on iOS via Quick Look with a USDZ file; the right answer for a single product in 3D), Spline (a design tool with a browser runtime; its embeds commonly run 1 to 3MB of runtime plus the scene and run the GPU continuously, so use the exported image or video for anything that does not need interaction).

Budgets for 3D on a luxury page: total GLB under 3MB with Draco or Meshopt compression, textures as KTX2 (Basis Universal) under 1MB total, one scene per page, 60fps on an iPhone 12 and 30fps on a mid-range Android or the scene is cut, a static fallback image for prefers-reduced-motion and for devices that fail a GPU check, and the scene loads after the LCP image is painted.

Shaders and canvas: a GLSL fragment shader is the cheapest way to produce the Immersive Garden image distortion (section 6.5) because the GPU does the work; a 2D canvas image sequence (the Apple AirPods technique: 100 to 150 JPEG frames scrubbed by scroll) costs 5 to 15MB and should be reserved for the one peak moment, with WebP frames at 1440 wide, loaded progressively, and a video fallback on phones.

### 4.7 Lottie and Rive

Lottie (Airbnb, 2017) renders After Effects vector animation exported through the Bodymovin plugin as JSON; lottie-web is the player (about 60KB gzipped for the full build, less for the light build), dotLottie is the zipped container that cuts file size 80 percent and bundles assets. Use it for a mark animation, a line illustration, a loader that is the idea. Avoid it for anything with gradients, masks and effects, where it renders slowly on Android. Rive (2020 onwards) is the alternative: a design tool with a state machine, so the animation responds to input (hover, scroll, a number) without code, and a runtime (rive-wasm, about 100 to 150KB) that plays at a fraction of Lottie's CPU cost for interactive work. House rule: Lottie for a short one-shot, Rive for anything stateful, native CSS or SVG animation for anything simpler than either.

## 5. Performance as craft

### 5.1 Core Web Vitals, October 2026

Core Web Vitals are Google's three field metrics for user experience, measured at the 75th percentile of real page loads over a 28-day window in the Chrome User Experience Report (CrUX), segmented by mobile and desktop. Google states on its page experience documentation that "Core Web Vitals are used by our ranking systems."

| Metric | Measures | Good | Needs improvement | Poor | Typical luxury-site cause of failure |
|---|---|---|---|---|---|
| LCP, Largest Contentful Paint | Time until the largest image or text block in the viewport is painted | 2.5s or less | 2.5 to 4.0s | Over 4.0s | A 3MB hero, a CSS background image, a preloader that hides content for 3 seconds (the preloader counts: LCP is the paint of the largest element, and a full-screen loader with a percentage counter can itself be the LCP element, which hides the real cost) |
| INP, Interaction to Next Paint | The latency of the slowest interaction (tap, click, key press) over the visit, from input to the next frame painted | 200ms or less | 200 to 500ms | Over 500ms | A JavaScript smooth-scroll library on the main thread plus React hydration plus a cookie banner all firing on first tap |
| CLS, Cumulative Layout Shift | The sum of unexpected layout movements, weighted by area and distance | 0.1 or less | 0.1 to 0.25 | Over 0.25 | Images without width and height, a font swap without metric overrides, a late-injected consent banner that pushes the page down |

INP replaced First Input Delay (FID) on 12 March 2024. The thresholds have not changed since; Google's vitals page (updated 31 October 2024) states that stable metrics change at most once a year and are documented when they do. Any claim that LCP tightened to 2.0s is unsupported by Google's documentation.

### 5.2 Budgets

HTTP Archive's 2025 Web Almanac measured the median page at 2,412KB on desktop and 2,164KB on mobile, with median image bytes of 1,058KB and 911KB and median JavaScript of 708KB and 646KB; the 90th percentile page is 9,179KB desktop and 8,337KB mobile; home pages specifically run heavier at 2.86MB and 2.56MB. Those are the numbers to beat, because the median page is slow on the median phone. Alex Russell's "Performance Inequality Gap" series argues the budget for a 5-second first load on a baseline Android over a baseline mobile connection is roughly 1.3MB total with JavaScript in the low hundreds of KB; read the current year's post for his exact figures.

House budgets by page type, first view, compressed over the wire:

| Page type | Total | JavaScript | Fonts | Hero media | Images in first viewport | Notes |
|---|---|---|---|---|---|---|
| Scroll-narrative microsite | 1.5MB | 150KB | 120KB | 200KB poster plus a loop under 2.5MB that loads after LCP | 400KB | Lenis plus GSAP plus ScrollTrigger is about 70KB gzipped; that is half the JS budget before a line of site code |
| Brand or hospitality site | 1.2MB | 120KB | 120KB | 200KB | 400KB | Framework hydration counts against JS |
| Shopify PLP | 1.0MB | 250KB | 80KB | none | 300KB | Theme JS plus apps; audit every app script |
| Shopify PDP | 1.2MB | 250KB | 80KB | 200KB first gallery image | 400KB | Zoom images load on demand |
| Deal sheet or pitch page | 800KB | 50KB | 80KB | 150KB | 300KB | Must print well too (section 14.6) |
| Email | 102KB of HTML (Gmail clips above this) | 0 | 0 | 150KB per image, under 600KB total | | Section 10 |

A budget is enforced in the build (a bundle size check in CI that fails over the limit) or it is a wish.

### 5.3 Measuring

- Lighthouse (lab): the Chrome audit tool, version 13.6.0 as of 27 October 2026, runs a simulated mobile load (150ms round trip, 1.6Mbps down, 750kbps up, 4x CPU slowdown on a desktop machine) and produces a performance score weighted FCP 10 percent, Speed Index 10 percent, LCP 25 percent, Total Blocking Time 30 percent, CLS 25 percent (unchanged since Lighthouse 10). Lab scores vary run to run by 5 to 10 points; compare the median of five runs.
- PageSpeed Insights: Lighthouse plus the CrUX field data for that URL and origin, which is what Google's ranking systems see. A page can score 95 in the lab and fail CWV in the field because real visitors are on 2022 Androids on Airtel 4G.
- WebPageTest (Catchpoint): real devices and real locations, filmstrips, waterfall charts, connection throttling by profile; test from Mumbai and Dubai nodes.
- CrUX: the field dataset, free through the CrUX dashboard, BigQuery and the Search Console Core Web Vitals report. A site needs enough traffic to appear; most microsites never will, which is why the lab numbers and a mid-range Android in hand (section 14.4) matter more for the house.
- Chrome DevTools Performance panel: find the long task (anything over 50ms blocks the main thread and feeds INP) and the element that caused the layout shift.

Speed Index measures how quickly the visible content of the page is painted, by integrating visual completeness over time from a filmstrip. For a scroll-narrative site it is the honest metric: a preloader that holds a blank screen for 2 seconds and then reveals everything scores a terrible Speed Index even when LCP looks fine, which is exactly the user's experience.

### 5.4 The luxury site paradox

Heavy and slow reads cheap on a phone. The design-taste physics of expensive (space, slowness, stillness) are often implemented as 40MB of WebGL and a 4-second loader, which on a Redmi over 4G reads as broken. The audience that buys a Mumbai penthouse or a Dubai Marina branded residence opens the link from WhatsApp, in a lift, on a phone: the page must feel instant and then feel slow by choice. Speed is the luxury; motion is the accent. A site that is fast on a mid-range Android and still looks like four hundred hours is the house standard.

### 5.5 Delivery: CDN, edge, caching, preloading, code splitting, hydration

- A CDN (content delivery network) caches the site at edge nodes near the visitor; Vercel, Netlify and Cloudflare all front their hosting with one. India and the Gulf both have nodes in all three; verify the Mumbai, Chennai, Dubai and Riyadh presence for the chosen host when the client's audience is there.
- Caching headers: fingerprinted assets (site.3f2a9c.css) get Cache-Control: public, max-age=31536000, immutable, which is exactly what the house vercel.json and netlify.toml set for /assets/*; HTML gets a short max-age with revalidation so a content change is live within minutes.
- Preloading: the LCP image, the one or two critical fonts, nothing else; modulepreload for the first script chunk. Over-preloading starves the critical path.
- Code splitting: ship the JavaScript for the first viewport and lazy-load the rest on interaction or intersection; a product configurator's 400KB bundle loads when the configurator scrolls into view.
- Hydration cost: a framework that server-renders HTML and then re-runs the component tree in the browser to attach event handlers (React, Vue, Svelte in SSR mode) spends main-thread time proportional to the component count before anything is interactive; on a mid-range Android that is 500ms to 2s of blocked thread and a direct INP failure. Islands architecture (Astro's model: the page is static HTML and only the interactive components ship JavaScript) and React Server Components (Next.js App Router: components that render on the server and send no JavaScript) are the two mainstream answers. A marketing site with three interactive elements has no reason to hydrate a whole page.
