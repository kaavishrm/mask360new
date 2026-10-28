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
| Script and voice over | 3 to 5 days writing, 1 day record | Script with timings per line, scratch VO (a rough read by anyone, used for timing), then the recorded VO | Final script words; VO artist from 2 to 3 options | Words set the duration. A 60 second VO at 150 words per minute is 150 words; a script of 190 words will never fit |
| Moodboard and styleframes | 5 to 7 days | 1 to 2 directions, each with 3 to 5 styleframes (finished-quality still frames that prove the look) | One direction | A styleframe costs a day; an animated scene costs a week. Decide the look at the cheaper price |
| Storyboard | 3 to 5 days | 12 to 24 boards per 30 seconds, with action notes, camera notes and the VO line under each | The sequence of shots and what happens in each | Fixes structure before design time is spent on frames that will be cut |
| Animatic | 2 to 3 days | Boards cut to the scratch VO and a temp music track, with real timings, exported as a video | Timing and pacing | The animatic is the contract for duration. Anything approved here can be animated to the frame |
| Design | 5 to 10 days | Every keyframe designed to styleframe quality, assembled into a design animatic (the animatic rebuilt with final frames) | Every frame as a still | Animators should never design while animating; it doubles the time and halves the consistency |
| Animation | 10 to 20 days for 30 seconds of 2D | Blocking pass (positions and timing, no polish), then polish pass, then a review cut with temp sound | Blocking at a mid-point review, polish at the end | Blocking lets the client see motion before the expensive polish; polish is where the ease curves and offsets live |
| Render | 1 to 3 days | Image sequences (EXR or PNG) for every scene, then a master | Nothing; internal | Rendering to image sequences means a crash at frame 1,100 of 1,500 loses one frame, and a fix re-renders only the changed range |
| Sound design and mix | 3 to 5 days | Sound effects, music edit to picture, VO placement, mix to a loudness target (section 14) | The mix, reviewed with the picture | Sound is half the perceived quality; it is scheduled last because it needs locked picture |
| Grade | 1 day | Colour-corrected master, checked on the destination device | The grade on a reference monitor or the client's phone | The grade is where a Rec. 709 export is checked against the sRGB phone and the broadcast monitor |
| Delivery and versions | 2 to 3 days | Masters, platform versions, language versions (Devanagari, Arabic), transparent versions, stills | The delivery list, ticked | Versions are where most agency errors happen: wrong ratio, wrong frame rate, wrong language cut |

Total for a 60 second brand film: about 6 to 10 weeks from brief to delivery, with two client review rounds built into each gate. A third round at any gate is billed.

### Running reviews

- Review on Frame.io (Adobe). Version 4, out of beta on all plans since 2024, gives frame-accurate comments anchored to a point on the frame, version stacks (every upload of the same cut stacked so reviewers compare v03 to v04), Collections (saved metadata views), and, since the September 2025 updates, transcription and captions with SRT and VTT export on shared links, plus Quick Share for several clips in one link. Comments on a WhatsApp forward of an MP4 are unusable because nobody knows which frame the client means.
- Post the review cut with burnt-in timecode (a timecode overlay rendered into the picture) so a phone screenshot still identifies the frame. In After Effects, the Timecode effect on an adjustment layer does this.
- Reviews are decisions, so a review round closes with a written list of changes, each tagged to a timecode, a gate and an owner. Comments that reopen an earlier gate ("can we change the order of scenes 3 and 4" during animation) are quoted back with the cost before any work starts.
- Two rounds per gate is the norm written into the estimate. The reason is arithmetic: a 60 second film has about 8 gates; unlimited rounds at each would make the schedule unknowable.
- Internal review happens before every client review, with the creative director watching at 1x with sound, then at 0.5x with sound off, then frame-stepping the three hardest transitions. The 0.5x pass exposes ease and timing faults the eye forgives at full speed.

## 2. Styleframes, storyboards and animatics

### Styleframes

A styleframe is a single frame rendered to final quality that proves the look can exist. It must prove five things, because each is a separate way a direction fails in animation: the typeface works at the sizes the film needs; the palette survives on the darkest and brightest scene; the image treatment (3D, photo, illustration, type only) can be produced in the schedule; the composition has room for the VO's longest line; and the frame still reads at 400 pixels wide, since most of the audience sees it on a phone.

Make three to five styleframes per direction. Three is the minimum because a single frame can hide the fact that the look only works for one kind of content: choose the opening frame, the busiest data or product frame and the end frame. Build them at the master resolution (3840 by 2160 for anything that may go to a screen; 1080 by 1920 if the film is vertical only) and at 16 bits per channel so gradients do not band when the frames become the animation.

Present styleframes on a neutral grey, not on the agency deck's house background, because the client must judge the frame's own colour. Show each frame once at full size, then the set at thumbnail size, since the thumbnail row is how the film will look in a feed.

### Storyboards

