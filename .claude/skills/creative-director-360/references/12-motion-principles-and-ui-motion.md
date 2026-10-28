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
18. [Terms introduced](#terms-introduced)
19. [Sources and further reading](#sources-and-further-reading)

The taste rule this file sits beneath is in design-taste, section 5 (Motion: "One considered move that reveals the idea. Physical, slow, ease-out. Everything else still.") and section 3 (the motion tells). This file is the physics and the numbers that make that rule executable.

## 1. Why motion reads as natural

### 1.1 The brain runs a physics model

The visual system predicts where objects will be next. Two still frames shown 40 to 100ms apart read as one object moving (apparent motion, the phi phenomenon, Wertheimer 1912); this is the basis of every screen animation. The prediction assumes Newtonian objects: things have mass, so they take time to start and to stop; things that stop instantly read as broken or as having hit a wall; things that move at constant speed read as machines (conveyor belts, clocks), because nothing with a body moves that way. Every rule in this file descends from that one fact. Easing exists because mass exists. Springs exist because a mass on a spring is the simplest physical system that settles.

### 1.2 The three perception thresholds

Jakob Nielsen's limits (Usability Engineering, 1993, drawn from Miller 1968 and Card, Moran and Newell 1983):

| Threshold | What the user perceives | Motion consequence |
|---|---|---|
| 100ms | Instantaneous. Cause and effect feel joined. | Feedback to a touch must begin within 100ms. The press state, the tap highlight, the first frame of a transition. |
| 1s | The flow of thought holds, though the delay is noticed. | A transition that runs beyond 1s is a wait, however pretty. Page transitions must complete well inside this. |
| 10s | Attention is lost. | Anything longer needs a progress indicator and a way out. |

A fourth number, the Doherty threshold (Doherty and Thadani, IBM, 1982): productivity rises sharply when system response drops below 400ms. For interface motion this means the user must be able to act again within 400ms of acting, which rules out 600ms fades on frequent interactions.

### 1.3 Frame budgets

A display at 60Hz paints every 16.7ms; at 120Hz (ProMotion iPhone and iPad, most flagship Android phones, many laptops) every 8.3ms. Everything the browser or OS does for one frame (script, style, layout, paint, composite) has to fit inside that window or the frame is dropped and the eye reads a stutter. In practice leave the engine room: aim for under 10ms of your own work at 60Hz and under 5ms at 120Hz. Section 12 shows what costs what.

### 1.4 Two jobs, one budget

Motion is either information (it tells the user what changed, where things went, what caused what, what the system is doing) or decoration (it exists to be looked at). Both are legitimate. The discipline is accounting: every interface gets a decoration budget of one considered move per screen, and the information motion is held to the smallest, fastest version that still reads. Section 6 is the accounting method.

## 2. The twelve principles of animation and their interface translation

Frank Thomas and Ollie Johnston set down the twelve principles in The Illusion of Life (1981) from Disney practice of the 1930s. Each principle is a shortcut for a piece of physics or stagecraft; the interface translation follows from the physics, and the luxury verdict follows from the house rule that motion is a material (design-taste, section 2: slowness, material honesty).

| Principle | Definition (Thomas and Johnston) | The physics or stagecraft behind it | Interface translation | Luxury verdict |
|---|---|---|---|---|
| Squash and stretch | A form deforms under force while keeping its volume. | Elastic deformation: a mass accelerating or hitting a surface deforms, and volume is conserved so a squash in one axis is a stretch in the other. | Press scale on buttons, overscroll rubber banding, pull-to-refresh stretch, the iOS icon jiggle. | Refuse as expression. Keep the two system cases: press scale 0.97 to 0.98 (uniform, no deformation) and native overscroll. |
| Anticipation | A small move opposite to the main action before it begins. | Energy storage: a crouch before a jump, a backswing. It also tells the audience where to look a beat early. | A pull-back before a drawer opens; a brief dim before a modal. In UI it adds latency to the thing the user asked for. | Refuse on interface. Allowed in brand film and logo reveals, where the viewer is an audience. |
| Staging | Present each idea so it is unmistakably clear; direct the eye. | Theatre: one focal point, the rest held still or dimmed. | One thing moves at a time; dim or blur the rest; motion hierarchy (section 5.1). | Use everywhere. This is the one considered move. |
| Straight ahead and pose to pose | Straight ahead: draw frame by frame. Pose to pose: draw key poses, then in-betweens. | Simulation versus interpolation. | Springs and physics are straight ahead (each frame computed from the last); tweens and keyframes are pose to pose. | Pose to pose for choreographed reveals; straight ahead (springs) for anything the finger drives. |
| Follow through and overlapping action | Parts keep moving after the body stops; parts move at different rates. | Inertia and loose coupling: lighter, looser parts lag and settle later. | Stagger of list items; a title settling a frame after its container; sheet content lagging the sheet by 20 to 40ms. | Use in one dose: one stagger per screen, 20 to 40ms per item, total under 300ms. |
| Slow in and slow out | More drawings near the poses, fewer in the middle. | Acceleration and deceleration: a mass cannot go from rest to speed, or speed to rest, in zero time. | Easing (section 3). | The only principle applied to every move. Ease-out on entrances, ease-in on exits, ease-in-out on moves. |
| Arcs | Natural movement follows curved paths. | Rotation about joints; projectiles under gravity. | Curved paths when an element changes both x and y (Material's arc motion); circular reveals. | Rarely. Luxury interfaces move on one axis at a time. An arc appears only when an element travels diagonally, and then a shallow one. |
| Secondary action | A supporting action that reinforces the main one. | Coupled systems: the main action drives a lesser one. | The chevron rotating as a section opens; the count updating as an item is added. | One secondary action at most, and only if it carries information. |
| Timing | The number of frames determines weight and mood. | Heavier bodies take longer to start and to stop; the same move at different speeds means different things. | Durations (section 4). Larger elements move longer; smaller ones, shorter. | Luxury runs about 1.3x slower than product defaults, with longer ease-out tails. The move is slower; the response is still instant. |
| Exaggeration | Push past realism so the idea reads. | Caricature: the audience reads an amplified version faster. | Overshoot, bounce, scale past 1. | Refuse. Bounce as decoration is the first cheap tell in design-taste, section 3. |
| Solid drawing | Forms stay consistent in three-dimensional space, with weight and volume. | Perspective and volume. | Consistent perspective origin in 3D transforms; one light source; no cards that flip and lose their thickness. | Flat. Depth only when depth is the concept (design-taste, section 2, material honesty). |
| Appeal | Charisma; clarity of design that the eye wants to follow. | Readability and point of view. | The motion has a character consistent with the brand. | Appeal through restraint: a slow, long ease-out tail is the most expensive signature available. |

### 2.1 What luxury motion keeps

Four principles do almost all the work: staging, slow in and slow out, timing, and a single dose of follow through. Everything else in the list belongs to character animation, where the object has a personality and the viewer watches. In an interface the user is acting, and personality in the furniture slows them down.

### 2.2 Why bounce reads cheap

A bounce is exaggeration plus squash and stretch plus follow through, applied to an object that in the real world has no reason to bounce (a menu, a card, a line of text). It was the default of iOS 7 era third-party apps and of 2015 to 2019 web libraries, so it also dates the work. A spring with bounce 0 (critically damped, section 3.6) gives all the physical continuity with none of the toy quality. The exception is gesture release: a sheet thrown with momentum that does not overshoot at all can feel broken (Apple's own guidance, WWDC18, section 6.4). There, bounce of 0.1 to 0.2 is physics, and it is earned.

## 3. Easing in depth

Easing is the function that maps elapsed time (0 to 1) to progress (0 to 1). It is the whole difference between motion that reads as a body and motion that reads as a machine.

### 3.1 Linear, and why it reads mechanical

Linear easing is constant velocity: progress equals time. Nothing with mass moves this way from rest, so the eye reads it as a mechanism (a conveyor, a scanner, a clock hand) or as an error. Its legitimate uses are the cases where a mechanism is the truth: a progress bar tracking real bytes, a marquee, a continuous rotation (a spinner, a record), colour or opacity crossfades under 150ms where the curve is imperceptible, and scroll-scrubbed animation where the finger is the easing.

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

All values verified against the CSS Easing Functions specification, the easings.net source, the Material 3 token source (material-web, v0.192), the Carbon motion page and the Fluent UI tokens package, October 2026.

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
| Material 3 | emphasized | path, approximated by (0.2, 0, 0, 1) over a longer duration | Large, important transitions (M3 defines emphasized as a two-segment path; the token source falls back to the standard curve). |
| Material 3 | emphasized-accelerate | (0.3, 0, 0.8, 0.15) | Emphasized exits. |
| Material 3 | emphasized-decelerate | (0.05, 0.7, 0.1, 1) | Emphasized entrances: very fast start, very long tail. |
| Material 2 (legacy) | standard | (0.4, 0, 0.2, 1) | The 2014 to 2021 Android curve, still everywhere. |
| Material 2 (legacy) | accelerate / decelerate | (0.4, 0, 1, 1) / (0, 0, 0.2, 1) | Exits / entrances. |
| IBM Carbon | productive standard | (0.2, 0, 0.38, 0.9) | Task UI: dropdowns, tables, toggles. |
| IBM Carbon | productive entrance / exit | (0, 0, 0.38, 0.9) / (0.2, 0, 1, 0.9) | Note the y2 of 0.9: the curve arrives slightly early, which reads crisp. |
| IBM Carbon | expressive standard | (0.4, 0.14, 0.3, 1) | Page-level and primary-action moments. |
| IBM Carbon | expressive entrance / exit | (0, 0, 0.3, 1) / (0.4, 0.14, 1, 1) | |
| Microsoft Fluent 2 | curveDecelerateMid | (0, 0, 0, 1) | Entrances. Identical to M3 standard-decelerate and to Windows "fast out, slow in". |
| Microsoft Fluent 2 | curveDecelerateMax / Min | (0.1, 0.9, 0.2, 1) / (0.33, 0, 0.1, 1) | Stronger / gentler entrances. |
| Microsoft Fluent 2 | curveAccelerateMid | (1, 0, 1, 1) | Exits. |
| Microsoft Fluent 2 | curveAccelerateMax / Min | (0.9, 0.1, 1, 0.2) / (0.8, 0, 0.78, 1) | |
| Microsoft Fluent 2 | curveEasyEase / Max | (0.33, 0, 0.67, 1) / (0.8, 0, 0.2, 1) | Moves. |
| Penner | easeOutCubic | (0.33, 1, 0.68, 1) | Small UI entrances. |
| Penner | easeOutQuart | (0.25, 1, 0.5, 1) | Medium entrances. |
| Penner | easeOutQuint | (0.22, 1, 0.36, 1) | Long-tail entrances. |
| Penner | easeOutExpo | (0.16, 1, 0.3, 1) | The luxury reveal curve: near-instant start, 60% of the time spent settling. |
| Penner | easeOutCirc | (0, 0.55, 0.45, 1) | Rounder, slower start than expo. Image reveals. |
| Penner | easeOutBack | (0.34, 1.56, 0.64, 1) | Overshoot. Refuse on interface. |
| Penner | easeInCubic / Quart / Quint | (0.32, 0, 0.67, 0) / (0.5, 0, 0.75, 0) / (0.64, 0, 0.78, 0) | Exits, in rising strength. |
| Penner | easeInExpo | (0.7, 0, 0.84, 0) | Very fast exits under 200ms. |
| Penner | easeInOutCubic | (0.65, 0, 0.35, 1) | Moves. |
| Penner | easeInOutQuart / Quint | (0.76, 0, 0.24, 1) / (0.83, 0, 0.17, 1) | Moves with a stronger pause at each end. |
| Penner | easeInOutExpo | (0.87, 0, 0.13, 1) | Hard moves; wipes. |
| Penner | easeInOutCirc | (0.85, 0, 0.15, 1) | |
| Penner | easeInBack / easeInOutBack | (0.36, 0, 0.66, -0.56) / (0.68, -0.6, 0.32, 1.6) | Anticipation. Brand film only. |
| Penner | easeInSine / easeOutSine / easeInOutSine | (0.12, 0, 0.39, 0) / (0.61, 1, 0.88, 1) / (0.37, 0, 0.63, 1) | The gentlest family; near-linear. Crossfades. |

Robert Penner published the easing equations in 2002 (Programming Macromedia Flash MX); the cubic-bezier values above are the standard approximations from easings.net, since the originals are power and trigonometric functions, and a cubic-bezier can only approximate them.

### 3.5 The house curves

Luxury motion is defined by the tail. The curve starts almost at full speed (so the response is instant, inside 100ms) and then spends most of its duration arriving. The house set, with the reason for each:

| Role | Curve | Duration pairing | Reason |
|---|---|---|---|
| Reveal (hero, image, headline) | `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) | 600 to 900ms | At 800ms the element is 90% in place by about 260ms and spends the rest settling. The eye registers arrival early and weight late. |
| Standard entrance (panel, card, menu) | `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) | 300 to 450ms | Shorter tail than expo, same instant start. |
| Micro entrance (tooltip, toggle, press release) | `cubic-bezier(0.33, 1, 0.68, 1)` (easeOutCubic) | 120 to 200ms | A long tail at this duration is invisible; cubic is enough. |
| Exit | `cubic-bezier(0.4, 0, 1, 1)` (M2 accelerate) | 0.7 x the matching entrance | Clears quickly; the user is already elsewhere. |
| Move, resize, shared element | `cubic-bezier(0.2, 0, 0, 1)` (M3 standard) | 300 to 500ms | Asymmetric: fast departure, slow arrival. Reads as a hand placing an object. |
| Crossfade | `ease` | 150 to 300ms | Imperceptible curve at this length. |

### 3.6 Step easing

`steps(n, jump-term)` divides the duration into n equal holds. `jump-end` (default) holds the start value then jumps; `jump-start` jumps immediately; `jump-none` places both endpoints as holds; `jump-both` adds a jump at each end. Uses: sprite-sheet animation (one step per frame), typewriter copy (`steps(n)` over a `width` or clip), numeric counters, split-flap boards, and any place where a mechanism is the concept. Twelve steps per second mimics hand-drawn animation on twos; six per second reads as flipbook. In luxury work a stepped counter (a price, a year, a square footage) is one of the few mechanical motions that reads as craft rather than as a glitch, because the mechanism is a real object (the departure board, the odometer).

### 3.7 Spring physics

A spring animation does not have a duration. It has a target and a state (position, velocity), and each frame it computes the next state from the physics of a damped harmonic oscillator:

m x'' + c x' + k x = 0

- m, mass: how much inertia the object has. Higher mass starts and stops more slowly and carries more momentum.
- k, stiffness: how hard the spring pulls toward the target. Higher stiffness means faster.
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
| Apple, WWDC18 vocabulary (UIKit `UISpringTimingParameters`, SwiftUI `.spring(response:dampingFraction:)`) | response (seconds; the period of one oscillation, about 2π / ω0) and damping fraction (ζ) | SwiftUI `.spring(response: 0.55, dampingFraction: 0.825)` are the documented defaults of that initialiser | Apple's engineers avoid the word duration because a spring is "always ready to move elsewhere". WWDC18 guidance: start at 100% damping; use 80% only when the gesture has momentum. |
| Apple, iOS 17 vocabulary (`Spring(duration:bounce:)`, `.spring(duration:bounce:)`) | duration (perceptual, seconds) and bounce (-1 to 1) | `.smooth` (bounce 0), `.snappy` (bounce 0.15), `.bouncy` (bounce 0.3), each on a 0.5s default perceptual duration; `extraBounce:` adds to the preset. WWDC23: bounce 0 is the general-purpose spring; 0.15 small bounce; 0.3 noticeable; above about 0.4 "may feel too exaggerated for a UI element". | Perceptual duration is the time the spring takes to visually arrive and stays stable as bounce changes. Settling duration (when movement is technically below threshold) is longer and unpredictable; never wait on it for a user-facing step. Negative bounce flattens the curve (overdamped). |
| Motion (formerly Framer Motion), `transition={{ type: "spring" }}` | stiffness, damping, mass, velocity; or `visualDuration` and `bounce` | Docs as of October 2026: stiffness 1, damping 10, mass 1, bounce 0.25, duration 0.3s (0.8s with multiple keyframes). `visualDuration` overrides `duration`; setting stiffness, damping or mass overrides bounce and duration. | Older Framer Motion docs listed stiffness 100; set values explicitly rather than trusting a default. For gestures use `type: "spring"` with the drag velocity carried in. |
| React Spring, `config` presets | tension (stiffness), friction (damping), mass | default 170 / 26, gentle 120 / 14, wobbly 180 / 12, stiff 210 / 20, slow 280 / 60, molasses 280 / 120, mass 1 throughout | Also accepts `duration` (which turns the spring into a tween) and `clamp: true` (no overshoot). |
| Jetpack Compose, `spring(dampingRatio, stiffness)` | dampingRatio (ζ), stiffness (k) | Defaults `DampingRatioNoBouncy` (1.0) and `StiffnessMedium` (1500). Constants: damping ratios HighBouncy 0.2, MediumBouncy 0.5, LowBouncy 0.75, NoBouncy 1.0; stiffness High 10000, Medium 1500, MediumLow 400, Low 200, VeryLow 50. | Compose's stiffness scale is large because its units are dp per second squared; 400 (MediumLow) is the usual content spring. |
| Flutter, `SpringDescription(mass, stiffness, damping)` with `SpringSimulation` | mass, stiffness, damping | No named presets in the framework; `SpringDescription.withDampingRatio(mass:, stiffness:, ratio:)` takes ζ directly. | Used through `AnimationController.animateWith()`. |
| CSS, `linear()` easing (CSS Easing Level 2) | A sampled curve | None; generate the samples from a spring function at build time (Chrome 113, Firefox 112, Safari 17.2 support `linear()`). | The only way to run a spring on the compositor in plain CSS. Fixed duration, so it is not interruptible with velocity; fine for enters and exits, wrong for gestures. |

### 3.9 Why springs beat durations for interruptible motion

A duration-based animation has a start state, an end state and a curve between them. Interrupt it (the user taps again, drags back, the data changes) and you have two bad options: snap to the end, or start a new tween from the current position with zero velocity, which produces a visible hitch where the object stops dead and restarts. A spring carries its current velocity into the new target, so an interrupted move bends toward the new goal with no discontinuity. This is why Apple's gesture system (section 9) is springs end to end, why Motion's layout animations default to springs, and why the house rule is: tweens for choreography the user watches, springs for anything the user's finger touches.

## 4. Duration, distance and stagger

### 4.1 Ranges

| Class | Range | Examples | Reason |
|---|---|---|---|
| Micro | 100 to 200ms | Hover colour, press state, toggle knob, checkbox tick, tooltip | Below 100ms the change reads as a cut; above 200ms a frequent action starts to feel slow (Doherty, section 1.2). |
| Small | 200 to 300ms | Dropdown, popover, tab indicator, toast enter, list item | Long enough to read the direction of travel; short enough to repeat all day. Emil Kowalski's cap for most UI is 300ms (section 6.3). |
| Large | 300 to 500ms | Sheet, drawer, modal, container transform, section reveal | Larger objects and longer distances need more time or they read as teleporting. |
| Page | 400 to 700ms | Route change, hero reveal, full-screen image, scroll-narrative beat | The whole stage changes; the eye needs the longer settle. Beyond 700ms a page transition becomes a wait. |
| Brand | 800 to 2000ms | Logo reveal, campaign film sting, one-off microsite peak | The viewer is an audience, once. These numbers never apply to anything the user does twice. |

Product systems run at the lower end of each band; luxury runs at the upper end with a longer ease-out tail, because slowness is a signal of confidence (design-taste, section 2). The difference is in the tail, never in the start: the first frame of response is still inside 100ms.

### 4.2 Exit faster than enter

House ratio: exit duration is about 0.7 x the entrance duration. Material's original 2014 guidance gave 225ms entering and 195ms leaving on mobile (0.87); Carbon and Fluent pair faster accelerate curves with their exits. The reason is attention: an entering element is new information and the eye needs time to find and read it; an exiting element has already been read, and the user's attention has moved to whatever comes next. A slow exit is a wait disguised as elegance.

### 4.3 Distance-based duration

The same duration across different distances produces different speeds, and the eye reads speed. Material's 2014 guidance scaled duration with distance and screen size (tablet transitions about 30% longer than phone, wearable about 30% shorter). Working heuristic for the web:

duration = base + distance x rate, clamped to the band

- base 200ms, rate 0.3ms per px, cap 500ms for UI moves. A 100px move takes 230ms; a 600px move takes 380ms; a full-height 1000px move hits the cap.
- Size counts as distance: a full-screen sheet is a large move even when it only travels 60% of the viewport.
- Springs handle this automatically because stiffness and damping are independent of distance; a spring moving further simply moves faster. This is the second reason to use springs for layout.

### 4.4 System duration tokens

Material 3 (`md.sys.motion.duration`, from the material-web token source, v0.192):

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

Microsoft Fluent 2 (`@fluentui/tokens`): durationUltraFast 50, durationFaster 100, durationFast 150, durationNormal 200, durationGentle 250, durationSlow 300, durationSlower 400, durationUltraSlow 500. Windows control defaults sit at 83ms (faster) and 167ms (fast), which is five and ten frames at 60Hz, and this is the right way to think about micro durations: in frames.

### 4.5 Stagger

A stagger is a per-item delay that turns a group entrance into a sequence. Values: 20 to 60ms per item. The reason for the floor is that below 20ms items appear simultaneous; the reason for the ceiling is that at 60ms a list of eight items already takes 480ms of delay before the last one even starts. Rules:

- Cap the total stagger at 300ms (about 400ms for a page-level reveal). Past eight items, stagger by group or by distance from the trigger rather than by index.
- Direction follows the cause: a list opened from the top staggers downward; items that enter from a tapped point stagger outward from it.
- One stagger per screen. Two overlapping staggers read as noise.
- Under reduced motion, stagger collapses to 0 and the group fades as one.

### 4.6 Frame arithmetic

At 60Hz: 100ms is 6 frames, 200ms is 12, 300ms is 18, 500ms is 30. At 120Hz double each. A 70ms micro duration is 4 frames at 60Hz and 8 at 120Hz; this is why the same spec can feel crisper on a ProMotion phone. Specify in milliseconds and let the platform sample; never specify in frames for interface work (video, section 14, is specified in frames).

## 5. Choreography

Choreography is the ordering and relationship of several moves. It is where most interface motion fails: every element has a sensible animation on its own and the sum is chaos.

### 5.1 Hierarchy of motion: what moves first

1. The thing the user touched responds first (press state, within 100ms).
2. The container moves next (the sheet rises, the panel opens, the page slides).
3. The content inside the container follows, with a short lag (20 to 60ms) and its own shorter duration, so it appears to be carried.
4. Secondary elements (badges, counts, chevrons) update last, or during, never before.
5. On exit the order reverses in compressed time: content fades first (fast), container leaves, and the trigger returns to rest.

Parent before child on enter; child before parent on exit. Breaking this reads as the content arriving before its container exists, which the eye cannot accept.

### 5.2 Material's four transition patterns

The Material motion system (2020, carried into M3) names four patterns that cover most navigation. The numbers are Material's; the verdicts are the house's.

| Pattern | What it does | Material numbers | House verdict |
|---|---|---|---|
| Container transform | An element (card, button, list item) morphs into the full view it opens; the outgoing and incoming surfaces are clipped inside one container that changes size and shape. | About 300ms open, 250ms close, with content crossfading inside the morphing container. | Yes, once per flow. It is the strongest spatial continuity available. |
| Shared axis | Outgoing and incoming views move along the same axis (x for lateral, y for vertical, z for depth) with a fade. | 30dp offset, about 300ms; outgoing fades over the first 90ms, incoming over the remaining 210ms. | Yes for steppers and sequences. |
| Fade through | Outgoing fades out, incoming fades in with a slight scale up. | About 300ms; outgoing exits in the first 90ms (30%), incoming enters over 210ms scaling 92% to 100%. | Yes for unrelated destinations (tab switches). Drop the scale for luxury: a plain crossfade over 250ms. |
| Fade | A single element appears or disappears in place. | Enter about 150ms, exit about 75ms. | Yes, for dialogs and menus; the default for anything with no spatial relationship. |

### 5.3 Shared element transitions

A shared element is one that exists in both the outgoing and incoming view (the product image on a listing and on its detail page). It travels, resizes and keeps its identity while everything else crossfades. Rules: name at most two or three shared elements per transition (the image, the title, perhaps the price); keep aspect ratio changes honest with a crop rather than a stretch (object-fit cover during the move); give the shared element the full transition duration (300 to 400ms) while surrounding content enters shorter (200ms) and later (60 to 100ms delay). Implementation: View Transitions API `view-transition-name` (section 8), Motion `layoutId`, GSAP Flip, SwiftUI `matchedGeometryEffect`, Compose `SharedTransitionLayout`, Flutter `Hero`.

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

Pitfalls: scaled text and borders distort during the move (use `scale` on containers only, or counter-scale children); nested FLIPs compound (GSAP Flip's `nested: true` and `absolute: true` exist for this); read layout once per batch to avoid layout thrash (section 12).

### 5.5 Enter and exit choreography

Enter: fade and a small move on one axis (8 to 24px) with ease-out; never scale from 0 (it reads as a cartoon); scale from 0.96 to 1 is the maximum for luxury. Exit: fade with a smaller move (4 to 12px) in the opposite direction, ease-in, 0.7 x the enter duration. Dialogs: backdrop fades over 200ms, dialog enters over 250 to 300ms starting 40ms later; on exit both leave in 150 to 200ms with the dialog first. Toasts: enter from the edge they live on with ease-out 300 to 400ms; exit with ease-in 200 to 250ms; never bounce.

### 5.6 List reordering, insertion and removal

Insertion: the new item fades in and the items below move down with ease-in-out 200 to 300ms (FLIP). Removal: the item fades and collapses (height to 0, or FLIP the siblings up) over 200ms; siblings move after the removed item has started leaving, never before. Reordering: FLIP every moved item with the same duration and curve so they read as one gesture; items that did not move stay still. Drag reorder: the dragged item follows the finger 1:1 with a slight lift (scale 1.02, a hairline shadow); the others spring aside (Compose and Motion do this natively; see section 9).

### 5.7 Continuity of position and shape

An object that leaves the screen on the right should come back from the right. A sheet that rises from the bottom dismisses to the bottom. A card that expands into a page collapses back into the card, into the same slot, even if the list has scrolled (scroll the list back under the collapsing card). A circle that becomes a rectangle changes radius continuously through the move. Each broken continuity costs the user a re-orientation, and re-orientation is the cost that motion exists to remove.

### 5.8 The one considered move

design-taste, section 5, holds the rule: one considered motion per page that reveals the idea, everything else still. In choreography terms: pick the move that carries the concept (the image that settles into place, the headline that arrives in one long ease-out, the container that transforms), give it the full budget (duration at the top of its band, the long-tail curve, the stagger if any), and reduce every other motion on the page to feedback-only (micro durations, no travel beyond 8px, opacity where possible). A page with one 900ms reveal and twenty 120ms feedback moves reads as expensive. A page with twenty 500ms reveals reads as a slideshow.

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

Decoration is allowed. It is budgeted: one piece per screen in product work, one peak per page in marketing work. The test for spending it: would the brand be poorer without this move? If the answer is "the page would still be fine", the move is noise and the budget is still unspent. The budget is also cumulative across frequency: a delightful move seen the hundredth time is a tax (Rauno Freiberg's observation, 6.3), so decoration lives on low-frequency surfaces (onboarding, a completed purchase, a campaign microsite) and never on high-frequency ones (navigation, search, keyboard-driven menus).

### 6.3 The practitioner principles: Rauno Freiberg and Emil Kowalski

Both are design engineers whose written principles are the current reference for interface motion craft; Freiberg's are in his essay Invisible Details of Interaction Design, Kowalski's in his articles and his course animations.dev. The principles they share, with the reason behind each:

1. Animate what the user caused. Motion follows the gesture's momentum and angle; a dismissed app "retains the momentum and angle at which it was thrown". Reason: the motion is the gesture's consequence, so it must inherit the gesture's physics.
2. Keyboard-initiated and high-frequency actions get little or no animation (command menus, context menus, the macOS app switcher). Reason: an action performed hundreds of times a day accumulates every millisecond of its animation as delay.
3. Keep to transform and opacity. Reason: they are composited without layout or paint (section 12); everything else costs frames.
4. Avoid animating layout properties (width, height, padding, top, left). Reason: each frame triggers layout for the element and often for its ancestors. Use FLIP.
5. Never block input. The user can act during any animation; the animation adapts. Reason: blocking makes the interface the user's superior.
6. Interruptibility. Every animation can be retargeted mid-flight with a smooth transition (CSS transitions do this; springs do it with velocity). Freiberg's example of failure is iOS Settings forcing the slide-in to finish before a back swipe registers.
7. Ease-out by default, under 300ms for most UI, with the exceptions reasoned (Kowalski accepts a slower toast in Sonner for its character; a 500ms enter on a frequent tool is the example of wrong).
8. Gestures respond immediately and track 1:1; thresholds decide what happens at release, never whether to respond. Destructive outcomes wait for the gesture to end, regardless of distance.
9. Show origin: an element enters from where it conceptually lives (an app from its icon; the app switcher from the right, where the stack is).
10. Respect reduced motion (section 11).

### 6.4 Apple's motion guidance

WWDC18, Designing Fluid Interfaces (Chan Karunamuni, Nathan de Vries, Marcos Alonso): interfaces respond instantly, every moment; gestures are redirectable (one swipe can end in several destinations as the finger changes its mind) and interruptible; motion carries the gesture's momentum into a projected destination (section 9.2); damping starts at 100% and drops to about 80% only when momentum exists; swipe hysteresis is 10 points before a swipe begins; a double-tap recogniser adds about 0.5s to every single tap and should be avoided on primary actions. WWDC23, Animate with springs (Jacob Xiao): the duration and bounce vocabulary, bounce 0 as the general-purpose spring, 0.15 small, 0.3 noticeable, above about 0.4 too much for UI, and the warning that settling duration is unpredictable so completion should key off the perceptual duration. The Human Interface Guidelines add: motion should be purposeful, brief, and consistent; realistic physics preferred; always offer a reduced-motion alternative.

### 6.5 The system vocabularies compared

| System | Primary split | Signature | Where it fits the house |
|---|---|---|---|
| Material 3 | standard versus emphasized easing; 16 duration tokens | The container transform; asymmetric curves with long settles | The standard curve (0.2, 0, 0, 1) is the house move curve. |
| IBM Carbon | productive versus expressive | Curves that arrive at y 0.9 for crispness; six durations from 70 to 700ms | The productive and expressive split is the delight budget as a token. |
| Microsoft Fluent 2 | decelerate / accelerate / easy-ease at min, mid, max strengths; eight durations 50 to 500ms | Strongly asymmetric decelerate (0, 0, 0, 1) | A good library of exits. |
| Apple | springs everywhere; duration and bounce | Gesture continuity, redirectability | The gesture model (section 9) is Apple's. |

