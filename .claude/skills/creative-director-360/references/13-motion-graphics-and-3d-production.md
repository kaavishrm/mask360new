# Motion graphics, animation and 3D production

The production craft of animated work for Mask360: pipeline and gates, After Effects in depth, kinetic type, titles and supers, logo animation, explainers, 3D, real-time and web motion, AI video, frame rates, codecs, sound and the studios to study. Taste decisions sit in design-taste (SKILL.md section 5, "Motion"); this file is the technical layer beneath them. As of October 2026.

## Contents

1. [The pipeline: gates, durations and deliverables](#1-the-pipeline-gates-durations-and-deliverables)
2. [Styleframes, storyboards and animatics](#2-styleframes-storyboards-and-animatics)
3. [After Effects in depth](#3-after-effects-in-depth)
4. [Kinetic typography craft](#4-kinetic-typography-craft)
5. [Lower thirds, titles, supers and subtitles](#5-lower-thirds-titles-supers-and-subtitles)
6. [Logo animation](#6-logo-animation)
7. [Explainers, infographic motion and character animation](#7-explainers-infographic-motion-and-character-animation)
8. [3D for designers as of October 2026](#8-3d-for-designers-as-of-october-2026)
9. [Web motion and real-time](#9-web-motion-and-real-time)
10. [Generative and procedural](#10-generative-and-procedural)
11. [AI in motion as of October 2026](#11-ai-in-motion-as-of-october-2026)
12. [Frame rates, resolutions and formats](#12-frame-rates-resolutions-and-formats)
13. [Delivery codecs and settings](#13-delivery-codecs-and-settings)
14. [Sound for motion](#14-sound-for-motion)
15. [Studios and work to study](#15-studios-and-work-to-study)
16. [The craft tells](#16-the-craft-tells)
17. [Reference table by destination](#17-reference-table-by-destination)

[Terms introduced](#terms-introduced). [Sources and further reading](#sources-and-further-reading).

## 1. The pipeline: gates, durations and deliverables

A motion job is a chain of sign-offs. Each gate freezes one layer of decisions so the next, more expensive layer can start. Reopening a frozen layer costs the whole chain below it, which is why a storyboard change after animation has started is billed as a new round. The durations below are working-day planning norms for a 30 to 60 second brand film at an agency of Mask360's size; a 15 second social cut compresses each stage by about half, a 3D product film roughly doubles the design, animation and render stages.

| Stage | Typical duration | Deliverable | What the client signs off | Why the gate exists |
|---|---|---|---|---|
| Brief | 1 to 2 days | One-page brief: objective, audience, single idea, destinations (ratios, durations, languages), references, budget, dates | The brief itself | Every later argument is settled by pointing at this page |
| Script and voice over | 3 to 5 days writing, 1 day record | Script with timings per line, scratch VO (a rough read used only for timing, often synthetic in 2026: 14.5), then the recorded VO | Final script words; VO artist from 2 to 3 options | Words set the duration. A 60 second VO at 150 words per minute is 150 words; a script of 190 words will never fit |
| Moodboard and styleframes | 5 to 7 days | 1 to 2 directions, each with 3 to 5 styleframes (finished-quality still frames that prove the look) | One direction | A styleframe costs a day; an animated scene costs a week. Decide the look at the cheaper price |
| Motion test | 2 to 3 days per approved direction | A 3 to 5 second animated proof built from one styleframe: the ease curve (3.3), the transition logic between two frames, the type entrance and the camera move, if any | The movement language, signed with the styleframes | Styleframes prove the look and say nothing about movement; "too slow" or "too bouncy" settled here costs 2 days, and at the blocking review it costs a re-animation. On 3D jobs the motion test is the first shot of the layout gate (1.3) |
| Storyboard | 3 to 5 days | 12 to 24 boards per 30 seconds, with action notes, camera notes and the VO line under each | The sequence of shots and what happens in each | Fixes structure before design time is spent on frames that will be cut |
| Animatic | 2 to 3 days | Boards cut to the scratch VO and a temp music track, with real timings, exported as a video | Timing and pacing | The animatic is the contract for duration. Anything approved here can be animated to the frame |
| Design | 5 to 10 days | Every keyframe designed to styleframe quality, assembled into a design animatic (the animatic rebuilt with final frames) | Every frame as a still | Animators should never design while animating; it doubles the time and halves the consistency |
| Animation | 10 to 20 days for 30 seconds of 2D | Blocking pass (positions and timing, no polish), then polish pass, then a review cut with temp sound | Blocking at a mid-point review, polish at the end | Blocking lets the client see motion before the expensive polish; polish is where the ease curves and offsets live |
| Render | 1 to 3 days | Image sequences (OpenEXR, the multi-layer high dynamic range format, or PNG) for every scene, then a master | Nothing; internal | Rendering to image sequences means a crash at frame 1,100 of 1,500 loses one frame, and a fix re-renders only the changed range |
| Sound design and mix | 3 to 5 days | Sound effects, music edit to picture, VO placement, mix to a loudness target (section 14) | The mix, reviewed with the picture | Sound is half the perceived quality; it is scheduled last because it needs locked picture |
| Grade | 1 day | Colour-corrected master, checked on the destination device | The grade on a reference monitor or the client's phone | The grade is where a Rec. 709 (the HD broadcast colour space, 3.1) export is checked against the sRGB phone and the broadcast monitor |
| Delivery and versions | 2 to 3 days | Masters, platform versions, language versions (Devanagari, Arabic), transparent versions, stills | The delivery list, ticked | Versions are where most agency errors happen: wrong ratio, wrong frame rate, wrong language cut; the version matrix and its automation are in 3.17 |

Summed end to end, the stages give about 39 to 68 working days for 30 seconds and 49 to 88 for 60 seconds, where animation doubles. Three overlaps are normal and save about 7 to 12 days: styleframes start once the script's idea is agreed, the storyboard is drawn while the motion test is built, and sound design starts on the locked animatic and runs alongside render and grade. A 60 second brand film therefore runs about 8 to 15 weeks (42 to 76 working days) from brief to delivery, with two client review rounds built into each gate; a third round at any gate is billed (rounds policy: 24-business-of-creative-and-agency-operations.md, section 3.4). A schedule shorter than this removes rounds or the design stage, and the estimate should say which.

### 1.1 Running reviews

- Review on Frame.io (Adobe), on its V4 platform. Plans as of October 2026 (frame.io): Free with 2 members and 2 GB, Pro at US $15 per member per month with 2 TB, Team at US $25 with 3 TB and internal comments that clients never see, Enterprise on quotation. It gives frame-accurate comments anchored to a point on the frame, version stacks (every upload of the same cut stacked so reviewers compare v03 to v04), Collections (saved metadata views), transcription with speaker identification and captions on every plan, and Camera to Cloud for shoot days. Comments on a WhatsApp forward of an MP4 are unusable because nobody knows which frame the client means.
- Post the review cut with burnt-in timecode (a timecode overlay rendered into the picture) so a phone screenshot still identifies the frame. In After Effects, the Timecode effect on an adjustment layer does this.
- Reviews are decisions, so a review round closes with a written list of changes, each tagged to a timecode, a gate and an owner. Comments that reopen an earlier gate ("can we change the order of scenes 3 and 4" during animation) are quoted back with the cost before any work starts.
- Two rounds per gate is the norm written into the estimate. The reason is arithmetic: a 60 second film has 11 client gates (the table above; 3D jobs add the gates in 1.3), and unlimited rounds at each would make the schedule unknowable.
- Internal review happens before every client review, with the creative director watching at 1x with sound, then at 0.5x with sound off, then frame-stepping the three hardest transitions. The 0.5x pass exposes ease and timing faults the eye forgives at full speed.
- Shot tracking on multi-shot 3D jobs: Frame.io records comments and has no view of 40 shots moving through clay (grey-shaded models), lookdev (look development: building and approving materials) and lighting. Track shot status in Flow Production Tracking (Autodesk's renamed ShotGrid), ftrack or Kitsu (CGWire, open source), with the shot codes of 2.2, and use SyncSketch or Frame.io's drawing tools for draw-overs on frames.

### 1.2 Estimating a motion job

- Cost = the sum over stages of (days from the stage table multiplied by the day rate of each role on that stage) + render (8.6) + licences (music, fonts, stock, AI credits) + versions (the matrix in 3.17) + a contingency of 10 to 15 percent held inside the fee (24-business-of-creative-and-agency-operations.md, section 3.3). Day rates come from the rate card (24, section 3.2) and freelance costs from 24, section 15.1.
- Productivity norm implied by the stage table: 30 seconds of polished 2D in 10 to 20 animator-days, which is about 1.5 to 3 finished seconds per animator-day. Rigged character work runs slower and frame-by-frame slower again (7.4), so quote those from a test shot; 3D doubles the design, animation and render stages.
- Worked floor for the animation stage of a 60 second 2D film: 20 to 40 animator-days at a senior freelance motion rate of Rs 12,000 to 25,000 a day (24, section 15.1) is Rs 2.4 lakh to Rs 10 lakh of cost before margin; freelance cost sits at 50 to 65 percent of the billing rate (24, section 15.1), so the billed line is higher again.
- Crew for a 60 second brand film: creative director, producer, designer (styleframes and design), 1 to 3 animators, a 3D generalist or lookdev artist if there is 3D, a compositor, a sound designer and a colourist. Each role appears as its own line with its own days, so procurement can see what a cut removes.
- Rounds are quoted explicitly: two per gate are included, and a third is a change order priced from the rate card (24, section 3.4).
- The estimate is valid only for the frozen brief. A new ratio, duration, language or end-card variant is a new line, priced from the version matrix (3.17).

### 1.3 Gates for 3D jobs

A 3D job adds its own sign-offs, each frozen because a re-render is expensive (8.6). Without them the client first sees materials at the final render and reopens modelling.

| Gate | What the client sees | What it signs off |
|---|---|---|
| 1. Model in clay | Grey-shaded turntable stills of every hero object | Form, proportion and scale, checked against the physical sample or the CAD (computer-aided design) file |
| 2. Layout or previs (previsualisation: a rough moving version of the film for planning) | A viewport render (a playblast) at real timing with the final cameras | Camera moves, lenses and timing; the motion test (section 1 table) is its first shot |
| 3. Simulation, if any | A grey-shaded playblast of each liquid, cloth or particle simulation (8.3) | The behaviour of the simulation, before lookdev, because a re-simulation invalidates every later stage |
| 4. Lookdev | Each material on a turntable under a neutral studio HDRI (a high dynamic range panorama used as light, 3.10), beside a photograph of the physical sample under the same light | Metal colour (18 against 22 carat), stone colour, finish and texture |
| 5. Lighting | 3 to 5 key frames rendered at final quality | Light, mood and the reflection shapes on the product |
| 6. Final render, then comp and grade | As the 2D table | As the 2D table |

House rule: the client never meets a material for the first time at the final render, because a material change after lighting re-renders every frame, and 8.6 prices one such round at about the cost of the whole first render.

## 2. Styleframes, storyboards and animatics

### 2.1 Styleframes

A styleframe is a single frame rendered to final quality that proves the look can exist. It must prove five things, because each is a separate way a direction fails in animation: the typeface works at the sizes the film needs; the palette survives on the darkest and brightest scene; the image treatment (3D, photo, illustration, type only) can be produced in the schedule; the composition has room for the VO's longest line; and the frame still reads at 400 pixels wide, since most of the audience sees it on a phone.

Make three to five styleframes per direction. Three is the minimum because a single frame can hide the fact that the look only works for one kind of content: choose the opening frame, the busiest data or product frame and the end frame. Build them at the master resolution (3840 by 2160 for anything that may go to a screen; 1080 by 1920 if the film is vertical only) and at 16 bits per channel so gradients do not band when the frames become the animation.

Present styleframes on a neutral mid grey, because a coloured deck background shifts how every colour in the frame reads and the client must judge the frame's own colour. Show each frame once at full size, then the set at thumbnail size, since the thumbnail row is how the film will look in a feed.

### 2.2 Storyboards

Boards are drawn fast and small (board formats and the shot list: 14-video-preproduction-and-cinematography.md, section 3.4). A 30 second film takes 12 to 24 boards: one per shot, plus one per significant change inside a shot (a camera move, a type reveal, a product turn). Fewer than 12 and the board hides timing problems; more than 24 for 30 seconds and the film is probably over-cut for a luxury audience, where a 3 to 5 second average shot length reads expensive and a 1 second average reads like a retail promo.

Each board carries four things: the frame (a 16:9 or 9:16 box, drawn with the actual safe areas marked), the action note ("ring rotates 90 degrees, light sweeps across the pavé"), the camera note (static, push in, rack focus, with the lens if 3D), and the VO or super (any short line of text on screen) that sits under it. Draw boards for vertical and landscape at the same time if both are deliverables; a film designed landscape and "cropped for Reels" loses its composition and the client notices on the first review.

Tools: Storyboarder (Wonder Unit, free), Boords (Animade, section 15), Toon Boom Storyboard Pro (the industry standard, with animatic timing built in), Procreate or Photoshop for drawn boards, and AI-generated boards for previs only (11.4). Number shots as SC03_SH02 (scene 3, shot 2) so the board, the AE precomp names (3.9), the shot tracker (1.1) and the review stack carry one code.

### 2.3 Beat sheets and animatics

A beat sheet is the film as a list of beats with durations: "0:00 to 0:03 black, VO line 1; 0:03 to 0:07 ring reveal; ...". Write it before the storyboard and check the arithmetic: beats must sum to the brief's duration with 1 to 2 seconds held for the end card (the closing frame carrying the logo, line and call to action; 5.3). This is the fastest way to catch a 60 second script hiding in a 30 second brief.

The animatic is the boards cut to the scratch VO and temp music at the real frame rate. Timing rules that hold across luxury work:

- Hold the first frame for 12 to 24 frames at 24 fps (0.5 to 1 second) before anything moves. Stillness at the start reads as confidence (design-taste, section 2, "Slowness").
- Give every super a reading time of about 0.5 seconds per word, with a floor of 2 seconds. Section 5 has the derivation.
- Let the music drive cuts only after the structure is set; cutting to music first produces a film that is a music video for the track.
- Export the animatic at the destination ratio with burnt-in timecode, and ask the client to watch it on a phone with sound.

## 3. After Effects in depth

After Effects (AE) is the house 2D animation and compositing application. As of October 2026 the current release is 26.5 (9 September 2026, reported by CG Channel), whose headline is an experimental agentic AI Assistant in beta that drives the application from prompts. The 2026 cycle before it: 26.0 (January 2026) added a parametric mesh tool (spheres, cubes, cones), Substance 3D material (SBSAR) support and multiple shadow-casting Spot, Parallel and Environment lights in the Advanced 3D renderer; 26.3 (18 June 2026) added depth of field in Advanced 3D, a mask tracker Adobe describes as up to five times faster, a Curl Noise effect, SVG paste from Illustrator as editable shape layers, a copy-frame-to-clipboard command (16-bit PNG on macOS) and a variable-font filter in the font list. Adobe's AI selection and isolation tools change from release to release, so confirm what the installed build offers before promising it in a schedule. Single-app subscription is listed at US $34.49 per month or $263.88 per year; AE requires Windows 11 or macOS 14 or later.

### 3.1 Project and composition settings

- Bit depth. Project Settings, Color: 8, 16 or 32 bits per channel (bpc). Work at 16 bpc as the floor, because 8 bpc gradients band (show visible steps between levels) over more than about 60 steps of luminance, and most luxury work is slow gradients on dark grounds. Use 32 bpc (floating point) for glows, light wraps, HDR and anything with values above white, since 16 bpc clips at 1.0.
- Working colour space. The default is Rec. 709 (the HD broadcast colour space, ITU-R BT.709, which shares sRGB primaries). AE 2024 (24.0) introduced OpenColorIO (OCIO, the open colour management standard) and ACES (the Academy Color Encoding System, a scene-referred pipeline with ACEScg as the linear working space) in Project Settings; use ACEScg when compositing EXR renders from Redshift, Cycles or Karma so the 3D linear light is preserved, and let the output transform produce Rec. 709 for delivery. "Linearize working space" matters even in Rec. 709: blends, blurs and glows computed in linear light stop producing the dark fringe between two bright colours (why: 04-colour.md, section 3.3).
- Composition settings. Resolution at the master size (3840 by 2160 or 1080 by 1920), square pixels (pixel aspect ratio 1.0), duration from the animatic plus 2 seconds of handle (extra frames at head and tail for the editor), and the frame rate decided at the brief:
  - 24 fps: cinema, brand films, anything that should feel filmic. Motion blur at 180 degrees shutter looks correct at 24.
  - 25 fps: broadcast and most agency work in India, the UAE, the UK and Europe, which inherited the 50 Hz PAL standard. Mask360's default for anything that may go to television or a hotel screen in either country.
  - 30 fps: social platforms where 30 is the recorded norm; also the United States and Japan (60 Hz heritage), where 29.97 is the broadcast number.
  - 60 fps: UI motion, product spins, gaming, anything the viewer scrubs or watches close; it reads smooth and slightly "video", which is a deliberate choice against the filmic 24.
  - 23.976 and 29.97: these are 24 and 30 multiplied by 1000/1001, a 1950s NTSC compromise to fit the colour subcarrier. 23.976 is what a camera shooting "24" for broadcast usually records; match it only when cutting into such footage. 29.97 timecode comes in drop-frame (DF, which skips frame numbers 0 and 1 at the start of every minute except each tenth minute, so timecode stays aligned to the clock; 18 numbers per 10 minutes, no frames are actually dropped) and non-drop (NDF). AE shows DF with semicolons (00;00;00;00) and NDF with colons. Deliver DF for US broadcast and NDF elsewhere, with one convention per job.
- Never mix frame rates in a comp. A 30 fps clip in a 25 fps comp repeats or skips one frame in six, which shows as a stutter every 0.2 seconds; conform the source (Interpret Footage, Conform to frame rate) or retime it with frame blending (3.11).

### 3.2 Layers, anchor points, keyframes and interpolation

- The anchor point is the layer's pivot for scale and rotation. Every layer gets its anchor set with intent before the first keyframe (Pan Behind tool, Y, or Layer, Transform, Center Anchor Point in Layer Content). A logo that scales from its corner because the anchor was never moved is the most common beginner tell.
- Keyframe interpolation types: linear (constant speed, reads mechanical), bezier (hand-shaped handles), auto bezier (AE smooths through the keyframe automatically, used on spatial paths), continuous bezier (handles linked, smooth through the keyframe), and hold (no interpolation; the value jumps at the keyframe, used for cuts, visibility switches and stepped motion). Temporal interpolation (how the value changes over time) and spatial interpolation (the shape of the path in space) are set separately; a spatial path can be linear while the timing is eased.
- Easy Ease (F9), Ease In (Shift F9) and Ease Out (Ctrl Shift F9) apply a symmetrical 33.33 percent influence (how far a keyframe's bezier handle reaches into the interval towards the neighbouring keyframe). Treat them as a starting point only; 3.3 explains why the default ease reads generic.
- Rove across time: a spatial keyframe with "Rove" lets AE place it in time so the speed along a path stays constant between the surrounding keyframes, removing the hitch at a corner.

### 3.3 The graph editor and the luxury ease

The graph editor (Shift F3) shows either the value graph (value against time, the shape of the motion) or the speed graph (speed against time, where the eye reads acceleration). Animate position with the speed graph and everything else with the value graph; for position, the value graph splits into x and y curves that are hard to read together.

The luxury ease is asymmetric. A symmetrical easy ease spends as long accelerating as decelerating, which reads as a shuttle moving between two stops. Expensive motion starts quickly and takes a long time to settle, like a heavy object that was already moving: in the speed graph, a short rise and a long tail. Practical values, measured in the keyframe velocity dialogue (right-click a keyframe, Keyframe Velocity):

| Move | Outgoing influence (from first key) | Incoming influence (into last key) | Duration | Reads as |
|---|---|---|---|---|
| Luxury reveal (type, product) | 0 to 20 percent | 80 to 100 percent | 0.8 to 1.6 s at 24 fps | Heavy, settled, calm |
| UI or app motion | 20 to 40 percent | 60 to 80 percent | 0.25 to 0.45 s | Responsive |
| Playful, consumer | 10 percent | 70 percent plus overshoot | 0.4 to 0.6 s | Bouncy |
| Default Easy Ease | 33 percent | 33 percent | any | Generic, a tell |

The web equivalent of the luxury reveal is the "expo out" cubic bezier (0.16, 1, 0.3, 1), which section 9 uses for GSAP (the GreenSock JavaScript animation library, 9.1). Overshoot (the value passes the target and returns) belongs to playful brands; on a luxury logo it reads as a cartoon. Where two elements move together, give them the same curve shape and offset their start by 2 to 4 frames; identical start times read as a mechanical group and large offsets read as a sequence.

### 3.4 Motion paths, parenting and nulls

- Motion paths are the spatial curve of a position animation; edit them in the comp viewer with bezier handles. Straight-line paths between two keyframes read as a slide; a slight arc (the "arcs" principle in Thomas and Johnston's twelve principles of animation, 1981) reads as physical.
- Parenting (the Parent column) makes a child inherit the parent's transform, so a group of elements moves as one from a single set of keyframes. A null object (an invisible layer with transform only, Layer, New, Null Object) is the usual parent; one null per logical group, named for the group, so a scene can be repositioned by one layer. Parent before keyframing, because reparenting an animated layer changes its apparent motion.
- Camera and null: for 2.5D scenes (flat layers placed in 3D space so that a camera move produces parallax), parent the camera to a null and animate the null's position and rotation; the camera itself keeps its point of interest behaviour and the null gives clean, readable keyframes.

### 3.5 Shape layers

Shape layers are vector graphics native to AE, rendered at any resolution without pixelation. Each shape group holds paths, fills, strokes and operators:

- Trim Paths: animates the start and end of a stroke, the basis of every line-draw reveal. Animate End from 0 to 100 percent with the luxury ease; animate Offset for a travelling dash.
- Repeater: an operator that duplicates a shape with an incremental transform (position, rotation, scale, opacity per copy). A ring of 36 ticks is one tick with a Repeater of 36 copies at 10 degrees rotation, with the group anchor at the ring centre.
- Merge Paths: boolean operations (Add, Subtract, Intersect, Exclude Intersections) between paths in a group; the way a counter is cut from a letterform converted to shapes.
- Offset Paths: expands or contracts a path by an amount, animatable for an inflating outline.
- Wiggle Paths and Wiggle Transform: random jitter on the path points or the transform; use with restraint and a low Wiggles per Second (0.5 to 2) for a hand-drawn tremor; the default values produce the boiling line of cheap explainers.
- Also: Round Corners, Pucker and Bloat, Twist, Zig Zag. Each is a tell when used as decoration; each is useful once as the idea.

Convert Illustrator logos to shapes (right-click, Create, Create Shapes from Vector Layer) so strokes, trims and merges can animate from the identity's construction (section 6).

### 3.6 Masks, mattes and blending modes

- A mask is a path on a layer that limits its visible area; masks have modes (Add, Subtract, Intersect, Difference), feather, expansion and opacity, all animatable.
- A track matte uses one layer's alpha (alpha matte) or luminance (luma matte) to cut another layer. Since AE 23.0 (October 2022) any layer in the comp can be chosen as a matte from the Track Matte column's dropdown, with an invert toggle, so the matte no longer has to be the layer directly above; this allows one matte to serve many layers. Luma mattes preserve soft edges from gradients and blurs, which alpha mattes from shapes do not.
- Set Matte (an effect) applies another layer's channel as a matte without the layer order constraint; useful inside precomps.
- Blending modes that carry most luxury work: Multiply (darkens, for shadows and ink on paper), Screen (lightens, for light leaks and glows), Overlay and Soft Light (contrast, for grain and texture), Add (light accumulation, use in 32 bpc). Grain is a Fractal Noise or a scanned film grain plate at 3 to 8 percent opacity in Overlay; above 10 percent it reads as a filter.

### 3.7 Effects that matter

| Effect | Use | Note |
|---|---|---|
| Gaussian Blur | The default blur; set Repeat Edge Pixels on so edges do not darken | Camera Lens Blur with a depth map is the physically plausible alternative |
| Directional Blur | A blur along one angle; cheap motion blur for a layer moving in one direction | Match the angle to the movement |
| CC Force Motion Blur | Adds motion blur to layers that cannot have the native switch (some effects, precomps with time remap) | Expensive to render; set the shutter angle to match the comp |
| Roughen Edges | Breaks a clean edge into a torn or printed one | A rising tactile signal in 2026 (design-taste, section 6) when scaled subtly; a cheap tell at default Scale |
| Turbulent Displace | Warps a layer with evolving noise, for heat haze, hand-held tremor on type, liquid | Animate Evolution with a slow expression (time*20); keep Amount low |
| Displacement Map | Offsets pixels by another layer's luminance; the basis of glass, water and the web-style liquid distortion | Precompose the map at the same size |
| Fractal Noise | Procedural noise for grain, clouds, smoke, textures, luma mattes | Evolution over time, Fractal Type "Dynamic", Contrast raised for mattes |
| Gradient Ramp | A two-point gradient; combine with a Fractal Noise overlay to avoid banding | Use 16 bpc; dither (add low-level noise that hides banding) with 1 percent noise |
| Tint and Lumetri Color | Tint for quick mono or duotone; Lumetri for curves, HSL, LUTs (look-up tables) and the grade | Lumetri is the AE grade tool; Resolve is the house grade tool for anything that matters |
| Posterize Time | Forces a layer to a lower frame rate (12 fps for a stop-motion feel) | Apply to a precomp; the only correct way to mix "hand-drawn 12" with "smooth 24" on purpose |
| Echo | Repeats previous frames with decay, for trails | A tell outside music or sport work |
| Time Displacement | Offsets time per pixel by a map's luminance, for scan and slit-scan effects | Needs long handles on the source |
| Glow | Blooms bright areas with a threshold | Avoid. The native Glow clips, bands and halos; it is the single most reliable "cheap" signal on type (design-taste, section 3). Deep Glow (Plugin Everything) renders physically plausible bloom in 32 bpc, and is still a tell on text; use it only for light sources |

### 3.8 Expressions

Expressions are JavaScript snippets attached to a property that compute its value every frame; the engine has been JavaScript, replacing the legacy ExtendScript interpreter, since AE 16.0 (October 2018). The ones that carry most work:

```javascript
// Random drift: 2 wiggles per second, 10 px amplitude
wiggle(2, 10)

// Loop the keyframed animation after the last key
loopOut("cycle")      // repeat
loopOut("pingpong")   // forward then back
loopOut("offset")     // repeat, continuing from the last value
loopOut("continue")   // keep the final velocity

// Rotation from time: 30 degrees per second
time * 30

// Map one property onto another, clamped
linear(thisComp.layer("Control").effect("Slider Control")("Slider"), 0, 100, 0, 360)
ease(time, 1, 3, 0, 100)   // same, with an ease curve between 1 s and 3 s

// Delay a follower by 4 frames (an offset without copying keys)
thisComp.layer("Leader").transform.position.valueAtTime(time - 4 * thisComp.frameDuration)

// Repeatable randomness: the same "random" value every render
seedRandom(index, true); random(0, 100)

// Cascade: each duplicated layer lags the layer above it by 3 frames
thisComp.layer(index - 1).transform.position.valueAtTime(time - 3 * thisComp.frameDuration)

// Expression Selector (a text-animator selector whose Amount per character is computed by an expression):
// a per-character stagger with its own timing
linear(time - textIndex * 0.04, 0, 0.5, 100, 0)

// Step any property to 12 fps on purpose
posterizeTime(12); value

// Source Text counter with Indian (lakh and crore) grouping, driven by a slider
v = Math.round(effect("Slider Control")("Slider")); s = v.toString();
last3 = s.slice(-3); rest = s.slice(0, -3);
(rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," : "") + last3
```

The counter returns 1,25,000 for 125000 and 1,00,00,000 for ten million; prefix "₹" (U+20B9) inside the string, and set the layer in tabular figures (03-typography.md, section 8.8) so digits do not jitter as they change. Two more functions carry data work: createPath(points, inTangents, outTangents, isClosed) (AE 15.0 and later) draws a shape path from data, so a chart redraws when its numbers change; and text.sourceText.style (AE 17.0 and later) sets font size, fill colour and tracking from controls, which keeps a MOGRT (Adobe's packaged motion graphics format, 3.14) rig editable without opening it.

Inertia and overshoot (Dan Ebberts' widely used expression, motionscript.com): after the last keyframe the property overshoots and settles like a spring, controlled by amplitude, frequency and decay. The house reserves it for playful work and keeps it off type for luxury clients; the reason is section 3.3.

```javascript
// Overshoot after the last keyframe (Dan Ebberts pattern)
amp = .1; freq = 2.0; decay = 4.0;
n = 0; if (numKeys > 0){ n = nearestKey(time).index; if (key(n).time > time) n--; }
if (n == 0){ t = 0; } else { t = time - key(n).time; }
if (n > 0 && t < 1){ v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t); } else { value }
```

- sourceRectAtTime(t, includeExtents) returns a text or shape layer's top, left, width and height at time t; a rectangle whose size expression reads the text layer's sourceRectAtTime, plus padding, is a responsive backing plate for lower thirds (name and role captions, 5.2) that fits any name length, including Devanagari and Arabic strings.
- Essential Properties (introduced as Master Properties in AE 15.1, 2018, renamed in 17.0) expose chosen properties of a precomp on the parent comp's Essential Graphics panel, so one lower-third precomp can be duplicated with different names and colours without opening it. They are also the mechanism behind MOGRTs (3.14).
- Expression controls (Slider, Checkbox, Color, Point, Angle, Dropdown Menu) on a null named "Control" give a rig a dashboard; every animated lower third or data chart should be drivable from one such null so the producer can change values without touching keyframes.
- Performance: expressions evaluate every frame; thousands of wiggle() calls across layers slow previews. Convert finished expressions to keyframes (Animation, Keyframe Assistant, Convert Expression to Keyframes) before handing off to Lottie (the JSON vector animation format, 9.5) or a render farm.

### 3.9 Precomposing strategy

A precomp (a composition used as a layer in another composition) is AE's grouping, caching and render-order tool. Rules:

- Precompose by scene and by logical object, named "SC03_Ring_Reveal" and "RIG_LowerThird", so the project panel reads like the storyboard.
- Precompose before applying an effect that must see the whole group (a blur on a group of layers, a matte on an assembled object, time remapping).
- Keep transforms on the precomp layer for scene-level moves (camera push) and inside the precomp for object animation; mixing both at one level makes the graph editor unreadable.
- Collapse Transformations (the sun icon) preserves vector sharpness and 3D through the precomp boundary; leave it off when the precomp needs its own motion blur or an effect applied to the flattened result.
- Build a master comp per ratio (16:9, 9:16, 1:1, 4:5) that references the same scene precomps, with Essential Properties for the elements that must reposition. Design the vertical version first if it is a deliverable (2.2).

### 3.10 3D layers, cameras, lights and renderers

- A 3D layer (the cube switch) gains z position, x and y rotation and orientation, and responds to cameras and lights. AE has three renderers in Composition Settings, 3D Renderer:
  - Classic 3D: 2.5D cards in space, fast, no intersections or extrusion; most kinetic type and parallax work.
  - Cinema 4D renderer (since AE 14.0, 2017): extrudes text and shapes with bevels; slow, limited materials; still the only native route to extruded type without the Advanced 3D renderer.
  - Advanced 3D (since AE 24.0, 2023): image-based lighting from an HDRI (a high dynamic range panoramic image used as a light source), import of 3D models (glTF, the Khronos 3D transmission format, and its binary form GLB; OBJ and further formats added through 2024 and 2025), extruded and bevelled text and shapes with physical materials, Substance 3D materials (SBSAR files) and a parametric mesh tool since 26.0 (January 2026), multiple shadow-casting lights since 26.0, and depth of field since 26.3 (June 2026) with Near and Far Blur controls and a focus distance that can link to a layer. Motion blur was unsupported in Advanced 3D at its launch and no release note verified for this file has added it, so renders needing it go through CC Force Motion Blur on a precomp or through the Pixel Motion Blur effect; check the renderer options in the installed build before planning a fast 3D move. Beta features listed with 26.3: Alt-drag layer duplication, Quick Set Anchor, an updated Effect Controls panel and colour labels for effects.
- Camera settings: Preset (the 35 mm film equivalents: 24, 28, 35, 50, 80, 135, 200 mm), Zoom (in pixels; it is the distance from camera to the plane where a layer is 1:1), Depth of Field on or off, Focus Distance, Aperture and Blur Level, Iris shape. A 50 mm preset is neutral (lens choice and its emotional effect: 14-video-preproduction-and-cinematography.md, section 8); 35 mm and wider exaggerates parallax (the apparent shift of near against far objects, the whole point of 2.5D); 80 mm and longer flattens, which suits product and type.
- Lights: Point, Spot, Parallel, Ambient, plus Environment lights in Advanced 3D. Cast Shadows on the light and Accepts Shadows on the layer; shadow darkness around 40 to 60 percent and a soft Shadow Diffusion read like real light. One key light with an ambient fill is enough for 2.5D; three lights are a 3D habit (8.2).
- Null-driven camera rig (3.4) and a 3D layer stack separated by 100 to 400 px in z at 50 mm give the parallax push in that is the single house camera move; one per film.

### 3.11 Motion blur, time remapping and frame blending

- Motion blur (the layer switch and the comp switch) is computed from the layer's transform between frames. Composition Settings, Advanced: Shutter Angle 180 degrees (the cinema default; blur across half the frame interval), Shutter Phase minus 90 (centres the blur on the frame), Samples Per Frame 16 and Adaptive Sample Limit 128 as defaults. Raise the shutter angle to 270 to 360 for a dreamier, smeared feel; lower to 90 for a crisp, staccato one. Type without motion blur during a fast move strobes; type with motion blur during a slow move smears and becomes unreadable. The house rule: blur on, moves slow enough that blur is barely visible.
- Time remapping (Layer, Time, Enable Time Remapping) makes a layer's time a keyframable property; speed ramps, freezes and reverses live here. Frame blending fills the gaps when a clip is slowed: Frame Mix (cross-dissolves adjacent frames, cheap, ghosts) and Pixel Motion (optical flow, estimates motion vectors, slow, artefacts on crossing edges). For slow motion beyond 50 percent, generate frames with Topaz Video (section 11) instead.
- Posterize Time (3.7) is the deliberate opposite: fewer frames, by choice.

### 3.12 Roto, tracking, keying, cleanup and puppet tools

- Roto Brush 3 (2023) isolates a subject from footage with a machine-learning model, propagating a brushed selection across frames. Roto Brush still needs the Refine Edge brush on hair and motion-blurred edges, and it fails on a subject that crosses a similarly coloured background. Plan a day per 10 seconds of difficult roto, or shoot on green and key it (below). DaVinci Resolve 21's Magic Mask (11.3) is the house alternative when the shot is already in Resolve.
- Planar tracking: Mocha AE (Boris FX, bundled with After Effects; Animation, Track in Boris FX Mocha) tracks a flat surface (a phone screen, a box face, a hoarding) and exports corner-pin data. Use it for any insert on a plane; Mocha Pro adds object removal and lens tools.
- 3D Camera Tracker (an AE effect) solves the camera from a plate; create a null and a camera at a solved point to pin 3D type into the shot. It needs parallax, so it fails on locked-off and pure-rotation shots. Track Motion handles point tracks, and Warp Stabilizer steadies handheld footage before graphics go on.
- Lockdown (Mamoworld, sold on aescripts) tracks a deforming surface, for a logo on a moving sleeve or a print on skin.
- Keying, in this order: Keylight 1.2, then Key Cleaner (recovers edge detail lost to compression), then Advanced Spill Suppressor (removes green or blue light reflected onto the subject), then a light Refine Soft Matte on hair. Pull a core matte and an edge matte separately and combine them. Key from 4:2:2 or better: an H.264 camera proxy is 4:2:0, which halves colour resolution exactly at the edge being keyed (12.7).
- Order of work for an insert: track, then clean plate (the frame with the unwanted object removed), then insert, then grain match (re-grain the insert so its noise matches the plate).
- Content-Aware Fill for video (since 16.1, 2019) removes an object by filling from surrounding frames; it works for rigs, logos and small objects on textured backgrounds and fails on large areas with perspective change. Supply a reference frame cleaned in Photoshop to improve it.
- Puppet tools: Position pins deform a mesh, Advanced pins add rotation and scale, Bend pins bend a limb, Starch pins stiffen an area, Overlap controls which part draws in front. The mesh expansion and triangle count set smoothness. For anything beyond a single waving object, rig with Duik Angela or RubberHose (7.3) instead.

### 3.13 Text animators

A text animator applies a transform (position, scale, rotation, opacity, tracking, fill, blur, and more) to a range of characters, words or lines, with a range selector that sweeps across the text. This is the engine of kinetic typography (section 4).

- Add an animator from the Animate menu on the text layer; Range Selector 1 has Start, End and Offset; animate Offset from minus 100 to 100 percent to sweep the effect through the text.
- Advanced: Shape (Square, Ramp Up, Ramp Down, Triangle, Round, Smooth) sets the falloff of the effect; Ease High and Ease Low shape the ease per character; Based On (Characters, Characters Excluding Spaces, Words, Lines) chooses the unit; Randomize Order with a Random Seed scrambles the sequence.
- Per-character 3D (Animate, Enable Per-character 3D) gives each glyph its own z and rotation; a slow x rotation from 90 to 0 degrees with a Ramp Up shape is the classic flip-in.
- Multiscript: Arabic shaping and right-to-left order require the Adobe World-Ready Composer (Adobe's text engine for complex scripts; Paragraph panel menu, Adobe World-Ready Paragraph Composer) and a font with the Arabic script; per-character animators break the joined forms because each glyph is treated alone, so animate Arabic by word or line, or convert the shaped text to shapes first. Devanagari conjuncts behave the same way. Test with a native reader; the house works in both scripts (script rules: 03-typography.md, section 15; motion rules: 4.1).
- Variable fonts: AE exposes variable axes (weight, width, optical size) in the Character panel, animatable with the axis sliders and selectable through the variable-font filter added in 26.3; a weight animation from 300 to 700 on Space Grotesk is a house move that reads as the type itself performing (axes and their pitfalls: 03-typography.md, section 10).

### 3.14 Essential Graphics and MOGRTs

The Essential Graphics panel collects chosen properties (text, colours, sliders, Essential Properties from precomps) into a control surface and exports a .mogrt (MOGRT: Adobe's packaged motion graphics format for Premiere Pro) that an editor drops into Premiere's Essential Graphics browser and edits without AE. Rules: one MOGRT per lower-third family; fonts must be on Adobe Fonts or installed on the editor's machine; bake the World-Ready Composer and script settings for Devanagari and Arabic into the source; keep expressions simple because Premiere's renderer evaluates them; and test every text field with the longest real name in the client's list.

- Responsive Design, Time (Composition, Responsive Design, Time, Create Intro and Create Outro, or Create Protected Region from Work Area) keeps the animation in and out at fixed frame counts while the hold stretches, so an editor who lengthens a lower third in Premiere does not slow its entrance. Apply it to every lower third and end card MOGRT.
- Font licensing travels with the file. Adobe Fonts licences cover video and broadcast use for the subscriber who syncs the font; a foundry desktop licence may exclude broadcast, digital advertising or redistribution inside a MOGRT or AE project sent to another studio. Check each font's EULA before a MOGRT leaves the house and record it in the font list of 13.7 (licence types: 03-typography.md, section 16).

### 3.15 Scripts and plugins worth owning

| Tool | Maker | What it does | Why it is worth it |
|---|---|---|---|
| Overlord | Battle Axe (Adam Plouff) | Live transfer of Illustrator artwork to AE shape layers and back | Removes the import, convert, fix loop; identities arrive as editable shapes |
| Flow | aescripts (Zack Lovatt and collaborators) | Visual ease curve editor with a library of named curves | Saves the asymmetric luxury curve once and applies it in one click |
| Motion 4 | Mt. Mograph | Anchor, ease, cloning, rigging and colour tools in one panel | Anchor-point placement and offset of layers in seconds |
| Duik Angela | RxLaboratory (Nicolas Dufresne), free, open source | Full character rigging: auto-rig, IK, bones, walk cycles, camera tools | The standard free rig for 2D characters |
| RubberHose 3 | Battle Axe | Bendy limb rigging from strokes and shapes | Fast, stylised limbs for explainer characters |
| Animation Composer | Mister Horse | Preset motion, transitions, sound library | Only for pitch animatics; presets are a tell in finished work |
| Trapcode Suite | Maxon (Red Giant) | Particular (particles), Form (particle grids), Mir (surfaces), Shine, Starglow, 3D Stroke, Sound Keys, Tao, Lux, Echospace | Particular and Form are the only 3D particle systems inside AE worth the licence |
| Element 3D | Video Copilot (Andrew Kramer) | OpenGL 3D object rendering inside AE | Fast product mock-ups; showing its age against Advanced 3D and real renderers |
| Deep Glow | Plugin Everything | Physically plausible, 32 bpc bloom | Replaces native Glow where a light source must bloom; restraint rule in 3.7 |
| GifGun | Mikey Borup | One-click GIF and MP4 export from the comp | Review GIFs for chat only; delivery formats are in section 13 |
| Bodymovin | Hernan Torrisi, free | Exports a comp to Lottie JSON for web and apps | Section 9 for what it can and cannot carry |
| Also | Ease and Wizz (Ian Haigh), Joysticks n Sliders, Limber, Explode Shape Layers, Ray Dynamic Color, Keystone | Smaller tools each solving one repeated job | Buy after the third time the job recurs |

### 3.16 Render settings, Media Encoder and render farms

- Render masters to image sequences: OpenEXR (16-bit half float, PIZ or DWAA compression) for anything that will be graded or composited again, PNG for 8-bit graphics with alpha, then assemble the master in AE or Resolve. The reason is in section 1: crash resilience and partial re-renders.
- ProRes 4444 with alpha: Output Module, Format QuickTime, Codec Apple ProRes 4444 (or 4444 XQ), Channels RGB + Alpha, Depth Millions of Colors+, Color Straight (unmatted) or Premultiplied (matted with black). Straight alpha keeps edge colour correct when the receiving application composites; premultiplied is the safe default for editors who will not change the background. ProRes 4444 at 1920 by 1080 and 29.97 fps targets about 330 Mbps; XQ about 500 Mbps (Apple ProRes white paper).
- H.264 and H.265 export is back in AE's own render queue (since 22.0) and in Adobe Media Encoder (AME); use AME for queued platform versions so AE stays free. Settings in section 13.
- Preview and proxies: set the comp to half resolution and 16 bpc while animating, with a proxy of any 4K footage; the final render at full resolution with motion blur on, Quality Best, and the Render Settings "Use comp's frame rate".
- Render farms for AE: AE renders on one machine by design, with multi-frame rendering (since 22.0) using all cores, and most AE jobs render overnight on one machine; the farm cost case appears in 3D (8.6). The routes beyond one machine:
  - aerender, the command-line renderer, renders a named comp without the interface (aerender -project job.aep -comp "MASTER_16x9" -output ...); it is the basis of every AE farm and of nexrender (3.17).
  - File, Watch Folder lets several licensed machines on a network share one render queue.
  - Deadline (AWS Thinkbox; AWS Deadline Cloud since 2024) manages AE alongside 3D jobs; cloud farms such as RebusFarm and GarageFarm accept AE with a listed plugin set.
  - The rule before any farm render: list every third-party effect in the project. Each needs a render-node or floating licence (Maxon's Red Giant tools, aescripts plugins), or the frames render without the effect and the log shows no error. Collect fonts separately, because Collect Files does not (13.7).

### 3.17 Data-driven versions and automation

- The version matrix: write it at the brief as ratios multiplied by durations, languages, audio states and end-card variants, and multiply it out in the estimate (1.2). Four ratios, four durations, three languages and two audio states are 96 files, a normal campaign, and hand-building them is where errors and overruns come from.
- Data-driven After Effects: since 15.1 (2018) AE imports JSON as footage, and later releases added CSV and TSV (confirm the version on Adobe's data-driven animation help page). An expression such as footage("names.csv").dataValue([0, i]) reads column 0, row i, so text, colour and duration come from a spreadsheet row and one rig renders every row.
- Tools: Dataclay Templater turns spreadsheet or Google Sheets rows into rendered versions, locally or on a farm; Plainly renders AE projects in the cloud through an API, for dynamic creative; nexrender is an open-source command-line wrapper around aerender (3.16) for in-house automation; Cavalry's spreadsheet layers (8.1) do the same for 2D systems.
- House rules: build the master as a rig with Essential Properties and one Control null (3.8); lock fonts and the World-Ready Composer in the master; have a native reader check one rendered frame per language per rig, because automated Arabic and Devanagari fail without any error; and name output from the data row using the 13.6 pattern, so the delivery sheet is generated from the same data.

## 4. Kinetic typography craft

Kinetic typography is type whose motion carries meaning (type sizes and tracking on video: 03-typography.md, section 13); the measure of craft is whether the viewer reads every word without effort and remembers the rhythm.

- Reading rate sets timing. Adults read about 200 to 250 words per minute of continuous prose, roughly 0.25 seconds a word, and about half that rate when words appear one at a time on a screen with motion around them. The house rule for kinetic type is 0.4 to 0.6 seconds per word on screen before the next move, with emphasised words held 1 to 2 seconds. A word that moves while being read is the single most common failure (section 16): arrive, hold still for the reading time, then leave.
- Hierarchy in motion: the eye follows what moves last and what stops first. The headline arrives first and stops dead; secondary text arrives after, smaller, with less travel. Give the hero word the only overshoot or the only scale change in the sequence.
- Unit of animation: by letter (dramatic, expensive, slow to read; 30 to 60 ms stagger between glyphs), by word (the default for VO-synced type; each word on its VO beat), by line (editorial, calm; one ease per line, 80 to 120 ms stagger between lines). Choose one unit per piece and keep it; mixing units is the explainer tell.
- Tracking animation: letter-spacing from wide to normal (plus 200 to 0 in AE tracking units, which are thousandths of an em) over 0.8 to 1.2 seconds with the luxury ease reads as type settling into place; from normal to wide reads as an exhale and suits endings. Tracking animation stays off body text, Arabic and Devanagari (4.1).
- Variable font animation: weight or width axis as the moving property (3.13), one axis at a time, slow, synced to a sound. It is the current (2026) kinetic identity language, visible across the Studio Dumbar and DIA work in section 15, and it reads cheap the moment two axes wobble at once.
- The Studio Dumbar method, as seen in their kinetic identity work and in DEMO (Design in Motion), the festival founded by Studio Dumbar/DEPT and Global, whose 2019 edition took over all 80 screens at Amsterdam Centraal station for 24 hours: one typeface, one system of motion derived from the identity's own construction (the way the mark is built), performed at scale on large screens, with sound designed as part of the identity. Motion is the identity, so every parameter (speed, ease, direction) is documented in the brand guidelines like a colour.
- Sync to VO: place a marker on every stressed syllable of the VO (Layer, Add Marker while playing, with the asterisk key), and land words 1 to 2 frames before the marker; type that lands after the spoken word reads late, and the ear is a stricter judge than the eye.
- Cheap text animation tells: typewriter reveal with a cursor, per-letter drop with bounce, 3D extruded text spinning, "Fade and Slide Up" on every line, random-order character scramble, glow, text on a path, text following a wiggle, three typefaces in one piece, the AE text animation presets used as supplied. Each is a tell because it is the preset's rhythm, which every viewer has seen.

### 4.1 Multiscript kinetic type

Every UAE job and most India jobs set type in two or three scripts, and the Latin habits above break joined and headline-bar scripts (shaping and metrics: 03-typography.md, section 15).

- Arabic: tracking stays at zero, because positive letter-spacing disconnects the joined letters (03-typography.md, section 15.2). Animate emphasis through a variable font's width axis, by kashida (tatweel, the elongation of a connecting stroke), or by word. Entrances, wipes, masks and staggers run right to left, starting from the rightmost word, because the reveal must follow the reading direction.
- Devanagari: per-character animation splits the shirorekha (the headline bar that joins the letters of a word) into separate pieces. Animate by word, or reveal with a mask travelling left to right along the headline, so the bar draws as one stroke.
- Bilingual lockups: each script gets its own reading time and the hold is the sum. Stagger the scripts by 8 to 12 frames in the client's language order, and match visual size across scripts by the size ratios in 03-typography.md, section 15, because the same point size makes Devanagari and Arabic look smaller than Latin.
- Numerals: decide Western digits or Arabic-Indic digits (U+0660 to U+0669) per market at the brief and keep them consistent across supers, counters (7.1) and end cards.

## 5. Lower thirds, titles, supers and subtitles

### 5.1 Safe areas

Safe areas exist because screens overscan (television sets cut the edge of the picture, historically by up to 10 percent) and because platforms draw interface over the picture.

| Standard | Action safe | Title or graphics safe | Note |
|---|---|---|---|
| SMPTE ST 2046-1:2009 | 93 percent of width and height, centred | 90 percent of width and height | The current SMPTE figures. RP 218's older 90 and 80 percent areas, drawn for CRT overscan, are deprecated except for CEA-708 caption layout, and they are what AE's default guides still draw; RP 2046-2 covers a 16:9 picture protected for 4:3 displays at 90 percent |
| EBU R95 v1.1 (June 2017) | 3.5 percent margin top, bottom and sides (93 percent) | 5 percent margin (90 percent) | At 1920 by 1080: action safe 67 px and 38 lines; graphics safe 96 px and 54 lines. At 3840 by 2160 double these |
| AE guides | Composition Settings default 10 and 20 percent | Change to 7 percent action and 10 percent title in Preferences, Grids and Guides | AE's defaults are the legacy 4:3 values |

Platform safe zones for vertical 1080 by 1920 come from the platforms' advertising guidance, the only place Meta and TikTok publish numbers; organic posts draw the same interface, and the overlay shifts with every app update, so the final check is a test upload on a real phone with captions on. Full per-platform specs, with source URLs and verification dates, are in 26-platform-and-format-specs-2026.md, sections 5.6 and 3.1, and text placement inside them in 17-short-form-social-and-platform-craft.md, section 2.3.

| Platform | Guidance (as of October 2026) | At 1080 by 1920 | Working rule |
|---|---|---|---|
| Instagram Reels and Stories (Meta ads guide) | Keep 14 percent of the top, 35 percent of the bottom and 6 percent of each side clear; 40 percent of the bottom when the ad carries a disclaimer; the action rail stacks on the right over the bottom 40 percent | Top 269 px, bottom 672 px, sides 65 px; central area about 950 by 980 px | Supers and the logo inside x 65 to 1015 and y 270 to 1250; faces may extend lower on the left |
| TikTok (ads spec page) | Downloadable safe-zone overlay files with no fixed pixel values, because the overlay depends on caption length | Working default: top about 290 px, bottom about 480 px, right column about 200 px | Same box as Meta, with the right 200 px kept clear of anything the viewer must read |
| YouTube Shorts | No published pixel figure | Third-party measurements put the bottom clear zone at about 350 px and the right rail at about 120 px | Same box as Meta |
| Union for one master | | | The Meta box (950 by 980 px, centred, starting 270 px from the top) survives all three; a 3:4 centre crop (1080 by 1440) is what the profile grids show, so keep the subject inside it too |

### 5.2 Sizes by resolution

A lower third is the name and role caption in the lower part of the frame that identifies a speaker. Values in the table are font sizes in pixels; a grotesk's cap height is about 0.7 of its font size, so 44 to 60 px sets capitals about 31 to 42 px tall.

| Element | 1920 by 1080 | 3840 by 2160 | 1080 by 1920 vertical | Reason |
|---|---|---|---|---|
| Lower third name | 44 to 60 px | 88 to 120 px | 52 to 64 px | A 6 inch phone at arm's length needs larger text than a 55 inch screen at 3 m |
| Lower third role | 28 to 36 px | 56 to 72 px | 36 to 44 px | Secondary, still legible |
| Minimum any text | 24 px (about 2.2 percent of height) | 48 px | 36 px | Below this, compression and screen size destroy counters |
| Subtitles | 40 to 48 px | 80 to 96 px | 48 to 56 px, within the platform bottom margin | Netflix and BBC subtitle practice |
| Legal super | 24 to 28 px | 48 to 56 px | 32 to 36 px | Regulators in India (ASCI) and the UAE require legible disclaimers (5.3); tiny legal reads as evasive |

### 5.3 Timing

- Lower third: on for 4 to 6 seconds; 0.6 to 1 second in, hold, 0.4 to 0.6 seconds out. Names are read twice.
- Super (any short on-screen line): the house minimum is 2 seconds, then about 0.5 seconds per word above four words; derived from the 0.25 second per word prose rate doubled for divided attention over footage. UK clearance practice (Clearcast) applies a similar per-word hold for legal text; Indian and UAE broadcasters generally defer to the agency, so the house rule is the floor.
- End card: 5 seconds minimum. YouTube end screens occupy the last 5 to 20 seconds and need a video of at least 25 seconds; Instagram cuts the last frames under the replay UI, so hold the end card 1 second longer than feels necessary.
- Subtitles: Netflix's Timed Text Style Guide sets 42 characters per line, 2 lines, a reading speed of 20 characters per second for adults (17 for children), a minimum duration of 5/6 of a second (20 frames at 24 fps), a maximum of 7 seconds, and a 2 frame gap between subtitles. Netflix publishes a guide per language, and each language file follows its own: the Hindi Timed Text Style Guide sets 42 characters per line, 2 lines and 17 characters per second for adults (13 for children), read October 2026 (26-platform-and-format-specs-2026.md, section 5.10). The Arabic guide's page returned 404 when 26 was compiled; read it before writing an Arabic file, and until then use the house's 15 to 17 characters per second for Arabic (16-editing-colour-grading-and-delivery.md, section 11.4). A native reader checks every Devanagari and Arabic file, because character counts do not map across scripts.
- Legal supers and disclaimers in India: the ASCI Code (chapter I) and ASCI's guidelines on disclaimers require a disclaimer that is legible to an ordinary viewer, in the same language as the claim, that does not contradict or materially change the claim, and that stays on screen long enough to be read. The guideline's own size and duration values were not readable from ascionline.in for this revision (October 2026); read them before timing a long disclaimer, because the house floor (2 seconds plus 0.5 seconds a word above four) may sit below them. Compliance sign-off is in 19-campaigns-and-creative-direction.md, section 16.6, and the deliverable checklist in 24-business-of-creative-and-agency-operations.md, section 10.2.

### 5.4 Legibility over footage

- Backing plates: a solid or 80 to 90 percent opaque bar in the brand's ink colour behind the type; the responsive version is the sourceRectAtTime rectangle (3.8). Plates read cleaner than any shadow.
- Shadows with restraint: a 1 to 2 px, 40 to 60 percent black drop shadow with no offset survives bright footage without looking like a shadow; a visible offset shadow is a 2008 tell.
- Blur boxes: a region of the footage blurred (Gaussian, 20 to 40 px) and darkened (10 to 20 percent) under the text, the Apple-era frosted plate; design-taste, section 6 lists glass as peaking in 2026, so use it on video only where the brand already uses it in UI.
- Contrast: WCAG 2.2's 4.5:1 contrast ratio for body text is the floor for subtitles and supers over footage, measured on the darkest and brightest frame behind the text; the APCA model and the house rule are in 11-accessibility-and-inclusive-design.md, section 3.3.

### 5.5 Broadcast standards

Broadcast deliverables in India and the UAE follow the European lineage: 25 fps, 1080i50 or 1080p25, Rec. 709, loudness to EBU R128 (section 14), graphics inside EBU R95 graphics safe, and legal supers for financial and real estate products as the broadcaster's compliance team specifies. Ask every broadcaster for its delivery specification document before the design stage; they differ on interlacing, loudness and slate requirements.

Broadcast-legal colour is what a broadcaster's QC (quality control) checks. EBU R 103 v3.0 (May 2020) asks that the R, G and B components and luma (Y) stay inside its "Preferred Minimum/Maximum" code values: 5 to 246 in 8-bit and 20 to 984 in 10-bit, against the nominal 16 to 235 and 64 to 940, which is about minus 5 to 105 percent of the nominal range; measuring equipment should flag an out-of-gamut error (code values outside that preferred range) only when it covers more than 1 percent of the image. Check the master on Resolve's parade and vectorscope, with AE's Broadcast Colors effect as a last-resort clamp; R 103 warns that legalisers can create artefacts worse than the errors they correct. Saturated reds and oranges near full value fail first, so the house flame #F53901 in a broadcast master may need slightly reduced saturation, agreed with the client before QC rejects the spot. A channel sheet that names a QC tool or a stricter limit overrides this.

## 6. Logo animation

### 6.1 Anatomy

- Reveal (0.8 to 1.5 seconds): the mark is built from its own construction. A wordmark draws from its strokes (Trim Paths), a geometric mark assembles from its grid, a monogram unfolds from its counters. Particles, light sweeps and lens flares as the reveal are the cheap tell because they could reveal any logo.
- Hold (1 to 2 seconds): the mark at rest, exactly as the static identity. The hold is the frame the client will screenshot; it must match the brand guidelines to the pixel.
- Idle: an optional breathing loop for screens that stay on (events, hotel lobby screens, app splash): 1 to 2 percent scale or a 4 to 8 second light drift, imperceptible when watched, noticed when it stops.
- Transition: how the mark becomes the next scene or the end card; typically the mark holds and the background changes.
- Outro: the exit, which should be faster than the entry (0.3 to 0.6 seconds) because leaving slowly reads as reluctance.

Total 2 to 5 seconds; broadcast stings (a short logo animation that closes a film or marks a break) sit at 3 to 5, app splash at 1.5 to 2.5, event loops at 8 to 15 seconds for a loop with no visible join.

### 6.2 Sound sync

The lock frame (the frame the mark is complete and still) gets the sound hit; everything else in the sound design leads to that frame. If the brand has a sonic logo (an audio mark, usually 1.5 to 3 seconds), the visual reveal is timed to it, because the audio mark is the fixed asset. Delivery includes a silent version and a version with the sonic logo baked in.

### 6.3 Building from the identity grid

Import the master logo from Illustrator via Overlord or Create Shapes from Vector Layer; keep the construction geometry (grid, circles, baselines) on a hidden guide layer; animate strokes and shapes along the construction order a designer would draw them; and animate at the same ease across all parts with 2 to 4 frame offsets. The result is specific to the mark, which is the whole point (design-taste, section 1, "Specificity").

### 6.4 Deliverables

| Deliverable | Spec | Use |
|---|---|---|
| Sting | 3 to 5 s, 3840 by 2160 and 1920 by 1080, 25 fps (and 24 or 30 as needed), ProRes 422 HQ, with and without sound | Film endings, broadcast |
| Ident (a longer identity film for a channel or venue) | 5 to 10 s | Channel, event screens |
| End tag | 1 to 1.5 s; the lock frame reached in 12 to 18 frames | 6 second bumpers and 15 second cutdowns |
| Corner bug | Static, or breathing at 2 to 4 percent; about 3 to 5 percent of frame width, inside title safe and outside each platform's interface zone (5.1) | Long-form, live and event screens |
| Opening brand cue | 0.5 to 1 s: the mark, the product or the brand colour in the first seconds | Every paid social cut |
| Loop | 8 to 15 s loop with no join, ProRes 422 HQ and H.264 | Event screens, lobby screens, website hero |
| Transparent | ProRes 4444 with straight alpha, plus HEVC with alpha and WebM VP9 alpha (section 13) | Editors, web overlays, apps |
| Lottie | Bodymovin export, under 100 KB, tested in the LottieFiles player | App splash, web |
| Stills | The lock frame as PNG and SVG | Everything else |

The tension in the opening brand cue row: luxury restraint argues for the logo only at the end, and Google's ABCD guidance for YouTube (Attract, Brand, Connect, Direct; 17-short-form-social-and-platform-craft.md, section 8.2) argues for early and repeated branding in paid media, where a logo only at the end costs recall among the viewers who leave early. The house brands early in every paid cut, with the cue as quiet as the identity allows, and keeps the end-only reveal for brand films and broadcast, where the viewer stays to the end.

## 7. Explainers, infographic motion and character animation

### 7.1 Data honesty in motion

- Bars grow in the same duration from a zero baseline so their final heights are the comparison; a taller bar that takes longer to grow implies a rate the data does not contain. The y axis of a bar chart starts at zero; a truncated axis in motion is doubly misleading because the growth animation exaggerates the difference.
- Lines draw left to right at constant speed (Trim Paths with linear interpolation), because an eased line draw implies acceleration in the data.
- Counters (a number counting up) use the same ease as the bar they describe and stop exactly on the value; a counter that reads 103 then settles to 100 has lied for 6 frames.
- Counter formatting follows the market: Indian figures use lakh and crore grouping (1,00,000 and 1,00,00,000; the expression is in 3.8), set in tabular figures with the rupee sign (U+20B9) from the font. Gulf figures may use Arabic-Indic digits (4.1). The UAE dirham sign (U+20C3, Unicode 18.0, September 2026) is missing from most fonts as of October 2026, so place it as a vector shape drawn to the Central Bank's guideline until the client's typeface carries it (03-typography.md, section 8.5). Write lakh and crore in English supers only where the client's audience reads them that way.
- Pie charts rarely survive motion; a donut whose segments draw in sequence is readable up to five segments. Beyond that, bars.
- Every chart carries its source and date as a super for the full duration of the chart. The dataviz skill in this workspace holds the chart form rules; this file only adds the motion constraints.

### 7.2 Chart and icon animation

- Charts: axis and gridlines first (0.3 seconds), then data (0.8 to 1.2 seconds), then labels (staggered 60 ms), then the highlight. Reverse the order on exit.
- Icons: two to four moves per icon, 0.4 to 0.8 seconds total, one consistent stroke weight (the identity's), one ease across the whole set, and a shared anchor logic (everything rotates from its visual centre). A 20-icon set drawn by three people with three eases is the most common explainer inconsistency.

### 7.3 Character animation basics

- Rigging: Duik Angela (3.15) builds an auto-rig from a layered Illustrator or Photoshop character with IK (inverse kinematics, where moving the hand positions the elbow) and FK (forward kinematics, rotating each joint in sequence) switchable per limb; RubberHose 3 builds stylised bendy limbs in minutes; Limber is a lighter alternative. Rive (section 9) rigs with bones and constraints for interactive characters; Adobe Character Animator captures a performance from webcam and microphone for live or fast lip-synced work. Its sibling Animate shows the risk: Adobe announced on 2 February 2026 that Animate sales and downloads would end on 1 March 2026, reversed the decision on 3 February after public protest, and kept Animate in maintenance mode, still sold and supported with no new features (as of October 2026). Treat Character Animator the same way, since users on Adobe's forums report no feature update since 2024, and avoid building new pipelines on either.
- Walk cycles: Richard Williams' "The Animator's Survival Kit" (2001) sets the contact, down, passing and up positions over 12 frames per step at 24 fps for a normal walk; 8 frames reads as a hurry, 16 as a stroll.
- Lip sync: mouth shapes mapped to phonemes (the Preston Blair set of about 10 shapes), with mouths changing 1 to 2 frames before the sound.

### 7.4 Frame-by-frame and hand-drawn animation

Hand-drawn animation is the premium differentiator in the work of Buck, Golden Wolf and Art Camp (section 15), and rigs cannot imitate it.

- Exposure: on ones is a new drawing every frame (24 drawings a second), on twos every second frame (12) and on threes every third (8). Twos is the default for character work and reads as hand-made; switch to ones for fast action, where twos strobe. Spider-Man: Into the Spider-Verse (2018) animated characters largely on twos against a camera on ones, which is why its motion reads drawn inside a smooth world.
- Smears: a deliberately distorted in-between drawing that stretches a fast-moving form across its path and stands in for motion blur. Timing charts drawn on the key drawings plan the spacing of the in-betweens before they are drawn (Richard Williams, The Animator's Survival Kit).
- Pipeline: rough, tie-down (the rough cleaned to consistent volumes), clean-up, colour, each a review point.
- Tools: Toon Boom Harmony (the television-series standard), TVPaint, Procreate Dreams (iPad, November 2023) and Blender's Grease Pencil 3 (8.1).
- House use: hand-drawn FX accents (liquid, smoke, sparkle, ink) over a rigged or 3D film, where a few drawn frames read more expensive than any plugin. Budget frame-by-frame at several times the cost per second of rigged animation, and quote it from a 2 second test.

### 7.5 When explainers look cheap, and the fixes

| Tell | Fix |
|---|---|
| Corporate Memphis figures with giant limbs (design-taste, section 3) | Real photography, type-led explanation, or a drawn style specific to the brand |
| Every element fades and slides up | One entrance logic per scene derived from the content (data grows, products turn, type lands) |
| Default bounce on everything | The luxury ease (3.3), bounce reserved for one playful moment or removed |
| Stock icon set in a different stroke weight from the type | Icons drawn on the identity's stroke weight and grid |
| VO describing what the picture shows | VO carries the argument; picture carries the evidence; never both saying the same thing |
| Scenes that change every 2 seconds | Fewer, longer scenes with internal movement; a luxury explainer holds 4 to 8 seconds per scene |
| Boiling lines (Wiggle Paths at default) | Wiggles per Second 0.5 to 1, or none |

## 8. 3D for designers as of October 2026

3D is where a motion budget doubles and where luxury work most often fails, because a render shows every shortcut: wrong scale, wrong light, wrong material.

### 8.1 The tools and what each is for

| Tool | Current release (October 2026) | What it is for | Limits and cost |
|---|---|---|---|
| Cinema 4D (Maxon) | 2027.0 (15 October 2026: a new object scattering system, liquid simulation updates). Earlier in the cycle: 2026.4 (30 September 2026) added an MCP server (Model Context Protocol, the open standard through which an AI assistant operates an application) so an assistant can drive the app; 2026.3 a redesigned UV editor with UDIM (numbered UV tiles, 8.2) support and Edge, Rivet and UV Projection distribution modes for the Cloner; 2026.2 (16 April 2026) the Fabric Brush, Windows on ARM support and new Bend deformer modes | The motion-design industry's host application. MoGraph (Cloner, Fracture, MoText, Effectors, Fields, dynamics) turns one object into a system of moving objects faster than any other tool, which is why most of the studios in section 15 run it | Subscription only; prices load per region on maxon.net, so quote from the live page. Weak on film-grade simulation; that is Houdini's job |
| Redshift (Maxon) | 2027.0 (18 October 2026: fur procedural, ACES 2 support, Redshift Live updates); 2026.9 (10 September 2026) and 2026.8 (24 July 2026, procedural scratches shader, high-altitude cloud layer) before it; 2026.5 (21 April 2026) made OpenPBR the default material for Cinema 4D users, with other host applications to follow; 2026.4 (19 March 2026) introduced Redshift Live, the real-time engine that replaced Redshift RT | Biased GPU path tracer (a path tracer follows random light paths per pixel; a biased one trades exactness for speed through caching and clamping), the default partner of Cinema 4D; fast, production-proven, with photon-mapped caustics (light paths cached as photons from the lights, so focused light resolves quickly) | NVIDIA first; AMD HIP RT support arrived as experimental in 2026.5 |
| OctaneRender (OTOY) | 2027.1 in alpha (24 September 2026, with baking of SDFs, signed distance fields in which each point stores its distance to the nearest surface, to meshes) | Unbiased spectral GPU renderer (it converges on the physically exact result given enough samples, and computes colour by wavelength of light); the cleanest glass, gems and caustics through its PMC kernel (an unbiased kernel built for difficult caustic light paths); a large Cinema 4D user base | NVIDIA in practice; pricing on OTOY's subscription page |
| Arnold (Autodesk) | Via the C4DtoA plugin and in Maya and 3ds Max | Film-grade subsurface scattering, hair and volumes; CPU and GPU | Slower per frame; per-seat licence; the choice when a VFX house will continue the work |
| Blender (Blender Foundation) | 5.2.3 LTS (22 October 2026; 5.3 expected 10 November 2026). 5.0 (November 2025) brought ACES 1.3 and 2.0 colour management, HDR and wide-gamut display (on Windows and Linux Wayland with the Vulkan backend enabled, and on any Apple Silicon Mac) and the renamed EEVEE engine (identifier BLENDER_EEVEE; the "Next" tag was dropped). 4.5 LTS (July 2025, supported into 2027) made the Vulkan backend an opt-in and multithreaded Cycles adaptive subdivision, reported about 10 to 15 times faster | Cycles (path tracer on CPU, CUDA, OptiX, HIP and Metal), EEVEE (real-time rasteriser with screen-space and ray-traced options), Geometry Nodes (node-based procedural geometry, with OBJ, STL, PLY, VDB (OpenVDB sparse volumes) and CSV import nodes since 4.5), Grease Pencil 3 (2D drawing and animation inside 3D space, rewritten in 4.3). Free under the GPL | No MoGraph; Geometry Nodes covers the same ground with a steeper curve, so fewer motion studios run it as primary. Scripts and add-ons broke on the 5.0 line |
| Houdini (SideFX) | Houdini 22.0 (15 July 2026) is current. Houdini 21 (after SIGGRAPH 2025) introduced Copernicus (a 2D and 3D image-processing context), the MPM solver (material point method, for snow, sand and mud), Karma support for Hydra 2 and Gaussian splats (scenes reconstructed from photographs as millions of coloured blobs, 8.4), APEX and KineFX rigging and Vulkan as production-ready | Anything simulated, generated or procedural at scale: particles, fluids, destruction, crowds, terrain; Karma (CPU and XPU) as its renderer; the Solaris USD (Universal Scene Description, 8.2) context | A specialist's tool. Houdini Indie is US $299 for one year or $449 for two, for entities under US $100,000 annual gross revenue and under US $1 million of outside funding in the previous 24 months (sidefx.com, October 2026); the full FX licence is several thousand |
| Unreal Engine 5 (Epic) | 5.8 (17 June 2026) is the current stable release. Before it, 5.6 (June 2025) added a 120 Hz Lumen mode for high-frame-rate LED stages and 5.7 (November 2025, reported by secondary sources) Nanite Foliage and production-ready PCG (procedural content generation) | Real-time rendering (Lumen global illumination, Nanite virtualised geometry), Motion Design mode (since 5.4, 2024: cloners, effectors, a broadcast graphics workflow), nDisplay for LED volumes, MetaHumans, Sequencer for linear film | Looks like a game unless lit and graded by a cinematographer. Epic charges non-game companies above US $1 million gross revenue a per-seat subscription (about US $1,850 per seat per year, introduced 2024; verify) |
| Spline | Browser tool; renders with WebGPU (the W3C browser GPU API that succeeds WebGL) or WebGL; exports to React, SwiftUI and Jetpack Compose; an MCP server lets agents read and write scenes | Interactive 3D on a marketing page; a quick 3D hero for a pitch | Embeds carry a 1 to 3 MB runtime plus the scene (21-web-design-and-digital-craft.md, section 4), so export video or stills for anything that does not need interaction |
| Womp | Free browser modeller built on SDFs and CSG (constructive solid geometry: shapes combined by union, subtraction and intersection), sold as "Liquid 3D": shapes blend, merge and carve like clay; now oriented to 3D printing with print-readiness checks | A blobby concept in ten minutes; a printable keepsake for an event | Its glossy "super materials" produce exactly the 3D blob design-taste lists as dead; never a luxury render |
| Cavalry | Version 2.7 is the save format referenced on cavalry.studio; the site states the software is now brought to you by Canva and is free for individuals (Scene Group built it; its legacy licences convert to the free version) | Procedural 2D: Duplicator (a Repeater that can read data), spreadsheet-driven animation, Forge dynamics, Magic Easing, rigs, Lottie export, a real-time viewport | Mac and Windows only; smaller plugin ecosystem than AE; use it where the piece is a system of many instances |
| TouchDesigner (Derivative) | Node-based real-time environment; builds dated by year | Installations, event screens, interactive walls, generative visuals, projection mapping, camera and sensor input | Non-Commercial build free but capped at 1280 by 1280; Commercial from US $600, Educational from US $300, Pro from US $2,200 (multi-machine sync, frame-lock, Notch Block playback, tracking integrations) |
| KeyShot Studio (KeyShot) | Professional plan listed at US $1,299 a year (keyshot.com, October 2026); renders on CPU, GPU or both, NVIDIA and AMD | CAD import with measured metal and gem materials; the fastest route from a manufacturer's file to a clean jewellery or watch still | Weaker on motion than Cinema 4D with Redshift; use it for stills and simple turntables |
| Marvelous Designer and CLO 3D | Garment simulation from real sewing patterns | Fashion films and garments on a product shot; fashion houses increasingly hold CLO files of their own collections, so ask before modelling a dress | Faces stay photographed (8.3); cloth may be rendered |
| ZBrush (Maxon) | Digital sculpting | Organic jewellery motifs (florals, figurative pendants) and high-detail displacement | Retopologise (rebuild as a clean, animatable mesh) before animation |
| Compositing and texturing | Nuke 18.0 open beta (27 October 2026, with a Griptape bridge for AI workflows); Fusion inside DaVinci Resolve 21 (USD SDK 25.11, Hydra 2.0); Substance 3D Painter 12.2 (Adobe); Plasticity 2026.2 (CAD-style surface modelling for products) | Nuke for deep multi-pass work; Fusion when the film is already in Resolve; Painter for PBR texturing; Plasticity for a bottle or a watch case with true curvature | AE handles multi-layer EXR natively (section 3.16); go to Nuke above about ten passes or for deep compositing |

### 8.2 The 3D pipeline

1. Modelling. Polygon modelling with subdivision surfaces (Catmull-Clark smoothing of a low-polygon cage) for organic forms; booleans for hard surfaces; NURBS (non-uniform rational B-splines: mathematically exact curved surfaces) or CAD surfaces (Plasticity, Rhino, a STEP file from the manufacturer) for products, because a perfume bottle's reflections reveal every polygon facet. Model at real-world scale in millimetres: subsurface radius, depth of field, light falloff (inverse square) and dynamics all depend on scale, and a ring built ten times too large renders with wrong skin, wrong bokeh and wrong weight.
2. UV unwrapping. UVs are the 2D coordinates that map a texture onto the surface; seams go where the eye never rests (inside a band, under a cap). UDIM (U-Dimension) tiles numbered 1001, 1002, and so on let a hero object carry several 4K or 8K maps. A 20 mm ring filling a 4K frame needs about 8K of texture across its visible surface to stay sharp.
3. Texturing. Substance 3D Painter bakes mesh maps (normal, ambient occlusion, curvature, thickness) and paints with smart materials that respond to them (dust in crevices, wear on edges); Substance 3D Designer for procedural materials; Quixel Megascans (now inside Epic's Fab marketplace) for scanned surfaces. Export the PBR set: base colour, roughness, metallic, normal, height, ambient occlusion; 16-bit for height and normal so smooth surfaces do not step.
4. Materials. PBR (physically based rendering) describes a surface with measurable properties so it responds correctly to any light: base colour, metallic (0 or 1; in-between values are only for blends), roughness, normal, with an index of refraction (IOR) for dielectrics (water 1.33, skin and plastics about 1.45, glass 1.5, sapphire 1.77, diamond 2.42). OpenPBR, the open surface shading model published by the Academy Software Foundation with Adobe and Autodesk, became the default material for Cinema 4D users in Redshift 2026.5 (April 2026), and MaterialX carries materials between applications; USD (Universal Scene Description, from Pixar) carries scenes.
5. Lighting. Image-based lighting from an HDRI (Poly Haven publishes free 16K HDRIs under CC0): rotate it for key direction, lower its intensity, then add one area light as the key. The three-point scheme (key at about 45 degrees off axis and above, fill opposite at a quarter to a half of the key's intensity for a 2:1 to 4:1 ratio, rim behind to separate subject from ground) is a teaching scheme; luxury product lighting is usually one very large soft source and one black card (negative fill) that puts a dark edge into the reflection. Colour temperature 5,600 K for daylight, 3,200 K for tungsten, one choice per scene. In jewellery and glass the reflections are the product, so the shape of the lights matters more than their number: a long strip light produces the single clean highlight along a gold band.
6. Cameras. Match a real camera (full-frame 36 by 24 mm sensor): 50 mm neutral, 85 to 100 mm for product, 100 mm macro for jewellery, 24 to 35 mm for interiors. Aperture f/2.8 to f/5.6 for a beauty hero, f/11 to f/16 for a stone that must be sharp throughout; bokeh shape from the blade count (9 blades read round). Render depth of field in the engine wherever edges and transparency matter, because a post blur from a Z-depth pass (each pixel's distance from the camera) fails on hair and glass.
7. Integrating CG (computer-generated imagery) into live action. A watch on a wrist, a bottle on a real table and a ring on a real hand are routine luxury shots.
   - On set (the plate checklist: 14-video-preproduction-and-cinematography.md, section 12.7): a bracketed HDRI from the product's position, 7 to 9 exposures at 2 EV spacing (one EV, exposure value, doubles or halves the light), from a 360 camera or a DSLR with a fisheye in three or four directions; an 18 percent grey ball and a chrome ball in the plate for light direction and intensity; a ColorChecker at the start of every set-up; a lens distortion grid per lens; camera data per take (focal length, sensor, height, tilt, focus distance); and a clean plate without the hand prop.
   - Matchmove (solving the real camera's motion so the CG camera matches it): SynthEyes (Boris FX), PFTrack or 3DEqualizer for hero shots; Blender's motion tracker or AE's 3D Camera Tracker (3.12) for simple moves.
   - Undistort the plate, render CG through the undistorted camera, then redistort in comp with an ST map (an image whose red and green values store each pixel's distorted position).
   - Shadow and reflection catchers (invisible surfaces that receive only the CG object's shadow or reflection): Cycles' Shadow Catcher and the Redshift and Octane equivalents. Render the shadow as its own pass, and match grain, defocus and chromatic aberration to the plate last.
8. Render passes. AOVs (arbitrary output variables) split the image into components the compositor can grade separately: diffuse (direct and indirect), specular or reflection, refraction, subsurface, emission, ambient occlusion, Z-depth, normals, world position, motion vectors, object and material IDs, and cryptomatte (ID mattes keyed by object or material name, from Psyop, 2015). Ask for light groups on every product job: each light's contribution written as its own pass (Cycles since Blender 3.2, Redshift Light Groups, Octane light IDs), so "make the rim brighter" costs minutes in comp and no re-render (8.6). Write multi-layer OpenEXR at 16-bit half float, PIZ for lossless or DWAA for a smaller lossy file, in ACEScg linear light.
9. Compositing. In AE at 32 bpc with OCIO set to ACES (3.1): rebuild the beauty from passes (diffuse plus specular plus refraction plus subsurface plus emission equals beauty, in Add mode in linear), grade each pass, add caustics and glow from their own passes, apply grain last. Nuke for deep compositing or more than about ten passes; Fusion in Resolve 21 when the film is already there. The view transform (the display rendering of scene-linear values, such as ACES 2.0 or AgX, which replaced Filmic as Blender's default in 4.0) is a display choice and is never baked into an EXR: render scene-linear, set the same OCIO view in the 3D application and in AE, judge highlights in a view that rolls them off (Blender's "Standard" view clips them), and keep passes meant for compositing free of any view transform. Mismatched views are the usual cause of "the render looked different".
10. Denoising. Every path tracer ships an AI denoiser (NVIDIA OptiX, Intel Open Image Denoise, Altus in Redshift). A denoiser fed too few samples returns the smooth plastic look that reads "AI render": render to a noise threshold of about 0.01 or 128 to 256 samples minimum, denoise the beauty and the passes with the same settings, and use the temporal denoiser (or Neat Video or Resolve's temporal noise reduction) on animation, because single-frame denoising flickers.

### 8.3 Product visualisation: jewellery and beauty

- CAD from the manufacturer. Indian jewellery manufacturers model in JewelCAD, Rhino with MatrixGold or RhinoGold, and 3Design. Ask for native CAD (3DM or STEP) before STL: an STL casting file is triangulated, carries facets and printing supports, and needs the band remeshed or rebuilt as subdivision or NURBS surfaces before a beauty render. Gems usually arrive as placeholders; replace every stone with a correct cut as a separate object, so each stone's material and ray depth can be set.
- Gem geometry. A stone must be a real cut: a round brilliant has 57 facets (58 with a culet), with the crown and pavilion angles of the actual cut, because the fire comes from the geometry. Ray depth (refraction bounces) at 16 to 32, or the stone renders black at the centre. Light it with a studio HDRI that has large white shapes and black bands; a plain grey sky returns a dead stone, since scintillation is the alternation of light and dark reflections as the stone turns.
- Gem shaders. IOR: diamond 2.417, corundum (ruby, sapphire) about 1.76 to 1.77, emerald 1.57 to 1.59, quartz 1.54, glass 1.5. Dispersion (the splitting of white light into colour) is set by the Abbe number, where lower means more fire: diamond about 55, glass about 60 to 64. A perfect CGI stone reads fake; add roughness of about 0.02 and faint internal imperfections.
- Caustics. The focused light patterns a gem or a glass throws onto the table. Path tracers produce fireflies (isolated over-bright pixels from rare light paths) instead; Redshift's photon-mapped caustics and Octane's PMC kernel render them; Cycles filters most caustics away (Filter Glossy), so render caustics in Redshift or Octane as a separate pass and add them in post.
- Metals. Use measured complex IOR (the n and k values) through the renderer's metal presets (gold, silver, platinum, copper); gold with a plain yellow base colour reads as paint. Roughness 0.05 to 0.1 for polished, 0.3 with anisotropy (highlights stretched along one direction) 0.6 to 0.8 along the brushing direction for brushed. Rose gold is a copper alloy, 18 carat warmer than 22 carat in reflection. Metals reflect; give them large soft shapes to reflect.
- Subsurface scattering (SSS). Light enters a surface, scatters and exits elsewhere: skin, wax, milk, creams, pearls, jade. Use random-walk SSS with a radius in real units (skin about 1 to 3 mm, red channel longest); pearls combine SSS with a thin-film iridescent coat; a cream in a jar reads premium only with SSS and a slightly rough specular (0.2 to 0.3); liquids are glass with an absorption colour set by Beer's law (the colour deepens with the distance light travels through the liquid), so a thick base reads darker than a thin rim.
- Liquids and cosmetic simulation. Beauty work is mostly liquid: cream swirls, serum drops, lipstick melts, perfume splashes. Tools: Houdini FLIP (a fluid solver mixing particles and a grid) with viscosity and surface tension, the reference for creams and splashes; Cinema 4D's native liquids (updated in 2027.0, 8.1) for motion-studio jobs; X-Particles (Insydium) in Cinema 4D; the FLIP Fluids add-on for Blender. Simulate at real scale in millimetres, because viscosity and droplet size depend on scale; cache to VDB (sparse volumes) or Alembic (baked geometry); show the client a grey-shaded playblast as its own gate (1.3) before lookdev; and mesh at high resolution for macro shots. Plan 2 to 5 days per hero simulation shot before render, a house planning norm to confirm with the 3D lead.
- Macro camera and motion. 100 mm macro at f/11 to f/16; a 15-degree turntable move over 3 to 5 seconds with motion blur on; focus stacking (combining renders focused at different depths) from three to five renders when the whole piece must be sharp. A 4K jewellery frame with caustics at 256 to 512 samples takes about 3 to 10 minutes on a single high-end GPU in Redshift (approximate, from an RTX 4090-class card; the RTX 5090, 32 GB GDDR7, January 2025, is the 2026 workstation reference and runs faster; depth of glass dominates), so a 5 second shot at 24 fps is 120 frames and 6 to 20 GPU hours. Quote from a test frame on the actual machine, including on Apple silicon, where Redshift runs through Metal at a different speed.
- Beauty. CGI skin on a face is a tell for luxury work; the house photographs faces and renders product. Packaging renders use the real dieline and the print-ready artwork as texture at the equivalent of 300 ppi, with varnish as a separate roughness map and foil as a metallic map, so the render matches the carton the client holds.

### 8.4 Architectural visualisation for real estate

- Tools. 3ds Max with Chaos Corona or V-Ray is the archviz standard in India and the Gulf; Cinema 4D with Redshift and Blender with Cycles produce the same result in a motion studio; Unreal (Lumen), Twinmotion and D5 Render for real-time walkthroughs where the client wants to change the sofa live.
- The clichés. design-taste, references/worlds.md lists the golden-hour render, the family on the lawn and the pool from above; the render-specific clichés that go with them are a lens flare, a saturated lawn, a cyan pool, a 14 mm interior that makes a 40 square metre flat look like a lobby, every light on at noon, the wet-road night exterior, the drone pull-back, and chrome and marble on everything. Each is a shortcut to "expensive" that the audience has seen on every hoarding from Lower Parel to Business Bay.
- The fix is to render like an architectural photographer: 24 to 35 mm on full frame, camera at 1.1 to 1.5 m, verticals corrected with the renderer's lens shift, one time of day chosen for the space (soft overcast or late afternoon from one side; the Mumbai and Dubai midday sun is too hard for interiors), materials at real scale with roughness variation (a floor is never one roughness), staging that implies a person left a minute ago, a film grade (16-editing-colour-grading-and-delivery.md, section 8) and grain. Scale anchors: a door is 2.1 m, a worktop 0.9 m, a dining chair seat 0.45 m.
- Regulation. Label renders as an artist's impression. In India the Real Estate (Regulation and Development) Act 2016 requires that advertised project details match the RERA registration, and the ASCI Code treats a misleading depiction as actionable; in Dubai every real estate advertisement needs a permit from the Dubai Land Department's Trakheesi system and the permit number on the asset. A render that shows a sea view, a park or a beach that will not exist is an advertising claim; check the view against the site plan before rendering it.
- Capture of what already exists. 3D Gaussian splatting (Kerbl, Kopanas, Leimkühler and Drettakis, Inria, SIGGRAPH 2023) reconstructs a photoreal, view-dependent scene from a few hundred photographs or a video walkthrough as millions of coloured, oriented blobs. Capture and train with Polycam, Luma, Scaniverse or Postshot (Jawset); edit and view with SuperSplat (PlayCanvas); render in Unreal or in Houdini 21's Karma. Photogrammetry (RealityScan from Epic, formerly RealityCapture) produces a textured mesh when the asset must be relit or edited. Use both for show flats, suites, amenities and venues; splats cannot be relit, so capture at the time of day the film needs. A building that is not yet built is still a render, with the labelling above.

### 8.5 Photoreal or stylised

| Decide for photoreal when | Decide for stylised when |
|---|---|
| The product exists and the client sells its material (jewellery, watches, beauty, cars) | The subject is abstract (a service, data, a feeling) |
| The render will sit beside photography and must match it | The brand's identity has a drawn or graphic language to extend |
| The schedule allows 2 to 10 minutes a frame and a farm (8.6) | The schedule needs 10 to 60 seconds a frame (EEVEE, Redshift Live, Unreal) |
| The viewer will look closely (a 4K screen, print) | The viewer sees it at feed size for 3 seconds |
| The tells to kill: plastic skin, too-perfect symmetry, no dust, no fingerprints, HDR-like contrast, impossible light (design-taste, section 3, "AI renders with impossible light") | The tells to kill: 3D blobs, isometric cities, corporate Memphis in 3D, gradient-lit glass (design-taste, section 3) |

A hybrid is common and expensive-looking: photoreal product in a stylised, typographic world (ManvsMachine's product films in section 15 are the reference).

### 8.6 Render times and farm costs

- Local arithmetic. A workstation with one high-end GPU (RTX 4090 or 5090 class) renders about 150 to 400 frames overnight at 2 to 4 minutes a frame; a 30 second film at 24 fps is 720 frames, so a single machine needs two to five nights for one pass, and a client change restarts the clock. That is why 3D schedules in section 1 double the animation and render stages.
- Farm pricing (GarageFarm, October 2026): CPU at US $0.024, $0.036 and $0.072 per GHz-hour at low, medium and high priority; GPU at US $0.004, $0.006 and $0.012 per OB-hour (an OctaneBench-hour, OctaneBench being OTOY's GPU benchmark score); per-node ranges of about US $0.66 to $17.27 an hour for CPU nodes and $1.12 to $25.76 for GPU nodes; US $25 of trial credit; renderers supported include Redshift, Cycles, V-Ray, Corona and Arnold. Other farms (RebusFarm, Fox Renderfarm, Ranch Computing) price in the same way; compare on a test frame, since the quoted unit hides the node's real speed.
- Worked estimate. 720 frames at 3 minutes each on a GPU scoring about 1,200 on OctaneBench (an RTX 4090-class card, approximate; measure the farm node's own score): 36 GPU-hours, or about 43,000 OB-hours, which is about US $260 at medium priority. A client round that re-renders the whole film costs the same again, and half the film half of it; that is the number to quote when a round reopens the design or lookdev gate.
- VRAM limits GPU rendering before speed does. A hero scene with 8K UDIM maps, displacement and high ray depth can exceed 24 GB, and Redshift and Octane then go out-of-core (spilling geometry and textures to system memory) with a large speed penalty. Size textures to the shot (8.2, step 2), and check VRAM use on a test frame before quoting a schedule; an RTX 5090's 32 GB is the ceiling of a consumer card in 2026, and professional cards carry more (the RTX PRO 6000 Blackwell has 96 GB).
- Where the time goes: refraction depth and caustics, volumetrics, motion blur with many samples, subsurface, and 4K output (four times the pixels of 2K). Render at 2K for anything delivered only to phones; render 4K for anything that will be cropped, reframed or shown on a screen.

## 9. Web motion and real-time

The craft rules for what moves on a page sit in 12-motion-principles-and-ui-motion.md (easing, duration, choreography) and the delivery discipline in 21-web-design-and-digital-craft.md (sections 4 to 6: media weight, performance budgets, motion on the web).

### 9.1 GSAP

- GSAP (GreenSock Animation Platform) is the JavaScript animation library the house uses for anything beyond CSS. Webflow acquired GreenSock in October 2024 and at the end of April 2025 (GSAP 3.13, release post dated 29 April 2025) made GSAP free for commercial use, including every formerly paid Club plugin (SplitText, MorphSVG, DrawSVG, ScrollSmoother, MotionPath, Inertia); the gsap-trial package is deprecated and the standard gsap package carries everything.
- The luxury ease: `ease: "expo.out"` is the web equivalent of the asymmetric curve in 3.3; for the exact AE curve, CustomEase takes the same cubic bezier string. Stagger 0.03 to 0.06 seconds for letters, 0.08 to 0.12 for lines (section 4).
- ScrollTrigger binds a timeline to scroll: `scrub: true` ties progress to the scrollbar exactly, `scrub: 0.5` to `1` smooths it over that many seconds (the smoothed value reads expensive, the exact value reads mechanical); `pin` holds a scene while the story plays; `gsap.matchMedia()` is where the prefers-reduced-motion variant lives, and it is mandatory, because an animated hero with no reduced-motion state fails WCAG 2.2's success criterion 2.3.3 (animation from interactions, level AAA) and the house rule in 12-motion-principles-and-ui-motion.md.
- Lenis (smooth scroll; the debate over it: 21-web-design-and-digital-craft.md, section 6.3) plus GSAP plus ScrollTrigger weigh about 70 KB gzipped, about half of a marketing site's 150 KB JavaScript budget (21-web-design-and-digital-craft.md, section 5), so the rest of the page must be light.
- CSS scroll-driven animations (animation-timeline: scroll() and view()) do the simple cases without JavaScript in Chrome since 115 and Safari since 26; use them for reveals, GSAP for sequences.

### 9.2 three.js, React Three Fiber and WebGPU

- three.js is the standard WebGL and WebGPU scene-graph library, released monthly as rNNN; r186 is the current release (24 September 2026). Its WebGPURenderer falls back to WebGL2 automatically, and TSL (Three Shading Language, a node-based shader language that compiles to WGSL for WebGPU or GLSL for WebGL) is how new materials are written for it.
- React Three Fiber (Poimandres) renders three.js as React components, with drei (helpers: cameras, controls, loaders, Environment for HDRI lighting) and postprocessing. Use it when the site is already React; plain three.js otherwise.
- Assets: glTF 2.0 (.glb; the Khronos transmission format for 3D scenes) with Draco or meshopt geometry compression (two open mesh compressors, Google's and Arseny Kapoulkine's) and KTX2 textures (the Khronos texture container, here carrying Basis Universal, a compressed format that transcodes to whatever the GPU reads); a product model under 2 MB, a hero scene under 5 MB total. Google's model-viewer web component shows a single glTF with orbit controls and AR (Scene Viewer on Android, Quick Look with a USDZ file on iOS) and is the right answer for one product.
- WebGPU status, October 2026: Chrome and Edge since 113 (May 2023), Safari 26 on macOS, iOS, iPadOS and visionOS (September 2025), Firefox 141 on Windows (July 2025) and on Apple Silicon Macs (November 2025), Linux and Android in progress; the W3C specification is a Candidate Recommendation Draft. Ship WebGPU with a WebGL2 fallback through 2026; Unity and several engines still mark WebGPU experimental.

### 9.3 Shaders

- A shader is a program that runs on the GPU per vertex (the vertex shader, which positions geometry) or per pixel (the fragment shader, which colours it). GLSL (OpenGL Shading Language) is the WebGL language; WGSL is WebGPU's. Uniforms are values sent from JavaScript (time, mouse position, resolution, a texture); varyings pass values from the vertex stage to the fragment stage; `sampler2D` reads a texture; `gl_FragColor` (or the output variable in GLSL 3.0) is the pixel.
- Noise: Perlin noise (Ken Perlin, 1985, gradient noise), simplex noise (Perlin, 2001; Stefan Gustavson's webgl-noise implementations, 2011, are the standard GLSL versions), fBm (fractal Brownian motion: several octaves of noise summed at doubling frequency and halving amplitude), and domain warping (feeding noise into the coordinates of another noise, Inigo Quilez's 2002 article), which produces the liquid, marble and smoke fields.
- The luxury shader effects, each used once per site:
  - Grain: a hash noise per pixel at 0.02 to 0.05 amplitude, re-seeded each frame, applied last; it is the tactile counter-signal to digital flatness (design-taste, section 6). Static grain reads as a dirty screen; animated grain reads as film.
  - Displacement on hover: sample the image with its UVs offset by a noise texture multiplied by a mouse-velocity uniform, decaying with the luxury ease (0.8 to 1.2 seconds).
  - Liquid: domain-warped fBm driving the UV offset at `time * 0.05` or slower; faster reads as a lava lamp.
  - Chromatic aberration: sample red, green and blue at UV offsets of 0.002 to 0.005, on a transition only.
  - Dithering: blue-noise or ordered dither added to any gradient so an 8-bit screen does not band.
- Cost rules: cap devicePixelRatio at 1.5 to 2, render blur-heavy passes at half resolution, pause the loop with IntersectionObserver when the canvas is offscreen, stop on prefers-reduced-motion, and measure GPU time in Chrome's performance panel; a shader hero that holds a phone at 100 percent GPU drains the battery and the brand.

### 9.4 Rive

Rive is a design tool and runtime for interactive vector animation. The artboard carries a state machine (states connected by transitions driven by inputs: boolean, number, trigger), so an animation responds to hover, scroll, a value or a tap without bespoke code. Capabilities by date (rive.app/blog): Rive Renderer open-sourced across platforms (March 2024); Layouts for responsive artboards (October 2024) and N-Slicing (November 2024); vector feathering for soft shadows and glows (February 2025); data binding (July 2025 for lists, images and nested artboards; December 2025 for Solos, lists, property groups and a List Follow Path constraint); scripting in Luau with an AI coding agent (13 January 2026); .fla import from Adobe Animate (February 2026); a Unity package in the Asset Store (January 2026) and an Unreal integration in technical preview. Pricing: the editor is free and exports moved to paid plans from US $9 a month (October 2025). Runtimes exist for web (rive-wasm, about 100 to 150 KB), iOS, Android, Flutter, React Native, Unity and Unreal. House use: an interactive mark, a stateful UI component, a data-driven infographic; Lottie import exists as a migration aid only, and Rive's own guidance says so.

### 9.5 Lottie and dotLottie

- Lottie (Airbnb, 2017) is JSON exported from AE by Bodymovin (3.15) and played by lottie-web (SVG or canvas renderers), Skottie (Skia) or ThorVG (the renderer behind the dotLottie players). What survives export: shape layers, paths, trim paths, repeaters, solids, basic masks, text converted to shapes, parented nulls, hold and bezier keyframes. What does not: most effects (blur, glow, displacement), 3D layers and cameras, blend modes on some renderers, track mattes on some renderers, and expressions, which must be baked (Convert Expression to Keyframes) before export. Test every file in the LottieFiles preview and on an Android phone, where gradients and masks render slowest.
- dotLottie is the production format: a Deflate-compressed .lottie package that bundles several animations, shared assets, themes (dark mode, brand variants) and interactive state machines, maintained by LottieFiles under the MIT licence; a .lottie file is far smaller than raw or base64-inlined JSON, and the same rendering engine is meant to draw it identically on React, iOS, Android and embedded players.
- Budgets: a logo animation under 100 KB as JSON and under 30 KB as .lottie; frame rate 30 or 60 to match the UI; a loop with no join; no raster images inside unless unavoidable.

### 9.6 Performance budgets

- 60 fps gives 16.7 milliseconds per frame, shared by JavaScript, style, layout, paint and composite; animate only transform and opacity (compositor-only properties: the browser's compositor thread animates them without layout or paint), because width, height, top and left are layout properties that force layout and paint on every frame; use `will-change` on at most a handful of elements.
- Core Web Vitals thresholds: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1; a hero video under 2.5 MB in H.264 and under 1.5 MB in VP9 or AV1 with a poster image as the LCP candidate (21-web-design-and-digital-craft.md, section 4).
- A 4K RGBA texture is 64 MB in GPU memory uncompressed; KTX2 compressed textures cut that by 4 to 8 times and stay compressed on the GPU.
- One considered motion per page (design-taste, section 5, "Motion"); everything else still.

### 9.7 Designer-side motion tools

| Tool | What it does | House use and limit |
|---|---|---|
| Figma Motion (figma.com/motion) | Timeline motion inside Figma; engineers inspect the full timeline in Dev Mode and copy it as CSS, JSON or React (06-ui-design-craft.md) | UI and brand-asset motion; confirm the export route before promising a Lottie or video hand-off |
| Jitter (jitter.video) | Browser motion design for social and product clips, exporting MP4, GIF and Lottie | Fast for a designer; ease control is weaker than AE's graph editor, so it stays on social and pitch motion |
| Lottie Creator (LottieFiles) | Builds Lottie natively without AE | No Bodymovin export losses (9.5) for flat vector work |
| Theatre.js | A keyframe timeline for three.js and React Three Fiber scenes | Art-directed camera paths on a 3D site, edited as keyframes on a timeline |
| View Transitions API | Page and state transitions in CSS | Rules in 12-motion-principles-and-ui-motion.md and 21-web-design-and-digital-craft.md, section 6.4 |

House rule: the hero film stays in AE; these tools serve UI, social and pitch motion.

## 10. Generative and procedural

### 10.1 The tools

- Processing (Casey Reas and Ben Fry, 2001, Java) and p5.js (Lauren McCarthy, 2013, JavaScript; its 2.0 line arrived in 2025) are the sketching languages of generative art; openFrameworks (C++) for installations; Nannou (Rust) and vvvv for specialist work.
- Cavalry (8.1) for procedural 2D that must be delivered as video or Lottie; TouchDesigner (8.1) for installations and live visuals; Houdini (8.1) for anything 3D and procedural; Geometry Nodes in Blender for the same at no licence cost.
- The workspace's algorithmic-art skill holds the p5.js method, seeded sketches and the house palette discipline; this section adds the judgement of when generative work belongs in a luxury brand and when it reads as a screensaver.

### 10.2 The screensaver problem

Generative motion reads cheap when it has no author. The tells and the fixes:

| Tell | Why it reads cheap | Fix |
|---|---|---|
| Continuous, unbroken motion | Nothing rests, so nothing is composed; it is the screensaver's defining quality | Quantise time (hold frames at 12 or 8 fps steps), build rests of 1 to 3 seconds, give the piece an ending |
| Hue cycling, rainbow gradients | The palette belongs to the algorithm and could belong to any brand | Two colours plus one accent from the identity (04-colour.md); let value and texture carry the variation |
| Particle trails, Perlin flow fields as decoration | They are the default output of the default tutorial; every viewer has seen them | Derive the rule from the identity's own construction (the grid, the mark's geometry, the type's proportions) |
| Infinite variation with no edition | Nothing is chosen, so nothing is designed | Seed the randomness, generate 200, choose 5, number them; Tyler Hobbs' Fidenza (2021) is 999 chosen outputs of one algorithm |
| Smooth everything | Interpolated noise with no hard edges reads as a lava lamp | Thresholds, steps, hard cuts, dithering, print-like marks |
| Noise-driven when it claims to be data-driven | The viewer senses the data is fake | Real data from the client (occupancy, footfall, the day's temperature in Jaipur), with the source as a super (section 7) |

The print test: render one frame and lay it out as a poster. If it fails as a print, it fails as a loop. Vera Molnár, Georg Nees and Frieder Nake made plotter drawings in the 1960s with less computing power than a watch; Sol LeWitt's wall drawings (from 1968) are instructions executed by others; Studio Dumbar's DEMO festival (section 15) shows what the discipline looks like on the station screens of the Netherlands. The rule each demonstrates: one rule, executed with restraint, chosen by a person.

### 10.3 Event, projection and LED content

Hotel launches, events and Gulf retail run on LED walls, projection mapping and anamorphic corner screens, and each starts from the venue's technical facts.

- Get from the AV (audio-visual) vendor before design: the processor canvas (often non-standard, such as 7680 by 1080 split across outputs), the pixel map (which pixels of the canvas land on which panel), the 3D model or UV layout of the stage or facade, and the media server (disguise, Resolume, Watchout or TouchDesigner) with its codec (HAP, HAP Q, NotchLC; 13.1).
- Build content at the native canvas, 1:1, and lock the frame rate to the processor (25 or 50 in 50 Hz countries; Saudi Arabia runs at 60 Hz, 12.1). Confirm the processor's refresh rate with the AV vendor in each country, because a wall refreshing out of step with the camera bands on every phone filming it.
- Previs in the vendor's server software or in a 3D mock-up of the venue before sign-off. Avoid single-pixel horizontal lines, which produce moiré (a false interference pattern where fine detail beats against the panel grid) on low-pitch LED (20-print-packaging-ooh-and-physical-production.md, section 7.3).
- Projection mapping needs a dark ambient, and content is designed to the facade's architecture (windows, cornices, columns), with the architecture as the composition.
- Anamorphic 3D billboards are forced-perspective renders from one camera position matched to the main viewing zone: design the hero viewpoint from a site-survey photograph, render a street-level test from that point, and accept that the illusion fails off-axis.
- Real-time: Notch and Unreal for live-reactive content; TouchDesigner for sensors and camera input (8.1); the generative judgement of 10.2 applies to all of it.

## 11. AI in motion as of October 2026

The landscape, the prompting method and the legal position are in 22-ai-era-craft-and-generative-tools.md (sections 2, 3 and 7); the Higgsfield prompt system is in the higgsfield-prompting skill (three layers: image, identity, motion, kept separate because lighting instructions in the motion layer cause flicker).

### 11.1 Video models, verified October 2026

| Model | Status and specification | Use in the house pipeline |
|---|---|---|
| Google Veo 3.1 | Current Google model (benchmarks updated October 2025 on deepmind.google); 1080p and 4K output; native audio including dialogue, effects and ambience; image-to-video; reference images ("ingredients") for a scene, character or object; first-and-last-frame transitions; scene extension into longer sequences; available in Gemini, Flow, Google Vids, AI Studio and the Gemini API. 22-ai-era-craft-and-generative-tools.md records that the Gemini API preview endpoints for Veo 3.1 were shut on 22 October 2026, with developers routed to Gemini Omni Flash or GA Veo on the enterprise platform | The strongest all-round model for a narrative plate with sound; the first and last frame mode is the house tool for a transition between two art-directed stills |
| OpenAI Sora 2 | Discontinued. The consumer app closed on 26 April 2026 after a wind-down announced on 24 March 2026; the Videos API and every Sora 2 model were switched off on 24 September 2026; OpenAI named no successor (multiple secondary reports quoting OpenAI's pages) | None. Remove it from any pipeline document or deck that still lists it |
| Kling (Kuaishou) | Kling 3.0 launched in the first week of February 2026 with clips to 15 seconds, native audio in several languages and multi-shot generation from one prompt (third-party sources cite up to 6 cuts with custom storyboard frames); Kling 4.0 is listed as the newest Kling model on Higgsfield as of October 2026 (secondary sources date it to 15 October 2026) | The workhorse for image-to-video of real photography and for motion control from a reference performance; Elements takes up to 4 reference images for subject consistency |
| Runway | Gen-4 (March 2025); Aleph (25 July 2025), an in-context model that edits existing footage from a prompt (add or remove objects, relight, restyle, generate a new angle), with Aleph 2.0 editing up to 30 seconds at 1080p; Gen-4.5 (December 2025), which Runway reported as leading the Artificial Analysis text-to-video leaderboard at launch; Act-Two for performance capture | Aleph is the house tool for set extension, object removal and relighting on real plates; Runway's audio is weak, so sound comes from section 14 |
| Luma | Ray3.2 current (lumalabs.ai, October 2026): native 16-bit colour, HDR at 2 times SDR credits, EXR export in ACES2065-1 (AP0) at 3 times; 360p draft, 540p, 720p, 1080p; 5 or 10 seconds for text and image to video; Modify Video to 20 seconds at 24 fps; Reframe; multi-keyframe up to 16 keyframes per clip | The only model exporting a grade-ready EXR, which matters when the film finishes in Resolve; draft mode for cheap previs |
| Hailuo (MiniMax) | H3 current (hailuoai.video, October 2026), with native multimodal generation and editing and an Omni Reference input; the earlier 02 (June 2025) and 2.3 (October 2025) set its reputation for physics and fabric | Fabric and crowd plates; fashion motion tests |
| Higgsfield | An aggregator plus its own tools: Genjutsu (motion transfer: recast a reference performance onto a character, location or product), Cinema Studio, Soul (image) and Popcorn (storyboard) models, 50 or more stackable camera presets (up to 3 at once), an MCP server for Claude; hosts Kling 4.0, Kling 3.0, Seedance 2.5, Veo 3.1 and others | The house front door for Kling and the camera-preset vocabulary; the higgsfield-prompting skill governs every prompt |
| ByteDance Seedance 2.5 | Promoted on Higgsfield as its most advanced hosted video model in October 2026; specification not verified here | Test against Kling 4.0 on the same plate before committing |
| Adobe Firefly Video Model | Public beta from 12 February 2025; powers Generative Extend in Premiere Pro, which lengthens a clip by about 2 seconds of video (and about 10 seconds of audio) to cover a cut, with 4K and vertical support reported at general availability in spring 2025 (verify against Adobe's current page) | Extending a shot that ends up to about 2 seconds early, and only that |

### 11.2 Image to video, motion control and camera control

- Image to video is the luxury default, because the still is art-directed (lens, light, grade) before any model moves it; text to video hands composition to the model. Build the still with the methods in 22-ai-era-craft-and-generative-tools.md, section 3, at the final aspect ratio, then prompt motion only: "slow dolly in, fabric moves in a light breeze" (the higgsfield-prompting rule that short motion prompts beat paragraphs).
- Motion control transfers a reference performance (a video of a person turning, a hand placing a ring) onto the generated subject: Kling's motion control, Higgsfield's Genjutsu, Runway's Act-Two. It is the only reliable way to get a specific gesture.
- Camera control: Higgsfield's presets (Dolly In, Crane Up, Arc, 360 Orbit, Through Object In) or prompt verbs (dolly, pan, tilt, crane, orbit, rack focus); one move per clip, slow, because every model drifts on a second move. The luxury camera is the same as in 3.10: one push, one arc, static otherwise.
- Consistency techniques: lock the seed; use reference images (Veo 3.1 and Gemini Omni Flash take up to 3, Kling Elements up to 4, Runway References for a character or object); start-and-end frames for a transition the model must hit; a character sheet (front, three-quarter, profile) generated first; the same LUT, grain and lens vignette applied to every clip in post so grading unifies what the model varied; generate at 24 fps or conform to it; denoise, then re-grain, so clips from different models share one texture; render the hero element by hand (11.4) so the viewer's eye has an anchor that never drifts.
- Controllable pipelines for repeat subjects: train a LoRA (low-rank adaptation: a small fine-tune on one subject's images) on a recurring product or character and generate stills through a fixed ComfyUI graph (a node-based workflow saved as a file), which becomes the house's repeatable recipe (22-ai-era-craft-and-generative-tools.md, section 6.4). Use open-weight video models (models whose trained weights are published, so they run on the house's own machines: Wan, LTX-2, run locally in ComfyUI; 22, section 2.2) when the plate is under an NDA (non-disclosure agreement) and cannot go to a cloud service. Condition video on depth or pose passes rendered from a 3D blockout, so camera and composition come from the layout gate (1.3) and the model supplies texture and light.
- Midjourney video (image to video, launched June 2025) produces stylised loops for mood films; check its rights position in 22, section 7 before a client sees the output.

### 11.3 AI rotoscoping, cleanup, upscaling and interpolation

- DaVinci Resolve 21 (Blackmagic Design; Studio at US $295, listed at US $236 in an October 2026 promotion) carries Magic Mask, redesigned as v2 in Resolve 20 (May 2025) with one-click selection and a paint brush for refinement, and Magic Mask Render in Place in 21, which caches a tracked mask as a matte node; Depth Map v2 produces a Z-depth from a plate for relighting and defocus. Runway's green-screen tool and AE's Roto Brush 3 (3.12) cover the same ground; Resolve is the house default because the mask stays with the grade.
- Cleanup: Content-Aware Fill in AE (3.12) for rigs and small objects; Runway Aleph for larger removals and relighting; Photoshop's Generative Fill on a clean plate that is then tracked in.
- Upscaling and frame interpolation: Topaz Video (subscription only since the perpetual licence was retired in October 2025; Personal US $299 a year, Pro US $699 a year) with Proteus, Iris, Nyx, Rhea and Rhea XL for upscaling and restoration, Starlight Precise and Starlight Mini (diffusion-based) for heavy restoration, Apollo, Chronos and Aion for frame interpolation (slow motion and frame-rate conversion), plus SDR-to-HDR and stabilisation. Rules: interpolate at most 2 to 4 times (a 24 fps clip to 48 or 96) before artefacts appear on crossing edges; never upscale generated video more than 2 times, because the model's own softness becomes plastic; upscale real footage before grading, generated footage after grain removal and before re-graining.
- AI inside AE: the 26.5 AI Assistant beta (section 3); treat its expressions as drafts to read, since an expression you cannot read is one you cannot debug at 2 a.m. before delivery.

### 11.4 The hybrid pipeline

1. Previs with AI (previs: 1.3): an animatic made of generated stills and draft clips (Luma's 360p draft, Veo in Flow) replaces hand-drawn boards for client sign-off at the animatic gate, at the real duration and ratio. Say so on the slate: "previs".
2. Plates and environments: generated or AI-extended backgrounds (Aleph set extension, Veo scene extension), always behind a real or hand-animated foreground.
3. Hero by hand: the product, the type, the logo and the transitions are animated in AE or rendered in 3D (section 8), because the hero must be exact to the identity and must repeat to the frame across versions, which no generative model does yet.
4. Unify in post: one grade, one grain, one lens treatment, one loudness (section 14), in Resolve.
5. Disclose: the house labels generated footage in the credits and the client's usage rights are written into the SOW (statement of work); 22-ai-era-craft-and-generative-tools.md, section 7 has the position, and 24-business-of-creative-and-agency-operations.md the contract wording.

What the models still cannot do in October 2026: hold a logo pixel-exact, keep a hand's finger count under motion, render legible Devanagari or Arabic type, repeat a shot deterministically for a language version, or produce an alpha channel. Each of these is a reason the hybrid pipeline keeps the hero in AE.

## 12. Frame rates, resolutions and formats

The platform tables (every destination's pixels, rates and limits, with verification status) live in 26-platform-and-format-specs-2026.md, section 5; the colour pipeline and tagging live in 16-editing-colour-grading-and-delivery.md, sections 7 and 12.

### 12.1 Frame rates and what each does to motion

| Rate | Exact value | Where it comes from | What it does to motion | House use |
|---|---|---|---|---|
| 23.976 | 24000/1001 | 24 fps film slowed by 0.1 percent to fit NTSC colour television | Identical to 24 to the eye | Only to match camera footage shot at 23.976 or a US broadcaster's sheet |
| 24 | 24 | The sound-film standard since the late 1920s | Visible cadence, slight strobing on fast pans; the look the audience reads as cinema | Brand films, anything filmic |
| 25 | 25 | PAL and SECAM television, tied to 50 Hz mains | Indistinguishable from 24 in feel | Default for India and the UAE: TV, DOOH (digital out-of-home screens), events, social (26-platform-and-format-specs-2026.md, section 5.1) |
| 29.97 and 30 | 30000/1001 and 30 | NTSC (1953 colour standard), 60 Hz mains | Slightly smoother than 24, still cinematic at 180 degree shutter | US-facing social; screen recordings |
| 48 | 48 | High frame rate cinema (Peter Jackson's The Hobbit: An Unexpected Journey, 2012) | Smooth and hyper-real; critics called it "video" | Never for luxury narrative |
| 50 | 50 | PAL progressive or 50 fields interlaced | Smooth, live, sporty | Product spins, sport, LED walls in 50 Hz countries |
| 59.94 and 60 | 60000/1001 and 60 | NTSC progressive; display refresh | Smooth, digital, the feel of UI | UI motion, screen-based product demos, gaming |
| 100 and 120 | 100, 120 | Camera slow motion; 120 Hz phone displays | Delivered only after conforming to 24 or 25 (4 or 5 times slower) | Capture only |

Rules that follow:

- Pick the rate at the brief and never change it mid-job. AE stores keyframes in seconds, so a comp switched from 24 to 25 fps keeps its durations, but keyframes then fall between frames, hold keyframes shift and frame-exact cuts drift by a frame; re-check every hold and every sync point after any change.
- Strobing (the stepped, stuttering look of a fast move at a low frame rate) limits speed at 24 and 25 fps. A widely cited rule of thumb is about 7 seconds for an object to cross the frame at 24 fps with a 180 degree shutter (RED, "Camera panning speed"; the American Cinematographer Manual's panning tables give speeds by focal length), and the house treats 7 seconds as the floor for detailed layers. The same physics governs a 2.5D camera move or a sliding type layer: a move much faster than that strobes on any detailed layer, and motion blur (3.11) only partly hides it.
- Crawls and rolls (end credits, tickers) move a whole number of pixels per frame (2, 3 or 4 px per frame at 1080), because a fractional speed is resampled differently on every frame and thin strokes shimmer.
- Mains flicker: India and the UAE run at 50 Hz, so lights flicker at 100 Hz. Live plates shot at 30 fps under non-cinema lighting (mall LEDs, hotel fluorescents) show rolling bands unless the shutter is 1/50 or 1/100 of a second; animate at the plate's rate and keep a 30 fps plate at 30, because conforming it to 25 leaves the bands in place. Saudi Arabia runs at 60 Hz (230 V), so lights in Riyadh flicker at 120 Hz: on a 25 fps shoot under non-cinema lighting use a 1/60 or 1/120 shutter (accepting slightly crisper motion than 180 degrees), or shoot 30 or 29.97 fps if the deliverable allows, and check flicker on the monitor at the chosen shutter before rolling (14-video-preproduction-and-cinematography.md, section 6.8).

### 12.2 Converting between rates, and drop frame in practice

| Conversion | Method | Side effect | House rule |
|---|---|---|---|
| 24 to 25 | PAL speed-up: every frame played 4.17 percent faster (25/24) | A 30.0 s film runs 28.8 s; audio rises about 0.7 semitone unless pitch-corrected | Re-render motion graphics natively at 25 from the project; speed-up only for live action |
| 23.976 to 29.97 | 2:3 pulldown (4 film frames spread across 10 interlaced fields in a 2, 3, 2, 3 pattern) | Judder (an uneven cadence) on every pan | Never on a motion graphics master; render native 29.97 instead |
| 25 to 30 | Frame repetition (every fifth frame doubled) or optical flow | A hitch every 0.2 s, or warping on crossing edges | Upload 25 as 25; every platform in 26-platform-and-format-specs-2026.md accepts it |
| 50 or 60 to 25 or 30 | Drop every other frame | Clean, slightly sharper motion | Acceptable |
| 60 to 24 or 25 | Uneven frame dropping or blending | Stutter or ghosting | Render native; avoid |
| Any slow motion | Optical flow (AE Pixel Motion, Resolve Optical Flow, Topaz Chronos and Apollo, 11.3) | Artefacts on crossing edges and fine detail | Capture at 100 or 120 instead whenever the shot is planned |

Drop frame (DF) timecode, defined in 3.1, renumbers and never deletes frames: 29.97 DF skips frame numbers 00 and 01 at the start of each minute except minutes 00, 10, 20, 30, 40 and 50, which is 108 numbers an hour; 59.94 DF skips four numbers (00 to 03) on the same pattern. Without it, 29.97 non-drop timecode runs 3.6 seconds slow per hour against the clock, which matters only for programme-length US broadcast. Motion graphics delivered to India and the UAE at 25 fps never meet drop frame.

### 12.3 Resolutions

| Name | Pixels | Ratio | Where it is used |
|---|---|---|---|
| SD PAL and NTSC (legacy) | 720 by 576 and 720 by 480 | 4:3 or 16:9 with non-square pixels | Archive only; 12.5 |
| HD 720 | 1280 by 720 | 16:9 | Legacy web; never a master |
| Full HD | 1920 by 1080 | 16:9 | Broadcast in India and the UAE; the delivery floor |
| 2K DCI container, flat, scope | 2048 by 1080; 1998 by 1080; 2048 by 858 | 1.90, 1.85, 2.39 | Cinema DCP (Digital Cinema Package, the JPEG 2000 file set cinemas play; 26-platform-and-format-specs-2026.md, section 5.8) |
| UHD (4K UHD) | 3840 by 2160 | 16:9 | House master for anything that may reach a screen; YouTube; LED |
| DCI 4K container, flat, scope | 4096 by 2160; 3996 by 2160; 4096 by 1716 | 1.90, 1.85, 2.39 | 4K cinema |
| 8K UHD | 7680 by 4320 | 16:9 | Very large LED and archive only; four times the render time of UHD |
| Vertical HD and UHD | 1080 by 1920; 2160 by 3840 | 9:16 | Reels, Shorts, TikTok, portrait DOOH |
| Feed 4:5 and 1:1 | 1080 by 1350 (1440 by 1800 for Meta ads); 1080 by 1080 | 4:5, 1:1 | Instagram and Meta feeds, LinkedIn |
| LED wall | The wall's own pixel map (width in mm divided by pitch) | Arbitrary | Event and retail walls; deliver 1:1 (26-platform-and-format-specs-2026.md, section 5.11) |

Design in proportions: text sizes, margins and line weights are specified as a percentage of frame height (section 5's table gives both), so that one design holds at 1080, 2160 and the wall's pixel map. Render at UHD and downscale to 1080 for HD deliverables: the downscale supersamples every edge (four rendered pixels averaged into one), which removes aliasing that a native 1080 render shows on thin strokes and fine type.

### 12.4 Aspect ratios

| Ratio | Decimal | Use | Note |
|---|---|---|---|
| 16:9 | 1.78 | TV, YouTube, web, presentation | The default landscape container |
| 1.85:1 | 1.85 | Cinema flat | Nearly 16:9; a 16:9 film fits with thin bars |
| 2:1 | 2.00 | Streaming drama; Vittorio Storaro's Univisium proposal | A middle ground that crops well to 16:9 |
| 2.39:1 | 2.39 | Cinema scope; "2.40" in common usage | In a 1920 by 1080 frame the active picture is 1920 by 804, with 138 px black bars top and bottom |
| 4:3 | 1.33 | Legacy TV; profile-grid crops are 3:4 | Keep subjects inside the 3:4 centre on vertical work (section 5) |
| 1:1 | 1.00 | Feed, carousel | Central 56 percent of a 16:9 width |
| 4:5 | 0.80 | Instagram and Meta feed | The ratio that takes the most feed height |
| 9:16 | 0.56 | Reels, Shorts, TikTok, Stories, portrait DOOH | Design it first when it is a deliverable (3.9) |

A fake letterbox (black bars added to a 16:9 social video to look "cinematic") wastes picture on a phone and was a 2016 social tell; if the story wants scope, deliver a true scope master for cinema and recompose the social cuts.

### 12.5 Pixel aspect ratio

Pixel aspect ratio (PAR) is the width of one pixel divided by its height. Every modern deliverable uses square pixels (PAR 1.0). Non-square pixels survive in archive footage and anamorphic capture, and a wrong interpretation stretches every circle in a logo into an ellipse, which is the test: check the client's round mark after import.

| Source | PAR (AE's label) | Fix |
|---|---|---|
| D1/DV PAL 4:3 and widescreen | 1.09 and 1.46 | Interpret Footage, Main, Pixel Aspect Ratio; conform to square pixels in a 768 by 576 (4:3) or 1024 by 576 (16:9) comp, or scale into 1920 by 1080 |
| D1/DV NTSC 4:3 and widescreen | 0.91 and 1.21 | As above |
| HDV 1080 (1440 by 1080 stored) | 1.33 | Displays as 1920 by 1080 |
| DVCPRO HD 720 (960 by 720 stored) | 1.33 | Displays as 1280 by 720 |
| DVCPRO HD 1080 (1280 by 1080 stored) | 1.5 | Displays as 1920 by 1080 |
| Anamorphic lenses | 1.33, 1.5, 1.8 or 2.0 times squeeze | Desqueeze by the lens factor before any graphics are tracked in |

### 12.6 Interlacing, the broadcast legacy

Interlaced video records each frame as two fields (odd lines, then even lines, captured 1/50 s apart), so 1080i50 carries 50 fields and 25 frames a second; field order is upper field first for HD and lower field first for DV PAL. Many Indian channels still take 1080i50 (16-editing-colour-grading-and-delivery.md, section 12), which creates three motion graphics rules:

- Render progressive 25p and let the playout chain carry it as PsF (progressive segmented frame: one progressive frame split into two fields that belong to the same instant), which looks like film; render true interlaced 50i only when the channel asks for sport-like motion.
- Interline twitter (a flicker on horizontal detail one line thick, because that detail exists in only one field) attacks hairline rules, thin serifs and fine type. Keep horizontal strokes at least 2 px at 1080, and add a 0.5 to 1 px vertical blur to graphics bound for interlaced broadcast.
- Never deliver interlaced to the web. YouTube's encoding page states that interlaced content should be deinterlaced before upload (1080i60 becomes 1080p30, as of October 2026); the same applies to every social platform.

### 12.7 Bit depth, range and chroma subsampling

- Bit depth per channel: 8-bit is 256 levels, 10-bit 1,024, 12-bit 4,096 (banding and dither: 04-colour.md, section 3.4). Delivery codecs for social are 8-bit 4:2:0; a slow gradient across a 1080 frame has more pixels than levels, so it bands unless the source was rendered at 16 bpc and dithered (3.1, 3.7).
- Range: legal (video) range codes 8-bit luma as 16 to 235; full range as 0 to 255. A range mismatch is the cause of most "the export looks washed out" and "the blacks are crushed" complaints; 16-editing-colour-grading-and-delivery.md, section 7.4 has the values and the fix. YouTube converts full range to limited and advises against the RGB colour matrix (encoding page, October 2026), so deliver legal range, tagged BT.709. For broadcast, gamut limits are in 5.5 (EBU R 103).
- Chroma subsampling stores colour at lower resolution than brightness: 4:4:4 is full colour resolution (ProRes 4444, EXR), 4:2:2 halves it horizontally (ProRes 422, broadcast), 4:2:0 halves it both ways (H.264 and H.265 delivery, YouTube's stated requirement). The consequence for Mask360: thin saturated type, such as a 1 px flame #F53901 hairline on black, smears its colour across neighbouring pixels at 4:2:0. Keep saturated strokes at 2 px or more at delivery size and check the exported H.264 file, because the comp itself always shows full colour resolution.
- The QuickTime gamma shift (Apple's colour-managed players showing Rec. 709 files lighter than the reference monitor) is explained, with the house handling, in 16-editing-colour-grading-and-delivery.md, section 12.5. For motion graphics the practical rule is the same: judge on the reference monitor and the target phone, and tell the client before the first Mac review.

### 12.8 HDR deliverables

High dynamic range (HDR) video carries brighter highlights and a wider gamut than Rec. 709. The standards: ITU-R BT.2100 defines two transfer functions, PQ (perceptual quantiser, SMPTE ST 2084, absolute: each code value is a fixed luminance up to 10,000 cd/m2) and HLG (hybrid log-gamma, developed by the BBC and NHK, relative and backward compatible with SDR displays), both with BT.2020 primaries (the wide colour gamut defined for UHD television; nits and transfer functions: 04-colour.md, section 3.5). Delivery flavours: HDR10 (PQ with static metadata: the mastering display per SMPTE ST 2086, MaxCLL for the brightest pixel and MaxFALL for the brightest frame average), HDR10+ (dynamic metadata per scene), and Dolby Vision (dynamic metadata in profiles; profile 8.4 is the HLG-based form iPhones record).

The rule that matters for graphics: ITU-R BT.2408 (current version BT.2408-9, March 2026) sets HDR reference white, the level for diffuse white and for graphics white, at 203 cd/m2, which is about 58 percent of the PQ signal and 75 percent of the HLG signal. Titles, supers and logos sit at reference white; only specular highlights (a diamond's glint, a lamp) go above it. A white logo placed at 1,000 nits glares on a phone in a dark room and looks like an error. YouTube's recommended HDR upload bitrates are 10 Mbps at 1080p and 44 to 56 Mbps at 2160p for 24 to 30 fps (encoding page, October 2026). The house finishes HDR in Resolve (16-editing-colour-grading-and-delivery.md, section 8.11), from AE renders made in ACEScg at 32 bpc (3.1), and always delivers an SDR version graded alongside, because most social viewing and every broadcast deliverable in India and the UAE is still SDR.

## 13. Delivery codecs and settings

A codec is the compression scheme (ProRes, H.264); a container is the file wrapper that holds video, audio and metadata streams (MOV, MP4, MXF, WebM). Two families matter. Intra-frame codecs (ProRes, DNxHR, CineForm, JPEG 2000) store every frame complete, so they are large, edit fast and survive re-encoding. Long-GOP codecs (H.264, H.265, AV1, VP9) store a full frame only every so often and predict the frames between from their neighbours (a GOP, group of pictures, is one full frame and its predicted followers), so they are small and suited to delivery only.

### 13.1 Masters and intermediates

| Codec | Bit depth and sampling | Alpha | Data rate | Use |
|---|---|---|---|---|
| Apple ProRes 422 HQ | 10-bit 4:2:2 | No | 184 Mbps at 1080p25; 737 Mbps at 2160p25 (Apple ProRes white paper, April 2022) | House master and interchange; decodes everywhere |
| Apple ProRes 4444 | Up to 12-bit 4:4:4 | Yes, up to 16-bit | 275 Mbps at 1080p25; 1,106 Mbps at 2160p25 | Graphics with alpha; masters with saturated colour edges |
| Apple ProRes 4444 XQ | Up to 12-bit 4:4:4 | Yes | 413 Mbps at 1080p25; 1,659 Mbps at 2160p25 | HDR masters and grade sources |
| Avid DNxHR HQ, HQX, 444 | 8-bit 4:2:2; 10 or 12-bit 4:2:2; 10 or 12-bit 4:4:4 | Check the receiving facility | Avid's DNxHR white paper | When the post house runs Avid, in MXF OP1a |
| GoPro CineForm | 10 or 12-bit, 4:2:2 or 4:4:4 | Yes (RGBA) | Variable | A Windows-friendly intermediate with alpha, exported by Adobe Media Encoder |
| XDCAM HD422 | 8-bit 4:2:2 long-GOP | No | 50 Mbps | Broadcast in India and the UAE (26-platform-and-format-specs-2026.md, section 5.9) |
| OpenEXR sequence | 16-bit half or 32-bit float, multi-layer | Yes | Very large | 3D passes and composite sources (3.16, 8.2) |
| PNG or TIFF sequence | 8 or 16-bit | Yes | Large | Graphics hand-off; frame-accurate repair |
| HAP, HAP Alpha, HAP Q; NotchLC | GPU-decoded | HAP Alpha yes | Large | Media servers on event walls (Resolume, disguise, TouchDesigner), usually transcoded by the playback operator from a ProRes master |

The full ProRes rate table by resolution and frame rate is in 26-platform-and-format-specs-2026.md, section 5.2. ProRes RAW is a camera recording format and never a motion graphics deliverable.

### 13.2 H.264, H.265, AV1 and VP9 for distribution

H.264 (AVC) remains the house upload codec in October 2026 because every platform, ad server and player accepts it; H.265 (HEVC) gives about the same quality at half the bitrate and is the HDR codec (Main 10 profile), but ad servers still reject it often; AV1 and VP9 are what YouTube transcodes to and what browsers play natively, and rarely what the house uploads.

| Setting | H.264 upload value | Reason |
|---|---|---|
| Profile and level | High; Level 4.2 for 1080p50 and 60, 5.1 for 2160p30, 5.2 for 2160p60 | Levels cap the decoder's workload; a wrong level fails on some phones |
| Rate control | Two-pass VBR (variable bitrate: the first pass measures complexity, the second spends bits where the picture needs them) | Spends bits on grain and gradients, saves them on held frames |
| Bitrate | House: 20 to 30 Mbps at 1080p25, 15 to 20 Mbps at 1080 by 1920, 50 to 80 Mbps at 2160p25 (26-platform-and-format-specs-2026.md, section 5.2). YouTube's recommended minimums for SDR: 8 Mbps at 1080p and 35 to 45 Mbps at 2160p for 24 to 30 fps; 12 and 53 to 68 Mbps at 48 to 60 fps | Every platform re-encodes, so the upload is the platform encoder's source; give it more than the minimum |
| GOP | Closed GOP of half the frame rate (12 frames at 25 fps), 2 consecutive B-frames (frames predicted from both earlier and later frames), CABAC (context-adaptive binary arithmetic coding, H.264's more efficient entropy coder) | YouTube's stated requirement (encoding page, October 2026); closed GOPs cut cleanly |
| Chroma, scan, pixels | 4:2:0, progressive, square | 12.6, 12.7 |
| Colour | BT.709 primaries, transfer and matrix, tagged; legal range | 12.7; untagged files are guessed |
| Container | MP4, moov atom at the front (fast start), no edit lists | Playback starts before the download ends (YouTube's stated requirement) |
| Audio | AAC-LC, 48 kHz; YouTube recommends 384 kbps stereo, the house delivers 320 kbps elsewhere | Section 14; 26-platform-and-format-specs-2026.md, section 5.3 |

Grain and dark gradients are the hardest content an encoder meets: noise is unpredictable, so the encoder starves it and the result is blocking in the shadows, exactly where luxury work lives. Three remedies, in order: more bitrate; a slightly coarser grain at delivery size (fine single-pixel grain is the first thing a platform encoder smears); and a 1 percent dither on gradients under the grain (3.7).

Reference commands for FFmpeg (the open-source command-line encoder), from a ProRes or PNG master:

```bash
# Social and web H.264 from a ProRes master, 1080p25: a constant-quality alternative to the two-pass VBR
# in the table above (CRF 16, constant rate factor); file size varies with content, so check it against the platform cap
ffmpeg -i MASTER_422HQ.mov -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 16 -preset slow -g 12 -bf 2 -movflags +faststart \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
  -c:a aac -b:a 320k -ar 48000 CLIENT_Asset_030s_16x9_EN_25p_v07.mp4

# ProRes 4444 with alpha from a PNG sequence (profile 4 is 4444, 5 is 4444 XQ)
ffmpeg -framerate 25 -i SC03_%05d.png -c:v prores_ks -profile:v 4 \
  -pix_fmt yuva444p10le -vendor apl0 SC03_4444.mov

# WebM VP9 with alpha for Chromium browsers and Firefox
ffmpeg -i LOGO_4444.mov -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 2M \
  -auto-alt-ref 0 -an LOGO_alpha.webm
```

### 13.3 Transparent video

| Format | How alpha is carried | Plays in | Weight | House use |
|---|---|---|---|---|
| ProRes 4444 or 4444 XQ (MOV) | Straight or premultiplied (3.16) | AE, Premiere, Resolve, Final Cut, Avid | Very large | The alpha master |
| HEVC with alpha (MOV or MP4, hvc1) | Alpha layer in the HEVC stream | Safari and Apple apps on macOS and iOS | Small | Web overlays for Apple devices; encode with Apple Compressor, Final Cut Pro, the macOS Finder's Encode Selected Video Files with Preserve Transparency, or Resolve Studio |
| WebM VP9 with alpha | yuva420p | Chrome, Edge, Firefox | Small | Web overlays for everything else |
| Stacked alpha (H.264 with colour in one half and the matte in the other, recombined in a WebGL or canvas shader) | Simulated | Any browser | Small | One file for every browser, at the cost of a little code |
| PNG or EXR sequence | Native | Every editing and compositing tool | Very large | Hand-off to another studio |
| Lottie, dotLottie, Rive | Vector | Their players (9.4, 9.5) | Tiny | Flat vector UI motion |

The browser trap: source order in a video element used to be enough (HEVC alpha first for Safari, WebM second for the rest), but Chrome has decoded HEVC on supported hardware since 2022, without its alpha, and caniuse lists WebM as supported in Safari from 16.0 on macOS and 17.4 on iOS (October 2026) without tracking VP9 alpha. Either file can therefore land in the wrong browser and play on a black box. Choose the file with a short script that tests the browser, or ship stacked alpha, and test on a real iPhone and a real Android phone before launch.

### 13.4 GIF, MP4, WebM, Lottie or Rive for interface motion

| Format | Colour | Transparency | Interactive | Typical weight | Use it for |
|---|---|---|---|---|---|
| GIF | 256 colours per frame, dithered | 1-bit (on or off) | No | Several times an equivalent MP4; web.dev's worked example turned a 3.7 MB GIF into a 551 KB MP4 and a 341 KB WebM | Email only, where nothing else animates reliably. caniemail lists Outlook 2007 to 2019 for Windows as not supporting animated GIF (Outlook 2019 with a Microsoft 365 account plays it three times and stops; October 2026), so the first frame must carry the message |
| MP4 (H.264), muted, looping | Full 8-bit 4:2:0 | No | No | Small | Photographic or 3D loops on the web, autoplay muted with playsinline and a poster |
| WebM (VP9 or AV1) | Full | VP9 alpha | No | Smallest | The same loop for Chromium and Firefox; alpha overlays (13.3) |
| Animated WebP, APNG, AVIF | Full | Yes | No | Medium | Short loops where a video element is impractical; support and decode cost vary by browser |
| Lottie and dotLottie | Vector | Yes | Limited | Tiny for flat vector work | Icons, logo stings, onboarding in apps (9.5) |
| Rive | Vector, raster images allowed | Yes | Yes, through state machines | Tiny file plus a runtime of about 100 to 150 KB | Anything that reacts to input or data (9.4) |

### 13.5 Captions as deliverables

Deliver burned-in captions on every feed cut (most feed video is watched with the sound off) and a sidecar file (a separate caption file delivered beside the video: SRT, SubRip Text, or WebVTT, the W3C web caption format) wherever the platform takes one, because a sidecar is read by screen readers and indexed by search. Formats and character limits are in 26-platform-and-format-specs-2026.md, section 5.10; styling and placement in section 5 here and in 16-editing-colour-grading-and-delivery.md, section 11. For Hindi and Arabic, burn in from a font with full Devanagari and Arabic shaping (the World-Ready Composer setting in 3.13), keep SRT files in UTF-8, and have a native reader sign off the burned frame, because bidirectional Arabic text with English brand names inside it reorders itself in ways a non-reader will not notice.

### 13.6 File naming and versioning

House pattern, one field per decision a recipient needs, joined by underscores:

`CLIENT_Campaign_Asset_Duration_Ratio_Language_Rate_vNN_YYYYMMDD.ext`, for example `CLIENT_Monsoon26_Hero_030s_9x16_HI_25p_v07_20261029.mp4`.

- Duration as three digits (006s, 015s, 030s) so cutdowns sort in order.
- Ratio as 9x16, because a colon is illegal in Windows file names and breaks some upload tools.
- Language as the ISO 639-1 code (EN, HI, AR); the ISO date (YYYYMMDD) so files sort chronologically in every operating system.
- Version as a zero-padded number that increments on every file the client sees (v07 sorts after v06; v7 sorts after v10). The word "final" never appears in a file name, because the next round always comes.
- The Frame.io version stack (section 1) carries the same numbers, so a client comment on v07 maps to one file.
- A delivery sheet (one row per file: name, duration, ratio, resolution, frame rate, codec, bitrate, measured loudness, captions, language, approver, date) travels with every delivery and is the checklist for section 16's QC pass.

### 13.7 Archive

- Collect the AE project with File, Dependencies, Collect Files, which copies the project and every footage file into one folder with a report. It does not collect fonts or plugins, so add a text file listing every font (with its licence status) and every plugin and version; a project reopened in three years with a substituted font is a different film.
- Keep: the collected project, the image-sequence renders of every hero scene, ProRes 422 HQ masters and 4444 alpha masters per version, the music stems (submixes of one sound family) and the mix (section 14), the approved styleframes and animatic, the delivery sheet, and the licence PDFs for music, fonts, stock and AI tools (22-ai-era-craft-and-generative-tools.md, section 7).
- The 3-2-1 rule: three copies, on two kinds of media, one off site. LTO tape (Linear Tape-Open; LTO-9 holds 18 TB native per cartridge; LTFS lets a tape mount like a drive) or cloud cold storage (Amazon S3 Glacier Deep Archive, where a standard retrieval takes up to 12 hours) for the off-site copy; a single external drive on a shelf is one copy.
- Retain for at least the longest usage term in the contract plus two years, because renewals, anniversary cutdowns and language versions need the source project as well as the master (16-editing-colour-grading-and-delivery.md, section 5.11; 24-business-of-creative-and-agency-operations.md for the contract terms).

## 14. Sound for motion

Sound design vocabulary, restraint rules, music licensing, loudness targets and sonic branding are in 15-lighting-and-sound.md (sections 11.5, 12, 13.4 and 15). This section is what changes when the picture is animated: the sound is often there before the picture, and every keyframe can be placed to the frame.

### 14.1 Sync points and tolerance

- A sync point is a frame where picture and sound must coincide: the lock frame of a logo (section 6), each word landing on a VO stress (section 4), each cut, each contact (a ring set down on marble, a bottle cap closing). List them as markers in the animatic, named, and hand the list to the sound designer with the picture, so sound and animation are built to the same frames.
- Tolerance: ITU-R BT.1359-1 (1998) found that viewers detect sound leading picture by about 45 ms and sound lagging picture by about 125 ms, and find errors unacceptable beyond about 90 ms early and 185 ms late (the lag figure appears as 190 ms in some summaries, and sign conventions differ between sources). The asymmetry matches nature, where light arrives before sound. At 25 fps one frame is 40 ms (24 fps: 41.7 ms; 30 fps: 33.3 ms; 60 fps: 16.7 ms), so the working rule is: sound may never lead picture by more than one frame, and a hit lands on the contact frame or the frame after it.
- Drift sources: a 29.97 picture against audio timed for 30 fps (0.1 percent, so 60 ms over a minute and 600 ms over ten), and phone screen recordings in variable frame rate (VFR, where the frame interval changes with device load). Conform every VFR clip to a constant rate (Shutter Encoder or HandBrake) before it enters AE or the edit, then check sync on the last frame of the film as well as the first.
- The 2-pop: a one-frame 1 kHz tone placed exactly 2 seconds before the first frame of action, aligned with a one-frame white flash on the picture; every stem (a submix of one sound family: VO, music or effects) and every picture export carries it until the final master, so any offset is visible and audible in one frame.

### 14.2 Sound design as rhythm

Animation is timed to music more often than music to animation, so the tempo is a design decision. Frames per beat equals frame rate multiplied by 60, divided by BPM (beats per minute):

| BPM | 24 fps | 25 fps | 30 fps |
|---|---|---|---|
| 60 | 24 frames | 25 frames | 30 frames |
| 72 | 20 | 20.83 | 25 |
| 75 | 19.2 | 20 | 24 |
| 80 | 18 | 18.75 | 22.5 |
| 90 | 16 | 16.67 | 20 |
| 93.75 | 15.36 | 16 | 19.2 |
| 96 | 15 | 15.63 | 18.75 |
| 100 | 14.4 | 15 | 18 |
| 120 | 12 | 12.5 | 15 |

Choose or commission a tempo that gives a whole number of frames per beat at the delivery rate (60, 75, 93.75 or 100 BPM at 25 fps; 60, 72, 80, 90, 96 or 120 at 24), because a fractional beat makes animation on the beat alternate between two frame counts and drift visibly against the music over a 30 second film. The house's slow luxury tempo, under 100 BPM (15-lighting-and-sound.md, section 15.4), means 75 BPM (20 frames) or 93.75 BPM (16 frames) at 25 fps.

- Whooshes (air-movement sounds that follow a fast move) start 4 to 8 frames before the fastest frame of the move they accompany and peak on it; a whoosh that peaks after the move reads late. Hits (short percussive accents) land on contact. Risers (sounds that climb in pitch or density into a cut) end exactly on the frame of the cut they lead into. One hit per film for luxury work (15-lighting-and-sound.md, section 11.5).
- Sound as material: a recorded object (a clasp, a page, silk drawn across a table, ice in a glass) under a graphic move makes it physical, which is the audio half of design-taste, section 2, "Material honesty"; a library whoosh under the same move makes it sound like every stock advert.
- Silence: drop the bed to nothing for 6 to 12 frames before the lock frame, and the logo arrives on a clean frame of sound. The silence makes the arrival, which is the Ben Burtt principle in 15-lighting-and-sound.md, section 11.5.
- Motion graphics for UI and product demos get small interface sounds (taps, ticks) placed on the frame the element settles, low in the mix, and only on actions the viewer should notice.

### 14.3 Music editing to picture, the motion-specific rules

- Lock the music edit at the animatic gate (section 1). Animation polish is timed to the cut track; a music change after polish re-times every key and is a new round.
- Never temp with a commercial song the budget cannot clear. Clients fall in love with the temp track, and the licensed replacement then sounds wrong to them; temp from the library the job will license (15-lighting-and-sound.md, section 12.3).
- Ask for stems and for the library's alternate versions (many library tracks ship with 60, 30 and 15 second edits and an underscore without the melody), because each cutdown needs its own music edit that ends on a resolved note; a fade-out reads as a cut-down.
- Cutdowns (60, 30, 15, 6 seconds) are re-animated from the master project with their own beat sheets; trimming a 30 second film to 15 in the edit cuts through moves and through bars of music.

### 14.4 Mix and audio deliverables

- Mix to the destination's loudness target: EBU R 128 (minus 23 LUFS, loudness units relative to full scale measured to ITU-R BS.1770, and minus 1 dBTP, decibels true peak) for broadcast in India and the UAE, minus 14 LUFS and minus 1 dBTP as the house target for social and web (15-lighting-and-sound.md, section 13.4; 26-platform-and-format-specs-2026.md, section 5.4). One file per target, named with the target.
- Deliver, all as 48 kHz 24-bit WAV, the same length as the picture: the full stereo mix; M&E (music and effects: the mix without voice), which is what makes Hindi, Arabic and English VO versions possible without remixing; the VO, music and effects stems separately; and a silent picture version for DOOH and feeds.
- Languages change timing. A Hindi or Arabic VO of the same script runs longer or shorter than the English; record the language VOs before the animation is locked for each version, re-time the supers per language, and budget each language as a version (section 1).
- Licensing for music and effects: 15-lighting-and-sound.md, section 12.2 (sync and master licences, IPRS and PPL in India, the UAE position) and 12.3 (library tiers). A pitch animatic shown outside the agency needs a licensed track as much as the final film does.

### 14.5 AI voice and sound in the motion workflow

- A synthetic scratch VO (ElevenLabs or a similar tool) gives the animatic a stable read at the target pace, about 150 words per minute (section 1). Label it "scratch, synthetic" on the slate, because a client who falls in love with it resists the real artist, the same risk as temp music (14.3).
- Clone a real artist's voice only with signed consent and a licence that names the use, the duration and the territory (24-business-of-creative-and-agency-operations.md, section 4.10; 22-ai-era-craft-and-generative-tools.md, section 7.4).
- AI dubbing and lip-sync for Hindi and Arabic versions are previs or low-tier tools. Broadcast and brand-film language versions are recorded by native artists and re-timed per language (14.4), because synthetic Hindi and Arabic still miss stress and pronunciation that a native listener hears at once.
- AI sound effects serve as temp; licensed or recorded effects go in the master (15-lighting-and-sound.md, section 12). Disclosure of synthetic voice follows 22, section 7.6 and ASCI's synthetic-content guidelines (19-campaigns-and-creative-direction.md, section 16.5).

## 15. Studios and work to study

design-taste, references/canon.md names the motion studios worth borrowing from and what their work feels like; 18-brand-strategy-and-identity-design.md, section 11 covers the identity studios. This table is the craft layer: the one production lesson each studio teaches best, so that a reference in a brief names a technique to copy. Locations and credits are from the studios' own sites where they could be read in October 2026; the others are long-standing public credits.

| Studio or teacher | Base and people | The craft it teaches | What to study |
|---|---|---|---|
| Buck | Los Angeles, New York, Sydney, Amsterdam, London (buck.co) | One standard of craft across 2D, 3D, cel and live action; a large studio that keeps a single art direction per film | Good Books, "Metamorphosis" (2011), for timing and shape language held by one designer's frames; current campaign films on buck.co |
| ManvsMachine | London | The product as sculpture: a photoreal hero inside an abstract, graphic world (8.5), with one slow camera move | Their product films for Nike and Apple (named in design-taste's canon) |
| Ordinary Folk | Vancouver (ordinaryfolk.co) | 2D character animation with appeal: strong poses, clear silhouettes, timing that reads in one viewing | The Google Doodle work and studio reels on its site |
| Oddfellows | San Francisco | Illustration-led explainers that stay warm; one styleframe extended into a system for a long film | Their explainer work for technology companies |
| Giant Ant | Vancouver; Jay Grandin and Leah Nelson | Explainers built on an idea before a style; hand-made texture; open sharing of process | Their process talks and breakdowns |
| Gunner | Detroit | 2D and 3D hybrid with graphic shading; humour in brand work without cheapness | Their brand reels |
| Tendril | Toronto | Design-led 3D: material studies, abstract product and title work where the render serves a graphic idea | Their 3D design work |
| Art Camp | New York | Illustrators' worlds animated without losing the drawn hand | Their illustration-to-animation films |
| Cub Studio | Manchester | A character system that stays consistent across a long-running brand series | Their character-led brand content |
| Animade | London; makers of the Boords storyboarding app | Character animation, and the discipline of boards and animatics (section 2) | Boords itself as a boarding tool; their character work |
| Golden Wolf | London; founded by Ingi Erlingsson | Bold graphic 2D: flat colour, energy and timing for entertainment and sport | Their entertainment and sport work |
| Nexus Studios | London | Film-grade animation alongside interactive and AR work under one roof | Smith and Foulkes' "This Way Up" (2008), nominated for the Academy Award for animated short |
| Blind | Santa Monica; founded by Chris Do in 1995 | The business of motion: pricing, positioning, pitching (Chris Do went on to found The Futur) | The Futur's material on pricing creative work, read with 24-business-of-creative-and-agency-operations.md |
| Imaginary Forces | Los Angeles and New York | Title sequences that compress a world into about a minute | Mad Men (2007): a falling silhouette among adverts; Stranger Things (2016): a typeface and light, nothing else |
| Elastic | Santa Monica | Titles as a system that changes with the content | Game of Thrones (2011, Angus Wall): a clockwork map that rebuilds itself around each episode's locations; True Detective (2014, Patrick Clair): double exposures of character and landscape |
| Territory Studio | London, San Francisco, Barcelona; co-founders Nick Glover and David Sheldon-Hicks (territorystudio.com) | FUI (fictional user interface: screen graphics designed for film) that must read in two seconds and carry plot | Guardians of the Galaxy (2014), Ex Machina (2014), The Martian (2015), Blade Runner 2049 (2017) |
| DIA Studio | Founded 2009 in SoHo, New York; now New York and Chamonix; Meg Donohoe and Mitch Paone (dia.studio) | Kinetic identity systems, typographic systems and generative tools; motion parameters written into the identity like colour values | Their kinetic identity case studies and type collaborations (Optimo is listed among their partners) |
| Studio Dumbar | Rotterdam; founded by Gert Dumbar in 1977; part of DEPT | Motion as the identity carrier; performative type that behaves by rules (12-motion-principles-and-ui-motion.md, section 14) | Alzheimer Nederland and Amsterdam Sinfonietta; the DEMO Design in Motion festival |
| Bureau Borsche | Munich; Mirko Borsche (bureauborsche.com) | Fashion-world moving image: lo-fi footage with exact type, editorial attitude, nothing polished for its own sake | Telfar TV; the Charlotte de Witte tour visuals; their work for Balenciaga, Rimowa and Zeit Magazin |
| Studio Eeksaurus | Mumbai; Suresh Eriyat | Indian animation craft in advertising and short film, with a drawn hand specific to its subjects | Tokri, which won the National Film Award for Best Non-Feature Animation Film; verify further credits on the studio's site |
| Universal Everything | Sheffield; Matt Pyke | Generative motion identities and installations that pass the screensaver test (10.2) because each rule is authored | Its installation and identity work |
| Moment Factory | Montreal | Venue-scale multimedia for hospitality, retail and events (10.3) | Its venue and destination projects |
| teamLab | Tokyo; teamLab Phenomena Abu Dhabi opened on Saadiyat Island in 2025 | Immersive rooms where projection and interaction carry the space; the local reference Gulf clients will cite | A visit to the Abu Dhabi venue, studied for scale, darkness and pacing |
| Hornet | New York | The director-roster model: a production company that represents animation directors, so the brief casts a director for a style | Its roster pages, as a casting reference |
| Ben Marriott | Australian motion designer and After Effects teacher on YouTube | Shape-layer craft and flat 2D animation explained keyframe by keyframe; the fastest route to After Effects fluency | His tutorials, rebuilt by hand |
| School of Motion | Online school founded by Joey Korenman; more than 50 courses (schoolofmotion.com) | Structured training: Animation Bootcamp for the graph editor, spacing and the principles applied in AE | The graph editor lessons, then the design courses |

How to study a reference, the house method:

1. Watch it with the review method in 1.1.
2. Chart one move: count its frames, sketch its speed graph (3.3), note the offsets between elements and the frame the sound lands.
3. Rebuild 5 seconds of it in AE from scratch, then change the content to a Mask360 client's and keep the timing. Copying the timing teaches; copying the look is theft (design-taste, section 4, rule 1: borrow one named thing).
4. File the rebuild in the studio's reference library with the borrowed property in its name, so the next brief can cite it.

Data and AI art is contested ground. Refik Anadol's data-as-pigment installations (27-how-the-best-designers-think.md, section 6.9; 28-masters-methods-and-principle-systems.md, section 9.2) divide opinion: MoMA presented Unsupervised (2022 to 2023) as a new way of reading its collection, while critics, among them Jerry Saltz, dismissed it as screensaver spectacle that could carry any dataset. The house position follows 28's trap: an Anadol-style fluid enters a Mask360 film only when the dataset means something to the client (a hotel's guest arrivals, a jeweller's archive), with the source shown as in section 7.

Further reference sources: Art of the Title (artofthetitle.com) for title sequences with interviews; Motionographer (motionographer.com) for the motion industry; the studios' own case studies for process.

## 16. The craft tells

design-taste, section 3 lists the motion tells at the level of taste (fade-up on everything, looping bounces, parallax everywhere), and 12-motion-principles-and-ui-motion.md, section 16 lists the interface ones.

| Tell | Cause | Fix | Where |
|---|---|---|---|
| Bounce abuse: everything overshoots and settles | Overshoot expressions and presets applied to every layer | Overshoot on one playful hero moment or none; luxury moves settle without passing the target | 3.3, 3.8 |
| Over-easing: moves float and nothing lands | Long symmetrical Easy Ease on short distances; both ends heavy | Asymmetric curve: quick departure, long settle; shorter durations for shorter distances | 3.3 |
| Under-easing: mechanical, robotic movement | Linear keyframes left from blocking | Ease every spatial move; linear only for data lines, crawls and constant rotation | 3.2, 7 |
| Inconsistent timing across elements | Each layer timed by eye, often by different animators | One timing system: a duration scale (for example 12, 18, 24 and 36 frames at 24 fps) and one curve family saved in Flow, written into the project notes | 3.3, 3.15 |
| No anticipation: moves start from nowhere | Keys begin at full velocity | A 2 to 4 frame counter-move or a held frame before a large move (anticipation, one of Thomas and Johnston's twelve principles) | 12-motion-principles-and-ui-motion.md, section 2 |
| Text that moves while being read | Drift or slow scale on supers to "keep it alive" | Arrive, hold still for the reading time, leave | 4, 5 |
| Glow and lens flares | Native Glow and flare plugins as decoration | Remove; bloom only from a real light source, rendered at 32 bpc | 3.7 |
| Default plugin looks | Particular, Saber, Element 3D chrome or Animation Composer presets used as supplied | Change every default parameter, or do not use the plugin; the audience has seen the default | 3.15 |
| Mismatched frame rates | 30 fps footage in a 25 fps comp; a 25 fps film converted to 30 for upload | Conform sources; render natively; upload at the native rate | 3.1, 12.2 |
| Aliased edges: stair-stepped diagonals, shimmering hairlines | Draft quality renders, 1 px strokes, rasters scaled above 100 percent, Collapse Transformations off on vector precomps | Render at Best quality; continuously rasterise vectors; strokes of 2 px or more at delivery size; render UHD and downscale | 3.9, 12.3 |
| Wrong colour space exports: milky blacks, crushed shadows, a shifted brand colour | Range mismatch, missing colour tags, the Apple gamma shift misread as a fault | Tag BT.709, legal range; judge on the reference monitor and the target phone | 12.7; 16-editing-colour-grading-and-delivery.md, section 12.5 |
| Audio out of sync | Variable frame rate sources, 29.97 against 30, sound placed by ear | Conform VFR; 2-pop on every export; check the last frame | 14.1 |
| Banding in gradients | 8 bpc project, no dither, low delivery bitrate | 16 bpc, 1 percent noise dither, grain, higher bitrate | 3.1, 3.7, 13.2 |
| Boiling lines | Wiggle Paths or Turbulent Displace at default settings | 0.5 to 1 wiggles per second, or none | 3.5 |
| Camera shake on graphics | Wiggle on a camera to add "energy" | A motivated camera move or a still frame; shake belongs to handheld live action | 3.10 |
| Speed ramps on every shot | The 2010s sport-edit habit | One ramp per film, motivated by an impact | 3.11 |
| Everything moving at once | No hierarchy of motion | One lead element per beat; secondary elements move less and later | 4 |
| Unmotivated 3D camera orbits | A free camera with nowhere to look | One push or one arc per film (3.10); the orbit only for a product turntable | 3.10, 8.3 |
| Shimmering or pulsing hairlines on slow drifts | A layer moving a fraction of a pixel per frame is resampled differently on each frame, so thin type and rules alternate between sharp and soft | Motion blur on; hold still, or move at whole-pixel speeds (as 12.1 requires for crawls); strokes of 2 px or more at delivery size; render UHD and downscale | 3.11, 12.1, 12.3 |
| Moiré on fine patterns (10.3) | Pinstripes, mesh or LED screens finer than the pixel grid beat against it | Slight blur or a scale change on the pattern; test the H.264 file | 12.7 |
| Flash frames | A stray frame at a cut after a trim | Frame-step every cut before export | 16.1 |

### 16.1 Pre-delivery QC checklist

1. Watch the full export on the target device (phone for social, reference monitor for broadcast, the venue's wall when possible) with the review method in 1.1; for broadcast, also check gamut on the parade against EBU R 103 (5.5).
2. Read the file with MediaInfo (a free tool that reports codec, profile, frame rate, resolution, colour tags and audio format) and compare every value against the delivery sheet (13.6).
3. Overlay the safe areas (section 5) on the first frame, each super and the end card.
4. Check spelling in every language with a native reader on the rendered frame, with special care for Devanagari conjuncts and Arabic joining (3.13).
5. Measure loudness and true peak over the whole file (14.4).
6. Check sync on the first and the last sync point (14.1).
7. Frame-step every cut for flash frames and every gradient for banding at 100 percent view.
8. Check flashing: no more than three flashes in any one-second period (WCAG 2.2 success criterion 2.3.1; ITU-R BT.1702 sets the broadcast guidance on photosensitive epilepsy; 11-accessibility-and-inclusive-design.md, section 7.3). Event and nightlife edits with strobing transitions fail this most often.
9. Confirm the first frame is a readable composition (feeds autoplay muted and loops are caught mid-way) and the end card holds as section 5 specifies.
10. Confirm licences for music, fonts, stock and AI-generated material are filed with the master (13.7).

## 17. Reference table by destination

House values as of October 2026. Platform minimums, sources and verification status are in 26-platform-and-format-specs-2026.md, section 5; where the two files differ, 26 is the platform record and this table is the motion house's export setting.

| Destination | Resolution | Frame rate | Codec and container | Video bitrate | Audio | Loudness | Notes |
|---|---|---|---|---|---|---|---|
| Archive master | UHD 3840 by 2160 (or vertical UHD) | As produced: 24 or 25 | ProRes 422 HQ MOV; 4444 XQ for HDR | 737 Mbps at 2160p25 | 48 kHz 24-bit PCM, stereo | Broadcast and digital mixes as separate files | Source of every version (13.7) |
| Graphics with alpha to an editor | Master size | Match the edit | ProRes 4444, straight alpha (premultiplied if the editor is unsure) | 1,106 Mbps at 2160p25 | None, or separate WAV | n/a | 3.16 |
| Broadcast TV, India and UAE | 1920 by 1080 | 25 (1080i50 or 1080p25, per sheet) | ProRes 422 HQ MOV or XDCAM HD422 MXF | 184 Mbps or 50 Mbps | 48 kHz 24-bit, stereo on channels 1 and 2 | EBU R 128: minus 23 LUFS, minus 1 dBTP (or the channel's sheet) | Slate, ad code, 2 s black head and tail; ask the channel for its sheet |
| Cinema advertising, India | Per the network's sheet | 24 or 25, confirmed with the network | Delivered from the ProRes master to the in-cinema ad network (UFO Moviez, or Qube for its DCP screens) | Per the network | Per the network | Confirm with the network | Read the network's current spec sheet before the edit is locked |
| Cinema DCP | 1998 by 1080 (2K flat) | 24 | JPEG 2000 in MXF, SMPTE DCP | Up to 250 Mbps | 24-bit 48 kHz PCM, 5.1 or stereo | Mixed to the 85 dB reference in a calibrated room | Made by a DCP house from the ProRes master |
| YouTube landscape | 3840 by 2160 | Native | H.264 High, MP4, fast start | House 50 to 80 Mbps; YouTube minimum 35 to 45 | AAC-LC 384 kbps, 48 kHz | About minus 14 LUFS, minus 1 dBTP | Closed GOP of half the frame rate; SRT sidecar |
| YouTube Shorts, Instagram Reels, TikTok | 1080 by 1920 (1440 by 2560 for Meta ads) | Native 25 (24 for brand film) | H.264 High, MP4 | House 15 to 20 Mbps | AAC-LC 320 kbps, 48 kHz | Minus 14 LUFS, minus 1 dBTP | Universal safe box (section 5); burned-in captions |
| Instagram and Meta feed | 1080 by 1350 (1440 by 1800 for Meta ads) | Native | H.264 High, MP4 | House 15 to 20 Mbps | AAC-LC 320 kbps | Minus 14 LUFS | First frame readable with sound off |
| LinkedIn | 1920 by 1080 or 1080 by 1350 | Native | H.264 High, MP4 | House 15 to 20 Mbps | AAC-LC 320 kbps | Minus 14 LUFS | SRT sidecar; most viewing is silent |
| Website hero loop | 1920 by 1080, plus a 1080 by 1350 mobile cut | 24 or 25 | H.264 MP4 plus VP9 or AV1 WebM, no audio track | Under 2.5 MB (H.264) and 1.5 MB (VP9 or AV1) for the file | None | n/a | Poster image as the LCP element; reduced-motion still (9.6; 21-web-design-and-digital-craft.md, section 4) |
| Web overlay with transparency | As designed | 25 or 30 | HEVC with alpha for Safari, VP9 alpha WebM for the rest, or stacked alpha | As low as holds the edge | None | n/a | Browser selection by script (13.3) |
| App and UI motion | Vector | 30 or 60 | Lottie JSON or .lottie; Rive .riv for interactive | Under 100 KB JSON, under 30 KB .lottie | None | n/a | 9.4, 9.5 |
| Email | 600 px display width | 10 to 15 | GIF | About 1 MB as a working ceiling | None | n/a | The first frame carries the message (13.4) |
| Event LED wall | The wall's pixel map, 1:1 | 25 or 50 | ProRes 422 HQ to the playback operator, who transcodes to HAP, Resolume's DXV or NotchLC for the server | Master rate | Usually the venue mix | About minus 16 LUFS where audio runs | 26-platform-and-format-specs-2026.md, section 5.11; confirm the processor's refresh rate with the AV vendor in each country (10.3) |
| Portrait DOOH (malls, airports, metro) | 1080 by 1920 | 25 | H.264 MP4 per the media owner's sheet | Per the owner | Usually none | n/a | 10 s and 15 s loops, no fades, the mark in every frame; pixel specifications in 20-print-packaging-ooh-and-physical-production.md, section 7.3 |
| Presentation embed (Keynote, PowerPoint, Google Slides) | 1920 by 1080 | 25 or 30 | H.264 MP4; HEVC with alpha in Keynote for overlays | 10 to 20 Mbps | AAC-LC | Minus 14 LUFS | Test on the presenting laptop |
| Client review (Frame.io) | 1920 by 1080 or 1080 by 1920 | Native | H.264 with burnt-in timecode | 10 to 20 Mbps | AAC-LC 320 kbps | As the mix | Version number in the file name and on the slate (13.6) |
| WhatsApp | Not a delivery or review channel | n/a | WhatsApp recompresses video and strips colour tags | n/a | n/a | n/a | Send the Frame.io link (1.1); if a client insists, send the file as a document attachment, which avoids the video recompression |

## Terms introduced

- 2-pop: a one-frame 1 kHz tone 2 seconds before the first frame of action, matched by a one-frame flash in picture, used to prove sync.
- 2.5D: flat layers placed in 3D space so that a camera move produces parallax.
- 2:3 pulldown: spreading 4 film frames across 10 interlaced fields to carry 23.976 material at 29.97, at the cost of judder.
- 3-2-1 rule: three copies of an archive, on two kinds of media, one of them off site.
- 3D Camera Tracker: the After Effects effect that solves a camera move from a plate so 3D layers can be pinned into it.
- ACES: the Academy Color Encoding System, a scene-referred colour pipeline with defined input and output transforms.
- ACEScg: the linear ACES working space for rendering and compositing.
- Action safe: the area inside which important action must sit; 93 percent of width and height under SMPTE ST 2046-1.
- Advanced 3D: After Effects' renderer with HDRI lighting, model import, physical materials and extrusion.
- aerender: After Effects' command-line renderer, the basis of AE render farms and automation.
- AgX: the view transform that replaced Filmic as Blender's default in 4.0, rolling highlights off smoothly.
- Alembic: an open format for baked animated geometry.
- Alpha matte: a track matte that cuts a layer by another layer's transparency.
- Anamorphic billboard: a forced-perspective 3D render designed to read correctly from one viewing position.
- Anchor point: the pivot about which a layer scales and rotates.
- Animatic: storyboards cut to scratch voice over and temp music at the real frame rate and timing.
- Anisotropy: highlights stretched along one direction, as on brushed metal.
- Anticipation: a small counter-move before a main move, so the move appears to start from a decision.
- AOV: arbitrary output variable; a render pass holding one component of the image (diffuse, specular, depth).
- Arabic-Indic digits: the numerals U+0660 to U+0669 used with Arabic text.
- Auto bezier: interpolation that AE smooths automatically through a keyframe.
- B-frame: a frame predicted from both earlier and later frames.
- Backing plate: a solid or translucent shape behind type that guarantees legibility over footage.
- Banding: visible steps in a gradient where too few levels are available.
- Basis Universal: a compressed texture format that transcodes to whatever the GPU reads.
- Beat sheet: the film written as a list of timed beats that must sum to the brief's duration.
- Beer's law: the absorption colour of a medium deepens with the distance light travels through it.
- Bezier interpolation: keyframe interpolation shaped by hand-set influence handles.
- Biased renderer: a path tracer that trades exactness for speed through caching and clamping.
- Blocking pass: the first animation pass, with positions and timing and no polish.
- Bodymovin: the After Effects extension that exports a comp to Lottie JSON.
- bpc: bits per channel, the colour precision of a project or file (8, 16 or 32).
- BT.2020: the wide colour gamut defined for UHD television.
- Burnt-in timecode: a timecode display rendered into a review picture.
- CABAC: context-adaptive binary arithmetic coding, H.264's more efficient entropy coder.
- Caustics: focused patterns of light thrown by refractive or reflective objects onto nearby surfaces.
- Chroma subsampling: storing colour at lower resolution than brightness, written 4:4:4, 4:2:2 or 4:2:0.
- Clay: grey-shaded renders of a model, used to approve form before materials.
- Clean plate: the frame with the unwanted object or prop removed, or shot without it.
- Closed GOP: a group of pictures that references no frame outside itself, so it cuts cleanly.
- Codec: a compression scheme for video or audio.
- Collapse Transformations: the AE switch that passes vector sharpness and 3D through a precomp boundary.
- ComfyUI: a node-based interface for image and video models whose graphs are saved as repeatable files.
- Compositor-only properties: CSS properties (transform, opacity) the browser's compositor animates without layout or paint.
- Container: the file wrapper that holds streams and metadata (MOV, MP4, MXF, WebM).
- Continuous bezier: bezier interpolation with linked handles, smooth through the keyframe.
- Corner bug: a small persistent mark in a corner of the frame.
- CRF: constant rate factor, x264's constant-quality rate control.
- Cryptomatte: automatic ID mattes keyed by object or material name, written into an EXR.
- CSG: constructive solid geometry; shapes combined by union, subtraction and intersection.
- Data-driven animation: an After Effects rig whose text, colour or timing are read from a JSON, CSV or TSV file.
- dBTP: decibels true peak, the peak level of the reconstructed audio waveform.
- DCP: Digital Cinema Package, the JPEG 2000 file set that cinemas play.
- Design animatic: the animatic rebuilt with final designed frames before animation starts.
- Dispersion: the splitting of white light into colours by a refractive material, set by its Abbe number.
- Dither: low-level noise added to a gradient so it does not band.
- Dolby Vision: HDR video with dynamic metadata, delivered in numbered profiles.
- Domain warping: feeding one noise field into the coordinates of another to produce liquid and marble forms.
- dotLottie: the compressed .lottie package that bundles Lottie animations, assets, themes and state machines.
- Draco: Google's open mesh compression for glTF.
- Drop frame: 29.97 or 59.94 timecode that skips frame numbers so the count keeps pace with the clock.
- End card: the closing frame carrying the logo, line and call to action.
- End tag: a 1 to 1.5 second logo ending for 6 second bumpers and short cutdowns.
- Essential Properties: precomp properties exposed for editing in the parent comp; formerly Master Properties.
- EV: exposure value; one step doubles or halves the light.
- Expression: a JavaScript snippet attached to an AE property and evaluated every frame.
- Expression Selector: a text-animator selector whose amount for each character is computed by an expression.
- Fake letterbox: black bars added to a 16:9 social video to imitate cinema.
- fBm: fractal Brownian motion; octaves of noise summed at doubling frequency and halving amplitude.
- Fireflies: isolated over-bright pixels from rare light paths in a path-traced render.
- FK: forward kinematics; posing a limb joint by joint from its root.
- FLIP: a fluid solver that combines particles and a grid, used for liquids.
- Focus stacking: combining renders or photographs focused at different depths.
- Fragment shader: the shader stage that colours each pixel.
- Frame blending: generating in-between frames when footage is slowed (Frame Mix dissolves, Pixel Motion uses optical flow).
- FUI: fictional user interface; screen graphics designed for film and television.
- Gaussian splatting: reconstruction of a photoreal scene as millions of coloured, oriented blobs from photographs or video.
- Geometry Nodes: Blender's node-based procedural geometry system.
- GLSL: the OpenGL Shading Language used by WebGL.
- glTF: the Khronos transmission format for 3D scenes, as .gltf or binary .glb.
- GOP: group of pictures; one complete frame and the frames predicted from it.
- Graph editor: AE's view of keyframes as value or speed curves.
- Handles: extra frames at the head and tail of a shot for the editor.
- HDR: high dynamic range video, with brighter highlights and a wider gamut than Rec. 709.
- HDR10: PQ high dynamic range video with static metadata (SMPTE ST 2086, MaxCLL, MaxFALL).
- HDR10+: PQ HDR with dynamic metadata per scene.
- HDRI: a high dynamic range panoramic image used as a light source.
- Hit: a short percussive sound accent placed on a contact or a lock frame.
- HLG: hybrid log-gamma, the relative, SDR-compatible HDR transfer function from the BBC and NHK.
- Hold keyframe: a keyframe with no interpolation, so the value jumps at the key.
- Ident: a longer identity film for a channel or venue.
- IK: inverse kinematics; posing a limb by moving its end, with the joints solved automatically.
- Influence: how far a keyframe's bezier handle reaches into the interval towards the neighbouring keyframe.
- Interlacing: recording each frame as two fields of alternate lines captured at different instants.
- Interline twitter: flicker of horizontal detail one line thick on an interlaced display.
- Intra-frame codec: a codec that stores every frame complete (ProRes, DNxHR).
- IOR: index of refraction; how much a material bends light (glass 1.5, diamond 2.42).
- Judder: an uneven motion cadence produced by pulldown or frame-rate conversion.
- Kashida: the elongation of an Arabic connecting stroke (tatweel), used for justification and emphasis.
- Keying: separating a subject from a green or blue screen by its colour (Keylight in After Effects).
- Kinetic typography: type whose motion carries meaning.
- KTX2: the Khronos texture container, here carrying Basis Universal compressed textures.
- Lakh and crore: Indian digit grouping, 1,00,000 (one lakh) and 1,00,00,000 (one crore).
- Legal range: video levels coded 16 to 235 in 8-bit luma; full range uses 0 to 255.
- Light group: a render pass holding the contribution of one light or set of lights.
- Linear interpolation: constant-speed change between keyframes.
- Lock frame: the frame on which a logo is complete and still, and where the sound hit lands.
- Long-GOP codec: a codec that predicts most frames from their neighbours (H.264, H.265, AV1).
- Lookdev: look development; building and approving materials on a model.
- LoRA: low-rank adaptation; a small fine-tune of an image or video model on one subject's images.
- Lottie: a JSON vector animation format exported from AE by Bodymovin.
- Lower third: the name and role caption in the lower part of the frame that identifies a speaker.
- LTO: Linear Tape-Open, the archive tape standard.
- LUFS: loudness units relative to full scale, measured to ITU-R BS.1770.
- Luma matte: a track matte that cuts a layer by another layer's brightness.
- Lumen: Unreal Engine's real-time global illumination.
- LUT: look-up table; a fixed mapping from input colours to output colours.
- Luxury ease: the house asymmetric curve, with a quick departure and a long settle.
- M&E: the music and effects mix without voice, used to build language versions.
- Mask: a path on a layer that limits its visible area.
- Matchmove: solving a real camera's motion so a CG camera can match it.
- MaterialX: an open standard for exchanging material definitions between applications.
- MaxCLL and MaxFALL: HDR10 metadata for the brightest pixel and the brightest frame average in a programme.
- MCP: Model Context Protocol, the open standard through which an AI assistant operates an application.
- meshopt: Arseny Kapoulkine's open mesh compression for glTF.
- MoGraph: Cinema 4D's motion-graphics toolset of Cloners, Effectors and Fields.
- MOGRT: Adobe's packaged motion graphics format for Premiere Pro.
- Moiré: a false interference pattern where a fine pattern beats against the pixel grid.
- Motion control (AI): transferring a reference performance onto a generated subject.
- Motion test: a 3 to 5 second animated proof of one direction's movement language, signed with the styleframes.
- MPM: the material point method, a solver for snow, sand and mud.
- Multi-frame rendering: After Effects rendering several frames at once across CPU cores.
- Nanite: Unreal Engine's virtualised geometry, which streams only the detail a frame needs.
- Negative fill: a black card that removes light and puts a dark edge into reflections.
- Null object: an invisible AE layer used as a parent or a controller.
- NURBS: non-uniform rational B-splines; mathematically exact curved surfaces.
- OB-hour: an OctaneBench-hour, a farm billing unit of GPU speed multiplied by time.
- OCIO: OpenColorIO, the open colour management system used by AE, Blender, Nuke and others.
- On twos: animation with a new drawing every second frame (12 a second at 24 fps); on ones every frame, on threes every third.
- Open-weight model: a model whose trained weights are published, so it runs on the house's own machines.
- OpenEXR: a high dynamic range, multi-layer image format for renders and composites.
- OpenPBR: an open, physically based surface shading model from the Academy Software Foundation.
- Optical flow: estimating per-pixel motion between frames to build new in-between frames.
- Out-of-core: a GPU renderer spilling geometry and textures to system memory when VRAM runs out, at a large speed cost.
- Out-of-gamut: code values outside EBU R 103's preferred minimum and maximum.
- Overscan: the edge of the picture cut off by a television set.
- Overshoot: a value passing its target and returning.
- PAR: pixel aspect ratio; one pixel's width divided by its height.
- Parallax: the apparent shift of near objects against far ones as the camera moves.
- Parenting: making one layer inherit another layer's transform.
- Path tracer: a renderer that follows random light paths through each pixel.
- PBR: physically based rendering; materials described by measurable properties.
- PCG: procedural content generation; Unreal Engine's rule-based placement of geometry.
- Perlin noise: Ken Perlin's 1985 gradient noise.
- Photogrammetry: building a textured mesh from overlapping photographs.
- Photon mapping: caching light paths from the lights as photons so focused light resolves quickly.
- Pixel map: the plan of which pixels of a processor canvas land on which LED panel.
- Planar tracking: tracking a flat surface in footage and exporting corner-pin data.
- Playblast: a quick viewport render at real timing, used for layout and simulation review.
- PMC kernel: Octane's unbiased kernel built for difficult caustic light paths.
- PQ: perceptual quantiser; the absolute HDR transfer function of SMPTE ST 2084.
- Precomp: a composition used as a layer inside another composition.
- Premultiplied alpha: colour already multiplied by the alpha against a background colour.
- Previs: previsualisation; a rough moving version of the film for planning.
- PsF: progressive segmented frame; a progressive frame carried as two fields of the same instant.
- Range selector: the part of a text animator that sweeps the effect across characters, words or lines.
- Ray depth: the number of refraction or reflection bounces a renderer follows.
- Rec. 709: the HD broadcast colour space, ITU-R BT.709.
- Reference white: the HDR level for diffuse and graphics white, 203 cd/m2 under ITU-R BT.2408.
- Repeater: the shape operator that duplicates a shape with an incremental transform.
- Responsive Design, Time: the After Effects feature that fixes intro and outro frames while a MOGRT's hold stretches.
- Retopology: rebuilding a sculpted or scanned mesh as a clean, animatable one.
- Riser: a sound that climbs in pitch or density into a cut.
- Rive: a design tool and runtime for interactive vector animation driven by state machines.
- Roto: rotoscoping; isolating a subject from footage frame by frame with masks or a model.
- Rove across time: a spatial keyframe that AE places in time to keep speed constant along a path.
- Scintillation: the alternation of light and dark reflections as a gem turns.
- Scratch VO: a rough voice-over read used only for timing.
- SDF: signed distance field; each point stores its distance to the nearest surface.
- Shader: a program run on the GPU per vertex or per pixel.
- Shadow catcher: an invisible surface that receives only a CG object's shadow or reflection, for compositing over a plate.
- Shape layer: AE's native vector layer of paths, fills, strokes and operators.
- Shirorekha: the headline bar that joins the letters of a Devanagari word.
- Shutter angle: the share of the frame interval over which motion blur is gathered (180 degrees is half).
- Sidecar: a caption file delivered beside the video.
- Simplex noise: Ken Perlin's 2001 successor to Perlin noise, cheaper in higher dimensions.
- Smear: a deliberately distorted in-between drawing that stands in for motion blur.
- Sonic logo: an audio mark, usually 1.5 to 3 seconds.
- Spatial interpolation: the shape of a position keyframe's path in space.
- Spectral renderer: a renderer that computes colour by wavelength of light.
- Speed graph: the graph editor view of speed against time.
- Spill: coloured light from a green or blue screen reflected onto the subject.
- SRT: SubRip Text, the plain caption file format.
- ST map: an image whose red and green values store each pixel's distorted position, used to redistort CG in comp.
- Stacked alpha: colour and matte stored in one ordinary video and recombined in a shader.
- State machine: Rive's graph of states connected by transitions driven by inputs.
- Stem: a submix of one sound family (voice, music or effects).
- Sting: a short logo animation that closes a film or marks a break.
- Straight alpha: colour stored unmultiplied, with transparency held only in the alpha channel.
- Strobing: the stepped look of fast motion at a low frame rate.
- Styleframe: a single frame at final quality that proves a look can exist.
- Subdivision surface: a smooth surface computed from a low-polygon cage (Catmull-Clark).
- Subsurface scattering: light entering a surface, scattering inside and leaving elsewhere (skin, wax, pearl).
- Super: any short line of text on screen.
- Supersampling: rendering above the delivery size and averaging pixels down, which removes aliasing.
- Sync point: a frame where picture and sound must coincide.
- Tabular figures: numerals of equal width, so changing digits do not jitter.
- Temporal interpolation: how a keyframed value changes over time.
- Text animator: an AE property group that animates ranges of a text layer.
- Three-point lighting: a key, a fill and a rim light; a teaching scheme.
- Tie-down: the rough drawing cleaned to consistent volumes before final line.
- Time remapping: making a layer's time a keyframable property.
- Timing chart: a mark on a key drawing that plans the spacing of the in-betweens.
- Title safe: the area inside which text must sit; 90 percent of width and height under SMPTE ST 2046-1.
- Track matte: one layer used to cut another by its alpha or its luminance.
- Trim Paths: the shape operator that animates the start, end and offset of a stroke.
- TSL: Three Shading Language, the node-based shader language of three.js.
- Two-pass VBR: variable bitrate encoding that measures complexity in one pass and allocates bits in the second.
- UDIM: numbered UV tiles that let one object carry several texture maps.
- Unbiased renderer: a renderer that converges on the physically exact result given enough samples.
- Underscore: a music edit without the melody, for use under voice.
- Uniform: a value sent from JavaScript to a shader (time, mouse, resolution).
- USD: Universal Scene Description, Pixar's scene interchange format.
- UV: the 2D coordinates that map a texture onto a surface.
- Value graph: the graph editor view of value against time.
- Varying: a value passed from the vertex shader to the fragment shader.
- VDB: OpenVDB, a sparse volume format for smoke, fire and liquid caches.
- Version matrix: ratios multiplied by durations, languages, audio states and end-card variants; the file count of a campaign.
- Version stack: every upload of the same cut stacked for comparison in Frame.io.
- Vertex shader: the shader stage that positions geometry.
- VFR: variable frame rate, where the interval between frames changes; it drifts against audio.
- View transform: the display rendering of scene-linear values (ACES 2.0, AgX), kept out of the EXR.
- VRAM: the memory on a graphics card, which limits GPU rendering.
- WebGPU: the W3C browser GPU API that succeeds WebGL.
- WebVTT: the W3C web caption file format.
- WGSL: the WebGPU Shading Language.
- Whoosh: an air-movement sound that follows a fast move.
- World-Ready Composer: Adobe's text engine for Arabic, Devanagari and other complex scripts.
- Z-depth: a pass storing each pixel's distance from the camera.

## Sources and further reading

### Books

- Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation, 1981.
- Richard Williams, The Animator's Survival Kit, 2001 (expanded edition 2009).
- Preston Blair, Cartoon Animation, 1994.
- Chris Meyer and Trish Meyer, Creating Motion Graphics with After Effects, 5th edition, 2010.
- Mark Christiansen, Adobe After Effects CC Visual Effects and Compositing Studio Techniques, 2013.
- Austin Shaw, Design for Motion: Fundamentals and Techniques of Motion Design, 2016.
- Charles Poynton, Digital Video and HD: Algorithms and Interfaces, 2nd edition, 2012.
- Jeremy Birn, Digital Lighting and Rendering, 3rd edition, 2013.
- Matt Pharr, Wenzel Jakob and Greg Humphreys, Physically Based Rendering: From Theory to Implementation, 4th edition, 2023, https://pbr-book.org
- Daniel Shiffman, The Nature of Code, 2nd edition, 2024.
- Walter Murch, In the Blink of an Eye, 2nd edition, 2001.
- David Sonnenschein, Sound Design: The Expressive Power of Music, Voice and Sound Effects in Cinema, 2001.

### Standards and specifications

- SMPTE ST 2046-1:2009, Safe Areas for Television Production, https://pub.smpte.org/doc/st2046-1/20091123-pub/st2046-1-2009.pdf; SMPTE RP 218 (deprecated except for CEA-708 caption layout), https://pub.smpte.org/pub/rp218/rp0218-2009.pdf
- EBU R 95, Safe areas for 16:9 television production, v1.1, 2017, https://tech.ebu.ch/publications/r095
- EBU R 128, Loudness normalisation and permitted maximum level of audio signals, 2023, https://tech.ebu.ch/publications/r128
- ITU-R BT.709-6, Parameter values for the HDTV standards, https://www.itu.int/rec/R-REC-BT.709; ITU-R BT.2020-2, Parameter values for UHDTV systems, https://www.itu.int/rec/R-REC-BT.2020; ITU-R BT.2100 (HDR, PQ and HLG), https://www.itu.int/rec/R-REC-BT.2100
- ITU-R BT.2408-9 (March 2026), Guidelines for operational practices in high dynamic range television production, https://www.itu.int/pub/R-REP-BT.2408
- ITU-R BT.1359-1, Relative timing of sound and vision for broadcasting, https://www.itu.int/rec/R-REC-BT.1359
- ITU-R BT.1702, Guidance for the reduction of photosensitive epileptic seizures caused by television, https://www.itu.int/rec/R-REC-BT.1702
- SMPTE ST 2084:2014, High Dynamic Range Electro-Optical Transfer Function of Mastering Reference Displays (PQ), and SMPTE ST 2086:2018, Mastering Display Color Volume Metadata, both listed at https://pub.smpte.org
- EBU R 103 v3.0 (May 2020), Video signal tolerance in digital television systems, https://tech.ebu.ch/publications/r103
- Apple, Apple ProRes White Paper, April 2022, https://www.apple.com/final-cut-pro/docs/Apple_ProRes_White_Paper.pdf
- YouTube Help, Recommended upload encoding settings, https://support.google.com/youtube/answer/1722171 (read October 2026)
- Netflix, English Timed Text Style Guide, https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977-English-Timed-Text-Style-Guide; Hindi Timed Text Style Guide, https://partnerhelp.netflixstudios.com/hc/en-us/articles/215600497-Hindi-Timed-Text-Style-Guide
- Advertising Standards Council of India, The ASCI Code, https://www.ascionline.in/the-asci-code/; Clearcast, https://www.clearcast.co.uk; Real Estate (Regulation and Development) Act 2016, India Code, https://www.indiacode.nic.in; Dubai Land Department (Trakheesi permits), https://dubailand.gov.ae
- W3C, Web Content Accessibility Guidelines 2.2, https://www.w3.org/TR/WCAG22/; W3C, WebGPU, https://www.w3.org/TR/webgpu/
- Khronos Group, glTF 2.0 specification, https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html
- Academy Software Foundation: OpenEXR, https://openexr.com; OpenColorIO, https://opencolorio.org; OpenPBR, https://academysoftwarefoundation.github.io/OpenPBR/; MaterialX, https://materialx.org; OpenUSD, https://openusd.org
- Lottie specification, https://lottie.github.io; dotLottie, https://dotlottie.io
- caniuse, WebM video format, https://caniuse.com/webm (read October 2026); caniemail, animated GIF, https://www.caniemail.com/features/image-gif/ (read October 2026)

### Documentation, articles and studio sources

- Adobe, After Effects User Guide, https://helpx.adobe.com/after-effects/user-guide.html
- Dan Ebberts, MotionScript (expressions, including inertial bounce), https://www.motionscript.com
- Ken Perlin, "An Image Synthesizer", SIGGRAPH 1985 (Computer Graphics, volume 19, number 3)
- Jonah Friedman and Andrew C. Jones, "Fully Automatic ID Mattes with Support for Motion Blur and Transparency" (Cryptomatte), SIGGRAPH 2015 poster
- Bernhard Kerbl, Georgios Kopanas, Thomas Leimkühler and George Drettakis, "3D Gaussian Splatting for Real-Time Radiance Field Rendering", ACM Transactions on Graphics, SIGGRAPH 2023, https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
- RED, "Camera panning speed", https://www.reddigitalcinema.com/red-101/camera-panning-speed; American Society of Cinematographers, American Cinematographer Manual (panning speed tables; check the current edition)
- CG Channel, release coverage of After Effects, Cinema 4D, Redshift, Houdini and Blender, https://www.cgchannel.com, including Redshift 2026.4 (https://www.cgchannel.com/2026/03/maxon-adds-real-time-renderer-redshift-live-to-redshift-2026-4/), Redshift 2026.5 (https://www.cgchannel.com/2026/04/maxon-releases-redshift-2026-5/) and Cinema 4D 2026.2 (https://www.cgchannel.com/2026/04/maxon-ships-cinema-4d-2026-2-unveils-cinema-4d-for-ipad-beta/)
- Blender release notes, https://developer.blender.org/docs/release_notes/ (5.0 colour management: https://developer.blender.org/docs/release_notes/5.0/color_management/); Maxon help and release notes, https://help.maxon.net; SideFX, https://www.sidefx.com (Houdini Indie: https://www.sidefx.com/products/houdini-indie/); Unreal Engine 5 release history, https://en.wikipedia.org/wiki/Unreal_Engine_5; Adobe Animate's 2026 discontinuation and reversal, https://en.wikipedia.org/wiki/Adobe_Animate
- three.js releases, https://github.com/mrdoob/three.js/releases; GSAP documentation, https://gsap.com/docs/v3/, and the 3.13 release post, https://gsap.com/blog/3-13/; Rive blog, https://rive.app/blog
- Frame.io plans, https://frame.io/pricing; GarageFarm, https://garagefarm.net; Topaz Labs, https://www.topazlabs.com; Blackmagic Design, DaVinci Resolve, https://www.blackmagicdesign.com/products/davinciresolve; OTOY, https://home.otoy.com; KeyShot Studio, https://www.keyshot.com/keyshot-studio/; Artificial Analysis leaderboards, https://artificialanalysis.ai
- Video model pages for section 11: https://deepmind.google/models/veo/, https://runwayml.com, https://lumalabs.ai, https://klingai.com, https://hailuoai.video, https://higgsfield.ai
- Tool sites for section 8: https://cavalry.studio, https://derivative.ca, https://spline.design, https://www.foundry.com, https://www.unrealengine.com, https://polyhaven.com, https://rxlaboratory.org (Duik Angela); tracking and matchmove, https://borisfx.com (Mocha, SynthEyes); automation, https://dataclay.com (Templater), https://www.plainlyvideos.com, https://github.com/inlife/nexrender; designer-side motion, https://www.figma.com/motion/, https://jitter.video, https://lottiefiles.com, https://www.theatrejs.com; boards and tracking, https://wonderunit.com, https://www.toonboom.com, https://www.cg-wire.com (Kitsu)
- Inigo Quilez, "Domain warping", https://iquilezles.org/articles/warp/; Stefan Gustavson, webgl-noise, https://github.com/stegu/webgl-noise
- Patricio Gonzalez Vivo and Jen Lowe, The Book of Shaders, https://thebookofshaders.com
- web.dev, "Replace animated GIFs with video for faster page loads", https://web.dev/articles/replace-gifs-with-videos
- FFmpeg documentation, https://ffmpeg.org/documentation.html; MediaInfo, https://mediaarea.net/en/MediaInfo
- Art of the Title, https://www.artofthetitle.com; Motionographer, https://motionographer.com
- Studio pages read in October 2026: https://buck.co, https://ordinaryfolk.co, https://territorystudio.com/about-us/, https://www.dia.studio/about, https://bureauborsche.com, https://www.schoolofmotion.com/about; Studio Dumbar/DEPT, https://studiodumbar.com/work; DEMO festival, https://demofestival.com/about
