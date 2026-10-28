# UI design craft: components, states, platforms, polish

The screen-level craft of building interfaces that read as premium and work flawlessly: units, platforms, components, states, surfaces, motion hooks, tooling and the pre-ship audit. Verified as of October 2026. This file sits beneath the design-taste skill (taste, canon, currency, house layer) and never restates it; where a rule here touches taste it points to design-taste by name.

## Contents

1. [Screen fundamentals](#1-screen-fundamentals)
2. [Platform guidelines as of October 2026](#2-platform-guidelines-as-of-october-2026)
3. [Component anatomy and the state matrix](#3-component-anatomy-and-the-state-matrix)
4. [Buttons](#4-buttons)
5. [Forms](#5-forms)
6. [Navigation](#6-navigation)
7. [Lists, tables and data](#7-lists-tables-and-data)
8. [Cards](#8-cards)
9. [Overlays](#9-overlays)
10. [Feedback and status](#10-feedback-and-status)
11. [Iconography](#11-iconography)
12. [Surfaces, elevation and depth](#12-surfaces-elevation-and-depth)
13. [Corner radius systems](#13-corner-radius-systems)
14. [Imagery in UI](#14-imagery-in-ui)
15. [Dark mode craft](#15-dark-mode-craft)
16. [Responsive and adaptive UI](#16-responsive-and-adaptive-ui)
17. [Mobile patterns](#17-mobile-patterns)
18. [Microinteractions and motion in UI](#18-microinteractions-and-motion-in-ui)
19. [Premium UI craft details](#19-premium-ui-craft-details)
20. [Tools: Figma, Penpot, Sketch, handoff and design QA](#20-tools-figma-penpot-sketch-handoff-and-design-qa)
21. [Web app, native app and marketing site: different craft expectations](#21-web-app-native-app-and-marketing-site-different-craft-expectations)
22. [The UI polish checklist and the state audit method](#22-the-ui-polish-checklist-and-the-state-audit-method)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. Screen fundamentals

### 1.1 Units

- Physical pixel (px on a panel): one addressable light element. Never design in it; it varies 2x to 4x between devices showing the same layout.
- CSS pixel (px in a browser): the reference unit, defined by the CSS Values specification as 1/96 of an inch at arm's length; the browser maps it to physical pixels through the device pixel ratio (DPR), the number of physical pixels per CSS pixel. Every web spec value in this file (WCAG target sizes, stroke widths, breakpoints) is a CSS pixel.
- Point (pt, Apple): the logical unit on iOS, iPadOS and macOS. Every current iPhone renders at 3x (one point equals three physical pixels), every current iPad at 2x. Design at 1x in points; export raster assets at 2x and 3x.
- Density-independent pixel (dp, Android): the logical unit, defined by Android as roughly one physical pixel on a 160dpi screen. Conversion: px = dp x (dpi / 160). Android tells you never to hardcode that formula; the framework applies it.
- Scalable pixel (sp, Android): identical to dp until the user raises the system text size, then it scales with that preference. Use sp for text only; Android's documentation says never use sp for layout dimensions, because a layout that grows with text size breaks.
- Rem (CSS): relative to the root font size, 16px by default. Type, spacing and breakpoints in rem respect the user's browser font setting; borders and hairlines stay in px because a 1rem border is absurd.

### 1.2 Density buckets

| Android qualifier | Approximate dpi | Scale against mdpi | Apple equivalent | Asset export |
|---|---|---|---|---|
| ldpi | 120 | 0.75x | none | skip (obsolete) |
| mdpi | 160 | 1.0x | 1x (legacy) | 1x |
| hdpi | 240 | 1.5x | none | 1.5x |
| xhdpi | 320 | 2.0x | 2x (all iPads) | 2x |
| xxhdpi | 480 | 3.0x | 3x (all iPhones) | 3x |
| xxxhdpi | 640 | 4.0x | none | 4x (launcher icons only) |

The six primary densities follow a 3:4:6:8:12:16 ratio, which is why a 48dp touch target is 72px, 96px, 144px and 192px across buckets with no fractional pixels. Export vector (SVG, PDF) wherever possible and raster only for photography; a raster icon exported at 2x and shown at 3x is visibly soft.

### 1.3 Logical and physical resolution: current viewports as of October 2026

Logical widths are what you design to. Physical widths matter for asset export and for hairline rendering (see section 19).

| Device | Logical size (portrait) | Native pixels | Scale | Note |
|---|---|---|---|---|
| iPhone 16e | 390 x 844 pt | 1170 x 2532 | 3x | the budget iPhone, notch, no Dynamic Island |
| iPhone 16 | 393 x 852 pt | 1179 x 2556 | 3x | |
| iPhone 17 and 17 Pro | 402 x 874 pt | 1206 x 2622 | 3x | 6.3 inch, 460 ppi |
| iPhone Air | 420 x 912 pt | 1260 x 2736 | 3x | 6.5 inch |
| iPhone 17 Pro Max | 440 x 956 pt | 1320 x 2868 | 3x | 6.9 inch |
| iPhone 18 Pro and 18 Pro Max | 402 x 874 pt and 440 x 956 pt | 1206 x 2622 and 1320 x 2868 | 3x | same logical sizes as the 17 Pro pair (ios-resolution.com listing, October 2026) |
| iPhone Duo (fold), outer | 466 x 678 pt | 1398 x 2034 | 3x | Figma added iPhone Duo and iPhone 18 frame presets on 23 October 2026 |
| iPhone Duo (fold), inner | 626 x 890 pt | 1878 x 2670 | 3x | a tablet-class width in the hand; design the inner display with the medium window size class rules of section 16 |
| iPad mini (7th gen) | 744 x 1133 pt | 1488 x 2266 | 2x | |
| iPad (11th gen) and iPad Air 11 | 820 x 1180 pt | 1640 x 2360 | 2x | |
| iPad Pro 11 (M4, M5) | 834 x 1210 pt | 1668 x 2420 | 2x | |
| iPad Air 13 | 1024 x 1366 pt | 2048 x 2732 | 2x | |
| iPad Pro 13 (M4, M5) | 1032 x 1376 pt | 2064 x 2752 | 2x | |
| Pixel 10 | about 412 x 923 dp | 1080 x 2424 | 2.625x (420dpi bucket) | 6.3 inch, 422 ppi; 412dp is the de facto Android design width |
| Galaxy S25 | about 384 to 412 dp wide | 1080 x 2340 | 2.6x to 2.8x depending on the user's display size setting | 6.2 inch |
| Desktop design artboards | 1440 x 900 and 1920 x 1080 | varies | 1x or 2x | 1440 covers scaled MacBook displays and most laptops; 1920 x 1080 has led StatCounter's desktop resolution share for years; 1536 x 864 and 1366 x 768 follow (Windows laptops at 125 per cent scaling) |

Rules that follow from the table:
- Design mobile at 390 or 402pt wide and check at 360dp (the floor for cheap Android still common in India, where sub-15,000 rupee phones ship 720 x 1600 panels at 2x, giving 360 x 800dp) and at 440pt. Anything that only works at 393 is untested.
- The iPhone 17 family's 402pt width replaced the 393 of the 15 and 16; a 3-column product grid with 16pt gutters gains 3pt per column. Nothing to do, unless columns were hard-coded.
- Android has no single width. Build on the window size classes (section 16) rather than device names.

### 1.4 Safe areas, status bar, Dynamic Island, home indicator

Safe area: the region of the screen not covered by system UI (status bar, Dynamic Island, home indicator, rounded corners). Apple exposes it as `safeAreaInsets`; the web exposes it as `env(safe-area-inset-top)` and siblings, which only report non-zero values when the page sets `viewport-fit=cover` in its viewport meta tag.

| Model | Status bar | Top inset (portrait) | Bottom inset (portrait) | Landscape insets (top / bottom / sides) |
|---|---|---|---|---|
| iPhone 17, 17 Pro, 17 Pro Max | 54 pt | 62 pt | 34 pt | 20 / 20 / 62 pt |
| iPhone Air | 54 pt | 68 pt | 34 pt | 20 / 29 / 68 pt |

- The 34pt bottom inset is the home indicator zone. Fixed bottom bars sit above it and extend their background through it (`padding-bottom: env(safe-area-inset-bottom)`), otherwise content scrolls behind a bar that stops 34pt short of the glass.
- The Dynamic Island occupies the status bar region; the 62pt top inset already clears it. Never place tappable UI in the inset; never rely on content showing through it.
- Android edge-to-edge: since Android 15 (API 35), apps targeting API 35 or higher draw behind the system bars by default and must handle `WindowInsets` themselves; a bottom navigation bar that ignores the gesture navigation inset (about 48dp on three-button navigation, about 24dp on gesture navigation) overlaps the system handle.
- On the web, test in iOS Safari with the toolbar both expanded and collapsed, since the bottom inset interacts with the address bar.

### 1.5 Viewport units and the 100vh problem

The viewport is the visible area of a page. Mobile browsers have two: a large viewport with the browser toolbars retracted and a small one with them expanded. CSS Values 4 added three unit families to address this; MDN's definitions as of October 2026:

| Unit | Meaning | Stability | Use |
|---|---|---|---|
| vh | the large viewport (equivalent to lvh in every current browser) | fixed | legacy fallback |
| svh (small viewport height) | the viewport with browser UI expanded | fixed | full-height heroes that must never be cut off |
| lvh (large viewport height) | the viewport with browser UI retracted | fixed | content allowed to hide under the toolbar |
| dvh (dynamic viewport height) | the current visible height, changing as toolbars move | unstable; resizes during scroll | bottom-anchored controls, chat composers, sheets |

The 100vh problem: a hero set to `height: 100vh` on iOS Safari measures the large viewport, so with the address bar shown its bottom 60 to 100px sit under the toolbar, cutting off a call to action. The fix as of 2026 is `min-height: 100svh` for heroes and `height: 100dvh` for app shells, with `100vh` declared on the line above as the fallback. MDN warns that dvh resizes content while the user scrolls and can cost performance; do not animate layout on dvh. The old `-webkit-fill-available` hack is obsolete where svh is supported (Safari 15.4, Firefox 101 and Chrome 108, all shipping in 2022).

## 2. Platform guidelines as of October 2026

### 2.1 Apple Human Interface Guidelines and Liquid Glass

Liquid Glass is Apple's system material introduced at WWDC on 9 June 2025 and shipped in iOS 26, iPadOS 26, macOS 26 and the other 26 releases that September; it is the system material of the current OS generation. From the "Meet Liquid Glass" session (WWDC25 session 219):

| Aspect | What changed | Rule |
|---|---|---|
| Variants | Regular (adaptive, legible over anything) and Clear (permanently more transparent, needs a dimming layer) | "They should never be mixed." Clear only when the element sits over media-rich content, the dimming layer does not harm the content, and what sits on the glass is bold and bright |
| Layer | Glass belongs to the navigation layer floating above content | "Liquid Glass is best reserved for the navigation layer. Avoid putting glass in the content layer." A table or card made of glass muddies hierarchy |
| Stacking | Glass on glass is forbidden | "always avoid glass on glass"; elements on glass use fills, transparency and vibrancy so they read as a thin overlay |
| Tab bars and nav bars | Float as inset capsules, adapt to what scrolls beneath, flip light to dark by background; tab bars can shrink while scrolling and expand near the top; search often sits as a separate circular control | Keep 3 to 5 tabs; do not fight the shrink behaviour with a custom bar |
| Toolbars | Controls float; a menu from a toolbar button morphs out of the same glass | One floating plane; "Liquid Glass dynamically morphs between the controls in each context" |
| Sidebars and menus | Adapt to context; do not flip light and dark (surface too large, the flip would distract) | |
| Tinting | For primary actions only | "Avoid tinting all your elements. When every element is tinted, nothing stands out." Put colour into the content layer instead |
| Legibility | Symbols flip light and dark mirroring the glass; localised dimming for small footprints; avoid content intersecting glass in steady states | Reposition or scale content to keep separation at launch |
| Accessibility | Reduce Transparency makes glass frostier; Increase Contrast makes elements predominantly black or white with a contrasting border; Reduce Motion disables elastic properties | Automatic when the system material is used; custom glass gets none of it, which is the argument against faking it |
| App icons | 1024px canvas kept; rounder, more evenly spaced grid; layered background plus foreground; modes: light, dark, monochrome glass (light or dark) and two tints (dark tint colours the foreground, light tint infuses the glass) | Build in Icon Composer. Legacy icons get auto-masked and lose their drop shadows; Apple says redraw rather than rely on the auto adjustment |

What it means for a luxury brand app: glass is the system's, not the brand's. Own the content layer (type, imagery, colour) and let the navigation layer be system glass. A custom "glass" card inside content reads as the cheap tell design-taste lists under materials, and it loses the accessibility behaviour listed above.

### 2.2 Material 3 and Material 3 Expressive

Material 3 (M3) is Google's design system; Material 3 Expressive is its 2025 extension, announced at The Android Show on 13 May 2025, rolled to Pixel with Android 16 QPR1 in September 2025, and stable in Jetpack Compose Material 3 1.4.0 on 24 September 2025. Google's published research base: 46 studies, over 18,000 participants, three years from 2022; key elements spotted up to four times faster in expressive layouts across 10 apps; 87 per cent preference among 18 to 24 year olds; users over 45 spotted key elements as quickly as younger users; a strong minority preferred calmer designs.

| System element | Material 3 | Material 3 Expressive additions |
|---|---|---|
| Shape tokens | extra small 4dp, small 8dp, medium 12dp, large 16dp, extra large 28dp, full | large increased 20dp, extra large increased 32dp, extra extra large 48dp; 35 named `MaterialShapes` (Circle, Square, Slanted, Arch, Fan, Arrow, SemiCircle, Oval, Pill, Triangle, Diamond, ClamShell, Pentagon, Gem, Sunny, VerySunny, five Cookies, Ghostish, two Clovers, Burst, SoftBurst, Boom, SoftBoom, Flower, Puffy, PuffyDiamond, PixelCircle, PixelTriangle, Bun, Heart) that morph between each other |
| Motion | duration and easing tokens | spring-based `MotionScheme` with six specs: default, fast and slow spatial (position, size) and default, fast and slow effects (colour, opacity); `MotionScheme.standard()` and `MotionScheme.expressive()`; spatial springs may overshoot, effects springs never do |
| Colour | tonal palettes, roles (primary, on-primary, container, surface tiers) and dynamic colour from the wallpaper | a third accent role, more token variants, richer dynamic palettes, higher-contrast containment |
| Components | the standard set | button groups (connected and standard, overflow into a menu), split button, FAB menu, floating toolbar (horizontal and vertical, with scroll behaviour), loading indicator (shape-morphing), wavy progress indicators, flexible top app bars |
| Type | the M3 scale | emphasised styles for display and headline roles |

House position: Expressive is a consumer-app language. For Mask360's clients (hospitality, jewellery, real estate) the shape library and spring overshoot read playful; use the motion scheme's standard variant and the 12 to 16dp shape range, and keep Expressive's bolder containment only where a younger audience is the brief. Where a client's product runs on Android, M3 components are the floor; the brand look lives in colour roles, type and imagery.

### 2.3 Fluent 2

Fluent 2 is Microsoft's cross-platform system (Windows, web, macOS, iOS, Android). Its four published principles: natural on every platform (native components reused "80 per cent of the time"), built for focus, one for all, unmistakably Microsoft. Values that matter when a client is on Microsoft surfaces:

- Type: Segoe UI Variable on Windows (Caption 12/16, Body 14/20, Subtitle 20/28, Title 28/36, Large Title 40/52, Display 68/92, all px); on web Segoe UI with a 16-step ramp from Caption 2 at 10/14 to Display at 68/92; on macOS and iOS San Francisco; on Android Roboto.
- Radius tokens (web): 2, 4, 6, 8, 12, 16, 24, 32, 40px and circular (10000px).
- Elevation: a shadow ramp named by blur, 2, 4, 8, 16, 28, 64, each built from a key shadow (sharp, directional, defines the edge) plus an ambient shadow (soft, implies distance); light mode opacity 14 per cent on the low ramp, dark mode key shadow 28 per cent; the Windows platform replaces key shadows with strokes.
- Shadows on coloured surfaces: opacity derived from luminosity, with Shadow 1 at round(42 minus 0.116 x luminosity) and Shadow 2 at round(34 minus 0.09 x luminosity).

### 2.4 Web conventions

The web has no owner. Its conventions come from browser defaults, WCAG and what the top 1,000 sites train users to expect: links distinguishable from text (colour alone fails WCAG 1.4.1), form controls that honour the system keyboard, back button that always works, focus visible on Tab, the logo top-left linking home, search top-right, scroll that never gets hijacked. Browser-native controls (date inputs, selects, dialogs via `<dialog>`, popovers via the `popover` attribute, `<details>`) cost nothing in accessibility and should be the default until the brand look demands a custom control, at which point the custom control must reproduce every keyboard and screen reader behaviour the native one had.

### 2.5 When to follow the platform and when to own the brand look

| Surface | Follow the platform | Own the brand |
|---|---|---|
| Navigation chrome (tab bars, nav bars, back, sheets, pickers) | always: it carries the OS behaviours, accessibility settings and user memory | never in structure; brand in colour role and iconography only |
| Content layer (cards, lists, product pages, editorial) | the layout grammar (lists, grids) | type, colour, imagery, spacing: this is where luxury is read |
| Inputs and forms | keyboards, autofill, validation timing | label style, field shape, focus colour |
| Marketing site | nothing is native; the brand owns everything | everything, within WCAG |
| Checkout and payments | wallet sheets (Apple Pay, Google Pay, UPI intent) exactly as the platform draws them | the review step |

A client asking for "iOS feel on Android" is asking for a worse Android app; the correct answer is one brand system expressed through two component vocabularies.

### 2.6 Cross-platform consistency rules

1. Same information architecture and same words on every platform; different navigation containers (tab bar on iOS, navigation bar on Android, sidebar on desktop).
2. Same colour roles and type scale by role name (display, headline, body, label), with platform-native families where the brand face is unavailable or unlicensed for the platform.
3. Same iconography metaphors; platform-native glyphs for system actions (share, back, more).
4. Same motion intent and timing budget (see sibling file 12, motion); platform-native easing curves.
5. Same empty, error and loading content; platform-native spinners and progress.
6. Test on both platforms with the same scenario script; a discrepancy in flow is a bug, a discrepancy in chrome is correct.

## 3. Component anatomy and the state matrix

### 3.1 Anatomy

Every component is named as parts before it is drawn: container, leading element (icon, avatar, checkbox), label, supporting text, trailing element (chevron, badge, action), divider, state layer, focus ring. Naming parts first means tokens can target them (`button.label.color`, `button.container.radius`) and the state matrix below can list what each state changes per part. Material's component pages model this well; copy the practice, not their values.

### 3.2 The state matrix

State: a named condition of a component that changes its appearance or behaviour. A component is finished only when every applicable state is designed and reviewed against this matrix. Minimum visible differences are house values with reasons; timings are house defaults, with the full motion numbers in sibling file 12.

| State | Trigger | What must change (minimum) | Minimum visible difference | Transition |
|---|---|---|---|---|
| default | none | the resting design | | |
| hover | pointer over (fine pointers only; never on touch) | container tone or state layer | state layer at 8 per cent of the content colour (Material 3 value), or a lightness shift of 4 to 6 per cent; cursor pointer on links and buttons | 100 to 150ms ease-out in, 150 to 200ms out |
| focus | element receives focus by any means | nothing visible for pointer focus | | |
| focus-visible | keyboard or assistive focus | a ring outside the container | 2px ring, 2px offset, 3:1 contrast against adjacent colours (WCAG 1.4.11), a 3:1 change against the unfocused state (WCAG 2.4.13, AAA); never remove `outline` without a replacement | 0ms: focus must be instant to track keyboard movement |
| active and pressed | pointer or finger down | container darkens or scales | state layer at 10 per cent (Material 3), optional scale 0.97 to 0.98 on cards and chips; a tactile cue on native (section 17) | 50 to 80ms in, 150 to 200ms release |
| disabled | not available | content and container fade; pointer events off; still readable | content at 38 per cent opacity, container at 10 to 12 per cent (Material 3: Compose's filled button tokens use 0.10 for the container, 0.38 for label and icon); cursor `not-allowed` only when the control is visible and useless, otherwise hide it | 150ms |
| loading | async in flight | spinner replaces or joins the label; width locked | label hidden with `visibility`, width preserved to stop layout shift; control inert | spinner appears after 100 to 300ms delay to avoid flashing on fast responses |
| selected | item chosen in a set | container or edge tint plus a check or filled icon | state layer at 12 to 16 per cent or a primary container fill; never colour alone (WCAG 1.4.1) | 150ms |
| checked | boolean on | the check or thumb moves and the fill changes | fill plus glyph | 150 to 200ms |
| indeterminate | mixed children or unknown | a dash in a checkbox, a sweeping bar in progress | distinct from checked and unchecked | |
| error | validation failed | border, helper text, icon | border colour plus a message plus an icon; 3:1 border contrast | 150ms; shake animations are a cheap tell |
| warning | risky but allowed | amber accent plus text | | |
| success | completed | green accent plus text or check | confirm and get out of the way; no confetti | |
| read-only | shows a value that cannot be edited here | no border or a dashed one; text at full contrast; copyable | must look different from disabled (full contrast) | |
| empty | no data | a message and an action (section 10) | | |
| skeleton | first load | grey blocks in the final layout | NN/g: title the thickest line, thinner for body, big blocks for images; shimmer optional | minimum display 300 to 500ms to avoid a flicker when data arrives fast |
| dragged | being moved | lifted shadow and a state layer | state layer at 16 per cent (Material 3), elevation up one level | follows the pointer with no easing |

### 3.3 State layering

State layer: a translucent overlay in the content colour placed over the container to express hover, focus, pressed and dragged without a separate colour token per state. Material 3's published values, confirmed in the Compose source (`StateTokens.kt`): hover 0.08, focus 0.10, pressed 0.10, dragged 0.16. Only one state layer applies at a time; pressed wins over hover, focus-visible draws a ring rather than a layer when the keyboard is in use. The method works in both modes because the layer uses the content colour (dark text over light, light text over dark). The house uses the same four values on white and on `#0A0A0A` decks, which is why a single `--state-layer` token suffices.

## 4. Buttons

### 4.1 Hierarchy

| Level | Look | Use | Count per view |
|---|---|---|---|
| primary | filled, brand ink or flame | the one action the view exists for | one |
| secondary | outlined or tonal | the alternative path | one or two |
| tertiary | text only, label colour | low-emphasis actions in groups and toolbars | any |
| ghost | text, neutral, visible on hover | dense toolbars and tables | any |
| destructive | red filled (confirmation step) or red text (in menus) | delete, cancel subscription, remove payment method | one, and never adjacent to primary at equal weight |
| link | underlined inline text | navigation inside copy; never for actions | any |

The one-primary-per-view rule exists because the primary button's job is to answer "what do I do here"; two answers equal none. Dialogs with "Save" and "Discard" give Save the primary and Discard the tertiary.

### 4.2 Sizes, heights, padding

| Size | Height | Horizontal padding | Label | Icon | Gap | Where |
|---|---|---|---|---|---|---|
| small | 32px | 12px | 13 to 14px, 500 | 16px | 6px | tables, dense desktop tools |
| medium | 40px | 16px | 14px, 500 | 18 to 20px | 8px | default desktop and web |
| large | 48px | 20 to 24px | 15 to 16px, 500 | 20px | 8px | mobile primary, forms, checkout |

Padding ratio: horizontal padding equals 1.5x to 2x the vertical padding, because a label's cap height occupies less of the box than its width and the eye reads equal optical margins only when the sides are wider. Icon-only buttons are square at the same heights; a 40px icon button holds a 20px icon with 10px on each side. Minimum width for a text button: 64px, so "OK" and "Cancel" do not become stubs.

### 4.3 Labels

- Verb plus object: "Save changes", "Add to bag", "Book a viewing", "Send enquiry". "Submit" and "OK" tell the user nothing about the consequence.
- Sentence case (house rule), no full stop, no exclamation mark, 1 to 3 words. "Confirm booking for 2 nights" is a label that removes the need for a confirmation dialog.
- Match the button to the sentence the user is completing: a dialog asking "Delete this listing?" has buttons "Delete listing" and "Keep listing"; "Yes" and "No" force a re-read of the question.
- Bilingual: Hindi and Arabic labels run 20 to 40 per cent longer or shorter; design the medium button to survive a 30 per cent longer label without wrapping; never truncate a button label.

### 4.4 Icon placement, loading, groups

- Leading icon clarifies the verb (plus for add, arrow-up-right for external). Trailing icon only for disclosure (chevron down for a menu, arrow for "next step"). Never both.
- Loading: keep the width, swap the label for a 16 to 20px spinner (or prefix the spinner and keep the label when the wait exceeds about 2 seconds), set `aria-busy`, disable repeat taps. Changing the label to "Saving..." is acceptable; shrinking the button is a defect.
- Button groups: segmented (connected, shared border) for mutually exclusive views; spaced 8 to 12px for independent actions; right-aligned in dialogs on desktop with the primary at the far right (macOS and web) and stacked full-width on mobile with the primary on top.
- Touch targets: Apple HIG 44 x 44pt, Material 48 x 48dp, WCAG 2.2 success criterion 2.5.8 (AA) 24 x 24 CSS px minimum with a spacing exception (a 24px circle centred on each target must not intersect another target), and 2.5.5 (AAA) 44 x 44. The house minimum is 44 on every platform; a 32px small button gets 6px of invisible hit area each side via padding or a pseudo-element.

## 5. Forms

### 5.1 Labels

Top-aligned labels win. Matteo Penzo's 2006 eye-tracking study (UXmatters) found labels above fields produced the fastest completion; the label-to-field saccade took about 50ms, roughly ten times faster than left-aligned labels beside fields; right-aligned labels beside fields came second. Top alignment also survives localisation (long Hindi or Arabic labels) and narrow viewports with no change of layout. Left-aligned labels beside fields earn their place only in dense desktop admin forms where vertical space is the constraint and the labels are short.

- Label: 13 to 14px, weight 500, 6 to 8px above the field, colour at full text contrast.
- Help text: 12 to 13px, below the field, persistent, secondary colour at 4.5:1 or better.
- Required and optional: mark the minority. In a form where most fields are required, mark optional fields "(optional)" in the label; an asterisk legend is a convention users read correctly only when there are few asterisks. Baymard's 2024 checkout benchmark: the average flow carried 11.3 fields (down from 12.7 in 2019), most sites need only 8, and 17 per cent of users had abandoned a checkout because of complexity; the recommendation is to hide optional fields (company, second phone, address line 2, coupon code) behind a link.

### 5.2 Placeholder misuse

Placeholder text: hint text inside an empty field that disappears on input. NN/g's guidelines on why it harms: it strains short-term memory once it vanishes; filled fields are easy to mistake for empty ones and empty fields are where the eye goes, so users skip placeholder-only fields or take the hint for a default value; errors cannot be checked against a hint that is gone; keyboard users tab past it; the default light grey fails contrast; some screen readers do not read it. Rule: a label outside the field always; a placeholder only for a format example ("DD/MM/YYYY", "+91 98XXX XXXXX") and never as the only label. Floating labels (label starts inside the field and moves up on focus) are better than placeholder-only and worse than a fixed top label; the house uses fixed labels.

### 5.3 Validation timing and errors

Luke Wroblewski and Etre's 2009 study of inline validation reported a 22 per cent rise in completion success, a 22 per cent fall in errors, a 31 per cent rise in satisfaction, a 42 per cent fall in completion time and a 47 per cent fall in eye fixations against after-submit validation. The timing that produced those gains: validate after the user leaves the field (on blur), never while typing, and after the first error show the field recovering live (so the red clears as soon as the fix is typed). NN/g's error guidelines add: show the error next to the field, in text that says what to do ("Enter the 10-digit mobile number without the country code"), with an icon and colour, never colour alone; a summary at the top of a long form supplements the inline messages and never replaces them. On submit, focus the first invalid field and announce the count to screen readers (`role="alert"` or `aria-live="polite"`).

Error placement: below the field, replacing the help text, 12 to 13px, error colour at 4.5:1 for the text and 3:1 for the border, a 16px icon leading the message.

### 5.4 Input types, keyboards, autofill

| Data | Element and attributes | Reason |
|---|---|---|
| mobile number | `type="tel" inputmode="tel" autocomplete="tel"` | numeric keypad with +, autofill from contacts |
| email | `type="email" autocomplete="email"` | keyboard with @ and .; native format check |
| OTP | `inputmode="numeric" autocomplete="one-time-code"` | iOS and Android offer the SMS code above the keyboard; critical for Indian flows where OTP is the password |
| amount | `inputmode="decimal"` with a text type, never `type="number"` | number inputs allow e and scroll-change values; decimal keypad is what people want |
| PIN code, card number | `inputmode="numeric" autocomplete="postal-code"` or `cc-number`, `cc-exp`, `cc-csc` | the browser's card autofill needs the tokens to work |
| name and address | `autocomplete="given-name"`, `family-name`, `street-address`, `address-level2` (city), `address-level1` (state or emirate), `country` | one tap autofill of the whole block |
| passwords | `autocomplete="new-password"` on sign-up, `current-password` on sign-in | password managers behave correctly only with the tokens |
| dates | native `type="date"` on mobile; a custom picker on desktop only when range selection is the task | the native picker is the fastest and most accessible on phones |

### 5.5 Masks and formatting

- Phone: India is +91 and 10 digits, written 98XXX XXXXX (5 plus 5); UAE is +971 and 9 digits, written 5X XXX XXXX. Format as the user types, store E.164 (`+919812345678`), never block paste.
- Rupee amounts: Indian grouping is 2-2-3 (1,00,000 and 12,34,567), produced by `Intl.NumberFormat('en-IN')`; `en-US` grouping (1,000,000) on an Indian price list reads as foreign. Rupee sign ₹ (U+20B9) before the figure with no space. Crore and lakh in display copy for real estate ("₹4.5 Cr") with the full figure in a tooltip or beneath.
- Dirham: "AED 1,250" in English UI (the ISO code before the figure is the common bank and e-commerce convention in the UAE), Western digits by default, Eastern Arabic digits only when the locale is Arabic and the client's style guide asks for them; prices in Arabic UI keep left-to-right digit order inside right-to-left text, which the browser handles if the number is in its own element.
- Card numbers: 4-4-4-4 spacing as typed, brand icon detected from the first digits, 16 digits (19 for some Maestro), tabular figures.
- Dates: DD/MM/YYYY in both India and the UAE; never MM/DD. Show the format in help text.
- Identifiers: PAN (ABCDE1234F), GSTIN (15 characters), Emirates ID (784-YYYY-NNNNNNN-C); mask as the user types and validate the check digit where one exists.

### 5.6 Choosing the control by option count

| Options | Control | Reason |
|---|---|---|
| 2 (on or off) | switch (immediate effect) or checkbox (takes effect on save) | a switch that needs a Save button is a lie |
| 2 to 5, mutually exclusive, all visible | segmented control (short labels) or radio group (longer labels) | the user sees every option without a tap |
| 2 to 7, multiple allowed | checkbox group or filter chips | |
| 6 to 15 | select (native on mobile) | a radio list of 12 is a wall |
| 16 or more | searchable combobox with type-ahead | a country or city list needs search |
| numeric with a small range | stepper (quantity 1 to 10, guests 1 to 8) | |
| numeric with a wide range | text input with `inputmode="decimal"` plus a slider only when the exact value does not matter (price filter) | sliders are imprecise on touch |

### 5.7 Date pickers, file upload, steppers

- Date picker: show two months on desktop for ranges (hotel check-in and check-out), one month on mobile with vertical scroll; disable unavailable dates with 38 per cent opacity plus a strike or a dot, never colour alone; show the selected range as a connected band; always allow typing.
- File upload: drag-and-drop zone on desktop plus a Browse button; on mobile a button opens camera or files. Show the accepted types and size limit before the user picks ("JPG or PNG, up to 10 MB"), a thumbnail with a progress bar during upload, and a remove action after. Multiple files list in order added.
- Stepper: minus, value, plus; 44px targets; the value editable by typing; disable minus at the minimum rather than hiding it.

### 5.8 Multi-step forms

Split when a form exceeds about 8 fields or mixes topics (details, address, payment). Show a progress indicator with step names, never just "Step 2 of 5"; allow back without data loss; persist drafts; put the review step before the final commit; one column, one question per screen on mobile when the questions are heavy (KYC, mortgage pre-qualification). Form length evidence: Baymard's numbers above; every field removed from a checkout is measurable in completion.

## 6. Navigation

### 6.1 Tab bars and navigation bars

- 3 to 5 destinations (Apple HIG for tab bars; Material 3 for the navigation bar). Two is a segmented control, six is a drawer.
- Icon plus label always; icon-only tab bars test worse because icons are ambiguous (NN/g "Icon Usability", 2014). The label is 10 to 12pt, sentence case, one word where possible.
- The selected tab shows a filled icon variant plus the primary colour; unselected shows the outlined variant at secondary contrast.
- Tapping the active tab scrolls to top or pops to root; tapping twice does nothing new.
- iOS 26 tab bars float as glass capsules and can shrink on scroll; do not rebuild them.

### 6.2 App bars and sidebars

- App bar (top): title at the left (Android) or centred (iOS, except large titles which are left), one or two actions at the right, overflow in a menu at three or more. Large titles collapse on scroll.
- Sidebar (desktop): 240 to 280px expanded, 56 to 72px collapsed to icons with tooltips. Collapse automatically below 1200px width; below 840px it becomes a drawer. Group items with 24px section gaps and uppercase 11px tracked labels only when the groups are many; the active item carries a fill plus a 3px left edge or a tonal fill, never both.
- Mega menu (marketing sites): opens on click on touch and on hover with a 150 to 300ms intent delay on desktop (so a cursor crossing the bar does not open it); closes on Escape and on focus leaving; columns of 4 to 8 links each with a column heading; one image or promotion at most.

### 6.3 Breadcrumbs, drawers, sheets, back

- Breadcrumbs at three or more levels of depth, left-aligned above the page title, the current page as plain text. On mobile collapse to the parent link only ("Back to Villas").
- Drawer against tabs: tabs for 3 to 5 top-level destinations used daily; a drawer for 6 or more or for secondary sections (settings, help, account).
- Bottom sheets: for a choice related to what is on screen (sort, share, pick a date); modal sheets with a scrim for tasks, non-modal for persistent panels (a map's results list). iOS detents at medium and large; Android standard and modal variants.
- Back: the platform back must do what the user expects on every screen; Android's predictive back (system animation that previews the destination while swiping, opt-in since Android 13, enabled by default for apps targeting Android 16) requires that in-app back handling be declared, or the system animation shows the wrong destination. Web apps keep history in sync with the URL so the browser back button works for every state (tabs, filters, open items).
- Deep links: every screen worth sending has a URL or universal link; a deep link into an authenticated screen stores the destination and returns to it after sign-in.

### 6.4 The information scent rule

Information scent: the cues (labels, icons, previews) that let a user predict what lies behind a link, from Pirolli and Card's information foraging theory (1999) and Jared Spool's "Designing for the Scent of Information" (2004). Rule: a navigation label must predict the destination's content and the destination must open with the words the label used. "Explore" and "Discover" have no scent; "Villas in Goa" does. Mega menu columns, tab labels and card titles are all scent, and the test is to read them aloud without the page and say what you will find.

## 7. Lists, tables and data

### 7.1 Row heights and density

| Density | Row height | Font | Use |
|---|---|---|---|
| compact | 32px | 13px | trading tools, admin with 50 plus rows on screen |
| default | 40 to 44px | 14px | most web apps (Material's data table default row is 52dp) |
| comfortable | 48 to 52px | 14 to 15px | consumer lists, touch |
| spacious | 56 to 64px | 15 to 16px | lists with two lines plus an avatar |

Offer a density toggle in data-heavy desktop tools (Gmail does this as default, comfortable, compact). Column padding 12 to 16px, header row one step heavier (500) at 12 to 13px with secondary colour.

### 7.2 Zebra striping and lines

Jessica Enders' 2008 A List Apart study (244 participants, a 15 by 9 table, matched questions) found no statistically significant difference in accuracy or speed between striped and unstriped tables, and 46 per cent of participants preferred stripes; participants also made their own striping by tracking rows with a finger or cursor. House rule from that evidence: hairline row dividers (1px at 8 to 12 per cent of the text colour) plus a hover row highlight on desktop, stripes only when rows are wide (more than 8 columns) and tall text is absent. Vertical lines never; column alignment does the job.

### 7.3 Alignment and numerals

- Text left, numbers right, with the header aligned the same way as its column; currency symbols align because the figures are right-aligned and the decimals line up.
- Tabular figures (`font-variant-numeric: tabular-nums`): every digit at the same width, so columns of amounts align and live-updating counters do not jitter. A typeface without tabular figures is unfit for data; Space Grotesk ships tabular figures, check the face chosen for the client.
- Dates in one format per table; units in the header ("Price (₹ lakh)"), never in every cell.
- Truncate long text with an ellipsis and a tooltip or expand on click; never wrap a single row to three lines inside a dense table.

### 7.4 Sorting, filtering, pagination

- Sort: one column at a time by default, the active column shows an arrow in the header, the default sort stated. Numeric columns sort descending first on click (the big numbers are what people look for), text ascending.
- Filters: chips above the table showing active filters with a clear-all; the filter panel in a drawer on mobile; results count always visible ("142 properties").
- Pagination against load more against infinite scroll (NN/g): infinite scroll suits flat, goal-free browsing (feeds); it breaks the footer, the back button's position and keyboard access, and creates an illusion of completeness. Load more keeps the footer reachable and suits low bandwidth. Pagination suits lists that are searched, compared and returned to (catalogues, orders, admin). House: pagination for tables and catalogues, load more for galleries and editorial, infinite scroll only for feeds with saved scroll position.
- Page sizes 25, 50, 100 for tables; 24 or 36 for product grids (divisible by 2, 3 and 4 columns).

### 7.5 Virtualisation, selection, bulk actions

- Virtualisation: rendering only the rows in and near the viewport. Needed above roughly 200 rows in a browser list; libraries such as TanStack Virtual and react-window do it. Fixed row heights make it cheap; variable heights need measurement.
- Selection: a checkbox column at the left; header checkbox selects the page, with a "select all 1,240" link once the page is selected; the selected count and the bulk actions appear in a bar that replaces the table toolbar; shift-click selects a range on desktop.
- Bulk actions: destructive ones need an undo toast or a confirmation with the count ("Delete 14 listings?").

### 7.6 Responsive tables

- Priority columns: rank columns and hide the lowest-ranked as width shrinks, with a "show columns" control.
- Cards on mobile: below about 600px convert each row to a card with the primary field as title and two or three key fields; never horizontal scroll for a table of fewer than 6 columns.
- Horizontal scroll with a pinned first column for genuinely wide data (rate sheets, availability grids), with a visible shadow at the scroll edge.

### 7.7 Empty and loading rows

- Loading: skeleton rows in the final row height, 5 to 8 of them, never a spinner over an empty table.
- Empty with no filter: an illustration-free message with the primary action ("No bookings yet. Create the first.").
- Empty with filters applied: say so and offer to clear ("No results for 'Jumeirah' under ₹2 Cr. Clear filters.").
- Error: keep the table chrome, show the message in the body with a retry.
