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

- Review on Frame.io (Adobe), on its V4 platform. Plans as of October 2026 (frame.io): Free with 2 members and 2 GB, Pro at US $15 per member per month with 2 TB, Team at US $25 with 3 TB and internal comments that clients never see, Enterprise on quotation. It gives frame-accurate comments anchored to a point on the frame, version stacks (every upload of the same cut stacked so reviewers compare v03 to v04), Collections (saved metadata views), transcription with speaker identification and captions on every plan, and Camera to Cloud for shoot days. Comments on a WhatsApp forward of an MP4 are unusable because nobody knows which frame the client means.
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

After Effects (AE) is the house 2D animation and compositing application. As of October 2026 the current release is 26.5 (9 September 2026, reported by CG Channel), whose headline is an experimental agentic AI Assistant in beta that drives the application from prompts. The 2026 cycle before it: 26.0 (January 2026) added a parametric mesh tool (spheres, cubes, cones), Substance 3D material (SBSAR) support and multiple shadow-casting Spot, Parallel and Environment lights in the Advanced 3D renderer; 26.3 (18 June 2026) added depth of field in Advanced 3D, a mask tracker Adobe describes as up to five times faster, a Curl Noise effect, SVG paste from Illustrator as editable shape layers, a copy-frame-to-clipboard command (16-bit PNG on macOS) and a variable-font filter in the font list. An earlier draft of this file recorded an AI subject isolator called Object Matte in release 26.2; it could not be confirmed from Adobe's own pages for this revision, so verify it in the installed build before promising it in a schedule. Single-app subscription is listed at US $34.49 per month or $263.88 per year; AE requires Windows 11 or macOS 14 or later.

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
  - Advanced 3D (since AE 24.0, 2023): image-based lighting from an HDRI (a high dynamic range panoramic image used as a light source), import of 3D models (GLB, GLTF, OBJ and further formats added through 2024 and 2025), extruded and bevelled text and shapes with physical materials, Substance 3D materials (SBSAR files) and a parametric mesh tool since 26.0 (January 2026), multiple shadow-casting lights since 26.0, and depth of field since 26.3 (June 2026) with Near and Far Blur controls and a focus distance that can link to a layer. Motion blur was unsupported in Advanced 3D at its launch and no release note verified for this file has added it, so renders needing it go through CC Force Motion Blur on a precomp or through the Pixel Motion Blur effect; check the renderer options in the installed build before planning a fast 3D move. Beta features listed with 26.3: Alt-drag layer duplication, Quick Set Anchor, an updated Effect Controls panel and colour labels for effects.
- Camera settings: Preset (the 35 mm film equivalents: 24, 28, 35, 50, 80, 135, 200 mm), Zoom (in pixels; it is the distance from camera to the plane where a layer is 1:1), Depth of Field on or off, Focus Distance, Aperture and Blur Level, Iris shape. A 50 mm preset is neutral; 35 mm and wider exaggerates parallax (the apparent shift of near against far objects, the whole point of 2.5D); 80 mm and longer flattens, which suits product and type.
- Lights: Point, Spot, Parallel, Ambient, plus Environment lights in Advanced 3D. Cast Shadows on the light and Accepts Shadows on the layer; shadow darkness around 40 to 60 percent and a soft Shadow Diffusion read like real light. One key light with an ambient fill is enough for 2.5D; three lights are a 3D habit (8.2).
- Null-driven camera rig (3.4) and a 3D layer stack separated by 100 to 400 px in z at 50 mm give the parallax push in that is the single house camera move; one per film.

### 3.11 Motion blur, time remapping and frame blending

- Motion blur (the layer switch and the comp switch) is computed from the layer's transform between frames. Composition Settings, Advanced: Shutter Angle 180 degrees (the cinema default; blur across half the frame interval), Shutter Phase minus 90 (centres the blur on the frame), Samples Per Frame 16 and Adaptive Sample Limit 128 as defaults. Raise the shutter angle to 270 to 360 for a dreamier, smeared feel; lower to 90 for a crisp, staccato one. Type without motion blur during a fast move strobes; type with motion blur during a slow move smears and becomes unreadable. The house rule: blur on, moves slow enough that blur is barely visible.
- Time remapping (Layer, Time, Enable Time Remapping) makes a layer's time a keyframable property; speed ramps, freezes and reverses live here. Frame blending fills the gaps when a clip is slowed: Frame Mix (cross-dissolves adjacent frames, cheap, ghosts) and Pixel Motion (optical flow, estimates motion vectors, slow, artefacts on crossing edges). For slow motion beyond 50 percent, generate frames with Topaz Video (section 11) instead.
- Posterize Time (3.7) is the deliberate opposite: fewer frames, by choice.

