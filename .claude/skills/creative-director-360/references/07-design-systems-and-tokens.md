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

### 4.2 The colour module

The Color Module 2025.10 (the specification keeps the American spelling in its title) defines a colour value as an object: `colorSpace` (required), `components` (required array of numbers or `none`), `alpha` (optional, 0 to 1, default 1) and `hex` (optional six-digit fallback; six digits so it never conflicts with `alpha`). Fourteen colour spaces are named: `srgb`, `srgb-linear`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz-d65`, `xyz-d50`. `none` marks a missing component (an `hsl` hue of `none` is different from `0` and interpolates differently). Gamut mapping and interpolation are non-normative, so two tools may round a Display P3 token to sRGB differently; the house rule is to store `oklch` with a `hex` fallback and let 04 (colour) govern how ramps are generated.

### 4.3 The resolver module

Under the Resolver Module 2025.10, a resolver document (`.resolver.json`, `application/json`) says how token values vary by context. Root keys: `version` (must be `2025.10`) and `resolutionOrder` (required), plus optional `sets` and `modifiers`. A set is a list of `sources` (files); when a token appears twice the last wins. A modifier has a `contexts` map (the spec recommends at least two, with an optional `default`), for example a `theme` modifier with `light` and `dark`. The tool receives inputs such as `{"theme": "dark"}` and loads the matching sources in `resolutionOrder`, later items overriding earlier ones. This is the first standard way to say "brand B, dark, compact" in a file rather than in a tool's proprietary theme feature, which is why an agency with many clients should adopt it now.

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
| Tokens Studio for Figma | Plugin that manages token sets and themes inside Figma, syncs to Git, exports to variables and styles | Free tier plus Pro. Pro features: themes, modified colours, multi-file sync to remote storage, branch switching, non-local variables and styles, export using themes. Sync providers: GitHub, GitLab, Bitbucket, Azure DevOps, JSONBin, Supernova, Tokens Studio Platform, URL, generic versioned server. A settings toggle switches "W3C DTCG" and "Legacy" formats | Pricing (tokens.studio, October 2026): Free (1 editor, 1 project, 1 theme group); Team at 39 euros per extra editor per month billed annually with one editor included and 5 projects; Organization at 499 euros per month plus 49 euros per extra editor with 5 editors included and SSO as an add-on; Enterprise custom. The plugin's legacy format predates the spec, so new projects set DTCG from day one |
| Specify | Token pipeline platform between Figma and code | Shut down; the DTCG mailing list recorded "Specify is shutting down too" in early 2025 and third-party listings give a sunset of November 2024 (one lists November 2025) | Do not quote it in proposals |
| Figma variables and modes | Native tokens in Figma with types colour, number, string, boolean; modes per collection for theming | Pricing page (October 2026) lists "10 modes", "20 modes" and "Unlimited modes (via extended collections)" in the Professional, Organization and Enterprise columns, and a Figma staff reply on the community forum (June 2026) confirms 10 modes per collection on Professional and Education. The limits before 2026 were 4 on Professional and Organization and 40 on Enterprise, which is why older articles disagree. Full design seats: Professional $16 per month, Organization $55 and Enterprise $90 per month billed annually. Tokens Studio's documentation cites a Figma limit of 5,000 variables per collection | No composite types (a type style stays a style, so typography tokens need a plugin or a convention); number variables carry no unit; modes cannot nest, so brand times theme times density must be flattened or split across collections |
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

## 6. Token categories, scales and values

Each category below gives the scale the house ships by default, the reason for its shape, and how the canonical systems differ. The values are starting points for a client system; the reasoning is what to keep when a client's brand forces different numbers.

### 6.1 Colour

The engineering of ramps, contrast and colour spaces is in 04-colour.md (sections 2, 6 and 8). What a token system adds is the step count and the role list.

| Model | Steps | Step semantics | Used by |
|---|---|---|---|
| Eleven-step ramp | 50, 100, 200 to 900, 950 | Lightness ladder; no fixed meaning per step | Tailwind, Primer base scales, most agency systems |
| Twelve-step functional scale | 1 to 12 | 1 app background, 2 subtle background, 3 component background, 4 hovered, 5 active or selected, 6 subtle border, 7 border and focus ring, 8 hovered border, 9 solid fill, 10 hovered solid, 11 low-contrast text, 12 high-contrast text | Radix Colors, Radix Themes, shadcn/ui themes |
| Tonal palette | 13 tones: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100 | HCT tone (perceptual lightness); roles are assigned by tone, so a role such as `primary` is tone 40 in light and tone 80 in dark | Material 3 |

The house default: one eleven-step ramp per hue in OKLCH with the lightness ladder fixed across hues (so `stone.600` and `flame.600` have the same L), generated as 04-colour.md section 8 describes, plus the Radix semantics written into the alias layer rather than into the ramp. The reason: an eleven-step ramp is what Tailwind v4, Style Dictionary examples and most client engineers already expect, and a fixed lightness ladder is what makes `text.on-accent` pass contrast on every hue without per-hue exceptions.

Semantic colour roles the house ships for every client (about 40, the count from Carbon and Primer landing in the same range):

| Group | Roles |
|---|---|
| Surface | `bg.canvas`, `bg.default`, `bg.subtle`, `bg.muted`, `bg.inverse`, `bg.overlay` (scrim) |
| Layer (Carbon's idea, see 2.4) | `layer.01`, `layer.02`, `layer.03`, each with `hover` and `active` |
| Text | `text.default`, `text.subtle`, `text.muted`, `text.disabled`, `text.inverse`, `text.link`, `text.on-accent`, `text.on-inverse` |
| Border | `border.default`, `border.subtle`, `border.strong`, `border.focus`, `border.inverse` |
| Icon | `icon.default`, `icon.subtle`, `icon.on-accent` |
| Action | `action.primary` with `hover`, `active`, `disabled`; `action.secondary`; `action.tertiary`; `action.destructive` |
| Status | `status.success`, `status.warning`, `status.danger`, `status.info`, each with `bg`, `border`, `text`, `icon` |
| Brand | `brand.accent` (the one owned colour from design-taste section 2), `brand.accent.subtle` |

Rule: every `on-` role is computed and tested against its surface at WCAG 2.2 AA and tuned by APCA (04-colour.md section 6.4) at build time, in CI, so a client who changes the accent to a lighter gold finds out from a failing test and never from a user.

### 6.2 Typography

Cross-reference 03-typography.md sections 5 to 7 for leading, measure and hierarchy. In token terms a type system is five scalar families plus one composite type.

| Token group | House scale | Reason |
|---|---|---|
| `font.family` | `sans` (the brand grotesk; house: Space Grotesk), `serif` (if the client owns one), `mono` (house: Departure Mono), `devanagari`, `arabic` | Script families are separate tokens because a Latin face rarely ships Devanagari or Arabic, and the fallback must be chosen, never left to the OS. Noto Sans Devanagari, Noto Naskh Arabic and IBM Plex Sans Arabic are the usual pairings; see 03-typography.md for matching x-height and weight |
| `font.size` | 12, 13, 14, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160 px, named `100` to `1500` | A hand-tuned scale with wide gaps at the top, because luxury hierarchy is scale contrast (design-taste section 2) and a 1.25 modular scale gives too many medium sizes |
| `font.weight` | 300, 400, 500, 600, 700 | House: 300 body, 500 emphasis, 600 h2, 700 h1 (design-taste section 7). Variable fonts make the intermediate steps free, but a token scale with five stops keeps designers from inventing a 450 |
| `font.lineHeight` | `tight` 1.05, `snug` 1.15, `base` 1.5, `relaxed` 1.65, `script` 1.75 | Unitless multipliers (the DTCG `typography.lineHeight` is a multiplier). `script` exists because Devanagari's matras and Arabic's ascending and descending marks collide at 1.5; 1.7 to 1.8 is the working range for mixed-script body copy |
| `font.letterSpacing` | `tighter` -0.03em, `tight` -0.015em, `normal` 0, `wide` 0.06em, `wider` 0.12em | Negative at display sizes, zero in body, positive only for micro caps; Arabic takes no letter spacing at all (it breaks the joins), so the Arabic theme pins every tracking token to 0 |
| `font.style` (composite) | `display.xl`, `display.lg`, `heading.1` to `heading.4`, `body.lg`, `body.md`, `body.sm`, `label.md`, `label.sm`, `caption`, `overline` | A composite `typography` token bundles family, size, weight, line height and letter spacing so a style is one decision in Figma and one class in code |

Fluid type belongs in the alias layer as a CSS `clamp()` expression per style (`clamp(2.5rem, 1.2rem + 4vw, 6rem)` for `display.lg`), generated by a Style Dictionary transform from a min size, a max size and the two breakpoints, because a hand-written clamp per style drifts within a month. Figma cannot represent a clamp, so the Figma library carries the two endpoints as separate modes (`viewport: compact` and `viewport: expanded`).

### 6.3 Spacing

| System | Base | Scale (px) | Naming |
|---|---|---|---|
| Atlassian | 8 | 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80; negatives to -32 | `space.100` = 8px, so the number is a percentage of the base |
| Carbon | 2, 4, 8 multiples | 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160 | `$spacing-01` to `$spacing-13`, ordinal |
| Tailwind v4 | `--spacing: 0.25rem` | Any multiple of 4px via `px-4` (16px), `gap-6` (24px) | Multiplier of the base, generated |
| Primer | 4 | `base-size-4` upward | `base-size-N` with N in px |
| House | 4 | 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200 | `space.0` to `space.200`, number equals px |

The house names tokens by their pixel value (`space.24`) rather than by ordinal (`spacing-06`) because an ordinal scale cannot take a new step without renumbering, and because engineers read `24` without a lookup. The scale runs to 200px because luxury section rhythm on desktop sits at 120 to 200px (design-taste section 2, "margins twice what feels safe"); a system that stops at 64 forces every editorial page to hard-code its margins.

Semantic spacing aliases, so components never pick a raw step: `space.inset.xs` to `xl` (padding inside a container), `space.stack.xs` to `xl` (vertical rhythm between siblings), `space.inline.xs` to `xl` (horizontal gap), `space.section.sm`, `md`, `lg` (between page sections: 64, 120, 200 on desktop). Density themes (section 5.1) remap these aliases, so `compact` shifts `inset.md` from 16 to 12 and `section.lg` from 200 to 120 without touching a component.

### 6.4 Sizing

| Token | Values | Reason |
|---|---|---|
| `size.control` | `sm` 32, `md` 40, `lg` 48 px | 48 is the Material minimum touch target, 44pt is Apple's; WCAG 2.2 success criterion 2.5.8 (Target Size Minimum, AA) requires 24 by 24 CSS px with spacing exceptions and 2.5.5 (AAA) 44 by 44. `md` at 40 is desktop comfortable; mobile themes set `md` to 48 |
| `size.icon` | 16, 20, 24, 32, 48 | 24 is the drawing grid of Material Symbols, SF Symbols' medium scale and most open sets (Phosphor, Lucide); 16 and 20 are the inline sizes beside 14 and 16px text |
| `size.container` | 640, 768, 1024, 1280, 1536 | Matches Tailwind's `max-w-*` and container query steps, so a Tailwind client needs no mapping |
| `size.measure` | 45ch, 65ch, 80ch | Reading measure (03-typography.md section 6); a token so that every long-form block uses the same one |
| `size.avatar`, `size.thumbnail` | 24, 32, 40, 56, 80, 120 | Image slots on the 8 grid; 120 for the editorial contact card |

### 6.5 Radius

| Token | px | Use |
|---|---|---|
| `radius.none` | 0 | Editorial and luxury surfaces, images, tables |
| `radius.xs` | 2 | Chips in dense admin UI |
| `radius.sm` | 4 | Inputs and buttons in a utility theme |
| `radius.md` | 8 | Cards, menus |
| `radius.lg` | 12 | Dialogs, large cards |
| `radius.xl` | 16 to 24 | Sheets, image containers in soft brands |
| `radius.full` | 9999 | Pills, avatars |

Two rules with reasons. First, define `radius.control` and `radius.surface` as aliases and let the brand pick (the house layer uses curved edges everywhere, design-taste section 7; a jeweller's system may set both to 0), because a radius is a brand signal and the cheap tell "one radius on everything" (design-taste section 3) comes from a single raw token used for every element. Second, nested radii are concentric: inner radius equals outer radius minus the padding between them (a 16px card with 8px padding holds 8px-radius children), otherwise the corners visibly fight; Apple's HIG and Figma's "Smart corners" both encode this.

### 6.6 Border width

`border.width.hairline` 1px, `border.width.thin` 1.5px, `border.width.medium` 2px, `border.width.thick` 3px. The focus ring uses `medium` or `thick` with an offset of 2px so it survives WCAG 2.2's 2.4.13 Focus Appearance (AAA) area rule and reads on photography. A true 0.5px hairline renders only on displays at 2x and above and disappears on 1x monitors, so the house keeps 1px as the floor and reduces lightness contrast instead of width when a line looks heavy (design-taste: hairline over shadow).

### 6.7 Elevation and shadow

| Level | Material 3 (dp) | Typical use | House treatment |
|---|---|---|---|
| 0 | 0 | Page, flat cards | Hairline border, no shadow |
| 1 | 1 | Raised card, switch thumb | `0 1px 2px rgba(ink, 0.06)` plus hairline |
| 2 | 3 | Menu, dropdown, hover of level 1 | `0 2px 8px rgba(ink, 0.08)` |
| 3 | 6 | Dialog, sheet | `0 8px 24px rgba(ink, 0.12)` |
| 4 | 8 | Navigation drawer | Rare in house work |
| 5 | 12 | Floating action button | Rare in house work |

Shadows are composite tokens (`shadow` type, an array of layers), never hand-written in CSS. Two rules: use two layers (a tight ambient and a soft key) because one blur reads as a smudge; in dark schemes shadows vanish against dark surfaces, so elevation is expressed by surface lightness (Material's surface containers, Carbon's layers) and the shadow tokens drop to near zero alpha. Luxury systems use levels 0 to 2 almost exclusively (design-taste section 2, material honesty).

### 6.8 Opacity

| Token | Value | Source and reason |
|---|---|---|
| `opacity.disabled.content` | 0.38 | Material 3's disabled content; low enough to read as inactive, high enough to be legible for the "what is this" glance |
| `opacity.disabled.container` | 0.12 | Material 3's disabled container |
| `opacity.state.hover` | 0.08 | Material 3 state layer; a tint of the content colour over the surface |
| `opacity.state.focus` | 0.10 | Material 3 |
| `opacity.state.pressed` | 0.10 | Material 3 |
| `opacity.state.dragged` | 0.16 | Material 3 |
| `opacity.scrim` | 0.32 to 0.5 | 0.32 is Material's scrim; the house uses 0.4 to 0.5 over photography so a dialog reads as a separate layer |
| `opacity.placeholder` | 0.6 | Keeps placeholder text at APCA Lc 30 and above (04-colour.md section 6.4) |

Opacity tokens are the right tool for state layers and disabled states because they work on any brand colour without a second palette; they are the wrong tool for text colour, where a real alias (`text.subtle`) tests against contrast and opacity does not.

### 6.9 Z-index

A named layer scale, so no engineer ever writes `z-index: 99999`. The house uses Chakra UI's scale because it is the most widely copied and already covers every layer type: `hide` -1, `base` 0, `docked` 10, `dropdown` 1000, `sticky` 1100, `banner` 1200, `overlay` 1300, `modal` 1400, `popover` 1500, `skipLink` 1600, `toast` 1700, `tooltip` 1800. The gaps of 100 leave room for a client's special case. Where the stack must change per theme (a cinema-style overlay on a luxury page), a semantic alias (`z.chrome`, `z.content.lifted`) sits between components and the scale.

### 6.10 Motion

Durations and easings are tokens; the choreography rules that combine them live in 12-motion-principles-and-ui-motion.md sections 3 to 5. Material 3's named sets are the most complete public reference and the house maps onto them.

| Material 3 token | Value | House alias |
|---|---|---|
| `duration.short1` to `short4` | 50, 100, 150, 200 ms | `motion.duration.instant` 100, `fast` 150 |
| `duration.medium1` to `medium4` | 250, 300, 350, 400 ms | `motion.duration.base` 250, `moderate` 350 |
| `duration.long1` to `long4` | 450, 500, 550, 600 ms | `motion.duration.slow` 500 |
| `duration.extraLong1` to `extraLong4` | 700, 800, 900, 1000 ms | `motion.duration.cinematic` 800 (hero reveals only) |
| `easing.standard` | cubic-bezier(0.2, 0, 0, 1) | `motion.easing.standard` |
| `easing.standard.decelerate` | cubic-bezier(0, 0, 0, 1) | `motion.easing.enter` |
| `easing.standard.accelerate` | cubic-bezier(0.3, 0, 1, 1) | `motion.easing.exit` |
| `easing.emphasized` | cubic-bezier(0.2, 0, 0, 1) as a CSS approximation of a two-segment path | `motion.easing.emphasised` |
| `easing.emphasized.decelerate` | cubic-bezier(0.05, 0.7, 0.1, 1) | `motion.easing.enter.emphasised` |
| `easing.emphasized.accelerate` | cubic-bezier(0.3, 0, 0.8, 0.15) | `motion.easing.exit.emphasised` |

The DTCG `transition` composite (duration, delay, timingFunction) lets a component ship `motion.transition.fade`, `motion.transition.slide` and `motion.transition.scale` as single tokens. A `motion.reduced` theme sets every duration to 0ms or 1ms and keeps opacity changes, which is how `prefers-reduced-motion` becomes a resolver modifier rather than a per-component media query (section 12.3).

### 6.11 Breakpoints and grid

| System | Breakpoints (px) | Note |
|---|---|---|
| Tailwind v4 | sm 640, md 768, lg 1024, xl 1280, 2xl 1536 (as `--breakpoint-*`) | Mobile-first min-width |
| Bootstrap 5 | 576, 768, 992, 1200, 1400 | Still common in Indian enterprise work |
| Material 3 window size classes | compact below 600, medium 600 to 839, expanded 840 to 1199, large 1200 to 1599, extra-large 1600 and up | Named ranges for layout decisions; the boundaries are the values given |
| House | 480, 768, 1024, 1280, 1600 | 1600 added because luxury pages are viewed on large monitors where a 1280 cap looks like a mobile site stretched |

Grid tokens: `grid.columns` 4 (compact), 8 (medium), 12 (expanded and up); `grid.gutter` 16, 24, 32; `grid.margin` 16, 32, 64, and 120 at 1600 and above. Container queries (`@container`, supported in every evergreen browser since 2023) move most component-level layout decisions off the viewport breakpoints; the breakpoint tokens then matter only for page templates. Devanagari and Arabic text runs about 10 to 30 percent longer than English for the same content, so templates are tested with the longest script before a breakpoint is fixed.

### 6.12 Icon sizes and strokes

`size.icon` from 6.4, plus `icon.stroke` 1.5px at 24 (Lucide, Phosphor regular), 2px for the 16 size so it does not thin out, and an optical rule: an icon beside text is sized to the text's cap height plus 20 to 30 percent (20px beside 16px text) and aligned to the x-height centre, never to the line box centre, which sits too high.

## 7. Component API design and the accessibility contract

A component's API is the set of props, slots, events and names through which designers (in Figma) and engineers (in code) use it. A good API is small, predictable and identical in both tools; a bad one is the main reason systems are detached and rebuilt.

### 7.1 Props, variants and sizes

- Variants name intent, never appearance: `variant="primary | secondary | tertiary | ghost | destructive"`, because an appearance name (`variant="orange"`) lies after a rebrand and means nothing to a screen reader. Sizes use `sm | md | lg`, three stops; Material and Spectrum show that a fourth stop is almost never used and doubles the test matrix.
- Booleans multiply: six boolean props give 64 combinations, most of them meaningless (`isLoading` plus `isDisabled` plus `isActive`). Prefer one enum prop (`state="idle | loading | disabled"`) where states are exclusive.
- Keep the props list under about 12 for a leaf component. Primer, Polaris and Spectrum's button APIs all sit under that; an API past 20 props is a sign that composition (7.2) was skipped.
- Tone or status props map directly to the status alias tokens (6.1), so adding a `status.neutral` role is a token change and a one-line variant addition, never a redesign.
- The `cva` pattern (class-variance-authority, used throughout shadcn/ui) is the house default in Tailwind projects: a variant map in one place, a `cn()` merge, no runtime style objects.

### 7.2 Slots and composition over configuration

Configuration is a single component with many props (`<Dialog title icon footerButtons onClose ...>`); composition is a family of small parts assembled by the consumer (`<Dialog.Root><Dialog.Trigger/><Dialog.Content><Dialog.Title/>...`). Composition wins past about ten props because every new need (an image in the header, two primary buttons, a form inside) becomes a new child instead of a new prop. Radix Primitives, React Aria Components, Base UI and Ark UI all ship this way, which is why shadcn/ui components are small files rather than configuration objects.

Slots are the Figma equivalent: a named region in a component instance that accepts any content (Figma's slot properties, mapped in Code Connect with `figma.slot()` since the 1.4 releases). The reason to mirror slots in both tools is that a designer who swaps a card's media slot for a video and an engineer who passes `children` to `Card.Media` are making the same decision with the same name.

`asChild` (Radix) and `render` props (Base UI, React Aria) let a component lend its behaviour to a different element (a `Button` that renders as a Next.js `Link`), which keeps the DOM honest (one element, correct semantics) and avoids nested interactive elements, an accessibility failure.

### 7.3 Controlled and uncontrolled

A controlled component takes its value from props (`value` plus `onChange`) and renders what it is told; an uncontrolled one holds its own state and accepts an initial value (`defaultValue`). Ship both, following the React convention, because forms with validation need control and simple toggles do not; a component that forces control makes every consumer write boilerplate, and one that forbids it cannot be validated. Headless libraries expose both pairs for every stateful part (`open` and `defaultOpen`, `selectedKey` and `defaultSelectedKey`).

### 7.4 Headless primitives, as of October 2026

Headless (unstyled) components implement behaviour, state, keyboard handling and ARIA, and leave appearance to the consumer. For an agency serving many brands this is the whole point: one tested behaviour layer, many skins (the Spectrum lesson from 2.4).

| Library | Maintainer | State (October 2026) | Frameworks | What to know |
|---|---|---|---|---|
| Radix Primitives | WorkOS | Mature; a unified `radix-ui` package replaced the per-component packages (shadcn/ui changelog, February 2026) | React | The original `asChild` composition model; the base of most shadcn/ui installs before July 2026 |
| Base UI | MUI with engineers from Radix and Floating UI | 1.0.0 stable on 11 December 2025 with 35 components (`@base-ui/react`); 1.9.0 on 9 October 2026 | React | shadcn/ui made Base UI its default in July 2026, so new shadcn projects use it unless told otherwise |
| React Aria Components | Adobe | Part of the React Spectrum release train; libraries at v1.8.0 on 8 October 2026 | React | The deepest accessibility and internationalisation layer (RTL, date and number formatting through `Intl`, virtual-focus patterns); the house default when a client's audience includes Arabic |
| Ark UI | Chakra team (Zag.js state machines) | 5.39.x stable; 6.0.0-next.0 pre-release on 6 October 2026 | React, Vue, Solid, Svelte | The only multi-framework option with one behaviour layer; Chakra UI v3 (3.37.0, 28 August 2026) is built on it |
| Headless UI | Tailwind Labs | v2 line | React, Vue | Smaller surface (menu, listbox, combobox, dialog, disclosure, tabs, switch); fine for marketing sites |

Rule: never write a dialog, menu, combobox, tooltip or date picker from scratch. Each has 30 to 60 keyboard and focus requirements in the APG, and every one of these libraries has fixed bugs that a bespoke build will reintroduce.

### 7.5 Polymorphic components

A polymorphic component accepts an `as` prop (or `asChild`, or `render`) and changes its rendered element while keeping its styling and behaviour. Use it for `Box`, `Text`, `Heading` and `Button`, where the element must change for semantics (a `Heading` that is an `h2` here and an `h3` there; a `Button` that is an `a` when it navigates). Do not make everything polymorphic: TypeScript typing of polymorphic props is expensive, slows the editor, and most components never need it.

### 7.6 The accessibility contract of each component

Every component documents its contract: role, name, keyboard behaviour, focus management and states, taken from the WAI-ARIA Authoring Practices Guide (APG), which lists 30 patterns as of October 2026 (accordion, alert, alert and message dialogs, breadcrumb, button, carousel, checkbox, combobox, dialog, disclosure, feed, grid, landmarks, link, listbox, menu and menubar, menu button, meter, radio group, slider, multi-thumb slider, spinbutton, switch, table, tabs, toolbar, tooltip, tree view, treegrid, window splitter).

| Component | Role and naming | Keyboard | Focus | Notes |
|---|---|---|---|---|
| Button | `button`; name from content or `aria-label` for icon-only | Enter and Space activate | Visible ring at 3:1 | Icon-only buttons are the most common failure in luxury UIs; the label is mandatory |
| Link | `a[href]` | Enter | Ring | A link that performs an action is a button; the APG separates them |
| Dialog (modal) | `dialog` with `aria-modal`, labelled by title | Esc closes; Tab cycles inside | Move focus in on open, return to trigger on close | Scroll lock and inert background; `<dialog>` element handles most of it |
| Menu | `menu` and `menuitem` | Arrow keys move, Home and End, type-ahead, Esc closes | Roving tabindex | A dropdown of links is a disclosure plus a list, never a menu |
| Tabs | `tablist`, `tab`, `tabpanel` | Arrows move between tabs; automatic or manual activation | One tab stop | Manual activation when panels are expensive |
| Combobox | `combobox` with `aria-expanded`, `listbox` popup | Arrows, Enter, Esc, type to filter | Focus stays in input; `aria-activedescendant` | The hardest pattern; use a library |
| Switch | `switch` with `aria-checked` | Space toggles | Ring | Differs from checkbox in that it takes effect immediately |
| Tooltip | `tooltip`, referenced by `aria-describedby` | Esc dismisses; shows on focus as well as hover | None | Never put essential content in a tooltip |
| Toast | `status` or `alert` live region | Not focused on appear | None | A toast with an action needs a timeout of at least 5 seconds and a pause on hover |
| Table | `table`, `columnheader`, `rowheader` | Native | Native | `grid` only when cells are interactive |

The contract is tested in three places: the headless library's own tests, the Storybook accessibility addon on every story (section 12.4), and a quarterly manual pass with a screen reader (VoiceOver on Safari for Apple audiences, NVDA on Chrome for Windows, TalkBack on Android for India's Android-majority mobile traffic).

### 7.7 Naming parity between Figma and code

Parity means the same component names, the same property names and the same property values in the Figma library and the code package, so that Code Connect mapping is one-to-one and a designer's spec reads as code.

| Figma | Code | Rule |
|---|---|---|
| Component `Button` | `Button` | One name, no suffixes (`Button / Primary` becomes a variant, never a second component) |
| Variant property `Variant` with values `Primary, Secondary` | `variant="primary"` | Same words; case follows each tool (Figma Title case, code lower camel) |
| Variant property `Size` with values `sm, md, lg` | `size="sm"` | Same tokens, same abbreviations |
| Boolean property `Show icon` | `icon` slot or prop | Figma booleans become props or slots, and the doc page says which |
| Instance swap property `Icon` | `icon={<Icon/>}` or `Button.Icon` | An instance swap is a slot |
| Text property `Label` | `children` | Documented once |
| Variable collection `Brand`, mode `Client A` | Resolver modifier `brand=clientA` | Same context names in both token sources |

A parity audit (section 10.5) runs twice a year and lists every mismatch; the usual causes are a designer adding a "v2" component and an engineer adding a prop without a Figma property.

### 7.8 The internationalisation contract

For Mask360's bilingual clients the contract includes: logical CSS properties only (`margin-inline-start`, never `margin-left`) so RTL mirrors without a second stylesheet; a `dir` attribute set at the root and honoured by every popup's placement logic (React Aria handles this; several others do not); numerals as a locale decision (`Intl.NumberFormat` with `en-IN` grouping 1,00,000 and `ar-AE` with Western or Eastern Arabic digits per client preference); dates through `Intl.DateTimeFormat`; currency tokens as formatting rules (INR with the rupee sign and lakh grouping, AED with "AED" before the amount in Latin text and "د.إ" in Arabic text); and text expansion allowances of 30 percent in every label slot. Mirroring rules for icons (arrows and progress mirror; clocks, logos and media controls do not) are documented per icon.

## 8. Canonical systems to study

Study each for the one thing it does best; copy none whole. Versions and dates verified against release pages in October 2026 where given.

### 8.1 The platform systems

| System | Owner | State, October 2026 | What it does best | Borrow for |
|---|---|---|---|---|
| Material 3 and M3 Expressive | Google | M3 Expressive announced 13 May 2025, shipped on Pixel in Android 16 QPR1 (September 2025) and preinstalled on Pixel 10. Google's research article cites 46 studies and more than 18,000 participants, key elements found up to four times faster in eye tracking, 87 percent preference among 18 to 24 year olds | The most complete public token model (`md.ref`, `md.sys`, `md.comp`), dynamic colour from HCT, named motion and elevation scales (6.7, 6.10), window size classes | SaaS and Android-first consumer apps; the token tiers for everyone. Its expressive shapes and bold colour are the opposite of the house luxury register |
| Apple Human Interface Guidelines and Liquid Glass | Apple | Liquid Glass announced at WWDC on 9 June 2025 for iOS 26 and the 26-series platforms; two variants, regular (adaptive) and clear (for media-rich backgrounds); a control layer that floats above content; the system adapts it for Reduce Transparency and Increase Contrast. Secondary sources describe an iOS 27 refinement in 2026 with a system-wide intensity setting; confirm on developer.apple.com | Platform conventions for iOS and macOS, SF Symbols, Dynamic Type, the discipline of separating navigation chrome from content | Any native iOS work for hospitality and retail clients; the layering idea. Glass as decoration on the web is a peaking trend (design-taste section 6) |
| Microsoft Fluent 2 | Microsoft | Current; documents global tokens (raw values) and alias tokens (semantic, bundling shadows and type), with light, dark and high-contrast themes | High-contrast theming done properly; Windows forced-colours behaviour | Enterprise and government clients in the Gulf on Windows estates |

### 8.2 The enterprise and product systems

| System | Owner | State, October 2026 | What it does best | Borrow for |
|---|---|---|---|---|
| Carbon | IBM | v11.119.0 released 21 October 2026 (`@carbon/react` 1.119.0), two-week release cadence with release candidates | Tokens-first architecture, four themes, layering tokens, the 2x grid, a spacing scale in multiples of 2, 4 and 8 (6.3) | Data-heavy admin and back-office products: hotel PMS dashboards, inventory |
| Polaris | Shopify | polaris.shopify.com now redirects to shopify.dev, which describes Polaris as "Shopify's unified UI framework built on web components"; Polaris React remains published but the documented path for app UI is the web component set | Content guidelines woven into component docs; commerce patterns (index tables, resource lists, bulk actions) | F&B and retail clients on Shopify; the content-in-docs model for 10-ux-writing-and-content-design.md |
| Atlassian Design System | Atlassian | Current; `space.100` = 8px scale with negatives, colour tokens `color.text`, `color.icon.success`, density themes cozy, comfortable, compact | The clearest token naming documentation; the density model | Any SaaS with tables and forms; the naming grammar in 3.3 |
| Primer | GitHub | `@primer/react` 38.43.0 on 23 October 2026, with a `@primer/mcp` package (1.1.2) shipped alongside so agents can query the system | Seven-segment token grammar (prefix, namespace, pattern, variant, property, variant, scale), base, functional and component tiers, four colour modes including high contrast | Developer-facing products; the MCP idea for exposing a system to AI tooling (section 13.4) |
| Spectrum 2 and React Spectrum | Adobe | React Spectrum libraries v1.8.0 on 8 October 2026; S2 reached 1.0.0 as the first stable release of the second-generation system | Behaviour, state and skin separated (React Aria, React Stately, Spectrum); platform scales for desktop and mobile | The architecture of every house code library (2.4, 7.4) |
| Lightning Design System | Salesforce | Current; the origin of design tokens (Jina Anne, 2014) | The token idea itself; dense enterprise patterns | Historical reference and CRM-adjacent client work |
| Base (Base Web) | Uber | Open source React library with a theme object (`createTheme`) and Styletron for styling; Uber Move is the brand typeface | A strict theme object every component reads; a good example of one brand, one theme | Logistics and marketplace clients |
| Airbnb DLS | Airbnb | Private. Karri Saarinen's 2016 essay "Building a Visual Language" described it; Saarinen then co-founded Linear | The idea of a unified language across platforms, and the cultural argument for a system | The essay, for client decks explaining why a system |

### 8.3 Government systems

| System | State, October 2026 | What it does best | Borrow for |
|---|---|---|---|
| GOV.UK Design System | govuk-frontend v6.6.0 on 15 October 2026. Contribution criteria: useful and unique to propose; usable (tested with users including disabled people), consistent and versatile to publish | The best governance model in public: evidence-based contribution, research-backed patterns, plain language | The contribution process (10.2) and the accessibility floor |
| USWDS | 3.14.0 on 18 August 2026 | Settings-driven theming through Sass tokens; Section 508 alignment; a utilities layer | Government and quasi-government work in India and the UAE where auditability matters |

### 8.4 The product-led and developer-led systems

| System | State, October 2026 | What it does best | Borrow for |
|---|---|---|---|
| Nord (Nordhealth) | Web Components with CSS custom properties as the token surface; the site returned no content on this check, so verify the version there | Framework-agnostic delivery; documented tokens as CSS variables | Clients whose engineering teams span frameworks |
| Geist (Vercel) | Current; components ship as `@vercel/geistcn` with assets in `@vercel/geistcn-assets`; typeset in Geist Sans and Geist Mono; a high-contrast colour system | Restraint in a developer product: grid, monochrome, hairlines | The register for Mask360's own agency showcase and for fintech clients; study it as taste, see design-taste references/canon.md |
| Linear | No public system; the product is the document | Density with calm, keyboard-first, one accent, subtle elevation | Reference for "quiet SaaS" clients |
| shadcn/ui | Not a dependency: components are copied into the project through the CLI (v4, March 2026). Changelog in 2026: Base UI documentation (January), unified Radix package and blocks for both (February), registry include and validate (May), GitHub registries (June), Base UI as default (July), private GitHub registries and the Questionnaire component (August), a standalone `cn` package (September), Trace and Code Block with 21 AI Elements patterns (October) | The copy-in model (you own the code), registries as distribution, Tailwind v4 tokens as `@theme` | The default starting kit for a client web app; the private-registry feature is how an agency distributes a client system |
| Radix Themes | 3.1.x (3.1.1 in June 2024, 3.1.3 current and undated on the releases page) | Twelve-step colour scales with fixed semantics (6.1), a `Theme` component with accent, grey, radius and scaling props | The colour semantics; quick prototypes |
| Tailwind CSS v4 | `@theme` directive defines tokens as CSS variables that also generate utilities; namespaces `--color-*`, `--font-*`, `--text-*`, `--font-weight-*`, `--tracking-*`, `--leading-*`, `--breakpoint-*`, `--container-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--animate-*` and others; `--spacing: 0.25rem` as the base; `@theme inline` for variable references; `--*: initial` to drop the defaults | A token system that engineers already use; the cleanest path from DTCG to utilities (13.2) | Every house web build |
| Chakra UI | v3.37.0 on 28 August 2026, built on Ark UI 5.39 with a Panda CSS preset | Z-index scale (6.9), semantic tokens with conditions, recipes | Teams who want a styled library with a theme object |
| Mantine | Version not verified on this check (the changelog page returned 404); the v8 line shipped in 2025 | Breadth: 100 plus components, hooks, form library | Internal tools where speed beats brand |

### 8.5 Luxury versus SaaS: what to borrow

| Decision | Luxury client (hospitality, jewellery, fashion, real estate) | SaaS or admin client |
|---|---|---|
| Structural model | Spectrum's behaviour and skin split, so the skin can be radical | Carbon's tokens-first with its themes nearly as shipped |
| Colour | Two plus one accent (design-taste), Radix step semantics for the few greys | A full status palette, Material or Atlassian role lists |
| Type | One family, extreme scale contrast, composite style tokens as the primary design unit | Two sizes of body, a utility scale |
| Spacing | Section tokens to 200px, generous insets | Density themes, Atlassian's scale |
| Radius and elevation | 0 to 2 levels; hairlines; radius a brand decision | Material levels; radius 4 to 8 |
| Motion | Few, slow, emphasised easings; a cinematic duration for one hero | Standard easings, fast durations |
| Components | 25 to 35, heavy on media, editorial layouts and forms for enquiry and booking | 50 plus, heavy on tables, filters, dialogs |
| Docs | Figma-first with a short docs site; the client's marketing team reads it | Storybook-first; engineers read it |

## 9. Documentation

Documentation is the product that the system's users touch. A component with no page does not exist; a page with no "do not" is a gallery.

### 9.1 Storybook

Storybook is the open-source workshop for building and documenting components in isolation. Facts as of October 2026: Storybook 9.0 shipped in June 2025 (a breaking major); the 10.x line followed with 10.2 in January 2026 (new viewport and zoom UI, typesafe CSF factories for Vue, Angular and Web Components in preview, MDX support for Storybook MCP as an experiment) and 10.6 in September 2026 (CLI bindings for agent tools and skills, Angular-Vite and Vue MCP support, no breaking changes). The pieces that matter for a system:

- Stories in Component Story Format (CSF 3): one file per component, one named export per state. A story is the unit that tests, docs, visual regression and the accessibility addon all consume, so write every state the state matrix in 06-ui-design-craft.md section 3 lists.
- Autodocs generates a docs page from stories and prop types; Controls lets a reviewer change props live, which replaces most "can it do X" questions.
- The accessibility addon runs axe-core against each story and reports violations in the panel; with the Vitest-based test addon the same checks run in CI and can fail a build (section 12.4).
- Visual tests through Chromatic (9.2); interaction tests with the `play` function; MCP (experimental) so coding agents can read stories and docs.

### 9.2 Chromatic and visual regression

Chromatic (by Storybook's maintainers) renders every story on every commit, diffs the pixels against the accepted baseline and asks a human to approve changes. Pricing on chromatic.com in October 2026: Free at 5,000 snapshots per month on Chrome only; Starter at $179 per month for 35,000 snapshots across Chrome, Safari, Firefox and Edge; Pro at $399 per month for 85,000; overage at $0.008 per snapshot; Enterprise custom. A cached copy of the same page earlier in 2026 showed four tiers at $149, $349 and $649, so the pricing moved during the year; quote the live page in a proposal. Snapshots multiply: stories times builds times browsers times viewports (two stories, ten builds, two browsers, two viewports is 80 snapshots), and accessibility checks add one more per story. Alternatives with their own published numbers: Argos at $100 per month for 35,000 screenshots and Percy from $599 per month (Argos's comparison, July 2026). Visual regression is the single most effective guard against token drift: a changed alias value shows up as a diff on every affected story within minutes.

### 9.3 Hosted documentation platforms

| Platform | What it is | Pricing, October 2026 | When the house uses it |
|---|---|---|---|
| zeroheight | Docs site that embeds Figma components, Storybook stories and tokens | Free: 1 editor, 1 styleguide, 1 token set. Starter: $49 per editor per month (the FAQ on the same page quotes $59 monthly or $588 yearly for one editor, so confirm), up to 5 editors, 2 styleguides, 3 token sets. Enterprise: custom, SSO, API, analytics | Client systems where marketing and product both read the docs and nobody will maintain a custom site |
| Supernova | System platform with Figma import, token themes, docs and code exporters | Values from the earlier check in 4.5 (Starter free, Pro $399 per month, Enterprise custom); the pricing page was rate-limited on this pass, so re-verify | Clients who want tokens, docs and exporters in one tool and accept the lock-in |
| Knapsack | Enterprise platform with Git-backed docs, live code and a token manager | Contact sales (4.5); the page was rate-limited on this pass | Large enterprise clients only |
| Storybook plus a static docs site | Storybook for engineers, a Next.js or Astro site for everyone else, both fed by the tokens repo | Hosting cost only | Mask360's own system and clients with an engineering team that will own the repo |
| In-Figma docs | Component descriptions, documentation links on components, Dev Mode annotations, a "How to use" page per library section | Included in the Figma seat | Always, as the first layer; designers never leave Figma to read a rule |

### 9.4 What a good component page contains

| Section | Contents | Why it is there |
|---|---|---|
| Overview | One paragraph: what it is, when to use it, when not to, with links to alternatives | Stops misuse before it starts |
| Anatomy | Labelled diagram of the parts (container, label, icon, helper text) with the token each part uses | Designers and engineers share the part names; tokens are visible, so nobody picks a hex |
| Variants, sizes and states | Every combination, rendered live from stories | The state matrix is the test plan |
| Usage | Do and do not pairs with images, each with the reason | The reason is what transfers to the next case |
| Content | Label length, voice, capitalisation, example microcopy, localisation notes (Arabic and Hindi lengths) | Cross-reference 10-ux-writing-and-content-design.md section 4 |
| Accessibility | Role, keyboard table, focus behaviour, screen reader announcement, reduced-motion behaviour | The contract from 7.6 |
| Behaviour and motion | What animates, durations and easings by token name | Cross-reference 12-motion-principles-and-ui-motion.md |
| Code | Install, import, a minimal example, a composed example, props table generated from types | Generated, never hand-copied, so it cannot go stale |
| Tokens | The component tokens and the aliases they resolve to | Lets a theme author see what a brand can change |
| Figma | Link to the library component, property names, the parity table from 7.7 | One name across tools |
| Changelog and status | Version, status (experimental, stable, deprecated), owner, last review date | Sparkbox's 2022 survey found 35 percent of subscribers named unclear status of old, broken or coming-soon items as a top challenge |

### 9.5 Documentation anti-patterns

- A PDF brand book as the only documentation: unversioned, unsearchable, and nobody opens page 47.
- Screenshots of components instead of live renders: they rot within one release.
- "Use sparingly" with no number: say "at most one primary button per view".
- Pages written by the system team alone: GOV.UK's model requires research evidence and real service examples; the house requires at least one real client screen on every pattern page.

## 10. Governance and operations

Governance is the set of decisions about who may change the system, how, and how the change reaches everyone. The zeroheight Design Systems Report 2025 (294 respondents, data collected September to November 2024) found 79 percent of respondents had a dedicated design system team (72 percent the year before) and 84 percent used design tokens (56 percent in 2024); among the most widely adopted systems, 68 percent ran a hybrid team model. Sparkbox's 2022 survey (219 responses) found only 16 percent tracked metrics, and the top maintainer challenges were technical and creative debt (43 percent), design and code parity (37 percent), adoption (36 percent) and staffing (35 percent). Governance exists to move those numbers.

### 10.1 Team models

Nathan Curtis (EightShapes) named the three models in "Team Models for Scaling a Design System" (2015), and most later writing uses his terms.

| Model | Who builds | Strength | Weakness | Fits |
|---|---|---|---|---|
| Solitary | One team builds it for themselves; others borrow | Fast, coherent | The owner's product dominates; others get what is left over | A client with one product and one team |
| Centralised | A dedicated system team builds and serves product teams | Quality, consistency, clear ownership | Can drift from real product needs; a bottleneck when small | Mid-sized clients with 3 to 10 product teams; the agency plays this role during build |
| Federated | Designers and engineers from several product teams contribute part-time | Grounded in real needs; shared ownership | Slow, uneven quality, no one accountable | Large organisations with mature practice |
| Hybrid | A small core team sets foundations, reviews and ships; product teams contribute components through a process | Most adopted systems in the 2025 report ran this way (68 percent) | Needs a written contribution process or it decays into federated | The house recommendation after handover (14.6): the client's core team plus Mask360 on retainer as the review function |

### 10.2 Contribution process and RFCs

A contribution is any proposed change: a new component, a token value, a deprecation. The process the house installs, modelled on GOV.UK's criteria:

1. Proposal (one page): what, why, evidence it is needed by more than one team (screenshots of three places it is being hand-built), and why nothing existing covers it. GOV.UK calls these criteria useful and unique.
2. Triage by the core team within 5 working days: accept, merge into an existing pattern, or decline with the reason recorded.
3. RFC (request for comments) for anything that changes an API or an alias: a short document with the proposed API, alternatives considered, migration notes, open for comment for 10 working days. The RFC is the record future maintainers read.
4. Build on a branch (Figma branch plus code branch) with stories, docs page, accessibility check and visual baseline.
5. Review against GOV.UK's publication criteria: usable (tested with users, including disabled users, for anything interactive), consistent (uses existing tokens and components) and versatile (works across the client's products, browsers and scripts).
6. Release in the next minor; announce in release notes and the system channel.

The reason for the written evidence step: without it a federated model collects every team's one-off, and the component count doubles while usage halves.

### 10.3 Versioning

Semantic Versioning 2.0.0 (semver.org) applied to a design system, where "breaking" has a visual meaning as well as an API one:

| Change | Version | Examples |
|---|---|---|
| Major | Breaking | A prop removed or renamed; a token removed; a visual change that alters layout (a button height from 40 to 44); a change in default behaviour |
| Minor | Additive | New component, new variant, new token, a deprecation warning added |
| Patch | Fix | A colour value corrected within the same role, a bug fix, a doc fix |

Rules with reasons. Version the tokens package, the code package and the Figma library together with the same number, because a designer on library 3.2 and an engineer on package 3.4 cannot discuss a bug. Keep a changelog in Keep a Changelog format with a section per version and a "Migration" subsection for majors. Ship majors at most twice a year; every major costs each consuming team days of migration, and a system that breaks quarterly is detached.

### 10.4 Deprecation policy

1. Mark: set `$deprecated` in the token file (with the replacement named in the string), add a `@deprecated` JSDoc tag in code, add a deprecated badge in Figma's component description and move the component to a "Deprecated" page in the library.
2. Alias: keep the old name resolving to the new value for at least two minor releases or six months, whichever is longer; a console warning in development builds names the replacement.
3. Remove in the next major, listed in the migration notes with a codemod where one can be written (shadcn/ui's `migrate` commands and Chakra's `@chakra-ui/codemod` are the models).

The reason for the long alias window: an agency's client teams work in quarters; a deprecation that lands and is removed inside one quarter is experienced as breakage.

### 10.5 Design and code parity audits

Twice a year, list every component in the Figma library and every component in the package side by side, with their property names and values, and record each mismatch in one of four classes: exists in Figma only, exists in code only, name mismatch, value mismatch (a Figma `Size: Large` that renders 48px against a code `lg` of 44px). The score is the share of components with zero mismatches; the 2022 Sparkbox data puts parity among the top three maintainer challenges, and a published score is what makes it improve. Tooling: Code Connect's coverage view shows which Figma components have no code mapping, and a Storybook story per Figma variant makes the comparison mechanical.

### 10.6 Figma library governance

- Publishing: one person or a rota publishes, on a cadence (weekly for an active build, fortnightly in maintenance), with a publish description that mirrors the changelog entry; never "updates".
- Branching: every change to a published library happens on a Figma branch, reviewed by a second designer, then merged and published. Branches are available on Organization and Enterprise plans, which is one reason the house recommends Organization ($55 per full seat per month billed annually, October 2026) for any client with a library.
- Structure: one library per axis of change (foundations and variables; core components; patterns and templates; icons), so that an icon addition does not force a components update.
- Variables: one collection per theme axis (5.2), aliases only in components, and a locked "Primitives" collection that only the system team edits.
- Library analytics (Organization, Enterprise, Education K-12 and Government plans; the analytics API on Enterprise only): per component, "Inserts" over 30 days, "Used by" teams, "Used in" files and "Detaches"; per library, "Teams using the library", "Total variables" and "Activity this week"; styles and variables usage tracked since 10 October 2024. These are the raw data for 10.7.

### 10.7 System health metrics

| Metric | Definition | How to measure | Target the house sets |
|---|---|---|---|
| Adoption rate | Share of product screens (or of shipped pages) built from system components | Code: count imports from the package against total components in the app (a lint script); Figma: library analytics "Used in" files against total design files | 80 percent of new screens within two quarters of launch |
| Detachment rate | Detaches divided by inserts for a component over 30 days | Figma library analytics | Below 5 percent; a component above 15 percent is either badly designed or missing a variant, and the number tells you which to investigate |
| Coverage | Share of the audited UI inventory (14.1) that the system now covers | Re-run the inventory each half-year | 90 percent of recurring elements |
| Parity score | Share of components with zero Figma and code mismatches | The 10.5 audit | 95 percent |
| Time to build | Hours for a designer and an engineer to produce a defined reference screen with the system, against without | Timed exercise at onboarding, repeated yearly | A 50 percent reduction is typical for a mature system; measure your own |
| Accessibility pass rate | Share of stories with zero axe violations | Storybook accessibility addon in CI (12.4) | 100 percent; the gate blocks merges |
| Contribution throughput | Proposals opened, accepted, shipped per quarter, with median days to ship | The contribution board | Median under 30 working days |
| Satisfaction | Quarterly survey of designers and engineers | Five questions, same each quarter | Trend only |

Sparkbox's finding that only 16 percent of teams tracked metrics is the argument for choosing three, instrumenting them in the first month, and reporting them to the client's sponsor monthly.

### 10.8 The business case and the costs

What a system saves: duplicated build (an interface inventory of a mid-sized product typically finds 10 to 30 button variants and 20 to 60 text styles; each is a maintenance cost), onboarding time, accessibility retrofits, and brand drift across agencies. What it costs: the build (14.3), the Figma seats (Organization $55 per full seat per month billed annually), tooling (Chromatic from $179 per month at Starter, zeroheight from $49 per editor per month, Tokens Studio Team from 39 euros per extra editor per month, all October 2026 list prices), and the ongoing team, which the 2025 report's respondents named as the scarcest resource (41 percent of companies under 500 people and 54 percent of larger ones said they lacked people). The honest pitch to a client: a system pays back when at least two products or two teams share it, or one product ships more than monthly; below that, a UI kit plus tokens is the right purchase. Pricing of the build itself follows 24-business-of-creative-and-agency-operations.md section 3.

## 11. Motion, sound and content inside the system

### 11.1 Motion tokens and choreography documentation

The tokens are in 6.10; the system also needs a choreography page, because tokens say how long and how curved, and choreography says what moves in what order. The page documents, for each transition type (enter, exit, move, expand, shared element, page), the duration token, the easing token, the stagger interval (the house uses 30 to 50ms between list items, capped at eight items so the total stays under 400ms; 12-motion-principles-and-ui-motion.md section 4) and the reduced-motion fallback. A motion token is only useful when a component references it by name in code (`transition: opacity var(--motion-duration-fast) var(--motion-easing-exit)`), so the lint rule in 13.4 forbids raw millisecond values in component CSS. Figma cannot store a motion token as a variable; Smart Animate settings are documented per component and checked at parity audits.

### 11.2 Sonic tokens

A sonic token names a sound the product plays (confirmation, error, notification, send) and its properties: file, duration, peak loudness and whether it respects the system's silent setting. Material's sound guidelines and Apple's haptic and sound pairings are the public references; most web systems ship none, which is the right default for luxury hospitality and retail sites, where the house rule is silence. Where a client has a sonic identity (a hotel group's brand audio, a fintech's confirmation tone), the token file stores it under a `sound` group in `$extensions` (the DTCG has no sound type) with the brand's audio files in the assets package, and the component docs say which event fires which token. Cross-reference 14 (sound) for the production of the assets.

### 11.3 Content design inside the system

Content guidelines belong inside the component documentation, as Polaris demonstrated: a button page that states "use a verb, two words, sentence case, no full stop" removes a review cycle per screen. The system carries: the voice and tone summary (10-ux-writing-and-content-design.md section 2), the terminology list (one word per concept: "booking" never "reservation" in the same product), the microcopy inventory per component (10-ux-writing-and-content-design.md section 4), error message formats, number, date and currency formats per locale (7.8), and the bilingual rules: which script leads on a given surface, how Arabic and English share a line, and the maximum label lengths per component measured in the longest script. Content tokens are not a DTCG type; the house keeps them as a `content.json` beside the tokens with the same versioning, so that a label change ships with the release that needs it.

## 12. Accessibility inside the system

The system is where accessibility is cheapest: fixed once in a component, correct everywhere. The legal floor for Mask360 clients is WCAG 2.2 AA (04-colour.md section 6.3 for the Indian and UAE references); the detail of testing and law is in 11 (accessibility). What the system itself must build in:

### 12.1 Contrast

Every `on-` colour role and every status pair is tested at build time against WCAG 2.2 AA (4.5:1 text, 3:1 large text and non-text) and tuned by APCA (04-colour.md section 6.4), with the test run on every theme, including dark, high contrast and each client brand. A brand accent that cannot carry white text at 4.5:1 gets a darker `action.primary` alias and keeps the accent for large surfaces; the system never lets a brand colour fail silently.

### 12.2 Focus and keyboard

One focus ring token set (`border.focus` colour at 3:1 against adjacent colours, `border.width.medium`, 2px offset) applied through `:focus-visible` in every interactive component, meeting 2.4.7 Focus Visible (AA) and 2.4.11 Focus Not Obscured (Minimum, AA, new in 2.2), with 2.4.13 Focus Appearance (AAA) as the design target because the AAA area rule is what makes a ring visible on photography. Sticky headers and cookie banners are the usual obscurers; the layout templates reserve scroll padding (`scroll-padding-top`) equal to the sticky height so a focused element is never hidden. Keyboard behaviour per component follows the APG contract in 7.6 and is tested with interaction tests in Storybook.

### 12.3 ARIA and reduced motion

ARIA comes from the headless layer (7.4), never hand-written in a skin. Reduced motion is a theme (`motion: reduced`, 6.10) resolved from `prefers-reduced-motion` at runtime and also exposed as a user setting in the product, because the OS setting is unknown to many users; under it, movement becomes opacity, parallax and autoplay stop, and durations fall to 0 or 1ms. Target sizes follow 6.4 (24 by 24 CSS px minimum under 2.5.8, 44 or 48 for touch themes).

### 12.4 Testing in CI

- axe-core (Deque; 4.14.0 released 5 October 2026, with runs 20 to 40 percent faster than 4.13) runs through the Storybook accessibility addon on every story and in the Vitest-based test run, so a violation fails the pull request. Automated rules catch only part of WCAG: Deque's own 2021 analysis put axe-core's automated detection at about 57 percent of issues by volume, which is why the manual pass in 7.6 remains.
- Playwright with `@axe-core/playwright` runs the same engine on assembled pages, catching page-level issues (landmarks, heading order, duplicate IDs) that story-level tests miss.
- Contrast tests run against the token file directly (a script over the alias layer per theme), so a token change that breaks contrast fails before any component renders.
- A quarterly manual audit with a screen reader on the three most-used flows, logged as issues with the component name, so the fix lands in the system rather than in one product.

## 13. The design-to-code pipeline

The pipeline is the set of automated steps that carry a decision from the design tool to shipped code without a human retyping a value. Every manual step in it is a place where the system drifts.

### 13.1 The source of truth

The house rule: the tokens repository is the source of truth, Figma is a consumer with write access through a plugin, and code is a consumer with no write access. The reason: a Git repository has history, review, branches, tags and CI; Figma variables have none of these in a form a build can read. Two ways to get Figma into the repository, as of October 2026:

- Tokens Studio: designers edit tokens in the plugin, sync to GitHub (or GitLab, Bitbucket, Azure DevOps) as DTCG JSON on a branch, and the pull request is reviewed like any code. This is the default for clients without an Enterprise Figma plan.
- Figma's REST Variables API: read and write variables programmatically; it requires an Enterprise plan, and it is the route when a client already has one. A third-party report says Figma shipped native DTCG-format import and export for variables after the 2025.10 release; the house could not confirm it on Figma's own pages during this check, so test it in the client's plan before promising it.

### 13.2 The transformation chain

```
tokens/
  global/color.tokens.json        (the client's ramps, in OKLCH with hex fallback)
  global/type.tokens.json
  global/space.tokens.json
  alias/light.tokens.json         (semantic roles for the light scheme)
  alias/dark.tokens.json
  alias/density-compact.tokens.json
  brands/clientA/global.tokens.json
  tokens.resolver.json            (brand, scheme, density modifiers; see 4.3)
```

Style Dictionary (v5.7.1, 24 October 2026) reads the files per resolver context and writes:

| Target | Output | Transform notes |
|---|---|---|
| Web | `tokens.css` with custom properties on `:root` and on `[data-theme="dark"]`, `[data-brand="clientA"]`, `[data-density="compact"]` | `color/css` emits `oklch()` with a hex fallback; dimensions keep `px` or `rem` as authored (v5.5.0 handles object dimensions, v5.7.0 object durations) |
| Tailwind v4 | A CSS file with `@theme { --color-text-default: var(--sys-color-text-default); ... }` using `@theme inline` so utilities reference the live variable | Maps the alias names onto Tailwind's namespaces (`--color-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--text-*`) so `bg-text-default` and `rounded-control` exist; `--spacing` is set to the house base so `p-4` equals 16px |
| iOS | Swift enums or an Xcode asset catalogue of named colours (which gives light and dark for free) | Dimensions as `CGFloat`; fonts as `UIFont` descriptors |
| Android | Compose `object` with `Color`, `Dp`, `TextStyle` | Density is handled by `dp`; the `compact` theme becomes a `CompositionLocal` |
| Documentation | A JSON index the docs site reads to render the token tables (9.4) | Generated, so the docs never show a stale value |

Components consume only the generated CSS variables or Tailwind utilities that reference them. A lint rule (stylelint `declaration-property-value-disallowed-list` for hex and raw px in component files, an ESLint rule against Tailwind arbitrary values such as `bg-[#F53901]` in components) makes the rule enforceable; an unenforced rule holds for about one sprint.

### 13.3 Code Connect

Code Connect links a Figma component to its code implementation so that Dev Mode shows the real snippet and the Figma MCP server gives agents the real component name and props. As of October 2026: template files (framework-agnostic TypeScript that defines how a snippet is generated) are the recommended approach; the legacy framework-specific parsers (React and React Native, HTML for Web Components, Angular and Vue, SwiftUI, Jetpack Compose) were deprecated with the 1.5.0 release and are reported as unmaintained after 17 August 2026, with a migration command and a `--delete` option in `figma connect migrate`. It needs a Dev or Full seat on Professional, Organization or Enterprise; Professional allows one active library and one framework, Organization and Enterprise several frameworks. The Code Connect UI inside Figma maps one design component to many implementations (React, SwiftUI, Compose, Vue). A connected system has a measurable coverage figure (components mapped against components in the library), which belongs on the health dashboard (10.7).

### 13.4 AI-assisted generation and its guardrails

As of October 2026 the tools that generate UI from a system are: v0 (Vercel; generates Next.js, Tailwind and shadcn/ui code from prompts and screenshots or Figma files, deploys and opens pull requests), Claude Code and similar coding agents reading the repository, the Figma MCP server (design context into the agent), Storybook's MCP and skills support (10.2 and 10.6), and Primer's `@primer/mcp` package as an example of a system exposing itself to agents. Detail on the tools is in 22-ai-era-craft-and-generative-tools.md section 2; the guardrails that make generated code acceptable in a system:

1. The agent is given the system, never a description of it: the tokens package, the component package, the stories and the docs, through MCP or the repository. A prompt that says "use our brand blue" produces a hex; a repository that exposes `color.action.primary` produces a token.
2. Generated code must pass the same lint rules (13.2), the same accessibility gate (12.4) and the same visual regression (9.2) as human code. Without the gates, agents reintroduce raw values and hand-rolled dialogs at speed.
3. Agents compose existing components; they do not create new ones without an RFC (10.2). The house instruction in every repository's `CLAUDE.md` or equivalent: "Use components from `@mask360/ui`; if none fits, stop and propose, do not build."
4. A human reviews every generated component against the parity table (7.7) and the taste tests in design-taste section 4. Generation is fast at producing the generic; the system's job is to make the specific the path of least resistance.
5. Registries as distribution: shadcn/ui's private GitHub registries (August 2026) let the agency publish a client's components so that `npx shadcn add` and agents pull the client's versions, never the public defaults.

### 13.5 Visual regression and the release gate

Every pull request runs: lint (tokens and arbitrary values), unit and interaction tests, axe in Storybook, a Chromatic (or Argos) build with a human approving diffs, a bundle size check and a changelog check. A release is tagged with the shared version (10.3), publishes the tokens package, the component package and the docs site, and the Figma library is published with the same version in its description on the same day.

### 13.6 The handoff protocol

Handoff is the exchange between design and engineering for each feature built with the system.

| Step | Designer provides | Engineer receives | Rule |
|---|---|---|---|
| 1 | A Figma file built from library instances only, zero detached, variables applied | Dev Mode with Code Connect snippets | Detached instances block handoff; the analytics show them |
| 2 | Named tokens on every colour, space and type decision (visible in Dev Mode) | Token names, never values | A value in a spec is a defect |
| 3 | States and breakpoints as separate frames or variants, including loading, empty, error and the longest-script content | The state matrix | Missing states are the main source of post-launch design tickets |
| 4 | Motion notes by token name and a reference to the choreography page | Durations and easings as tokens | Raw milliseconds in a spec are a defect |
| 5 | Content as final copy in both scripts, from the content file | Strings in the locale files | Lorem ipsum blocks handoff |
| 6 | Accessibility notes where the pattern deviates (custom focus order, live region text) | The contract | Default contracts need no note |
| 7 | A review of the built screen against the file before release, with Chromatic diffs | Sign-off | The designer, never the engineer, approves visual diffs |

## 14. Building a system for a client as an agency

The house method, in six phases. Durations are planning heuristics for a client with one web product and a marketing site; scale them with the component count.

### 14.1 Discovery: audit and inventory

Two to three weeks. An interface inventory (Brad Frost's method, 2013): screenshot every instance of every element type across the client's products and marketing surfaces (buttons, inputs, cards, navigation, type styles, colours, icons, spacing), group them, and count. A typical mid-sized product yields 10 to 30 button variants, 20 to 60 text styles and 50 to 150 distinct colours; the counts are the first slide of the business case (10.8). Add: a brand guideline review (what the identity defines and what it leaves open; 18-brand-strategy-and-identity-design.md section 4), a technical audit (framework, Tailwind or not, existing component library, Figma plan and seat count, CI), an accessibility baseline (axe over the top ten pages), and interviews with three designers, three engineers and the sponsor on what slows them. Deliverable: the inventory, a findings deck, and a recommended scope.

### 14.2 Scoping

| Tier | Components | Platforms | Fits |
|---|---|---|---|
| Foundations plus kit | Tokens, type, colour, spacing, icons, 12 core components (button, link, input, select, checkbox, radio, switch, textarea, card, dialog, toast, tabs) | Web | A marketing site or a small product; the honest minimum |
| Standard | Foundations plus 25 to 35 components, 8 to 12 patterns (forms, filters, empty states, media galleries, booking and enquiry flows), 4 to 6 templates | Web, with iOS and Android tokens | Most Mask360 clients: hospitality booking, retail, real estate listings |
| Full | 50 plus components, pattern library, multiple brands, native component libraries | Web, iOS, Android | Groups with several brands or products |

Scope also fixes the theme axes (5.1): the count of brands, schemes and densities multiplies the test matrix, and a client asking for five brands, two schemes and two densities is asking for 20 theme contexts.

### 14.3 Phasing: foundations first

| Phase | Weeks (standard tier) | Output | Why in this order |
|---|---|---|---|
| 1 Foundations and tokens | 3 to 4 | Global and alias token files, resolver, Style Dictionary build, Figma variables and type styles, the taste decisions from design-taste section 4 written as tokens | Every component depends on them; changing an alias after components exist costs a refactor |
| 2 Primitives and core components | 4 to 6 | The 12 core components in Figma and code with stories, docs and accessibility tests | The first real test of the tokens; expect to adjust 10 to 20 percent of aliases here |
| 3 Patterns and templates | 3 to 5 | Forms, navigation, media, booking or enquiry flows, page templates; the client's three most important screens rebuilt from the system | Proves the system on real screens; the rebuilt screens are the adoption pilot |
| 4 Documentation and tooling | 2 to 3, overlapping | Docs site, Storybook deployed, Chromatic baseline, Code Connect mapping, lint rules in the client's CI | Without this the system is a folder |
| 5 Handover and training | 2 | Workshops, the governance document, the first contribution run end to end by the client's team | The system survives only if the client's team can change it |

### 14.4 Delivery package

- Figma: the libraries (foundations and variables, components, patterns, icons), published with versioned descriptions, with a "Start here" page in each and library analytics enabled.
- Tokens repository: DTCG files, resolver, Style Dictionary configuration, generated outputs for each platform, CI that builds and tests contrast on every change, a changelog.
- Code package: the component library (React with Tailwind v4 and a headless layer by default, 7.4), stories, tests, the accessibility gate, published to the client's registry (npm private, GitHub Packages, or a shadcn registry).
- Docs site: component pages (9.4), foundations pages, the content guidelines, the governance document, the metrics dashboard.
- Code starter: a Next.js (or the client's framework) application wired to the package and tokens, with the three rebuilt screens, so the first product team starts from a working example.
- The governance document: team model, contribution process, versioning, deprecation policy, release cadence, owners by name.

### 14.5 Handover and training

Three workshops: designers (variables, library structure, branching, how to propose), engineers (tokens pipeline, composing components, the gates, how to add a story), and the sponsor's leads (metrics, the roadmap, the cost of a detachment). Then a supervised first contribution: the client's team takes a real request through 10.2 end to end with Mask360 reviewing. The system is handed over when the client's team has shipped one minor release unaided.

### 14.6 Maintenance retainer

A monthly retainer that covers: review of contributions (the hybrid model's core function), token and component updates for brand evolution, dependency upgrades (Storybook, the headless layer, Tailwind), the quarterly accessibility audit, the half-yearly parity audit and inventory re-run, and the monthly metrics report. Scope it in hours per month with a defined response time for breaking issues; pricing follows 24-business-of-creative-and-agency-operations.md section 3. The reason to insist on it: the 2025 report's scarcest resource is people, and a system with no reviewer decays within two quarters.

## 15. Brand systems beyond product

### 15.1 Identity guidelines and the product system

An identity system (18-brand-strategy-and-identity-design.md section 4) defines the mark, the typefaces, the palette, the imagery direction, the voice and the rules for applying them across print, environment, social and screen. A product design system takes the subset of those decisions that apply to interfaces and adds everything an interface needs that an identity never specifies: interaction states, accessibility pairs, density, a spacing scale, component behaviour. The failure mode is two documents that disagree on the blue. The fix is one token source with two consumers.

### 15.2 The shared token source

The global tier (3.2) holds the brand's primitives once: the palette in OKLCH with sRGB hex, Display P3 and, as `$extensions`, the print values (CMYK per paper stock and Pantone references, 04-colour.md section 10), the typefaces with licences noted (03-typography.md), the logo clear space and minimum sizes as dimensions, and the motion signature's base easing. The product system's alias tier consumes those globals; the identity guidelines are generated from the same file (the docs site renders the brand pages from it), so a palette change is one pull request that updates the brand book, the Figma variables and the product in one release. Print-only decisions (paper stocks, foil references, bleed and safe areas for each format) live as a `print` group that the product build ignores.

### 15.3 Print and social formats as part of the system

The system's templates layer extends to the formats the agency produces every week: social post and story formats per platform (26-platform-and-format-specs-2026.md for the exact pixel sizes and safe areas), deck masters (design-taste section 7 for the house deck rules), email formats, print formats (A4 and A5 stationery, 6x4in and 210x210mm invitation formats, outdoor at 1:10 scale). Each is a Figma template built from the same variables, with the brand modes switching the client, and a Canva brand kit mirrored from the same tokens for the client's own team. The reason to treat them as system templates: they are where brand drift is most visible to the public, and they are produced by the people least likely to read a guideline. Motion identity (logo animation, transition signature) is stored as motion tokens plus reference files; 13-motion-graphics-and-3d-production.md covers production.

### 15.4 Multi-brand groups

A hospitality group with four hotel brands, or a jeweller with a bridal and a fine line, is the multi-brand case from 5.2 extended beyond product: one semantic schema, one component library, one template set, four global token files, and resolver contexts for brand, scheme and density. Shared assets (icons, the booking engine's components) live once. Brand-specific assets (type, imagery rules, the one owned colour) live in the brand's global file. The group's own corporate identity is a fifth brand, never the default.

## 16. Audit checklist and token reference table

### 16.1 Design system audit checklist

Score each line 0 (absent), 1 (partial) or 2 (met); 40 lines, maximum 80. A system under 50 is a UI kit with ambitions; the gaps name the next quarter's work.

Foundations and tokens

1. Tokens exist in a platform-neutral file (DTCG 2025.10 format) under version control.
2. Three tiers are present and components reference only aliases.
3. Semantic names describe roles, never values or brands.
4. Colour ramps have a fixed lightness ladder and every `on-` pair passes WCAG 2.2 AA in every theme.
5. Type styles exist as composite tokens with script-specific line heights.
6. Spacing, radius, border, shadow, opacity, z-index, motion and breakpoint scales are all tokens, with no orphan values in components.
7. Themes (scheme, brand, density, motion) are resolver contexts, never forks of the component code.
8. A build generates CSS variables, Tailwind theme, iOS and Android outputs from one source; nothing is hand-maintained.

Components

9. Every component has a documented API with intent-named variants and three sizes at most.
10. Stateful components support controlled and uncontrolled use.
11. Complex widgets (dialog, menu, combobox, tabs, tooltip, date picker) are built on a headless layer.
12. Each component documents its accessibility contract from the APG and passes axe in CI.
13. Figma and code share component names, property names and values; the parity score is published.
14. Slots exist in both tools for every content region.
15. Logical properties and RTL are supported; Arabic and Devanagari are tested in every text-bearing component.
16. Every state in the state matrix (06-ui-design-craft.md section 3) has a story and a Figma variant.

Documentation

17. Every component has a page with anatomy, usage, do and do not with reasons, content rules, accessibility, code, tokens and status.
18. Docs render live components and generated props tables, never screenshots.
19. Foundations pages explain the reasoning, with the design-taste references named.
20. The content guidelines and terminology list live inside the system.
21. In-Figma descriptions and links exist on every library component.

Governance

22. A named owner, a team model and a contribution process are written down.
23. RFCs exist for API and alias changes, with a comment window.
24. Versions follow semver and are shared across tokens, code and Figma.
25. A deprecation policy with an alias window of at least six months is followed.
26. Release notes are written per release and announced.
27. Figma libraries use branching and a publishing rota with meaningful descriptions.
28. Library analytics are enabled and read monthly.
29. Adoption, detachment, coverage and parity metrics are measured and reported.
30. A maintenance budget (people or retainer) exists for the next twelve months.

Pipeline and quality

31. Lint rules forbid raw colour, size and duration values in components.
32. Visual regression runs on every pull request with a human approving diffs.
33. Accessibility checks fail the build.
34. Code Connect (or an equivalent mapping) covers the library and the coverage figure is known.
35. AI-generated code passes the same gates and composes existing components.
36. The handoff protocol is followed; detached instances block handoff.

Brand reach

37. Identity guidelines and the product system share one token source.
38. Print values and social and deck formats derive from the same variables.
39. Multi-brand contexts, where they exist, share one schema and one component library.
40. A real client screen exists on every pattern page.

### 16.2 Token reference table

The house defaults in one place; each row's reasoning is in section 6.

| Category | Token group | Scale or values | Named aliases |
|---|---|---|---|
| Colour | `color.<hue>.<step>` | 11 steps 50 to 950 per hue, OKLCH with hex fallback | About 40 roles across bg, layer, text, border, icon, action, status, brand |
| Type family | `font.family` | sans, serif, mono, devanagari, arabic | Per style |
| Type size | `font.size` | 12, 13, 14, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160 px | `display.xl` to `caption` as composite styles |
| Type weight | `font.weight` | 300, 400, 500, 600, 700 | House: 300 body, 500 emphasis, 600 h2, 700 h1 |
| Line height | `font.lineHeight` | 1.05, 1.15, 1.5, 1.65, 1.75 | tight, snug, base, relaxed, script |
| Letter spacing | `font.letterSpacing` | -0.03, -0.015, 0, 0.06, 0.12 em | tighter, tight, normal, wide, wider; Arabic pins all to 0 |
| Spacing | `space.<px>` | 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200 | inset, stack, inline (xs to xl); section sm, md, lg |
| Control size | `size.control` | 32, 40, 48 | sm, md, lg; touch themes raise md to 48 |
| Icon size | `size.icon` | 16, 20, 24, 32, 48 | Stroke 2 at 16, 1.5 at 24 |
| Container | `size.container` | 640, 768, 1024, 1280, 1536 | Matches Tailwind |
| Measure | `size.measure` | 45, 65, 80 ch | narrow, base, wide |
| Radius | `radius` | 0, 2, 4, 8, 12, 16 to 24, 9999 | `radius.control`, `radius.surface` set per brand; concentric rule for nesting |
| Border width | `border.width` | 1, 1.5, 2, 3 | hairline, thin, medium, thick; focus uses medium or thick with 2px offset |
| Elevation | `shadow.level` | 0 to 5, two-layer shadows; dark schemes use surface lightness | Luxury uses 0 to 2 |
| Opacity | `opacity` | disabled content 0.38, disabled container 0.12, hover 0.08, focus 0.10, pressed 0.10, dragged 0.16, scrim 0.32 to 0.5, placeholder 0.6 | State layers and scrims only; never for text colour |
| Z-index | `z` | -1, 0, 10, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800 | hide, base, docked, dropdown, sticky, banner, overlay, modal, popover, skipLink, toast, tooltip |
| Duration | `motion.duration` | 100, 150, 250, 350, 500, 800 ms | instant, fast, base, moderate, slow, cinematic; reduced theme sets all to 0 or 1 |
| Easing | `motion.easing` | standard (0.2, 0, 0, 1); enter (0, 0, 0, 1); exit (0.3, 0, 1, 1); emphasised enter (0.05, 0.7, 0.1, 1); emphasised exit (0.3, 0, 0.8, 0.15) | Composed into `motion.transition.fade`, `slide`, `scale` |
| Breakpoints | `breakpoint` | 480, 768, 1024, 1280, 1600 | Container queries for component layout |
| Grid | `grid` | columns 4, 8, 12; gutter 16, 24, 32; margin 16, 32, 64, 120 | Per breakpoint |

## Terms introduced

- Accessibility contract: the documented role, name, keyboard behaviour, focus management and states a component guarantees, taken from the APG.
- Adoption rate: the share of product screens or pages built from system components.
- Alias token: a token that names a role in the interface (text.subtle) and resolves to a global token; also called semantic token.
- APG: the WAI-ARIA Authoring Practices Guide, the W3C document of 30 interaction patterns with their keyboard and ARIA requirements.
- asChild: a prop (Radix) that makes a component render its child element instead of its own, lending behaviour without adding DOM.
- Atomic design: Brad Frost's 2013 model of atoms, molecules, organisms, templates and pages.
- Autodocs: Storybook's generated documentation page built from a component's stories and prop types.
- Centralised model: a dedicated team builds and serves the system to product teams.
- Choreography page: documentation of what moves in what order, per transition type, using the motion tokens.
- Code Connect: Figma's tool for mapping a design component to its code implementation so Dev Mode and the Figma MCP server show real code.
- Component API: the props, slots, events and names through which a component is used in Figma and in code.
- Component library: coded, versioned, tested UI components published as a package.
- Component token: a token scoped to one slot of one component, resolving to an alias.
- Composite token: a DTCG token whose value is an object of several sub-values (typography, shadow, border, transition, gradient, strokeStyle).
- Composition over configuration: designing a component as assembled parts rather than one part with many props.
- Concentric radius: the rule that a nested element's radius equals the outer radius minus the padding between them.
- Contribution: any proposed change to the system that goes through the contribution process.
- Controlled component: a component whose value comes from props and whose changes are reported through a callback.
- Coverage: the share of the audited interface inventory that the system now provides.
- CSF: Component Story Format, Storybook's file format in which each named export is one story.
- cva: class-variance-authority, a utility that maps variant props to class lists, used across shadcn/ui.
- Density theme: a theme that remaps spacing and size aliases together (compact, comfortable).
- Deprecation policy: the rules for marking, aliasing and removing a token or component.
- Design system: the shared decisions, assets, code, rules, people and process that let many people build one coherent product family.
- Design token: a named, platform-neutral value for a single design decision, stored once and transformed into each platform's format.
- Detachment rate: detaches divided by inserts for a component over a period, from Figma library analytics.
- DTCG: the W3C Design Tokens Community Group, author of the Design Tokens Format Module.
- Federated model: contributors from several product teams build the system part-time.
- Fluid type: a size expressed as a CSS clamp() between a minimum and a maximum across a viewport range.
- Foundations: the layer of principles and brand decisions (colour, type, grid, spacing, iconography, imagery) above tokens.
- Functional pattern: Kholmatova's term for a concrete reusable interface part with a purpose.
- Global token: a raw value with a descriptive name (color.stone.600), referenced only by aliases; also called primitive, reference or base token.
- Handoff protocol: the defined exchange between design and engineering for each feature built with the system.
- Headless component: a component that implements behaviour, state and ARIA without styling.
- Hybrid model: a small core team sets foundations and reviews, product teams contribute through a process.
- Interface inventory: a screenshot census of every element type across a product, grouped and counted (Brad Frost, 2013).
- Layering token: Carbon's tokens for nested surfaces (layer-01 to layer-03) that alternate as containers nest.
- Library analytics: Figma's per-library and per-component usage data (inserts, detaches, used by, used in).
- Modifier: in a DTCG resolver, a named axis (theme, brand, density) with contexts that select token sources.
- Parity audit: a twice-yearly comparison of every Figma component and property against its code counterpart.
- Pattern library: documented solutions to recurring interface problems, each built from components.
- Perceptual pattern: Kholmatova's term for the descriptive qualities that carry brand and feel (colour, type, tone, motion).
- Polymorphic component: a component that can render as a different element through an as, asChild or render prop.
- Primitive (layer): an unstyled building block (box, stack, text, visually-hidden, focus ring) beneath components.
- Registry: a distribution source from which a CLI (shadcn) copies components into a project, including private GitHub registries.
- Resolver document: the DTCG file that declares sets, modifiers and resolution order for producing token values per context.
- RFC: request for comments, a short written proposal for an API or alias change opened for review before build.
- Scrim: a translucent layer over content beneath a dialog or sheet.
- Semantic versioning: the major.minor.patch scheme where major means breaking, minor additive, patch fix.
- Set: in a DTCG resolver, an ordered list of token source files.
- Slot: a named region in a component that accepts arbitrary content, in Figma and in code.
- Snapshot: one rendered image of one story in one browser at one viewport, the unit Chromatic bills.
- Solitary model: one team builds the system for itself and others borrow it.
- Sonic token: a named sound an interface plays with its file, duration and loudness.
- Source of truth: the single place a decision is stored, from which every other representation is generated.
- State layer: Material's translucent overlay of the content colour that expresses hover, focus, pressed and dragged.
- Story: one rendered state of one component in Storybook.
- Style guide: written identity rules (logo, colour, type, voice, imagery) without working components.
- Template (layer): a page-level layout with slots.
- Theme: a complete set of alias values for one context (light, dark, brand B, compact).
- Time to build: the measured hours to produce a reference screen with the system against without it.
- Token tier: one of the three levels of tokens: global, alias, component.
- Tonal palette: Material 3's 13-tone ladder per key colour, from which roles are assigned by tone.
- UI kit: a design-tool file of reusable components and styles without code or governance.
- Uncontrolled component: a component that holds its own state and accepts only an initial value.
- Visual regression: automated pixel comparison of rendered components against an accepted baseline.
- Window size class: Material 3's named viewport ranges (compact, medium, expanded, large, extra-large).
- Z-index scale: a named ladder of stacking values so components never choose arbitrary numbers.

## Sources and further reading

Books

- Brad Frost, Atomic Design, 2016.
- Alla Kholmatova, Design Systems: A Practical Guide to Creating Design Languages for Digital Products, Smashing Magazine, 2017.
- Dan Mall, Design That Scales: Creating a Sustainable Design System Practice, Rosenfeld Media, 2023.
- Nathan Curtis, Modular Web Design: Creating Reusable Components for User Experience Design and Documentation, New Riders, 2009.

Specifications and standards

- Design Tokens Format Module 2025.10, W3C Design Tokens Community Group Final Report, 28 October 2025, https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
- Design Tokens Community Group, specifications index and FAQ, https://www.designtokens.org/
- W3C Design Tokens Community Group, "Design Tokens specification reaches first stable version", 28 October 2025, https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- WAI-ARIA Authoring Practices Guide, Patterns, W3C, https://www.w3.org/WAI/ARIA/apg/patterns/
- Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation, https://www.w3.org/TR/WCAG22/
- Semantic Versioning 2.0.0, https://semver.org/
- Keep a Changelog 1.1.0, https://keepachangelog.com/

Tool and system documentation

- Style Dictionary releases, https://github.com/style-dictionary/style-dictionary/releases
- Tailwind CSS, Theme variables, https://tailwindcss.com/docs/theme
- Figma, Code Connect documentation, https://developers.figma.com/docs/code-connect/
- Figma, View library analytics, https://help.figma.com/hc/en-us/articles/360039238353
- Figma, Pricing, https://www.figma.com/pricing/
- Storybook 10.6 release notes, https://storybook.js.org/releases/10.6
- Chromatic, Pricing, https://www.chromatic.com/pricing
- zeroheight, Pricing, https://zeroheight.com/pricing/
- Tokens Studio, Pricing, https://tokens.studio/pricing
- Penpot, Design tokens user guide, https://help.penpot.app/user-guide/design-tokens/
- Base UI releases, https://base-ui.com/react/overview/releases
- Ark UI releases, https://github.com/chakra-ui/ark/releases
- React Spectrum and React Aria releases, https://react-spectrum.adobe.com/releases/index.html
- Chakra UI releases, https://github.com/chakra-ui/chakra-ui/releases
- shadcn/ui changelog, https://ui.shadcn.com/docs/changelog
- Radix Themes releases, https://www.radix-ui.com/themes/docs/overview/releases
- IBM Carbon, Spacing, https://carbondesignsystem.com/elements/spacing/overview/ and releases, https://github.com/carbon-design-system/carbon/releases
- GitHub Primer, Token names, https://primer.style/foundations/primitives/token-names and Primer React releases, https://github.com/primer/react/releases
- Atlassian Design System, Spacing, https://atlassian.design/foundations/spacing
- Microsoft Fluent 2, Design tokens, https://fluent2.microsoft.design/design-tokens
- Material Design 3, https://m3.material.io/ (design tokens, easing and duration, elevation, window size classes)
- Apple Human Interface Guidelines, https://developer.apple.com/design/human-interface-guidelines/
- GOV.UK Design System, Contribution criteria, https://design-system.service.gov.uk/community/contribution-criteria/ and govuk-frontend releases, https://github.com/alphagov/govuk-frontend/releases
- U.S. Web Design System releases, https://github.com/uswds/uswds/releases
- axe-core releases, https://github.com/dequelabs/axe-core/releases
- Vercel Geist, Introduction, https://vercel.com/geist/introduction
- v0 documentation, https://v0.app/docs
- Shopify Polaris, https://shopify.dev/docs/api/polaris

Articles, reports and talks

- Brad Frost, "Atomic web design", 2013, https://bradfrost.com/blog/post/atomic-web-design/
- Brad Frost, "Interface inventory", 2013, https://bradfrost.com/blog/post/interface-inventory/
- Brad Frost, "Extending atomic design", 2019, https://bradfrost.com/blog/post/extending-atomic-design/
- Nathan Curtis, "Team Models for Scaling a Design System", EightShapes, 2015, https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0
- Karri Saarinen, "Building a Visual Language", Airbnb Design, 2016, https://airbnb.design/building-a-visual-language/
- Google Design, "Expressive Design: Google's UX Research", 2025, https://design.google/library/expressive-material-design-google-research
- zeroheight, Design Systems Report 2025, https://zeroheight.com/how-we-document/
- Sparkbox, The 2022 Design Systems Survey, https://designsystemssurvey.sparkbox.com/
- Argos, "Visual Testing Pricing in 2026: Percy vs Chromatic vs Argos", 2026, https://argos-ci.com/blog/visual-testing-pricing