Boards are drawn fast and small. A 30 second film takes 12 to 24 boards: one per shot, plus one per significant change inside a shot (a camera move, a type reveal, a product turn). Fewer than 12 and the board hides timing problems; more than 24 for 30 seconds and the film is probably over-cut for a luxury audience, where a 3 to 5 second average shot length reads expensive and a 1 second average reads like a retail promo.

Each board carries four things: the frame (a 16:9 or 9:16 box, drawn with the actual safe areas marked), the action note ("ring rotates 90 degrees, light sweeps across the pavé"), the camera note (static, push in, rack focus, with the lens if 3D), and the VO or super text that sits under it. Draw boards for vertical and landscape at the same time if both are deliverables; a film designed landscape and "cropped for Reels" loses its composition and the client notices on the first review.

### Beat sheets and animatics

A beat sheet is the film as a list of beats with durations: "0:00 to 0:03 black, VO line 1; 0:03 to 0:07 ring reveal; ...". Write it before the storyboard and check the arithmetic: beats must sum to the brief's duration with 1 to 2 seconds held for the end card. This is the fastest way to catch a 60 second script hiding in a 30 second brief.

The animatic is the boards cut to the scratch VO and temp music at the real frame rate. Timing rules that hold across luxury work:

- Hold the first frame for 12 to 24 frames at 24 fps (0.5 to 1 second) before anything moves. Stillness at the start reads as confidence (design-taste, section 2, "Slowness").
- Give every super a reading time of about 0.5 seconds per word, with a floor of 2 seconds. Section 5 has the derivation.
- Let the music drive cuts only after the structure is set; cutting to music first produces a film that is a music video for the track.
- Export the animatic at the destination ratio with burnt-in timecode, and ask the client to watch it on a phone with sound.

## 3. After Effects in depth

After Effects (AE) is the house 2D animation and compositing application. As of October 2026 the current release is 26.5 (September 2026); the 2026 cycle added Object Matte (26.2, April 2026), depth of field in the Advanced 3D renderer and a mask tracker reported up to five times faster (26.3, June 2026), and disk caching for Object Matte plus percentage-based guides (26.5). An agentic AI Assistant that drives AE from prompts and writes expressions is in beta, and a beta build lets video layers and precomps act as material sources in the Advanced 3D renderer. Single-app subscription is listed at US $34.49 per month or $263.88 per year; AE requires Windows 11 or macOS 14 or later.

### 3.1 Project and composition settings

- Bit depth. Project Settings, Color: 8, 16 or 32 bits per channel (bpc). Work at 16 bpc as the floor, because 8 bpc gradients band visibly over more than about 60 steps of luminance, and most luxury work is slow gradients on dark grounds. Use 32 bpc (floating point) for glows, light wraps, HDR and anything with values above white, since 16 bpc clips at 1.0.
- Working colour space. The default is Rec. 709 (the HD broadcast colour space, ITU-R BT.709, which shares sRGB primaries). AE 2024 (24.0) introduced OpenColorIO (OCIO, the open colour management standard) and ACES (the Academy Color Encoding System, a scene-referred pipeline with ACEScg as the linear working space) in Project Settings; use ACEScg when compositing EXR renders from Redshift, Cycles or Karma so the 3D linear light is preserved, and let the output transform produce Rec. 709 for delivery. "Linearize working space" matters even in Rec. 709: blends, blurs and glows computed in linear light stop producing the dark fringe between two bright colours.
- Composition settings. Resolution at the master size (3840 by 2160 or 1080 by 1920), square pixels (pixel aspect ratio 1.0), duration from the animatic plus 2 seconds of handle (extra frames at head and tail for the editor), and the frame rate decided at the brief:
  - 24 fps: cinema, brand films, anything that should feel filmic. Motion blur at 180 degrees shutter looks correct at 24.
  - 25 fps: broadcast and most agency work in India, the UAE, the UK and Europe, which inherited the 50 Hz PAL standard. Mask360's default for anything that may go to television or a hotel screen in either country.
  - 30 fps: social platforms where 30 is the recorded norm; also the United States and Japan (60 Hz heritage), where 29.97 is the broadcast number.
  - 60 fps: UI motion, product spins, gaming, anything the viewer scrubs or watches close; it reads smooth and slightly "video", which is a deliberate choice against the filmic 24.
  - 23.976 and 29.97: these are 24 and 30 multiplied by 1000/1001, a 1950s NTSC compromise to fit the colour subcarrier. 23.976 is what a camera shooting "24" for broadcast usually records; match it only when cutting into such footage. 29.97 timecode comes in drop-frame (DF, which skips frame numbers 0 and 1 at the start of every minute except each tenth minute, so timecode stays aligned to the clock; 18 numbers per 10 minutes, no frames are actually dropped) and non-drop (NDF). AE shows DF with semicolons (00;00;00;00) and NDF with colons. Deliver DF for US broadcast, NDF elsewhere, never mixed within one job.