### 3.12 Roto, Object Matte, content aware fill and puppet tools

- Roto Brush 3 (2023) isolates a subject from footage with a machine-learning model, propagating a brushed selection across frames. The Object Matte successor recorded in an earlier draft of this file could not be confirmed from Adobe's pages for this revision (section 3 intro). Roto Brush still needs the Refine Edge brush on hair and motion-blurred edges, and it fails on a subject that crosses a similarly coloured background. Plan a day per 10 seconds of difficult roto, or shoot on green. DaVinci Resolve 21's Magic Mask (section 11) is the house alternative when the shot is already in Resolve.
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
| SMPTE RP 218 (2007) | 93 percent of width and height, centred | 90 percent of width and height | The SMPTE figures for 16:9; the 90 and 80 percent values of the older RP 27.3 for 4:3 are legacy, and they are what AE's default guides still draw |
| EBU R95 v1.1 (June 2017) | 3.5 percent margin top, bottom and sides (93 percent) | 5 percent margin (90 percent) | At 1920 by 1080: action safe 67 px and 38 lines; graphics safe 96 px and 54 lines. At 3840 by 2160 double these |
| AE guides | Composition Settings default 10 and 20 percent | Change to 7 percent action and 10 percent title in Preferences, Grids and Guides | AE's defaults are the legacy 4:3 values |

Platform safe zones for vertical 1080 by 1920 come from the platforms' advertising guidance, the only place Meta and TikTok publish numbers; organic posts draw the same interface, and the overlay shifts with every app update, so the final check is a test upload on a real phone with captions on. Full per-platform specs, with source URLs and verification dates, are in 26-platform-and-format-specs-2026.md, section 2.

| Platform | Guidance (as of October 2026) | At 1080 by 1920 | Working rule |
|---|---|---|---|
| Instagram Reels and Stories (Meta ads guide) | Keep 14 percent of the top, 35 percent of the bottom and 6 percent of each side clear; 40 percent of the bottom when the ad carries a disclaimer; the action rail stacks on the right over the bottom 40 percent | Top 269 px, bottom 672 px, sides 65 px; central area about 950 by 980 px | Supers and the logo inside x 65 to 1015 and y 270 to 1250; faces may extend lower on the left |
| TikTok (ads spec page) | Downloadable safe-zone files rather than fixed pixels, because the overlay depends on caption length | Working default: top about 290 px, bottom about 480 px, right column about 200 px | Same box as Meta, with the right 200 px kept clear of anything the viewer must read |
| YouTube Shorts | No published pixel figure | Third-party measurements put the bottom clear zone at about 350 px and the right rail at about 120 px | Same box as Meta |
| Union for one master | | | The Meta box (950 by 980 px, centred, starting 270 px from the top) survives all three; a 3:4 centre crop (1080 by 1440) is what the profile grids show, so keep the subject inside it too |

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

