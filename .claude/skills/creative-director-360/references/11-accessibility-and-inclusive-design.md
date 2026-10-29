# Accessibility and inclusive design

The standards, the techniques and the reasons, so that premium work is also usable by everyone: what to build, what to test, what the law asks in India, the Gulf, Europe and the US, as of October 2026.

## Contents

1. [Why accessibility belongs in luxury work](#1-why-accessibility-belongs-in-luxury-work)
2. [WCAG 2.2 in depth](#2-wcag-22-in-depth)
3. [WCAG 3 and APCA](#3-wcag-3-and-apca)
4. [Semantic HTML and ARIA](#4-semantic-html-and-aria)
5. [Keyboard and focus](#5-keyboard-and-focus)
6. [Screen readers and assistive technology](#6-screen-readers-and-assistive-technology)
7. [Motion, flashing and vestibular safety](#7-motion-flashing-and-vestibular-safety)
8. [Vision and low vision](#8-vision-and-low-vision)
9. [Cognitive and learning disabilities](#9-cognitive-and-learning-disabilities)
10. [Hearing: captions, transcripts, sign language and audio description](#10-hearing-captions-transcripts-sign-language-and-audio-description)
11. [Motor and dexterity](#11-motor-and-dexterity)
12. [Mobile accessibility](#12-mobile-accessibility)
13. [Documents and media](#13-documents-and-media)
14. [Law, standards and procurement](#14-law-standards-and-procurement)
15. [Inclusive design](#15-inclusive-design)
16. [Testing, tooling and audits](#16-testing-tooling-and-audits)
17. [Accessibility in the agency process](#17-accessibility-in-the-agency-process)
18. [Reference tables and pre-launch checklist](#18-reference-tables-and-pre-launch-checklist)

Then [Terms introduced](#terms-introduced) and [Sources and further reading](#sources-and-further-reading).

Division of labour with sibling files, so nothing is said twice: contrast maths and the WCAG and APCA formulas live in 04-colour.md, section 6; colour vision deficiency and safe palettes in 04-colour.md, section 13; reduced-motion values and code in 12-motion-principles-and-ui-motion.md, section 11; focus tokens, ARIA in the headless layer and CI in 07-design-systems-and-tokens.md, section 12; alt text craft, link text and plain language in 10-ux-writing-and-content-design.md, section 8; caption styling in the edit in 16-editing-colour-grading-and-delivery.md, section 11; platform caption and accessibility numbers in 26-platform-and-format-specs-2026.md, section 8. Taste (what reads expensive) lives in design-taste; this file is the floor that taste stands on.

## 1. Why accessibility belongs in luxury work

### 1.1 The size of the audience

| Figure | Value | Source |
|---|---|---|
| People with significant disability worldwide | About 1.3 billion, 16 percent, one in six | WHO, Global report on health equity for persons with disabilities, 2 December 2022 |
| People with a near or distance vision impairment | At least 2.2 billion | WHO, World report on vision, 2019 |
| People with some degree of hearing loss | Over 1.5 billion; about 430 million with disabling hearing loss | WHO hearing fact sheet |
| US adults aged 40 and over with evidence of vestibular dysfunction | 35.4 percent | Agrawal et al., Archives of Internal Medicine, 2009 (NHANES 2001 to 2004 data) |
| Men with red-green colour vision deficiency | About 8 percent of men of European descent | See 04-colour.md, section 13.1 |
| India, persons with disabilities counted | 26.8 million, 2.21 percent | Census of India 2011 |
| India, people aged 60 and over | 149 million (10.5 percent) in 2022, projected 347 million (20.8 percent) by 2050 | UNFPA India Ageing Report 2023 |
| US working-age computer users likely to benefit from accessible technology | 57 percent | Forrester Research for Microsoft, 2003 |
| Home pages with detected WCAG 2 failures | 95.9 percent; 56.1 errors per page on average | WebAIM Million, February 2026 analysis |

The gap between India's 2.21 percent and WHO's 16 percent is definitional: the census counted eight categories under a medical definition, while the Rights of Persons with Disabilities Act 2016 recognises 21 specified disabilities and WHO uses a functional definition. Plan for the WHO number.

Situational impairment is a temporary limit imposed by context: one hand holding a child or a rail in a Mumbai local, noon sun on a phone at a Dubai beach club, a noisy sangeet, a second language, a 3G signal in Goa in the monsoon. Every guest is situationally impaired some of the time, which is why accessible work tests better with everyone.

### 1.2 The ethical case

The social model of disability, a term coined by Mike Oliver in 1983, holds that disability is produced by the mismatch between a person and a designed environment; the impairment is the person's, the barrier is the designer's. Kat Holmes builds Microsoft's inclusive design practice on the same idea ("mismatch", section 15.1). The UN Convention on the Rights of Persons with Disabilities (CRPD, adopted 2006) makes access to information and communications technology a right in Article 9; India ratified it in 2007, Saudi Arabia in 2008 and the UAE in 2010. The working consequence for a creative director: an inaccessible booking flow is a door with a step in front of it, and the agency built the step.

### 1.3 The legal case

Summary here, detail in section 14. In US federal courts plaintiffs filed 3,117 website accessibility lawsuits in 2025, up 27 percent from 2,452 in 2024, with New York (1,021) and Florida (961) leading (Seyfarth Shaw, ADA Title III blog, 25 March 2026). The European Accessibility Act has applied since 28 June 2025 to e-commerce and banking services sold to EU consumers, including by Indian and Gulf brands that ship to Europe. India's Supreme Court held in Rajive Raturi v Union of India (8 November 2024) that accessibility standards must be mandatory, and in Amar Jain v Union of India (30 April 2025) that digital access is part of the right to life under Article 21.

### 1.4 The business case

Reach: one in six people, plus the much larger group with age-related decline, plus everyone situationally impaired. Spend: the Return on Disability Group's widely cited estimate puts the disposable income of people with disabilities and their friends and family at about 13 trillion US dollars a year. Abandonment: the UK Click-Away Pound survey (2019) found 69 percent of disabled online shoppers leave a site they find hard to use, an estimated 17.1 billion pounds of lost UK spend. Overlap with search and performance: alt text, headings, transcripts and captions are indexable text; semantic HTML is lighter and faster (21-web-design-and-digital-craft.md, sections 5 and 9). Quality: the defects that accessibility audits find (low contrast, unlabelled controls, broken focus) are the same defects that make a site feel cheap.

### 1.5 Why luxury cannot treat it as optional

1. The audience is older. Luxury real estate, jewellery, hospitality and private banking buyers skew 40 to 70; presbyopia (age-related loss of near focus) is near universal from the mid-forties, contrast sensitivity falls with age, and vestibular sensitivity rises. The grey 11 px tracked caption on a photograph is unreadable to the client's best customer.
2. Hospitality is a service promise. The Taj, Aman or Oberoi guest who cannot complete a booking on the phone is a guest turned away at the door, and the brand's concierge standard does not stop at the screen.
3. Taste and access point the same way. The cheap tells in design-taste, section 3 (auto-advancing sliders, fade-up on every section, parallax on everything, tiny cramped type) are also accessibility failures. Restraint is accessible.
4. Reputation. Luxury houses have made disability visible: Gucci Beauty cast Ellie Goldstein, a model with Down syndrome, in 2020; British Vogue's May 2023 "Reframing Fashion" issue, made with Sinéad Burke, put 19 disabled people on its covers. A brand that casts inclusively and ships an inaccessible site is caught in its own contradiction.
5. Exposure follows the customer. A Jaipur jeweller with a Paris client base is inside the EAA; a Dubai developer marketing to New York buyers is a target for Title III demand letters.

## 2. WCAG 2.2 in depth

### 2.1 Structure, versions and conformance

The Web Content Accessibility Guidelines (WCAG) are the W3C standard for accessible web content. WCAG 2.2 was published as a W3C Recommendation on 5 October 2023 and updated on 12 December 2024; the October 2023 text is also the international standard ISO/IEC 40500:2025, and the December 2024 text is expected to become ISO/IEC 40500:2026 by late 2026 (W3C WAI, read October 2026). WCAG 2.0 (11 December 2008) and 2.1 (5 June 2018, last updated 6 May 2025) remain valid standards; each later version adds criteria and content that meets 2.2 also meets 2.1 and 2.0.

- POUR: the four principles. Perceivable (information can be sensed), Operable (controls can be used), Understandable (content and behaviour can be understood), Robust (content works with current and future assistive technology).
- 13 guidelines sit under the principles; under them sit testable success criteria (SC), each with a level.
- Levels: A (the minimum; without it some users are blocked outright), AA (the level every law and procurement rule cites), AAA (the enhanced level; W3C does not recommend requiring AAA for whole sites because some criteria cannot be met by all content).
- Count in 2.2: 86 success criteria, 31 at A, 24 at AA, 31 at AAA. Conforming at AA means meeting all 55 A and AA criteria. 4.1.1 Parsing is marked obsolete and removed in 2.2.
- Conformance applies to full pages and complete processes: a checkout is only conformant if every step is.
- Normative and informative: the success criteria are normative (binding); the Understanding documents (intent, examples) and Techniques (sufficient techniques, advisory techniques and documented failures) are informative but are what auditors use to decide pass or fail.

The house standard: WCAG 2.2 AA on everything shipped, plus the AAA criteria the house adopts as defaults (2.3.3 Animation from Interactions, 2.4.9 Link Purpose (Link Only), 2.4.13 Focus Appearance, 2.5.5 Target Size (Enhanced) on touch, 3.1.5 Reading Level on consent and payment copy), plus the APCA targets in section 3.4.

### 2.2 Perceivable

| SC | Level | Requirement and number | Technique | Luxury failure seen in audits |
|---|---|---|---|---|
| 1.1.1 Non-text content | A | Every non-text element has a text alternative serving the same purpose; decorative images are hidden from assistive technology | `alt` text by image kind (10-ux-writing-and-content-design.md, section 8.1); `alt=""` for decoration; accessible names on icon buttons and SVG (`<title>` or `aria-label` on the control) | The hero image carrying the offer, with `alt="hero"`; icon-only cart, search and wishlist buttons with no name |
| 1.2.1 to 1.2.5 Time-based media | A, AA | Transcripts for audio-only; captions for prerecorded (A) and live (AA) video; audio description or a media alternative (A), audio description (AA) | Section 10 | Brand film on the home page with music only and no description of what is shown |
| 1.3.1 Info and relationships | A | Structure conveyed visually is also in the code: headings, lists, tables, labels, groups | Real `<h1>` to `<h6>`, `<ul>`, `<table>` with `<th scope>`, `<label for>`, `<fieldset>` with `<legend>` for radio groups | Headings faked with styled `<div>`; a size selector built from `<span>`s |
| 1.3.2 Meaningful sequence | A | Reading order in the code matches the meaning | DOM order follows visual order; avoid CSS `order` and grid placement that reorder content | Price read before product name because the grid was rearranged in CSS |
| 1.3.3 Sensory characteristics | A | Instructions do not rely only on shape, size, position or sound | Name the thing as well as its place: "Select a size below" with labelled sizes | "Click the gold icon" |
| 1.3.4 Orientation | AA | Content is not locked to portrait or landscape unless essential | No `orientation` lock in the web manifest or app unless essential (a cheque-deposit camera view) | Microsites that show "rotate your phone" in landscape; tablets mounted landscape on wheelchairs |
| 1.3.5 Identify input purpose | AA | Fields collecting user data declare their purpose programmatically | `autocomplete` tokens from WCAG section 7: `name`, `given-name`, `email`, `tel`, `street-address`, `postal-code`, `cc-number`, `bday` | Booking forms with `autocomplete="off"` everywhere, forcing typing |
| 1.4.1 Use of colour | A | Colour is never the only carrier of meaning | A second channel (icon, text, underline, pattern); 04-colour.md, section 13.2 | Links in body copy distinguished only by a brand colour; sold-out sizes shown only in grey |
| 1.4.2 Audio control | A | Audio that plays automatically for more than 3 seconds can be paused, stopped or its volume controlled independently | Never autoplay sound; if unavoidable, a visible pause first in focus order | Hotel sites with ambient music on load |
| 1.4.3 Contrast (minimum) | AA | Text at least 4.5:1; large text at least 3:1. Large is at least 18 pt (24 CSS px) regular or 14 pt (about 18.66 CSS px) bold | Token pairs tested at build (07-design-systems-and-tokens.md, section 12.1); formula in 04-colour.md, section 6.1 | Grey copy on cream, white copy on photography with no scrim, flame on white for small text (section 3.4) |
| 1.4.4 Resize text | AA | Text resizes to 200 percent without loss of content or function | `rem` units, no fixed-height text boxes, no `maximum-scale=1` in the viewport meta | Navigation that overlaps itself at 200 percent |
| 1.4.5 Images of text | AA | Real text is used instead of images of text, except logotypes and essential cases | Live web fonts; SVG text for display type | Campaign headlines and menus exported as JPG; whole emails as one image |
| 1.4.10 Reflow | AA | No two-dimensional scrolling at 320 CSS px wide (1280 px at 400 percent zoom); 256 CSS px high for horizontally scrolling content; data tables, maps and diagrams excepted | Responsive layout, `min-width: 0` on flex children, `overflow-wrap: anywhere` on long strings | Fixed-width hero type that runs off screen at zoom |
| 1.4.11 Non-text contrast | AA | 3:1 against adjacent colours for component boundaries, states and meaningful graphics | Input borders, focus rings, icon strokes, chart series at 3:1 | Hairline 1 px #E5E5E5 input borders on white (about 1.26:1), the signature "minimal" form |
| 1.4.12 Text spacing | AA | No loss when the user sets line height 1.5 times font size, paragraph spacing 2 times, letter spacing 0.12 em, word spacing 0.16 em | No fixed heights on text containers; test with a text-spacing bookmarklet | Buttons that clip their label when spacing is overridden |
| 1.4.13 Content on hover or focus | AA | Extra content shown on hover or focus is dismissible (Esc, without moving pointer or focus), hoverable (the pointer can move onto it) and persistent (stays until dismissed or no longer relevant) | Tooltips and mega-menus built to the APG tooltip and disclosure patterns (section 4.9) | Mega-menus that close when the pointer crosses a 2 px gap |

### 2.3 Operable

| SC | Level | Requirement and number | Technique | Luxury failure seen in audits |
|---|---|---|---|---|
| 2.1.1 Keyboard | A | All functionality works from a keyboard, except where the path of movement itself matters (freehand drawing) | Native `<button>`, `<a href>`, form controls; APG keyboard contracts for custom widgets | Image galleries, 3D product viewers and WebGL scenes that only respond to the mouse |
| 2.1.2 No keyboard trap | A | Focus can always leave a component with standard keys, or the user is told how | Test every embed (maps, video, chat widgets, cookie banners) | Third-party chat widgets and embedded maps that swallow Tab |
| 2.1.4 Character key shortcuts | A | Single-key shortcuts can be turned off, remapped, or work only on focus | Modifier keys for shortcuts; section 5.7 | Single-letter gallery shortcuts that fire while a screen reader user navigates by heading with H |
| 2.2.1 Timing adjustable | A | Each time limit can be turned off, adjusted to at least 10 times the default, or extended with a warning and at least 20 seconds to respond, at least 10 times; real-time events, essential limits and limits over 20 hours excepted | Visible countdown, "Extend" button, saved state | Rate holds and event ticket queues that expire silently |
| 2.2.2 Pause, stop, hide | A | Anything moving, blinking or scrolling automatically for more than 5 seconds alongside other content can be paused, stopped or hidden; auto-updating content likewise | A visible pause control on hero video and carousels; no infinite marquees | Auto-advancing hero sliders, logo marquees, looping background films with no control |
| 2.3.1 Three flashes or below threshold | A | Nothing flashes more than three times in any one second, unless below the general and red flash thresholds | Section 7.3; Harding or PEAT analysis on every film | Strobing launch films and LED-wall loops reused on the site |
| 2.3.3 Animation from interactions | AAA (house default) | Motion triggered by interaction can be disabled unless essential | Honour `prefers-reduced-motion`; a site-level motion toggle on scroll narratives | Parallax and scroll-driven zooms with no way out |
| 2.4.1 Bypass blocks | A | A way to skip repeated blocks | Skip link to `<main>`; landmarks; headings | 40 navigation links before the content on every page |
| 2.4.2 Page titled | A | Each page has a descriptive title | `<title>` "Product name, category, Brand"; update on client-side routing | Every page titled with the brand name only |
| 2.4.3 Focus order | A | Focus order preserves meaning and operability | DOM order; no positive `tabindex`; modals move focus in and back | Focus lands behind an open modal or at the page footer after closing it |
| 2.4.4 Link purpose (in context) | A | Each link's purpose is clear from its text or its context | Descriptive link text (10-ux-writing-and-content-design.md, section 8.2); house target 2.4.9 (AAA), link text alone | Six "Discover" links on one page |
| 2.4.6 Headings and labels | AA | Headings and labels describe topic or purpose | One `h1`, levels never skipped; labels that name the field | Poetic headings that say nothing ("A moment"); fields labelled only by placeholder |
| 2.4.7 Focus visible | AA | The keyboard focus indicator is visible | `:focus-visible` ring from tokens (section 5.6) | `outline: none` with no replacement, the most common luxury-site failure after contrast |
| 2.4.11 Focus not obscured (minimum) | AA, new in 2.2 | A focused component is not entirely hidden by author-created content | `scroll-padding-top` equal to sticky header height; cookie banners that do not cover focus | Sticky headers and chat bubbles that hide the focused field |
| 2.4.12 Focus not obscured (enhanced) | AAA, new in 2.2 | No part of the focused component is hidden | As above, with full clearance | Partially covered fields under a sticky "Book now" bar |
| 2.4.13 Focus appearance | AAA, new in 2.2 (house default) | The indicator's area is at least as large as a 2 CSS px thick perimeter of the unfocused component, with at least 3:1 contrast between the same pixels in focused and unfocused states | 2 px outline with 2 px offset, or a two-colour ring on photography (section 5.6) | A 1 px light-grey ring that vanishes on images |
| 2.5.1 Pointer gestures | A | Multipoint or path-based gestures have a single-pointer alternative | Zoom buttons beside pinch; arrow buttons beside swipe | Pinch-only product zoom; swipe-only lookbooks |
| 2.5.2 Pointer cancellation | A | Single-pointer actions do not complete on the down event, or can be aborted or undone | Activate on `click` (up event); allow sliding off to cancel | Custom buttons firing on `pointerdown` |
| 2.5.3 Label in name | A | The accessible name contains the visible label text, ideally at the start | Visible "Book a table" with name "Book a table" (an `aria-label` of "Reserve" breaks voice control) | Icon plus text buttons with a different `aria-label` |
| 2.5.4 Motion actuation | A | Functions triggered by device motion also work through the interface and motion response can be turned off | A button beside any shake or tilt gesture | "Shake to reveal" campaign mechanics |
| 2.5.5 Target size (enhanced) | AAA (house default on touch) | Targets at least 44 by 44 CSS px, with exceptions for equivalent targets, inline links, user-agent controls and essential cases | 44 px minimum, 48 on primary actions | Hairline icon buttons at 20 px |
| 2.5.7 Dragging movements | AA, new in 2.2 | Anything done by dragging can be done with a single pointer without dragging, unless dragging is essential | Price-range sliders with tap points and inputs; reorder with buttons; map pan buttons | Drag-only price filters, before-and-after sliders, seating-plan pickers |
| 2.5.8 Target size (minimum) | AA, new in 2.2 | Targets at least 24 by 24 CSS px, or spaced so a 24 px circle centred on each does not intersect another target or circle; equivalent, inline, user-agent and essential exceptions | Hit area padding; never a cluster of 16 px icons | Social icons and carousel dots at 8 to 12 px |

### 2.4 Understandable

| SC | Level | Requirement | Technique | Luxury failure seen in audits |
|---|---|---|---|---|
| 3.1.1 Language of page | A | The default human language is programmatically set | `<html lang="en-IN">`, `lang="ar-AE"`, `lang="hi"` | `lang="en"` on an Arabic page, so the screen reader reads Arabic with English rules; 13.5 percent of home pages miss `lang` entirely (WebAIM Million 2026) |
| 3.1.2 Language of parts | AA | Passages in another language are marked | `<span lang="hi">` on a Hindi line; `lang="fr"` on a French house name where pronunciation matters | Devanagari taglines read as silence or gibberish |
| 3.2.1 On focus | A | Receiving focus does not change context | No auto-submit, no auto-open on focus | Dropdowns that navigate on focus |
| 3.2.2 On input | A | Changing a setting does not change context unless the user is warned | A "Go" or "Apply" button; announce live updates | Country selector that reloads the page on arrow-key movement |
| 3.2.3 and 3.2.4 Consistent navigation and identification | AA | Repeated navigation in the same order; same function, same name | Shared components from the system | "Bag", "Cart" and "Basket" on one site |
| 3.2.6 Consistent help | A, new in 2.2 | Where help (human contact details, a contact mechanism, self-help, an automated contact) is repeated across pages, it appears in the same relative order | Concierge, WhatsApp and phone in one fixed place in header or footer | Concierge number on the home page only |
| 3.3.1 Error identification | A | Input errors are detected, the field identified and the error described in text | Inline message linked with `aria-describedby`; summary at the top for long forms | Red border only (fails 1.4.1 too) |
| 3.3.2 Labels or instructions | A | Labels or instructions where input is required | Visible persistent labels; format hints ("DD MM YYYY") | Placeholder-as-label forms that lose the label on typing |
| 3.3.3 Error suggestion | AA | Where a correction is known, it is suggested | "Enter a 6-digit PIN code" in place of "Invalid" | "Error" with no remedy |
| 3.3.4 Error prevention (legal, financial, data) | AA | Submissions with legal or financial effect are reversible, checked, or confirmed | Review step before payment; cancellation window | One-tap deposit on a villa or a jewellery reservation |
| 3.3.7 Redundant entry | A, new in 2.2 | Information already entered in the same process is auto-populated or selectable, except where essential, for security, or no longer valid | "Billing same as delivery"; carry guest names across steps | Re-typing guest details for each room in a multi-room booking |
| 3.3.8 Accessible authentication (minimum) | AA, new in 2.2 | No cognitive function test (remembering, transcribing, solving a puzzle) at login unless there is an alternative, a mechanism to help (password managers, paste), or the test is recognising objects or the user's own content | Allow paste and autofill; passkeys; magic links; `autocomplete="one-time-code"` for SMS OTP | Paste blocked on password fields; distorted-text CAPTCHA; OTP split into six boxes that block paste |
| 3.3.9 Accessible authentication (enhanced) | AAA, new in 2.2 | As 3.3.8 without the object recognition and personal content exceptions | Passkeys | Image-grid CAPTCHAs |

### 2.5 Robust

| SC | Level | Requirement | Technique | Failure |
|---|---|---|---|---|
| 4.1.2 Name, role, value | A | Every component exposes its name, role, states and values to assistive technology, and changes are notified | Native elements; ARIA per APG for custom widgets (section 4) | `<div onclick>` buttons; custom toggles with no `aria-checked`; accordions with no `aria-expanded` |
| 4.1.3 Status messages | AA | Status messages are announced without moving focus | `role="status"` for "Added to bag", `role="alert"` for errors, `aria-live` regions present in the DOM before the update | Silent "Added to bag" toasts; search result counts never announced |

### 2.6 What 2.2 added and why each matters to premium work

2.4.11 and 2.4.12 Focus not obscured: sticky headers, floating "Book now" bars and cookie banners became standard on hospitality sites; they hide the focused element from keyboard and magnifier users. 2.4.13 Focus appearance: makes "visible" measurable (area and contrast), ending the 1 px grey ring. 2.5.7 Dragging movements: drag-only sliders, carousels and configurators exclude tremor, switch and voice users. 2.5.8 Target size (minimum): 24 px is a floor that delicate icon rows routinely break. 3.2.6 Consistent help: people who need help should find it where it was last time. 3.3.7 Redundant entry and 3.3.8 Accessible authentication: the cognitive accessibility criteria, aimed at memory and transcription load; they also cut checkout abandonment for everyone. 4.1.1 Parsing removed: browsers and assistive technology now repair malformed HTML consistently, so duplicate IDs matter only when they break 1.3.1 or 4.1.2 (an `aria-labelledby` pointing at a duplicated ID still fails).

## 3. WCAG 3 and APCA

### 3.1 Status as of October 2026

The W3C Accessibility Guidelines 3.0 (WCAG 3, formerly code-named Silver) exist only as a Working Draft. The current draft is dated 10 September 2026 and says that although it "has moved closer toward completion, it still has several years of work", and that "the final set of requirements in WCAG 3 will be different from what is in this draft". Nothing in law cites it. WCAG 2.2 AA remains the standard to contract against.

### 3.2 What changes in the model

| Aspect | WCAG 2.x | WCAG 3 draft, 10 September 2026 |
|---|---|---|
| Unit of writing | Success criteria, pass or fail | Guidelines written as outcomes ("Users have equivalent alternatives for images"), each supported by testable requirements written as "applies when" and "except when", plus technology-specific methods |
| What must be met | All A and AA criteria for AA | All core requirements for conformance; supplemental requirements and assertions count for higher reporting tiers |
| Assertions | None | Statements of organisational process (a style guide exists, usability testing with disabled people took place) reported separately; whether any become required is undecided |
| Levels | A, AA, AAA on criteria | Levelling moved from conformance to reporting: six cumulative reporting tiers, 1 Avoid physical harm, 2 Foundational access, 3 Conformance, 4 Bronze, 5 Silver, 6 Gold |
| Scoring | None | Progress between tiers may be reported as counts or percentages; an alternative proposal with scoring and Bronze, Silver and Gold awards is still under discussion |
| Scope | Pages and complete processes | Views (what is available in a viewport, including scrolled or zoomed content; a modal is a new view), processes and task flows; within a stated scope everything testable must be included |
| Contrast | 4.5:1 and 3:1 luminance ratio | "The contrast algorithm used in WCAG 3 is yet to be determined"; text contrast requirements carry the placeholder "@@[contrast measure to be determined]" and assume a size and weight factor |

History, so older articles are read correctly: the first public working draft (21 January 2021) scored outcomes on a 0 to 4 scale, counted critical errors and used Bronze, Silver and Gold as conformance levels, and its contrast method was APCA. Those mechanisms have since been restructured; articles that describe WCAG 3 as "Bronze, Silver, Gold with APCA" are describing the 2021 draft.

What a creative director should take now: the direction of travel is outcome-based, task-flow testing (can a person book the suite), broader cognitive coverage, and credit for process (testing with disabled people). Building to that now costs nothing extra and protects work from the next standard.

### 3.3 The APCA contrast model

The Accessible Perceptual Contrast Algorithm (APCA), by Andrew Somers of Myndex Research, reports lightness contrast Lc on a signed scale (about 106 for black on white, about -108 for white on black); polarity is part of the result, and the required Lc depends on font size and weight. The formula and its constants are in 04-colour.md, section 6.2; the use thresholds and size table (APCA in a Nutshell, read 28 October 2026) are in 26-platform-and-format-specs-2026.md, section 8.2. The lookup, condensed:

| Lc | Use | Reference size and weight that qualifies (Helvetica or Arial metrics) |
|---|---|---|
| 90 | Preferred for body text; suggested ceiling for very large bold text and large colour areas | Body 18 px at 300 or 14 px at 400 |
| 75 | Minimum for columns of body text | 24 px at 300, 18 px at 400, 16 px at 500, 14 px at 700 |
| 60 | Minimum for content text that is not body (labels, captions) | 48 px at 200, 36 at 300, 24 at 400, 21 at 500, 18 at 600, 16 at 700 |
| 45 | Headlines and large heavy text; fine pictograms | 36 px at 400 or 24 px bold |
| 30 | Absolute minimum for any text (placeholder, disabled); large solid non-text | Non-text at least 5.5 px in the smallest dimension |
| 15 | Non-semantic elements (dividers) | Non-text at least 5 px |

The positions. Somers and the APCA documentation argue that the WCAG 2 ratio mispredicts readability in the midtones and in dark mode, and ignores size, weight and polarity (the flaws listed in 04-colour.md, section 6.1). The counter-position, held by many auditors and by the WCAG working group's decision to leave the algorithm open, is that WCAG 2's ratio is simple, stable, legally referenced and machine-testable, while APCA is self-described beta software (apca-w3 0.1.9, algorithm 0.0.98G-4g) whose thresholds have moved between versions. The house follows both: WCAG 2 for compliance, APCA for perception.

### 3.4 The house rule, worked on the house palette

Pass WCAG 2.2 AA by ratio and reach the APCA targets in 04-colour.md, section 6.4 (Lc 75 body, 60 secondary, 45 display, 15 dividers); where they disagree the stricter one wins for text. Values computed for this file with the WCAG 2.2 formula and the APCA 0.0.98G constants (the implementation reproduces the published Lc 106.0 and -107.9 reference values):

| Pair | WCAG 2 ratio | APCA Lc | Verdict and use |
|---|---|---|---|
| Ink #0A0A0A on white #FFFFFF | 19.80:1 | 105.8 | Body at any size and weight, including Space Grotesk 300 |
| White on ink #0A0A0A | 19.80:1 | -107.7 | Display and short text; for long reading on dark, soften the text to about #EDEDED (16.91:1, Lc -96.0) to cut halation |
| Flame #F53901 on white | 3.84:1 | 64.1 | Fails 4.5:1 for small text. Allowed as text at 24 px regular or 18.66 px bold and above (WCAG large text, Lc 60 met at 24 px 400); allowed as focus ring, icon and border (3:1 non-text) |
| White on flame #F53901 | 3.84:1 | -69.6 | Button labels only at 18.66 px bold or above; below that, use the action alias |
| Ink on flame #F53901 | 5.16:1 | 39.8 | The disagreement case: WCAG prefers ink, APCA prefers white by a wide margin. House: white label at large-text size, or ink only for 36 px and larger display |
| White on action alias #C72E00 | 5.50:1 | -81.2 | Small button labels and text links on white (#C72E00 on white is 5.50:1, Lc 75.8); the alias is a token for small sizes and #F53901 stays the one brand colour (07-design-systems-and-tokens.md, section 12.1) |
| Grey #767676 on white | 4.54:1 | 71.6 | Passes WCAG by 0.04; below Lc 75, so captions only; body text takes #6B6B6B or darker |
| Grey #6B6B6B on white | 5.33:1 | 76.5 | The lightest grey the house allows for body-size secondary text |
| Grey #949494 on white | 3.03:1 | 57.1 | The lightest grey for input borders and icons (3:1 non-text); never for text below 24 px |
| Grey #E5E5E5 on white | 1.26:1 | 12.9 | Decorative hairline only; never an input border or the only boundary of a control |
| Grey #8A8A8A on #0A0A0A | 5.73:1 | -39.5 | The dark-mode trap: passes WCAG, fails APCA for any content text |
| Grey #BDBDBD on #0A0A0A | 10.54:1 | -66.7 | Minimum for secondary text on the client-deck ground (design-taste, section 7: decks on #0A0A0A) |

Space Grotesk at 300 for body (design-taste, section 7) is the house's riskiest typographic choice for access: APCA asks Lc 90 for 18 px at weight 300 and Lc 75 only from 24 px. The consequence is a rule: weight-300 body text is set in ink at Lc 90 or above, and any grey secondary text steps up to weight 400.

## 4. Semantic HTML and ARIA

### 4.1 The accessibility tree

Browsers build an accessibility tree from the DOM: for each meaningful node a role (button, link, heading), an accessible name ("Add to bag"), states and properties (expanded, checked, disabled) and a value. Assistive technology reads this tree through platform accessibility APIs: UI Automation and MSAA/IAccessible2 on Windows, the NSAccessibility and UIAccessibility APIs on macOS and iOS, AT-SPI on Linux, and the AccessibilityNodeInfo layer on Android. The visual design is invisible to this tree. What is not in the tree does not exist for a screen reader user; what is in the tree wrongly is worse than absent.

### 4.2 The first rule of ARIA

WAI-ARIA (Accessible Rich Internet Applications; version 1.2 became a W3C Recommendation in June 2023) is a vocabulary of attributes that add roles, states and properties to the accessibility tree; it changes nothing about behaviour. The W3C note Using ARIA sets five rules:

1. If a native HTML element or attribute has the semantics and behaviour you need, use it instead of re-purposing an element and adding ARIA.
2. Do not change native semantics unless you really have to (no `<h2 role="tab">`; wrap instead).
3. All interactive ARIA controls must be usable with the keyboard.
4. Do not use `role="presentation"` or `aria-hidden="true"` on a focusable element.
5. All interactive elements must have an accessible name.

The APG states the corollary: no ARIA is better than bad ARIA. The evidence: WebAIM's 2026 analysis found home pages with ARIA averaged 59.1 detected errors against 42 on pages without (a correlation, since ARIA-heavy pages are more complex), ARIA attribute counts up 27 percent in a year to over 133 per page, and 22 percent of pages using `role="menu"` introducing barriers through missing required markup or keyboard behaviour.

### 4.3 Roles, states and properties

Roles say what a thing is. Categories: landmark roles (`banner`, `navigation`, `main`, `complementary`, `contentinfo`, `search`, `form`, `region`), widget roles (`button`, `checkbox`, `switch`, `slider`, `tab`, `combobox`, `option`, `menuitem`, `dialog`), document structure roles (`heading`, `list`, `table`, `img`, `group`), live region roles (`status`, `alert`, `log`, `timer`) and abstract roles that are never used in markup. States change with interaction: `aria-expanded`, `aria-pressed`, `aria-checked`, `aria-selected`, `aria-current` (the current page in a nav, the current step in a booking flow), `aria-disabled`, `aria-invalid`, `aria-busy`. Properties are mostly stable: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-controls`, `aria-haspopup`, `aria-required`, `aria-live`, `aria-modal`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`.

### 4.4 Landmarks

| HTML element | Implicit role | Rule |
|---|---|---|
| `<header>` (top level) | banner | One per page |
| `<nav>` | navigation | Name each when there are several (`aria-label="Primary"`, `"Footer"`) |
| `<main>` | main | Exactly one; the skip link target |
| `<aside>` | complementary | Related content that stands alone |
| `<footer>` (top level) | contentinfo | One per page |
| `<section>` with an accessible name | region | Unnamed sections are not landmarks; name only the ones worth jumping to |
| `<search>` | search | The HTML element added in 2023; wrap the site search form |
| `<form>` with an accessible name | form | Booking and enquiry forms |

All page content sits inside a landmark, because screen reader users jump between them (D in NVDA, the rotor in VoiceOver) and orphan content is skipped.

### 4.5 Headings hierarchy

71.6 percent of screen reader users most often find information on a long page by navigating its headings (WebAIM Screen Reader User Survey 10, December 2023 to January 2024, 1,539 respondents). Headings are therefore the table of contents of every page: one `h1` matching the page purpose, `h2` for sections, no skipped levels, level chosen by structure and size chosen in CSS (10-ux-writing-and-content-design.md, section 8.3). Luxury editorial layouts that set a section label in 11 px caps and the poetic line under it in 64 px must mark the meaningful one as the heading, or combine them in one heading element.

### 4.6 Naming: aria-label, aria-labelledby, aria-describedby

The accessible name is the text assistive technology announces for an element. The Accessible Name and Description Computation specification sets precedence: `aria-labelledby` first, then `aria-label`, then native labelling (`<label>`, `alt`, `<caption>`, `<legend>`, the element's text content for buttons and links), then `title` and `placeholder` as a last resort.

| Attribute | What it does | Use when | Avoid when |
|---|---|---|---|
| `aria-labelledby` | Name from the text of one or more elements by ID | A visible heading names a dialog or region; combining a product name and "Add to bag" | The referenced text is hidden or duplicated |
| `aria-label` | Name from an attribute string | Icon-only buttons ("Search", "Close") | Any element with a visible label (breaks 2.5.3); non-interactive `<div>` and `<span>` with no role, where it is ignored; multilingual sites, because browser page translation has historically skipped attribute text, leaving English names on a Hindi or Arabic page |
| `aria-describedby` | Description, read after name and role | Hints, format instructions, error messages linked to a field | Long content; descriptions are often read once and some users turn them off |

Rule of thumb: visible text first, `aria-labelledby` to reuse it, `aria-label` only where there is no visible text.

### 4.7 Live regions

A live region is an element whose changes the screen reader announces without moving focus (4.1.3). `aria-live="polite"` waits for the user to pause; `"assertive"` interrupts. Roles carry defaults: `status` (polite, for "Added to bag", "12 suites available", "Saved"), `alert` (assertive, for errors and expiring sessions), `log` (chat), `timer`. `aria-atomic="true"` makes the screen reader read the whole region on every change. The region must exist in the DOM before content changes; injecting a region and its message together is usually silent. Assertive announcements are rationed, because each one interrupts whatever the user was hearing.

### 4.8 Hiding content

| Technique | Visible | In accessibility tree | Focusable | Use |
|---|---|---|---|---|
| `display: none`, `hidden` attribute | No | No | No | Closed panels, inactive views |
| `aria-hidden="true"` | Yes | No | Still focusable (a defect if it contains focusable items) | Decorative icons next to text, duplicated content |
| Visually hidden class | No | Yes | Yes | Extra context for links ("Discover the Maharaja Suite"), skip links until focused, table captions |
| `inert` attribute | Yes | No | No | Everything behind a modal; off-screen carousel slides; the page under a slide-out menu |
| `role="presentation"` or `role="none"` | Yes | Element role removed, content kept | n/a | Layout tables in email |

The visually hidden pattern, kept in the house base stylesheet:

```css
.visually-hidden:not(:focus):not(:active) {
  position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0;
  overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0;
}
```

`inert` (supported in all major engines since 2023) is preferable to hand-built focus traps for backgrounds, and `<dialog>` opened with `showModal()` makes the rest of the page inert automatically.

### 4.9 ARIA Authoring Practices Guide patterns and their keyboard contracts

The APG (W3C ARIA Authoring Practices Guide) documents each widget's roles and its keyboard contract, the set of keys users expect because every operating system has trained them. Use the native element in the first column whenever it fits.

| Pattern | Native first | Keyboard contract | Key ARIA |
|---|---|---|---|
| Dialog (modal) | `<dialog>` with `showModal()` | Focus moves into the dialog on open; Tab and Shift+Tab cycle inside it; Esc closes; focus returns to the trigger | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` to the title |
| Disclosure (show and hide) | `<details>` and `<summary>` | Enter or Space toggles | `aria-expanded` on the button, `aria-controls` |
| Accordion | Stacked disclosures; `<details name="group">` gives exclusive opening | Enter or Space toggles; optionally Up and Down move between headers, Home and End to first and last | Header button inside a heading element; `aria-expanded` |
| Tabs | None | Tab enters the tab list at the selected tab; Left and Right move between tabs (with automatic or manual activation); Home and End; Tab moves into the panel | `tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls` |
| Menu and menubar | None; most site navigation is a list of links with disclosure buttons | Down or Up opens and moves; Left and Right in a menubar; Esc closes; Enter activates; type-ahead | `menu`, `menubar`, `menuitem`, `aria-haspopup`, `aria-expanded` |
| Combobox (autocomplete, searchable select) | `<input list>` with `<datalist>` for simple cases; `<select>` | Down opens the list; Up and Down move the active option; Enter selects; Esc closes; typing filters; focus stays in the input | `combobox`, `aria-expanded`, `aria-controls`, `aria-activedescendant` to the active `option` |
| Listbox | `<select>` (single or `multiple`) | Up and Down move; Home and End; type-ahead; Space toggles in multi-select | `listbox`, `option`, `aria-selected` |
| Tooltip | None; prefer visible text | Appears on focus and hover; Esc dismisses (1.4.13); never holds interactive content | `role="tooltip"`, trigger `aria-describedby` |
| Slider | `<input type="range">` | Right and Up increase, Left and Down decrease; Page Up and Page Down by larger steps; Home and End to min and max | `slider`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-valuetext` ("2 guests") |
| Switch | `<input type="checkbox" role="switch">` or `<button role="switch">` | Space toggles (Enter on a button) | `aria-checked` |
| Tree | None | Up and Down move; Right expands or moves to child; Left collapses or moves to parent; Home and End | `tree`, `treeitem`, `aria-expanded`, `group` |
| Grid | `<table>` for static data | Arrow keys move cell to cell; Home and End within row; Ctrl+Home and Ctrl+End to first and last cell; a single Tab stop | `grid`, `row`, `gridcell`; roving `tabindex` |
| Carousel | None | Rotation stops on focus or hover; a visible pause control first in order; previous and next as buttons; slides as a group | `aria-roledescription="carousel"` and `"slide"`, `aria-live="off"` while rotating, `"polite"` when stopped |
| Popover (non-modal) | `popover` attribute with `popovertarget` | Esc closes; light dismiss on outside click | Native popover exposes `aria-expanded` on the invoker |

Booking calendars, date pickers and seat maps are composites of these (a grid inside a dialog); test them first because they are where hospitality sites fail most.

### 4.10 Common ARIA mistakes

- `role="menu"` on site navigation: it switches screen readers into application mode and expects arrow keys the code never supports; navigation is a list of links.
- `aria-label` on a `<div>` or `<span>` with no role: ignored by most screen readers.
- `aria-hidden="true"` on a container that holds a focusable link or button: the user tabs onto something that announces nothing.
- Positive `tabindex` (1, 2, 3): rewrites focus order for the whole page; the average home page carries 30.4 `tabindex` values (WebAIM Million 2026), most of them unnecessary.
- `<div role="button">` without `tabindex="0"`, Enter and Space handlers: role promised, behaviour missing.
- Redundant roles (`<button role="button">`, `<nav role="navigation">`): noise, and occasionally harmful on older engines.
- Missing state updates: `aria-expanded` set once and never toggled.
- `aria-live` on a large region that updates often: a screen reader reading the whole product grid on every filter change.
- Placeholder or `title` as the only label.
- Empty links and buttons: 46.3 and 30.6 percent of home pages respectively (WebAIM Million 2026), usually icon-only controls with no name.

## 5. Keyboard and focus

Keyboard access is the foundation every other input sits on: switch devices, voice control, sip-and-puff and many alternative pointers emit keyboard events, so a site that works with Tab, Enter, Space, Esc and the arrows works with most assistive technology.

### 5.1 Tab order

Focus follows DOM order. `tabindex="0"` adds a non-native element to that order; `tabindex="-1"` makes an element focusable by script only (headings that receive focus after navigation, dialog containers); positive values are banned. Visual reordering breaks it: CSS `order`, `flex-direction: row-reverse`, grid `grid-area` placement and absolute positioning move boxes without moving focus, so focus jumps around the screen (fails 2.4.3 and 1.3.2). CSS `reading-flow`, shipped in Chrome 137 in 2025, lets flex and grid containers follow visual order; support in other engines was not verified for this file, so the house still writes the DOM in reading order. Only interactive things take focus. Making paragraphs or images focusable "for screen readers" adds dead stops; screen readers read non-focusable content in their own reading mode. Off-screen content leaves the order: closed menus and drawers use `hidden` or `inert`; carousel slides out of view are `inert`.

### 5.2 Focus management on route change

Single-page applications (Next.js, Nuxt, SvelteKit, Astro with view transitions) swap content without a page load, so screen readers announce nothing and focus stays on the clicked link, which may no longer exist. On every route change:

Update `document.title` (2.4.2). Move focus to the new page's `h1` (with `tabindex="-1"`) or to a wrapper at the top of `<main>`, so the next Tab starts from the new content. Or announce the new page title in a polite live region, where moving focus is wrong (filter changes that update a list in place). Restore scroll and focus position on Back.

Next.js's App Router includes a route announcer; verify it fires, then add the focus move, because the announcer alone leaves keyboard users at the old position.

### 5.3 Modals and focus traps

A focus trap keeps Tab and Shift+Tab cycling inside a component, correct for modal dialogs only. The modal contract: on open, focus moves to the first meaningful element (the title for content dialogs, the first field for forms, the least destructive button for confirmations); the background is inert; Esc closes; on close, focus returns to the element that opened it. Native `<dialog>` with `showModal()` provides inertness, Esc and top-layer stacking; the author still sets initial focus where the default is wrong and restores focus after custom close animations. Cookie banners, newsletter pop-ups and age gates (alcohol brands) are modals and follow the same contract, or are non-modal and must not block the page.

### 5.4 Skip links

The first focusable element on every page: "Skip to content", visually hidden until focused, then visible at the top left in the brand's own type at 16 px or larger, targeting `<main id="content" tabindex="-1">` (2.4.1). Long product grids and editorial pages add in-page skips ("Skip filters"). A skip link that is invisible on focus fails 2.4.7 and confuses sighted keyboard users, who are the majority of keyboard users.

### 5.5 Roving tabindex and active descendant

Composite widgets (tabs, toolbars, grids, listboxes, radio groups) take a single Tab stop; arrow keys move within. Two techniques:

- Roving tabindex: the active item has `tabindex="0"`, all others `-1`; arrow keys move `tabindex="0"` and call `focus()`. Real focus moves, so screen readers and magnifiers follow reliably. House default.
- `aria-activedescendant`: focus stays on the container or input and the attribute points at the active option's ID. Required for comboboxes, where focus must remain in the text input while the user browses suggestions.

### 5.6 Focus visible styling that matches the brand

Focus styling is part of the identity, designed with the same care as hover (design-taste, section 7 house layer for colour; 07-design-systems-and-tokens.md, section 12.2 for tokens). Requirements: visible (2.4.7, AA), unobscured (2.4.11, AA), and at the house standard of 2.4.13 (AAA): area at least a 2 CSS px perimeter, 3:1 between focused and unfocused pixels.

```css
:where(a, button, input, select, textarea, summary, [tabindex]):focus-visible {
  outline: 2px solid var(--focus-ring);   /* house: flame #F53901 on white and on #0A0A0A */
  outline-offset: 2px;                    /* the ring sits on the page ground around the control */
}
.on-image :focus-visible {               /* photography: two-colour ring survives any background */
  outline: 2px solid #0A0A0A;
  box-shadow: 0 0 0 4px #FFFFFF;
}
html { scroll-padding-top: var(--sticky-header-height); }  /* 2.4.11 */
```

Why flame works as the house ring: #F53901 measures 3.84:1 against white and 5.16:1 against #0A0A0A, so one ring colour passes 3:1 non-text contrast on both house grounds. It fails on a flame button (1:1), which is why the offset matters: the ring is drawn on the page around the button. `outline` is used instead of `box-shadow` alone because Windows forced colours mode removes box shadows (section 8.7). `:focus-visible` shows the ring for keyboard focus and hides it for mouse clicks on buttons, which ends the old argument for `outline: none`.

### 5.7 Keyboard shortcuts and conflicts

2.1.4 (A): single-character shortcuts must be removable, remappable, or active only when their component has focus, because screen reader quick-navigation uses single letters (H headings, K links, B buttons, F form fields in NVDA and JAWS browse mode) and voice dictation types letters. Never bind combinations owned by browsers (Ctrl or Cmd plus L, T, W, F, D, the arrows with Alt), operating systems or screen readers (Insert and Caps Lock as NVDA and JAWS modifiers; Control plus Option as the VoiceOver modifier). Document shortcuts in a help overlay (the "?" convention) and in `aria-keyshortcuts` on the controls they trigger. Galleries and lookbooks: Left and Right for previous and next only while the gallery has focus.

### 5.8 The mouse-only inventory

Before build, list every interaction that assumes a pointer and give each a keyboard path: hover-revealed prices or "quick add" (show on focus too, or always), custom cursors carrying information, drag-to-explore 360 degree product spins (arrow keys and buttons), WebGL and canvas experiences built in three.js or Spline (a parallel DOM layer with real buttons and text, or a static alternative page), scroll-jacked narratives (normal keyboard scrolling with Space, Page Down and arrows must work), and video players (section 13.5).

## 6. Screen readers and assistive technology

A screen reader converts the accessibility tree into speech or braille and gives its user commands to move through it. Most screen readers have two modes on the web: a browse (virtual cursor) mode, where single letters jump by element type, and a focus or forms mode, where keys go to the page; NVDA calls the switch between them browse mode and focus mode.

### 6.1 Who uses what

WebAIM Screen Reader User Survey 10 (December 2023 to January 2024, 1,539 respondents):

| Measure | Result |
|---|---|
| Primary desktop screen reader | JAWS 40.5 percent, NVDA 37.7, VoiceOver 9.7, Dolphin SuperNova 3.7, ZoomText and Fusion 2.7, Orca 2.4, Narrator 0.7 |
| Mobile screen readers used | VoiceOver 70.6 percent, TalkBack 34.7 (respondents could pick both) |
| Most common pairings | JAWS with Chrome 24.7 percent, NVDA with Chrome 21.3, JAWS with Edge 11.4, NVDA with Firefox 10.0, VoiceOver with Safari 7.0 |
| Finding information on a long page | Headings first, 71.6 percent |

The survey's respondents skew to North America and Europe. In India, NVDA's zero price and its Hindi and other Indian-language support through the eSpeak NG synthesiser make it the common desktop reader, and Android with TalkBack dominates mobile because Android dominates Indian phone share; in the Gulf, iPhone share is higher and VoiceOver matters more. Test both phone platforms for any client in either market.

### 6.2 Commands for testing

| Action | VoiceOver macOS | VoiceOver iOS | NVDA (Windows, free, NV Access) | JAWS (Windows, Freedom Scientific, Vispero) | TalkBack (Android) | Narrator (Windows) |
|---|---|---|---|---|---|---|
| Turn on and off | Cmd+F5 | Settings, Accessibility, VoiceOver, or the Accessibility Shortcut (triple-click side button) | Ctrl+Alt+N to start; Insert+Q to quit | Start from the desktop shortcut | Settings, Accessibility, TalkBack, or hold both volume keys for 3 seconds once the shortcut is set | Ctrl+Win+Enter |
| Modifier key | Control+Option (VO) | n/a (gestures) | Insert or Caps Lock (NVDA key) | Insert or Caps Lock | n/a (gestures) | Caps Lock or Insert |
| Next and previous item | VO+Right, VO+Left | Swipe right, swipe left | Down and Up arrows in browse mode | Down and Up arrows | Swipe right, swipe left | Narrator+Right, Narrator+Left |
| Activate | VO+Space | Double-tap | Enter or Space | Enter | Double-tap | Enter or Narrator+Enter |
| Next heading | VO+Cmd+H | Rotor to Headings, then swipe down | H (1 to 6 for levels) | H | Reading controls set to Headings, then swipe down | H in scan mode |
| Landmarks | Rotor (VO+U), Landmarks | Rotor, Landmarks | D | R (regions) or ; | Reading controls, Landmarks | D in scan mode |
| List of elements | VO+U (rotor: headings, links, form controls) | Two-finger rotate (rotor) | Insert+F7 (elements list) | Insert+F6 headings, Insert+F7 links, Insert+F5 form fields | TalkBack menu | Narrator+F7 links |
| Read from here | VO+A | Two-finger swipe down (from top: two-finger swipe up) | Insert+Down arrow | Insert+Down arrow | Reading controls or TalkBack menu, Read from next item | See Microsoft's Narrator command list (layouts differ between Windows versions) |
| Stop speech | Control | Two-finger tap | Control | Control | Two-finger tap | Control |

### 6.3 The 15-minute test

Every page and flow the house ships gets this pass before handover; the full audit (section 16.3) comes on top.

| Minute | Test | Pass condition |
|---|---|---|
| 0 to 3 | Unplug the mouse. Tab through the page from the address bar | Skip link first; every interactive element reachable in a logical order; focus always visible and unobscured; nothing unreachable, no traps; Esc closes overlays |
| 3 to 5 | Zoom the browser to 400 percent on a 1280 px window (or set the viewport to 320 px) | Single column, nothing cut off, no horizontal scroll, sticky header not filling the screen |
| 5 to 10 | NVDA with Chrome on Windows, or VoiceOver with Safari on macOS: list headings, then landmarks, then links; then complete the main task (book, enquire, buy) | Headings form an outline; landmarks present; link names make sense out of context; every control announces name, role and state; errors and "added" messages are announced |
| 10 to 13 | VoiceOver on an iPhone or TalkBack on an Android phone: swipe through the hero, navigation and the main task | Same as above; no unlabelled buttons; swipe order matches visual order; custom gestures have alternatives |
| 13 to 15 | Turn on reduced motion, increase text size to the largest setting, and switch to a Windows contrast theme or the browser's forced colours emulation | Parallax and autoplay stop; text reflows without clipping; controls and focus remain visible in forced colours |

Write down every failure with the success criterion number. Fifteen minutes finds the blockers; it does not prove conformance.

### 6.4 Other assistive technology and what each needs from design

| Technology | Who uses it | Examples | What the design must provide |
|---|---|---|---|
| Switch access | People with very limited movement (spinal cord injury, motor neurone disease, cerebral palsy) using one or two switches, a head movement or a sip-and-puff tube | iOS Switch Control, Android Switch Access, hardware from AbleNet | A logical, short focus order (each stop costs a scan cycle); no time limits; no hover-only or drag-only actions; large targets |
| Voice control | People who cannot use hands reliably; repetitive strain injury; situational (cooking, driving) | Apple Voice Control ("Tap Book now", "Show numbers"), Dragon (Nuance, a Microsoft company), Windows Voice Access, Android Voice Access | Visible text labels on every control, matched by the accessible name (2.5.3); no icon-only controls with ambiguous names; standard controls that respond to "click" |
| Screen magnifier | Low vision; magnification from 2 times to 16 times or more | ZoomText (Vispero), Windows Magnifier, macOS Zoom, iOS and Android Zoom and Magnification | Proximity: related information close together, because a magnified viewport shows a fraction of the page; error messages next to their fields; no content that appears far from focus; reflow (1.4.10) |
| Refreshable braille display | Blind and deafblind users; a row of 14 to 80 cells of electronically raised pins | Focus 40 (Freedom Scientific), Orbit Reader, HumanWare Brailliant | Concise, meaningful text alternatives; no meaning carried by emoji or decorative Unicode; real text in place of images; transcripts for video; Indian users read Bharati Braille for Indian scripts and Unified English Braille for English |
| Eye tracking and head pointers | Severe motor impairment | iOS and iPadOS Eye Tracking (iOS 18 onwards), Tobii Dynavox | Large targets with space between them; dwell activation tolerance; no hover-dependent menus |
| Reading and comprehension tools | Dyslexia, low literacy, second-language readers | Microsoft Immersive Reader, browser reader modes, text-to-speech in iOS (Speak Screen) and Android (Select to Speak) | Real text in semantic structure (reader modes rely on `<article>`, headings and paragraphs); images of text defeat them |

## 7. Motion, flashing and vestibular safety

### 7.1 Vestibular disorders

The vestibular system (the inner-ear balance organs and the brain pathways that process them) reconciles what the eyes see with what the body feels. In vestibular disorders (benign paroxysmal positional vertigo, vestibular migraine, Ménière's disease, damage after concussion) that reconciliation fails, and large on-screen motion the body does not feel produces dizziness, nausea, migraine and disorientation that can last hours. Prevalence is high: 35.4 percent of US adults aged 40 and over showed vestibular dysfunction in the Agrawal et al. NHANES analysis (2009), and the rate rises with age, which is the luxury audience. The triggers (large relative movement, parallax, scroll-jacking, zoom, motion unlinked from scroll direction) and the safe-motion values are in 12-motion-principles-and-ui-motion.md, section 11.3; Val Head's "Designing Safer Web Animation for Motion Sensitivity" (A List Apart, 2015) is the source text.

### 7.2 Reduce or remove

`prefers-reduced-motion: reduce` is the user's operating-system request (implementation in 12-motion-principles-and-ui-motion.md, section 11.2). The policy:

| Category | Under reduced motion | Reason |
|---|---|---|
| State feedback (focus, pressed, selected, colour change) | Keep | Carries information; no vestibular load |
| Opacity crossfades and short transitions under about 200 ms | Keep, shortened | Shows that something changed without movement through space |
| Small translations (under about 8 px), stagger | Reduce to a single fade | Small travel is low risk, but cumulative stagger is busy |
| Parallax, scroll-linked zoom and rotation, scroll-jacking, scroll snapping narratives | Remove; serve the static composed layout | The primary vestibular triggers |
| Large travel (full-screen slides, page transitions that move across the viewport) | Remove; crossfade | Large perceived movement with no body motion |
| Autoplaying video and ambient loops | Remove autoplay; show the poster frame with a play button | Motion the user did not ask for, plus 2.2.2 |
| Infinite marquees, floating idle loops, cursor followers | Remove | Continuous peripheral motion; Apple's visionOS guidance flags slow oscillation around 0.2 Hz |

Two additions the OS setting does not cover. First, many people with vestibular disorders do not know the setting exists, so any scroll-narrative microsite carries its own visible motion toggle ("Reduce motion"), stored per visitor and defaulting to the OS value. Second, reduced motion is never no feedback: a page where content swaps with no transition at all is disorienting in a different way.

### 7.3 Flashing and photosensitive epilepsy

Photosensitive epilepsy is epilepsy in which seizures are triggered by flashing light or certain regular patterns; it affects about 3 percent of people with epilepsy (Epilepsy Society, UK), within about 50 million people with epilepsy worldwide (WHO). The reference incident: an episode of the Pokémon television series broadcast in Japan on 16 December 1997 sent several hundred children to hospital, most often cited as about 685, after a sequence of red and blue flashes.

WCAG 2.3.1 (A) allows no more than three flashes in any one-second period, unless the flashing is below the general flash and red flash thresholds. The definitions, from WCAG 2.2:

- A flash is a pair of opposing changes in relative luminance (bright then dark, or the reverse).
- General flash threshold: a flash is a problem when the change in relative luminance is 10 percent or more of the maximum and the darker image's relative luminance is below 0.80, and the combined flashing area exceeds 0.006 steradians within any 10 degree visual field on the screen, about 25 percent of a 10 degree field, which at typical viewing distance WCAG approximates as a 341 by 256 px rectangle on a 1024 by 768 screen.
- Red flash threshold: any pair of opposing transitions involving a saturated red, at the same area rule. Saturated red flashing is more provocative than luminance flashing at the same rate.
- 2.3.2 Three flashes (AAA) removes the area exception: no more than three flashes per second at any size.

Broadcast is stricter and older: the UK regulator Ofcom requires broadcasters to follow its guidance on flashing images and regular patterns (stripes and checkerboards filling much of the screen are also restricted), and ITU-R Recommendation BT.1702 sets the international guidance. The Harding test is the automated analysis of video against these limits, named after the neurologist Graham Harding, whose Harding Flash and Pattern Analyser (Harding FPA) is the UK broadcast standard tool; the Trace Center's free Photosensitive Epilepsy Analysis Tool (PEAT) runs the WCAG thresholds on screen recordings.

House rule: every film, reel with cuts faster than about 8 frames, kinetic type sequence, LED wall loop and event visual goes through Harding or PEAT before delivery, with the report filed with the master. Fashion show films with strobes, nightlife F&B campaigns and launch countdowns are the usual failures; a failing sequence is fixed by lowering contrast between frames, slowing the cut, shrinking the flashing area or removing saturated red, and the fix is designed in the edit (16-editing-colour-grading-and-delivery.md). At live events, strobe lighting needs a posted warning at the entrance.

### 7.4 Autoplay

| Media | Rule | Standard |
|---|---|---|
| Audio | Never autoplay with sound. If any audio starts automatically and lasts more than 3 seconds, a pause or volume control independent of the system volume is the first thing in focus order | 1.4.2 (A) |
| Video and animation lasting more than 5 seconds next to other content | A visible pause control; under reduced motion, no autoplay at all | 2.2.2 (A) |
| Hero background video | Muted, no essential information, a visible pause button 44 px or larger in a corner, poster under reduced motion and on Save-Data | 2.2.2, house |
| Carousels | No auto-advance (design-taste, section 3 lists the auto-advancing slider as a cheap tell); if a client insists, it pauses on focus and hover and has a visible pause | 2.2.2, APG carousel |
| Social video on owned pages | Click to play with captions on by default | 1.2.2, house |

Browsers already block unmuted autoplay without user interaction (Chrome's autoplay policy since 2018, Safari's since 2017), so audio autoplay usually fails silently and adds nothing but risk.

## 8. Vision and low vision

### 8.1 The range

Blindness is a small part of visual impairment. Low vision (vision that glasses cannot correct to normal: reduced acuity, contrast sensitivity, field loss) is far larger, and age-related conditions (presbyopia, cataract, macular degeneration, glaucoma, diabetic retinopathy) make it common in the over-50 audience; diabetic retinopathy matters in India and the Gulf, both regions with high diabetes prevalence. Colour vision deficiency is covered in 04-colour.md, section 13 and its rule, a second channel for every colour meaning, is WCAG 1.4.1. Light sensitivity (photophobia, with migraine, after concussion, with some eye conditions) is the one most often missed.

### 8.2 Zoom to 400 percent and reflow

1.4.10 asks for no two-dimensional scrolling at 320 CSS px wide, which is a 1280 px window at 400 percent zoom; 1.4.4 asks for 200 percent text resizing. Low-vision users browse at these levels daily. What breaks first on premium sites:

Sticky headers and floating booking bars that consume half the viewport at zoom; collapse them below a viewport height of about 500 CSS px (a `@media (max-height: 500px)` rule), because zoom shrinks the CSS viewport in both dimensions. Display type set in `vw` units, which does not grow with zoom (and can fail 1.4.4); use `clamp()` with a `rem` component. Fixed-width containers and long unbreakable strings (email addresses, booking references, German and Arabic compound words): `overflow-wrap: anywhere`. Horizontal scroll galleries that become the only way to reach content. Exceptions under 1.4.10: data tables, maps, diagrams, video and toolbars may scroll in two dimensions; the rest of the page may not.

### 8.3 Text spacing

1.4.12 requires that content survives user-set line height 1.5, paragraph spacing 2 times the font size, letter spacing 0.12 em and word spacing 0.16 em. People with dyslexia and low vision apply these through browser extensions and user stylesheets. Test with Steve Faulkner's text spacing bookmarklet or a user stylesheet; failures are clipped buttons, overlapping cards and truncated navigation, all caused by fixed heights. The Understanding document notes that scripts which do not use a property (Arabic, which breaks if letter-spaced, and several Indic scripts) are not required to honour it for that property, but the layout must not break when the user applies it.

### 8.4 Font size minimums

| Context | Minimum | House target | Reason |
|---|---|---|---|
| Web body | 16 px (browser default) | 17 to 18 px for editorial luxury pages | The over-50 reader; Space Grotesk 300 needs the size (section 3.4) |
| Web secondary and captions | 12 px absolute floor (03-typography.md, section 7.3) | 14 px | Below 12 px is unreadable for the presbyopic reader at normal distance |
| Legal and footer text | 12 px | 13 to 14 px | Legal text is still content under 1.4.3 and 1.4.4 |
| Form inputs on iOS | 16 px | 16 px | iOS Safari zooms the page when focusing an input under 16 px, disorienting everyone |
| Email body | 14 px | 16 px | Mobile mail clients apply their own scaling inconsistently |
| Deck on a 1920 px canvas | 18 px captions (26-platform-and-format-specs-2026.md, section 7) | 24 px body | Projectors lose contrast; rooms are long |

Set font sizes in `rem` so that the user's browser default font size (a setting many low-vision users change) scales the whole type system; pixel font sizes zoom with page zoom but ignore that default.

### 8.5 Dynamic Type and font scaling

iOS Dynamic Type: seven standard sizes from xSmall to xxxLarge plus five accessibility sizes (AX1 to AX5). The Body style is 17 pt at the default Large size and 53 pt at AX5. Native apps use text styles (`.body`, `.headline`) or `UIFontMetrics` to scale custom fonts such as Space Grotesk; layouts switch from horizontal to vertical stacking at accessibility sizes (SwiftUI's `dynamicTypeSize.isAccessibilitySize`). Android: text in `sp` units scales with the system font size; Android 14 introduced non-linear font scaling up to 200 percent, where large text grows less than small text so headings do not explode. Never set text in `dp`. Web: iOS Safari applies Dynamic Type to pages that use the system text styles through `font: -apple-system-body`, scaled with `rem` from there; most sites ignore it, and the house uses it on web apps and booking flows that will be used on phones by older guests. Test at the largest accessibility size: truncation with ellipses, overlapping labels and buttons pushed off screen are the failures.

### 8.6 Contrast in dark mode

Dark grounds halate (light strokes bleed and look heavier), and WCAG's ratio treats both polarities the same, so the dark-mode trap in section 3.4 (#8A8A8A on #0A0A0A passing WCAG at 5.73:1 and reaching only Lc -39.5) is common. Rules: secondary text on #0A0A0A at #BDBDBD or lighter; body at about #EDEDED for long reading; one weight step lighter than on white; accent colours at lower chroma. Detail in 04-colour.md, section 6.6 and 06-ui-design-craft.md, section 15.

### 8.7 High contrast and forced colours

Windows contrast themes (called High Contrast before Windows 11) replace every author colour with a small user-chosen palette; browsers expose this as the `forced-colors: active` media query. What happens and what to do:

Backgrounds, text, borders and link colours are replaced by system colours (`Canvas`, `CanvasText`, `LinkText`, `ButtonFace`, `ButtonText`, `Highlight`, `HighlightText`, `GrayText`). `box-shadow` is removed, so focus rings, card edges and input boundaries drawn with shadows vanish. Use `outline` and `border`; a `outline: 2px solid transparent` on controls becomes visible in forced colours. Background images can remain while text over them receives a solid backplate; information carried only by a background image (an icon set as CSS background) disappears or loses meaning. Use inline SVG with `fill: currentColor`. Colour swatches in a product configurator (gold, rose gold, platinum; fabric colours) need `forced-color-adjust: none` on the swatch so the real colour shows, plus the colour name as text. `prefers-contrast: more` matches when users ask for more contrast (macOS and iOS Increase Contrast): strengthen borders and darken secondary text through a token theme. Test in Edge or Chrome with forced colours emulation in DevTools, and on a real Windows machine once per project.

### 8.8 Light sensitivity

Respect `prefers-color-scheme` where the brand allows a dark theme, and never flash white between pages in a dark site: set `color-scheme: dark` and a background colour on `html` so the browser's blank frame matches. Avoid full-screen pure white transitions, white flashes in film edits, and pure white text on pure black for long reading (soften as in 8.6). Very high-brightness LED content at events: offer a lower-brightness zone and flag strobes (section 7.3). Do not override the OS or browser's dark mode with forced light UI on long-read pages.

## 9. Cognitive and learning disabilities

### 9.1 Who and why it is the largest group

Cognitive and learning disabilities cover intellectual disability, specific learning disabilities (dyslexia, dyscalculia), attention deficit hyperactivity disorder (ADHD), autism, memory impairment and dementia, acquired brain injury and mental health conditions. Prevalence figures vary with definitions: the British Dyslexia Association estimates about 10 percent of the UK population is dyslexic; a 2021 meta-analysis (Song et al., Journal of Global Health) put persistent adult ADHD at 2.58 percent and symptomatic adult ADHD at 6.76 percent worldwide. Add the situational versions every guest has: jet lag, a second language, grief, a phone call in the middle of a checkout, a wedding week. Cognitive accessibility is the part of this file that helps the most people and is the least tested by automation.

### 9.2 COGA guidance

The W3C Cognitive and Learning Disabilities Accessibility Task Force (COGA) published "Making Content Usable for People with Cognitive and Learning Disabilities" as a W3C Working Group Note on 29 April 2021. Its eight objectives, each with design patterns:

1. Help users understand what things are and how to use them (familiar design, clear affordances, standard icons with labels).
2. Help users find what they need (clear navigation, search, a clear purpose for each page).
3. Use clear and understandable content (plain words, short sentences, literal language, no double negatives).
4. Help users avoid mistakes and know how to correct them (forgiving inputs, clear errors, undo).
5. Help users focus (no distraction, interruption or auto-moving content; one main task per page).
6. Ensure processes do not rely on memory (no remembering codes between steps, no transcription, saved progress).
7. Provide help and support (human help that is easy to find, explanations of jargon, examples).
8. Support adaptation and personalisation (respect user settings, allow simplification).

It also publishes user stories and personas; use them in briefs (section 17).

### 9.3 Plain language and reading level

The writer's rules are in 10-ux-writing-and-content-design.md, section 8.6 and the house voice in mask360-copywriting. The design consequences: WCAG 3.1.5 Reading Level (AAA) asks for a supplement when text needs reading ability beyond lower secondary education (roughly 7 to 9 years of schooling); the house meets it on consent, payment, cancellation and policy copy. English readability formulas (Flesch-Kincaid, the Hemingway app) are indicators only; no reliable automated index exists for Hindi or Arabic, so test those versions with readers. Luxury copy's habit of allusion ("A study in stillness") is fine as a headline and fails as a button label or an error.

### 9.4 Consistent navigation and help

3.2.3 (consistent navigation), 3.2.4 (consistent identification) and 3.2.6 (consistent help) exist because re-learning a page costs effort. In practice: the concierge or WhatsApp contact in the same place on every page; the same name for the same thing ("Bag" everywhere); booking steps numbered and named the same way on every visit; nothing moves between visits for novelty.

### 9.5 Error prevention

3.3.4 (AA) for legal, financial and data submissions: a review step that shows dates, guests, room, price in rupees or dirhams with tax, and cancellation terms before charging; a cancellation window; confirmation emails that repeat everything. Forgiving inputs: accept phone numbers with or without +91, +971, spaces and hyphens; accept dates in more than one format; never fail a PIN code or Emirates ID because of a space. Constrain where it helps (date pickers that disable unavailable dates, with the reason as text), but always allow typing.

### 9.6 Timeouts

2.2.1 (A) sets the rule (section 2.3); 2.2.5 Re-authenticating (AAA) requires that data survive a re-login; 2.2.6 Timeouts (AAA) requires warning of any data loss caused by inactivity unless data is kept for more than 20 hours. Hospitality is full of timers: rate holds, ticket queues for launches and concerts, payment gateway sessions, SMS OTP windows. Show the time remaining as text, warn at least a minute before expiry in a live region, offer "Extend", and preserve what was entered.

### 9.7 Dyslexia: what the evidence supports and the font myths

The positions. Dyslexia-specific typefaces (Dyslexie, designed by Christian Boer in 2008; OpenDyslexic, by Abbie Gonzalez, released 2011) weight the bottoms of letters and vary shapes to reduce letter confusion, and are widely recommended by brands and in classrooms. Controlled studies have not found the claimed benefit:

- Rello and Baeza-Yates, "Good fonts for dyslexia" (ASSETS 2013, 48 participants with dyslexia, eye tracking): sans serif, monospaced and roman styles improved reading; italic worsened it; OpenDyslexic showed no improvement over standard fonts.
- Wery and Diliberto (Annals of Dyslexia, 2017): OpenDyslexic did not improve reading rate or accuracy in students with dyslexia.
- Kuster, van Weerdenburg, Gompel and Bosman (Annals of Dyslexia, 2018, Dutch children): Dyslexie gave no benefit over Arial.

What does have evidence:

- Spacing. Zorzi et al. (PNAS, 2012) found extra-large letter spacing improved reading speed and accuracy in Italian and French children with dyslexia, attributed to reduced crowding (adjacent letters interfering with recognition).
- Size. Rello, Pielot and Marcos ("Make it big!", CHI 2016) found that larger font sizes, from about 18 pt, improved readability and comprehension for readers with dyslexia, while line spacing showed no significant effect.
- Line length and layout. The British Dyslexia Association Style Guide recommends about 60 to 70 characters per line, left alignment without justification (justified text creates uneven word gaps), line spacing of about 1.5, and avoiding italics and underlining for emphasis (bold instead).
- Contrast and glare. The same guide recommends dark text on a light, off-white or cream background to reduce glare for some readers; it is a preference that varies, which is why user control matters more than any single setting.

The house position: no dyslexia font. Set the brand face with generous tracking on small text, 1.5 line height on body, 60 to 70 characters per line, left aligned, bold for emphasis, and honour user overrides (1.4.12 and reader modes). This sits comfortably with design-taste's preference for space; it conflicts with tight-tracked small body text, and access wins there.

### 9.8 ADHD and attention

Remove interruptions: no newsletter modal on arrival (wait for an intent signal or put the sign-up inline), no chat bubble that bounces, no autoplay (7.4), no countdown banners that are not real. One primary action per view; secondary paths visible but quiet. Progress saved automatically in long flows (wedding enquiries, villa configurators, residence registration). Notifications and emails batched; unsubscribe and notification controls easy to find.

### 9.9 Memory

Recognition over recall (Jakob Nielsen's sixth heuristic): show previous choices, recent searches, saved guests; never ask the user to remember a code from an earlier screen (3.3.7). Authentication without memory tests (3.3.8): allow paste and password managers, support passkeys, magic links and SMS OTP with `autocomplete="one-time-code"` so iOS and Android offer the code above the keyboard; never split an OTP into separate boxes that block paste; no puzzle CAPTCHAs (use invisible risk scoring or a simple checkbox challenge with an audio alternative). Saved progress and a visible "where am I" in multi-step flows (`aria-current="step"` on the step indicator).

## 10. Hearing: captions, transcripts, sign language and audio description

### 10.1 Who

WHO counts over 1.5 billion people with some hearing loss and about 430 million with disabling loss. Deaf (capital D) refers to people who identify with Deaf culture and use a sign language as their first language; for many of them written English or Hindi is a second language, which is why captions are necessary and, for some viewers, insufficient alone. Hard of hearing people, a far larger and older group, rely on captions and good audio mixes. Situationally, most social video is watched without sound (section 10.7).

### 10.2 Captions

Captions are the synchronised text of speech and meaningful sound. Open captions are burned into the picture and cannot be turned off; closed captions are a separate track (SRT, WebVTT, SCC, TTML) the viewer switches on and can restyle. Subtitles for the deaf and hard of hearing (SDH) add speaker identification, sound effects and music description to the dialogue; translation subtitles carry dialogue only and assume the viewer can hear. WCAG requires captions for prerecorded video with audio (1.2.2, A) and for live video (1.2.4, AA). Automatic captions alone do not meet the requirement, because accuracy is part of it, and auto-captioning is weakest in Hindi, Hinglish and Arabic.

Quality standards to cite in briefs:

| Source | What it sets |
|---|---|
| FCC caption quality rules (US, 2014 Report and Order) | Four elements: accuracy, synchronicity, completeness, placement (captions must not block important visual content) |
| DCMP Captioning Key (Described and Captioned Media Program, US) | Detailed style rules for educational media: 32 characters per line, two lines, sentence case, speaker and sound conventions |
| BBC Subtitle Guidelines | About 37 characters per line for broadcast; reading rate guidance of about 160 to 180 words per minute; avoid crossing shot changes |
| Netflix Timed Text Style Guide (English) | 42 characters per line, two lines maximum, 20 characters per second for adult programmes and 17 for children's, minimum duration five sixths of a second, maximum 7 seconds |

Styling numbers, condensed (house styling and placement under platform UI are in 16-editing-colour-grading-and-delivery.md, sections 11.2 to 11.4, and 26-platform-and-format-specs-2026.md, section 5.10):

| Property | Rule | Reason |
|---|---|---|
| Lines | Two maximum | Three lines cover the picture and cannot be read in time |
| Line length | 32 to 42 characters; house burned-in 32 to 38 | Shorter lines on phones; break at phrase boundaries |
| Reading speed | Up to 20 characters per second for adult English; house 15 to 17 for Hindi and Arabic | Devanagari conjuncts and Arabic ligatures carry more per character |
| Duration | At least about 1 second, at most 7 seconds per caption | Too short cannot be read; too long is re-read |
| Position | Bottom centre; moved to the top when lower thirds, supers or speakers' mouths would be covered | FCC placement element; lip-readers use mouths |
| Font | Sans serif with clear letter shapes, medium weight; white on a dark semi-opaque box or with an edge where the picture varies | Legibility on any frame; closed captions let users override |
| Speaker identification | Name in brackets or a hyphen-led line for each speaker change | Viewers cannot tell who speaks off-screen |
| Sound and music | Sound effects in square brackets ("[door closes]", "[crowd applauds]"); music described with mood or title, lyrics set off with a music note symbol | SDH completeness |

### 10.3 Transcripts

A transcript is the full text of audio content, with speakers, sound cues and, for video, descriptions of key visual information. Required for audio-only content such as podcasts (1.2.1, A); for video, a descriptive transcript serves deafblind users on braille displays and anyone who prefers to read. Publish as HTML on the same page as the media, linked directly beneath the player. Transcripts are also indexable text, which is the easy argument with a client.

### 10.4 Sign language

Sign languages are national languages with their own grammar, independent of the spoken language around them: Indian Sign Language (ISL; the Indian Sign Language Research and Training Centre was set up in 2015), British Sign Language, American Sign Language; Arabic-speaking countries have distinct sign languages, and the UAE promotes Emirati Sign Language. WCAG makes sign language interpretation of prerecorded video AAA (1.2.6). The house uses it for public-facing campaigns on disability themes, government and public-sector clients, and live launches. Rules: an interpreter who is a native or professional signer of the audience's sign language (Deaf-led review where possible); the interpreter's window large enough that hands and face read on a phone, on a plain contrasting ground and clear of platform interface; at events, a lit interpreter position visible from accessible seating, plus CART (Communication Access Realtime Translation, live human captioning shown on screen) and an induction loop (a hearing loop that transmits sound directly to hearing aids set to the T position).

### 10.5 Visual alternatives for audio cues

Any sound that carries information needs a visual (and ideally a haptic) partner: an order-ready chime in an F&B app becomes a visible banner and a vibration; a video's audio sting signalling a reveal needs an on-screen cue; voice-only instructions at an installation need text. iOS Sound Recognition and Android Sound Notifications show that users already rely on visual cues; products should not make them guess.

### 10.6 Audio description

Audio description (AD) is narration of the visual information a blind or low-vision viewer would otherwise miss: actions, settings, on-screen text, expressions, costume and product. WCAG: audio description or a full media alternative for prerecorded video (1.2.3, A); audio description (1.2.5, AA); extended audio description, which pauses the video to fit description where gaps are too short (1.2.7, AAA).

A luxury brand film is the worst case: two minutes of music over images of a suite, a necklace or a coastline carries zero information without sight. Standards and guides: the American Council of the Blind's Audio Description Project guidelines, the DCMP Description Key, the Netflix Audio Description Style Guide and Ofcom's guidance for UK broadcasters.

Scripting rules:

Describe what is seen, in present tense, third person, without interpreting intent ("She fastens the clasp and looks at the mirror", in place of "She feels confident"). Priority: who, what, where, when; then detail as time allows. Read on-screen text, titles, logos and the end frame. Fit descriptions into natural pauses; never talk over dialogue or a key musical moment. Name the product precisely, as a buyer would (10-ux-writing-and-content-design.md, section 8.1 for the register). Voice: a neutral, warm voice that matches the brand's tone; synthetic voices are acceptable for short social pieces when reviewed by a person.

Integrated description, writing the voice-over so that it carries the visual information, is cheaper and better than retrofitted AD; the house proposes it at script stage for every brand film over 30 seconds that will live on owned channels. Delivery: a separate described version of the file, or a described audio track selectable in the player, or a WebVTT `kind="descriptions"` track (player support is limited, so do not rely on it alone).

### 10.7 Sound-off social

A Verizon Media and Publicis Media survey (2019) found 69 percent of US consumers watch video with the sound off in public and 80 percent were more likely to finish a video with captions. Social video is designed to read without sound: burned-in captions, text that carries the hook, and visual storytelling. The craft of sound-off design is in 17-short-form-social-and-platform-craft.md; the caption rules above apply to every burned-in line.

## 11. Motor and dexterity

### 11.1 Who

Limb difference and amputation, paralysis, cerebral palsy, multiple sclerosis, motor neurone disease, Parkinson's disease (over 8.5 million people worldwide in 2019, WHO), essential tremor (common in older adults), arthritis, repetitive strain injury; temporary injuries (a wrist in a cast); and situational limits (one hand on a stroller, gloves at an Alpine chalet, wet hands at a pool deck, a moving car). Input methods include touch with reduced precision, keyboards, switches, voice, eye gaze, head pointers and mouth sticks.

### 11.2 Target sizes and spacing

| Standard | Minimum | Notes |
|---|---|---|
| WCAG 2.5.8 Target size (minimum), AA | 24 by 24 CSS px | Or spacing so a 24 px diameter circle centred on each target does not intersect another target or its circle; inline links in text, equivalent targets, user-agent controls and essential cases excepted |
| WCAG 2.5.5 Target size (enhanced), AAA | 44 by 44 CSS px | House default on every touch surface |
| Apple Human Interface Guidelines | 44 by 44 pt | iOS and iPadOS hit regions |
| Material Design | 48 by 48 dp, with about 8 dp between targets | Android |
| House | 44 px minimum, 48 px for primary actions, 8 px between adjacent targets | The visual element can be smaller than the hit area (a 20 px icon with padding to 44 px) |

Fitts's law (movement time grows with distance and shrinks with target size) explains why small targets far apart are slow for everyone and impossible for people with tremor. The delicate luxury icon row (wishlist, share, compare at 16 px, 4 px apart) is the classic failure; the fix keeps the icons' visual size and enlarges the hit areas.

### 11.3 Drag and gesture alternatives

2.5.7 Dragging movements (AA): every drag has a single-pointer alternative. Price-range sliders get two number inputs or tap points; reorderable wishlists get "Move up" and "Move down"; before-and-after image sliders get two buttons; seating plans and floor-plan pickers get a list view; maps get zoom and pan buttons. 2.5.1 Pointer gestures (A): pinch-zoom on product photography gets plus and minus buttons; two-finger rotation of a 3D ring viewer gets rotate buttons and arrow keys; swipe galleries get previous and next buttons. 2.5.4 Motion actuation (A): "shake to shuffle" or "tilt to explore" campaigns get on-screen controls and a way to turn motion response off. 2.5.2 Pointer cancellation (A): actions fire on release, so a user who presses the wrong target can slide off to abort; press-and-hold to confirm suits destructive actions only, with a visible progress cue.

### 11.4 Tremor tolerance

Hover menus with close delays (about 300 to 500 ms) and forgiving paths, so a pointer that wobbles across a gap does not close the menu; 1.4.13 requires the hover content itself to be hoverable. No double-tap requirements; no long-press as the only route to an action. Undo after destructive actions (remove from bag, cancel enquiry) and confirmations before irreversible ones (3.3.4). Debounce repeated taps on payment buttons so a tremor does not submit twice; show a pressed state immediately.

Time limits: motor users take longer. Everything in 9.6 applies: extendable timers, no silent expiry, saved progress. Waiting-room queues for ticket and product drops (a limited jewellery release, a sold-out concert at Coca-Cola Arena in Dubai) are designed so the user's place is held while they complete forms at their own speed.

### 11.5 Voice input

Voice control users speak the visible label ("Tap Reserve"), so 2.5.3 Label in name is the rule that makes voice work: the accessible name contains the visible text, in the same order, ideally starting with it. Icon-only controls force the slow fallback ("Show numbers", then "Tap 14"). Form fields with visible labels can be targeted by name ("Tap Email"). Custom widgets built from `<div>`s are often invisible to voice control entirely.

## 12. Mobile accessibility

### 12.1 Platform accessibility APIs

| Platform | How a control exposes itself | Key properties |
|---|---|---|
| iOS UIKit | `UIAccessibility` informal protocol | `isAccessibilityElement`, `accessibilityLabel`, `accessibilityHint`, `accessibilityValue`, `accessibilityTraits` (button, header, selected, adjustable), `accessibilityCustomActions` |
| iOS SwiftUI | View modifiers | `.accessibilityLabel()`, `.accessibilityHint()`, `.accessibilityValue()`, `.accessibilityAddTraits(.isHeader)`, `.accessibilityElement(children: .combine)`, `.accessibilityAction()`, `.accessibilityAdjustableAction()` |
| Android Views | `AccessibilityNodeInfo` | `contentDescription`, `labelFor`, `stateDescription`, `accessibilityHeading`, `importantForAccessibility`, custom actions |
| Android Jetpack Compose | Semantics tree | `Modifier.semantics { contentDescription; role; stateDescription; heading() }`, `mergeDescendants`, `clearAndSetSemantics` |
| React Native | Props mapped to both platforms | `accessible`, `accessibilityLabel`, `accessibilityRole`, `accessibilityState`, `accessibilityHint`, `accessibilityActions` |
| Flutter | `Semantics` widget | `label`, `button`, `header`, `value`, `onTap`; `MergeSemantics`, `ExcludeSemantics` |

### 12.2 Labels on custom controls

Every icon button has a label naming the action ("Add to wishlist"), with state where it toggles ("Added to wishlist", or a selected trait). Custom carousels use the iOS adjustable trait (swipe up and down to change slide) or explicit buttons; never only a horizontal swipe, which VoiceOver uses for navigation. Group related text so a product card reads as one element ("Emerald drop earrings, 18k gold, 4,85,000 rupees") through `children: .combine` or `mergeDescendants`, with the card's actions as custom actions; a card read as eight separate fragments is the common failure. Images: decorative images hidden from the tree; informative images labelled as in 10-ux-writing-and-content-design.md, section 8.1. Prices and currencies: format so screen readers speak them correctly (the rupee and dirham symbols are announced inconsistently; test "₹" and "AED" in both readers and add a label such as "485,000 rupees" where the output is wrong).

### 12.3 Display settings to honour

| User setting | iOS API | Android equivalent | Design response |
|---|---|---|---|
| Reduce Motion | `UIAccessibility.isReduceMotionEnabled`; SwiftUI `accessibilityReduceMotion` | Remove animations (`ANIMATOR_DURATION_SCALE` 0) | Section 7.2 |
| Larger Text | Dynamic Type, `UIContentSizeCategory` | Font size (`fontScale`, to 200 percent from Android 14) | Section 8.5 |
| Bold Text | `UIAccessibility.isBoldTextEnabled`; SwiftUI `legibilityWeight` | Bold text (`fontWeightAdjustment`, Android 12 onwards) | Custom fonts must step up a weight; Space Grotesk 300 becomes 400 or 500 |
| Reduce Transparency | `UIAccessibility.isReduceTransparencyEnabled`; CSS `prefers-reduced-transparency` where supported | None system-wide | Replace blur and glass with solid surfaces; design-taste lists glass as peaking anyway |
| Increase Contrast | `UIAccessibility.isDarkerSystemColorsEnabled`; SwiftUI `colorSchemeContrast` | High contrast text | A higher-contrast token theme |
| Smart Invert | `accessibilityIgnoresInvertColors` on photos and video | Colour inversion | Mark photography and video so it is not inverted |
| Differentiate Without Colour, Button Shapes, On/Off Labels | `shouldDifferentiateWithoutColor` and related settings | Colour correction | Second channel for every colour meaning |

### 12.4 Touch accommodations and timing

iOS Touch Accommodations (Hold Duration, Ignore Repeat, Tap Assistance), AssistiveTouch and Back Tap, and Android's Touch and hold delay and Time to take action settings exist because standard touch timing excludes many users. Design consequences: no actions that depend on tap speed; toasts and snackbars with actions stay until dismissed or use the platform's recommended timeout (Android `AccessibilityManager.getRecommendedTimeoutMillis`, API 29 onwards); no swipe gestures that conflict with system gestures.

### 12.5 Mobile web specifics

Never set `user-scalable=no` or `maximum-scale=1` in the viewport meta: it blocks pinch zoom and fails 1.4.4. 1.3.4: no orientation lock. Inputs at 16 px or larger (section 8.4); `inputmode` and `autocomplete` on every field (numeric keypad for PIN codes and OTPs). Sticky bottom bars sit above the iOS home indicator (`env(safe-area-inset-bottom)`) and must not cover focused fields when the keyboard opens.

### 12.6 Testing on devices

Xcode Accessibility Inspector (audits, element inspection) and `XCUIApplication().performAccessibilityAudit()` in XCUITest (Xcode 15 onwards) for automated checks. Android Accessibility Scanner (Google Play app) on real screens; Espresso `AccessibilityChecks` and Compose test rules in CI. Manual: VoiceOver on an iPhone and TalkBack on a mid-range Android (a Samsung Galaxy A series or a Redmi in India), largest text size, reduced motion, one-handed use. Apple added Accessibility Nutrition Labels to App Store product pages (announced May 2025), on which developers declare support for features such as VoiceOver, Voice Control, Larger Text, Sufficient Contrast, Reduced Motion, Captions and Audio Descriptions. For client apps the house fills these honestly from test results, because the declaration is public.

## 13. Documents and media

### 13.1 Accessible PDF

A brochure, menu, price list or fact sheet published on a site is web content under WCAG and the EAA. A tagged PDF carries a structure tree (headings, paragraphs, lists, tables, figures with alt text) and a reading order; an untagged PDF is a picture of text to a screen reader.

- Standards: PDF/UA (Universal Accessibility), ISO 14289-1:2014 (PDF/UA-1, on PDF 1.7) and ISO 14289-2:2024 (PDF/UA-2, on PDF 2.0). The Matterhorn Protocol from the PDF Association lists the PDF/UA-1 failure conditions (31 checkpoints and 136 failure conditions), which tools test against.
- Requirements: tags on all real content and artifacts on decoration (running headers, page numbers, ornaments); logical reading order; alt text on figures; table headers; document title shown in the title bar (`DisplayDocTitle`); document language set; bookmarks for long documents; fonts embedded with correct Unicode mapping.
- Indic and Arabic scripts: Devanagari's reordered glyphs (the short i matra is drawn before the consonant it follows in speech) and Arabic contextual forms often extract as garbled text unless the font's Unicode mapping is correct or `ActualText` is supplied; copy a paragraph out of the PDF and paste it into a text editor as the quick check.
- Workflow: InDesign (paragraph styles mapped to export tags, the Articles panel for reading order, alt text in Object Export Options, Export as Tagged PDF), then Acrobat Pro (Accessibility Checker, Reading Order and tag tree fixes), then the free PAC (PDF Accessibility Checker) from axes4 for PDF/UA. Word and PowerPoint export tagged PDFs on Windows when "Document structure tags for accessibility" is ticked.
- House rule: anything a guest must read to buy or book (menus, rates, policies, floor plans with areas) also exists as HTML. QR-code restaurant menus served as image-only PDFs fail blind diners and, on a 4G signal in a basement bar, everyone.

### 13.2 Accessible decks

Use the slide layouts' title placeholders and give every slide a unique title (screen reader users navigate decks by title). Set reading order (PowerPoint's Reading Order pane; Selection Pane order) and alt text on every meaningful image; mark decorative images as decorative. Run PowerPoint's Check Accessibility (Review tab) before export; verify the exported PDF in PAC whatever the authoring tool, because Keynote, Google Slides and Figma exports carry limited or no tagging. Type: 24 px body and 18 px captions minimum on a 1920 px canvas (26-platform-and-format-specs-2026.md, section 7); client decks on #0A0A0A (design-taste, section 7) keep secondary text at #BDBDBD or lighter (section 3.4), because projectors in daylight rooms crush low-contrast greys. Information is never carried only by animation or by speaker notes; send the deck with notes or a text summary. Video in decks: captioned, and never autoplaying with sound.

### 13.3 Accessible email

Live text for all headlines, offers and calls to action; the whole-email-as-one-JPG format fails 1.1.1 and 1.4.5 and disappears when images are blocked by default, as Outlook often does. `lang` and `dir` on `<html>` (Arabic emails `dir="rtl"`), a meaningful `<title>`, semantic `<h1>` to `<h3>` and `<p>`. Layout tables carry `role="presentation"` so screen readers do not announce rows and columns. Alt text on every informative image; `alt=""` on spacers and decoration. Body at 16 px (14 px minimum), line height about 1.5, left aligned, link text that names the destination and underlined links. Dark mode: declare `color-scheme` and test that logos and text survive client inversion (Gmail and Outlook apps invert partially); transparent PNG logos with dark ink vanish on dark backgrounds, so add a light keyline or supply a dark-mode variant. A plain-text part. Test in Litmus or Email on Acid, both of which include accessibility checks, and with VoiceOver on iOS Mail. Design detail in 21-web-design-and-digital-craft.md, section 10.

### 13.4 Accessible social posts

Alt text: Instagram offers custom alt text under Advanced settings when posting and through Edit afterwards (about 100 characters by third-party measurement, 26-platform-and-format-specs-2026.md, section 2); LinkedIn offers alt text on image upload; X offers image descriptions; Facebook generates automatic alt text, which the house always overrides. Where a format has no alt field, end the caption with a short image description. Hashtags in camel case (#TheOberoiUdaivilas, #MumbaiMonsoon), so screen readers can split the words; at most a few, at the end. Emoji: screen readers read each one by its full Unicode name ("sparkles", "face with tears of joy"); the house copy rules exclude them anyway (design-taste, section 3), and where a client account uses them they are limited to one or two at the end of the caption; bullets and words stay as text. Never use "fancy text" generators: those characters are Unicode mathematical letters that screen readers read letter by letter as symbols, or skip, and search cannot index. Video: burned-in captions on Reels, Stories, TikTok and Shorts (16-editing-colour-grading-and-delivery.md, section 11), sidecar SRT where the platform accepts it (YouTube, LinkedIn, Facebook), and the flash check of section 7.3 on fast cuts. Text in images: contrast against the image measured at the actual placement, duplicated in the caption when it carries the message (dates, prices, the offer).

### 13.5 Accessible video players

| Requirement | Standard | Notes |
|---|---|---|
| All controls keyboard-operable with visible focus | 2.1.1, 2.4.7 | Space toggles play; arrow keys seek and change volume when the player has focus |
| Controls named, matching visible labels or icons | 4.1.2, 2.5.3 | "Play", "Mute", "Captions", "Full screen", "Audio description" |
| Captions toggle, captions styleable, captions on by default for muted autoplay | 1.2.2, house | WebVTT `::cue` styling; respect the platform's caption style preferences |
| Audio description toggle or a described version | 1.2.3, 1.2.5 | Section 10.6 |
| Transcript link adjacent to the player | 1.2.1, house | HTML on the same page |
| No autoplay with sound; a pause control for any moving background video | 1.4.2, 2.2.2 | Section 7.4 |
| Control contrast 3:1 against the video | 1.4.11 | A gradient scrim under the control bar, because video frames vary |
| Controls at least 24 px, 44 px on touch | 2.5.8, house | |
| Playback speed control | House | Helps users who need slower speech and users who skim |

Players: Able Player (open source, from the University of Washington, built for accessibility), Video.js and Plyr (accessible with configuration), Mux Player, and the YouTube and Vimeo embeds (acceptable; check that the embed's title is set with a `title` on the iframe). Custom players built for brand microsites are audited like any other widget.

## 14. Law, standards and procurement

Not legal advice; the client's counsel decides exposure. The creative director's job is to know which standard applies, build to it, and say so in writing.

### 14.1 The standards map

| Standard | Version and date | Role |
|---|---|---|
| WCAG | 2.2, 5 October 2023 (updated 12 December 2024); ISO/IEC 40500:2025 | The technical reference behind almost every law below |
| EN 301 549 | V3.2.1 (2021), incorporating WCAG 2.1 AA for web (clause 9), documents (10) and software (11) | European harmonised standard for ICT; presumption of conformity under EU law. A revision aligned with WCAG 2.2 and the EAA was in preparation; its publication status was not verified for this file |
| Revised Section 508 standards | Published January 2017, in force 18 January 2018; incorporates WCAG 2.0 AA | US federal ICT procurement |
| ADA Title II web rule | Published 24 April 2024; WCAG 2.1 AA | US state and local government web and apps |
| GIGW (Guidelines for Indian Government Websites and Apps) | 3.0, 2023, MeitY and NIC; aligned with WCAG 2.1 AA | Indian government digital properties; cited by RPwD Rules |
| IS 17802 | Bureau of Indian Standards, 2021, parts 1 and 2; based on EN 301 549 | Indian ICT accessibility standard |
| PDF/UA | ISO 14289-1:2014 and ISO 14289-2:2024 | Accessible PDF (section 13.1) |
| VPAT | 2.5Rev, April 2025 (ITI) | Reporting format for conformance (section 16.5) |

### 14.2 By jurisdiction

| Jurisdiction | Law | Standard | Binds | What it means for Mask360 work |
|---|---|---|---|---|
| United States, private sector | Americans with Disabilities Act 1990, Title III (public accommodations) | No regulation; courts and settlements use WCAG 2.x AA | Businesses open to the public, including online sellers to US customers | Demand letters and suits against e-commerce and hospitality sites; see 14.5 |
| United States, public sector | ADA Title II rule (2024); Interim Final Rule published 20 April 2026 | WCAG 2.1 AA | State and local governments | Compliance dates extended to 26 April 2027 for entities serving 50,000 people or more and 26 April 2028 for smaller and special district governments (ada.gov, read October 2026) |
| United States, federal | Rehabilitation Act, Section 508 | WCAG 2.0 AA via the 2017 refresh | Federal agencies and what they buy | ACRs in procurement |
| European Union | European Accessibility Act, Directive (EU) 2019/882 | EN 301 549 (harmonised) | Products and services placed on the EU market, including by non-EU businesses | Applies from 28 June 2025; see 14.4 |
| European Union, public sector | Web Accessibility Directive (EU) 2016/2102 | EN 301 549 | Public sector websites and apps | Accessibility statements and monitoring |
| United Kingdom | Equality Act 2010 (duty to make reasonable adjustments, anticipatory for service providers); Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 | WCAG 2.2 AA for public sector monitoring since October 2024 | All service providers; public bodies for the regulations | UK customers of Indian and Gulf brands can bring claims |
| India | Rights of Persons with Disabilities Act 2016; RPwD Rules 2017; Supreme Court judgments of 2024 and 2025 | GIGW 3.0 and IS 17802 (WCAG 2.1 AA lineage) | Government and private service providers (section 46) | See 14.3 |
| UAE | Federal Law No. 29 of 2006 on the rights of people with special needs (amended by Federal Law No. 14 of 2009); Dubai Law No. 2 of 2014 | Federal government digital guidance references WCAG (26-platform-and-format-specs-2026.md records 2.1 AA; verify the current edition with TDRA before citing) | Government entities directly; private sector through licensing, procurement and the Dubai Universal Design Code (2017, built environment) | Government and semi-government clients (tourism boards, free zones, developers in partnership) set WCAG AA in tenders |
| Saudi Arabia | CRPD ratified 2008; the Authority for the Care of Persons with Disabilities oversees policy | Government digital standards from the Digital Government Authority reference WCAG; the version was not verified for this file | Government platforms; Vision 2030 programmes | Treat WCAG 2.2 AA as the safe floor for Riyadh work |
| Canada and Australia | Accessible Canada Act 2019 and Ontario's AODA (WCAG 2.0 AA); Australia's Disability Discrimination Act 1992 | WCAG | Federal and provincial entities; all service providers in Australia | Maguire v Sydney Organising Committee for the Olympic Games (2000), an early landmark, found the Sydney 2000 Olympics site discriminatory against a blind user |

### 14.3 India in detail

- The RPwD Act 2016 recognises 21 specified disabilities. Section 40 requires the government to set accessibility standards including for ICT; section 42 requires accessible audio, print and electronic media, naming audio description, sign language interpretation and close captioning; section 46 requires service providers, whether government or private, to provide services in line with the section 40 rules; section 89 sets fines of up to 10,000 rupees for a first contravention and 50,000 to 5 lakh rupees for later ones.
- Rule 15 of the RPwD Rules 2017 listed the standards (GIGW for websites). In Rajive Raturi v Union of India (8 November 2024) the Supreme Court held Rule 15 ultra vires to the extent it left accessibility to non-binding guidelines, and directed the Union to frame mandatory rules within three months; the status of the resulting rules was not verified for this file as of October 2026.
- In Amar Jain v Union of India (30 April 2025), decided with Pragya Prasun's petition, the Court held that digital access is part of the right to life under Article 21 and issued directions to make digital KYC usable by visually impaired people and acid attack survivors (liveness checks that require blinking or reading on-screen text had excluded them). Banking, fintech and any KYC-gated luxury service (private banking, high-value jewellery purchases with PAN verification) sit directly in its path.
- The Accessible India Campaign (Sugamya Bharat Abhiyan), launched on 3 December 2015, covers the built environment, transport and the ICT ecosystem.
- Practical exposure today is reputational and contractual more than litigious, but the trajectory since 2024 is toward mandatory, enforceable standards; brands building now should build to WCAG 2.2 AA so they do not rebuild later.

### 14.4 The European Accessibility Act in detail

The EAA required member states to transpose it by 28 June 2022 and to apply it from 28 June 2025. Services in scope include e-commerce, consumer banking, e-books, electronic communications, access to audiovisual media, and air, bus, rail and waterborne passenger transport services (websites, apps, ticketing); products include computers, smartphones, ATMs, ticketing and check-in machines, e-readers and consumer TV equipment. Microenterprises providing services (fewer than 10 employees and annual turnover or balance sheet total of no more than 2 million euros) are exempt. Service providers may keep using products lawfully in use before 28 June 2025 until 28 June 2030. Enforcement and penalties are national: Germany's implementing law (Barrierefreiheitsstärkungsgesetz, BFSG) allows fines of up to 100,000 euros. A Mumbai couture label or a Dubai perfume house selling online to customers in France or Germany is a service provider under the EAA whatever its headquarters.

### 14.5 Litigation trends

Volume: 3,117 website accessibility suits in US federal courts in 2025 (up 27 percent from 2,452 in 2024), 36 percent of 8,667 ADA Title III federal filings; New York 1,021, Florida 961, Illinois 585; California shows only 4 federal website suits because plaintiffs there mostly sue in state court (Seyfarth Shaw, 25 March 2026). Seyfarth's mid-2026 report shows overall Title III filings rising again. Targets: e-commerce, restaurants and hospitality, with fashion, beauty and jewellery brands common defendants in New York. Leading cases: National Federation of the Blind v Target (settled 2008 for 6 million US dollars); Robles v Domino's Pizza (Ninth Circuit, January 2019, holding the ADA applies to a website and app connected to physical stores; the Supreme Court declined review in October 2019). Defences that work: a site that is demonstrably accessible (Seyfarth reported in April 2026 a dismissal as moot on unrebutted evidence that the site was accessible), documented audits and remediation plans, an accessibility statement with a working contact route. Some states are acting against serial filings (Missouri passed a law in May 2026 to deter abusive website litigation). Defences that do not: accessibility overlays (section 16.7); the US Federal Trade Commission's 2025 settlement with accessiBe, which required a payment of 1 million US dollars, addressed claims that its AI widget could make any site compliant.

### 14.6 Procurement

US federal buyers ask for an ACR against Section 508; EU public buyers must include accessibility in technical specifications under Directive 2014/24/EU and use EN 301 549; Indian government sites follow GIGW with STQC (Standardisation Testing and Quality Certification) testing. Expect WCAG AA clauses in government, banking and enterprise contracts in all three markets. House practice: every digital product Mask360 builds ships with an ACR and an accessibility statement, whether or not the brief asks, because both are cheap at handover and expensive to reconstruct after a demand letter.

## 15. Inclusive design

### 15.1 Principles and the persona spectrum

Inclusive design is a method that designs with people who are excluded by current solutions, so that the result works for a wider range of people; accessibility is its measurable floor. Microsoft's Inclusive Design toolkit (2016, led by Kat Holmes, later the book Mismatch, MIT Press, 2018) sets three principles: recognise exclusion, learn from diversity, solve for one and extend to many. Its persona spectrum maps one ability across permanent, temporary and situational cases; the toolkit's own example for touch: about 26,000 people a year in the US lose an upper limb, 13 million have a temporary arm injury and 8 million are new parents holding a baby, so a one-handed design serves all three.

| Ability | Permanent | Temporary | Situational (Mask360 settings) |
|---|---|---|---|
| Touch | One arm | Arm in a cast | Holding a champagne flute at a launch; one hand on the rail of a Mumbai local |
| See | Blind | Cataract, dilated pupils | Noon glare at a Dubai beach club; a dim restaurant |
| Hear | Deaf | Ear infection | A sangeet, a club, a sound-off feed |
| Speak | Non-verbal | Laryngitis | A heavy accent for the voice assistant; a quiet library lounge |
| Cognition | Learning disability | Concussion, jet lag | Distraction, second language, a wedding planner's week |

The curb-cut effect (Angela Glover Blackwell, Stanford Social Innovation Review, 2017) names the pattern: features built for disabled people (pavement ramps, captions, OXO Good Grips handles designed by Sam Farber for his wife's arthritis in 1990) become what everyone prefers.

### 15.2 Co-design

"Nothing about us without us", the disability rights principle and the title of James Charlton's 1998 book, means disabled people take part as paid experts and co-designers from research to launch. Recruit through partner organisations: in India, Enable India (Bengaluru), Saksham (Delhi) and the accessibility consultancy BarrierBreak (Mumbai); in the UAE, the Zayed Higher Organisation for People of Determination (Abu Dhabi); internationally, platforms such as Fable. Pay at professional rates, include participants in concept testing (section 17), and credit them.

### 15.3 Designing for ageing

India will have about 347 million people over 60 by 2050 (section 1.1), and luxury customers are older than average. Ageing brings presbyopia, lower contrast sensitivity, slower reaction, reduced dexterity, hearing loss and lower familiarity with gesture conventions, usually in combination and without the person identifying as disabled. The design response: body text at 17 to 18 px with Lc 90 contrast, visible labels and text buttons beside icons, 48 px primary targets, no gesture-only actions, persistent navigation, a human contact in the same place on every page (3.2.6), generous timeouts, and confirmation emails that restate the booking in full.

### 15.4 Low literacy and low bandwidth

India's literacy rate was 77.7 percent for people aged 7 and over in the National Statistical Office survey of 2017 to 2018, with wide gaps by state, gender and age; many affluent customers' families, staff and drivers interact with a brand's channels too. Pair icons with words, offer voice input and short captioned video explanations, put the summary before the terms, and support the WhatsApp-first flows that Indian and Gulf customers already use. For bandwidth: design for a mid-range Android on a variable 4G signal (Core Web Vitals targets in 21-web-design-and-digital-craft.md, section 5); text and booking controls render before imagery; video loads on request with a poster; honour the `Save-Data: on` request header by serving lighter media; keep the core booking path working if scripts fail.

### 15.5 RTL and multiscript

Mark language and direction: `lang="ar"` with `dir="rtl"`, `lang="hi"` for Devanagari, `lang` on every mixed passage (3.1.2), so screen readers switch voice and pronunciation. Build layout with CSS logical properties (`margin-inline-start`, `padding-block`, `inset-inline-end`), so the mirror is automatic; mirror directional icons (back, forward, progress) and leave non-directional ones (play, clocks, checkmarks, brand marks) unmirrored. Isolate bidirectional fragments (a Latin product name or a phone number inside Arabic text) with `<bdi>` or `dir="auto"`. Never letter-space Arabic (it breaks joining); size Devanagari larger than Latin to match apparent size (03-typography.md, section 15). Test with Arabic and Hindi voices in VoiceOver, TalkBack and NVDA; translated `aria-label` strings must exist in each language.

### 15.6 Gender and names in forms

Ask for gender only where the service needs it (sizing, spa therapist preference, legal documents); offer "Prefer not to say" and a self-description field where law allows. India recognises transgender people in law (NALSA v Union of India, 2014; Transgender Persons (Protection of Rights) Act 2019); in the UAE and Saudi Arabia, fields tied to government ID follow the ID, and other gender fields are left out. Titles optional (Mr, Ms, Mx, Dr; Shri and Smt where the client's voice uses them). One "Full name" field where possible (W3C, Personal names around the world): single names are common in parts of India, Arabic names carry several elements (ism, nasab with bin or bint, nisba) and run long; no minimum lengths, no Latin-only validation, no forced first and last split.

### 15.7 Cultural inclusion in imagery

Represent the real range of the clients' guests: skin tones graded truthfully and never lightened (16-editing-colour-grading-and-delivery.md; India's fairness-cream history, including Hindustan Unilever's 2020 renaming of Fair and Lovely to Glow and Lovely, is why this is watched), age, body size, modesty norms in Gulf campaigns, and disability shown as ordinary life. Gucci Beauty's 2020 campaign with Ellie Goldstein and British Vogue's May 2023 issue show luxury doing it with authority. Cast through agencies that represent disabled talent (Zebedee Management in the UK is the reference), and avoid what Stella Young called "inspiration porn" in her 2014 TEDx talk: disabled people framed as uplift for a non-disabled audience.

## 16. Testing, tooling and audits

### 16.1 What automation finds

The positions. The UK Government Digital Service tested 13 automated tools in 2017 against a page seeded with 142 barriers; no single tool found more than about 40 percent, and 29 percent of barriers were found by none. Deque's 2021 study of about 13,000 pages and 300,000 issues reported that automated testing caught 57 percent of issues by volume, because the most frequent issues (contrast, missing alt, missing labels) are machine-detectable. Both are right about different things: automation catches the common issues, while practitioners commonly estimate that only about a third of the success criteria can be fully decided by a machine (keyboard behaviour, meaningful alt text, focus order, reading order, captions accuracy and cognitive load need a person). House rule: automation is the entry ticket; manual and assistive technology testing decide conformance.

### 16.2 Tools

| Tool | Maker | Stage | What it does |
|---|---|---|---|
| Stark | Stark | Design (Figma), browser | Contrast checks, vision simulation, focus order and alt text annotations, target size |
| Able, Contrast and similar Figma plugins | Community | Design | Quick contrast checks and simulations on selected layers |
| Include | eBay | Design (Figma) | Accessibility annotations: headings, landmarks, focus order, labels, for handoff |
| Axe for Designers | Deque | Design (Figma) | Contrast and annotation checks before handoff |
| axe DevTools | Deque | Build | Browser extension on the open-source axe-core engine (at version 4.14 as of October 2026, 07-design-systems-and-tokens.md, section 12.4) |
| Lighthouse | Google | Build | Accessibility score from a subset of axe rules; a score of 100 says nothing about conformance |
| WAVE | WebAIM | Build, QA | Visual overlay of errors, alerts and structure in the page |
| Accessibility Insights | Microsoft | QA | FastPass (automated plus tab stops) and Assessment, a guided manual test of all WCAG AA criteria |
| ARC Toolkit | TPGi | QA | Developer-focused automated and structure checks |
| Colour Contrast Analyser | TPGi | QA | Free desktop eyedropper for any pixel, including video frames and PDFs |
| Polypane | Polypane | Build, QA | Multi-viewport browser with an accessibility panel and emulation of vision deficiencies, reduced motion and forced colours |
| PAC | axes4 | Documents | PDF/UA and WCAG checks on PDFs |
| PEAT, Harding FPA | Trace Center; Harding | Video | Flash and pattern analysis (section 7.3) |
| Accessibility Inspector, Accessibility Scanner | Apple; Google | Mobile | Section 12.6 |

### 16.3 Audit methodology

W3C's WCAG-EM (Website Accessibility Conformance Evaluation Methodology 1.0, 2014) sets five steps: define the scope, explore the site, select a representative sample, audit the sample, report. The house sample for a luxury site: home, a category or listing page, a product or room page, the full booking or checkout flow, account and login, search, contact and enquiry forms, one long editorial page, one page with video, one PDF, the cookie banner and every modal, plus a random selection (WCAG-EM suggests a random sample of about 10 percent of the structured sample). Each page goes through automated scanning, keyboard, two screen readers (NVDA with Chrome; VoiceOver with Safari on iOS), zoom and reflow, text spacing, forced colours, reduced motion, contrast measurement of every text style, and a content review.

### 16.4 Report format

Per issue: ID; success criterion and level; page and component; severity (critical, serious, moderate, minor, as in axe); who is affected and how ("Screen reader users cannot tell which date is selected"); steps to reproduce; screenshot or recording; the fix with code; effort; owner; status. Above the issues: an executive summary in plain language, a criteria table using the VPAT terms (Supports, Partially Supports, Does Not Support, Not Applicable), and the three fixes that unblock the most people. Group issues by component so a fix lands once in the design system (07-design-systems-and-tokens.md, section 12).

### 16.5 VPAT and ACR

A VPAT (Voluntary Product Accessibility Template, the Information Technology Industry Council's format, current version 2.5Rev of April 2025) is the blank form; a completed one is an Accessibility Conformance Report (ACR). Four editions: 508, EU (EN 301 549), WCAG (2.2) and INT (all three). Each criterion gets a conformance level and remarks; "Not Evaluated" is allowed only for AAA criteria. An ACR is a disclosure; an honest "Partially Supports" with a remediation date protects a client better than an optimistic "Supports" that a plaintiff's tester disproves.

### 16.6 Continuous integration

axe-core in end-to-end tests (`@axe-core/playwright`, `cypress-axe`) and unit tests (`jest-axe`, Vitest with the Storybook accessibility addon), failing the build on critical and serious violations. Playwright's ARIA snapshot assertions (`toMatchAriaSnapshot`, added in version 1.49) to catch regressions in names, roles and structure. `pa11y-ci` or Lighthouse CI against a URL list on staging, with budgets. Contrast tests on the token file per theme (07-design-systems-and-tokens.md, section 12.4). A manual screen reader pass on the three main flows each quarter.

### 16.7 Overlays

Accessibility overlays are third-party scripts that claim to fix a site automatically with a toolbar or AI. They do not repair source code, often interfere with users' own assistive technology, and do not stop lawsuits; the Overlay Fact Sheet (2021), signed by hundreds of practitioners, documents the problems, and the FTC's 2025 settlement with accessiBe addressed their marketing claims. The house never sells or installs one, and advises clients to remove them.

### 16.8 Testing with disabled people

Audits find failures against a standard; sessions with disabled users find whether the booking can actually be completed. Five participants per profile (screen reader, magnification, voice or switch, cognitive) on the main task, recruited and paid as in section 15.2, once per major release.

## 17. Accessibility in the agency process

### 17.1 Where it enters

| Phase | What happens | Owner |
|---|---|---|
| Brief and scope | Standard written into the brief and contract: WCAG 2.2 AA plus house defaults and APCA targets; markets and legal exposure (US customers, EU sales under the EAA, Indian government work under GIGW); captions, audio description and transcripts budgeted | Account lead, CD |
| Research and strategy | Disabled participants in research; COGA personas; situational scenarios from 15.1 | Strategy, UX |
| Concept | Ideas checked for flashing, autoplay, sound-off reading, motion intensity and gesture-only mechanics before they are sold to the client | CD |
| Design | Contrast-tested tokens; focus, error, disabled and reduced-motion states designed; type sizes; target sizes; annotations for headings, landmarks, focus order, labels and alt text | Design |
| Copy and content | Alt text, labels, errors, link text, captions, AD scripts, transcripts | Copy (10-ux-writing-and-content-design.md) |
| Production | Captions and AD recorded; Harding or PEAT on every film | Producer, editor |
| Build | Semantic HTML, APG patterns, CI checks | Engineering |
| QA and launch | 15-minute test on every page, full audit on the sample, ACR and accessibility statement | QA, CD sign-off |
| After launch | Feedback route monitored; regression tests; quarterly manual pass; content editors trained on alt text and headings | Client team, retainer |

### 17.2 The client conversation

Lead with the client's own guest: the 62-year-old patron on an iPhone with large text; the father booking one-handed with a child on his hip; the Deaf bride watching the venue film. Then reach (one in six people, plus ageing), then quality (the same defects make work look cheap), then risk (section 14). The objections and the answers: "it will look worse" (the house standard is AA within the brand; the focus ring, captions and contrast are designed); "our customers are not disabled" (they are older, situationally impaired and wealthy enough to leave); "we will add it later" (retrofit costs more than building in, and WebAIM's 56.1 errors per home page show how few sites ever do).

### 17.3 Costs, retrofit and building in

Building in costs design and engineering time spread across the project, most of it absorbed by a design system that fixes each component once. Retrofitting means auditing, then fixing pages one at a time, often re-opening design decisions (a palette that fails contrast, a carousel that cannot be made keyboard-friendly) and re-shooting or re-cutting media (captions and AD added after the edit is locked cost more than when scripted). Price captioning, audio description and sign language from supplier quotes per project; the house does not quote a generic percentage uplift because published figures for it are not reliable.

### 17.4 Accessibility statement and roles

Every site ships with a statement page: the standard targeted, the conformance status, known limitations with dates for fixes, a contact route (email, phone, WhatsApp) answered within a stated time, and the date of the last audit. Roles: designers own contrast, focus, sizes, states and annotations; engineers own semantics, keyboard and ARIA; writers own alt text, labels and captions; producers own captions, AD and flash checks; QA owns the audit; the creative director signs off. Professional certification exists through the International Association of Accessibility Professionals (IAAP): CPACC (core competencies), WAS (Web Accessibility Specialist) and CPWA (both together).

## 18. Reference tables and pre-launch checklist

### 18.1 Thresholds

| Item | Value | Source |
|---|---|---|
| Text contrast | 4.5:1; large text 3:1 (24 px regular, 18.66 px bold); AAA 7:1 and 4.5:1 | 1.4.3, 1.4.6 |
| Non-text contrast | 3:1 for component boundaries, states, focus rings, meaningful icons | 1.4.11 |
| APCA (house) | Lc 90 preferred body, 75 body minimum, 60 secondary, 45 display, 30 any text, 15 dividers | APCA; section 3.4 |
| Resize and reflow | 200 percent text; 320 CSS px wide, 256 CSS px high | 1.4.4, 1.4.10 |
| Text spacing | Line height 1.5, paragraphs 2 times, letters 0.12 em, words 0.16 em | 1.4.12 |
| Targets | 24 px (AA); 44 px (AAA, house); Apple 44 pt; Material 48 dp; house primary 48 px, 8 px apart | 2.5.8, 2.5.5 |
| Focus indicator | Area of a 2 CSS px perimeter; 3:1 between focused and unfocused pixels | 2.4.13 |
| Flashing | At most 3 flashes per second; general threshold: 10 percent luminance change, darker state below 0.80, area 0.006 sr (about 341 by 256 px at 1024 by 768) | 2.3.1 |
| Auto-moving content and autoplay audio | Pause control beyond 5 seconds; audio control beyond 3 seconds | 2.2.2, 1.4.2 |
| Time limits | Adjustable to 10 times the default, or warn with at least 20 seconds to extend, at least 10 times; 20-hour exception | 2.2.1, 2.2.6 |
| Captions | 2 lines; 32 to 42 characters per line; 20 characters per second adult English, 17 children; five sixths of a second to 7 seconds | DCMP, BBC, Netflix |
| Reading level | Lower secondary education, or a supplement | 3.1.5 |
| Type | Web body 16 px minimum (house 17 to 18); 12 px floor; inputs 16 px; iOS body 17 pt default, 53 pt at AX5; Android to 200 percent | Section 8.4, 8.5 |
| Dyslexia-friendly text | 60 to 70 characters per line; line height 1.5; left aligned; no italics for emphasis | BDA Style Guide |
| Reduced motion | Translations under about 8 px; crossfades under about 200 ms; no parallax, zoom, autoplay | 12-motion-principles-and-ui-motion.md, section 11.3 |
| WCAG 2.2 size | 86 criteria; 55 for AA | W3C |
| State of the web | 95.9 percent of home pages fail; 56.1 errors per page; low contrast on 83.9 percent | WebAIM Million 2026 |

### 18.2 Pre-launch checklist

| Area | Check before launch |
|---|---|
| Structure | One `h1`; heading levels unbroken; landmarks present and named; `lang` and `dir` set, `lang` on mixed passages; descriptive `<title>` per page and per route change |
| Images and media | Alt text by kind on every image; decorative images `alt=""`; no images of text outside logotypes; captions accurate on every video; transcript linked; audio description or integrated description on brand films; Harding or PEAT report filed |
| Colour and type | Every text and component pair meets WCAG AA and the APCA target; no colour-only meaning; body type size and weight per section 3.4; dark mode and forced colours checked |
| Keyboard and focus | Skip link; every control reachable and operable; logical order; visible flame focus ring, unobscured by sticky elements; modals trap and return focus; no keyboard traps in embeds |
| Forms and authentication | Visible labels; `autocomplete` tokens; errors in text, linked to fields and announced; review step before payment; no repeated entry; paste allowed; OTP autofill; no puzzle CAPTCHA |
| Motion and time | Reduced motion honoured and a visible motion toggle on scroll narratives; no autoplay audio; pause on any moving content; extendable timers with warnings |
| Touch and pointer | Targets 44 px (24 px absolute floor); drag and gesture alternatives; actions on release; no orientation lock; pinch zoom allowed |
| Assistive technology | 15-minute test (section 6.3) passed on every page type; full audit on the sample; VoiceOver iOS and TalkBack on the booking or checkout flow |
| Documents and channels | PDFs tagged and checked in PAC, key content also in HTML; emails in live text with alt and `role="presentation"`; social alt text, camel case hashtags, burned-in captions |
| Handover | ACR completed; accessibility statement live with a contact route; issues logged by component; CI checks in place; client editors briefed on alt text, headings and captions |

## Terms introduced

- Accessibility Conformance Report (ACR): a completed VPAT stating how a product meets each accessibility criterion.
- Accessibility overlay: a third-party script claiming to make a site accessible automatically without changing its source.
- Accessibility statement: a public page stating the standard targeted, conformance status, known limitations and a contact route.
- Accessibility tree: the browser's structure of roles, names, states and values that assistive technology reads.
- Accessible name: the text assistive technology announces for an element, computed from labels, content or ARIA.
- APCA: Accessible Perceptual Contrast Algorithm, Andrew Somers' perceptual contrast model reporting Lc tied to size and weight.
- APG: the W3C ARIA Authoring Practices Guide, which documents widget patterns and their keyboard contracts.
- aria-activedescendant: an attribute that points from a focused container or input to the active child option without moving focus.
- Assertion (WCAG 3): a reported statement of organisational process, such as usability testing with disabled people.
- Audio description (AD): narration of visual information for blind and low-vision viewers, fitted into gaps in the soundtrack.
- Browse mode and focus mode: a screen reader's reading mode, where letters jump by element type, and its interaction mode, where keys go to the page.
- CART: Communication Access Realtime Translation, live human captioning displayed on screen.
- Closed captions: captions delivered as a separate track that viewers can turn on, off and restyle.
- COGA: the W3C Cognitive and Learning Disabilities Accessibility Task Force.
- Core requirement (WCAG 3): a requirement that must be met for conformance.
- Crowding: interference from adjacent letters that slows recognition, a factor in dyslexia.
- Curb-cut effect: the pattern by which features designed for disabled people benefit everyone.
- Deaf (capital D): people who identify with Deaf culture and use a sign language as their first language.
- Dynamic Type: Apple's system for user-selected text sizes, with seven standard and five accessibility sizes.
- EN 301 549: the European harmonised standard for ICT accessibility, incorporating WCAG for web content.
- European Accessibility Act (EAA): Directive (EU) 2019/882, applying accessibility requirements to products and services from 28 June 2025.
- Extended audio description: description that pauses the video when natural gaps are too short.
- Fitts's law: the model in which pointing time grows with distance and falls with target size.
- Focus trap: a behaviour that keeps keyboard focus cycling inside a component, correct only for modals.
- Forced colours mode: an operating system mode (Windows contrast themes) that replaces author colours with a user palette.
- General flash threshold: the WCAG luminance and area limit above which more than three flashes per second are prohibited.
- GIGW: Guidelines for Indian Government Websites and Apps, version 3.0 of 2023, aligned with WCAG 2.1 AA.
- Harding test: automated analysis of video for flashes and patterns against broadcast photosensitivity limits.
- Inclusive design: designing with excluded people so the result works for a wider range of people.
- Induction loop: a venue system that transmits sound directly to hearing aids set to the T position.
- Inert: the HTML attribute that removes a subtree from focus and the accessibility tree.
- Integrated description: voice-over written to carry a film's visual information, replacing a separate description track.
- IS 17802: the Bureau of Indian Standards' ICT accessibility standard, based on EN 301 549.
- Keyboard contract: the set of keys users expect a widget type to respond to.
- Landmark: a page region role (banner, navigation, main, complementary, contentinfo, search, form, region) used for navigation.
- Lc: lightness contrast, APCA's signed output value.
- Live region: an element whose content changes are announced by screen readers without moving focus.
- Low vision: vision that glasses cannot correct to normal, including reduced acuity, contrast sensitivity or field.
- Matterhorn Protocol: the PDF Association's list of checkpoints and failure conditions for PDF/UA.
- Open captions: captions burned into the picture, always visible.
- PDF/UA: ISO 14289, the standard for universally accessible PDF.
- Persona spectrum: Microsoft's mapping of one ability across permanent, temporary and situational limitations.
- Photosensitive epilepsy: epilepsy in which seizures are triggered by flashing light or regular patterns.
- POUR: WCAG's four principles: perceivable, operable, understandable, robust.
- Presbyopia: age-related loss of near focus, near universal from the mid-forties.
- Red flash threshold: the WCAG limit for flashes involving saturated red.
- Refreshable braille display: a device with a row of electronically raised pins that renders text as braille.
- Reporting tier (WCAG 3): one of six cumulative levels in the draft's reporting model, from avoiding physical harm to Gold.
- Roving tabindex: a technique giving a composite widget a single Tab stop and moving focus among its items with arrow keys.
- Screen magnifier: software that enlarges part of the screen for low-vision users.
- Screen reader: software that converts the accessibility tree into speech or braille and provides navigation commands.
- SDH: subtitles for the deaf and hard of hearing, adding speaker identification, sound and music to dialogue.
- Situational impairment: a temporary limit imposed by context, such as glare, noise or a busy hand.
- Skip link: the first focusable link on a page, jumping to the main content.
- Social model of disability: the view that disability arises from barriers in the designed environment.
- Success criterion (SC): a testable WCAG requirement with a conformance level.
- Supplemental requirement (WCAG 3): a requirement beyond conformance that counts toward higher reporting tiers.
- Switch access: operating a device with one or more switches that step through and select items.
- Tagged PDF: a PDF carrying a structure tree and reading order for assistive technology.
- Transcript: the full text of audio content with speakers, sounds and, for video, key visual information.
- Vestibular disorder: a dysfunction of the inner-ear balance system, which large on-screen motion can aggravate.
- View (WCAG 3): the content available in a viewport, including content reachable by scrolling or zooming.
- Visually hidden: CSS that removes content from view while keeping it in the accessibility tree.
- Voice control: operating a device by spoken commands that name visible labels or numbered overlays.
- VPAT: Voluntary Product Accessibility Template, the ITI reporting format (2.5Rev, April 2025).
- WAI-ARIA: the W3C vocabulary of roles, states and properties added to the accessibility tree.
- WCAG: Web Content Accessibility Guidelines, the W3C standard; version 2.2 is ISO/IEC 40500:2025.
- WCAG-EM: the W3C Website Accessibility Conformance Evaluation Methodology.

## Sources and further reading

Books
- Kat Holmes, Mismatch: How Inclusion Shapes Design, MIT Press, 2018.
- Sarah Horton and Whitney Quesenbery, A Web for Everyone, Rosenfeld Media, 2014.
- Laura Kalbag, Accessibility for Everyone, A Book Apart, 2017.
- Heydon Pickering, Inclusive Components, Smashing Magazine, 2019.
- Regine Gilbert, Inclusive Design for a Digital World, Apress, 2019.
- Manuel Matuzović, Web Accessibility Cookbook, O'Reilly, 2024.
- James I. Charlton, Nothing About Us Without Us, University of California Press, 1998.
- Val Head, Designing Interface Animation, Rosenfeld Media, 2016.

Specifications, standards and law
- W3C, WCAG 2.2 (Recommendation, 5 October 2023, updated 12 December 2024), https://www.w3.org/TR/WCAG22/ and Understanding WCAG 2.2, https://www.w3.org/WAI/WCAG22/Understanding/
- W3C, WCAG 3.0 Working Draft, 10 September 2026, https://www.w3.org/TR/wcag-3.0/
- W3C, WAI-ARIA 1.2, https://www.w3.org/TR/wai-aria-1.2/; ARIA Authoring Practices Guide, https://www.w3.org/WAI/ARIA/apg/; Using ARIA, https://www.w3.org/TR/using-aria/; Accessible Name and Description Computation 1.2, https://www.w3.org/TR/accname-1.2/
- W3C, Making Content Usable for People with Cognitive and Learning Disabilities (Working Group Note, 29 April 2021), https://www.w3.org/TR/coga-usable/
- W3C, WCAG-EM 1.0 (2014), https://www.w3.org/TR/WCAG-EM/; Personal names around the world, https://www.w3.org/International/questions/qa-personal-names
- Andrew Somers, APCA documentation and APCA in a Nutshell, https://github.com/Myndex/SAPC-APCA
- ETSI, EN 301 549 V3.2.1 (2021), https://www.etsi.org
- Directive (EU) 2019/882 (European Accessibility Act), https://eur-lex.europa.eu/eli/dir/2019/882/oj
- US Department of Justice, ADA Title II web and mobile rule and 2026 Interim Final Rule, https://www.ada.gov/resources/2024-03-08-web-rule/
- US Access Board, Revised Section 508 Standards, https://www.access-board.gov
- Government of India, Rights of Persons with Disabilities Act 2016, https://www.indiacode.nic.in; GIGW 3.0, https://guidelines.india.gov.in
- ISO 14289-1:2014 and ISO 14289-2:2024 (PDF/UA), https://www.iso.org; PDF Association, Matterhorn Protocol, https://pdfa.org
- Information Technology Industry Council, VPAT 2.5Rev (April 2025), https://www.itic.org/policy/accessibility/vpat
- Netflix, Timed Text Style Guide and Audio Description Style Guide, https://partnerhelp.netflixstudios.com; BBC Subtitle Guidelines, https://www.bbc.co.uk/accessibility; DCMP Captioning Key and Description Key, https://dcmp.org; ACB Audio Description Project, https://adp.acb.org
- Ofcom, guidance on flashing images and regular patterns in television, https://www.ofcom.org.uk; ITU-R Recommendation BT.1702
- Apple, Human Interface Guidelines: Accessibility, https://developer.apple.com/design/human-interface-guidelines/accessibility; Android Developers, Accessibility, https://developer.android.com/guide/topics/ui/accessibility; Microsoft Inclusive Design, https://inclusive.microsoft.design

Articles, reports and research
- WebAIM, The WebAIM Million (2026 report), https://webaim.org/projects/million/; Screen Reader User Survey 10, https://webaim.org/projects/screenreadersurvey10/
- Seyfarth Shaw, "Federal Court Website Accessibility Lawsuit Filings Bounce Back in 2025" (25 March 2026) and "2026 Mid-Year Report" (9 September 2026), https://www.adatitleiii.com
- Mehmet Duran, "What we found when we tested tools on the world's least-accessible webpage", GDS Accessibility blog, 2017, https://accessibility.blog.gov.uk
- Val Head, "Designing Safer Web Animation for Motion Sensitivity", A List Apart, 2015, https://alistapart.com
- Angela Glover Blackwell, "The Curb-Cut Effect", Stanford Social Innovation Review, 2017, https://ssir.org
- Luz Rello and Ricardo Baeza-Yates, "Good Fonts for Dyslexia", ASSETS 2013; Luz Rello, Martin Pielot and Mari-Carmen Marcos, "Make It Big!", CHI 2016; Jessica Wery and Jennifer Diliberto, Annals of Dyslexia, 2017; Sanne Kuster and colleagues, Annals of Dyslexia, 2018; Marco Zorzi and colleagues, PNAS, 2012
- Yuri Agrawal and colleagues, "Disorders of balance and vestibular function in US adults", Archives of Internal Medicine, 2009
- WHO, Global report on health equity for persons with disabilities (2022) and World report on vision (2019), https://www.who.int
- British Dyslexia Association, Dyslexia Style Guide, https://www.bdadyslexia.org.uk
- Overlay Fact Sheet, https://overlayfactsheet.com