- Never mix frame rates in a comp. A 30 fps clip in a 25 fps comp repeats or skips one frame in six, which shows as a stutter every 0.2 seconds; conform the source (Interpret Footage, Conform to frame rate) or retime it with frame blending (3.11).

### 3.2 Layers, anchor points, keyframes and interpolation

- The anchor point is the layer's pivot for scale and rotation. Every layer gets its anchor set with intent before the first keyframe (Pan Behind tool, Y, or Layer, Transform, Center Anchor Point in Layer Content). A logo that scales from its corner because the anchor was never moved is the most common beginner tell.
- Keyframe interpolation types: linear (constant speed, reads mechanical), bezier (hand-shaped handles), auto bezier (AE smooths through the keyframe automatically, used on spatial paths), continuous bezier (handles linked, smooth through the keyframe), and hold (no interpolation; the value jumps at the keyframe, used for cuts, visibility switches and stepped motion). Temporal interpolation (how the value changes over time) and spatial interpolation (the shape of the path in space) are set separately; a spatial path can be linear while the timing is eased.
- Easy Ease (F9), Ease In (Shift F9) and Ease Out (Ctrl Shift F9) apply a symmetrical 33.33 percent influence. Treat them as a starting point only; 3.3 explains why the default ease reads generic.
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

The web equivalent of the luxury reveal is the "expo out" cubic bezier (0.16, 1, 0.3, 1), which section 9 uses for GSAP. Overshoot (the value passes the target and returns) belongs to playful brands; on a luxury logo it reads as a cartoon. Where two elements move together, give them the same curve shape and offset their start by 2 to 4 frames; identical start times read as a mechanical group and large offsets read as a sequence.

### 3.4 Motion paths, parenting and nulls