- Rigging: Duik Angela (3.15) builds an auto-rig from a layered Illustrator or Photoshop character with IK (inverse kinematics, where moving the hand positions the elbow) and FK (forward kinematics, rotating each joint in sequence) switchable per limb; RubberHose 3 builds stylised bendy limbs in minutes; Limber is a lighter alternative. Rive (section 9) rigs with bones and constraints for interactive characters; Adobe Character Animator captures a performance from webcam and microphone for live or fast lip-synced work (Adobe has announced no discontinuation as of October 2026, but users on Adobe's own forums report no feature update since 2024, and Adobe retired its sibling Animate from new downloads on 1 March 2026; treat Character Animator as a maintenance product and avoid building new pipelines on it).
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


## 8. 3D for designers as of October 2026

3D is where a motion budget doubles and where luxury work most often fails, because a render shows every shortcut: wrong scale, wrong light, wrong material. The section is the designer's map of the tools, the pipeline a render passes through, and the two product categories Mask360 renders most (jewellery and beauty, real estate).

### 8.1 The tools and what each is for

| Tool | Current release (October 2026) | What it is for | Limits and cost |
|---|---|---|---|
| Cinema 4D (Maxon) | 2027.0 (15 October 2026: a new object scattering system, liquid simulation updates). Earlier in the cycle: 2026.4 (30 September 2026) added an MCP server so an AI assistant can drive the app; 2026.3 a redesigned UV editor with UDIM support and Edge, Rivet and UV Projection distribution modes for the Cloner; 2026.2 made OpenPBR the default material and introduced Redshift Live, the real-time engine that replaced Redshift RT | The motion-design industry's host application. MoGraph (Cloner, Fracture, MoText, Effectors, Fields, dynamics) turns one object into a system of moving objects faster than any other tool, which is why most of the studios in section 15 run it | Subscription only; prices load per region on maxon.net, so quote from the live page. Weak on film-grade simulation; that is Houdini's job |
| Redshift (Maxon) | 2027.0 (18 October 2026: fur procedural, ACES 2 support, Redshift Live updates); 2026.9 (10 September 2026) and 2026.8 (24 July 2026, procedural scratches shader, high-altitude cloud layer) before it | Biased GPU path tracer, the default partner of Cinema 4D; fast, production-proven, photon-mapped caustics | NVIDIA first; AMD HIP RT support arrived as experimental in 2026.5 |
| OctaneRender (OTOY) | 2027.1 in alpha (24 September 2026, with SDF-to-mesh baking) | Unbiased spectral GPU renderer; the cleanest glass, gems and caustics through its PMC kernel; a large Cinema 4D user base | NVIDIA in practice; pricing on OTOY's subscription page |
| Arnold (Autodesk) | Via the C4DtoA plugin and in Maya and 3ds Max | Film-grade subsurface scattering, hair and volumes; CPU and GPU | Slower per frame; per-seat licence; the choice when a VFX house will continue the work |
| Blender (Blender Foundation) | 5.2.3 LTS (22 October 2026; 5.3 expected 10 November 2026). 5.0 (November 2025) brought ACES 1.3 and 2.0 colour management, HDR display through the Vulkan backend (Windows, Linux Wayland, Apple Silicon) and the renamed EEVEE engine (identifier BLENDER_EEVEE; the "Next" tag was dropped). 4.5 LTS (July 2025, supported into 2027) made the Vulkan backend an opt-in and multithreaded Cycles adaptive subdivision, reported about 10 to 15 times faster | Cycles (path tracer on CPU, CUDA, OptiX, HIP and Metal), EEVEE (real-time rasteriser with screen-space and ray-traced options), Geometry Nodes (node-based procedural geometry, with OBJ, STL, PLY, VDB and CSV import nodes since 4.5), Grease Pencil 3 (2D drawing and animation inside 3D space, rewritten in 4.3). Free under the GPL | No MoGraph; Geometry Nodes covers the same ground with a steeper curve, so fewer motion studios run it as primary. Scripts and add-ons broke on the 5.0 line |
| Houdini (SideFX) | Houdini 22.0 is current (SideFX's documentation lists 21 under older versions; third-party tools were updated to match 22 in early October 2026). Houdini 21 (after SIGGRAPH 2025) introduced Copernicus (a 2D and 3D image-processing context), the MPM solver (snow, sand, mud), Karma support for Hydra 2 and Gaussian splats, APEX and KineFX rigging and Vulkan as production-ready | Anything simulated, generated or procedural at scale: particles, fluids, destruction, crowds, terrain; Karma (CPU and XPU) as its renderer; the Solaris USD context | A specialist's tool. Houdini Indie is about US $269 per year for studios under US $100,000 revenue (verify on sidefx.com); the full FX licence is several thousand |
| Unreal Engine 5 (Epic) | 5.6 (June 2025) added a 120 Hz Lumen mode for high-frame-rate LED stages; 5.7 (November 2025, reported by secondary sources) Nanite Foliage and production-ready PCG; a 5.8 release is reported for 2026 but unverified here | Real-time rendering (Lumen global illumination, Nanite virtualised geometry), Motion Design mode (since 5.4, 2024: cloners, effectors, a broadcast graphics workflow), nDisplay for LED volumes, MetaHumans, Sequencer for linear film | Looks like a game unless lit and graded by a cinematographer. Epic charges non-game companies above US $1 million gross revenue a per-seat subscription (about US $1,850 per seat per year, introduced 2024; verify) |
| Spline | Browser tool; renders with WebGPU or WebGL; exports to React, SwiftUI and Jetpack Compose; an MCP server lets agents read and write scenes | Interactive 3D on a marketing page; a quick 3D hero for a pitch | Embeds carry a 1 to 3 MB runtime plus the scene (21-web-design-and-digital-craft.md, section 4), so export video or stills for anything that does not need interaction |
| Womp | Free browser modeller built on SDF and CSG ("Liquid 3D": shapes blend, merge and carve like clay); now oriented to 3D printing with print-readiness checks | A blobby concept in ten minutes; a printable keepsake for an event | Its glossy "super materials" produce exactly the 3D blob design-taste lists as dead; never a luxury render |
| Cavalry | Version 2.7 is the save format referenced on cavalry.studio; the site states the software is now brought to you by Canva and is free for individuals (Scene Group built it; its legacy licences convert to the free version) | Procedural 2D: Duplicator (a Repeater that can read data), spreadsheet-driven animation, Forge dynamics, Magic Easing, rigs, Lottie export, a real-time viewport | Mac and Windows only; smaller plugin ecosystem than AE; use it where the piece is a system of many instances |
| TouchDesigner (Derivative) | Node-based real-time environment; builds dated by year | Installations, event screens, interactive walls, generative visuals, projection mapping, camera and sensor input | Non-Commercial build free but capped at 1280 by 1280; Commercial from US $600, Educational from US $300, Pro from US $2,200 (multi-machine sync, frame-lock, Notch Block playback, tracking integrations) |
| Compositing and texturing | Nuke 18.0 open beta (27 October 2026, with a Griptape bridge for AI workflows); Fusion inside DaVinci Resolve 21 (USD SDK 25.11, Hydra 2.0); Substance 3D Painter 12.2 (Adobe); Plasticity 2026.2 (CAD-style surface modelling for products) | Nuke for deep multi-pass work; Fusion when the film is already in Resolve; Painter for PBR texturing; Plasticity for a bottle or a watch case with true curvature | AE handles multi-layer EXR natively (section 3.16); go to Nuke above about ten passes or for deep compositing |

### 8.2 The 3D pipeline

1. Modelling. Polygon modelling with subdivision surfaces (Catmull-Clark smoothing of a low-polygon cage) for organic forms; booleans for hard surfaces; NURBS or CAD surfaces (Plasticity, Rhino, a STEP file from the manufacturer) for products, because a perfume bottle's reflections reveal every polygon facet. Model at real-world scale in millimetres: subsurface radius, depth of field, light falloff (inverse square) and dynamics all depend on scale, and a ring built ten times too large renders with wrong skin, wrong bokeh and wrong weight.
2. UV unwrapping. UVs are the 2D coordinates that map a texture onto the surface; seams go where the eye never rests (inside a band, under a cap). UDIM (U-Dimension) tiles numbered 1001, 1002, and so on let a hero object carry several 4K or 8K maps. A 20 mm ring filling a 4K frame needs about 8K of texture across its visible surface to stay sharp.
3. Texturing. Substance 3D Painter bakes mesh maps (normal, ambient occlusion, curvature, thickness) and paints with smart materials that respond to them (dust in crevices, wear on edges); Substance 3D Designer for procedural materials; Quixel Megascans (now inside Epic's Fab marketplace) for scanned surfaces. Export the PBR set: base colour, roughness, metallic, normal, height, ambient occlusion; 16-bit for height and normal so smooth surfaces do not step.
4. Materials. PBR (physically based rendering) describes a surface with measurable properties so it responds correctly to any light: base colour, metallic (0 or 1; in-between values are only for blends), roughness, normal, with an index of refraction (IOR) for dielectrics (water 1.33, skin and plastics about 1.45, glass 1.5, sapphire 1.77, diamond 2.42). OpenPBR, the open surface shading model published by the Academy Software Foundation with Adobe and Autodesk, became the default material in Cinema 4D 2026.2 and Redshift 2026.5, and MaterialX carries materials between applications; USD (Universal Scene Description, from Pixar) carries scenes.
5. Lighting. Image-based lighting from an HDRI (Poly Haven publishes free 16K HDRIs under CC0): rotate it for key direction, lower its intensity, then add one area light as the key. The three-point scheme (key at about 45 degrees off axis and above, fill opposite at a quarter to a half of the key's intensity for a 2:1 to 4:1 ratio, rim behind to separate subject from ground) is a teaching scheme; luxury product lighting is usually one very large soft source and one black card (negative fill) that puts a dark edge into the reflection. Colour temperature 5,600 K for daylight, 3,200 K for tungsten, one choice per scene. In jewellery and glass the reflections are the product, so the shape of the lights matters more than their number: a long strip light produces the single clean highlight along a gold band.
6. Cameras. Match a real camera (full-frame 36 by 24 mm sensor): 50 mm neutral, 85 to 100 mm for product, 100 mm macro for jewellery, 24 to 35 mm for interiors. Aperture f/2.8 to f/5.6 for a beauty hero, f/11 to f/16 for a stone that must be sharp throughout; bokeh shape from the blade count (9 blades read round). Render depth of field in the engine rather than in post where edges and transparency matter, because a post blur from a Z-depth pass fails on hair and glass.
7. Render passes. AOVs (arbitrary output variables) split the image into components the compositor can grade separately: diffuse (direct and indirect), specular or reflection, refraction, subsurface, emission, ambient occlusion, Z-depth, normals, world position, motion vectors, object and material IDs, and cryptomatte (ID mattes keyed by object or material name, from Psyop, 2015). Write multi-layer OpenEXR at 16-bit half float, PIZ for lossless or DWAA for a smaller lossy file, in ACEScg linear light.
8. Compositing. In AE at 32 bpc with OCIO set to ACES (3.1): rebuild the beauty from passes (diffuse plus specular plus refraction plus subsurface plus emission equals beauty, in Add mode in linear), grade each pass, add caustics and glow from their own passes, apply grain last. Nuke for deep compositing or more than about ten passes; Fusion in Resolve 21 when the film is already there.
9. Denoising. Every path tracer ships an AI denoiser (NVIDIA OptiX, Intel Open Image Denoise, Altus in Redshift). A denoiser fed too few samples returns the smooth plastic look that reads "AI render": render to a noise threshold of about 0.01 or 128 to 256 samples minimum, denoise the beauty and the passes with the same settings, and use the temporal denoiser (or Neat Video or Resolve's temporal noise reduction) on animation, because single-frame denoising flickers.

### 8.3 Product visualisation: jewellery and beauty

- Gem geometry. A stone must be a real cut: a round brilliant has 57 facets (58 with a culet), with the crown and pavilion angles of the actual cut, because the fire comes from the geometry. Ray depth (refraction bounces) at 16 to 32, or the stone renders black at the centre. Light it with a studio HDRI that has large white shapes and black bands; a plain grey sky returns a dead stone, since scintillation is the alternation of light and dark reflections as the stone turns.
- Gem shaders. IOR: diamond 2.417, corundum (ruby, sapphire) about 1.76 to 1.77, emerald 1.57 to 1.59, quartz 1.54, glass 1.5. Dispersion (the splitting of white light into colour) is set by the Abbe number, where lower means more fire: diamond about 55, glass about 60 to 64. A perfect CGI stone reads fake; add roughness of about 0.02 and faint internal imperfections.
- Caustics. The focused light patterns a gem or a glass throws onto the table. Path tracers produce fireflies instead; Redshift's photon-mapped caustics and Octane's PMC kernel render them; Cycles filters most caustics away (Filter Glossy), so render caustics in Redshift or Octane as a separate pass and add them in post.
- Metals. Use measured complex IOR (the n and k values) through the renderer's metal presets (gold, silver, platinum, copper); gold with a plain yellow base colour reads as paint. Roughness 0.05 to 0.1 for polished, 0.3 with anisotropy 0.6 to 0.8 along the brushing direction for brushed. Rose gold is a copper alloy, 18 carat warmer than 22 carat in reflection. Metals reflect; give them large soft shapes to reflect.
- Subsurface scattering (SSS). Light enters a surface, scatters and exits elsewhere: skin, wax, milk, creams, pearls, jade. Use random-walk SSS with a radius in real units (skin about 1 to 3 mm, red channel longest); pearls combine SSS with a thin-film iridescent coat; a cream in a jar reads premium only with SSS and a slightly rough specular (0.2 to 0.3); liquids are glass with an absorption colour by Beer's law, never a tinted transparency.
- Macro camera and motion. 100 mm macro at f/11 to f/16; a 15-degree turntable move over 3 to 5 seconds with motion blur on; focus stacking from three to five renders when the whole piece must be sharp. A 4K jewellery frame with caustics at 256 to 512 samples takes about 3 to 10 minutes on a single RTX 4090-class GPU in Redshift (approximate; depth of glass dominates), so a 5 second shot at 24 fps is 120 frames and 6 to 20 GPU hours.
- Beauty. CGI skin on a face is a tell for luxury work; the house photographs faces and renders product. Packaging renders use the real dieline and the print-ready artwork as texture at the equivalent of 300 ppi, with varnish as a separate roughness map and foil as a metallic map, so the render matches the carton the client holds.

### 8.4 Architectural visualisation for real estate

- Tools. 3ds Max with Chaos Corona or V-Ray is the archviz standard in India and the Gulf; Cinema 4D with Redshift and Blender with Cycles produce the same result in a motion studio; Unreal (Lumen), Twinmotion and D5 Render for real-time walkthroughs where the client wants to change the sofa live.
- The clichés, which design-taste, references/worlds.md lists under the real estate trash list: golden hour on every frame, a lens flare, a saturated lawn, a cyan pool, a 14 mm interior that makes a 40 square metre flat look like a lobby, every light switched on at noon, the wet-road night exterior, the drone pull-back, the family on the lawn, chrome and marble on everything. Each is a shortcut to "expensive" that the audience has seen on every hoarding from Lower Parel to Business Bay.
- The fix is to render like an architectural photographer: 24 to 35 mm on full frame, camera at 1.1 to 1.5 m, verticals corrected with the renderer's lens shift, one time of day chosen for the space (soft overcast or late afternoon from one side; the Mumbai and Dubai midday sun is too hard for interiors), materials at real scale with roughness variation (a floor is never one roughness), staging that implies a person left a minute ago, a film grade (16-editing-colour-grading-and-delivery.md, section 8) and grain. Scale anchors: a door is 2.1 m, a worktop 0.9 m, a dining chair seat 0.45 m.
- Regulation. Label renders as an artist's impression. In India the Real Estate (Regulation and Development) Act 2016 requires that advertised project details match the RERA registration, and the ASCI Code treats a misleading depiction as actionable; in Dubai every real estate advertisement needs a permit from the Dubai Land Department's Trakheesi system and the permit number on the asset. A render that shows a sea view, a park or a beach that will not exist is a claim, not decoration; check the view against the site plan before rendering it.

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

- Local arithmetic. A workstation with one RTX 4090-class GPU renders about 150 to 400 frames overnight at 2 to 4 minutes a frame; a 30 second film at 24 fps is 720 frames, so a single machine needs two to five nights for one pass, and a client change restarts the clock. That is why 3D schedules in section 1 double the animation and render stages.
- Farm pricing (GarageFarm, October 2026): CPU at US $0.024, $0.036 and $0.072 per GHz-hour at low, medium and high priority; GPU at US $0.004, $0.006 and $0.012 per OB-hour (an OctaneBench-hour, OctaneBench being OTOY's GPU benchmark score); per-node ranges of about US $0.66 to $17.27 an hour for CPU nodes and $1.12 to $25.76 for GPU nodes; US $25 of trial credit; renderers supported include Redshift, Cycles, V-Ray, Corona and Arnold. Other farms (RebusFarm, Fox Renderfarm, Ranch Computing) price in the same way; compare on a test frame, since the quoted unit hides the node's real speed.
- Worked estimate. 720 frames at 3 minutes each on a GPU scoring about 1,200 on OctaneBench (an RTX 4090-class card, approximate): 36 GPU-hours, or about 43,000 OB-hours, which is about US $260 at medium priority. A fourth client round that re-renders half the film costs the same again, which is the number to quote when a round reopens the design gate.
- Where the time goes: refraction depth and caustics, volumetrics, motion blur with many samples, subsurface, 4K rather than 2K (four times the pixels). Render at 2K for anything delivered only to phones; render 4K for anything that will be cropped, reframed or shown on a screen.

## 9. Web motion and real-time

The craft rules for what moves on a page sit in 12-motion-principles-and-ui-motion.md (easing, duration, choreography) and the delivery discipline in 21-web-design-and-digital-craft.md (sections 4 and 5: media weight, performance budgets, Lottie and Rive). This section is the motion designer's technical layer: the libraries, the shaders and the hand-off formats.

### 9.1 GSAP

- GSAP (GreenSock Animation Platform) is the JavaScript animation library the house uses for anything beyond CSS. Webflow acquired GreenSock in October 2024 and on 30 April 2025 made GSAP 3.13 free for commercial use, including every formerly paid Club plugin (SplitText, MorphSVG, DrawSVG, ScrollSmoother, MotionPath, Inertia); the gsap-trial package is deprecated and the standard gsap package carries everything.
- The luxury ease: `ease: "expo.out"` is the web equivalent of the asymmetric curve in 3.3; for the exact AE curve, CustomEase takes the same cubic bezier string. Stagger 0.03 to 0.06 seconds for letters, 0.08 to 0.12 for lines (section 4).
- ScrollTrigger binds a timeline to scroll: `scrub: true` ties progress to the scrollbar exactly, `scrub: 0.5` to `1` smooths it over that many seconds (the smoothed value reads expensive, the exact value reads mechanical); `pin` holds a scene while the story plays; `gsap.matchMedia()` is where the prefers-reduced-motion variant lives, and it is mandatory, because an animated hero with no reduced-motion state fails WCAG 2.2's success criterion 2.3.3 (animation from interactions, level AAA) and the house rule in 12-motion-principles-and-ui-motion.md.
- Lenis (smooth scroll) plus GSAP plus ScrollTrigger weigh about 70 KB gzipped, about half of a marketing site's 150 KB JavaScript budget (21-web-design-and-digital-craft.md, section 5), so the rest of the page must be light.
- CSS scroll-driven animations (animation-timeline: scroll() and view()) do the simple cases without JavaScript in Chrome since 115 and Safari since 26; use them for reveals, GSAP for sequences.

### 9.2 three.js, React Three Fiber and WebGPU

- three.js is the standard WebGL and WebGPU scene-graph library, released monthly as rNNN; r186 is the current release (24 September 2026). Its WebGPURenderer falls back to WebGL2 automatically, and TSL (Three Shading Language, a node-based shader language that compiles to WGSL for WebGPU or GLSL for WebGL) is how new materials are written for it.
- React Three Fiber (Poimandres) renders three.js as React components, with drei (helpers: cameras, controls, loaders, Environment for HDRI lighting) and postprocessing. Use it when the site is already React; plain three.js otherwise.
- Assets: glTF 2.0 (.glb) with Draco or meshopt geometry compression and KTX2 (Basis Universal) textures; a product model under 2 MB, a hero scene under 5 MB total. Google's model-viewer web component shows a single glTF with orbit controls and AR (Scene Viewer on Android, Quick Look with a USDZ file on iOS) and is the right answer for one product.
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

- 60 fps gives 16.7 milliseconds per frame, shared by JavaScript, style, layout, paint and composite; animate only transform and opacity (compositor-only properties), never width, height, top or left (layout properties), and use `will-change` on at most a handful of elements.
- Core Web Vitals thresholds: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1; a hero video under 2.5 MB in H.264 and under 1.5 MB in VP9 or AV1 with a poster image as the LCP candidate (21-web-design-and-digital-craft.md, section 4).
- A 4K RGBA texture is 64 MB in GPU memory uncompressed; KTX2 compressed textures cut that by 4 to 8 times and stay compressed on the GPU.
- One considered motion per page (design-taste, section 5, "Motion"); everything else still.

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
| Hue cycling, rainbow gradients | The palette belongs to the algorithm, not the brand | Two colours plus one accent from the identity (04-colour.md); let value and texture carry the variation |
| Particle trails, Perlin flow fields as decoration | They are the default output of the default tutorial; every viewer has seen them | Derive the rule from the identity's own construction (the grid, the mark's geometry, the type's proportions) |
| Infinite variation with no edition | Nothing is chosen, so nothing is designed | Seed the randomness, generate 200, choose 5, number them; Tyler Hobbs' Fidenza (2021) is 999 chosen outputs of one algorithm |
| Smooth everything | Interpolated noise with no hard edges reads as a lava lamp | Thresholds, steps, hard cuts, dithering, print-like marks |
| Noise-driven when it claims to be data-driven | The viewer senses the data is fake | Real data from the client (occupancy, footfall, the day's temperature in Jaipur), with the source as a super (section 7) |

The print test: render one frame and lay it out as a poster. If it fails as a print, it fails as a loop. Vera Molnár, Georg Nees and Frieder Nake made plotter drawings in the 1960s with less computing power than a watch; Sol LeWitt's wall drawings (from 1968) are instructions executed by others; Studio Dumbar's DEMO festival (section 15) shows what the discipline looks like on 5,000 screens. The rule each demonstrates: one rule, executed with restraint, chosen by a person.

## 11. AI in motion as of October 2026

The landscape, the prompting method and the legal position are in 22-ai-era-craft-and-generative-tools.md (sections 2, 3 and 5); the Higgsfield prompt system is in the higgsfield-prompting skill (three layers: image, identity, motion, kept separate because lighting instructions in the motion layer cause flicker). This section is the production use: which model for which job, what AI rotoscoping and interpolation can do, and the hybrid pipeline the house runs.

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
| Adobe Firefly Video Model | Public beta from 12 February 2025; powers Generative Extend in Premiere Pro, which lengthens a clip by about 2 seconds of video (and about 10 seconds of audio) to cover a cut, with 4K and vertical support reported at general availability in spring 2025 (verify against Adobe's current page) | Fixing a shot that ends 10 frames early; never for new content |

### 11.2 Image to video, motion control and camera control

- Image to video is the luxury default, because the still is art-directed (lens, light, grade) before any model moves it; text to video hands composition to the model. Build the still with the methods in 22-ai-era-craft-and-generative-tools.md, section 3, at the final aspect ratio, then prompt motion only: "slow dolly in, fabric moves in a light breeze" (the higgsfield-prompting rule that short motion prompts beat paragraphs).
- Motion control transfers a reference performance (a video of a person turning, a hand placing a ring) onto the generated subject: Kling's motion control, Higgsfield's Genjutsu, Runway's Act-Two. It is the only reliable way to get a specific gesture.
- Camera control: Higgsfield's presets (Dolly In, Crane Up, Arc, 360 Orbit, Through Object In) or prompt verbs (dolly, pan, tilt, crane, orbit, rack focus); one move per clip, slow, because every model drifts on a second move. The luxury camera is the same as in 3.10: one push, one arc, static otherwise.
- Consistency techniques: lock the seed; use reference images (Veo 3.1 and Gemini Omni Flash take up to 3, Kling Elements up to 4, Runway References for a character or object); start-and-end frames for a transition the model must hit; a character sheet (front, three-quarter, profile) generated first; the same LUT, grain and lens vignette applied to every clip in post so grading unifies what the model varied; generate at 24 fps or conform to it; denoise, then re-grain, so clips from different models share one texture; render the hero element by hand (11.4) so the viewer's eye has an anchor that never drifts.

### 11.3 AI rotoscoping, cleanup, upscaling and interpolation

- DaVinci Resolve 21 (Blackmagic Design; Studio at US $295, listed at US $236 in an October 2026 promotion) carries Magic Mask, redesigned as v2 in Resolve 20 (May 2025) with one-click selection and a paint brush for refinement, and Magic Mask Render in Place in 21, which caches a tracked mask as a matte node; Depth Map v2 produces a Z-depth from a plate for relighting and defocus. Runway's green-screen tool and AE's Roto Brush 3 (3.12) cover the same ground; Resolve is the house default because the mask stays with the grade.
- Cleanup: Content-Aware Fill in AE (3.12) for rigs and small objects; Runway Aleph for larger removals and relighting; Photoshop's Generative Fill on a clean plate that is then tracked in.
- Upscaling and frame interpolation: Topaz Video (subscription only since the perpetual licence was retired in October 2025; Personal US $299 a year, Pro US $699 a year) with Proteus, Iris, Nyx, Rhea and Rhea XL for upscaling and restoration, Starlight Precise and Starlight Mini (diffusion-based) for heavy restoration, Apollo, Chronos and Aion for frame interpolation (slow motion and frame-rate conversion), plus SDR-to-HDR and stabilisation. Rules: interpolate at most 2 to 4 times (a 24 fps clip to 48 or 96) before artefacts appear on crossing edges; never upscale generated video more than 2 times, because the model's own softness becomes plastic; upscale real footage before grading, generated footage after grain removal and before re-graining.
- AI inside AE: the 26.5 AI Assistant beta (section 3); treat its expressions as drafts to read, since an expression you cannot read is one you cannot debug at 2 a.m. before delivery.

### 11.4 The hybrid pipeline

1. Previs with AI: an animatic made of generated stills and draft clips (Luma's 360p draft, Veo in Flow) replaces hand-drawn boards for client sign-off at the animatic gate, at the real duration and ratio. Say so on the slate: previs, not final.
2. Plates and environments: generated or AI-extended backgrounds (Aleph set extension, Veo scene extension), always behind a real or hand-animated foreground.
3. Hero by hand: the product, the type, the logo and the transitions are animated in AE or rendered in 3D (section 8), because the hero must be exact to the identity and must repeat to the frame across versions, which no generative model does yet.
4. Unify in post: one grade, one grain, one lens treatment, one loudness (section 14), in Resolve.
5. Disclose: the house labels generated footage in the credits and the client's usage rights are written into the SOW; 22-ai-era-craft-and-generative-tools.md, section 5 has the position, and 24-business-of-creative-and-agency-operations.md the contract wording.

What the models still cannot do in October 2026: hold a logo pixel-exact, keep a hand's finger count under motion, render legible Devanagari or Arabic type, repeat a shot deterministically for a language version, or produce an alpha channel. Each of these is a reason the hybrid pipeline keeps the hero in AE.
