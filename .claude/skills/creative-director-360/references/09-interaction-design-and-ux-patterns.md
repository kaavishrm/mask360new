# Interaction design, information architecture and UX patterns

How things behave, how they are organised, and the pattern library of solved problems. Craft reference for Mask360 work across luxury hospitality, fashion, beauty, jewellery, real estate, F&B and events in India and the Gulf. As of October 2026. Taste sits above this file in the design-taste skill; this file is the mechanics beneath it.

## Contents

1. [Foundations: the discipline and its frameworks](#1-foundations-the-discipline-and-its-frameworks)
2. [Information architecture](#2-information-architecture)
3. [Flows and their notation](#3-flows-and-their-notation)
4. [The fidelity ladder and prototyping](#4-the-fidelity-ladder-and-prototyping)
5. [Pattern catalogue A: entry, identity and finding](#5-pattern-catalogue-a-entry-identity-and-finding)
6. [Pattern catalogue B: luxury commerce](#6-pattern-catalogue-b-luxury-commerce)
7. [Pattern catalogue C: hospitality, booking and reservations](#7-pattern-catalogue-c-hospitality-booking-and-reservations)
8. [Pattern catalogue D: product surfaces](#8-pattern-catalogue-d-product-surfaces)
9. [Pattern catalogue E: actions, editing and power use](#9-pattern-catalogue-e-actions-editing-and-power-use)
10. [AI product patterns, October 2026](#10-ai-product-patterns-october-2026)
11. [Mobile interaction conventions](#11-mobile-interaction-conventions)
12. [Feedback, system status and error prevention](#12-feedback-system-status-and-error-prevention)
13. [Deceptive patterns and the law](#13-deceptive-patterns-and-the-law)
14. [Conversational and voice interfaces](#14-conversational-and-voice-interfaces)
15. [The interaction quality bar](#15-the-interaction-quality-bar)
16. [Designing for India and the Gulf](#16-designing-for-india-and-the-gulf)
17. [Pattern selection table and IA audit checklist](#17-pattern-selection-table-and-ia-audit-checklist)
18. [Terms introduced](#terms-introduced)
19. [Sources and further reading](#sources-and-further-reading)

## 1. Foundations: the discipline and its frameworks

### 1.1 Where the discipline came from

- Douglas Engelbart's NLS demonstration on 9 December 1968 showed the mouse, hypertext, windows and collaborative editing in one session. Everything after it is refinement.
- Xerox PARC built the Alto (1973) and shipped the Star 8010 (1981): bitmapped display, overlapping windows, icons, the desktop metaphor, and modeless editing. Modeless means the same keystroke does the same thing regardless of state; Larry Tesler's Gypsy editor (1975) and his "don't mode me in" licence plate made it a principle. Modes are still the first thing to hunt in a review because they create the errors users cannot explain.
- Alan Kay's Dynabook concept (1968, written up in 1972 as "A Personal Computer for Children of All Ages") and Smalltalk (1972 to 1980) gave the field its ambition: the computer as a medium, with the user as author. His line "the best way to predict the future is to invent it" is the posture of the prototyper.
- Apple's "Human Interface Guidelines: The Apple Desktop Interface" (1987, Addison-Wesley) was the first published platform HIG. Its principles (metaphors, direct manipulation, see-and-point, consistency, WYSIWYG, user control, feedback and dialogue, forgiveness, perceived stability, aesthetic integrity) still read as a checklist in 2026. "Forgiveness" is the ancestor of undo.
- Ben Shneiderman named direct manipulation in 1983 (IEEE Computer): continuous representation of the object, physical actions in place of command syntax, rapid incremental reversible operations with immediate visible effect. Every swipe and drag you rate today is measured against those three clauses.
- Bill Moggridge designed the GRiD Compass laptop (1982) and, with Bill Verplank, coined the term interaction design around 1984 at ID Two. His "Designing Interactions" (2007, MIT Press) is the oral history of the field: 40 interviews, Engelbart to Jobs.

### 1.2 Verplank: do, feel, know

Verplank's "Interaction Design Sketchbook" (2009) reduces the designer's questions to three:

| Question | Meaning | Design decision it drives |
|---|---|---|
| Do | How does the person act? A button (discrete, one-shot) or a handle (continuous, with feedback during the act)? | Tap versus drag, toggle versus slider, submit versus live-apply |
| Feel | What does the person sense? The medium and its qualities: resolution, latency, sound, haptics | Whether the thing feels fast, heavy, cheap, precise |
| Know | How does the person understand it? A path (steps memorised) or a map (a model that lets them improvise)? | Whether you show a wizard or a canvas, a stepper or an overview |

The reason the framework endures: it forces the "feel" question, which most product teams skip, and the "path versus map" question, which decides whether the person can recover from a wrong turn without you.

### 1.3 Cooper: goal-directed design

Alan Cooper's "About Face" (first edition 1995, fourth edition 2014 with Reimann, Cronin and Noessel) built the method most agencies still run:

- Goals over tasks. A task is "enter card details"; the goal is "stop thinking about money and get the room". Design for the goal and the task count falls.
- Personas: archetypal users built from research, each with goals, and one designated primary. The reason for the primary persona: a product that satisfies everyone equally satisfies nobody; the primary wins any conflict.
- Posture: sovereign (full screen, long sessions, dense: Figma, a PMS), transient (comes and goes, one job: a calculator, a share sheet), daemonic (background, speaks only on exception: sync), auxiliary (a widget alongside). The reason to classify first: posture sets density, chrome, animation budget and tone before any screen is drawn. A luxury booking engine is transient; a hotel operations dashboard is sovereign; mixing their densities is the most common failure in hospitality software.
- Excise: work the interface makes the person do that serves the system instead of the goal (re-entering an address, confirming the obvious, choosing a file format). Cooper's rule: count it and cut it.
- Perpetual intermediates: most users stay in the middle of the skill curve for ever. Design the default for them; put beginner help and expert shortcuts at the edges.

### 1.4 Buxton: sketching

Bill Buxton's "Sketching User Experiences" (2007) separates sketches from prototypes. A sketch is quick, timely, inexpensive, disposable, plentiful, with a clear vocabulary and minimal detail, made to suggest and explore. A prototype is made to test and refine, and it describes where a sketch suggests. His argument, which echoes Barry Boehm's software cost-of-change curve ("Software Engineering Economics", 1981): every change costs more at each stage from sketch to specification to build, so the cheapest exploration must happen earliest and in quantity. Buxton's insistence on plurality is the review rule: several sketches on the wall, never one. One sketch is a proposal; several are a conversation, because the comparison is what produces judgement.

### 1.5 Saffer: microinteractions

Dan Saffer's "Microinteractions" (2013, O'Reilly) gives every small behaviour four parts. The reason to learn the parts: a critique that says "the toggle feels wrong" is useless; "the feedback arrives before the rule resolves" is a fix.

| Part | What it is | Example: a wishlist heart on a luxury PDP |
|---|---|---|
| Trigger | What starts it: manual (tap, keystroke, voice) or system (time, location, data change) | Tap on the heart |
| Rules | What happens, in what order, what is allowed | Toggle saved state; if signed out, save locally and prompt later; never block the gallery |
| Feedback | How the person learns the rules ran: visual, audio, haptic | Fill animation 180 to 240ms, a light haptic, a count increment |
| Loops and modes | What happens over time and in special states | Loop: after the third save, offer "share your edit"; mode: in a size-out state the heart becomes "notify me" |

Saffer's other durable idea: "bring the data forward". The microinteraction should show the value as well as the control (a battery icon with percentage, a toggle with the time it was last changed).

### 1.6 Norman's stages and gulfs, Nielsen's heuristics

Don Norman's seven stages of action (goal, plan, specify, perform, perceive, interpret, compare) and the two gulfs (execution: can I work out what to do; evaluation: can I tell what happened) are covered in 02-perception-and-psychology.md and are cross-referenced here as the diagnostic for any flow that fails. Jakob Nielsen's ten heuristics (1994) are applied in section 12. Design-taste's critique format (verdict, what works, what does not, the fix) is the house format; this file supplies the vocabulary the fix is written in.

## 2. Information architecture

Information architecture (IA) is the structural design of shared information environments: how content is organised, labelled, navigated and searched so that people can find and understand it. The canonical text is Rosenfeld, Morville and Arango, "Information Architecture: For the Web and Beyond" (fourth edition, 2015; the "polar bear book" since 1998). Arango's "Living in Information" (2018) extends it to the argument that we live inside these structures, so their ethics matter.

### 2.1 Organisation schemes

An organisation scheme is the rule that decides which bucket an item goes in. Rosenfeld and Morville split schemes by whether the rule is objective.

| Scheme | Type | When it works | Mask360 example |
|---|---|---|---|
| Alphabetical | Exact | The person knows the name (a directory, a glossary, a brand index) | Designer A to Z on a multi-brand fashion store |
| Chronological | Exact | Time is the primary question (news, press, archive, a season) | Press and campaign archive; collection seasons |
| Geographical | Exact | Place drives the decision | Hotels by destination (Jaipur, Goa, Dubai, Riyadh); showrooms |
| Topic | Ambiguous | Browsing by subject; the dominant scheme for catalogues | Fashion: ready-to-wear, bags, shoes, jewellery |
| Task | Ambiguous | The person comes to do a verb | "Book a table", "Plan an event", "Track my order" |
| Audience | Ambiguous | Segments have different needs and self-identify reliably | "For brides", "For corporate events", "Trade" |
| Metaphor | Ambiguous | Rarely; the metaphor must be exact and shared | A hotel app organised as "lobby, concierge, rooms" fails when "lobby" means nothing on a phone |
| Hybrid | Ambiguous | Almost always in practice, as long as each navigation group uses one scheme | Top nav by topic, utility nav by task, footer by audience |

The reasons behind the rules: exact schemes are easy to design and fast to use when the person knows what they want, and useless when they do not; ambiguous schemes are hard to design (every item needs a judgement) and are where browsing value lives. The defect to catch: mixing schemes within one list ("Women, Men, Sale, New, Gifts, Jaipur"), which the polar bear book calls the most common IA failure because the person cannot predict where the next item sits.

### 2.2 Structures

| Structure | Shape | Right for | Risk |
|---|---|---|---|
| Hierarchy | Tree; parent to child; top-down | Catalogues, help centres, corporate sites | Deep trees hide content; polyhierarchy (an item under two parents) must be deliberate |
| Sequence | A to B to C | Checkout, onboarding, booking, a story | Users want to skip or go back; design the exits |
| Matrix | Items reachable by several attributes at once | Product grids with facets; a hotel by destination and by experience | Needs metadata discipline |
| Database (bottom-up) | Records with fields; structure emerges from metadata | Any catalogue over about 200 items; listings; real estate | Without a controlled vocabulary the facets rot |
| Hypertext | Links in any direction | Editorial, "complete the look", related items | Easy to get lost; needs strong landmarks |

Most real sites are a hierarchy for navigation, a database for the catalogue, and hypertext for editorial cross-links. Decide which is primary before drawing a sitemap.

### 2.3 Depth versus breadth, with numbers

- Larson and Czerwinski (1998, CHI) tested 512 items in three hierarchies: 8 by 8 by 8 (three levels), 16 by 32 and 32 by 16 (two levels). The two-level structures were reliably faster to search; 16 by 32 was fastest and 8 by 8 by 8 slowest, and the deep tree produced the most lost-ness. The reason: every level costs a page load, a decision and a chance to misread a label; breadth costs only scanning, which is cheap when labels are good.
- Miller's "seven plus or minus two" (1956) is a short-term memory finding and says nothing about menus a person can see; do not quote it as a navigation limit.
- Working rule: at most three levels before content on a consumer site, with 5 to 9 top-level groups on desktop and 4 to 5 tabs on mobile. A luxury fashion store with 1,200 SKUs runs on two levels plus facets. A hotel group with 12 properties runs destination, then property, then "stay, dine, wellness, events": three levels, and no fourth.
- Information scent (Pirolli and Card, 1999, "information foraging"): a label gives off scent in proportion to how well it predicts the content beneath it. Depth is survivable when scent is strong at every decision point and fatal when it is weak.

### 2.4 Labelling systems

A labelling system is the set of words used for navigation, headings, index terms and links, chosen as a system so that each term is used in one sense. Rules with reasons:

- Use the person's words, from search logs, support transcripts and card sorts, because the label is read by the person who has not yet learnt your language. "Ready-to-wear" is correct for fashion; "apparel" is a retail back-office word.
- One label, one meaning, across the whole site. "Collections" cannot mean fashion seasons on one page and jewellery lines on another.
- Prefer nouns for places and verbs for tasks; a navigation bar that mixes "Shop" and "Jewellery" reads as two systems.
- Avoid clever labels for anything load-bearing. Wit belongs in copy (design-taste, section 1, point 8); the tab bar carries plain nouns.
- Test with a closed card sort (people place items into your categories) for validation and an open sort (they make their own categories) for discovery. Tullis and Wood (2004) found 20 to 30 participants give results that correlate at about 0.93 with a 168-person sample; 15 is the practical floor (study design and recruiting in 08-ux-research-and-strategy.md).
- Tree testing (text-only navigation of the proposed tree; Optimal Workshop's Treejack is the common tool) measures findability without visual design noise. A top-level task should reach 70 percent direct success before you build.

### 2.5 Navigation systems

| Type | Role | Luxury site example |
|---|---|---|
| Global | Present everywhere; the site's main sections | Header: Women, Men, Jewellery, Stories, Boutiques |
| Local | Within a section; siblings and children | Within Women: Ready-to-wear, Bags, Shoes |
| Contextual | Embedded in content; "see also", "complete the look", "nearby" | On a PDP: the matching bag; on a hotel page: the sister property |
| Supplemental | Outside the main hierarchy: sitemaps, indexes, guides | A to Z designer index; a "how to buy" guide; a hotel's "plan your trip" |
| Utility | Account, cart, language, currency, search | Top right, small, always |

Steve Krug's trunk test ("Don't Make Me Think", 2000, third edition 2014) is the page-level audit: on any page, can you find the site ID, the page name, the sections, the local navigation, a "you are here" marker and search? Any miss is a navigation defect.

Breadcrumbs: location-based (the path in the hierarchy) are the only kind worth using; path-based (your clicks) confuse because two people on one page see two trails. Keep them when the site is three or more levels deep and drop them on two-level stores where the global nav already tells the story.

### 2.6 Search systems

- Findability (Peter Morville, "Ambient Findability", 2005) is the degree to which an object is easy to discover or locate; Morville's user experience honeycomb (2004) sets "findable" beside useful, usable, desirable, accessible, credible and valuable. Search is one route to it; labels (2.4) and navigation (2.5) are the others, which is why a search box never rescues a weak structure.
- Query: a single field, visible at all widths, with autocomplete within 100ms of each keystroke (12.2 on thresholds) showing products, categories and editorial separately. Typo tolerance (one edit for words of 4 to 7 characters, two for 8 or more is the Algolia default) and synonym sets ("kurta" for "tunic", "abaya" variants) are IA work and belong in the design brief.
- Results: show the count, the query, the sort, the facets, and a result that looks like the thing (image for products, excerpt for articles). Keep the query in the field so it can be edited.
- Zero results: never a dead end. Show the query, suggest corrections, show popular items, offer contact. A luxury store's zero-results page should be as considered as its home page because the person arrived with intent and money.
- Facets: attribute filters derived from a controlled vocabulary (see 2.7). Show counts per value so that a dead facet is never selectable; collapse facets with more than about 8 values; let facets combine with OR inside a facet and AND across facets, because that is what people expect when they tick two colours and one size.
- Sorting: default to relevance for search and to a merchandised order for browse; expose "new in", "price low to high", "price high to low". Never default a luxury PLP to price ascending; it leads with the cheapest object.
- Search analytics: the top 100 queries with zero results, read monthly, is the cheapest IA research that exists.

### 2.7 Taxonomy, controlled vocabularies and faceted classification

- A taxonomy is a hierarchical classification of a domain. A controlled vocabulary is an agreed list of terms with one preferred term per concept, plus synonyms that map to it. A thesaurus adds relationships (broader, narrower, related). The reason these are design work: every facet, every filter and every autocomplete suggestion is only as good as the vocabulary behind it.
- Faceted classification (S. R. Ranganathan, Colon Classification, 1933; India's gift to IA) describes each item by several independent facets (for a saree: weave, region, occasion, colour, price band) instead of one tree. It is the right model for any catalogue where people arrive with different first questions.
- Governance: name an owner, write definitions, version the vocabulary, and review quarterly against search logs. A vocabulary without an owner decays in about two seasons.

### 2.8 Wayfinding: screens and physical space

Kevin Lynch, "The Image of the City" (1960), found that people build mental maps from five elements: paths, edges, districts, nodes and landmarks. Romedi Passini, "Wayfinding in Architecture" (1984), and Arthur and Passini, "Wayfinding: People, Signs, and Architecture" (1992), turned that into a method: wayfinding is a sequence of decisions, each needing the right information at the decision point, no earlier and no later.

Applied to screens: paths are the main flows, made visibly continuous (a persistent stepper, a sticky header); edges are section boundaries, marked by background and spacing shifts under one rule for the whole site; districts are a visual family per area (editorial pages look different from the store, so the person feels the move); nodes are the hubs where decisions happen (home, category, bag) and get the most care; landmarks are the logo, the bag and the search field, fixed in position on every page.

Applied to hotels and events (Mask360 does both), where wayfinding is a sequence of decisions:

- Information at decision points: a sign at every corridor junction, none in the middle of a corridor; at an event, a sign at the registration exit, the stair and the lift lobby. Disclose destinations progressively: the lobby sign lists zones, the zone sign lists rooms. Listing every room in the lobby is the physical version of a mega-menu.
- "You are here" maps must be forward-up (aligned so that up on the map is straight ahead for the viewer), because Marvin Levine's experiments (1982, and with Marchon and Hanley, 1984) found that contra-aligned maps (up on the map pointing anywhere but ahead) sent far more people the wrong way than aligned ones.
- Landmarks beat signs: a sculpture, a scent, a colour per floor. Aman's resorts lean on landmark and sightline far more than on signage, which is part of why they feel quiet.
- Naming must match across the invitation, the app, the signage and the staff's mouth. One term per place, as in 2.4.

## 3. Flows and their notation

### 3.1 Task flows, user flows, wireflows

- A task flow is the sequence of steps to complete one task, drawn once, with no persona: "book a room" as a chain of screens and decisions. It is the engineering view.
- A user flow is a task flow for a specific persona entering from a specific place with a specific goal: "a returning Bonvoy member from an Instagram ad books a suite on mobile". It exposes the entry state (signed in? which device? which currency?) that task flows hide.
- A wireflow places low-fidelity screens on the flow so that the two are read together; it is the right artefact for mobile, where a screen is a step.
- A service blueprint adds the backstage (staff actions, systems) under the flow; use it when a flow crosses from app to front desk to WhatsApp.

### 3.2 Notation: Garrett's visual vocabulary

Jesse James Garrett's "A visual vocabulary for describing information architecture and interaction design" (version 1.1b, 2002, jjg.net) is still the common notation because it is tool-agnostic and small. Elements: page, file, page stack, file stack, decision point, connector, arrow, condition, condition branch, conditional selector, cluster, conditional area, continuation point, area, iterative area, flow area, reusable component. Use it in FigJam or Lucid; the value is the shared meaning, so do not invent symbols. The decision point is the one most teams omit, which is why their flows have no error paths.

### 3.3 Happy path, edge paths, error paths

- Happy path: the shortest route from entry to goal with all inputs valid. Draw it first and count its steps; every extra step costs completions (Baymard's checkout research in section 6.3 gives the numbers).
- Edge paths: valid but unusual routes (a guest changes dates after selecting a rate, a card declines, a size is out of stock at checkout). List them before design review, because each one is a screen somebody will otherwise improvise in the build.
- Error paths: invalid input, failed calls, timeouts, permission denied, offline. Each needs a message (anatomy in 10-ux-writing-and-content-design.md) and a recovery route back to the happy path.
- Rule of thumb from practice: for a flow with n screens, expect 2n to 3n edge and error states. A seven-screen checkout has 15 to 20 of them. If the design file shows seven frames, the design is one-third done.

### 3.4 State diagrams and decision tables

- A state diagram (UML statechart; David Harel, 1987) lists the states an object can be in and the transitions between them. Use one for any component with more than three states: a booking (draft, held, confirmed, modified, cancelled, no-show, checked in, checked out), a message (composing, sending, sent, delivered, read, failed), an order. The reason: the diagram makes impossible transitions visible (can a no-show be modified?) before engineering decides for you.
- A decision table lists conditions as columns and outcomes as rows: for example, "member status by rate type by cancellation window" giving the refund rule. Use it whenever three or more conditions interact; prose cannot hold it and a flowchart becomes a thicket.

## 4. The fidelity ladder and prototyping

### 4.1 The ladder

| Rung | What it is | Right question | Cost | Wrong use |
|---|---|---|---|---|
| Sketch | Pen on paper or iPad, many variants, minutes each | Is the idea worth pursuing? Which of five directions? | Minutes | Asking stakeholders to approve one |
| Paper prototype | Sketched screens that a facilitator "operates" with a user | Does the flow make sense? Is the vocabulary right? | Hours | Testing visual hierarchy |
| Lo-fi wireframe | Grey boxes, real labels, no type or colour decisions | Structure, hierarchy, content priority | Hours per screen | Showing to a client who will read it as ugly |
| Mid-fi wireframe | Real type scale, spacing, real content, still greyscale | Layout, density, reading order | Half a day per screen | Letting it ship as the visual design |
| Hi-fi mockup | Final type, colour, imagery, static | Does it look right? Brand fit? | Days | Deciding behaviour from a still |
| Click-through prototype | Linked screens; taps go somewhere | Can a person find the path? First-click success | Hours on top of mockups | Judging motion or feel |
| Motion prototype | Timed transitions, gestures, springs | Does it feel right? Weight, pace, interruptibility | Days | Testing IA |
| Code prototype | Real components, real data, real latency | Does it work with the real content and the real network? | Days to weeks | Mistaking it for production |

The rule that governs the ladder: prototype for the question being asked, at the lowest fidelity that can answer it. The reason is Buxton's cost curve (1.4) and a second effect: fidelity misleads. A hi-fi mockup makes stakeholders discuss the shade of the button and stops them questioning the flow; a lo-fi sketch makes them question the flow and ignore the button. Choose the fidelity that steers the conversation you need. When a client must see "finished" to engage, show one hi-fi hero screen and keep the rest at mid-fi, and say so out loud.

### 4.2 Tools, as of October 2026

| Tool | Best at | Notes |
|---|---|---|
| Figma | Click-through and simple motion prototypes; variables and conditional logic (since 2023) allow state; the shared source of truth | Figma Make (announced at Config, 7 May 2025) builds working coded prototypes from prompts; Figma Sites, announced the same day, publishes sites from frames; check current plan limits before briefing either |
| ProtoPie | High-fidelity interaction prototypes with variables, formulas, native device sensors, voice, multi-device and hardware (ProtoPie Connect for cars and kiosks); ProtoPie MCP and AI-generated interactions are listed on its site as of October 2026 | The right tool for a hotel in-room panel, a car HMI, or a kiosk at an event |
| Origami Studio | Meta's patch-based tool; the deepest control of physics and logic; previews on iOS through the Origami Live viewer | Steep; use when the question is feel at the level of a spring curve |
| Framer | A website builder with motion built in; the right tool to prototype and ship a marketing site in one place | Its original code-prototyping product is gone; do not brief it as a Principle replacement |
| Principle | Legacy timeline-based Mac tool | Still works; not where new skills should go |
| Code (React with Motion, SwiftUI previews, Expo) | Real latency, real data, real gestures; the only honest test of "feel" | Vercel v0, Lovable and Claude Artifacts make a throwaway coded prototype a half-day job |
| Wizard of Oz | A human plays the system (a concierge answering "the AI") | The right first prototype for any AI or voice feature; cost is one person for a day |

### 4.3 Prototype hygiene

- Name the question on the first frame of every prototype. If it cannot be named, the prototype is decoration.
- Use real content. Lorem ipsum hides the two problems that matter most: labels and lengths (plan a 30 percent length allowance for Hindi against English, a common localisation rule; Arabic is similar in width and needs taller lines). Fake only what the question does not need: a booking prototype can fake payment; it cannot fake the calendar.
- Test with five people per round (Nielsen, 2000: five users find about 85 percent of usability problems in a round, assuming a problem probability of 31 percent), then iterate and test again, because the second round finds what the first fixes revealed.

## 5. Pattern catalogue A: entry, identity and finding

A pattern is a named, reusable solution to a recurring interaction problem, described so that it can be recognised and adapted. Every entry in sections 5 to 9 carries the same five fields: when to use, anatomy, variants, pitfalls and a reference example. The reason for the fixed format: a pattern is only useful if it can be rejected, and rejection needs the "when" and the "pitfalls" as much as the anatomy. Visual treatment of components (buttons, fields, cards) lives in 06-ui-design-craft.md; this file covers behaviour.

### 5.1 Onboarding

- When: the person's first session, and any first encounter with a feature that needs a mental model. Skip it entirely when the interface is self-evident; a luxury store needs no onboarding, a hotel operations app does.
- Anatomy: a value statement (one line), the minimum setup the product cannot work without, a first success within the first session, and a route to skip.
- Variants:
  - Progressive onboarding: setup spread across sessions, each step asked when it is needed (address at first order, notification permission after first booking). The reason: every field asked before value is delivered costs completions; Cooper's excise (1.3).
  - Contextual onboarding: a single hint attached to the element at the moment it becomes relevant (a coach mark on the first swipeable card, once).
  - Empty-state-led onboarding: the empty state of each screen explains what will fill it and offers the first action ("No reservations yet. Book a table"). This is the cheapest onboarding because it ships with the screen and never nags a returning user.
  - Product tours (sequential overlays with "next"): the failure mode. Nielsen Norman Group's research on instructional overlays found that people dismiss them to reach the interface and remember little of the sequence; a tour front-loads instruction before motivation exists. House rule: at most one contextual hint per screen, no tour longer than three stops, and never a tour over a screen the person has already used.
- Pitfalls: asking for sign-up before showing value; permission prompts in the first ten seconds (5.3); a "skip" that is visually buried; onboarding that cannot be revisited. Reference: Duolingo's first lesson before account creation (value first, sign-up after); Linear's empty project view, which is a single sentence and a keyboard shortcut.

### 5.2 Authentication

- When: when the product holds something of the person's (orders, bookings, cards, points). Never gate a catalogue or a brand story behind sign-in.
- Anatomy: identifier (email, phone, passkey), factor, recovery route, and a visible statement of what sign-in gives. Returning-user path shorter than new-user path.
- Variants, with the October 2026 position:

| Method | Mechanism | Where it fits | Numbers and caveats |
|---|---|---|---|
| Passkeys | FIDO2 and WebAuthn credential bound to the device, unlocked by biometric or device PIN; synced through iCloud Keychain, Google Password Manager or a third-party manager | Default for new consumer products on iOS and Android and the modern web | FIDO Alliance's "State of Passkeys 2026" (7 May 2026, 11,000 consumers in ten countries) estimates about 5 billion passkeys in use, 75 percent of respondents with at least one account on a passkey, 49 percent using them regularly when offered. Keep a fallback (OTP or magic link) for shared devices and for Indian Android devices without a screen lock |
| Magic link | Email with a one-time signed URL | Low-frequency products, desktop first; hotels and events | Fails on phones where the mail app opens the link in a different browser; pair with a 6-digit code in the same email |
| SMS OTP in India | 4 to 6 digit code by SMS, auto-read by the Android SMS Retriever API or the WebOTP API, iOS "one-time-code" autofill from Messages | The Indian default for phone-first accounts and for RBI-mandated payment authentication | Design the OTP screen as one field with autofill, a 30 second resend timer, a visible "wrong number" route, and the number shown. RBI's Authentication Mechanisms for Digital Payment Transactions Directions, 2025 (issued 25 September 2025, in force from 1 April 2026) keep two factors with at least one dynamic (unique to each transaction) and open the field to biometrics, device-bound tokens and passphrases beside SMS OTP, so a payment screen should expect a fingerprint or an app prompt as often as a code. Delivery delays on DND and roaming numbers are routine, so never block the flow on OTP arrival alone |
| WhatsApp OTP | Authentication template message through the WhatsApp Business Platform | India and the Gulf, where WhatsApp open rates beat SMS | Charged per delivered message (section 16.5); needs an opt-in |
| Social login | OAuth with Google, Apple, Facebook | Consumer apps where the person already trusts those providers | Apple's App Store guideline 4.8 requires an equivalent privacy-preserving option (Sign in with Apple qualifies) when any third-party login is offered; Facebook login reads as dated in luxury contexts |
| Two-factor | Second factor: authenticator app (TOTP), passkey, SMS | Accounts with money, staff tools, admin | SMS is the weakest second factor (SIM swap); offer TOTP or passkey first. Show recovery codes once and make the person confirm they saved them |

- Pitfalls: a password field without "show password"; rules revealed only on failure; a "forgot password" link smaller than 12px; forcing sign-in before checkout (6.3); OTP fields that reject a pasted code with spaces. Reference: Shopify's Shop Pay (phone number, SMS code, saved details); Airbnb's one-field start that branches on whether the identifier exists.

### 5.3 Permissions priming

- When: before any system permission dialog (notifications, location, camera, contacts, tracking), because the operating system allows one prompt and remembers a refusal.
- Anatomy: a pre-permission screen in the app's own design that states the benefit in the person's terms ("See your booking and gate changes on the lock screen"), a primary action that triggers the system prompt, and a secondary "Not now" that never asks again this session.
- Variants: ask-in-context (location when the person taps "near me"), ask-after-value (notifications after the first order), provisional notifications on iOS (delivered quietly to Notification Centre without a prompt, since iOS 12), Android 13 and later runtime permission for notifications.
- Pitfalls: a prompt in the first ten seconds; priming screens that look like system dialogs (Apple rejects them); App Tracking Transparency (iOS 14.5, April 2021) opt-in rates ran at about a quarter of users in Flurry's 2021 to 2022 tracking, so a product whose model depends on tracking consent has a design problem upstream of the prompt. Reference: the Cluster app's pre-permission dialogs (2014, documented by Brenden Mulligan), which established the pattern; Uber's location request at the moment of the first ride.

### 5.4 Search

Section 2.6 covers the system; this entry covers the behaviour at the field.

- When: any catalogue over about 50 items, any help centre, any product with a command surface (9.7).
- Anatomy: field with placeholder that names the scope ("Search rooms, dining, spa"), a clear button, submit on enter, autocomplete panel with three groups (suggestions, products, pages), recent searches when the field is focused and empty, results page with count, query, sort, facets, and a zero-results state that offers routes.
- Variants: instant search (results update as you type, right for catalogues under a few thousand items), search-as-a-page (right for large catalogues and for mobile, where the panel would cover the screen), scoped search (within a section), visual search (upload an image; Google Lens-style; useful for fashion and interiors, rarely worth building in-house).
- Pitfalls: autocomplete slower than 100ms per keystroke (debounce at 150ms and cancel in-flight requests); facets that reset the query; sorting that resets facets; search that ignores Hindi transliteration ("saree", "sari", "साड़ी") or Arabic diacritics; zero-results pages that are blank. Reference: Net-a-Porter's grouped autocomplete (designers, categories, products); Algolia's documented typo tolerance and synonym handling.

### 5.5 Browse and discovery

- When: the person has a category in mind and no specific item. This is where luxury commerce makes its money, because the browse screen is where desire is manufactured.
- Anatomy of a product listing page (PLP): category title and count, optional editorial lead (an image or a sentence about the season), facet bar, sort control, product grid with image, name, price, colour count and availability state, and a "load more" control.
- Variants:
  - Grid density: 2-up on mobile and 3- or 4-up on desktop is the retail default; luxury houses (Bottega Veneta, The Row, Loewe) run 2-up on desktop with large images because scale reads expensive (design-taste, section 2, "space is money").
  - Pagination versus load more versus infinite scroll: Baymard's e-commerce research favours "load more" with lazy loading for product lists, because infinite scroll hides the footer and breaks the back button, and pagination forces a decision every 24 items. Keep the URL updated with the loaded count so that back returns to the same place.
  - Editorial merchandising: curated sets ("The Jaipur edit", "Eid dressing") that mix product with story. The rule: an editorial module every 12 to 24 products, never every 6, and every module links to a shoppable set.
- Pitfalls: sort defaults to price ascending (leads with the cheapest object); image-only grids without names on hover; facet counts missing; grids that reflow when images load (reserve aspect ratios); "quick add" on a luxury PLP, which reads as mass market and skips the size decision. Reference: Ssense (dense, typographic, fast facets); Matchesfashion's editorial grid in its 2015 to 2020 form; Hermès's category pages, which open with one object and a line of copy.

## 6. Pattern catalogue B: luxury commerce

### 6.1 Product detail page (PDP) for luxury

- When: every purchasable object. The PDP is the most-visited page type after home on most luxury stores and the one with the highest revenue per visit, so it earns the most design hours.
- Anatomy, in reading order on mobile:
  1. Gallery: 4 to 8 images at 2000px on the long edge minimum, consistent background per category, at least one on-body or in-context shot, one detail, one scale reference; pinch zoom and a lightbox (8.8). Video where the material moves (silk, chain, light on stone).
  2. Name, then price with currency and tax status ("INR 1,45,000 inclusive of GST", "AED 6,200 inclusive of VAT"). The reason the price is never hidden: hiding it is the oldest luxury affectation and it reads as a deceptive pattern (section 13) to anyone under 40.
  3. Variant selectors: colour as swatches with names, size as a row of buttons with out-of-stock states visible and selectable for "notify me".
  4. Size guide: a sheet, never a new page; measurements in cm with inches toggle; fit notes from the atelier; for shoes, EU, UK, US and IN in one table. Fit-prediction tools (Fit Analytics, owned by Snap since 2021, and True Fit) exist; brief them only for ready-to-wear with real return-rate data.
  5. Primary action ("Add to bag"; luxury says bag, retail says cart) sticky at the bottom on mobile once the gallery scrolls away; wishlist beside it (6.5).
  6. Availability and fulfilment: delivery estimate by location, "collect in boutique" with the boutique's name, "book an appointment", "chat on WhatsApp" (16.5).
  7. Craft and material, composition, care, provenance: the content luxury can offer and mass market cannot; write it (10-ux-writing-and-content-design.md).
  8. Complete the look or wear it with: contextual navigation (2.5), 3 to 4 items, never a carousel of 20.
  9. Reviews where the category supports them (beauty yes, haute joaillerie no; 6.7).
- Variants: made-to-order with lead time and deposit; personalisation (engraving, monogram) with live preview; pre-order with ship date; virtual try-on for beauty (ModiFace, part of L'Oréal since 2018, and Perfect Corp's YouCam power most brand try-ons), for eyewear and jewellery (AR through Apple Quick Look with USDZ files or Google's model-viewer with glTF; both are in the platform and cost only the 3D asset).
- Pitfalls: a gallery that opens a new page; prices in the wrong currency for the detected country; "add to bag" that disappears under the keyboard; size selected by default (removes the decision and causes returns); try-on that fails on first use and never offers again. Reference: Loewe's PDP (gallery first, price plain, craft text as the second half); Cartier's appointment and call routes beside "add to bag"; Sabyasachi's bridal couture, sold by appointment without published prices, a defensible choice only because the house's customers know the range.

### 6.2 Cart (bag)

- When: any store with more than one purchasable item per order. A single-item purchase (a gift card, a booking) skips the cart and goes to checkout.
- Anatomy: items with image, name, variant, unit price, quantity control, remove; subtotal; delivery estimate; promotional code field collapsed behind a link; primary "Checkout" above the fold on mobile; a secondary "Continue shopping". A mini cart (slide-over) for "added" confirmation and a full page for editing.
- Variants: saved for later; gift options (message, wrap) as a step inside the cart because luxury gifting is a large share of orders in December and before Diwali, Eid and Raksha Bandhan; stock warnings only when true.
- Pitfalls: a promo code field open by default (sends people to coupon sites; Baymard's finding); quantity steppers on one-of-a-kind items; a cart that empties on sign-in; prices that change between cart and checkout because tax was hidden. Reference: Apple's bag (sparse, one action); Nykaa's cart with delivery estimate by PIN code before checkout.

### 6.3 Checkout

Baymard Institute's running meta-analysis puts average documented cart abandonment at about 70 percent (70.22 percent across 50 studies in its current published figure), with extra costs (shipping, tax, fees) the top stated reason at 40 percent of abandoners once "just browsing" is excluded, then slow delivery (20 percent), distrust of the site with card details (19 percent), forced account creation (18 percent) and a long or complicated checkout (17 percent); page updated 22 September 2025. Baymard's audits count 23.48 form elements (14.88 form fields) in the average US checkout, where 12 to 14 elements (7 to 8 fields) would do. Every rule below exists to remove a reason from that list.

- When: after the cart, as a sequence (2.2) of at most four stages: contact and delivery, payment, review, confirmation. Single-page checkouts with collapsing sections work for stores with few fields; the stage model is safer for luxury with gifting and appointments.
- Anatomy:
  - Guest checkout first, with account creation offered after confirmation ("Save your details for next time" with the password as the only new field). The reason: the account is a benefit to the store, and the order is the benefit to the person; order first.
  - Progress indicator naming the stages; the current stage editable without losing later data.
  - Address form in the country's own structure (below). Address autocomplete through Google Places or a local provider, with manual entry always available.
  - Delivery options with dates and prices before payment.
  - Payment method selection ordered by local usage.
  - Order review with every cost line and the total in the person's currency.
  - One primary button per stage; the final one says "Pay INR 1,45,000" or "Place order", never "Submit".
- India address and payment realities (as of October 2026):

| Field or method | Specification | Design rule |
|---|---|---|
| PIN code | 6 digits, India Post; the first digit is the zone | Ask early (it drives delivery estimate and COD eligibility); auto-fill city and state from PIN; numeric keyboard |
| DIGIPIN | 10-character alphanumeric geocode for a 4m by 4m cell, launched by the Department of Posts in 2025 with IIT Hyderabad and ISRO's NRSC; open-source encoder on GitHub (INDIAPOST-gov/digipin) | Optional field; useful for villas, farmhouses and new developments without a street address; never required |
| Landmark | Free text ("opposite Oberoi, behind Shiv temple") | Keep it; Indian delivery runs on landmarks, and a form without one causes calls |
| Flat, building, street, locality | Four fields in practice; locality drives the courier's routing | Autocomplete locality from PIN |
| Phone | 10 digits, +91 prefix fixed | The delivery agent calls; mark as required and explain why |
| UPI | NPCI's instant payment system; about 24.07 billion transactions in September 2026 (about 802 million per day, NPCI data as reported) | On mobile use intent flow (hand off to the person's UPI app and return); on desktop show a QR and poll for status; show a 5-minute timer; UPI AutoPay for subscriptions |
| Cards | RBI tokenisation mandatory since October 2022; two-factor (OTP or equivalent) on every transaction | Never store PAN; offer saved tokenised cards; the OTP step happens on the bank's page, so warn the person before the redirect |
| Cash on delivery | Still a material share of Indian e-commerce orders, lower in luxury | Offer above a threshold and below a cap; prepaid discount is a legitimate nudge; COD verification by OTP reduces returns |
| BNPL and wallets | Simpl, LazyPay, Paytm, PhonePe, Amazon Pay | Show where the audience uses them; luxury customers rarely do |
| Rupee formatting | Indian grouping: 1,45,000 with the lakh and crore commas; symbol "INR" or the rupee sign | Format on every price surface identically (03-typography.md on numerals) |
| GST | Prices shown inclusive; the invoice shows the split | "Inclusive of all taxes" next to the price, once |

- UAE realities (as of October 2026):

| Field or method | Specification | Design rule |
|---|---|---|
| Address | No postal codes in general use; emirate, area, building or villa number, street, and a landmark; Dubai's Makani number is a 10-digit building identifier | Use a map pin plus "area" dropdown plus free text; Makani as optional field; never require a postcode |
| Phone | +971, 9 digits after the prefix | Delivery runs on phone and WhatsApp |
| Apple Pay and Google Pay | High iPhone share in the Emirates makes Apple Pay the fastest path | Place first on mobile; it removes the address form |
| Cards | Visa and Mastercard dominate; 3-D Secure OTP | Same redirect warning as India |
| BNPL | Tabby and Tamara (four instalments, no interest to the customer) are common in fashion and beauty | Show the instalment amount on the PDP when the audience is under 35 |
| Cash on delivery | Still common in the Emirates | Same threshold rules |
| Aani and Jaywan | Aani, the instant payment platform run by Al Etihad Payments, the Central Bank's subsidiary; Jaywan, the national domestic card scheme, whose nationwide issuance by banks and exchange houses was inaugurated on 20 July 2026, with a co-badged Jaywan Mastercard credit card | Expect both as checkout options to grow; design the method list to take a new logo without a redesign |
| Dirham | 5 percent VAT; the Central Bank unveiled a dirham symbol in March 2025 | Use "AED" until font support for the new symbol is confirmed in the brand typeface; prices inclusive of VAT |

- Order confirmation anatomy: the order number large, what was bought, where it goes, when it arrives, how to change or cancel, the receipt, "add to calendar" for deliveries with a date, the WhatsApp opt-in, then the account offer. The confirmation page is read more carefully than any other page in the store; it is where trust is banked for the next order.
- Pitfalls: a coupon field that invites abandonment; address forms built for the US (ZIP, state abbreviations); currency switched by IP without a manual override; payment method logos for methods the store does not support; "processing" with no timer after a UPI handoff; a confirmation page without the order number in the first line. Reference: Shopify Checkout (Shop Pay, address autocomplete, single page); Tata CLiQ Luxury's checkout with PIN-first delivery estimate; Ounass (Al Tayer's luxury e-commerce in the Gulf) for Arabic-English checkout parity.

### 6.4 Account and settings

- When: once the person has something to manage. Account is a utility surface (2.5) and gets the plainest possible design.
- Anatomy: orders and bookings first (the reason people come), then addresses, payment methods, profile, preferences (language, currency, communications with granular consent per channel as the DPDP Rules require from May 2027), privacy and data (download, delete), sign out.
- Variants: a hospitality account adds stays, points, preferences (pillow, floor, dietary) that staff can see; a fashion account adds sizes and wishlist.
- Pitfalls: settings as a long undifferentiated list; toggles whose state is ambiguous (06-ui-design-craft.md on switch states); deletion that needs a support ticket (an obstruction pattern, section 13).

### 6.5 Favourites and wishlists

- When: catalogues where the decision takes more than one session (fashion, jewellery, real estate, hotels).
- Anatomy: a heart or "save" on every PLP card and PDP, a saved view reachable from utility navigation, state persisted without sign-in (local, then merged on sign-in), share a list.
- Variants: multiple lists (named); price-drop and back-in-stock alerts (opt-in, honest); a "compare" built on the saved set (6.6).
- Pitfalls: a wishlist that needs sign-in to work at all; a heart that fills before the save succeeds and never un-fills on failure (Saffer's feedback before rule, 1.5); alerts that mail every day.

### 6.6 Comparison

- When: items that differ along a small number of structured attributes (rooms, suites, cars, fine watches, apartments). Fashion rarely needs it.
- Anatomy: a table with items as columns and attributes as rows, differences highlighted, a sticky header with the item image and the price, a limit of 3 to 4 items, add and remove without leaving the table.
- Pitfalls: comparing more than four (the table becomes unreadable on a laptop); attributes that are not comparable ("elegant" versus "refined"); hiding the comparison behind a sign-in.

### 6.7 Reviews and social proof, ethically

- When: categories where reviews change decisions (beauty, hotels, restaurants) and where the brand can accept a 3-star review in public. Haute joaillerie and bespoke tailoring usually should not run reviews.
- Anatomy: average and count, distribution bar, verified-purchase marking, sort by recent and by helpful, the review with date, variant bought, and a photo where allowed, a response from the brand.
- The legal floor, as of October 2026: the FTC's Rule on the Use of Consumer Reviews and Testimonials (final 14 August 2024, effective 21 October 2024) bans fake and bought reviews and review suppression, with civil penalties per violation; the EU's Omnibus Directive (2019/2161, applied from 28 May 2022) requires a trader to say whether and how it ensures reviews come from real purchasers; India's BIS standard IS 19000:2022 "Online Consumer Reviews: Principles and Requirements" was published as voluntary in November 2022, and the Department of Consumer Affairs has repeatedly signalled it could be made mandatory, so treat its requirements (verified authorship, no suppression of negative reviews, moderation disclosed) as the house standard.
- Pitfalls: "4.9 from 12,000 reviews" on a product launched last month; incentivised reviews without disclosure; deleting negative reviews; activity messages ("12 people are viewing this") that are generated. All four appear in Brignull's taxonomy as fake social proof (section 13). Reference: Sephora's reviews with skin type and age band; Booking.com's reviews, which can only be left after a verified stay.

### 6.8 Pricing pages and paywalls

- When: subscriptions, memberships (a private members' club, a hotel loyalty tier with a fee), software.
- Anatomy of a pricing page: 2 to 4 plans in columns, one recommended, the price with the billing period explicit ("INR 2,999 per month, billed yearly as INR 35,988"), a feature matrix with the differences first, FAQs on cancellation and refunds, and a visible cancellation route.
- Paywall anatomy (apps): what is gated, the price, the trial length and the exact date the first charge happens, restore purchases, terms. Apple and Google both require the trial-to-paid terms to be visible; the FTC's Amazon Prime settlement (25 September 2025, USD 2.5 billion: USD 1 billion civil penalty and USD 1.5 billion in refunds) was brought under ROSCA for enrolment without clear consent and a cancellation flow designed to deter, which is the exact pattern a paywall must avoid.
- Pitfalls: monthly price shown for an annual plan; the "continue" button pre-selected to the expensive tier (preselection); a cancel route that runs through a retention script longer than two steps; "SaaS billing" (silent renewal) is one of India's 13 listed dark patterns (section 13.4). Reference: Basecamp's single-price page; Netflix's cancellation, which is one page and two taps, as the cancellation baseline a regulator will hold a client to.

## 7. Pattern catalogue C: hospitality, booking and reservations

### 7.1 Hotel booking anatomy

- When: any property or group selling rooms direct. The direct booking engine competes with the online travel agents (OTAs: Booking.com, Expedia, MakeMyTrip, Agoda) on two things it can control: clarity of price and the member benefit.
- Anatomy, as a sequence:
  1. Entry: destination or property, dates, guests (adults, children with ages, rooms), promo or member code collapsed. On a single-property site, dates and guests only.
  2. Date picker: two months side by side on desktop, a vertical scrolling calendar on mobile, unavailable and minimum-stay nights visibly disabled, the price per night in each cell when the rate engine can supply it (Airbnb's pattern, which Marriott and Hyatt adopted), a flexible-dates option (plus or minus 3 days) with the cheapest night marked.
  3. Room selection: rooms as cards with gallery, size in square metres and square feet, bed type, occupancy, view, and the lowest rate; "room then rate" is the house default because people choose the space before the terms, and "rate then room" suits promotional landing pages.
  4. Rate display: every rate with its name, what is included (breakfast, transfer, spa credit), the cancellation policy in one line with the deadline date, and the total for the stay with taxes. India: GST on room tariff applies by rate band (the September 2025 GST rationalisation set 5 percent without input credit for rooms up to INR 7,500 per night and 18 percent above; verify the current slabs before quoting). Dubai: 5 percent VAT, 7 percent municipality fee, 10 percent service charge and the Tourism Dirham of AED 7 to 20 per room per night by hotel category; Abu Dhabi runs its own tourism and municipality fees. The reason the total appears before the form: a price that grows at the last step is drip pricing (section 13), and hospitality is where consumers expect it most and forgive it least.
  5. Member rate: shown beside the public rate with the difference in money, and a sign-in or join link that keeps the selection. Loyalty is the direct channel's only durable advantage: Marriott Bonvoy, Hilton Honors, Accor ALL, IHG One Rewards, Taj's membership through Tata Neu (NeuPass), Jumeirah One and Aman's private client model all run member rates or recognition.
  6. Guest details: name as on ID, phone, email, arrival time, special requests as free text plus structured chips (high floor, away from lift, connecting rooms, dietary, celebration).
  7. Payment: guarantee by card, prepay, or pay at hotel by rate; UPI prepay in India for non-refundable rates; Apple Pay in the Gulf.
  8. Confirmation: confirmation number first, dates, room, rate, total, cancellation deadline, "add to calendar", directions, the WhatsApp opt-in for pre-arrival, the app or web link to modify.
- Variants: multi-room booking (one guest per room); packages (room plus experience); day-use; long-stay with monthly rates (Dubai); villas and private residences with enquiry instead of instant booking; event and wedding blocks with a group code.
- Pitfalls: a calendar that opens on the wrong month; children's ages asked after the rate is shown (changes the price); "only 1 room left" generated by a rule instead of inventory; the member rate hidden behind sign-in so that the public rate looks worse than the OTA's; modification that requires cancellation and rebooking; confirmation emails that arrive after the WhatsApp message. Reference: Marriott's booking flow for calendar pricing and member rate display; Aman's booking (restrained, enquiry-led for residences); Taj's direct engine for Indian tax display; Booking.com for the comparison baseline the client's guests will hold the engine to.

### 7.2 Restaurant reservations

- When: any restaurant that turns tables and any hotel dining outlet. Reservation platforms (SevenRooms, OpenTable, Resy, Tock; Dineout and Zomato in India; Eat App, which is Dubai-based, in the Gulf) handle the inventory; the design work is the entry point and the policy.
- Anatomy: party size first (it changes the available slots), then date, then time slots as a row of buttons with waitlist shown for full slots, then details and a deposit or card hold where no-shows are a problem, then confirmation with directions, dress code, and the cancellation deadline.
- Variants: tasting-menu restaurants sell tickets (Tock's model) with prepayment; hotel outlets add "in-house guest" with room number; large groups route to an enquiry form; walk-in waitlist with SMS or WhatsApp notification.
- Pitfalls: time slots at 15-minute intervals when the kitchen seats at 30; a deposit without the policy next to the field; confirmation without the address; the policy stated only in the email. Reference: SevenRooms's widget for hotel groups; Resy's slot grid; Tock for prepaid experiences.

### 7.3 Event registration and check-in

- When: launches, previews, dinners, fashion shows, trade days. Mask360 runs these; the registration flow is the first touch of the event's design.
- Anatomy: invitation (personal, with the guest's name and a one-tap RSVP), RSVP with plus-one rules, dietary and access needs, calendar file, the day-before reminder with directions and parking or valet, a QR code or name-based check-in at the door, and a post-event message.
- Variants: tiered guest lists with different arrival windows; seated dinners with table assignment shown at check-in; press with accreditation; hybrid with a stream link.
- Pitfalls: RSVP that requires an account; QR codes that need an app; check-in that queues at one iPad; wayfinding that stops at the door (2.8).

### 7.4 Maps and location

- When: boutique finders, hotel locations and surroundings, event venues, property listings.
- Anatomy: a map with the brand's pins, a list in sync with the viewport, the person's location on request (5.3), each pin with name, address in the local format, hours, phone, WhatsApp and "directions" that opens the person's default maps app.
- Variants: Google Maps Platform (dominant in India for coverage), Mapbox (custom styling that can match a brand palette; design-taste on colour discipline applies to map tiles too), Apple MapKit JS (free tier, matches iOS); Makani numbers in Dubai; a static map image for a single location (faster, no script).
- Pitfalls: a map that captures scroll on mobile (set it to require two fingers or a tap to activate); pins without a list; hours that ignore Ramadan timings or Indian festival closures; the address copied from the Western format with a postcode field.

## 8. Pattern catalogue D: product surfaces

### 8.1 Feeds and timelines

- When: content that arrives continuously (stories, campaigns, editorial, social). A luxury brand's feed is editorial, so the design is a magazine's, with the feed mechanics underneath.
- Anatomy: a list of items with a stable key, a "new items" control that appears at the top when content arrives during reading (so the list does not jump), position restoration on return, pull to refresh on mobile (11.5), and a visible end state.
- Variants: chronological (honest, right for brand feeds and timelines) versus ranked (requires explanation; the EU's DSA Article 27 requires platforms to explain the main parameters of recommender systems); grouped by day; a stories row for ephemeral items.
- Pitfalls: content that inserts above the reading position; infinite feeds in a brand app (a feed should end); autoplay with sound; ranked order without a chronological option.

### 8.2 Notifications and inbox

- When: there is something the person asked to know. The test for every notification: would the person have set an alarm for it?
- Anatomy: categories the person can switch independently (orders, bookings, offers, account), frequency caps per category, quiet hours by local time, an in-app inbox that holds what the push summarised, and read states.
- Platform surfaces, as of October 2026: iOS Live Activities (since iOS 16.1) show a live state on the lock screen and in the Dynamic Island (delivery, table ready, flight); Android 16's Live Updates promote an ongoing notification to a status bar chip, the lock screen and the top of the shade for activities that are ongoing, user-initiated and time-sensitive (active navigation, calls, rideshare, food delivery); Google's documentation lists ads, promotions, chat messages, alerts, upcoming calendar events and shortcuts to app features as inappropriate, excludes package tracking, and lets a boarding pass become a Live Update only once the person is at the airport or boarding has begun. Both are right for "your table is ready" and "your driver is 5 minutes away" and wrong for "new arrivals".
- Legal floor: India's DPDP Act (2023) and Rules (notified 13 November 2025; consent manager provisions from November 2026, notice and consent duties from 13 May 2027, with no change to that timeline notified as of October 2026) require consent that is free, specific, informed and unambiguous with a clear affirmative action, and a withdrawal route as easy as the grant; TRAI's commercial communication rules govern SMS and the DND registry; UAE's PDPL (Federal Decree-Law 45 of 2021) requires consent for direct marketing. The design consequence: a per-channel, per-category consent screen with nothing pre-ticked.
- Pitfalls: one global toggle; marketing in a transactional channel; a push with no deep link to the thing it mentions; sending at 02:00 local time because the server is in another zone.

### 8.3 Messaging and chat

- When: the person expects a human or an agent to reply (concierge, customer care, sales for high-value items).
- Anatomy: message list with sender, time, delivery state (sending, sent, delivered, read, failed with retry), composer with attachments, typing indicator, and a clear statement of who is answering (a person, a bot, an AI; section 10.10) and when.
- Variants: WhatsApp as the channel (16.5), in-app chat (Intercom, Zendesk, Freshchat), SMS fallback; asynchronous with expected reply time ("usually within 2 hours") versus live with queue position.
- Pitfalls: read receipts on by default for staff (creates pressure to answer instantly and shows when they do not); a bot that pretends to be human; a chat widget that covers the "add to bag" button on mobile; transcripts that vanish on refresh. Reference: WhatsApp's state model (two ticks, blue ticks) as the vocabulary people already know; Four Seasons's chat, launched in 2017, which runs through WhatsApp, SMS and the app with a human on the other end.

### 8.4 Wizards and multi-step flows

- When: a task with dependencies between steps, where the later questions depend on earlier answers (a bespoke order, an event brief, a visa or KYC flow, an onboarding for a members' club).
- Anatomy: a stepper that names every step and shows the current one, one question group per screen, back that preserves input, save and resume for flows longer than five minutes, a review step, and a progress statement that is honest about remaining effort.
- Variants: branching (steps appear based on answers; show the stepper updating); a sidebar stepper on desktop and a top bar on mobile; a chat-shaped form (one question at a time, Typeform's model) for short, emotional flows such as an RSVP, and a dense form for expert flows such as a property listing.
- Pitfalls: steps that cannot be revisited; a "step 3 of 7" that becomes "step 3 of 9" after a branch; losing everything on a session expiry; a final "submit" with no review. Reference: Typeform for the one-question form; the UK Government Design System's "one thing per page" pattern with its documented reasons (fewer errors, easier recovery, works on small screens).

### 8.5 Dashboards

- When: a sovereign posture (1.3): operations, revenue, campaign performance, a hotel's daily position. Chart design lives in the dataviz skill and in 06-ui-design-craft.md; this entry is the interaction.
- Anatomy: the question the dashboard answers in the title, the 3 to 5 numbers that answer it at the top with comparison (versus yesterday, versus target), the detail below in order of the person's decisions, a global time range and filter that apply everywhere, and a visible "as of" timestamp.
- Variants: operational (refreshes itself, large type, read from across a room), analytical (dense, filters, drill-down), executive (few numbers, written commentary).
- Pitfalls: a dashboard that opens on a settings screen; filters that apply to some cards and not others without saying so; a date range that resets on navigation; red and green as the only state encoding (colour-blind users, and in Indian and Chinese markets red carries other meanings).

### 8.6 Data tables and editors

- When: records that people scan, sort and act on (orders, guests, inventory, media assets).
- Anatomy: a sticky header, a sticky first column on narrow screens, row density options (compact, default, comfortable, with 32, 40 and 48px rows), column sort with the sorted column marked, column filters, a search, pagination at 25, 50 and 100 rows or virtualised scrolling for very long sets, row selection with a count and a bulk action bar (9.6), row actions in a trailing menu, and inline editing for the fields that change often (9.4).
- Variants: a card list on mobile (the table does not survive below about 600px); an expandable row for detail; a spreadsheet-style editor with keyboard navigation (arrow keys, enter to edit, escape to cancel, tab to move).
- Pitfalls: horizontal scroll with no sticky column; sort that resets filters; an action menu that needs hover on a touch device; numbers left-aligned (align numbers right and in tabular figures; 03-typography.md); truncated names with no tooltip.

### 8.7 Media players

- When: film, campaign video, audio. Motion and delivery specifications are in 16-editing-colour-grading-and-delivery.md; this is the control surface.
- Anatomy: play and pause, a scrub bar with a preview on hover, time elapsed and total, volume with mute, captions toggle (captions on by default when the video autoplays muted), quality and speed where the content is long, fullscreen, and controls that hide after about 3 seconds of no movement and return on any input.
- Variants: ambient background video (no controls, muted, looped, with a pause control for accessibility: WCAG 2.2.2 requires a way to pause content that moves for more than 5 seconds); a hero film with a single play control over a still; a podcast player with skip 15 and 30 seconds.
- Pitfalls: autoplay with sound (blocked by browsers since 2018 and resented since always); custom controls that break keyboard access; no captions on dialogue; a scrub bar too thin to hit on mobile (minimum 24px hit area, WCAG 2.5.8).

### 8.8 Galleries and lightboxes

- When: images that deserve to be looked at alone: PDP galleries, campaign imagery, property photography, event coverage.
- Anatomy: a thumbnail or grid trigger, a full-screen view with the image at its largest, swipe and arrow-key navigation, a counter (3 of 8), pinch zoom on touch and click zoom on desktop, close by a button, by escape, and by swipe-down on mobile, and a URL per image so that back closes the lightbox and a link opens it.
- Variants: luxury PDP galleries that scroll vertically on desktop as a column of full-height images (Bottega Veneta, Jil Sander) instead of a carousel, because scrolling is faster than clicking and shows more at once; a masonry grid for editorial; a filmstrip for events.
- Pitfalls: a lightbox that traps focus and ignores escape; images loaded at thumbnail size then upscaled; a carousel that auto-advances (design-taste's cheap tells); zoom that needs a double tap nobody discovers. Reference: PhotoSwipe's behaviour as the open-source baseline; Bottega Veneta's vertical PDP.

### 8.9 Help and support

- When: always, in proportion to the complexity of what is sold and the price of a mistake.
- Anatomy: contextual help on the screen where the question arises (a "size help" link beside the size selector, a "what is included" beside the rate), a searchable help centre with 5 to 7 categories, a contact page with every channel and its hours and expected reply time, and an escalation route to a human within two steps from any bot.
- Variants: concierge for luxury (one named channel, usually WhatsApp, with a person); self-serve for volume (order status, returns); a chat widget only where the question volume justifies staffing it.
- Pitfalls: a contact page with a form and no phone; a bot that cannot hand off; help written in back-office vocabulary; hours in the wrong time zone.

### 8.10 Error pages

- When: the system fails or the person arrives somewhere that does not exist. Copy anatomy is in 10-ux-writing-and-content-design.md; this is the page.
- Anatomy by type:

| Page | Cause | What the page must do |
|---|---|---|
| 404 | The URL does not resolve | Say so in one line, offer search, the main sections, and a route to what was probably wanted (a product that moved: redirect server-side instead) |
| 500 | The server failed | Say the fault is ours, give a retry, a status link if one exists, and a way to reach a person for an in-progress order |
| Offline | No network (common on Indian trains and in Gulf basements) | Show cached content where possible, say what will sync, never lose typed input; service workers make this a design decision |
| Maintenance | Planned downtime | Give the time it ends in the person's zone, keep the brand's tone, no apology longer than a line |
| Rate limited or blocked | Too many requests, a bot check | Explain, give a route, do not accuse |

- Pitfalls: a 404 that returns HTTP 200 (search engines index it); a witty 404 on a payment path; a maintenance page with no end time; offline states that show a spinner forever.

## 9. Pattern catalogue E: actions, editing and power use

### 9.1 Undo versus confirm

The research position: confirmation dialogs are read less each time they appear, so a frequent confirmation trains the person to click through it, and the one time it matters they click through that too. Nielsen Norman Group's guidance on confirmation dialogs and Aza Raskin's 2007 argument for undo both rest on this habituation effect. Shneiderman's rule for direct manipulation (1.1) asks for reversible operations. Gmail's "undo send" (5 to 30 seconds, chosen in settings) is the canonical consumer example.

| Situation | Use | Reason |
|---|---|---|
| Reversible, frequent, low cost (archive, remove from wishlist, change a filter) | Undo, shown as a toast for 5 to 10 seconds with the action named | Keeps flow; errors cost one tap |
| Reversible but with external effects visible to others (send a message, publish) | Delayed commit with undo (Gmail model) | The effect can be held back for a few seconds at no cost |
| Irreversible and rare (delete an account, cancel a non-refundable booking, refund a payment) | Confirm, with the consequence stated and the object named | Habituation is low because the action is rare; the cost is high |
| Irreversible and high-stakes (delete a project with 300 assets, close a merchant account) | Typed confirmation (type the name) or a second factor | Makes the person read; GitHub's repository deletion is the reference |
| Bulk (9.6) | Confirm with the count, then undo for the batch | The count is the information the person lacks |

- Pitfalls: "Are you sure?" with no object named; undo that expires silently; confirm buttons where the destructive option is the primary colour; confirmation for actions that can be undone.

### 9.2 Destructive actions

- Anatomy: the destructive control separated from the primary action by space or a menu; red reserved for destruction and errors only (04-colour.md); a confirm (9.1) that names the object and the consequence ("Delete 'Jaipur launch' and its 312 assets? This cannot be undone"); the safe option focused by default; a cooling-off for accounts (Apple and Google both hold account deletion for a period).
- Pitfalls: a delete icon beside an edit icon at the same size (adjacent destructive controls); a destructive action on swipe without confirmation; the word "Cancel" meaning both "abort this dialog" and "cancel the booking" in one dialog (name the action: "Keep booking" and "Cancel booking").

### 9.3 Progressive disclosure

- Definition: show the few things most people need first, and reveal the rest on request. Jakob Nielsen's 2006 article is the standard statement; the reason is that every visible option costs attention and a chance of error, so options used by under about 20 percent of people belong behind a step.
- Anatomy: a primary set visible, a "more" or "advanced" control, a secondary set that appears in place (not a new page) with its state remembered.
- Variants: accordions for content; staged disclosure in forms (gift options appear when "this is a gift" is ticked); expandable rows; tooltips for definitions; "show more" on long text with the first 3 lines visible.
- Pitfalls: hiding things 60 percent of people need; accordions with every panel closed on arrival; "advanced" as a dumping ground.

### 9.4 Inline editing

- When: a value that changes often and stands alone (a name, a quantity, a note, a cell).
- Anatomy: a visible affordance on hover or focus (a pencil, an underline, a field border), click or enter to edit, save on blur or enter, escape to cancel, an optimistic update (the UI shows the new value at once and reverts with a message if the save fails; 15.1), and a saved indicator for a second.
- Pitfalls: no affordance, so nobody knows it is editable; save on blur that fires when the person reaches for a tooltip; losing the edit on a slow network with no retry.

### 9.5 Drag and drop

- When: ordering (a gallery, a playlist, a priority list), moving between containers (a kanban), placing (a floor plan, a seating chart for a dinner).
- Anatomy: a handle or a long-press on touch (about 300 to 500ms) to lift, a lift effect (shadow, scale 1.02 to 1.05), a drag threshold of about 8px before the drag starts (so that a tap does not become a drag), a placeholder where the item will land, auto-scroll near edges, a drop animation to the final position, and a keyboard alternative (space to lift, arrows to move, space to drop).
- The legal floor: WCAG 2.2 (October 2023) success criterion 2.5.7 Dragging Movements (AA) requires a single-pointer alternative for any drag operation (tap to pick up, tap to place); keyboard operation is required separately under 2.1.1 (11-accessibility-and-inclusive-design.md).
- Pitfalls: drag that conflicts with scroll on touch (the long-press delay is the fix); no placeholder; dropping on the wrong container with no undo; a seating chart that only works with a mouse. Reference: Trello (the kanban baseline); dnd-kit and Atlassian's pragmatic-drag-and-drop as the open-source behaviours.

### 9.6 Bulk actions

- Anatomy: a selection model (checkbox per row, select all on page, select all across pages with the count stated), a bulk action bar that appears on first selection with the count ("12 selected"), actions limited to those valid for the whole selection, a confirm with the count for destructive actions, and undo for the batch.
- Pitfalls: "select all" that selects only the visible page without saying so; an action bar that covers the table header; no feedback per item on partial failure.

### 9.7 Keyboard shortcuts and command palettes

- When: sovereign products used daily by professionals (operations, content, agency tooling). A consumer store needs only the browser's defaults and escape to close.
- Anatomy of a command palette: opened by Cmd+K or Ctrl+K (the convention set by Superhuman, Linear and Raycast, and now expected), a single field with fuzzy matching, results grouped by type (actions, navigation, records), recent items when empty, the shortcut shown beside each action so that the palette teaches the shortcuts, and arrow keys plus enter.
- Shortcut rules: single-key shortcuts only where the surface has no text input (Gmail's "c" for compose); two-key sequences for navigation ("g then i"); never override browser and OS shortcuts (Cmd+T, Cmd+W, Cmd+L); a "?" that opens the list; shortcuts visible in menus and tooltips.
- Pitfalls: shortcuts with no discovery route; conflicts with Indian and Arabic keyboard layouts (test with the layouts the staff use); a palette that cannot be dismissed with escape.

## 10. AI product patterns, October 2026

The pattern vocabulary here follows Emily Campbell's "Shape of AI" library (shapeof.ai, CC BY-NC-SA), which as of October 2026 groups AI interface patterns into six categories, with patterns including: Wayfinders (how people find their way in: example gallery, initial CTA, suggestions, nudges, follow up, prompt details, templates), Inputs (open input, auto-fill, chained action, inline action, regenerate, transform, restyle, inpainting, madlibs), Tuners (parameters, modes, preset styles, prompt enhancer, attachments, connectors, model management, voice and tone), Governors (action plan, branches, citations, controls, cost estimates, draft mode, memory, references, sample response, stream of thought, variations, verification), Trust builders (caveat, consent, disclosure, data ownership, footprints, incognito mode, watermark) and Identifiers (avatar, colour, iconography, name, personality). The reason to adopt a shared vocabulary: AI features are being designed faster than the patterns are being tested, and a shared name lets a review say "this needs a governor" instead of "this feels risky". 22-ai-era-craft-and-generative-tools.md covers the tools and the production craft; this section covers the product interaction.

### 10.1 Chat interface anatomy

- Streaming: tokens render as they arrive. Buffer markdown so that a half-written table does not flicker; render code blocks only when closed; keep the scroll pinned to the bottom only while the person is at the bottom (a scroll-up must unpin, with a "jump to latest" control). Announce streamed content to screen readers through an aria-live region set to polite, updated at sentence boundaries, never per token.
- Stop: a visible stop control replaces send while streaming. The reason: a wrong answer identified in the first line should cost one tap, and a stop that is missing makes the person wait for a paragraph they already rejected.
- Regenerate, edit and branch: regenerate produces a sibling answer and keeps the first reachable (ChatGPT's "1 of 2" model); edit on a sent message creates a branch; both need a visible indicator so that the person knows the conversation forked.
- Citations and source display: numbered inline markers with a source list under the answer, each source with title, domain, date and a snippet on hover; a source panel for research products (Perplexity's convention). Rule: a claim that came from retrieval carries a marker; a claim that did not is hedged in the text (10.3). Never render a citation that cannot be opened.
- Message actions: copy, feedback (10.7), share, read aloud where voice exists.
- Reference: Claude.ai and ChatGPT for the baseline conventions; Perplexity for citations; Cursor and Claude Code for agentic variants (10.4).

### 10.2 Prompt input design

- Anatomy: an auto-growing text area (1 line at rest, capped at about 8 to 10 lines then scrolling), Enter to send and Shift+Enter for a newline on desktop (the opposite on mobile keyboards, where the send button sends), attachment control with the accepted types stated, slash commands and "@" mentions for tools and files, a voice input control, a model or mode selector only where the choice matters to the person, and a stop control in place of send while streaming.
- Suggestions and starters: 3 to 4 example prompts specific to the product's job on the empty state (Wayfinders), follow-up suggestions after an answer, each phrased as the person would type it. The reason: the blank field is the biggest cause of abandonment in chat products, because it offers no scent (2.3).

### 10.3 Uncertainty and confidence

- Do not show a percentage the model cannot justify; a "87 percent confident" badge is a fabricated number and reads as one to anyone who has used the product for a week.
- Show the basis instead: sources (10.1), the date of the knowledge, a "verify" affordance that opens the source or runs a check (Shape of AI's Verification pattern), and hedged language in the text when the model is unsure.
- Caveats as a pattern: a short, specific disclosure next to high-stakes output ("Prices are from the brand's site on 12 October; confirm before quoting") beats a generic "AI can make mistakes" footer that nobody reads.
- Pitfalls: confidence theatre (fake meters); caveats that are identical on every answer; burying "I am not sure" at the end of a confident paragraph.

### 10.4 Agent progress and approval steps

An agent is a model that plans and executes multi-step actions with tools. The design questions are what the person sees while it works and where they can intervene.

- Plan first: show the plan as a checklist before execution for any task over a few steps (Action plan, a Governor); let the person edit it.
- Progress: a step list with states (pending, running, done, failed), the tool being used, and a one-line summary of each result; expandable detail for the full log; a stream-of-thought view where the product's audience wants it (developers), hidden by default for consumers.
- Approval gates: pause for explicit approval before any action that is irreversible, spends money, sends a message to a third party, or changes permissions. The gate shows exactly what will happen ("Send this WhatsApp message to 142 guests", with the message), with approve, edit and reject. The reason: the cost of a wrong autonomous action is borne by the person and the brand, and a gate costs one tap.
- Interruptibility: a stop that halts the next step and leaves completed steps visible and reversible where possible.
- Reference: Claude Code's permission prompts per tool call; GitHub Copilot's agent mode in VS Code; Shape of AI's Governors category.

### 10.5 Generative UI

Generative UI is the pattern where the model returns structured data that the product renders as real components (a booking card, a comparison table, a calendar) instead of prose. Vercel's AI SDK popularised it on the web with streamed React components; the approach generalises to any typed component library.

- Rules: the model chooses from a fixed set of components with validated props; every component has a loading and an error state; prose fallback when the data does not fit a component; the person can act on the component (book the room from the card) with the same gates as 10.4.
- Pitfalls: letting the model emit arbitrary HTML; components that look different from the product's own; a card that cannot be acted on.

### 10.6 Latency handling

- Thresholds (12.2) apply with one change: first token within 1 second keeps the sense of conversation; a full answer may take 30 seconds if it visibly progresses.
- Show stages ("Searching 4 sources", "Reading", "Writing") instead of a spinner; show a skeleton for a generative component; allow the person to leave and return (the answer continues server-side and a notification or badge marks completion).
- For image and video generation, show the expected duration and a queue position where there is one, and allow a batch to run while the person does something else.

### 10.7 Feedback loops

- Explicit: thumbs up and down with an optional reason list (wrong, unsafe, unhelpful, too long) and a free-text field; a "report" route for harmful output. Implicit signals (copy, regenerate, edit, abandonment, follow-up) are stronger than thumbs; log them with consent.
- Memory transparency: show what the product remembers about the person and let them edit and delete it (Shape of AI's Memory and Data ownership patterns; DPDP's data principal rights).

### 10.8 Guardrails and refusal UX

- A refusal says what cannot be done and offers what can, in one short paragraph, in the product's voice, with no lecture. The reason: a moralising refusal reads as the brand judging its customer. Partial help is the default: answer the part that is safe, name the part that is not.
- Policy-driven blocks (a luxury brand's concierge will not discuss competitor pricing, a hotel bot will not take a reservation for a minor) are stated as policy in the brand's voice, with the policy named. A route to a person is always present after a refusal.

### 10.9 Cost and quota display

- Where the person pays per use (credits, tokens, generations), show the cost before the action (Cost estimates, a Governor), the balance after, and the point at which the plan runs out; batch generations show the total cost of the batch; where a quota resets, show the reset time in the person's zone.
- Pitfalls: a surprise "you are out of credits" after the prompt is written; credits as a currency that hides the money (Currency confusion in Brignull's taxonomy, section 13.1).

### 10.10 Disclosure and the law, as of October 2026

- The EU AI Act's transparency obligations (Article 50) require that people are told when they interact with an AI system unless it is obvious, and that synthetic content is marked in a machine-readable way; they apply from 2 August 2026. The AI digital omnibus adopted in mid-2026 moved the Annex III high-risk obligations to 2 December 2027 and left Article 50 in place, giving only systems already on the market before 2 August 2026 until 2 December 2026 to add the machine-readable marking. Design consequence: a concierge bot states that it is automated in its first message and in its avatar or name (Identifiers), and generated images carry a disclosure where the law or the platform requires.
- India has no AI-specific statute as of October 2026; the DPDP Act governs the personal data an AI feature processes, and the CCPA's dark pattern guidelines apply to any manipulative AI interface.
- House rule: an AI feature in a Mask360 product is named, disclosed, interruptible, and gated on anything that costs money or sends a message. The brand's voice (10-ux-writing-and-content-design.md) is the bot's voice; a generic assistant persona is a cheap tell.

## 11. Mobile interaction conventions

### 11.1 iOS and Android: the differences that matter

| Behaviour | iOS (iOS 26, Liquid Glass, as of October 2026) | Android (Android 16, Material 3 Expressive) | Design consequence |
|---|---|---|---|
| Back | Edge swipe from the left and a back control in the navigation bar; no system back button | System back gesture from either edge or a 3-button bar; predictive back shows the destination during the gesture (opt-in since Android 13, on by default for apps targeting Android 16) | Every screen on Android must handle back; sheets and dialogs dismiss on back; on iOS a modal needs its own close control |
| Primary navigation | Tab bar at the bottom, up to 5 tabs, with Liquid Glass tab bars that shrink on scroll | Navigation bar (3 to 5 destinations) or navigation rail on tablets; navigation drawer for more | Both agree on 3 to 5; the fifth tab is often "More", which is a sign the IA has 6 items |
| Sheets | Sheets with detents (medium, large, custom) since iOS 15; the system dims and allows swipe to dismiss | Modal and standard bottom sheets with a drag handle; standard sheets stay while the page scrolls | Use a sheet for a sub-task that keeps context (a size guide); a full screen for a new task (checkout) |
| Share | The share sheet (UIActivityViewController) with app suggestions | Android Sharesheet with direct share targets | Always use the system sheet; a custom share menu loses the person's apps |
| Alerts and dialogs | Centred alert, two or three actions, destructive in red | Centred dialog, actions bottom-right, text buttons | Keep action order per platform (iOS: cancel left, action right) |
| Pickers | Wheel or compact date picker; menus from buttons | Material date picker (modal calendar) and dropdown menus | Do not ship a wheel picker on Android or a Material calendar on iOS |
| Typography and iconography | SF Pro and SF Symbols | Roboto and Material Symbols | A brand typeface may replace both; the system icons should stay (03-typography.md) |
| Haptics | UIFeedbackGenerator: selection, impact (light, medium, heavy, soft, rigid), notification (success, warning, error) | HapticFeedbackConstants and VibrationEffect; CONFIRM and REJECT since Android 11 | Pair haptics with the visual change at the same frame (11.4) |
| Widgets and live surfaces | WidgetKit widgets; Live Activities and the Dynamic Island since iOS 16.1; App Clips (a small part of the app launched from a QR code, NFC tag, App Clip Code or link without install; the uncompressed size cap is 10MB for iOS 15 and earlier, 15MB for iOS 16, and 100MB on iOS 17 and later only for clips invoked digitally, by links or Spotlight, and never physically) | App widgets; Live Updates in Android 16 (8.2); Google Play Instant (Instant Apps) was shut down in December 2025, so install-free experiences on Android run on the web | A hotel's "your room is ready" and a boutique's "collect at the counter" are Live Activity and Live Update cases; an event's check-in is an App Clip case |
| Deep links | Universal Links (apple-app-site-association file on the domain) | App Links (assetlinks.json on the domain) | Every marketing URL must resolve in the app if installed and on the web if not; deferred deep links (Branch, AppsFlyer) carry the destination through the install |

### 11.2 Gestures and their conflicts

- Horizontal swipe conflicts: a carousel inside a screen that also uses edge-swipe back (iOS) or back gesture (Android). Fix: carousels start their gesture inside the content area with an inset from the edge of at least 20pt, or use the system's gesture exclusion only where unavoidable.
- Vertical conflicts: pull to refresh inside a scroll view that also has a draggable sheet; a map inside a scroll view. Fix: one vertical gesture owner per region.
- Long press: context menus (iOS 13 and later; Android has long-press menus by convention) after about 500ms; never the only route to an action.
- Hit targets: 44 by 44pt on iOS (Apple's HIG) and 48 by 48dp on Android (Material); WCAG 2.5.8 Target Size (Minimum) sets a 24 by 24 CSS pixel floor at level AA for the web. Spacing between targets matters as much as size.
- Edge swipes: avoid attaching actions to the screen edges on both platforms; the system owns them.

### 11.3 Keyboard behaviour

- Use the input type that summons the right keyboard: tel for phone, email for email, numeric for OTP and PIN, decimal for prices, url for links; on iOS "one-time-code" textContentType enables OTP autofill from Messages; on Android, the SMS Retriever API reads the code without the SMS permission.
- The keyboard covers about 40 percent of the screen; the field in focus and the primary button must stay visible (keyboard-avoiding layout); place "Done" or "Next" on the keyboard's return key per field.
- Hindi and Arabic keyboards are taller and switch layouts; test every form with them. Indic transliteration keyboards (Gboard's Hinglish) mean a person types "namaste" and gets "नमस्ते"; search must handle both. Dismiss on scroll or on tap outside; never trap the keyboard behind a modal.

### 11.4 Haptics pairing

- Selection changes get the lightest tick (iOS selection, Android CLOCK_TICK); toggles and confirmations get a light impact; success, warning and error states get the notification types, once; nothing on scroll, nothing on every keystroke.
- Pair with the visual at the same frame, because a haptic that arrives 50ms after the visual reads as a separate event. Respect system settings: haptics are off for a share of people and for every Android device without a good actuator, so no information may live only in the haptic.

### 11.5 Pull to refresh

- Use it on chronological content that updates (feeds, inbox, orders list) and nowhere else; a checkout or a form must never refresh on an overscroll. Anatomy: a threshold of about 80pt, a visible indicator that follows the finger, a release state, and a completion state; iOS and Android each provide the control.

## 12. Feedback, system status and error prevention

### 12.1 Nielsen's heuristics, applied

Jakob Nielsen's ten usability heuristics (1994, revised wording 2020) are the standard vocabulary for a heuristic evaluation, in which 3 to 5 evaluators independently inspect an interface against the list and merge findings (Nielsen and Molich, 1990, found that single evaluators catch about 35 percent of problems and five catch about 75 percent).

| Heuristic | What it asks | Mask360 application |
|---|---|---|
| Visibility of system status | Does the person always know what is happening? | Booking engine shows the rate search in progress and the hold timer; a UPI payment shows "waiting for your app" with a countdown |
| Match between system and the real world | Does it use the person's words and conventions? | "Bag" in luxury, "check-in" in hotels, PIN code in India, "area" in Dubai |
| User control and freedom | Can the person back out and undo? | Undo on wishlist removals; modify a booking without cancelling |
| Consistency and standards | Does it follow platform and internal conventions? | One date format, one price format, platform pickers (11.1) |
| Error prevention | Does it stop errors before they happen? | Disabled past dates, PIN-driven city, inline validation (12.3) |
| Recognition over recall | Is what the person needs visible? | Recent searches, saved addresses, the selected room shown in the payment step |
| Flexibility and efficiency | Are there accelerators for experts? | Saved cards, Apple Pay, command palettes in staff tools |
| Aesthetic and minimalist design | Is every element earning its place? | Design-taste, section 5, "edit" |
| Help people recognise, diagnose and recover from errors | Are errors plain and actionable? | Error anatomy in 10-ux-writing-and-content-design.md |
| Help and documentation | Is help there when needed, in context? | 8.9 |

### 12.2 Response time thresholds

Robert Miller (1968) set the three limits that Card, Robertson and Mackinlay (1991) and Nielsen (1993) restated and that still hold:

| Limit | Perception | Design response |
|---|---|---|
| 0.1 second (100ms) | Instantaneous; the system feels like a direct extension of the hand | Every tap, toggle, keystroke and hover must respond within it; Google's Interaction to Next Paint (INP) metric sets "good" at 200ms or less at the 75th percentile of page loads and "poor" above 500ms, which is the web's measurable version of this limit |
| 1 second | The flow of thought stays unbroken; a delay is noticed and tolerated | Page transitions, search results, a rate lookup; show nothing for under 1 second (a spinner that flashes for 300ms reads as a glitch) |
| 10 seconds | The limit of attention; beyond it people switch tasks | Anything longer needs a progress indicator with percentage or stages, an estimate, and a cancel; beyond about 30 seconds, let the person leave and notify them |

Frame budgets: 16.7ms per frame at 60Hz and 8.3ms at 120Hz (iPhone Pro models, most flagship Android devices); a dropped frame during a gesture is visible. 12-motion-principles-and-ui-motion.md has the timing values.

### 12.3 Forgiving formats, smart defaults and constraints

- Forgiving formats: accept phone numbers with or without spaces, dashes, brackets and a leading zero or +91; accept card numbers with spaces and format them in groups of four as typed; accept dates typed in any reasonable order and show the interpretation ("12 Nov 2026"); strip whitespace from codes and emails. The reason: every rejected valid input is an error the system caused.
- Smart defaults: country and currency from locale with a visible override; dates defaulting to the next plausible stay (tonight for a city hotel, the next weekend for a resort); the last used address and payment method; the person's own name on the gift card as sender.
- Constraints: disable what is impossible (past dates, out-of-stock sizes, a checkout button before an address) and show why; input masks for fixed formats (PIN code, OTP, Makani number); character counts on limited fields, shown when within 20 characters of the limit.
- Validation timing: Luke Wroblewski's 2009 study with Etre found that inline validation (checking a field when the person leaves it) against a form that validated only on submit produced a 22 percent increase in success rate, a 22 percent decrease in errors, a 31 percent increase in satisfaction and a 42 percent decrease in completion time. Validate on blur, show success quietly, show errors next to the field, and never validate on the first keystroke (the person has not finished).

### 12.4 Error message anatomy, cross-reference

The copy anatomy (what happened, why in one clause, what to do, in the brand's voice) and the tone rules are in 10-ux-writing-and-content-design.md. The interaction rules here: the message appears where the error is (beside the field, in the component), stays until fixed, moves focus to the first error on submit, is announced to assistive technology, and never clears the person's input.

## 13. Deceptive patterns and the law

A deceptive pattern (Harry Brignull's term since 2010, "dark pattern" in the older literature and still in Indian law) is an interface designed to make people do things they did not intend, to the designer's benefit. The reason this section is long: Mask360's clients sell trust at a premium, and a deceptive pattern is the fastest way to spend it. It is also, as of 2026, a regulated practice in every market the agency works in.

### 13.1 Brignull's taxonomy, as of October 2026

deceptive.design lists 18 types, each mapped to laws and enforcement actions: sneaking, forced action, hard to cancel, preselection, obstruction, hidden subscription, hidden costs, trick wording, visual interference, fake social proof, fake urgency, nagging, fake scarcity, disguised ads, confirmshaming, comparison prevention, addictive design, and currency confusion (the last two added as the taxonomy grew from 12 types in 2019 to 16 in 2024 and 18 now).

The seven-category grouping the brief asks for comes from Mathur et al., "Dark Patterns at Scale" (CSCW 2019), who crawled about 11,000 shopping sites and found 1,818 instances on 1,254 of them (about 11 percent), classified into: sneaking (hidden costs, sneak into basket, hidden subscription), urgency (countdown timers, limited-time messages), misdirection (confirmshaming, visual interference, trick questions, pressured selling), social proof (activity notifications, testimonials of uncertain origin), scarcity (low-stock messages, high-demand messages), obstruction (hard to cancel), and forced action (forced enrolment). Brignull's book "Deceptive Patterns" (2023) carries both taxonomies.

| Category (Mathur) | Example seen in luxury and hospitality | Why it is deceptive | The honest version |
|---|---|---|---|
| Sneaking | A "service fee" or "resort fee" appearing at the payment step; gift wrap pre-added | The decision was made on a false price | Total with every fee from the first rate display (7.1) |
| Urgency | "Offer ends in 09:59" that resets on reload | The deadline is fictional | A real sale with a real end date, stated once |
| Misdirection | "No thanks, I don't want to save money" as the decline; a greyed decline button that is still active | Shame and visual weight used to steer | Two buttons of equal weight with plain labels |
| Social proof | "23 people booked this room today" generated by a rule | The number is not a measurement | Real numbers from inventory or none |
| Scarcity | "Only 2 left" on every room type | A measurement claimed without being made | Stock counts from the system, shown only below a real threshold |
| Obstruction | Cancellation by phone only during office hours in another time zone | Asymmetry between joining and leaving | Cancel in the same channel, in the same number of steps, as joining |
| Forced action | Account creation before the price is shown; marketing consent bundled with terms | Consent coerced by withholding the goal | Guest checkout; unbundled consent |

### 13.2 European Union

- The Unfair Commercial Practices Directive (UCPD, 2005/29/EC) is the base: misleading actions and omissions, aggressive practices, and a blacklist in Annex I that already covers false urgency and fake reviews (added by the Omnibus Directive 2019/2161, applied from 28 May 2022). The Commission's 2021 UCPD guidance names dark patterns explicitly.
- The Digital Services Act (Regulation 2022/2065), Article 25, bans online platforms from designing interfaces that deceive or manipulate recipients or materially distort their decisions, applicable to all platforms from 17 February 2024; it defers to the UCPD and GDPR where they apply, which is why its reach on ordinary e-commerce is contested.
- The GDPR plus the EDPB's "Guidelines 03/2022 on deceptive design patterns in social media platform interfaces" (version 2.0, February 2023) set the consent standard: no pre-ticked boxes, reject as easy as accept, no nagging.
- The EU AI Act, Article 5, prohibits AI systems that deploy manipulative or deceptive techniques to distort behaviour, applicable from 2 February 2025.
- The Digital Fairness Act: the Commission's consultation ran from 17 July to 24 October 2025, its 2026 work programme schedules a proposal for the fourth quarter of 2026, and press reports in September 2026 pointed to November; as of late October 2026 no text is published. The announced scope covers dark patterns, addictive design, influencer marketing and unfair personalisation, with attention to minors; design for it now, because every item on that list already appears in 13.1.

### 13.3 United States

- The FTC acts under Section 5 of the FTC Act (unfair or deceptive practices) and the Restore Online Shoppers' Confidence Act (ROSCA, 2010) for negative-option subscriptions. Its 2022 staff report "Bringing Dark Patterns to Light" is the reference taxonomy for enforcement.
- Enforcement that sets the bar: Epic Games, USD 245 million in refunds for Fortnite's confusing purchase flows and dark patterns (December 2022, finalised 2023); Amazon, USD 2.5 billion (25 September 2025) over Prime enrolment and cancellation, under ROSCA, with injunctive terms requiring clear consent before charging and a simple cancellation.
- The "click to cancel" amendments to the Negative Option Rule (finalised October 2024) were vacated by the Eighth Circuit on 8 July 2025 (Custom Communications v. FTC) on procedural grounds; the FTC restarted the process with an advance notice of proposed rulemaking (ANPRM, the first, question-only stage of a US rulemaking) on 11 March 2026, which asks among other things whether to mandate click-to-cancel, and continues to enforce the same conduct under ROSCA, so the design obligation (cancel as easily as you joined) stands regardless of the rule's status.
- The FTC's Rule on the Use of Consumer Reviews and Testimonials (effective 21 October 2024) covers fake reviews, bought reviews and review suppression (6.7).

### 13.4 India

- The Central Consumer Protection Authority (CCPA) issued the "Guidelines for Prevention and Regulation of Dark Patterns, 2023" on 30 November 2023 under the Consumer Protection Act, 2019, classifying dark patterns as unfair trade practices under section 2(47) and applying to every platform systematically offering goods or services in India, to advertisers and to sellers. Annexure I specifies 13 patterns:

| Number | Pattern | Guideline example, paraphrased | Where Mask360 clients are exposed |
|---|---|---|---|
| 1 | False urgency | Falsely stating or implying urgency or scarcity | Sale countdowns, "only 2 rooms left" |
| 2 | Basket sneaking | Adding items, services, donations or charges at checkout without consent | Pre-added gift wrap, travel insurance, "contribution" |
| 3 | Confirm shaming | Using fear, shame or guilt to nudge a choice | Decline buttons with guilt copy |
| 4 | Forced action | Forcing a purchase, sign-up or data sharing to proceed | Account before price; app install to see the catalogue |
| 5 | Subscription trap | Making cancellation impossible or hidden, or hiding auto-renewal terms | Memberships and clubs |
| 6 | Interface interference | Design that highlights some information and obscures other information | Hidden "pay at hotel" option; low-contrast fees |
| 7 | Bait and switch | Advertising one outcome and delivering another | Rate advertised that is never available |
| 8 | Drip pricing | Revealing price elements gradually, or charging after confirmation | Taxes and fees at the last step |
| 9 | Disguised advertisement | Ads posed as content or user content | Sponsored editorial without a label |
| 10 | Nagging | Repeated requests, information, options or interruptions unrelated to the task | Repeated app rating prompts, newsletter pop-ups |
| 11 | Trick question | Deliberately confusing language to obtain a specific response | Double negatives in consent |
| 12 | SaaS billing | Collecting recurring payments covertly by exploiting positive acquisition loops | Free trials rolling to paid silently |
| 13 | Rogue malware | Using ransomware or scareware to mislead | Rare in this sector |

- Enforcement, as of October 2026: the CCPA's advisory of 5 June 2025 asked e-commerce platforms to self-audit against the 13 patterns within three months and submit self-declarations. Penalty orders have followed: the Zepto order of 4 December 2025 found drip pricing and basket sneaking, and government reporting in August 2026 put total dark-pattern penalties at about INR 20 lakh across platforms including FirstCry, PharmaEasy, Zepto, McAfee and Physics Wallah, with several orders requiring design changes in place of fines. The CCPA judged the effect on users and set the platform's intent aside. Under the Consumer Protection Act, misleading advertisements carry penalties of up to INR 10 lakh for a first offence and INR 50 lakh for subsequent ones (section 21), and the Consumer Protection (E-Commerce) Rules, 2020 add duties on marketplaces.
- The Consumer Protection (E-Commerce) (Amendment) Rules, 2026 (G.S.R. 789(E), notified 9 September 2026, in force 1 January 2027) make the 2023 guidelines binding on e-commerce entities through a new rule 4(15), require an annual self-audit with a compliance certificate displayed on the platform, measure any advertised discount against the lowest price of the preceding 30 days, and require sponsored listings to be labelled. Design consequence: the strikethrough price, the ranking and every fee line become audited surfaces.
- The DPDP Act (2023) adds the consent standard (free, specific, informed, unconditional, unambiguous, clear affirmative action, withdrawal as easy as grant) and the Rules (13 November 2025) specify the notice content, with the core duties in force from 13 May 2027.

### 13.5 United Arab Emirates

Federal Law No. 15 of 2020 on Consumer Protection and its 2023 executive regulation prohibit misleading advertising and require clear pricing inclusive of VAT; the Personal Data Protection Law (Federal Decree-Law 45 of 2021) requires consent for marketing. There is no dark-pattern-specific instrument as of October 2026; the Indian and EU lists are the practical standard, and the Gulf consumer's expectation of price clarity is at least as high.

### 13.6 The house position

- Every pattern in 13.1 and 13.4 is banned in Mask360 work, including the grey ones: no countdown without a real end, no stock count without a real count, no pre-ticked anything, no decline button that shames, no cancellation harder than joining. The reason is commercial as much as legal: luxury's product is trust, and a customer who catches one fake "only 2 left" discounts every future claim the brand makes.
- Honest persuasion remains available and is more effective with this audience: real scarcity (a numbered edition, a last suite), real deadlines (a season's end, a launch), real social proof (a press quote, a named client with permission), and the quiet confidence of a brand that does not need to push (design-taste, section 2, "copy that does not sell").
- Review protocol: every checkout, booking and consent flow is audited against the 13 Indian patterns and the 18 Brignull types before launch, with the audit kept as a record, because the 2026 amendment rules make an annual self-audit and a displayed certificate mandatory for e-commerce entities from 1 January 2027.

## 14. Conversational and voice interfaces

### 14.1 Dialogue design basics

- A conversation is a sequence of turns in which each party's contribution is relevant, sufficient, truthful and clear (Paul Grice's cooperative principle and four maxims, 1975, which Google's conversation design guidelines and Cathy Pearl's "Designing Voice User Interfaces" (2016) adopt as the design rules).
- Persona: define who is speaking (name, role, register, what it never says) before writing a line; the brand's voice rules in 10-ux-writing-and-content-design.md apply.
- Prompt design: each system turn ends with a clear request or question; one question per turn; options listed in threes at most on voice, because the person cannot see them.
- Confirmation: implicit for low-stakes ("Booking a table for four on Friday at eight") and explicit for high-stakes ("Shall I charge the card ending 4421 for AED 1,200?").

### 14.2 Turn taking and timing

- Voice: Stivers and colleagues (PNAS, 2009) measured the typical gap between turns across ten languages at about 200ms, so a system silence past about a second reads as failure. Use an end-of-speech timeout of about 1 to 2 seconds, barge-in (the person may interrupt the system) on by default, and a response or an audible acknowledgement within about 1 second.
- Text chat: one system turn per person turn unless the system is reporting progress; a typing indicator only while a reply is really being composed; long replies split at natural breaks with the question last, because people answer the last thing they read; and the person can always take the turn back (stop, 10.1).

### 14.3 Error recovery

- No-match (the system did not understand) and no-input (silence) each get a three-level strategy: rephrase briefly, rephrase with examples, then offer an alternative (a menu, a human, a link). Three failures in a row always escalate.
- Never repeat the same prompt word for word; never say "I didn't understand" without a suggestion. Keep what was understood: a person who gave the date and the party size should not repeat them after a failed time.

### 14.4 India and the Gulf

- Code-switching is the norm: Hinglish ("table book karna hai Friday ko") and Arabic with English product names. The language model or grammar must accept mixed input, and the persona should answer in the mix the person used.
- Arabic dialects differ by country (Gulf, Levantine, Egyptian) and from Modern Standard Arabic; a Dubai concierge bot should recognise Gulf and Egyptian dialect input and answer in a light MSA or the brand's chosen register.

### 14.5 When voice is wrong

- Private information in public spaces (a hotel lobby, a shop floor); noisy environments (restaurants, events); choices that are visual (a room, a dress, a shade); lists longer than three; anything that needs a record (a confirmation number). Voice suits hands-busy and eyes-busy contexts (driving, cooking, the in-room controls of a hotel) and accessibility. In-room voice (Amazon launched Alexa for Hospitality in 2018 and hotel groups trialled it) is a case where the technology works and the feeling of an always-listening device in a bedroom does not; the house position is that a luxury room has a person on the phone and a quiet tablet, and no always-listening device.

## 15. The interaction quality bar

The bar is set by a small number of practitioners whose work most product designers measure themselves against in 2026. The vocabulary below is theirs; the taste judgement above it is design-taste's.

### 15.1 Rauno Freiberg: invisible details

Freiberg (Staff Design Engineer at Vercel, previously at The Browser Company on Arc) wrote the essay "Invisible Details of Interaction Design" (2023) and "Devouring Details", an interactive reference manual of 23 chapters, each with its React component, on inferring intent, interaction metaphors, ergonomic interactions, simulating physics, motion choreography and contained gestures. Together they name the details that separate polished from adequate:

- Robustness: the interaction works when the person does something unexpected (double tap, mid-animation tap, slow network, resize), because a detail that breaks under pressure reads as a bug and a detail that holds reads as quality.
- Hover intent and prediction: a menu that does not close while the pointer travels diagonally to a submenu (the "safe triangle" that Ben Kamens documented in Amazon's mega-menu in 2013, descended from the prediction cone Bruce Tognazzini described in Apple's hierarchical menus of the 1980s), a delay of about 100 to 150ms before a hover state commits, so that passing over does not trigger.
- Optimistic updates: the interface shows the result at once and reconciles with the server after, reverting with a message on failure.
- Interruptibility: an animation that can be reversed mid-flight by the next gesture (a sheet being closed can be caught and reopened) because springs carry velocity and tweens do not (12-motion-principles-and-ui-motion.md).

### 15.2 Emil Kowalski and the web's motion craft

Kowalski (formerly of Vercel and Linear, author of the Sonner toast and Vaul drawer libraries for React and of the course "Animations on the Web" at animations.dev) states the rules the house follows for UI motion: ease-out for things that enter and ease-in-out for things that move within the screen, durations of about 150 to 300ms for interface transitions, no bounce on productivity surfaces, animate transform and opacity only, respect prefers-reduced-motion, and animate to explain a state change, never to decorate. His test: if removing the animation makes the interface harder to understand, keep it; if it makes it faster, remove it.

### 15.3 Linear's quality bar

Linear (Karri Saarinen and team) made "quality" a product strategy: interactions under 100ms through local-first sync (the client holds the data and writes back), keyboard-first with every action in the command palette, optimistic updates everywhere, and a changelog that reports speed improvements as features. The reason it matters to an agency: Linear showed that speed and restraint are themselves a brand, which is the same proposition luxury makes.

### 15.4 Apple's interaction principles

Apple's Human Interface Guidelines carry the lineage from 1987 (1.1): direct manipulation, immediate feedback, consistency, forgiveness (undo), user control, and since the 2018 WWDC session "Designing Fluid Interfaces" the behaviours of fluid motion: interruptible and redirectable animations, gestures tracked one-to-one with the finger, momentum projected from the gesture's velocity, and responses that begin on touch-down. iOS 26's Liquid Glass (2025) changed the material and kept the behaviours; the design consequence is that every custom control in a Mask360 app is measured against the system's own sheets, tab bars and scroll physics, and a custom control that feels heavier or slower than the system's loses. The feeling of weight comes from three values held constant across a product: how far an object travels relative to its size, how quickly its spring settles, and whether it overshoots. A sheet settles slower than a toast, a luxury product does not overshoot, and the values live as motion tokens (12-motion-principles-and-ui-motion.md, 07-design-systems-and-tokens.md).

### 15.5 The bar, as a checklist

1. Every tap responds within 100ms, with a visual change on touch-down.
2. Every animation can be interrupted and reversed by the next input.
3. Every list and page restores scroll position on return.
4. Every action that can be undone offers undo; every action that cannot says so before it runs.
5. Every control's hit target meets the platform minimum and sits at least 8px from its neighbour, and every gesture has a visible alternative.
6. Every state (empty, loading, partial, error, offline, success) exists in the design file and the build.
7. Every transition explains a spatial relationship (where did it come from, where did it go).
8. Nothing moves that does not need to (design-taste, section 5, "motion").
9. The feeling of weight is consistent: sheets, cards and images in one product share one spring (12-motion-principles-and-ui-motion.md).
10. Keyboard and screen reader paths exist for every flow.
11. The slow network path (3G, 400ms latency) has been tried by the designer, by hand.

## 16. Designing for India and the Gulf

### 16.1 Low bandwidth and lite patterns

- Design and test on throttled connections (Chrome DevTools "Slow 4G" and a 400ms round trip) because a share of Indian sessions still run on congested 4G in Mumbai towers and on 3G fallback in Jaipur's old city and Goa's interiors, and because Gulf basements, malls and desert resorts drop to one bar. Numbers vary by month; take the current medians from Ookla's Speedtest Global Index when briefing.
- Lite patterns, with the reason: image budgets of about 100KB for hero and 30KB for grid images in AVIF or WebP with responsive sizes (image payload is the main cost); skeleton screens instead of spinners (perceived speed); critical content server-rendered (first paint before script); a service worker caching the shell and the last catalogue view (offline tolerance); lazy loading below the fold; fonts subset to the scripts in use with font-display swap (03-typography.md); "data saver" respect (the Save-Data client hint); no autoplay video on cellular. Flipkart Lite (2015) was the first large progressive web app built for exactly this and remains the case study.
- Device reality: Android holds the large majority of Indian handsets, with a long tail of 2 to 4GB RAM devices, so a luxury app for India is tested on a mid-range Android first and a flagship iPhone second; the Emirates run an unusually high iPhone share, so the order reverses there.

### 16.2 Vernacular language switching

- The language selector is reachable on the first screen and in utility navigation, lists each language in its own script and name ("हिन्दी", "العربية", "English", "मराठी"), never as flags (a flag is a country; Hindi has no flag and Arabic has 22), and remembers the choice per device and per account. Switching changes the whole surface, including transactional email, WhatsApp templates and error messages, because a half-translated product reads as a product that does not care.
- String length and script metrics: plan a 30 percent length allowance for Hindi against English (a common localisation rule, to be checked against the real strings), Devanagari needs about 1.2 times the line height for its matras, Arabic is similar in width to English and needs taller lines; design every label, button and card for the longest language (03-typography.md).
- Mixed script is normal: product names stay in Latin inside Devanagari or Arabic sentences; numerals may be Western (India, UAE in practice) or Eastern Arabic (common in Saudi Arabia); dates may need the Hijri calendar beside the Gregorian in the Gulf (Ramadan timings, Eid offers).

### 16.3 Right-to-left layouts for Arabic

Mirroring is the rule: a right-to-left (RTL) interface is the left-to-right layout reflected, so that reading order, navigation order and time direction all run right to left. The rules, following Material Design's bidirectionality guidance, which Apple's right-to-left guidance matches in substance:

| Mirror | Do not mirror | Reason |
|---|---|---|
| Layout and reading order, navigation bar item order, back arrows and chevrons, breadcrumbs, steppers, progress bars, sliders, list bullets and their indent, checkbox and switch position relative to the label, text alignment (start-aligned), icons that convey direction (send, forward, reply) | Clocks, phone numbers and all numerals, media playback and progress (play, fast-forward, the scrub bar run left to right because they show the direction of the tape), charts with time axes, photographs and illustrations, logos and wordmarks, icons without direction (camera, search, settings), the question mark in Latin text | Reading direction mirrors; physical and temporal conventions do not |
| Undo and redo: choose once, document it | The slash in a date (12/11/2026 stays) | Material notes this as a judgement call because the icons imply both circular and horizontal direction |

- Implementation rules: dir="rtl" on the html element and CSS logical properties (margin-inline-start, padding-inline-end, inset-inline, text-align: start) instead of left and right, so that one stylesheet serves both; unicode-bidi: isolate (or the bdi element) around any user-generated or Latin-script string inside Arabic text so that punctuation and numbers do not jump; Arabic punctuation (the Arabic question mark and comma are mirrored glyphs) comes from the font, never from a flipped Latin glyph; no faux italic or faux bold on Arabic (03-typography.md); test with real Arabic content, since Lorem ipsum in Latin hides every bidi fault.
- Bilingual UI: the Emirates' official pattern is side by side (Arabic right, English left) on signage and documents; on screens the house default is one language at a time with a switch, because side-by-side halves the width for both and reads as a form. Give each language its own URL path (/ar/, /en/) with hreflang, and translate the IA (2.4) in the person's words, which means a separate card sort in Arabic.

### 16.4 Local payment and address realities

Section 6.3 holds the tables for India and the UAE. The rules that survive any method change: ask for the location field that drives delivery first (PIN code in India, area in the Emirates), order payment methods by local usage and the audience's age, state prices inclusive of tax in the local format, and keep the method list a component that can take a new logo (Aani, Jaywan, a new BNPL) without a redesign.

### 16.5 WhatsApp as a channel

WhatsApp is the default personal messaging channel in India and the Gulf, which makes the WhatsApp Business Platform (Meta's API, accessed direct or through solution providers such as Gupshup, Infobip, Wati, AiSensy and Interakt) the agency's most used conversational surface. The mechanics that shape design, as of October 2026:

- Pricing: per delivered template message since 1 July 2025, by template category and the recipient's country code; marketing templates cost the most and carry no volume discount; utility and authentication templates are cheaper; utility templates inside an open customer service window are free; messages inside a 72-hour window opened from a click-to-WhatsApp ad or a Facebook Page call-to-action are free. Meta moved India billing to rupees for eligible businesses and raised the India marketing rate on 1 January 2026 (check the current rate card on Meta's pricing page before costing a campaign).
- Template categories: marketing (offers, launches, event invitations; requires opt-in), utility (order and booking updates, reminders), authentication (OTP), and service (free-form replies inside the 24-hour window after the person's last message).
- Opt-in: Meta's policy requires a recorded opt-in before any business-initiated message; India's TRAI rules and the DPDP consent standard apply to the data behind it. Design the opt-in as a checkbox at checkout and booking with the exact message types named.
- Flows: WhatsApp Flows let a business embed structured screens (forms, pickers, lists) inside the chat; the right surface for a reservation, an RSVP or an appointment where the person is already in WhatsApp.
- Anatomy of a luxury concierge thread: a named human (first name, role), hours stated in the greeting, a first reply within minutes during hours and an automated acknowledgement outside them, rich cards for products and bookings, payment links (UPI in India, card links in the Gulf), and a weekly cap on business-initiated marketing messages per person of one, because the channel is personal and the brand is a guest in it.
- Pitfalls: broadcast marketing to a list without opt-in (blocked by Meta, and block rates raise the sender's quality rating and cut throughput); a bot with no human; templates in English to a Hindi or Arabic opt-in; sending at prayer times and after 21:00 local.

### 16.6 Calendar, culture and context

- The UAE weekend is Saturday and Sunday (since January 2022, with Friday a half day); Saudi Arabia's is Friday and Saturday. Ramadan shifts dining to iftar and suhoor, retail hours into the night, and marketing tone; Eid al-Fitr and Eid al-Adha move on the Hijri calendar each year. Indian retail peaks around Diwali, Dussehra, Akshaya Tritiya (jewellery), the wedding seasons (November to February, April to May) and regional new years; the IA of offers and the booking engine's defaults should follow these calendars. Forms: Indian names may have one word, two or four; titles and honorifics matter in both markets; gender fields need a "prefer not to say"; Emirati addresses need the villa and the area, Indian addresses the landmark (6.3).

## 17. Pattern selection table and IA audit checklist

### 17.1 Problem to pattern

| Problem | Pattern | Section |
|---|---|---|
| New users do not understand what the product does | Empty-state-led onboarding, value before sign-up | 5.1 |
| Sign-in friction loses returning customers | Passkeys with OTP or magic link fallback | 5.2 |
| Notification permission refused by most users | Permissions priming after first value | 5.3 |
| People cannot find products they know the name of | Search with grouped autocomplete, typo tolerance, synonyms | 2.6, 5.4 |
| People cannot find products they do not know the name of | Faceted browse with a controlled vocabulary; editorial merchandising | 2.7, 5.5 |
| Navigation too deep | Flatten to two levels plus facets; tree test | 2.3, 2.4 |
| Labels mean different things on different pages | Labelling system, controlled vocabulary, one owner | 2.4, 2.7 |
| High abandonment at checkout | Guest checkout, total shown early, local address and payment, fewer fields | 6.3 |
| Returns high on fashion | Size guide as sheet, fit notes, no default size, fit prediction where data exists | 6.1 |
| Choosing between rooms or suites is hard | Comparison table, 3 to 4 items | 6.6 |
| Trust is low on a new product | Verified reviews with the legal floor; real social proof only | 6.7, 13.6 |
| Direct bookings lose to OTAs | Member rate beside public rate, total price first, calendar pricing | 7.1 |
| Event check-in queues | QR or name check-in on several devices; App Clip for the day's one task | 7.3, 11.1 |
| People miss updates on orders and stays | Category-level notifications, Live Activities and Live Updates | 8.2 |
| Staff cannot act on records fast enough | Data table with bulk actions, inline editing, command palette | 8.6, 9.4, 9.6, 9.7 |
| People fear a mistake on destructive actions | Undo for the reversible, typed confirmation for the irreversible | 9.1, 9.2 |
| AI answers are not trusted | Citations, caveats, verification affordance, no fake confidence | 10.1, 10.3 |
| AI agent might do something costly | Plan first, approval gates, stop | 10.4 |
| App feels slow | 100ms rule, optimistic updates, skeletons, local-first for staff tools | 12.2, 15.1, 15.3 |
| Arabic version feels wrong | Mirroring rules, logical CSS, bidi isolation, Arabic card sort | 16.3 |
| Indian customers prefer a conversation to a form | WhatsApp concierge with opt-in and Flows | 16.5 |
| Marketing urgency is wanted by the client | Real deadlines and real counts only; the house position | 13.6 |

### 17.2 IA audit checklist

Run it on any existing site or app before redesign, and on any new IA before build. Each item is pass or fail with a note.

1. Is there one organisation scheme per navigation group, with no scheme mixing in any list?
2. Is the primary structure (hierarchy, database, sequence) named and consistent with the content's real shape?
3. Does any path to content exceed three levels? Where it does, is scent strong at every level?
4. Are there 5 to 9 top-level groups on desktop and 4 to 5 on mobile?
5. Has every navigation label been tested (closed card sort, 15 or more participants, or tree test with 70 percent direct success on top tasks)?
6. Is each label used in one sense across the whole product, with a written controlled vocabulary and an owner?
7. Does every page pass Krug's trunk test (site ID, page name, sections, local navigation, you-are-here, search)?
8. Are global, local, contextual and utility navigation each present where the structure needs them, and visually distinct?
9. Do breadcrumbs exist where depth is three or more, and are they location-based?
10. Does search show grouped autocomplete, handle typos and transliteration, keep the query editable, and offer routes on zero results?
11. Are facets derived from the controlled vocabulary, with counts, OR within and AND across?
12. Does the sort default to relevance or merchandised order, never price ascending on a luxury PLP?
13. Does every flow have a drawn happy path, listed edge and error paths, and a state diagram for any object with more than three states?
14. Do the Hindi and Arabic versions have their own card sort and labels, or at least a review by a native speaker who is a customer?
15. Is the RTL layout mirrored per 16.3, with numerals, clocks and media unmirrored?
16. Are the 404, 500, offline and maintenance states designed with routes?
17. Are the top 100 zero-result queries reviewed and fed into synonyms each month?
18. Are the physical wayfinding (hotel, event) names identical to the digital names?
19. Has every checkout, booking and consent flow been audited against the 13 Indian patterns and the 18 Brignull types, with the record kept?
20. Has the designer walked the primary flow on a throttled connection, in Hindi or Arabic, on a mid-range Android device, within the last month?

## Terms introduced

- Advance notice of proposed rulemaking (ANPRM): the first, question-only stage of a US federal rulemaking, with no draft rule text.
- Agent: a model that plans and executes multi-step actions with tools on the person's behalf.
- App Clip: a small part of an iOS app launched from a QR code, NFC tag or link without installing the app.
- Approval gate: a pause in an agent's execution that shows the exact action and requires the person's approval before it runs.
- Barge-in: the ability of a person to interrupt a voice system while it is speaking.
- Bidi isolation: wrapping a run of text so that its direction is resolved independently of the surrounding text (unicode-bidi: isolate, the bdi element).
- Breadcrumb, location-based: a trail showing the page's position in the hierarchy, as opposed to the path the person clicked.
- Bulk action: an action applied to a selection of several records at once.
- Card sort: a research method in which participants group items; open sorts let them name categories, closed sorts give the categories.
- Caveat: a short, specific disclosure placed next to high-stakes AI output.
- Code-switching: alternating between two languages inside one utterance (Hinglish, Arabic with English names).
- Command palette: a keyboard-opened search field (usually Cmd+K) that lists actions, navigation and records with fuzzy matching.
- Controlled vocabulary: an agreed list of terms with one preferred term per concept and mapped synonyms; a thesaurus adds broader, narrower and related relationships.
- Decision table: a table of conditions and the outcome for each combination, used where three or more conditions interact.
- Deceptive pattern: an interface designed to make people do things they did not intend, to the designer's benefit (Brignull; "dark pattern" in Indian law).
- Deep link: a URL that opens a specific screen in an app when installed and the web equivalent when not; deferred deep links carry the destination through an install.
- Detent: a resting height for an iOS sheet (medium, large, custom).
- DIGIPIN: India Post's 10-character geocode identifying a 4 by 4 metre cell, launched 2025.
- Direct manipulation: Shneiderman's 1983 term for interfaces with a continuous representation of the object, physical actions in place of commands, and rapid, reversible, visible operations.
- Drag threshold: the distance (about 8px) a pointer must move before a press becomes a drag.
- Drip pricing: revealing price elements gradually so that the total appears only at the end.
- Empty state: the state of a screen with no content yet, used to explain and offer the first action.
- Excise: work the interface makes the person do that serves the system instead of the goal (Cooper).
- Faceted classification: describing each item by several independent attributes (facets) instead of one tree (Ranganathan).
- Fidelity: the degree to which a design artefact resembles the finished product in look and behaviour.
- Findability: the degree to which an object is easy to discover or locate; one face of Morville's user experience honeycomb.
- Forgiving format: an input that accepts every reasonable way of writing a value and normalises it.
- Generative UI: a pattern in which a model returns structured data rendered as real interface components.
- Goal-directed design: Cooper's method of designing for the person's goals through personas and scenarios.
- Guest checkout: a checkout that needs no account, with the account offered after the order.
- Happy path, edge path, error path: the shortest route through a flow with every input valid; a valid but unusual route; a route caused by invalid input or system failure, with its recovery.
- Heuristic evaluation: an inspection method in which several evaluators independently judge an interface against a list of heuristics.
- Hit target: the touchable or clickable area of a control (44pt iOS, 48dp Android, 24 CSS px minimum under WCAG 2.5.8).
- Hover intent: a short delay before a hover state commits, so that passing over does not trigger it.
- Information architecture: the structural design of shared information environments: organisation, labelling, navigation and search.
- Information scent: how well a label predicts the content beneath it (Pirolli and Card).
- Inline editing: editing a value in place without a separate form.
- Inline validation: checking a field when the person leaves it and showing the result beside it.
- Interaction to Next Paint (INP): Google's Core Web Vital for responsiveness; good at 200ms or less at the 75th percentile.
- Intent flow (UPI): handing the payment off to the person's UPI app on mobile and returning to the merchant with the result.
- Labelling system: the set of words used for navigation, headings and links, chosen so that each term has one sense.
- Lightbox: a full-screen view of a single image with navigation, zoom and close.
- Lite pattern: a design choice that reduces payload or dependence on the network for low-bandwidth use.
- Live Activity, Live Update: iOS 16.1 and Android 16 surfaces that show the state of an ongoing, user-initiated, time-bound activity on the lock screen, Dynamic Island or status bar.
- Local-first: an architecture in which the client holds the data and syncs back, so that interactions do not wait for the server.
- Magic link: a one-time signed URL sent by email that signs the person in.
- Makani number: Dubai's 10-digit building identifier.
- Microinteraction: a contained behaviour with a trigger, rules, feedback, and loops and modes (Saffer).
- Mirroring: reflecting a layout for right-to-left reading, applied to order, direction and alignment but not to numerals, clocks, media or images.
- Modeless: a state of an interface in which the same input always does the same thing.
- Negative option: a subscription that continues and charges unless the person acts to stop it (ROSCA's subject).
- No-match, no-input: the two voice error states: speech not understood, and silence.
- Optimistic update: showing the result of an action before the server confirms it, and reverting on failure.
- Organisation scheme: the rule that decides which group an item belongs to; exact schemes (alphabetical, chronological, geographical) give every item one objective place, ambiguous schemes (topic, task, audience, metaphor) need a judgement.
- Passkey: a FIDO2 and WebAuthn credential bound to a device and unlocked by biometric or PIN, replacing a password.
- Pattern: a named, reusable solution to a recurring interaction problem, with its when, anatomy, variants and pitfalls.
- Permissions priming: an in-app screen that explains a permission's benefit before the system prompt.
- Persona: an archetypal user built from research with goals; in voice design, the character the system speaks as.
- PLP, PDP: product listing page (a grid of products in a category) and product detail page (one product).
- Polyhierarchy: an item placed under more than one parent in a hierarchy.
- Posture: Cooper's classification of a product by how it occupies attention: sovereign, transient, daemonic, auxiliary.
- Predictive back: Android's gesture that previews the destination while the back gesture is in progress.
- Progressive disclosure: showing the few things most people need first and the rest on request.
- Safe triangle: the region of a menu over which the pointer may travel to a submenu without the menu closing.
- Service blueprint: a flow diagram that adds backstage staff and system actions beneath the person's steps.
- Smart default: a pre-filled value chosen from context that is right for most people and easy to change.
- State diagram: a diagram of the states an object can be in and the transitions between them (Harel statecharts).
- Streaming: rendering a model's output as it is produced, token by token.
- Task flow, user flow, wireflow: a generic step sequence; the same sequence for a specific persona and entry state; a flow drawn with screens.
- Taxonomy: a hierarchical classification of a domain.
- Template (WhatsApp): a pre-approved business-initiated message in the marketing, utility or authentication category.
- Tokenisation (cards): replacing a card number with a token held by the network, mandatory in India since October 2022.
- Tree test: a text-only test of a proposed navigation tree that measures findability without visual design.
- Trunk test: Krug's page-level check for site ID, page name, sections, local navigation, you-are-here and search.
- Typed confirmation: a confirmation that requires typing the object's name before an irreversible action.
- Wayfinding: the sequence of decisions a person makes to reach a destination, each needing information at the decision point.
- Wizard: a multi-step flow with one question group per screen and a stepper.
- Wizard of Oz prototype: a prototype in which a human secretly plays the system.

## Sources and further reading

Books

- Alan Cooper, Robert Reimann, David Cronin, Christopher Noessel, "About Face: The Essentials of Interaction Design", fourth edition, 2014.
- Bill Buxton, "Sketching User Experiences: Getting the Design Right and the Right Design", 2007.
- Barry Boehm, "Software Engineering Economics", 1981.
- Dan Saffer, "Microinteractions: Designing with Details", 2013.
- Bill Moggridge, "Designing Interactions", 2007.
- Don Norman, "The Design of Everyday Things", revised edition, 2013.
- Louis Rosenfeld, Peter Morville, Jorge Arango, "Information Architecture: For the Web and Beyond", fourth edition, 2015.
- Jorge Arango, "Living in Information", 2018.
- Steve Krug, "Don't Make Me Think, Revisited", third edition, 2014.
- Kevin Lynch, "The Image of the City", 1960.
- Paul Arthur and Romedi Passini, "Wayfinding: People, Signs, and Architecture", 1992.
- Harry Brignull, "Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You", 2023.
- Peter Morville, "Ambient Findability: What We Find Changes Who We Become", 2005.
- Cathy Pearl, "Designing Voice User Interfaces", 2016.
- Apple Computer, "Human Interface Guidelines: The Apple Desktop Interface", 1987.
- Ben Shneiderman, "Direct Manipulation: A Step Beyond Programming Languages", IEEE Computer, 1983.

Specifications, standards and platform documentation

- W3C, Web Content Accessibility Guidelines (WCAG) 2.2, 5 October 2023, https://www.w3.org/TR/WCAG22/
- Google, Interaction to Next Paint, https://web.dev/articles/inp
- Google, Material Design bidirectionality guidance, https://m2.material.io/design/usability/bidirectionality.html
- Google, Android Live Updates, https://developer.android.com/develop/ui/views/notifications/live-update
- Apple, Human Interface Guidelines, https://developer.apple.com/design/human-interface-guidelines/
- FIDO Alliance, "The State of Passkeys 2026: Global Consumer and Workforce Report", 7 May 2026, https://fidoalliance.org/the-state-of-passkeys-2026-global-consumer-and-workforce-report/
- Reserve Bank of India, Authentication Mechanisms for Digital Payment Transactions Directions, 2025, 25 September 2025, https://www.rbi.org.in/
- NPCI, UPI product statistics, https://www.npci.org.in/what-we-do/upi/product-statistics
- Department of Posts, DIGIPIN, https://www.indiapost.gov.in/VAS/Pages/digipin.aspx and https://github.com/INDIAPOST-gov/digipin
- Central Consumer Protection Authority, Guidelines for Prevention and Regulation of Dark Patterns, 2023, and the advisory of 5 June 2025, https://consumeraffairs.gov.in/
- Ministry of Electronics and Information Technology, Digital Personal Data Protection Rules, 2025 (13 November 2025), https://www.meity.gov.in/
- Department of Consumer Affairs, Consumer Protection (E-Commerce) (Amendment) Rules, 2026, G.S.R. 789(E), 9 September 2026, https://consumeraffairs.gov.in/
- European Union, Regulation (EU) 2022/2065 (Digital Services Act), Article 25, https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- European Union, Directive 2005/29/EC (Unfair Commercial Practices Directive) and Directive (EU) 2019/2161, https://eur-lex.europa.eu/
- European Data Protection Board, Guidelines 03/2022 on deceptive design patterns in social media platform interfaces, version 2.0, 2023, https://www.edpb.europa.eu/
- Federal Trade Commission, "Bringing Dark Patterns to Light", staff report, September 2022, https://www.ftc.gov/
- Federal Trade Commission, Amazon Prime settlement press release, 25 September 2025, https://www.ftc.gov/
- Meta, WhatsApp Business Platform pricing, https://developers.facebook.com/docs/whatsapp/pricing
- Jesse James Garrett, "A visual vocabulary for describing information architecture and interaction design", version 1.1b, 2002, http://www.jjg.net/ia/visvocab/

Articles, talks and courses

- Bill Verplank, "Interaction Design Sketchbook", 2009, http://www.billverplank.com/IxDSketchBook.pdf
- Kevin Larson and Mary Czerwinski, "Web page design: implications of memory, structure and scent for information retrieval", CHI 1998.
- Tom Tullis and Larry Wood, "How many users are enough for a card-sorting study?", UPA 2004.
- Peter Pirolli and Stuart Card, "Information Foraging", Psychological Review, 1999.
- Jakob Nielsen, "10 Usability Heuristics for User Interface Design", 1994, updated 2020, https://www.nngroup.com/articles/ten-usability-heuristics/
- Jakob Nielsen, "Response Times: The 3 Important Limits", 1993, https://www.nngroup.com/articles/response-times-3-important-limits/
- Jakob Nielsen, "Progressive Disclosure", 2006, https://www.nngroup.com/articles/progressive-disclosure/
- Luke Wroblewski, "Inline Validation in Web Forms", A List Apart, 2009, https://alistapart.com/article/inline-validation-in-web-forms/
- Aza Raskin, "Never Use a Warning When You Mean Undo", A List Apart, 2007, https://alistapart.com/article/neveruseawarning/
- Tanya Stivers et al., "Universals and cultural variation in turn-taking in conversation", PNAS 106(26), 2009.
- Arunesh Mathur et al., "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites", CSCW 2019, https://arxiv.org/abs/1907.07032
- Harry Brignull, deceptive.design, types of deceptive pattern, https://www.deceptive.design/types
- Emily Campbell, Shape of AI, https://www.shapeof.ai/
- Rauno Freiberg, "Invisible Details of Interaction Design", 2023, https://rauno.me/craft/interaction-design
- Rauno Freiberg, Devouring Details, https://devouringdetails.com/
- Emil Kowalski, Animations on the Web, https://animations.dev/
- Apple, "Designing Fluid Interfaces", WWDC 2018, https://developer.apple.com/videos/play/wwdc2018/803/
- Ben Kamens, "Breaking down Amazon's mega dropdown", 2013, https://bjk5.com/post/44698559168/breaking-down-amazons-mega-dropdown
- Baymard Institute, cart abandonment rate statistics, https://baymard.com/lists/cart-abandonment-rate
- GOV.UK Design System, "Question pages" (one thing per page), https://design-system.service.gov.uk/patterns/question-pages/