- Motion paths are the spatial curve of a position animation; edit them in the comp viewer with bezier handles. Straight-line paths between two keyframes read as a slide; a slight arc (the "arcs" principle in Thomas and Johnston's twelve principles of animation, 1981) reads as physical.
- Parenting (the Parent column) makes a child inherit the parent's transform, so a group of elements moves as one from a single set of keyframes. A null object (an invisible layer with transform only, Layer, New, Null Object) is the usual parent; one null per logical group, named for the group, so a scene can be repositioned by one layer. Parent before keyframing, because reparenting an animated layer changes its apparent motion.
- Camera and null: for 2.5D scenes, parent the camera to a null and animate the null's position and rotation; the camera itself keeps its point of interest behaviour and the null gives clean, readable keyframes.

### 3.5 Shape layers

Shape layers are vector graphics native to AE, rendered at any resolution without pixelation. Each shape group holds paths, fills, strokes and operators:

- Trim Paths: animates the start and end of a stroke, the basis of every line-draw reveal. Animate End from 0 to 100 percent with the luxury ease; animate Offset for a travelling dash.
- Repeater: duplicates a shape with an incremental transform (position, rotation, scale, opacity per copy). A ring of 36 ticks is one tick with a Repeater of 36 copies at 10 degrees rotation, with the group anchor at the ring centre.
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
| Roughen Edges | Breaks a clean edge into a torn or printed one | A tactile tell of 2026 (design-taste, section 6) when scaled subtly; a cheap tell at default Scale |
| Turbulent Displace | Warps a layer with evolving noise, for heat haze, hand-held tremor on type, liquid | Animate Evolution with a slow expression (time*20); keep Amount low |
| Displacement Map | Offsets pixels by another layer's luminance; the basis of glass, water and the web-style liquid distortion | Precompose the map at the same size |
| Fractal Noise | Procedural noise for grain, clouds, smoke, textures, luma mattes | Evolution over time, Fractal Type "Dynamic", Contrast raised for mattes |
| Gradient Ramp | A two-point gradient; combine with a Fractal Noise overlay to avoid banding | Use 16 bpc; dither with 1 percent noise |
| Tint and Lumetri Color | Tint for quick mono or duotone; Lumetri for curves, HSL, LUTs (look-up tables) and the grade | Lumetri is the AE grade tool; Resolve is the house grade tool for anything that matters |
| Posterize Time | Forces a layer to a lower frame rate (12 fps for a stop-motion feel) | Apply to a precomp; the only correct way to mix "hand-drawn 12" with "smooth 24" on purpose |
| Echo | Repeats previous frames with decay, for trails | A tell outside music or sport work |
| Time Displacement | Offsets time per pixel by a map's luminance, for scan and slit-scan effects | Needs long handles on the source |
| Glow | Blooms bright areas with a threshold | Avoid. The native Glow clips, bands and halos; it is the single most reliable "cheap" signal on type (design-taste, section 3). Deep Glow (Plugin Everything) renders physically plausible bloom in 32 bpc, and is still a tell on text; use it only for light sources |

### 3.8 Expressions

Expressions are JavaScript snippets attached to a property that compute its value every frame; the engine has been JavaScript (not the legacy ExtendScript) since AE 16.0 (2019). The ones that carry most work:

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
```

Inertia and overshoot (Dan Ebberts' widely used expression, motionscript.com): after the last keyframe the property overshoots and settles like a spring, controlled by amplitude, frequency and decay. The house uses it on playful work and never on type for luxury clients; the reason is section 3.3.

```javascript
// Overshoot after the last keyframe (Dan Ebberts pattern)
amp = .1; freq = 2.0; decay = 4.0;
n = 0; if (numKeys > 0){ n = nearestKey(time).index; if (key(n).time > time) n--; }
if (n == 0){ t = 0; } else { t = time - key(n).time; }
if (n > 0 && t < 1){ v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t); } else { value }
```

- sourceRectAtTime(t, includeExtents) returns a text or shape layer's top, left, width and height at time t; a rectangle whose size expression reads the text layer's sourceRectAtTime, plus padding, is a responsive backing plate for lower thirds (section 5) that fits any name length, including Devanagari and Arabic strings.
- Essential Properties (introduced as Master Properties in AE 15.1, 2018, renamed in 17.0) expose chosen properties of a precomp on the parent comp's Essential Graphics panel, so one lower-third precomp can be duplicated with different names and colours without opening it. They are also the mechanism behind MOGRTs (3.14).
- Expression controls (Slider, Checkbox, Color, Point, Angle, Dropdown Menu) on a null named "Control" give a rig a dashboard; every animated lower third or data chart should be drivable from one such null so the producer can change values without touching keyframes.
- Performance: expressions evaluate every frame; thousands of wiggle() calls across layers slow previews. Convert finished expressions to keyframes (Animation, Keyframe Assistant, Convert Expression to Keyframes) before handing off to Lottie or a render farm.

### 3.9 Precomposing strategy

A precomp (a composition used as a layer in another composition) is AE's grouping, caching and render-order tool. Rules:

- Precompose by scene and by logical object, named "SC03_Ring_Reveal" and "RIG_LowerThird", so the project panel reads like the storyboard.
- Precompose before applying an effect that must see the whole group (a blur on a group of layers, a matte on an assembled object, time remapping).
- Keep transforms on the precomp layer for scene-level moves (camera push) and inside the precomp for object animation; mixing both at one level makes the graph editor unreadable.
- Collapse Transformations (the sun icon) preserves vector sharpness and 3D through the precomp boundary; leave it off when the precomp needs its own motion blur or an effect applied to the flattened result.
- Build a master comp per ratio (16:9, 9:16, 1:1, 4:5) that references the same scene precomps, with Essential Properties for the elements that must reposition. Design the vertical version first if it is a deliverable: it is the harder frame, and a landscape film cropped to vertical is a tell the client sees in the first review.

### 3.10 3D layers, cameras, lights and renderers

- A 3D layer (the cube switch) gains z position, x and y rotation and orientation, and responds to cameras and lights. AE has three renderers in Composition Settings, 3D Renderer:
  - Classic 3D: 2.5D cards in space, fast, no intersections or extrusion; most kinetic type and parallax work.
  - Cinema 4D renderer (since AE 14.0, 2017): extrudes text and shapes with bevels; slow, limited materials; still the only native route to extruded type without the Advanced 3D renderer.
  - Advanced 3D (since AE 24.0, 2023): image-based lighting from an HDRI (a high dynamic range panoramic image used as a light source), import of 3D models (GLB, GLTF, OBJ, and native formats added through 2024 and 2025), extruded and bevelled text and shapes with physical materials, and, since 26.3 (June 2026), depth of field with Near and Far Blur controls and a focus distance that can link to a layer. Motion blur is unsupported in Advanced 3D as of 26.3, so renders needing it go through CC Force Motion Blur on a precomp or through the Pixel Motion Blur effect. In beta as of September 2026: video layers and precomps as material sources, and Substance materials on 3D text and shapes.
- Camera settings: Preset (the 35 mm film equivalents: 24, 28, 35, 50, 80, 135, 200 mm), Zoom (in pixels; it is the distance from camera to the plane where a layer is 1:1), Depth of Field on or off, Focus Distance, Aperture and Blur Level, Iris shape. A 50 mm preset is neutral; 35 mm and wider exaggerates parallax (the apparent shift of near against far objects, the whole point of 2.5D); 80 mm and longer flattens, which suits product and type.
- Lights: Point, Spot, Parallel, Ambient, plus Environment lights in Advanced 3D. Cast Shadows on the light and Accepts Shadows on the layer; shadow darkness around 40 to 60 percent and a soft Shadow Diffusion read like real light. One key light with an ambient fill is enough for 2.5D; three lights are a 3D habit (8.2).
- Null-driven camera rig (3.4) and a 3D layer stack separated by 100 to 400 px in z at 50 mm give the parallax push in that is the single house camera move; one per film.

### 3.11 Motion blur, time remapping and frame blending

- Motion blur (the layer switch and the comp switch) is computed from the layer's transform between frames. Composition Settings, Advanced: Shutter Angle 180 degrees (the cinema default; blur across half the frame interval), Shutter Phase minus 90 (centres the blur on the frame), Samples Per Frame 16 and Adaptive Sample Limit 128 as defaults. Raise the shutter angle to 270 to 360 for a dreamier, smeared feel; lower to 90 for a crisp, staccato one. Type without motion blur during a fast move strobes; type with motion blur during a slow move smears and becomes unreadable. The house rule: blur on, moves slow enough that blur is barely visible.
- Time remapping (Layer, Time, Enable Time Remapping) makes a layer's time a keyframable property; speed ramps, freezes and reverses live here. Frame blending fills the gaps when a clip is slowed: Frame Mix (cross-dissolves adjacent frames, cheap, ghosts) and Pixel Motion (optical flow, estimates motion vectors, slow, artefacts on crossing edges). For slow motion beyond 50 percent, generate frames with Topaz Video (section 11) instead.
- Posterize Time (3.7) is the deliberate opposite: fewer frames, by choice.

### 3.12 Roto, Object Matte, content aware fill and puppet tools

- Roto Brush 3 (2023) and its successor Object Matte (26.2, April 2026) isolate a subject from footage with AI, propagating a selection across frames; Object Matte caches to disk since 26.5 so a long shot does not recompute each session. Both still need the Refine Edge brush on hair and motion-blurred edges, and both fail on a subject that crosses a similarly coloured background. Plan a day per 10 seconds of difficult roto, or shoot on green.
- Content-Aware Fill for video (since 16.1, 2019) removes an object by filling from surrounding frames; it works for rigs, logos and small objects on textured backgrounds and fails on large areas with perspective change. Supply a reference frame cleaned in Photoshop to improve it.
- Puppet tools: Position pins deform a mesh, Advanced pins add rotation and scale, Bend pins bend a limb, Starch pins stiffen an area, Overlap controls which part draws in front. The mesh expansion and triangle count set smoothness. For anything beyond a single waving object, rig with Duik Angela or Rubberhose (section 7) instead.

### 3.13 Text animators

A text animator applies a transform (position, scale, rotation, opacity, tracking, fill, blur, and more) to a range of characters, words or lines, with a range selector that sweeps across the text. This is the engine of kinetic typography (section 4).

- Add an animator from the Animate menu on the text layer; Range Selector 1 has Start, End and Offset; animate Offset from minus 100 to 100 percent to sweep the effect through the text.
- Advanced: Shape (Square, Ramp Up, Ramp Down, Triangle, Round, Smooth) sets the falloff of the effect; Ease High and Ease Low shape the ease per character; Based On (Characters, Characters Excluding Spaces, Words, Lines) chooses the unit; Randomize Order with a Random Seed scrambles the sequence.
- Per-character 3D (Animate, Enable Per-character 3D) gives each glyph its own z and rotation; a slow x rotation from 90 to 0 degrees with a Ramp Up shape is the classic flip-in.
- Multiscript: Arabic shaping and right-to-left order require the Adobe World-Ready Composer (Paragraph panel menu, Adobe World-Ready Paragraph Composer) and a font with the Arabic script; per-character animators break the joined forms because each glyph is treated alone, so animate Arabic by word or line, or convert the shaped text to shapes first. Devanagari conjuncts behave the same way. Test with a native reader; the house works in both scripts.
- Variable fonts: AE exposes variable axes (weight, width, optical size) in the Character panel, animatable with the axis sliders and selectable through the variable-font filter added in 26.3; a weight animation from 300 to 700 on Space Grotesk is a house move that reads as type performing rather than type decorated.

### 3.14 Essential Graphics and MOGRTs

The Essential Graphics panel collects chosen properties (text, colours, sliders, Essential Properties from precomps) into a control surface and exports a .mogrt (Adobe's motion graphics file format for Premiere Pro, the T standing for Adobe's own word for it) that an editor drops into Premiere's Essential Graphics browser and edits without AE. Rules: one MOGRT per lower-third family; fonts must be on Adobe Fonts or installed on the editor's machine; bake the World-Ready Composer and script settings for Devanagari and Arabic into the source; keep expressions simple because Premiere's renderer evaluates them; and test every text field with the longest real name in the client's list.

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
| GifGun | Mikey Borup | One-click GIF and MP4 export from the comp | Review GIFs for chat; never for delivery |
| Bodymovin | Hernan Torrisi, free | Exports a comp to Lottie JSON for web and apps | Section 9 for what it can and cannot carry |
| Also | Ease and Wizz (Ian Haigh), Joysticks n Sliders, Limber, Explode Shape Layers, Ray Dynamic Color, Keystone | Smaller tools each solving one repeated job | Buy after the third time the job recurs |

### 3.16 Render settings, Media Encoder and render farms

- Render masters to image sequences: OpenEXR (16-bit half float, PIZ or DWAA compression) for anything that will be graded or composited again, PNG for 8-bit graphics with alpha, then assemble the master in AE or Resolve. The reason is in section 1: crash resilience and partial re-renders.
- ProRes 4444 with alpha: Output Module, Format QuickTime, Codec Apple ProRes 4444 (or 4444 XQ), Channels RGB + Alpha, Depth Millions of Colors+, Color Straight (unmatted) or Premultiplied (matted with black). Straight alpha keeps edge colour correct when the receiving application composites; premultiplied is the safe default for editors who will not change the background. ProRes 4444 at 1920 by 1080 and 29.97 fps targets about 330 Mbps; XQ about 500 Mbps (Apple ProRes white paper).
- H.264 and H.265 export is back in AE's own render queue (since 22.0) and in Adobe Media Encoder (AME); use AME for queued platform versions so AE stays free. Settings in section 13.
- Preview and proxies: set the comp to half resolution and 16 bpc while animating, with a proxy of any 4K footage; the final render at full resolution with motion blur on, Quality Best, and the Render Settings "Use comp's frame rate".
- Render farms for AE: AE is single-machine by design, with multi-frame rendering (since 22.0) using all cores. For farms, use a BG Renderer style tool locally or a cloud farm that supports AE and the exact plugin set; most AE jobs render overnight on one machine, and the farm cost case appears in 3D (8.6).

## 4. Kinetic typography craft

Kinetic typography is type whose motion carries meaning; the measure of craft is whether the viewer reads every word without effort and remembers the rhythm.

- Reading rate sets timing. Adults read about 200 to 250 words per minute of continuous prose, roughly 0.25 seconds a word, and about half that rate when words appear one at a time on a screen with motion around them. The house rule for kinetic type is 0.4 to 0.6 seconds per word on screen before the next move, with emphasised words held 1 to 2 seconds. A word that moves while being read is the single most common failure (section 16): arrive, hold still for the reading time, then leave.
- Hierarchy in motion: the eye follows what moves last and what stops first. The headline arrives first and stops dead; secondary text arrives after, smaller, with less travel. Give the hero word the only overshoot or the only scale change in the sequence.
- Unit of animation: by letter (dramatic, expensive, slow to read; 30 to 60 ms stagger between glyphs), by word (the default for VO-synced type; each word on its VO beat), by line (editorial, calm; one ease per line, 80 to 120 ms stagger between lines). Choose one unit per piece and keep it; mixing units is the explainer tell.
- Tracking animation: letter-spacing from wide to normal (plus 200 to 0 in AE tracking units, which are thousandths of an em) over 0.8 to 1.2 seconds with the luxury ease reads as type settling into place; from normal to wide reads as an exhale and suits endings. Never animate tracking on body text.
- Variable font animation: weight or width axis as the moving property (3.13), one axis at a time, slow, synced to a sound. It is the current (2026) kinetic identity language, visible across the Studio Dumbar and DIA work in section 15, and it reads cheap the moment two axes wobble at once.
- The Studio Dumbar method, as seen in their kinetic identities (Alzheimer Nederland, 2017; Amsterdam Sinfonietta) and the DEMO Festival they founded in 2019 on the screens of Amsterdam Centraal station: one typeface, one system of motion derived from the identity's own construction (the way the mark is built), performed at scale on large screens, with sound designed as part of the identity. Motion is the identity, so every parameter (speed, ease, direction) is documented in the brand guidelines like a colour.
- Sync to VO: place a marker on every stressed syllable of the VO (Layer, Add Marker while playing, with the asterisk key), and land words 1 to 2 frames before the marker; type that lands after the spoken word reads late, and the ear is a stricter judge than the eye.
- Cheap text animation tells: typewriter reveal with a cursor, per-letter drop with bounce, 3D extruded text spinning, "Fade and Slide Up" on every line, random-order character scramble, glow, text on a path, text following a wiggle, three typefaces in one piece, the AE text animation presets used as supplied. Each is a tell because it is the preset's rhythm, which every viewer has seen.

## 5. Lower thirds, titles, supers and subtitles

### Safe areas

Safe areas exist because screens overscan (television sets cut the edge of the picture, historically by up to 10 percent) and because platforms draw interface over the picture.

| Standard | Action safe | Title or graphics safe | Note |
|---|---|---|---|
| SMPTE ST 2046-1 (2009) | 93 percent of width and height, centred | 90 percent of width and height | The current SMPTE figures; the 80 and 90 percent values in SMPTE RP 218 are legacy |
| EBU R95 v1.1 (June 2017) | 3.5 percent margin top, bottom and sides (93 percent) | 5 percent margin (90 percent) | At 1920 by 1080: action safe 67 px and 38 lines; graphics safe 96 px and 54 lines. At 3840 by 2160 double these |
| AE guides | Composition Settings default 10 and 20 percent | Change to 7 percent action and 10 percent title in Preferences, Grids and Guides | AE's defaults are the legacy 4:3 values |

Platform safe zones (vertical 1080 by 1920) have no official pixel specification from Meta or TikTok as of October 2026; the figures below are from third-party overlay tools that measured the apps in 2026, and they shift with every app update, so the final check is a test upload on a real phone.

| Platform | Top | Bottom | Right | Left | Working rule |
|---|---|---|---|---|---|
| Instagram Reels | about 200 to 250 px (account name) | about 310 to 430 px (caption, audio, actions) | about 84 to 160 px (action rail) | about 60 px | Keep supers above 450 px from the bottom |
| TikTok | about 108 px | about 320 px (some measurements to 484) | about 120 px | about 60 px | Central area about 900 by 1492 px |
| YouTube Shorts | similar to Reels | about 350 px | about 120 px | about 60 px | Same box as below |
| Cross-platform box | | | | | A centred 900 by 1400 px box, roughly 90 px side margins and 260 px top and bottom, is the union that survives all three |

### Sizes by resolution

| Element | 1920 by 1080 | 3840 by 2160 | 1080 by 1920 vertical | Reason |
|---|---|---|---|---|
| Lower third name | 44 to 60 px cap height-based size | 88 to 120 px | 52 to 64 px | A 6 inch phone at arm's length needs larger text than a 55 inch screen at 3 m |
| Lower third role | 28 to 36 px | 56 to 72 px | 36 to 44 px | Secondary, still legible |
| Minimum any text | 24 px (about 2.2 percent of height) | 48 px | 36 px | Below this, compression and screen size destroy counters |
| Subtitles | 40 to 48 px | 80 to 96 px | 48 to 56 px, within the platform bottom margin | Netflix and BBC subtitle practice |
| Legal super | 24 to 28 px | 48 to 56 px | 32 to 36 px | Regulators in India (ASCI) and the UAE expect legible disclaimers; tiny legal reads as evasive |

### Timing

- Lower third: on for 4 to 6 seconds; 0.6 to 1 second in, hold, 0.4 to 0.6 seconds out. Names are read twice.
- Super (any short on-screen line): the house minimum is 2 seconds, then about 0.5 seconds per word above four words; derived from the 0.25 second per word prose rate doubled for divided attention over footage. UK clearance practice (Clearcast) applies a similar per-word hold for legal text; Indian and UAE broadcasters generally defer to the agency, so the house rule is the floor.
- End card: 5 seconds minimum. YouTube end screens occupy the last 5 to 20 seconds and need a video of at least 25 seconds; Instagram cuts the last frames under the replay UI, so hold the end card 1 second longer than feels necessary.
- Subtitles: Netflix's Timed Text Style Guide sets 42 characters per line, 2 lines, a reading speed of 20 characters per second for adults (17 for children), a minimum duration of 5/6 of a second (20 frames at 24 fps), a maximum of 7 seconds, and a 2 frame gap between subtitles. These are the sanest published numbers and the house uses them for all languages, with Devanagari and Arabic checked by a native reader because character counts do not map across scripts.

### Legibility over footage

- Backing plates: a solid or 80 to 90 percent opaque bar in the brand's ink colour behind the type; the responsive version is the sourceRectAtTime rectangle (3.8). Plates read cleaner than any shadow.
- Shadows with restraint: a 1 to 2 px, 40 to 60 percent black drop shadow with no offset survives bright footage without looking like a shadow; a visible offset shadow is a 2008 tell.
- Blur boxes: a region of the footage blurred (Gaussian, 20 to 40 px) and darkened (10 to 20 percent) under the text, the Apple-era frosted plate; design-taste lists glass as peaking in 2026, so use it on video only where the brand already uses it in UI.
- Contrast: WCAG 2.2's 4.5:1 contrast ratio for body text is the floor for subtitles and supers over footage, measured on the darkest and brightest frame behind the text.

### Broadcast standards

Broadcast deliverables in India and the UAE follow the European lineage: 25 fps, 1080i50 or 1080p25, Rec. 709, loudness to EBU R128 (section 14), graphics inside EBU R95 graphics safe, and legal supers for financial and real estate products as the broadcaster's compliance team specifies. Ask every broadcaster for its delivery specification document before the design stage; they differ on interlacing, loudness and slate requirements.

## 6. Logo animation

### Anatomy

- Reveal (0.8 to 1.5 seconds): the mark is built from its own construction. A wordmark draws from its strokes (Trim Paths), a geometric mark assembles from its grid, a monogram unfolds from its counters. Particles, light sweeps and lens flares as the reveal are the cheap tell because they could reveal any logo.
- Hold (1 to 2 seconds): the mark at rest, exactly as the static identity. The hold is the frame the client will screenshot; it must match the brand guidelines to the pixel.
- Idle: an optional breathing loop for screens that stay on (events, hotel lobby screens, app splash): 1 to 2 percent scale or a 4 to 8 second light drift, imperceptible when watched, noticed when it stops.
- Transition: how the mark becomes the next scene or the end card; typically the mark holds and the background changes.
- Outro: the exit, which should be faster than the entry (0.3 to 0.6 seconds) because leaving slowly reads as reluctance.

Total 2 to 5 seconds; broadcast stings sit at 3 to 5, app splash at 1.5 to 2.5, event loops at 8 to 15 seconds for a loop with no visible join.

### Sound sync

The lock frame (the frame the mark is complete and still) gets the sound hit; everything else in the sound design leads to that frame. If the brand has a sonic logo (an audio mark, usually 1.5 to 3 seconds), the visual reveal is timed to it and never the other way. Delivery includes a silent version and a version with the sonic logo baked in.

### Building from the identity grid

Import the master logo from Illustrator via Overlord or Create Shapes from Vector Layer; keep the construction geometry (grid, circles, baselines) on a hidden guide layer; animate strokes and shapes along the construction order a designer would draw them; and animate at the same ease across all parts with 2 to 4 frame offsets. The result is specific to the mark, which is the whole point (design-taste, section 1, "Specificity").

### Deliverables

| Deliverable | Spec | Use |
|---|---|---|
| Sting | 3 to 5 s, 3840 by 2160 and 1920 by 1080, 25 fps (and 24 or 30 as needed), ProRes 422 HQ, with and without sound | Film endings, broadcast |
| Ident | 5 to 10 s | Channel, event screens |
| Loop | 8 to 15 s loop with no join, ProRes 422 HQ and H.264 | Event screens, lobby screens, website hero |
| Transparent | ProRes 4444 with straight alpha, plus HEVC with alpha and WebM VP9 alpha (section 13) | Editors, web overlays, apps |
| Lottie | Bodymovin export, under 100 KB, tested in the LottieFiles player | App splash, web |
| Stills | The lock frame as PNG and SVG | Everything else |

## 7. Explainers, infographic motion and character animation

### Data honesty in motion

- Bars grow in the same duration from a zero baseline so their final heights are the comparison; a taller bar that takes longer to grow implies a rate the data does not contain. The y axis of a bar chart starts at zero; a truncated axis in motion is doubly misleading because the growth animation exaggerates the difference.
- Lines draw left to right at constant speed (Trim Paths, linear interpolation, not eased), because an eased line draw implies acceleration in the data.
- Counters (a number counting up) use the same ease as the bar they describe and never overshoot; a counter that reads 103 then settles to 100 has lied for 6 frames.
- Pie charts rarely survive motion; a donut whose segments draw in sequence is readable up to five segments. Beyond that, bars.
- Every chart carries its source and date as a super for the full duration of the chart. The dataviz skill in this workspace holds the chart form rules; this file only adds the motion constraints.

### Chart and icon animation

- Charts: axis and gridlines first (0.3 seconds), then data (0.8 to 1.2 seconds), then labels (staggered 60 ms), then the highlight. Reverse the order on exit.
- Icons: two to four moves per icon, 0.4 to 0.8 seconds total, one consistent stroke weight (the identity's), one ease across the whole set, and a shared anchor logic (everything rotates from its visual centre). A 20-icon set drawn by three people with three eases is the most common explainer inconsistency.

### Character animation basics

- Rigging: Duik Angela (3.15) builds an auto-rig from a layered Illustrator or Photoshop character with IK (inverse kinematics, where moving the hand positions the elbow) and FK (forward kinematics, rotating each joint in sequence) switchable per limb; RubberHose 3 builds stylised bendy limbs in minutes; Limber is a lighter alternative. Rive (section 9) rigs with bones and constraints for interactive characters; Adobe Character Animator captures a performance from webcam and microphone for live or fast lip-synced work (as of October 2026 its development status could not be verified from Adobe's own pages; treat it as a maintenance product and avoid building new pipelines on it).
- Walk cycles: Richard Williams' "The Animator's Survival Kit" (2001) sets the contact, down, passing and up positions over 12 frames per step at 24 fps for a normal walk; 8 frames reads as a hurry, 16 as a stroll.
- Lip sync: mouth shapes mapped to phonemes (the Preston Blair set of about 10 shapes), with mouths changing 1 to 2 frames before the sound.

### When explainers look cheap, and the fixes

| Tell | Fix |
|---|---|
| Corporate Memphis figures with giant limbs (design-taste, section 3) | Real photography, type-led explanation, or a drawn style specific to the brand |
| Every element fades and slides up | One entrance logic per scene derived from the content (data grows, products turn, type lands) |
| Default bounce on everything | The luxury ease (3.3), bounce reserved for one playful moment or removed |
| Stock icon set in a different stroke weight from the type | Icons drawn on the identity's stroke weight and grid |
| VO describing what the picture shows | VO carries the argument; picture carries the evidence; never both saying the same thing |
| Scenes that change every 2 seconds | Fewer, longer scenes with internal movement; a luxury explainer holds 4 to 8 seconds per scene |
| Boiling lines (Wiggle Paths at default) | Wiggles per Second 0.5 to 1, or none |

