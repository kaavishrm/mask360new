# Visual perception, cognition and the psychology of design

The science under every rule of hierarchy, legibility, colour, motion and persuasion in this corpus, with the numbers and the named studies, as of October 2026.

Contested findings give the positions, their proponents and the house position; effect sizes are reported as Cohen's d (the difference between two group means in standard deviation units), and an effect of d = 0.1 is too small to justify a design decision.

## Contents

1. [The eye and early vision](#1-the-eye-and-early-vision)
2. [Preattentive processing, saliency and visual search](#2-preattentive-processing-saliency-and-visual-search)
3. [Gestalt principles](#3-gestalt-principles)
4. [Eye movements and reading](#4-eye-movements-and-reading)
5. [Scanning patterns on screens](#5-scanning-patterns-on-screens)
6. [Attention and memory](#6-attention-and-memory)
7. [Cognitive load theory](#7-cognitive-load-theory)
8. [The laws of UX with the maths](#8-the-laws-of-ux-with-the-maths)
9. [Affordance, action and mental models](#9-affordance-action-and-mental-models)
10. [Emotion and aesthetics](#10-emotion-and-aesthetics)
11. [Why restraint reads as expensive](#11-why-restraint-reads-as-expensive)
12. [Judgement, heuristics and biases](#12-judgement-heuristics-and-biases)
13. [Persuasion, ethics and deceptive patterns](#13-persuasion-ethics-and-deceptive-patterns)
14. [Colour perception](#14-colour-perception)
15. [Motion perception](#15-motion-perception)
16. [Sound and multisensory perception](#16-sound-and-multisensory-perception)
17. [Type perception](#17-type-perception)
18. [Attention economics in feeds](#18-attention-economics-in-feeds)
19. [The numbers a designer should know](#19-the-numbers-a-designer-should-know)

Then [Terms introduced](#terms-introduced) and [Sources and further reading](#sources-and-further-reading).

## 1. The eye and early vision

### 1.1 The optics and the retina

- The retina holds about 6 million cones (colour, daylight, detail) and about 120 million rods (low light, no hue). Their signals converge onto about 1 million retinal ganglion cell axons in the optic nerve, a compression of roughly 125 to 1, so the eye sends the brain an edited summary of the image. Everything downstream (edges, contrast, motion) is computed from that summary, which is why perception is relative: the system codes differences and ratios.
- The fovea is a pit about 1.5mm across covering roughly 5 degrees of visual field; its centre, the foveola, is rod-free, holds the densest cone packing and covers about 1 to 2 degrees. A thumbnail at arm's length subtends about 1.5 to 2 degrees, a fist about 10 degrees. Only the thumbnail-sized region is seen sharply at any instant.
- The blind spot, where the optic nerve leaves the eye, sits about 15 degrees to the temporal side of fixation and is filled in by the brain. Filling-in, the completion of a missing region from its surround, is the first example of a rule that runs through this file: the brain completes what it expects, which is why Gestalt closure (section 3) and change blindness (section 6) exist.
- S cones (blue sensitive) are only about 5 to 10 percent of all cones and are absent from the central foveola. Small blue detail on black is therefore hard to resolve and fine blue text is the least legible colour of text. The design rule: use blue for fields and large shapes, and keep hairline type out of blue.

### 1.2 Foveal and peripheral vision

| Region | Approximate extent | Strength | Weakness | Design consequence |
|---|---|---|---|---|
| Foveal | central 1 to 2 degrees | Full acuity, full colour, reading | Tiny: a word or two of body text at desktop distance | Text is read one fixation at a time; nothing is read "at a glance" beyond a word or two |
| Parafoveal | to about 5 degrees | Word shape and length, letter identity near fixation | Acuity already falling | Supplies the preview that sets the next saccade (section 4) |
| Peripheral | beyond 5 degrees to about 100 degrees each side | Motion, flicker, onsets, large shapes, layout gist | Acuity at 10 degrees out is around 20/100; colour and fine detail weak; crowding | Motion in the periphery hijacks attention; a carousel or looping video beside text is read by the periphery as a threat |

Ambient and focal vision: the periphery tells the brain where things are and how the scene is laid out (the gist of a page, its overall layout and meaning, is extracted in roughly 100ms from low spatial frequencies), and the fovea tells it what things are. A layout whose large shapes are wrong cannot be rescued by its details, because the periphery has already decided where to look.

Ruth Rosenholtz ("Capabilities and limitations of peripheral vision", Annual Review of Vision Science, 2016) argues that the periphery encodes summary statistics of local texture, a compressed description in which the exact positions of small parts are lost, and that this one mechanism explains crowding (section 4.3), gist and the difficulty of search. The test of a layout follows: its structure must survive when it is seen as texture, which is what the blur test of section 3.12 checks.

### 1.3 Acuity and the visual angle

Visual angle is the angle an object subtends at the eye, the only size measure that works across a phone, a deck on a 4m screen and a billboard on Sheikh Zayed Road. For small angles: size = distance x angle in radians, or exactly size = 2 x distance x tan(angle / 2). One degree is 0.01745 radians, so an object one degree tall is 1.75cm tall at 1m.

- Normal 20/20 (6/6) acuity resolves detail of 1 minute of arc (1/60 of a degree). A Snellen letter at the 20/20 line is 5 minutes of arc tall. That is the threshold of identification, far below comfortable reading.
- The CSS reference pixel is defined as the visual angle of one pixel on a 96 dpi device at about 28 inches (71cm), about 0.0213 degrees. This is why a 16px font is "the same size" on a phone held at 30cm and a monitor at 60cm, and why CSS sizes are perceptual units at heart (see 21-web-design-and-digital-craft.md, section 2).
- Typical viewing distances: phones about 32 to 36cm (Bababekova and colleagues, Optometry and Vision Science, 2011, measured means of 36.2cm for text messages and 32.2cm for web pages); laptops 50 to 60cm; desktop monitors 60 to 75cm; television 2 to 3m; a cinema at a distance of 1.5 to 3 screen heights.
- Section 17.8 and section 19 turn these into type sizes for each surface.

### 1.4 Contrast sensitivity and lateral inhibition

- The eye responds to contrast and discards most information about absolute light level early. Retinal ganglion cells have centre-surround receptive fields: a cell fires to a light centre against a dark ring, so each cell's response is suppressed by light falling on its neighbours (lateral inhibition), which enhances edges. Mach bands (Ernst Mach, 1865: illusory light and dark stripes at the edge of a gradient step) and the Hermann grid (dark spots at grid intersections) are the visible side effects. Banding in a gradient is amplified by this same edge enhancement (see 04-colour.md, section 3).
- The contrast sensitivity function (CSF) peaks at about 2 to 5 cycles per degree (pairs of light and dark bars per degree of visual angle, the unit of spatial frequency) and falls to zero near 50 to 60 cycles per degree. Middle spatial frequencies (the stroke rhythm of body text at reading distance) are where the eye is most sensitive; very fine texture is invisible and very coarse ramps are hard to see.
- The colour-opponent channels resolve far less fine detail than the luminance channel (Kathy Mullen, Journal of Physiology, 1985). Two consequences: chroma subsampling (4:2:0 video, which stores colour at a quarter of the luminance resolution) is invisible on most footage, and text that differs from its ground only in hue (red on green at equal lightness) is illegible however "high contrast" the colours look.
- The best observers detect a luminance difference of about 1 percent on a large uniform field (the Weber fraction for luminance across most of the daylight range). That threshold is why an 8-bit gradient across a large dark area bands and why muted palettes need dithering or 10-bit delivery (04-colour.md, section 3).

### 1.5 Light adaptation and pupils

- The visual system adapts over roughly 10 orders of magnitude of light, from starlight to noon sun, by shifting its operating point. Light adaptation takes seconds; full dark adaptation (the recovery of sensitivity in low light) takes 20 to 30 minutes, which is why a white phone screen in a dim restaurant or a dark cinema hurts and why dark mode exists as an ambient-light option.
- A smaller pupil gives greater depth of field and fewer optical aberrations. Positive polarity (dark text on a light ground) constricts the pupil, and that is one physiological reason the reading research favours it in daylight (section 17.7).

### 1.6 The ageing eye

The buyers of high jewellery, real estate and private banking are mostly 40 to 70, and their eyes differ from a young designer's in four measured ways (colour rules in 04-colour.md, section 13.5; wider practice in 11-accessibility-and-inclusive-design.md, section 15.3):

- Presbyopia, the age-related loss of near focus: the lens stiffens and the amplitude of accommodation (the eye's range of focusing power in dioptres, the reciprocal of the focal distance in metres) falls from about 10 to 14 dioptres in childhood to about 1 dioptre by 60 (Alexander Duane's curves, 1922). Reading at 40cm needs 2.5 dioptres, so near focus fails from the mid-forties, and the phone is held farther away or read through varifocals, which shrinks the visual angle of every glyph (section 1.3).
- Less light: the pupil narrows with age (senile miosis) and the lens yellows, so a 60-year-old's retina receives about a third of the light a 20-year-old's does (Robert Weale, The Senescence of Human Vision, 1992).
- Lower contrast sensitivity: Cynthia Owsley, Robert Sekuler and Dennis Siemsen ("Contrast sensitivity throughout adulthood", Vision Research, 1983) found sensitivity at middle and high spatial frequencies declining from middle age, with low frequencies spared, so fine strokes go first.
- Blue loss and glare: the yellowed lens absorbs short wavelengths, so blues and violets merge with dark neutrals, and lens opacities scatter light, so glare from a bright screen or a backlit sign rises.

Design consequence: hairline weights, light grey text on white and blue-on-navy states fail the luxury buyer first. House floor for audiences over 40: body at 16 to 18px or larger, contrast of at least 4.5:1 and APCA (Accessible Perceptual Contrast Algorithm) Lc 75 or better (04-colour.md, section 6.2), no hairline weights below about 18px, and a check under Chrome DevTools' reduced-contrast and blurred-vision emulation before sign-off.

## 2. Preattentive processing, saliency and visual search

### 2.1 What is preattentive

Preattentive processing is the parallel analysis of simple visual features across the whole field before attention is directed, completed in under about 200 to 250ms, so that a target differing in one feature "pops out" regardless of how many distractors surround it. Anne Treisman's feature integration theory (Treisman and Gelade, Cognitive Psychology, 1980) proposed that single features are registered in parallel maps and that binding features together (a red circle among red squares and blue circles) needs serial attention. Jeremy Wolfe's guided search model (1989, revised to Guided Search 6.0 in 2021) replaced the strict two-stage split: feature maps guide attention towards likely targets, and search is a continuum from efficient to inefficient.

| Preattentive attribute | Pops out when | Strength and caveats | Design use |
|---|---|---|---|
| Colour (hue) | One hue among others, large enough hue difference | Strong; weakens if distractors are heterogeneous in hue; fails under colour vision deficiency (CVD) for red and green | The one accent (design-taste, SKILL.md section 2, colour discipline): one saturated element is found first because it is the only one |
| Lightness and luminance contrast | One element far lighter or darker | Strong; survives CVD and greyscale | Hierarchy that survives the greyscale test |
| Size | One element much larger | Strong for large ratios; small size differences need focused comparison | Scale contrast as the primary hierarchy tool |
| Orientation | One tilted element among vertical ones | Strong when the target differs by tens of degrees from uniform distractors; weak among mixed orientations | An angled element in an orthogonal grid; rarely used in UI |
| Motion and flicker | Any moving or onsetting element | The strongest capture of all, especially in the periphery | Reserve motion for the one thing that must be seen; everything else still (12-motion-principles-and-ui-motion.md, section 1.4) |
| Spatial position and grouping | One element out of alignment | Moderate | A deliberate break in a grid reads as emphasis; an accidental one reads as an error |
| Shape (curvature, line ends, closure) | A curved element among straight ones | Moderate and asymmetric: a curved target among straight distractors pops out better than the reverse | Icons must differ in silhouette to be found; a set of same-weight outline icons in circles is unsearchable |
| Enclosure | One enclosed element | Moderate | A bordered card, a pill, a badge: effective once, noise when everything is enclosed |
| Depth cues (shading, stereo) | Lit from above among lit from below | Moderate; light-from-above is assumed | Shadows signal height above the surface; inconsistent light direction reads as wrong |

### 2.2 Search efficiency, in numbers

Visual search time is measured as the slope of reaction time against the number of items on screen. Efficient (feature) search runs at under about 10ms per item, effectively flat; inefficient (conjunction or spatial configuration) search runs at about 20 to 30ms per item when the target is present and roughly double when it is absent, because the viewer must check everything before giving up (Wolfe's reviews). A product grid of 48 near-identical cards searched by reading each title costs seconds; a grid where the target differs by one preattentive feature costs a fixed few hundred milliseconds.

Design rules that follow:
- One feature per job. If colour marks the sale price, it cannot also mark the selected size.
- Pop-out decays as feature differences are shared. Three accent colours on one screen produce no pop-out at all, which is the perceptual reason behind design-taste's colour cap.
- Absence is slow to detect. "Is there a vegetarian option on this menu?" takes longer than "find the vegetarian option", so mark the presence of attributes with consistent icons and position, and let filters remove the absent ones.

Three further findings set layout and proofing rules:
- Contextual cueing: Marvin Chun and Yuhong Jiang (Cognitive Psychology, 1998) found that search through repeated spatial configurations speeds up with repetition, without observers recognising the repeats. A site that keeps one page structure trains the search; redesigning every section resets it.
- The low-prevalence effect: Jeremy Wolfe, Todd Horowitz and Naomi Kenner ("Rare items often missed in visual searches", Nature, 2005) found miss rates of about 30 percent when targets appeared in 1 percent of displays against about 7 percent at 50 percent prevalence. A wrong price or date in a print run is missed because it is rare, so proofing uses a checklist of fields and a second reader.
- Visual working memory holds about 3 to 4 objects (Steven Luck and Edward Vogel, Nature, 1997), so comparing variants across a carousel or across tabs fails beyond that; comparisons belong side by side (section 6.3).

### 2.3 Saliency and its limits

Saliency is the bottom-up conspicuity of a region computed from local contrast in colour, intensity and orientation across scales (Laurent Itti, Christof Koch and Ernst Niebur, IEEE Transactions on Pattern Analysis and Machine Intelligence, 1998). Attention-prediction tools (Attention Insight, Neurons' Predict and similar products) are saliency models trained on eye-tracking data. Use them for one question only: does the first fixation land where intended? They do not model goals. Alfred Yarbus (Eye Movements and Vision, 1967) showed one viewer's scan of Repin's painting "Unexpected Visitors" changing completely with the question asked; top-down task beats bottom-up saliency whenever the viewer has a goal. A booking page is goal-driven; a hoarding is saliency-driven. Design each for its regime.

Two attention captures that override everything:
- Faces. People fixate faces and eyes early and often, and shift attention to where another person looks, the gaze-cueing effect (Chris Friesen and Alan Kingstone, Psychonomic Bulletin and Review, 1998). A model looking at the product directs attention to it; a model looking at the camera holds attention on the face. The widely shared "baby looks at the headline" heat map (James Breeze, 2009) is a single unpublished study; the gaze-cueing literature underneath it is solid.
- Abrupt onsets and looming. A new object appearing captures attention (Steven Yantis and John Jonides, 1984), and an object growing as if approaching captures it more strongly than one receding (Steven Franconeri and Daniel Simons, 2003). This is why a scale-up entrance reads as more urgent than a fade, and why it must be spent on one element.

## 3. Gestalt principles

The Gestalt school (Max Wertheimer, Kurt Koffka and Wolfgang Köhler, from Wertheimer's 1912 paper on apparent motion and his 1923 paper on grouping) described how the visual system organises parts into wholes. Johan Wagemans and colleagues' two-part review "A century of Gestalt psychology in visual perception" (Psychological Bulletin, 2012) is the modern reference: the principles hold, they compete, and their relative strength is measurable. Composition and grid applications are in 05-layout-grids-and-composition.md.

### 3.1 Proximity

Elements close together are seen as a group. Michael Kubovy, Alex Holcombe and Johan Wagemans (Cognitive Psychology, 1998) measured grouping in dot lattices and found a "pure distance law": the probability of grouping along one direction falls exponentially with the ratio of its spacing to the competing spacing, independent of absolute scale. Small ratio changes near 1:1 flip the grouping, and a modest further increase makes it unambiguous.

Design consequence: the internal spacing of a group must be visibly smaller than the spacing between groups. The working ratio in the house is at least 1:2 (a label 8px from its field, fields 16 to 24px apart, sections 48 to 96px apart), because a 1:1.2 ratio leaves the eye guessing which label belongs to which field. Proximity is the cheapest grouping tool and the most luxurious: it uses space, the material design-taste calls money (SKILL.md, section 2).

### 3.2 Similarity

Elements sharing colour, size, shape, weight or texture are grouped. Colour similarity usually beats shape similarity. In interfaces, similarity is how a user learns that all underlined text is a link and all filled buttons are primary actions; a style used for two meanings breaks the learned group. Similarity competes with proximity: Michael Kubovy and Martin van den Berg ("The whole is equal to the sum of its parts", Psychological Review, 2008) found that the two cues combine additively in dot lattices, so the stronger cue wins, and a coloured element placed in the wrong group is read by its colour.

### 3.3 Closure and illusory contours

The visual system completes incomplete figures. The Kanizsa triangle (Gaetano Kanizsa, 1955), three notched discs that produce a bright triangle that is not drawn, shows the system inventing edges (an illusory contour: an edge seen where no luminance edge exists). Design consequences: a logo can drop large parts of its outline and remain recognisable (the WWF panda, IBM's striped letters, with the trust cost of incomplete marks in section 10.7); a card with no border closes on its content's alignment; a progress ring with a gap reads as a ring. The risk: closure also completes what you did not intend, such as two aligned edges in a layout forming an accidental shape.

### 3.4 Continuation (good continuation)

Elements aligned on a smooth line or curve are seen as belonging together, and the eye follows them. David Field, Anthony Hayes and Robert Hess (Vision Research, 1993) measured contour integration: a path of oriented elements is detected easily when successive elements differ in angle by up to about 30 degrees, and detection falls off steeply beyond that. The "association field" they proposed is the neural basis of reading a dotted line, a row of images in a carousel peeking off screen, or a typographic flush-left edge as one line. A flush-left rag is a strong continuation edge; centred body text has none, which is a perceptual reason it reads poorly beyond a few lines.

### 3.5 Common fate

Elements that move together, in the same direction at the same speed, are grouped, overriding proximity and similarity. Wertheimer listed it in 1923. In interfaces it is the strongest grouping of all while motion lasts: items that animate together are read as one object, which is why a staggered list must move in one direction and why a single misbehaving element in a shared transition reads as broken. Common fate extends to change in lightness: elements that brighten together are grouped too.

### 3.6 Common region

Elements inside the same bounded area are grouped (Stephen Palmer, Cognitive Psychology, 1992). Common region overrides proximity: two distant items in one card group more strongly than two near items in separate cards. The card is the interface's common region. The cost: every container adds a contour that competes for attention, so a page of cards inside cards inside sections becomes a maze of edges. The house rule is that common region is earned: use space and alignment first, a background tint second, a hairline third, a shadowed card last (see 06-ui-design-craft.md, section 12.2).

### 3.7 Uniform connectedness

Elements connected by uniform visual properties (a line, a shared fill) are perceived as one unit, and Palmer and Irvin Rock (Psychonomic Bulletin and Review, 1994) argued it is the most powerful grouping principle, acting before the others. Steppers joined by a line, a timeline with connected nodes, a tab connected to its panel by a shared fill: each is read as one object. A tab bar where the active tab is a different colour from its panel loses connectedness and the user cannot tell which panel belongs to which tab.

### 3.8 Figure and ground

Edgar Rubin's vase and faces figure (1915) shows that the visual system assigns each edge to one side, the figure, and the other side becomes shapeless ground. Factors that make a region figure: smaller area, convexity, symmetry, enclosure, and lower position in the field (Shaun Vecera, Edward Vogel and Geoffrey Woodman, Journal of Experimental Psychology: General, 2002). Design consequences: negative space becomes a shape when it is small, convex and enclosed (the FedEx arrow, Lindon Leader, 1994); a modal must be clearly figure (a scrim darkens the ground); text over an image needs the image to act as ground (a quiet region, a scrim, a gradient of 20 to 40 percent black) or the letters fight the image for figure status. Luxury layouts use large grounds so that one figure carries the page.

### 3.9 Symmetry

Symmetric regions are grouped and read as figure. Mirror symmetry about a vertical axis is detected fastest, then horizontal, then oblique (Johan Wagemans's reviews of symmetry detection), in exposures as brief as about 100ms. Symmetry reads as stable, formal and resolved, which is why it suits ceremony (wedding cards, hotel crests, the façade of a palace hotel in Jaipur) and why it reads static in a product interface. Asymmetry with a strong axis reads as designed motion. Section 10.6 gives the preference evidence.

### 3.10 Prägnanz

The law of Prägnanz (German "conciseness") states that the visual system settles on the simplest, most regular, most stable interpretation available. The Olympic rings are read as five overlapping circles, the simplest description of the figure. It explains why simple marks are remembered and drawn from memory, and why a logo that only resolves into the intended reading after a second look fails at the speed of a feed. The modern formal versions are the minimum principle (simplest description, related to information theory) and the likelihood principle (most probable cause in the world); Wagemans and colleagues treat the two as complementary.

### 3.11 Past experience and familiarity

Prior knowledge shapes grouping: the same glyph is read as B in A B C and as 13 in 12 13 14. Familiar configurations are grouped faster and override weak Gestalt cues. For multiscript work this matters directly: a reader of Devanagari groups by the shirorekha, the headline that joins letters in a word, and a reader of Arabic groups by joining forms; neither grouping is available to the Latin-trained eye, so a Latin designer judging Devanagari or Arabic spacing by eye alone will misjudge it (03-typography.md, section 15).

### 3.12 Ranking the principles

Where cues conflict, the empirical order is roughly: uniform connectedness and common region, then proximity, then similarity (colour, then size, then shape). Common fate overrides all of them while motion lasts. The diagnostic in a crit: blur the screen (a 6 to 10px Gaussian blur, or squint) and name the groups that remain. If the blurred groups are not the content groups, the spacing is wrong, whatever the borders say.

### 3.13 Composition: weight, balance and direction

Rudolf Arnheim (Art and Visual Perception, 1954, revised 1974; The Power of the Center, 1982) described visual weight, the pull an element exerts on the eye and on the balance of a frame: it rises with size, contrast, saturation, isolation and intrinsic interest (a face, a word) and, like a weight on a lever, with distance from the centre. The measured findings since:

| Finding | Evidence | Design use |
|---|---|---|
| Centre bias | Stephen Palmer, Jonathan Gardner and Thomas Wickens ("Aesthetic issues in spatial composition: effects of position and direction on framing single objects", Spatial Vision, 2008): a single object is preferred at or near the centre of the frame | A lone bottle, ring or plate sits on the centre axis unless the layout gives a reason to move it |
| Inward bias | Same study: an off-centre object facing into the frame is preferred to one facing out of it | Models, cars and profiles look into the layout, towards the copy |
| Representational fit | Jonathan Sammartino and Palmer (Journal of Experimental Psychology: Human Perception and Performance, 2012): objects normally seen from above (a bowl, a ring tray) are preferred low in the frame, objects seen from below (a chandelier, a bird) high | Plated food and jewellery trays sit low; lighting, skylines and towers sit high |
| Rule of thirds | Seyed Ali Amirshahi, Gregor Hayn-Leichsenring, Joachim Denzler and Christoph Redies ("Evaluating the rule of thirds in photographs and paintings", Art and Perception, 2014): aesthetic ratings correlated weakly with judged thirds placement and not at all with computed placement, and highly rated photographs and paintings followed the rule no more than others | A photographer's starting heuristic; never the reason a crop works |
| Reading direction | Sylvie Chokron and Maria De Agostini ("Reading habits influence aesthetic preference", Cognitive Brain Research, 2000): French readers preferred pictures with left-to-right directionality, Hebrew readers the reverse; Anne Maass and Aurore Russo (Psychological Science, 2003) found the spatial agency bias (picturing the actor on the left, acting rightwards) reversed for Arabic readers | In Arabic-first Gulf work, mirror subject movement, timelines and gaze along with the text (05-layout-grids-and-composition.md, section 16) |
| Package weight | Xiaoyan Deng and Barbara Kahn ("Is your product on the right side?", Journal of Marketing Research, 2009): a product image placed low, to the right or bottom right on a pack is judged heavier | Image low for a rich promise (a dessert, a cognac); high and left for lightness (a fragrance, a serum) |

Applied balance, weight and direction are in 05-layout-grids-and-composition.md, sections 6.4, 6.5, 6.12 and 11.

## 4. Eye movements and reading

### 4.1 Saccades and fixations

- A saccade is a rapid ballistic eye movement between fixations. In reading, saccades last about 20 to 40ms and travel about 7 to 9 letter spaces; large saccades reach peak velocities of several hundred degrees per second. Vision is suppressed during the movement (saccadic suppression), so a reader takes in nothing while the eye is moving.
- A fixation is the pause, during which information is taken in. Keith Rayner's reviews (Psychological Bulletin, 1998; Quarterly Journal of Experimental Psychology, 2009) give typical means: about 225 to 250ms in silent reading, about 275 to 325ms in oral reading, about 180 to 275ms in visual search, and about 260 to 330ms in scene viewing.
- Saccade latency, the time to start a saccade to a new target, is about 150 to 250ms. Any element that must be seen during a transition needs to be present and still for at least one fixation plus one saccade latency, about 400 to 500ms, which is the perceptual floor under the kinetic type hold times in 13-motion-graphics-and-3d-production.md.
- Regressions, saccades back to earlier text, are about 10 to 15 percent of saccades in skilled reading, more in difficult text. A reader who regresses often is telling you the text, its spacing or its line length is wrong.
- Smooth pursuit, the eye tracking a moving object, keeps the object sharp up to about 30 degrees per second; beyond that the eye falls behind and makes catch-up saccades. Text that moves faster than that (a marquee, a fast kinetic title, a fast pan with a super) is unreadable while it moves.

### 4.2 The perceptual span

George McConkie and Keith Rayner's moving-window experiments (Perception and Psychophysics, 1975) measured how much text a reader uses per fixation: in English, about 3 to 4 characters to the left of fixation and about 14 to 15 characters to the right. Letters are identified only within about 7 to 8 characters to the right; beyond that the reader extracts word length and spaces to plan the next saccade. The span is asymmetric towards the direction of reading: it reverses for Hebrew (Alexander Pollatsek and colleagues, 1981) and for Arabic, and it shrinks for dense scripts (Chinese readers use about 1 character left and 3 right).

Design consequences:
- Word spaces are saccade targets. Tight word spacing, justified text with rivers, or letter-spaced body text removes the landmarks the eye uses to plan its next jump.
- Bilingual layouts set Arabic and English in opposite reading directions; each script's span runs in its own direction, so a mixed line (an English brand name in Arabic copy) forces a reversal mid-line and costs a regression. Keep embedded Latin short and isolate it with space (03-typography.md, section 15).

### 4.3 Crowding

Crowding is the impairment of recognising an object in the periphery when other objects are nearby. Herman Bouma (Nature, 1970) found that a letter is crowded when flanking letters are closer than about half its distance from fixation (Bouma's law: critical spacing is about 0.5 times eccentricity). Denis Pelli and Katharine Tillman's "uncrowded window" (Nature Neuroscience, 2008) argues that crowding, more than acuity, limits how much a reader can take in per fixation. Consequences: tightly tracked text in captions and ALL CAPS labels is crowded even when each letter is large enough; dense icon rows are crowded in peripheral vision; people with dyslexia and with amblyopia show stronger crowding, which is why extra letter spacing helps some of them (section 17.3).

### 4.4 Legibility and readability

- Legibility is how easily individual characters and words can be identified: a property of the typeface, size, weight, contrast and spacing, measured by identification thresholds, reading speed for short exposures, or distance at which a word is read.
- Readability is how easily a continuous text can be read and understood over time: a property of the typesetting (measure, leading, hierarchy) and of the writing (sentence length, vocabulary, structure). Readability formulas (Flesch Reading Ease, Flesch-Kincaid grade) measure only the writing.
- Miles Tinker (Legibility of Print, 1963) defined the field's methods and found most normal text types equally legible at normal sizes; differences appear at the extremes of size, weight and spacing. A creative director asks both questions separately: is each word identifiable at its size and distance (legibility), and will a reader stay with the passage (readability, see 10-ux-writing-and-content-design.md).

### 4.5 Reading speed

Marc Brysbaert's meta-analysis ("How many words do we read per minute?", Journal of Memory and Language, 2019) estimates adult silent reading in English at about 238 words per minute for non-fiction and about 260 for fiction, and oral reading at about 183 words per minute. Reading speed falls on screen when line length, size or contrast is poor, and falls further when the text moves or competes with footage, which is why on-screen text in video is timed at roughly half the prose rate (13-motion-graphics-and-3d-production.md). Claims of 600 or 1,000 words per minute from speed-reading apps (rapid serial visual presentation, one word at a time at fixation) come with a measured loss of comprehension (Rayner and colleagues' review "So much to read, so little time", Psychological Science in the Public Interest, 2016).

### 4.6 How people read on mobile

- Comprehension on phones matches desktop for linear reading. Nielsen Norman Group's study (Kate Moran, December 2016; 276 participants, articles of about 400 words at an 8th-grade level and about 990 words at a 12th-grade level) found mobile comprehension slightly higher, by about 3 percentage points, and found difficult articles read about 30ms per word slower on phones as readers slowed to keep comprehension. An earlier finding that mobile comprehension was much worse (reported by Jakob Nielsen in 2011 as "mobile content is twice as difficult", drawing on a 2011 study by R. I. Singh and colleagues of privacy policies on small screens) applies to dense, hard text on the small screens of that time.
- What remains harder on mobile: navigation, comparison and anything that requires holding information across screens, because the visible context is smaller and working memory (section 6.3) must hold what has scrolled away.
- Design consequences: lead with the point, keep paragraphs to two to four lines at phone width, set body at 16 to 18px with a measure of about 35 to 45 characters on a phone, and keep comparison content (room types, price tiers) in a structure that fits one screen or carries the key attribute with every item.

## 5. Scanning patterns on screens

### 5.1 The Nielsen Norman Group eye-tracking record

The F-shaped pattern was reported by Nielsen Norman Group in 2006 from eye tracking of over 200 users and updated by Kara Pernice in "F-shaped pattern of reading on the web: misunderstood, but still relevant (even on mobile)" (12 November 2017, reviewed August 2026). Pernice's "Text scanning patterns: eyetracking evidence" (25 August 2019) names four main patterns for text pages, ordered from least to most effective:

| Pattern | What the gaze does | Cause | Design response |
|---|---|---|---|
| F-pattern | Reads the first lines, then the left edge, with shorter horizontal sweeps down the page | A wall of unformatted text, a user trying to be efficient, low motivation, no cues to the relevant part | Remove its causes: front-load the first two paragraphs, informative headings, bold key phrases, bullets |
| Spotted | Fixates scattered words that stand out (links, bold, numbers) or match what the user is looking for | Hunting for a specific item (a price, a phone number, a date) | Make the hunted items visually findable: numerals in tabular figures, consistent position for prices and dates |
| Layer-cake | Fixates headings and subheadings, then reads the body under a relevant one | Meaningful headings | The target: write headings that carry the content (10-ux-writing-and-content-design.md) |
| Commitment | Reads nearly every word | High motivation, high trust | Earned by the content; cannot be designed in |

Two further patterns from the same research: marking (the eye stays fixed while the page scrolls, common on mobile) and bypassing (the reader skips repeated first words in a list, so items that all begin "Our" are skipped).

### 5.2 The limits of F and Z

- The F-pattern is a symptom of poorly structured text. Designing "for the F" (placing important things at the top left only) treats the symptom. The house designs for the layer-cake.
- The Z-pattern (top left, top right, diagonal to bottom left, bottom right) is design folklore drawn from the Gutenberg diagram (attributed to Edmund Arnold, newspaper design, mid 20th century). It has some support on sparse pages with few elements (a hero with a headline, an image and a call to action) and none on dense content. Nielsen Norman Group's study of zigzag layouts (Kim Flaherty, 26 November 2017; four pages, about 30 to 35 participants per variation) found that alternating image-text rows made decorative images harder to scan past and only worked as well as aligned layouts when the images carried information.
- Right-to-left languages mirror the F (Pernice, 2019). Arabic pages start at the top right; a bilingual site mirrors its layout, its icons with direction and its reading order (21-web-design-and-digital-craft.md).

### 5.3 Banner blindness

Banner blindness is the learned tendency to ignore anything that looks like an advertisement, whether it is one or not. First documented in usability testing in 1997 and named by Jan Panero Benway and David Lane (1998), it was replicated with eye tracking by Nielsen Norman Group in 2007 and revisited by Kara Pernice (22 April 2018). Findings that matter for design:

- Location: users skip the top banner, the right rail and the first results that look sponsored. In one 2018 example, a page with 148 fixations had 132 in the content area and one in the right rail.
- Appearance: a small rectangle, fancy formatting, a coloured background and text set inside an image all read as an ad. A brand's own promotion styled this way is ignored with the ads.
- Proximity: content next to an ad is ignored with it (Pernice's "hot potato" effect).
- Mobile: inline ads are harder to avoid because they fill the screen, and users scroll past big images and highlighted blocks they mistake for ads.

Design rules: an announcement bar in an accent colour across the top of a luxury site is the most ignored element on it. Put important content in the content style and the content flow. In campaign work, banner blindness is the reason a social ad that looks like an ad loses to one that looks like content from the feed (section 18).

### 5.4 Above the fold and scrolling

Therese Fessenden's update "Scrolling and attention" (Nielsen Norman Group, 15 April 2018; 120 participants, over 130,000 fixations on 1920 x 1080 screens) found about 57 percent of page-viewing time above the fold and about 74 percent in the first two screenfuls, down from about 80 percent above the fold in 2010. People scroll; they scroll less as they go. The fold is a gradient of attention, so the first screen must say what the page is and give a reason to continue, and every later screen must earn the next.

### 5.5 Gaze on images and video

Eye tracking of image-led pages and video shows strong central bias (viewers fixate the centre of a frame first, regardless of content), early fixation on faces and text, and attentional synchrony in edited video: viewers' gaze converges on the same point within a few hundred milliseconds of a cut (Tim Smith's work on continuity editing, including "The attentional theory of cinematic continuity", Projections, 2012). Editors exploit this: cutting on the subject's eyeline places the next shot's subject where the viewer is already looking. See 16-editing-colour-grading-and-delivery.md, section 1.

## 6. Attention and memory

### 6.1 Selective attention and its failures

Attention is the selection of a small part of the available information for further processing. Its capacity is tiny compared with the visual field, and its failures are the reason most design problems are invisible to their designers, who already know where to look.

- Selective attention: Colin Cherry's cocktail party studies (1953) showed that people follow one voice and register almost nothing of another, except salient items such as their own name. Interfaces compete for the same channel: a user attending to a form field does not see a toast notification at the screen edge.
- Inattentional blindness: failure to see an unexpected object in plain view while attending to something else. Daniel Simons and Christopher Chabris ("Gorillas in our midst", Perception, 1999) had viewers count basketball passes; about half failed to notice a person in a gorilla suit crossing the scene. Design consequence: a user in a task does not see anything unrelated to the task, however large. Error messages placed away from the field the user is looking at are missed.
- Change blindness: failure to notice a change between two views separated by a disruption (a blink, a saccade, a page reload, a cut). Ronald Rensink, Kevin O'Regan and James Clark (Psychological Science, 1997) used the flicker paradigm; Simons and Levin (Psychonomic Bulletin and Review, 1998) swapped the person asking for directions behind a passing door and about half of the people did not notice. Design consequence: a state change that happens during a page load, a scroll or a full-screen transition is not seen. Animate the change in place (12-motion-principles-and-ui-motion.md), or highlight it after it lands.
- Attentional blink: a second target arriving within about 200 to 500ms of a first is often missed (Raymond, Shapiro and Arnell, 1992). In a fast edit, two key messages a quarter of a second apart lose the second one.

### 6.2 Load theory

Nilli Lavie's perceptual load theory (1995 onwards) holds that when the primary task is perceptually demanding, irrelevant distractors are filtered out, and when it is easy, spare capacity spills over to distractors. A simple, calm page leaves capacity for a single distractor to capture; a dense page leaves none, so nothing else is noticed. Luxury pages are low load by design, so a single ill-judged element (a chat bubble, a cookie banner in the wrong colour) is seen with full force.

### 6.3 Working memory: Miller, then Cowan

- George Miller's "The magical number seven, plus or minus two" (Psychological Review, 1956) concerned the span of absolute judgement and immediate memory for items such as digits. It is routinely misapplied as a cap on navigation items, which are recognised on screen and need not be held in memory.
- Nelson Cowan ("The magical number 4 in short-term memory", Behavioral and Brain Sciences, 2001) showed that when rehearsal and chunking are prevented, capacity is about 4 chunks, plus or minus 1. The house uses Cowan's figure.
- Alan Baddeley and Graham Hitch's multicomponent model (1974, with the episodic buffer added in 2000) separates a phonological loop (words and sounds, about 2 seconds of speech) from a visuospatial sketchpad (images and positions). Spoken narration and on-screen images draw on different stores and can run together; on-screen text and narration of the same words compete for the phonological loop (the redundancy effect, section 7).
- Design rules: never require a user to remember something from one screen to use on another (a booking reference, a room code, a promo code); show it again. Comparisons belong side by side. Any process needing more than about four things held in mind needs a summary on screen.

### 6.4 Chunking

A chunk is a unit of information bound by prior knowledge, such that it occupies one slot of working memory. William Chase and Herbert Simon (Cognitive Psychology, 1973) showed that chess masters recall real positions far better than novices because they see chunks, and that the advantage disappears for random positions. Phone numbers in groups (98200 04512 in India, 050 123 4567 in the UAE), card numbers in fours, IBANs in fours and prices with separators (₹1,25,000 in the Indian lakh system, AED 125,000 in the Gulf) are chunked by their format. Format numbers in the convention the reader already chunks in; an Indian price written ₹125,000 breaks the lakh chunk.

### 6.5 Recognition over recall

Recognising an item from cues is easier and more reliable than recalling it unaided, because recognition needs only a match while recall must generate the item. Jakob Nielsen made it one of his ten usability heuristics (1994). Design use: visible options over typed commands, recent searches, saved addresses, thumbnails of previously viewed properties, menus over memorised gestures. The one exception is expert speed: experienced users want recall paths (keyboard shortcuts, command palettes) alongside the recognition path (09-interaction-design-and-ux-patterns.md).

### 6.6 Serial position, von Restorff and Zeigarnik

- Serial position effect: items at the start (primacy) and end (recency) of a list are remembered better than those in the middle (Hermann Ebbinghaus, 1885; Bennet Murdock, Journal of Experimental Psychology, 1962). Primacy comes from extra rehearsal and transfer to long-term memory; recency from items still in working memory. Glanzer and Cunitz (1966) showed that a 30-second delay removes recency and leaves primacy. Design use: the first and last items of a navigation bar, a deck and a list of benefits get the attention; the middle is for the less important. A pitch deck's last slide is remembered, so it carries the idea.
- Von Restorff effect (isolation effect): an item that differs from the others is remembered better (Hedwig von Restorff, 1933). It works only when one item differs. It is the memory side of preattentive pop-out (section 2) and the reason for one accent per screen.
- Zeigarnik effect: Bluma Zeigarnik (1927) reported that people recalled interrupted tasks better than completed ones; Maria Ovsiankina (1928) showed the related tendency to resume interrupted tasks. The memory effect has replicated poorly: a 2025 meta-analysis by Ghibellini and Meier found no reliable general memory advantage for unfinished tasks, while the tendency to resume them held. The design use that survives is the Ovsiankina side: progress indicators, "continue where you left off" and an unfinished profile pull people back to complete them. The house cites resumption, never "people remember unfinished things".

### 6.7 The peak-end rule

People judge an experience largely by its most intense moment and its end, and neglect its duration. Barbara Fredrickson and Daniel Kahneman (Journal of Personality and Social Psychology, 1993) showed duration neglect with film clips; Kahneman, Fredrickson, Charles Schreiber and Donald Redelmeier (Psychological Science, 1993) had people hold a hand in 14 degree Celsius water for 60 seconds, and in another trial for 60 seconds plus 30 more seconds at 15 degrees; most preferred to repeat the longer trial because it ended less painfully. Redelmeier and Kahneman's colonoscopy studies (Pain, 1996; and a randomised trial of 682 patients with Joel Katz, Pain, 2003) found that extending the procedure with a gentler ending improved retrospective ratings.

Design use: identify the peak and the end of every flow and design them on purpose. In hospitality the end of the booking flow (the confirmation) and the end of the stay (checkout, the last message) carry disproportionate weight; a luxury hotel's confirmation email is the end of the booking experience and the most read message the brand sends. design-taste's "an ending" rule (SKILL.md, section 2) has its mechanism here. Caution: the rule describes remembered experience; it does not make a bad middle acceptable, because users abandon during the middle.

### 6.8 Picture superiority and dual coding

- Picture superiority effect: pictures are remembered better than words. Roger Shepard (Journal of Verbal Learning and Verbal Behavior, 1967) found about 98 percent immediate recognition for 612 pictures against about 88 percent for words; Lionel Standing (1973) found high recognition after viewing 10,000 pictures; Timothy Brady and colleagues (PNAS, 2008) showed that memory for 2,500 objects held detail, with about 87 percent correct when distinguishing a seen object from a different exemplar of the same kind.
- Dual coding theory (Allan Paivio, Imagery and Verbal Processes, 1971): information is stored in verbal and non-verbal codes; concrete words and images that can be coded both ways are remembered better. Richard Mayer's multimedia principle (Multimedia Learning, 2001, third edition 2020) applies it: words with relevant pictures beat words alone.
- Design use: a brand is remembered by an image or a mark before a name; a campaign's key visual carries recall; the house rule of 70 percent visual to 30 percent text (design-taste, SKILL.md, section 7) is consistent with the evidence. The image must be relevant: decorative images add load without adding memory (section 7).

### 6.9 Long-term memory and brands

Byron Sharp's "How Brands Grow" (2010) and the Ehrenberg-Bass Institute's work frame brand memory as mental availability: the number and freshness of memory structures that link a brand to buying situations (category entry points). Distinctive brand assets (Jenni Romaniuk, "Building Distinctive Brand Assets", 2018) are the colours, shapes, characters, sounds and type that trigger the brand without its name, assessed by fame (how many category buyers link the asset to the brand) and uniqueness (how few link it to competitors). The perceptual basis is recognition plus von Restorff: an asset must be consistent to be learned and distinctive to be found. Brand application lives in 18-brand-strategy-and-identity-design.md.

## 7. Cognitive load theory

### 7.1 The theory

John Sweller's cognitive load theory (Cognitive Science, 1988; revised with Jeroen van Merriënboer and Fred Paas in Educational Psychology Review, 1998 and 2019) starts from two facts: working memory is small (section 6.3) and long-term memory is effectively unlimited and organised in schemas. Learning and using anything means processing new information through the small store. The load has three sources:

| Load | What it is | Who controls it | Design moves that reduce or redirect it |
|---|---|---|---|
| Intrinsic | The inherent complexity of the material, set by element interactivity (how many elements must be considered at once) relative to the user's expertise | The task and the user; the designer can only sequence it | Break the task into steps that each hold few interacting elements (progressive disclosure); sequence simple before complex; give defaults so fewer decisions interact; pre-train names and concepts before the task |
| Extraneous | Load imposed by the way information is presented that does not help the task | The designer, entirely | Remove decoration that carries no information; put labels next to what they label (split-attention effect); remove redundant text that repeats narration or an obvious image (redundancy effect); use convention (Jakob's law, section 8.4); keep layout and terms consistent; show information again where it is needed |
| Germane | In the 1998 formulation, effort devoted to building schemas; in the 2019 revision, the working memory resources devoted to dealing with intrinsic load, no longer counted as a separate additive source | The user, encouraged by the designer | Worked examples, previews of the result, consistent patterns users can learn once and reuse |

### 7.2 The named effects

- Split-attention effect: when two sources of information must be integrated to be understood (a diagram and its key, a form field and a help text in a sidebar), separating them in space or time forces the user to hold one while searching for the other. Integrate them: labels on the diagram, help text under the field.
- Redundancy effect: presenting the same information twice in different forms (full on-screen text identical to the narration) harms understanding for users who need only one. In video, supers that repeat the voiceover verbatim compete with it; supers should carry what the voice does not (a name, a number, a place).
- Modality effect: presenting part of the information as speech and part as image uses both working memory channels and increases effective capacity (section 6.3). Narrated product films beat text-heavy ones for complex explanations.
- Expertise reversal effect (Slava Kalyuga, Paul Ayres, Paul Chandler and Sweller, Educational Psychologist, 2003): guidance that helps novices burdens experts. Onboarding tooltips must be dismissible and must disappear for returning users.
- Element interactivity: a property form where price depends on dates, guests and room type has high interactivity; show the dependent result immediately so the user does not compute it.

### 7.3 Measuring load

NASA-TLX (Sandra Hart and Lowell Staveland, 1988) is the standard subjective workload questionnaire (six scales: mental demand, physical demand, temporal demand, performance, effort, frustration). Single-item effort ratings (Paas, 1992) are quicker. Pupil dilation and task-evoked pupillary responses track load in the lab. In design reviews, the practical proxy is error rate and time on task in usability testing (08-ux-research-and-strategy.md).

## 8. The laws of UX with the maths

Jon Yablonski's collection "Laws of UX" (lawsofux.com, and the O'Reilly book Laws of UX, 2020) gathers 30 principles as of October 2026. Some are measured laws with constants; others are heuristics with a name. The difference matters in a crit: a law predicts a number; a heuristic only suggests a direction.

### 8.1 Fitts's law

Paul Fitts (Journal of Experimental Psychology, 1954) showed that the time to move to a target grows with the distance to it and shrinks with its size. Scott MacKenzie's Shannon formulation (Human-Computer Interaction, 1992) is the standard form:

MT = a + b x log2(D / W + 1)

where MT is movement time, D the distance to the target's centre, W the target's width along the axis of motion, and a and b are constants fitted for the device and person. The logarithm term is the index of difficulty (ID) in bits. Throughput (TP = ID divided by MT, in bits per second) compares devices: Soukoreff and MacKenzie's review (International Journal of Human-Computer Studies, 2004) found mouse throughput of about 3.7 to 4.9 bits per second across studies. ISO 9241-411 (2012) specifies the evaluation method.

What the maths implies:
- Doubling the distance adds roughly the same time as halving the width. A small target close by and a large target far away can cost the same.
- The gains are logarithmic. Doubling a target's width removes close to one bit of difficulty when the target is small relative to its distance, and less when it is already large; one bit is worth very roughly a fifth to a quarter of a second for a mouse at the throughputs above. A 12px icon 600px away gains almost a full bit from going to 24px; a 200px button 300px away gains far less from going to 400px. Small, distant targets gain most from enlargement.
- Screen edges and corners have effectively infinite width along the axis of motion because the pointer stops there (Bruce Tognazzini, "A quiz designed to give you Fitts", AskTog, 1999, names the pixel under the pointer and the four screen corners as the fastest targets on screen). The macOS menu bar at the top edge is faster than a window menu bar for this reason. Touch screens have no such edge advantage; fingers do not stop at the bezel.
- The pointer's current position is a free target: context menus open at the pointer (distance near zero), and a pie menu puts every option at the same small distance.
- Fitts's law is a one-dimensional model; for two-dimensional targets the smaller of width and height usually dominates (MacKenzie and Buxton, 1992). A wide but short link is hard to hit vertically.

For touch, Fitts's law combines with finger accuracy. Steven Hoober's measurements ("Design for fingers, touch, and people", UXmatters, 6 March 2017) found that people tap the centre of the screen most accurately: targets can be as small as about 7mm at the centre and need about 12mm at the corners to contain 95 percent of taps. Platform targets as of October 2026: Apple Human Interface Guidelines 44 x 44pt (about 7 to 7.5mm on current iPhones), Material Design 48 x 48dp (7.6mm, since 1dp is 1/160 inch), WCAG 2.2 success criterion 2.5.8 at least 24 x 24 CSS px with a spacing exception (AA) and 2.5.5 at 44 x 44 CSS px (AAA). The house minimum is 44 on every tappable element, 48 on the primary action (26-platform-and-format-specs-2026.md).

### 8.2 Fitts and the thumb zone

Hoober's 2013 street observations (1,333 people, 780 of them touching the screen) found 49 percent holding the phone in one hand, 36 percent cradling it in two and 15 percent using two hands; his 2017 summary adds that about 75 percent of touches are made with one thumb. The thumb's reach is an arc from the pivot at the base of the thumb: the centre and lower centre of the screen are fastest and most accurate, the top corners slowest and least accurate, and the corner opposite the hand is the hardest. On a 6.7 to 6.9 inch phone the top-left corner is out of one-thumb reach for a right-handed user. Consequences: primary actions and navigation in the lower half (iOS 26 floating tab bars, Safari's bottom address bar since iOS 15), destructive or rare actions at the top, generous target sizes towards the edges, and swipe gestures that do not require reaching a corner. The applied thumb-zone layout rules are in 06-ui-design-craft.md, section 17.2.

### 8.3 Hick-Hyman law

William Hick (1952) and Ray Hyman (1953) found that choice reaction time grows with the logarithm of the number of equally likely alternatives:

RT = a + b x log2(n + 1)

where n is the number of choices (the +1 covers the uncertainty of whether to respond at all) and b is the time per bit. Hyman generalised it to unequal probabilities: time depends on the information (entropy) of the choice, so a familiar, highly probable choice is fast however many others exist.

Limits that are often missed: the law applies to choices among known, equally learned options, where the user does not need to read them. For unfamiliar menus that must be read item by item, search is linear (section 2.2), and the cost is reading time. Thomas Landauer and D. W. Nachbar (CHI, 1985) found logarithmic selection times in well-ordered (alphabetic, numeric) menus, favouring broad, shallow menus over deep ones. Design use: reduce the options at the moment of decision (one primary action, defaults, progressive disclosure), order long lists so that users can predict where an item lies (alphabetical countries, chronological dates), and group options into categories that halve the field (room type first, then view).

### 8.4 Jakob's law

"Users spend most of their time on other sites" (Jakob Nielsen, 2000). They therefore expect yours to work like the ones they already know. The mechanism is schema transfer (section 7.1): a convention is free because the schema already exists in long-term memory. Luxury brands may be unconventional in expression (type, image, pace) and must be conventional in mechanics (cart top right, logo top left or centre linking home, checkout steps, form behaviour). The house uses novelty on the visceral layer and convention on the behavioural layer (section 10.1).

### 8.5 Tesler's law

Larry Tesler's law of conservation of complexity (Xerox PARC, mid 1980s): every application has an inherent amount of complexity that cannot be removed, only moved between the user and the system. A one-field date search moves the parsing complexity to the system; a bare form hands it to the user. The design question is always who carries it; the house answer for luxury clients is the system, because the customer's time is the product.

### 8.6 Doherty threshold

Walter Doherty and Ahrvind Thadani (IBM, 1982, "The economic value of rapid response time") reported that productivity rose sharply when system response time fell below about 400ms, against the older assumption that 2 seconds was acceptable. It joins Nielsen's response limits (Usability Engineering, 1993, after Robert Miller, 1968, and Stuart Card and colleagues): about 100ms feels instantaneous, about 1 second keeps the flow of thought, about 10 seconds loses attention. Google's Interaction to Next Paint metric (a Core Web Vital since 12 March 2024) rates 200ms or less as good. Design use: respond to every input within 100ms (a pressed state), show optimistic results inside 400ms, show a skeleton or progress beyond 1 second (12-motion-principles-and-ui-motion.md, section 1.2).

### 8.7 Postel's law

The robustness principle from Jon Postel's specification of the Internet Protocol (RFC 760, 1980), restated in the TCP specification (RFC 793, 1981): be conservative in what you send, liberal in what you accept. In design: accept phone numbers with or without the +91 or +971 prefix, spaces and hyphens; accept dates typed in several formats; accept names in any script; then output one clean format. The cost of liberal acceptance falls on the system (Tesler, section 8.5).

### 8.8 Pareto principle

Vilfredo Pareto (Cours d'économie politique, 1896 to 1897) described the highly unequal, power-law distribution of income and wealth, popularised as 80 percent of Italy's land held by 20 percent of its people; Joseph Juran generalised it as "the vital few and the trivial many". In design it is a heuristic with no constant: a minority of features, pages and flows carries most of the use, so analytics should decide where craft hours go. The house applies it to crit time: polish the five screens 80 percent of users see before the fifty they rarely do.

### 8.9 Parkinson's law

C. Northcote Parkinson (The Economist, 1955): work expands to fill the time available. In interface terms, users take as long as the task allows; autofill, saved details and one-tap payment (UPI in India, Apple Pay and Samsung Pay in the UAE) shrink the time a booking or a purchase is allowed to take. In studio terms it is the reason for time-boxed crits and fixed review windows (24-business-of-creative-and-agency-operations.md).

### 8.10 Aesthetic-usability effect

Masaaki Kurosu and Kaori Kashimura (CHI 1995) asked 252 participants in Japan to rate 26 layouts of an ATM interface and found that apparent usability correlated more strongly with apparent beauty than with inherent usability. Noam Tractinsky replicated it in Israel (CHI 1997) with a stronger correlation, and Tractinsky, Adi Katz and Dror Ikar ("What is beautiful is usable", Interacting with Computers, 2000) found the effect held after people used the system. Mechanism: halo (section 12.2) and processing fluency (section 10.3). Two consequences: attractive designs earn tolerance for minor problems, and usability testing of a beautiful prototype under-reports problems, so test with tasks, measure errors, and treat stated opinions as secondary evidence.

### 8.11 Goal-gradient effect

Clark Hull (1932) found that rats ran faster as they approached food. Ran Kivetz, Oleg Urminsky and Yuhuang Zheng (Journal of Marketing Research, 2006) showed it in a café loyalty programme: customers given a 12-stamp card with 2 stamps already filled completed it faster than customers given an empty 10-stamp card, although both needed 10 purchases, and they bought more often as they neared the reward. Design use: show progress, start progress above zero where it is honest (an account created is a step done), and keep the last steps short. Faking progress (a bar that leaps to 80 percent and then crawls) is a deceptive pattern when it misleads about time or cost (section 13).

### 8.12 Weber-Fechner and Stevens: perceived scale

- Weber's law (Ernst Weber, 1834): the just noticeable difference (JND) in a stimulus is a constant fraction of its magnitude: delta I / I = k. About 1 percent for luminance on large fields, a few percent for line length; larger for area and loudness. A 2px difference is visible between 10px and 12px type and invisible between 96px and 98px.
- Fechner's law (Gustav Fechner, 1860): sensation grows with the logarithm of stimulus intensity, S = k x log(I). Type scales built on a constant ratio (1.2, 1.25, 1.333, the musical intervals in 03-typography.md, section 7) are Fechnerian: each step looks like the same increase.
- Stevens's power law (S. S. Stevens, Psychological Review, 1957; Psychophysics, 1975): perceived magnitude = k x I to the power a, with an exponent a specific to each continuum. Representative exponents from Stevens: brightness about 0.33 (a 5 degree target in the dark), loudness about 0.67 (a 3,000 Hz tone), visual length about 1.0, visual area about 0.7. James Flannery (1971) found circle size on maps perceived with an exponent of about 0.87.

Design consequences:
- Area is underestimated. To make one circle look twice as big as another, its area must grow by about 2 to the power (1/0.7), roughly 2.7 times, if the area exponent is 0.7. Bubble charts and proportional symbols mislead unless scaled for perception or labelled; bar lengths (exponent about 1) are read accurately, which is why bar charts beat area charts for comparison (see the dataviz skill and 04-colour.md, section 14).
- Loudness doubles for roughly every 10 dB increase. A sonic logo 3 dB louder than the bed is noticed; it does not sound twice as loud (15-lighting-and-sound.md, section 13).
- Brightness is compressive. Lightness steps in OKLCH and CIELAB are built on this compression (04-colour.md, section 1.4).
- Scale contrast in layout works because ratios are perceived, so a 160px headline beside an 11px caption reads as dramatic while 48px beside 32px reads as merely different. design-taste's "nothing medium" rule (SKILL.md, section 2) has its psychophysics here.

### 8.13 Miller's law and the law of Prägnanz as UX laws

"Miller's law" in the Laws of UX list (the average person holds about 7 items in working memory) is the Miller misreading of section 6.3; use Cowan's 4 plus or minus 1 and remember that items visible on screen need no memory. The law of Prägnanz appears as a UX law because users interpret ambiguous or complex images in the simplest form available (section 3.10): an icon with too much detail is read as its silhouette.

### 8.14 The rest of the list

Occam's razor (prefer the simplest design that does the job), the paradox of the active user (John Carroll and Mary Beth Rosson, 1987: users start using software without reading instructions, so instructions must be in the interface), flow (Mihaly Csikszentmihalyi, 1990: full absorption when challenge matches skill, the design goal for tools and games), selective attention, the serial position effect, von Restorff, Zeigarnik, the peak-end rule and chunking are covered in sections 6 and 7. The list's value is as a shared vocabulary in crits; its weakness is that it flattens measured laws (Fitts, Hick) and folk heuristics (Parkinson, Pareto) into one format.

## 9. Affordance, action and mental models

### 9.1 Gibson's affordances

James J. Gibson coined affordance ("The theory of affordances", 1977; The Ecological Approach to Visual Perception, 1979) for the action possibilities an environment offers an animal, relative to that animal's capabilities: a surface at knee height affords sitting to an adult and climbing to a toddler. Affordances in Gibson's sense exist whether or not they are perceived, and they are perceived directly from the structure of light (texture gradients, optic flow), without inference. William Warren (Journal of Experimental Psychology: Human Perception and Performance, 1984) measured one: people judge a stair climbable up to a riser height of about 0.88 of their leg length, and prefer a riser of about 0.26 of leg length, close to the ratio at which climbing used the least energy. An affordance is a ratio between body and world, which is why touch targets are specified in millimetres of finger (section 8.1).

### 9.2 Norman's vocabulary

Don Norman brought the term to design in The Psychology of Everyday Things (1988), retitled The Design of Everyday Things (revised and expanded edition, 2013). His vocabulary, as revised:

| Concept | Definition | Interface example | Failure example |
|---|---|---|---|
| Affordance | A relationship between an object's properties and an agent's capabilities that determines how it could be used | A screen affords touching anywhere; a draggable card affords moving | Everything on glass affords tapping, so affordance alone says nothing useful on screen |
| Signifier | A perceivable cue that communicates where and how to act (Norman added the term in his 2008 column "Signifiers, not affordances" and in the 2013 edition) | An underline on a link, a handle on a bottom sheet, a chevron on an expandable row, a cursor change | Flat text that is secretly a button; a luxury site's hidden navigation with no signifier |
| Mapping | The relationship between controls and their effects; natural mapping uses spatial analogy | A slider that moves right to increase; a stepper with minus on the left and plus on the right (mirrored in Arabic) | Four hob knobs in a row for four burners in a square |
| Feedback | Immediate, informative communication of the result of an action | Pressed state within 100ms, a confirmation with the booking number | A "Pay" button with no response for 3 seconds, which invites a second payment |
| Constraints | Physical, cultural, semantic and logical limits that restrict possible actions | Disabled dates in a calendar, a field that accepts only digits, a USB-C plug | A date picker that allows checkout before check-in |
| Conceptual model | The user's explanation of how the system works, built from the system image | "My bag keeps what I add until I check out" | A wishlist that silently empties when the session ends |

Norman's "perceived affordance" (used in the 1999 interactions article "Affordance, conventions, and design") is what designers usually mean on screens, and the signifier replaced it in his later writing. In crits, the house uses "signifier" for anything visible that says "act here", because that is what a designer can actually control.

### 9.3 The seven stages of action and the two gulfs

Norman's seven stages: one stage of goal (form the goal); three of execution (plan, specify, perform); three of evaluation (perceive, interpret, compare with the goal). The gulf of execution is the gap between what the user wants to do and what the system lets them see they can do; the gulf of evaluation is the gap between the system's state and the user's ability to perceive and interpret it. Edwin Hutchins, James Hollan and Norman introduced the gulfs in their analysis of direct manipulation interfaces (Human-Computer Interaction, 1985).

Use as a diagnostic: for any failed task in testing, locate the stage. Users who cannot find how to change the dates are stuck in execution (specify): a signifier problem. Users who changed the dates but think they did not are stuck in evaluation (perceive or interpret): a feedback problem. Signifiers and mappings bridge execution; feedback and a clear conceptual model bridge evaluation. 09-interaction-design-and-ux-patterns.md, section 1, applies this to flows.

### 9.4 Mental models

A mental model is a person's internal, simplified representation of how something works, used to predict its behaviour. Kenneth Craik proposed the idea (The Nature of Explanation, 1943) and Philip Johnson-Laird developed it (Mental Models, 1983). Norman distinguishes three models: the designer's model (how the designer believes it works), the user's model (how the user believes it works) and the system image (everything the user can perceive: the interface, the documentation, the behaviour). Users never talk to the designer; their model is built only from the system image. When the two models diverge, users make systematic errors that are entirely rational within their wrong model.

Mental models are incomplete, unstable and borrowed from other systems (Jakob's law, section 8.4). Indian users' models of payment are shaped by UPI (instant, confirmed by a sound and a full-screen tick, refundable by reversal); a luxury checkout that confirms more slowly or less visibly than UPI reads as a failed payment. Gulf users' models of luxury service are shaped by in-person concierge culture; a chatbot that cannot hand over to a person breaks the model.

## 10. Emotion and aesthetics

### 10.1 Norman's three levels

Don Norman (Emotional Design, 2004) describes three levels of processing:

- Visceral: fast, automatic, pre-conscious reactions to appearance: shape, colour, texture, sound, symmetry. Lindgaard and colleagues (section 10.5) showed visceral judgements of web pages within 50ms.
- Behavioural: the experience of use: function, understanding, usability, the feel of control. Largely subconscious while it works, conscious when it fails.
- Reflective: conscious, slow, culturally shaped meaning: self-image, memories, what owning or using it says about the person. Luxury is mostly reflective value delivered through visceral cues.

The house reading: luxury work must win the visceral level in the first second (section 18), never fail the behavioural level (a beautiful site that loses a booking destroys the reflective value it built), and deliver the reflective level through restraint and specificity (section 11; design-taste, SKILL.md, section 1).

### 10.2 Kansei engineering

Kansei engineering, developed by Mitsuo Nagamachi at Hiroshima University from the 1970s, translates customers' feelings (kansei, roughly "sensibility" in Japanese) into measurable design parameters. The method: collect the semantic space (adjectives customers use for the category), collect the property space (design variables), rate many product variants on semantic differential scales, then model statistically which properties drive which feelings. Mazda's MX-5 (launched 1989) is the classic application: the target feeling "jinba ittai" (rider and horse as one) was decomposed into measurable properties such as cockpit size, gear-lever throw and exhaust sound. For Mask360 the method is the disciplined version of a mood board: define the five or six feeling words for a brand, test variants of type, colour and photography against them with real customers, and keep the variables that move the ratings.

### 10.3 Processing fluency

Processing fluency is the subjective ease with which information is processed. Rolf Reber, Norbert Schwarz and Piotr Winkielman ("Processing fluency and aesthetic pleasure", Personality and Social Psychology Review, 2004) argued that fluent processing feels good and is misattributed to the object: easy-to-see things look prettier, more familiar and more true. Supporting effects: clear figure-ground, symmetry, high contrast, prototypicality, repetition and priming all increase liking. Hyunjin Song and Schwarz (Psychological Science, 2008) found that exercise instructions printed in a hard-to-read brush font were judged to take almost twice as long and to be harder to do than the same instructions in Arial.

Limits: fluency increases liking most when the person does not notice it; once noticed, it is discounted. Disfluency has been claimed to improve learning and reasoning (Connor Diemand-Yauman, Daniel Oppenheimer and Erikka Vaughan, Cognition, 2011); a large set of replications on reasoning problems by Andrew Meyer, Shane Frederick and colleagues (Journal of Experimental Psychology: General, 2015) found no reliable benefit. The house uses fluency for persuasion and comprehension (legible type, clean structure) and spends disfluency only on purpose, in display moments where friction is the idea (a hard-to-read display face at 200px in a fashion campaign is a deliberate tension, design-taste SKILL.md section 1, item 5).

### 10.4 Prototypicality, novelty and MAYA

- Prototypicality is how typical an object is of its category. Typical objects are processed fluently and often preferred (Martindale and Moore, 1988, on prototypes and preference).
- Novelty is preferred too: Paul Hekkert, Dirk Snelders and Piet van Wieringen ("Most advanced, yet acceptable", British Journal of Psychology, 2003) found that typicality and novelty jointly predict aesthetic preference for industrial designs, and that they suppress each other: the preferred design is the most novel one that is still typical enough to be recognised.
- MAYA: Raymond Loewy's "most advanced, yet acceptable" (Never Leave Well Enough Alone, 1951), the industrial designer's rule that the public accepts innovation up to the point where it stops recognising the category. Hekkert's study is the empirical support.
- Alexandre Tuch and colleagues (International Journal of Human-Computer Studies, 2012) found that websites low in visual complexity and high in prototypicality were judged most beautiful in first impressions as short as 17 to 50ms.

The design consequence for Mask360: a luxury hotel website must be instantly recognisable as a hotel website (prototypical structure: hero image, dates, rooms, dining, spa, location) and novel in its expression (type, pace, image, one tension). design-taste's currency reading (references/currency-2026.md) tells you where "advanced" sits this year; MAYA tells you how far to push.

### 10.5 First impressions, complexity and colourfulness

- Gitte Lindgaard and colleagues (Behaviour and Information Technology, 2006) showed web pages for 50ms and found visual appeal ratings that correlated highly with ratings after 500ms and with longer exposure. Aesthetic judgement is visceral and fast.
- Daniel Berlyne (Conflict, Arousal, and Curiosity, 1960; Aesthetics and Psychobiology, 1971) proposed an inverted-U relation between a stimulus's arousal potential (complexity, novelty, surprise) and its hedonic value: moderate complexity is preferred over very simple or very complex. The relation holds in many studies, with individual differences: art-trained viewers prefer more complexity.
- Katharina Reinecke and colleagues (CHI 2013) modelled first impressions of websites and found that perceived visual complexity and colourfulness predicted appeal, with preferred levels varying by age, education and country. Reinecke and Krzysztof Gajos (CHI 2014, using data from the LabintheWild platform with about 40,000 participants) found that preferred complexity and colourfulness vary across countries.

Use: complexity is a dial, set by audience. Luxury audiences in India and the Gulf include both the internationally educated buyer who reads restraint as status and the buyer who reads ornament and gold as celebration; the brief must say which reader is the target (design-taste, references/worlds.md).

### 10.6 Neuroaesthetics: symmetry, curvature, the golden ratio

Neuroaesthetics studies the brain processes behind aesthetic experience (Semir Zeki, Inner Vision, 1999; Anjan Chatterjee, The Aesthetic Brain, 2014). Activity in the medial orbitofrontal cortex tracks rated beauty across visual art and music (Tomohiro Ishizu and Zeki, PLoS ONE, 2011). The findings with design consequences:

- Symmetry. Mirror symmetry is preferred in abstract patterns and faces; Thomas Jacobsen and Lea Höfel (2002) found symmetry the strongest predictor of beauty ratings for novel graphic patterns. Symmetry also reads as static and formal (section 3.9), so it is a register choice.
- Curvature. Moshe Bar and Maital Neta (Psychological Science, 2006) found that people preferred objects with curved contours to the same objects with sharp angles, and proposed that sharp contours signal threat. Oshin Vartanian and colleagues (PNAS, 2013) found curvilinear rooms rated more beautiful than rectilinear ones in an fMRI study. A meta-analysis by Erick Chuquichambi and colleagues (Annals of the New York Academy of Sciences, 2022) found the curvature preference robust across many studies, with variation by stimulus type and expertise. The house layer's "curved edges everywhere" (design-taste, SKILL.md, section 7) is consistent with the evidence, and the evidence also says that context and culture modulate it: sharpness reads as precise and modern in tech and architecture.
- The golden ratio (about 1.618). Gustav Fechner (Vorschule der Ästhetik, 1876) reported a preference for golden rectangles; later work failed to find a reliable preference for the exact ratio. Christopher Green's review ("All that glitters", Perception, 1995) found that the effect depends heavily on method; Chris McManus (1980) found preferences spread across a range of rectangles; George Markowsky ("Misconceptions about the golden ratio", College Mathematics Journal, 1992) showed that claims of the ratio in the Parthenon, the Great Pyramid and human bodies rely on selective measurement. Mario Livio's The Golden Ratio (2002) reaches the same conclusion. House position: the golden ratio is one convenient proportion among several (2:3, 3:4, root 2 for ISO paper, 4:5 for Instagram portrait); use it when it fits the format and never claim it as the reason something is beautiful.

## 11. Why restraint reads as expensive

### 11.1 Signalling theory

Signalling theory explains how one party conveys hidden qualities to another through observable signals. A signal is credible when it is costly to fake.

- Thorstein Veblen (The Theory of the Leisure Class, 1899) described conspicuous consumption and conspicuous waste: displays whose value lies in their visible cost.
- Michael Spence (Quarterly Journal of Economics, 1973) formalised job-market signalling: education is a credible signal of ability because it costs low-ability candidates more.
- Amotz Zahavi's handicap principle (Journal of Theoretical Biology, 1975): a peacock's tail is credible because only a fit bird can afford it. Costly signalling theory generalises this.
- Rob Nelissen and Marijn Meijers (Evolution and Human Behavior, 2011) found that people wearing luxury-branded clothing were treated more favourably in several social and economic exchanges, support for luxury as a costly signal.

### 11.2 Loud and quiet signals

- Young Jee Han, Joseph Nunes and Xavier Drèze ("Signaling status with luxury goods: the role of brand prominence", Journal of Marketing, 2010) classified consumers by wealth and need for status into patricians (wealthy, low need for status, prefer quiet goods recognisable only to insiders), parvenus (wealthy, high need, prefer loud logos), poseurs (less wealthy, high need, buy loud counterfeits) and proletarians. Within brands such as Louis Vuitton and Gucci, quieter (less prominent logo) products were priced higher.
- Jonah Berger and Morgan Ward ("Subtle signals of inconspicuous consumption", Journal of Consumer Research, 2010) found that people with cultural capital in a domain prefer subtle signals that only other insiders can decode, which protects the signal from imitation by the mainstream.
- Morgan Ward and Darren Dahl ("Should the devil sell Prada?", Journal of Consumer Research, 2014) found that rejection by a dismissive salesperson in a luxury store increased aspiration for the brand among some consumers, a reminder that exclusivity is part of the signal. This is a description of a mechanism; the house never designs rudeness into an experience.

### 11.3 The empty-room luxury code

- Julio Sevilla and Claudia Townsend ("The space-to-product ratio effect", Journal of Marketing Research, 2016) found that more empty space around displayed products raised their perceived aesthetic appeal and the perceived prestige of the store, and shifted preference towards the products displayed with more space.
- Pracejus, Olsen and O'Guinn ("How nothing became something: white space, rhetoric, history, and meaning", Journal of Consumer Research, 2006) traced white space in advertising as a learned rhetorical sign of prestige, trust, quality and leadership, built up through 20th century luxury print advertising.
- Hilke Plassmann and colleagues (PNAS, 2008) found that the same wine labelled as more expensive was rated as more pleasant and produced more activity in the medial orbitofrontal cortex: price information changes the experienced quality. Design cues that signal price (space, slowness, material) plausibly work the same way.
- Jean-Noël Kapferer and Vincent Bastien (The Luxury Strategy, 2009, second edition 2012) codify the "anti-laws of marketing": do not respond to demand, keep non-buyers aware but distant, never sell on price. Restraint in communication is their consequence.

Synthesis: empty space, few words, slow motion and one owned colour are costly signals because they waste the most expensive resource in commercial communication (attention space that could have carried more selling) and because only a confident brand can afford to waste it. They also raise processing fluency (section 10.3), lower perceptual load (section 6.2) so the single element is seen fully, and fit the insider-decoded register of Berger and Ward. Each of design-taste's "physics of expensive" (SKILL.md, section 2) can be traced to one of these mechanisms; this file supplies the mechanism and the taste skill supplies the judgement.

Two limits. Quiet signals depend on an audience that can decode them; in markets where gold, ornament and visible abundance read as celebration (an Indian wedding season campaign, a Gulf National Day activation), restraint can read as meanness unless the materials themselves are visibly costly. And restraint fails when it removes signifiers (section 9.2): a luxury site that hides its navigation to look calm moves complexity onto the user (Tesler, section 8.5).

## 12. Judgement, heuristics and biases

### 12.1 System 1 and System 2

Daniel Kahneman (Thinking, Fast and Slow, 2011; terms from Keith Stanovich and Richard West, 2000) describes two modes: System 1, fast, automatic, associative, effortless; System 2, slow, deliberate, effortful, lazy. Most design judgements by users (is this trustworthy, is this button the next step, is this price fair) are System 1. Kahneman died on 27 March 2024; the replication crisis has since weakened several effects his book cited (notably behavioural priming and ego depletion), so the house cites the robust effects below and treats the rest with caution. The heuristics and biases programme began with Amos Tversky and Kahneman ("Judgment under uncertainty: heuristics and biases", Science, 1974).

### 12.2 Biases that change design decisions

| Effect | Mechanism and key evidence | Robustness | Honest design use | Manipulative use to refuse |
|---|---|---|---|---|
| Anchoring | Estimates are pulled towards an initial number. Tversky and Kahneman (1974): a wheel of fortune landing on 10 or 65 shifted estimates of the share of African countries in the UN to medians of 25 and 45 percent | Robust; size varies | Show the most relevant reference first (the suite before the room when the suite is the product); a real previous price | Fictional "was" prices; India's 2026 e-commerce amendment rules measure a discount against the lowest price of the preceding 30 days (09-interaction-design-and-ux-patterns.md, section 13.4) |
| Framing | Equivalent options described as gains or losses produce different choices. Tversky and Kahneman's "Asian disease" problem (Science, 1981): 72 percent chose the certain option framed as lives saved; 78 percent chose the risky option when framed as lives lost | Robust for risky choice framing | Frame truthfully and consistently ("includes breakfast for two") | Framing that hides cost ("just ₹999 a month" for a 36-month commitment) |
| Loss aversion | Losses weigh more than equal gains. Kahneman and Tversky (Econometrica, 1979); a meta-analysis by Alexander Brown, Taisuke Imai, Ferdinand Vieider and Colin Camerer (Journal of Economic Literature, June 2024) estimates the mean coefficient at about 1.96 (95 percent interval about 1.82 to 2.10) | Robust on average; David Gal and Derek Rucker (2018) argued it is weaker for small stakes and depends on context | State what the customer keeps (free cancellation until a date) | "You will lose your reserved room" when nothing is reserved |
| Default effect | People stick with the pre-selected option. Eric Johnson and Daniel Goldstein (Science, 2003): organ donation consent ranged from about 86 to 99.98 percent in opt-out countries against about 4 to 28 percent in opt-in ones. A meta-analysis by Jon Jachimowicz and colleagues (Behavioural Public Policy, 2019; 58 studies, about 73,000 participants) found an average effect of d about 0.68 | Robust | Defaults that serve the user (the most popular room configuration, the user's own currency, accessibility preferences honoured) | Pre-ticked marketing consent, pre-added insurance or donations (illegal under India's CCPA guidelines as basket sneaking, section 13.5) |
| Social proof | People follow what others like them do. Noah Goldstein, Robert Cialdini and Vladas Griskevicius (Journal of Consumer Research, 2008): hotel towel reuse rose from about 35 percent with an environmental message to about 44 percent with a descriptive norm, and to about 49 percent when the norm referred to guests in the same room | Robust; strongest when the reference group is similar | Real reviews, real press, named clients with permission | Fabricated activity ("23 people are viewing this suite") |
| Scarcity | Scarce items are valued more. Stephen Worchel, Jerry Lee and Akanbi Adewole (1975): cookies from a jar of 2 were rated more desirable than identical cookies from a jar of 10 | Robust | Real limits: a numbered edition, a last suite, a closing date | False urgency and false low-stock messages (CCPA pattern 1) |
| Authority | People defer to perceived experts. Stanley Milgram's obedience studies (1963) are the extreme case | Robust in kind | Real credentials (the sommelier, the gemmologist's certificate, GIA grading) | Fake badges and borrowed seals |
| Decoy effect (asymmetric dominance) | Adding an option that is clearly worse than one target shifts choice to that target. Joel Huber, John Payne and Christopher Puto (Journal of Consumer Research, 1982). Dan Ariely's Economist subscription example (Predictably Irrational, 2008) is a classroom demonstration | Contested: Shane Frederick, Leonard Lee and Ernest Baskin (Journal of Marketing Research, 2014) found the effect weak or absent with realistic stimuli | Tier pricing whose middle tier is the real recommendation, with honest differences | Phantom tiers no one is meant to buy |
| Choice overload | Too many options reduce choice or satisfaction. Sheena Iyengar and Mark Lepper (Journal of Personality and Social Psychology, 2000): a tasting table of 24 jams drew more visitors than one of 6, but about 3 percent of visitors to the large display bought against about 30 percent at the small one | Contested: Benjamin Scheibehenne, Rainer Greifeneder and Peter Todd's meta-analysis (Journal of Consumer Research, 2010) found a mean effect near zero; Alexander Chernev, Ulf Böckenholt and Joseph Goodman's meta-analysis (Journal of Consumer Psychology, 2015) found it appears under four conditions: complex choice sets, difficult tasks, uncertain preferences and a goal to minimise effort | Curate: fewer, distinct options with a recommendation; filters for large catalogues | Hiding the cheap option among many |
| IKEA effect | People value what they helped make. Michael Norton, Daniel Mochon and Ariely (Journal of Consumer Psychology, 2012) | Moderate | Personalisation, configurators, engraving, bespoke | Fake effort steps to raise commitment |
| Endowment effect | People value what they own more than what they could acquire. Kahneman, Jack Knetsch and Richard Thaler (Journal of Political Economy, 1990): owners of a mug asked roughly twice what buyers would pay | Robust in many settings, with debate on its causes | Trials, try-at-home, virtual try-on | Trials that roll silently into payment (CCPA's SaaS billing and subscription trap) |
| Mere exposure | Repeated exposure increases liking. Robert Zajonc (Journal of Personality and Social Psychology monograph, 1968); Robert Bornstein's meta-analysis (Psychological Bulletin, 1989) found the effect strongest with brief exposures and limited by boredom after many repetitions | Robust, with diminishing returns | Consistent brand assets (section 6.9) | Nagging (CCPA pattern 10) |
| Halo effect | One positive trait colours judgements of others. Edward Thorndike (1920); Karen Dion, Ellen Berscheid and Elaine Walster ("What is beautiful is good", 1972) | Robust | Craft in every visible detail, because one sloppy detail creates a negative halo | Beautiful presentation of a bad deal |

### 12.3 Using the table

Every row has a mechanism, a number and a manipulative twin. The house rule is simple: a persuasive move is acceptable if it would still work after the customer understood it (section 13.3). The robust effects (defaults, social proof, anchoring, loss aversion, mere exposure) are used honestly in every luxury flow; the contested ones (decoy, choice overload) are never the basis of a client recommendation without the client's own test data.

## 13. Persuasion, ethics and deceptive patterns

### 13.1 Cialdini's principles

Robert Cialdini's Influence (1984; new and expanded edition, 2021) organises compliance research into seven principles; the seventh, unity, was introduced in Pre-Suasion (2016):

| Principle | Mechanism | Luxury-appropriate form |
|---|---|---|
| Reciprocity | People repay what they receive | A genuine gift with no condition: the handwritten note, the welcome amenity, an invitation to a private viewing |
| Commitment and consistency | People act consistently with prior commitments, especially public and written ones | A small first step (save a property, join a waitlist) that the customer chose |
| Social proof | People follow similar others (section 12.2) | Real press, real guests, with permission |
| Authority | People defer to expertise | The named craftsperson, the chef, the certificate |
| Liking | People say yes to those they like and resemble | Warmth, recognition by name, the relationship manager |
| Scarcity | Rare things are valued (section 12.2) | Real editions, real seasons |
| Unity | People favour those who share an identity with them ("we") | Community of owners, members, alumni |

Cialdini's own position is that using a principle is ethical when the feature it points to is real (the scarcity exists, the experts do recommend it) and unethical when the feature is counterfeited or staged.

### 13.2 The Fogg behaviour model and its critique

BJ Fogg's behaviour model (Persuasive 2009; restated as B = MAP in Tiny Habits, 2019): a behaviour happens when motivation, ability and a prompt (originally "trigger") converge at the same moment; motivation and ability trade off along an "action line", so a hard behaviour needs high motivation and an easy one needs little.

Critique: the model has no measured constants and is hard to falsify (any failure can be attributed to too little motivation or ability after the fact); it was built for habit formation in persuasive technology and contributed to the attention-maximising product designs of the 2010s; it says nothing about whether the behaviour serves the person. The house uses it as a checklist for honest flows (is the prompt there, is the step easy enough, is the motivation real) and never as a licence to engineer compulsion.

### 13.3 Nudges and the line into manipulation

- Richard Thaler and Cass Sunstein (Nudge, 2008; Nudge: The Final Edition, 2021) define a nudge as any aspect of choice architecture that alters behaviour predictably without forbidding options or significantly changing economic incentives. Thaler also coined sludge: friction that makes the beneficial choice harder (cancellation by post, rebate forms).
- Evidence: Stephanie Mertens and colleagues (PNAS, 2022) meta-analysed over 200 studies and reported an average effect of d about 0.43, largest for decision structure (defaults) and smallest for information; Maximilian Maier and colleagues (PNAS, 2022) re-analysed the same data and found no evidence for an average effect once publication bias was accounted for. Read with the separate default meta-analysis (section 12.2), the house conclusion is: defaults work; most other nudges are small and context dependent.
- Manipulation: Daniel Susser, Beate Roessler and Helen Nissenbaum ("Online manipulation: hidden influences in a digital world", Georgetown Law Technology Review, 2019) define manipulation as hidden influence that exploits a person's vulnerabilities to steer their decision. The tests that follow, which the house applies to every persuasive element: transparency (would the effect survive the customer seeing the mechanism; Thaler's "publicity principle", after John Rawls), reversibility (can the customer easily undo it), alignment (does the outcome serve the customer's own stated goal), and symmetry (is declining as easy as accepting).

### 13.4 Deceptive patterns: the psychology under each

A deceptive pattern (Harry Brignull's term since 2010; "dark pattern" in older literature and in Indian law) is an interface designed to make people do what they did not intend, to the business's benefit. As of October 2026, deceptive.design lists 18 types. The full catalogue with Mask360 examples, the Mathur et al. 2019 crawl data and the full legal detail are in 09-interaction-design-and-ux-patterns.md, section 13; this table supplies the bias each type exploits, which is how to spot a new variant that no list names yet.

| Type (Brignull) | Bias or limit exploited | Section |
|---|---|---|
| Sneaking, hidden costs | Anchoring on the first price; commitment after effort; change blindness at the last step | 12.2, 6.1 |
| Forced action | Goal-gradient: the user near a goal accepts a cost to reach it | 8.11 |
| Hard to cancel, obstruction | Asymmetric friction (sludge); loss aversion about losing benefits | 13.3, 12.2 |
| Preselection | Default effect | 12.2 |
| Hidden subscription | Inattention to small print; endowment after a free trial | 6.1, 12.2 |
| Trick wording | Working memory load of double negatives; System 1 reading | 6.3, 12.1 |
| Visual interference | Preattentive salience assigned to the business's option; low contrast for the user's option | 2.1 |
| Fake social proof | Social proof | 12.2 |
| Fake urgency, fake scarcity | Scarcity and loss aversion; time pressure forces System 1 | 12.2 |
| Nagging | Mere exposure and fatigue | 12.2 |
| Disguised ads | Banner blindness inverted: ads made to look like content | 5.3 |
| Confirmshaming | Social and self-image threat | 12.2 |
| Comparison prevention | Working memory limits: comparison needs simultaneous display | 6.3 |
| Addictive design | Variable reward schedules (B. F. Skinner), the Ovsiankina pull of unfinished tasks, infinite scroll removing stopping cues | 6.6, 18 |
| Currency confusion | Chunking and number processing in an unfamiliar unit (credits, points, coins) | 6.4 |

### 13.5 The legal context, in brief

Detail and dates are in 09-interaction-design-and-ux-patterns.md, sections 13.2 to 13.5; the summary for a crit:

- European Union: the Unfair Commercial Practices Directive (2005/29/EC), whose Annex I blacklist covers false urgency and fake reviews; the Digital Services Act (Regulation (EU) 2022/2065), Article 25, banning platform interfaces that deceive or manipulate; the GDPR consent standard and the EDPB's Guidelines 03/2022 on deceptive design patterns; the AI Act, Article 5, on manipulative AI techniques, applicable from 2 February 2025; a proposed Digital Fairness Act expected from the Commission in late 2026, with no text published as of late October 2026.
- United States: the FTC under Section 5 of the FTC Act and the Restore Online Shoppers' Confidence Act; its staff report "Bringing Dark Patterns to Light" (September 2022); the Epic Games (2022) and Amazon (September 2025, USD 2.5 billion) settlements as the benchmarks.
- India: the Central Consumer Protection Authority's Guidelines for Prevention and Regulation of Dark Patterns, 2023 (notified 30 November 2023 under the Consumer Protection Act, 2019), which name 13 patterns: false urgency, basket sneaking, confirm shaming, forced action, subscription trap, interface interference, bait and switch, drip pricing, disguised advertisement, nagging, trick question, SaaS billing and rogue malware. Penalty orders followed in 2025 and 2026, and 09, section 13.4, records the 2026 amendment to the e-commerce rules.
- UAE: no dark-pattern-specific instrument as of October 2026; Federal Law No. 15 of 2020 on Consumer Protection and the Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) cover misleading practices and consent.

House position: every deceptive type is banned in Mask360 work, including the grey ones, because luxury sells trust and the psychology in section 12 shows that a customer who detects one manipulation discounts every later claim (a negative halo). Honest scarcity, real social proof and good defaults are more effective with this audience and survive scrutiny.

## 14. Colour perception

Colour science, spaces, contrast maths and management are in 04-colour.md; this section is the perception layer the rest of that file relies on.

### 14.1 Trichromacy and opponent process

- Trichromacy (Thomas Young, 1802; Hermann von Helmholtz, 1850s): three cone types (S, M, L, peaking at about 420, 534 and 564nm) mean that any colour can be matched by mixing three primaries. This is why screens need only three subpixels and why metamers exist (14.4).
- Opponent process (Ewald Hering, 1878; quantified by Leo Hurvich and Dorothea Jameson, 1957): cone signals are recombined into three opponent channels, light versus dark, red versus green and blue versus yellow. Both theories are true at different stages (the zone theory). Consequences: no colour looks reddish green; afterimages appear in the opponent colour (stare at a flame orange for 30 seconds and a white wall turns blue-green); red and green of equal lightness side by side vibrate at their shared edge.

### 14.2 Context effects

Colour is relative. The same patch looks different in different surrounds, under different light and at different sizes.

| Effect | What happens | Named source | Design consequence |
|---|---|---|---|
| Simultaneous contrast | A colour shifts towards the complement of its surround and in lightness away from the surround | Michel Eugène Chevreul, 1839 | A brand colour must be approved on its real grounds; the same grey looks lighter on black than on white; Josef Albers's Interaction of Color (1963) is the training |
| Assimilation (Bezold effect) | Fine patterns take on the colour of the adjacent lines, the opposite of contrast | Wilhelm von Bezold, 1874 | Thin type or pinstripes shift towards their neighbours; a fine gold rule on navy looks different from a large gold field |
| Chromatic adaptation | The visual system normalises to the prevailing illuminant within seconds to minutes | Johannes von Kries, 1902, the von Kries model; Bradford transform in ICC workflows | The reason white balance matters and why a phone screen looks blue in a candle-lit restaurant |
| Helmholtz-Kohlrausch effect | Saturated colours look brighter than their luminance predicts | Named after Hermann von Helmholtz and Kohlrausch | A saturated accent looks brighter than its contrast ratio says (04-colour.md, section 6) |
| Abney effect | Hue appears to shift when white is added (desaturation) at constant wavelength | William Abney, about 1910 | Tints of blue drift purple; build tints in OKLCH and check them by eye |
| Bezold-Brücke shift | Hue shifts with intensity | Bezold, 1873; Ernst Brücke, 1878 | Highlights and shadows of one colour shift hue; graded footage and 3D renders need hue correction in the extremes |
| Hunt effect | Colourfulness increases with luminance | R. W. G. Hunt, 1952 | A palette approved on a dim monitor looks garish in sunlight and on a bright HDR display |
| Stevens effect | Perceived contrast increases with luminance | S. S. Stevens and J. C. Stevens, 1963 | Dark scenes look flat; a grade for a dark cinema needs more contrast for a bright phone |
| Bartleson-Breneman effect | Perceived image contrast falls as the surround darkens | C. J. Bartleson and E. J. Breneman, 1967 | The reason cinema gamma (2.6) and broadcast gamma (2.4) differ from office viewing; grade in the surround the audience will use (16-editing-colour-grading-and-delivery.md, section 7) |

### 14.3 White balance, constancy and the dress

Colour constancy is the perception of stable object colour across illuminants. It is achieved by adaptation and by the brain's estimate of the illuminant from cues (highlights, shadows, known objects). When the cues are ambiguous, people disagree: the 2015 "dress" photograph split viewers into blue and black versus white and gold, and studies by Rosa Lafer-Sousa, Katherine Hermann and Bevil Conway and by Karl Gegenfurtner's group (both Current Biology, 2015) linked the split to different assumptions about whether the dress was in cool shadow or warm light. For jewellery and fashion this is commercial: a diamond's whiteness, a gold's karat tone and a fabric's colour depend on the illuminant the viewer assumes, so product photography includes cues that fix the illuminant (a neutral reference, a known material) and is shot at the white balance of the showroom story (15-lighting-and-sound.md, section 1).

### 14.4 Metamerism

Two different spectra that produce the same cone responses are metamers: they match under one light and differ under another (illuminant metamerism), or match for one observer and differ for another (observer metamerism). Observer metamerism has become a design issue with narrow-primary displays: wide-gamut OLED and laser displays with narrow spectral primaries produce larger disagreements between observers than older displays, so two people can disagree about a neutral grey on the same OLED screen. Practical rules are in 04-colour.md, section 1.5.

### 14.5 Colour vision deficiency

About 8 percent of men and about 0.5 percent of women of European descent have a red-green deficiency; deuteranomaly alone is about 5 percent of men; tritan defects are very rare and not sex linked; rod monochromacy is about 1 in 30,000 (04-colour.md, section 13, with the full table, safe palettes and simulation tools). The perceptual design rule: colour never carries information alone (WCAG 1.4.1); lightness contrast carries hierarchy, because lightness is the one colour dimension all forms of CVD preserve.

### 14.6 Colour and emotion: evidence and folklore

- Domicele Jonauskaite and colleagues (Psychological Science, 2020) surveyed 4,598 people in 30 nations: colour-emotion associations were broadly similar across nations (red with love and anger, black with sadness, yellow with joy) and more similar between nations that are close linguistically and geographically. Universal patterns exist and culture modulates them.
- Stephen Palmer and Karen Schloss's ecological valence theory (PNAS, 2010): people like colours associated with objects they like (clear skies, clean water) and dislike colours associated with objects they dislike (rot, waste). Preference is learned through objects, which is why it shifts with culture and with brands.
- Designed aversion: Pantone 448 C, a drab dark brown chosen after consumer research as the least appealing colour, has been the background of Australia's plain tobacco packaging since 2012, and similar shades are used in other plain-packaging regimes. It is the clearest evidence that colour affect is real enough for governments to legislate it.
- Folklore: "blue increases trust" and "red increases appetite" as universal rules, and percentages of judgement based on colour (04-colour.md, section 12.1). Elliot and Maier's review (Annual Review of Psychology, 2014) finds most colour-psychology effects small and context dependent.

### 14.7 Cultural meanings in India and the Gulf

The full treatment, with festival codes, flag rules and materials, is in 04-colour.md, sections 12.3 and 12.4. The perceptual point: cultural meaning is a learned association (Palmer and Schloss), so it overrides any general colour-emotion finding. In India red is bridal and auspicious, saffron is sacred and political, white can mean mourning, green is Islamic and agricultural, and red with gold is the default of every Diwali and wedding campaign; in the Gulf green is Islamic and national (the Saudi flag carries the shahada), white is the kandura and purity, gold is the metal itself, and the UAE's red, green, white and black are national colours with legal protection. A palette that ignores these associations is read through them anyway.

## 15. Motion perception

UI motion values are in 12-motion-principles-and-ui-motion.md; film and edit motion in 16-editing-colour-grading-and-delivery.md. This section explains why they work.

### 15.1 Apparent motion: phi and beta

Two still images shown in sequence at suitable spacing and timing are seen as one object moving. Max Wertheimer (1912) described the phi phenomenon, pure "objectless" motion seen between two flashing lights; beta movement is the perception of an object itself moving from the first position to the second, the effect film and animation actually use. Robert Steinman, Zygmunt Pizlo and Filip Pizlo ("Phi is not beta", Vision Research, 2000) restored the distinction, which textbooks had blurred. Paul Kolers and Michael von Grünau's colour phi (Vision Research, 1976) shows that the brain fills in a colour change mid-path, evidence that the motion percept is constructed after the second frame arrives.

Apparent motion works best for short spatial jumps at frame intervals of a few tens of milliseconds; too long an interval breaks the motion into two flashes. Every animation is a series of jumps tuned to stay inside this window, which is why a large element crossing the screen in very few frames stutters, and why higher frame rates make fast motion smoother.

### 15.2 The persistence of vision myth

"Persistence of vision" (an afterimage lingering on the retina and blending frames) is the popular explanation of film. Joseph and Barbara Anderson ("The myth of persistence of vision revisited", Journal of Film and Video, 1993) showed that it explains neither motion nor fusion: retinal afterimages would produce smeared superimpositions. Motion comes from the brain's motion-detection systems responding to apparent motion; the absence of flicker comes from the flicker fusion threshold. Use "apparent motion" and "flicker fusion" in briefs and crits.

### 15.3 Flicker fusion and frame rates

- The critical flicker fusion frequency (CFF), the rate at which a flickering light appears steady, is roughly 50 to 90Hz for typical display conditions. It rises with luminance (the Ferry-Porter law: CFF rises linearly with log luminance) and with stimulus area (the Granit-Harper law), and is higher in peripheral vision, which is why a 50Hz fluorescent tube or a cheap LED flickers in the corner of the eye.
- James Davis, Yi-Hsuan Hsieh and Hung-Chi Lee (Scientific Reports, 2015) showed that people can perceive flicker artefacts at up to 500Hz when the eye moves across a high-contrast edge (the phantom array effect). Cheap PWM-dimmed LEDs and some OLED screens at low brightness show this to sensitive viewers.
- 24 frames per second became the sound-film standard in the late 1920s as a compromise between film stock cost and smooth sound reproduction, below the flicker threshold: projectors flash each frame two or three times with a two- or three-blade shutter, giving 48 or 72 flashes per second, above fusion. The motion blur of a 180 degree shutter (1/48 second exposure) is part of the "film look", and fast pans at 24fps judder; cinematographers keep pans slow enough that an object takes several seconds to cross the frame (16-editing-colour-grading-and-delivery.md).
- High frame rates reveal the convention: The Hobbit: An Unexpected Journey (2012) at 48fps and Gemini Man (2019) at 120fps drew complaints of a "video" or "soap opera" look, because audiences associate 24fps motion blur with cinema and 50 or 60fps with television. Phones and interfaces run at 60 to 120Hz, so UI motion is judged against video smoothness while brand films are judged against cinema.

### 15.4 Vection, motion sickness and why reduced motion exists

- Vection is the illusion of self-motion produced by moving visual fields (the train beside yours pulls away and you feel yourself move). Large-field motion, especially in the periphery, produces it most strongly.
- Motion sickness is explained by sensory conflict (James Reason and J. J. Brand, Motion Sickness, 1975): the visual system reports motion that the vestibular system does not, or the reverse. Scroll-jacked parallax, full-screen zooms, large background movement unlinked from the scroll and swaying camera moves produce vection without vestibular input and can cause dizziness and nausea.
- Vestibular dysfunction is common: Yuri Agrawal and colleagues (Archives of Internal Medicine, 2009) estimated from US national survey data that about 35 percent of adults aged 40 and over had evidence of vestibular dysfunction. Sensitivity rises with age, and the luxury audience is older than the web average.
- The OS reduce-motion settings (Apple added Reduce Motion in iOS 7 in 2013 after its zoom transitions made users ill) and WCAG 2.3.3 (Animation from Interactions) exist for these users. Implementation and the keep-or-remove list are in 12-motion-principles-and-ui-motion.md, section 11.

### 15.5 Photosensitive seizures

Photosensitive epilepsy affects about 1 in 4,000 people, and flashes in roughly the 3 to 30Hz band are the main risk, with peak sensitivity around 15 to 20Hz; saturated red flashes are especially provocative. The Pokémon episode "Dennō Senshi Porygon" (broadcast in Japan on 16 December 1997) sent about 685 viewers, mostly children, to hospital after a sequence of red and blue flashes at about 12Hz. WCAG 2.3.1 limits content to no more than three flashes in any one second unless the flashes are below the general and red flash thresholds; broadcasters use the Harding test (Ofcom guidance and ITU-R BT.1702). Campaign films with strobe effects, fast cuts between black and white and flashing type are checked before delivery.

### 15.6 The uncanny valley

Masahiro Mori ("Bukimi no tani", Energy, 1970; English translation by Karl MacDorman and Norri Kageki, IEEE Robotics and Automation Magazine, 2012) proposed that affinity for a humanlike figure rises with human likeness until a point close to human, where it drops sharply into eeriness, and that movement deepens the drop. Jari Kätsyri and colleagues' review (Frontiers in Psychology, 2015) found the best support for a perceptual-mismatch account: discomfort arises when some cues are human and others are not (realistic skin with wrong eye movement). For 2026 work this is the core problem of generative video and digital humans: a synthetic face with lifelike texture but slightly wrong blinks, gaze or lip timing falls into the valley (22-ai-era-craft-and-generative-tools.md). Stylisation away from realism, or complete realism across every cue, both escape it.

### 15.7 Animacy and why easing reads as natural

- Fritz Heider and Marianne Simmel (American Journal of Psychology, 1944) showed a film of geometric shapes moving around a box; almost every viewer described intentions, emotions and a story. Patrice Tremoulet and Jacob Feldman (Perception, 2000) showed that a single dot is seen as alive when it changes direction and speed at once without visible cause.
- Albert Michotte (La perception de la causalité, 1946) showed the launching effect: when one object stops on contact and another moves off, people see the first cause the second's movement; the impression weakens as a pause is inserted at contact and is largely gone once the pause reaches a substantial fraction of a second. A button press whose response starts late is seen as unconnected to it, a perceptual reason for the 100ms feedback limit.
- Gunnar Johansson (Perception and Psychophysics, 1973) showed that about a dozen moving point lights on the joints of a walker are instantly seen as a person, with gender and mood: biological motion is a privileged percept.
- Tamar Flash and Neville Hogan (Journal of Neuroscience, 1985) found that human reaching follows a minimum-jerk trajectory, with a smooth bell-shaped velocity profile: slow start, fast middle, slow end. Ease-in-out curves approximate this profile, which is why they read as made by a hand; linear motion reads as mechanical; a hard stop reads as a collision. Objects are also expected to obey gravity (Myrka Zago and Francesco Lacquaniti's work on internal models of gravity): a falling element that does not accelerate looks wrong.
- Consequence: easing choice is a statement about mass and agency. Heavy, slow ease-out reads as calm and expensive (design-taste, SKILL.md, section 2, slowness); springy overshoot reads as playful and light; linear reads as mechanical and suits only loaders and marquees.

## 16. Sound and multisensory perception

Sound recording, loudness standards and sonic branding craft are in 15-lighting-and-sound.md, sections 9 to 15. This section covers how sound changes what people see.

### 16.1 Audio-visual synchrony

- ITU-R BT.1359-1 ("Relative timing of sound and vision for broadcasting", November 1998) gives detectability thresholds of about 45ms for sound leading picture and about 125ms for sound lagging, and acceptability thresholds of about 90ms leading and about 185ms lagging. EBU Recommendation R37 (2007) sets tighter end-to-end tolerances for broadcast chains, of the order of 40ms sound early and 60ms sound late.
- The asymmetry is ecological: sound travels at about 343m per second, so at 10m a voice arrives about 29ms after the lip movement. The brain expects late sound and tolerates it; early sound never happens in nature and is detected sooner.
- The temporal binding window, the interval within which sight and sound are fused into one event, is roughly 100 to 200ms wide in adults and wider in children; Mark Wallace and Ryan Stevenson (Neuropsychologia, 2014) review its variation. The editing rule that follows: a hit, a footstep or a door slam can be pulled 1 to 2 frames early (about 40 to 80ms at 25fps) and still read as synchronised; lip sync errors beyond about 2 frames late or 1 frame early are visible (16-editing-colour-grading-and-delivery.md).

### 16.2 The McGurk effect and visual capture

- Harry McGurk and John MacDonald ("Hearing lips and seeing voices", Nature, 1976) dubbed an audio "ba" onto video of lips saying "ga"; many viewers heard "da". Vision changes what is heard, and susceptibility varies widely between people. AI dubbing into Hindi and Arabic with unchanged lip movement creates exactly this conflict, which is why lip-synced dubbing reads better than voice replacement over the original mouth (22-ai-era-craft-and-generative-tools.md).
- The ventriloquism effect: sound is perceived as coming from the visible source; a voiceover is "placed" on the speaking face.
- Sound can change what is seen: Ladan Shams, Yukiyasu Kamitani and Shinsuke Shimojo ("What you see is what you hear", Nature, 2000) showed that one flash accompanied by two beeps is seen as two flashes. A sound accent on a cut makes the cut feel sharper; a whoosh on a transition makes it look faster.

### 16.3 Sound shapes perceived image quality

Russell Storms and Michael Zyda ("Interactions in perceived quality of auditory-visual displays", Presence, 2000) found that higher-quality audio raised viewers' ratings of visual quality, and that low-quality audio lowered them. The production consequence: a film with clean, full sound is judged sharper and more expensive than the same picture with thin sound. On a limited budget, the sound mix is the cheapest way to raise perceived production value (15-lighting-and-sound.md, section 13).

### 16.4 Crossmodal correspondences

Charles Spence ("Crossmodal correspondences: a tutorial review", Attention, Perception, and Psychophysics, 2011) reviews systematic matches between features in different senses that most people share:

- Pitch and elevation: higher pitch with higher position; pitch and size: higher pitch with smaller objects; pitch and brightness: higher pitch with lighter colours.
- Shape and sound: Wolfgang Köhler (1929) found people match a rounded shape with "maluma" and a spiky one with "takete"; Vilayanur Ramachandran and Edward Hubbard (2001) reported about 95 percent matching "bouba" to round and "kiki" to spiky. A cross-cultural study by Aleksandra Ćwiek and colleagues (Philosophical Transactions of the Royal Society B, 2022) found the bouba-kiki match in most of the 25 languages tested.
- Taste and shape or sound: sweet with round shapes and high piano notes, bitter and sour with angular shapes and low brass (Anne-Sylvie Crisinel and Spence on "sonic seasoning"). Massimiliano Zampini and Spence (Journal of Sensory Studies, 2004) showed that amplifying the high frequencies of crisp crunch sounds made crisps taste fresher and crisper (an Ig Nobel prize in 2008).
- Music and choice: Adrian North, David Hargreaves and Jennifer McKendrick (Nature, 1997) found French wine outsold German in a supermarket on days when French music played, and the reverse with German music, while few shoppers reported noticing the music.

Design use: a brand's sound, shape, colour and type should point the same way. A jeweller with a fine, high-contrast serif and a light palette pairs with high, sparse, bright sound; a whisky or oud brand with low, warm, rounded sound and heavier forms. Mismatched modalities read as off-brand even when no one can say why. Sonic logos and identity systems are in 15-lighting-and-sound.md, section 15; the published evidence that sonic logos raise recall is mostly commercial research by sonic branding firms, so cite it with care.

## 17. Type perception

Typesetting values are in 03-typography.md; this section is the reading science behind them.

### 17.1 x-height and perceived size

Point size measures the body of the type, an invisible box; the eye judges size mainly by the x-height, the height of lowercase letters without ascenders. At the same point size, a face with a large x-height (Verdana, Georgia, Inter) looks clearly bigger than one with a small x-height (Garamond, Futura). Gordon Legge and Charles Bigelow ("Does print size matter for reading?", Journal of Vision, 2011) argue that x-height in degrees of visual angle is the right size metric: reading speed is roughly constant across a fluent range from about 0.2 degrees of x-height upward, falls steeply below the critical print size near 0.2 degrees, and typical book and newspaper type at reading distance sits just above that critical size. Rules: specify minimum text sizes by x-height for the face in use, raise the size of small-x-height display serifs when they are used for body or captions, and use CSS `font-size-adjust` to hold x-height constant across fallback fonts.

### 17.2 Bouma and the word shape debate

- The word shape (bouma) model holds that skilled readers recognise words by their overall outline, the pattern of ascenders and descenders; the term honours Herman Bouma. It underlies the old claim that lowercase is more legible than ALL CAPS because capitals make every word a rectangle.
- Kevin Larson's "The science of word recognition" (Microsoft Typography, 2004) summarised the evidence against it: readers recognise words through their letters, identified in parallel. Key findings: the word superiority effect (James Cattell, 1886; Gerald Reicher, 1969: a letter is identified better inside a word than alone, which the parallel letter recognition model explains); words in alternating case (cAsE aLtErNaTiNg), which destroys word shape, still show the word superiority effect and become readable with practice; Denis Pelli, Bart Farell and Deborah Moore (Nature, 2003) showed that word recognition efficiency is predicted by letter-by-letter identification. The interactive activation model (James McClelland and David Rumelhart, Psychological Review, 1981) is the classical parallel model.
- What survives of the shape idea: ALL CAPS reads more slowly in continuous text mainly because readers have less practice with it and because capitals are wider, so fewer letters fall in the perceptual span; distinctive letter shapes (well-differentiated letters such as a, e, g and the separation of I, l and 1) matter because letters are the unit.
- House position: Larson's account. Set long text in lowercase because readers are practised in it; keep ALL CAPS for short labels with added tracking (03-typography.md, section 4); choose faces with distinct letterforms for small sizes and signage.

### 17.3 Spacing and reading speed

- Letter spacing: Susana Chung (Investigative Ophthalmology and Visual Science, 2002) found that reading speed rises as letter spacing increases to about the standard spacing of the font and does not improve with extra spacing for typical readers; tightening below standard slows reading (crowding, section 4.3).
- Marco Zorzi and colleagues ("Extra-large letter spacing improves reading in dyslexia", PNAS, 2012) found that Italian and French children with dyslexia read faster and more accurately with extra letter and word spacing, consistent with stronger crowding in dyslexia.
- Line spacing: leading of about 1.4 to 1.6 times the font size for body text on screen gives the eye a clear return path; WCAG 1.4.12 (Text Spacing) requires that content survive user overrides of line height to 1.5, paragraph spacing to 2 times, letter spacing to 0.12 times and word spacing to 0.16 times the font size.

### 17.4 Serif and sans legibility

The evidence shows no reliable difference in legibility or reading speed between well-designed serif and sans serif faces at normal sizes, in print or on modern screens (Tinker, 1963; Aries Arditi and Jianna Cho, "Serifs and font legibility", Vision Research, 2005, found serifs slightly improved legibility at very small sizes, consistent with the slightly larger letter spacing serifs create). The old screen rule (sans for screens) came from low-resolution displays where serifs rendered as noise; at 2x and 3x pixel densities it no longer applies. Choose by voice, x-height, letter distinctness and rendering at the smallest size used; the serif or sans label decides nothing (design-taste, references/type.md, for the taste choice).

### 17.5 Dyslexia fonts examined

Dyslexia affects word decoding and is common (estimates for English-speaking populations are often given as about 5 to 10 percent, depending on the definition). Special fonts claim to help by weighting the bottoms of letters or making letters more distinct.

| Font | Claim | Evidence |
|---|---|---|
| OpenDyslexic (Abelardo Gonzalez, 2011) | Weighted bottoms prevent letters "rotating" | Jessica Wery and Jennifer Diliberto (Annals of Dyslexia, 2017) found no improvement in reading rate or accuracy for students with dyslexia; Luz Rello and Ricardo Baeza-Yates (ASSETS, 2013) found it no better than standard fonts |
| Dyslexie (Christian Boer, 2008) | Distinct, weighted letterforms | Sietske Kuster and colleagues (Annals of Dyslexia, 2018) found no benefit for children with or without dyslexia over Arial |
| Standard sans serif, roman (upright), monospaced | No special claim | Rello and Baeza-Yates found sans serif, monospaced and roman styles read better than italic for readers with dyslexia; the British Dyslexia Association Style Guide recommends sans serif at 12 to 14 point, line spacing of 1.5 and increased letter spacing |

House position: no special font. What helps is size, spacing (letter, word and line), a clear sans or serif with distinct letterforms, short lines, left alignment and no italic body text. These help every reader.

### 17.6 Line length research

- Mary Dyson and Mark Haselgrove ("The influence of reading speed and line length on the effectiveness of reading from screen", International Journal of Human-Computer Studies, 2001) found that a medium line length of about 55 characters per line supported effective reading at normal and fast speeds, while very long lines (100 characters) were read faster in some conditions without a gain in comprehension; Dyson and Gary Kipping (1998) had earlier found long lines read faster when scrolling.
- Wichita State University's Software Usability Research Laboratory (Usability News, 2005) published studies by Jason Baker and by A. Dawn Shaikh comparing line lengths and column layouts online: longer lines (about 95 characters) could be read faster, and readers preferred shorter or medium lines, with multi-column text helping only in some conditions.
- Synthesis: speed and preference diverge. Readers prefer and comprehend comfortably at about 45 to 75 characters (Bringhurst's range, 66 ideal); very long lines can be read faster by skimmers at some cost to comfort and line finding. The house keeps 55 to 70 for long reading (design-taste's narrower range, 03-typography.md, section 6.1) because luxury content is read for pleasure, and allows longer measures only for scannable reference content.

### 17.7 Contrast polarity and dark mode

- Positive polarity (dark text on light ground) produces better proofreading accuracy and legibility than negative polarity in daylight conditions: Axel Buchner and Nina Baumgartner (Ergonomics, 2007), Cosima Piepenbrock, Susanne Mayr, Iris Mund and Buchner (Ergonomics, 2013), with the advantage larger for small text. Piepenbrock, Mayr and Buchner (Ergonomics, 2014) linked the advantage to smaller pupils under bright screens (section 1.5).
- Jonathan Dobres and colleagues (Applied Ergonomics, 2017) found the positive polarity advantage shrinks in dark ambient conditions.
- Negative polarity causes halation for many readers with astigmatism: light text appears to bleed into the dark ground, worse with thin weights and pure white on pure black.
- Design consequences: light mode as the default for long reading (the house white ground, design-taste SKILL.md section 7); dark mode as an ambient-light option and for cinematic showcases, set with off-white text, slightly heavier weights or grades, and generous size (06-ui-design-craft.md, section 15). WCAG 2.x contrast ratios are polarity-blind; APCA is polarity-aware (04-colour.md, section 6).

### 17.8 Visual angle for type at distance

Computed from size = 2 x distance x tan(angle / 2). The 5 arcminute column is the height of a letter at the 20/20 identification limit; 0.2 degrees of x-height is near the critical print size for fluent reading (Legge and Bigelow); 0.5 and 1 degree of x-height are comfortable for glance reading of signs, supers and hoardings, where the reader has a second or two.

| Viewing distance | Typical surface | Letter height at 20/20 limit (5 arcmin) | x-height at 0.2 degrees | x-height at 0.5 degrees | x-height at 1 degree |
|---|---|---|---|---|---|
| 35cm | Phone | 0.5mm | 1.2mm | 3.1mm | 6.1mm |
| 60cm | Laptop, desktop | 0.9mm | 2.1mm | 5.2mm | 10.5mm |
| 3m | Television, meeting-room screen | 4.4mm | 10.5mm | 26mm | 52mm |
| 10m | Event stage screen, shopfront | 15mm | 35mm | 87mm | 175mm |
| 50m | Roadside hoarding | 73mm | 175mm | 436mm | 873mm |
| 150m | Large-format OOH on a highway | 218mm | 524mm | 1.31m | 2.62m |

Consequences: a 16px body size on a laptop (x-height about 8px, about 2.1mm on a typical display) sits near 0.2 degrees, the floor for fluent reading, which is why 16px is a minimum and 18 to 20px is comfortable. A deck projected to a room at 6m needs body x-heights of at least about 21mm on the screen. A hoarding on Sheikh Zayed Road or the Mumbai Western Express Highway read at 150m by a driver at 80 to 100km per hour has a few seconds of exposure, so its headline needs an x-height of well over a metre and a word count in single digits (20-print-packaging-ooh-and-physical-production.md).

### 17.9 Script-specific perception

- Devanagari: letters hang from the shirorekha (headline), conjuncts stack and matras (vowel signs) sit above and below the line, so the script needs more vertical space and a larger size than Latin for equal legibility; tight leading clips matras and crowding inside conjuncts makes small sizes fail before Latin does.
- Arabic: the reading direction reverses the perceptual span (section 4.2); letter identity depends on joining form and dots, so small sizes and low resolution fail on dot clarity; Arabic is usually set visually larger than Latin to match apparent size.
- Bilingual layouts match the scripts by apparent size and colour (texture density), because equal point sizes produce unequal apparent sizes; details in 03-typography.md, section 15.

## 18. Attention economics in feeds

### 18.1 The economics

Herbert Simon (1971): "a wealth of information creates a poverty of attention". In a feed, every piece of content competes for the next fixation against effectively unlimited alternatives, and the user's thumb is the decision. The perceptual science in sections 2, 6 and 10 predicts most of what platform data shows.

### 18.2 The first-second decision

- Facebook IQ ("Capturing attention in feed: the science behind effective video creative", 20 April 2016) reported tests by Fors Marsh Group showing that people could recall mobile feed content at a statistically significant rate after 0.25 seconds of exposure, and that people spent on average 1.7 seconds with a piece of content on mobile against 2.5 seconds on desktop.
- Combined with Lindgaard's 50ms aesthetic judgement (section 10.5), gist extraction in about 100ms (section 1.2) and visceral processing (section 10.1), the evidence supports a first-second decision: the thumb stops or continues on the basis of the first frame or two, its contrast, its faces, its motion and its novelty, before any copy is read.
- Design consequences: the first frame is a poster (it must work as a still); motion must already be under way at frame one; the brand must be legible within the first two seconds (16-editing-colour-grading-and-delivery.md, section 3); text on the first frame must be readable at the visual angle of a phone in the hand (section 17.8).

### 18.3 Thumb-stop and the metrics

- Thumb-stop ratio is an industry metric that no platform reports by name: 3-second video plays divided by impressions, the share of people who stopped scrolling. Hook rate is often used for the same ratio.
- Hold rate: ThruPlays (Meta's count of plays to completion or to at least 15 seconds) divided by 3-second plays, the share of stoppers who stayed.
- TikTok Ads Manager reports 2-second and 6-second video views; YouTube Studio reports audience retention with "key moments" (intro, top moments, spikes, dips). Platform metric names and definitions change; check 26-platform-and-format-specs-2026.md and 17-short-form-social-and-platform-craft.md before quoting one to a client.

### 18.4 Reading the retention curve

A retention curve plots the share of viewers still watching against time. Its standard shape is a steep drop in the first seconds (the thumb-stop decision), then a slower decline. What to read:

- The initial drop: the opening failed to stop or to promise. Fix the first frame and the first line.
- A slope that keeps falling steeply: the content does not deliver on the promise. Fix the structure.
- A dip at a specific moment: something there loses people (a logo hold, a slow transition, a talking head without a cut). Cut it.
- A spike: rewatching or scrubbing back, usually to a dense or surprising moment; build on it.
- A flat tail: committed viewers; the ending and the call to action can be longer than feared.

### 18.5 Habituation and wear-out

Habituation is the decrease in response to a repeated stimulus that carries no consequence (Richard Thompson and William Spencer, Psychological Review, 1966, set out its parameters); the orienting response to novelty (Evgeny Sokolov, 1963) returns when the stimulus changes (dishabituation). In feeds this predicts creative wear-out: the same execution loses stopping power with repeated exposure to the same people, while mere exposure (section 12.2) keeps building liking for the brand assets. The resolution is consistent assets in fresh executions: hold the colour, the type, the sound and the character constant (section 6.9) and change the scene, the opening and the cut. A whole category habituates too: in October every Indian jewellery brand runs red and gold Diwali creative, so the feed habituates to the category code itself (design-taste, SKILL.md, section 4, "what we are not doing").

### 18.6 Pattern interrupts

A pattern interrupt is a deliberate break in an expected pattern that triggers an orienting response. Its perceptual mechanisms are covered above: abrupt onset and looming (section 2.3), faces and gaze (section 2.3), the isolation effect (section 6.6), a change of sound or a silence (section 16), a change in scale or speed. Saeideh Bakhshi, David Shamma and Eric Gilbert ("Faces engage us", CHI 2014) found Instagram photos with faces received about 38 percent more likes and 32 percent more comments than photos without. For luxury work, the strongest interrupt in a loud feed is often stillness: a quiet, slow, single-subject frame is the isolated item among saturated, fast, text-heavy content, and it fits the brand register (design-taste, SKILL.md, section 2, slowness).

### 18.7 Evidence and folklore

| Claim | Status | What to say instead |
|---|---|---|
| "Human attention span is 8 seconds, less than a goldfish" | Folklore: from a 2015 Microsoft Canada marketing report citing a secondary website, with no traceable study; attention span is task dependent and has no single value | Gloria Mark (Attention Span, 2023) measured average time on one screen before switching at about 47 seconds in recent studies, down from about 2.5 minutes in 2004; this measures switching behaviour in office work and says nothing about a capacity limit |
| "The first 3 seconds decide the view" | Supported in direction by platform data and the perception research above; the exact second varies by platform and audience | The first frame and first second decide whether the viewer stops; the next seconds decide whether they stay |
| "85 percent of video is watched without sound" | Dated: a 2016 trade-press figure about Facebook autoplay video from publishers; sound-on viewing is the norm on TikTok, Reels and Shorts in 2026 | Design for both: captions and supers carry the message, sound carries the feeling (15-lighting-and-sound.md, section 14) |
| "Faces increase engagement" | Supported (Bakhshi and colleagues, 2014; gaze-cueing research) | Use a face when a person is the story; direct the gaze to the product when the product is |
| "Bright colours stop the scroll" | Partly: contrast with the surrounding feed stops the scroll, and a feed full of bright colour makes muted work the contrast | Test against the real feed context; a white artboard predicts nothing about the feed |
| "People do not read on mobile" | False for motivated readers (section 4.6) | People read on mobile when the content earns it; they scan when it does not |

## 19. The numbers a designer should know

| Quantity | Value | Source and section |
|---|---|---|
| Foveal field of sharp vision | About 1 to 2 degrees (a thumbnail at arm's length) | Section 1.1 |
| Visual acuity, 20/20 | 1 arcminute detail; letters 5 arcminutes tall | Section 1.3 |
| CSS reference pixel | About 0.0213 degrees (1/96 inch at about 71cm) | CSS Values and Units; section 1.3 |
| Phone viewing distance | About 32 to 36cm | Bababekova and colleagues, 2011 |
| Contrast sensitivity peak | About 2 to 5 cycles per degree | Section 1.4 |
| Luminance JND (Weber fraction) | About 1 percent on large fields | Section 1.4 |
| Preattentive processing | Under about 200 to 250ms | Section 2.1 |
| Efficient and inefficient search slopes | Under about 10ms per item; about 20 to 30ms per item (target present) | Wolfe; section 2.2 |
| Fixation duration | About 225 to 250ms reading; about 260 to 330ms scenes | Rayner; section 4.1 |
| Reading saccade | About 20 to 40ms; 7 to 9 letters | Rayner; section 4.1 |
| Saccade latency | About 150 to 250ms | Section 4.1 |
| Smooth pursuit limit | About 30 degrees per second | Section 4.1 |
| Perceptual span (English) | About 3 to 4 letters left, 14 to 15 right | McConkie and Rayner, 1975 |
| Crowding (Bouma) | Critical spacing about 0.5 x eccentricity | Bouma, 1970 |
| Silent reading speed | About 238 wpm non-fiction, 260 fiction; oral about 183 | Brysbaert, 2019 |
| Working memory | About 4 plus or minus 1 chunks | Cowan, 2001 |
| Attentional blink | About 200 to 500ms after a first target | Section 6.1 |
| First aesthetic impression | 50ms (17 to 50ms in later work) | Lindgaard 2006; Tuch 2012 |
| Feed recall | 0.25 seconds of exposure; 1.7 seconds average dwell on mobile | Facebook IQ, 2016 |
| Response time limits | 100ms instantaneous; 1s flow; 10s attention | Nielsen, 1993 |
| Doherty threshold | 400ms | Doherty and Thadani, 1982 |
| Interaction to Next Paint, good | 200ms or less | Core Web Vitals, March 2024 |
| Fitts's law | MT = a + b x log2(D/W + 1); mouse throughput about 3.7 to 4.9 bits per second | MacKenzie, 1992; Soukoreff and MacKenzie, 2004 |
| Hick-Hyman law | RT = a + b x log2(n + 1) | Hick, 1952; Hyman, 1953 |
| Touch accuracy | About 7mm at screen centre to about 12mm at corners (95 percent of taps) | Hoober, 2017 |
| Minimum target sizes | WCAG 2.5.8: 24 x 24 CSS px (AA); 2.5.5: 44 x 44 (AAA); Apple 44 x 44pt; Material 48 x 48dp (7.6mm) | Section 8.1 |
| One-handed phone use | 49 percent one hand, 36 percent cradled, 15 percent two hands; about 75 percent of touches by one thumb | Hoober, 2013 and 2017 |
| Stevens exponents | Brightness about 0.33; loudness about 0.67; length about 1.0; area about 0.7 | Stevens, 1957 and 1975 |
| Area to look twice as large | About 2.7 times the area | Section 8.12 |
| Loudness doubling | About +10 dB | Section 8.12 |
| Text contrast (WCAG 2.2) | 4.5:1 body (AA), 3:1 large text and UI components, 7:1 body (AAA) | 04-colour.md, section 6 |
| Critical print size | About 0.2 degrees of x-height | Legge and Bigelow, 2011 |
| Body measure | 45 to 75 characters; house 55 to 70 | Section 17.6 |
| Flicker fusion | About 50 to 90Hz typical; artefacts visible up to about 500Hz with eye movement | Section 15.3 |
| Flash limit | No more than 3 flashes in any 1 second (WCAG 2.3.1); peak seizure risk about 15 to 20Hz | Section 15.5 |
| Cinema frame rate | 24fps, shown at 48 or 72 flashes per second | Section 15.3 |
| Apparent motion window | Frame intervals of a few tens of milliseconds | Section 15.1 |
| Vestibular dysfunction | About 35 percent of US adults aged 40 and over | Agrawal and colleagues, 2009 |
| Audio-visual sync, detectable | Sound about 45ms early or 125ms late | ITU-R BT.1359-1 |
| Audio-visual sync, acceptable | Sound about 90ms early or 185ms late | ITU-R BT.1359-1 |
| Sound delay in air | About 2.9ms per metre | Section 16.1 |
| Loss aversion coefficient | About 1.96 | Brown and colleagues, 2024 |
| Default effect | d about 0.68 | Jachimowicz and colleagues, 2019 |
| Red-green colour vision deficiency | About 8 percent of men, 0.5 percent of women (European descent) | 04-colour.md, section 13 |
| Above the fold | About 57 percent of viewing time; 74 percent in the first two screens | Fessenden, 2018 |

## Terms introduced

- Abney effect: the apparent shift in hue when white is added to a colour at constant wavelength.
- Aesthetic-usability effect: the tendency to judge attractive designs as easier to use.
- Affordance: an action possibility arising from the relation between an object's properties and an agent's capabilities (Gibson; Norman).
- Anchoring: the pull of an initial number on later estimates and judgements.
- Apparent motion: the perception of continuous motion from a sequence of still images.
- Assimilation (Bezold effect): fine patterns taking on the colour of adjacent elements, the opposite of simultaneous contrast.
- Attentional blink: the failure to report a second target arriving about 200 to 500ms after a first.
- Attentional synchrony: the convergence of many viewers' gaze on the same point in edited video.
- Banner blindness: the learned tendency to ignore anything that looks like an advertisement.
- Bartleson-Breneman effect: the fall in perceived image contrast as the viewing surround darkens.
- Beta movement: the perception of an object moving between two positions shown in sequence.
- Bezold-Brücke shift: the apparent change in hue with changing intensity.
- Biological motion: the immediate perception of a living body from a few moving points of light.
- Bouma (word shape): the outline of a word formed by ascenders and descenders, once thought to be the unit of recognition.
- Bouma's law: crowding occurs when flankers are closer than about half the target's eccentricity.
- Change blindness: the failure to notice a change between two views separated by a disruption.
- Choice overload: reduced choosing or satisfaction when options are too many, under specific conditions.
- Chromatic adaptation: the visual system's normalisation to the prevailing illuminant.
- Chunk: a unit of information bound by prior knowledge that occupies one working memory slot.
- Closure: the completion of incomplete figures by the visual system.
- Cognitive load theory: Sweller's account of learning and use as limited by working memory load.
- Colour constancy: the perception of stable object colour across changes in illumination.
- Common fate: grouping of elements that move or change together.
- Common region: grouping of elements that share a bounded area.
- Conceptual model: the user's explanation of how a system works, built from the system image.
- Constraints: physical, cultural, semantic and logical limits that restrict possible actions.
- Contrast sensitivity function: the eye's sensitivity to contrast as a function of spatial frequency.
- Costly signalling: credible communication of a hidden quality through a signal that is expensive to fake.
- Critical flicker fusion frequency: the rate at which a flickering light appears steady.
- Critical print size: the smallest print size, about 0.2 degrees of x-height, that still supports maximum reading speed.
- Crossmodal correspondence: a systematic match between features in different senses shared by most people.
- Crowding: impaired recognition of an object in the periphery caused by nearby objects.
- CSS reference pixel: the visual angle of one pixel at 96 dpi viewed from about 71cm, about 0.0213 degrees.
- Deceptive pattern: an interface designed to make people act against their intent for the business's benefit.
- Decoy effect (asymmetric dominance): a shift of choice towards an option made to dominate an added inferior option.
- Default effect: the tendency to stay with a pre-selected option.
- Distinctive brand asset: a sensory element that triggers the brand without its name.
- Doherty threshold: the response time, about 400ms, below which productivity rises sharply.
- Dual coding theory: Paivio's account of memory in separate verbal and non-verbal codes.
- Element interactivity: the number of elements that must be processed together to understand a task.
- Endowment effect: valuing something more because one owns it.
- Expertise reversal effect: guidance that helps novices but burdens experts.
- Extraneous load: cognitive load imposed by presentation that does not serve the task.
- F-pattern: a scanning pattern of top lines and left edge, caused by unstructured text.
- Feature integration theory: Treisman's account of parallel feature maps bound by serial attention.
- Fechner's law: sensation grows with the logarithm of stimulus intensity.
- Feedback: immediate, informative communication of the result of an action.
- Figure and ground: the assignment of a region as the object (figure) against a shapeless background (ground).
- Fitts's law: movement time grows with log2 of distance over width plus one.
- Fixation: a pause between saccades during which visual information is taken in.
- Fovea and foveola: the central retinal pit of about 5 degrees and its rod-free centre of about 1 to 2 degrees.
- Framing: the change in choice produced by describing equivalent options differently.
- Germane load: working memory resources devoted to schema building or to handling intrinsic load.
- Gestalt: the school of psychology that described how parts are organised into wholes.
- Goal-gradient effect: effort increasing as a goal approaches.
- Good continuation: grouping of elements that lie along a smooth line or curve.
- Guided search: Wolfe's model in which feature maps guide attention towards likely targets.
- Gulfs of execution and evaluation: the gaps between intention and available action, and between system state and its interpretation.
- Habituation: a decreasing response to a repeated stimulus without consequence.
- Halo effect: one positive trait colouring judgements of unrelated traits.
- Helmholtz-Kohlrausch effect: saturated colours appearing brighter than their luminance predicts.
- Hick-Hyman law: choice reaction time grows with log2 of the number of equally likely options plus one.
- Hold rate: completed or 15-second plays divided by 3-second plays.
- Hunt effect: colourfulness increasing with luminance.
- IKEA effect: valuing more what one helped to make.
- Inattentional blindness: failure to see an unexpected object in plain view while attending elsewhere.
- Index of difficulty: the log2 term of Fitts's law, measured in bits.
- Intrinsic load: cognitive load set by the inherent complexity of the material for a given user.
- Jakob's law: users expect a site to work like the other sites they use.
- Just noticeable difference: the smallest detectable change in a stimulus.
- Kansei engineering: Nagamachi's method of translating customer feelings into design parameters.
- Launching effect: the perception of causality when one object stops on contact and another moves off.
- Layer-cake pattern: a scanning pattern of headings with selective reading beneath them.
- Legibility: the ease of identifying individual characters and words.
- Loss aversion: losses weighing more than equal gains, by a factor of about 2.
- Mach bands: illusory light and dark stripes at the edges of a luminance step.
- Mapping: the relationship between controls and their effects.
- MAYA: Loewy's "most advanced, yet acceptable" rule for novelty within typicality.
- McGurk effect: visible lip movements changing the speech sound heard.
- Mental availability: the likelihood that a brand comes to mind in buying situations.
- Mental model: a person's simplified internal representation of how something works.
- Mere exposure effect: increased liking through repeated exposure.
- Metamerism: different spectra matching under one illuminant or for one observer and differing under another.
- Minimum-jerk trajectory: the smooth, bell-shaped velocity profile of human reaching movements.
- Modality effect: increased effective capacity when information is split between speech and image.
- Nudge: a choice architecture change that alters behaviour without forbidding options or changing incentives significantly.
- Opponent process: the recoding of cone signals into light-dark, red-green and blue-yellow channels.
- Ovsiankina effect: the tendency to resume interrupted tasks.
- Parafoveal vision: the region from about 1 to 5 degrees around fixation that supplies the reading preview.
- Pattern interrupt: a deliberate break in an expected pattern that triggers an orienting response.
- Peak-end rule: remembered experience judged mainly by its most intense moment and its end.
- Perceptual load theory: Lavie's account in which a demanding task filters out distractors and an easy one admits them.
- Perceptual span: the region of text used during one fixation.
- Persistence of vision: a discredited explanation of film motion by retinal afterimages.
- Phantom array effect: flicker artefacts seen during eye movements across high-frequency flickering light.
- Phi phenomenon: objectless motion seen between two alternately flashing lights.
- Picture superiority effect: better memory for pictures than for words.
- Positive and negative polarity: dark text on a light ground, and light text on a dark ground.
- Postel's law: be conservative in what you send and liberal in what you accept.
- Prägnanz: the visual system's preference for the simplest, most regular interpretation.
- Preattentive processing: parallel analysis of simple features across the visual field before attention.
- Processing fluency: the subjective ease of processing, misattributed to liking and truth.
- Prototypicality: how typical an object is of its category.
- Proximity: grouping of elements that are close together.
- Readability: the ease of reading and understanding continuous text.
- Recognition over recall: the advantage of identifying from cues over generating from memory.
- Redundancy effect: impaired understanding when the same information is presented twice in different forms.
- Regression: a saccade back to earlier text.
- Retention curve: the share of viewers still watching plotted against time.
- Saccade: a rapid ballistic eye movement between fixations.
- Saccadic suppression: the reduction of vision during a saccade.
- Saliency: bottom-up conspicuity of a region computed from local feature contrast.
- Serial position effect: better memory for the first and last items of a list.
- Signalling theory: the study of how hidden qualities are conveyed through observable signals.
- Signifier: a perceivable cue that communicates where and how to act.
- Similarity: grouping of elements that share colour, size, shape or texture.
- Simultaneous contrast: a colour shifting towards the complement of its surround.
- Sludge: friction that makes the beneficial choice harder.
- Smooth pursuit: eye movement that keeps a moving object on the fovea, accurate up to about 30 degrees per second.
- Social proof: following what similar others do.
- Split-attention effect: added load when related information is separated in space or time.
- Spotted pattern: a scanning pattern of fixations on scattered salient or sought words.
- Stevens effect: perceived contrast increasing with luminance.
- Stevens's power law: perceived magnitude equals a constant times intensity raised to a continuum-specific exponent.
- System 1 and System 2: Kahneman's fast automatic mode and slow deliberate mode of thinking.
- Temporal binding window: the interval within which sight and sound are fused into one event.
- Tesler's law: the inherent complexity of a task can only be moved between user and system.
- Throughput: Fitts's index of difficulty divided by movement time, in bits per second.
- Thumb-stop ratio: 3-second video plays divided by impressions.
- Trichromacy: colour vision based on three cone types.
- Uncanny valley: the drop in affinity for nearly human figures.
- Uniform connectedness: grouping of elements joined by uniform visual properties.
- Unity: Cialdini's seventh principle, influence through shared identity.
- Vection: the illusion of self-motion produced by a moving visual field.
- Ventriloquism effect: perceived sound location captured by a visible source.
- Visual angle: the angle an object subtends at the eye.
- Von Restorff effect: better memory for the item that differs from the rest.
- Weber's law: the just noticeable difference is a constant fraction of stimulus magnitude.
- Word superiority effect: better identification of a letter inside a word than alone.
- Working memory: the small store holding information in active use, about 4 chunks.
- x-height: the height of lowercase letters without ascenders, the main cue to perceived type size.
- Zeigarnik effect: the claimed better memory for interrupted tasks, poorly replicated.

## Sources and further reading

Books

- Josef Albers, Interaction of Color, 1963; Robert Cialdini, Influence, 1984 (new and expanded edition 2021) and Pre-Suasion, 2016.
- Anjan Chatterjee, The Aesthetic Brain, 2014; Semir Zeki, Inner Vision, 1999; Daniel Berlyne, Aesthetics and Psychobiology, 1971.
- James J. Gibson, The Ecological Approach to Visual Perception, 1979; Kurt Koffka, Principles of Gestalt Psychology, 1935.
- Daniel Kahneman, Thinking, Fast and Slow, 2011; Richard Thaler and Cass Sunstein, Nudge: The Final Edition, 2021.
- Don Norman, The Design of Everyday Things, revised and expanded edition, 2013; Emotional Design, 2004.
- Colin Ware, Information Visualization: Perception for Design, fourth edition, 2020; Stephen Palmer, Vision Science: Photons to Phenomenology, 1999.
- Margaret Livingstone, Vision and Art: The Biology of Seeing, 2002; Mario Livio, The Golden Ratio, 2002.
- Miles Tinker, Legibility of Print, 1963; Keith Rayner and colleagues, The Psychology of Reading, second edition, 2012.
- Harry Brignull, Deceptive Patterns, 2023; BJ Fogg, Tiny Habits, 2019; Gloria Mark, Attention Span, 2023.
- Jean-Noël Kapferer and Vincent Bastien, The Luxury Strategy, second edition, 2012; Byron Sharp, How Brands Grow, 2010; Jenni Romaniuk, Building Distinctive Brand Assets, 2018.
- Jon Yablonski, Laws of UX, 2020; Raymond Loewy, Never Leave Well Enough Alone, 1951; Charles Spence, Gastrophysics, 2017.
- Richard Mayer, Multimedia Learning, third edition, 2020; Jakob Nielsen, Usability Engineering, 1993; Thorstein Veblen, The Theory of the Leisure Class, 1899.

Specifications and standards

- WCAG 2.2, W3C Recommendation, 5 October 2023 (edition 12 December 2024), success criteria 1.4.1, 1.4.3, 1.4.12, 2.3.1, 2.3.3, 2.5.5, 2.5.8. https://www.w3.org/TR/WCAG22/
- ITU-R BT.1359-1 (11/98), Relative timing of sound and vision for broadcasting. https://www.itu.int/rec/R-REC-BT.1359/en
- ITU-R BT.1702, Guidance for the reduction of photosensitive epileptic seizures caused by television. https://www.itu.int/rec/R-REC-BT.1702/en
- EBU Recommendation R37, The relative timing of the sound and vision components of a television signal, 2007. https://tech.ebu.ch/
- ISO 9241-411:2012, Evaluation methods for the design of physical input devices. https://www.iso.org/
- CSS Values and Units Module Level 4 (reference pixel). https://www.w3.org/TR/css-values-4/
- Central Consumer Protection Authority, Guidelines for Prevention and Regulation of Dark Patterns, 2023 (30 November 2023). https://consumeraffairs.gov.in/
- Regulation (EU) 2022/2065, Digital Services Act, Article 25; Directive 2005/29/EC, Unfair Commercial Practices Directive. https://eur-lex.europa.eu/
- Federal Trade Commission, Bringing Dark Patterns to Light, staff report, September 2022. https://www.ftc.gov/

Articles and talks

- Kara Pernice, F-shaped pattern of reading on the web, Nielsen Norman Group, 12 November 2017. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Kara Pernice, Text scanning patterns: eyetracking evidence, 25 August 2019. https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/ ; Layer-cake pattern, 4 August 2019. https://www.nngroup.com/articles/layer-cake-pattern-scanning/
- Kara Pernice, Banner blindness revisited, 22 April 2018. https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
- Therese Fessenden, Scrolling and attention, 15 April 2018. https://www.nngroup.com/articles/scrolling-and-attention/
- Kate Moran, Reading content on mobile devices, 11 December 2016. https://www.nngroup.com/articles/mobile-content/ ; Kim Flaherty, Zigzag image-text layouts, 26 November 2017. https://www.nngroup.com/articles/zigzag-page-layout/
- Steven Hoober, Design for fingers, touch, and people, part 1, UXmatters, 6 March 2017. https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php
- Steven Hoober, How do users really hold mobile devices?, UXmatters, 2013. https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
- Kevin Larson, The science of word recognition, Microsoft Typography, 2004. https://learn.microsoft.com/en-us/typography/develop/word-recognition
- Facebook IQ, Capturing attention in feed: the science behind effective video creative, 20 April 2016. https://www.facebook.com/business/news/insights/capturing-attention-feed-video-creative
- Harry Brignull and contributors, Deceptive patterns: types, as of October 2026. https://www.deceptive.design/types ; Jon Yablonski, Laws of UX. https://lawsofux.com/
- Jakob Nielsen, Response times: the 3 important limits, 1993. https://www.nngroup.com/articles/response-times-3-important-limits/
- Perception and attention: Treisman and Gelade, Cognitive Psychology, 1980; Itti, Koch and Niebur, IEEE TPAMI, 1998; Simons and Chabris, Perception, 1999; Rensink, O'Regan and Clark, Psychological Science, 1997; Cowan, Behavioral and Brain Sciences, 2001; Wagemans and colleagues, Psychological Bulletin, 2012.
- Reading and type: McConkie and Rayner, Perception and Psychophysics, 1975; Bouma, Nature, 1970; Pelli and Tillman, Nature Neuroscience, 2008; Brysbaert, Journal of Memory and Language, 2019; Legge and Bigelow, Journal of Vision, 2011; Arditi and Cho, Vision Research, 2005; Dyson and Haselgrove, International Journal of Human-Computer Studies, 2001; Piepenbrock and colleagues, Ergonomics, 2013; Wery and Diliberto, Annals of Dyslexia, 2017; Kuster and colleagues, Annals of Dyslexia, 2018; Zorzi and colleagues, PNAS, 2012.
- Interaction laws: Fitts, Journal of Experimental Psychology, 1954; MacKenzie, Human-Computer Interaction, 1992; Soukoreff and MacKenzie, International Journal of Human-Computer Studies, 2004; Hick, Quarterly Journal of Experimental Psychology, 1952; Kurosu and Kashimura, CHI 1995; Kivetz, Urminsky and Zheng, Journal of Marketing Research, 2006.
- Aesthetics and signalling: Reber, Schwarz and Winkielman, Personality and Social Psychology Review, 2004; Hekkert, Snelders and van Wieringen, British Journal of Psychology, 2003; Lindgaard and colleagues, Behaviour and Information Technology, 2006; Tuch and colleagues, International Journal of Human-Computer Studies, 2012; Bar and Neta, Psychological Science, 2006; Green, Perception, 1995; Han, Nunes and Drèze, Journal of Marketing, 2010; Berger and Ward, Journal of Consumer Research, 2010; Sevilla and Townsend, Journal of Marketing Research, 2016; Pracejus, Olsen and O'Guinn, Journal of Consumer Research, 2006.
- Judgement and persuasion: Tversky and Kahneman, Science, 1974 and 1981; Brown, Imai, Vieider and Camerer, Journal of Economic Literature, 2024 (https://www.aeaweb.org/articles?id=10.1257/jel.20221698); Johnson and Goldstein, Science, 2003; Jachimowicz and colleagues, Behavioural Public Policy, 2019; Goldstein, Cialdini and Griskevicius, Journal of Consumer Research, 2008; Iyengar and Lepper, Journal of Personality and Social Psychology, 2000; Scheibehenne, Greifeneder and Todd, Journal of Consumer Research, 2010; Mertens and colleagues, PNAS, 2022; Maier and colleagues, PNAS, 2022; Susser, Roessler and Nissenbaum, Georgetown Law Technology Review, 2019; Mathur and colleagues, Dark patterns at scale, CSCW 2019.
- Colour, motion and multisensory: Jonauskaite and colleagues, Psychological Science, 2020; Palmer and Schloss, PNAS, 2010; Steinman, Pizlo and Pizlo, Vision Research, 2000; Anderson and Anderson, Journal of Film and Video, 1993; Davis, Hsieh and Lee, Scientific Reports, 2015; Agrawal and colleagues, Archives of Internal Medicine, 2009; Mori, translated by MacDorman and Kageki, IEEE Robotics and Automation Magazine, 2012; Flash and Hogan, Journal of Neuroscience, 1985; McGurk and MacDonald, Nature, 1976; Shams, Kamitani and Shimojo, Nature, 2000; Storms and Zyda, Presence, 2000; Spence, Attention, Perception, and Psychophysics, 2011; North, Hargreaves and McKendrick, Nature, 1997.
