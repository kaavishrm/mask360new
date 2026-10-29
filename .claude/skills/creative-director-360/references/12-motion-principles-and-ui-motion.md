# Motion principles and UI motion

Why motion reads as natural, when it is feedback and when it is decoration, and the exact numbers (durations, curves, spring values) that make interface motion feel expensive. Written for Claude acting as Mask360's creative director. Platform and library facts are stated as of October 2026.

## Contents

1. [Why motion reads as natural](#1-why-motion-reads-as-natural)
2. [The twelve principles of animation and their interface translation](#2-the-twelve-principles-of-animation-and-their-interface-translation)
3. [Easing in depth](#3-easing-in-depth)
4. [Duration, distance and stagger](#4-duration-distance-and-stagger)
5. [Choreography](#5-choreography)
6. [Motion as feedback versus decoration](#6-motion-as-feedback-versus-decoration)
7. [Scroll-driven motion](#7-scroll-driven-motion)
8. [Page and view transitions](#8-page-and-view-transitions)
9. [Gesture-driven motion](#9-gesture-driven-motion)
10. [Microinteractions](#10-microinteractions)
11. [Reduced motion and accessibility](#11-reduced-motion-and-accessibility)
12. [Performance](#12-performance)
13. [Implementation reference](#13-implementation-reference)
14. [Motion in brand identity](#14-motion-in-brand-identity)
15. [Specifying motion for handoff](#15-specifying-motion-for-handoff)
16. [The cheap motion tells and their fixes](#16-the-cheap-motion-tells-and-their-fixes)
17. [Reference table: durations, easings and springs by use case](#17-reference-table-durations-easings-and-springs-by-use-case)

- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

The taste rule this file sits beneath is in design-taste, section 5 (Motion: "One considered move that reveals the idea. Physical, slow, ease-out. Everything else still.") and section 3 (the motion tells). This file is the physics and the numbers that make that rule executable.

## 1. Why motion reads as natural

### 1.1 The brain runs a physics model

The visual system predicts where objects will be next. Two still frames shown 40 to 100ms apart read as one object moving (apparent motion, strictly beta movement, which Steinman, Pizlo and Pizlo separated in 2000 from the phi phenomenon Wertheimer described in 1912; see 02-perception-and-psychology.md, section 15.1); this is the basis of every screen animation. The prediction assumes Newtonian objects: things have mass, so they take time to start and to stop; things that stop instantly read as broken or as having hit a wall; things that move at constant speed read as machines (conveyor belts, clocks), because nothing with a body moves that way. Every rule in this file descends from that one fact. Easing exists because mass exists. Springs exist because a mass on a spring is the simplest physical system that settles.

### 1.2 The three perception thresholds

Jakob Nielsen's limits (Usability Engineering, 1993, drawn from Miller 1968 and Card, Robertson and Mackinlay 1991):

| Threshold | What the user perceives | Motion consequence |
|---|---|---|
| 100ms | Instantaneous. Cause and effect feel joined. | Feedback to a touch must begin within 100ms. The press state, the tap highlight, the first frame of a transition. |
| 1s | The flow of thought holds, though the delay is noticed. | A transition that runs beyond 1s is a wait, however pretty. Page transitions must complete well inside this. |
| 10s | Attention is lost. | Anything longer needs a progress indicator and a way out. |

A fourth number, the Doherty threshold (Doherty and Thadani, IBM, 1982; 02-perception-and-psychology.md, section 8.6): productivity rises sharply when system response drops below 400ms. For interface motion this means the user must be able to act again within 400ms of acting, which rules out 600ms fades on frequent interactions.

### 1.3 Frame budgets

A display at 60Hz paints every 16.7ms; at 120Hz (ProMotion iPhone and iPad, most flagship Android phones, many laptops) every 8.3ms. Everything the browser or OS does for one frame (script, style, layout, paint, composite) has to fit inside that window or the frame is dropped and the eye reads a stutter. In practice leave the engine room: aim for under 10ms of your own work at 60Hz and under 5ms at 120Hz. Section 12 shows what costs what. Hand-rolled per-frame motion must also be written against elapsed time, or it runs twice as fast on a 120Hz screen (section 12.8).

### 1.4 Two jobs, one budget

Motion is either information (it tells the user what changed, where things went, what caused what, what the system is doing) or decoration (it exists to be looked at). Both are legitimate. The discipline is accounting: every interface gets a delight budget (section 6.2) of one considered move per screen, and the information motion is held to the smallest, fastest version that still reads. Section 6 is the accounting method.

## 2. The twelve principles of animation and their interface translation

Frank Thomas and Ollie Johnston set down the twelve principles in The Illusion of Life (1981) from Disney practice of the 1930s. Each principle is a shortcut for a piece of physics or stagecraft; the interface translation follows from the physics, and the luxury verdict follows from the house rule that motion is a material (design-taste, section 2: slowness, material honesty).

| Principle | Definition (Thomas and Johnston) | The physics or stagecraft behind it | Interface translation | Luxury verdict |
|---|---|---|---|---|
| Squash and stretch | A form deforms under force while keeping its volume. | Elastic deformation: a mass accelerating or hitting a surface deforms, and volume is conserved so a squash in one axis is a stretch in the other. | Press scale on buttons, overscroll rubber banding, pull-to-refresh stretch, the iOS icon jiggle. | Refuse as expression. Keep the two system cases: press scale 0.97 to 0.98 (uniform, no deformation) and native overscroll. |
| Anticipation | A small move opposite to the main action before it begins. | Energy storage: a crouch before a jump, a backswing. It also tells the audience where to look a beat early. | A pull-back before a drawer opens; a brief dim before a modal. In UI it adds latency to the thing the user asked for. | Refuse on interface. Allowed in brand film and logo reveals, where the viewer is an audience. |
| Staging | Present each idea so it is unmistakably clear; direct the eye. | Theatre: one focal point, the rest held still or dimmed. | One thing moves at a time; dim or blur the rest; motion hierarchy (section 5.1). | Use everywhere. This is the one considered move. |
| Straight ahead and pose to pose | Straight ahead: draw frame by frame. Pose to pose: draw key poses, then in-betweens. | Simulation versus interpolation. | Springs and physics are straight ahead (each frame computed from the last); tweens (interpolations from a start value to an end value over a fixed duration) and keyframes are pose to pose. | Pose to pose for choreographed reveals; straight ahead (springs) for anything the finger drives. |
| Follow through and overlapping action | Parts keep moving after the body stops; parts move at different rates. | Inertia and loose coupling: lighter, looser parts lag and settle later. | Stagger of list items; a title settling a frame after its container; sheet content lagging the sheet by 20 to 60ms. | Use in one dose: one stagger per screen, 20 to 60ms per item, total under 300ms (section 4.5). |
| Slow in and slow out | More drawings near the poses, fewer in the middle. | Acceleration and deceleration: a mass cannot go from rest to speed, or speed to rest, in zero time. | Easing (section 3). | The only principle applied to every move. Ease-out on entrances, ease-in on exits, ease-in-out on moves. |
| Arcs | Natural movement follows curved paths. | Rotation about joints; projectiles under gravity. | Curved paths when an element changes both x and y (Material's arc motion); circular reveals. | Rarely. Luxury interfaces move on one axis at a time. An arc appears only when an element travels diagonally, and then a shallow one. |
| Secondary action | A supporting action that reinforces the main one. | Coupled systems: the main action drives a lesser one. | The chevron rotating as a section opens; the count updating as an item is added. | One secondary action at most, and only if it carries information. |
| Timing | The number of frames determines weight and mood. | Heavier bodies take longer to start and to stop; the same move at different speeds means different things. | Durations (section 4). Larger elements move longer; smaller ones, shorter. | Luxury runs about 1.3x slower than product defaults, with longer ease-out tails. The move is slower; the response is still instant. |
| Exaggeration | Push past realism so the idea reads. | Caricature: the audience reads an amplified version faster. | Overshoot, bounce, scale past 1. | Refuse. Bounce as decoration is a cheap tell in design-taste, section 3 ("looping bounces"). |
| Solid drawing | Forms stay consistent in three-dimensional space, with weight and volume. | Perspective and volume. | Consistent perspective origin in 3D transforms; one light source; no cards that flip and lose their thickness. | Flat. Depth only when depth is the concept (design-taste, section 2, material honesty). |
| Appeal | Charisma; clarity of design that the eye wants to follow. | Readability and point of view. | The motion has a character consistent with the brand. | Appeal through restraint: a slow, long ease-out tail is the most expensive signature available. |

### 2.1 What luxury motion keeps

Four principles do almost all the work: staging, slow in and slow out, timing, and a single dose of follow through. Everything else in the list belongs to character animation, where the object has a personality and the viewer watches. In an interface the user is acting, and personality in the furniture slows them down.

### 2.2 Why bounce reads cheap

A bounce is exaggeration plus squash and stretch plus follow through, applied to an object that in the real world has no reason to bounce (a menu, a card, a line of text). It was the default of iOS 7 era third-party apps and of 2015 to 2019 web libraries, so it also dates the work. A spring with bounce 0 (critically damped, section 3.7) gives all the physical continuity with none of the toy quality. The exception is gesture release: a sheet thrown with momentum that does not overshoot at all can feel broken (Apple's own guidance, WWDC18, section 6.4). There, bounce of 0.1 to 0.2 is physics, and it is earned.

### 2.3 The interface translation: Willenskomer's twelve

Issara Willenskomer's UX in Motion Manifesto (Creating Usability with Motion, 2017) restated the Disney list as twelve interface principles. It is the vocabulary most motion designers arrive with, so the house maps each one to its nearest Disney principle (the mapping is the house's reading) and gives a verdict.

| UX in Motion principle | What it does in an interface | Nearest Disney principle | House verdict |
|---|---|---|---|
| Easing | Temporal behaviour matches expectation | Slow in and slow out | Always (section 3) |
| Offset and delay | Elements arrive in sequence to show their relationship | Overlapping action | One stagger per screen (section 4.5) |
| Parenting | Child properties are tied to a parent's (a thumbnail's scale drives its caption) | Follow through | Yes, for content carried by a container (section 5.1) |
| Transformation | One object becomes another | Staging | The container transform, once per flow (section 5.2) |
| Value change | A number or state changes in place | Timing | One stepped counter, on the figure that is the idea (sections 3.6 and 10.4) |
| Masking | A reveal by clip or crop | Staging | Yes, for images and single-line reveals |
| Overlay | Layers slide over content | Staging | Sheets and dialogs (section 5.5) |
| Cloning | New elements spawn from a source | Secondary action | Yes, as causality (section 6.1) |
| Obscuration | Blur or dim stages the foreground | Staging | Dim; animated blur costs paint (section 12.1) |
| Parallax | Layers move at different rates | Solid drawing | Within the limits of section 7.6 |
| Dimensionality | Objects gain depth: flips, folds, cubes | Solid drawing | Refuse unless depth is the concept |
| Dolly and zoom | The view moves into or out of a space | Staging | Off under reduced motion (section 11.3) |

## 3. Easing in depth

Easing is the function that maps elapsed time (0 to 1) to progress (0 to 1). It is the whole difference between motion that reads as a body and motion that reads as a machine.

### 3.1 Linear, and why it reads mechanical

Linear easing is constant velocity: progress equals time. Nothing with mass moves this way from rest, so the eye reads it as a mechanism (a conveyor, a scanner, a clock hand) or as an error. Its legitimate uses are the cases where a mechanism is the truth: a progress bar tracking real bytes, a marquee, a continuous rotation (a spinner, a record), colour or opacity crossfades under 150ms where the curve is imperceptible, and scroll-scrubbed animation (progress locked to scroll position, section 7.4) where the finger is the easing.

### 3.2 Ease-in, ease-out, ease-in-out, and when each is right

| Curve | Shape | Physics | Use | Reason |
|---|---|---|---|---|
| Ease-out | Fast start, slow finish | A body already moving, coming to rest | Entrances, appearances, anything the user just triggered | Response is instant (most of the movement happens in the first third), and the long settle reads as weight. |
| Ease-in | Slow start, fast finish | A body accelerating away from rest, then leaving | Exits, dismissals, things leaving the screen | The element clears the stage quickly at the end and the user is already looking at what comes next. On an entrance it reads as hesitation, which is why Emil Kowalski's guidance warns against it for UI (section 6.3). |
| Ease-in-out | Slow start, fast middle, slow finish | A body starting from rest and arriving at rest, both on screen | Moves from one on-screen position to another; size changes; shared element transitions | Both endpoints are visible, so both need the physical settle. |

The rule in three words: enter with ease-out, exit with ease-in, move with ease-in-out. The CSS keyword `ease` (section 3.4) is an asymmetric ease-in-out with a quick start and is a defensible default for crossfades; `ease-in-out` symmetrical is the default for moves.

### 3.3 Cubic-bezier anatomy

`cubic-bezier(x1, y1, x2, y2)` describes a curve from (0, 0) to (1, 1) with two control points. x is time, y is progress. Reading it:

- x1 and y1 shape the start. y1 larger than x1 means a fast start (ease-out character). y1 of 0 with x1 above 0 means a slow start (ease-in character).
- x2 and y2 shape the end. y2 of 1 with x2 well below 1 means a long, slow settle. x2 of 1 and y2 below 1 means a fast, abrupt end.
- x values must stay within 0 to 1 (time cannot reverse). y values may go outside 0 to 1, which produces overshoot (past 1) or anticipation (below 0). That is how `back` curves work.
- The steeper the segment, the faster the motion at that moment. A curve like (0.16, 1, 0.3, 1) is nearly vertical at the start (very fast) and nearly flat for the last 60% of time (a long, slow arrival).

### 3.4 A library of named curves with values

All values verified against the CSS Easing Functions specification, the easings.net source, the Material 3 token source (@material/web 2.5.0, token set v0_192), the Carbon motion page and the Fluent UI tokens package, October 2026.

| Family | Name | cubic-bezier | Character and use |
|---|---|---|---|
| CSS keywords | `linear` | (0, 0, 1, 1) | Mechanical. Progress, marquee, scrub. |
| CSS keywords | `ease` | (0.25, 0.1, 0.25, 1) | Asymmetric ease-in-out, quick start. Also Apple's `kCAMediaTimingFunctionDefault`. Crossfades. |
| CSS keywords | `ease-in` | (0.42, 0, 1, 1) | Soft accelerate. Exits. |
| CSS keywords | `ease-out` | (0, 0, 0.58, 1) | Soft decelerate. Short entrances; too short a tail for luxury reveals. |
| CSS keywords | `ease-in-out` | (0.42, 0, 0.58, 1) | Symmetric. Also Apple's `kCAMediaTimingFunctionEaseInEaseOut`. Moves. |
| Material 3 | standard | (0.2, 0, 0, 1) | The M3 default for on-screen moves. Asymmetric: fast start, long settle. |
| Material 3 | standard-accelerate | (0.3, 0, 1, 1) | Exits. |
| Material 3 | standard-decelerate | (0, 0, 0, 1) | Entrances. |
| Material 3 | `emphasized` | Two-segment path `M 0,0 C 0.05,0 0.133333,0.06 0.166666,0.4 C 0.208333,0.82 0.25,1 1,1` (Android's `fast_out_extra_slow_in` `PathInterpolator`); web token fallback (0.2, 0, 0, 1) | Large, important transitions. A `cubic-bezier()` cannot hold two segments, so the web uses a sampled `linear()` approximation (section 13.1) or the fallback over a longer duration. On Android, Material 3 Expressive replaces it with the spatial springs (section 3.9). |
| Material 3 | `emphasized-accelerate` | (0.3, 0, 0.8, 0.15) | Emphasised exits. |
| Material 3 | `emphasized-decelerate` | (0.05, 0.7, 0.1, 1) | Emphasised entrances: very fast start, very long tail. |
| Material 2 (legacy) | standard | (0.4, 0, 0.2, 1) | The 2014 to 2021 Android curve, still everywhere. |
| Material 2 (legacy) | accelerate / decelerate | (0.4, 0, 1, 1) / (0, 0, 0.2, 1) | Exits / entrances. |
| IBM Carbon | productive standard | (0.2, 0, 0.38, 0.9) | Task UI: dropdowns, tables, toggles. |
| IBM Carbon | productive entrance / exit | (0, 0, 0.38, 0.9) / (0.2, 0, 1, 0.9) | Note the y2 of 0.9: the curve arrives slightly early, which reads crisp. |
| IBM Carbon | expressive standard | (0.4, 0.14, 0.3, 1) | Page-level and primary-action moments. |
| IBM Carbon | expressive entrance / exit | (0, 0, 0.3, 1) / (0.4, 0.14, 1, 1) | The entrance is close to the house standard entrance; the house keeps its own quint curve (section 3.5). |
| Microsoft Fluent 2 | curveDecelerateMid | (0, 0, 0, 1) | Entrances. Identical to M3 standard-decelerate and to Windows "fast out, slow in". |
| Microsoft Fluent 2 | curveDecelerateMax / Min | (0.1, 0.9, 0.2, 1) / (0.33, 0, 0.1, 1) | Stronger / gentler entrances. |
| Microsoft Fluent 2 | curveAccelerateMid | (1, 0, 1, 1) | Exits. |
| Microsoft Fluent 2 | curveEasyEase / Max | (0.33, 0, 0.67, 1) / (0.8, 0, 0.2, 1) | Moves. |
| Penner | easeOutCubic / Quart / Quint | (0.33, 1, 0.68, 1) / (0.25, 1, 0.5, 1) / (0.22, 1, 0.36, 1) | Small, medium and long-tail entrances. |
| Penner | easeOutExpo | (0.16, 1, 0.3, 1) | The luxury reveal curve: near-instant start, 60% of the time spent settling. |
| Penner | easeOutCirc | (0, 0.55, 0.45, 1) | Rounder, slower start than expo. Image reveals. |
| Penner | easeOutBack | (0.34, 1.56, 0.64, 1) | Overshoot. Refuse on interface. |
| Penner | easeInCubic / Quart / Quint | (0.32, 0, 0.67, 0) / (0.5, 0, 0.75, 0) / (0.64, 0, 0.78, 0) | Exits, in rising strength. |
| Penner | easeInExpo | (0.7, 0, 0.84, 0) | Very fast exits under 200ms. |
| Penner | easeInOutCubic / Quart / Quint | (0.65, 0, 0.35, 1) / (0.76, 0, 0.24, 1) / (0.83, 0, 0.17, 1) | Moves, with a stronger pause at each end as the power rises. |
| Penner | easeInOutExpo | (0.87, 0, 0.13, 1) | Hard moves; wipes. |
| Penner | easeInBack / easeInOutBack | (0.36, 0, 0.66, -0.56) / (0.68, -0.6, 0.32, 1.6) | Anticipation. Brand film only. |
| Penner | easeInSine / easeOutSine / easeInOutSine | (0.12, 0, 0.39, 0) / (0.61, 1, 0.88, 1) / (0.37, 0, 0.63, 1) | The gentlest family; near-linear. Crossfades. |

Robert Penner published the easing equations in 2002 (Programming Macromedia Flash MX); the cubic-bezier values above are the standard approximations from easings.net, since the originals are power and trigonometric functions, and a cubic-bezier can only approximate them.

### 3.5 The house curves

Luxury motion is defined by the tail (the slow final stretch of an ease-out curve). The curve starts almost at full speed (so the response is instant, inside 100ms) and then spends most of its duration arriving. The house set, with the reason for each:

| Role | Curve | Duration pairing | Reason |
|---|---|---|---|
| Reveal (hero, image, headline) | `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) | 600 to 900ms | At 800ms the element is 90% in place by about 260ms and spends the rest settling. The eye registers arrival early and weight late. |
| Standard entrance (panel, card, menu) | `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) | 300 to 450ms | Shorter tail than expo, same instant start. |
| Micro entrance (tooltip, toggle, press release) | `cubic-bezier(0.33, 1, 0.68, 1)` (easeOutCubic) | 120 to 200ms | A long tail at this duration is invisible; cubic is enough. |
| Exit | `cubic-bezier(0.4, 0, 1, 1)` (M2 accelerate) | 0.7 x the matching entrance | Clears quickly; the user is already elsewhere. |
| Move, resize, shared element | `cubic-bezier(0.2, 0, 0, 1)` (M3 standard) | 300 to 500ms | Asymmetric: fast departure, slow arrival. Reads as a hand placing an object. |
| Crossfade | `ease` | 150 to 300ms | Imperceptible curve at this length. |

### 3.6 Step easing

`steps(n, jump-term)` divides the duration into n equal holds. `jump-end` (default) holds the start value then jumps; `jump-start` jumps immediately; `jump-none` places both endpoints as holds; `jump-both` adds a jump at each end. Uses: sprite-sheet animation (one step per frame), typewriter copy (`steps(n)` over a `width` or clip), numeric counters, split-flap boards, and any place where a mechanism is the concept. Twelve steps per second mimics hand-drawn animation on twos; six per second reads as flipbook. In luxury work a stepped counter (a price, a year, a square footage) is one of the few mechanical motions that reads as craft, because the mechanism is a real object (the departure board, the odometer). It needs tabular figures and a reserved final width before it moves (section 10.4).

### 3.7 Spring physics

A spring animation does not have a duration. It has a target and a state (position, velocity), and each frame it computes the next state from the physics of a damped harmonic oscillator:

m x'' + c x' + k x = 0

- m, mass: how much inertia the object has. Higher mass starts and stops more slowly and carries more momentum.
- k, stiffness: how hard the spring pulls towards the target. Higher stiffness means faster.
- c, damping: how much the motion is resisted. Higher damping means less oscillation.
- Initial velocity: the velocity at the moment the animation starts. This is what makes a spring continuous with a gesture or with an interrupted animation.

Two derived numbers describe the feel:

- Natural frequency ω0 = sqrt(k / m): how fast the system wants to oscillate.
- Damping ratio ζ = c / (2 sqrt(k m)): the shape of the settle. ζ = 1 is critically damped: the fastest possible arrival with no overshoot. ζ < 1 is underdamped: it overshoots and oscillates, less so as ζ approaches 1. ζ > 1 is overdamped: it creeps to the target and reads sluggish.

Luxury interface springs live at ζ between 0.9 and 1.0. Bounce appears only on gesture release (section 2.2).

### 3.8 Spring parameters by platform

Each platform wraps the same physics in a different vocabulary. The table maps them.

| Platform | Parameters | Defaults and presets | Notes |
|---|---|---|---|
| Apple, WWDC18 vocabulary (UIKit `UISpringTimingParameters`, SwiftUI `.spring(response:dampingFraction:)`) | response (seconds; the period of the undamped oscillation, 2π / ω0) and damping fraction (Apple's name for the damping ratio ζ) | SwiftUI `.spring(response: 0.5, dampingFraction: 0.825)` are the documented defaults of that initialiser (Apple developer documentation, October 2026) | Apple's engineers avoid the word duration because a spring is "always ready to move elsewhere". WWDC18 guidance: start at 100% damping; use 80% only when the gesture has momentum. |
| Apple, iOS 17 vocabulary (`Spring(duration:bounce:)`, `.spring(duration:bounce:)`) | duration (perceptual, seconds; equal to response, since Apple's own conversion is mass 1 and stiffness (2π / duration)^2) and bounce (-1 to 1; 0 is critically damped, 1 undamped, negative overdamped) | `.smooth` (bounce 0), `.snappy` (bounce 0.15), `.bouncy` (bounce 0.3), each on a 0.5s default perceptual duration; `extraBounce:` adds to the preset. WWDC23: bounce 0 is the general-purpose spring; 0.15 small bounce; 0.3 noticeable; above about 0.4 "may feel too exaggerated for a UI element". | Perceptual duration is the time the spring takes to visually arrive and stays stable as bounce changes. Settling duration (when movement is technically below threshold) is longer and unpredictable; never wait on it for a user-facing step. Negative bounce flattens the curve (overdamped). |
| Motion (formerly Framer Motion), `transition={{ type: "spring" }}` | stiffness, damping, mass, velocity; or `visualDuration` and `bounce` | Spring generator defaults in the motion-dom 14.7.1 source: stiffness 100, damping 10, mass 1, bounce 0.3, visualDuration 0.3s, duration 0.8s. With no transition set, `getDefaultTransition` picks one per value: x, y, rotate and the other non-scale transforms get a spring at stiffness 500, damping 25 (ζ about 0.56, about 12% overshoot); scale gets stiffness 550, damping 30 (ζ about 0.64, about 7% overshoot), critically damped when animating to 0; opacity, colour and other values a 0.3s tween on (0.25, 0.1, 0.35, 1); three or more keyframes a 0.8s tween. | A bare `animate={{ y: 0 }}` overshoots: the default is the bounce the house bans, so every project sets the house spring at the root (section 13.4). `visualDuration` v sets ω0 = 2π / (1.2 v), so it equals an Apple response of 1.2 v (section 3.10). Setting stiffness, damping or mass overrides bounce and duration. |
| React Spring, `config` presets | tension (stiffness), friction (damping), mass | default 170 / 26, gentle 120 / 14, wobbly 180 / 12, stiff 210 / 20, slow 280 / 60, molasses 280 / 120, mass 1 throughout | Also accepts `duration` (which turns the spring into a tween) and `clamp: true` (no overshoot). |
| Jetpack Compose, `spring(dampingRatio, stiffness)` | dampingRatio (ζ), stiffness (k) | Defaults `DampingRatioNoBouncy` (1.0) and `StiffnessMedium` (1500). Constants: damping ratios HighBouncy 0.2, MediumBouncy 0.5, LowBouncy 0.75, NoBouncy 1.0; stiffness High 10000, Medium 1500, MediumLow 400, Low 200, VeryLow 50. | Compose has no mass parameter (mass is fixed at 1), so stiffness alone sets speed and its numbers run higher than React Spring's tension; 400 (MediumLow) is the usual content spring. |
| Flutter, `SpringDescription(mass, stiffness, damping)` with `SpringSimulation` | mass, stiffness, damping | No named presets in the framework; `SpringDescription.withDampingRatio(mass:, stiffness:, ratio:)` takes ζ directly. | Used through `AnimationController.animateWith()`. |
| CSS, `linear()` easing (CSS Easing Level 2) | A sampled curve | None; generate the samples from a spring function at build time (Chrome 113, Firefox 112, Safari 17.2 support `linear()`; worked example in section 13.1). | The only way to run a spring on the compositor (the GPU stage that places already painted layers, section 12.1) in plain CSS. Fixed duration, so it is not interruptible with velocity; fine for enters and exits, wrong for gestures. |

### 3.9 Material 3 Expressive motion schemes

Material 3 Expressive (announced at Google I/O, May 2025) moved Material from curves to springs. The Compose Material 3 source (`MotionScheme.kt`, `StandardMotionTokens.kt`, `ExpressiveMotionTokens.kt`, androidx main branch, read October 2026) defines two schemes, each with six springs. Spatial springs move position and size; effects springs change colour, opacity and elevation, and are always critically damped, because an opacity that overshoots past 1 or a colour that bounces has no physical meaning. This is the clearest statement in any platform system of the house rule that bounce belongs to position only.

| Spring | Standard scheme (damping ratio / stiffness) | Expressive scheme (damping ratio / stiffness) | Use |
|---|---|---|---|
| Fast spatial | 0.9 / 1400 | 0.6 / 800 | Small components: switches, chips, checkboxes |
| Default spatial | 0.9 / 700 | 0.8 / 380 | Most moves: buttons, cards, list items |
| Slow spatial | 0.9 / 300 | 0.8 / 200 | Large surfaces: sheets, full-screen containers |
| Fast effects | 1.0 / 3800 | 1.0 / 3800 | Colour and opacity on small components |
| Default effects | 1.0 / 1600 | 1.0 / 1600 | Colour and opacity, most cases |
| Slow effects | 1.0 / 800 | 1.0 / 800 | Colour and opacity on large surfaces |

The expressive fast spatial spring at damping 0.6 overshoots visibly; it is Google's consumer-app personality and is the one value in the table the house never uses. The standard scheme at 0.9 is the luxury register: a hint of settle, no visible bounce.

### 3.10 Converting between spring vocabularies

A handoff names one spring and five platforms must reproduce it. The house writes every spring once, as response (seconds) and damping ratio ζ at mass 1, and converts with the physics of section 3.7:

- ω0 = 2π / response; stiffness k = m x (2π / response)^2; damping c = 4π x ζ x m / response; back again, ζ = c / (2 sqrt(k m)). Bounce to ζ is SwiftUI's mapping, which Motion reproduces in motion-dom 14.7.1 (`bounceToDampingRatio`): ζ = 1 - bounce when bounce is 0 or above; ζ = 1 / (1 + bounce) below 0.
- Apple `Spring(duration: d, bounce: b)`: response = d. WWDC23 (session 10158) gives the conversion as mass 1 and stiffness (2π / duration)^2, which is the same ω0.
- Motion `visualDuration` v: response = 1.2 v, because motion-dom computes ω0 = 2π / (1.2 v). To match a response r, write `visualDuration: r / 1.2`.
- React Spring: tension = k, friction = c, mass 1. Compose: stiffness = k, dampingRatio = ζ, mass fixed at 1. Flutter: `SpringDescription(mass: 1, stiffness: k, damping: c)`. Figma's custom spring takes mass, stiffness and damping directly.

| House token | Canonical | SwiftUI | Motion | React Spring | Compose | Flutter |
|---|---|---|---|---|---|---|
| `spring.ui` | response 0.4s, ζ 1 (k 246.7, c 31.4) | `.spring(duration: 0.4, bounce: 0)` | `{ type: 'spring', visualDuration: 0.333, bounce: 0 }`, or `{ type: 'spring', stiffness: 246.7, damping: 31.4 }` | `{ tension: 247, friction: 31 }` | `spring(1f, 247f)` | `SpringDescription(mass: 1, stiffness: 246.7, damping: 31.4)` |
| `spring.gesture` | response 0.4s, ζ 0.85 (k 246.7, c 26.7) | `.spring(response: 0.4, dampingFraction: 0.85)`, or `.spring(duration: 0.4, bounce: 0.15)` | `{ type: 'spring', visualDuration: 0.333, bounce: 0.15 }` | `{ tension: 247, friction: 27 }` | `spring(0.85f, 247f)` | `SpringDescription(mass: 1, stiffness: 246.7, damping: 26.7)` |

The error this table closes: a spec that says "visualDuration 0.4" on the web and "response 0.4" on iOS describes two springs 20% apart. For orientation, Compose's `StiffnessMediumLow` (400) is a response of about 0.31s and its default `StiffnessMedium` (1500) about 0.16s.

### 3.11 Why springs beat durations for interruptible motion

A duration-based animation has a start state, an end state and a curve between them. Interrupt it (the user taps again, drags back, the data changes) and you have two bad options: snap to the end, or start a new tween from the current position with zero velocity, which produces a visible hitch where the object stops dead and restarts. A spring carries its current velocity into the new target, so an interrupted move bends towards the new goal with no discontinuity. This is why Apple's gesture system (section 9) is springs end to end, why Motion's layout animations default to springs, and why the house rule is: tweens for choreography the user watches, springs for anything the user's finger touches.

## 4. Duration, distance and stagger

### 4.1 Ranges

| Class | Range | Examples | Reason |
|---|---|---|---|
| Micro | 100 to 200ms | Hover colour, press state, toggle knob, checkbox tick, tooltip | Below 100ms the change reads as a cut; above 200ms a frequent action starts to feel slow, because the animation alone spends half the 400ms Doherty budget (section 1.2). |
| Small | 200 to 300ms | Dropdown, popover, tab indicator, toast enter, list item | Long enough to read the direction of travel; short enough to repeat all day. Emil Kowalski's cap for most UI is 300ms (section 6.3). |
| Large | 300 to 500ms | Sheet, drawer, modal, container transform, section reveal | Larger objects and longer distances need more time or they read as teleporting. |
| Page | 400 to 700ms | Route change, hero reveal, full-screen image, scroll-narrative beat | The whole stage changes; the eye needs the longer settle. Beyond 700ms a page transition becomes a wait. |
| Brand | 800 to 2000ms | Logo reveal, campaign film sting, one-off microsite peak | The viewer is an audience, once. These numbers never apply to anything the user does twice. |

Product systems run at the lower end of each band; luxury runs at the upper end with a longer ease-out tail, because slowness is a signal of confidence (design-taste, section 2). The difference lives in the tail; the first frame of response stays inside 100ms.

### 4.2 Exit faster than enter

House ratio: exit duration is about 0.7 x the entrance duration. Material's original 2014 guidance gave 225ms entering and 195ms leaving on mobile (0.87); Carbon and Fluent pair faster accelerate curves with their exits. The reason is attention: an entering element is new information and the eye needs time to find and read it; an exiting element has already been read, and the user's attention has moved to whatever comes next. A slow exit is a wait disguised as elegance.

### 4.3 Distance-based duration

The same duration across different distances produces different speeds, and the eye reads speed. Material's 2014 guidance scaled duration with distance and screen size (tablet transitions about 30% longer than phone, wearable about 30% shorter). Working heuristic for the web:

duration = base + distance x rate, clamped to the band

- base 200ms, rate 0.3ms per px, cap 500ms for UI moves. A 100px move takes 230ms; a 600px move takes 380ms; a full-height 1000px move hits the cap.
- Size counts as distance: a full-screen sheet is a large move even when it only travels 60% of the viewport.
- Springs handle this automatically because stiffness and damping are independent of distance; a spring moving further simply moves faster. This is the second reason to use springs for layout.

### 4.4 System duration tokens

Material 3 (`md.sys.motion.duration`, from the @material/web 2.5.0 token source, token set v0_192, read October 2026):

| Token | ms | Token | ms |
|---|---|---|---|
| short1 | 50 | long1 | 450 |
| short2 | 100 | long2 | 500 |
| short3 | 150 | long3 | 550 |
| short4 | 200 | long4 | 600 |
| medium1 | 250 | extra-long1 | 700 |
| medium2 | 300 | extra-long2 | 800 |
| medium3 | 350 | extra-long3 | 900 |
| medium4 | 400 | extra-long4 | 1000 |

IBM Carbon (from `@carbon/motion`):

| Token | ms | Typical use |
|---|---|---|
| fast-01 | 70 | Button and toggle micro-interactions |
| fast-02 | 110 | Fades |
| moderate-01 | 150 | Small expansions, short-distance movement |
| moderate-02 | 240 | Expansion, system communication, toasts |
| slow-01 | 400 | Large expansions, important system notifications |
| slow-02 | 700 | Background dimming |

Carbon's mode split: productive motion (subtle, efficient; dropdowns, data tables, button states) and expressive motion (reserved for "occasional, important moments": opening a page, a primary action, an alert). The rule is the house delight budget expressed as a token mode.

Microsoft Fluent 2 (`@fluentui/tokens`):

| Token | ms | Token | ms |
|---|---|---|---|
| durationUltraFast | 50 | durationGentle | 250 |
| durationFaster | 100 | durationSlow | 300 |
| durationFast | 150 | durationSlower | 400 |
| durationNormal | 200 | durationUltraSlow | 500 |

Windows control defaults sit at 83ms (faster) and 167ms (fast), which is five and ten frames at 60Hz, a useful check on micro durations; specs stay in milliseconds (section 4.6).

### 4.5 Stagger

A stagger is a per-item delay that turns a group entrance into a sequence. Values: 20 to 60ms per item. The reason for the floor is that below 20ms items appear simultaneous; the reason for the ceiling is that at 60ms a list of eight items already takes 420ms of delay before the last one starts (the first starts at 0, so the eighth waits 7 x 60ms). In CSS, `sibling-index()` writes the capped stagger in one line (section 13.1). Rules:

- Cap the total stagger at 300ms (about 400ms for a page-level reveal). Past eight items, stagger by group or by distance from the trigger.
- Direction follows the cause: a list opened from the top staggers downward; items that enter from a tapped point stagger outward from it.
- One stagger per screen. Two overlapping staggers read as noise.
- Under reduced motion, stagger collapses to 0 and the group fades as one.

### 4.6 Frame arithmetic

At 60Hz: 100ms is 6 frames, 200ms is 12, 300ms is 18, 500ms is 30. At 120Hz double each. A 70ms micro duration is 4 frames at 60Hz and 8 at 120Hz; this is why the same spec can feel crisper on a ProMotion phone. Specify in milliseconds and let the platform sample; frames are the unit for video and motion graphics (13-motion-graphics-and-3d-production.md, section 12).

## 5. Choreography

Choreography is the ordering and relationship of several moves. It is where most interface motion fails: every element has a sensible animation on its own and the sum is chaos.

### 5.1 Hierarchy of motion: what moves first

1. The thing the user touched responds first (press state, within 100ms).
2. The container moves next (the sheet rises, the panel opens, the page slides).
3. The content inside the container follows, with a short lag (20 to 60ms) and its own shorter duration, so it appears to be carried.
4. Secondary elements (badges, counts, chevrons) update last, or during the container's move.
5. On exit the order reverses in compressed time: content fades first (fast), container leaves, and the trigger returns to rest.

Parent before child on enter; child before parent on exit. Breaking this reads as the content arriving before its container exists, which the eye cannot accept.

### 5.2 Material's four transition patterns

The Material motion system (2020, carried into M3) names four patterns that cover most navigation. The numbers are Material's; the verdicts are the house's.

| Pattern | What it does | Material numbers | House verdict |
|---|---|---|---|
| Container transform | An element (card, button, list item) morphs into the full view it opens; the outgoing and incoming surfaces are clipped inside one container that changes size and shape. | About 300ms open, 250ms close, with content crossfading inside the morphing container. | Yes, once per flow. It is the strongest spatial continuity available. |
| Shared axis | Outgoing and incoming views move along the same axis (x for lateral, y for vertical, z for depth) with a fade. | 30dp (density-independent pixels) offset, about 300ms; outgoing fades over the first 90ms, incoming over the remaining 210ms. | Yes for steppers and sequences. |
| Fade through | Outgoing fades out, incoming fades in with a slight scale up. | About 300ms; outgoing exits in the first 90ms (30%), incoming enters over 210ms scaling 92% to 100%. | Yes for unrelated destinations (tab switches). Drop the scale for luxury: a plain crossfade over 250ms. |
| Fade | A single element appears or disappears in place. | Enter about 150ms, exit about 75ms. | Yes, for dialogs and menus; the default for anything with no spatial relationship. |

### 5.3 Shared element transitions

A shared element is one that exists in both the outgoing and incoming view (the product image on a listing and on its detail page). It travels, resizes and keeps its identity while everything else crossfades. Rules: name at most two or three shared elements per transition (the image, the title, perhaps the price); keep aspect ratio changes honest with a crop (object-fit cover during the move), because a stretch distorts the image; give the shared element the full transition duration (300 to 400ms) while surrounding content enters shorter (200ms) and later (60 to 100ms delay). Implementation: View Transitions API `view-transition-name` (section 8), Motion `layoutId`, GSAP Flip, SwiftUI `matchedGeometryEffect`, Compose `SharedTransitionLayout` (stable since Compose 1.10, December 2025), Flutter `Hero`.

### 5.4 FLIP

FLIP (Paul Lewis, 2015) stands for First, Last, Invert, Play: record the element's First position, apply the layout change and record the Last position, Invert by applying a transform that puts it visually back at First, then Play the transform to zero. The layout change happens once and instantly; the animation is transform-only, so it runs on the compositor. Every layout animation library (Motion `layout`, GSAP Flip, the View Transitions API internally) is FLIP. Hand-rolled:

```js
const first = el.getBoundingClientRect();
container.classList.toggle('expanded');          // the layout change
const last = el.getBoundingClientRect();
const dx = first.left - last.left, dy = first.top - last.top;
const sx = first.width / last.width, sy = first.height / last.height;
el.animate(
  [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: 'none' }],
  { duration: 350, easing: 'cubic-bezier(0.2, 0, 0, 1)' }
);
```

Pitfalls: scaled text and borders distort during the move (use `scale` on containers only, or counter-scale children); nested FLIPs compound (GSAP Flip's `nested: true` and `absolute: true` exist for this); read layout once per batch to avoid layout thrash (interleaved reads and writes that force synchronous layout, section 12.1).

### 5.5 Enter and exit choreography

Enter: fade and a small move on one axis (8 to 24px) with ease-out; never scale from 0 (it reads as a cartoon); scale from 0.96 to 1 is the maximum for luxury. Exit: fade with a smaller move (4 to 12px) in the opposite direction, ease-in, 0.7 x the enter duration. Dialogs: backdrop fades over 200ms, dialog enters over 250 to 300ms starting 40ms later; on exit both leave in 150 to 200ms with the dialog first. Toasts: enter from the edge they live on with ease-out 300 to 400ms; exit with ease-in 200 to 250ms; never bounce.

Opacity and transform run on different clocks. On an entrance, opacity completes in the first 40 to 60% of the transform's duration, on `ease` or linear, while the transform settles on the long tail: a 900ms expo-out reveal pairs with a 400ms fade. On an exit, opacity runs the full duration and the transform is short, so the element is gone before it travels far. The reason: the eye reads content once it is opaque, and translucency during the settle reads as a rendering error. Material's fade through (outgoing in the first 30%) applies the same principle, and the 13.1 snippet encodes it (`opacity var(--dur-small)` against `transform var(--dur-large)`).

### 5.6 List reordering, insertion and removal

Insertion: the new item fades in and the items below move down with ease-in-out 200 to 300ms (FLIP). Removal: the item fades and collapses (height to 0, or FLIP the siblings up) over 200ms; siblings move after the removed item has started leaving. Reordering: FLIP every moved item with the same duration and curve so they read as one gesture; items that did not move stay still. Drag reorder: the dragged item follows the finger 1:1 with a slight lift (scale 1.02, a hairline shadow); the others spring aside (Compose and Motion do this natively; see section 9).

### 5.7 Continuity of position and shape

An object that leaves the screen on the right should come back from the right. A sheet that rises from the bottom dismisses to the bottom. A card that expands into a page collapses back into the card, into the same slot, even if the list has scrolled (scroll the list back under the collapsing card). A circle that becomes a rectangle changes radius continuously through the move. Each broken continuity costs the user a re-orientation, and re-orientation is the cost that motion exists to remove. In right-to-left layouts the horizontal directions mirror (section 5.9).

### 5.8 The one considered move

design-taste, section 5, holds the rule: one considered motion per page that reveals the idea, everything else still. In choreography terms: pick the move that carries the concept (the image that settles into place, the headline that arrives in one long ease-out, the container that transforms), give it the full budget (duration at the top of its band, the long-tail curve, the stagger if any), and reduce every other motion on the page to feedback-only (micro durations, no travel beyond 8px, opacity where possible). A page with one 900ms reveal and twenty 120ms feedback moves reads as expensive. A page with twenty 500ms reveals reads as a slideshow.

### 5.9 Direction in right-to-left and bilingual interfaces

Mask360's Gulf work (Dubai, Abu Dhabi, Riyadh) is read in Arabic, right to left (RTL). Layout mirroring is in 09-interaction-design-and-ux-patterns.md, section 16.3, and 06-ui-design-craft.md, section 2.7; motion adds two traps layout does not have, because transforms ignore logical properties and RTL scroll offsets run negative.

| Mirror (direction encodes sequence or hierarchy) | Keep (direction is physical or temporal) |
|---|---|
| Forward navigation enters from the left; back exits to the left and the previous view returns from the right | Spinners and any clock-like rotation (clocks turn clockwise in Arabic too) |
| The iOS edge-swipe back starts at the right edge; shared axis x reverses | Media playback scrubbers and progress (Material's bidirectionality guidance, as in 09-interaction-design-and-ux-patterns.md, section 16.3) |
| Drawers and side sheets open from the start edge, which is the right | Physical objects: a product turntable, a watch hand, a car crossing the frame |
| Carousels, steppers and paging advance leftward; swipe-to-reveal actions sit on the opposite side | Charts with time axes |
| Progress bars, sliders and list stagger order run right to left | A logo animation, which follows the mark's own construction |

Implementation: logical properties do not reach `transform` or `translate`, so carry direction as a token, `:root { --dir: 1 } :root:dir(rtl) { --dir: -1 }` (`:dir()` in Chrome 120, Safari 16.4, Firefox 49), then write `translate: calc(var(--dir) * 24px) 0`. In GSAP and Motion multiply every x value by the same factor. In an RTL scroller `scrollLeft` runs from 0 to negative values, so horizontal ScrollTrigger tracks, drag maths and the 1:1 rule of section 7.5 invert; test every pinned horizontal section in Arabic before sign-off. A bilingual screen takes its direction from the document's `dir`, one value per page. Devanagari runs left to right and needs no mirroring. Kinetic type across scripts is in section 14.1.

## 6. Motion as feedback versus decoration

### 6.1 The six jobs of feedback motion

| Job | What it tells the user | Minimal form | Fail state |
|---|---|---|---|
| State change | Something is now on, off, selected, loading, done. | Colour, opacity, a 150ms crossfade. | A state that changes with no transition and the user misses it. |
| Spatial orientation | Where things are relative to each other; where that panel went. | Directional enter and exit on one axis. | A modal that appears from nowhere and leaves to nowhere. |
| Causality | This happened because of that. | The new element originates from the trigger (position, scale, or both). | A menu that opens in the centre of the screen after a tap in the corner. |
| Focus guidance | Look here now. | One element moves, the rest holds or dims. | Everything moves; nothing is pointed at. |
| System status | Working, waiting, succeeded, failed. | Determinate progress where possible; skeletons for over 1s; spinners only after a 300ms delay. | A spinner that flashes for 80ms, or no indicator for 3s. |
| Continuity | The thing you were looking at is the same thing. | Shared element, FLIP. | The page reloads and the image jumps. |

### 6.2 The delight budget

Decoration is allowed. It is budgeted: one piece per screen in product work, one peak per page in marketing work. The test for spending it: would the brand be poorer without this move? If the answer is "the page would still be fine", the move is noise and the budget is still unspent. The budget is also cumulative across frequency: a delightful move seen the hundredth time is a tax (Rauno Freiberg's observation, 6.3), so decoration lives on low-frequency surfaces (onboarding, a completed purchase, a campaign microsite); high-frequency ones (navigation, search, keyboard-driven menus) carry none.

### 6.3 The practitioner principles: Rauno Freiberg and Emil Kowalski

Both are design engineers whose written principles are the current reference for interface motion craft; Freiberg's are in his essay Invisible Details of Interaction Design, Kowalski's in his articles and his course animations.dev. The principles they share, with the reason behind each:

1. Animate what the user caused. Motion follows the gesture's momentum and angle; a dismissed app "retains the momentum and angle at which it was thrown". Reason: the motion is the gesture's consequence, so it must inherit the gesture's physics.
2. Keyboard-initiated and high-frequency actions get little or no animation (command menus, context menus, the macOS app switcher). Reason: an action performed hundreds of times a day accumulates every millisecond of its animation as delay.
3. Keep to transform and opacity. Reason: they are composited without layout or paint (section 12); everything else costs frames.
4. Avoid animating layout properties (width, height, padding, top, left). Reason: each frame triggers layout for the element and often for its ancestors. Use FLIP.
5. Never block input. The user can act during any animation; the animation adapts. Reason: blocking makes the interface the user's superior.
6. Interruptibility. Every animation can be retargeted mid-flight with a smooth transition (CSS transitions do this; springs do it with velocity). Freiberg's example of failure is iOS Settings forcing the slide-in to finish before a back swipe registers.
7. Ease-out by default, under 300ms for most UI, with the exceptions reasoned (Kowalski accepts a slower toast in Sonner for its character; a 500ms enter on a frequent tool is the example of wrong).
8. Gestures respond on the first frame and track 1:1; thresholds decide only the outcome at release. Destructive outcomes wait for the gesture to end, regardless of distance.
9. Show origin: an element enters from where it conceptually lives (an app from its icon; the app switcher from the right, where the stack is).
10. Respect reduced motion (section 11).

### 6.4 Apple's motion guidance

WWDC18, Designing Fluid Interfaces (Chan Karunamuni, Nathan de Vries, Marcos Alonso): interfaces respond instantly, every moment; gestures are redirectable (one swipe can end in several destinations as the finger changes its mind) and interruptible; motion carries the gesture's momentum into a projected destination (section 9.2); damping starts at 100% and drops to about 80% only when momentum exists; swipe hysteresis is 10 points (iOS layout points; 1pt is 1px at 1x) before a swipe begins; a double-tap recogniser adds about 0.5s to every single tap and should be avoided on primary actions. WWDC23, Animate with springs (Jacob Xiao): the duration and bounce vocabulary, bounce 0 as the general-purpose spring, 0.15 small, 0.3 noticeable, above about 0.4 too much for UI, and the warning that settling duration is unpredictable so completion should key off the perceptual duration. The Human Interface Guidelines add: motion should be purposeful, brief, and consistent; realistic physics preferred; always offer a reduced-motion alternative.

Two platform changes from 2025 move what the system already animates. Liquid Glass (Apple's translucent design language, iOS 26, September 2025) makes system controls morph: a button flows into its menu, the tab bar minimises on scroll (`.tabBarMinimizeBehavior(.onScrollDown)`), and custom glass shapes merge and split as one material inside a `GlassEffectContainer(spacing:)` with `glassEffectID(_:in:)` on a shared namespace (Apple developer documentation, October 2026; code in 13.8). House rule: do not hand-animate what the system morphs. Android 16 (API 36): for apps that target it, the predictive back system animations (back to home, cross-task, cross-activity) are on by default and `onBackPressed` is no longer called (Android 16 behaviour changes). The back gesture is therefore a tracked gesture, and in-app back transitions must be scrubbable: drive the exit from the gesture's progress and commit on release (section 9; code in 13.9).

### 6.5 The system vocabularies compared

The values are in sections 3.4, 3.9 and 4.4; what each system lends the house is its split. Material 3 splits `standard` from `emphasized` easing over 16 duration tokens, and its standard curve (0.2, 0, 0, 1) is the house move curve. IBM Carbon splits productive from expressive motion, which is the delight budget written as a token mode, and its curves arrive at y 0.9 for crispness. Microsoft Fluent 2 grades decelerate, accelerate and easy-ease curves at min, mid and max strengths, a good library of exits. Apple puts springs everywhere, in duration and bounce, and the gesture model of section 9 is Apple's.

### 6.6 Motion in data

Annual reports, investor microsites and live dashboards animate data, and the research is specific. Jeffrey Heer and George Robertson (Animated Transitions in Statistical Data Graphics, IEEE InfoVis 2007) found that animated transitions improved viewers' perception of changes between chart states, and that staged transitions (axes rescale first, then marks move) were understood better than everything moving at once. Mike Bostock's Object Constancy (2012) adds the engineering rule: key every data point by identity so it travels to its new position, which is FLIP (section 5.4) for charts. House values: 600 to 1000ms for a chart state change on M3 standard (0.2, 0, 0, 1); stagger by series, because a per-point stagger on 200 points is noise; no animation on the first load of a dashboard read daily, because the hundredth replay is a tax (section 6.2). Data honesty in motion is in 13-motion-graphics-and-3d-production.md, section 7.1.

## 7. Scroll-driven motion

Scroll is the one gesture every visitor performs, so motion tied to it is the house's main instrument on the web (design-taste, section 7: "Scroll-driven, nothing clickable"). It is also where the most vestibular harm (dizziness and nausea from disturbing the inner ear's balance system) and the most cheap tells live, so the rules are strict. The web stack and its budgets are in 21-web-design-and-digital-craft.md, section 6.

### 7.1 Native scroll, smooth scroll, and when each is right

Native scroll is the browser's own: it runs off the main thread, honours the OS's scroll physics (iOS deceleration, Windows wheel steps), supports `position: sticky`, anchors, find-in-page and screen readers for free. Smooth scroll libraries intercept wheel and touch input and interpolate the scroll position each frame, which makes scroll-linked motion look continuous on a mouse wheel (whose native input arrives in 100px steps) and gives the page a sense of weight.

Lenis (darkroom.engineering, MIT; 1.3.27 on npm as of October 2026, 5.4KB gzipped) is the house smooth scroll because it wraps native scroll, so sticky, anchors and accessibility keep working. Its defaults and the reason to keep or change each:

| Option | Default | House setting and reason |
|---|---|---|
| `lerp` | 0.1 | 0.08 to 0.1. Linear interpolation (lerp) moves the current scroll 10% of the remaining distance per frame; lower is heavier. Below 0.06 the page lags the finger and reads broken. |
| `easing` | `1.001 - 2^(-10t)` (an expo-out), with `duration` 1.2s | Ignored while `lerp` is set, which is the default mode; it applies only to `duration`-based smoothing and programmatic `scrollTo`. Same long-tail family as the reveal curve. |
| `smoothWheel` | true | Keep. The whole point: mouse wheel steps become continuous. |
| `syncTouch` | false | Keep false. Touch devices already have physical scroll; taking it over is the first thing a user on an iPhone notices and resents. |
| `respectReducedMotion` | true | Keep. Under reduced motion Lenis forces `lerp` to 1 (scroll tracks the input 1:1) and makes `scrollTo` and anchor jumps instant. |
| `anchors` | false | Set true so anchor links scroll through Lenis with smoothing; left false, they still work but jump instantly. |
| `autoRaf` | false | Set true unless GSAP's ticker drives the loop; otherwise one `requestAnimationFrame` loop for the page. |

Native scroll is right when the page is a product (commerce listing, booking flow, dashboard), when the visitor comes to read, or when the JS budget is spent (measured October 2026: GSAP core 28KB, ScrollTrigger 18KB and Lenis 5.4KB gzipped, about 52KB together; 21-web-design-and-digital-craft.md, section 5, sets the page budget it sits inside). Smooth scroll is right on a scroll-narrative microsite where motion is the content. Never on a Shopify store.

### 7.2 CSS scroll-driven animations

Scroll-driven animations bind an animation's progress to scroll position instead of time: `animation-timeline: scroll()` follows a scroll container's position, `animation-timeline: view()` follows an element's progress through the viewport, and `animation-range` limits which part of that progress drives the animation. Because the browser owns the timeline, the animation runs off the main thread and never drops a frame to a busy script. Support as of October 2026 (MDN browser-compat-data): Chrome 115 (July 2023), Safari 26 (15 September 2025), Firefox 159 (27 October 2026); scroll-driven animations and view transitions are both Interop 2026 focus areas (Interop is the yearly programme in which the browser makers agree a list of features to make consistent and score themselves against shared tests). Wrap it in `@supports` and let older browsers show the element at rest (every support figure in this file is collected in section 13.11).

```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 10% entry 60%;   /* starts when 10% of the element is visible, done at 60% */
  }
}
@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
```

The easing is `linear` on purpose: the finger is the easing (section 3.1). Range keywords: `entry` (the element crossing into view), `exit` (crossing out), `cover` (any part visible), `contain` (fully visible), `entry-crossing` and `exit-crossing`. Named timelines (`scroll-timeline-name` on the scroller, `timeline-scope` on an ancestor) let an element outside the scroller follow it: a progress bar in a fixed header following the article body.

### 7.3 IntersectionObserver patterns

`IntersectionObserver` fires a callback when an element's visibility crosses a threshold; it is the right tool for time-based reveals (play a 700ms animation once when the element arrives) as opposed to scroll-scrubbed ones. Use `threshold` 0.15 to 0.25 (fire when 15 to 25% of the element is visible, so a tall image begins before its midpoint reaches the fold), `rootMargin: "0px 0px -10% 0px"` (fire 10% before the bottom edge, so the reveal is under way as the eye arrives), and `observer.unobserve(el)` after the first fire so the reveal plays once. Never animate on exit and re-enter: a page that re-reveals on every scroll up is a tell (section 16).

Chrome now ships declarative replacements, usable only as progressive enhancement as of October 2026 (MDN browser-compat-data 8.1.7): `animation-trigger` and `timeline-trigger` (Chrome 146) start a time-based animation when an element crosses a scroll range, the CSS form of this observer; the `scrollsnapchange` and `scrollsnapchanging` events (Chrome 129) update a caption or a counter on snap without polling; scroll-state container queries (`container-type: scroll-state`, Chrome 133) style a header when stuck or a slide when snapped. The `scrollend` event works everywhere (Chrome 114, Firefox 109, Safari 26.2). IntersectionObserver stays the cross-browser default.

```js
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
}, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
```

### 7.4 GSAP ScrollTrigger

ScrollTrigger (GSAP 3.15.0 as of October 2026; core 28KB and ScrollTrigger 18KB gzipped) is the house tool for pinned and scrubbed sequences, the two things CSS scroll timelines still do awkwardly. The options that matter and their defaults from the GSAP documentation:

| Option | Default | What it does and the house value |
|---|---|---|
| `start` / `end` | `"top bottom"` / `"bottom top"` (`"top top"` when pinned) | Where the trigger's edge meets the viewport's edge. Wrap in `clamp()` (3.12+) so a trigger near the page top does not start mid-progress. |
| `scrub` | off | `true` locks progress to the scrollbar; a number is the catch-up time in seconds. House: 0.6 to 1.2, so the animation lags the finger with weight. |
| `pin` | off | Holds the trigger element fixed for the scroll distance between start and end. One pinned scene per page beat; `pinSpacing` keeps the document's height honest. |
| `snap` | off | Snaps progress to values or labels after scrolling stops; `delay` defaults to half the scrub time, `ease` to `power3`. Use on a stepped story of 3 to 6 states; free reading keeps it off. |
| `anticipatePin` | 0 | Set 1 to pre-empt the one-frame jump when a fast scroll hits a pin. |
| `fastScrollEnd` | off | Completes the animation if the user leaves faster than 2500px/s; set true on reveals so a flick never leaves half-revealed content. |
| `toggleActions` | `"play none none none"` | Enter, leave, enter back, leave back. The default (play once) is right for reveals. |
| `markers` | off | On during build, off in production. |

`ScrollTrigger.normalizeScroll(true)` moves scrolling onto the JavaScript thread to stop the mobile address bar resizing the viewport mid-scene; it also removes native scroll physics, so use it only on a pinned narrative.

### 7.5 Horizontal scroll pitfalls

A horizontal section driven by vertical scroll (pin the track, translate x as y progresses) is a legitimate beat once per page. The failures: the track is wider than the pinned distance so it jumps; the scroll distance is not proportional to track width (rule: scroll distance in px equals track overflow in px, 1:1, so the finger moves content at the same rate as the page); touch users with a horizontal pan inside a vertical page fight the direction lock; keyboard and screen reader users cannot reach content that only scrolls sideways. Provide the same content in document order and keep native horizontal scrolling (`overflow-x: auto; scroll-snap-type: x mandatory`) for galleries, which also gives free momentum on touch; `::scroll-marker` and `::scroll-button()` (Chrome 135 only) add CSS-only dots and arrows to such a gallery. In Arabic the track runs the other way and `scrollLeft` goes negative (section 5.9).

### 7.6 Parallax rules

Parallax is background and foreground moving at different rates to fake depth. Val Head's 2015 survey of vestibular triggers (A List Apart) puts exaggerated parallax and scroll-jacked backgrounds at the top of the list; design-taste, section 3, lists "parallax on everything" as a tell. House limits:

- Amplitude: a background layer moves 10 to 20% of scroll delta relative to the content (that is, it lags by 80 to 90%); never above 30%. At 50% the layers separate into two pages.
- Layers: two at most (image and content). Three-layer parallax reads as a 2013 agency site.
- Never on text, never on the primary image, never on a layer with hard edges against a static one (the wobble tell, section 16).
- Off entirely under reduced motion (section 11).
- Implementation: transform only, from a scroll timeline or a scrubbed trigger; never from a scroll event handler that writes `top`.

### 7.7 Reveal patterns: the fade-up epidemic and the alternative

The fade-up (opacity 0 to 1, translateY 30px to 0, 600ms, on every section as it enters) is the default of every page builder and the signature of generated work. It fails because it is uniform: when everything arrives the same way, arrival means nothing, and the user spends the page waiting for content that is already in the DOM.

The alternative is one peak per page: a single scroll-linked sequence that carries the idea (the product rotating as the story scrolls, the room assembling, the wordmark resolving) with everything else present at rest. Where a reveal is still right (an image that is the chapter's point), the house numbers: travel 8 to 24px, duration 700 to 900ms, `cubic-bezier(0.16, 1, 0.3, 1)`, triggered at 15 to 25% visibility, once; text never reveals, it is already there when the eye arrives (a reader cannot be made to wait for a sentence). The hero image is at full opacity on first paint, because a faded-in hero delays Largest Contentful Paint (section 12.7).

### 7.8 Scroll narrative pacing: beats, holds and releases

A scroll narrative is a page read as a sequence of scenes. The pacing vocabulary:

- Beat: one idea, one scene, one move. A page has 4 to 7 beats; more and the visitor flicks.
- Hold: a pinned section where scroll drives a transformation in place. Length in scroll distance: 100 to 200vh per hold (at 100vh the scene feels snatched; past 250vh the user wonders if the page is stuck). Two holds per page at most.
- Release: free-scrolling content between holds, at natural document length, where the visitor regains the page's rhythm. A hold followed directly by a hold is the "stuck page" feeling.
- Ratio: roughly one third of total scroll distance in holds, two thirds in release. The peak (section 7.7) is the longest hold and sits at about 60% of the page, after the visitor has invested and before they tire.
- Ending: the last beat is static and typographic (design-taste, section 2: "An ending"). Motion that continues to the footer has nowhere to resolve.

### 7.9 Performance rules for scroll motion

- Never read scroll position in a `scroll` event to write styles; it runs on the main thread at the event rate and causes layout thrash. Use scroll timelines (compositor), IntersectionObserver (batched), or ScrollTrigger (one `requestAnimationFrame` loop, rAF, with batched reads).
- If a scroll listener is unavoidable, register it `{ passive: true }` so the browser does not wait for it before scrolling.
- Animate `transform` and `opacity` only (section 12). A parallax that moves `background-position` repaints every frame.
- `will-change: transform` on the handful of elements in the active scene, removed when the scene ends; never on every section (section 12.3).
- Test on a mid-range Android with 4x CPU throttling in DevTools; a scene that holds 60fps on a MacBook and 20fps on a Redmi is a scene the Indian audience never sees working.

### 7.10 The house scroll-driven microsite genre

The genre (21-web-design-and-digital-craft.md, section 11, for the build and launch rules) is a single page for one launch (a residence, a collection, a hotel opening, an agency showcase) where the visitor scrolls through 4 to 7 beats with one peak, no clickable navigation beyond the final call to action, and the client as hero. Its motion contract, in order of priority: the hero holds still for the first second and is at full opacity on first paint (nothing moves until the visitor does); the first scroll produces an immediate, proportional response (a scrubbed scene, with no delayed tween) so the page feels under hand; one hold carries the idea; type never reveals; the ending is still. Rupee and dirham pricing, Devanagari and Arabic text and any form live in the release sections where native scroll and selection work. Budget: Lenis plus GSAP plus ScrollTrigger at about 52KB gzipped (section 7.1) is the ceiling for motion JS; everything else is CSS.

### 7.11 Scroll-scrubbed product sequences

The genre's peak is often an object turning as the story scrolls (section 7.7): a watch, a bottle, a residence tower. Three build methods, each with a hard constraint the creative director specifies:

| Method | How | Numbers | Right for |
|---|---|---|---|
| Image sequence on a canvas (the method of Apple's product pages) | Pre-rendered frames drawn with `drawImage` on a canvas sized to `devicePixelRatio`, capped at 2; frame = round(progress x (n - 1)) from a ScrollTrigger or a scroll timeline | About 60 to 120 frames (more reads no smoother at scrub speed and doubles the weight); WebP or AVIF about 1920px wide on desktop and 1080px on mobile; about 20 to 60KB per frame, so about 2 to 6MB per sequence (a working estimate: measure each project) | Photoreal renders that must scrub forwards and backwards exactly |
| Video scrubbed through `video.currentTime` | One encoded clip; scroll sets its time | Smooth only when every frame is a keyframe: all-intra encoding, ffmpeg `-g 1` or x264 `keyint=1`. Long-GOP web video (GOP, group of pictures: the run of frames between keyframes) seeks back to the previous keyframe and stutters. Expect a file several times larger; H.264 for Safari | Long continuous camera moves that would run to hundreds of frames as a sequence |
| Real-time 3D (three.js, Spline) | The model renders live | Runtime weights in section 12.6; assets in 13-motion-graphics-and-3d-production.md, section 9.2 | A product that must turn freely or answer the pointer |

Loading order for a sequence: the first frame eagerly, then a sparse pass (every eighth frame), then the gaps, so the scrub works coarsely before it works finely. Stop drawing and decoding when the scene is off screen. Under reduced motion, replace any of the three with three to five stills in document order.

## 8. Page and view transitions

### 8.1 The View Transitions API, same document

`document.startViewTransition(callback)` snapshots the current page, runs the callback (which updates the DOM), snapshots the new state and animates between them through a tree of pseudo-elements: `::view-transition` (the overlay root), `::view-transition-group(name)` (one transition), `::view-transition-image-pair(name)`, `::view-transition-old(name)` (a static snapshot of the outgoing state) and `::view-transition-new(name)` (a live view of the incoming state). Any element given a `view-transition-name` becomes its own group and moves and resizes between its old and new positions; everything else is the `root` group, which crossfades. Support as of October 2026 (MDN browser-compat-data 8.1.7): Chrome 111 (March 2023), Safari 18 (September 2024), Firefox 144 (October 2025); `view-transition-class` arrived in Chrome 125, Safari 18.2 and Firefox 144, and transition types in Firefox 147. The default animation is a crossfade of about 250ms; override it:

```css
::view-transition-old(root), ::view-transition-new(root) { animation-duration: 240ms; }
.product-image { view-transition-name: hero-image; view-transition-class: shared; }
::view-transition-group(.shared) { animation-duration: 400ms; animation-timing-function: cubic-bezier(0.2, 0, 0, 1); }
@media (prefers-reduced-motion: reduce) { ::view-transition-group(*) { animation-duration: 0.01ms; } }
```

Two Chrome-only extensions, for progressive enhancement: element-scoped transitions, `Element.startViewTransition()` (Chrome 147), animate one component without freezing the rest of the page, and several can run at once; `view-transition-group` (Chrome 140) nests groups so a shared element inside a scroller stays clipped. `view-transition-class` styles many named elements with one rule. Transition types (`startViewTransition({ update, types: ['back'] })` with `:active-view-transition-type(back)`) let forward and back navigations run different choreography. Every `view-transition-name` on a page must be unique at the moment of capture, which is why lists name items by id.

### 8.2 Cross-document view transitions

For multi-page sites, both pages opt in with `@view-transition { navigation: auto; }` and the browser runs the same pseudo-element animation across a same-origin navigation with no JavaScript. Support: Chrome 126 (June 2024), Safari 18.2 (December 2024); Firefox had not shipped it as of October 2026 (Bugzilla 1860854), so a Shopify store or a static site gets the transition in Chrome and Safari and a plain navigation in Firefox, which is acceptable because the fallback is the web's default. The `pageswap` (outgoing) and `pagereveal` (incoming) events expose the navigation so a page can set names based on where it came from. Keep the incoming page's render-blocking resources small; the transition cannot start until the new page's first render. Two additions make it start at once. Speculation Rules prerendering (a `<script type="speculationrules">` block with a `prerender` rule and `"eagerness": "moderate"`, which fires after about 200ms of hover; Chrome 109, Safari 26.2 behind a flag, Firefox in preview, per MDN browser-compat-data 8.1.7) renders the incoming page in advance, so the transition starts within a frame instead of waiting for the network. `<link rel="expect" href="#hero" blocking="render">` (Chrome 124, Safari 18.2) holds the first render until the shared element is parsed, so its `view-transition-name` exists at capture.

### 8.3 Framework integration as of October 2026

| Framework | Status | How |
|---|---|---|
| Next.js 16.4 | Works in the App Router with no configuration from 16.3 (3 August 2026); the `experimental.viewTransition` flag, introduced in 15.2 (26 February 2025), is no longer needed. React 19.3 (9 September 2026) ships `<ViewTransition>` and `addTransitionType` in the stable channel. | `import { ViewTransition } from 'react'` and wrap the elements that should persist; transition types give forward and back their own choreography. The route change is a same-document transition because the App Router swaps DOM. The Next.js guide, Designing view transitions, uses `view-transition-class` and types, which need Chromium 125, Safari 18.2 or Firefox 147 for the full effect. |
| Astro 7 | Stable since Astro 3.0 (2023), when the flag was removed | `<ClientRouter />` in the layout head (renamed from `<ViewTransitions />` in Astro 5) upgrades links to same-document transitions with the `transition:name`, `transition:animate` and `transition:persist` directives; without the router, cross-document transitions work in supporting browsers from the CSS rule alone. |
| Plain multi-page site, Shopify, WordPress | Cross-document API | The `@view-transition` rule on every page plus `view-transition-name` on the shared product image, nothing else. The house default for commerce. |

### 8.4 Shared element continuity and route change choreography

The route change is a container transform or a shared axis move (section 5.2) at page scale. The order: the shared element (one, at most two: the image and the title) travels for the full duration, 350 to 450ms on the move curve; the outgoing root fades in the first 40% of that time; the incoming content enters in the last 60% with ease-out and a 40 to 80ms delay after the shared element has begun, so the page appears to assemble around the object the user chose. Back navigation reverses the choreography exactly (section 5.7): the image returns to its slot in the listing, which the listing must scroll back into view before capture. Never transition two unrelated pages with a shared element; a fade through (section 5.2) is the honest move when nothing persists.

### 8.5 Native equivalents

SwiftUI: `matchedGeometryEffect(id:in:)` for in-view shared elements and, from iOS 18, `.navigationTransition(.zoom(sourceID:in:))` with `.matchedTransitionSource` for the system zoom from a thumbnail to a full view. Jetpack Compose: `SharedTransitionLayout` with `Modifier.sharedElement()` (identical content) and `Modifier.sharedBounds()` (container transform between different content), stable since Compose 1.10 (December 2025). Flutter: the `Hero` widget, matched by tag across routes. All three are FLIP under the hood (section 5.4). On Android 16 the system's predictive back animation runs across activities for apps targeting API 36 (section 6.4), so an in-app shared element must survive a back gesture that is scrubbed and can be cancelled.

## 9. Gesture-driven motion

A gesture is continuous input: the finger is on the glass and the interface is attached to it. Apple's WWDC18 session Designing Fluid Interfaces (section 6.4) is the canonical statement of the model, and Nathan Gitter's open-source reconstruction of its demos (github.com/nathangitter/fluid-interfaces) is the readable code. The model has five parts.

### 9.1 Track the finger

While the finger moves, the element moves with it 1:1, from the first frame, with no easing (easing on a tracked gesture is lag). Direct manipulation is the whole feeling of "fluid". Hysteresis: a swipe recogniser waits about 10 points of travel before committing to a direction (WWDC18), so a tap with a slight slide does not become a drag; a direction lock then holds that axis for the rest of the gesture (house value: lock when the angle of travel is within about 30 degrees of an axis). The element responds from the first frame; thresholds decide only the outcome at release (section 6.3, principle 8).

### 9.2 Velocity projection

At release the finger has a velocity. Where it would stop under scroll-view deceleration is the projected position, and the decision (snap open, snap closed, which corner) is made from the projection. The WWDC18 formula, as written in Gitter's code, is `projectedDistance = (velocity / 1000) * decelerationRate / (1 - decelerationRate)`, with velocity in points per second (hence the division by 1000 to points per millisecond) and `UIScrollView.DecelerationRate.normal` of 0.998 or `.fast` of 0.99. A flick at 1000 points per second projects 499 points at the normal rate and 99 points at the fast rate; a slow drag at 200 points per second projects 100 and 20. The reason the projection matters: a sheet dragged 30% open and released with a fast upward flick should open, and a sheet dragged 70% open and released with a downward flick should close. Position alone gets both wrong.

### 9.3 Rubber banding

Past an edge, content keeps following the finger with diminishing returns, so the user feels the boundary as resistance (squash and stretch in one of its two legitimate interface forms, with press scale, section 2). The formula that circulates from Apple's scroll view engineering and is reproduced in most open-source implementations is `offset = (1 - 1 / (x * c / d + 1)) * d`, where x is the distance pushed past the edge, d is the dimension of the scroll view on that axis and c is the resistance constant, usually given as 0.55 for UIScrollView. With c at 0.55, a finger that travels a full screen height past the edge moves the content about 0.35 of the height; a quarter screen moves it about 0.12. Gitter's demo uses the simpler `pow(offset, 0.7)` and reads almost the same. Above about c 0.7 the edge feels soft; below 0.4 it feels like a wall. On the web, native overscroll is the browser's and `overscroll-behavior: contain` stops it propagating to the page; custom rubber banding is only for custom draggable surfaces (a sheet, a carousel built on pointer events).

### 9.4 Snap points and detents

A sheet has resting positions (detents): iOS `UISheetPresentationController` (iOS 15) offers `.medium` and `.large`, with custom detents from iOS 16; web drawers define their own as fractions of height. Release logic: project the position (9.2), choose the nearest detent to the projection, and spring there with the release velocity carried in, so a hard flick arrives faster than a gentle one. Spring for the arrival: response 0.3 to 0.4s, damping 0.8 when there is momentum, 1.0 when there is none (Gitter's picture-in-picture demo uses damping 1, response 0.4 for the corner snap).

### 9.5 Interruptible springs and cancellation

Every gesture-driven animation must accept a new touch mid-flight: the finger lands, the spring stops where it is, tracking resumes from that position with no jump. On iOS `UIViewPropertyAnimator` and SwiftUI springs do this; on the web, Motion's `drag` with `dragMomentum`, or a hand-rolled spring that stores position and velocity in state. Cancellation: a drag released inside the cancel zone (less than about 25 to 30% of the travel and below a velocity of about 500 points per second) springs back to the origin; destructive outcomes (delete, dismiss unsaved work) commit only on release, so a user who changes their mind mid-gesture has the whole gesture to do so.

On the web the same model needs seven mechanics (W3C Pointer Events): `setPointerCapture(e.pointerId)` on `pointerdown`, so the drag continues outside the element; `touch-action: pan-y` on a horizontal drag surface, so vertical page scroll still works and the browser does not take the gesture (`none` only for free two-dimensional drag); `pointercancel` handled as a release with zero velocity; release velocity estimated from the pointer samples of the last 50 to 100ms, because the last event alone is noisy at 120Hz; touch and wheel listeners registered `{ passive: true }` unless they must call `preventDefault`; drag offsets applied through `transform` once per `requestAnimationFrame`; and `overscroll-behavior: contain` on the sheet's own scroller (section 9.3).

### 9.6 Sheet and drawer physics

The web reference for sheet feel is Vaul, Emil Kowalski's React drawer (first published July 2023; 1.1.2 on npm as of October 2026), which reproduces the iOS sheet: track 1:1 downward, resist upward drags past the top, dismiss when the drag passes 25% of the sheet's height (`closeThreshold` 0.25) or a release velocity above 0.4px per ms (400px per second), settle otherwise, backdrop opacity tied to sheet position so the two read as one object, and, with `shouldScaleBackground`, the page behind scaling to (viewport width minus 26px) over viewport width, about 0.93 on a 390px phone (the iOS 13 card modal). Its settle is a CSS transition of 500ms on `cubic-bezier(0.32, 0.72, 0, 1)`, the curve the web community uses for the iOS sheet. House values: open 350 to 400ms on the move curve or a spring at response 0.4 damping 1; dismiss by gesture on projection; dismiss by button 250ms ease-in; backdrop 0 to 0.4 opacity black on light pages, 0.6 on dark decks.

### 9.7 Swipe thresholds

| Swipe | Commit distance | Commit velocity | Settle |
|---|---|---|---|
| Swipe-to-reveal (list actions) | The first action reveals 1:1 to its full width, then rubber bands; a full-width swipe past about 60% of the row commits the primary action (Mail's archive) | No separate threshold: the 60% distance decides | Spring to the revealed width or back to rest |
| Swipe-to-dismiss (cards, notifications) | 30% of width | 500 points per second, whichever comes first | Off screen at the release velocity, on a decelerating curve driven by that velocity (a fixed duration makes a hard flick look slow) |
| Paging carousel | 20% of width | 300 points per second | Spring at damping 1; auto-advance never (section 16); in RTL the reveal side, dismiss direction and paging direction all mirror (section 5.9) |

## 10. Microinteractions

A microinteraction (Dan Saffer, Microinteractions, 2013) is a contained moment with a trigger, rules, feedback and loops. Its motion is feedback-only: the smallest, fastest move that confirms the state change. Where motion belongs on a screen is decided in 06-ui-design-craft.md, section 18; this section sets the values, each with the reason:

| Control | Motion | Numbers | Reason |
|---|---|---|---|
| Button press | Scale down uniformly, then release with ease-out; colour state layer crossfades | Scale 0.97 to 0.98; 50 to 80ms in (fast, the user caused it), 150 to 200ms release ease-out. State layer (a translucent overlay signalling hover, focus or press) 10% pressed (06-ui-design-craft.md, section 3). | Scale below 0.95 reads as a toy; above 0.985 is invisible. The release is slower than the press because the press must feel instant and the release carries the "letting go". |
| Toggle | Knob travels on one axis with ease-in-out; track colour crossfades | Knob 150 to 200ms; colour 150ms; never a bounce at the end | A toggle is binary; a bounce implies a third state. |
| Checkbox | Tick draws in (SVG `stroke-dashoffset`) or fades; box fill crossfades | Tick 150 to 200ms ease-out; fill 100ms | The draw tells the user which box changed in a column of boxes. |
| Radio and segmented control | The indicator slides between positions (FLIP) | 200 to 250ms on the move curve | A slide shows where the selection went; a crossfade loses that. |
| Text field focus | Border or underline colour and width change; label floats | 150ms; label 200ms ease-out | Fast, because focus happens hundreds of times a day. |
| Hover (pointer devices only) | One property changes: an underline, a 2% image scale, a colour | 150 to 200ms in, 100 to 150ms out, `ease`; gated by `@media (hover: hover) and (pointer: fine)` | A tap leaves `:hover` stuck on phones; hover intent for menus is in 10.2. |
| Accordion and disclosure | Panel height opens; content fades in after it; chevron rotates | Height 200 to 300ms on M3 standard (0.2, 0, 0, 1); content opacity 150ms, starting 50ms after the open begins; chevron 180 degrees on the height's duration; close at 0.7 of the open | Content must arrive after its container exists (section 5.1); implementation in 10.3. |
| Loader (indeterminate) | Appears only after a delay; rotates linearly | Show after 300ms; hide when done with a 100ms fade; rotation 1 to 1.2s per turn, linear (a mechanism) | A spinner for a 120ms request is a flash the user perceives as slowness that was not there. |
| Skeleton | Static placeholder, optional shimmer | Use when expected wait exceeds 1s; shimmer 1.5 to 2s cycle, low contrast (4 to 8% luminance difference); crossfade to content 200ms | Skeletons set an expectation of layout; a shimmer faster than 1.5s reads as anxiety. |
| Progress (determinate) | Bar advances with ease-out per update; never retreats | 200 to 300ms per step; minimum visible step 2% | A bar that jumps backward destroys trust in every later reading. |
| Pull to refresh | Rubber-banded pull; indicator appears at threshold; release springs the content back | Threshold about 60 to 80 points; release spring response 0.35, damping 1; indicator 300ms fade out on completion | The threshold must be reachable with the thumb in one motion and not so low that a scroll to top triggers it. |
| Like, save, favourite | Icon scales up and back with a short colour fill; a particle burst only on a low-frequency surface | Scale 1 to 1.2 to 1 over 300ms (ease-out up, ease-in-out back); fill 150ms | The overshoot is the one place the house allows scale past 1, because the action is emotional and infrequent. Twitter's 2015 heart (it replaced the star in November 2015) is the reference; the house version drops the burst. |
| Count and badge updates | New number enters from the direction of change (up for increment), old leaves opposite, clipped | 200ms; 12 to 16px travel; tabular figures (10.4) | Direction encodes the change; the user reads the delta without comparing numbers. |
| Toast | Enters from its edge with ease-out; exits ease-in | Enter 300 to 400ms; exit 200 to 250ms; auto-dismiss after 4 to 6s with the timer paused on hover | Enter slower than exit (section 4.2). Four seconds is the floor for a sentence to be read twice. |
| Tooltip | Fade and 4px rise after a hover delay | Delay 300 to 500ms; 120 to 150ms in; 80ms out | The delay prevents tooltips firing as the pointer crosses a toolbar. |

### 10.1 Pairing motion with haptics

On native, the frame of state change gets a haptic, and the motion and the haptic start on the same frame; a haptic that lands 50ms after the visual change feels like a second event. The vocabulary: iOS `UIImpactFeedbackGenerator` (styles light, medium, heavy, and from iOS 13 soft and rigid), `UISelectionFeedbackGenerator` (a tick for each detent crossed: pickers, segmented controls, snap points), `UINotificationFeedbackGenerator` (success, warning, error) and SwiftUI's `.sensoryFeedback(_:trigger:)` from iOS 17; Android `HapticFeedbackConstants` (CONFIRM, REJECT, CLOCK_TICK, LONG_PRESS and others) through `View.performHapticFeedback` or Compose's `LocalHapticFeedback`. Pairings: button press, light impact on touch down and nothing on release; toggle, a selection tick as the knob lands; detent crossing in a sheet, selection tick; destructive commit, a rigid impact; success state, the notification success pattern. Never a haptic on hover, scroll or animation that the user did not cause. The tactile cue is listed in the component state matrix in 06-ui-design-craft.md, section 3; the web has no haptics API worth using (the Vibration API is Android-only and ignored on iOS), so web microinteractions carry the whole weight visually.

### 10.2 Hover, hover intent and keyboard parity

Every hover animation sits inside `@media (hover: hover) and (pointer: fine)` (pointer queries: 06-ui-design-craft.md, section 16.2), because a tap on a phone leaves `:hover` applied until the next tap elsewhere; Motion's `whileHover` already ignores touch input. Hover changes one property, 150 to 200ms in and 100 to 150ms out on `ease`. Navigation and mega menus use hover intent: open after 100 to 150ms of rest over the trigger, close after 300 to 400ms of absence, and keep the submenu open while the pointer travels diagonally towards it. That last rule is the safe triangle from Ben Kamens's 2013 analysis of Amazon's mega dropdown: the menu holds while the cursor stays inside the triangle between its position and the submenu's near corners, which stops menus flickering as the cursor crosses the bar on its way. Keyboard parity: the same state appears on `:focus-visible` with no delay, because a keyboard user has already signalled intent.

### 10.3 Accordions and animating to height: auto

Accordions (product details, FAQs, filters) are the most frequent disclosure on luxury commerce pages, and the one layout animation the house accepts against section 6.3, principle 4, because the alternative, FLIP-ing every following sibling, costs more. So it stays under 300ms, opens one panel at a time, and is kept off lists longer than about 20 rows. Implementation as of October 2026 (MDN browser-compat-data 8.1.7): `interpolate-size: allow-keywords` on `:root` makes `height: auto` transition, in Chrome 129 and later only. The cross-browser method is a grid wrapper transitioning `grid-template-rows` from `0fr` to `1fr`, with the child at `min-height: 0; overflow: hidden`; grid tracks interpolate in Chrome 107, Safari 16 and Firefox 66. Native `<details>` exposes `::details-content` (Chrome 131, Safari 18.4, Firefox 143), but its height still needs `interpolate-size`, so outside Chrome animate opacity and a 4 to 8px translate on the content and let the height snap.

```css
.acc { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 250ms cubic-bezier(0.2, 0, 0, 1); }
.acc[data-open] { grid-template-rows: 1fr; }
.acc > .acc__inner { min-height: 0; overflow: hidden; }
@media (prefers-reduced-motion: reduce) { .acc { transition: none; } }   /* instant height; content keeps a 100ms fade */
```

### 10.4 Counters across scripts and currencies

A stepped counter (section 3.6) jitters unless its width is fixed. Set `font-variant-numeric: tabular-nums` so every digit has one width (06-ui-design-craft.md, section 7.3). Indian grouping (lakh and crore) through `Intl.NumberFormat('en-IN')` moves the commas as the number passes 1,00,000 and 1,00,00,000, so reserve the final width in `ch` units before animating, or step only the digits of the final formatted string. The rupee and dirham symbols stay still while the digits move. In Arabic interfaces decide Western or Arabic-Indic digits at the brief and keep them across the counter and the static copy (13-motion-graphics-and-3d-production.md, section 4.1). Under reduced motion, show the final value.

## 11. Reduced motion and accessibility

### 11.1 The preference

`prefers-reduced-motion: reduce` is the user's statement, set in the OS (iOS Settings, Accessibility, Motion, Reduce Motion; macOS Accessibility, Display; Android Settings, Accessibility, Remove animations (Android 9 and later), or the three animation scale settings in Developer options; Windows Settings, Accessibility, Visual effects, Animation effects). Browser support since Safari 10.1 (2017), Firefox 63, Chrome 74 (2019), so there is no browser excuse. It is a request to reduce, and the user who sets it still wants to know what changed; the failure modes are ignoring it (vestibular harm) and killing every transition (a page where state changes with no cue, which is a different accessibility failure). Many people with vestibular conditions never find the OS setting, which is why microsites also carry their own control (11.2).

### 11.2 Implementation

```css
/* Tokens carry the preference: every component inherits it */
:root { --dur-micro: 150ms; --dur-small: 250ms; --dur-large: 400ms; --travel: 16px; }
@media (prefers-reduced-motion: reduce) {
  :root { --dur-micro: 100ms; --dur-small: 150ms; --dur-large: 200ms; --travel: 0px; }
  .parallax, .marquee, .idle-loop { animation: none; transform: none; }
}
```

JavaScript: `matchMedia('(prefers-reduced-motion: reduce)').matches`, and listen for `change` because users toggle it mid-session. Motion: `useReducedMotion()` or `<MotionConfig reducedMotion="user">`, which drops transforms and keeps opacity automatically. GSAP: `gsap.matchMedia()` with a reduced-motion condition. Lenis: `respectReducedMotion` (default true). SwiftUI: `@Environment(\.accessibilityReduceMotion)`; UIKit `UIAccessibility.isReduceMotionEnabled`; Android reads the animator duration scale (`Settings.Global.ANIMATOR_DURATION_SCALE`, 0 when animations are removed). The blanket reset that sets every `animation-duration` to 0.01ms belongs only on legacy pages, as a fallback; it also breaks any logic that waits on `transitionend`.

Two positions are argued. Override-in-reduce, the house tokens above: full motion is the default and the `reduce` query strips it. No-motion-first (Tatiana Mac, prefers-reduced-motion: Taking a no-motion-first approach to animations, 2021): decorative motion lives inside `@media (prefers-reduced-motion: no-preference)`, so the default, and any context where the query fails, is still; her premise is that animation is an enhancement. The house uses both: tokens for feedback motion, which must survive in reduced form, and no-motion-first for every decorative loop, parallax layer and scroll scene, which must vanish when the preference is unknown. Microsites add a visible "Reduce motion" toggle that sets a class on the root and persists in `localStorage`. Testing: Chrome DevTools, Rendering, "Emulate CSS media feature prefers-reduced-motion"; in visual regression, Playwright's `page.emulateMedia({ reducedMotion: 'reduce' })`.

### 11.3 What to keep and what to remove

| Keep (safe) | Remove or replace |
|---|---|
| Opacity crossfades under 200ms | Parallax, any layer moving at a different rate from scroll |
| Colour and border changes | Zoom and scale transitions larger than about 5% (iOS 7's zoom was the case that made Apple add the setting in 2013) |
| Small translations under about 8px, or none | Large travel: full-screen slides, elements crossing more than about a third of the viewport |
| Determinate progress | Autoplaying video and ambient loops (pause them; provide the poster) |
| Focus rings and state layers | Scroll-jacking, smooth scroll libraries (Lenis disables itself), snap-driven narratives (serve the release layout) |
| A single stagger collapsed to one fade | Infinite marquees, idle "breathing" loops, cursor followers, hover lifts |

Val Head's triggers (A List Apart, 2015): large relative movement across the screen, exaggerated parallax, scroll-jacked backgrounds, motion against or unlinked from the scroll direction, and large perceived distance covered quickly; opacity, colour and blur changes are low risk. Apple's visionOS guidance adds a number: avoid sustained oscillation near 0.2Hz (one cycle every 5 seconds), the frequency people are most sensitive to, which rules out the slow "floating" idle loops on hero imagery.

### 11.4 The standards

WCAG 2.2 (Web Content Accessibility Guidelines, W3C Recommendation): 2.2.2 Pause, Stop, Hide (Level A) applies to anything that moves, blinks or scrolls automatically for more than 5 seconds and requires a way to pause it (carousels, marquees, ambient video); 2.3.1 Three Flashes or Below Threshold (Level A) caps flashing at three per second; 2.3.3 Animation from Interactions (Level AAA) requires that motion triggered by interaction can be disabled unless essential, and names parallax explicitly. The house treats 2.3.3 as a floor on every luxury site, because the audience is older and wealthier than the web average and vestibular sensitivity rises with age. The vestibular safety numbers, the testing method and the Indian and UAE accessibility obligations (India's Rights of Persons with Disabilities Act 2016 and the Guidelines for Indian Government Websites, GIGW; the UAE's Federal Law No. 29 of 2006 and the digital accessibility policy of the Telecommunications and Digital Government Regulatory Authority, TDRA) are in 11-accessibility-and-inclusive-design.md, section 7 (vestibular safety) and section 14 (law); this file sets the motion values.

## 12. Performance

### 12.1 The pixel pipeline and what each property costs

A frame passes through style (which rules apply), layout (where every box goes), paint (filling pixels into layers) and composite (placing layers on screen, on the GPU). A property's cost is which stage it re-enters:

| Property changed | Stages re-run | Cost per frame | Verdict |
|---|---|---|---|
| `transform`, `opacity` | Composite only | Microseconds on the GPU; runs off the main thread even when script is busy | The only two properties to animate continuously |
| `filter`, `backdrop-filter` | Composite (GPU) but each frame re-renders the effect over its area | A full-screen blur at 20px radius costs milliseconds on mobile; backdrop blur on a scrolling surface is the single most common cause of jank (dropped or late frames, seen as stutter) on luxury sites | Animate once, briefly, on a small area; never under scroll |
| `clip-path`, `mask` | Paint or composite depending on the engine | Cheap on simple shapes, expensive on large images | Acceptable for reveals of one element |
| `color`, `background-color`, `box-shadow`, `border` | Paint | Repaints the element's layer; shadow blur repaints a larger area | Fine for micro durations on small elements; a 400px card with an animated 40px shadow is a repaint of 230,000 pixels per frame |
| `width`, `height`, `top`, `left`, `margin`, `padding`, `font-size` | Layout, paint, composite | Layout of the element and often its ancestors and siblings; a list of 50 items relaid 60 times a second | Never animate directly; use FLIP (section 5.4) |
| Reading `offsetWidth`, `getBoundingClientRect()` after a write | Forces synchronous layout | Layout thrash: each read in a loop forces a full layout | Batch all reads, then all writes |

### 12.2 GPU layers and memory

A composited layer is a bitmap in GPU memory: width times height times 4 bytes. A full-screen layer on a 1440 by 3200 phone is 18.4MB; ten of them exhaust the budget on a mid-range device and the browser starts dropping layers, which causes repaint flashes. The browser promotes an element to its own layer for 3D transforms, `will-change`, video, canvas, and elements composited above a layer. Count layers in DevTools (Layers panel, or Rendering, Layer borders). Rule: fewer than ten promoted layers on screen at once; one for the active scene's moving element, one for a fixed header, one for the sheet.

### 12.3 will-change discipline

`will-change: transform` tells the browser to promote the element in advance so the first frame of an animation does not pay for layer creation. It is a reservation of memory, so it is set before an animation (on hover intent, on scene enter, a frame ahead) and removed after; a stylesheet that puts `will-change` on every card or every section is slower than one with none, because the memory and the compositing work are paid every frame for elements that never move. Never set it on `*`, never leave it on after the move, never use it as a "GPU acceleration" incantation.

### 12.4 Diagnosing jank

The Chrome DevTools Performance panel (as of October 2026) records a trace with CPU throttling presets (4x for a mid-range phone, 20x for the slowest; custom presets can be calibrated to a device), shows the frames track (each frame coloured by whether it hit the budget), long tasks (any main-thread task over 50ms, the threshold in Google's RAIL model of Response, Animation, Idle and Load), the Interactions tab with INP (Interaction to Next Paint; good is under 200ms) broken into input delay, processing and presentation delay, and the Layout shifts tab with each shift's elements and score. The Animations panel inspects and slows running CSS and Web Animations API (WAAPI) animations (25% and 10% speed) to check curves by eye. The Rendering tab's Paint flashing shows every repaint in green; a scroll that lights up the whole page is a paint-bound animation. The method: record a scroll through the scene at 4x throttling, find the red frames, click one, read the bottom-up list for the function or the style recalc that owns it. Measure on a real mid-range Android (a Redmi or Samsung A series, the modal phone in Mumbai and Sharjah) before calling anything done; a trace on an M-series Mac proves nothing.

### 12.5 Mobile budgets

Per frame at 60Hz, after the browser's own work: about 8 to 10ms for script, style and layout, which is one `IntersectionObserver` callback or one ScrollTrigger tick; a React render does not fit. Per page: one smooth-scroll loop, one scroll-linked scene active at a time (kill the others with `ScrollTrigger` ranges or `animation-range`), no more than three simultaneous tweens on a phone, no `backdrop-filter` on scrolling surfaces, video under 1080p for hero loops with `playsinline muted loop` and a poster, and total motion JavaScript under about 55KB gzipped (section 7.1). Battery is a budget too: a 60fps idle loop on a hero image runs the GPU continuously; stop every loop when the tab is hidden (`visibilitychange`) and when the element leaves the viewport.

### 12.6 Lottie versus CSS versus video versus Rive: the cost comparison

Sizes measured from the published packages, October 2026, gzipped unless stated. The production side of each format is in 13-motion-graphics-and-3d-production.md, section 9.

| Approach | Runtime cost (download) | Per-frame cost | Right for | Wrong for |
|---|---|---|---|---|
| CSS transitions and keyframes, WAAPI | 0 | Compositor only when limited to transform and opacity | Every interface transition; reveals; logo idle loops built from SVG parts | Complex character or illustrative animation; anything a designer must iterate in After Effects |
| GSAP 3.15 | Core 28KB; ScrollTrigger 18KB; Flip 10KB; ScrollSmoother 5.5KB (measured from the 3.15.0 minified builds) | Main-thread JS per frame, batched well; transform-only tweens still composite | Scroll narratives, choreographed timelines, pinned scenes | A product UI where CSS or Motion already suffices |
| Motion (React) 14 | About 43KB for the `motion` component (Motion's own figure); about 5KB initial with `LazyMotion` and `m`, plus 24KB (`domAnimation`) or 38KB (`domMax`, needed for drag and layout); `useAnimate` mini 3.3KB | Hybrid: uses WAAPI and compositor where it can, JS where it must (springs, layout) | React product UI, layout and presence animation | Static marketing sites without React |
| Lenis 1.3 | 5.4KB | One lerp per frame | Smooth scroll on narratives | Stores, apps, anything read |
| Lottie (lottie-web 5.13) | Full player 76KB; light (SVG only) 46KB; canvas renderer 68KB; plus the JSON (keep under 100KB, 13-motion-graphics-and-3d-production.md, sections 6 and 9.5) | SVG renderer creates a DOM node per shape and repaints vectors every frame; a 300-layer animation is a 300-element DOM animating; canvas renderer rasterises each frame on the CPU | Icon and logo animation designed in After Effects, 1 to 3 on a page, small on screen | Full-screen hero animation; anything with blur, gradients, mattes or more than a few hundred shapes; anything that must respond to input |
| dotLottie (dotlottie-web 0.81) | 33KB JS plus a WebAssembly (WASM) renderer of about 496KB gzipped (1.24MB raw), loaded once | Renders in WASM through ThorVG (an open-source vector renderer) to canvas; consistent across platforms; the `.lottie` container zips several animations, themes and state machines with shared assets | Many Lotties on one page or app; themed (dark mode) variants; interactive state machines | A single small icon, where the WASM download is larger than the benefit |
| Rive (@rive-app/canvas 2.49) | JS plus a WASM runtime fetched once: canvas 149KB plus 912KB (2.2MB raw WASM); canvas-lite, which drops Rive Text and Rive Audio, 119KB plus 340KB; webgl2 144KB plus 974KB (measured from the 2.49.0 packages) | Its own renderer; state machines and data binding run inside; cheaper than Lottie per layer at the same complexity, more expensive to download | Interactive characters, animated UI that reacts to input and data, app onboarding, games | A page with one static reveal |
| WebGL (three.js 0.186, OGL 1.0, Spline runtime 2.0) | three.js about 133KB for a minimal scene (renderer, scene, camera, one mesh with a standard material) and about 189KB for the whole namespace; OGL about 39KB for the whole library; Spline's standalone runtime builds 494 to 909KB, plus WebAssembly modules loaded on demand (bundled and minified from the npm packages) | GPU fragment cost scales with pixel count, so cap `devicePixelRatio` at 1.5 to 2; the scene graph still runs on the main thread | One interactive 3D or shader peak on a microsite (13-motion-graphics-and-3d-production.md, sections 9.2 and 9.3); OGL for a single shader plane | Anything a video or an image sequence (section 7.11) can show |
| Video (H.264, H.265, AV1) | 0 runtime; the file (a 10s 1080p loop at 4 to 8Mbps is 5 to 10MB; AV1 at about half) | Hardware decode, nearly free per pixel; the cheapest way to move photographic pixels | Photographic motion, grain, light, anything rendered in a 3D package | Anything that must be crisp at every size, respond to input, or change with theme; text |

Rule of choice: pixels that look like film are video; shapes that respond are Rive; shapes that only play are Lottie, small; a product that must turn under the pointer is WebGL; everything else is CSS or the motion library already on the page.

### 12.7 Motion and Core Web Vitals

Clients' SEO teams measure Core Web Vitals (thresholds in 21-web-design-and-digital-craft.md, section 5.1), and motion moves all three.

- Largest Contentful Paint (LCP): Chrome does not count an element at opacity 0 as painted, so fading in the hero image, usually the LCP element, delays LCP by the fade's start. The hero is at full opacity on first paint; reveal a secondary element instead (section 7.10).
- Cumulative Layout Shift (CLS; good is 0.1 or less): animating `top`, `height` or `margin` produces layout shifts that count; transform-based movement is exempt.
- Interaction to Next Paint (INP; good is under 200ms): animation work started inside a click handler inflates it. Start the visual response first and defer the work with `requestAnimationFrame` or `scheduler.yield()` (Chrome 129, Firefox 142).
- Field diagnosis: the Long Animation Frames API (Chrome 123; a `PerformanceObserver` of type `long-animation-frame`) attributes slow frames to scripts in real-user data; Lighthouse's "Avoid non-composited animations" audit lists animations the compositor cannot run alone.

The slow push on still hero photography (the Ken Burns move) fits all three: scale 1.0 to 1.05 over 12 to 20s, linear or sine, transform only, one image at a time, off under reduced motion; above 1.08 it reads as a slideshow. Video autoplay and Low Power Mode are in 21-web-design-and-digital-craft.md, section 4.5.

### 12.8 Frame-rate independence

Hand-rolled per-frame motion (lerped followers, inertia, custom springs) written as `x += (target - x) * 0.1` per frame is frame-rate dependent: on the 120Hz displays of section 1.3 it runs twice as fast. Write it against elapsed time: `x += (target - x) * (1 - Math.exp(-λ * dt))`, with dt in seconds and λ = 6 for the feel of 0.1 at 60Hz. Lenis 1.3.27 does exactly this (`damp(value, to, lerp * 60, deltaTime)` in its source). Integrate custom springs with a fixed timestep of 1/120s and an accumulator, so the physics is identical on every display. On iPhone, a custom `CADisplayLink` animation is capped at 60Hz unless the Info.plist sets `CADisableMinimumFrameDurationOnPhone` to YES and the link sets `preferredFrameRateRange`; system and Core Animation springs already adapt.

## 13. Implementation reference

Versions are the npm or platform releases current in October 2026. Every snippet uses the house curves from section 3.5 and the reduced-motion tokens from section 11.2. Browser support for the CSS and DOM features is collected in 13.11.

### 13.1 CSS transitions and keyframes

```css
:root {
  --ease-reveal: cubic-bezier(0.16, 1, 0.3, 1);   /* expo out */
  --ease-enter:  cubic-bezier(0.22, 1, 0.36, 1);  /* quint out */
  --ease-exit:   cubic-bezier(0.4, 0, 1, 1);
  --ease-move:   cubic-bezier(0.2, 0, 0, 1);      /* M3 standard */
}
.panel { transition: transform var(--dur-large) var(--ease-enter), opacity var(--dur-small) ease; }
.panel.is-closing { transition-timing-function: var(--ease-exit); transition-duration: calc(var(--dur-large) * 0.7); }   /* a state class: [hidden] is display: none at once and skips the exit */
.hero-image { animation: reveal 900ms var(--ease-reveal) both; }
@keyframes reveal { from { opacity: 0; transform: translateY(var(--travel)) scale(1.02); } }
```

A transition is interruptible by nature: changing the target mid-flight retargets from the current computed value with no hitch (section 3.11). Prefer `transition` for state changes and `@keyframes` only for entrances with more than two keyframes or for loops. `transition-behavior: allow-discrete` with `@starting-style` (Chrome 117, Safari 17.5, Firefox 129) animates `display: none` entrances without JavaScript, which is how a native `<dialog>` or `popover` fades in. Firefox's support is partial (MDN, October 2026): `@starting-style` works but the `display` transition does not, so there the element appears without the exit fade, an acceptable fallback.

Four newer primitives make house motion cheaper and correct:

- `@property` registers a custom property with a type so it interpolates: a gradient angle, a counter through `counter-reset` with an `<integer>` property, a separate curve per axis.
- The individual transform properties `translate`, `rotate` and `scale` compose: a press `scale: 0.98` sits on top of an entrance `translate` instead of overwriting the `transform` shorthand.
- `sibling-index()` gives CSS-only stagger with the cap of section 4.5 in one line: `transition-delay: calc(min(sibling-index(), 8) * 40ms)`.
- `linear()` runs a spring as an easing. Below is the house UI spring (response 0.4s, ζ 1) sampled every 30ms over 600ms from x(t) = 1 - (1 + ω0 t) e^(-ω0 t), with ω0 = 2π / 0.4; it reaches 99.9% at about 588ms. Generate other springs at build time; Jake Archibald's linear() easing generator does this. A `linear()` spring has a fixed duration, so it serves enters and exits, and gestures keep a real spring (section 3.11).

```css
:root { --spring-ui: linear(0, 0.082, 0.243, 0.413, 0.562, 0.682, 0.774, 0.841, 0.89, 0.925, 0.949, 0.965, 0.977, 0.984, 0.99, 0.993, 0.995, 0.997, 0.998, 0.999, 1); }
.sheet { transition: translate 600ms var(--spring-ui); }
```

### 13.2 Web Animations API

```js
const anim = el.animate(
  [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
  { duration: 400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
);
await anim.finished;           // a promise; chain the next step here
anim.commitStyles(); anim.cancel();   // write the end state to inline style, free the animation
```

`Element.animate()` runs on the compositor for transform and opacity, exposes `playbackRate`, `currentTime`, `pause()` and `reverse()`, and accepts `composite: 'add'` so two animations on the same property combine instead of overwriting (a hover scale on top of an entrance). It is the engine beneath Motion and the right choice when the page has no library and CSS cannot express the sequence.

### 13.3 GSAP 3

GSAP 3.15.0 (13 April 2026). Webflow acquired GreenSock in October 2024 and GSAP 3.13 (published to npm on 30 April 2025) made the whole toolset, including the former Club plugins (SplitText, MorphSVG, ScrollSmoother, Flip and the rest), free for commercial use. The core ideas: a tween animates properties over time; a timeline sequences tweens with position parameters; plugins extend the targets.

```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(ScrollTrigger, Flip);
gsap.defaults({ ease: 'expo.out', duration: 0.8 });

// Choreographed reveal: container, then content, one stagger
const tl = gsap.timeline({ scrollTrigger: { trigger: '.chapter', start: 'top 70%', once: true } });
tl.from('.chapter__image', { y: 24, opacity: 0, duration: 0.9 })
  .from('.chapter__line', { y: 12, opacity: 0, duration: 0.5, stagger: 0.04 }, '-=0.6'); // 40ms stagger, overlaps the image

// Pinned, scrubbed hold: 150vh of scroll drives the sequence
gsap.timeline({ scrollTrigger: { trigger: '.hold', start: 'top top', end: '+=150%', pin: true, scrub: 0.8, anticipatePin: 1 } })
  .to('.hold__product', { rotate: 90, ease: 'none' })      // linear under scrub: the finger is the easing
  .to('.hold__caption', { opacity: 1, ease: 'none' }, '<0.5');

// Flip: grid to detail
const state = Flip.getState('.card, .card__image');
container.classList.add('is-detail');
Flip.from(state, { duration: 0.45, ease: 'power3.inOut', scale: true, nested: true, absolute: '.card' });
```

Reduced motion with `gsap.matchMedia()`: define the animations inside `mm.add('(prefers-reduced-motion: no-preference)', () => { ... })` and the reduced branch sets end states with `gsap.set`. GSAP's named eases map to section 3.4: `power2` is quad, `power3` cubic, `power4` quart, `expo`, `circ`, `back`, `elastic`, `bounce`; `expo.out` is the house reveal.

SplitText was rewritten for 3.13. In 3.15.0 it segments characters with `Intl.Segmenter` grapheme clusters (a grapheme cluster is what a reader sees as one character, such as a consonant with its vowel sign) and wraps each piece in an `inline-block` element. By default (`aria: 'auto'`) it puts an `aria-label` on the parent and `aria-hidden` on the pieces, so screen readers read words; `mask: 'lines'` clips each line for a line reveal; `autoSplit: true` with an `onSplit()` callback re-splits after fonts load and on resize, without which line splits break when the webfont swaps. Which scripts may be split, and how far, is in section 14.1.

### 13.4 Motion (formerly Framer Motion)

Motion 14 (14.7.1 on npm, 27 October 2026), imported from `motion/react`; the Framer Motion name survives as a compatibility package. Three capabilities justify its weight (section 12.6): declarative springs with velocity carried across interruptions, `layout` animations (FLIP on any layout change) with `layoutId` for shared elements, and `AnimatePresence` for exit animations, which React cannot otherwise express because the element is already gone.

```jsx
import { motion, AnimatePresence, MotionConfig } from 'motion/react';

// spring.ui: response 0.4s, damping ratio 1 (section 3.10); Motion's visualDuration is response / 1.2
const houseSpring = { type: 'spring', visualDuration: 0.333, bounce: 0 };
export function Gallery({ items, selected, onSelect }) {
  return (
    <MotionConfig reducedMotion="user" transition={houseSpring}>
      <ul>{items.map((it) => (
        <motion.li key={it.id} layout layoutId={`card-${it.id}`} onClick={() => onSelect(it)} whileTap={{ scale: 0.98 }}>
          <motion.img src={it.src} alt={it.alt} whileHover={{ scale: 1.02 }} />   {/* the image scales; the card stays put */}
        </motion.li>
      ))}</ul>
      <AnimatePresence mode="wait">
        {selected && (
          <motion.article key={selected.id} layoutId={`card-${selected.id}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }} />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
```

Rules: `key` is what AnimatePresence tracks, so lists need stable ids; `mode="wait"` sequences exit then enter (a route change), `mode="popLayout"` takes exiting items out of flow so siblings reflow immediately (lists); with no transition in scope Motion animates x, y and rotate on an underdamped spring (section 3.8), so every project sets the house spring on a `<MotionConfig>` at the app root and code review rejects any `animate` or `layout` prop with no house transition in scope; setting `stiffness`, `damping` or `mass` overrides `bounce` and `duration`, so pick one vocabulary per project. The house writes `visualDuration` and `bounce`, converted from the canonical response: Motion's `visualDuration` is Apple's response divided by 1.2 (section 3.10).

### 13.5 React Spring

`@react-spring/web` 10.1 (October 2026). Hooks (`useSpring`, `useSprings`, `useTrail`, `useTransition`, `useChain`) return animated values that bypass React rendering, so a spring updating 60 times a second does not re-render the tree. Config: `{ tension, friction, mass }` or a preset (`config.default` 170/26, `gentle` 120/14, `stiff` 210/20, `slow` 280/60; section 3.8); `clamp: true` removes overshoot. Its strength is physics on many elements (a trail of 20 items with inherited velocity); its cost is a second mental model next to Motion, so a project uses one or the other.

### 13.6 Rive

Rive is an editor and a runtime (`@rive-app/canvas` 2.49, with React, iOS, Android, Flutter and Unity runtimes). A state machine is a graph of animations with inputs (number, boolean, trigger), transitions with conditions and blend states; listeners map pointer events to inputs inside the file, so a button's hover and press states ship in the asset. Data binding (announced 15 April 2025) adds view models: typed properties (number, string, boolean, colour, enum, trigger, and from 17 July 2025 lists, images and artboards) that the runtime sets and the file reacts to, so a price, a name or a swatch updates the animation without a transition per value.

```js
import { Rive, Fit, Layout } from '@rive-app/canvas';
const r = new Rive({ src: '/mark.riv', canvas, autoplay: true, stateMachines: 'Idle', autoBind: true,
  layout: new Layout({ fit: Fit.Contain }),
  onLoad: () => { r.resizeDrawingSurfaceToCanvas(); const p = r.viewModelInstance?.number('progress'); if (p) p.value = 0.42; } });
```

Rive is the right tool when the animation must respond (a configurator, an onboarding character, a live progress mark) and the wrong one for a reveal that plays once.

### 13.7 Lottie and dotLottie

Lottie is After Effects vector animation exported as JSON by the Bodymovin plugin and played by lottie-web (renderers `svg`, `canvas`, `html`) or the dotLottie players. The `.lottie` container (dotLottie, open format from LottieFiles) zips one or more animations with shared assets, themes and state machines. Production rules from 13-motion-graphics-and-3d-production.md, sections 6 and 9.5: under 100KB, no effects that Bodymovin cannot export (most blurs, mattes with gradients, expressions unless baked), test in the LottieFiles player before handoff.

```html
<script type="module">
import { DotLottie } from 'https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.81.0/+esm';
const player = new DotLottie({ canvas: document.querySelector('#mark'), src: '/mark.lottie', autoplay: true, loop: false });
matchMedia('(prefers-reduced-motion: reduce)').matches && player.setFrame(player.totalFrames - 1); // the lock frame: the final frame, identical to the static mark
</script>
```

### 13.8 SwiftUI

```swift
// Implicit, tied to a value
.animation(.smooth(duration: 0.35), value: isOpen)
// Explicit
withAnimation(.spring(duration: 0.4, bounce: 0)) { isOpen.toggle() }
// Presets (iOS 17): .smooth (bounce 0), .snappy (0.15), .bouncy (0.3); extraBounce: adds to each
// Phase animation (iOS 17): cycle through discrete states
Image(systemName: "bell").phaseAnimator([false, true], trigger: rang) { view, phase in
  view.rotationEffect(.degrees(phase ? 12 : 0))
} animation: { _ in .snappy(duration: 0.25) }
// Keyframe animation (iOS 17): tracks per property, each with its own keyframes and curves
.keyframeAnimator(initialValue: Pose(), trigger: play) { view, pose in
  view.scaleEffect(pose.scale).offset(y: pose.y)
} keyframes: { _ in
  KeyframeTrack(\.scale) { SpringKeyframe(1.04, duration: 0.3, spring: .smooth); CubicKeyframe(1.0, duration: 0.4) }
  KeyframeTrack(\.y)     { LinearKeyframe(-8, duration: 0.3); SpringKeyframe(0, duration: 0.4, spring: .bouncy) }
}
// Shared element: matchedGeometryEffect(id:in:); zoom navigation (iOS 18): .navigationTransition(.zoom(sourceID:in:))
```

Since iOS 17 a bare `withAnimation { }` uses `Animation.default`, which Apple documents as `spring(response: 0.55, dampingFraction: 1.0, blendDuration: 0)` (it was an ease-in-out before iOS 17), so an unspecified animation is already a critically damped spring, at a slower pace than the house 0.4. While a finger tracks, use `.interactiveSpring(response: 0.15, dampingFraction: 0.86, blendDuration: 0.25)` (the documented defaults): the short response keeps it effectively 1:1 (section 9.1) and `blendDuration` hands the velocity on to the release spring. Liquid Glass shapes that should morph together (section 6.4) sit in one `GlassEffectContainer(spacing:)`, each with `.glassEffect()` and `.glassEffectID(_:in:)` on a `@Namespace`. `phaseAnimator` and `keyframeAnimator` are iOS 17, macOS 14 and visionOS 1 (Apple developer documentation). Transactions carry animation through state; `.transaction { $0.animation = nil }` kills an inherited animation on a subtree. Apple's HIG motion page (updated 9 September 2025 for Liquid Glass) is the behavioural contract: purposeful, optional, brief and precise, cancellable, and sparing on frequent interactions; system components already animate and should not be re-animated.

### 13.9 Jetpack Compose

High-level first: `AnimatedVisibility` (enter and exit with `fadeIn`, `slideInVertically`, `expandVertically`), `AnimatedContent` (crossfade or custom transition between states, with `SizeTransform`), `Modifier.animateContentSize()`, `animate*AsState` (`animateFloatAsState`, `animateColorAsState`, `animateDpAsState`) for single values, `updateTransition` for several values that must move together, `Animatable` for gesture-driven springs with velocity, and `Modifier.animateItem()` in lazy lists for reorder. Specs: `spring(dampingRatio, stiffness)` with the constants in section 3.8, `tween(durationMillis, easing)` with `CubicBezierEasing`, `keyframes { }`, `repeatable`, `infiniteRepeatable`. Material 3 Expressive exposes the six scheme springs through `MaterialTheme.motionScheme` (`defaultSpatialSpec()`, `fastEffectsSpec()` and so on) so components inherit the house scheme (standard, section 3.9) from the theme. `SharedTransitionLayout` with `sharedElement` and `sharedBounds` is stable in Compose 1.10 (December 2025).

```kotlin
val scale by animateFloatAsState(if (pressed) 0.98f else 1f, MaterialTheme.motionScheme.fastSpatialSpec(), label = "press")
AnimatedVisibility(visible, enter = fadeIn(tween(250)) + slideInVertically { it / 8 }, exit = fadeOut(tween(180))) { Sheet() }
// Android 16 predictive back: the exit follows the gesture's progress (0 to 1) and commits on release
PredictiveBackHandler(enabled = open) { progress: Flow<BackEventCompat> ->
  try { progress.collect { e -> exitProgress = e.progress }; onDismiss() }
  catch (e: CancellationException) { exitProgress = 0f; throw e }   // the user changed their mind
}
```

### 13.10 Flutter basics

Implicit widgets (`AnimatedContainer`, `AnimatedOpacity`, `AnimatedPositioned`, `AnimatedSwitcher`, and `TweenAnimationBuilder` for anything else) animate when their parameters change, with `duration` and `curve` (`Curves.easeOutExpo`, `Curves.easeOutQuint` match section 3.4). Explicit animation uses an `AnimationController(duration:, vsync:)`, a `Tween` (`ColorTween`, `IntTween`, `TweenSequence`) and `CurvedAnimation`, consumed by `AnimatedBuilder` or `AnimatedWidget`; physics come from `controller.animateWith(SpringSimulation(SpringDescription.withDampingRatio(mass: 1, stiffness: 400, ratio: 1), start, end, velocity))`. `Hero` handles shared elements across routes; `AnimatedList` handles insertion and removal. The `flutter_animate` package gives a chainable `.animate().fadeIn().slideY()` syntax; the `rive` package (0.14, now on the native C++ runtime) and the `lottie` package play the two asset formats.

### 13.11 Browser support for motion features, October 2026

From MDN browser-compat-data 8.1.7 (22 October 2026); the first stable version of each engine. "No" means not shipped in a stable release.

| Feature | Chrome | Safari | Firefox | House use |
|---|---|---|---|---|
| `prefers-reduced-motion` | 74 | 10.1 | 63 | Everywhere (section 11) |
| Web Animations API, `Element.animate()` | 36 | 13.1 | 48 | Sequences without a library (13.2) |
| Individual transforms: `translate`, `rotate`, `scale` | 104 | 14.1 | 72 | Composable press and entrance (13.1) |
| `@property` | 85 | 16.4 | 128 | Interpolable custom properties (13.1) |
| `:dir()` | 120 | 16.4 | 49 | The RTL direction token (5.9) |
| `grid-template-rows` interpolation | 107 | 16 | 66 | Cross-browser accordion (10.3) |
| `interpolate-size` | 129 | No | No | `height: auto` in Chrome only (10.3) |
| `::details-content` | 131 | 18.4 | 143 | Native disclosure (10.3) |
| `linear()` easing | 113 | 17.2 | 112 | Springs in CSS (13.1) |
| `@starting-style` | 117 | 17.5 | 129 | Entry from `display: none` (13.1) |
| `transition-behavior: allow-discrete` | 117 | 17.4 | 129, partial | Exit to `display: none` (13.1) |
| `sibling-index()` | 138 | 26.2 | 154 | CSS-only stagger (4.5) |
| Scroll-driven animations (`animation-timeline`, `animation-range`) | 115 | 26 | 159 | Scrubbed reveals (7.2) |
| `scrollend` event | 114 | 26.2 | 109 | Settle logic after scroll (7.3) |
| `animation-trigger`, `timeline-trigger` | 146 | No | No | Enhancement only (7.3) |
| `::scroll-marker`, `::scroll-button()` | 135 | No | No | Enhancement only (7.5) |
| `scrollsnapchange`, `scrollsnapchanging` | 129 | No | No | Enhancement only (7.3) |
| Scroll-state container queries | 133 | No | No | Enhancement only (7.3) |
| Same-document view transitions | 111 | 18 | 144 | Route changes in one document (8.1) |
| `view-transition-class` | 125 | 18.2 | 144 | One rule for many names (8.1) |
| View transition types | 125 | 18.2 | 147 | Forward and back choreography (8.1) |
| Cross-document view transitions (`@view-transition`) | 126 | 18.2 | No | Multi-page sites and Shopify (8.2) |
| `<link rel="expect">` | 124 | 18.2 | No | Shared element present at capture (8.2) |
| Speculation Rules | 109 | 26.2, behind a flag | Preview only | Prerender before the transition (8.2) |
| `Element.startViewTransition()` (scoped) | 147 | No | No | Enhancement only (8.1) |
| `view-transition-group` | 140 | No | No | Enhancement only (8.1) |
| Long Animation Frames API | 123 | No | No | Field diagnosis (12.7) |
| `scheduler.yield()` | 129 | No | 142 | Splitting work after an interaction (12.7) |

## 14. Motion in brand identity

### 14.1 Kinetic and performative type

Kinetic type is type that moves; performative type is type that behaves, responding to sound, data, input or time by rules, so the identity is a system that performs anew each time it runs. The reference studio is Studio Dumbar/DEPT (Rotterdam, founded by Gert Dumbar in 1977; creative director Liza Enebeis), whose work for Alzheimer Nederland, Amsterdam Sinfonietta, NN North Sea Jazz Festival, Instagram and the Utah Jazz ("brand in motion") treats the logotype's distortion, rhythm or assembly as the identity's primary expression, and whose DEMO Design in Motion Festival (Amsterdam Centraal 2019, across the Netherlands 2022, a cities edition in 2025, the next announced for 28 January 2027) shows motion work on public digital screens for 24 hours. design-taste, section 6, lists kinetic, performative type as rising in 2026; the craft of making moving type readable (0.4 to 0.6 seconds per word, hold before move) is in 13-motion-graphics-and-3d-production.md, section 4, and the type side in 03-typography.md, sections 13 and 15. The house use: one performative behaviour per identity (a wordmark that breathes with the room's sound at an event; letterforms whose weight follows the time of day on a hotel site), defined as a rule with parameters, so it can be rebuilt in After Effects, in Rive and in code and remain the same identity.

- Across scripts, on the web, Arabic animates by word or by line: a letter wrapped in its own `inline-block` (what SplitText and most split libraries produce, section 13.3) loses contextual joining and renders in its isolated form.
- Devanagari split by grapheme keeps a consonant with its matra (the attached vowel sign) but cuts the shirorekha (the headline stroke that joins the letters of a word) between clusters, and conjuncts may separate depending on the browser's Unicode support, so Hindi also animates by word or line. No script with a headline stroke or joining gets vertically offset letters.
- Bilingual lockups: in film supers each script needs its own reading time, so 13-motion-graphics-and-3d-production.md, section 4.1, staggers them by 8 to 12 frames; on a page both lines are readable at rest, so they arrive together on one curve with baselines locked, and staggering one script after the other is reserved for work where translation is the concept.
- Variable-font axes (`wght`, `wdth`, `opsz` through `font-variation-settings` or `font-weight`) re-lay-out the text on every frame of an animation, so axis motion stays on display lines of about 30 characters or fewer and is off under reduced motion (03-typography.md, section 10.4).

### 14.2 Logo animation anatomy

Five states, each a decision: reveal (0.8 to 1.5s, the mark built from its own construction), hold (1 to 2s, the lock frame, pixel-identical to the static mark), idle (an optional loop of 1 to 2% scale or a 4 to 8s drift for screens that stay on), transition (how the mark hands over to the next scene, usually by holding while the ground changes) and exit (0.3 to 0.6s, faster than the reveal, because leaving slowly reads as reluctance). Production numbers, deliverables and sound sync are in 13-motion-graphics-and-3d-production.md, section 6; what the identity decides about motion is in 18-brand-strategy-and-identity-design.md, section 4.8. The identity-level rules this file adds: the reveal's curve is the brand's curve (the same expo-out that reveals the hero image reveals the mark, so the two feel related); the idle loop never oscillates near 0.2Hz (section 11.3); the exit's duration is about 0.7 of the reveal's, like every exit in the system; and the web version is CSS or a sub-100KB Lottie that shows the lock frame under reduced motion.

### 14.3 Motion principles documents in brand guidelines

A brand's motion guideline is the page that stops every agency and in-house team inventing their own physics. Uber publishes one in its public brand guide (brand.uber.com, which resolves to assets.uber.com/guide/motion, as of October 2026), alongside logo, type and colour. Spotify and Stripe do not publish theirs; their motion is consistent enough to study on the products themselves (Spotify's Now Playing and transition language; Stripe's marketing site, where almost nothing moves and what moves is precise). At system level, Material 3 (sections 3.8 and 3.9), IBM Carbon and Microsoft Fluent 2 (section 3.4) are the published references; where the motion page sits in a full guideline is in 18-brand-strategy-and-identity-design.md, section 6. What the document contains, in order: the motion idea in one sentence; three to five principles with a reason each; the curve family with values; the duration scale with tokens; the hierarchy (what moves first); the logo's five states with timings; the reduced-motion policy; a do and do-not board of six pairs; and reference files (After Effects project, Rive file, CSS tokens).

### 14.4 Motion tokens

Motion decisions are tokens like any other (07-design-systems-and-tokens.md, section 4, for the `duration`, `cubicBezier` and `transition` types of the Design Tokens Community Group (DTCG) format, and section 11 for where motion sits in the system). A house set has thirteen: `duration.micro` 150ms, `duration.small` 250ms, `duration.large` 400ms, `duration.page` 600ms, `duration.reveal` 900ms, `duration.exit-ratio` 0.7; `easing.reveal` (0.16, 1, 0.3, 1), `easing.enter` (0.22, 1, 0.36, 1), `easing.exit` (0.4, 0, 1, 1), `easing.move` (0.2, 0, 0, 1); `spring.ui` {response 0.4, damping ratio 1}, `spring.gesture` {response 0.4, damping ratio 0.85}, each converted per platform in section 3.10; `travel.reveal` 16px. Each token carries its reduced-motion alias (section 11.2). A token set without a choreography page (which token applies to which component state) is a palette without a layout.

### 14.5 How to write a motion language in five rules

1. The one move. Name the single motion that carries the brand's idea, in a sentence a client can repeat: "Everything arrives slowly from stillness and settles." If it cannot be written, there is no motion language yet (the same test as design-taste, section 4, step 2).
2. The curve family. One entrance curve, one exit curve, one move curve, with values; springs with one bounce value. The feel of a brand is its tail (section 3.5).
3. The duration scale. Five tokens, with the exit ratio. Luxury sits at the top of each band (section 4.1).
4. The hierarchy. Which element moves first, which follows, which never moves. Type never reveals; the product is the hero of every transition; the ground is still.
5. The refusals. The five things this brand's motion never does, by name (section 16 is the list to choose from). For a Jaipur palace hotel: no bounce, no parallax, no autoplay, no hover lift, no spinner; for a Dubai streetwear label the list is different and shorter (design-taste, section 4, step 3).

## 15. Specifying motion for handoff

### 15.1 The motion spec

Every animated state change in a handoff file gets one row. A spec without a trigger or an easing is incomplete; a spec in words ("smooth", "subtle", "snappy") is no spec.

| Element | Property | From | To | Duration | Easing | Delay | Trigger | Interrupt | Velocity in | Platform values | Reduced motion |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Sheet container | translate y | 100% | 0 | spring, about 600ms to settle | `spring.ui`: response 0.4s, ζ 1 | 0 | tap "Reserve" | retarget | inherited | SwiftUI `.spring(duration: 0.4, bounce: 0)`; Motion `visualDuration: 0.333, bounce: 0`; Compose `spring(1f, 247f)`; CSS `var(--spring-ui)` over 600ms | opacity 0 to 1, 150ms |
| Sheet content | opacity | 0 | 1 | 250ms | enter (0.22, 1, 0.36, 1) | 60ms | follows container | reverse | none | CSS and Motion `[0.22, 1, 0.36, 1]` | same, no delay |
| Backdrop | opacity | 0 | 0.4 | 300ms | ease | 0 | with container | retarget | none | tied to sheet position while dragged | same |
| Sheet (dismiss by button) | translate y | 0 | 100% | 250ms | exit (0.4, 0, 1, 1) | 0 | tap close | retarget | none | CSS `cubic-bezier(0.4, 0, 1, 1)` | opacity 1 to 0, 120ms |
| Sheet (dismiss by gesture) | translate y | finger position | 100%, or back to 0 | spring | `spring.gesture`: response 0.4s, ζ 0.85 | 0 | release; commits when the projection passes 30% of height or velocity exceeds 500pt/s (section 9.2) | retarget on a new touch | gesture | SwiftUI `.spring(response: 0.4, dampingFraction: 0.85)`; Motion `visualDuration: 0.333, bounce: 0.15` | opacity 1 to 0, 120ms on release |

Interrupt takes one of four values: retarget, reverse, ignore, or complete first. Velocity in is none, gesture or inherited. Any row triggered by a gesture is a spring with velocity in set to gesture and interrupt set to retarget. A CSS transition reversed mid-flight runs back over a proportionally shorter time (the reversing shortening factor in CSS Transitions Level 1), while a `@keyframes` animation restarts from its first keyframe; this is why section 13.1 prefers transitions for state changes.

### 15.2 Timing charts

A timing chart is the spec drawn: time on the x axis in milliseconds (with frame ticks at 16.7ms for anything under 300ms), one row per element, a bar from start to end with the curve's shape sketched inside it and delays visible as gaps. It is the only artefact that shows choreography (section 5) at a glance, because overlaps and the stagger rhythm are visible where a table hides them. Make it in Figma or on paper; the After Effects timeline screenshot with layer bars is an acceptable substitute for a brand film.

### 15.3 Figma motion and Smart Animate

Figma now holds two kinds of motion with different powers.

Timeline motion, as documented in Figma's Plugin API and its MCP motion tools in October 2026 (access is still gated per account; the product name, launch date and plan availability were not verified for this file, so check Figma's release notes): keyframe tracks per node on a top-level frame's timeline for position, rotation, scale, opacity, fill and stroke colour, stroke weight, effects and path trim; first-party animation styles and file-level custom styles; a TextStagger style that staggers by character (following shaped text clusters), word, line or paragraph; easing types cubic in, out and in-and-out, back variants, custom cubic-bezier, the spring presets Gentle, Quick, Bouncy and Slow, a custom spring, and Hold for steps; video export; and code export as CSS `@keyframes` and motion.dev snippets through Dev Mode and the MCP `get_motion_context` tool. Limits: arc path properties and GenEffects (Figma's shader-driven effects) do not export to code, and GIF and animated SVG are not exported.

Smart Animate, the prototype transition between frames and component variants, matches layers by name and position in the hierarchy and animates position, scale, rotation, opacity, fill (solid, gradient and image) and blur. It does not animate drop or inner shadows, cannot morph between different shapes, treats overlays as new frames, and falls back to a dissolve the moment it meets an unsupported property (Figma help, read October 2026). Variant transitions still travel this path and do not export through the motion tools.

House consequences: timeline motion becomes the source of truth for timing and curves, entered with the house values (section 3.5) and the custom spring from section 3.10; the Bouncy preset is never used, and Gentle, Quick and Slow are mapped to house tokens by reading their exported values before use. The spec table (15.1) stays mandatory, because a timeline cannot express interruption, velocity, gesture or reduced-motion behaviour.

### 15.4 Prototypes in ProtoPie and Rive, and when to go to code

ProtoPie (Free; Basic USD 25 a month, single seat; Pro USD 47 per editor a month; Enterprise custom; ProtoPie Connect for hardware and multi-device from USD 20 per user a month, as of October 2026) prototypes gestures, sensors, variables and conditional logic with real springs and is the right tool for a sheet, a carousel or an onboarding flow that must be felt on the phone before it is built. Rive prototypes the asset itself with its state machine and is the right tool when the deliverable is the Rive file. Code (a React page with Motion, a SwiftUI preview) is the only honest test of interruption and performance, and it is a half-day job with current tooling; 09-interaction-design-and-ux-patterns.md, section 4, has the fidelity ladder and tool comparison. Rule: anything that will be felt under the finger is prototyped in ProtoPie or code; anything that will be watched is prototyped in Figma or After Effects.

### 15.5 Video references

A motion reference is a screen recording. Record at 60fps (iOS screen recording; QuickTime on Mac), then view at 0.25x to read the curve; name the file by what is borrowed ("sheet-dismiss-velocity-ios-mail.mov") and state in the brief the one property of the reference that is wanted (the curve, the duration, the choreography or the interruption behaviour), as design-taste, section 4, step 1, asks of every reference. Reference libraries: Mobbin and Screens for app flows; the Apple apps, Linear, Vercel and Arc for interface motion; Awwwards Site of the Day archives for scroll narratives; Studio Dumbar's reels for identity motion.

### 15.6 The motion review checklist

1. Does every move answer one of the six feedback jobs (section 6.1), or is it the one budgeted piece of decoration?
2. Is the first frame of response inside 100ms of the input?
3. Enter with ease-out, exit with ease-in, move with ease-in-out; exits about 0.7 of entrances?
4. Durations inside their bands (section 4.1), luxury at the top of the band, nothing frequent above 300ms?
5. One stagger at most, 20 to 60ms, total under 300ms?
6. Parent before child on enter, child before parent on exit?
7. Shared elements keep aspect ratio honest and return to their slot on the way back?
8. Can every animation be interrupted and retargeted, and does input stay live throughout?
9. Does gesture motion track 1:1, project velocity at release, and commit destructive outcomes only on release?
10. Transform and opacity only for anything continuous; no layout properties, no backdrop blur under scroll?
11. Under reduced motion: parallax, zoom, large travel and autoplay gone; state changes still visible?
12. 60fps on a mid-range Android at 4x throttling, measured in a trace, with fewer than ten promoted layers?
13. Type never reveals; the product is the hero of every transition?
14. Nothing from the tell list (section 16)?
15. One considered move on the page, and everything else still (design-taste, section 5)?
16. In Arabic, does every directional move mirror, and does every physical or temporal one stay (section 5.9)?
17. Is the hero at full opacity on first paint, with no animated layout property counting towards CLS (section 12.7)?

### 15.7 From After Effects to code

Motion designers hand over After Effects (AE) files; engineers need cubic-bezier values. For two keyframes with zero speed at both ends, AE's outgoing influence a% on the first keyframe and incoming influence b% on the second map to `cubic-bezier(a/100, 0, 1 - b/100, 1)`.

| AE setting | Influence out / in | cubic-bezier | Note |
|---|---|---|---|
| Easy Ease (F9) | 33.33% / 33.33% | (0.333, 0, 0.667, 1) | Identical to Fluent's curveEasyEase (section 3.4), which is why it reads generic |
| Ease out only | 0% / 80% | (0, 0, 0.2, 1) | Material 2 decelerate |
| Long arrival | 0% / 90% | (0, 0, 0.1, 1) | Close to M3 standard-decelerate (0, 0, 0, 1) |

Curves with a non-zero start velocity, the house expo-out (0.16, 1, 0.3, 1) among them, cannot be built from influence alone, because the first keyframe then needs an outgoing speed above zero; author them in Flow (the aescripts extension in 13-motion-graphics-and-3d-production.md, section 3.15), which reads and applies cubic-bezier values directly. Handoff: export the keyframe timing as a table, or hand over the Lottie JSON itself as the spec, since it stores each keyframe's bezier handles; then check every value at 0.25x speed against the browser build.

## 16. The cheap motion tells and their fixes

design-taste, section 3, names the motion tells; this is the diagnosis and the repair for each.

| Tell | Why it reads cheap | Fix |
|---|---|---|
| Bounce everywhere | Exaggeration on objects with no reason to bounce; dates the work to 2014 to 2019 libraries | Bounce 0 (critically damped) on everything; 0.1 to 0.2 only on gesture release with momentum |
| Overshoot on text | Letterforms that pass their position and return are unreadable during the move and cartoonish after | Text never overshoots and ideally never moves; if it must, 8px travel on expo-out |
| Linear easing | Constant velocity reads as a mechanism or a bug | Ease-out on entrances, ease-in on exits; linear only for scrub, progress and rotation |
| Uniform durations | Every element at 300ms regardless of size or distance, so large things teleport and small things crawl | Distance-based durations (section 4.3) or springs |
| Everything animating | No hierarchy, so nothing is pointed at and the page reads as a slideshow | One considered move; everything else feedback-only under 200ms |
| Slow fades over 600ms | Reads as a wait disguised as elegance; blocks reading | Crossfades 150 to 300ms; only a hero reveal earns 700 to 900ms, and only its tail is slow |
| Parallax wobble | Layers at different rates with hard edges, jittering on wheel steps | Two layers, 10 to 20% rate difference, transform only, scrub-smoothed; or none |
| Hover lift on cards | The 2017 Material card lifting 8px with a growing shadow on every card; repaint-heavy, meaningless | Hover changes one thing: an underline, a 2% image scale, a colour; no shadow growth |
| Auto-advancing carousels | Users cannot read in time, lose control, and treat the moving panel as an ad; Nielsen's Siemens study (2013) found a 5-second rotation left the offer visible 20% of the time; Notre Dame's measurement found about 1% of visitors clicked a carousel feature | Static hero; a user-driven gallery with native scroll-snap if several images are essential |
| Spinners for under 300ms | A flash that announces a delay the user would not have noticed | Show after 300ms; skeletons after 1s; optimistic UI (showing an action's result before the server confirms it) for anything under 100ms |
| Scroll-jacking | The page moves other than where the finger says; the top vestibular trigger | Native scroll; smoothing only on narratives and only with reduced motion honoured |
| Scale from 0 | A cartoon pop; nothing in the world grows from nothing | Scale from 0.96 with a fade |
| Counting numbers on every statistic | A trick for one number becomes noise on six | One stepped counter on the one figure that is the idea |
| Typewriter headlines | Makes the reader wait for a sentence; dates to 2016 landing pages | Type is already there; the image or the mark moves |
| Cursor followers and magnetic buttons | Agency-showcase cliché of 2019 to 2022; useless on touch | None; or a custom cursor that only changes shape over the one interactive element |
| Per-letter staggered headings | Unreadable while moving; breaks Arabic joining and the Devanagari headline stroke (section 14.1); the signature of generated sites from 2023 to 2026 | The type is already there; at most one line-mask reveal on the single hero line |
| Blur-in on every element | Blur-fade components (`filter: blur()` from 8 to 12px down to 0) are as uniform as the fade-up, and filter costs paint (section 12.1) | None; or one blur on the hero image, under 400ms |
| Infinite logo marquee | Motion that carries no information; WCAG 2.2.2 requires a pause control for anything moving longer than 5 seconds; design-taste lists the logo wall as dead | A static grid of six logos, or none |
| WebGL displacement on image hover | The Awwwards cliché of 2018 to 2022; a shader for a hover | A 2% image scale, or nothing |
| Text scramble or decrypt headlines | Makes the reader wait; a tech-demo trick | The type is already there |
| Animated gradient blobs or mesh behind the hero | Decoration with no subject, on a continuous GPU loop | A still gradient, or grain (13-motion-graphics-and-3d-production.md, section 9.3) |
| Shopify theme defaults left on | Dawn's theme settings ship Animations, "Reveal sections on scroll" (the fade-up) and "Hover effect" (Vertical lift or 3D lift: the card lift) | Switch both off on luxury stores before handoff (Theme settings, Animations; Dawn main branch, October 2026) |
| Preloader counter masking a slow load | A 0 to 100 count that hides a heavy page and can itself become the LCP element | Fix the weight; a loader only when it is the idea (21-web-design-and-digital-craft.md, section 6.6) |

## 17. Reference table: durations, easings and springs by use case

House values, with the system token that most closely matches. "Exit" durations are the matching entrance at about 0.7. In right-to-left layouts every horizontal travel in this table mirrors (section 5.9).

| Use case | Duration | Easing or spring | Nearest token | Note |
|---|---|---|---|---|
| Press state in | 50 to 80ms | ease-out cubic | Carbon fast-01 (70ms) | Scale 0.97 to 0.98 |
| Press release | 150 to 200ms | easeOutCubic (0.33, 1, 0.68, 1) | M3 short3 / short4 | |
| Hover colour or underline | 120 to 150ms | ease | Fluent durationFast (150ms) | Never a lift |
| Toggle knob | 150 to 200ms | ease-in-out (0.42, 0, 0.58, 1) | M3 short4 | Track colour 150ms |
| Menu, dropdown, popover in / out | 200 to 250 / 150ms | easeOutQuint (0.22, 1, 0.36, 1) / M2 accelerate | M3 medium1 | 8px travel, origin at the trigger |
| Tab indicator slide | 200 to 250ms | M3 standard (0.2, 0, 0, 1) | M3 medium1 | FLIP |
| Toast in / out | 300 to 400 / 200 to 250ms | easeOutQuint / ease-in | Carbon slow-01 / moderate-02 | Never bounce |
| Dialog in / out | 250 to 300 / 150 to 200ms | easeOutQuint, scale 0.96 to 1 / ease-in | M3 medium2 | Backdrop 200ms, dialog 40ms later |
| Sheet or drawer open | 350 to 400ms, or spring | `spring.ui`: response 0.4s, ζ 1 (SwiftUI `duration: 0.4, bounce: 0`; Motion `visualDuration: 0.333, bounce: 0`; section 3.10) | M3 medium4 | Gesture: projection and detents |
| Accordion open / close | 200 to 300ms / 0.7 of open | M3 standard; content opacity 150ms, 50ms late | M3 medium1 | Grid rows `0fr` to `1fr` (10.3) |
| Menu hover intent | Open after 100 to 150ms rest; close after 300 to 400ms absence | | | Safe triangle (10.2) |
| Sheet dismiss by button | 250ms | M2 accelerate (0.4, 0, 1, 1) | M3 medium1 | By gesture: release velocity |
| List insert / remove | 200 to 300ms | M3 standard | M3 medium2 | FLIP siblings |
| Chart state change | 600 to 1000ms | M3 standard | M3 extra-long1 to 4 | Axes first, then marks (6.6) |
| Stagger per item | 20 to 60ms | inherits the group's curve | | Total under 300ms |
| Container transform (card to page) | 350 to 450ms | M3 standard | M3 medium4 / long1 | Content crossfades inside |
| Shared element across routes | 350 to 450ms | M3 standard | M3 long1 | Root crossfade 240ms |
| Route fade through | 250 to 300ms | ease | M3 medium2 | Luxury drops the 92% scale |
| Hero or image reveal | 700 to 900ms | easeOutExpo (0.16, 1, 0.3, 1) | M3 extra-long1 to 3 | 8 to 24px travel; once; the LCP hero itself stays opaque |
| Scroll-scrubbed scene | scroll-linked | linear (the finger eases) | | scrub 0.6 to 1.2 in ScrollTrigger |
| Smooth scroll | continuous | lerp 0.08 to 0.1 | | Lenis; native on stores |
| Logo reveal (brand film) | 800 to 1500ms | easeOutExpo | | Exit 300 to 600ms |
| Logo idle loop | 4 to 8s cycle | sine in-out | | Never near 0.2Hz; 1 to 2% scale |
| Skeleton shimmer | 1.5 to 2s cycle | linear | | 4 to 8% luminance difference |
| Spinner | 1 to 1.2s per turn | linear | | Appears after 300ms |
| Pull to refresh release | spring | response 0.35, damping 1 | | Threshold 60 to 80pt |
| Like / favourite | 300ms | ease-out up, ease-in-out back | | Scale 1 to 1.2 to 1 |
| Reduced motion: any of the above | 100 to 200ms | ease (opacity only) | | Travel 0, parallax off |
| Gesture spring with momentum (iOS) | spring | response 0.3 to 0.4, damping 0.8 | Apple WWDC18 | Damping 1 without momentum |
| Compose, small component / large surface | spring | damping 0.9, stiffness 1400 / damping 0.9, stiffness 300 | M3 standard fast / slow spatial | Effects: damping 1, stiffness 3800 |

## Terms introduced

- AE influence: in After Effects, the share of the time between two keyframes over which a keyframe's ease acts; it maps to cubic-bezier control points (section 15.7).
- All-intra encoding: video in which every frame is a keyframe, so seeking to any time is exact; the requirement for scroll-scrubbed video.
- animation-range: the CSS property that limits which part of a scroll or view timeline drives an animation, with keywords such as entry, exit, cover and contain.
- animation-trigger: the Chrome-only CSS property that starts a time-based animation when an element crosses a scroll range.
- Anticipation: a small move opposite to the main action before it begins; in interface it adds latency.
- Apparent motion (beta movement): the perception of one object moving from stills shown 40 to 100ms apart; the basis of screen animation, distinct from Wertheimer's objectless phi phenomenon.
- Appeal: the principle that motion has a clear character the eye wants to follow; in luxury work, restraint.
- Arcs: the principle that natural movement follows curved paths.
- Beat, hold, release: the units of scroll narrative pacing; a scene, a pinned stretch of scroll, and free scrolling between.
- Bounce (spring parameter): Apple's and Motion's -1 to 1 measure of oscillation; 0 is critically damped, and the damping ratio is 1 minus a positive bounce.
- Composited layer: a bitmap in GPU memory that the compositor moves without repainting, costing width times height times 4 bytes.
- Compositor: the browser or OS stage that places already painted layers on screen on the GPU; transform and opacity changes run here alone.
- Container transform: Material's pattern in which an element morphs into the view it opens.
- Core Web Vitals: Google's three field metrics of page experience, LCP, CLS and INP.
- Critically damped: a spring at damping ratio 1, the fastest arrival with no overshoot.
- Cubic-bezier: an easing curve from (0, 0) to (1, 1) defined by two control points; x is time, y is progress.
- Cumulative Layout Shift (CLS): the Core Web Vital that sums unexpected layout movement; good is 0.1 or less.
- Damping: the coefficient c that resists a spring's motion; c = 4π x ζ x m / response.
- Damping ratio (Apple: damping fraction): c over 2 sqrt(k m), the dimensionless number ζ that sets whether a spring overshoots.
- Data binding (Rive): typed view-model properties that the runtime sets and the Rive file reacts to.
- Delight budget: the house allowance of one piece of decorative motion per screen or page.
- Density-independent pixel (dp): Android's layout unit, one physical pixel at 160dpi.
- Detent: a resting position of a sheet or drawer.
- Direction lock: holding a gesture to the axis it began on once its travel is within about 30 degrees of that axis.
- Direction token: a custom property (`--dir`, 1 or -1) that multiplies horizontal transforms so they mirror in right-to-left layouts.
- Doherty threshold: the finding (IBM, 1982) that productivity rises sharply when system response drops below 400ms.
- dotLottie: the open container format that zips Lottie animations with shared assets, themes and state machines.
- DTCG: the Design Tokens Community Group format for platform-neutral token files.
- Ease-in, ease-out, ease-in-out: curves that start slow, end slow, or both; the house uses them for exits, entrances and on-screen moves.
- Easing: the function mapping elapsed time (0 to 1) to progress (0 to 1).
- Effects spring: in Material 3 Expressive, a critically damped spring for colour, opacity and elevation.
- Exaggeration: pushing motion past realism so it reads; in interface, overshoot and bounce.
- Fade through: Material's pattern of fade out, then fade in with a slight scale, for unrelated destinations.
- Fade-up: opacity 0 to 1 with a rise of about 30px on every section as it enters; the page-builder default and a cheap tell.
- FLIP: First, Last, Invert, Play; the technique that turns a layout change into a transform-only animation.
- Follow through and overlapping action: parts continuing after the body stops, and parts moving at different rates.
- Frame budget: the time available per frame, 16.7ms at 60Hz and 8.3ms at 120Hz.
- Frame-rate independence: writing per-frame motion against elapsed time so it runs at the same speed at 60Hz and 120Hz.
- GenEffect: Figma's shader-driven effect, which animates in Figma but does not export to code.
- GOP (group of pictures): the run of video frames between keyframes; a long GOP makes seeking coarse.
- Grapheme cluster: what a reader sees as one character, such as a consonant with its vowel sign.
- Hover intent: delaying a menu's open and close until the pointer has rested on it or left it for a set time.
- Hysteresis: the distance (about 10 points) a gesture travels before a recogniser commits to it.
- Image sequence: pre-rendered frames drawn to a canvas according to scroll progress.
- Interaction to Next Paint (INP): the Core Web Vital for responsiveness, from input to the next painted frame; good is under 200ms.
- Interop: the yearly cross-browser programme in which browser makers agree focus areas and measure consistency against shared tests.
- interpolate-size: the CSS property that lets transitions run to size keywords such as `height: auto` (Chrome only as of October 2026).
- Interruptibility: the property that an animation can be retargeted mid-flight without a discontinuity.
- IntersectionObserver: the browser API that reports when an element's visibility crosses a threshold.
- Jank: dropped or late frames, perceived as stutter.
- Ken Burns move: a slow scale or pan across a still photograph.
- Kinetic type: type that moves.
- Lakh and crore grouping: the Indian digit grouping (1,00,000 and 1,00,00,000) produced by `Intl.NumberFormat('en-IN')`.
- Largest Contentful Paint (LCP): the Core Web Vital for when the largest element in the viewport is painted; good is 2.5s or less.
- Layout thrash: forcing synchronous layout by interleaving style writes and layout reads.
- Lerp: linear interpolation; in smooth scroll, the fraction of remaining distance moved per frame.
- linear(): the CSS easing function that takes a list of sampled points, used to run a spring curve in plain CSS.
- Liquid Glass: Apple's translucent design language of 2025, whose system controls morph between shapes.
- Lock frame: the final frame of a logo animation, identical to the static mark.
- Long animation frame: a frame that took over 50ms to render, reported with script attribution by the Long Animation Frames API.
- Long task: a main-thread task over 50ms, which blocks input.
- Lottie: After Effects vector animation exported as JSON by Bodymovin and played by a runtime.
- Matra: the vowel sign attached to a Devanagari consonant.
- Microinteraction: a contained interaction moment with a trigger, rules, feedback and loops (Saffer).
- Motion scheme: Material 3 Expressive's set of six springs, in a standard and an expressive version.
- Motion spec: a row per animated change stating property, from, to, duration, easing, delay, trigger, interruption, velocity, platform values and reduced-motion behaviour.
- Motion token: a named, platform-neutral value for a duration, easing or spring.
- Named timeline: a scroll or view timeline given a name (`scroll-timeline-name`) and a scope (`timeline-scope`) so elements outside the scroller can follow it.
- Natural frequency: sqrt(k over m), how fast a spring system wants to oscillate.
- No-motion-first: placing decorative motion inside `prefers-reduced-motion: no-preference`, so the default is still (Tatiana Mac).
- Object constancy: keying data points by identity so they travel between chart states (Bostock).
- Optimistic UI: showing an action's result before the server confirms it.
- Overdamped: a spring at damping ratio above 1, creeping to its target.
- Override-in-reduce: full motion by default, stripped inside `prefers-reduced-motion: reduce`; the house approach for feedback motion.
- Overshoot: motion that passes its target before settling; y values above 1 in a curve, a damping ratio below 1 in a spring.
- Parallax: layers moving at different rates to fake depth.
- Peak: the single scroll-linked sequence that carries a page's idea.
- Perceptual duration: the time a spring takes to visually arrive, stable as bounce changes (Apple's duration parameter, equal to response).
- Performative type: type that behaves by rules in response to sound, data, input or time, so the identity performs anew each time it runs.
- Pin: holding an element fixed for a stretch of scroll while a sequence plays.
- Pixel pipeline: style, layout, paint, composite; the stages a frame passes through.
- Point (iOS): the iOS layout unit; 1pt is 1px at 1x.
- Pointer capture: routing all of a pointer's events to one element until release (`setPointerCapture`), so a drag continues outside it.
- Predictive back: Android's back gesture, which previews the destination as the finger moves and commits on release.
- Productive and expressive motion: IBM Carbon's split between subtle task motion and motion reserved for occasional important moments.
- Projection: computing where a released gesture would stop under deceleration, to decide its destination.
- RAIL: Google's Response, Animation, Idle, Load performance model.
- requestAnimationFrame (rAF): the browser callback that runs once before each frame is painted.
- Response: Apple's spring parameter, the undamped period in seconds (2π / ω0).
- Reversing shortening factor: the CSS Transitions rule that a transition reversed mid-flight runs back over a proportionally shorter time.
- Right-to-left (RTL): a script direction, as in Arabic, in which layout and directional motion mirror.
- Rubber banding: diminishing movement past an edge so the boundary is felt as resistance.
- Safe triangle: hover-intent geometry that keeps a submenu open while the pointer moves diagonally towards it (Kamens, 2013).
- Scoped view transition: a view transition started on one element (`Element.startViewTransition()`, Chrome only) that leaves the rest of the page live.
- Scroll-driven animation: a CSS animation whose progress is bound to a scroll or view timeline instead of time.
- Scroll-jacking: taking over scrolling so the page moves other than where the finger says.
- Scroll-state container query: a container query on scroll state, such as stuck, snapped or scrollable (`container-type: scroll-state`, Chrome only).
- Scrub (scroll-scrubbed): linking an animation's progress directly to scroll position, optionally with a catch-up time.
- Secondary action: a supporting move that reinforces the main one.
- Settling duration: the time until a spring's movement is technically below threshold; longer and less predictable than perceptual duration.
- Shared axis: Material's pattern in which outgoing and incoming views move along one axis with a fade.
- Shared element: an element that persists across two views and travels between its positions.
- Shirorekha: the headline stroke that joins the letters of a Devanagari word.
- Skeleton: a static placeholder showing the layout of content still loading.
- Slow in and slow out: more drawings near the poses than between them; the principle behind easing.
- Smart Animate: Figma's prototype transition that animates differences between matching layers.
- Smooth scroll: a library that intercepts wheel input and interpolates the scroll position each frame (Lenis in the house stack).
- Snap point: a position a scrubbed or dragged element settles to after input stops.
- Solid drawing: keeping forms consistent in three-dimensional space, with weight and volume.
- Spatial spring: in Material 3 Expressive, a spring for position and size, which may overshoot.
- Speculation Rules: the browser API that prefetches or prerenders likely next pages from a JSON rule block.
- Spring (animation): motion computed each frame from a damped harmonic oscillator, with a target and a velocity in place of a duration.
- Squash and stretch: deformation under force with volume conserved; in interface, only press scale and rubber banding.
- Stagger: a per-item delay that turns a group entrance into a sequence.
- Staging: presenting one idea at a time so the eye knows where to look.
- State layer: a translucent overlay signalling hover, focus or press.
- State machine (Rive): a graph of animations with inputs, conditions and blend states shipped inside the asset.
- Step easing: steps(n) holds that divide a duration into n equal jumps.
- Straight ahead and pose to pose: frame-by-frame simulation, and key poses with in-betweens; in interface, springs and tweens.
- Tabular figures: digits of equal width, set with `font-variant-numeric: tabular-nums`.
- Tail: the slow final stretch of an ease-out curve, where luxury motion spends most of its time.
- TextStagger (Figma): Figma's native text animation style that staggers by character, word, line or paragraph.
- ThorVG: an open-source vector renderer, used by dotLottie.
- Timeline motion (Figma): keyframe animation on a frame's timeline in Figma Design, exportable as CSS and motion.dev code.
- Timing: the number of frames a move takes, which sets its weight and mood.
- Timing chart: the motion spec drawn as bars over a millisecond axis, one row per element.
- Transition type: a label passed to a view transition (for example back or forward) that CSS can select on to run different choreography.
- Tween: an interpolation from a start value to an end value over a fixed duration.
- Underdamped: a spring at damping ratio below 1, which overshoots and oscillates.
- UX in Motion principles: Issara Willenskomer's twelve interface restatements of the Disney principles (2017).
- Vestibular: of the inner ear's balance system; motion that disturbs it causes dizziness and nausea.
- View timeline: a scroll-driven timeline tied to an element's progress through the viewport.
- View transition: the browser API that snapshots two DOM states or pages and animates between them through pseudo-elements.
- visualDuration: Motion's perceptual spring duration; equal to Apple's response divided by 1.2.
- Web Animations API (WAAPI): the JavaScript interface (`Element.animate`) to the browser's animation engine.
- WebAssembly (WASM): a compact binary format that browsers run at near-native speed; the dotLottie and Rive renderers ship in it.
- will-change: the CSS hint that promotes an element to its own compositor layer in advance of an animation.

## Sources and further reading

Books
- Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation, 1981.
- Jakob Nielsen, Usability Engineering, 1993.
- Dan Saffer, Microinteractions: Designing with Details, 2013.
- Val Head, Designing Interface Animation, 2016.
- Robert Penner, Programming Macromedia Flash MX, 2002 (the easing equations, chapter 7).

Specifications and standards
- CSS Easing Functions Level 2 (W3C Working Draft), https://www.w3.org/TR/css-easing-2/
- CSS Transitions Level 1 (W3C), reversing shortening factor, https://www.w3.org/TR/css-transitions-1/
- CSS Scroll-driven Animations Level 1 (W3C), https://www.w3.org/TR/scroll-animations-1/
- CSS View Transitions Module Level 1 and Level 2 (W3C), https://www.w3.org/TR/css-view-transitions-1/ and https://www.w3.org/TR/css-view-transitions-2/
- Web Animations Level 1 (W3C), https://www.w3.org/TR/web-animations-1/
- Pointer Events Level 3 (W3C), https://www.w3.org/TR/pointerevents3/
- Media Queries Level 5, prefers-reduced-motion (W3C), https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion
- WCAG 2.2, W3C Recommendation, https://www.w3.org/TR/WCAG22/, and Understanding SC 2.3.3 Animation from Interactions, https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- MDN browser-compat-data 8.1.7 (22 October 2026), the source of every support figure in section 13.11, https://github.com/mdn/browser-compat-data
- Material Design 3, Motion (easing, duration and the Expressive physics system), https://m3.material.io/styles/motion/overview, and Material Design, Bidirectionality, https://m2.material.io/design/usability/bidirectionality.html
- Compose Material 3 source, MotionScheme.kt, StandardMotionTokens.kt, ExpressiveMotionTokens.kt, MotionTokens.kt, https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/
- IBM Carbon Design System, Motion, https://carbondesignsystem.com/elements/motion/overview/
- Microsoft Fluent 2, Motion, https://fluent2.microsoft.design/motion
- Apple Human Interface Guidelines, Motion, https://developer.apple.com/design/human-interface-guidelines/motion
- Apple developer documentation: Spring, Animation.default, interactiveSpring, phaseAnimator, keyframeAnimator, NavigationTransition.zoom, glassEffect, GlassEffectContainer, glassEffectID, tabBarMinimizeBehavior, https://developer.apple.com/documentation/swiftui/
- Apple, Optimizing ProMotion refresh rates for iPhone 13 Pro and iPad Pro, https://developer.apple.com/documentation/quartzcore/optimizing-promotion-refresh-rates-for-iphone-13-pro-and-ipad-pro
- Android 16 behaviour changes (predictive back), https://developer.android.com/about/versions/16/behavior-changes-16, and Add support for the predictive back gesture, https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture
- Jetpack Compose animation documentation and compose-animation release notes, https://developer.android.com/develop/ui/compose/animation and https://developer.android.com/jetpack/androidx/releases/compose-animation
- Flutter animations documentation, https://docs.flutter.dev/ui/animations

Research and articles
- Robert B. Miller, Response time in man-computer conversational transactions, AFIPS Fall Joint Computer Conference, 1968.
- W. J. Doherty and A. J. Thadani, The Economic Value of Rapid Response Time, IBM, 1982.
- Stuart K. Card, George G. Robertson and Jock D. Mackinlay, The Information Visualizer, an Information Workspace, CHI 1991.
- Robert M. Steinman, Zygmunt Pizlo and Filip J. Pizlo, Phi is not beta, Vision Research, 2000.
- Jeffrey Heer and George Robertson, Animated Transitions in Statistical Data Graphics, IEEE Transactions on Visualization and Computer Graphics 13(6), 2007 (InfoVis 2007).
- Mike Bostock, Object Constancy, 2012, https://bost.ocks.org/mike/constancy/
- Ben Kamens, Breaking down Amazon's mega dropdown, 2013, https://bjk5.com/post/44698559168/breaking-down-amazons-mega-dropdown
- Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto, 2017.
- Tatiana Mac, prefers-reduced-motion: Taking a no-motion-first approach to animations, 2021, https://www.tatianamac.com/posts/prefers-reduced-motion
- Chan Karunamuni, Nathan de Vries and Marcos Alonso, Designing Fluid Interfaces, WWDC18 session 803, https://developer.apple.com/videos/play/wwdc2018/803/
- Jacob Xiao, Animate with springs, WWDC23 session 10158, https://developer.apple.com/videos/play/wwdc2023/10158/
- Nathan Gitter, Building Fluid Interfaces (code reconstructing the WWDC18 demos), https://github.com/nathangitter/fluid-interfaces
- Rauno Freiberg, Invisible Details of Interaction Design, https://rauno.me/craft/interaction-design; Emil Kowalski, Great Animations, https://emilkowal.ski/ui/great-animations, and animations.dev
- Paul Lewis, FLIP Your Animations, 2015, https://aerotwist.com/blog/flip-your-animations/
- Val Head, Designing Safer Web Animation For Motion Sensitivity, A List Apart, 2015, https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
- Jakob Nielsen, Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility, Nielsen Norman Group, 2013, https://www.nngroup.com/articles/auto-forwarding/
- Erik Runyon, Carousel Interaction Stats, 2013, https://erikrunyon.com/2013/01/carousel-interaction-stats/; Jared Smith, Should I use a carousel?, https://shouldiuseacarousel.com/
- Material Design, The motion system (container transform, shared axis, fade through, fade), https://m2.material.io/design/motion/the-motion-system.html
- web.dev, Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint and the RAIL model, https://web.dev/articles/lcp, https://web.dev/articles/cls, https://web.dev/articles/inp and https://web.dev/articles/rail
- Chrome for Developers, View Transitions, https://developer.chrome.com/docs/web-platform/view-transitions; Scroll-driven animations, https://developer.chrome.com/docs/css-ui/scroll-driven-animations; Long Animation Frames API, https://developer.chrome.com/docs/web-platform/long-animation-frames; Prerender pages in Chrome for instant page navigations, https://developer.chrome.com/docs/web-platform/prerender-pages; Chrome DevTools, Performance panel, https://developer.chrome.com/docs/devtools/performance
- Jake Archibald, linear() easing generator, https://linear-easing-generator.netlify.app/
- Playwright documentation, page.emulateMedia, https://playwright.dev/docs/api/class-page#page-emulate-media

Tools, libraries and products
- GSAP documentation: ScrollTrigger, Flip, SplitText, and the GSAP 3.13 release post (npm release 30 April 2025), https://gsap.com/docs/v3/ and https://gsap.com/blog/3-13/
- Motion documentation, transitions, layout animations and AnimatePresence, https://motion.dev/docs; motion-dom 14.7.1 source on npm (spring.mjs, default-transitions.mjs), read October 2026
- react-spring documentation, https://www.react-spring.dev/docs
- Lenis README and 1.3.27 source (darkroom.engineering), https://github.com/darkroomengineering/lenis
- lottie-web, https://github.com/airbnb/lottie-web, and dotLottie, https://dotlottie.io/
- Rive documentation, state machines and data binding, https://rive.app/docs; Rive blog, Data Binding: a better way to design with data (15 April 2025) and Data Binding, supercharged: Lists, Images, and Artboards (17 July 2025), https://rive.app/blog
- three.js 0.186.1, OGL 1.0.11 and @splinetool/runtime 2.0.120 on npm (bundled, minified and gzipped for section 12.6, October 2026)
- Emil Kowalski, Vaul (drawer component for React), https://github.com/emilkowalski/vaul
- Next.js documentation, Designing view transitions, https://nextjs.org/docs/app/guides/view-transitions, and the Next.js 15.2 release post (26 February 2025), https://nextjs.org/blog/next-15-2
- MDN, Firefox 159 release notes for developers (27 October 2026), https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/159, and the Interop 2026 dashboard, https://wpt.fyi/interop-2026
- FFmpeg codec documentation (keyframe interval, `-g`), https://ffmpeg.org/ffmpeg-codecs.html
- Figma help, Create advanced animations with Smart Animate, https://help.figma.com/hc/en-us/articles/360039818874, and Figma Plugin API documentation, https://www.figma.com/plugin-docs/
- Shopify Dawn theme, config/settings_schema.json (Animations settings), https://github.com/Shopify/dawn
- ProtoPie, Pricing, https://www.protopie.io/pricing
- Uber, Brand guide, Motion, https://brand.uber.com
- easings.net, cubic-bezier approximations of the Penner equations, https://easings.net/
- DEMO Design in Motion Festival, https://demofestival.com/, and Studio Dumbar/DEPT, work, https://studiodumbar.com/work
