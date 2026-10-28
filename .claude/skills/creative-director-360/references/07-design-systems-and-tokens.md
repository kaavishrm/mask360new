# Design systems and design tokens

How to build, govern and ship a system that keeps craft consistent across teams, products and brands: the layer model, token architecture, the DTCG format, component API design, the canonical systems, documentation, governance, the design-to-code pipeline and the agency delivery method. As of October 2026. Taste decisions (what the system should look like) live in the design-taste skill; this file is the engineering of consistency beneath it.

## Table of contents

- [1. Definitions and layers](#1-definitions-and-layers)
- [2. Structural models: atomic design and its alternatives](#2-structural-models-atomic-design-and-its-alternatives)
- [3. Token architecture](#3-token-architecture)
- [4. The DTCG format and the tooling around it](#4-the-dtcg-format-and-the-tooling-around-it)
- [5. Theming and multi-brand strategy](#5-theming-and-multi-brand-strategy)
- [6. Token categories, scales and values](#6-token-categories-scales-and-values)
- [7. Component API design and the accessibility contract](#7-component-api-design-and-the-accessibility-contract)
- [8. Canonical systems to study](#8-canonical-systems-to-study)
- [9. Documentation](#9-documentation)
- [10. Governance and operations](#10-governance-and-operations)
- [11. Motion, sound and content inside the system](#11-motion-sound-and-content-inside-the-system)
- [12. Accessibility inside the system](#12-accessibility-inside-the-system)
- [13. The design-to-code pipeline](#13-the-design-to-code-pipeline)
- [14. Building a system for a client as an agency](#14-building-a-system-for-a-client-as-an-agency)
- [15. Brand systems beyond product](#15-brand-systems-beyond-product)
- [16. Audit checklist and token reference table](#16-audit-checklist-and-token-reference-table)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. Definitions and layers

### 1.1 Five things people call a design system

A design system is the full set of shared decisions, assets, code and rules that let many people build one coherent product family, plus the people and process that keep it alive. The other four terms name parts of it, and conflating them is the first failure of most agency proposals.

| Term | What it contains | What it lacks | Typical owner |
|---|---|---|---|
| Style guide | Written rules for identity: logo, colour, type, voice, imagery. A PDF or a site. | Working components, code, governance. | Brand team or agency |
| UI kit | A Figma (or Sketch) file of reusable components and styles. | Code, documentation of intent, a release process. | Product designers |
| Pattern library | Documented solutions to recurring interface problems (how to do a filter, a wizard, an empty state), each with the components it uses. | The atomic parts themselves; often has no code. | Design and UX |
| Component library | Coded, versioned, tested UI components published as a package. | Design files, written guidance, governance. | Front-end engineers |
| Design system | All of the above, linked by tokens, documented in one place, versioned, governed. | Nothing by definition; in practice usually governance. | A named team with a budget |

The reason to be precise: a client who asks for a design system and receives a UI kit will stop using it within a quarter because engineers cannot consume it, and a client who receives a component library with no Figma library will watch designers draw over it. Alla Kholmatova's definition is the one the house uses: a set of interconnected patterns and shared practices, coherently organised to serve the purpose of a product (Design Systems, 2017).

### 1.2 The layer stack

Each layer depends on the ones above it. Change at the top propagates down, which is the whole point.

| Layer | Contents | Artefact | Failure mode when missing |
|---|---|---|---|
| Foundations | The principles and the brand decisions: colour theory, type system, grid, spacing logic, iconography style, imagery direction | Written guidance plus the design-taste reference board | Components with no shared logic; every screen re-argues the basics |
| Tokens | Named values for every foundation decision (colour, type, space, radius, motion) in a platform-neutral file | `.tokens.json`, Figma variables, generated CSS and platform code | Hard-coded hex values; no theming possible |
| Primitives | Unstyled or minimally styled building blocks: box, stack, text, icon, visually-hidden, focus ring | Code package; in Figma, base components | Each component re-implements layout and focus |
| Components | Styled, accessible, documented UI parts: button, input, card, dialog | Figma library plus code package | Drift between design and code; duplicated buttons |
| Patterns | Compositions that solve a task: search and filter, checkout, onboarding, data table with bulk actions | Documentation with examples | Every team invents its own checkout |
| Templates | Page-level layouts with slots: marketing landing, product detail, dashboard | Figma pages, code layouts | Inconsistent page rhythm; margins vary per page |
| Content | Voice, terminology, microcopy rules, localisation rules, number and date formats | Content guidelines inside the docs site; see 10 (content) | Buttons say Submit, OK, Confirm and Done in one product |
| Motion | Durations, easings, choreography rules, reduced-motion behaviour | Motion tokens plus a choreography page; see 12 (motion) | Every transition a different speed |
| Accessibility | Contrast, focus, keyboard, ARIA, reduced motion, testing | Baked into components plus CI tests; see 11 (accessibility) | Retrofits cost more than the build |
| Documentation | The site where all of the above is explained with usage, do and do not, code | Storybook, zeroheight, Supernova, Knapsack, or a custom site | Nobody knows the system exists |
| Governance | Who decides, how to contribute, how versions ship, how to deprecate | A written process, a backlog, release notes | The system freezes at version 1 |

The reason foundations and tokens sit above components: a change to the brand blue should be one edit that reaches every button in every product on every platform. If it takes a search across repositories, there is no system.

## 2. Structural models: atomic design and its alternatives

### 2.1 Atomic design (Brad Frost, 2013)

Brad Frost published "Atomic web design" on 10 June 2013 and the book Atomic Design in 2016. The model borrows chemistry: atoms (HTML tags such as a label, an input or a button), molecules (groups of atoms bonded together, such as a search form), organisms (groups of molecules joined into a distinct section such as a header), templates (groups of organisms stitched into page structures) and pages (specific instances of templates with real content). Its lasting contribution is the idea of composition: build the small parts, assemble upward, and test with real content at the page stage.

### 2.2 The critiques, and Frost's answer

- The chemistry names do not map to how teams talk. Nobody in a standup says "the organism is broken". Frost's answer in "Extending atomic design" (10 July 2019): the model "is not rigid dogma"; rename the stages to the team's own language.
- The molecule and organism boundary is arbitrary. A card is a molecule to one team and an organism to another, so taxonomies drift and the folder structure becomes a theological argument.
- Tokens are absent from the 2013 model. Frost's 2019 position: tokens are "subatomic particles" that become functional once applied to an atom, such as a button's background colour.
- State is absent. Chris Cid proposed "ions" for component state; Frost's view is that such ideas "can live adjacent to atomic design" rather than inside it, because "design systems are an umbrella that a whole lot of things live under" and it is "a mistake to try to shoehorn all the diverse ingredients and considerations into one crowded place".
- It describes structure and says nothing about behaviour, content, motion or governance, which is where systems fail.

### 2.3 Functional and perceptual patterns (Alla Kholmatova, 2017)

Design Systems (Smashing Magazine, 2017, 288 pages) replaces the chemistry taxonomy with two kinds of pattern. Functional patterns are the concrete, reusable parts of the interface with a purpose (buttons, text fields, a product card). Perceptual patterns are the descriptive qualities that carry brand and feel (iconography style, colour, typography, spacing, tone, motion). The book's second idea is the shared language: a pattern that has no agreed name does not exist in the team. Her two axes for choosing an approach: strict versus loose (how much deviation the system tolerates) and modular versus integrated (whether parts are designed to recombine or pages are designed whole). Case studies: Airbnb, Atlassian, Eurostar, TED and Sipgate. The house follows Kholmatova's framing because an agency serving luxury clients sells perceptual patterns (the feel) as much as functional ones (the parts), and a client's brand lives in the perceptual layer.

### 2.4 The Carbon model and the Spectrum model

IBM Carbon models the system as tokens first. Four themes (White, Gray 10, Gray 90, Gray 100) swap one theme token set beneath an unchanged component set, and layering tokens (Carbon names them `$layer-01`, `$layer-02`, `$layer-03`) make surfaces alternate as containers nest, so a card on a tile on a page always reads. Components are then thin consumers of tokens. The lesson: design the token contract before any component, and themes become free.

Adobe Spectrum models the system as three token tiers (global, alias, component) across platform scales: a desktop scale and a mobile scale where the same component is physically larger for touch. Its React Spectrum implementation separates behaviour (React Aria hooks) from state (React Stately) from styling, so the same accessibility and interaction logic can be skinned for any brand. The lesson: separate behaviour from skin, so a luxury skin and a utility skin share one tested core.

House position: Kholmatova's vocabulary for talking to clients, Carbon's tokens-first build order, Spectrum's behaviour-skin separation in code. Atomic design stays as a teaching metaphor only.

## 3. Token architecture

### 3.1 What a design token is

A design token is a named, platform-neutral value for a single design decision (a colour, a size, a duration), stored once and transformed into every platform's native format. The term was coined by Jina Anne at Salesforce around 2014 while building the Lightning Design System, with Theo as the first transformer tool. The reason tokens exist: Figma, CSS, iOS, Android and email each need the same decision expressed differently, and a value with a name can be changed in one place.

### 3.2 The three tiers

| Tier | Also called | What it names | Example | Who references it |
|---|---|---|---|---|
| Global | Primitive, reference, base, option | A raw value with a descriptive name that says what it is, never what it is for | `color.stone.600: #6B6560`, `space.4: 16px`, `font.size.300: 1.25rem` | Alias tokens only |
| Alias | Semantic, system, functional, decision | A role in the interface, resolved to a global | `color.text.subtle: {color.stone.600}`, `space.inset.md: {space.4}` | Components and patterns |
| Component | Scoped, pattern | A specific slot on a specific component, resolved to an alias | `button.primary.bg.hover: {color.action.primary.hover}` | That component only |

Rules, each with its reason:

- Components never reference globals directly. If a button reads `stone.600`, a dark theme cannot change it, because the theme swaps alias values and leaves globals alone.
- Semantic names say the role (`text.subtle`), never the value (`text.grey`). A value name lies the moment the theme changes.
- Keep the component tier small. Material 3 keeps it for cases where a component needs its own override; a system where every component has 40 tokens has a maintenance surface of thousands. Primer, Atlassian and Fluent all document three tiers and all warn against bloating the third.
- Globals are plentiful and boring; aliases are few and argued over. A healthy mid-sized system has about 150 to 400 global colour tokens across its ramps and 40 to 80 semantic colour roles (this is a house heuristic drawn from reading Carbon, Primer and Atlassian token lists; count your own).

### 3.3 Naming conventions

The pattern most systems converge on is category, then property, then variant, then state, read left to right from general to specific, separated by dots in the source file and by whatever the platform allows after transformation (hyphens in CSS, camelCase in JavaScript, snake_case in Android).

| Part | Vocabulary | Example |
|---|---|---|
| Category | color, font, space, size, radius, border, shadow, opacity, z, motion, breakpoint | `color` |
| Property or role | text, bg, border, icon, surface, action, status, link | `color.text` |
| Variant or emphasis | default, subtle, muted, strong, inverse, brand, accent, success, warning, danger, info | `color.text.subtle` |
| State | default, hover, active, focus, disabled, selected, visited | `color.action.primary.hover` |

Verified house of style from the canonical systems, as of October 2026:

- Atlassian: foundation, then property, then modifier, with examples `color.text` (default body text), `color.icon.success`, `opacity.disabled`, `opacity.loading`. "Not every token has a modifier."
- Primer: three tiers named base (`color-scale-pink-5`), functional (`bgColor-default`) and component or pattern (`focus-outlineColor`); prefixes `bgColor-`, `fgColor-`, `borderColor-`; roles `accent`, `success`, `attention`, `danger`, `open`, `closed`, `done`, `sponsors`.
- Material 3: reference tokens prefixed `md.ref` (palettes), system tokens `md.sys` (roles such as `md.sys.color.primary`), component tokens `md.comp`.
- Fluent 2: global tokens ("context-agnostic", raw values) and alias tokens (semantic, condensing many values into one for shadows and type).

Rules the house adds: no abbreviations a new engineer cannot read (`bg` and `fg` are the only accepted ones); singular nouns; numeric scales use three-digit steps with room between them (`100, 200, 300`) so a `150` can be inserted later without renaming; never encode the brand in a semantic name (`color.brand.primary`, never `color.mask360.orange`), because the same semantic schema must serve every client.

### 3.4 How many tokens, and which first

Build order, foundations first: colour ramps, type scale, space scale, radius, border, shadow, motion, breakpoints, z-index. Then aliases for colour, space and type. Then the first ten components. The reason: every later component is cheap once the alias layer is stable, and expensive to refactor if aliases arrive after components.

## 4. The DTCG format and the tooling around it

### 4.1 The specification, as of October 2026

The W3C Design Tokens Community Group (DTCG) published the first stable version of its format, the Design Tokens Format Module 2025.10, as a Final Community Group Report on 28 October 2025, alongside two companion modules in the same release: the Color Module 2025.10 and the Resolver Module 2025.10. The documents describe themselves as "considered stable"; later changes come as superseding specifications. A Community Group report is a specification by consensus of its members; it is a W3C-hosted document and is explicitly stated as "not a W3C Standard". The reason it matters anyway: Style Dictionary, Tokens Studio, Penpot, Supernova and Knapsack all read it, so it is the interchange format whatever its legal status.

Format facts to design against:

- A token is any JSON object with a `$value` property, which is required. `$type` is recommended and may be inherited from a parent group; if no type can be determined the token is invalid, and tools "MUST NOT" guess a type by inspecting the value.
- `$description` is a plain string. `$deprecated` is `true`, `false` or a string explaining the replacement. `$extensions` holds vendor data under reverse-domain keys (`com.mask360.figma`), and tools must preserve extension data they do not understand.
- Groups are objects without `$value`. A group may carry `$type` (inherited by children), `$description`, `$deprecated`, `$extensions` and `$extends`, which merges another group's tokens beneath the local ones (local wins at the same path). `$root` is a reserved name for a group's base token (`color.accent.$root`).
- Aliases: curly braces `{color.stone.600}` resolve to the target's whole `$value`. A JSON Pointer `"$ref": "#/color/stone/600"` can target any location, including a sub-property. Circular chains are errors.
- Names cannot begin with `$` and cannot contain `{`, `}` or `.`.
- Media type `application/design-tokens+json` (with `application/json` also allowed; tools must accept both); file extensions `.tokens` or `.tokens.json`.
- Types defined: seven scalar (`color`, `dimension`, `fontFamily`, `fontWeight`, `duration`, `cubicBezier`, `number`) and six composite (`strokeStyle`, `border`, `transition`, `shadow`, `gradient`, `typography`). Font style, percentage or ratio, and file are listed as still to be documented.

Value shapes that trip people up:

| Type | Shape in 2025.10 | Note |
|---|---|---|
| `dimension` | `{"value": 16, "unit": "px"}` with unit `px` or `rem` | Unit is required even when value is 0; the old string form `"16px"` is legacy |
| `duration` | `{"value": 200, "unit": "ms"}` with unit `ms` or `s` | Object form, same reason |
| `fontWeight` | A number in the range 1 to 1000, or a string alias such as `thin` (100), `bold` (700), `black` (900) | Case-sensitive aliases; out-of-range numbers invalid |
| `color` | `{"colorSpace": "oklch", "components": [0.62, 0.22, 35], "alpha": 1, "hex": "#F53901"}` | See 4.2 |
| `shadow` | One shadow object, or an array of shadow objects and references | `offsetX`, `offsetY`, `blur`, `spread` are dimensions; `inset` optional, default false |
| `gradient` | Array of stops, each `{"color": ..., "position": 0 to 1}` | Positions outside 0 to 1 are clamped |
| `typography` | `fontFamily`, `fontSize` (dimension), `fontWeight`, `letterSpacing` (dimension), `lineHeight` (number) | `lineHeight` "SHOULD be interpreted as a multiplier of the fontSize" |
| `transition` | `duration`, `delay` (durations), `timingFunction` (cubicBezier) | Compose from motion tokens |
| `border` | `color`, `width` (dimension), `style` (strokeStyle) | `strokeStyle` is a string (`solid`, `dashed`, `dotted`) or an object with `dashArray` and `lineCap` |

### 4.2 The Color Module

A colour value is an object: `colorSpace` (required), `components` (required array of numbers or `none`), `alpha` (optional, 0 to 1, default 1) and `hex` (optional six-digit fallback; six digits so it never conflicts with `alpha`). Fourteen colour spaces are named: `srgb`, `srgb-linear`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz-d65`, `xyz-d50`. `none` marks a missing component (an `hsl` hue of `none` is different from `0` and interpolates differently). Gamut mapping and interpolation are non-normative, so two tools may round a Display P3 token to sRGB differently; the house rule is to store `oklch` with a `hex` fallback and let 04 (colour) govern how ramps are generated.

### 4.3 The Resolver Module

A resolver document (`.resolver.json`, `application/json`) says how token values vary by context. Root keys: `version` (must be `2025.10`) and `resolutionOrder` (required), plus optional `sets` and `modifiers`. A set is a list of `sources` (files); when a token appears twice the last wins. A modifier has a `contexts` map (the spec recommends at least two, with an optional `default`), for example a `theme` modifier with `light` and `dark`. The tool receives inputs such as `{"theme": "dark"}` and loads the matching sources in `resolutionOrder`, later items overriding earlier ones. This is the first standard way to say "brand B, dark, compact" in a file rather than in a tool's proprietary theme feature, which is why an agency with many clients should adopt it now.

### 4.4 A minimal file

```json
{
  "color": {
    "$type": "color",
    "stone": {
      "600": { "$value": { "colorSpace": "srgb", "components": [0.42, 0.40, 0.38], "hex": "#6B6560" } }
    },
    "text": {
      "subtle": { "$value": "{color.stone.600}", "$description": "Secondary text on default surfaces" }
    }
  },
  "space": {
    "$type": "dimension",
    "4": { "$value": { "value": 16, "unit": "px" } }
  },
  "motion": {
    "duration": { "$type": "duration", "base": { "$value": { "value": 200, "unit": "ms" } } },
    "easing": { "$type": "cubicBezier", "exit": { "$value": [0.2, 0, 0, 1] } }
  }
}
```

### 4.5 The tools, verified October 2026

| Tool | What it does | State as of October 2026 | Limits to know |
|---|---|---|---|
| Style Dictionary | Open-source transformer: reads token JSON, outputs CSS custom properties, SCSS, JS, iOS, Android, Compose and more | v5.7.1 (24 October 2026). v4.0.0 added DTCG support; v5.0.0 shipped May 2025; v5.3.0 added the 2025.10 structured colour with 14 colour spaces and `color/oklch`, `color/oklab`, `color/p3`, `color/lch` transforms with a hex fallback for out-of-gamut colours; v5.4.0 object-form dimensions; v5.7.0 object-form durations | Transforms are yours to write for anything unusual; it has no UI; a 6-line config is the whole product |
| Tokens Studio for Figma | Plugin that manages token sets and themes inside Figma, syncs to Git, exports to variables and styles | Free tier plus Pro. Pro features: themes, modified colours, multi-file sync to remote storage, branch switching, non-local variables and styles, export using themes. Sync providers: GitHub, GitLab, Bitbucket, Azure DevOps, JSONBin, Supernova, Tokens Studio Platform, URL, generic versioned server. A settings toggle switches "W3C DTCG" and "Legacy" formats | Pro price unverified here; the plugin's legacy format predates the spec, so new projects set DTCG from day one |
| Specify | Token pipeline platform between Figma and code | Shut down; the DTCG mailing list recorded "Specify is shutting down too" in early 2025 and third-party listings give a sunset of November 2024 (one lists November 2025) | Do not quote it in proposals |
| Figma variables and modes | Native tokens in Figma with types colour, number, string, boolean; modes per collection for theming | Pricing page (October 2026) lists "10 modes", "20 modes" and "Unlimited modes (via extended collections)" across the paid plans; the column mapping could not be read from the page. Earlier limits from community and API sources were 4 modes on Professional and Organization and 40 on Enterprise. Tokens Studio's documentation cites a Figma limit of 5,000 variables per collection | No composite types (a type style stays a style, so typography tokens need a plugin or a convention); number variables carry no unit; modes cannot nest, so brand times theme times density must be flattened or split across collections |
| Penpot | Open-source design tool with native tokens aligned to the DTCG format | Supports border radius, colour, dimensions, opacity, sizing, spacing, stroke width, rotation, typography, numbers, shadows; gradients "not available yet"; global, alias and semantic tiers; themes; JSON import and export; a Tokens Studio converter | Smaller ecosystem than Figma; relevant for clients who need self-hosting |
| Supernova | Hosted system platform: Figma import, token themes, docs site, code exporters | Starter free (3 editors, 1 design system, 1 token theme, 1 Storybook source), Pro $399 per month (10 editors, 2 systems, unlimited themes, custom code exporters), Enterprise custom with SAML 2.0 | Lock-in on the docs; export the tokens repo as your own |
| Knapsack | Enterprise platform: token manager, Figma integration, docs with live code, Git-backed | Contact-sales pricing; Basic 5+ users, Core 10+ (adds custom domain, SSO, "up to 4 modes/collections"), Pro 20+ (3 framework renderers, workspace analytics) | Enterprise only; wrong size for most Mask360 clients |

## 5. Theming and multi-brand strategy

### 5.1 The theme axes

A theme is a complete set of alias values for one context. Axes that commonly need themes, each with its reason:

| Axis | Values | Why it is a theme rather than a component variant |
|---|---|---|
| Colour scheme | light, dark | Every surface, text and border role changes; the component must not know |
| Contrast | default, high contrast (Primer offers light and dark high contrast; Atlassian and Fluent name a high-contrast mode; Windows forced-colours mode is a system state) | Contrast is a user need, applied globally |
| Brand | brand A, brand B, sub-brand | An agency's components must serve many clients with one code base |
| Density | compact, comfortable (Atlassian names cozy, comfortable, compact as "non-colour themes") | Space and size tokens shift together; a data-heavy admin and a luxury storefront differ by density, never by component |
| Motion | full, reduced | Reduced motion is a user preference (`prefers-reduced-motion`), applied globally |
| Platform scale | desktop, mobile (Spectrum's model) | Touch targets and type sizes scale together |
| Script and direction | Latin, Devanagari, Arabic; LTR, RTL | Line heights, font families and logical spacing change together (see 6.2) |

### 5.2 Multi-brand for an agency

The structure the house uses for clients:

1. One semantic schema. Every client gets the same alias token names (`color.text.default`, `space.inset.md`, `radius.control`). The names are the agency's intellectual property; the values are the client's.
2. One global set per client. A client's ramps, type families and radius values live in `brands/<client>/global.tokens.json`. Nothing else in the repository mentions the client.
3. Themes as resolver modifiers. `brand` (one context per client), `scheme` (light, dark), `density` (default, compact). Resolution order: brand first, then scheme, then density, so a dark override can still be overridden by compact spacing.
4. Components consume aliases only, so the component package is shared across every client and tested once.
5. The Figma side mirrors this: one shared component library, one variables collection per axis, brand modes inside the brand collection. Where the plan's mode cap bites (see 4.5), split the brand collection per client file and keep scheme and density in the shared library.

The reason to invest: the third client costs a fraction of the first, and the agency's craft decisions (focus ring behaviour, dialog motion, form validation timing) stop being re-made per client. The cost: discipline in naming, because a client-specific name anywhere in the semantic layer breaks the model.

### 5.3 Luxury-specific theme decisions

Luxury clients rarely want a dark mode as a user toggle; they want one considered scheme (see design-taste, section 2). Build the token structure for two schemes anyway, because photography-led pages often invert to a dark editorial section mid-page, and that section is a scoped theme (`data-theme="dark"` on a container) rather than a hand-coloured block. Density for luxury is comfortable or looser; keep compact for the admin side (hotel back office, jeweller inventory) that the same system also serves.

