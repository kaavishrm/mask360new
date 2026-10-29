# UI design craft: components, states, platforms, polish

The screen-level craft of building interfaces that read as premium: units, platforms, components, states, surfaces, motion hooks, tooling and the pre-ship audit. Verified as of October 2026. This file sits beneath the design-taste skill (taste, canon, currency, house layer); where a rule here touches taste it points to design-taste by name. Pattern choice (which flow, which pattern) lives in 09-interaction-design-and-ux-patterns.md and the full audit against WCAG (the W3C's Web Content Accessibility Guidelines) in 11-accessibility-and-inclusive-design.md; this file holds the component values.

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
| iPhone 16e and 17e | 390 x 844 pt | 1170 x 2532 | 3x | the budget line; the 16e has a notch rather than a Dynamic Island (the pill-shaped camera cutout that the system animates as a status surface); the 17e (11 March 2026) shares the logical size (ios-resolution.com) |
| iPhone 16 | 393 x 852 pt | 1179 x 2556 | 3x | |
| iPhone 17 and 17 Pro | 402 x 874 pt | 1206 x 2622 | 3x | 6.3 inch, 460 ppi |
| iPhone Air | 420 x 912 pt | 1260 x 2736 | 3x | 6.5 inch |
| iPhone 17 Pro Max | 440 x 956 pt | 1320 x 2868 | 3x | 6.9 inch |
| iPhone 18 Pro and 18 Pro Max | 402 x 874 pt and 440 x 956 pt | 1206 x 2622 and 1320 x 2868 | 3x | released 18 September 2026 at the same logical sizes as the 17 Pro pair (ios-resolution.com listing, October 2026) |
| iPhone Duo (fold), outer | 466 x 678 pt | 1398 x 2034 | 3x | 5.4 inch, 460 ppi; Apple's first foldable, announced 9 September 2026 and on sale 23 October 2026; Figma added iPhone Duo and iPhone 18 frame presets the same day (Figma release notes) |
| iPhone Duo (fold), inner | 626 x 890 pt | 1878 x 2670 | 3x | 7.6 inch, 430 ppi; a tablet-class width in the hand; design the inner display with the medium window size class rules of section 16 |
| iPad mini (7th gen) | 744 x 1133 pt | 1488 x 2266 | 2x | |
| iPad (11th gen) and iPad Air 11 | 820 x 1180 pt | 1640 x 2360 | 2x | |
| iPad Pro 11 (M4, M5) | 834 x 1210 pt | 1668 x 2420 | 2x | |
| iPad Air 13 | 1024 x 1366 pt | 2048 x 2732 | 2x | |
| iPad Pro 13 (M4, M5) | 1032 x 1376 pt | 2064 x 2752 | 2x | |
| Pixel 10 and Pixel 11 | about 412 x 923 dp | 1080 x 2424 | 2.625x (420dpi bucket) | 6.3 inch, 422 ppi on both (Google Store spec page for the Pixel 11, which ships with Android 17); 412dp is the de facto Android design width |
| Galaxy S25 and S26 | about 384 to 412 dp wide | 1080 x 2340 | 2.6x to 2.8x depending on the user's display size setting | 6.2 inch (S25); 6.3 inch (S26, launched 25 February 2026, per retailer and 91mobiles spec listings) |
| MacBook Air 13 | 1280 x 832 pt at exact 2x; the default scaled setting gives more space (1470 x 956 on the M2 and later models) | 2560 x 1664 | 2x or scaled | 13.6 inch, 224 ppi (Apple tech specs); check System Settings, Displays on the review machine |
| MacBook Air 15 | 1440 x 932 pt at exact 2x | 2880 x 1864 | 2x or scaled | 15.3 inch, 224 ppi |
| MacBook Pro 14 and 16 | 1512 x 982 pt and 1728 x 1117 pt (the default settings, exact 2x) | 3024 x 1964 and 3456 x 2234 | 2x | 14.2 and 16.2 inch, 254 ppi; the machines most Mumbai and Dubai clients review on |
| Desktop design artboards | 1440 x 900 and 1920 x 1080 | varies | 1x or 2x | 1440 covers scaled MacBook displays and most laptops; 1920 x 1080 has led StatCounter's desktop resolution share for years; 1536 x 864 and 1366 x 768 follow (Windows laptops at 125 per cent scaling) |

Rules that follow from the table:
- Design mobile at 390 or 402pt wide and check at 360dp (the floor for cheap Android still common in India, where sub-15,000 rupee phones ship 720 x 1600 panels at 2x, giving 360 x 800dp) and at 440pt. Anything that only works at 393 is untested.
- The iPhone 17 family's 402pt width replaced the 393 of the 15 and 16; a 3-column product grid with 16pt gutters gains 3pt per column. Nothing to do, unless columns were hard-coded.
- Android has no single width. Build on the window size classes (section 16) rather than device names.
- The first viewport is the screen minus browser and OS chrome: tabs, address bar and bookmarks take about 80 to 140px of height, and the macOS menu bar or Windows taskbar takes more. A 1440 x 900 artboard's first viewport is therefore about 1440 x 780 in Chrome on a laptop, and a 1366 x 768 Windows laptop shows about 1366 x 650 (measure `window.innerHeight` in the client's own browser). Place the hero and its call to action against those heights and review every hero in a real browser window, never a full-frame artboard; the fold is discussed in 05-layout-grids-and-composition.md, section 9.7.
- Full device, viewport and format specs are in 26-platform-and-format-specs-2026.md, section 4.7.

### 1.4 Safe areas, status bar, Dynamic Island, home indicator

Safe area: the region of the screen not covered by system UI (status bar, Dynamic Island, the home indicator bar at the bottom edge that a swipe uses to go home, rounded corners). Apple exposes it as `safeAreaInsets`; the web exposes it as `env(safe-area-inset-top)` and siblings, which only report non-zero values when the page sets `viewport-fit=cover` in its viewport meta tag.

| Model | Status bar | Top inset (portrait) | Bottom inset (portrait) | Landscape insets (top / bottom / sides) |
|---|---|---|---|---|
| iPhone 17, 17 Pro, 17 Pro Max | 54 pt | 62 pt | 34 pt | 20 / 20 / 62 pt |
| iPhone Air | 54 pt | 68 pt | 34 pt | 20 / 29 / 68 pt |

- The 34pt bottom inset is the home indicator zone. Fixed bottom bars sit above it and extend their background through it (`padding-bottom: env(safe-area-inset-bottom)`), otherwise content scrolls behind a bar that stops 34pt short of the glass.
- The Dynamic Island occupies the status bar region; the 62pt top inset already clears it. Never place tappable UI in the inset; never rely on content showing through it.
- Android edge-to-edge (the app draws behind the status and navigation bars and pads its own content): since Android 15 (API 35), apps targeting API 35 or higher draw behind the system bars by default and must handle `WindowInsets` themselves; a bottom navigation bar that ignores the gesture navigation inset (about 48dp on three-button navigation, about 24dp on gesture navigation) overlaps the system handle.
- Android 16 (API 36) closes the exits, per Android's behaviour-change notes. For apps targeting API 36 on Android 16 devices, `windowOptOutEdgeToEdgeEnforcement` is deprecated and disabled, so edge-to-edge and inset handling are mandatory; predictive back animations are on by default and `onBackPressed()` is no longer called; and on displays with smallest width 600dp or more, orientation, resizability and aspect-ratio restrictions (`screenOrientation`, `resizableActivity`, `minAspectRatio`, `maxAspectRatio`, `setRequestedOrientation()`) are ignored, except for games declared through `android:appCategory`. The temporary opt-out, `android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY`, stops working once an app targets API 37. Google Play has required new apps and updates to target API 36 since 31 August 2026 (with an extension available to 1 November 2026), so every client Android update now ships these behaviours: a portrait-locked app opens landscape and resizable on tablets and unfolded foldables, which makes the medium and expanded layouts of section 16.1 mandatory work in the estimate.
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

Liquid Glass is Apple's system material introduced at WWDC on 9 June 2025 and shipped in iOS 26, iPadOS 26, macOS 26 and the other 26 releases that September. As of October 2026 the shipping releases are numbered 27 (Apple's SF Symbols page references iOS 27 and macOS 27 for its newest symbols) and Liquid Glass remains the system material; the WWDC25 rules below are still the reference, and any 27-specific adjustment is checked in the HIG change log before a build relies on it.

Release mechanics as of October 2026: since 28 April 2026 App Store Connect accepts only builds made with Xcode 26 or later against an iOS 26 family SDK (Apple, Upcoming requirements). The Info.plist key `UIDesignRequiresCompatibility` let an app built with the 26 SDK keep its pre-26 appearance; Apple documents it as temporary and states that the system ignores it when the app is built for iOS 27, iPadOS 27, macOS 27, Mac Catalyst 27 or tvOS 27 or later. Consequence for estimates: any client app rebuilt with Xcode 27 ships Liquid Glass chrome with no opt-out, so every iOS maintenance quote carries a Liquid Glass audit line: custom tab bars and navigation bars replaced by system ones, glass removed from the content layer, toolbar groupings checked, sheets tested at their partial resting heights (detents), and the app icon rebuilt in Icon Composer with its light, dark, clear and tinted variants.

From the "Meet Liquid Glass" session (WWDC25 session 219):

