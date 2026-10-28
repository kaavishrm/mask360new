# AI-era craft: generative tools, prompting as direction, rights, tells

What this file is for: how Mask360 uses generative image, video, audio, 3D, design and code tools at a luxury standard without letting them set the taste. The taste layer itself lives in the design-taste skill; this is the craft, tooling and legal layer beneath it. As of October 2026.

## Table of contents

1. [The stance](#1-the-stance)
2. [The landscape as of October 2026](#2-the-landscape-as-of-october-2026)
3. [Prompting as art direction](#3-prompting-as-art-direction)
4. [Prompt library by Mask360 category](#4-prompt-library-by-mask360-category)
5. [The tells and the fix for each](#5-the-tells-and-the-fix-for-each)
6. [Hybrid workflows that hold a luxury standard](#6-hybrid-workflows-that-hold-a-luxury-standard)
7. [Rights and law as of October 2026](#7-rights-and-law-as-of-october-2026)
8. [Quality control and process](#8-quality-control-and-process)
9. [AI in UX and UI design](#9-ai-in-ux-and-ui-design)
10. [AI and taste](#10-ai-and-taste)
11. [Reference tables](#11-reference-tables)
12. [Terms introduced](#terms-introduced)
13. [Sources and further reading](#sources-and-further-reading)

## 1. The stance

The machine supplies speed and breadth: 200 explorations in an afternoon, a set extension in an hour, a previs (pre-visualisation: a rough moving sketch of a film made before the shoot to test framing, pace and coverage) before the client meeting. The person supplies the decision and the standard: which two of the 200 survive, why, and what is still wrong with them. Every rule in this file follows from that division of labour.

Three house positions, stated once and applied throughout:

- Generated material is a draft until a person has examined every pixel or frame at 100 percent. The reason: the defect classes in section 5 are systematic, the models produce them at a known rate, and a client in jewellery or hospitality will see the merged chain link or the staircase that leads nowhere before the agency does.
- The hero asset is real. The piece of jewellery, the dish, the actual suite at the actual hotel, the face of the talent, the view from the actual balcony: photographed, with a release. Generation is used around the hero (environment, extension, motion, variants, cleanup), never as the hero. The reason is legal as much as aesthetic: section 7 explains why a purely generated image is unprotectable in the US and uncertain in India, and why a generated jewel is a misrepresentation of the product.
- Defaults are the enemy. Every model has a median output (section 10). A luxury brand pays for the specific. The prompt, the references and the post-production exist to pull the output away from the median and toward the house tokens (design-taste, section 7) and the brand's own world (design-taste, references/worlds.md).

## 2. The landscape as of October 2026

Prices are list prices in US dollars at the time of writing; plans change monthly, so re-check the vendor page before quoting a client. Where a figure comes from a secondary source rather than the vendor it is marked "reported".

### 2.1 Image models

| Tool | Maker and version as of October 2026 | What it is good for | What it ruins | Commercial terms and price |
|---|---|---|---|---|
| Midjourney | V7 default since April 2025; a V8 alpha was reported in preview in March 2026 (reported, unverified) | Mood, light, atmosphere, styleframes, moodboards, fashion and interiors exploration; the strongest aesthetic prior in the field | Anything requiring a specific product, exact text, exact architecture; produces the "Midjourney look" (section 5) unless fought | Basic $10, Standard $30, Pro $60, Mega $120 a month; about 20 percent off annually. Companies with more than $1 million annual gross revenue must be on Pro or Mega for commercial use. No permanent free tier. Pro and Mega add Stealth mode (private generations), which the house requires for client work |
| Flux (Black Forest Labs) | FLUX.2 family released November 2025: pro, flex and open-weight dev variants, up to 4 megapixels, multi-reference conditioning (several reference images in one prompt); FLUX.2 klein (4 billion parameters, sub-second); FLUX.1 Kontext (May 2025) for instruction-based editing of an existing image. A Flux.3 release in July 2026 is listed by one source (unverified) | Photoreal product-in-environment composites, instruction edits ("replace the sky", "change the sofa to linen"), self-hosted pipelines where the client's assets never leave the agency machine, LoRA training (section 6) | Text in images is weaker than Ideogram; the dev weights are non-commercial without a licence | FLUX dev weights carry a non-commercial licence; commercial use needs a BFL licence or an API partner (fal, Replicate, Krea). Pro and flex are API-only, priced per image |
| Ideogram | 3.0 (March 2025) with style references; a version 4 is cited by some 2026 sources (unverified) | Text inside the image: posters, wordmarks, packaging mockups, menu boards, signage; it reads and sets Latin text reliably | Photographic skin and luxury light; Devanagari and Arabic shaping (section 5.1) | Free tier exists; paid plans from about $8 a month (reported); check ideogram.ai/pricing |
| GPT Image (OpenAI) | gpt-image-1 (April 2025), gpt-image-1.5 (December 2025); a GPT Image 2 leading blind-vote arenas in 2026 is reported by several secondary sources | Instruction following, legible text, layout-aware graphics, quick edits in conversation, infographics; strong world knowledge (it knows what a Jaipur jharokha is) | A flat, slightly yellow default cast and smooth skin; weak at the specific photographic look a fashion editorial needs | Included in ChatGPT Plus ($20) and Pro ($200); API priced per image at tiers of quality |
| Google Imagen and Nano Banana | Imagen 4 (2025); Nano Banana (Gemini 2.5 Flash Image, August 2025); Nano Banana Pro (Gemini 3 Pro Image, November 2025) with 4K output, strong text and up to 14 reference images; a Nano Banana 2 is reported in 2026 comparisons | Identity-preserving edits: keep the product, change the environment; multi-reference composites; relighting a real photograph; text in several scripts; the best value editing tool of 2026 | Invents architecture freely when asked to extend; SynthID (Google's invisible watermark) is embedded in every output, which is a benefit for provenance and a fact to disclose to clients | Free in Gemini app with limits; Google AI Pro about $20 a month; API per image. Outputs carry SynthID and, in the Gemini app, C2PA credentials |
| Stable Diffusion and ComfyUI | SD 3.5 (October 2024) and SDXL remain the open backbone; ComfyUI is the node-based interface (a graph of operations where each node is a model, a sampler or a filter) used for repeatable pipelines | Full control: ControlNet (conditioning on edges, depth or pose), IP-Adapter (image prompt adapters), LoRA stacking, batch pipelines, exact seed control, running offline on client NDAs | Out-of-the-box aesthetics are dated; needs an operator who understands samplers, CFG and VAEs | Stability AI Community License: free for organisations under $1 million annual revenue, including commercial use; above that an Enterprise licence is required. Covers SD 3.5 suite, SDXL Turbo, Stable Audio 3.0, Stable Fast 3D (verified at stability.ai/license, October 2026) |
| Adobe Firefly and Photoshop | Firefly Image Model 4 and 4 Ultra (April 2025), Firefly Image Model 5 (October 2025, native 4 megapixel, layered editing); Generative Fill and Generative Expand in Photoshop since 2023; the Firefly app also hosts partner models (GPT Image, Imagen, Veo, Flux, Runway, Luma, Topaz, ElevenLabs) | Retouching, cleanup, expanding a crop for a new aspect ratio, removing a fire extinguisher from a lobby plate, matching a plate's noise; the enterprise indemnity | Hero generation: Firefly's own models trail Midjourney and Flux on light and material; partner models inside Firefly do not carry Adobe's indemnity | Included in Creative Cloud with generative credits; Firefly Standard, Pro and Premium plans. Adobe states its own Firefly models are trained on Adobe Stock, openly licensed and public-domain content and offers IP indemnification to enterprise customers for those models only; confirm the current scope with Adobe before relying on it in a client contract |
| Magnific | Owned by Freepik since 2024; upscaler and Relight; Precision V2 upscaler (2025) | Upscaling a 1 megapixel generation to print size while adding plausible texture; relighting a product plate | Over-detailing: it invents pores and fabric weave where none exist, which reads as the "sharpened AI" tell at 100 percent | Pro, Premium and Enterprise tiers from about $39 a month (reported; the pricing page could not be read at the time of writing) |
| Topaz Labs | Gigapixel (image), Photo, Video; model families Wonder 2 and 3, Starlight Precise, Proteus, Iris, Nyx | Faithful upscaling of real photography (Standard, High Fidelity), face recovery, video denoise and upscale to 4K; Starlight for generated video cleanup | Creative upscalers (Redefine, Wonder) hallucinate; keep them away from product shots | Gigapixel $29 a month or $149 a year; Photo $39 a month or $199 a year; Video $59 a month or $299 a year; Pro tiers $499 to $699 a year (verified October 2026) |
| Krea | Real-time canvas, Enhancer, and a host for third-party video models (Veo 3.1, Seedance, Kling) | Drawing-to-image in real time during a client call, fast style tests, one subscription for many video models | Nothing it hosts is exclusive; the enhancer invents | Free with 100 units a day; Basic $9, Pro $35, Max $105, Business $200 a month (lower with annual billing) |

### 2.2 Video models

Capabilities compared on the axes that matter for a brand film: duration per generation, resolution, native audio (the model generates sound with the picture), camera control, image and video references, character consistency.

| Tool | Version as of October 2026 | Duration and resolution | Audio | Camera and references | Notes |
|---|---|---|---|---|---|
| Google Veo | Veo 3.1 (October 2025) | 4, 6 or 8 seconds; 720p, 1080p, 4K; extension to longer sequences | Native audio with dialogue, effects and ambience | Up to 3 reference images, first and last frame, prompt-driven camera | The Gemini API preview endpoints for Veo 3.1 were shut down on 22 October 2026; Google now routes developers to Gemini Omni Flash (model id gemini-omni-1.1-flash) or to GA Veo models on the Gemini Enterprise Agent Platform (verified at ai.google.dev, October 2026). Veo remains available in Flow, Gemini and Vertex |
| Google Gemini Omni Flash | gemini-omni-1.1-flash (2026) | 360p, 720p default, 1080p and 4K upscaled; 16:9 and 9:16; extension of 3 to 10 seconds per continuation, up to 40 seconds total | Native audio; no voice editing or audio reference upload | Reference images, first and last frame, subject reference, up to 3 reference clips of 3 seconds, multi-turn conversational editing of generated or uploaded (10 second max) video | SynthID on every output; uploaded video editing unavailable in the EEA, Switzerland and the UK; no negative prompt field (verified at ai.google.dev, October 2026) |
| OpenAI Sora 2 | Sora 2 and Sora 2 Pro (30 September 2025) with the Sora app and "cameos" (consented likeness insertion) | 4 to 20 seconds reported; 720p and 1080p; API priced at $0.10 per second for 720p (reported) | Native audio including dialogue | Image references; cameo for consented people | One secondary source reports Sora 2 shut down in September 2026 and lists it as a legacy API model; this could not be verified against OpenAI's pages at the time of writing. Treat Sora as unavailable for new client pipelines until confirmed |
| Kling (Kuaishou) | 2.1 (May 2025), 2.5 Turbo (September 2025), 2.6 (December 2025, native audio), O1 (unified multimodal), 3.0 (2026) | 3 to 15 seconds; 720p and 1080p | Optional native audio from 2.6 | Elements (up to 4 reference images for subject consistency), start and end frame, motion control from a reference performance, 50 or more camera presets inside Higgsfield | The workhorse for image-to-video of real plates; see the higgsfield-prompting skill for the three-layer prompt system and the start and end frame technique |
| Runway | Gen-4 (March 2025), Gen-4 Turbo, Aleph (25 July 2025), Gen-4.5 (December 2025); Act-Two for performance capture | 2 to 10 seconds; 720p native, upscale to 1080p and 4K | Added separately (no native audio on Gen-4; Gen-4.5 audio status unclear across sources) | Gen-4 References for consistent characters and objects; Aleph edits an existing shot: add or remove objects, generate new angles, change lighting and style (verified at runway.com) | Aleph is the house tool for set extension and relighting on real footage |
| Higgsfield | Aggregator: Kling 3.0, Veo 3.1, WAN 2.6, Sora 2 and others, plus its own Soul (image) and Popcorn (storyboard) models, camera presets and Ads Studio | Inherits the underlying model | Inherits | 50 or more camera presets stackable up to 3; Soul ID for identity; start and end frame | Pricing page could not be read at the time of writing; the house account is on an Ultimate-class plan with commercial rights. Cross-reference the higgsfield-prompting skill before writing any Higgsfield prompt |
| Luma | Ray3 (September 2025), Ray3.2 current (verified at lumalabs.ai, October 2026) | 5 or 10 seconds native; 360p to 1080p; Modify Video to 20 seconds at 24 fps; Reframe to 12 or 16 seconds | No native audio on text or image to video; Modify and Reframe keep the source audio | Native 16-bit colour, HDR at 2x credits, EXR export in ACES2065-1 (AP0) at 3x; Modify Video for restyling real footage | The only model exporting a grade-ready EXR, which matters when the film is finished in DaVinci Resolve |
| Pika | 2.2 and later (2025 to 2026) with Pikaframes (keyframe transitions) and Pikaffects | Up to 10 seconds; 1080p | Lip-sync and effects | Keyframes | Social-first; effects library reads as a trend tool, which the house avoids for luxury clients |
| Hailuo (MiniMax) | Hailuo 02 (June 2025), 2.3 (October 2025) | 6 or 10 seconds; 1080p | None native | Strong physics and fabric motion, subject reference | Good for fashion fabric tests and crowd plates |
| Adobe Firefly Video | Firefly Video Model (public beta February 2025) and partner models in the Firefly app | 5 seconds; 1080p | None native | Image to video, camera angle presets | The only video model with Adobe's commercial-safety position; quality trails the leaders |
| Seedance (ByteDance), Wan (Alibaba), LTX-2 (Lightricks) | Seedance 2.0, Wan 2.6, LTX-2 (2026) | Varies; Wan and LTX-2 are open weights, LTX-2 with native audio | Varies | Wan runs locally in ComfyUI | Open weights matter for NDA footage that cannot be uploaded |

### 2.3 Audio

| Tool | Status October 2026 | Use | Licence position |
|---|---|---|---|
| ElevenLabs | Eleven v3 (alpha June 2025, generally available February 2026) with audio tags for emotion and pacing; Eleven Music (August 2025, Music v2 May 2026); Sound Effects at 200 credits each; Music at 900 credits a minute; dubbing | Scratch voiceover for previs, final VO where the client has a cloned, consented voice, bespoke sound effects, dubbing an approved film into Hindi or Arabic with the talent's consent | Free (10,000 credits a month) carries no commercial licence. Starter ($6 a month list; 30,000 credits) is the first plan with a commercial licence and "music commercial use"; Creator $22, Pro $99, Scale $299, Business $990 (verified at elevenlabs.io/pricing, October 2026). Eleven Music was launched with Merlin and Kobalt licensing deals; confirm the current cleared status for broadcast use |
| Suno | v5 (September 2025). Warner Music settled its case with Suno in November 2025; Suno agreed to introduce licensed models in 2026 that replace the current ones, with download limits; Universal and Sony were reported at an impasse with Suno as of April 2026 | Temp tracks, pace references for an edit, pitch mood | Paid plans grant commercial rights to songs made while subscribed; free tier is non-commercial. Until the licensed models ship and the Universal and Sony claims resolve, the house does not put Suno audio in a final deliverable |
| Udio | Universal settled on 30 October 2025 with a licence and a walled-garden platform for 2026; downloads were disabled; Warner settled in November 2025; Sony had not settled as of April 2026 | Same as Suno | Same rule: temp only |
| Adobe Enhance Speech | In Adobe Podcast and Premiere | Cleaning location dialogue and client testimonial audio | Covered by Creative Cloud terms |
| Stable Audio | Stable Audio 2.x and Stable Audio Open; Stable Audio 3.0 listed under the Community License | Sound beds, ambiences, loops | Community License rules as for images (under $1 million revenue free) |

Music for a final film still comes from a composer, a licensed library (Artlist, Musicbed, Epidemic) or a direct sync licence; the reason is section 7.2.

### 2.4 3D

| Tool | Status | Use | Terms |
|---|---|---|---|
| Meshy | Meshy 6 generation (a "Meshy 6 Lite" tier is named on the pricing page) | Image to mesh for previs props, quick set dressing, a chandelier silhouette for a lighting test | Free: 100 credits, outputs under CC BY 4.0 (attribution required, so unusable for client work); Pro $20 (1,000 credits), Premium $40 (3,000), Ultra $100 (8,000), Studio $70 shared (5,500); paid plans grant private, customer-owned assets (verified October 2026) |
| Tripo | Tripo 3.x | Same class as Meshy; strong PBR (physically based rendering) texture output | Pricing page could not be read at the time of writing |
| Luma Genie | Text to 3D inside Luma | Fast concept objects | Luma plan terms |
| Spline AI | Web-native 3D editor with AI generation | Interactive 3D on a microsite, product spin | Spline plan terms |

None of these produce a jewellery-grade or furniture-grade model. The reason: generated meshes carry baked lighting, smeared topology and invented detail; a hero product render still needs a modelled asset (Blender, Cinema 4D, KeyShot) or a photograph.

### 2.5 Design tools

| Tool | What it does | Craft risk |
|---|---|---|
| Figma AI and Figma Make | Make (Config, May 2025) turns a prompt or an existing design into a working prototype or app; AI also renames layers, writes copy, generates images and finds visual matches | Make's default output is the median web app of 2025: Inter, a grey border radius card grid, a gradient hero. Section 9.3 gives the finishing standard |
| Framer AI | Wireframer and Workshop generate sections and pages inside Framer | Same median; useful only as a layout skeleton under house tokens |
| Canva AI (Magic Studio, Canva Code) | Generates full layouts, images and small apps | The house avoids the Canva look: rounded bento cards, pastel gradients, stock illustration people, Canva Sans and its clones, uniform radius. It is the most recognisable "made in minutes" signal in the Indian and Gulf market because it is what every small competitor uses |
| Adobe Sensei features | Content-aware fill, auto-select subject, neural filters, Enhance Speech, auto-reframe in Premiere | Safe; they are retouching and editing tools, not taste tools |
| Relume | AI sitemap and wireframe generator with a component library; exports to Webflow, Figma and Framer | Good for structure and IA on a 12-page hotel site; the wireframes must be redesigned, never skinned |
| Galileo AI | Text-to-UI generator; acquired by Google in 2025 and wound down as a standalone product | Historical |
| Uizard | Wireframe and mockup generator; acquired by Miro in late 2024 | Workshop sketching only |

### 2.6 Code and product tools

| Tool | Use at Mask360 | Terms as of October 2026 |
|---|---|---|
| v0 (Vercel) | React and Next.js components from a prompt or a Figma frame; good for a scroll-driven microsite skeleton | Free (7 messages a day), Plus $30 a user a month, Business $100 a user a month, Enterprise custom (verified at v0.app/pricing) |
| Lovable | Full-stack prototype with Supabase; fast for a client portal demo | Free (5 daily build credits, up to 30 a month), Pro, Business, Enterprise; exact prices could not be read at the time of writing |
| Bolt (StackBlitz) | Same class as Lovable, in-browser | Pricing page could not be read at the time of writing |
| Cursor | AI editor for the production codebase | Hobby free, Pro about $20, higher tiers above (reported) |
| Claude Code | Agentic coding in the terminal; the house builds its microsites and artifacts with it | Anthropic Pro and Max plans or API |

### 2.7 Research and writing assistants

Claude, ChatGPT, Gemini and Perplexity for desk research, synthesis and first drafts. Two rules: every factual claim in a client deck is traced to a source the person has opened, and no assistant writes final client copy, because the mask360-copywriting skill's 15 rules and the house voice are the product. Assistants are good at structure, counter-arguments, translation drafts and summarising a 90-minute transcript; they ruin voice, and they invent quotations (section 9.2).

### 2.8 What each tool is for and what it ruins

A short mapping the team can use when assigning a task.

| Task | First choice | Second | Never |
|---|---|---|---|
| Moodboard and styleframes | Midjourney V7 with sref | Flux 2 pro | Canva AI |
| Product in a new environment, product untouched | Nano Banana Pro or Flux Kontext on the real product shot | Photoshop Generative Fill | Any text-to-image of the product |
| Text in an image | Ideogram or GPT Image for Latin; composite real type for Devanagari and Arabic | Nano Banana Pro | Midjourney |
| Expanding a crop | Photoshop Generative Expand | Nano Banana | Upscalers |
| Upscale for print | Topaz Gigapixel High Fidelity on real photography; Magnific for generated | Topaz Wonder | Krea enhancer on product |
| Motion from a real still | Kling 2.6 or 3.0 via Higgsfield, image to video | Veo 3.1 or Omni Flash | Pika effects |
| Edit a real shot (remove, relight, new angle) | Runway Aleph | Luma Modify | Regenerating the shot |
| Scratch voiceover | ElevenLabs v3 | Adobe | Any free tier |
| Final music | Composer or licensed library | Direct sync licence | Suno, Udio (until licensed models and settlements settle) |
| Site structure | Relume | Figma | Prompted full sites |
| Microsite build | Claude Code with house tokens | v0 | Lovable defaults in production |

## 3. Prompting as art direction

A prompt is a brief to a photographer who has read every photograph ever posted and understood none of them. It responds to the vocabulary of craft because that vocabulary is what the captions in its training data used. Write the brief the way a director of photography would hear it.

### 3.1 The vocabulary that maps to real craft

Each term below maps to something the model has seen labelled thousands of times. Vague words (beautiful, luxury, premium, stunning) map to the median and pull toward the default look. Craft words map to specific distributions.

Camera and lens (cross-reference file 15 on lighting and photography for the real-world physics):

| Craft term | What it does to the image | Prompt phrase |
|---|---|---|
| 24mm or 28mm | Wide field, exaggerated depth, architecture leaning unless corrected | "24mm lens, architectural perspective, verticals corrected" |
| 35mm | Documentary width, environmental portrait, natural perspective | "35mm, environmental portrait, subject at one-third" |
| 50mm | Normal perspective, the eye's drawing | "50mm, natural perspective" |
| 85mm or 105mm | Portrait compression, background falls away, flattering faces | "85mm portrait lens, compressed background" |
| 100mm macro | Life-size detail, millimetre depth of field | "100mm macro, 1:1 magnification, razor-thin focus on the stone" |
| Tilt-shift | Straight verticals in interiors, selective plane of focus | "tilt-shift, perspective corrected, deep focus" |
| Aperture f/1.4 to f/2 | Shallow depth of field, soft falloff, the luxury portrait look when used once | "f/1.8, shallow depth of field, soft focus falloff" |
| Aperture f/8 to f/11 | Everything sharp, architectural and product honesty | "f/11, deep focus, edge to edge sharpness" |
| Shutter 1/15 or slower | Motion blur in fabric, water, crowds | "slow shutter, motion blur in the fabric, 1/15 second" |
| Film stock | A specific colour science and grain | "Kodak Portra 400" (warm skin, soft contrast), "Kodak Ektachrome E100" (cool clean slide), "Fujifilm Pro 400H" (minty greens, pastel), "CineStill 800T" (tungsten, red halation), "Ilford HP5" (grey monochrome, visible grain), "Kodak Vision3 500T" (cinema tungsten) |
| Medium format | Larger negative look: smooth tonality, shallow depth even at f/4 | "medium format, Hasselblad look, 80mm" |

Lighting (the setups a gaffer would name; file 15 has the diagrams):

| Setup | Effect | Prompt phrase |
|---|---|---|
| Single window, north light | Soft, directional, the painter's light | "single north-facing window light, soft directional, deep shadow side" |
| Rembrandt | Triangle of light on the shadow cheek | "Rembrandt lighting, triangle under the eye" |
| Butterfly or paramount | Beauty light from above, shadow under the nose | "butterfly lighting from above, beauty dish" |
| Split | Half the face lit | "split lighting, half face in shadow" |
| Rim or kicker | Edge of light separating subject from ground | "rim light from behind, edge separation only" |
| Hard sun, noon | Short black shadows, specular highlights | "hard noon sun, short shadows, high contrast" |
| Golden hour | Long warm shadows (and the real-estate cliché; design-taste, section 4) | "late afternoon low sun, long shadows" |
| Blue hour | Cool ambient, warm practicals | "blue hour, interior lamps warm against cool sky" |
| Practicals | Lamps in frame as sources | "lit by practical lamps in frame, no fill" |
| Softbox or octabox | Even soft studio light with a round catchlight | "large octabox camera left, soft wrap" |
| Hard flash, direct | The Terry Richardson and Juergen Teller flatness, now a fashion signal | "direct on-camera flash, hard shadow on the wall behind" |
| Gobo or cucoloris | Patterned shadow (blinds, leaves, jali) | "dappled light through a carved jali screen" |

Composition (cross-reference file 05 on composition): rule of thirds, centred symmetry when it is the idea, negative space on the side the type will sit, leading lines, frame within a frame (a doorway, an arch), low horizon for sky, high horizon for ground, Dutch angle (tilted camera) almost never, the one-third headroom rule. Phrases: "subject lower third, empty upper two thirds for headline", "framed through the arch", "symmetrical one-point perspective".

Colour and grade (cross-reference file 04 on colour): "muted palette, desaturated greens", "two-colour palette: bone and ink", "teal shadows, warm highlights" (the Hollywood default, avoid), "matte blacks, lifted shadows", "no HDR, natural contrast", "film grain visible at 100 percent".

Material: name the material and its finish because the model renders finish before form: "honed travertine" against "polished travertine", "raw linen", "brushed brass", "unlacquered bronze with patina", "hand-knotted wool", "lime-washed wall", "Jaisalmer yellow sandstone", "Makrana marble", "terrazzo", "crushed velvet". The finish words (honed, brushed, matte, raw, hand-knotted) are what read as expensive, because luxury materials are rarely glossy (design-taste, section 2).

Era: "1970s Italian interior photography", "1990s Japanese catalogue", "2000s Prada campaign flatness", "Mughal miniature flatness", "1960s Air India poster". Era terms are safer than artist names (section 3.2).

Mood: use physical description rather than emotion words. "Stillness, no people, early morning, dust in the light" produces calm; "calm, serene, peaceful" produces stock.

### 3.2 Style references, named people, and the ethics of naming

A model learns a photographer's style from thousands of their images; naming them in a prompt is the most efficient way to steer, and the most contested.

The positions as of October 2026:

- Legal: style is not protected by copyright in the US, India, the UK or the EU; the Getty v Stability judgment of 4 November 2025 found that model weights do not store copies and so are not infringing copies (section 7.2). Naming a living artist does not in itself infringe copyright. It can raise a right-of-publicity or passing-off claim where the output is marketed as theirs, and it is the central grievance in Andersen v Stability AI (Northern District of California, ongoing) where a list of about 16,000 artist names used in Midjourney's training surfaced in filings in January 2024.
- Ethical: the living photographers whose names appear in prompts (and whose work was scraped without consent) object; the house works with photographers and expects to be hired by them.
- Practical: name-based steering is unstable across versions; a style reference image (section 3.4) steers more precisely and does not depend on the model knowing a name.

The house position: never name a living photographer, director, painter or designer in a prompt for client work. Describe the quality instead ("direct flash, flat, unretouched, 35mm, 2000s fashion editorial") or use a style reference built from the agency's own photography or licensed images. Dead artists and movements (Vermeer's window light, Bauhaus, Mughal miniature, Pictorialism) may be named. Living brand names (Aman, Loewe, Bottega) are never put in a prompt either: the output could carry their trade dress into a competitor's campaign, which is a trademark exposure (section 7.5) before it is a taste one.

### 3.3 Prompt structure

A structure that works across models because it mirrors a caption: subject, action, setting, light, camera, style, constraints, negatives.

1. Subject: who or what, with material and finish. "A woman in her forties in a raw silk ivory sari."
2. Action: one verb, present tense. "Adjusting an earring in a mirror."
3. Setting: specific place and time. "In a lime-washed room at a Jaipur haveli, 7am."
4. Light: one key, named. "Single north window camera left, no fill."
5. Camera: lens, aperture, format. "85mm, f/2, medium format."
6. Style: era, film stock, grade. "Kodak Portra 400, muted, visible grain."
7. Constraints: framing for use. "Vertical 4:5, subject lower half, empty wall upper half for type."
8. Negatives: what the model will add unless told (section 3.8).

Order matters for Midjourney and Stable Diffusion (early tokens weigh more). For Flux, GPT Image and Nano Banana, full sentences in natural language outperform comma lists. For video, the motion prompt is a separate short sentence (the higgsfield-prompting skill's three-layer rule: image prompt, identity prompt, motion prompt kept separate, because lighting instructions in the motion layer cause flicker).

### 3.4 Reference images: sref, oref, cref, image prompts and weights

Definitions, with the October 2026 state:

- Image prompt: an image URL placed at the start of a Midjourney prompt; it conditions the composition and content. Weight with --iw (0 to 3, default 1).
- Style reference (--sref): one or more image URLs or an sref code; it transfers palette, grain, light and finish and ignores content. Weight with --sw (0 to 1000, default 100). The --sv parameter selects the style-reference algorithm version. Random exploration: --sref random. The house keeps a library of sref codes per client world, built from the agency's own photographs, so that the style is the brand's and not a stranger's.
- Omni reference (--oref): introduced with V7 in May 2025; places a specific object, character, vehicle or garment from a reference image into the generation, replacing the V6 character reference (--cref, which still works only on V6 and Niji 6). Weight with --ow (0 to 1000, default 100; use 25 to 50 for style transfer of the object, 300 to 400 for strict identity). Omni reference costs about double the GPU time of a plain prompt. One oref image per prompt.
- Multi-reference in other models: Nano Banana Pro accepts up to 14 reference images and keeps up to 5 subjects consistent; FLUX.2 accepts multiple reference images for subject and style; Kling Elements takes up to 4 subject references for video; Runway Gen-4 References keeps a character or object across shots; Veo 3.1 and Omni Flash take up to 3 reference images.

The rule for product work: the reference image is the real product shot, lit by the agency, and the generation is asked to change everything except it. Never the reverse.

### 3.5 Seeds and variation discipline

A seed is the integer that initialises the noise from which a diffusion model denoises an image; the same seed, prompt, model version and settings reproduce the same image. Use --seed in Midjourney (0 to 4294967295), the seed field in ComfyUI, Kling, Runway and Veo. Discipline:

- Lock the seed when iterating on wording so that the only variable is the prompt.
- Change only the seed when hunting for a composition so that the only variable is chance.
- Record the seed in the asset's sidecar (section 8.3). A client who approves frame 3 of 20 will ask for "the same but wider" and the seed is the only way back.
- Midjourney's Vary (Subtle) and Vary (Strong), and Flux's strength parameter in image-to-image, are controlled drift; use them after the composition is locked, never before.

### 3.6 Iteration loops

The house loop, timed for a styleframe session:

1. Generate 20 at draft quality (Midjourney Draft mode is about 10 times faster at half the GPU cost; Omni Flash at 360p; Flux klein). About 15 minutes.
2. Select 2 against the brief and the design-taste tests (cover the logo, the four hundred hours test). Reject anything with a tell from section 5. About 10 minutes.
3. Refine: lock seed, adjust light and lens words, add the sref, regenerate 8 variations of each survivor. About 20 minutes.
4. Composite: bring the survivor into Photoshop; replace the product with the real plate, correct the text, grade to house tokens, add grain. About 45 minutes.
5. Upscale once at the end, never earlier (upscaling bakes in artefacts).

Total: about 90 minutes to two finished styleframes. Anything shorter has skipped step 4.

### 3.7 Model-specific syntax

| Need | Midjourney V7 | Flux 2 and Kontext | GPT Image | Nano Banana Pro | Stable Diffusion (ComfyUI) | Kling via Higgsfield | Veo 3.1 and Omni Flash | Runway Gen-4 and Aleph |
|---|---|---|---|---|---|---|---|---|
| Aspect ratio | --ar 4:5 | width and height in pixels, up to 4 MP | size parameter (1024x1024, 1536x1024, 1024x1536) | aspect ratio setting, up to 4K | latent size | 9:16, 16:9, 1:1 | 16:9 or 9:16 | 16:9, 9:16, 1:1, 4:3 |
| Style strength | --s 0 to 1000 (default 100; house uses 20 to 80), --raw | none; describe | none; describe | none; describe | CFG scale 4 to 8 | CFG or creativity slider | none | none |
| Negatives | --no text, --no people | describe the absence in the sentence | describe | describe | negative prompt field | negative prompt field | negative prompt field on Veo 3.1 (none on Omni Flash) | none; use Aleph instruction |
| Reference image | image URL, --sref, --oref, --cref (V6) | reference images, Kontext instruction | attached image, instruction | up to 14 references | IP-Adapter, ControlNet | Elements, start and end frame | up to 3 references, first and last frame | References, Aleph source clip |
| Weights | --iw, --sw, --ow | none | none | none | (word:1.3) syntax, LoRA weights | none | none | none |
| Seed | --seed | seed | none exposed in ChatGPT | none exposed | seed | seed | seed | seed |
| Quality tiers | Draft mode, --q | pro, flex, dev, klein | low, medium, high | Flash and Pro | steps and sampler | Standard, Pro, Turbo | Fast, Lite, Standard; 720p to 4K | Turbo and standard |
| Text rendering | poor | fair | good | good | poor | n/a | n/a | n/a |
| Personalisation | --p (trained on your rating history) | LoRA | none | none | LoRA, textual inversion | none | none | none |
| Experimental | --exp (aesthetics, V7), --w weird, --c chaos | none | none | none | samplers | none | none | none |

Midjourney's --p personalisation parameter trains on the operator's rating history; the house keeps a dedicated account rated against the house worlds so that the bias is the agency's and the median is pushed toward matte, muted and still.

### 3.8 Negative prompt lists

What the model will add unless told otherwise. In Midjourney these go after --no; in Stable Diffusion and Kling into the negative field; in Flux, GPT Image and Nano Banana they are written into the sentence ("no text, no logos, no people").

General, every brief: text, watermark, logo, signature, caption, frame, border, collage, split screen, duplicate, cropped, out of frame, low resolution, jpeg artefacts, oversaturated, HDR, over-sharpened, neon, lens flare, bokeh balls, god rays, volumetric fog.

People: extra fingers, fused fingers, missing fingers, extra limbs, malformed hands, deformed face, asymmetrical eyes, cross-eyed, plastic skin, airbrushed, perfect teeth, veneers, doll-like, mannequin, uncanny, bad anatomy, long neck, floating hair.

Product and jewellery: deformed clasp, merged chain, floating stone, missing prong, melted metal, extra links, warped reflection, duplicate product, mirrored logo, wrong proportions.

Architecture and interiors: impossible stairs, windows misaligned, doors to nowhere, floating furniture, melted corners, curved straight lines, extra columns, inconsistent flooring, two horizons, two suns.

Video: morphing, flicker, warping, jitter, texture crawl, sliding feet, extra limbs appearing, face change, object popping, camera shake, speed ramp, zoom in and out at the same time.

Taste (the house list): cream background, terracotta, beige minimalism, serif overlay, centred subject, symmetrical hero, teal and orange, golden hour, rim light, volumetric light, cinematic, epic, 8k, ultra detailed, trending, award winning, masterpiece. The last five are prompt folklore that pull toward the 2022 stock-AI distribution.

## 4. Prompt library by Mask360 category

Worked prompts in the house structure. Each names the model it is written for; the Midjourney ones assume --v 7 --raw --s 50 and an sref from the client's own photography. Replace the bracketed items. Every prompt here produces an environment, a plate or a styleframe; the hero (the piece, the dish, the suite, the face) is composited from real photography afterwards (section 6).

### 4.1 Hospitality interiors and exteriors

1. Midjourney: "Empty corridor of a 1930s Bombay art deco hotel, terrazzo floor, teak doors, single window at the end, 7am dust in the light, no people, 35mm, f/5.6, Kodak Portra 400, muted, visible grain, vertical 4:5, lower third empty --ar 4:5 --no people, text, chandelier, flowers"
2. Midjourney: "Pool at a Goan laterite villa at blue hour, interior lamps warm against cool sky, still water, one wet footprint on stone, 24mm, verticals corrected, f/8, long exposure 2 seconds, Ektachrome E100 --ar 16:9 --no people, umbrellas, loungers, drone view"
3. Nano Banana Pro (edit of a real plate): "Keep this photograph of the suite exactly as it is. Replace the view through the window with a monsoon sky over the Arabian Sea at 6pm, overcast, soft light consistent with the interior exposure, no sun, no rainbow. Do not change the furniture, the bed linen or the floor."
4. Flux 2 pro: "A desert camp dining tent outside Dubai at dawn, raw canvas walls, unlacquered brass lanterns unlit, a long table in untreated oak set for twelve with linen the colour of bone, sand floor, low sun from the east entering at a 15 degree angle, 50mm, f/4, Fujifilm Pro 400H, no HDR, no people."
5. Kling 2.6 image to video (motion layer only, from the real exterior still): "Slow dolly in through the archway, 5 seconds, smooth, stable, no jitter, no warping, leaves move slightly in the wind."

### 4.2 Jewellery on skin

The piece is always the real photograph; these prompts make the skin, the hand and the environment, then the piece is composited by a retoucher at 200 percent with the clasp, prongs and reflections checked.

1. Midjourney: "Close crop of a woman's collarbone and neck, brown skin with visible pores and fine hair, raw silk strap, no jewellery, single north window camera left, no fill, 100mm macro, f/4, medium format, Portra 400, matte, lower half of frame empty --ar 4:5 --no necklace, earrings, retouching, glow"
2. Midjourney: "A hand resting on a honed travertine ledge, fingers relaxed, natural nails, no rings, hard noon sun from above left casting a short black shadow, 85mm, f/5.6, Ilford HP5 monochrome, visible grain --ar 1:1 --no jewellery, watch, text"
3. Nano Banana Pro (composite): "Place the attached photograph of the ring exactly as photographed onto the ring finger of the attached hand, matching the direction of the sunlight from above left, adding a contact shadow and a soft reflection of the skin in the band. Do not alter the stone, the prongs or the band shape."
4. Flux Kontext: "Change the background behind this hand and ring to a lime-washed wall in deep shadow, keeping the light on the hand unchanged."
5. Kling 2.6 image to video from the composited still: "Camera static, the hand turns 10 degrees toward the light over 4 seconds, stone catches one specular highlight, no other motion, smooth, no warping."

### 4.3 Beauty macro

1. Midjourney: "Extreme close-up of the corner of an eye and cheek, south Asian skin, visible pores, fine vellus hair lit from behind, a single catchlight from a large octabox camera right, no makeup glow, 100mm macro 1:1, f/8, Ektachrome E100, matte --ar 4:5 --no retouching, airbrushed, glitter, dew, sparkle"
2. Midjourney: "Lips slightly parted, matte texture, natural lip lines visible, hard direct flash from camera, hard shadow on the white wall behind, 2000s editorial flatness, 50mm, f/11 --ar 1:1 --no gloss, teeth, retouching"
3. Flux 2 pro: "A glass dropper of amber serum held between thumb and forefinger against a plain bone-coloured wall, hard sun from the right throwing a refracted caustic across the wall, dust in the air, 100mm macro, f/5.6, Kodak Portra 160, no label on the bottle."
4. Nano Banana Pro (edit of real product): "Keep the attached bottle exactly as it is, including the label text. Place it on a wet black slate surface with one hard light from the upper left, a long specular reflection beneath it and nothing else in frame. Do not alter the bottle."
5. Veo 3.1 image to video from the real macro still: "Static camera, a single drop forms at the dropper tip and falls over 6 seconds, slow motion, natural sound of a drop on glass, no music, no other motion."

### 4.4 Fashion editorial

1. Midjourney: "Full-length figure in an oversized ivory khadi coat standing against a raw concrete wall in a Delhi car park, direct on-camera flash, hard shadow on the wall, flat, unretouched, 35mm, f/8, Fujifilm Superia, 1990s catalogue, off-centre with empty wall to the left --ar 4:5 --no runway, smile, golden hour, bokeh"
2. Midjourney: "Figure walking away down a Jaipur lane at 6am, back to camera, saffron silk dupatta in motion blur, 1/15 second, 28mm, Portra 800, muted pinks of the walls, no faces --ar 9:16 --no tourists, cars, text"
3. Flux 2 pro: "Studio shot on a seamless the colour of wet sand, a figure seated on a plain wooden stool in a black wool column dress, one large octabox camera left, a white bounce right, 85mm, f/4, Hasselblad look, unretouched skin, direct eye contact, still."
4. Hailuo 2.3 image to video (fabric test): "The dupatta lifts and settles in a gust of wind over 6 seconds, body still, camera static, natural fabric physics, no face change."
5. Runway Aleph (on real footage): "Change the time of day to blue hour with warm practical lamps in the shop windows, keep the model, the walk and the camera move unchanged."

### 4.5 Real estate materials and spaces

1. Midjourney: "Detail of a brushed brass door handle on a fluted oak door, fingerprint faintly visible, afternoon side light at 20 degrees, 100mm macro, f/4, Portra 400, matte --ar 4:5 --no render, CGI, gloss, reflection of a person"
2. Flux 2 pro: "Material board photographed from above on a honed grey limestone slab: a square of unlacquered bronze with patina, a swatch of raw linen, a chip of Makrana marble, a sample of lime plaster, each with a hard shadow from a single sun from the upper left, 50mm, f/11, no labels, no text."
3. Nano Banana Pro (edit of a real render or plate): "Keep this interior unchanged. Replace the floor with honed Jaisalmer sandstone in 600 by 1200 millimetre slabs with 2 millimetre grout lines, matching the existing light and reflections."
4. Midjourney: "Empty living room in a Dubai Palm villa, floor-to-ceiling glass on the left, sea light bouncing onto a lime-washed ceiling, a single linen sofa, no decor, no art, morning, 24mm tilt-shift, verticals corrected, f/8, Ektachrome --ar 3:2 --no family, dog, plants, candles, golden hour, drone"
5. Kling 3.0 image to video from the real plate: "Camera dollies left along the glass over 8 seconds, slow and stable, sunlight patch moves slightly, no people, no warping."

### 4.6 F&B

1. Midjourney: "A single ceramic bowl of dal on an unvarnished dark wood table, steam, one hard side light from a window at the left, deep shadow right, overhead crumb and a spoon, 50mm, f/4, Portra 400, matte, no garnish --ar 4:5 --no microgreens, drizzle, splash, sprinkle, tablecloth, flowers"
2. Flux 2 pro: "Bar at a Mumbai hotel at 11pm, backlit bottles out of focus, a cut-crystal glass in the foreground with one large clear ice cube, condensation, warm tungsten practicals, 85mm, f/1.8, CineStill 800T with red halation on the lights, no people."
3. Nano Banana Pro (edit of a real dish photograph): "Keep the plated dish exactly as photographed. Replace the table surface with raw oak and the background with a dark lime-washed wall, keep the light direction from the upper left, add nothing to the plate."
4. Midjourney: "Hands of a chef wiping the rim of a plate with a cloth, kitchen pass steel, overhead fluorescent replaced by a single tungsten lamp, 35mm, f/2.8, motion blur in the cloth, Ilford HP5 --ar 16:9 --no face, smile, fire, flames, tweezers"
5. Veo 3.1 image to video from the real still: "Static camera, steam rises slowly from the bowl for 6 seconds, the natural sound of a kitchen far away, nothing else moves."

### 4.7 Events

1. Midjourney: "An empty ballroom at a Mumbai palace hotel at 5am before setup, chairs stacked, one worker's ladder, chandeliers off, daylight from tall windows on the right, 24mm, f/8, Portra 400, muted --ar 16:9 --no guests, flowers, lights on, stage"
2. Flux 2 pro: "A long dinner table in a Jaipur courtyard at night, one line of unscented candles, raw linen, brass, the arches behind lit by the candles only, blue night sky above, 35mm, f/2, 1 second exposure, CineStill 800T, no people."
3. Nano Banana Pro (edit of a real venue plate): "Keep the venue photograph unchanged. Add a single line of 40 candles along the centre of the table and their warm light on the faces of the arches, consistent with a night exposure. Add no flowers and no people."
4. Midjourney: "Detail of a hand-calligraphed place card in black ink on uncoated paper, one line of Devanagari, a single pressed marigold petal, overhead window light, 100mm macro, f/5.6 --ar 1:1 --no legible text, glitter, gold foil, ribbon" (the Devanagari is replaced with real type in post; the model's script will be wrong)
5. Kling 2.6 image to video from the real courtyard still: "Candle flames flicker over 5 seconds, camera static, nothing else moves, no people appear."

## 5. The tells and the fix for each

A tell is a defect that identifies an image or clip as generated to a trained eye within two seconds and to a client within two minutes. The design-taste skill lists the taste tells (cream and serif and terracotta, the AI render with impossible light). This section lists the craft tells and the fix for each.

### 5.1 Still image tells

| Tell | What it looks like | Why it happens | Fix |
|---|---|---|---|
| Impossible or multiple light sources | Shadows pointing in two directions; specular highlights on the left of one object and the right of another; a window behind the subject and a lit face with no fill | The model composes from patches of training images with different lighting and has no scene model | Prompt one named key with direction ("single window camera left, no fill"); check every shadow vector at 100 percent; relight with Magnific Relight, IC-Light or Aleph to a single source; composite a real plate for the hero |
| Uniform bokeh | Background blur with no falloff, the same softness at 2 metres and 20 metres; foreground sharp as a cutout | The model has learned "shallow depth of field" as a texture rather than optics | Specify lens and aperture; add real lens blur in Photoshop with a depth map (Lens Blur filter) so blur grows with distance; keep a mid-ground element partly sharp |
| Plastic skin and over-symmetry | No pores, no vellus hair, no asymmetry; both eyes identical; the "smoothed" face | Aesthetic scoring during training rewards retouched stock | Prompt "visible pores, unretouched, fine hair"; add grain and a texture pass at 100 percent; use real talent for any face larger than a quarter of the frame |
| Nonsense text and signage | Letterforms that almost spell; Devanagari with wrong matras; Arabic letters unjoined or joined wrongly, reading left to right | Latin text is tokenised well only in Ideogram, GPT Image and Nano Banana Pro; Indic and Arabic shaping (the contextual joining of letters) is poorly represented in training data | Never let a model set text that will be read. Composite real type. For Arabic and Devanagari use a shaping-aware application (InDesign, Illustrator with the World-Ready composer) and a native reader's check |
| Floating or merged objects | A vase with no contact shadow; a chair leg fused to a table; a second handle | No physics, no occlusion reasoning | Check contact shadows and occlusion for every object; inpaint or composite; never ship an interior with uncounted furniture legs |
| HDR sheen and over-saturation | Lifted shadows and compressed highlights at once; glowing edges; saturated teal and orange | Training data is dominated by processed, upvoted imagery | --raw and --s 20 to 50 in Midjourney; "matte, natural contrast, no HDR" elsewhere; grade in post to house tokens; add grain |
| The cream and serif and terracotta default | Beige room, arched doorway, a serif overlay, a terracotta pot | The 2023 Pinterest and Instagram distribution that every model trained on | Taste problem; design-taste, section 6 lists it as dead. Build from the client's real material world |
| The Midjourney look | Centred subject, volumetric god rays, rim light, wet street, teal shadows, impossible depth, a glowing horizon | Midjourney's aesthetic fine-tuning optimises for its community's upvotes | --raw, low stylize, sref from real photography, off-centre composition, one light source, grain, negative list in section 3.8 |
| Perfect teeth | Every tooth identical, too white, too many | Stock smile bias | Closed mouth or real talent; negative "veneers, perfect teeth" |
| Hands and fingers | Six fingers, fused fingers, a thumb on the wrong side | Hands are small and highly variable in training images; V7 and Flux improved but did not solve it | Count every finger; crop hands out or hide them; inpaint from a real hand plate; composite |
| Jewellery that does not clasp | Chain links that merge; a pendant with no bail; stones with no prongs; earrings with no post; a ring that is not round | The model renders the glint before the mechanism | Never generate the piece. Real product photography, generated environment only (section 6.4) |
| Architecture that does not close | Stairs that end in a wall; a window seen outside that does not exist inside; columns that stop; three-quarter arches | No spatial model | Real plates edited with Nano Banana, Kontext or Aleph; for new builds, a real render from the architect's model |
| Sharpened crispness from upscalers | Fabric weave and pores invented at 4x; halos on edges | Creative upscalers synthesise detail | Faithful upscalers for real photography (Topaz High Fidelity); for generated images, Magnific at low creativity and a grain pass over it |

### 5.2 Video tells

| Tell | Why | Fix |
|---|---|---|
| Flicker and texture crawl | Each frame denoised with imperfect temporal consistency | Shorter clips (5 seconds beat 10 in every model), image-to-video from a real still, less motion in the prompt, Topaz Video Starlight or temporal denoise, cut before the crawl begins |
| Morphing | An object becomes another object; a face becomes another face | The model loses identity over frames | Start and end frame, Elements or References for identity, cut at 3 to 5 seconds, never let a face hold for more than 4 seconds in a wide |
| Dead eyes | Eyes that do not converge, no catchlight, no micro-saccades | Eye motion is sub-pixel in training video | Real eyes; or cut away before the eyes read; prompt "eyes on camera, catchlight" and still check |
| The uncanny walk | Feet slide, gait has no weight, arms swing out of phase | Human locomotion is the hardest physics | Avoid full-body walking in generated shots; shoot the walk; or drive the generation from a real performance (Runway Act-Two, Kling motion control) |
| Objects popping | A glass appears or vanishes | Same as morphing | Keep props in the start frame; fewer objects |
| Simultaneous zoom and dolly | The frame breathes in both directions | Conflicting motion words | One camera verb per prompt (higgsfield-prompting skill) |
| Speed ramps and slow motion by default | Everything floats | Video models default to a dreamy 0.5x | Prompt "real-time speed, 24 fps, no slow motion"; retime in the edit |

### 5.3 Counter techniques

The craft moves that take a generation from "AI" to "photograph":

- Grain: a film grain layer at 100 percent (Dehancer, FilmConvert, or scanned grain plates), sized to the format (35mm grain on a 35mm look). Grain hides the smoothness and unifies composited elements, which is why the design-taste currency puts tactile and imperfect at the top of rising.
- Imperfection: a dust spot, a slightly crooked horizon corrected by 0.3 degrees rather than 0, a fingerprint on brass, a crease in linen. One per image.
- Real photography blended: the hero plate at full resolution, the generation as environment, masked with a real edge (hair, fabric) from the plate.
- Retouching passes: frequency separation in reverse (adding texture into the low frequency), dodge and burn for a single light logic, a 2 to 4 percent vignette.
- Colour grading in post: a LUT (lookup table, a fixed colour transform) built from the client's real photography, applied to the generation so that the two share a colour science; DaVinci Resolve or Capture One.
- Compositing real elements: a real hand, a real shadow, real steam shot on black and screened over.
- Shooting plates: half a day with a camera at the real location produces backgrounds, skies, textures and a lighting reference that every generation then has to match. A plate costs less than the retouching it saves.

### 5.4 The human eye on every frame rule

Every delivered still is reviewed at 200 percent by a person other than the operator, with a checklist (section 8.1). Every delivered generated clip is scrubbed frame by frame at the cut points and watched at 100 percent in full; for a 15-second clip at 24 fps that is 360 frames, about 20 minutes. The reason: the tells above occur at a known rate per generation, the client's audience includes the two percent who will see them, and on a luxury account the two percent are the buyers.
