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
- Excise: work the interface makes the person do that serves the system rather than the goal (re-entering an address, confirming the obvious, choosing a file format). Cooper's rule: count it and cut it.
- Perpetual intermediates: most users stay in the middle of the skill curve for ever. Design the default for them; put beginner help and expert shortcuts at the edges.

### 1.4 Buxton: sketching

Bill Buxton's "Sketching User Experiences" (2007) separates sketches from prototypes. A sketch is quick, timely, inexpensive, disposable, plentiful, with a clear vocabulary and minimal detail, made to suggest and explore. A prototype is made to test and refine, and it describes rather than suggests. His argument with numbers: the cost of a change rises roughly ten times per stage from sketch to spec to build, so the cheapest exploration must happen earliest, and in quantity. Buxton's rule for a design review: five sketches on the wall, never one. One sketch is a proposal; five are a conversation.

### 1.5 Saffer: microinteractions

Dan Saffer's "Microinteractions" (2013, O'Reilly) gives every small behaviour four parts. The reason to learn the parts: a critique that says "the toggle feels wrong" is useless; "the feedback arrives before the rule resolves" is a fix.

| Part | What it is | Example: a wishlist heart on a luxury PDP |
|---|---|---|
| Trigger | What starts it: manual (tap, keystroke, voice) or system (time, location, data change) | Tap on the heart |
| Rules | What happens, in what order, what is allowed | Toggle saved state; if signed out, save locally and prompt later; never block the gallery |
| Feedback | How the person learns the rules ran: visual, audio, haptic | Fill animation 180 to 240ms, a light haptic, a count increment |
| Loops and modes | What happens over time and in special states | Loop: after the third save, offer "share your edit"; mode: in a size-out state the heart becomes "notify me" |

Saffer's other durable idea: "bring the data forward". The microinteraction should show the value, not just the control (a battery icon with percentage, a toggle with the time it was last changed).

### 1.6 Norman's stages and gulfs, Nielsen's heuristics

Don Norman's seven stages of action (goal, plan, specify, perform, perceive, interpret, compare) and the two gulfs (execution: can I work out what to do; evaluation: can I tell what happened) are covered in file 02 of this corpus and are cross-referenced here as the diagnostic for any flow that fails. Jakob Nielsen's ten heuristics (1994) are applied in section 12. Design-taste's critique format (verdict, what works, what does not, the fix) is the house format; this file supplies the vocabulary the fix is written in.

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
- Avoid clever labels for anything load-bearing. Wit belongs in copy (design-taste, section 1, point 8), not in the tab bar.
- Test with a closed card sort (people place items into your categories) for validation and an open sort (they make their own categories) for discovery. Tullis and Wood (2004) found 20 to 30 participants give results that correlate at about 0.93 with a 168-person sample; 15 is the practical floor.
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

- Query: a single field, visible at all widths, with autocomplete within 100ms of each keystroke (section 15 on thresholds) showing products, categories and editorial separately. Typo tolerance (one edit for words of 4 to 7 characters, two for 8 or more is the Algolia default) and synonym sets ("kurta" for "tunic", "abaya" variants) are IA work, not engineering extras.
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

Applied to screens:

- Paths: the main flows; make them visibly continuous (a persistent stepper, a sticky header).
- Edges: section boundaries; use background shifts and spacing changes, with one rule for the whole site.
- Districts: a visual family per area (editorial pages look different from the store, and the person feels the move).
- Nodes: hubs where decisions happen (home, category, cart). Give them the most care.
- Landmarks: the logo, the cart, the search field, in fixed positions on every page.

Applied to hotels and events (Mask360 does both):

- Information at decision points: a sign at every corridor junction, none in the middle of a corridor. At an event, a sign at the registration exit, the stair, the lift lobby.
- Progressive disclosure of destinations: the lobby sign lists zones; the zone sign lists rooms. Listing every room in the lobby is the physical version of a mega-menu.
- "You are here" maps must be forward-up (aligned to the direction the viewer faces; Levine, 1982); north-up maps in a corridor double error rates in Levine's studies.
- Landmarks beat signs: a sculpture, a scent, a colour per floor. Aman properties navigate almost entirely by landmark and sightline, which is why they feel quiet.
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
- Error paths: invalid input, failed calls, timeouts, permission denied, offline. Each needs a message (anatomy in file 10 of this corpus) and a recovery route back to the happy path.
- Rule of thumb from practice: for a flow with n screens, expect 2n to 3n edge and error states. A seven-screen checkout has 15 to 20 of them. If the design file shows seven frames, the design is one-third done.

### 3.4 State diagrams and decision tables

- A state diagram (UML statechart; David Harel, 1987) lists the states an object can be in and the transitions between them. Use one for any component with more than three states: a booking (draft, held, confirmed, modified, cancelled, no-show, checked in, checked out), a message (composing, sending, sent, delivered, read, failed), an order. The reason: the diagram makes impossible transitions visible (can a no-show be modified?) before engineering decides for you.
- A decision table lists conditions as columns and outcomes as rows: for example, "member status × rate type × cancellation window" giving the refund rule. Use it whenever three or more conditions interact; prose cannot hold it and a flowchart becomes a thicket.

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
| Figma | Click-through and simple motion prototypes; variables and conditional logic (since 2023) allow state; the shared source of truth | Figma Make (announced 7 May 2025) builds working prototypes from prompts and edits; Figma Sites was still labelled beta in Figma's February 2026 annual report |
| ProtoPie | High-fidelity interaction prototypes with variables, formulas, device sensors, voice, multi-device and hardware (ProtoPie Connect for cars and kiosks); an MCP integration and AI-generated interactions as of October 2026 | The right tool for a hotel in-room panel, a car HMI, or a kiosk at an event |
| Origami Studio 3 | Meta's patch-based tool; the deepest control of physics and logic; previews on iOS through the Origami Live viewer | Steep; use when the question is feel at the level of a spring curve |
| Framer | A website builder with motion built in; the right tool to prototype and ship a marketing site in one place | Its original code-prototyping product is gone; do not brief it as a Principle replacement |
| Principle | Legacy timeline-based Mac tool | Still works; not where new skills should go |
| Code (React with Motion, SwiftUI previews, Expo) | Real latency, real data, real gestures; the only honest test of "feel" | Vercel v0, Lovable and Claude artifacts make a throwaway coded prototype a half-day job |
| Wizard of Oz | A human plays the system (a concierge answering "the AI") | The right first prototype for any AI or voice feature; cost is one person for a day |

### 4.3 Prototype hygiene

- Name the question on the first frame of every prototype. If it cannot be named, the prototype is decoration.
- Use real content. Lorem ipsum hides the two problems that matter most: labels and lengths (Hindi runs about 15 to 30 percent longer than English in most UI strings; Arabic is similar in width and taller in line).
- Fake only what the question does not need. A booking prototype can fake payment; it cannot fake the calendar.
- Test with five people per round (Nielsen, 2000: five users find about 85 percent of usability problems in a round, assuming a problem probability of 31 percent), then iterate and test again, because the second round finds what the first fixes revealed.