| Aspect | What changed | Rule |
|---|---|---|
| Variants | Regular (adaptive, legible over anything) and Clear (permanently more transparent, needs a dimming layer) | "They should never be mixed." Clear only when the element sits over media-rich content, the dimming layer does not harm the content, and what sits on the glass is bold and bright |
| Layer | Glass belongs to the navigation layer floating above content | "Liquid Glass is best reserved for the navigation layer. Avoid putting glass in the content layer." A table or card made of glass muddies hierarchy |
| Stacking | Glass on glass is forbidden | "always avoid glass on glass"; elements on glass use fills, transparency and vibrancy (Apple's blending that pulls colour from what sits behind the material so content on it stays legible) so they read as a thin overlay |
| Tab bars and nav bars | Float as inset capsules, adapt to what scrolls beneath, flip light to dark by background; tab bars can shrink while scrolling and expand near the top; search often sits as a separate circular control | Keep 3 to 5 tabs; do not fight the shrink behaviour with a custom bar |
| Toolbars | Controls float; a menu from a toolbar button morphs out of the same glass | One floating plane; "Liquid Glass dynamically morphs between the controls in each context" |
| Sidebars and menus | Adapt to context; do not flip light and dark (surface too large, the flip would distract) | |
| Tinting | For primary actions only | "Avoid tinting all your elements. When every element is tinted, nothing stands out." Put colour into the content layer instead |
| Legibility | Symbols flip light and dark mirroring the glass; localised dimming for small footprints; avoid content intersecting glass in steady states | Reposition or scale content to keep separation at launch |
| Accessibility | Reduce Transparency makes glass frostier; Increase Contrast makes elements predominantly black or white with a contrasting border; Reduce Motion disables elastic properties | Automatic when the system material is used; custom glass gets none of it, which is the argument against faking it |
| App icons | 1024px canvas kept; rounder, more evenly spaced grid; layered background plus foreground; modes: light, dark, monochrome glass (light or dark) and two tints (dark tint colours the foreground, light tint infuses the glass) | Build in Icon Composer. Legacy icons get auto-masked and lose their drop shadows; Apple says redraw rather than rely on the auto adjustment |

What it means for a luxury brand app: the glass belongs to the system. Own the content layer (type, imagery, colour) and let the navigation layer be system glass. A custom glass card inside content is a cheap tell (design-taste, section 3: glass cards), and it loses the accessibility behaviour listed above.

User settings and build APIs: iOS 26.1 added a Liquid Glass setting with the default Clear look and a Tinted look that raises the material's opacity (Apple, About iOS 26 Updates). Test navigation chrome over the brand's imagery in both, and with Reduce Transparency and Increase Contrast on. The system behaviours come only through the system APIs, so name them in the handoff: SwiftUI `glassEffect()` inside a `GlassEffectContainer` (with `glassEffectID` for morphing between shapes); the button styles `.glass` and `.glassProminent` (prominent on the one primary action only); `tabBarMinimizeBehavior(.onScrollDown)` for the shrinking tab bar; `tabViewBottomAccessory` for a mini player or booking summary above the tab bar; `Tab(role: .search)` for the separated search control; and `UIGlassEffect` in UIKit. Hand-built glass gets none of these behaviours.

### 2.2 Material 3 and Material 3 Expressive

Material 3 (M3) is Google's design system; Material 3 Expressive is its 2025 extension, announced at The Android Show on 13 May 2025 and rolled to Pixel with Android 16 QPR1 (the first quarterly platform release after Android 16) in September 2025. In Jetpack Compose the Expressive APIs were removed from the 1.4.0 line at beta01 and continue in 1.5.0, which reached beta in October 2026 (1.5.0-beta02 on 21 October, after 1.5.0-alpha29 on 23 September). Along the way SplitButton left experimental status in alpha20 (19 May 2026), and in alpha22 (17 June 2026) ButtonGroup was promoted to stable and FloatingToolbar left experimental status. 1.4.0 (24 September 2025) remains the latest stable release as of October 2026, so an Android build that wants Expressive components depends on a beta library and the estimate must say so. Google's published research base (design.google): 46 studies, over 18,000 participants, work starting in 2022; key elements spotted up to four times faster in expressive layouts; up to 87 per cent preference among 18 to 24 year olds; users over 45 spotted key interactive elements on par with younger users.

| System element | Material 3 | Material 3 Expressive additions |
|---|---|---|
| Shape tokens (named radius values; a design token is any named value for colour, size, radius or timing stored once and referenced everywhere, see 07-design-systems-and-tokens.md) | extra small 4dp, small 8dp, medium 12dp, large 16dp, extra large 28dp, full | large increased 20dp, extra large increased 32dp, extra extra large 48dp; 35 named `MaterialShapes` (among them Circle, Pill, Arch, Sunny, five Cookies, two Clovers, Burst, Puffy and Heart) that morph between each other |
| Motion | duration and easing tokens | spring-based `MotionScheme` with six specs: default, fast and slow spatial (position, size) and default, fast and slow effects (colour, opacity); `MotionScheme.standard()` and `MotionScheme.expressive()`; spatial springs may overshoot, effects springs never do |
| Colour | tonal palettes, roles (primary, on-primary, container, surface tiers) and dynamic colour from the wallpaper | a third accent role, more token variants, richer dynamic palettes, higher-contrast containment |
| Components | the standard set; navigation bar 80dp tall | button groups (connected and standard, overflow into a menu), split button, FAB menu (a floating action button, Material's large button for a screen's main action, that expands into related actions), the 64dp `ShortNavigationBar` with horizontal items in medium windows (Compose `NavigationBarTokens`: 64dp, against 80dp for the original bar), the collapsible `WideNavigationRail`, floating toolbar (horizontal and vertical, with scroll behaviour), loading indicator (shape-morphing), wavy progress indicators, flexible top app bars |
| Type | the M3 scale | emphasised styles for display and headline roles |

House position: Expressive is a consumer-app language. For Mask360's clients (hospitality, jewellery, real estate) the shape library and spring overshoot read playful; use the motion scheme's standard variant and the 12 to 16dp shape range, and keep Expressive's bolder containment only where a younger audience is the brief. Where a client's product runs on Android, M3 components are the floor; the brand look lives in colour roles, type and imagery.

Dynamic colour (the scheme Android 12 and later derive from the user's wallpaper) stays off on brand surfaces, because a jewellery or hotel app that adopts it shows a different palette on every Pixel and Samsung phone. Do not call `DynamicColors.applyToActivitiesIfAvailable` in Views or `dynamicLightColorScheme` and `dynamicDarkColorScheme` in Compose. Generate a static Material 3 scheme from the brand seed with Material Theme Builder or the material-color-utilities library (`SchemeFidelity` keeps the primary close to the brand seed; `SchemeContent` suits a scheme drawn from an image), and harmonise semantic colours towards the brand hue with `MaterialColors.harmonizeWithPrimary` so error red does not clash with a gold or teal primary. Dynamic colour is acceptable in utility products such as staff tools and concierge back offices. Tone mapping is in 04-colour.md.

### 2.3 Fluent 2

Fluent 2 is Microsoft's cross-platform system (Windows, web, macOS, iOS, Android). Its four published principles: natural on every platform (native components reused "80 per cent of the time"), built for focus, one for all, unmistakably Microsoft. Values that matter when a client is on Microsoft surfaces:

- Type: Segoe UI Variable on Windows (Caption 12/16, Body 14/20, Subtitle 20/28, Title 28/36, Large Title 40/52, Display 68/92, all px); on web Segoe UI with a 16-step ramp from Caption 2 at 10/14 to Display at 68/92; on macOS and iOS San Francisco; on Android Roboto.
- Radius tokens (web): 2, 4, 6, 8, 12, 16, 24, 32, 40px and circular (10000px).
- Elevation: a shadow ramp named by blur, 2, 4, 8, 16, 28, 64, each built from a key shadow (sharp, directional, defines the edge) plus an ambient shadow (soft, implies distance); light mode opacity 14 per cent on the low ramp, dark mode key shadow 28 per cent; the Windows platform replaces key shadows with strokes.
- Shadows on coloured surfaces: opacity derived from luminosity, with Shadow 1 at round(42 minus 0.116 x luminosity) and Shadow 2 at round(34 minus 0.09 x luminosity).

### 2.4 Web conventions

The web has no owner. Its conventions come from browser defaults, WCAG and what the top 1,000 sites train users to expect: links distinguishable from text (colour alone fails WCAG 1.4.1), form controls that honour the system keyboard, back button that always works, focus visible on Tab, the logo top-left linking home, search top-right, scroll that never gets hijacked. Browser-native controls (date inputs, selects, dialogs via `<dialog>`, popovers via the `popover` attribute, `<details>`) cost nothing in accessibility and should be the default until the brand look demands a custom control, at which point the custom control must reproduce every keyboard and screen reader behaviour the native one had.

Customisable select: `appearance: base-select` lets a native `<select>` take brand styling, including rich option content and a `::picker(select)` popup, while keeping its keyboard, form and screen reader behaviour. It shipped in Chrome 135 (2025) and Safari 27 (September 2026) and sits behind a flag in Firefox as of October 2026 (MDN browser-compat-data), so it is a progressive enhancement (the native rendering stays the baseline for every browser and the styled one layers on where supported). The house prefers it to a hand-built combobox (a text field with a filtered popup list) for 6 to 15 options.

### 2.5 When to follow the platform and when to own the brand look

| Surface | Follow the platform | Own the brand |
|---|---|---|
| Navigation chrome (tab bars, nav bars, back, sheets, pickers) | always: it carries the OS behaviours, accessibility settings and user memory | never in structure; brand in colour role and iconography only |
| Content layer (cards, lists, product pages, editorial) | the layout grammar (lists, grids) | type, colour, imagery, spacing: this is where luxury is read |
| Inputs and forms | keyboards, autofill, validation timing | label style, field shape, focus colour |
| Marketing site | nothing is native; the brand owns everything | everything, within WCAG |
| Checkout and payments | wallet sheets (Apple Pay, Google Pay, UPI (Unified Payments Interface) intent) exactly as the platform draws them | the review step |

A client asking for "iOS feel on Android" is asking for a worse Android app; the correct answer is one brand system expressed through two component vocabularies.

### 2.6 Cross-platform consistency rules

1. Same information architecture and same words on every platform; different navigation containers (tab bar on iOS, navigation bar on Android, sidebar on desktop).
2. Same colour roles and type scale by role name (display, headline, body, label), with platform-native families where the brand face is unavailable or unlicensed for the platform.
3. Same iconography metaphors; platform-native glyphs for system actions (share, back, more).
4. Same motion intent and timing budget (12-motion-principles-and-ui-motion.md); platform-native easing curves.
5. Same empty, error and loading content; platform-native spinners and progress.
6. Test on both platforms with the same scenario script; a discrepancy in flow is a bug, a discrepancy in chrome is correct.

### 2.7 Right-to-left: component mirroring

The mirroring rules and their implementation live in 09-interaction-design-and-ux-patterns.md, section 16.3, and the layout side in 05-layout-grids-and-composition.md, section 16.1. Every placement rule in this file written as left or right assumes a left-to-right (LTR) locale; under `dir="rtl"` (right-to-left, RTL: Arabic for Dubai, Abu Dhabi and Riyadh builds) the components change as follows.

| Component | LTR rule in this file | RTL behaviour |
|---|---|---|
| Tab bar and navigation bar | first destination at the left | order reverses; first destination at the right |
| Back chevron, list disclosure chevron, breadcrumb separator | point left for back and right for forward | point the other way |
| Desktop dialog buttons (4.4, 9.1) | primary at the far right | primary at the far left |
| Swipe row actions and the iOS back pan (17.1, 17.4) | leading actions at the left edge; back pans left to right | leading actions at the right edge; back pans right to left |
| Side sheets (9.2) and sidebars (6.2) | sheet enters from the right; sidebar at the left | sheet enters from the left; sidebar at the right |
| Toasts (brief self-dismissing messages, 9.3) on desktop | bottom-right | bottom-left |
| Progress bars, sliders, quantity steppers, on-off switches | fill and thumb travel left to right | fill and travel from the right |
| Inline alert edge, active sidebar edge, badges (count dots on icons, 3.4) | `border-inline-start`; badge at the icon's top-right | follow automatically when written as logical properties; badge at the top-left |
| Icon nudges, focus offsets, padding | logical properties (`margin-inline-start`, `inset-inline-end`) | follow automatically |

Do not mirror media playback glyphs and scrub bars, clocks, numerals, phone numbers, logos or photographs. Test three ways: `dir="rtl"` on the root with real Arabic strings (Latin placeholder text hides every bidirectional fault); the Android pseudo-locale `ar-XB` (a fake locale that mirrors the UI for testing) or Developer options, Force RTL layout direction; and the Right-to-Left Pseudolanguage in the Xcode scheme's App Language option.

## 3. Component anatomy and the state matrix

### 3.1 Anatomy

Every component is named as parts before it is drawn: container, leading element (icon, avatar, checkbox), label, supporting text, trailing element (chevron, badge, action), divider, state layer (section 3.3), focus ring. Naming parts first means tokens can target them (`button.label.color`, `button.container.radius`) and the state matrix below can list what each state changes per part. Material's component pages model this well; copy the practice and set house values.

### 3.2 The state matrix

State: a named condition of a component that changes its appearance or behaviour. A component is finished only when every applicable state is designed and reviewed against this matrix. Minimum visible differences are house values with reasons; timings are house defaults, with the full motion numbers in 12-motion-principles-and-ui-motion.md and the WCAG detail behind each row in 11-accessibility-and-inclusive-design.md, section 2.

| State | Trigger | What must change (minimum) | Minimum visible difference | Transition |
|---|---|---|---|---|
| default | none | the resting design | the reference every other state is measured against | none: the state every transition returns to |
| hover | pointer over (fine pointers only; never on touch) | container tone or state layer | state layer at 8 per cent of the content colour (Material 3 value), or a lightness shift of 4 to 6 per cent; cursor pointer on links and buttons | 100 to 150ms ease-out in, 150 to 200ms out |
| focus | element receives focus by any means | nothing visible for pointer focus | none after a mouse click, because a ring after every click reads as a glitch; keyboard focus is the next row | none |
| focus-visible | keyboard or assistive focus (the browser's `:focus-visible` heuristic: focus that should be shown, as after Tab) | a ring outside the container | 2px ring, 2px offset, 3:1 contrast against adjacent colours (WCAG 1.4.11), a 3:1 change against the unfocused state (WCAG 2.4.13, AAA); never remove `outline` without a replacement | 0ms: focus must be instant to track keyboard movement |
| active and pressed | pointer or finger down | container darkens or scales | state layer at 10 per cent (Material 3), optional scale 0.97 to 0.98 on cards and chips (compact selectable controls, section 3.4); a tactile cue on native (section 17) | 50 to 80ms in, 150 to 200ms release |
| disabled | not available (read section 4.5 before disabling anything) | content and container fade; pointer events off; still readable | content at 38 per cent opacity, container at 10 to 12 per cent (Material 3: Compose's filled button tokens use 0.10 for the container, 0.38 for label and icon); cursor `not-allowed` only when the control is visible and useless, otherwise hide it | 150ms |
| loading | async in flight | spinner replaces or joins the label; width locked | label hidden with `visibility`, width preserved to stop layout shift; control inert | spinner appears after 100 to 300ms delay to avoid flashing on fast responses |
| selected | item chosen in a set | container or edge tint plus a check or filled icon | state layer at 12 to 16 per cent or a primary container fill; never colour alone (WCAG 1.4.1) | 150ms |
| checked | boolean on | the check or thumb moves and the fill changes | fill plus glyph | 150 to 200ms |
| indeterminate | mixed children or unknown | a dash in a checkbox, a sweeping bar in progress | distinct from checked and unchecked | 150 to 200ms, the same as checked, because it is the same control |
| error | validation failed | border, helper text, icon | border colour plus a message plus an icon; 3:1 border contrast | 150ms; shake animations are a cheap tell |
| warning | risky but allowed | amber accent plus text | icon plus text, never amber alone (WCAG 1.4.1), with amber text darkened to 4.5:1, which plain amber on white fails | 150ms |
| success | completed | green accent plus text or check | confirm and get out of the way; no confetti | 150ms in; the check holds 1.5 to 3 seconds, then the control returns to rest (section 10.5) |
| read-only | shows a value that cannot be edited here | no border or a dashed one; text at full contrast; copyable | must look different from disabled (full contrast) | none, because nothing changes on interaction |
| empty | no data | a message and an action (section 10.4) | a typographic message with one action, never a blank region, because blank reads as broken | cross-fade 150 to 200ms from the skeleton |
| skeleton | first load | grey blocks in the final layout | blocks at the final sizes: title the thickest line, thinner for body, image blocks at their aspect token; shimmer optional | minimum display 300 to 500ms to avoid a flicker when data arrives fast |
| dragged | being moved | lifted shadow and a state layer | state layer at 16 per cent (Material 3), elevation up one level | follows the pointer with no easing |
| drop target | a dragged item hovers over a valid destination | border and fill | 2px dashed accent border plus a state layer at 8 per cent, so the user sees where the item will land before releasing | 100ms in, 0ms out on drop |
| focus-within | focus is inside a composite field (a phone number with a country picker, a card number with expiry) | one ring around the group | the 2px ring drawn on the group with `:focus-within`, never two rings, because the group is one field to the user | 0ms |
| visited | a link the user has opened | link colour only | a muted shade of the link colour; browsers let `:visited` change colour properties only, for privacy, so nothing else will apply | none |
| pending | submitted and awaiting a server or human decision (booking request, know your customer (KYC) identity review, refund) | a status chip with a timestamp | neutral or amber chip, "Requested 14:05", persisting across sessions; distinct from loading because it can last days | 150ms |
| offline or stale | cached data shown without a live connection | a timestamp and a quiet refresh | "Updated 10:42" beside the data; queued actions shown with a count ("2 changes will sync"), because the user must know what has not reached the server | 150ms |
| streaming | AI output arriving in pieces | Stop replaces Send; content grows in place | new text announced politely at sentence boundaries, never per token (09-interaction-design-and-ux-patterns.md, section 10.1) | none for the text; 150ms for the control swap |

### 3.3 State layering

State layer: a translucent overlay in the content colour placed over the container to express hover, focus, pressed and dragged without a separate colour token per state. Material 3's published values, confirmed in the Compose source (`StateTokens.kt`): hover 0.08, focus 0.10, pressed 0.10, dragged 0.16. Only one state layer applies at a time; pressed wins over hover, focus-visible draws a ring rather than a layer when the keyboard is in use. The method works in both modes because the layer uses the content colour (dark text over light, light text over dark). The house uses the same four values on white and on `#0A0A0A` decks, which is why a single `--state-layer` token suffices.

### 3.4 Badges and chips

Badge: a small dot or count attached to an icon or tab to signal something new or unread. Chip: a compact, rounded control that represents a filter, a choice, an entered value or a suggested action.

| Part | Value | Reason |
|---|---|---|
| Dot badge | 6dp (Material 3 small badge; Compose `BadgeTokens.Size`) | enough to register as a mark at arm's length without reading as a count |
| Count badge | 16dp tall (Material 3 large badge), 11 to 12px tabular figures (equal-width digits, section 7.3), pill radius, capped at "99+" | the cap stops the badge growing into a label; tabular figures stop the width jumping as the count changes |
| Badge placement | top-right of the icon (top-left in RTL), overlapping its live area (the icon's drawing region, section 11.1) by about a third, with a 2px ring in the surface colour | the ring separates badge from glyph on any ground |
| Badge semantics | announced through the parent's accessible name ("Messages, 3 unread"), the badge itself `aria-hidden` | a screen reader otherwise reads "3" with no context |
| Badge lifecycle | cleared when the destination is visited; on at most one tab at a time in a luxury app | a row of red dots trains people to ignore all of them |
| Chip | 32dp tall, 8dp radius in Material 3 (Compose `AssistChipTokens`: height 32dp, corner small) or the house sm or md token; 12 to 16px horizontal padding; 14px label at 500 | the height sits between a tag and a button, so chips read as selectable without competing with buttons |
| Filter chip | a leading check plus a tonal fill when selected | colour alone fails WCAG 1.4.1 |
| Input chip | a trailing remove control with its own 24px hit area | a 16px glyph alone is below the WCAG 2.5.8 minimum |
| Chip rows | wrap on desktop; scroll horizontally on mobile with a peek of the next chip | wrapping on a phone pushes content down; the peek shows there is more |

Badges and pills everywhere are a cheap tell (design-taste, section 3): one badge per surface, and chips only where they are controls.

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

The one-primary-per-view rule exists because the primary button's job is to answer "what do I do here"; two answers equal none. One exception: consent UI gives accept and reject equal weight (section 9.3), because a demoted reject is a named dark pattern in India. Dialogs with "Save" and "Discard" give Save the primary and Discard the tertiary.

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
- Button groups: segmented (connected, shared border) for mutually exclusive views; spaced 8 to 12px for independent actions; right-aligned in dialogs on desktop with the primary at the far right (macOS and web; far left in RTL, section 2.7) and stacked full-width on mobile with the primary on top.
- Touch targets: Apple HIG 44 x 44pt, Material 48 x 48dp, WCAG 2.2 success criterion 2.5.8 (AA) 24 x 24 CSS px minimum with a spacing exception (a 24px circle centred on each target must not intersect another target), and 2.5.5 (AAA) 44 x 44. The house minimum is 44 on every platform; a 32px small button gets 6px of invisible hit area each side via padding or a pseudo-element.

### 4.5 Disabled is a last resort

A disabled primary button gives no reason and no feedback: the user presses, nothing happens, and the form looks broken. The HTML `disabled` attribute also removes the control from the tab order and stops pointer events, so a tooltip explaining why never fires for keyboard or mouse users. WCAG 1.4.3 exempts inactive components from contrast, which is why 38 per cent text is legal and also why a disabled state must never carry information. House rules:
- Keep Submit, Continue and Book enabled; validate on press and focus the first invalid field (section 5.3), so the user learns what is missing at the moment they asked to proceed.
- When a control must be unavailable, use `aria-disabled="true"` and suppress its handler, so it stays focusable and announced, and state the reason beside it ("Choose dates to see rates").
- Hide a control the user can never enable in this context (Refund on a non-refundable booking) instead of greying it, because a permanently grey button invites a support call.
- Disabled stays legitimate for options that are temporarily impossible and explain themselves: sold-out sizes, past dates in a calendar (section 5.7), the minus button of a stepper at its minimum.

## 5. Forms

### 5.1 Labels

Top-aligned labels win. Matteo Penzo's 2006 eye-tracking study (UXmatters) found labels above fields produced the fastest completion; the label-to-field saccade (the rapid eye jump between two fixation points; 02-perception-and-psychology.md, section 4.1) took about 50ms, roughly ten times faster than left-aligned labels beside fields; right-aligned labels beside fields came second. Top alignment also survives localisation (long Hindi or Arabic labels) and narrow viewports with no change of layout. Left-aligned labels beside fields earn their place only in dense desktop admin forms where vertical space is the constraint and the labels are short.

- Label: 13 to 14px, weight 500, 6 to 8px above the field, colour at full text contrast.
- Help text: 12 to 13px, below the field, persistent, secondary colour at 4.5:1 or better.
- Required and optional: mark the minority. In a form where most fields are required, mark optional fields "(optional)" in the label; an asterisk legend is a convention users read correctly only when there are few asterisks. Baymard's 2024 checkout benchmark: the average flow carried 11.3 fields (down from 12.7 in 2019), most sites need only 8, and 17 per cent of users had abandoned a checkout because of complexity; the recommendation is to hide optional fields (company, second phone, address line 2, coupon code) behind a link.

### 5.2 Placeholder misuse

Placeholder text: hint text inside an empty field that disappears on input. Nielsen Norman Group's (NN/g) guidelines on why it harms: it strains short-term memory once it vanishes; filled fields are easy to mistake for empty ones and empty fields are where the eye goes, so users skip placeholder-only fields or take the hint for a default value; errors cannot be checked against a hint that is gone; keyboard users tab past it; the default light grey fails contrast; some screen readers do not read it. Rule: a label outside the field always; a placeholder only for a format example ("DD/MM/YYYY", "+91 98XXX XXXXX") and never as the only label. Floating labels (label starts inside the field and moves up on focus) are better than placeholder-only and worse than a fixed top label; the house uses fixed labels.

### 5.3 Validation timing and errors

Luke Wroblewski and Etre's 2009 study of inline validation reported a 22 per cent rise in completion success, a 22 per cent fall in errors, a 31 per cent rise in satisfaction, a 42 per cent fall in completion time and a 47 per cent fall in eye fixations against after-submit validation. The timing that produced those gains: validate after the user leaves the field (on blur), never while typing, and after the first error show the field recovering live (so the red clears as soon as the fix is typed). NN/g's error guidelines add: show the error next to the field, in text that says what to do ("Enter the 10-digit mobile number without the country code"), with an icon and colour, never colour alone; a summary at the top of a long form supplements the inline messages and never replaces them. On submit, focus the first invalid field and announce the count to screen readers (`role="alert"` or `aria-live="polite"`).

Error placement: below the field, replacing the help text, 12 to 13px, error colour at 4.5:1 for the text and 3:1 for the border, a 16px icon leading the message.

### 5.4 Input types, keyboards, autofill

| Data | Element and attributes | Reason |
|---|---|---|
| mobile number | `type="tel" inputmode="tel" autocomplete="tel"` | numeric keypad with +, autofill from contacts |
| email | `type="email" autocomplete="email"` | keyboard with @ and .; native format check |
| OTP (one-time password) | one input with `inputmode="numeric" autocomplete="one-time-code" maxlength="6"` | iOS and Android offer the SMS code above the keyboard; critical for Indian flows where OTP is the password |
| amount | `inputmode="decimal"` with a text type, never `type="number"` | number inputs allow e and scroll-change values; decimal keypad is what people want |
| PIN code, card number | `inputmode="numeric" autocomplete="postal-code"` or `cc-number`, `cc-exp`, `cc-csc` | the browser's card autofill needs the tokens to work |
| name and address | `autocomplete="given-name"`, `family-name`, `street-address`, `address-level2` (city), `address-level1` (state or emirate), `country` | one tap autofill of the whole block; UAE addresses have no postcode, so use a map pin, an area and an optional Makani number (09-interaction-design-and-ux-patterns.md, section 6.3) |
| passwords | `autocomplete="new-password"` on sign-up, `current-password` on sign-in | password managers behave correctly only with the tokens |
| dates near today (check-in, table booking, viewing) | native `type="date"` on mobile; a calendar picker on desktop when range selection is the task; typing always allowed | the native picker is the fastest and most accessible on phones for dates days or weeks out |
| known dates (date of birth, passport or Emirates ID expiry) | three labelled inputs, Day, Month and Year, sized for 2, 2 and 4 characters, `inputmode="numeric"`, with `autocomplete="bday-day"`, `bday-month` and `bday-year` for birth dates (the GOV.UK Design System date input pattern); the hint states DD MM YYYY order | paging a calendar back to 1985 costs dozens of taps; people type a date they know in seconds |

OTP entry is one input: six separate boxes break iOS autofill, paste and screen reader announcement; tabular figures and letter-spacing can suggest cells if the brand wants the boxed look. Never block paste: WCAG 2.2 success criterion 3.3.8 Accessible Authentication (Minimum, AA) treats transcribing a code as a cognitive function test and requires a mechanism such as paste or autofill. On Android Chrome the WebOTP API (`navigator.credentials.get({ otp: { transport: ['sms'] } })`) reads an SMS whose last line is `@your-domain #123456`. Show the destination number with an Edit route and a 30 second resend timer, and auto-submit on the sixth digit only when the server can return an error inline. Passkeys with an OTP fallback are the sign-in pattern (09-interaction-design-and-ux-patterns.md, section 5.2).

### 5.5 Masks and formatting

- Phone: India is +91 and 10 digits, written 98XXX XXXXX (5 plus 5); UAE is +971 and 9 digits, written 5X XXX XXXX. Format as the user types, store E.164 (`+919812345678`), never block paste.
- Rupee amounts: Indian grouping is 2-2-3 (1,00,000 and 12,34,567), produced by `Intl.NumberFormat('en-IN')`; `en-US` grouping (1,000,000) on an Indian price list reads as foreign. Rupee sign ₹ (U+20B9) before the figure with no space. Crore and lakh in display copy for real estate ("₹4.5 Cr") with the full figure in a tooltip or beneath.
- Dirham: "AED 1,250" in English UI (the ISO code before the figure is the common bank and e-commerce convention in the UAE), Western digits by default, Eastern Arabic digits only when the locale is Arabic and the client's style guide asks for them; prices in Arabic UI keep left-to-right digit order inside right-to-left text, which the browser handles if the number is in its own element.
- Currency signs: the UAE DIRHAM SIGN is U+20C3 (the Central Bank of the UAE's symbol unveiled 27 March 2025; encoded in Unicode 18.0, September 2026) and the SAUDI RIYAL SIGN is U+20C1 (the Saudi Central Bank's symbol of February 2025; Unicode 17.0, September 2025). Product UI keeps "AED 1,250" and "SAR 1,250" until the brand face carries the glyph, then sets the symbol before the figure and never together with the code. Include U+20C1 and U+20C3 in every Latin font subset and test the fallback on Android and Windows, where a missing glyph renders as a box. Usage rules are in 03-typography.md, section 8.5, and 10-ux-writing-and-content-design.md, section 4.21.
- Card numbers: 4-4-4-4 spacing as typed, brand icon detected from the first digits, 16 digits (19 for some Maestro), tabular figures.
- Dates: DD/MM/YYYY in both India and the UAE; never MM/DD. Show the format in help text.
- Identifiers: Permanent Account Number (PAN, ABCDE1234F), Goods and Services Tax Identification Number (GSTIN, 15 characters), Emirates ID (784-YYYY-NNNNNNN-C); mask as the user types and validate the check digit where one exists.

### 5.6 Choosing the control by option count

| Options | Control | Reason |
|---|---|---|
| 2 (on or off) | switch (a sliding on-off toggle; immediate effect) or checkbox (takes effect on save) | a switch that needs a Save button is a lie |
| 2 to 5, mutually exclusive, all visible | segmented control (a row of connected buttons with one selected; short labels) or radio group (longer labels) | the user sees every option without a tap |
| 2 to 7, multiple allowed | checkbox group or filter chips (section 3.4) | every option visible and independently toggled |
| 6 to 15 | select (native on mobile; `appearance: base-select` where the brand needs styling, section 2.4) | a radio list of 12 is a wall |
| 16 or more | searchable combobox with type-ahead | a country or city list needs search |
| numeric with a small range | stepper (minus, value, plus; quantity 1 to 10, guests 1 to 8) | one tap per unit beats typing for small numbers |
| numeric with a wide range | text input with `inputmode="decimal"` plus a slider only when the exact value does not matter (price filter) | sliders are imprecise on touch |

### 5.7 Date pickers, file upload, steppers

- Date picker (for near-future dates; known dates use the three fields of section 5.4): show two months on desktop for ranges (hotel check-in and check-out), one month on mobile with vertical scroll; disable unavailable dates with 38 per cent opacity plus a strike or a dot, never colour alone; show the selected range as a connected band; always allow typing.
- File upload: drag-and-drop zone on desktop plus a Browse button; on mobile a button opens camera or files. Show the accepted types and size limit before the user picks ("JPG or PNG, up to 10 MB"), a thumbnail with a progress bar during upload, and a remove action after. Multiple files list in order added.
- Stepper: minus, value, plus; 44px targets; the value editable by typing; disable minus at the minimum rather than hiding it.

### 5.8 Multi-step forms

Split when a form exceeds about 8 fields or mixes topics (details, address, payment). Show a progress indicator with step names, never just "Step 2 of 5"; allow back without data loss; persist drafts; put the review step before the final commit; one column, one question per screen on mobile when the questions are heavy (KYC checks, mortgage pre-qualification). WCAG 2.2 success criterion 3.3.7 Redundant Entry (A) requires that information entered earlier in the same process is prefilled or selectable: "Billing address same as delivery", the guest name carried from the search step into the booking form. Form length evidence: Baymard's numbers above; every field removed from a checkout is measurable in completion.

## 6. Navigation

### 6.1 Tab bars and navigation bars

- 3 to 5 destinations (Apple HIG for tab bars; Material 3 for the navigation bar). Two is a segmented control, six is a drawer (a side panel of navigation, section 6.3).
- Icon plus label always; icon-only tab bars test worse because icons are ambiguous (NN/g "Icon Usability", 2014). The label is 10 to 12pt, sentence case, one word where possible.
- The selected tab shows a filled icon variant plus the primary colour; unselected shows the outlined variant at secondary contrast.
- Tapping the active tab scrolls to top or pops to root; tapping twice does nothing new.
- iOS 26 tab bars float as glass capsules and can shrink on scroll; do not rebuild them.

### 6.2 App bars and sidebars

- App bar (top): title at the left (Android) or centred (iOS, except large titles which are left), one or two actions at the right, overflow in a menu at three or more. Large titles collapse on scroll.
- Sidebar (desktop): 240 to 280px expanded, 56 to 72px collapsed to icons with tooltips. Collapse automatically below 1200px width; below 840px it becomes a drawer. Group items with 24px section gaps and uppercase 11px tracked labels only when the groups are many; the active item carries either a 3px leading edge (`border-inline-start`) or a tonal fill, never both.
- Mega menu (marketing sites): opens on click on touch and on hover with a 150 to 300ms intent delay on desktop (so a cursor crossing the bar does not open it); closes on Escape and on focus leaving; columns of 4 to 8 links each with a column heading; one image or promotion at most.
- Hidden navigation: Kara Pernice and Raluca Budiu's NN/g study ("Hamburger Menus and Hidden Navigation Hurt UX Metrics", 26 June 2016; 179 participants, 6 sites, desktop and mobile) found that on desktop people used hidden navigation in 27 per cent of cases against 48 per cent for visible and 50 per cent for combination navigation (a few visible links plus a menu). Hidden navigation cut content discoverability by more than 20 per cent, made desktop users at least 39 per cent slower and raised perceived difficulty by 21 per cent against visible navigation; on mobile it was used in 57 per cent of cases against 86 per cent for combination navigation, and users were 15 per cent slower. House rule: a desktop menu-icon-only overlay, the luxury marketing-site habit, is allowed only for sites with three or fewer destinations or a single campaign narrative; otherwise show 4 to 6 primary links plus the Book or Enquire action from 1024px. On mobile, keep the primary action visible beside the menu button.

### 6.3 Breadcrumbs, drawers, sheets, back

- Breadcrumbs (the trail of parent pages above a title) at three or more levels of depth, left-aligned above the page title, the current page as plain text. On mobile collapse to the parent link only ("Back to Villas").
- Drawer (a navigation panel that slides in from the side) against tabs: tabs for 3 to 5 top-level destinations used daily; a drawer for 6 or more or for secondary sections (settings, help, account). Material 3 Expressive offers the expanded `WideNavigationRail` for the same job in medium and expanded windows, so check the drawer's current status on m3.material.io before specifying one for Android.
- Bottom sheets: for a choice related to what is on screen (sort, share, pick a date); modal sheets with a scrim (a translucent layer that dims the page beneath) for tasks, nonmodal for persistent panels (a map's results list). iOS detents at medium and large; Android standard and modal variants.
- Back: the platform back must do what the user expects on every screen; Android's predictive back (system animation that previews the destination while swiping, opt-in since Android 13, enabled by default for apps targeting Android 16) requires that in-app back handling be declared, or the system animation shows the wrong destination. Web apps keep history in sync with the URL so the browser back button works for every state (tabs, filters, open items).
- Deep links: every screen worth sending has a URL or universal link; a deep link into an authenticated screen stores the destination and returns to it after sign-in.

### 6.4 The information scent rule

Information scent: the cues (labels, icons, previews) that let a user predict what lies behind a link, from Pirolli and Card's information foraging theory (1999: people follow cues towards information the way foragers follow scent, weighing expected gain against effort) and Jared Spool's "Designing for the Scent of Information" (2004). Rule: a navigation label must predict the destination's content and the destination must open with the words the label used. "Explore" and "Discover" have no scent; "Villas in Goa" does. Mega menu columns, tab labels and card titles are all scent, and the test is to read them aloud without the page and say what you will find.

### 6.5 Search

Search field anatomy: `type="search"` inside a search landmark (the `<search>` element, Baseline since 2023, or `role="search"`; Baseline is the web platform's label for a feature supported in the current versions of Chrome, Edge, Firefox and Safari), `enterkeyhint="search"` so the mobile return key reads Search, a visible label or an `aria-label`, a leading magnifier, and a trailing clear button with a 44px target once text exists; 40 to 48px tall.
- Suggestions start after 2 characters with a 150 to 300ms debounce (waiting until typing pauses before sending the request), enough to skip mid-word requests while staying inside the 1 second limit of section 10.1; the matched substring is bolded; recent searches show when the field is empty and can be cleared.
- Keyboard: Up and Down move through suggestions, Enter opens the highlighted one or searches the typed text, Escape first clears the field and then closes the list (the combobox pattern in the WAI-ARIA Authoring Practices, the W3C's guide to Accessible Rich Internet Applications widgets).
- On mobile, focusing search opens a full-screen search view with the keyboard up, because a suggestion list squeezed above the keyboard shows two rows.
- Results restate the query and the count ("12 villas for 'Goa pool'"), offer spelling correction and keep the query editable in place; zero results follow section 10.4.
- iOS 26 renders search as a separate floating control when the app declares `Tab(role: .search)` (section 2.1).
- Staff tools add a command palette (a searchable list of every action, opened with Cmd or Ctrl plus K); its pattern is in 09-interaction-design-and-ux-patterns.md, section 9.7, and search architecture in section 5.4 of the same file.

## 7. Lists, tables and data

### 7.1 Row heights and density

| Density | Row height | Font | Use |
|---|---|---|---|
| compact | 32px | 13px | trading tools, admin with 50 plus rows on screen |
| default | 40 to 44px | 14px | most web apps (Material's data table default row is 52dp) |
| comfortable | 48 to 52px | 14 to 15px | consumer lists, touch |
| spacious | 56 to 64px | 15 to 16px | lists with two lines plus an avatar |

Offer a density toggle in data-heavy desktop tools (Gmail does this as default, comfortable, compact). Column padding 12 to 16px, header row one step heavier (500) at 12 to 13px with secondary colour.

Native lists set their own densities, and app screens match them: Material 3 list items are 56dp for one line, 72dp for two and 88dp for three (Compose `ListTokens`); iOS rows are at least 44pt, with separators inset to the label's leading edge rather than running under the leading icon, and settings use inset grouped lists. On the web, match the native value when a product ships on both, so the same screen does not change density between platforms.

### 7.2 Zebra striping and lines

Jessica Enders' 2008 A List Apart study (244 participants, a 15 by 9 table, matched questions) found essentially no difference in accuracy (error rates of 12 per cent or less either way), a speed advantage for striping on four of six questions that reached statistical significance on only one, and a preference for stripes among 46 per cent of participants (33 per cent had none); participants also made their own striping by tracking rows with a finger or cursor. House rule from that evidence: hairline row dividers (1px at 8 to 12 per cent of the text colour) plus a hover row highlight on desktop, stripes only when rows are wide (more than 8 columns) and tall text is absent. Vertical lines never; column alignment does the job.

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
- Reordering: every drag-to-reorder list also offers Move up and Move down (or Move to) actions, because WCAG 2.2 success criterion 2.5.7 Dragging Movements (AA) requires a single-pointer alternative to every drag. Patterns for editors, inline editing, drag and drop and bulk actions are in 09-interaction-design-and-ux-patterns.md, sections 8.6, 9.4, 9.5 and 9.6.

### 7.6 Responsive tables

- Priority columns: rank columns and hide the lowest-ranked as width shrinks, with a "show columns" control.
- Cards on mobile: below about 600px convert each row to a card with the primary field as title and two or three key fields; never horizontal scroll for a table of fewer than 6 columns.
- Horizontal scroll with a pinned first column for genuinely wide data (rate sheets, availability grids), with a visible shadow at the scroll edge.

### 7.7 Empty and loading rows

- Loading: skeleton rows in the final row height, 5 to 8 of them, never a spinner over an empty table.
- Empty with no filter: an illustration-free message with the primary action ("No bookings yet. Create the first.").
- Empty with filters applied: say so and offer to clear ("No results for 'Jumeirah' under ₹2 Cr. Clear filters.").
- Error: keep the table chrome, show the message in the body with a retry.

## 8. Cards

### 8.1 When a card helps and when it fails

Card: a bounded container holding one item's image, title, metadata and action, where the whole container is one tappable unit. NN/g's component definition (2016) gives the test: cards suit heterogeneous content where each item is a different thing the user chooses between (villas, suites, dishes, collections); list rows suit homogeneous content scanned for one value (transactions, messages, settings).

| Situation | Verdict | Reason |
|---|---|---|
| Browse grid of distinct items with imagery | card | the image carries the choice; the boundary groups image with its text |
| Dashboard of metrics | card, hairline only | the boundary separates modules that change independently |
| Settings, transactions, messages | list rows with dividers | identical structure per row; boxes add 2 borders per row and halve the density |
| One card alone at full width | plain section | a border around the only thing on screen carries no information |
| Card wall: every block of a page boxed | fail | the boundary stops meaning anything; depth disappears; the page reads as a grid of grey rectangles |
| Nested cards (a card inside a card) | fail | double borders, double radii, double padding; use dividers and spacing inside the outer card |
| Card with 3 or more buttons | fail | a card is one choice; multiple actions belong on the detail page or in an overflow menu |

### 8.2 Hierarchy inside a card

Top to bottom, in the order the eye should land: image (bleed to the card edge, aspect token from section 14), eyebrow (a short category line above the title) or meta in 12px secondary colour, title at 16 to 18px weight 500 clamped to 2 lines, supporting text at 14px clamped to 2 lines, the key datum (price, date) in tabular figures at the bottom edge, one optional secondary action (save, share) as an icon button in a corner with its own 44px target. Padding 16px on mobile and 20 to 24px on desktop; the gap between image and text 12px; between text rows 4px. Text set on the photograph itself (a villa name over the image) follows section 14.5.

Make the whole card one link: a single anchor on the title stretched over the card with a pseudo-element (`a::after { position: absolute; inset: 0 }`), so keyboard users get one tab stop per card rather than five, and the secondary action sits above it with `position: relative; z-index: 1`. Hover on a fine pointer: a 4 to 6 per cent lightness shift or a hairline darkening; the hover lift on every card is listed as a cheap tell in design-taste, section 3.

### 8.3 Hairline against shadow

The house default is white on white with a 1px hairline (design-taste, section 7: cards white with a hairline), because a card in the page plane is at level 0 and a shadow claims a lift that is false. A shadow appears only when the card leaves the plane: a drag, a desktop hover that raises it one level, or a card acting as an overlay (section 12). On dark decks the hairline is white at 10 per cent and the card surface one step lighter than the ground.

## 9. Overlays

### 9.1 Modal dialogs

Modal: an overlay that blocks interaction with the page beneath until it is dismissed. NN/g (Therese Fessenden, 2017, "Modal and nonmodal dialogs") sets the rule: a modal is justified only when the user must act before continuing (confirm a destructive action, supply a value the flow cannot proceed without, read a legal notice); everything else is nonmodal or a page.

| Size | Width | Use | Mobile behaviour |
|---|---|---|---|
| small | 400px | confirmations: title, one sentence, two buttons | centred, 32px side margins |
| medium | 560 to 640px | short forms (rename, invite, add card) | full-screen sheet below 600px |
| large | 800 to 960px | pickers, previews, comparison | full-screen below 840px |

Rules with reasons:
- Max height 85 per cent of the viewport with the body scrolling and the title and buttons pinned, so the primary action is never below the fold of the dialog.
- Focus trap: focus moves into the dialog on open, Tab cycles within it, Escape closes it, and focus returns to the trigger on close; the native `<dialog>` element opened with `showModal()` provides the trap, the Escape handling, the `::backdrop` pseudo-element, placement in the browser's top layer above every z-index and an inert page behind it, which is why the house builds modals on `<dialog>` rather than a div.
- Dismiss rules: a close button at the top-right with a 44px target, Escape, and a click on the scrim only when nothing has been typed; a dialog holding unsaved input asks before discarding.
- Scrim: Material 3 uses its scrim colour at 32 per cent; the house uses ink at 40 to 50 per cent on light and 60 per cent on dark, enough to cut the page beneath to secondary status without hiding it (users orient by what they can still see).
- Content: a title that names the decision, one or two sentences, at most two buttons (section 4.3), the primary at the right on desktop and on top when stacked on mobile; a destructive primary is red and the dialog's text says what will be lost ("This removes the listing and its 14 enquiries").
- When a modal is wrong: the user needs to compare the overlay with the page (use a side sheet or a split view); the task is long (use a page); the user may want to leave it open while doing something else (nonmodal panel); the trigger was a page load (a modal on arrival is the single most resented pattern on luxury sites and most newsletter pop-ups are exactly this).

### 9.2 Sheets, popovers, tooltips

- Bottom sheet: rises from the bottom edge, 16 to 24px top radius, a 32 x 4px drag handle at 8px from the top, detents (resting heights) at about 50 per cent and 90 per cent of the screen; dismiss by dragging past half its height or with a fast flick, and the handle also toggles between detents on tap, because WCAG 2.2 success criterion 2.5.7 Dragging Movements (AA) requires a single-pointer alternative to every drag; modal sheets take a scrim, nonmodal sheets (a map's result list) let the page scroll. iOS 26 sheets are system glass; on the web use `<dialog>` with a slide transition and `overscroll-behavior: contain` so the page behind does not scroll when the sheet reaches its end.
- Side sheet (desktop): 400 to 480px from the right (the left in RTL) for filters and detail panels; the page remains interactive; the sheet closes on Escape and on a second click of its trigger.
- Popover: anchored to its trigger, 8px offset, flips to the opposite side when it would leave the viewport, closes on outside click or Escape (light dismiss) and returns focus. The HTML `popover` attribute (Popover API; Baseline since 2024) gives top-layer placement and light dismiss without script. CSS anchor positioning (`anchor-name`, `position-anchor`, `anchor()`, `position-area`, `@position-try` and `position-try-fallbacks`) places it against its trigger: Chrome 125, Safari 26 and Firefox 147 ship it, so it has been Baseline newly available since January 2026 (MDN, as recorded in 21-web-design-and-digital-craft.md, section 2.9). Build tooltips, menus and popovers on the `popover` attribute plus anchor positioning, with `position-try-fallbacks: flip-block` as the flip rule; Floating UI is the fallback for older browsers only.
- Tooltip: a short label that appears on hover or keyboard focus. Never for essential information, because touch screens have no hover and some screen readers do not announce title attributes; the icon button must carry `aria-label` and the tooltip merely repeats it. WCAG 2.2 success criterion 1.4.13 Content on Hover or Focus (AA) requires such content to be dismissible (Escape closes it without moving pointer or focus), hoverable (the pointer can travel from the trigger onto the tooltip without it vanishing) and persistent (it stays until hover or focus leaves, the user dismisses it, or it stops being valid). House timing: 300 to 500ms before the first tooltip appears, so a cursor crossing a toolbar does not trigger a cascade; 0ms when moving between adjacent targets within about a second (the warm window); a hide grace period of 100 to 200ms, or an invisible bridge across the 8px gap, so the pointer can cross onto the tooltip; Escape always closes; the tooltip never covers its trigger. One or two lines, no interactive content, 12 to 13px on an ink surface.

### 9.3 Toasts, snackbars, banners, inline alerts

Toast (snackbar in Material): a brief message that appears without interrupting the task and leaves by itself.

| Property | Value | Reason |
|---|---|---|
| Duration | 4 seconds without an action, 10 seconds with one (Jetpack Compose `SnackbarDuration.Short` is 4,000ms and `Long` is 10,000ms in the Material 3 source) | 4 seconds reads a sentence; an Undo needs time to be noticed and reached; WCAG 2.2.1 wants timed content either adjustable or non-essential, so anything that must be read is persistent |
| Position | bottom-centre on mobile above the tab bar and above the keyboard; bottom-right or bottom-left on desktop, mirrored in RTL (Material uses bottom-left on wide layouts; Sonner's default is bottom-right) | away from the primary action, visible to a thumb-zone gaze |
| Stacking | Material shows one at a time and queues; Sonner shows up to three, newest on top, older ones compressed | a column of six toasts is a notification centre |
| Content | one line, one optional action (Undo, View), no close button needed under 10 seconds | a toast with a paragraph needed a dialog |
| Semantics | `role="status"` with `aria-live="polite"` for information; `role="alert"` for errors | screen readers announce without stealing focus |

- Banner: a persistent strip at the top of the content (offline, payment failed, trial ending, cookie consent) that stays until resolved or dismissed, pushes content down rather than covering it, one action.
- Inline alert: a boxed message placed next to the thing it concerns (a form section, a card), four variants (info, success, warning, error) each with an icon and a 3px leading edge in the variant colour, icon plus colour plus text so no meaning rides on colour alone.
- Consent banners are the exception to the one-primary rule of section 4.1: accept and reject get equal weight (same size, same emphasis, same row). India's Digital Personal Data Protection (DPDP) Rules, notified 13 November 2025 with notice and consent duties from 13 May 2027, require consent that is free, specific, informed and as easy to withdraw as to give; the Central Consumer Protection Authority's Guidelines for Prevention and Regulation of Dark Patterns (30 November 2023) name interface interference and confirmshaming among 13 prohibited patterns. Rules: nothing pre-ticked; a persistent footer link to change choices; the banner never covers the focused element or the page's primary action (WCAG 2.4.11); decline labels neutral ("Reject all"), never shaming ("No thanks, I prefer full price"). The legal detail is in 09-interaction-design-and-ux-patterns.md, section 13.4, and consent management on the web in 21-web-design-and-digital-craft.md, section 7.12.

### 9.4 The overlay decision tree

1. Does the user have to deal with it before anything else? Yes: modal dialog (small) or a page if it is long. No: continue.
2. Is it a response to the user's own action that needs no reply? Yes: toast (4 seconds), or a persistent inline alert if it must be read.
3. Is it a choice or a short task related to what is on screen? Yes: bottom sheet on mobile, popover or side sheet on desktop.
4. Is it a condition of the whole session (offline, unpaid)? Yes: banner.
5. Is it a problem with one field or section? Yes: inline alert at the spot, or field-level error (section 5.3).
6. Is it a hint that nothing depends on? Yes: tooltip on hover and focus, never on touch alone.
7. Anything left is content and belongs on the page.

### 9.5 Menus

Menu: a temporary list of actions or options opened from a button, a right click or a long press. Overflow menu: the menu behind a More button that holds a toolbar's lower-priority actions.

| Part | Value | Reason |
|---|---|---|
| Container | elevation level 2 with the hairline (section 12.1), md radius, 4 to 8px internal padding | it floats above the page and must separate from surfaces of the same colour |
| Width | minimum 180px, maximum about 320px | narrower truncates labels; wider loses the link between trigger and list |
| Height | at most about half the viewport, then the list scrolls | the menu must never push items off-screen |
| Items | 32 to 36px tall on desktop, 44 to 48px on touch, 12px horizontal padding | the desktop height matches the small button; touch needs the platform target |
| Leading icons | 16px on every item in a group or on none | a ragged left edge reads as missing icons |
| Toggles | a check or radio glyph in the leading slot | selection needs a glyph, never colour alone |
| Shortcuts | trailing, in secondary colour, with platform names (Cmd on macOS, Ctrl on Windows) | they teach the shortcut without competing with the label |
| Groups | dividers between groups; the destructive item last and in red | separation guards against a slip onto Delete |
| Further input | an item that opens another step ends in the ellipsis character ("Rename…"), as Vercel's Web Interface Guidelines also specify | the user knows a dialog follows |

Keyboard, from the WAI-ARIA Authoring Practices menu button pattern: Enter, Space or Down Arrow opens the menu and focuses the first item; Up Arrow opens it on the last; arrows move and wrap; Home and End jump; typing a letter moves to the next item starting with it; Escape closes and returns focus to the button; Tab closes and moves on. Submenus open after 100 to 150ms of hover intent (a short delay before a hover commits, so passing over does nothing) with the safe triangle (the region the pointer may cross to a submenu without the menu closing; 09-interaction-design-and-ux-patterns.md, section 15.1) and become a drill-in panel on touch. Every context-menu action also exists in a visible control or an overflow menu, because right click and long press are undiscoverable. Build on `popover` plus anchor positioning on the web (section 9.2), `UIMenu` on iOS and `DropdownMenu` in Compose. The command palette is in 09-interaction-design-and-ux-patterns.md, section 9.7.

## 10. Feedback and status

### 10.1 The three thresholds

Nielsen's limits (1993, from Robert Miller's 1968 work), confirmed on nngroup.com: 0.1 second is the limit for feeling instantaneous, 1 second for the flow of thought to stay unbroken, 10 seconds for holding attention on the dialogue, with progress indicators showing the percentage done recommended for operations over about 10 seconds.

| Wait | Show | Rule |
|---|---|---|
| under 100ms | the result | no indicator; an indicator that flashes for 50ms reads as a glitch |
| 100ms to 1 second | a local indicator (button spinner, field spinner) | delay its appearance by 100 to 300ms so fast responses never show it |
| 1 to 10 seconds | skeleton in the final layout, or an indeterminate bar at the top of the surface | hold the skeleton at least 300 to 500ms once shown to avoid a flicker |
| over 10 seconds | determinate progress with a percentage or a step count, plus a way to cancel or leave | and a notification or email when it finishes if the user may leave |

### 10.2 Skeletons, spinners, progress bars

Skeleton screen: a placeholder that draws the layout's blocks in neutral grey before content arrives, named by Luke Wroblewski in 2013. The evidence is contested. Viget's 2017 test ("A bone to pick with skeleton screens") found no perceived-speed advantage over a spinner; Bill Chung's 2018 follow-up (UX Collective) found skeletons perceived as faster when they used a slow left-to-right wave and matched the final layout, and slower when the blocks pulsed. NN/g's "Skeleton screens 101" (Samhita Tankala, June 2023, reviewed September 2026) settles the practice: no indicator under 1 second; a skeleton for full-page loads under 10 seconds; a spinner for a single module (a video, a dashboard card); a progress bar for processes (upload, conversion) and anything over 10 seconds; never a skeleton and a spinner for the same wait. House: skeleton with a 1.5 to 2 second wave, blocks at the exact final size (title block the thickest line), no skeleton for text under 2 lines.

Determinate progress (the fraction is known) beats indeterminate every time it can be computed. Harrison, Amento, Kuznetsov and Bell ("Rethinking the progress bar", UIST 2007) found bars that accelerate towards the end are perceived as faster than linear ones and that pauses near the end are punished most; the practical rule is to front-load the honest uncertainty (first 10 per cent fast while connecting) and never let the bar stall at 90. Fake determinate bars that bear no relation to the work are a trust defect once a user notices.

### 10.3 Optimistic UI

Optimistic UI: showing the result of an action before the server confirms it, then reconciling. Use it for likes, saves, toggles, reorder, read receipts and comment posting, where failure is rare and reversible: the UI updates in under 100ms, the request goes out, and on failure the change reverts with a toast ("Could not save. Try again."). Never for payments, bookings, inventory holds, KYC submissions or anything with a money or legal consequence: those show a pending state and confirm only on the server's reply.

### 10.4 Empty states

| Kind | What it says | Action |
|---|---|---|
| first use | what this space will hold and why it is worth filling | one primary action ("Add your first property") |
| no results | restate the query and the filters in words | clear filters, broaden, or suggest alternatives |
| error | what happened in plain words, with a reference id if support will need it | retry, and a route to support |
| cleared or completed | acknowledge in one line ("All enquiries answered") | the next useful place to go |

Copy follows 10-ux-writing-and-content-design.md. No illustration of a sad folder or an empty box in a luxury product: the empty state is a typographic moment with generous space, which design-taste's physics of expensive already prefers.

### 10.5 Errors, success, undo over confirm

- Recoverable errors (validation, network, conflict) stay in place with the fix at hand; unrecoverable ones (403, 404, 500, expired link) get a page that says what happened, keeps the navigation, offers the nearest useful route and a support contact, and never shows a stack trace or a bare error code.
- Success: an inline check with a 1.5 to 3 second hold, then the control returns to rest; a full success page only for a transaction (booking, payment, application) and that page carries the reference number, the next step, the receipt and an add-to-calendar action.
- Undo over confirm: a confirmation dialog interrupts every time, and users click through habitually (NN/g, "Confirmation dialogs can prevent user errors, if not overused", 2018), so for reversible destructive actions (archive, remove from list, delete a draft) the house performs the action and offers Undo in a 10 second toast, keeping the data for that window. Confirmation is reserved for irreversible, high-cost actions (delete an account, cancel a confirmed booking, refund), and the costliest of those use a typed phrase or a two-step button (press, then press again within 3 seconds) in the pattern GitHub uses for repository deletion.

## 11. Iconography

### 11.1 Grid, keylines, strokes, optical sizing

System icon grid (Material's published guidance, stable since 2014): a 24dp canvas with a 20dp live area and 2dp of padding on every side, so icons of different shapes have room to breathe without touching the box. Keyline shapes inside the live area make icons of different silhouettes read at the same visual weight: square 18dp, circle 20dp, vertical rectangle 16 x 20dp, horizontal rectangle 20 x 16dp. A circle overshoots the square's 18dp because round shapes look smaller than square ones of the same bound (the same overshoot rule as type). Stroke 2dp, corner radius 2dp on outer corners, interior corners square, 45 degree angles for any diagonal so pixels stay crisp.

Stroke weight against type: match the icon's stroke to the stem thickness of the adjacent text. A 16px grotesk at weight 400 has a stem of about 1.5px, so a 1.5px icon set sits beside body text; labels at 500 to 600 and small icons at 16px want 2px. Mixing a 2px set (Lucide) with a 1.5px set (Heroicons outline) in one screen is the most common icon defect in agency builds.

Optical sizing: strokes and counters must change with the rendered size. Heroicons draws three separate sets (24 outline and solid, 20 solid, 16 solid) for that reason; Material Symbols carries an optical size axis from 20 to 48; SF Symbols ships three scales (small, medium, large) that pair with text sizes. Scaling a 24px icon to 16px with a transform produces strokes of 1.33px that blur; scaling it to 48 produces a thin, empty glyph.

Optical alignment: a play triangle centred geometrically sits left of where the eye wants it; shift it right by 1 to 2px at 24. A chevron rotated from a base glyph needs re-centring. Check every icon against the keyline shapes rather than the bounding box.

### 11.2 Filled and outlined, metaphors, labels

- Pairing: outlined at rest, filled when selected or active (tab bars, favourites); one state convention per product. Material Symbols animates between them with the FILL axis; SF Symbols names the pair (`heart`, `heart.fill`).
- Metaphor consistency: one object per concept across the product. Heart for wishlist and bookmark for save-for-later are two concepts, so pick one; the bin for delete, never an X (X is close); the plus for create; magnifier for search. A glyph reused for two meanings is a defect even if each use looks fine alone.
- Icon plus label: NN/g's "Icon usability" (2014) found only a handful of icons are universally understood (search, home, play, close, and a few more); everything else needs a label. Rule: every navigation icon carries a visible label; icon-only buttons are allowed in toolbars for the universal set and for icons with a tooltip and `aria-label`; never an icon-only destructive action.

### 11.3 Icon sets as of October 2026

| Set | Grid and stroke | Styles | Count and licence | Use |
|---|---|---|---|---|
| Phosphor | drawn at 16 x 16px, scaled; six weights Thin, Light, Regular, Bold, Fill, Duotone | weights interpolate across the whole set | 1,248 icons per the project README; MIT | the house default when a client needs weight flexibility; Regular beside 400 type, Bold beside 600 |
| Lucide | 24 x 24 canvas, 2px stroke, round joins and caps (a 2020 fork of Feather) | outline only | ISC licence | product UI set at 500 to 600 label weights; the most common React choice |
| Heroicons (Tailwind Labs) | 24 outline (1.5px stroke in the shipped SVGs), 24 solid, 20 solid, 16 solid | outline plus solid per size | MIT | Tailwind projects; the three sizes give correct optical sizing without scaling |
| SF Symbols (Apple) | matched to San Francisco; nine weights (ultralight to black) and three scales; over 7,000 symbols; four rendering modes (monochrome, hierarchical, palette, multicolor) plus optional gradient rendering; Draw On and Draw Off presets and Variable Draw (SF Symbols 7, WWDC25) plus Magic Replace transitions (introduced in SF Symbols 6, WWDC24); the app download is version 27 as of October 2026 | per weight | free for Apple platforms only; the licence forbids use elsewhere | every native iOS and macOS build; custom symbols drawn in Apple's custom symbol export file at three weights interpolate to nine |
| Material Symbols (Google) | variable font with four axes: FILL 0 to 1, wght 100 to 700, GRAD -25 to 200 (grade: stroke weight changed without changing the glyph's width), opsz 20 to 48; three styles Outlined, Rounded, Sharp | animates fill and weight | Apache 2.0 | Android and Material web; match GRAD to the text face's grade where the type has one |
| Remix Icon | 24 x 24 grid | `-line` outlined and `-fill` filled pairs | 3,200 plus; Remix Icon License v1.0, updated January 2026: read the terms before commercial use | broad coverage including finance and commerce glyphs |

House rule: one set per product, one weight at rest, and the brand's custom glyphs (a monogram, a category set for a hotel's amenities) drawn to that set's grid and stroke so they are indistinguishable in weight.

### 11.4 Drawing and exporting custom icons

- Draw at 1x on the 24 grid with pixel snapping on; horizontals and verticals on whole pixels; a 2px stroke centred on a whole pixel covers two whole pixels and stays crisp; a 1.5px stroke is never crisp at 1x and is accepted because every current phone is 2x or 3x.
- Terminals all round or all square across the set; outer corners at the set's radius (2px at 24), inner corners sharp; diagonals at 45 degrees; counters at least 2px wide; test at 16px before approving.
- Keep live strokes in the source file (weight changes are a parameter); expand strokes to outlines only on export for consumers that cannot scale strokes correctly (some icon-font pipelines; Android `VectorDrawable` and iOS asset catalogues handle strokes).
- For iOS, export through the SF Symbols app's custom symbol file, drawing Ultralight, Regular and Black so the other six weights interpolate and the symbol inherits weight matching with text.
- SVG hygiene: `viewBox="0 0 24 24"` with no fixed `width` and `height`; `fill="none" stroke="currentColor"` for outlined and `fill="currentColor"` for filled, so the icon inherits the text colour and switches with dark mode; `stroke-linecap` and `stroke-linejoin` set once on the root; ids, clip paths, masks, transforms and editor metadata removed (SVGO with the default preset, coordinates to 2 decimals); one `<path>` where possible; `aria-hidden="true"` when decorative or a `<title>` when it stands alone; no embedded rasters or fonts. Deliver as an SVG sprite or as components, never as an icon font (fonts lose rendering on failed loads and get anti-aliased as text).

## 12. Surfaces, elevation and depth

### 12.1 Shadow systems

Two models are in use. The key plus ambient model (Material 2, Fluent 2): a key shadow is sharp, offset downwards and defines the edge as if from one light above; an ambient shadow has no offset, a wide blur and low alpha, and implies distance from the surface. Josh Comeau's layered model ("Designing beautiful shadows in CSS", 2021): stack several shadows whose offsets and blurs double (1, 2, 4, 8, 16px) at a low alpha each (about 0.075), keep the vertical offset at twice the horizontal so every shadow on the page agrees on one light source, and tint the shadow with the background's hue at lower saturation instead of pure black, which greys the surface it falls on.

House levels, light mode, ink at the alphas shown:

| Level | Name | Shadow | Hairline | Used by |
|---|---|---|---|---|
| 0 | base | none | 1px at 8 to 12 per cent of ink | page, cards at rest, list rows |
| 1 | raised | 0 1px 2px at 0.06, 0 2px 8px at 0.06 | yes | hovered cards, dropdown menus, sticky headers once scrolled |
| 2 | overlay | 0 1px 2px at 0.06, 0 4px 16px at 0.10 | yes | popovers, tooltips, toasts, date pickers |
| 3 | modal | 0 16px 48px at 0.16 plus the scrim | optional | dialogs, sheets, command palettes |

Fluent 2's ramp (section 2.3) and Material's six levels (0, 1, 3, 6, 8, 12dp) are the reference values when a client is on those platforms; the house ramp is deliberately quieter because design-taste's material rule prefers hairline over shadow (design-taste, section 5: material) and soft shadows under everything is a cheap tell (design-taste, section 3).

### 12.2 Borders against shadows, and the layering stack

- Hairline when the surface sits in the page plane; shadow when it floats; both at level 1 and 2 because a shadow alone loses its edge against a surface of the same colour (Linear and Vercel both pair a 1px border at low alpha with a small shadow on menus for this reason).
- Z-index tokens: `base 0`, `raised 10`, `sticky 100`, `overlay 1000`, `modal 2000`; nothing else is allowed to set a z-index by hand. `<dialog>` and `popover` elements render in the top layer above every z-index, which is one more reason to use them.
- Depth order must match interaction order: the thing the user can act on now is the highest surface; a toast never covers a modal's buttons; a sticky header never covers a focused field. WCAG 2.2 success criterion 2.4.11 Focus Not Obscured (Minimum, AA) is met with `scroll-padding-top` equal to the sticky header's height and `scroll-padding-bottom` equal to any sticky Book bar, and toasts never sit over the focused element (11-accessibility-and-inclusive-design.md, section 2.6).

### 12.3 Blur, translucency and Liquid Glass

`backdrop-filter: blur()` recomposites everything behind the element on every frame, so its cost scales with the element's area times the blur radius times the number of such elements. Rules: radius 8 to 20px, three or four translucent surfaces per viewport at most, never animate the blur radius (animate opacity instead), measure frame rate with the blur on and off in the browser's performance panel rather than trusting a desktop preview, and test on a mid-range Android (the 15,000 to 20,000 rupee Redmi and Realme class that is the Indian median) rather than on a MacBook. Honour `prefers-reduced-transparency` (Chromium since 118; verify Safari and Firefox support before relying on it) by swapping to an opaque surface.

Liquid Glass on Apple platforms is a system material (section 2.1): refraction of the content beneath (lensing), specular highlights that follow device motion, automatic light and dark flipping, and the accessibility behaviours arrive from the OS compositor at no cost to the app. The web cannot reproduce lensing cheaply (SVG displacement filters work and are heavy), so a web glass is a blur, a 1px inner highlight at 20 to 30 per cent white, a tint at 60 to 80 per cent of the surface colour, and a hairline. The house uses it on one navigation surface at most and never on content, matching Apple's own layer rule.

### 12.4 Dark mode elevation via lightness

Shadows barely read on dark grounds (a dark shadow on near-black is invisible), so elevation becomes lightness: the higher the surface, the lighter. Material 2's dark theme table still gives the clearest numbers for a hand-built system: a white overlay on the base surface at 5 per cent for 1dp, 7 for 2dp, 8 for 3dp, 9 for 4dp, 11 for 6dp, 12 for 8dp, 14 for 12dp, 15 for 16dp and 16 for 24dp. Material 3 replaced the overlay with named surface roles (surface container lowest, low, container, high, highest) that are no longer tied to elevation; the migration maps elevation +1 to Surface Container Low, +2 to Surface Container, +3 to Surface Container High and +4 and +5 to Surface Container Highest. House decks on `#0A0A0A` use raised surfaces at `#141414` and `#1C1C1C` with hairlines at 10 per cent white; the colour side is in 04-colour.md.

## 13. Corner radius systems

### 13.1 The scale and where each step lives

| Token | Value | Elements | Reason |
|---|---|---|---|
| xs | 2px | checkboxes, tags, table cells, tiny chips | anything under 20px tall reads a 4px radius as a circle |
| sm | 4px | inputs and buttons in dense desktop tools, menu items | the smallest radius that still reads as intentional at 32px heights |
| md | 8px | default buttons, inputs, chips, menu containers | matches a 40px control (radius about one fifth of height) |
| lg | 12px | cards, popovers, dropdowns, images in cards | a 12px curve registers on a 200 to 400px surface; 8px on a card reads as a control, 16px as a dialog |
| xl | 16px | dialogs, large cards, sheets on desktop | a dialog sits one level above a card, and one step more curvature signals the step in depth |
| 2xl | 24px | bottom sheets, hero media, large image tiles | large surfaces need a larger radius for the curve to register at their scale, and a sheet's top corners echo the phone's rounded screen corners |
| full | 9999px | pills, avatars, toggles, tab-bar capsules | a pill is a radius equal to half the height, whatever the height |

Why a scale: the eye registers a 1 to 2px radius mismatch between neighbours as sloppiness without being able to name it, and a scale with roughly doubling steps keeps nested shapes concentric. Radius follows size: a 32px button at 6 to 8px, a 48px button at 8 to 12px; a 24px radius on a 32px button is a pill and must be the full token, never a number near it.

### 13.2 The nested radius rule

Inner radius equals outer radius minus the padding between them. Concentric arcs share a centre; when a 16px card holds an image inset by 8px, the image's radius is 8px; when the padding exceeds the outer radius, the inner radius is 0 (or the xs token). Worked failure: a 12px card holding an image at 12px radius inset by 12px leaves a band of card that widens from 12px along the sides to about 17px at the corner diagonal, because the two arcs no longer share a centre; with the inner radius at 0 the band stays 12px all round. Apply the rule to buttons inside cards, icons inside buttons, images inside sheets and the focus ring outside a control (ring radius = control radius + ring offset).

On Apple platforms the rule is a system API from iOS 26 and the other 26 releases: SwiftUI's `ConcentricRectangle` computes each corner's radius relative to its container shape, either the device's screen corners or any view that sets `containerShape(_:)`, which is how system sheets and popovers match the display's curvature. Use it for custom views near the screen edge and inside sheets instead of hard-coded radii, so corners stay concentric across iPhone 17, Air, Pro Max and Duo; Apple's own example is the Notes format sheet, with bottom corners concentric to the device and top corners at a fixed radius.

### 13.3 Squircles and continuous corners

Squircle: a corner drawn as a superellipse rather than a circular arc, so curvature eases in from the straight edge rather than starting abruptly. Apple uses continuous corners on app icons and on `CALayer` with `cornerCurve = .continuous` (iOS 13 and later); Figma exposes it as corner smoothing from 0 to 100 per cent, where about 60 per cent approximates iOS; Flutter has `ContinuousRectangleBorder`. On the web, `corner-shape: squircle` (shorthand for `superellipse(2)`, with `round` being `superellipse(1)`) shipped in Chrome 139 in August 2025 and remains Chromium-only as of a March 2026 Smashing Magazine survey, so it is a progressive enhancement (section 2.4) behind `@supports (corner-shape: squircle)` with `border-radius` as the fallback. The property needs a non-zero `border-radius` to have any effect. House: continuous corners on native iOS and on large shapes (hero tiles, sheets) on the web; plain arcs on controls under 48px where the difference is invisible.

### 13.4 Consistency

One radius token per element class across the product. The "one radius on everything" tell (design-taste, section 3) means a single value applied to every element regardless of size; the cure is the scale above, which keeps the house layer's "curved edges everywhere" (design-taste, section 7) while each size gets its own number. Audit by zooming to 400 per cent on a screen and tracing every corner against the token list.

## 14. Imagery in UI

### 14.1 Aspect ratio tokens and cropping

| Token | Ratio | Use | Note |
|---|---|---|---|
| square | 1:1 | products, avatars, jewellery, menu items | the safest crop for unknown subjects |
| landscape | 4:3 | room and villa tiles, cards | |
| editorial | 3:2 | editorial cards, listing heroes on desktop | the 35mm frame; most photography arrives at it |
| wide | 16:9 | video, desktop hero bands | |
| portrait | 4:5 | fashion, beauty, Instagram feed parity | the ratio most social content already exists in |
| story | 9:16 | mobile hero, stories, reels | |
| poster | 2:3 | campaign posters, book-like tiles | |
| banner | 21:9 | desktop promo strips | never on mobile |

CSS `aspect-ratio` on the box reserves the space before the image loads, which removes cumulative layout shift (CLS, Google's measure of unexpected movement of visible content). `object-fit: cover` with `object-position` set from a stored focal point (x and y as percentages saved per image in the CMS; DatoCMS, Sanity and Cloudinary all store a hotspot or gravity) so that faces, hands and the hero object stay in frame across every token; a centred crop loses heads on 4:5 and feet on 16:9. For portraits, eyes in the top third; for jewellery and product on a sweep backdrop, the object centred with 10 per cent margin so the crop never kisses the edge.

### 14.2 Placeholders and blur-up

| Technique | Payload | Properties | Use |
|---|---|---|---|
| dominant colour | 3 bytes | a flat colour from the image | the cheapest; grids of many thumbnails |
| LQIP | 400 to 1,000 bytes | a 20 to 40px wide JPEG inlined as base64, blurred with CSS | heroes, editorial |
| BlurHash (Wolt, 2018) | 20 to 30 characters of base83 | decoded on the client to a gradient-like preview; no alpha | feeds; the decode has a cost on long lists |
| ThumbHash (Evan Wallace, 2023) | about 21 to 25 bytes | more detail and more accurate colour than BlurHash at the same size, alpha support, and the aspect ratio encoded in the hash | the house default for new builds |

Blur-up: show the placeholder at a 20px blur with a 1.05 scale (so the blurred edges do not show the box), swap to the full image on `load` with a 200 to 300ms opacity transition. Mark the largest above-the-fold image with `fetchpriority="high"` and leave `loading="lazy"` off it, because it is usually the largest contentful paint (LCP) element, the render Google times as the page's main load; every image below the fold is lazy with `decoding="async"`.

### 14.3 Avatars and image states

- Avatar sizes 24, 32, 40, 48, 64, 96; the shape (circle or rounded square) is one decision per product; the fallback is two initials on a background chosen deterministically from an 8-colour set by hashing the name, so the same person always gets the same colour; a presence dot of 8 to 12px at the bottom-right with a 2px ring in the surface colour.
- Loading: the box at its aspect token with the placeholder; broken image: a neutral surface with the brand monogram at 24px, never the browser's broken-image glyph; a retry on tap for user-uploaded content.

### 14.4 Art direction with the picture element

Art direction (serving a differently cropped or composed image per viewport, beyond resizing one file): `<picture>` chooses by media query and by format: a `<source media="(max-width: 600px)">` serving a 4:5 crop with the subject recomposed, then the desktop 16:9; inside each, `type="image/avif"` first, `image/webp` second, JPEG last; `srcset` with width descriptors and a `sizes` attribute that states the slot width per breakpoint so the browser picks the file. Cap photographic assets at 2x (a 3x photo is twice the bytes for a difference nobody sees); vectors and UI glyphs stay vector. AVIF is Baseline since 2024 (Safari 16 and later); JPEG XL is supported by Safari 17 and later, Chromium removed it in 2023, and whether Chromium has restored it as of October 2026 is unverified here, so do not depend on it.

### 14.5 Text over imagery

Hero tiles, villa cards and campaign modules set text on photographs every week. WCAG 1.4.3 applies, measured against the lightest pixels behind the glyphs and not the image's average, so a caption that passes over the dark sea fails over the white villa wall in the same photograph. Methods in order of preference:
1. Choose or crop an image with calm negative space where the type sits, using the stored focal point of section 14.1.
2. A gradient scrim from 0 to about 50 to 60 per cent ink over the bottom 40 to 50 per cent of the tile, under light type.
3. A solid caption band below or beside the image.

Text-shadow alone fails on busy areas and reads cheap. Re-check every aspect token, because 4:5 and 16:9 crops move the subject under the type; check in dark mode; and test with the real CMS images, never only the hero shot the layout was drawn around. Scrims over video are in 03-typography.md, section 13.5, and gradient restraint in design-taste, section 3.

## 15. Dark mode craft

### 15.1 Palette and surfaces

The palette strategy (tone ladders, which steps map to which roles, accent desaturation) lives in 04-colour.md; this section is the screen craft. Near black beats pure black for app surfaces: on OLED (organic light-emitting diode) panels, pure black pixels switch off and switch on more slowly than lit ones, which smears text during scroll, and pure black hides every shadow and makes elevation unreadable; `#0A0A0A` to `#121212` keeps the OLED power benefit (the panel is still almost off) and leaves room for three surface steps above it. Pure black is right for media viewers and for the house deck ground where the content is the only light.

Elevation is lightness (section 12.4). Accents desaturate one or two steps and lighten (Material's rule is to move from tone 40 to tone 80 of the same hue) because saturated colour on a dark ground vibrates at the edges; the flame `#F53901` holds on `#0A0A0A` because it is the one owned saturated colour and is used once per screen.

### 15.2 Text and weight

Light text on dark appears heavier than the same weight dark on light, an effect known as irradiation or halation: the bright strokes bleed outward on the retina (02-perception-and-psychology.md, section 17.7). Three corrections: drop one weight step for body (300 where 400 was used on light), set body at 87 per cent opacity rather than pure white (Material's dark text values: 87 high emphasis, 60 medium, 38 disabled), and increase letter-spacing on small sizes by about 0.01em. Pure `#FFFFFF` body text on `#000000` is the combination that produces the most reported eye strain and is reserved for display sizes.

### 15.3 Images and media

- Photographs read brighter on dark; dim by 10 to 15 per cent with an overlay or a `brightness()` filter only when they sit beside text; never dim video.
- Product cut-outs on white backgrounds become glowing boxes on dark: supply transparent AVIF or PNG, or a second render on the dark surface colour. Logos need a dark-mode variant; illustrations are re-coloured, never inverted.
- Dimming against inverting: `filter: invert()` on a page breaks every photograph, every brand colour and every semantic colour (red becomes cyan). Build dark mode as its own second token set.

### 15.4 Testing dark mode

1. Set `color-scheme: light dark` on the root so native form controls, scrollbars and the `<dialog>` backdrop switch with the theme.
2. Follow `prefers-color-scheme` by default; a manual toggle stores the choice in `localStorage` and overrides the system until cleared.
3. Check on an OLED phone at 10 per cent brightness (smear, black crush, banding: visible steps where a smooth gradient runs out of tonal values) and on a cheap LCD at full brightness (greys where blacks should be).
4. Walk every screen for white image backgrounds, missing logo variants, shadows that vanished, focus rings and selection colour that lost contrast, and the status bar style (`apple-mobile-web-app-status-bar-style`, Android `windowLightStatusBar` off).
5. Re-run WCAG contrast in dark; the accent that passed on white often fails on `#1C1C1C`.
6. Run Windows forced colours (High Contrast) once. Under `@media (forced-colors: active)` the OS replaces author colours with system colours (`Canvas`, `CanvasText`, `LinkText`, `ButtonText`, `Highlight`) and removes `box-shadow`, so focus rings drawn as shadows and shadow-made hairlines vanish. Draw focus with `outline` (a shadow ring needs an `outline: 2px solid transparent` fallback, which becomes visible), make hairlines real borders, keep icons on `currentColor`, and apply `forced-color-adjust: none` only where colour is the information (product colour swatches, brand marks). Emulate it in Chrome DevTools (Rendering, Emulate CSS media feature forced-colors) or test with a Windows contrast theme in Edge; detail in 11-accessibility-and-inclusive-design.md, section 8.7.

## 16. Responsive and adaptive UI

### 16.1 Window size classes and breakpoint behaviour per component

Android's window size classes, confirmed on developer.android.com: compact width under 600dp (99.96 per cent of phones in portrait), medium 600 to 840dp (93.73 per cent of tablets in portrait, most unfolded inner displays), expanded 840 to 1200dp (97.22 per cent of tablets in landscape), large 1200 to 1600dp, extra-large 1600dp and above; height classes compact under 480, medium 480 to 900, expanded 900 and above. The house web breakpoints follow them (600, 840, 1200, 1600) with a 1024 step for the desktop navigation switch.

| Component | compact (under 600) | medium (600 to 840) | expanded (840 to 1200) | large and above |
|---|---|---|---|---|
| primary navigation | bottom tab bar (3 to 5) | navigation rail (a vertical strip of 3 to 7 destinations on the leading edge; Material) or tab bar | collapsible sidebar | sidebar expanded |
| marketing site navigation | menu button plus the visible Book or Enquire action | same | 4 to 6 visible links from 1024 (section 6.2) | visible links |
| product grid columns | 2 | 3 | 4 | 4 to 6, max content width 1440 |
| tables | cards or priority columns | priority columns | full | full with density toggle |
| forms | one column, full-width controls | one column, 560px max | one column, or two for paired short fields (city and PIN code) | same |
| dialogs | full-screen sheet | centred, 560 max | centred | centred |
| type scale (hero) | 40 to 48px | 56 to 64 | 72 to 96 | 96 to 128 |
| page gutters | 16 to 20px | 24 | 32 to 48 | 64, content centred |
| images | 4:5 or 9:16 crops | 4:3 | 3:2 and 16:9 | 16:9 and 21:9 |

### 16.2 Container queries, pointer queries, density

- Container query: a style rule conditioned on the size of an ancestor container rather than the viewport, Baseline since 2023 (Chrome 105, Safari 16, Firefox 110). Set `container-type: inline-size` on the wrapper and write `@container (min-width: 480px)` on the component; a card then lays out by the column it sits in, which is what a design system component needs because the same card lives in a sidebar at 320px and a main column at 800px. Media queries remain for page-level layout. The units `cqi` and `cqw` size type by container.
- Pointer and hover: `@media (hover: hover) and (pointer: fine)` gates hover effects; `(pointer: coarse)` enlarges targets to 44 or 48px; a device can report both (iPad with a trackpad, a touch laptop), so no action may exist only on hover.
- Density: a compact mode for desktop data tools only, exposed as a toggle (section 7.1); Material's density scale removes 4dp per step; never compact on a touch device.

### 16.3 Tablet, foldables, desktop web and native

- iPad: iPadOS 26 brought the Windowed Apps multitasking mode to supported iPads, with freely resizable windows, window controls and a menu bar. `UIRequiresFullScreen` is deprecated in iPadOS 26, and in that mode an app that still sets it is not shown full screen: the system scales its presentation when the window is resized, which softens type and hairlines. The replacements are `UISceneSizeRestrictions` (a declared minimum and maximum scene size) and `prefersInterfaceOrientationLocked` (Apple TN3192). Design every iPad screen at compact, medium and expanded widths, declare the minimum scene size, and map commands into the menu bar and keyboard shortcuts.
- Foldables: Android 16 ignores orientation and resizability locks on displays 600dp and wider for apps targeting API 36 (section 1.4), so every tablet and unfolded foldable gets the medium and expanded layouts whether the app was designed for them or not. The Galaxy Z Fold 7 (8.0 inch inner at 2184 x 1968, July 2025) sits in the medium width class at the default density (about 750 to 830dp across, varying with orientation and the user's display size setting) and reaches expanded when the user lowers it; the Pixel 10 Pro Fold and Pixel 11 Pro Fold behave similarly. Design for posture (the hinge state: tabletop, half-folded horizontally on a surface; book, half-folded vertically) with Jetpack WindowManager, keep primary controls off the hinge line, and test on the Android emulator's foldable and resizable profiles. iPhone Duo's inner display at 626pt wide (section 1.3) makes two-column layouts a phone-class concern for the first time on iOS.
- Desktop web: keyboard first, hover present, content max-width 1200 to 1440 at 1920 viewports, reading measure 60 to 75 characters, sticky elements with `scroll-margin-top` on anchor targets.
- Native desktop: macOS follows the HIG (sidebar, toolbar, menu bar, Liquid Glass in 26); Windows follows Fluent 2 (Mica, Windows 11's opaque material tinted by the desktop wallpaper; 4px radius controls); web apps run inside both and should borrow only the keyboard conventions.

## 17. Mobile patterns

### 17.1 Gestures and their conflicts

| Gesture | Meaning | Platform facts | Conflict to avoid |
|---|---|---|---|
| tap | activate | 44pt and 48dp targets | none |
| long press | context menu, preview | iOS `UILongPressGestureRecognizer` default 0.5 seconds; Android `ViewConfiguration` default long-press timeout 400ms | long press on a draggable item: decide which wins and show the other on a menu |
| swipe horizontal | row actions, dismiss, paginate | iOS leading and trailing row actions with a full swipe committing the first | a horizontal carousel inside a vertically scrolling page steals vertical scroll if the touch starts at an angle: lock the axis after 10px; on pushed iOS 26 screens a horizontal pan can also trigger back (below) |
| pinch | zoom on images and maps only | `touch-action: pinch-zoom` on the image region | never on UI; never disable page zoom (`user-scalable=no` breaks accessibility) |
| edge swipe, left, and content pan | back (iOS from the leading edge and, since iOS 26, a leading-to-trailing pan anywhere in the content; Android from both edges with predictive back) | Android 10 and later limit `systemGestureExclusionRects` to 200dp per edge | a left-edge drawer open gesture conflicts with back on both platforms: open drawers from a button; carousels, sliders and leading swipe actions on pushed iOS screens compete with the content pan |
| edge swipe, bottom | home and app switcher | the 34pt home indicator zone | no swipe-up controls within 34pt of the bottom |
| edge swipe, top | notifications, Control Centre | | no swipe-down controls under the status bar |
| pull down | refresh | threshold about 60 to 80pt; a tick haptic at the threshold | only on content lists; never on forms, never on screens where a drag has meaning |

Every gesture has a visible alternative (a button, a menu) because gestures are undiscoverable; a swipe-to-delete without an Edit mode or a long-press menu fails the audit.

iOS 26.0 introduced `UINavigationController.interactiveContentPopGestureRecognizer`, which pops the top screen when a person pans horizontally, leading to trailing, anywhere in the content area the edge recogniser does not cover. Rules: tie custom horizontal recognisers to it (`require(toFail:)` or the gesture delegate) and test the first 10pt of travel; keep leading-swipe row actions on root screens; test every carousel, chip scroller, slider and map pan on pushed screens. In Arabic layouts leading is the right edge, so the pan runs right to left. Ownership: this table keeps the platform values; pattern choice and conflict resolution are in 09-interaction-design-and-ux-patterns.md, section 11.2.

### 17.2 Thumb zones and reachability

Steven Hoober's 2013 observations (1,333 observations of people using phones, 780 of them touching the screen): 49 per cent used one hand, 36 per cent cradled the phone and 15 per cent used two hands. Hoober later cautioned that his reach drawings were coarse and that people touch the centre of the screen most, most quickly and most accurately, with corners and edges the slowest. The practical rule survives: primary actions in the bottom 40 per cent and the horizontal centre; rare and destructive actions at the top; nothing essential in the top corners of a 6.9 inch phone (the 17 Pro Max at 440 x 956pt puts the top-left corner about 14cm from a right thumb's pivot). Platforms moved with the data: Safari's address bar went to the bottom in iOS 15, Samsung's One UI split screens into a viewing area above and an interaction area below, and iOS 26 floats search and tab bars at the bottom. Sticky primary calls to action in flows (checkout, booking) sit at the bottom edge above the home indicator and rise with the keyboard.

### 17.3 Haptics vocabulary

Haptic feedback: a short vibration pattern the device plays in response to an interaction, with a vocabulary of named types per platform.

| Platform | API | Types | Use |
|---|---|---|---|
| iOS | `UIImpactFeedbackGenerator` | light, medium, heavy, plus soft and rigid (iOS 13 and later) | a physical collision: a drawer reaching its detent, a card snapping into place, a toggle |
| iOS | `UINotificationFeedbackGenerator` | success, warning, error | the outcome of a task the user started |
| iOS | `UISelectionFeedbackGenerator` | a single tick | moving through discrete values: pickers, segmented controls, steppers |
| iOS | Core Haptics (`CHHapticEngine`) | custom patterns with intensity and sharpness 0 to 1 | signature brand moments only, and sparingly |
| Android | `View.performHapticFeedback` with `HapticFeedbackConstants` | `VIRTUAL_KEY`, `LONG_PRESS`, `CONTEXT_CLICK` (API 23), `KEYBOARD_PRESS` and `KEYBOARD_RELEASE` (API 27), `CONFIRM` and `REJECT` (API 30), `GESTURE_START` and `GESTURE_END` (API 30), `CLOCK_TICK`, `TOGGLE_ON` and `TOGGLE_OFF`, `SEGMENT_TICK`, `DRAG_START` (added in later API levels; check the reference page for the exact level) | the same vocabulary, mapped: success to `CONFIRM`, error to `REJECT`, selection to `CLOCK_TICK` or `SEGMENT_TICK` |
| Web | `navigator.vibrate()` | durations only | Android browsers only; iOS Safari exposes no haptics, so web apps on iPhone are silent |

Rules: haptics confirm a state change the user caused (a toggle, a threshold crossed, a success), never scroll, never every tap, never an ambient loop; call `prepare()` before the event on iOS to remove latency; respect the system haptics setting; one brand-signature pattern at most (CRED's NeoPOP interactions, built by Dreamplug Technologies and open-sourced in 2022, are the Indian reference for haptics used as material rather than noise).

### 17.4 Pull to refresh, swipe actions, bottom navigation

- Pull to refresh (dragging a list down past a threshold to reload it): native `UIRefreshControl` and Compose `PullToRefreshBox`; the spinner tracks the pull distance, a tick fires at the threshold, release triggers the load, and the control stays until data arrives (minimum 500ms so it reads as work done).
- Swipe actions: leading for the common positive action (archive, done), trailing for destructive (delete) in red at the far end, 72 to 80pt per action, at most three; a full swipe commits only the first; Android's Material swipe-to-dismiss reveals an icon on a coloured background. Offer Undo (section 10.5) because a swipe is easy to trigger by accident.
- Bottom navigation: iOS tab bar 49pt plus the 34pt inset; Material navigation bar 80dp in the original specification and 64dp for the Expressive short bar (section 2.2); a floating action button (FAB, section 2.2) 16dp from the bottom-right (bottom-left in RTL); the bar hides nothing essential behind a More tab.

### 17.5 Keyboard avoidance and scroll behaviour

- Keyboard: iOS `keyboardLayoutGuide` (iOS 15 and later) and Android `WindowInsets.ime` with Compose `imePadding()` (API 30 and later) move the focused field and the sticky action above the keyboard; on the web, the viewport meta `interactive-widget=resizes-content` (Chrome 108 and later) makes the layout viewport shrink with the keyboard, and the focused field scrolls into view with a 16px margin. Set the keyboard's return key to the action (Next, Done, Go) with `returnKeyType` or `imeOptions` and `enterkeyhint` on the web.
- Scroll: platform momentum untouched; `overscroll-behavior: contain` on sheets and chat panes to stop scroll chaining into the page; `scroll-snap-type: x mandatory` for carousels with a 16 to 24px peek of the next item as the affordance; large titles that collapse to a 44pt bar; scroll position restored on back; nothing hijacks the wheel. A carousel that advances itself is a cheap tell (design-taste, section 3); one that is swiped by the user with a visible peek is a pattern.

## 18. Microinteractions and motion in UI

The durations, easings and spring values live in 12-motion-principles-and-ui-motion.md; this section decides where motion belongs on a screen.

Motion is feedback when it answers one of four questions, and decoration otherwise:

| Question | Motion that answers it | Example |
|---|---|---|
| Did that register? | a state change at the point of touch, 100 to 200ms | button press scale 0.97, toggle thumb slide, checkbox fill, a tick haptic |
| Where did it come from and where did it go? | spatial continuity, 200 to 400ms | a sheet rising from the bottom edge, a popover growing from its anchor, a tab indicator sliding, a shared-element transition (one element morphing from its place on the old screen to its place on the new) from a list image to the detail hero |
| What changed? | a single attention cue | a row that was just added settling into place; a value that updated flashing once at 8 per cent of the accent |
| What is happening now? | progress and loading (section 10) | a skeleton wave, a determinate bar |

Everything else is decoration: fade-up on every section, hover lift on every card, looping bounces, parallax on everything (design-taste, section 3). The house budget on a product screen is one spatial move per transition and one feedback move per control; on a marketing page one considered move per viewport, which the taste skill's "slowness" rule already demands. Exits are shorter than entrances (Material's rule, because the user has already decided to leave). `prefers-reduced-motion` and the iOS and Android reduce-motion settings replace movement with cross-fades of the same duration, never with nothing, because a state change that happens with no transition is disorienting in its own way. Rauno Freiberg's "Invisible details of interaction design" (July 2023) is the reading for the physics: its sections on kinetic physics, responsive gestures, spatial consistency, fluid morphing, scroll landmarks and Fitts's law (the time to hit a target rises with its distance and falls with its size; 02-perception-and-psychology.md, section 8.1) are the vocabulary the house uses in motion critique.

## 19. Premium UI craft details

The design engineer list: the details that separate work that reads as four hundred hours from work that reads as assembled.

### 19.1 Rendering and typography

- Focus rings that match the brand: `:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px }`; the ring colour is the accent where it holds 3:1 against both the surface and the control, otherwise ink; on dark surfaces a double ring (2px accent outside a 1px ring in the surface colour) so the ring reads on light and dark controls alike; the ring's radius follows the nested rule (control radius plus offset). `outline: none` without a replacement fails WCAG 2.4.7 and the audit. In forced colours a `box-shadow` ring disappears, so draw rings with `outline` (section 15.4).
- Custom selection colour: `::selection { background: color-mix(in oklab, var(--accent) 25%, white); color: inherit }` (Firefox 62 and later accept the unprefixed form) with text contrast kept at 4.5:1; the default blue is the loudest unbranded thing on a page of brand type.
- Scrollbars: `scrollbar-width: thin` (Baseline since December 2024, when Safari 18.2 joined Chrome 121 and Firefox 64) and `scrollbar-color: thumb track` (in Safari only from 26.2, 12 December 2025, so Baseline from then and an enhancement on older Safari, per MDN browser-compat-data); `scrollbar-gutter: stable` on scroll containers so the layout does not jump when a bar appears; never hide the scrollbar on content that scrolls vertically (Windows and Linux users rely on it) and always test on Windows, where the classic 17px bar changes the width of every layout a macOS designer approved with overlay bars.
- Font smoothing: `-webkit-font-smoothing: antialiased` on macOS disables subpixel rendering and thins the type; use it on dark surfaces where light text otherwise looks too heavy (section 15.2) and leave the default on light surfaces. `font-synthesis: none` stops the browser faking a bold or italic the family lacks; `font-kerning: normal` and `font-feature-settings` for the stylistic sets the brand face uses; `text-rendering: optimizeLegibility` only on headings because it slows long pages.
- Tabular numerals in data: `font-variant-numeric: tabular-nums` on every table, price, counter and timer; `slashed-zero` on codes, OTPs and references where 0 and O coexist; lining figures in UI, old-style only in editorial text (03-typography.md).
- Letter-spacing on caps: all-caps labels at 11 to 12px take +0.06 to +0.10em because capitals have no ascenders and descenders and sit too close at small sizes; lowercase body never gets positive tracking; display sizes over 40px take -0.01 to -0.03em; the house micro caps are wide at 400 (design-taste, section 7).
- Text wrapping: `text-wrap: balance` on headings (Chrome 114, Firefox 121, Safari 17.5) and `text-wrap: pretty` on paragraphs (Chrome 117 and Safari 26; absent from Firefox in MDN's compatibility data as of October 2026, so a progressive enhancement) remove orphans and ragged last lines; balance acts only on blocks of up to six lines in Chromium and ten in Firefox, which is why it belongs on headings; `-webkit-line-clamp` with a visible ellipsis for clamped titles; `hyphens: auto` with the `lang` attribute set on every Hindi and Arabic fragment so shaping and line breaking are correct, and `dir="auto"` on user-generated text so an Arabic name in an English list aligns correctly.
- Font loading: `font-display: swap` with `size-adjust`, `ascent-override` and `descent-override` on the fallback face so the swap from system to brand face shifts nothing; preload the two weights above the fold; subset Latin, Devanagari and Arabic into separate files with `unicode-range`.

### 19.2 Pixels and alignment

- Hairlines at 0.5px on 2x: `border-width: 0.5px` renders one device pixel on 2x and 3x screens in Safari and Chrome; on 1x it rounds to 1px; iOS uses `1 / UIScreen.main.scale` points for separators for the same reason. A 1px hairline on a 3x phone is three device pixels thick and reads heavy beside the system's own lines.
- Pixel snapping and half-pixel blur: elements positioned at fractional coordinates render text and hairlines across two device pixels and look soft. Causes: `translate(-50%, -50%)` on an element of odd size, flex centring of odd heights, a 15px icon, a 0.5 line-height remainder. Cures: even sizes for anything centred, `transform: translate3d` with rounded values, `Math.round` on measured positions, and Figma's snap-to-pixel-grid left on with every frame at a whole-number position.
- The 2px alignment: an icon vertically centred on a text box sits 1 to 2px low against the x-height; nudge icons up 1px beside lowercase labels or align them to cap height. The cleaner fix is `text-box: trim-both cap alphabetic` (text-box-trim and text-box-edge, Baseline newly available since August 2026 per 03-typography.md, section 5.4), which trims a label's box to cap height and baseline so it centres optically in a 40px button and aligns with a 16px icon without nudges; apply it to buttons, chips, badges and tab labels, keep the 1px nudge as the fallback, and use Figma's vertical trim to match. Check label and icon rows at 400 per cent zoom; the eye reads a 2px misalignment between neighbouring rows as carelessness without naming it.
- Consistent icon weight against type weight (section 11.1: one set, one stroke, one optical size per text size) and the one radius mismatch (section 13.2's nested rule), both audited at 400 per cent.
- The inconsistent hover: every element of a class gets the same hover (same alpha, same timing); one row that does nothing on hover reads as broken. Test by moving the pointer across every row, button and link on the page.
- The 4px rhythm: every dimension and space on a 4px grid, spacing from the 8px scale (4, 8, 12, 16, 24, 32, 48, 64), and the audit is a 4px overlay in the browser or Figma's layout grid (grid and spacing theory in 05-layout-grids-and-composition.md, section 8.1).
- Image compression artefacts: JPEG at quality 80 to 85 through mozjpeg and AVIF at a quality of about 50 to 65 for photography; never re-encode a JPEG from a JPEG; sharpen after downscaling (a Lanczos downscale leaves 2x images soft); check dark gradients for banding at 8 bits and add 1 to 2 per cent film grain or export a 10-bit AVIF; PNG only for flat colour and transparency.
- Cursor choices: `pointer` on links and buttons (Material and some desktop OS conventions keep the arrow on buttons; the web's users expect the hand, and the house follows the users), `grab` and `grabbing` on draggable, `text` on inputs, `not-allowed` only on a visible disabled control, resize cursors on resizable edges; a custom image cursor is a marketing-site tension move used once, never in a product.
- Touch details: `touch-action: manipulation` on controls removes double-tap zoom delay; `-webkit-tap-highlight-color: transparent` paired with a real pressed state, because removing the grey flash without replacing it leaves touch with no feedback; inputs at 16px or larger on iOS so focusing them does not zoom the page; `user-select: none` on labels and controls and never on content; `accent-color` so native checkboxes and radios take the brand colour; `color-scheme` on the root for native controls in dark mode.

### 19.3 References

- Linear: dense dark product UI with 1px borders at low alpha, 6 to 8px radii, a 4px rhythm, keyboard-first with a command palette, and typography doing the hierarchy.
- Vercel and the Geist design system: black and white, hairlines, a Swiss grid, tabular data done right; Rauno Freiberg and Paco Coursey both built there.
- Vercel's Web Interface Guidelines (vercel.com/design/guidelines; sections Interactions, Animations, Layout, Content, Forms, Performance and Design): the closest public version of this section's list. Rules the house adopts from it: hit areas expanded to at least 24px (44px on mobile); loading indicators shown after a 150 to 300ms delay and held 300 to 500ms; POST, PATCH and DELETE requests complete in under 500ms; the ellipsis character on menu items that open a further step and on loading labels ("Saving…"); a non-breaking space between number and unit ("10 MB"); in a textarea, Cmd or Ctrl plus Enter submits and Enter inserts a line. Its preference for APCA (the Accessible Perceptual Contrast Algorithm proposed for WCAG 3) over WCAG 2 contrast is contested: the house keeps WCAG 2.2 as the legal floor and uses APCA as a second opinion only (11-accessibility-and-inclusive-design.md, section 3.4).
- Stripe: documentation and dashboard craft (tabular numerals, inline code, considered empty states); the gradient hero is Stripe's owned signature, and a client build uses a gradient only when the gradient is the idea (design-taste, section 3).
- Raycast: a macOS launcher whose list rows, keyboard navigation and dark glass are the reference for desktop command surfaces.
- Arc (The Browser Company, acquired by Atlassian in September 2025 for about 610 million dollars): sidebar tabs and spring motion. On 22 October 2026 the company announced that Arc is discontinued on 22 December 2026 in favour of Dia; Arc Search on iOS continues with limited functionality and the Android app is discontinued. Study it from archives and treat its patterns as history.
- CRED and NeoPOP (2022): the Indian reference for a premium fintech interface with hard-edged depth, haptics and motion as material.
- Apple: the HIG and the system apps are the daily reference for native craft; Liquid Glass (introduced in iOS 26, still the system material in iOS 27) is the current material.
- People: Rauno Freiberg, Estonian interaction designer whose site (October 2026) lists his work with Vercel and Devouring Details, author of "Invisible details of interaction design" (July 2023); Emil Kowalski, design engineer previously at Linear and Vercel, author of Sonner (toasts) and Vaul (drawers), the course at animations.dev and the essays "You don't need animations" and "Developing taste", on a break from employment as of October 2026 per his site; Paco Coursey, at Linear (webmaster), previously builder of the Vercel design system, website and dashboard, and author of cmdk, the command palette component.

## 20. Tools: Figma, Penpot, Sketch, handoff and design QA

### 20.1 Figma deep craft as of October 2026

- Auto layout (Figma's frame setting that sizes and spaces children from direction, padding and gap, mirroring CSS flexbox) on every frame: padding and gaps from the spacing tokens; text hugs, containers fill, icons are fixed; min and max widths on text containers so bilingual labels wrap rather than overflow; wrap for chips and tag rows; Grid (an auto layout option since Config 2025) for two-dimensional layouts; absolute position only for badges and overlays. Constraints (left, right, scale, centre) only on frames outside auto layout.
- Variables and modes: four types (colour, number, string, boolean) in three collections: primitives (the raw ladder), semantic (roles: `surface`, `text.secondary`, `border.hairline`), and component (per-part aliases). Modes carry light and dark, compact and comfortable, and locale (en, hi, ar) with string variables for the labels; the number of modes per collection is plan-limited, so confirm the plan before designing a four-mode system.
- Components: one component set per element with properties for variant (size, state), boolean (show icon, show badge), instance swap (icon, avatar), text (label); nested instances exposed so a card's inner button can be set from the card; slots (a component property type, generally available since 10 June 2026 per Figma's developer changelog) mark an area inside a component where instance content can be added and arranged without detaching, with optional minimum and maximum child counts and preferred instances, which retires the old workaround of an instance-swap property pointing at a placeholder component; slots for card bodies, dialog content and list items, instance swap for single glyphs such as icons; build every state from section 3.2 as a variant, including empty, loading and error.
- Prototyping with smart animate (Figma's transition that interpolates position, size and opacity between same-named layers in two frames): ease-out 200 to 300ms for spatial moves and the spring presets for sheets; interactive components for state changes inside a component; overlays for sheets and dialogs; conditional logic and prototype variables for flows that branch; one prototype per flow rather than one giant canvas.
- Dev Mode: inspect with token names, `Ready for dev` status on sections, annotations for behaviour a frame cannot show (timing, focus order, keyboard, validation), measure, compare changes between versions; Code Connect maps a component to its real code so the snippet shown is the production component rather than generated CSS; the Figma MCP (Model Context Protocol, the open standard for connecting AI agents to tools) server hands variables and Code Connect mappings to coding agents, and since 26 October 2026 also exposes Figma Weave's image and video models (billed in Weave credits); Figma Motion (marked New in Figma's navigation, October 2026) lets engineers inspect an animation's full timeline in Dev Mode, copy it as CSS, JSON or React, and pass ease and timing values to coding agents through the MCP server. Seat prices on figma.com/pricing as of October 2026 (USD per seat per month, annual billing): Professional Full 16, Dev 12, Collab 3, with monthly billing costing more and seats added mid-term charged at the monthly price; Organization Full 55, Dev 25, Collab 5 (billed annually); Enterprise Full 90, Dev 35, Collab 5; viewing and commenting need no seat.
- Version history and libraries: a named version at every review and release; branching on Organization and Enterprise for system changes; two libraries (foundations: variables, type styles, icons; components), product files subscribe; publish with a change note; prune by library analytics.
- Naming and file organisation: components `Category / Component`, properties in sentence case with values capitalised (`Size=Medium, State=Default`); layers named by role (`label`, `icon-leading`, `container`), never `Frame 412`; pages in order `Cover, Ready for dev, In progress, Explorations, Archive`; one file per product area; a cover with status and owner.
- Plugins that matter: Tokens Studio (token JSON in the W3C Design Tokens Community Group (DTCG) format, round-trip to code; see 07-design-systems-and-tokens.md), Stark or Able (contrast and vision simulation), Iconify (every set in section 11.3), Content Reel and realistic data fillers, Rename It and Clean Document, Similayer; the Figma agent (generally available since 6 October 2026, following design library guidelines) and Figma Make for throwaway explorations; from Config India (Bengaluru, 15 October 2026), code layers (interactive, code-backed prototypes on the canvas; open beta, free on paid plans until 4 November 2026, then billed in AI credits) and Figma Specs (a Markdown specification format that people and agents both read; open beta) are the betas to watch for handoff.

### 20.2 Penpot and Sketch

- Penpot: open source (MPL 2.0), self-hostable, with a CSS-native layout model (its flex and grid layouts map one to one to CSS). Native design tokens following the DTCG draft. 2.17 (22 July 2026) moved the prototype viewer to a WebAssembly (Skia) renderer, drew guides in WebGL, added token autocomplete and a composite typography token input in the Design sidebar, and added layer blur; 2.18 (23 September 2026, patched to 2.18.5 on 26 October) added Line and Arrow tools, comments while designing, background blur on text and strokes, and SVG image fills in the WebGL renderer (Penpot GitHub releases). Choose it where the client must keep design data on its own servers (UAE government-linked entities and some Indian public-sector work) or refuses per-seat pricing; expect fewer plugins and no Code Connect equivalent.
- Sketch: version 2026.3.1 (14 September 2026), a Mac app requiring macOS 15 or later, with a web app for viewing and handoff and an iOS app. Legacy for the house: some Apple-centric clients still deliver `.sketch` files; import into Figma for active work and keep the original for the archive.

### 20.3 Handoff protocol

Redlines (annotated measurement overlays drawn on a static export) are dead: measurement is live in Dev Mode and tokens name the values, so a PDF of arrows and numbers is an artefact of 2015. What the house hands over:
1. Frames marked Ready for dev, one flow per page, at compact, medium and expanded widths, light and dark.
2. The variant matrix per component with every state of section 3.2.
3. Annotations for what a frame cannot show: timing and easing, focus order, keyboard behaviour, validation timing, what happens at 200 per cent text size, what happens with a 40 per cent longer Hindi or Arabic label.
4. A prototype for every spatial transition.
5. Real content: final strings in every locale, real images with focal points, real numbers in rupees and dirhams.
6. Edge cases: empty, error, loading, long text, zero, one and many items.
7. Tokens as JSON (Tokens Studio export or the Variables REST API) and Code Connect mappings.
8. A 30 minute walkthrough with the engineers, and acceptance criteria in the ticket that quote this file's sections.

### 20.4 Design QA against the build: the pixel review

1. Overlay the frame on the build at 1x and 2x (Dev Mode compare, or a browser overlay extension such as PerfectPixel) at each breakpoint; differences over 2px are defects.
2. Run the state audit (section 22.2) on every component in the build.
3. Open the inspector: are the CSS custom properties the token names, or hard-coded hex and px?
4. Type: size, line height, weight, tracking, features, font loading without a shift.
5. Spacing against the 4px overlay; radii against the scale; hairlines at 0.5px on 2x.
6. Motion: timings and easings match 12-motion-principles-and-ui-motion.md; reduced motion honoured.
7. Widths 360, 390, 402, 440, 768, 1024, 1440, 1920; dark mode; 200 per cent text size; keyboard only; VoiceOver or TalkBack for one full flow.
8. Performance: Core Web Vitals, Google's three field metrics (largest contentful paint, LCP, under 2.5 seconds; interaction to next paint, INP, under 200ms; cumulative layout shift, CLS, under 0.1), on a throttled mid-range Android profile; image bytes per viewport.
9. Content: real copy, bilingual rendering, number formatting (section 5.5).
10. Log each defect with the frame link, the build URL, a screenshot and a severity (1 blocks release, 2 fixes before launch, 3 backlog); sign off in the ticket. Once stable, lock the look with visual regression testing (automated screenshot comparison against approved baselines: Storybook with Chromatic, or Playwright screenshots) so later changes diff against the approved pixels.

## 21. Web app, native app and marketing site: different craft expectations

| Dimension | Web app (dashboard, booking engine, CRM) | Native app (iOS, Android) | Marketing site (brand, campaign, microsite) |
|---|---|---|---|
| What is judged | speed, density, keyboard, reliability | platform fidelity, gestures, haptics, offline, launch time | the idea, the image, the type, the pace |
| Motion budget | feedback only; spatial moves on overlays | platform transitions plus signature moments | one considered move per viewport, scroll-driven allowed (design-taste, section 7) |
| Type | 14 to 16px base, a UI face with tabular figures, hierarchy by weight | the platform face or a licensed brand face embedded; Dynamic Type (Apple's user-set system text size) and Android font scaling honoured | display scale with extreme contrast, the brand face set with conviction |
| Chrome | the app's own, persistent, keyboard-navigable | the platform's (tab bars, sheets, glass) | almost none: a mark, a menu, an ending |
| States | the full matrix on every component; empty, error and loading as first-class | the matrix plus offline, permission denied, low battery, interrupted | few states; hover and focus still complete |
| Performance | INP under 200ms on every interaction; virtualised lists | 60 or 120 fps scroll; cold launch under 2 seconds | LCP under 2.5 seconds with a hero image, 1.5 without; images are most of the weight |
| Accessibility baseline | WCAG 2.2 AA, keyboard complete | platform accessibility APIs, VoiceOver and TalkBack labels, reduce motion and transparency | WCAG 2.2 AA; luxury is no excuse for grey-on-grey |
| Hover | present; design for fine pointers and coarse ones | none | present on desktop; nothing essential behind it |
| Release cadence | continuous; design system versioned | store review; feature flags | per campaign; a site has an end date |
| Slowness | a defect | a defect | a feature when it is the idea (a slow reveal, a held frame) |

The craft error to avoid is importing one surface's expectations into another: a marketing site built like a dashboard (dense, grey, componentised) reads as corporate; a dashboard built like a campaign (hero motion, display type) is unusable by the third day. Web craft for marketing pages is in 21-web-design-and-digital-craft.md.

## 22. The UI polish checklist and the state audit method

### 22.1 The checklist before any screen ships

Layout and spacing
1. Every dimension on the 4px grid; spacing from the 8px scale.
2. Gutters 16 to 20px on compact, 24 on medium, 32 to 64 on expanded; content max-width set.
3. Safe areas respected: fixed bars extend through the 34pt bottom inset; nothing tappable in the top inset; Android insets handled, since edge-to-edge is mandatory from API 36.
4. No horizontal overflow at 360dp; tested at 360, 390, 402, 440, 768, 1024, 1440, 1920; every hero checked in a real browser window at about 780px of visible height.
5. Alignment: text left, numbers right, one axis per column; no element off-grid by 1 to 2px.
6. Radii from the scale; nested radii concentric (`ConcentricRectangle` on Apple platforms); one radius token per element class.
7. Hairlines at 0.5px on 2x screens; dividers at 8 to 12 per cent of ink.

Type
8. One UI family; weights from the house ladder (design-taste, section 7).
9. Sizes from the type scale; no 13.5px; line heights from the scale.
10. Tabular figures on every number that aligns or changes; slashed zero on codes.
11. All-caps labels tracked +0.06 to +0.10em; display tracked slightly negative.
12. Headings balanced, paragraphs pretty-wrapped, titles clamped with a visible ellipsis; labels trimmed with `text-box` where supported.
13. Hindi and Arabic strings render, wrap and align correctly with `lang` and `dir` set; labels survive a 40 per cent length change; RTL mirroring per section 2.7 checked with `dir="rtl"`, `ar-XB` and the Xcode right-to-left pseudolanguage.
14. Fonts load without a layout shift; fallbacks size-adjusted; no synthesised bold or italic; U+20C1 and U+20C3 in the Latin subset of any Gulf pricing face.
15. A non-breaking space between number and unit ("10 MB"); the ellipsis character, never three full stops.

Colour and surfaces
16. Two colours plus one accent (design-taste, section 2); accent once per screen.
17. Text contrast 4.5:1 (body) and 3:1 (large); UI component contrast 3:1 (WCAG 1.4.11); checked in both modes.
18. Meaning never carried by colour alone: icon or text accompanies every status colour.
19. Elevation from the house levels; shadow only on surfaces that float; dark mode elevation by lightness.
20. Translucency limited to one navigation surface; reduced transparency honoured.
21. Dark mode: no white image boxes, logo variant present, accents desaturated, body text at 87 per cent, near-black ground.
22. Forced colours: focus rings and hairlines survive `forced-colors: active`; only swatches and brand marks opt out with `forced-color-adjust: none`.
23. Android dynamic colour off on brand surfaces; a static scheme generated from the brand seed.

Components and states
24. Every component has every applicable state from section 3.2 designed and built, including pending, offline or stale and streaming where the product has them.
25. Hover only on fine pointers and identical across every element of a class; pressed state present on touch; focus-visible ring on every interactive element.
26. Disabled used as a last resort (section 4.5): submit actions stay enabled and validate on press; unavailable controls use `aria-disabled` with the reason shown; disabled at 38 per cent and distinct from read-only; loading state preserves width.
27. Touch targets 44pt and 48dp; WCAG 2.5.8 24px minimum met everywhere including dense desktop.
28. One primary button per view, consent UI excepted (accept and reject at equal weight); labels are verb plus object; destructive actions red and separated.
29. Icons from one set, one stroke, one optical size per text size; every navigation icon labelled.
30. Badges capped at 99+, announced through the parent's accessible name, on one tab at most; selected chips carry a check.
31. Menus follow the keyboard model of section 9.5; every context-menu action is also reachable from a visible control.

Forms
32. Labels above fields, visible always; placeholders only for format examples.
33. Validation on blur, live recovery after the first error; errors in text plus icon plus colour, next to the field; first invalid field focused on submit.
34. Input types, `inputmode` and `autocomplete` tokens set; OTP is one field that accepts paste and autofill; known dates use Day, Month and Year fields; amounts use `inputmode="decimal"`.
35. Phone, rupee and dirham, card and date formats as section 5.5; `en-IN` grouping for rupees.
36. Optional fields marked when most are required, required fields marked when most are optional; forms over 8 fields split into steps with named progress; earlier answers prefilled (WCAG 3.3.7).
37. Keyboard: Tab order follows reading order; Enter submits; Cmd or Ctrl plus Enter submits a textarea; Escape closes; the return key is set to the action.

Navigation
38. 3 to 5 tabs with labels; active tab filled; tapping the active tab returns to top.
39. Back works on every screen, including the browser back on every app state; predictive back migrated on Android; the iOS 26 content pan tested against every horizontal gesture on pushed screens.
40. Every screen worth sending has a URL or deep link; auth returns the user to the destination.
41. Labels carry information scent: read aloud without the page, they predict the content.
42. Desktop marketing navigation shows 4 to 6 visible links from 1024px unless the site has three or fewer destinations; search follows section 6.5.

Feedback
43. Nothing shows a spinner under 100ms; skeletons for 1 to 10 seconds in the final layout; determinate progress and cancel over 10 seconds.
44. Every list and table has designed empty (first use, no results, error, cleared) and loading rows.
45. Toasts 4 seconds without an action, 10 with; errors persistent; `aria-live` set.
46. Tooltips meet WCAG 1.4.13: dismissible with Escape, hoverable across the gap, persistent while hovered or focused; never the only carrier of information.
47. Reversible destructive actions use Undo; irreversible ones confirm with the consequence named.
48. Success acknowledged once and briefly; transaction success pages carry the reference and the next step.

Imagery
49. Every image box has an aspect token and a focal point; no centred crop on faces.
50. Placeholders (ThumbHash or LQIP) and blur-up; LCP image prioritised and never lazy; everything below the fold lazy.
51. AVIF with WebP and JPEG fallbacks; 2x cap on photography; no visible compression artefacts or banding.
52. Broken-image and avatar fallbacks designed.
53. Text over imagery passes contrast against the lightest pixels behind it, in every crop token and in dark mode.

Motion
54. One spatial move per transition; feedback motion 100 to 200ms; exits shorter than entrances.
55. Reduced motion replaces movement with cross-fades; nothing loops; nothing auto-advances.
56. Blur radius never animated; no more than three or four translucent surfaces per viewport.

Platform and accessibility
57. iOS 26 and later and Android 16 and later chrome left to the system; brand lives in the content layer; a Liquid Glass audit done for any Xcode 27 build.
58. iPad and Android tablet layouts exist at medium and expanded widths, because neither platform lets an app lock them out any more.
59. Keyboard-only pass of every flow; focus never lost into a closed overlay; focus returns to the trigger.
60. Focus never obscured: `scroll-padding` set for sticky headers and bars; banners and toasts never cover the focused element (WCAG 2.4.11).
61. Every drag has a single-pointer alternative (WCAG 2.5.7): sheet handles toggle on tap; reorderable lists offer Move up and Move down.
62. Screen reader pass of one full flow per release (VoiceOver and TalkBack); every icon button labelled; headings in order.
63. 200 per cent text size and Dynamic Type at the largest accessibility setting do not break layout or hide actions.
64. Core Web Vitals green on a throttled mid-range Android; cold launch under 2 seconds on native.
65. Real content in every locale; numbers, dates and currencies formatted for India and the UAE; no lorem ipsum anywhere in the build.
66. Tested on a real OLED phone in dark mode at low brightness and on a Windows laptop with visible scrollbars.
67. Consent banners give accept and reject equal weight, pre-tick nothing and leave a footer link to change choices.
68. Full WCAG 2.2 AA audit per 11-accessibility-and-inclusive-design.md, section 16.3, before launch.
69. Design-taste tests passed (design-taste, section 4, step 7).

### 22.2 The state audit method

State audit: a systematic check that every component in a build renders every applicable state from section 3.2 correctly, in every variant, in both modes.

1. List: from the design system inventory, every component and its variants (size, emphasis, with or without icon).
2. Matrix: rows are the 23 states of section 3.2 (default, hover, focus, focus-visible, active, disabled, loading, selected, checked, indeterminate, error, warning, success, read-only, empty, skeleton, dragged, drop target, focus-within, visited, pending, offline or stale, streaming); columns are the variants; cells are marked applicable or not before testing.
3. Build each applicable cell as a story (Storybook or the native equivalent) so it can be rendered on demand without driving the app into that state by hand.
4. Walk: Tab through every page (focus-visible), hover every element with a mouse (hover), press and hold (active), throttle the network to 3G (loading, skeleton), go offline (error, offline or stale), clear the data (empty), submit bad data (error, warning), complete a task (success), use a keyboard-only session and a screen reader session, then repeat in dark mode and at 200 per cent text size.
5. Record: a screenshot per cell, pass or fail, the token used; fails become tickets with severity.
6. Lock: approved cells become visual regression baselines (Chromatic or Playwright), so a later change that alters a hover alpha or a radius fails the build before any client sees it.
7. Repeat the walk on every release; keep the matrix in the repository next to the components so it versions with the code.

## Terms introduced

- Ambient and key shadow: the soft, unoffset, low-alpha shadow that implies distance, and the sharp, offset shadow that defines the edge, in a two-part shadow model.
- Aspect ratio token: a named ratio (square, portrait, wide) that every image box in a product is sized by.
- Avatar: a small image or initials block representing a person or entity, at fixed sizes with a deterministic fallback.
- Banner: a persistent message strip at the top of content for session-level conditions such as offline or unpaid.
- Baseline: the web platform's label for a feature supported in the current versions of Chrome, Edge, Firefox and Safari.
- Blur-up: showing a blurred placeholder and cross-fading to the full image when it loads.
- BlurHash: a 20 to 30 character string (Wolt, 2018) decoded on the client into a blurred preview of an image.
- Bottom sheet: a surface that rises from the bottom edge to resting heights (detents) for a choice or short task.
- Card: a bounded container holding one item's image, title, metadata and action as a single tappable unit.
- Code Connect and Dev Mode: Figma's mapping of a design component to its production code, and the inspection mode for engineers that shows it with token names, measurements and annotations.
- Code layer: an interactive, code-backed prototype object on the Figma canvas, in open beta since Config India, October 2026.
- Container query: a CSS rule conditioned on the size of an ancestor container rather than the viewport.
- Continuous corner: Apple's term for a squircle corner on layers and icons.
- Core Web Vitals: Google's three field metrics for page experience: largest contentful paint, interaction to next paint and cumulative layout shift.
- CSS pixel: the web's reference unit, mapped to physical pixels by the device pixel ratio.
- Deep link: a URL or universal link that opens a specific screen inside an app.
- Density bucket: an Android screen density class (mdpi to xxxhdpi) that determines which raster asset is loaded.
- Density-independent pixel (dp): Android's logical unit, about one physical pixel at 160dpi.
- Detent: a resting height of a sheet.
- Determinate and indeterminate progress: an indicator that shows a known fraction of the work, and one that shows work in progress without a fraction.
- Device pixel ratio: physical pixels per CSS pixel.
- E.164: the international phone number format of a plus sign, country code and digits with no separators.
- Edge swipe: a gesture that starts at a screen edge, reserved by the platform for back, home and system panels.
- Floating label: a field label that starts inside the field and moves above it on focus.
- Fluent 2: Microsoft's cross-platform design system.
- Focal point: the stored x and y of an image's subject used to position crops.
- Focus trap: keeping keyboard focus inside an open dialog until it closes.
- Hairline: a 1px (or 0.5px on 2x screens) border at low alpha used to define an edge without a shadow.
- Halation (irradiation): the perceptual effect that makes light text on dark look heavier than the same weight dark on light.
- Haptic feedback: a short vibration pattern the device plays in response to an interaction.
- Information scent: the cues in a label or preview that let a user predict what lies behind a link.
- Inline alert: a boxed message placed next to the content it concerns, in an info, success, warning or error variant.
- Inline validation: checking a field's value as the user leaves it, before the form is submitted.
- Keyline shapes: the square, circle and rectangles inside an icon grid's live area that equalise visual weight across silhouettes.
- Lensing: Liquid Glass's refraction of the content beneath a glass surface.
- Light dismiss: closing an overlay by clicking outside it or pressing Escape.
- Liquid Glass: Apple's system material introduced with iOS 26 and macOS 26 for the navigation layer.
- Live area: the inner region of an icon grid (20dp of a 24dp canvas) within which the glyph is drawn.
- Logical resolution: the size of a screen in points or dp that layouts are designed to, as distinct from physical pixels.
- LQIP (low quality image placeholder): a tiny inlined JPEG blurred with CSS while the full image loads.
- Material 3 and Material 3 Expressive: Google's design system for Android and the web, and its 2025 extension with a shape library, spring motion scheme and new components.
- Mega menu: a wide navigation panel of grouped links opened from a top-level item on a marketing site.
- Modal: an overlay that blocks interaction with the page beneath until dismissed.
- Nested radius rule: inner radius equals outer radius minus the padding between them, so corners stay concentric.
- Optical alignment: shifting a glyph from its geometric centre so it appears centred to the eye.
- Optical sizing: changing an icon's or type's stroke and proportions with its rendered size rather than scaling one drawing.
- Optimistic UI: showing the result of an action before the server confirms it, then reconciling.
- Physical pixel: one addressable light element on a panel.
- Pixel snapping: placing element edges on whole device pixels so hairlines and text render crisply.
- Placeholder text: hint text inside an empty field that disappears on input.
- Point (pt): Apple's logical unit; three physical pixels on current iPhones, two on iPads.
- Popover: a small overlay anchored to its trigger that closes on outside click or Escape.
- Predictive back: Android's system back animation that previews the destination while the user swipes.
- Progressive enhancement: building the baseline rendering for every browser and layering the better one on where supported.
- Pull to refresh: dragging a list down past a threshold to reload it.
- Redlines: annotated measurement overlays drawn on a static design export, replaced by live inspection and tokens.
- Rem: the CSS unit relative to the root font size, 16px by default.
- Safe area: the screen region not covered by status bar, Dynamic Island, home indicator or rounded corners.
- Scalable pixel (sp): Android's text unit, equal to dp until the user raises the system text size.
- Scrim: the translucent layer behind a modal that dims the page beneath.
- Scroll chaining: a nested scroll container passing its overscroll to the page, prevented with `overscroll-behavior: contain`.
- Side sheet: a panel that slides in from a screen edge on desktop for filters or detail while the page stays interactive.
- Skeleton screen: a placeholder that draws the layout's blocks in neutral grey before content arrives.
- Slot: a Figma component property marking an area inside a component where instance content can be added and arranged without detaching.
- Small, large and dynamic viewport height (svh, lvh, dvh): the CSS units for the viewport with mobile toolbars shown, retracted, and as it currently is.
- Squircle: a corner drawn as a superellipse so curvature eases in from the straight edge.
- State: a named condition of a component that changes its appearance or behaviour.
- State audit: a systematic check that every component renders every applicable state in every variant and mode.
- State layer: a translucent overlay in the content colour that expresses hover, focus, pressed and dragged.
- State matrix: the table of states against variants used to design and audit a component.
- Tabular figures: digits of equal width so columns of numbers align and counters do not jitter.
- Thumb zone: the region of a phone screen a thumb reaches comfortably in a one-handed grip.
- ThumbHash: a placeholder hash of about 21 to 25 bytes (Evan Wallace, 2023) encoding a blurred preview, alpha and aspect ratio.
- Toast (snackbar): a brief message that appears without interrupting the task and leaves by itself.
- Tooltip: a short label that appears on hover or keyboard focus and must never carry essential information.
- Top layer: the browser rendering layer above every z-index used by `<dialog>` and popovers.
- Viewport: the visible area of a page; mobile browsers have a large and a small one depending on toolbar state.
- Virtualisation: rendering only the list rows in and near the viewport.
- Visual regression testing: automated screenshot comparison of a build against approved baselines.
- Window size class: Android's breakpoint vocabulary (compact, medium, expanded, large, extra-large) for adaptive layout.
- Zebra striping: alternating row backgrounds in a table.

## Sources and further reading

Books
- Alan Cooper, Robert Reimann, David Cronin and Christopher Noessel, About Face: The Essentials of Interaction Design, 4th edition, 2014.
- Jakob Nielsen, Usability Engineering, 1993.
- Luke Wroblewski, Web Form Design: Filling in the Blanks, 2008.
- Steven Hoober and Eric Berkman, Designing Mobile Interfaces, 2011.
- Dan Saffer, Microinteractions, 2013.

Specifications, standards and platform documentation
- W3C, Web Content Accessibility Guidelines (WCAG) 2.2, 2023: https://www.w3.org/TR/WCAG22/
- W3C, Understanding WCAG 2.2, Success Criterion 1.4.13 Content on Hover or Focus: https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html
- W3C, WAI-ARIA Authoring Practices Guide, Menu Button pattern: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/ ; Combobox pattern: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
- W3C, CSS Values and Units Module Level 4 (viewport units): https://www.w3.org/TR/css-values-4/
- W3C, CSS Containment Module Level 3 (container queries): https://www.w3.org/TR/css-contain-3/
- W3C, CSS Anchor Positioning Module Level 1: https://www.w3.org/TR/css-anchor-position-1/
- W3C, CSS Borders and Box Decorations Module Level 4 (corner-shape): https://drafts.csswg.org/css-borders-4/
- W3C, CSS Color Adjustment Module Level 1 (forced colours): https://www.w3.org/TR/css-color-adjust-1/
- WHATWG, HTML Living Standard: the dialog element, the popover attribute and the search element: https://html.spec.whatwg.org/
- MDN Web Docs and MDN browser-compat-data (scrollbar-color, scrollbar-width, anchor positioning, appearance: base-select, text-wrap, viewport units): https://developer.mozilla.org/ and https://github.com/mdn/browser-compat-data
- web.dev, New to the web platform in December 2024 (scrollbar properties): https://web.dev/blog/web-platform-12-2024
- Chrome for Developers, New in Chrome 139 (corner-shape), 5 August 2025: https://developer.chrome.com/blog/new-in-chrome-139 ; WebOTP API: https://developer.chrome.com/docs/identity/web-apis/web-otp
- Apple, Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Apple, WWDC25 session 219, Meet Liquid Glass: https://developer.apple.com/videos/play/wwdc2025/219/
- Apple, Upcoming requirements (Xcode 26 and the iOS 26 SDK since 28 April 2026): https://developer.apple.com/news/upcoming-requirements/
- Apple, UIDesignRequiresCompatibility: https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility
- Apple, UIRequiresFullScreen (deprecated in iPadOS 26) and TN3192, Migrating your app from the deprecated UIRequiresFullScreen key: https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIRequiresFullScreen
- Apple, UINavigationController interactiveContentPopGestureRecognizer: https://developer.apple.com/documentation/uikit/uinavigationcontroller/interactivecontentpopgesturerecognizer
- Apple, SwiftUI ConcentricRectangle: https://developer.apple.com/documentation/swiftui/concentricrectangle
- Apple Support, About iOS 26 Updates (the iOS 26.1 Liquid Glass setting): https://support.apple.com/en-us/123075
- Apple, SF Symbols: https://developer.apple.com/sf-symbols/
- Apple, UIFeedbackGenerator documentation: https://developer.apple.com/documentation/uikit/uifeedbackgenerator
- Apple, MacBook Air and MacBook Pro tech specs: https://www.apple.com/macbook-air/specs/ and https://www.apple.com/macbook-pro/specs/
- Google, Material Design 3: https://m3.material.io/ ; badges: https://m3.material.io/components/badges/specs ; chips: https://m3.material.io/components/chips/specs ; lists: https://m3.material.io/components/lists/specs ; dynamic colour: https://m3.material.io/styles/color/dynamic
- Google Design, the Material 3 Expressive research article: https://design.google/library/expressive-material-design-google-research ; Jetpack Compose Material 3 release notes: https://developer.android.com/jetpack/androidx/releases/compose-material3
- AndroidX source, Compose Material 3 tokens (StateTokens.kt, BadgeTokens.kt, ListTokens.kt, AssistChipTokens.kt, NavigationBarTokens.kt): https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens
- Material Foundation, material-color-utilities: https://github.com/material-foundation/material-color-utilities
- Google, Material Design 2 dark theme (elevation overlay table): https://m2.material.io/design/color/dark-theme
- Google, Material Symbols guide: https://developers.google.com/fonts/docs/material_symbols
- Google, Use window size classes: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
- Google, Android 16 behaviour changes for apps targeting Android 16: https://developer.android.com/about/versions/16/behavior-changes-16
- Google Play Console Help, Target API level requirements for Google Play apps: https://support.google.com/googleplay/android-developer/answer/11926878
- Google, HapticFeedbackConstants: https://developer.android.com/reference/android/view/HapticFeedbackConstants
- Microsoft, Fluent 2 design system: https://fluent2.microsoft.design/
- GOV.UK Design System, Date input: https://design-system.service.gov.uk/components/date-input/
- Unicode Consortium, Unicode Character Database (U+20C1 SAUDI RIYAL SIGN, Unicode 17.0; U+20C3 UAE DIRHAM SIGN, Unicode 18.0): https://www.unicode.org/Public/UCD/latest/ucd/
- Central Consumer Protection Authority, Guidelines for Prevention and Regulation of Dark Patterns, 2023: https://consumeraffairs.gov.in/
- ios-resolution.com, iOS device logical resolutions: https://www.ios-resolution.com/ ; Use Your Loaf, iPhone 17 screen sizes (safe area insets): https://useyourloaf.com/blog/iphone-17-screen-sizes/ ; Google Store, Pixel 11 tech specs: https://store.google.com/product/pixel_11_specs ; StatCounter Global Stats, desktop screen resolution share: https://gs.statcounter.com/screen-resolution-stats/desktop/worldwide
- Figma, release notes and pricing: https://www.figma.com/release-notes/ and https://www.figma.com/pricing/ ; What's new from Config India 2026: https://help.figma.com/hc/en-us/articles/43663368947863 ; Slots GA plugin API update, 10 June 2026: https://developers.figma.com/docs/plugins/updates/2026/06/10/update/ ; Figma Motion: https://www.figma.com/motion/
- Penpot releases: https://github.com/penpot/penpot/releases ; Sketch updates: https://www.sketch.com/updates/
- Evan Wallace, ThumbHash: https://evanw.github.io/thumbhash/
- Phosphor Icons: https://phosphoricons.com/ ; Lucide: https://lucide.dev/ ; Heroicons: https://heroicons.com/ ; Remix Icon: https://remixicon.com/
- Sonner (toasts): https://sonner.emilkowal.ski/ ; Vaul (drawers): https://vaul.emilkowal.ski/ ; TanStack Virtual: https://tanstack.com/virtual
- CRED, NeoPOP web library: https://github.com/CRED-CLUB/neopop-web

Articles, studies and talks
- Robert B. Miller, Response Time in Man-Computer Conversational Transactions, AFIPS Fall Joint Computer Conference, 1968: https://doi.org/10.1145/1476589.1476628
- Jakob Nielsen, Response Times: The 3 Important Limits, 1993: https://www.nngroup.com/articles/response-times-3-important-limits/
- Matteo Penzo, Label Placement in Forms, UXmatters, 2006: https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php
- Luke Wroblewski, Inline Validation in Web Forms, A List Apart, 2009: https://alistapart.com/article/inline-validation-in-web-forms/
- Jessica Enders, Zebra Striping: Does it Really Help?, A List Apart, 2008: https://alistapart.com/article/zebrastripingdoesithelp/
- Steven Hoober, How Do Users Really Hold Mobile Devices?, UXmatters, 2013: https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
- Chris Harrison, Brian Amento, Stacey Kuznetsov and Robert Bell, Rethinking the Progress Bar, UIST 2007: https://doi.org/10.1145/1294211.1294231
- Peter Pirolli and Stuart Card, Information Foraging, Psychological Review, 1999: https://doi.org/10.1037/0033-295X.106.4.643
- Jared Spool, Christine Perfetti and David Brittan, Designing for the Scent of Information, UIE, 2004.
- Kara Pernice and Raluca Budiu, Hamburger Menus and Hidden Navigation Hurt UX Metrics, Nielsen Norman Group, 26 June 2016: https://www.nngroup.com/articles/hamburger-menus/
- Nielsen Norman Group: Icon Usability, 2014: https://www.nngroup.com/articles/icon-usability/ ; Placeholders in Form Fields Are Harmful, 2014: https://www.nngroup.com/articles/form-design-placeholders/ ; Cards: UI-Component Definition, 2016: https://www.nngroup.com/articles/cards-component/
- Nielsen Norman Group: Confirmation Dialogs Can Prevent User Errors, If Not Overused, 2018: https://www.nngroup.com/articles/confirmation-dialog/ ; Therese Fessenden, Modal and Nonmodal Dialogs: When (and When Not) to Use Them, 2017: https://www.nngroup.com/articles/modal-nonmodal-dialog/ ; Samhita Tankala, Skeleton Screens 101, 2023: https://www.nngroup.com/articles/skeleton-screens/
- Nielsen Norman Group: Infinite Scrolling Is Not for Every Website: https://www.nngroup.com/articles/infinite-scrolling/ ; Error-Message Guidelines: https://www.nngroup.com/articles/error-message-guidelines/
- Viget, A Bone to Pick with Skeleton Screens, 2017: https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/
- Bill Chung, Everything You Need to Know About Skeleton Screens, UX Collective, 2018.
- Baymard Institute, average checkout form fields, 2024 benchmark: https://baymard.com/blog/checkout-flow-average-form-fields
- Josh W. Comeau, Designing Beautiful Shadows in CSS, 2021: https://www.joshwcomeau.com/css/designing-shadows/
- Vercel, Web Interface Guidelines: https://vercel.com/design/guidelines
- Rauno Freiberg, Invisible Details of Interaction Design, July 2023: https://rauno.me/craft/interaction-design
- Emil Kowalski, writing and the animations.dev course: https://emilkowal.ski/
- Paco Coursey, cmdk: https://cmdk.paco.me/
- Brecht De Ruyte, Beyond border-radius (the CSS corner-shape property), Smashing Magazine, March 2026: https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui/
- Wikipedia, Arc (web browser), status as of October 2026: https://en.wikipedia.org/wiki/Arc_(web_browser)
