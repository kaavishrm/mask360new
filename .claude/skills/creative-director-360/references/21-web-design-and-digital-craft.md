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
- [9. SEO and discoverability as craft](#9-seo-and-discoverability-as-craft)
- [10. Email design](#10-email-design)
- [11. Microsites and campaign pages](#11-microsites-and-campaign-pages)
- [12. Experimentation and analytics literacy](#12-experimentation-and-analytics-literacy)
- [13. Design engineering as of October 2026](#13-design-engineering-as-of-october-2026)
- [14. Cross browser and device reality](#14-cross-browser-and-device-reality)
- [15. Launch QA checklist and maintenance plan](#15-launch-qa-checklist-and-maintenance-plan)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. The medium

### 1.1 The viewport is unknown

A web page is rendered by a device the designer has never seen, at a width that can be anything from 320px (an older iPhone SE in portrait) to 5120px (an ultrawide monitor), with a user zoom level, a system font size and a colour scheme preference the designer does not control. John Allsopp's "A Dao of Web Design" (A List Apart, 2000) set the founding attitude: accept the ebb and flow of things and design for flexibility. Every rule in this file descends from that.

Three working consequences:

- Fixed pixel layouts break on the first device the designer did not test. Fluid units (percent, vw, rem, fr, and cqi, which is 1 percent of a container's inline size, section 2.5) and the `clamp()` function, which holds a fluid value between a minimum and a maximum (section 2.8), replace them.
- Content must survive without any single enhancement: a font that fails to load, a script that is blocked, an image that is slow. This is progressive enhancement: build the HTML so the page works with nothing else, then layer CSS, then JavaScript (Steven Champeon coined the term in 2003).
- Mobile first (Luke Wroblewski, 2009 essay and 2011 book) means the default CSS is the narrow layout and media queries add complexity as width grows. The reason is arithmetic: in India, Android is 93.89 percent of mobile OS share and iOS 6.05 percent (StatCounter, September 2026); in the UAE, Android is 73.3 percent and iOS 26.68 percent. A luxury audience in Dubai is heavily iPhone; a luxury audience in Mumbai is still mostly Android. Both are phones first.

### 1.2 The responsive lineage, 2010 to 2026

| Year | Event | What it changed |
|---|---|---|
| 2010 | Ethan Marcotte, "Responsive Web Design", A List Apart, 25 May | Fluid grids, flexible images, media queries as one discipline |
| 2012 to 2015 | Flexbox stabilises across browsers | One-dimensional layout without floats |
| 2017 | CSS Grid ships in Chrome 57, Firefox 52, Safari 10.1 within one month (March) | Two-dimensional layout; the editorial grid becomes native |
| 2018 | Jen Simmons names "intrinsic web design" | Layouts that respond to content and container, using min-content, max-content, fr, `minmax()`, and auto-fill |
| 2020 | `clamp()` reaches all engines | Fluid type and spacing without media queries |
| 2023 | Container queries reach Baseline, the state of working in all four browser engines (section 2), with Chrome 105, Safari 16, Firefox 110 | Components respond to their container, so a card is designed once |
| 2023 | Scroll-driven animations in Chrome 115 | Scroll narrative without a JavaScript scroll loop |
| 2025 | Safari 26.0 (15 September 2025) ships anchor positioning, scroll-driven animations, `text-wrap: pretty`, WebGPU | The last holdout engine for the scroll narrative stack |
| 2026 | Interop 2026 (the joint browser-vendor programme of agreed focus areas, announced 12 February 2026) names anchor positioning, container style queries, dialogs and popovers, scroll-driven animations, view transitions, scroll snap, `contrast-color()` among its focus areas | Expect convergence by end of 2026 |

Intrinsic web design (Simmons, 2018) is the current frame. The six ingredients she lists: fluid and fixed combined, stages of squishiness (fixed, fr, minmax, auto), truly two-dimensional layout, nested contexts, expanding and contracting content, and media queries only when needed. The practical rule for a creative director: specify a layout as a set of behaviours (this column never narrower than 40ch, this image never wider than 60vw, this gap fluid between 24px and 96px), because a developer builds behaviours and the device decides the width.

### 1.3 What the web does that print and apps do not

- Addressable: every state can have a URL, so a campaign page, a deal sheet, a single product and a single frame of a film can each be linked, shared on WhatsApp and indexed.
- Uninstalled: there is no store review, no download, no update prompt. The cost of a visit is one tap. The cost of a bad first second is the visit.
- Indexed: Google, Bing and the answer engines read the HTML. A page is also a document for machines (section 9).
- Unbounded: no page size, no trim, no fixed duration. Scroll is the timeline.
- Accessible by default: semantic HTML gives screen readers, keyboard users and search engines the same structure for free, until a designer removes it.
- Live: content changes without a reprint, and the page can read the time, the viewport, the preferences and the connection.

The cost of these powers is that the web is the only medium where the designer does not control the final rendering. Craft on the web is the discipline of specifying behaviour precisely enough that the unknown device still produces the intended result.

### 1.4 Anatomy of an Awwwards Site of the Day

Awwwards (founded 2009, Valencia) remains the reference jury for the kind of site Mask360 sells. Its evaluation page (read October 2026) sets the weights: Design 40 percent, Usability 30 percent, Creativity 20 percent, Content 10 percent. Each approved submission goes to at least 18 jurors, the 3 scores furthest from the average are removed automatically, and voting lasts 5 days; a site with a high jury score and votes from at least 10 PRO users can win Site of the Day (SOTD) before the 5 days end. A real example, the Lyon Béton SOTD page, shows 18 jurors, criterion averages of Design 7.57, Usability 7.3, Creativity 7.11, Content 7.3, and a winning score of 7.37 out of 10, alongside a separate "Awwwards users" score of 8.91 that does not count towards the jury award.

What the numbers teach: Design and Usability together are 70 percent of the score. A site that is spectacular and unusable scores lower than a site that is beautiful and works. Creativity at 20 percent rewards the one idea (design-taste, section 4, "the single idea"), and Content at 10 percent still punishes lorem ipsum, stock imagery and generic copy.

Awards in the system: Site of the Day (daily), Site of the Month, Site of the Year, Honorable Mention (scores just below SOTD), Developer Award (judged separately on code quality and performance), and the Mobile Excellence tag.

What winners share, read across the 2024 to 2026 SOTD archive: a single visual idea carried through every section; typography as the system (one family, extreme scale contrast); one peak interaction (a transition drawn in WebGL, the browser's GPU rendering API covered in section 4.6, an image sequence, or a pinned chapter); custom loaders that belong to the idea; real photography or real 3D; an ending that closes the page. What winners also share, and what the house refuses: first-view WebGL scenes and image sequences measured in megabytes, custom cursors, scroll hijacking that breaks on a mid-range Android. The Mask360 position: take the craft, the pacing and the typography of the SOTD archive, and hold the site to the performance budgets in section 5. A luxury site that stutters on a phone reads cheap on the device the client's customer actually holds.

Study list, from Awwwards' Sites of the Year page (read October 2026): 2022, KPR (Resn), The Other Side of Truth (The First The Last), Persepolis Reimagined (Monks); 2023, Lusion v3 (Lusion), Noomo Agency (Noomo), Mana Yerba Mate (Louis Paquet); 2024, Igloo Inc (abeto), Don't Board Me (The First The Last), Opal Tadpole (Claudio Guglieri); 2025, Lando Norris (OFF+BRAND.), Messenger (abeto). For each, record the single idea, the peak, the stack and the first-view weight on the India test Android (section 14.4), and note where it breaks the budget in section 5.2.

Other juries: FWA (daily awards for interactive craft), CSS Design Awards, The Webby Awards (an academy vote plus a separate People's Voice), D&AD (Digital Design pencils), Cannes Lions (Digital Craft) and The One Show (Interactive). Enter work where its strength is judged: craft-led work at D&AD and Cannes Digital Craft, interaction-led work at Awwwards and FWA.

## 2. HTML and CSS literacy for a creative director

A creative director needs to know what the medium can do natively as of October 2026, because every feature below replaces a library, a hack or a compromise that used to cost weight, time or quality. Baseline status is the shared browser-support vocabulary of the web-features project, shown on MDN and webstatus.dev, and every status below was read from its data in October 2026: "Baseline newly available" means the feature works in the current versions of Chrome, Edge, Firefox and Safari; "Baseline widely available" means it has done so for 30 months, so almost every device in use has it; "limited availability" means at least one engine lacks it.

### 2.1 Semantic HTML, headings and the viewport

Semantic HTML means using the element that names the content: header, nav, main, article, section, aside, footer, h1 to h6, figure and figcaption, time, address, button for actions and a for navigation. The reason is threefold: screen readers announce the structure (a VoiceOver user jumps between headings and landmarks), search engines and answer engines weight it, and the page works before CSS loads. One h1 per page, headings in order without skipping levels, and the document reads as an outline when styles are off. A luxury page built from div soup with headlines as images has no outline, which is the first cause of the "beautiful and invisible" problem in section 9.7. The HTML5 outline algorithm, in which an h1 inside a section counted as a lower level, was never implemented by browsers or screen readers and was removed from the WHATWG HTML standard in 2022, so a heading's level is exactly its number. The accessibility tree, landmarks and the first rule of ARIA are in 11-accessibility-and-inclusive-design.md, section 4.

Every page carries `meta name="viewport" content="width=device-width, initial-scale=1"`, and never `maximum-scale=1` or `user-scalable=no`: blocking pinch zoom fails WCAG (the Web Content Accessibility Guidelines) 1.4.4 Resize Text (AA) and many Android browsers still honour the block. Add `interactive-widget=resizes-content` where the on-screen keyboard must push a fixed footer up, in the browsers that support it.

Rules a creative director can check in two minutes: view the page with CSS disabled (a browser extension or the reader view) and confirm it reads top to bottom in the intended order; tab through the page and confirm every interactive element receives focus in a sensible sequence; confirm buttons are `button` elements and links are `a` elements (a div with a click handler is invisible to the keyboard).

### 2.2 The cascade and cascade layers

The cascade is the algorithm that decides which of several competing declarations wins: origin and importance first (user agent, user, author; `!important` reverses), then cascade layers, then specificity, then source order. Cascade layers (`@layer`, Baseline since March 2022 with Chrome 99, Firefox 97, Safari 15.4) let a stylesheet declare named layers in priority order, so that a reset layer always loses to a components layer, which always loses to an overrides layer, regardless of selector specificity. The practical win for agency work: a third-party embed, a CMS theme or a component library can be dropped into a lower layer and never fight the house styles.

```css
@layer reset, tokens, base, components, utilities, overrides;
@layer components { .card { padding: var(--space-m); } }
```

### 2.3 Custom properties and token wiring

Custom properties (CSS variables, written `--name` and read with `var(--name)`) are the mechanism that turns a design token into a live value. The house tokens (design-taste, section 7; the website folder's DESIGN.md) wire as follows:

```css
:root {
  --ink: #0A0A0A; --paper: #F3F2EE; --flame: #F53901; --white: #FFFFFF;
  --hairline: color-mix(in oklab, var(--ink) 12%, transparent);
  --radius-card: 20px; --radius-image: 14px;
  --gutter: clamp(16px, 6vw, 96px);
}
```

Tokens are set once on `:root`, redefined under a dark scheme or a data attribute, and never hard-coded inside a component. The test: changing a brand colour on a client deck is one line. Colour functions (`oklch()`, `color-mix()`, relative colour syntax, `contrast-color()`) are covered in 04-colour.md, section 5; use oklch for any palette that must hold perceptual lightness across a tint ramp. Tokens that encode a Latin typographic habit (`letter-spacing`, `text-transform`, caps labels) are declared per script, because an Arabic or Hindi edition inherits them (section 9.10).

### 2.4 Flexbox, grid and subgrid

Flexbox lays out one dimension (a row or a column) and distributes space along it; grid lays out two dimensions at once with named lines and areas. The house rule: grid for the page and for any layout that must align across both axes (an editorial grid of mixed-span image cells), flexbox for components (a label beside an icon, a row of pills). Subgrid (Baseline newly available September 2023 with Chrome 117, Firefox 71, Safari 16; widely available since March 2026) lets a nested element adopt the parent grid's tracks, so card titles, images and captions align across a row even when their heights differ. Before subgrid, that alignment needed JavaScript or fixed heights; now it is one line: `grid-template-rows: subgrid`.

A 6-column grid with 6vw gutters at desktop and a 4-column grid at phone covers most luxury layouts; the design-taste principle of "a grid you can feel, broken once" needs a grid simple enough to feel. Grid theory for responsive work is in 05-layout-grids-and-composition.md, section 9, and right-to-left and multiscript layout in its section 16.

Masonry. Lookbooks and editorial galleries get briefed as masonry. The specification now uses `display: grid-lanes` (the earlier `grid-template-rows: masonry` syntax was replaced), and as of October 2026 web-features records it only in Safari 26.4, so it is enhancement only. Fallbacks: CSS multi-column (`columns: 3`), accepting that reading order runs down each column; or the house preference, a fixed-ratio grid of 4:5 cells set with `aspect-ratio`, which holds rhythm and never shifts. JavaScript masonry libraries measure after load and move cells, which costs CLS (Cumulative Layout Shift, section 5.1), so the house does not use them.

### 2.5 Container queries and container units

A container query (`@container`, Baseline newly available February 2023, widely available since August 2025) styles an element according to the size of its containing element instead of the viewport. A product card can switch from stacked to side by side when its container exceeds 420px, whether that container is a sidebar, a two-up or a full-width hero. Container query units: cqi is 1 percent of the container's inline size (cqw, cqh, cqb, cqmin, cqmax also exist). A caption set at font-size: `clamp(0.75rem, 2cqi, 1rem)` scales with its card, which is how one component serves a 320px phone and a 2560px wall display. Container style queries (`@container style(--theme: dark)`) are an Interop 2026 focus area; as of October 2026 treat them as progressive enhancement.

### 2.6 Selectors: :has(), :is(), :where(), nesting

- `:has()` (Baseline newly available December 2023 once Firefox 121 shipped, widely available since June 2026) is the parent selector: `article:has(img)` styles an article that contains an image; `form:has(:invalid)` styles a form with an invalid field; `body:has(dialog[open])` can lock scroll when a dialog is open. It removes a class of JavaScript state toggles.
- `:is()` and `:where()` group selectors. `:is()` takes the specificity of its most specific argument; `:where()` has zero specificity, so it is the tool for base styles and resets that must be easy to override.
- Native CSS nesting (Baseline 2023; relaxed syntax that no longer requires the & prefix landed in all engines by 2024) lets a component's states live inside its rule, which reads the way designers think about a component.

### 2.7 Logical properties

Logical properties replace physical directions with flow-relative ones: `margin-inline-start` instead of `margin-left`, `padding-block` instead of `padding-top` and `padding-bottom`, `inset-inline-end` instead of right, `border-start-start-radius` for the top-left corner in left-to-right text. The reason is Arabic. A Mask360 site for a Dubai client that ships an Arabic version with `dir="rtl"` on the `html` element flips automatically when every spacing and alignment rule is logical, and breaks in a hundred places when it is physical. Rule for the house: logical properties only, from the first line, on every project that may ever have an Arabic, Hebrew, Urdu or Persian edition.

### 2.8 Fluid everything: clamp() and the Utopia method

`clamp(min, preferred, max)` returns the preferred value held between a floor and a ceiling. Written as `clamp(1rem, 0.5rem + 2vw, 2rem)`, the middle term grows with the viewport while the outer terms cap it. Utopia (James Gilyead and Trys Mudford, utopia.fyi, 2021 onwards) is the method that generates a whole type and space scale this way. Its defaults, read from the calculator in October 2026: minimum viewport 360px with an 18px base and a 1.2 ratio (minor third), maximum viewport 1240px with a 20px base and a 1.25 ratio (major third), steps from `--step--2` to `--step-5`. The generated base step is:

```css
--step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);
```

The derivation, for a creative director who wants to check a developer's numbers: slope = (maxSize - minSize) / (maxViewport - minViewport); intercept = minSize - slope x minViewport; preferred = intercept in rem + (slope x 100) vw. For the base step: slope = (20 - 18) / (1240 - 360) = 0.002273; intercept = 18 - 0.002273 x 360 = 17.18px = 1.0739rem; vw term = 0.2273vw. The same formula produces fluid spacing (Utopia's space calculator) so that gutters, section spacing and grid gaps all breathe together. The house applies it with a wider range: a display headline that is 44px at 360px and 160px at 1440px follows the same arithmetic. See 03-typography.md, sections 7.1 and 7.2, for the type scale theory behind the ratios.

### 2.9 Layout and media features worth knowing

| Feature | What it does | Status, October 2026 | Why it matters to the house |
|---|---|---|---|
| `aspect-ratio` | Reserves the box ratio before media loads | Baseline widely available (2021) | Kills layout shift on image grids; set 4/5 for portrait product cells |
| `scroll-snap-type` and `scroll-snap-align` | Snaps scroll to section or item boundaries | Baseline widely available; Interop 2026 focus area for remaining bugs | A horizontal lookbook that snaps per frame without JavaScript |
| Scroll-driven animations (`animation-timeline: scroll()` and `view()`, `animation-range`) | Binds a CSS animation's progress to scroll position or an element's progress through the viewport | Not Baseline: Chrome 115 (July 2023) and Safari 26 (September 2025), with no Firefox release as of October 2026; an Interop 2026 focus area | The scroll narrative without a JavaScript scroll loop, off the main thread; always inside `@supports` with a static fallback |
| View Transitions (document.startViewTransition and `@view-transition`) | Animates between two DOM states or two pages with a crossfade or a shared-element move | Same-document: Baseline newly available since 14 October 2025 (Chrome 111, Safari 18, Firefox 144). Cross-document: Chrome 126 and Safari 18.2, not in Firefox as of October 2026. Interop 2026 focus area | Product grid to product page morph on a multi-page Shopify store, with no framework |
| `@scope` | Limits a rule to a subtree, with an optional lower boundary | Baseline newly available since 24 March 2026 | Scoped styles for a CMS rich text block without a build step |
| Anchor positioning (anchor-name, position-anchor, `anchor()`, position-area, `@position-try`) | Positions an element relative to another element | The core properties became Baseline newly available on 13 January 2026, when Firefox 147 shipped them (MDN); web-features keeps the whole group at limited availability until Safari 27 ships the remaining sub-features | Tooltips, size guides and menus without Popper or Floating UI |
| popover attribute | A native popover in the top layer (the browser layer that sits above every z-index) with light dismiss (closing on an outside click or Escape) | Baseline newly available since 27 January 2025 (web-features: Chrome 116, Firefox 125, Safari 17) | Menus and filters that always sit above everything, no z-index wars |
| `dialog` element | Native modal with focus trap, inert background and Escape to close | Baseline widely available since September 2024 (newly available March 2022 with Safari 15.4); Safari 26 added the toggle event | Newsletter capture, size chart, video lightbox: accessible for free |
| `@starting-style` with `transition-behavior: allow-discrete` | Gives an element a starting style so it can transition in from `display: none` | `@starting-style` Baseline newly available since 6 August 2024 (Chrome 117, Firefox 129, Safari 17.5) | A dialog or popover that fades and rises on open with no library; values in 12-motion-principles-and-ui-motion.md, section 4 |
| details and summary | Native disclosure | Baseline widely available | FAQ and product specifications without JavaScript; the house styles the marker |
| details name attribute | Groups `details` elements so only one stays open | Baseline newly available since 3 September 2024 (Chrome 120, Firefox 130, Safari 17.2) | An exclusive accordion for product specifications with no script |
| `::details-content` | Selects the disclosure's content box so open and close can animate | Baseline newly available since 16 September 2025 (Chrome 131, Firefox 143, Safari 18.4) | The FAQ that opens with a short height transition |
| `interpolate-size: allow-keywords` and `calc-size()` | Lets height animate to and from auto | Chrome 129 only as of October 2026 | Enhancement only; other engines snap open, which is acceptable |
| `content-visibility: auto` | Skips layout and paint of off-screen sections until they near the viewport | Baseline newly available since 15 September 2025 for the whole feature (web-features, after Safari 26); MDN dates the core values to September 2024 | Long scroll pages and lookbooks; pair with `contain-intrinsic-size` so the scrollbar does not jump |
| `::scroll-marker`, `::scroll-button()` and `scroll-state()` container queries | CSS-only carousel dots and arrows, and styles for a stuck or snapped state | Chrome only as of October 2026 (markers and buttons from Chrome 135) | Enhancement on the phone lookbook; scroll-snap carries the behaviour everywhere |
| `text-wrap: balance` | Equalises line lengths in short blocks (up to 6 lines in Chromium, 10 in Firefox) | Baseline newly available since 13 May 2024 (Chrome 114, Firefox 121, Safari 17.5) | Headlines never leave an orphan on the second line |
| `text-wrap: pretty` | Slower paragraph-level line breaking that avoids short last lines and poor rags | Not Baseline: Chrome 117 and Safari 26 (Safari applies it to all lines) | Body copy rag control (section 3.4) |
| `hanging-punctuation` | Hangs opening quotes and brackets outside the text block | Limited availability: Safari only | Use as enhancement on pull quotes; never depend on it |
| `font-variant-*` and `font-feature-settings` | Switches OpenType features: small caps, ligatures, tabular figures, stylistic sets | Baseline widely available | `font-variant-numeric: tabular-nums` on every price table |
| `text-box-trim` and `text-box-edge` | Trims the leading above the cap height and below the baseline so type sits optically in its box | The two properties became Baseline newly available on 18 August 2026 with Firefox 154 (MDN); web-features keeps the text-box group at limited availability because part of it is still missing in Firefox | A 160px headline aligned to a hairline without hand-tuned negative margins |
| dvh, svh, lvh | Viewport height units that account for the mobile browser chrome appearing and hiding | Baseline widely available (newly available December 2022 with Chrome 108, Safari 15.4, Firefox 101; widely available June 2025) | A 100dvh hero never leaves a strip behind the Safari toolbar |
| `prefers-reduced-motion` | Media query that is true when the user asked the OS for less motion | Baseline widely available | The house wraps every non-essential animation in `@media (prefers-reduced-motion: no-preference)` |
| `prefers-color-scheme` | Media query for light or dark preference | Baseline widely available | Client decks on #0A0A0A still need a light fallback for print |
| `forced-colors` | Media query true under Windows High Contrast mode, where the OS replaces colours | Baseline (Chrome 89, Firefox 89, Safari 16) | Hairlines and ghost buttons vanish unless borders are real borders |
| Colour functions | `oklch()`, `color-mix()`, relative colour syntax, `contrast-color()` (Safari 26 first) | See 04-colour.md, section 5 | Palette ramps that hold perceptual lightness |
| `@property` and `light-dark()` | Registers a typed custom property so it can animate; returns one of two colours by the used colour scheme | `@property` Baseline newly available since 9 July 2024; `light-dark()` since 13 May 2024 | Token theming (07-design-systems-and-tokens.md) |
| Customisable select (`appearance: base-select`, `::picker(select)`) | Makes the native select fully stylable, with the picker in the top layer and placeable by anchor positioning | Not Baseline: Chrome 135 and Safari 27 | The PDP size selector, behind `@supports` over a classic select (section 7.14) |
| `accent-color` | Brands checkboxes, radios and range inputs in one declaration | Not Baseline: Chrome 93, Firefox 92 and Safari 26.2, with no Chrome for Android listed | A safe enhancement; unsupported browsers show the default control colour |
| `:user-invalid` and `:user-valid` | Match a field's validity only after the person has interacted with it | Baseline widely available since 2 May 2026 (newly available November 2023) | Error states appear after input, never on page load |
| `field-sizing: content` | Lets a textarea or input grow with its content | Baseline newly available since 16 June 2026 (Chrome 123, Firefox 152, Safari 26.2) | The enquiry message box grows as the client writes |
| `display: grid-lanes` | Native masonry | Safari 26.4 only | Section 2.4 |

### 2.10 The house CSS stance

One stylesheet, custom properties for every token, cascade layers for order, logical properties for direction, container queries for components, `clamp()` for everything that scales, scroll-driven animations where supported and a static fallback where not, native dialog and popover for any overlay. No CSS-in-JS runtime on a marketing site (it costs main-thread time on every render for nothing a static stylesheet cannot do). Tailwind is acceptable in design-engineering work (section 13) when the team already uses it; for a house microsite the hand-written stylesheet in the website folder is the reference.

### 2.11 The accessibility position

The house conformance target is WCAG 2.2 AA (a W3C Recommendation since 5 October 2023), tested with axe (Deque's open-source accessibility testing engine) plus a manual keyboard pass and a VoiceOver pass on the main flow (section 15.2). Method, law and testing live in 11-accessibility-and-inclusive-design.md; three positions govern every web build.

- No overlays. Accessibility overlays (toolbar or AI widgets from accessiBe, UserWay, AudioEye and similar vendors) do not repair the markup underneath and often interfere with the visitor's own screen reader. The US Federal Trade Commission's 2025 settlement with accessiBe required a payment of 1 million US dollars over claims that its AI product could make any site compliant (11-accessibility-and-inclusive-design.md, sections 14.5 and 16.7). The Overlay Fact Sheet (overlayfactsheet.com, 2021), signed by hundreds of practitioners, is the page to send a client's IT team that asks for one.
- A statement page on every site: the standard targeted, the conformance status, known exceptions with fix dates, a contact route (email, phone, WhatsApp) answered within a stated time, and the date of the last audit (11-accessibility-and-inclusive-design.md, section 17.4).
- The legal frame, one line per market: the European Accessibility Act has applied since 28 June 2025 to e-commerce sold to EU consumers whatever the seller's headquarters, with EN 301 549 as the harmonised standard; in India, the Rights of Persons with Disabilities Act 2016 and the Supreme Court's judgment in Rajive Raturi v Union of India (8 November 2024) point towards mandatory digital standards; in the UAE, Federal Law No. 29 of 2006 sets the rights of people with disabilities (11-accessibility-and-inclusive-design.md, section 14).

## 3. Typography on the web

Type theory, pairing and the house faces are in 03-typography.md and design-taste, references/type.md; the font engineering detail is in 03-typography.md, section 12, and multiscript setting in its section 15. Delivery mechanics decide whether that typography arrives on the device intact.

### 3.1 Loading strategy

- Format: WOFF2 only. It is Baseline everywhere that matters and about 30 percent smaller than WOFF because of Brotli (Google's general-purpose compression algorithm, also used for HTTP responses). Shipping TTF or OTF to the browser is a 2015 habit.
- Self-host. Google Fonts served from fonts.googleapis.com costs a second connection (DNS, TLS, round trip) before the font request starts, and the Munich Regional Court (Landgericht München I, case 3 O 17493/20) ruled on 20 January 2022 that embedding Google Fonts from Google's servers passed a visitor's IP address to Google without consent, awarding the claimant 100 euros. That makes remote Google Fonts a GDPR (the EU's General Data Protection Regulation, 2018) issue for any site with European visitors. The house site self-hosts Space Grotesk in `website/public/assets/fonts`.
- Subset. A Latin subset of a grotesk is 15 to 30KB per weight in WOFF2; the full file with Cyrillic, Greek and Vietnamese is 2 to 4 times that. Use `unicode-range` so the browser only downloads the subset a page needs: Latin for the English site, Devanagari for Hindi, Arabic for the Gulf edition.
- Preload the one or two files above the fold with `link rel="preload" as="font" type="font/woff2" crossorigin`, and nothing else; preloading six weights delays the LCP image (the element that decides Largest Contentful Paint, section 4.3).
- `font-display: swap` shows fallback text immediately and swaps when the font arrives; optional shows the fallback and only uses the web font if it arrives within about 100ms, otherwise keeps the fallback for that page view. The house uses swap for the brand face with a metric-matched fallback (3.2), so the swap is invisible, and optional for any decorative face.
- Budget: two files for a one-family site (a variable font covers it), 120KB of fonts in total on first view, under 60KB when the site is one weight. A luxury site with 400KB of webfonts is spending its performance budget on weights nobody sees.

### 3.2 Metrics and fallbacks

A font swap causes layout shift when the fallback has different widths and vertical metrics. The fix is a metric-matched fallback: an `@font-face` rule that loads a local system font and adjusts it with `size-adjust` (scales glyph widths), `ascent-override`, `descent-override` and `line-gap-override` (vertical metrics). Tools such as Fontaine or the capsize library generate the values. Example for a grotesk:

```css
@font-face {
  font-family: "Grotesk Fallback";
  src: local("Arial");
  size-adjust: 104%; ascent-override: 92%; descent-override: 24%; line-gap-override: 0%;
}
```

The result: text set in the fallback occupies the same lines as text in the web font, so the swap moves nothing and CLS stays at zero. `font-size-adjust` (Baseline July 2024) is the related property that normalises x-height across families in the stack.

### 3.3 The fluid type scale with exact formulas

Section 2.8 gives the Utopia derivation. A house scale, written as `clamp()` values from 360px to 1440px viewports, with the reason for each range:

| Token | Min (360px) | Max (1440px) | `clamp()` | Role |
|---|---|---|---|---|
| `--display` | 44px | 160px | `clamp(2.75rem, 0.3333rem + 10.7407vw, 10rem)` | h1 at 700, leading 0.95, tracking -3 percent; the design-taste "huge against tiny" |
| `--h2` | 32px | 72px | `clamp(2rem, 1.1667rem + 3.7037vw, 4.5rem)` | Section heads at 600, leading 1.0 |
| `--lede` | 20px | 28px | `clamp(1.25rem, 1.0833rem + 0.7407vw, 1.75rem)` | Opening paragraphs at 300, leading 1.3 |
| `--body` | 17px | 19px | `clamp(1.0625rem, 1.0208rem + 0.1852vw, 1.1875rem)` | Body at 300, leading 1.5 |
| `--micro` | 11px | 11px | 0.6875rem | Fixed; caps labels at 400 with +12 percent tracking do not scale |

Formula per row: slope = (max - min) / (1440 - 360) = (max - min) / 1080; intercept = min - slope x 360; the clamp middle is intercept in rem plus slope x 100 in vw. Check the display row: slope = 116 / 1080 = 0.10741; intercept = 44 - 0.10741 x 360 = 44 - 38.67 = 5.33px = 0.3333rem; at 360px the middle term gives 5.33 + 38.67 = 44px and at 1440px it gives 5.33 + 154.67 = 160px, so the floor and ceiling only act outside that range. A steeper range can produce a negative intercept; that is fine, because `clamp()` floors the result at the minimum. Fluid type is set on the `html` element with a base of 100 percent so that a user's browser font size preference still scales everything; setting `html { font-size: 62.5% }` to make 1rem equal 10px defeats that preference and is a defect.

### 3.4 Line length, rag, hyphens, kerning, optical size

- Line length: 45 to 75 characters per line for body copy (Bringhurst's range; 66 is the classic target). On the web: `max-width: 65ch` on the paragraph container, where ch is the width of the 0 glyph in the current font. A lede at 28px set across a 1440px viewport runs 120 characters and is unreadable; cap it.
- Rag: `text-wrap: pretty` on body paragraphs and `text-wrap: balance` on headlines and captions (up to six lines). Never justify body copy on the web; browsers lack the paragraph-level justification of InDesign and produce rivers.
- Hyphens: `hyphens: auto` needs a lang attribute on the `html` element (`lang="en-GB"`, `lang="hi"`, `lang="ar"`) because the dictionary is per language. Use it on narrow columns under 40ch; combine with `hyphenate-limit-chars: 7 3 3` where supported so that two-letter fragments do not appear.
- Kerning: `font-kerning: normal` is the default in current engines; set it explicitly on display sizes and check that the font actually carries a kern table (many free faces do not). Tracking on the web is `letter-spacing` in em: -0.03em for display grotesks, +0.12em for 11px caps labels (house values). Tracking in px breaks when the size is fluid.
- Optical size: `font-optical-sizing: auto` (the default) lets a variable font with an opsz axis choose the design for the rendered size: finer hairlines at 160px, sturdier strokes at 11px. Faces with opsz worth knowing: Roboto Flex, Source Serif 4, Fraunces, Literata, Newsreader. A display cut used at text size without opsz reads thin and cheap; a text cut used at 160px reads clumsy.
- Figures: `font-variant-numeric: tabular-nums` on any column of prices or dates; lining figures in caps labels; oldstyle figures (onum) in running serif text.
- Links: `text-decoration-thickness` at 0.06 to 0.08em and `text-underline-offset` at 0.15 to 0.2em, with `text-decoration-skip-ink: auto` so underlines clear descenders; the hover draw in section 6.7 uses these properties and needs no border hack.
- Light type on dark grounds: `-webkit-font-smoothing: antialiased` thins strokes on macOS only. Test it at weight 300 on #0A0A0A, where body text can turn too faint, and move dark-ground body copy to 400 if it does.
- `font-synthesis: none` stops the browser faking a bold or italic when that file fails to load, which turns a silent loading failure into a visible defect that QA catches.

### 3.5 The system font stack and variable font performance

The system stack is the zero-byte option:

```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

It renders San Francisco on Apple, Segoe on Windows, Roboto on Android, and arrives at 0KB with no swap. The house never uses it as the brand voice (design-taste section 3 lists Inter as the brand voice among the cheap tells, and the system stack carries the same problem) but uses it for form fields, legal pages and the dashboard chrome of a tool.

A variable font carries an axis range (weight 300 to 700, width, optical size, italic) in one file. One Space Grotesk variable file at about 60 to 80KB WOFF2 replaces five static weights at 25KB each; the saving is small in bytes and large in requests, and every intermediate weight becomes available for fine tuning (a 450 for bold inside 300 body). The cost: the file loads as one unit, so a page that only needs 300 waits for the whole range, and animating `font-variation-settings` triggers layout on every frame (on anything that runs longer than a hover, animate transforms and leave the type axes still). Arabic and Devanagari variable fonts exist (Noto Sans Arabic, Noto Sans Devanagari, IBM Plex Sans Arabic) and are 2 to 5 times the byte size of Latin because of glyph count; subset by script and load per language edition.

## 4. Images and media

### 4.1 Responsive images

The `srcset` attribute lists candidate files with width descriptors; the sizes attribute tells the browser how wide the image will render at each breakpoint so it can pick the smallest adequate file before layout. Without sizes the browser assumes 100vw and downloads the largest candidate on every phone.

```html
<img src="pavilion-1200.webp"
     srcset="pavilion-720.webp 720w, pavilion-1200.webp 1200w, pavilion-1800.webp 1800w"
     sizes="(min-width: 1024px) 60vw, 100vw"
     width="1800" height="1125" alt="The Anantara pavilion at dusk" decoding="async">
```

The house set, from website/README.md: landscape at 1800, 1200 and 720 wide; portrait at 1440, 1000 and 640. Always width and height attributes (the browser reserves the aspect ratio before load, which is what keeps CLS at zero). Art direction, when the phone needs a different crop and the desktop a wide one, uses the `picture` element with media attributes and separate sources; a single wide hero cropped by object-fit on a phone loses the subject in two cases out of three, so the house shoots and crops a portrait variant for every hero.

The 2x rule: cap device pixel ratio at 2. A 3x file for an iPhone Pro is 2.25 times the bytes of the 2x file and indistinguishable at viewing distance for photographic content; a browser given a `srcset` will pick 3x if it exists. Line art and UI icons go to SVG where the question disappears.

### 4.2 Formats, October 2026

| Format | Use | Savings | Support | Notes |
|---|---|---|---|---|
| AVIF | Photography, the hero | About 30 to 50 percent smaller than JPEG at matched quality | All engines since Edge 121 (January 2024) | Slow to encode; encode once in the build pipeline, because on-the-fly encoding is too slow; quality 50 to 65 in most encoders is the luxury sweet spot |
| WebP | Photography fallback, UI imagery | 25 to 34 percent smaller than JPEG (Google's own figure) | Everywhere since Safari 14 (2020) | The house default today because the toolchain is mature; quality 75 to 82 |
| JPEG XL (`.jxl`) | Future photography format; lossless JPEG recompression saves about 20 percent | Comparable to AVIF for photos, better for lossless and progressive | Not Baseline as of October 2026. Safari 17 (September 2023, no animation or progressive); Chromium reversed its 2022 removal in November 2025, put it behind a flag in Chrome 145 (February 2026) and enabled it by default in Chrome 155 (stable 6 October 2026 on Chrome's release schedule) with the Rust decoder jxl-rs; web-features records Firefox support from Firefox 158, not yet released in October 2026; Interop 2026 lists it as an investigation area | Serve through picture with AVIF and WebP fallbacks; do not make it the only source until a year of all-engine support has passed |
| JPEG (mozjpeg, progressive) | Universal fallback, email | Baseline | Everything | Quality 75 to 85; progressive so the hero paints in passes |
| PNG | Only for true lossless needs: screenshots with text, flat UI with transparency where SVG is impossible | None for photos (10 times a JPEG) | Everything | A PNG photograph on a luxury site is the single most common weight defect |
| SVG | Logos, icons, line art, type set as outlines for a mark | Tiny | Everything | Hygiene below |

SVG hygiene: run every exported file through SVGO (an open-source SVG optimiser that removes editor metadata, which is often 60 to 90 percent of the file); no embedded raster images; viewBox present and width and height absent so it scales; ids unique when inlined (duplicates break gradients and clip paths across inlined symbols); `fill="currentColor"` on icons so CSS colours them; `aria-hidden` on decorative icons and a `title` element on meaningful ones; fonts converted to outlines in a logo so no font dependency ships inside the mark.

### 4.3 Compression targets and the LCP image

- The hero image under 200KB at 1800 wide in AVIF or WebP. A full-bleed luxury photograph with real grain compresses worse than a clean render; shoot and grade knowing that grain costs bytes, and add grain as a CSS overlay (a tiled 200px noise PNG at 8KB, `mix-blend-mode: overlay`) instead of baking it into a 900KB JPEG.
- The LCP image is the largest image or text block in the first viewport; it is the single element that decides Largest Contentful Paint (section 5.1). Rules: never `loading="lazy"` on it (lazy loading defers the request until the browser has laid out the page, which adds hundreds of milliseconds); add `fetchpriority="high"` so the browser requests it before the fonts and scripts; preload it with `link rel="preload" as="image"` and `imagesrcset` when the hero is set as a CSS background (CSS backgrounds are discovered late, after the stylesheet parses); inline a 20 to 40 byte dominant colour or a blurred 20px placeholder in the markup so the first paint has the composition.
- Everything below the fold: `loading="lazy"` and `decoding="async"`.
- The grid page: 12 product images at 60KB each is 720KB before the page has done anything; serve 640 wide WebP at quality 75 for cells, defer below the fold, and the first view is under 300KB of imagery.

### 4.4 Image CDNs

An image CDN (a content delivery network that also transforms images) stores one master and serves resized, reformatted, compressed variants from a URL parameter, with the format negotiated per browser (Accept header) so AVIF goes to Chrome and WebP to an older Safari.

| Service | Model | Numbers, October 2026 | When |
|---|---|---|---|
| Cloudinary | URL transformations (`f_auto`, `q_auto`, `w_`, `c_fill`, `g_auto`) with AI cropping | Free plan of 25 monthly credits, where one credit is 1,000 transformations, 1GB of managed storage or 1GB of bandwidth; Plus at $89 a month billed yearly for 225 credits (cloudinary.com/pricing) | CMS-driven sites with editors who upload anything |
| imgix | URL rendering API on top of your bucket | No permanent free plan (a 30-day trial with 100 credits); Starter at $25 a month for 100 credits, up to 50GB of storage and 100GB of delivery bandwidth (imgix.com/pricing) | Teams that already own an S3 or GCS bucket |
| Vercel Image Optimization | next/image or the /_vercel/image endpoint | Hobby: 5,000 transformations, 300,000 cache reads, 100,000 cache writes a month; on demand transformations $0.05 to $0.0812 per 1,000; source max 8192px a side; accepts JPEG, PNG, WebP, AVIF; transformed output capped at 10MB (Vercel docs, updated 11 August 2026) | Next.js sites on Vercel |
| Cloudflare Images and Transformations | Transform via URL on any zone | 5,000 unique transformations a month free, then $0.50 per 1,000 (Cloudflare pricing page) | Static sites on Cloudflare Pages |
| Shopify CDN | Liquid (Shopify's templating language, section 8.8) `image_url` filters with width and format | Included in the plan | Every Shopify store; do not route product images elsewhere |

The house default for a static microsite is none of these: pre-render the WebP set in the build (website/build.mjs and `assets-manifest.json`), because a page with 30 images needs no runtime service.

### 4.5 Video on the web

Autoplay rules: a video autoplays only when it is muted (the muted attribute, and on iOS the attribute must be present in the HTML markup, because setting it later by script fails in some cases), has `playsinline` so iOS does not force fullscreen, and ideally loop for an ambient hero. WebKit set this policy for iOS 10 in 2016 and for macOS Safari 11 in 2017; Chrome 66 (April 2018) adopted the same muted-autoplay rule. Low Power Mode on iOS blocks autoplay entirely, so the poster attribute must be a frame that stands alone as the hero image, and the poster must be the LCP-grade image (section 4.3), encoded as WebP, never the default black frame.

Formats and codecs:

| Codec | Container | Support | Use |
|---|---|---|---|
| H.264 (AVC) | MP4 | Universal, hardware decoded everywhere | The fallback and often the only file; CRF 23 (constant rate factor, the x264 quality setting where lower is better) for a film, 28 to 30 for an ambient loop |
| H.265 (HEVC) | MP4 (hvc1 tag for Safari) | Safari and iOS hardware; Chrome only where the OS has a licensed decoder | 30 to 40 percent smaller than H.264 at matched quality; serve to Safari via a source with `type="video/mp4; codecs=hvc1"` |
| AV1 | MP4 or WebM | Chrome, Firefox, Edge; Safari 17 on iPhone 15 Pro and later with hardware decode; software decode elsewhere drains batteries | 30 to 50 percent smaller than H.264; the right choice for Chrome on Android in India when a hardware decoder exists (2023 and later mid-range chips) |
| VP9 | WebM | Chrome, Firefox, Edge, Safari 14.1 and later on macOS, patchy on iOS | The house second file for loops (README: VP9 CRF 36) |

Source order matters: the browser takes the first source it can play, so list AV1 or HEVC before H.264.

Streaming: HLS (HTTP Live Streaming, Apple's segmented format with an `.m3u8` playlist) is native in Safari and used through a library (hls.js) elsewhere; DASH (MPEG-DASH, the open equivalent) plays through Media Source Extensions, which iPhone Safari lacked until Managed Media Source in iOS 17.1 (2023), so HLS is the practical universal choice. Both deliver adaptive bitrate: several renditions (240p to 1080p or 4K) and the player switches by measured bandwidth, which is the only way a 90-second brand film plays cleanly on a Jio 4G connection in Jaipur and on fibre in Dubai Marina from one URL.

Hosted video, October 2026 list prices:

| Service | Price | Notes |
|---|---|---|
| Mux | On demand encoding free (1080p basic), storage $0.003 per minute per month, delivery $0.001 per minute after the first 100,000 delivery minutes a month free; $20 monthly credit on pay as you go | Player, data and captions included; the design-engineering default |
| Cloudflare Stream | $5 per 1,000 minutes stored per month, $1 per 1,000 minutes delivered | No free tier listed; predictable for a campaign film with known views |
| Vimeo | Plan based; embeds carry Vimeo chrome unless on Pro or above with a custom player | Fine for a client's showreel; weak for a 5-second ambient loop |
| Bunny Stream | Storage from $0.01 per GB, delivery from $0.005 per GB, encoding free, $1 monthly minimum (bunny.net) | Budget option for Indian clients |
| YouTube | Free | Never on a luxury page: the embed loads about 500KB to 1MB of script and the end screen shows competitors |

Background video weight budgets: a hero loop at 1280 wide, 24fps, muted, 6 to 10 seconds, under 2.5MB in H.264 and under 1.5MB in VP9 or AV1; a looping portrait reel for the phone cut separately at 720 wide under 1.2MB; `preload="metadata"` so the browser fetches headers only until it is about to play; poster set. The hero video that kills LCP: a 20MB autoplay film with no poster. The browser reports LCP on the first frame painted, which arrives after megabytes of download; the fix is the poster image as LCP candidate, the video lazily attached after the page is interactive, and never more than one autoplay video in the viewport at once.

Pause control. An ambient loop that moves for more than 5 seconds needs a visible way to pause it under WCAG 2.2.2 Pause, Stop, Hide (Level A), the rule 12-motion-principles-and-ui-motion.md and 09-interaction-design-and-ux-patterns.md, section 8.7, already state. The house control: a button at least 44px square, keyboard focusable, labelled "Pause background video" (then "Play background video"), in a corner clear of the floating pill, with its state kept in `sessionStorage` for the visit. The loop also pauses when it leaves the viewport, detected with `IntersectionObserver` (the browser API that reports when an element enters or leaves view), which saves battery on the India test device.

Captions. Every film with speech ships captions as WebVTT (the web's timed-text caption format) in a `track` element, `<track kind="captions" srclang="en" src="film.en.vtt" default>`, plus hi and ar tracks where the audience needs them, a transcript link under the player, and audio description (WCAG 1.2.5, AA) where the picture carries information the soundtrack does not; WCAG 1.2.2 (A) requires captions on any prerecorded video with audio. Subtitles are burned in only on social cuts; on the site they stay as text tracks so they remain searchable and resizable (11-accessibility-and-inclusive-design.md, section 10.2).

### 4.6 3D, WebGL, canvas and shaders

WebGL is the browser API for GPU rendering, universal since 2014. WebGPU is its successor, with compute shaders and a modern pipeline; it shipped in Chrome 113 (2023) and Safari 26 (September 2025), and web-features records it as not Baseline as of October 2026 (Chrome 144 across desktop platforms, Chrome for Android 121, Safari 26, Firefox on some platforms only). Always ship the three.js WebGL fallback. Production of 3D assets and the real-time pipeline are in 13-motion-graphics-and-3d-production.md, sections 8 and 9. Libraries: three.js (the standard scene graph library, versioned as rNNN releases every few months, r186 on 24 September 2026, with a WebGPU renderer that falls back to WebGL), React Three Fiber (three.js as React components, by Poimandres, used with drei helpers), Babylon.js (Microsoft, heavier, stronger for configurators), model-viewer (Google's web component that shows a glTF model, the Khronos 3D transmission format whose single-file binary form is GLB, with orbit, AR on Android via Scene Viewer and on iOS via Quick Look with a USDZ file, Apple's zipped Universal Scene Description format; the right answer for a single product in 3D), Spline (a design tool with a browser runtime; its embeds commonly run 1 to 3MB of runtime plus the scene and run the GPU continuously, so use the exported image or video for anything that does not need interaction).

Budgets for 3D on a luxury page: total GLB under 3MB with Draco or Meshopt compression (two geometry compression schemes for glTF), textures as KTX2 (the Khronos GPU texture container, with Basis Universal supercompression) under 1MB total, one scene per page, 60fps on an iPhone 12 and 30fps on a mid-range Android or the scene is cut, a static fallback image for `prefers-reduced-motion` and for devices that fail a GPU check, and the scene loads after the LCP image is painted.

Shaders and canvas: a GLSL (OpenGL Shading Language) fragment shader is the cheapest way to produce the Immersive Garden image distortion (section 6.5) because the GPU does the work; a 2D canvas image sequence (the Apple AirPods technique: 100 to 150 JPEG frames scrubbed by scroll) costs 5 to 15MB and should be reserved for the one peak moment, with WebP frames at 1440 wide, loaded progressively, and a video fallback on phones.

Spaces. Real estate and hospitality now show rooms as captured 3D. Gaussian splatting (Kerbl, Kopanas, Leimkühler and Drettakis, SIGGRAPH 2023) records a real room or terrace as millions of soft, view-dependent points that render in real time; capture is covered in 13-motion-graphics-and-3d-production.md, section 8. On the web, PlayCanvas (its engine and the SuperSplat editor) and Spark, a three.js splat renderer from World Labs, display them, and compressed formats (Niantic's open `.spz`, PlayCanvas's compressed splat format) shrink raw `.ply` captures substantially; measure each capture. Budget a splat like the peak in section 6.6: load on tap behind a poster, never in the first viewport, a static image fallback, and a hard size limit in MB agreed with the client. Matterport walkthrough tours embed as an iframe that loads its own player and scripts, so open them in a dialog on demand.

### 4.7 Lottie and Rive

Lottie (Airbnb, 2017) renders After Effects vector animation exported through the Bodymovin plugin as JSON; lottie-web is the player (about 60KB gzipped for the full build, less for the light build), dotLottie is the zipped container that cuts file size 80 percent and bundles assets. Use it for a mark animation, a line illustration, a loader that is the idea. Avoid it for anything with gradients, masks and effects, where it renders slowly on Android. Rive (2020 onwards) is the alternative: a design tool with a state machine, so the animation responds to input (hover, scroll, a number) without code, and a runtime (rive-wasm, about 100 to 150KB) that plays at a fraction of Lottie's CPU cost for interactive work. House rule: Lottie for a short one-shot, Rive for anything stateful, native CSS or SVG animation for anything simpler than either.

## 5. Performance as craft

### 5.1 Core Web Vitals, October 2026

Core Web Vitals are Google's three field metrics for user experience, measured at the 75th percentile of real page loads over a 28-day window in the Chrome User Experience Report (CrUX), segmented by mobile and desktop. Google states on its page experience documentation that "Core Web Vitals are used by our ranking systems."

| Metric | Measures | Good | Needs improvement | Poor | Typical luxury-site cause of failure |
|---|---|---|---|---|---|
| LCP, Largest Contentful Paint | Time until the largest image or text block in the viewport is painted | 2.5s or less | 2.5 to 4.0s | Over 4.0s | A 3MB hero, a CSS background image, a preloader that hides content for 3 seconds (the preloader counts: LCP is the paint of the largest element, and a full-screen loader with a percentage counter can itself be the LCP element, which hides the real cost) |
| INP, Interaction to Next Paint | The latency of the slowest interaction (tap, click, key press) over the visit, from input to the next frame painted | 200ms or less | 200 to 500ms | Over 500ms | A JavaScript smooth-scroll library on the main thread plus React hydration (the framework re-running its components in the browser, section 5.5) plus a cookie banner all firing on first tap |
| CLS, Cumulative Layout Shift | The sum of unexpected layout movements, weighted by area and distance | 0.1 or less | 0.1 to 0.25 | Over 0.25 | Images without width and height, a font swap without metric overrides, a late-injected consent banner that pushes the page down |

INP replaced First Input Delay (FID) on 12 March 2024. The thresholds have not changed since; Google's vitals page (updated 31 October 2024) states that stable metrics change at most once a year and are documented when they do. Any claim that LCP tightened to 2.0s is unsupported by Google's documentation.

### 5.2 Budgets

HTTP Archive's 2025 Web Almanac measured the median page at 2,412KB on desktop and 2,164KB on mobile, with median image bytes of 1,058KB and 911KB and median JavaScript of 708KB and 646KB; the 90th percentile page is 9,179KB desktop and 8,337KB mobile; home pages specifically run heavier at 2.86MB and 2.56MB. Those are the numbers to beat, because the median page is slow on the median phone. Alex Russell's "The Performance Inequality Gap, 2026" (24 November 2025) sets critical-path budgets for a 75th percentile visitor on a Samsung Galaxy A24 4G over 9Mbps down, 3Mbps up and a 100ms round trip: for a 3-second load, 2.0MiB in total with 0.3MiB of JavaScript on a JavaScript-light page, or 1.2MiB with 0.62MiB on a JavaScript-heavy one; for a 5-second load, 3.7MiB with 0.57MiB, or 2.3MiB with 1.15MiB. He calls them "extremely generous", and the house budgets below sit under his 3-second figures.

House budgets by page type, first view, compressed over the wire:

| Page type | Total | JavaScript | Fonts | Hero media | Images in first viewport | Notes |
|---|---|---|---|---|---|---|
| Scroll-narrative microsite | 1.5MB | 150KB | 120KB | 200KB poster plus a loop under 2.5MB that loads after LCP | 400KB | GSAP core (the GreenSock animation library) 28KB, ScrollTrigger (its scroll plugin) 18KB and Lenis (a smooth scroll library) 5.4KB gzipped, about 52KB together as measured in October 2026 (12-motion-principles-and-ui-motion.md, section 7.1): a third of the JS budget before a line of site code |
| Brand or hospitality site | 1.2MB | 120KB | 120KB | 200KB | 400KB | Framework hydration (section 5.5) counts against JS |
| Shopify PLP | 1.0MB | 250KB | 80KB | none | 300KB | Theme JS plus apps; audit every app script |
| Shopify PDP | 1.2MB | 250KB | 80KB | 200KB first gallery image | 400KB | Zoom images load on demand |
| Deal sheet or pitch page | 800KB | 50KB | 80KB | 150KB | 300KB | Must print well too (section 14.6) |
| Email | 102KB of HTML (Gmail clips above this) | 0 | 0 | 150KB per image, under 600KB total | n/a (images load on open) | Section 10 |

A budget is enforced in the build (a bundle size check in CI that fails over the limit) or it is a wish.

### 5.3 Measuring

- Lighthouse (lab): the Chrome audit tool, version 13.6.0 as of 27 October 2026, runs a simulated mobile load (150ms round trip, 1.6Mbps down, 750kbps up, 4x CPU slowdown on a desktop machine) and produces a performance score weighted FCP (First Contentful Paint, the first text or image painted) 10 percent, Speed Index 10 percent, LCP 25 percent, Total Blocking Time (the main-thread time beyond 50ms per task between FCP and interactivity) 30 percent, CLS 25 percent (unchanged since Lighthouse 10). Lab scores vary run to run by 5 to 10 points; compare the median of five runs.
- PageSpeed Insights: Lighthouse plus the CrUX field data for that URL and origin, which is what Google's ranking systems see. A page can score 95 in the lab and fail CWV in the field because real visitors are on 2022 Androids on Airtel 4G.
- WebPageTest (Catchpoint): real devices and real locations, filmstrips, waterfall charts, connection throttling by profile; test from Mumbai and Dubai nodes.
- CrUX: the field dataset, free through the CrUX dashboard, BigQuery and the Search Console Core Web Vitals report. A site needs enough traffic to appear; most microsites never will, which is why the lab numbers and a mid-range Android in hand (section 14.4) matter more for the house.
- Chrome DevTools Performance panel: find the long task (anything over 50ms blocks the main thread and feeds INP) and the element that caused the layout shift.

Speed Index measures how quickly the visible content of the page is painted, by integrating visual completeness over time from a filmstrip. For a scroll-narrative site it is the honest metric: a preloader that holds a blank screen for 2 seconds and then reveals everything scores a terrible Speed Index even when LCP looks fine, which is exactly the user's experience.

### 5.4 The luxury site paradox

Heavy and slow reads cheap on a phone. The design-taste physics of expensive (space, slowness, stillness) are often implemented as 40MB of WebGL and a 4-second loader, which on a Redmi over 4G reads as broken. The audience that buys a Mumbai penthouse or a Dubai Marina branded residence opens the link from WhatsApp, in a lift, on a phone: the page must feel instant and then feel slow by choice. Speed is the luxury; motion is the accent. A site that is fast on a mid-range Android and still looks like four hundred hours is the house standard.

The same budget, stated as carbon, answers the sustainability question that luxury groups with reporting duties now ask. The Sustainable Web Design model (used by the Website Carbon Calculator and Ecograder) estimates grams of CO2 per page view from transferred bytes, and the W3C Sustainable Web Design Community Group publishes the Web Sustainability Guidelines as a community group report, outside the W3C standards track. A 1.5MB microsite against the 2,164KB median mobile page (section 5.2) is a measurable reduction: report it in the launch summary for clients with sustainability commitments, and never claim a carbon-neutral site without a verified method.

### 5.5 Delivery: CDN, edge, caching, preloading, code splitting, hydration

- A CDN (content delivery network) caches the site at edge nodes near the visitor; Vercel, Netlify and Cloudflare all front their hosting with one. Presence as published in October 2026: Cloudflare's network page lists 23 Indian cities (Mumbai, Chennai and New Delhi among them), Dubai, and Riyadh, Jeddah and Dammam; Vercel runs 126 points of presence in 94 cities, with a Mumbai compute region (bom1) and no Gulf compute region; Netlify publishes no city list the house has read, so test it from Mumbai and Dubai in WebPageTest before committing a Gulf-heavy client to it.
- Caching headers: fingerprinted assets (site.3f2a9c.css) get `Cache-Control: public, max-age=31536000, immutable`, which is exactly what the house `vercel.json` and `netlify.toml` set for `/assets/*`; HTML gets a short max-age with revalidation so a content change is live within minutes.
- Preloading: the LCP image, the one or two critical fonts, nothing else; `modulepreload` for the first script chunk. Over-preloading starves the critical path.
- Code splitting: ship the JavaScript for the first viewport and lazy-load the rest on interaction or intersection; a product configurator's 400KB bundle loads when the configurator scrolls into view.
- Hydration cost: a framework that server-renders HTML (server-side rendering, SSR) and then re-runs the component tree in the browser to attach event handlers (React, Vue, Svelte in SSR mode) spends main-thread time proportional to the component count before anything is interactive; on a mid-range Android that is 500ms to 2s of blocked thread and a direct INP failure. Islands architecture (Astro's model: the page is static HTML and only the interactive components ship JavaScript) and React Server Components (Next.js App Router: components that render on the server and send no JavaScript) are the two mainstream answers. A marketing site with three interactive elements has no reason to hydrate a whole page.
- Speculation Rules: a `script type="speculationrules"` JSON block that prefetches or prerenders the pages a visitor is likely to open next; eagerness "conservative" fires on pointer or touch down and "moderate" after about 200ms of hover. web-features lists Chrome only (from Chrome 109) as of October 2026, which still covers most of the Android traffic in India (section 1.1), so prerendering collection-to-product links makes the tap feel instant for most of that audience and pairs with cross-document View Transitions (section 6.4). Exclude cart, account and logout URLs, because a prerender fires their side effects.
- Back/forward cache (bfcache): the browser keeps the previous page in memory so Back restores it instantly, with its scroll position and state. An `unload` handler blocks it, and `Cache-Control: no-store` blocks it in many cases; check every page type in Chrome DevTools (Application, Back/forward cache) and remove the blockers, of which third-party chat widgets are a common source.

### 5.6 Third-party scripts and supply chain

Keep a third-party inventory per site: script, owner, purpose, bytes, consent category and review date. Self-host every library the page depends on: on 25 June 2024 Sansec reported that the polyfill.io domain, sold earlier that year, was injecting malware into more than 100,000 sites that loaded it from its CDN. Where a CDN script is unavoidable, pin the exact version and add Subresource Integrity (SRI: an `integrity` attribute holding the file's hash, used with `crossorigin`, so the browser refuses a changed file). Load heavy widgets through a facade, a static button or poster that loads the chat, HubSpot form, map or YouTube player only on tap; Paul Irish's lite-youtube-embed is the reference pattern. Partytown moves tag scripts into a web worker, off the main thread, but some tags break there, so test each one. The Content-Security-Policy (CSP, the response header that lists the origins a page may load from) in section 15.2 lists every allowed origin, so adding a vendor becomes a reviewed change.

## 6. Motion on the web

Principles, easing curves, durations and choreography are in 12-motion-principles-and-ui-motion.md (sections 3 to 5), scroll-driven motion in its section 7 and page transitions in its section 8; the delight budget and the practitioner principles of Rauno Freiberg and Emil Kowalski are in its section 6. The web delivery layer: which tool produces which move, what each costs in bytes and main-thread time, and where the house draws the line.

### 6.1 The stack and what each piece costs

| Layer | What it does | Cost | Use it for |
|---|---|---|---|
| CSS transitions and keyframes | Property changes over time, on the compositor when limited to transform, opacity, clip-path and filter | 0KB | Hover states, reveals, underlines, everything simple |
| Web Animations API | The same animations driven from JavaScript, with play, pause, reverse and timeline control | 0KB | Interruptible UI motion without a library |
| Scroll-driven animations (CSS) | Animation progress bound to scroll or to an element's passage through the viewport, off the main thread | 0KB | Reveals, progress bars, parallax under 0.2 ratio, the sticky chapter header (section 2.9 for support) |
| View Transitions | Crossfade or shared-element morph between DOM states or pages | 0KB | Grid to detail morph, page transitions on a multi-page site |
| Lenis (darkroom.engineering, 1.3.27 on npm, 15 October 2026) | Smooth scroll that interpolates the native scroll position with a lerp (linear interpolation) factor each frame, keeping `position: sticky`, anchors and accessibility intact | 5.4KB gzipped (measured October 2026) | The weighted scroll feel of the Awwwards genre |
| GSAP 3.15.0 and ScrollTrigger (GreenSock, owned by Webflow since autumn 2024; every plugin free for commercial use since 2025 per Webflow's announcement) | Timeline animation with scrubbing, pinning, snapping, SplitText line reveals | Core 28KB and ScrollTrigger 18KB gzipped (12-motion-principles-and-ui-motion.md, section 7.4); SplitText 3.7KB (measured from the 3.15.0 build, October 2026) | The one peak sequence, pinned chapters, line-by-line type reveals |
| Motion (motion.dev, Matt Perry; the library formerly named Framer Motion) | Declarative React animation with springs, layout animation and gestures | 3.2KB for the mini `animate()` and 22KB for the hybrid `animate()` (motion.dev documentation, October 2026); more for the React package | React sites that need spring physics and layout animations |
| three.js r186 (releases page, September 2026) with React Three Fiber | WebGL and WebGPU scenes, shader transitions | 150KB and up gzipped before the scene | Section 4.6; one peak, budgeted |
| Lottie and Rive | Vector animation runtimes | 60KB and 100 to 150KB | Section 4.7 |

The rule that falls out of the table: every move that CSS can make, CSS makes. A library is loaded for the one thing CSS cannot do on this page, and the budget in section 5.2 decides whether that thing survives.

### 6.2 GSAP and ScrollTrigger in practice

ScrollTrigger binds a timeline to a scroll range; its options, defaults and the house values (scrub 0.6 to 1.2 seconds, one pinned scene per beat, snap only on a stepped story) are in 12-motion-principles-and-ui-motion.md, section 7.4. The delivery rules: pins no longer than 300 percent of the viewport height, because a longer pin reads as a stuck page on a phone, and markers stripped in the build.

Two failure modes to check in every build. First, ScrollTrigger measures positions once; when images load late and change heights, every trigger below is wrong. The fix is width and height on every image and `aspect-ratio` on every media box (section 4.1), so nothing moves after measurement, with `ScrollTrigger.refresh()` after fonts load as a belt and braces. Second, iOS Safari changes the viewport height as the address bar collapses, firing resize and refreshing triggers mid-scroll; the fix is `ScrollTrigger.config({ ignoreMobileResize: true })` and dvh units.

SplitText (free since 2025) splits a headline into lines, words or characters so each can be revealed. The luxury pattern is per line, with `overflow: hidden` on a wrapper and the line moving from 100 percent below to 0 over 1.1 to 1.4 seconds on an expo ease-out with a stagger of 0.06 to 0.1 seconds per line. Per character reveals multiply DOM nodes by the character count and read as an effect laid over the type, so the house keeps reveals to lines.

### 6.3 Lenis and the smooth scroll question

Lenis keeps native scroll in charge: it reads the wheel and touch input, interpolates the scroll position with a lerp of 0.1 by default (the house uses 0.08 to 0.1 on desktop, which reads heavier), and writes the native scroll position, so sticky elements, anchor links, find in page and screen readers work. The full options table is in 12-motion-principles-and-ui-motion.md, section 7.1. By default it leaves touch devices on native scroll (`syncTouch` false), which is correct: a phone's own scroll physics is the one the user trusts, and most of the India audience is on a phone. Limitations stated in its own documentation: CSS scroll-snap is unsupported (use lenis/snap), and smooth scroll stops over iframes because they swallow wheel events.

The accessibility position: smooth scroll changes the speed the user chose, and a few users with vestibular conditions find it nauseating. The house ships Lenis behind `@media (prefers-reduced-motion: no-preference)`, initialises it only on `pointer: fine` devices, and never couples it to a pinned section longer than 300vh. The contested question is whether to use it at all: Awwwards juries reward it, while Nielsen Norman Group ("Scrolljacking 101", Sara Paul, 2023) and most accessibility practitioners warn against any scroll interference, especially on mobile. The house follows the middle: on, light, desktop only, and off for anyone who asked the OS for less motion (vestibular safety in 11-accessibility-and-inclusive-design.md, section 7).

### 6.4 Native scroll-driven animations and View Transitions

A scroll-driven animation in CSS replaces the JavaScript scroll loop for reveals:

```css
@supports (animation-timeline: view()) {
  .reveal { animation: rise linear both; animation-timeline: view(); animation-range: entry 0% entry 60%; }
}
@keyframes rise { from { opacity: 0; transform: translateY(24px); } }
```

The animation runs on the compositor, so a phone that drops frames in a JavaScript scroll handler holds 60fps here; timelines and ranges are explained in 12-motion-principles-and-ui-motion.md, section 7.2. The `@supports` wrapper leaves Firefox and older Safari with the static state, which is the correct fallback: the content is visible, only the motion is missing.

View Transitions animate between two states (12-motion-principles-and-ui-motion.md, sections 8.1 and 8.2). Same-document: `document.startViewTransition(() => updateDOM())` snapshots the old state, applies the change, and crossfades over 250ms by default; elements given the same `view-transition-name` in both states morph position and size. Cross-document: `@view-transition { navigation: auto; }` in both pages turns a plain link click on a multi-page site into the same morph, which is how a Shopify collection image can grow into the product page gallery without a framework. House settings: 350 to 500ms, the house ease-out curve from 12-motion-principles-and-ui-motion.md section 3.5, and `::view-transition-group(*) { animation-duration: 0s }` under `prefers-reduced-motion`.

### 6.5 The Locomotive and Immersive Garden patterns, dissected

Locomotive (Montreal, a digital-first design agency since 2008 by its own copyright line; author of the locomotive-scroll library, whose current major version is built on Lenis) and Immersive Garden (Paris) between them defined the scroll narrative genre that Awwwards rewards and that DESIGN.md names as the first reference for the house site. What each pattern is, what it costs, and the house take:

| Pattern | Mechanics | Cost | House take |
|---|---|---|---|
| Weighted scroll | Lenis at lerp 0.08 to 0.1 | 5.4KB gzipped; input lag by design | Keep, desktop only, reduced-motion off |
| Preloader counter | A full-screen scrim with a percentage that tracks real asset loading, then a curtain wipe | Delays LCP by the loader's duration | Only when it is the idea (DESIGN.md: the Fiber chrome); never longer than the real load; skipped on repeat visits via `sessionStorage`; never under reduced motion |
| Line-masked type reveal | SplitText lines, translateY 100 percent to 0, expo out, 0.08s stagger | DOM doubles per headline | Keep for h1 and section heads only |
| Image reveal | clip-path inset from 100 percent to 0, or scale 1.15 to 1 over 1.2 to 1.6s, once, on entry | Compositor only | Keep; this is the house "slow scale on a case hero" |
| Parallax layers | Background at 0.1 to 0.2 of scroll speed, foreground at 1 | Compositor via scroll-driven animation; sickness risk above 0.3 | Keep under 0.2; one layer; off under reduced motion |
| Pinned chapter | A section pins for 200 to 300vh while content inside scrubs | Breaks native scroll expectation on phones; keyboard users lose place | Desktop only; vertical stack on phones |
| Horizontal gallery | A row pinned and translated along x by vertical scroll | Same, plus iOS resize jumps | Desktop only; swipe carousel with scroll-snap on phones |
| WebGL image distortion | Each image drawn as a plane with a displacement or RGB-shift fragment shader driven by scroll velocity or hover | 150KB plus a continuous GPU draw; drains a phone | The peak only, desktop only, with a static fallback; never on the Shopify PLP |
| Image sequence scrub | 100 to 150 frames painted to canvas by scroll progress | 5 to 15MB | One per site at most; WebP frames; video fallback on phones (section 4.6) |
| Curtain page transition | A full-screen panel wipes in, the route changes, the panel wipes out | 600 to 900ms of blank screen per navigation | Replace with a cross-document View Transition; the curtain hides a slow route |
| Custom cursor | A div following the pointer, often with `mix-blend-mode: difference` | A pointermove handler every frame; invisible to touch, which is most of the traffic; a 2019 to 2022 tell | Almost never; a "drag" label on a gallery under `pointer: fine` is the one exception |
| Ambient audio toggle | A muted-by-default soundscape with a visible switch | Autoplay blocked everywhere; a loud surprise if it fires | Never on a client site; acceptable on a film microsite with explicit opt-in |

What to borrow is the pacing: a long stillness between moves, type that arrives after the image, one peak at roughly 60 percent of the page, and an ending that resolves. What to refuse is the weight: the house budget is 1.5MB on first view (section 5.2), and the HTTP Archive's 90th percentile mobile page is already 8,337KB.

Page-transition libraries. Barba.js, Swup and Taxi.js intercept link clicks on a static site, fetch the next page and swap a container, which turns a multi-page site into a single-page app. When a developer proposes one, require: focus moved to the new h1 or main, document.title updated, a polite aria-live region announcing the new page, scroll restored on Back, and a GA4 (Google Analytics 4) `page_view` fired on each swap. Cross-document View Transitions (section 6.4) give the same morph with none of that work, which is why the house prefers them wherever the audience's browsers support them.

### 6.6 The one peak rule, loaders and cursors

One peak. A page earns one moment that could not have been done in CSS alone (12-motion-principles-and-ui-motion.md, section 5.8; design-taste sections 2 and 5 for stillness). On the web the test is technical as well as visual: the peak is the one item from the stack in section 6.1 that loads a library or a GPU context, and a viewer can name it.

Loaders. A preloader is right only when it is the idea: when the counter, the mark or the curtain is a brand gesture the client will recognise as theirs. It is wrong as a mask for a slow page, and Deloitte Digital's 2020 study "Milliseconds Make Millions" measured the price: a 0.1 second improvement in mobile site speed lifted retail conversions by 8.4 percent and travel conversions by 10.1 percent. A loader that adds 2 seconds spends that twenty times over. Rules: it tracks real loading; it is capped at 1.5 seconds visible; it never fires on the second visit; the content under it is already painted so LCP is honest; it does not run for reduced-motion users.

Cursors. A custom cursor is a desktop-only effect on sites whose audience is on phones, it costs a handler per frame, and it is a 2019 to 2022 tell. The house does not ship one unless the cursor is the interaction (a drag hint on a desktop gallery), and even then only under `@media (pointer: fine)`.

### 6.7 The house motion specification for a web page

| Element | Move | Duration | Ease | Trigger | Reduced motion |
|---|---|---|---|---|---|
| Hero loop | Video plays, with a visible 44px pause and play button (section 4.5) | Loop of 6 to 10s | none | Load, muted, `playsinline`; pauses when off screen | Poster only |
| Case hero image | scale 1.06 to 1 | 1.2s | expo out | Load | None |
| Headline lines | translateY 100 percent to 0 under a mask | 1.2s, stagger 0.08s | expo out | Entry at 20 percent | Opacity only, 300ms |
| Images in flow | opacity 0 to 1, translateY 16px to 0 | 600ms | house ease-out | `view()` entry 0 to 60 percent | Opacity only |
| Links | Underline draws from the start edge | 250ms | ease-out | Hover and focus | Keep |
| Page change | Cross-document View Transition crossfade | 350ms | house ease-out | Navigation | 0s |
| Everything else | Still | n/a | n/a | n/a | n/a |

Hover effects on cards, fade-up on every section, parallax on everything and auto-advancing sliders are listed as cheap tells in design-taste section 3 and are not in this table for that reason.

## 7. Frameworks and platforms

### 7.1 The decision table

| Need | Choice | Why |
|---|---|---|
| Agency site, microsite, deal sheet, under about 30 pages, no editor | The house static build (website/build.mjs: `content.mjs` to HTML, no framework, no dependencies) | Zero JavaScript by default, nothing to update, 100 on every Lighthouse category is the floor |
| Brand or hospitality site with a CMS and editorial pages | Astro with Sanity | Islands ship JavaScript only where an island exists; content collections; the editor gets a real studio |
| Client marketing site the client's team will edit visually | Framer | The 2024 to 2026 agency default; motion and CMS built in; no code handover needed |
| Client site that needs custom code, a large CMS and an agency maintaining it | Webflow | Designer plus CMS plus hosting in one; GSAP native since the acquisition |
| Commerce | Shopify (Liquid theme; Hydrogen, Shopify's headless React toolkit, only with a developer on retainer) | Checkout, payments, fraud, apps; section 8 |
| App-like product, logged-in states, commerce front with custom routing | Next.js 16 | React Server Components, Cache Components, the Vercel Shop reference |
| Motion-heavy microsite with state (a configurator, a game) | SvelteKit | Compiled output, small bundles, Svelte 5 runes for state |
| The team is Vue | Nuxt 4 | Same islands and server rendering story in Vue |
| Form-heavy or data-heavy app | React Router 7 (the Remix project merged into it in November 2024) | Loaders and actions model the request and response directly |
| Client insists on WordPress | WordPress 7.1 (19 August 2026) as a headless source (an editor that serves content by API to a separate front end), Astro or Next in front; or a lean block theme | Section 7.5 |
| Internal prototype, pitch page or event splash made by the design team | Figma Sites or Figma Make (both announced at Config, 7 May 2025; 09-interaction-design-and-ux-patterns.md, section 4.2) | Publishes from the design file in hours; check the published markup, headings and plan limits before it carries a client's name |
| A Webflow site that also needs an app (a configurator, a member area) | Webflow Cloud | Hosts Next.js and Astro apps beside a Webflow site (Webflow developer documentation, October 2026) |
| A WebGL effect on a Framer or Webflow build | Unicorn Studio or a similar no-code effect embed | Budget it like Spline (section 4.6): measure runtime bytes and continuous GPU use, and keep a static fallback |
| Squarespace, Wix | No | Section 7.7 |

### 7.2 Code frameworks, October 2026

- Next.js 16 shipped 21 October 2025 with stable Turbopack, Cache Components and React Compiler support; 16.2 (18 March 2026) made the Adapter API stable so a Next.js site deploys to Netlify, Cloudflare and AWS through OpenNext without Vercel; 16.3 (3 August 2026) added Instant Navigations; 16.4 (6 October 2026) added lazy compilation and React 19.3 features. It is the right tool when the site is an application; for a brochure, its hydration cost, build step and dependency tree outweigh it.
- Astro 7.0 shipped 22 June 2026 on Vite 8 with a Rust compiler; 7.4 (15 October 2026) added separate build and runtime image services. Islands architecture (section 5.5) is native; a page with no island ships no JavaScript. The house default for a content site with a CMS.
- SvelteKit on Svelte 5 (runes, October 2024) compiles components to plain DOM code with no virtual DOM; bundles are typically a third of the React equivalent. Choose it when the microsite has real state and the developer knows it.
- Nuxt 4 (2025) for Vue teams; the same server rendering and islands story.
- React Router 7 in framework mode is what Hydrogen (section 7.6) builds on as of the 2026-10 version.

### 7.3 Webflow

Webflow is a visual designer that writes real HTML and CSS classes, a CMS, and hosting, with GSAP integrated since Webflow bought GreenSock in autumn 2024. Strengths for agency work: the Designer produces clean markup when the designer names classes with discipline; the CMS handles collections and references; the hosting includes a CDN and SSL; the client can edit copy in the Editor without breaking layout; code export exists for static pages. Limits: no server-side logic (forms post to Webflow or a third party), custom code is pasted rather than built, interactions are keyframe based and heavy when stacked, ecommerce is weak for luxury (use Shopify), and the site plans on webflow.com/pricing in October 2026 are Basic at $15 a month billed yearly (no CMS, 300 static pages, 10GB bandwidth) and Premium at $25 billed yearly (the CMS with up to 20,000 items across 40 collections, 50GB bandwidth scalable in steps to 2.5TB, code components, site search), with a Team platform plan from $2,500 a month on an annual contract.

### 7.4 Framer

Framer became the agency default for marketing sites between 2024 and 2026 because it merged design, motion and publishing. Verified against framer.com/pricing in October 2026: Free (framer.website subdomain, 1GB bandwidth, 10 CMS collections, one free locale), Basic at $10 a month billed yearly (custom domain, 30 pages, 2 CMS collections, 1,000 CMS items, 50GB), Pro at $30 (150 pages expandable by $20 per 100 to 700, 10 collections expandable by $40 per 10 to 40, 2,500 CMS items expandable by $20 per 10,000 to 40,000, 100GB bandwidth expandable by $40 per 100GB to 2TB), localisation as an add-on at $20 per locale up to 20, Enterprise custom. The motion system is Framer's own (appear effects, scroll transforms, hover and press variants), which produces the fade-up-everything tell unless the designer removes the defaults; the taste rule is one considered move. Code components are React and need a developer. Limits: no code export (the site lives on Framer's hosting), limited control over markup (headings and landmarks need checking in the published HTML), and pages past 150 on Pro cost extra. The Fiber template Kaavish sent is the chrome reference in DESIGN.md; the house treats a bought template as a starting system and rebuilds its type, spacing and motion to the brief.

### 7.5 WordPress

WordPress 7.1 "Mary Lou" shipped 19 August 2026; maintenance releases followed and 7.2 was in beta as of October 2026. When a client insists (a marketing team that already lives in it, a publisher, a hotel group with a central IT policy), two acceptable routes: a lean block theme with no page builder, Full Site Editing, a handful of audited plugins, managed hosting (WP Engine, Kinsta) with a CDN; or headless, where WordPress is the editor and an Astro or Next.js front end renders the pages through WPGraphQL or the REST API, which removes theme bloat and the plugin attack surface from the public site. The WordPress tell to refuse: a page-builder site (Elementor, Divi, WPBakery) with a 2 to 4MB home page, 30 plugins and a slider.

### 7.6 Shopify

Shopify is the house commerce platform. Two storefront models as of October 2026:

- Liquid themes. Dawn is the reference theme in Shopify's developer documentation; Horizon is Shopify's own free theme (version 4.3.0, 9 October 2026) built on nested theme blocks. Almost every luxury store the house will build is a Liquid theme: checkout, payments, fraud, markets, apps and the Section Rendering API (Shopify's endpoint that re-renders one section without a page reload) come included. Section 8.8 covers theme craft.
- Hydrogen, Shopify's headless toolkit, documented at version 2026-10. The React Router 7 (framework mode) template deploys to Oxygen, Shopify's hosting; a Vercel Shop template on Next.js 16 App Router is the second official starting point; Nuxt, Astro, SvelteKit and SolidStart use the core directly. Hydrogen means owning the UI, routing, data loading, SEO, account pages and sessions. Choose it only when the storefront is itself the product (editorial commerce with custom routing) and a developer is on retainer for the life of the store.

Shopify Payments is available in the United Arab Emirates and is not available in India (Shopify's supported countries page, October 2026), so an Indian store runs Razorpay, PayU, Cashfree or PhonePe as the gateway (section 8.9).

### 7.7 Squarespace and Wix

No. The reasons are specific: template systems that cannot be left (a Squarespace site is recognisable at a glance, which is the opposite of design-taste's specificity test), limited typographic control (no cascade layers, no container queries, no variable font axes, restricted tracking and leading), heavy runtimes (Wix's Thunderbolt renderer improved after 2021 and still ships hundreds of KB of JavaScript to a brochure page), hosting lock-in with no export, and a commerce layer that cannot do luxury PDP craft. The one acceptable case: a one-page personal site for an individual with no budget, and even then Framer Free does it better.

### 7.8 Headless CMS

| CMS | Model | Free tier, October 2026 | Choose when |
|---|---|---|---|
| Sanity | Structured content in a hosted content lake, GROQ query language, a React studio you customise, Portable Text for rich text | 20 seats, 10,000 documents, 100GB bandwidth, 250,000 API requests, 1M CDN requests, 2 public datasets; Growth $15 per seat per month | The house default for editorial luxury sites with Astro or Next |
| Contentful | Enterprise content platform, content types, rich text, app framework | A free plan exists; its limits are unknown as of October 2026 (the pricing page refused automated reading) | The client is already on it |
| Payload | Open source (MIT, per its GitHub repository in October 2026), TypeScript, Next.js native, self-hostable with Postgres or MongoDB; announced it was joining Figma on 17 June 2025 (Payload blog) | Free to self-host | The team owns a Next.js codebase and wants the CMS inside it |
| Storyblok | Visual editor with nested components, component schemas | Starter: 1 seat (up to 2), 100,000 API requests and 100GB of traffic a month, 2 locales | A marketing team that must see the page while editing |

The rule: the CMS is chosen for the editor, and the front end for the visitor. A luxury site with three editors and a monthly cadence does not need a CMS at all; the house `content.mjs` pattern (every word in one file, a build that refuses banned words) is faster and cannot break.

### 7.9 Hosting

| Host | Free tier limits, October 2026 | Notes |
|---|---|---|
| Vercel | Hobby: 200 projects, 100 deployments a day, 100MB static upload, 45 minute builds, 50 domains per project, functions 300s and 2GB (vercel.com/docs/limits, updated 16 September 2026); Hobby is for personal, non-commercial use under Vercel's fair use guidelines, so client work goes on Pro | Image optimisation quotas in section 4.4; the house `vercel.json` sets build, cleanUrls, trailingSlash and immutable caching on /assets |
| Netlify | Free plan is a 300 credit pool: bandwidth at 20 credits per GB (about 15GB), production deploys at 15 credits each (about 20); Personal at $9 a month with 1,000 credits | The house `netlify.toml` sets base, command, publish and the same cache header |
| Cloudflare Pages | 500 builds a month, one at a time, 20,000 files a site, 25MiB per asset, 100 custom domains a project; the limits page states no bandwidth cap | The cheapest home for a static microsite with Indian and Gulf traffic through Cloudflare's edge |
| GitHub Pages | Free for public repositories; GitHub documents a 1GB site size and a 100GB per month soft bandwidth limit | The house .github/workflows/pages.yml builds on every push that touches `website/`; root-relative links require a custom domain |

All four put a CDN in front of the files; the India and Gulf edge presence of each is in section 5.5.

### 7.10 Domains and DNS literacy

A registrar sells the name; a DNS host answers queries about it; they can be different companies, and the client must own the registrar account in their own name, always, with the agency as a delegate. Record types a creative director will see in a launch: A and AAAA (name to IPv4 and IPv6 address), CNAME (name to another name; not allowed at the apex, which is why hosts offer ALIAS or ANAME records or an A record at the apex), MX (mail routing; never touched during a web launch, and the single most common thing a web launch breaks), TXT (verification strings and SPF), CAA (which certificate authorities may issue for the domain). TTL is the seconds a record is cached: lower it to 300 a day before a migration, raise it to 3600 or 86400 after. Canonical host: pick www or apex, 301 the other. HTTPS is automatic on every host above through Let's Encrypt; add HSTS (HTTP Strict Transport Security, a response header telling browsers to use only HTTPS for the domain) once the redirects are stable. Country domains: .in is run by NIXI through accredited registrars; .ae by the TDRA's .ae Domain Administration through accredited registrars; both need the client's local entity details, so start the registration first.

### 7.11 Analytics

| Tool | Model | Notes, October 2026 |
|---|---|---|
| GA4 | Event based, free, 14 months maximum data retention on the free tier (2 months by default), BigQuery export free | Consent Mode v2 (Google's API that adjusts tag behaviour to each visitor's consent choices) has been required for visitors from the EEA (European Economic Area) since March 2024; needs a consent banner wherever consent law applies; the client's media team expects it |
| Plausible | Cookieless, EU hosted; the legacy script.js measured 2.8KB raw and 1.3KB gzipped in October 2026, and Plausible describes its script as 54 times smaller than Google Analytics; Starter $9, Growth $14, Business $19 a month at the 10,000 pageview tier, 2 months free yearly | The house default for microsites: no banner needed by its own compliance statement, no identifiers |
| PostHog | Product analytics, session replay, feature flags, surveys and experiments in one; a free tier of 1M product analytics events a month (PostHog docs, October 2026) | Commerce funnels and apps |
| Vercel Web Analytics and Speed Insights | Privacy-first pageviews and field Core Web Vitals per route | Any site on Vercel; the quickest honest field data for a microsite |

The rule: analytics the client will read, and nothing else. A microsite with a pixel, GA4, Hotjar and a chat widget spends 300KB and a consent banner on data nobody opens.

### 7.12 Paid media measurement

A campaign landing page carries the media plan's tags, and only behind consent:

- Meta Pixel plus the Conversions API (CAPI), which sends the same events server to server from the site or from the client's CRM (customer relationship management system) and is deduplicated against the browser pixel through a shared `event_id`.
- Google Ads conversion tracking with enhanced conversions (a hashed email or phone number sent with the conversion so Google can match it to a signed-in user), and Google Ads linked to GA4.
- The LinkedIn Insight Tag on investor and B2B real-estate pages; the Snap Pixel where the Gulf plan buys Snapchat.

Deploy them through Google Tag Manager, gate them with Consent Mode v2 and the consent platform (section 7.13), and prefer a server-side container on a first-party subdomain (metrics.brand.com): fewer events are lost to Safari's tracking prevention and to ad blockers, and the page ships one tag script in place of five. For real estate and other high-ticket leads, capture `gclid` and `fbclid` (the Google and Meta click identifiers in the landing URL) in hidden form fields and send qualified-lead and sale stages back from the CRM as offline conversions, so bidding optimises towards buyers. Every client-side pixel adds a script and main-thread work: measure each one in the WebPageTest waterfall against the JavaScript budget in section 5.2. Launch check: Meta Events Manager's Test events view and Google Tag Assistant both show the lead or purchase event firing once, with consent respected. Ad specifications are in 26-platform-and-format-specs-2026.md, section 3.

### 7.13 Consent management: GDPR, DPDP, PDPL

- GDPR (EU, 2018) and the ePrivacy rules: non-essential cookies and trackers need prior consent; a banner with equal accept and reject; records of consent. Applies to any site that serves EU visitors, which a Dubai hotel does.
- India: the Digital Personal Data Protection Act, 2023 (the DPDP Act, assented 11 August 2023) and the DPDP Rules, 2025. Commencement is phased: provisions including the Data Protection Board came into force on 13 November 2025; a further set on 13 November 2026; all remaining provisions on 13 May 2027. Consent must be free, specific, informed, unconditional and unambiguous, with a notice the data principal can request in English or any of the 22 languages in the Eighth Schedule; consent managers are registered intermediaries through which a person can give and withdraw consent; the Schedule to the Act sets penalties up to 250 crore rupees per instance for failing to take reasonable security safeguards. Practical reading for a site: a plain-language notice at the point of collection (the newsletter field, the enquiry form), a withdrawal route, and no pre-ticked boxes.
- UAE: Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data, in force 2 January 2022, regulated by the UAE Data Office; processing needs consent unless an exception applies, and the Consumer Protection Law (Federal Law No. 15 of 2020) separately restricts using consumer data for marketing. DIFC and ADGM run their own regimes for entities inside the free zones. Saudi Arabia's Personal Data Protection Law (PDPL) has been enforced since September 2024.
- Tools: Cookiebot, Osano, Termly, CookieYes (an Indian company, which matters for DPDP wording). Design: a bottom sheet, two equal buttons, 11px micro labels per the house system, no "accept all" in flame against a grey reject, no banner at all when the site runs cookieless analytics and no pixels.

### 7.14 Forms and email capture

- Native form markup first: labels, autocomplete attributes, inputmode="tel" and "email" so phones show the right keyboard, required and pattern validation with a designed error state (06-ui-design-craft.md section 5), a thanks page with a URL so it can be a conversion goal.
- Delivery: the house site posts to FormSubmit (first submission triggers a one-time activation email to the inbox); Formspree (50 submissions a month free, Personal $15 monthly or $10 yearly); Netlify Forms on Netlify hosting (free and unlimited on Netlify's credit-based plans, per its documentation in October 2026); HubSpot forms when the client runs HubSpot (the embed script is heavy; load it on interaction); a route handler on Next.js when the site already has a server.
- Native form styling: customisable select (`appearance: base-select` with `::picker(select)`, section 2.9) for the PDP size selector, shipped behind `@supports` over a classic select, because MDN warns that some JavaScript frameworks block these features or fail hydration with server rendering; `accent-color` for checkboxes and radios; `:user-invalid` so an error state appears only after the person has typed; `field-sizing: content` for an enquiry message box that grows with the text.
- Spam: a honeypot field (a hidden input that people never fill and bots do) plus a time-to-submit check catches most; Cloudflare Turnstile is invisible when a challenge is needed; a puzzle CAPTCHA on a luxury enquiry form is a defect.
- Email capture: a `dialog` element that opens at 50 percent scroll or on exit intent on desktop, at most once per session; one field; the DPDP or GDPR notice line under it; double opt-in where consent law requires. Klaviyo (free up to 250 active profiles and 500 email sends a month, with $5 of mobile messages) is the Shopify-native choice; Mailchimp for a non-commerce list. Section 10 covers the email itself.

## 8. Ecommerce craft

### 8.1 The luxury commerce references and what each teaches

| Reference | Status, October 2026 | What to borrow |
|---|---|---|
| Ssense (Montreal) | Entered creditor protection under Canada's Companies' Creditors Arrangement Act (CCAA) in late August 2025, citing US tariffs, with about C$371M of debt, and put itself up for sale; the outcome of the sale is unknown as of October 2026 | The product index as interface: monochrome, three columns, plain grounds, no badges, the brand name as the only label; the editorial as a parallel site |
| Net-a-Porter and Mr Porter | Acquired with YNAP by Mytheresa from Richemont in April 2025; the group was renamed LuxExperience B.V. on 1 May 2025 and also owns Yoox | The Edit and The Journal: commerce wrapped in a magazine; the PDP's "wear it with" |
| Mytheresa (Munich) | Flagship of LuxExperience | Fewer products per view, designer-first navigation, a curated front page that changes weekly |
| Ounass (Al Tayer, Dubai) | The Gulf's luxury marketplace | Arabic and English parity, rapid Dubai delivery as a headline promise, Ramadan and Eid edits as seasons, AED pricing with VAT included |
| Aesop | Owned by L'Oréal since August 2023 | Product as still life on paper, no sale, no badges, long descriptions that read as essays, stores as content |
| Bottega Veneta | Left social media in January 2021 | The site as a film; one product per screen; no grid on the home page |
| The Row | n/a | Grey ground, no faces, three images per product, nothing else |
| Apple | n/a | The PDP as a scroll story with the buy bar sticky; the configurator; the compare table |

### 8.2 PLP anatomy, with the luxury variations

A product listing page (PLP) is the collection or category grid. The contemporary default is 4 columns on desktop, 2 on phone, 24 to 48 per load, infinite scroll, filters in a left rail, badges for new and sale, quick add on hover. The luxury variations, with reasons: 3 columns on desktop and 2 on phone (1 for couture and high jewellery), because space is price; 12 to 24 per view with a "load more" button in place of infinite scroll, because the footer must be reachable and Google must find page 2; an editorial break every 8 to 12 cells (a full-bleed image, a line of copy), because a grid without rhythm is a warehouse; no badges, because urgency reads cheap; price as an 11px micro label under the name; hover swaps to the on-model image, which is the second image in the sequence; no quick add, because the product deserves its page; filters as a drawer opened from one word; image cells at 4:5 or 3:4 with `aspect-ratio` set so the grid never shifts.

### 8.3 PDP anatomy and product imagery specifications

The product detail page (PDP) in the luxury form (interaction states in 09-interaction-design-and-ux-patterns.md, section 6.1): gallery on the left as a vertical scroll of 4 to 8 images on desktop (no thumbnails, no arrows) and a swipe carousel with scroll-snap and dots on the phone; the buy box sticky on the right with name, price, a colour selector that shows the material itself as a swatch, size, one full-width button, and one quiet line for Apple Pay or the instalment option; below, details and summary disclosures for description, materials, care, shipping and returns; "complete the look" as three products; reviews only when the brand believes in them (The Row and Aesop do not show them). Size and fit: a size guide in a `dialog` element with a measured table in cm, the model's height and the size worn ("Model is 178cm and wears S"), and honest fit notes; stock states: "in stock", "low stock" when true, "sold out" with notify me, and no countdown timers, which the Indian dark-pattern guidelines list as false urgency when untrue (section 8.11).

Imagery specifications: master files at 4000px on the long edge; the on-site set at 2400 wide for zoom and 1200, 800 and 480 for the gallery and grid; 4:5 or 3:4 ratio held across the whole catalogue; the sequence in order: still life on the brand ground, on-model front, on-model side or back, detail, scale (in the hand or on the body), texture macro, and a 6 to 10 second loop; zoom at 2x on hover or tap, loading the 2400 file on demand; lighting, ground and retouching identical across the range (16-editing-colour-grading-and-delivery.md for grading); filenames and alt text per section 9.9.

### 8.4 Price on request, appointments and clienteling

Clienteling is the luxury practice of a client advisor keeping a recorded, ongoing relationship with each client, and the site's job at the top of the range is to start that relationship. Above a price threshold set with the client (high jewellery, watches, couture, branded residences), the PDP replaces Add to bag with one of four actions:

| Action | What it collects or does | Why |
|---|---|---|
| Enquire | A dialog with name, phone with country code, preferred channel (WhatsApp, call or email) and preferred boutique; the SKU and page URL captured silently | The client advisor opens the conversation already knowing the piece |
| Book an appointment | In boutique or by video, with real slots from the clienteling or calendar system | A slot the client advisor cannot honour is a broken promise |
| Reserve in boutique | Stock held for 48 hours, no payment | Lets the buyer see the piece before paying |
| WhatsApp | A `wa.me` link with prefilled text naming the product and its reference | The channel the India and Gulf client already uses |

Price display has three settings: shown; "Price upon request"; or "From AED 85,000". Hide a price only when the brand hides it in store, and keep the Product schema honest by omitting the Offer when no price is shown (section 9.4). Route every enquiry into the CRM with its source, UTM parameters (the utm_ query parameters that tag a link's campaign, source and medium) and click IDs, set a first response time in minutes, and state it on the confirmation: "A client advisor will reply on WhatsApp within the hour, 10:00 to 22:00 Dubai time." Track the enquiry in GA4 as `generate_lead` with a value. Flow states are in 09-interaction-design-and-ux-patterns.md, section 6.1, and the microcopy in 10-ux-writing-and-content-design.md, section 11.2.

### 8.5 The jewellery PDP in India

Gold jewellery carries the BIS (Bureau of Indian Standards) hallmark and the six-character HUID (hallmark unique identification): from 1 April 2023 only HUID-hallmarked gold jewellery may be sold (10-ux-writing-and-content-design.md, section 11.5, for the copy). The PDP shows a price breakdown table, each line stored as a Shopify metafield (a typed custom field on the product, section 8.8), because Indian buyers compare it line by line across jewellers:

| Line | Example | Source of truth |
|---|---|---|
| Metal and purity | 18K yellow gold; 22K; PT950 platinum | Product metafield |
| Net weight | 6.42g | Product metafield, per variant |
| Metal rate and its date | The day's rate per gram for that purity, dated | A daily rate feed |
| Making charges | Per gram or a flat sum | Product metafield |
| Stone weight and value | 0.52ct, IGI certified | Product metafield |
| GST | 3 percent of the value including making charges | Calculated |
| Total | The price at checkout | Calculated |

Where prices float with the daily gold rate, an app or a scheduled job updates variant prices each day, and the Offer price in the structured data (machine-readable schema.org facts, section 9.4) matches the page. Certificates (IGI, GIA, SGL) appear as a certificate number and a downloadable PDF. Lab-grown diamonds are disclosed in the product name and the first line of the description. A ring size guide gives Indian, US and UK sizes, with a printable sizer that uses the print stylesheet at 100 percent scale (section 14.6) and a credit-card calibration line. Each field is a typed Shopify metafield (section 8.8), so the table, the schema and the product feed come from one source.

### 8.6 Cart and checkout

Flows and their error paths are in 09-interaction-design-and-ux-patterns.md, sections 3.3 and 6.3. The web specifics: a cart drawer in place of a cart page for a small catalogue, updated through Shopify's Section Rendering API without a reload; the order summary visible at every step; guest checkout always; address autocomplete. The Baymard Institute's average documented cart abandonment rate is 70.22 percent across 50 studies, and its latest survey of reasons (page updated 22 September 2025), after excluding the 42 percent of shoppers who were just browsing, puts extra costs too high first (40 percent), then delivery too slow (20), not trusting the site with card details (19), account required (18), checkout too long or complicated (17) and website errors (17). Each is a design decision, in that order: show shipping, duties and tax on the PDP; state delivery dates by pincode or emirate; show the payment marks and the padlock; allow guest checkout; keep checkout to one page; test the checkout on the India Android before every release. Shopify's checkout is edited through Checkout Extensibility (its branding settings and checkout extensions, which replaced `checkout.liquid`) and nowhere else; Shop Pay (Shopify's saved-details express checkout) is the fastest path for returning buyers.

India's checkout layer. Many Indian D2C (direct-to-consumer) stores on Shopify front or replace the checkout with GoKwik, Shopflo or Razorpay Magic Checkout: one-tap login by phone OTP (one-time password), addresses saved across merchants, UPI intent first, and a risk score that decides whether cash on delivery (COD) is offered for a pincode and basket. Confirm with Shopify and the vendor how the layer sits beside Shopify Checkout and which Shopify plan it needs before proposing one. RTO (return to origin: a COD order refused at the door and shipped back) is the hidden cost of COD; counter it by confirming COD orders on WhatsApp, offering a small prepaid discount or a part-prepaid COD fee, and capping COD by order value. The luxury rule holds: the layer is themed to the brand tokens and states the delivery date by pincode.

### 8.7 Speed for commerce

The Deloitte figure in section 6.6 is the commercial argument. The Shopify-specific causes of a slow store: apps that inject scripts on every page (audit the theme's app embeds and remove any the store does not actively use), hero sliders, unoptimised product images bypassing the Shopify CDN, and third-party review and chat widgets (section 5.6). Shopify serves WebP and AVIF automatically through the `image_url` filter when a width is given; preconnect to cdn.shopify.com; defer every non-critical script; keep theme JavaScript under the 250KB budget in section 5.2; check the admin's Web Performance report, which is field data.

### 8.8 Shopify theme craft

- Architecture: templates (JSON files in `templates/` that list sections in order; a Liquid template holds code), sections (Liquid files in `sections/` that merchants add and reorder in the theme editor, each with a schema), blocks (modules inside a section that merchants add, remove and reorder), theme blocks (blocks defined once in `blocks/` and reusable across sections, nested in Horizon), section groups (JSON containers for header and footer areas), `config/settings_schema.json` (the theme settings the merchant sees) and `config/settings_data.json` (their values), snippets (partial Liquid files included with render), assets.
- Liquid in one paragraph: `{{ product.title }}` outputs a value; `{% if product.available %}` and `{% for image in product.images %}` control flow; filters transform with a pipe, so `{{ image | image_url: width: 1200 | image_tag: loading: 'lazy', widths: '480, 800, 1200' }}` produces a responsive `img` element from the Shopify CDN; objects such as product, collection, cart, customer and shop expose the store's data.
- Metafields attach custom data to products, collections, customers and the shop under a namespace.key, with definitions and types (single-line text, rich text, file, product reference, date, JSON) set in the admin; metaobjects are standalone structured records (a "designer" or "store" entry) referenced from products. Luxury uses: materials and care, the designer's note, a lookbook of related editorial, a "wear it with" reference list, and the jewellery price breakdown in section 8.5.
- Base theme: Dawn is the documented reference and the leanest base; Horizon (free, Shopify, 4.3.0 on 9 October 2026, nested theme blocks) is the newer base with more editor flexibility. The house starts from whichever the brief needs, strips the demo content and app embeds, rebuilds the type and spacing tokens as CSS custom properties, and keeps the theme's accessibility and checkout wiring.
- Tooling: Shopify CLI (shopify theme dev for local preview, theme push), Theme Check for linting, GitHub integration so a theme deploys from a branch, and the theme editor for the merchant.

### 8.9 Payments in India and the UAE

| Market | Method | Facts, October 2026 | Design consequence |
|---|---|---|---|
| India | UPI (Unified Payments Interface, the real-time bank-to-bank rail run by NPCI, the National Payments Corporation of India) | About 20 billion transactions worth about 25 trillion rupees in August 2025 (NPCI), and about 84 percent of India's digital payments in 2025 | UPI must be the first option at checkout; QR and intent flows on phone; the UPI logo marks |
| India | Razorpay | Rate card: 2 percent plus 18 percent GST (goods and services tax) on domestic cards, up to 3 percent on international cards, zero setup and annual fees; its UPI rate is stated inconsistently on the page, so take the contract rate | The default gateway on Shopify in India, since Shopify Payments is unavailable there |
| India | Cards | RBI card-on-file tokenisation since October 2022: merchants store network tokens in place of the card number | "Save card" means a token; say so in the microcopy |
| India | EMI (equated monthly instalments) and cash on delivery | EMI through the gateway; COD remains expected in India even at premium price points (section 8.6 for RTO) | Offer EMI on jewellery; limit COD by value and pincode; never hide it on a page that otherwise reads expensive |
| UAE | Shopify Payments, Apple Pay, cards | Shopify Payments available in the UAE; Apple Pay widespread on an iPhone-heavy audience | Apple Pay as the express button above the form |
| UAE | Tabby | Split in 4 or up to 12 monthly payments; regulated by the Central Bank of the UAE | One quiet line under the price: "or 4 payments of AED 1,250 with Tabby" |
| UAE and KSA | Tamara | Pay in up to 4 instalments or in full; Tamara FZE licensed by the Central Bank of the UAE; positioned as Sharia compliant | Same line; show both only if the client has both |
| UAE | Cash on delivery | Available in Shopify as a manual payment method; its share of orders varies by client, so take it from the client's order data | Offer it with a fee, disclosed on the PDP |

### 8.10 Shipping, tax and markets

UAE VAT is 5 percent (since 1 January 2018) and consumer prices are shown inclusive; Saudi VAT is 15 percent. India's GST on apparel changed under the September 2025 rate rationalisation (5 percent up to a price threshold, 18 percent above it; confirm the current thresholds with the client's accountant), gold jewellery carries 3 percent GST on its value including making charges (section 8.5), and consumer prices are shown inclusive of all taxes. The design rule in both markets: the price on the PDP is the price at checkout, shipping and duties are stated on the PDP by destination, delivery is an estimated date range in place of "3 to 5 business days", and cross-border orders state whether duties are prepaid (DDP) or collected on delivery (DAP), because extra costs are the first reason in the Baymard list (section 8.6).

Markets. One Shopify store serves several markets through Shopify Markets: a currency per market (INR, AED, SAR, USD) with price rounding rules, so a converted price reads AED 1,250, rounded from AED 1,247.63; a language per market; a subfolder per market (`/en-ae/`, `/ar-ae/`) with hreflang (the annotation that tells Google which language and region each page serves, section 9.10) generated; duties and import taxes collected at checkout where available. Managed Markets, with Global-e as merchant of record, is eligible only for stores in some countries, so confirm eligibility before proposing it for an Indian or UAE store. Never redirect automatically by IP address or browser language. Google's international guidance (updated 10 December 2025) says "Avoid automatically redirecting users from one language version of a site to a different language version of a site" and "Don't use IP analysis to adapt your content", noting that "the Googlebot crawler usually originates from the USA". Show a dismissible suggestion banner and remember the visitor's choice.

### 8.11 Commerce display duties in India and the UAE

- India: the Consumer Protection (E-Commerce) Rules, 2020 require the seller's legal name, geographic address, customer care contact and grievance officer details, and the return, refund, exchange, warranty, delivery and country-of-origin information, to be shown to the buyer before purchase. The Legal Metrology (Packaged Commodities) Rules require the MRP (maximum retail price, inclusive of all taxes) and the other mandatory declarations on the listing for pre-packaged goods; the client's counsel confirms which categories apply.
- India: the CCPA's (Central Consumer Protection Authority) Guidelines for Prevention and Regulation of Dark Patterns, 2023 (30 November 2023) list 13 prohibited patterns, among them false urgency, basket sneaking, drip pricing and confirm shaming; the Consumer Protection (E-Commerce) (Amendment) Rules, 2026 make them binding from 1 January 2027, with an annual self-audit and the lowest price of the preceding 30 days as the reference for any advertised discount (09-interaction-design-and-ux-patterns.md, section 13.4). The no-countdown rule in section 8.3 rests here.
- UAE: Federal Law No. 15 of 2020 on Consumer Protection and its 2023 executive regulation prohibit misleading advertising and require clear pricing inclusive of VAT (09-interaction-design-and-ux-patterns.md, section 13.5); every store states the trader's identity, the AED price and the return terms.

The launch checklist (section 15.2) carries a line for each.

### 8.12 The post-purchase experience

The confirmation page states the order number, what happens next and when, and nothing else; no upsell dialog. Transactional email within a minute, a shipped email with tracking, a delivered email, and a single follow-up at 10 to 14 days (a care note or a request for a review, one per order). In India and the Gulf, WhatsApp order updates through the WhatsApp Business Platform (approved message templates) are read far more than email. Packaging is the brand's last page: Aesop's paper, The Row's grey box; the unboxing is photographed by the customer and becomes the next campaign. Account creation is offered on the confirmation page, after the purchase.

### 8.13 Hospitality conversion: booking engines and reservations

The direct booking engine (Sabre SynXis, Amadeus iHotelier, SiteMinder, Cloudbeds, or Mews for boutique properties) and the restaurant reservation tool (SevenRooms, OpenTable, TableCheck; in India, EazyDiner and Zomato's District app) are where the money changes hands, and the handoff from the crafted site is the most visible place a luxury hotel site breaks. Booking anatomy is in 09-interaction-design-and-ux-patterns.md, sections 7.1 and 7.2. The craft rules:

- The site's date and guest picker deep-links into the engine with check-in, check-out, adults, children, rate code and promo parameters, so the guest never re-enters dates.
- The engine is themed with the brand fonts, colour tokens and logo within the CSS the vendor allows, opens in the same tab, and keeps a link back to the site.
- GA4 cross-domain measurement (Admin, Data streams, Configure tag settings, Configure your domains) lets the `_gl` linker parameter carry the session across, and the engine's own Tag Manager or GA4 integration sends purchase with revenue and currency.
- The Google Business Profile booking and reservation links point at the direct engine (section 9.8).
- The member or best-rate benefit sits beside the button, because the engine competes with Booking.com, Expedia and MakeMyTrip on price clarity.
- Hotel and Restaurant structured data (section 9.4), and one full booking tested on the India Android before launch.

## 9. SEO and discoverability as craft

### 9.1 Semantic structure and crawlability

Section 2.1 is the foundation: one h1, ordered headings, landmarks, text as text. Add: every link is an `a` element with an href (a div with a click handler is invisible to Googlebot and to the keyboard); content that must rank is in the server-rendered HTML, because Googlebot renders JavaScript on a second pass that can lag by days; text inside WebGL, canvas, SVG paths or an image does not exist for the index. Framer and Webflow output is crawlable; a Spline hero is a picture to the index.

### 9.2 Titles, descriptions, canonicals

The `title` element is the search result's headline: 50 to 60 characters (Google truncates at about 600px), unique per page, the page's subject first and the brand last, sentence case, no exclamation marks, per the house copy rules. The meta description is 150 to 160 characters and is rewritten by Google more often than not; write it as the one line a confident person would say about the page. A canonical link on every page prevents the www and apex, trailing slash and UTM variants from splitting ranking; a Framer site without a title set per page ships "Untitled" into the index, which is the most common luxury SEO defect the house meets.

### 9.3 Open Graph and X cards

The preview card when a link lands in WhatsApp, iMessage, LinkedIn, Slack or X is drawn from Open Graph meta tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`. Meta's sharing documentation asks for `og:image` at least 1200 x 630 pixels, as close to 1.91:1 as possible, 200 x 200 minimum, under 8MB. X reads Open Graph as a fallback and its own `twitter:card` value `summary_large_image`; X's pixel limits for that card are unknown as of October 2026, because its developer documentation returned an error, so preview the card in a draft post before launch. House rule: a 1200 x 630 image per page, exported under 300KB, because WhatsApp previews, the ones that matter in India and the Gulf, have been observed to skip large images; the image is the campaign still with no text, since the title renders under it. Generate per-page cards for products and case studies with the Vercel OG image route or a build step; test with the LinkedIn Post Inspector and opengraph.xyz.

### 9.4 Structured data

JSON-LD in a `script` element is Google's preferred format. Types the house ships, with the schema.org vocabulary:

| Page | Types | Required or expected properties |
|---|---|---|
| Every site | Organization (name, url, logo, sameAs), WebSite, BreadcrumbList | Logo at least 112 x 112; sameAs to Instagram and LinkedIn |
| Product | Product with Offer (price, priceCurrency, availability), image, brand, sku | Google separates merchant listings (buyable pages, with shipping and return policy markup) from product snippets; meeting the listing requirements earns both |
| Hotel or residence | Hotel or LodgingBusiness (name, address, geo, telephone, starRating, amenityFeature, checkinTime, checkoutTime, image) | Google's hotel prices come from Hotel Center feeds, so markup supports the knowledge panel and nothing more |
| Restaurant | Restaurant or FoodEstablishment (servesCuisine, menu, acceptsReservations, priceRange, openingHoursSpecification, address, geo) | Opening hours here must match the Google Business Profile, including Ramadan and festival hours (section 9.8) |
| Boutique or showroom | Store, or JewelryStore for a jeweller (openingHoursSpecification, address, geo, telephone; department for each brand in a multi-brand store) | One LocalBusiness entity per physical location |
| Residence listing | RealEstateListing, with an Accommodation type (Apartment, House, SingleFamilyResidence) for the unit | Every fact in the markup (area, bedrooms, price, completion) matches the visible text and the regulatory display in section 11.5 |
| Event | Event (name, startDate, endDate, location, offers, eventStatus, performer, image) | Eligible for the event rich result |
| Editorial | Article or NewsArticle (headline, image, datePublished, dateModified, author with Person) | Image at 1200 wide minimum, three ratios (16:9, 4:3, 1:1) where possible |
| Video | VideoObject (name, thumbnailUrl, uploadDate, duration, contentUrl) | Required for video rich results and key moments |
| FAQ | FAQPage | Google restricted FAQ rich results to government and health sites in August 2023; keep the markup for answer engines only |
| Price on request | Product without an Offer | Never mark up a price the page does not show (section 8.4) |

Structured data must match the visible text (Google's AI features guidance repeats this). Validate with the Rich Results Test and the Schema Markup Validator before launch.

### 9.5 Sitemaps, robots and crawlers

A `sitemap.xml` holds up to 50,000 URLs or 50MB uncompressed; larger sites use a sitemap index; lastmod only when it is true. `robots.txt` allows everything on production and the staging site carries noindex (the meta robots or HTTP header value that keeps a page out of the index) plus a password, because a staging site that ranks ahead of the launch is a real and recurring accident. Image sitemaps help a lookbook into Google Images. Submit the sitemap to Bing Webmaster Tools as well as Search Console, because Bing's index feeds Microsoft's own answer surfaces.

AI crawlers. Each vendor separates training from search, and the `robots.txt` decision is made per user agent:

| Vendor | Training | Search indexing | Fetches when a person asks |
|---|---|---|---|
| OpenAI | GPTBot | OAI-SearchBot (ChatGPT search) | ChatGPT-User, which OpenAI says may not follow `robots.txt` because a person initiated it |
| Anthropic | ClaudeBot | Claude-SearchBot | Claude-User |
| Perplexity | n/a | PerplexityBot | Perplexity-User |
| Google | Google-Extended (a `robots.txt` token controlling Gemini training and grounding, with no effect on Search) | Googlebot | n/a |

OpenAI's crawler page states "Each setting is independent of the others", so a site can block GPTBot and still appear in ChatGPT search. The house default: allow the search and user agents always, because being cited by an answer engine is discovery, and decide the training agents with the client's legal team. Cloudflare changed its default on 1 July 2025 ("Content Independence Day") to block AI crawlers unless the site owner allows them, which matters because the house recommends Cloudflare Pages: audit the AI crawler setting on every Cloudflare zone at launch. Measure answer-engine traffic in GA4 with a custom channel group for referrers chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai. Google's documentation (updated 10 December 2025) states that no AI-specific text file, new markup or schema is needed to appear in AI Overviews or AI Mode (Google's AI answers on the results page, section 9.7); an `llms.txt` file (a proposed Markdown index of a site for language models) is harmless and unproven.

### 9.6 Core Web Vitals as a ranking signal

Google's page experience documentation states that Core Web Vitals are used by its ranking systems. The effect is a tie-breaker between pages of similar relevance; field data at the 75th percentile on mobile is what counts (section 5.1). The house budgets pass the thresholds with margin, so the ranking question answers itself.

### 9.7 AI search visibility and the luxury SEO trap

What changed: AI Overviews (launched in the US in May 2024 and extended to over a hundred countries, India among the early ones, later that year) and AI Mode (US in May 2025, India in English in mid-2025, wider through 2025 and 2026) answer the query on the results page and link out through "query fan-out", which issues several sub-queries and surfaces a wider set of pages. Pew Research Center (July 2025) measured that users who saw an AI summary clicked a traditional result in 8 percent of visits, against 15 percent without one. Google reports AI feature clicks under the Web search type in Search Console and claims they are higher quality. The practical reading: informational queries lose clicks; brand, product and place queries still send them; being named in the answer is the new first position.

What earns a citation, from Google's own guidance and the answer engines' behaviour: crawlable text that states facts plainly (opening hours, room counts, prices, materials, dates), structured data that matches that text, consistent entity data across the site, Google Business Profile (section 9.8), Merchant Center and third-party mentions, internal links, and pages that answer one question each. Controls: nosnippet, data-nosnippet, max-snippet and noindex limit what any Google feature shows.

The luxury SEO trap is a beautiful site that is invisible: headlines as images, copy inside WebGL, a one-page site with no titles, "Untitled" pages, no alt text, an Instagram-only brand presence, and a loader that hides the content from Googlebot's render budget. The fix is section 2.1 plus 9.2 plus 9.4, and it costs nothing visual: the h1 can be set at 160px in the brand face and still be text.

### 9.8 Local discovery

For hotels, restaurants, boutiques, showrooms and sales galleries, the map is often the first and largest discovery surface. Maintain three profiles:

- Google Business Profile: primary and secondary categories; hours, including special hours for Ramadan, Eid and Diwali; photographs graded to the brand standard; menu and booking links pointing at the direct engine (section 8.13); attributes; product and offer posts; review replies within 48 hours in the reviewer's language.
- Apple Business Connect, for Apple Maps on an iPhone-heavy Gulf audience (section 1.1).
- Bing Places, which feeds Bing Maps and Microsoft's answer surfaces.

Keep the name, address and phone identical across the site, the three profiles, Zomato, TripAdvisor and the client's own listings, because entity consistency is what both maps and answer engines read; the structured data rows in section 9.4 carry the same facts.

### 9.9 Image alt and naming

Filenames describe the subject and the width (anantara-jewel-bagh-pavilion-dusk-1800.webp), because Google Images reads them; alt text describes the image for someone who cannot see it, without "image of", in under 125 characters, and is empty (`alt=""`) for purely decorative images so screen readers skip them; the same alt feeds the answer engines. For jewellery and fashion, Google Images and Pinterest are discovery channels and an image sitemap with captions is worth the hour.

### 9.10 International: hreflang, Arabic, Hindi

- hreflang tells Google which language and region each page serves. Three equivalent methods (`link` elements in the head, HTTP Link headers for PDFs, or xhtml:link entries in the sitemap); use one. Every version must list itself and every other version (bidirectional), or the annotations are ignored. x-default names the fallback, usually the language selector or the English page. Codes are ISO 639-1 language, optionally with an ISO 3166-1 alpha-2 region: en-AE, ar-AE, en-IN, hi-IN, en-SA, ar-SA; a region alone is invalid. URL structure: `/ae/en/` and `/ae/ar/` under one domain is simplest to maintain and consolidates authority.
- Arabic sites: `dir="rtl"` and `lang="ar"` on the `html` element; logical properties from the first line (section 2.7) so the layout mirrors; mirror directional icons (arrows, back) and keep the logo unmirrored; Arabic faces need 10 to 15 percent more size and line-height around 1.6 to 1.8 because of the ascender and descender depth; mixed English and Arabic runs use `unicode-bidi: isolate`; numerals in Gulf commerce are commonly Western digits even in Arabic copy, which the client confirms; 03-typography.md and design-taste references/type.md for the faces.
- Hindi sites: `lang="hi"`; Devanagari faces with full conjunct coverage (Noto Sans Devanagari, Mukta, Tiro Devanagari Hindi), line-height about 1.7 so matras do not collide, `hyphens: none`; subset per script (section 3.1). Currency formatting through `Intl.NumberFormat` with en-IN gives the lakh grouping (digits grouped as 1,00,000, the Indian convention) that Indian readers expect; en-AE gives AED with two decimals. Multi-currency stores and the no-redirect rule are in section 8.10.
- Override the token layer per script. `:lang(ar)` and `:lang(hi)` reset `letter-spacing` to 0 and `text-transform` to none on every component, because tracking breaks the joins of cursive Arabic and the shirorekha (the headstroke of Devanagari). Arabic and Devanagari have no case, so the 11px caps micro label becomes a weight or colour step at about 105 to 110 percent of the Latin size (03-typography.md, section 15). Set per-script size and line-height tokens (Arabic 1.6 to 1.8, Devanagari about 1.7), mirror directional icons with `:dir(rtl)`, and isolate Latin brand names inside Arabic runs with the `bdi` element or `unicode-bidi: isolate`.

## 10. Email design

### 10.1 The canvas and the client zoo

An email is a web page rendered by a dozen engines that agree on almost nothing. The constants: 600 to 640px wide, a single column on phones, body type at 14px minimum (16px on mobile), tap targets 44px high, HTML under 102KB because Gmail clips a message above that and hides the rest behind a link (a long-documented behaviour that Litmus and Mailchimp both describe; Google's help pages do not state the number), images under 150KB each and under 600KB in total, layout in tables with `role="presentation"`, and width declared in both the HTML attribute and the CSS. Outlook for Windows (2007 through 2021) renders with Microsoft Word's engine, so background images need VML (Vector Markup Language, Microsoft's legacy vector format that Outlook still reads), there is no flexbox, grid or web font, and padding on anchors is ignored; the hybrid method (max-width on a table, with MSO conditional comments, HTML comments that only Microsoft Office's renderer reads, supplying a fixed-width table for Outlook) is the standard answer. Email widths and sizes as a spec sheet are in 26-platform-and-format-specs-2026.md, section 4.6. Apple Mail is WebKit and renders almost anything. The Gmail app with a non-Google account strips the style element, so critical styles are inlined.

Litmus's email client share for September 2026 (over 1.5 billion opens): Apple 76.56 percent, Gmail 16.10, Outlook desktop 3.48, Yahoo 2.35, Google Android 0.94, Outlook.com 0.29. Apple's figure is inflated by Mail Privacy Protection (Apple's feature, since 2021, that pre-loads images through a proxy and so registers opens); India's real reading audience is heavily Gmail on Android, the Gulf's is Apple-heavy. Design for Apple Mail and Gmail first, then verify Outlook for Windows.

### 10.2 Dark mode in email

Three behaviours exist: no change (most web clients), partial inversion (the Gmail apps invert light backgrounds and leave images and dark text alone), and full inversion (Outlook for Windows and some Android clients). Apple Mail and iOS Mail honour `prefers-color-scheme` when the head carries `meta name="color-scheme" content="light dark"` and `meta name="supported-color-schemes"`, so a `@media (prefers-color-scheme: dark)` block can set the dark palette. Rules: logos as transparent PNGs with a padded container or a light keyline so they survive inversion; no dark text baked into images; the paper ground #F3F2EE in place of pure white, because inverted white becomes pure black and crushes the type; test every send in both modes.

### 10.3 Images off

Corporate Outlook and privacy-minded users read with images blocked. The email must read without them: live text for the headline and the call to action, a bulletproof button built from a table cell with padding and a background colour (never an image), alt text on every image styled through the `img` element's font and colour so it reads as a caption, and a hero image at 2:1 under 150KB with its width attribute set to half its pixel width for retina. An image-only email is both invisible with images off and a spam signal.

### 10.4 Fonts

Web fonts load in Apple Mail, iOS Mail and a few Android clients through a link or `@font-face` in the head; Gmail and Outlook ignore them. The brand face is therefore an enhancement with a fallback stack chosen per brand: Georgia for a serif house, Helvetica then Arial for a grotesk. Sizes and line-height in px, `letter-spacing` works widely. Space Grotesk falls to Arial on Gmail; set the fallback's size one px smaller so the line count holds.

### 10.5 The luxury newsletter references

| Sender | Pattern |
|---|---|
| Aesop | One image, a long essay in a serif on paper, no grid, one quiet link at the end |
| Ssense | A monochrome product grid with no copy; the index as a newsletter |
| The Row | One image, one line, white ground, nothing else |
| Monocle | An editorial digest: numbered sections, hairlines, a serif, a sponsor slot that looks like the content |
| Mr Porter (The Journal) | Commerce as a magazine: a feature, then four products |

The common anatomy: a thin masthead, one hero, a single column, hairlines in place of boxes, and a footer that states the address and the unsubscribe plainly; palette and copy follow design-taste sections 2 and 5.

### 10.6 Tools, accessibility and deliverability

Tools: Klaviyo for Shopify stores (free to 250 profiles and 500 sends a month; flows for welcome, abandoned cart, post-purchase), Mailchimp for non-commerce lists, MJML (a markup language that compiles to table-based HTML; the house default for hand-built emails), Litmus and Email on Acid for previews across the client zoo, Can I Email for support tables, Really Good Emails as the reference archive.

Accessibility: lang on the `html` element, `role="presentation"` on layout tables, real headings, alt text, 4.5:1 contrast, 14px minimum, link text that says where it goes, a plain-text part.

Deliverability: SPF, DKIM and DMARC records (the three email authentication records: permitted senders, a cryptographic signature, and the policy on failure) on a dedicated sending subdomain (news.brand.com), DMARC at p=none then quarantine; Google's and Yahoo's bulk sender requirements since February 2024 (senders over 5,000 messages a day must authenticate, offer RFC 8058 one-click unsubscribe, and keep the spam rate under 0.3 percent in Google Postmaster Tools); double opt-in; list hygiene; a warm-up for a new domain; a subject line under 50 characters in sentence case and a preheader (the preview text an inbox list shows after the subject) of 40 to 90 characters, with the house copy rules applied.

Microsoft announced in April 2025 that senders of more than 5,000 messages a day to Outlook.com, Hotmail.com and Live.com addresses must pass SPF, DKIM and DMARC, with enforcement from 5 May 2025 sending non-compliant mail to Junk first (Microsoft Tech Community, "Strengthening Email Ecosystem: Outlook's New Requirements for High-Volume Senders"). The new Outlook for Windows renders with a web engine, but classic Outlook remains supported, so the VML and MSO fallbacks in section 10.1 stay.

BIMI (Brand Indicators for Message Identification) shows the brand mark beside the sender name, which matters to houses with registered marks. Google's requirements: DMARC at p=quarantine or p=reject (BIMI does not work with p=none); a Verified Mark Certificate (VMC), which needs a trademarked logo, or a Common Mark Certificate (CMC); and the logo as a square, centred SVG Tiny PS file. Gmail shows a checkmark beside senders verified with a VMC. Move DMARC from none to quarantine to reject over about six to eight weeks of clean aggregate reports, then add BIMI.

## 11. Microsites and campaign pages

### 11.1 The house genre

A microsite is a single page built for one launch, property, collection, event or pitch. The house form is design-taste section 7 (the house layer); on the web it resolves to one call to action, carried by the floating pill from DESIGN.md, and no other clickable navigation, which is the motion contract in 12-motion-principles-and-ui-motion.md, section 7.10.

### 11.2 Architecture: beats, the peak, the ending

| Beat | Position | Content | Motion |
|---|---|---|---|
| Opening | 0 to 10 percent | The one line and the one image or loop; the thin strip chrome | The hero loop, the mark |
| Rise | 10 to 55 percent | Three to five chapters, each one image and one claim; sections 14vh apart | Reveals only |
| Peak | 55 to 70 percent | The one moment that needed WebGL, a sequence or a pin (section 6.5) | The peak |
| Resolution | 70 to 90 percent | Detail, true numbers, the human gesture (a founder's line, a hand-drawn mark) | Reveals only |
| Ending | 90 to 100 percent | A full-bleed closing image and the contact; design-taste's rule that the ending gets the same care as the opening | Still |

Length: 6 to 9 viewports on desktop and under 12 on a phone; 400 to 700 words in total; weight per the microsite row in section 5.2. Chrome: a thin top strip with the mark, and the floating pill at the bottom carrying the call to action; no footer clutter; no hamburger menu.

### 11.3 The assets pipeline

Shoot list before design, because the page is only as good as its images. Masters at 4000px on the long edge, graded as one set (16-editing-colour-grading-and-delivery.md); exports to the house widths (1800, 1200, 720 landscape; 1440, 1000, 640 portrait) as WebP through Sharp in the build or Squoosh by hand, with a 20px blurred placeholder or a dominant colour inlined for each; loops at 1280 wide, 24fps, muted, under 2.5MB; fonts subset to the glyphs used; `assets-manifest.json` records every file's dimensions so the build writes width and height. Generated imagery is disclosed per 22-ai-era-craft-and-generative-tools.md and never presented as a photograph.

### 11.4 QR landing pages for out-of-home and print

The QR code is a link printed in a place where the phone is the only device. Rules (the print side is in 20-print-packaging-ooh-and-physical-production.md): a short vanity URL (brand.com/goa) that 302-redirects (a temporary redirect, where a 301 is permanent) to the live page, so the destination can change after the print run; UTM parameters on the redirect (`utm_source=ooh`, `utm_medium=qr`, `utm_campaign=name`); error correction level H (30 percent) when a mark sits in the centre, M otherwise; a quiet zone (the blank margin around the code) of four modules; the minimum size rule of thumb is scanning distance divided by 10 (a code read from 1m is at least 10cm wide); black on light, with a press test before any inverted code on gloss; vector SVG into the print file; a test on iOS Camera and Android Lens before the print is approved. The page itself: phone-only design, under 2 seconds on 4G, the same image as the poster so the continuity is instant, one action, no app download, no consent banner where cookieless analytics allow it.

### 11.5 Deal sheets and pitch microsites

A deal sheet (a single property or opportunity: the numbers, the plans, the gallery, the contact) is a page with a print stylesheet (section 14.6) so the same URL prints to A4 as the PDF the buyer forwards. A pitch microsite (the house new-business folder) is a private page built for one prospect: their name in the title, three references, the single idea, a scope. Both expire (11.8).

Regulatory display. Every Indian project page and deal sheet shows the RERA registration number (from the state Real Estate Regulatory Authority under the Real Estate (Regulation and Development) Act 2016), the RERA website URL and, where the state authority requires it, the project QR code (MahaRERA in Maharashtra requires one on project advertisements; the developer's legal team confirms the current order), with carpet area as the stated area. Every Dubai listing shows the Dubai Land Department's Trakheesi permit number (its advertising permit system), with the permit QR code where the Department issues one. Put these in the page footer and in the print stylesheet so the forwarded PDF carries them; the rules are in 10-ux-writing-and-content-design.md, section 11.7, and 24-business-of-creative-and-agency-operations.md, section 14.

Lead routing decides whether a property microsite earns its fee. The enquiry form posts to the developer's CRM (Salesforce, HubSpot, Zoho, or LeadSquared, common with Indian developers) with project, unit type, budget band, source, UTM parameters and click IDs (section 7.12). A WhatsApp button uses `wa.me` with prefilled text naming the project. A call-tracking number per channel shows which media drove calls. The sales team commits to a response time in minutes, because a property lead cools within the hour. Interactive floor plans are inline SVG with each unit as a focusable element carrying its status (available, held, sold) from a feed, so the plan stays current and a keyboard user can reach every unit.

### 11.6 Password protection

Server-side only; a JavaScript password is defeated by view source. Options: Cloudflare Access (free for up to 50 users on the Zero Trust free plan, email one-time codes, in front of any host); Netlify site passwords on paid plans; Vercel Password Protection at $20 a month per protected project on Pro (Vercel documentation, updated 15 September 2026); Framer and Webflow page passwords on paid plans; HTTP basic auth at the edge. Share the password in a separate message from the link, and never by WhatsApp broadcast.

### 11.7 Analytics on a microsite

Plausible or Vercel Web Analytics; goals for scroll depth at 25, 50, 75 and 100 percent, the call to action, and the QR source; a one-page report with sessions by source and device, the scroll funnel and the conversion, in the format in 24-business-of-creative-and-agency-operations.md. The scroll funnel is the design review: a drop before the peak means the peak is too far down.

### 11.8 Expiry and archiving

The end date is set at launch. After it: 301 to the brand's page, or keep the page live with "this campaign has ended" and noindex, or fold it into the agency case study. Before anything is taken down: a full-page capture at desktop and phone widths, a 30 to 60 second screen recording of the scroll for the showreel, the source in the repository, and the analytics export; the agency's right to show the work is in the contract (24-business-of-creative-and-agency-operations.md). Domain renewals are calendared; tracking scripts are removed from an archived page.

## 12. Experimentation and analytics literacy

### 12.1 GA4 events

GA4 is event based: every hit is an event with parameters. Enhanced measurement collects `page_view`, scroll (at 90 percent depth), outbound click, site search, video engagement and file download automatically; recommended events (purchase, `add_to_cart`, `begin_checkout`, `generate_lead`, `sign_up`) carry standard parameters that power the ecommerce reports; custom events cover the rest. Conversions were renamed key events in March 2024. Google Tag Manager deploys the tags; Consent Mode v2 (section 7.13) gates them; server-side tagging (a tag container running on a first-party subdomain that receives events and forwards them to each vendor) survives ad blockers and Safari's tracking prevention better than browser tags; paid media tags are in section 7.12. Free-tier retention is 2 months by default and 14 months at most, so the BigQuery export (free) is the archive. What a creative director reads: landing pages by sessions and engagement rate, key events by source, device split, country and city, the pages where engaged time collapses.

### 12.2 PostHog, heatmaps and session replay

PostHog bundles product analytics, session replay, feature flags, surveys and experiments, with autocapture of clicks and form submissions and a free tier of 1M product analytics events a month (October 2026). Heatmaps and replay: Hotjar, now sold under Contentsquare (free plan up to 200,000 monthly sessions with one month of data and replays on 5 percent of sessions capped at 10,000; Growth from $39 a month billed yearly); Microsoft Clarity (free, heatmaps, replays, rage-click and dead-click detection, input masking by default). What to look for on a luxury page: the scroll map's drop before the peak (section 11.7), rage clicks on images that are not links (the "nothing clickable" rule needs an affordance or the image needs to be a link), dead zones below the fold on phones, and the size filter that separates desktop behaviour from phone behaviour. Replay must mask inputs and sits behind the consent banner where one is required.

### 12.3 A/B testing and the sample size reality

Tools: VWO (Wingify, Delhi), Optimizely, PostHog experiments, GrowthBook (open source), feature flags on Vercel Edge Config, and Shopify apps for theme tests; Google Optimize was shut down in September 2023. The arithmetic decides whether a test is possible: detecting a 20 percent relative lift on a 2 percent baseline conversion (2.0 to 2.4 percent) at 95 percent confidence and 80 percent power needs on the order of 15,000 to 16,000 visitors per variant, so a microsite with 3,000 visits over its life cannot run a valid test and a store with 50,000 monthly sessions can run about one a month. Rules: one variable per test, full weekly cycles (two to four weeks), no peeking at interim results, and qualitative methods (five moderated sessions, replay, a survey) wherever the numbers are too small; the five-user rule and its limits in 08-ux-research-and-strategy.md, section 6.5, apply.

### 12.4 What a creative director reads weekly

Search Console (clicks, impressions, the Core Web Vitals report), the analytics landing page and device reports, five replays, PageSpeed Insights on the three key pages, uptime; monthly, the currency feeds in design-taste references/currency-2026.md, the Awwwards and siteInspire archives, and the engineering feeds that announce what the medium can now do: the WebKit blog, Chrome for Developers, web.dev, Smashing Magazine, Codrops, and the writers Bramus Van Damme (scroll-driven animations), Ahmad Shadeed (defensive CSS and RTL styling), Adam Argyle, Una Kravets, Jen Simmons and Josh Comeau.

## 13. Design engineering as of October 2026

### 13.1 The role

A design engineer sits between design and front-end engineering and owns the feel: motion, interaction, component polish, and prototypes in code that settle arguments a Figma frame cannot. Vercel and Linear made the title common between 2022 and 2024. For the house, the creative director briefs and critiques one; the design engineer's outputs are production components with motion, prototypes, and the QA in 13.6. The hiring signal is a portfolio of details: single interactions, transitions and components shown at full fidelity.

### 13.2 Figma to code

Dev Mode is Figma's inspect surface (measurements, tokens, annotations, a Dev seat). Code Connect maps components in a code repository to Figma components so Dev Mode shows the team's real code instead of generated snippets; it is on Professional, Organization, Government and Enterprise plans with a Full or Dev seat, the Professional plan allows one active library and one framework, the CLI uses template files that work with any framework, and both the UI and CLI connections feed the Figma MCP server, which gives AI tools access to the connected components. Variables export to tokens per 07-design-systems-and-tokens.md section 4. The order that works: tokens and components mapped first, then any generated code reads the real system.

### 13.3 AI tools and their guardrails

| Tool | Pricing, October 2026 | Right for | Guardrail |
|---|---|---|---|
| v0 (Vercel) | Free with 7 messages a day; Plus $30 per user a month; Business $100 | Layout exploration, React and shadcn components, a dashboard in an afternoon | Output carries the shadcn and Tailwind defaults; re-tokenise before it is a client page |
| Lovable | Free with 5 daily build credits capped at 30 a month and 20 cloud credits; Pro and Business add monthly credits on top of the same daily grant | Internal tools and MVPs with Supabase | Never a luxury marketing site; the generated look is a tell |
| Cursor | Free; Plus $8; Premium $30; Super $100; Ultra $200; Teams from $30 per user | The design engineer's editor with agents | Review every diff; tests and visual diffs in CI |
| Claude Code | Anthropic's coding agent; included in Claude Pro ($20 a month, or $17 a month billed yearly), Max (from $100 a month) and Team premium seats ($100 a seat a month billed yearly) per claude.com/pricing | The house static build, this corpus, refactors, QA scripts; see 22-ai-era-craft-and-generative-tools.md | Same review; no secrets in prompts |

Guardrails that apply to all of them: DESIGN.md and the token file in the system context so the output speaks the house language; the cheap-tells list from design-taste section 3 as a ban list; a human reviews every generated component against the state matrix in 06-ui-design-craft.md section 3; no generated code reaches checkout, payment or consent without review; licences checked on any generated asset; the performance budget enforced in CI; axe for accessibility and Playwright screenshots for visual regression. Generated output is a first draft at about 70 percent; the remaining 30 percent is the craft this file describes.

### 13.4 Component libraries

shadcn/ui is a set of components copied into the project rather than installed, with a CLI (v4 in March 2026), registries, an MCP server (August 2025), RTL support (January 2026), and Base UI as the default primitive layer since July 2026 with Radix still available through a unified package. Radix Primitives and Base UI are unstyled, accessible primitives; React Aria (Adobe) and Headless UI (Tailwind Labs) are the alternatives. Tailwind CSS v4 (January 2025) moved configuration into CSS with @theme, which makes tokens native. The house position: shadcn with Base UI and Tailwind for apps, dashboards and tools; hand-written CSS for marketing sites and microsites; and never the default shadcn styling on a luxury page, because it is the Inter-and-one-radius look listed among the cheap tells in design-taste section 3.

### 13.5 The craft references and what each teaches

| Person | Role, October 2026 | What to learn |
|---|---|---|
| Rauno Freiberg | Interaction designer, Vercel and Devouring Details (rauno.me) | Invisible details: pointer targets larger than the visual, optical alignment, interruptible motion, the principle list that ends "Make it" |
| Paco Coursey | Webmaster at Linear; previously the Vercel design system and site; cmdk, next-themes | Command menus as the interface, keyboard first, typographic restraint |
| Emil Kowalski | Design engineer, previously Linear and Vercel; Sonner, Vaul, animations.dev; on a break per his site | Ease-out for entrances, 200 to 300ms, springs for gestures, why bounce reads wrong, drawer physics |
| Jhey Tompkins | Brand Design Studio, Shopify; previously Google and Vercel | CSS-only craft, scroll-driven and anchor demos, CodePen as a sketchbook |
| Bruno Simon | Three.js Journey (116 hours across 87 lessons; $95 for the three.js course, $45 for WebGPU and TSL, $120 for both) | WebGL from scratch, GLSL shaders, React Three Fiber, the GPU budget |
| Mariana Castilho | Interaction designer who shares prototypes publicly; employer unknown as of October 2026 | Native-feeling gestures and state transitions on the web |
| Also | Josh Comeau, Cassie Evans, Yuri Artiukh, Manoela Ilic (Codrops) | Springs and CSS (Comeau), GSAP and SVG (Evans), shaders for agency sites (Artiukh), WebGL and layout tutorials (Ilic) |

### 13.6 The design engineer QA bar

60fps on a 2022 mid-range Android for every animation, verified in the DevTools Performance panel with no long task over 50ms during scroll; motion limited to transform, opacity and clip-path; reads batched before writes so layout is never thrashed; `prefers-reduced-motion` honoured; focus states designed and visible on every interactive element (11-accessibility-and-inclusive-design.md, section 5); a complete keyboard path; touch targets of 44 x 44 CSS px (Apple) and 48dp (density-independent pixels, Material), with WCAG 2.2's 24 x 24 minimum as the floor; hover only under `@media (hover: hover)`; every state in the matrix; text selectable and right-click intact; 200 percent zoom survives; RTL and dark mode mirrored; a second tap mid-animation never breaks state; no jank with Lenis on iOS; icons optically aligned; durations from the token table in 12-motion-principles-and-ui-motion.md section 4.4; visual regression in CI with Playwright's `toHaveScreenshot`, or Storybook with Chromatic or Percy, at 360, 768 and 1440 widths, light and dark.

## 14. Cross browser and device reality

### 14.1 Engines

Blink (Chrome, Edge, Samsung Internet, Brave, Opera, and Android WebView, the browser component Android apps embed), WebKit (Safari, and every browser on iOS, including Chrome and Firefox, under Apple's App Store rules; the EU has allowed alternative engines since iOS 17.4 in March 2024, but in India and the Gulf every iOS browser is WebKit), Gecko (Firefox). The house matrix: Safari on an iPhone, Chrome on a mid-range Android, Samsung Internet on the same, Safari on macOS, Chrome and Edge on Windows, Firefox on one of them.

### 14.2 Safari quirks

| Quirk | Behaviour | Fix |
|---|---|---|
| 100vh | Includes the space under the collapsing toolbar, so a 100vh hero leaves a strip | 100dvh or 100svh (section 2.9); Safari 26.0 also fixed lvh and vh inside SFSafariViewController |
| `backdrop-filter` | Historically needed the -webkit- prefix; still safe to include | Both prefixed and unprefixed declarations |
| Video autoplay | Only muted, `playsinline`, with the attribute in the HTML; Low Power Mode blocks it | Poster as the LCP image (section 4.5) |
| Date inputs | Native wheel picker, placeholder cannot be styled | Accept the native control with min and max, or build a calendar |
| Input zoom | Focusing an input under 16px font-size zooms the page | 16px minimum on inputs |
| Hover sticks | A tap leaves the hover state on | `@media (hover: hover)` around hover styles |
| Resize on scroll | The toolbar collapse fires resize events | `ignoreMobileResize` in ScrollTrigger; dvh |
| Overscroll bounce and rubber-banding | Fixed headers float during the bounce | `overscroll-behavior`; avoid fixed elements that depend on the bottom edge |
| Notch and home indicator | Content hides under them | `viewport-fit=cover` and padding from `env(safe-area-inset-*)` |
| Storage | Script-written storage is capped at 7 days of non-use under Intelligent Tracking Prevention (ITP, WebKit's anti-tracking system) | Never rely on `localStorage` for anything that must persist |
| iOS 26 tab bar | Safari on iOS 26 (September 2025) floats a compact Liquid Glass tab bar over the bottom of the page | Test every fixed bottom element, the house pill first, against it; pad with `env(safe-area-inset-bottom)`; check toolbar tinting on an iOS 26 device, because Apple's current rules for `theme-color` tinting are unknown to this file as of October 2026 |
| Formats | WebP since Safari 14, AVIF since 16, JPEG XL since 17, WebGPU since 26 | picture with fallbacks (section 4.2) |

### 14.3 iOS Chrome is WebKit

Chrome on an iPhone is Safari with a different toolbar, so it carries every Safari quirk plus its own viewport sizing; a bug that appears only in Chrome on iOS is almost always the toolbar height. Test both, because the India and Gulf iPhone audience is split between them.

### 14.4 Android fragmentation and the India test device

StatCounter's India mobile vendor share for September 2026: Vivo 21.25 percent, Oppo 15.06, Xiaomi 14.76, Samsung 12.38, Realme 8.87, Motorola 6.5. The test device for the house is therefore a 2023 or 2024 Android sold between about 12,000 and 18,000 rupees (a Redmi Note, a Vivo Y or a Galaxy M), 4 to 6GB of RAM, a MediaTek Dimensity or Snapdragon 6-series chip, a 60Hz or 90Hz screen, and the vendor's skin (MIUI or HyperOS, Funtouch, ColorOS, One UI) with its battery saver, which throttles animation frames. Chrome and Samsung Internet are the browsers. The Gulf audience skews to iPhone and Galaxy S and A series on fast 5G, which is why a page that passes in Dubai still fails in Jaipur.

In-app browsers. Campaign links arrive through Instagram bios, stories and ads, and Instagram, Facebook, LinkedIn and WhatsApp open them in their own in-app browser: a WebView (an app-embedded browser component, WKWebView on iOS and Android System WebView on Android) with injected scripts, a separate cookie jar and reduced chrome. Test every campaign link from an Instagram story, a bio and a WhatsApp message; keep checkout working inside the WebView; never rely on a login or cart cookie set in the system browser.

### 14.5 Network throttling

Lighthouse's mobile simulation (150ms round trip, 1.6Mbps down, 750kbps up, 4x CPU slowdown) is the baseline; DevTools adds Slow 4G and 3G presets and custom profiles; the house custom profile for Indian 4G is 10Mbps down with 100ms latency and the CPU at 4x. WebPageTest from its Mumbai node on a real device is the honest number. Test the first view and the repeat view, and test from a WhatsApp WebView.

### 14.6 Dark mode, reduced motion and print stylesheets

Dark mode: every page tested under `prefers-color-scheme: dark`, including forced dark on Android (Chrome's auto-dark setting and vendor force-dark in WebViews can invert a light site that declares no `color-scheme`; declare `color-scheme: light dark` or light explicitly). Forced colours: Windows High Contrast replaces every colour, so hairlines and ghost buttons need real borders (section 2.9). Reduced motion: the whole motion table in 6.7 collapses to opacity or nothing.

Print, for deal sheets and pitch pages: `@page { size: A4; margin: 15mm }` (Letter for a US client); under `@media print` hide navigation, video, loaders and motion; expand every `details` element; print the URL after key links with `a[href]::after { content: " (" attr(href) ")" }`; `break-inside: avoid` on cards and figures; `print-color-adjust: exact` on brand blocks that must keep their ground; body at 11 to 12pt; images at max-width 100 percent; a header with the mark and a footer with the page number and date. Test in Chrome and Safari print preview, and ship "Save as PDF" as the client's path.

### 14.7 Testing tools

BrowserStack and LambdaTest for real devices in the cloud; Playwright for scripted screenshots across engines in CI; DevTools device mode for layout only (it emulates size only; the rendering engine is still desktop Chrome); and the physical drawer: an iPhone from 2020 or later, the India Android from 14.4, an iPad, and a Windows laptop with Edge. The two-minute check per device: load from WhatsApp, scroll to the end, tap the call to action, rotate, go back.

## 15. Launch QA checklist and maintenance plan

### 15.1 The build review workflow

Every branch gets a preview deployment (Vercel and Netlify both create one per pull request), behind a password per section 11.6. Comments are pinned to the live build with a review tool (the Vercel Toolbar comments on Vercel previews; BugHerd or Marker.io elsewhere), and each comment carries the device, browser and version, viewport width, URL and a screenshot so it can be reproduced. Feedback arrives as one consolidated round per stage through one point of contact (24-business-of-creative-and-agency-operations.md, sections 3 and 8.3). Review order: first on the India test Android from a WhatsApp link, then iPhone Safari, then desktop, because that is the order of the audience. Content and code freeze 48 hours before launch, with only blocker fixes after it.

### 15.2 The launch checklist

Identity: favicon.ico at 32px and an SVG favicon (Safari accepts SVG favicons since 26.0), apple-touch-icon at 180px, manifest icons at 192 and 512, `theme-color`; a unique title and description per page; an Open Graph image per page at 1200 x 630 under 300KB; designed 404 and 500 pages with the navigation intact; the copyright year generated by the build.

Function: every form delivers to the right inbox and the notification lands (the FormSubmit activation clicked); the thanks page exists and is a goal; spam protection on; email capture writes to Klaviyo or the list; enquiries reach the CRM with source, UTM parameters and click IDs; the consent banner behaves on accept, reject and reload; analytics events fire for the goals; Meta Events Manager's Test events view and Google Tag Assistant show each lead or purchase event firing once, with consent respected (section 7.12); Search Console and Bing Webmaster Tools verified and the sitemap submitted; `robots.txt` allows production and the Cloudflare AI crawler setting matches the decision in section 9.5.

Performance: the budgets in section 5.2 met on the first view; LCP, INP and CLS green in the mobile lab run; fonts load with swap and a metric-matched fallback with zero shift; width and height on every image; posters on every video; no console errors; Brotli compression, HTTP/2 or HTTP/3, and immutable cache headers on fingerprinted assets.

Accessibility (method in 11-accessibility-and-inclusive-design.md, section 16, and its pre-launch list in section 18.2): an axe pass with zero serious issues; a complete keyboard path with visible focus; 4.5:1 contrast on text and 3:1 on UI; alt text; a correct heading order; lang on the `html` element; a skip link; reduced motion honoured; a pause control on every ambient video and captions on every film with speech (section 4.5); 200 percent zoom without horizontal scroll; no zoom blocking in the viewport meta; a screen reader pass on the main flow with VoiceOver on the iPhone; the accessibility statement page live (section 2.11).

Cross browser: Safari on the iPhone, Chrome on the India Android, Samsung Internet, Safari on macOS, Chrome, Edge, Firefox; dark mode; RTL where an Arabic edition exists; the WhatsApp WebView.

SEO: unique titles, canonicals, hreflang validated, structured data passing the Rich Results Test, noindex removed from production, 301s from every old URL, www and apex resolved to one host, HTTPS everywhere with HSTS, no mixed content.

Infrastructure: DNS TTL raised after the cutover, SSL auto-renewing, the domain and the registrar account in the client's name, MX and mail records untouched and tested by sending and receiving one email, monitoring live (section 15.3), backups where a CMS exists, repository access handed over, the third-party inventory complete (section 5.6); security headers set in `vercel.json` or `netlify.toml` (Content-Security-Policy with frame-ancestors against clickjacking, Strict-Transport-Security, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`) and checked at securityheaders.com, because a CMS or form with no CSP is the usual way a client site gets defaced.

Legal: a privacy policy covering DPDP, PDPL and GDPR as the audience requires; terms; a cookie policy if any cookie is set; shipping and returns on a store; on an Indian store, the seller and grievance officer details, country of origin and MRP declarations required by the E-Commerce and Legal Metrology rules, and no pattern on the CCPA's list of 13 (section 8.11); on a UAE store, the trader's identity, AED prices inclusive of VAT and the return terms; RERA or Trakheesi details on every property page (section 11.5); photographer, model and location usage rights confirmed for the term; typeface licences for web use at the correct pageview tier; trademark symbols as the client's legal team wants them.

Content: spelling in the client's chosen English, checked with a dictionary pass; the house copy rules (the build refuses an em dash, an exclamation mark or a banned word); no placeholder text; broken links checked with Screaming Frog or a link checker; phone numbers with +91 and +971 and a `wa.me` link; map pins verified; prices and dates current.

Sign-off: client approval recorded in writing; a launch window of Tuesday to Thursday morning local time, avoiding Friday afternoons and the eves of public holidays in either market (the UAE's weekend has been Saturday and Sunday since January 2022); a rollback plan (the previous deployment one click away on every host in 7.9).

### 15.3 The maintenance plan

Monitoring tools: Better Stack or UptimeRobot checking every 1 to 5 minutes from several regions, including Mumbai or Singapore and a Gulf location where the tool offers one, with alerts to the account lead; Sentry for JavaScript errors on any site with a CMS, a store or forms; Vercel Speed Insights on Vercel, otherwise a RUM (real-user monitoring) tool such as DebugBear or SpeedCurve for sites with enough traffic, read monthly against the budget in section 5.2.

| Cadence | Tasks |
|---|---|
| Daily | Uptime alerts read; forms spot-checked after any change |
| Weekly | Analytics and Search Console glance (section 12.4); CMS and plugin security updates where a CMS exists; Core Web Vitals field report |
| Monthly | Dependency updates with a visual regression run; Lighthouse on the three key pages against the budget; broken-link scan; content review with the client; domain and certificate expiry check; backup restore test |
| Quarterly | Browser release notes read (Safari, Chrome, Firefox) for breaking changes and new capabilities; accessibility re-test; SEO audit; archive the quarter's campaign assets into the case study |
| Yearly | Domain renewal; font and image licence audit; a currency review of the design against design-taste references/currency-2026.md; copy refresh; a decision to redesign, refresh or hold |

The retainer that pays for this is scoped in 24-business-of-creative-and-agency-operations.md section 3; a site with no maintenance plan is a site that will be slower, less secure and less current within a year, and the client will read that as the agency's taste having aged.

## Terms introduced

- 2x rule: capping served image density at 2 device pixels per CSS pixel, because 3x files cost 2.25 times the bytes for no visible gain in photographs.
- 301 and 302 redirects: permanent and temporary HTTP redirects; a QR vanity URL uses 302 so its destination can change after printing.
- A and AAAA records: DNS records mapping a name to an IPv4 and an IPv6 address.
- `accent-color`: the CSS property that brands checkboxes, radios and range inputs; not Baseline as of October 2026.
- Accessibility overlay: a third-party toolbar or AI script claiming to make a site accessible without changing its markup; the house refuses them.
- Accessibility statement: a page stating the standard targeted, conformance status, known exceptions, a contact route and the last audit date.
- Adaptive bitrate: streaming that offers several renditions and switches between them by measured bandwidth.
- AI crawlers: the user agents AI vendors use for training (GPTBot, ClaudeBot), search indexing (OAI-SearchBot, Claude-SearchBot, PerplexityBot) and user-initiated fetches (ChatGPT-User, Claude-User, Perplexity-User).
- AI Overviews and AI Mode: Google features that answer a query on the results page and link out through query fan-out.
- Anchor positioning: CSS that positions an element relative to another named element, with fallback positions.
- Art direction (images): serving a different crop per viewport through the `picture` element.
- `aspect-ratio`: the CSS property that reserves a box's proportion before its media loads.
- AVIF: an image format derived from the AV1 codec, 30 to 50 percent smaller than JPEG at matched quality.
- axe: Deque's open-source accessibility testing engine, used in browser extensions and CI.
- Back/forward cache (bfcache): the browser keeping the previous page in memory so Back restores it instantly with its state.
- Baseline: the web-features support vocabulary; newly available means all four engines, widely available means for 30 months.
- BIMI: Brand Indicators for Message Identification, which shows a verified brand mark beside the sender name in supporting inboxes.
- Booking engine: the hotel's direct reservation system (Sabre SynXis, Amadeus iHotelier, SiteMinder and others) that the site hands the guest to.
- Brotli: Google's general-purpose compression algorithm, used inside WOFF2 and for HTTP responses.
- Bulletproof button: an email button built from a table cell with padding and a background colour so it renders with images off.
- CAA record: a DNS record naming which certificate authorities may issue for a domain.
- Canonical link: the `link` element that names the preferred URL of a page among its variants.
- Cascade layers (`@layer`): named priority tiers in a stylesheet that beat specificity.
- Cascade: the algorithm that decides which competing CSS declaration wins, by origin, layer, specificity and order.
- CCAA: Canada's Companies' Creditors Arrangement Act, the creditor protection regime Ssense entered in 2025.
- CCPA (India): the Central Consumer Protection Authority, which issued the 2023 dark-pattern guidelines.
- CDN: a content delivery network that caches a site at edge nodes near the visitor.
- ch: a CSS unit equal to the width of the 0 glyph in the current font.
- Checkout Extensibility: Shopify's branding settings and checkout extensions, the only supported way to customise its checkout.
- `clamp()`: a CSS function returning a preferred value held between a floor and a ceiling.
- Clienteling: the luxury practice of a client advisor keeping a recorded, ongoing relationship with each client.
- CLS, Cumulative Layout Shift: the Core Web Vital that sums unexpected layout movement; good is 0.1 or less.
- CNAME: a DNS record pointing a name at another name.
- COD and RTO: cash on delivery, and return to origin, a COD order refused at the door and shipped back.
- Code Connect: Figma's bridge that maps a repository's components to Figma components for Dev Mode and the Figma MCP server.
- Code splitting: shipping only the JavaScript a view needs and lazy-loading the rest on interaction or intersection.
- Codecs (H.264, HEVC, AV1, VP9): video compression formats, from the universal H.264 to the 30 to 50 percent smaller AV1.
- Compositor-only properties: transform, opacity, clip-path and, with care, filter, which animate without layout or paint.
- Consent manager: under India's DPDP Act, a registered intermediary through which a person gives, manages and withdraws consent.
- Consent Mode v2: Google's mechanism that adjusts tag behaviour according to the user's consent choices, required for EEA traffic since March 2024.
- Container query (`@container`): CSS that styles an element by the size or style of its container instead of the viewport.
- `content-visibility: auto`: CSS that skips layout and paint of off-screen sections until they near the viewport.
- Conversions API (CAPI): Meta's server-to-server event feed, deduplicated against the browser pixel by a shared `event_id`.
- Core Web Vitals: Google's three field metrics, LCP, INP and CLS, measured at the 75th percentile.
- cqi: a container query unit, 1 percent of the container's inline size.
- CRF: constant rate factor, the x264 and x265 quality setting where lower numbers mean higher quality and larger files.
- CRM: the client's customer relationship management system, where enquiries and leads are routed.
- Cross-domain measurement: GA4 configuration that carries one session across the site and a third-party domain such as a booking engine.
- CrUX: the Chrome User Experience Report, the field dataset behind Core Web Vitals.
- CSP, Content-Security-Policy: the response header listing the origins a page may load scripts, styles and frames from.
- Custom properties: CSS variables, written `--name` and read with `var(--name)`.
- Customisable select: `appearance: base-select` with `::picker(select)`, which makes the native select fully stylable; not Baseline as of October 2026.
- D2C: direct-to-consumer, a brand selling on its own store.
- DASH: MPEG-DASH, the open segmented streaming format, played through Media Source Extensions.
- DDP and DAP: delivered duty paid and delivered at place; whether cross-border duties are prepaid or collected on delivery.
- Design engineer: the role between design and front-end engineering that owns motion, interaction and component polish in code.
- details and summary: the native HTML disclosure elements; the name attribute groups them into an exclusive accordion.
- `::details-content`: the pseudo-element selecting a disclosure's content box so opening can animate.
- Dev Mode: Figma's inspection surface for developers, sold as a seat.
- `dialog` element: the native HTML modal with focus trapping, an inert background and Escape to close.
- DKIM, SPF and DMARC: the three email authentication records (signature, permitted senders, and policy on failure).
- dotLottie: the zipped Lottie container that bundles assets and cuts file size.
- dp: density-independent pixels, Android's unit for touch targets and layout.
- DPDP Act: India's Digital Personal Data Protection Act, 2023, phased into force by the DPDP Rules, 2025.
- Draco and Meshopt: two geometry compression schemes for glTF models.
- dvh, svh, lvh: viewport height units that account for a mobile browser's collapsing toolbar (dynamic, small, large).
- EEA: the European Economic Area, the territory where Consent Mode v2 is required.
- EMI: equated monthly instalments, India's standard card and finance instalment plan.
- Enhanced conversions: Google Ads sending a hashed email or phone with a conversion so it can be matched to a signed-in user.
- Enhanced measurement: GA4's automatically collected events such as scroll, outbound click and video engagement.
- Error correction level: the share of a QR code that can be damaged and still scan; level H is 30 percent.
- Facade: a static button or poster standing in for a heavy embed, which loads the real widget only on tap.
- FCP, First Contentful Paint: the lab metric for the first text or image painted.
- fetchpriority: the HTML attribute that raises or lowers a resource's request priority.
- FID, First Input Delay: the interaction metric INP replaced on 12 March 2024.
- `field-sizing: content`: CSS that lets an input or textarea grow with its content.
- Flexbox: one-dimensional CSS layout along a row or column.
- font-display: the descriptor that decides what shows while a web font loads (swap, optional).
- font-optical-sizing: the property that lets a variable font choose its design for the rendered size.
- `font-size-adjust`: the property that normalises x-height across the fonts in a stack.
- font-synthesis: the property that allows or stops the browser faking bold and italic styles.
- `forced-colors`: the media query true under Windows High Contrast, where the OS replaces colours.
- GA4: Google Analytics 4, Google's event-based analytics product.
- Gaussian splatting: a capture technique that renders a real space as millions of soft, view-dependent points in real time.
- `gclid` and `fbclid`: the Google and Meta click identifiers added to a landing URL, captured to report offline conversions.
- GDPR: the EU's General Data Protection Regulation, 2018.
- GLSL: the OpenGL Shading Language, used to write WebGL shaders.
- glTF and GLB: the Khronos 3D transmission format and its single-file binary form.
- Google-Extended: the `robots.txt` token controlling Gemini training and grounding, with no effect on Search.
- Grid and subgrid: two-dimensional CSS layout, and a nested element adopting its parent's tracks.
- grid-lanes: the CSS display value for native masonry, in Safari 26.4 only as of October 2026.
- GROQ: Sanity's query language for its content lake.
- `hanging-punctuation`: the property that hangs opening quotes outside the text block; Safari only.
- `:has()`: the CSS parent selector.
- Headless CMS: an editing system that stores content and serves it by API to any front end.
- HLS: HTTP Live Streaming, Apple's segmented streaming format with an `.m3u8` playlist, native in Safari.
- Honeypot field: a hidden form input that people never fill and bots do, used to reject spam.
- hreflang: the annotation that tells Google which language and region each page serves.
- HSTS: HTTP Strict Transport Security, a header telling browsers to use only HTTPS for the domain.
- HUID: hallmark unique identification, the six-character code on BIS-hallmarked gold jewellery in India.
- Hybrid email method: fluid tables capped by max-width, with MSO conditional comments supplying fixed widths to Outlook.
- Hydration: a framework re-running its component tree in the browser to attach behaviour to server-rendered HTML.
- Hydrogen and Oxygen: Shopify's headless React storefront toolkit and its hosting.
- hyphens: the property enabling dictionary hyphenation, which needs a lang attribute.
- Image CDN: a service that serves resized, reformatted variants of a master image from URL parameters.
- Image sequence scrub: painting 100 to 150 frames to a canvas by scroll progress.
- INP, Interaction to Next Paint: the Core Web Vital for interaction latency; good is 200ms or less.
- Intelligent Tracking Prevention (ITP): WebKit's anti-tracking system, which caps script-written storage and cross-site tracking.
- Interop: the annual cross-browser programme in which Apple, Google, Microsoft, Mozilla and others agree focus areas to make work identically.
- interpolate-size and `calc-size()`: CSS that lets height animate to and from auto; Chrome only as of October 2026.
- `IntersectionObserver`: the browser API that reports when an element enters or leaves the viewport.
- Intrinsic web design: Jen Simmons's 2018 frame for layouts that respond to content and container.
- `:is()` and `:where()`: selector grouping functions with, respectively, the highest and zero specificity.
- Islands architecture: a static page where only the interactive components ship JavaScript.
- JPEG XL: a photography format with lossless JPEG recompression, in Safari since 2023 and Chrome 155 since October 2026, with Firefox 158 recorded; not Baseline.
- JSON-LD: the script-based format for structured data that Google prefers.
- Key events: GA4's name for conversions since March 2024.
- KTX2: the Khronos GPU texture container, used with Basis Universal supercompression.
- Lakh grouping: the Indian convention of grouping digits as 1,00,000.
- Lazy loading: deferring an off-screen image or iframe request with `loading="lazy"`.
- LCP image: the largest image or text block in the first viewport, which decides LCP.
- LCP, Largest Contentful Paint: the Core Web Vital for load; good is 2.5 seconds or less.
- Lenis and lerp: the smooth scroll library, and the linear interpolation factor that gives scroll its weight.
- Light dismiss: closing a popover by clicking outside it or pressing Escape.
- Lighthouse: Chrome's lab audit tool, which scores a simulated mobile load on FCP, Speed Index, LCP, Total Blocking Time and CLS.
- Liquid: Shopify's templating language of output tags, logic tags and filters.
- `llms.txt`: a proposed Markdown index of a site for language models; harmless and unproven.
- Logical properties: flow-relative CSS properties (inline-start, block-end) that mirror automatically in right-to-left text.
- Long task: any main-thread task over 50ms, which blocks interaction and feeds INP.
- Lottie: Airbnb's format and player for After Effects vector animation exported as JSON.
- Mail Privacy Protection: Apple's feature, since 2021, that pre-loads email images through a proxy and so registers opens.
- Metafields and metaobjects: Shopify's custom fields on resources, and standalone structured records.
- Metric-matched fallback: an `@font-face` rule that adjusts a system font's widths and vertical metrics to match the web font so the swap moves nothing.
- MJML: a markup language that compiles to table-based email HTML.
- Mobile first: writing the narrow layout as the default CSS and adding complexity as width grows.
- MRP: maximum retail price, inclusive of all taxes, which Indian law requires on packaged goods listings.
- MSO conditional comments: HTML comments that only Microsoft Office's email renderer reads, used to feed Outlook fixed layouts.
- MX record: the DNS record that routes a domain's email.
- Nesting (CSS): writing a component's states inside its own rule.
- noindex: the meta robots or HTTP header value that keeps a page out of the search index.
- Offline conversions: lead and sale stages sent back from the CRM to the ad platforms so bidding optimises towards buyers.
- One peak rule: a page earns one motion moment beyond CSS; everything else holds still.
- Open Graph: the meta tag protocol that draws link previews in messaging and social apps.
- OTP: one-time password, the SMS code Indian checkout layers use for one-tap login.
- Outline algorithm: the HTML5 rule that would have re-levelled headings inside sections; never implemented and removed in 2022.
- Partytown: a library that moves third-party tag scripts into a web worker, off the main thread.
- PDP: the product detail page.
- PDPL: Saudi Arabia's Personal Data Protection Law, enforced since September 2024.
- PLP: the product listing page, a collection or category grid.
- popover attribute: a native top-layer popover with light dismiss.
- `prefers-color-scheme` and `prefers-reduced-motion`: media queries for the user's colour scheme and motion preferences.
- Preheader: the preview text an inbox list shows after an email's subject line.
- Preload: a `link rel="preload"` hint that fetches a critical resource early.
- Price on request: a PDP that replaces Add to bag with enquiry, appointment, reservation or WhatsApp actions.
- Progressive enhancement: building the HTML to work alone, then layering CSS and JavaScript.
- Query fan-out: an AI search feature issuing several sub-queries and surfacing a wider set of links.
- Quiet zone: the blank margin around a QR code, four modules wide.
- React Server Components: components rendered on the server that send no JavaScript to the browser.
- RERA: India's state Real Estate Regulatory Authorities, whose registration number must appear on every project advertisement.
- Rive: a design tool and runtime for stateful, input-driven vector animation.
- `robots.txt`: the file that tells crawlers what they may fetch.
- RUM: real-user monitoring, field performance data collected from visitors' browsers.
- `@scope`: CSS that limits rules to a subtree with an optional lower boundary.
- Scroll markers and buttons: `::scroll-marker` and `::scroll-button()`, CSS-generated carousel dots and arrows; Chrome only as of October 2026.
- Scroll-driven animations: CSS animations whose progress is bound to scroll or an element's passage through the viewport.
- scroll-snap: CSS that settles scroll on section or item boundaries.
- ScrollTrigger: the GSAP plugin that binds a timeline to a scroll range with scrub, pin and snap.
- Section Rendering API: Shopify's endpoint for re-rendering a section without a page reload.
- Sections, blocks and theme blocks: Shopify's reusable page modules, the modules inside them, and blocks defined once for use across sections.
- Semantic HTML: using the element that names the content, so structure exists before CSS.
- Server-side tagging: a tag container on a first-party subdomain that receives events and forwards them to each vendor.
- Shop Pay: Shopify's saved-details express checkout.
- Shopify Markets: Shopify's per-market currencies, languages, domains or subfolders and duties within one store.
- Sitemap: an XML list of a site's URLs, up to 50,000 per file.
- `size-adjust`: the `@font-face` descriptor that scales a fallback font's glyph widths.
- sizes and `srcset`: the attributes that list candidate image files and tell the browser the rendered width per breakpoint.
- SOTD: Awwwards' Site of the Day, scored by at least 18 jurors.
- Speculation Rules: a JSON script block that tells Chromium browsers which pages to prefetch or prerender.
- Speed Index: the lab metric integrating visual completeness over time from a filmstrip.
- SplitText: the GSAP plugin that splits text into lines, words or characters for reveals.
- SRI, Subresource Integrity: an `integrity` attribute holding a file's hash so the browser refuses a changed third-party script.
- SSR, server-side rendering: producing a page's HTML on the server before the browser hydrates it.
- `@starting-style`: CSS that sets an element's first style so it can transition in from `display: none`.
- Structured data: machine-readable facts about a page in the schema.org vocabulary.
- Subsetting and `unicode-range`: shipping only the glyphs a page needs, per script.
- Sustainable Web Design model: the method that estimates grams of CO2 per page view from transferred bytes.
- SVGO: an open-source optimiser that strips editor metadata from SVG files.
- System font stack: a font-family list that renders each platform's own UI face at zero bytes.
- Tabby and Tamara: Gulf instalment payment providers licensed by the Central Bank of the UAE.
- `text-box-trim`: CSS that trims leading above the cap height and below the baseline.
- `text-wrap: balance` and pretty: line-breaking modes that equalise short blocks and improve paragraph rags.
- Tokenisation (cards): storing a network token in place of a card number, mandated by the RBI since October 2022.
- Top layer: the browser layer above every z-index where dialogs and popovers render.
- Total Blocking Time: the lab metric summing main-thread time beyond 50ms per task between FCP and interactivity.
- Trakheesi: the Dubai Land Department's advertising permit system, whose permit number must appear on every property listing.
- TTL: the seconds a DNS record may be cached.
- UPI: Unified Payments Interface, India's real-time bank-to-bank payment rail run by NPCI.
- USDZ: Apple's zipped Universal Scene Description format, used for AR Quick Look on iOS.
- `:user-invalid`: the selector matching an invalid field only after the person has interacted with it.
- UTM parameters: the utm_ query parameters that tag a link's campaign, source and medium.
- Utopia: the fluid type and space method of James Gilyead and Trys Mudford, built on `clamp()`.
- Variable font: one file carrying an axis range such as weight or optical size.
- View Transitions: the API that animates between two DOM states or two pages.
- Viewport meta tag: the `meta` element setting the mobile layout width; it must never block zoom.
- VMC and CMC: the Verified Mark Certificate (for a trademarked logo) and Common Mark Certificate that BIMI requires.
- VML: Vector Markup Language, Microsoft's legacy vector format that Outlook for Windows still reads.
- WCAG: the W3C's Web Content Accessibility Guidelines; the house targets version 2.2 at level AA.
- Web Animations API: JavaScript control of CSS-equivalent animations with play, pause and reverse.
- web-features: the web-platform-dx dataset behind Baseline status on MDN and webstatus.dev.
- WebGL and WebGPU: the browser's GPU rendering APIs, the second with compute shaders and a modern pipeline; WebGPU is not Baseline as of October 2026.
- WebP: Google's image format, 25 to 34 percent smaller than JPEG, universal since Safari 14.
- WebView: a browser component embedded in an app, such as Instagram's or WhatsApp's in-app browser.
- WebVTT: the web's timed-text format for captions and subtitles, loaded through a `track` element.
- WOFF2: the compressed web font container, the only format worth shipping.
- x-default: the hreflang value naming the fallback page for unmatched languages.

## Sources and further reading

Books

- Ethan Marcotte, Responsive Web Design, A Book Apart, 2011 (second edition 2014).
- Luke Wroblewski, Mobile First, A Book Apart, 2011.
- Jeremy Keith, Resilient Web Design, 2016. https://resilientwebdesign.com/
- Rachel Andrew, The New CSS Layout, A Book Apart, 2017.
- Heydon Pickering and Andy Bell, Every Layout, 2019. https://every-layout.dev/
- Addy Osmani, Image Optimization, Smashing Magazine, 2021.
- Robert Bringhurst, The Elements of Typographic Style, Hartley and Marks, 1992 (fourth edition 2012).

Specifications, standards and platform documentation

- Web Vitals, web.dev, updated 31 October 2024. https://web.dev/articles/vitals
- Chrome for Developers, "JPEG XL in Chrome", 6 October 2026. https://developer.chrome.com/blog/jpeg-xl-in-chrome
- web.dev, "Interop 2026: Continuing to improve the web for developers", 12 February 2026. https://web.dev/blog/interop-2026
- Lighthouse performance scoring, Chrome for Developers. https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- Baseline, web-platform-dx and MDN. https://web.dev/baseline
- web-features dataset, web-platform-dx, read October 2026 (feature status files for WebGPU, JPEG XL, anchor positioning, text-box, content-visibility, accent-color, customisable select, speculation rules and the others in section 2.9). https://github.com/web-platform-dx/web-features
- Chromium release schedule (Chrome 155 stable on 6 October 2026). https://chromiumdash.appspot.com/schedule
- MDN Web Docs: "Speculation Rules API", "Subresource Integrity", "Customizable select elements", "content-visibility", "interpolate-size", ":user-invalid". https://developer.mozilla.org/
- web.dev, "Back/forward cache". https://web.dev/articles/bfcache
- WebKit in Safari 26.0, 15 September 2025. https://webkit.org/blog/17333/webkit-in-safari-26-0/
- W3C CSS modules: Scroll-driven Animations Level 1 (https://www.w3.org/TR/scroll-animations-1/); View Transitions Level 1 and 2 (https://www.w3.org/TR/css-view-transitions-1/); Anchor Positioning Level 1 (https://www.w3.org/TR/css-anchor-position-1/); Containment Level 3, container queries (https://www.w3.org/TR/css-contain-3/).
- HTML Living Standard, WHATWG (dialog, popover, details). https://html.spec.whatwg.org/
- WCAG 2.2, W3C Recommendation, 5 October 2023. https://www.w3.org/TR/WCAG22/
- Overlay Fact Sheet, 2021. https://overlayfactsheet.com/
- Awwwards, evaluation criteria and rules. https://www.awwwards.com/about-evaluation/
- Awwwards, Sites of the Year. https://www.awwwards.com/websites/sites_of_the_year/
- Utopia fluid type and space calculators. https://utopia.fyi/
- HTTP Archive, Web Almanac 2025 (page weight chapter). https://almanac.httparchive.org/en/2025/
- Alex Russell, "The Performance Inequality Gap, 2026", 24 November 2025. https://infrequently.org/2025/11/performance-inequality-gap-2026/
- Google Search Central, "AI features and your website", updated 10 December 2025. https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, Product structured data. https://developers.google.com/search/docs/appearance/structured-data/product
- Google Search Central, localised versions of pages (hreflang). https://developers.google.com/search/docs/specialty/international/localized-versions
- Google Search Central, managing multi-regional and multilingual sites, updated 10 December 2025. https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- OpenAI, crawlers and user agents. https://developers.openai.com/api/docs/bots
- Anthropic, "Does Anthropic crawl data from the web, and how can site owners block the crawler?". https://support.claude.com/en/articles/8896518
- Cloudflare blog, "Content Independence Day: no AI crawl without compensation!", 1 July 2025. https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/
- Cloudflare, global network city list. https://www.cloudflare.com/network/
- Vercel, global network and regions, updated 11 August 2026. https://vercel.com/docs/regions
- Google, Email sender guidelines (bulk sender requirements). https://support.google.com/a/answer/81126
- Google Workspace Admin Help, set up BIMI. https://knowledge.workspace.google.com/admin/security/set-up-bimi
- Microsoft Tech Community, "Strengthening Email Ecosystem: Outlook's New Requirements for High-Volume Senders", April 2025. https://techcommunity.microsoft.com/
- RFC 8058, Signaling One-Click Functionality for List Email Headers, IETF, 2017. https://www.rfc-editor.org/rfc/rfc8058
- Meta for Developers, sharing images for webmasters (og:image sizes). https://developers.facebook.com/docs/sharing/webmasters/images/
- The Open Graph protocol. https://ogp.me/
- schema.org (Product, Hotel, LodgingBusiness, Restaurant, Store, JewelryStore, RealEstateListing, Event, Article, VideoObject). https://schema.org/
- Meta for Developers, Conversions API. https://developers.facebook.com/docs/marketing-api/conversions-api
- Google Ads Help, about enhanced conversions. https://support.google.com/google-ads/answer/9888656
- Google Analytics Help, set up cross-domain measurement. https://support.google.com/analytics/answer/10071811
- Shopify.dev, theme architecture (https://shopify.dev/docs/storefronts/themes/architecture) and Hydrogen, version 2026-10 (https://shopify.dev/docs/storefronts/headless/hydrogen).
- Shopify Help Center, Shopify Payments supported countries. https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries
- Shopify Theme Store, Horizon (version 4.3.0, 9 October 2026). https://themes.shopify.com/themes/horizon/styles/horizon
- Consumer Protection (E-Commerce) Rules, 2020, Department of Consumer Affairs, India. https://consumeraffairs.nic.in/
- Central Consumer Protection Authority, Guidelines for Prevention and Regulation of Dark Patterns, 30 November 2023. https://consumeraffairs.nic.in/
- Bureau of Indian Standards, hallmarking of gold jewellery and HUID. https://www.bis.gov.in/
- NPCI, UPI product statistics. https://www.npci.org.in/what-we-do/upi/product-statistics
- The Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023), India Code (https://www.indiacode.nic.in/), and the DPDP Rules, 2025, MeitY Data Protection Framework (https://www.meity.gov.in/data-protection-framework).
- UAE Government portal, data protection laws (Federal Decree-Law No. 45 of 2021). https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws
- Hosting limits: Vercel, updated 16 September 2026 (https://vercel.com/docs/limits) and Image Optimization (https://vercel.com/docs/image-optimization/limits-and-pricing); Cloudflare Pages (https://developers.cloudflare.com/pages/platform/limits/); GitHub Pages (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
- Vendor pricing pages, read October 2026: Framer (https://www.framer.com/pricing/), Webflow (https://webflow.com/pricing), Netlify (https://www.netlify.com/pricing/), Sanity (https://www.sanity.io/pricing), Storyblok (https://www.storyblok.com/pricing), Plausible (https://plausible.io/#pricing), PostHog (https://posthog.com/docs/product-analytics/pricing), Contentsquare for Hotjar (https://contentsquare.com/pricing/), Formspree (https://formspree.io/plans), Klaviyo (https://www.klaviyo.com/pricing), Razorpay (https://razorpay.com/pricing/), Cursor (https://cursor.com/pricing), v0 (https://v0.app/pricing), Lovable (https://lovable.dev/pricing), Claude (https://claude.com/pricing), Cloudinary (https://cloudinary.com/pricing), imgix (https://www.imgix.com/pricing), Mux (https://www.mux.com/pricing), Cloudflare Stream (https://www.cloudflare.com/developer-platform/products/cloudflare-stream/), Bunny Stream (https://bunny.net/pricing/stream/).
- Vercel, Password Protection, updated 15 September 2026. https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection
- Netlify, Forms usage and billing. https://docs.netlify.com/manage/forms/usage-and-billing/
- Webflow developer documentation, Webflow Cloud. https://developers.webflow.com/webflow-cloud/intro
- Payload, "Payload is joining Figma!", 17 June 2025. https://payloadcms.com/posts/blog/payload-is-joining-figma
- motion.dev documentation, animate(). https://motion.dev/docs/animate
- Webflow, "Webflow makes GSAP 100% free". https://webflow.com/blog/gsap-becomes-free
- GSAP documentation (ScrollTrigger, SplitText). https://gsap.com/docs/v3/
- Lenis, darkroom.engineering. https://github.com/darkroomengineering/lenis
- three.js releases. https://github.com/mrdoob/three.js/releases
- model-viewer. https://modelviewer.dev/
- Next.js blog (16, 16.2, 16.3, 16.4). https://nextjs.org/blog
- Astro blog (7.0, 7.4). https://astro.build/blog/
- WordPress release archive. https://wordpress.org/news/category/releases/
- shadcn/ui changelog. https://ui.shadcn.com/docs/changelog
- Figma Help Center, Code Connect. https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect
- Litmus, email client market share, September 2026. https://www.litmus.com/email-client-market-share
- Can I Email. https://www.caniemail.com/
- MJML. https://mjml.io/
- Baymard Institute, cart abandonment rate statistics, updated 22 September 2025. https://baymard.com/lists/cart-abandonment-rate
- StatCounter, mobile vendor market share India. https://gs.statcounter.com/vendor-market-share/mobile/india
- StatCounter, mobile operating system market share, India (https://gs.statcounter.com/os-market-share/mobile/india) and United Arab Emirates (https://gs.statcounter.com/os-market-share/mobile/united-arab-emirates).
- Landgericht München I, judgment of 20 January 2022, case 3 O 17493/20 (Google Fonts and GDPR).
- Sustainable Web Design, estimating digital emissions. https://sustainablewebdesign.org/
- W3C Sustainable Web Design Community Group, Web Sustainability Guidelines. https://www.w3.org/community/sustyweb/

Articles, talks and courses

- John Allsopp, "A Dao of Web Design", A List Apart, 2000. https://alistapart.com/article/dao/
- Ethan Marcotte, "Responsive Web Design", A List Apart, 25 May 2010. https://alistapart.com/article/responsive-web-design/
- Jen Simmons, "Everything You Know About Web Design Just Changed", An Event Apart, 2018 (talk).
- Deloitte Digital, "Milliseconds Make Millions", 2020. https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html
- Pew Research Center, "Google users are less likely to click on links when an AI summary appears in the results", 22 July 2025. https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- Sara Paul, "Scrolljacking 101", Nielsen Norman Group, 6 August 2023. https://www.nngroup.com/articles/scrolljacking-101/
- Sansec, "Polyfill supply chain attack hits 100K+ sites", 25 June 2024. https://sansec.io/research/polyfill-supply-chain-attack
- Bernhard Kerbl, Georgios Kopanas, Thomas Leimkühler and George Drettakis, "3D Gaussian Splatting for Real-Time Radiance Field Rendering", ACM Transactions on Graphics (SIGGRAPH), 2023. https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
- Spark, a three.js Gaussian splat renderer from World Labs. https://sparkjs.dev/
- PlayCanvas SuperSplat. https://superspl.at/
- Paul Irish, lite-youtube-embed. https://github.com/paulirish/lite-youtube-embed
- Barba.js (https://barba.js.org/) and Swup (https://swup.js.org/), page-transition libraries.
- Awwwards, Site of the Day archive. https://www.awwwards.com/websites/
- Rauno Freiberg, "Invisible Details of Interaction Design" and the Craft notes. https://rauno.me/craft
- Emil Kowalski, animations.dev (course) and emilkowal.ski. https://animations.dev/
- Paco Coursey, writing and cmdk. https://paco.me/
- Jhey Tompkins, demos and writing. https://jhey.dev/
- Bruno Simon, Three.js Journey (course). https://threejs-journey.com/
- Bramus Van Damme, scroll-driven animations demos and tutorial. https://scroll-driven-animations.style/
- Ahmad Shadeed, "RTL Styling 101". https://rtlstyling.com/
- Josh Comeau, "A Friendly Introduction to Spring Physics". https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/
- Codrops (Manoela Ilic), tutorials and demos. https://tympanus.net/codrops/
- Locomotive, agency site. https://www.locomotive.ca/en
