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
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. The stance

The machine supplies speed and breadth: 200 explorations in an afternoon, a set extension in an hour, a previs (pre-visualisation: a rough moving sketch of a film made before the shoot to test framing, pace and coverage) before the client meeting. The person supplies the decision and the standard: which two of the 200 survive, why, and what is still wrong with them. Every rule in this file follows from that division of labour.

Three house positions, stated once and applied throughout:

- Generated material is a draft until a person has examined every pixel or frame at 100 percent. The reason: the defect classes in section 5 are systematic, the models produce them at a known rate, and a client in jewellery or hospitality will see the merged chain link or the staircase that leads nowhere before the agency does.
- The hero asset is real. The piece of jewellery, the dish, the actual suite at the actual hotel, the face of the talent, the view from the actual balcony: photographed, with a release. Generation is used around the hero: environment, extension, motion, variants and cleanup. The hero itself stays photographed. The reason is legal as much as aesthetic: section 7 explains why a purely generated image is unprotectable in the US and uncertain in India, and why a generated jewel is a misrepresentation of the product.
- Defaults are the enemy. Every model has a median output (section 10). A luxury brand pays for the specific. The prompt, the references and the post-production exist to pull the output away from the median and towards the house tokens (design tokens: the named colour, type, radius and spacing values the house reuses; design-taste, section 7) and the brand's own world (design-taste, references/worlds.md).

## 2. The landscape as of October 2026

Prices are list prices in US dollars; plans change monthly, so re-check the vendor page before quoting a client. "Verified" with a date means the vendor's own page, terms or catalogue was read on that date (29 October 2026 for this revision); "reported" means a secondary source; "not verified" means no source could be read in this pass. Section 8.6 turns these prices into a quote.

### 2.1 Image models

| Tool | Maker and version as of October 2026 | What it is good for | What it ruins | Commercial terms and price |
|---|---|---|---|---|
| Midjourney | V7 (April 2025; the default from June 2025 until 11 June 2026). V8 alpha on alpha.midjourney.com from 17 March 2026; V8.1 released on midjourney.com on 30 April 2026 and the default from 11 June 2026; V8.2 launched 24 July 2026 with reworked aesthetics and new personalisation profiles, and its announcement does not say it became the default, so check the version setting (Midjourney update posts, verified October 2026). V8 renders standard images about five times faster than V7, adds --hd (native 2K) and keeps a --q 4 mode for "a little bit of extra coherence"; --hd, --q 4, sref (style reference) and moodboard jobs run about four times slower and cost about four times a standard job, "for now" (V8 Alpha post, 17 March 2026; not re-confirmed for V8.1 and V8.2 in this pass). V7 personalisation profiles, moodboards and srefs carry over to V8. Omni Reference (--oref) is V7-only; V8.x replaces it with the Edit Model (--edit, written instructions plus up to four reference images). Video V1 (June 2025) animates a still into 5-second clips extendable in 4-second steps to about 21 seconds | Mood, light, atmosphere, styleframes (finished-look frames for one shot; section 6.2), moodboards, fashion and interiors exploration; the strongest aesthetic prior in the field | Anything requiring a specific product, exact text, exact architecture; produces the "Midjourney look" (section 5) unless fought | Basic $10, Standard $30, Pro $60, Mega $120 a month; about 20 percent off annually. Companies with more than $1 million annual gross revenue must be on Pro or Mega for commercial use. No permanent free tier. Pro and Mega add Stealth mode (private generations), which the house requires for client work |
| Flux (Black Forest Labs) | FLUX.2 family released November 2025: pro, flex and open-weight dev variants, up to 4 megapixels, multi-reference conditioning (several reference images in one prompt); FLUX.2 klein (4 billion parameters, sub-second); FLUX.1 Kontext (May 2025) for instruction-based editing of an existing image. A FLUX 3 family exists: Higgsfield's model catalogue lists FLUX 3 Video and FLUX 3 Video Edit from Black Forest Labs (read 29 October 2026); the FLUX 3 image model's release date and licence were not verified in this pass | Photoreal product-in-environment composites, instruction edits ("replace the sky", "change the sofa to linen"), self-hosted pipelines where the client's assets never leave the agency machine, LoRA training (Low-Rank Adaptation: a small trained weight file that adapts a base model to a subject; section 6.4) | Text in images is weaker than Ideogram; the dev weights are non-commercial without a licence | FLUX dev weights carry a non-commercial licence; commercial use needs a BFL licence or an API (application programming interface) partner (fal, Replicate, Krea). Pro and flex are API-only, priced per image |
| Ideogram | 3.0 (March 2025) with style references; a version 4 is cited by some 2026 sources (not verified: ideogram.ai refused automated reading in October 2026) | Text inside the image: posters, wordmarks, packaging mockups, menu boards, signage; it reads and sets Latin text reliably | Photographic skin and luxury light; Devanagari and Arabic shaping (section 5.1) | Free tier exists; paid plans from about $8 a month (reported); check ideogram.ai/pricing |
| GPT Image (OpenAI) | gpt-image-1 (April 2025) and gpt-image-1.5 (December 2025), followed by gpt-image-2 and two gpt-image-2.5 variants; OpenAI's API pricing page lists gpt-image-2, the 2.5 variants, gpt-image-1.5 and gpt-image-1-mini, and no longer lists gpt-image-1 (verified 29 October 2026) | Instruction following, legible text, layout-aware graphics, quick edits in conversation, infographics; strong world knowledge (it knows what a Jaipur jharokha is) | A flat, slightly yellow default cast and smooth skin; weak at the specific photographic look a fashion editorial needs | Included in ChatGPT Plus ($20) and Pro ($200); the API bills image generation per token, and the pricing page gives no per-image figure, only a calculator in the image guide (verified 29 October 2026) |
| Google Imagen and Nano Banana | Imagen 4 (2025); Nano Banana (Gemini 2.5 Flash Image, August 2025); Nano Banana Pro (Gemini 3 Pro Image, 20 November 2025) with 4K output, strong text and up to 14 reference images, keeping the resemblance of up to 5 people (Google's launch post); Nano Banana 2 (gemini-3.1-flash-image), the cheaper tier | Identity-preserving edits: keep the product, change the environment; multi-reference composites; relighting a real photograph; text in several scripts; the best value editing tool of 2026 | Invents architecture freely when asked to extend; SynthID (Google's invisible watermark) is embedded in every output, which is a benefit for provenance and a fact to disclose to clients | Free in Gemini app with limits; Google AI Pro about $20 a month. Gemini API paid tier: Nano Banana Pro $0.134 an image at 1K or 2K and $0.24 at 4K; Nano Banana 2 $0.045 at 0.5K to $0.151 at 4K (verified at ai.google.dev pricing, 29 October 2026). Outputs carry SynthID and, in the Gemini app, C2PA credentials (signed provenance records; section 7.7) |
| Stable Diffusion and ComfyUI | SD 3.5 (October 2024) and SDXL remain the open backbone; ComfyUI is the node-based interface (a graph of operations where each node is a model, a sampler or a filter) used for repeatable pipelines | Full control: ControlNet (conditioning on edges, depth or pose), IP-Adapter (image prompt adapters), LoRA stacking, batch pipelines, exact seed control (section 3.5), running offline on client NDAs (non-disclosure agreements) | Out-of-the-box aesthetics are dated; needs an operator who understands samplers, CFG (classifier-free guidance: how strongly the model follows the prompt) and VAEs (variational autoencoders: the component that converts between pixels and the model's compressed latent image) | Stability AI Community License: free for organisations under $1 million annual revenue, including commercial use; above that an Enterprise licence is required. Covers SD 3.5 suite, SDXL Turbo, Stable Audio 3.0, Stable Fast 3D (verified at stability.ai/license, October 2026) |
| Adobe Firefly and Photoshop | Firefly Image Model 4 and 4 Ultra (April 2025), Firefly Image Model 5 (October 2025, native 4 megapixel, layered editing); Generative Fill and Generative Expand in Photoshop since 2023; the Firefly app also hosts partner models (GPT Image, Imagen, Veo, Flux, Runway, Luma, Topaz, ElevenLabs) | Retouching, cleanup, expanding a crop for a new aspect ratio, removing a fire extinguisher from a lobby plate (a clean photograph of the location made for compositing), matching a plate's noise; the enterprise indemnity | Hero generation: Firefly's own models trail Midjourney and Flux on light and material; partner models inside Firefly do not carry Adobe's indemnity, and Photoshop's Generative Fill model picker also offers partner models (Google's Gemini 2.5 Flash Image and Black Forest Labs' FLUX.1 Kontext from September 2025, reported), so choosing a model there is a legal choice | Included in Creative Cloud with generative credits; Firefly Standard, Pro and Premium plans. Adobe states its own Firefly models are trained on Adobe Stock, openly licensed and public-domain content and offers IP (intellectual property) indemnification to enterprise customers for those models only; confirm the current scope with Adobe before relying on it in a client contract |
| Magnific | Owned by Freepik since 2024; upscaler and Relight; Precision V2 upscaler (2025) | Upscaling a 1 megapixel generation to print size while adding plausible texture; relighting a product plate | Over-detailing: it invents pores and fabric weave where none exist, which reads as the "sharpened AI" tell at 100 percent | Pro, Premium and Enterprise tiers from about $39 a month (reported; the pricing page could not be read at the time of writing) |
| Topaz Labs | Gigapixel (image), Photo, Video; model families Wonder 2 and 3, Starlight Precise, Proteus, Iris, Nyx | Faithful upscaling of real photography (Standard, High Fidelity), face recovery, video denoise and upscale to 4K; Starlight for generated video cleanup | Creative upscalers (Redefine, Wonder) hallucinate; keep them away from product shots | Gigapixel $29 a month or $149 a year; Photo $39 a month or $199 a year; Video $59 a month or $299 a year; Pro tiers $499 to $699 a year (verified October 2026) |
| Krea | Real-time canvas, Enhancer, and a host for third-party video models (Veo 3.1, Seedance, Kling) | Drawing-to-image in real time during a client call, fast style tests, one subscription for many video models | Nothing it hosts is exclusive; the enhancer invents | Free with 100 units a day; Basic $9, Pro $35, Max $105, Business $200 a month (lower with annual billing) |
| Qwen-Image (Alibaba) | Qwen-Image and Qwen-Image-Edit (August 2025), open weights; a multi-image edit release followed in September 2025 (reported; check the current release name before installing) | Strong text rendering, instruction edits and LoRA training run locally in ComfyUI: the house's offline equivalent of Nano Banana for NDA product-in-environment edits | Generic default aesthetic; needs the same compositing discipline as every generator | Apache 2.0 licence: commercial use with no revenue threshold; no indemnity |
| Bria | Fibo and Bria image models, background removal and replacement through an API | A cleared route for hero-adjacent (sitting next to the real hero product, or in a paid placement) environments and product cut-outs: Bria states its models are "trained exclusively on 100% fully-licensed, commercial-grade data" | Aesthetic trails Midjourney and Flux | Free for 100 generations; pay-as-you-go from $0.018 a generation (Fibo $0.032 an image) with capped standard indemnification; Enterprise with unlimited IP indemnification (verified at bria.ai/pricing, 29 October 2026) |

### 2.2 Video models

Capabilities compared on the axes that matter for a brand film: duration per generation, resolution, native audio (the model generates sound with the picture), camera control, image and video references, character consistency.

| Tool | Version as of October 2026 | Duration and resolution | Audio | Camera and references | Price as of October 2026 | Notes |
|---|---|---|---|---|---|---|
| Google Veo | Veo 3.1 (October 2025); Veo 3.1 Lite is listed in Higgsfield's catalogue | 4, 6 or 8 seconds; 720p, 1080p, 4K; extension to longer sequences | Native audio with dialogue, effects and ambience | Up to 3 reference images, first and last frame, prompt-driven camera | Veo 3.1 no longer appears on the Gemini API pricing page (read 29 October 2026); Flow, Gemini app and Vertex AI prices not verified in this pass | Google's deprecations table schedules the Gemini API preview endpoints for Veo 3.1 (generate, fast and lite) for shutdown no earlier than 22 October 2026, and the Veo 3.0 and Veo 2.0 GA (generally available) endpoints no earlier than 30 June 2026; the table calls these "the earliest possible retirement dates" and says exact dates are announced in advance. It names gemini-omni-1.1-flash as the replacement, with the GA models on the Gemini Enterprise Agent Platform as the alternative for the older endpoints (verified at ai.google.dev/gemini-api/docs/deprecations, October 2026). Veo remains available in Flow, Gemini, Vertex and Higgsfield |
| Google Gemini Omni Flash | gemini-omni-1.1-flash (2026) | 360p, 720p default, 1080p and 4K upscaled; 16:9 and 9:16; extension of 3 to 10 seconds per continuation, up to 40 seconds total | Native audio; no voice editing or audio reference upload | Reference images, first and last frame, subject reference, up to 3 reference clips of 3 seconds, multi-turn conversational editing of generated or uploaded (10 second max) video | About $0.10 a second of 720p video on the Gemini API paid tier ($17.50 per million output tokens; verified 29 October 2026) | SynthID on every output; uploaded video editing unavailable in the EEA (European Economic Area), Switzerland and the UK; no negative prompt field (verified at ai.google.dev, October 2026) |
| OpenAI Sora 2 | Sora 2 and Sora 2 Pro (30 September 2025) with the Sora app and "cameos" (consented likeness insertion). OpenAI announced the discontinuation on 24 March 2026 (reported); the consumer app and sora.com closed on 26 April 2026 (reported); OpenAI's model page states that the Sora 2 models and the Videos API were shut down on 24 September 2026 and that "there is no one-to-one replacement API" (verified at developers.openai.com, October 2026) | Was 4 to 20 seconds (reported); 1280 by 720 on Sora 2, up to 1920 by 1080 on Sora 2 Pro | Native audio including dialogue | Image references; cameo for consented people | Was $0.10 a second (Sora 2) and $0.30 to $0.70 a second (Pro, by resolution) on the API (archived model page) | Unavailable. Kept in the table because client decks and the higgsfield-prompting skill still name it, and because its shutdown is the clearest lesson in section 7.2: a pipeline built on one vendor's model has a life of about a year |
| Kling (Kuaishou) | 2.1 (May 2025), 2.5 Turbo (September 2025), 2.6 (December 2025, native audio), O1 (unified multimodal), and the 3.0 family (Video 3.0, Video 3.0 Omni with reference control and a multi-shot storyboard, Image 3.0 Omni; launch reported as 4 February 2026). Kling's Video 3.0 user guide (February 2026) confirms single-pass audio and video, lip sync in Chinese, English, Japanese, Korean and Spanish, 3 to 15 seconds, 720p and 1080p output, and multi-shot generation (its example uses six shots; the number of shots is set by the user). Higgsfield's catalogue also lists Kling 3.0 Turbo and a Kling 4.0 (read 29 October 2026; Kling 4.0's specification not verified in this pass) | 3 to 15 seconds on 3.0 (up from a 10-second maximum on 2.6); 720p and 1080p; Higgsfield exposes std, pro and 4k modes for Kling 3.0 (catalogue read 29 October 2026); a 60 fps (frames per second) tier cited by one review is not in Kling's guide | Optional native audio from 2.6, single-pass audio on 3.0; on Higgsfield, sound off costs fewer credits | Elements (up to 4 reference images for subject consistency), start and end frame (two images between which the model generates the motion), motion control from a reference performance, 50 or more camera presets inside Higgsfield | Kling's own pricing pages returned no readable prices in October 2026; quote from Higgsfield credits | The workhorse for image-to-video of real plates; see the higgsfield-prompting skill for the three-layer prompt system and the start and end frame technique. Kuaishou is headquartered in China: check the data table in section 7.3 before any NDA upload |
| Runway | Gen-4 (March 2025), Gen-4 Turbo, Aleph (25 July 2025), Gen-4.5 (December 2025), Aleph 2.0 (2026; one vendor source dates it 21 May 2026 with Edit Studio, another 29 July 2026; not verified against Runway); Act-Two for performance capture | 2 to 10 seconds; 720p native, upscale to 1080p and 4K; Aleph 2.0 edits inputs up to 30 seconds at up to 1080p (reported) | Added separately (no native audio on Gen-4; Gen-4.5 audio status unclear across sources) | Gen-4 References for consistent characters and objects; Aleph edits an existing shot: add, remove or transform objects, generate any angle of the scene, modify style and lighting (verified at runway.com/research) | Free with 125 one-time credits, Standard $15 (625 credits a month), Pro $35 (2,250), Max $95 (9,500); annual $12, $28 and $76 (verified at runway.com/pricing, October 2026). Gen-4.5 costs 12 credits a second (about $0.19 a second on Pro); Aleph 2.0 costs 140 credits per 5 seconds (about $2.18 an edit on Pro) | Standard buys about four Aleph edits a month, so a film needs Pro or Max. Aleph is the house tool for set extension and relighting on real footage |
| Higgsfield | Aggregator. Engines in its catalogue on 29 October 2026 (read through Higgsfield's own model interface): Kling 2.6, 3.0, 3.0 Omni, 3.0 Turbo and 4.0; Veo 3.1 and 3.1 Lite; Gemini Omni Flash 1.1; Wan 2.6, 2.7 and 3.0; Seedance 1.5 Pro, 2.0 and 2.5; MiniMax Hailuo and H3; xAI Grok Video 1.5; FLUX 3 Video; Sync Lipsync 3 and a dubbing tool; Topaz upscaling; its own Cinema Studio (3.0 to 4.0), Soul (image), Popcorn (storyboard) and Marketing Studio. Sora 2 is no longer listed | Inherits the engine | Inherits | 50 or more camera presets stackable up to 3; Soul ID (Higgsfield's identity model, trained on photographs of one person); start and end frame | The pricing page returns no plan data to automated reading; the house account is on an Ultimate-class plan; confirm the plan price and the credits per engine in the app before quoting | Terms of Higgsfield Inc. (California law, updated 23 October 2026, verified): Higgsfield claims no ownership of inputs or outputs and does not restrict commercial use of outputs; the user grants a worldwide, royalty-free licence, and content "may be used by Company to train" its models except under an Enterprise Agreement; content in shared areas may be seen and reused by other users; no indemnity runs to the user (section 12 has the user indemnify Higgsfield); content is kept 30 days after account deletion and then deleted, except content already used in training; where an upstream provider's policy is stricter, it governs. The house consequence is in section 7.3. Cross-reference the higgsfield-prompting skill before writing any Higgsfield prompt |
| Luma | Ray3 (September 2025), Ray3.2 current (verified at lumalabs.ai, October 2026) | 5 or 10 seconds native; 360p to 1080p; Modify Video to 20 seconds at 24 fps; Reframe to 12 or 16 seconds | No native audio on text or image to video; Modify and Reframe keep the source audio | Native 16-bit colour, HDR (high dynamic range) at 2x credits, EXR (OpenEXR, a 16 or 32-bit floating-point image format) export in ACES2065-1 (AP0, the archival ACES colour space) at 3x; Modify Video for restyling real footage | Plus $30 (10,000 credits), Pro $90 (40,000), Ultra $300 (150,000) a month, or $25, $75 and $250 a month billed yearly; commercial use from Plus (verified at lumalabs.ai/pricing, 29 October 2026) | The only model exporting a grade-ready EXR, which matters when the film is finished in DaVinci Resolve |
| Pika | Pika 2.5 is the latest video model listed (verified at pika.art/pricing, 29 October 2026), with Pikaframes (keyframe transitions) and Pikaffects | Up to 10 seconds; 1080p | Lip-sync and effects; Pika Speech, Music, Soundtrack and SFX (sound effects) listed | Keyframes | Starter $10 (900 credits), Creator $35 (3,150), Fancy $95 (8,550 and up); commercial licence on paid plans only; about 20 percent off annually (verified 29 October 2026) | Social-first; the effects library reads as a trend tool, which the house avoids for luxury clients |
| Hailuo (MiniMax) | Hailuo 02 (June 2025), 2.3 (October 2025); MiniMax H3 and H3 Max listed in Higgsfield's catalogue (29 October 2026) | 6 or 10 seconds; 1080p | None native on 02 and 2.3 | Strong physics and fabric motion, subject reference | Not verified in this pass | Fabric and crowd tests only, no finals: MiniMax is a defendant in the studios' output case (section 7.2). Headquartered in China (section 7.3) |
| Adobe Firefly Video | Firefly Video Model (public beta February 2025) and partner models in the Firefly app | 5 seconds; 1080p | None native | Image to video, camera angle presets | Creative Cloud and Firefly plans (not re-verified in this pass) | The only video model with Adobe's commercial-safety position; quality trails the leaders |
| Moonvalley Marey | Marey (public launch July 2025, reported), described by Moonvalley as trained only on licensed footage | Not verified in this pass | Not verified | Camera and motion control from reference frames (reported) | Not verified: the pricing page could not be read | The candidate alternative to Firefly Video for hero-adjacent B-roll (supporting footage cut around the main action), once its plan terms and any indemnity are confirmed in writing |
| Seedance (ByteDance), Wan (Alibaba), LTX-2 (Lightricks) | Seedance 2.0 and 2.5; Wan 2.6, 2.7 and 3.0; LTX-2 (versions as listed in Higgsfield's catalogue, 29 October 2026) | Varies; LTX-2 open weights with native audio | Seedance 2.x and Wan 3.0 generate audio | Wan 2.1 and 2.2 open weights (Apache 2.0) run locally in ComfyUI; later Wan versions shipped through Alibaba Cloud and hosts first (reported), so check whether weights exist before planning local use | Per host or licence; check LTX-2's licence for a revenue threshold before commercial use | Open weights matter for NDA footage that cannot be uploaded. Seedance 2.0 drew studio cease-and-desist letters and a Motion Picture Association statement in February 2026 (reported), so the house treats Seedance as tests only |

### 2.3 Audio

| Tool | Status October 2026 | Use | Licence position |
|---|---|---|---|
| ElevenLabs | Eleven v3 (alpha June 2025, generally available February 2026) with audio tags for emotion and pacing; Eleven Music (August 2025, Music v2 May 2026); Sound Effects at 200 credits each; Music at 900 credits a minute; dubbing | Scratch voiceover for previs, final VO (voiceover) where the client has a cloned, consented voice, bespoke sound effects, dubbing an approved film into Hindi or Arabic with the talent's consent | Free (10,000 credits a month) carries no commercial licence. Starter ($6 a month list; 30,000 credits) is the first plan with a commercial licence and "music commercial use"; Creator $22, Pro $99, Scale $299, Business $990 (verified at elevenlabs.io/pricing, October 2026). Eleven Music was launched with Merlin and Kobalt licensing deals; confirm the current cleared status for broadcast use |
| Suno | v5 (September 2025). Warner Music settled its case with Suno in November 2025; Suno agreed to introduce licensed models in 2026 that replace the current ones, with download limits; Universal and Sony were reported at an impasse with Suno as of April 2026 (not re-verified after that date in this pass) | Temp tracks, pace references for an edit, pitch mood | Paid plans grant commercial rights to songs made while subscribed; free tier is non-commercial. Until the licensed models ship and the Universal and Sony claims resolve, the house does not put Suno audio in a final deliverable |
| Udio | Universal settled on 30 October 2025 with a licence and a walled-garden platform for 2026; downloads were disabled; Warner settled in November 2025; Sony had not settled as of April 2026 | Same as Suno | Same rule: temp only |
| Adobe Enhance Speech | In Adobe Podcast and Premiere | Cleaning location dialogue and client testimonial audio | Covered by Creative Cloud terms |
| Stable Audio | Stable Audio 2.x and Stable Audio Open; Stable Audio 3.0 listed under the Community License | Sound beds, ambiences, loops | Community License rules as for images (under $1 million revenue free); Stability describes the 2.x models as trained on licensed music (AudioSparx; reported) |
| Adobe Firefly Generate Soundtrack and Generate Speech | Announced at Adobe MAX, October 2025, in the Firefly app (public beta, reported) | Music beds timed to an uploaded clip for social cuts; scratch and final speech | Adobe positions Generate Soundtrack as commercially safe; whether the enterprise indemnity extends to it, and which partner voice models sit inside Generate Speech, were not verified in this pass, so it stays temp until confirmed in writing |

Music for a final film still comes from a composer, a licensed library (Artlist, Musicbed, Epidemic) or a direct sync licence; the reason is section 7.2, and 15-lighting-and-sound.md, section 12, covers sourcing and licensing.

### 2.4 3D

| Tool | Status | Use | Terms |
|---|---|---|---|
| Meshy | Meshy 6 generation (a "Meshy 6 Lite" tier is named on the pricing page) | Image to mesh for previs props, quick set dressing, a chandelier silhouette for a lighting test | Free: 100 credits, outputs under CC BY 4.0 (attribution required, so unusable for client work); Pro $20 (1,000 credits), Premium $40 (3,000), Ultra $100 (8,000), Studio $70 shared (5,500); paid plans grant private, customer-owned assets (verified October 2026) |
| Tripo | Tripo 3.x | Same class as Meshy; strong PBR (physically based rendering) texture output | Pricing page could not be read at the time of writing |
| Luma Genie | Text to 3D inside Luma | Fast concept objects | Luma plan terms |
| Spline AI | Web-native 3D editor with AI generation | Interactive 3D on a microsite, product spin | Spline plan terms |
| Gaussian splatting capture | Polycam, Scaniverse and KIRI Engine capture on a phone or camera; Jawset Postshot trains the splat on a desktop GPU (graphics processing unit). A Gaussian splat is a 3D scene built from millions of small coloured ellipsoids fitted to photographs | A navigable, photoreal capture of a real place: a recce (the location visit before a shoot) record for planning camera moves with true parallax, web walkthroughs of a real property, virtual-production backgrounds (see 21-web-design-and-digital-craft.md for web delivery) | A splat of a real property is capture and may be shown as the property; plan terms not verified in this pass |
| Generated worlds | World Labs Marble (November 2025); Google Genie 3 (research preview, August 2025) | Previs of spaces and camera paths before a recce | Previs only; a generated world is never presented as a property |

None of these produce a jewellery-grade or furniture-grade model. The reason: generated meshes carry baked lighting, smeared topology and invented detail; a hero product render still needs a modelled asset (Blender, Cinema 4D, KeyShot) or a photograph (see 13-motion-graphics-and-3d-production.md, section 8, for modelled 3D).

### 2.5 Design tools

| Tool | What it does | Craft risk | Terms as of October 2026 |
|---|---|---|---|
| Figma AI and Figma Make | Make (Config, May 2025) turns a prompt or an existing design into a working prototype or app; AI also renames layers, writes copy, generates images and finds visual matches | Make's default output is the median web app of 2025: Inter, a grey border radius card grid, a gradient hero. Section 9.3 gives the finishing standard | AI credits come with paid Figma seats; seat and credit prices not verified in this pass |
| Figma Weave | Node-based generative canvas from Weavy, which Figma acquired in October 2025: prompts, models, references, relighting and upscaling chained into a saved graph | A saved graph is a reproducible house recipe that the sidecar can cite (section 8.3); the default outputs still carry each model's median | Not verified in this pass |
| Adobe Firefly Boards | Moodboarding canvas in the Firefly app (2025) that generates into the board with Adobe and partner models | Pulls generated images into moodboards, against the rule in section 6.2; partner models lose Adobe's indemnity | Firefly and Creative Cloud plans |
| Flora, Freepik Spaces, Google Mixboard | Node and board canvases for multi-model generation; Mixboard is a Google Labs experiment (2025) | As Weave and Boards | Not verified in this pass |
| Framer AI | Wireframer and Workshop generate sections and pages inside Framer | Same median; useful only as a layout skeleton under house tokens | Framer site plans; not verified in this pass |
| Canva AI (Magic Studio, Canva Code) | Generates full layouts, images and small apps | The house avoids the Canva look: rounded bento cards, pastel gradients, stock illustration people, Canva Sans and its clones, uniform radius. It is a widely recognised "made in minutes" signal in the Indian and Gulf market | Canva Pro and Teams; Canva Shield for enterprise (reported) |
| Adobe Sensei features | Content-aware fill, auto-select subject, neural filters, Enhance Speech, auto-reframe in Premiere | Safe; they retouch and edit and leave the taste decisions untouched | Creative Cloud |
| Relume | AI sitemap and wireframe generator with a component library; exports to Webflow, Figma and Framer | Good for structure and IA (information architecture) on a 12-page hotel site; the wireframes are a structural draft and every page is redesigned from the house tokens before any skin is applied | Not verified in this pass |
| Galileo AI | Text-to-UI generator; acquired by Google in 2025, its product continuing as Google Stitch (launched at Google I/O, May 2025; reported) | Historical as a brand; Stitch carries the same generic output problem (section 9.2) | Not verified in this pass |
| Uizard | Wireframe and mockup generator; acquired by Miro in 2024 | Workshop sketching only | Not verified in this pass |

### 2.6 Code and product tools

| Tool | Use at Mask360 | Terms as of October 2026 |
|---|---|---|
| v0 (Vercel) | React and Next.js components from a prompt or a Figma frame; good for a scroll-driven microsite skeleton | Free (7 messages a day), Plus $30 a user a month, Business $100 a user a month, Enterprise custom (verified at v0.app/pricing) |
| Lovable | Full-stack prototype with Supabase; fast for a client portal demo | Free (5 daily build credits, capped at 30 a month, plus 20 Cloud credits), Pro, Business, Enterprise with volume credit pricing; paid plan credits expire two months after issue; the plan prices were absent from the pricing page as read in October 2026, so quote from the live page. Lovable states that the user owns the code, subject to third-party rights in the underlying models |
| Bolt (StackBlitz) | Same class as Lovable, in-browser | Pricing page could not be read at the time of writing |
| Cursor | AI editor for the production codebase | Hobby free, Pro about $20, higher tiers above (reported) |
| Claude Code | Agentic coding in the terminal; the house builds its microsites and web pages with it | Anthropic Pro and Max plans or API |

### 2.7 Research and writing assistants

Claude, ChatGPT, Gemini and Perplexity for desk research, synthesis and first drafts. Two rules: every factual claim in a client deck is traced to a source the person has opened, and no assistant writes final client copy, because the mask360-copywriting skill's 15 rules and the house voice are the product. Assistants are good at structure, counter-arguments, translation drafts and summarising a 90-minute transcript; they ruin voice, and they invent quotations (section 9.2).

- Source-grounded tools: NotebookLM (Google) answers only from the sources uploaded to a notebook, with citations to the passage: a client's brand book, interview transcripts, a project's filings with RERA (India's state real estate regulatory authorities). It is the house default for synthesis over a closed set of documents, because it does not wander onto the open web.
- Deep-research modes (ChatGPT, Gemini, Claude, Perplexity) produce a cited report in minutes. Every citation is opened to confirm it exists and says what is claimed, because these modes attach citations that do not support the sentence; until each claim has been opened, the report is a reading list.
- Privacy tier: client material goes only to business or enterprise tiers and APIs that do not train on inputs (the data table in section 7.3).
- Transcription: accuracy drops on code-switched Hinglish and Gulf Arabic, so a native speaker corrects the transcript before analysis (see 08-ux-research-and-strategy.md, section 18).

### 2.8 What each tool is for and what it ruins

| Task | First choice | Second | Never |
|---|---|---|---|
| Moodboard and styleframes | Midjourney V8.x with sref (a style reference image or code; section 3.4) built from the client's photography | Flux 2 pro | Canva AI |
| Product in a new environment, product untouched | Nano Banana Pro or Flux Kontext on the real product shot | Photoshop Generative Fill | Any text-to-image of the product |
| Text in an image | Ideogram or GPT Image for Latin; composite real type for Devanagari and Arabic | Nano Banana Pro | Midjourney |
| Expanding a crop | Photoshop Generative Expand | Nano Banana | Upscalers |
| Upscale for print | Topaz Gigapixel High Fidelity on real photography; Magnific for generated | Topaz Wonder | Krea enhancer on product |
| Motion from a real still | Kling 2.6 or 3.0 via Higgsfield, image to video | Veo 3.1 or Omni Flash | Pika effects |
| Edit a real shot (remove, relight, new angle) | Runway Aleph | Luma Modify | Regenerating the shot |
| Scratch voiceover | ElevenLabs v3 | Adobe | Any free tier |
| Final music | Composer or licensed library | Direct sync licence | Suno, Udio (until the licensed models ship and the open claims resolve) |
| Hero-adjacent image element that needs indemnity | Firefly Image Model 5 or Getty's generator | Bria | A partner model picked inside Photoshop or Firefly |
| Hero-adjacent video B-roll | Firefly Video | Moonvalley Marey once its terms are confirmed | Hailuo, Seedance (open studio claims, section 7.2) |
| Dubbing and lip-sync | ElevenLabs Dubbing with a consented clone, then Sync Lipsync 3 or HeyGen (section 6.13) | Kling lip-sync | Any unconsented voice |
| A real person's likeness | Consented identity model under the synthetic-use release (section 6.14) | Real footage | xAI's Grok Imagine (sexualised edits of real people in January 2026; section 7.5) |
| NDA product edit offline | Qwen-Image-Edit in ComfyUI | Flux dev under a BFL licence | Any cloud tool that trains on inputs (section 7.3) |
| Site structure | Relume | Figma | Prompted full sites |
| Microsite build | Claude Code with house tokens | v0 | Lovable defaults in production |

## 3. Prompting as art direction

A prompt is a brief to a photographer who has read every photograph ever posted and understood none of them. It responds to the vocabulary of craft because that vocabulary is what the captions in its training data used. Write the brief the way a director of photography would hear it.

### 3.1 The vocabulary that maps to real craft

Each term below maps to something the model has seen labelled thousands of times. Vague words (beautiful, luxury, premium, stunning) map to the median and pull towards the default look. Craft words map to specific distributions.

Camera and lens (14-video-preproduction-and-cinematography.md, section 8, has the real-world optics):

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
| Film stock | A specific colour science and grain | "Kodak Portra 400" (warm skin, soft contrast), "Kodak Ektachrome E100" (cool clean slide), "Fujifilm Pro 400H" (minty greens, pastel), "CineStill 800T" (tungsten, red halation: a red glow around bright lights), "Ilford HP5" (grey monochrome, visible grain), "Kodak Vision3 500T" (cinema tungsten) |
| Medium format | Larger negative look: smooth tonality, shallow depth even at f/4 | "medium format, Hasselblad look, 80mm" |

Lighting (the setups a gaffer would name; 15-lighting-and-sound.md, section 2, has the diagrams and section 7 the prompt equivalents):

| Setup | Effect | Prompt phrase |
|---|---|---|
| Single window, north light | Soft, directional, the painter's light | "single north-facing window light, soft directional, deep shadow side" |
| Rembrandt | Triangle of light on the shadow cheek | "Rembrandt lighting, triangle under the eye" |
| Butterfly or paramount | Beauty light from above, shadow under the nose | "butterfly lighting from above, beauty dish" |
| Split | Half the face lit | "split lighting, half face in shadow" |
| Rim or kicker | Edge of light separating subject from ground | "rim light from behind, edge separation only" |
| Hard sun, noon | Short black shadows, specular highlights (mirror reflections of the light source) | "hard noon sun, short shadows, high contrast" |
| Golden hour | Long warm shadows (and the real-estate cliché; design-taste, section 4) | "late afternoon low sun, long shadows" |
| Blue hour | Cool ambient, warm practicals | "blue hour, interior lamps warm against cool sky" |
| Practicals | Lamps in frame as sources | "lit by practical lamps in frame, no fill" |
| Softbox or octabox | Even soft studio light with a round catchlight (the light source reflected in the eye) | "large octabox camera left, soft wrap" |
| Hard flash, direct | The flat, frontal, unflattering flash of 1990s and 2000s fashion editorial (Juergen Teller's Marc Jacobs campaigns are the canonical case), now a fashion signal | "direct on-camera flash, hard shadow on the wall behind" |
| Gobo or cucoloris | Patterned shadow (blinds, leaves, jali) | "dappled light through a carved jali screen" |

Composition (cross-reference 05-layout-grids-and-composition.md): rule of thirds, centred symmetry when it is the idea, negative space on the side the type will sit, leading lines, frame within a frame (a doorway, an arch), low horizon for sky, high horizon for ground, Dutch angle (tilted camera) almost never, the one-third headroom rule. Phrases: "subject lower third, empty upper two thirds for headline", "framed through the arch", "symmetrical one-point perspective".

Colour and grade (cross-reference 04-colour.md and 16-editing-colour-grading-and-delivery.md): "muted palette, desaturated greens", "two-colour palette: bone and ink", "teal shadows, warm highlights" (the Hollywood default, avoid), "matte blacks, lifted shadows", "no HDR, natural contrast", "film grain visible at 100 percent".

Material: name the material and its finish because the model renders finish before form: "honed travertine" against "polished travertine", "raw linen", "brushed brass", "unlacquered bronze with patina", "hand-knotted wool", "lime-washed wall", "Jaisalmer yellow sandstone", "Makrana marble", "terrazzo", "crushed velvet". The finish words (honed, brushed, matte, raw, hand-knotted) are what read as expensive, because luxury materials are rarely glossy (design-taste, section 2).

Era: "1970s Italian interior photography", "1990s Japanese catalogue", "2000s Prada campaign flatness", "Mughal miniature flatness", "1960s Air India poster". Era terms are safer than artist names (section 3.2).

Mood: describe physical conditions (light, hour, dust, absence). "Stillness, no people, early morning, dust in the light" produces calm; "calm, serene, peaceful" produces stock.

### 3.2 Style references, named people, and the ethics of naming

A model learns a photographer's style from thousands of their images; naming them in a prompt is the most efficient way to steer, and the most contested.

The positions as of October 2026:

- Legal: style is not protected by copyright in the US, India, the UK or the EU; the Getty v Stability judgment of 4 November 2025 ([2025] EWHC 2863 (Ch), Joanna Smith J) found that model weights do not store copies and so are not infringing copies; Getty was reported to have obtained permission to appeal that point in December 2025 (section 7.2). Naming a living artist does not in itself infringe copyright. It can raise a right-of-publicity claim (the US state-law right to control commercial use of one's identity) or a passing-off claim (the common-law wrong of misrepresenting goods or services as another's) where the output is marketed as theirs, and it is the central grievance in Andersen v Stability AI (Northern District of California, ongoing) where a list of about 16,000 artist names used in Midjourney's training surfaced in filings in January 2024.
- Ethical: the living photographers whose names appear in prompts (and whose work was scraped without consent) object; the house works with photographers and expects to be hired by them.
- Practical: name-based steering is unstable across versions; a style reference image (section 3.4) steers more precisely and does not depend on the model knowing a name.

The house position: never name a living photographer, director, painter or designer in a prompt for client work. Describe the quality ("direct flash, flat, unretouched, 35mm, 2000s fashion editorial") or use a style reference built from the agency's own photography or licensed images. Dead artists and movements (Vermeer's window light, Bauhaus, Mughal miniature, Pictorialism) may be named. Living brand names (Aman, Loewe, Bottega) are never put in a prompt either: the output could carry their trade dress (the protected overall look of a product or its packaging) into a competitor's campaign, which is a trade mark exposure (section 7.5) and a taste failure.

Descriptors for named references. A living name is never put in a prompt, so the descriptor carries the look. A dead name may be used during exploration; finals use the descriptor, so the prompt record names no one. Estates and archives still hold copyright in the works, so a close copy of a specific photograph remains infringement (the near-copy check, section 8.1).

| Reference | Status | Descriptor to prompt |
|---|---|---|
| Wes Anderson | Living: never named | Planimetric frontal staging, centred symmetry, pastel palette, flat even light |
| Wong Kar-wai with Christopher Doyle | Living | Step-printed motion blur, saturated green and red practicals, smeared foreground, handheld |
| Roger Deakins | Living | Single motivated source, silhouettes against bright windows, restrained palette |
| Emmanuel Lubezki | Living | Natural light only, wide lens close to the face, long fluid takes |
| Tim Walker | Living | Theatrical sets, oversized props, saturated fairy-tale palette |
| Paolo Roversi | Living | Long exposure, painterly softness, low light |
| Slim Aarons (d. 2006) | Dead; Getty Images holds the archive and polices close copies | Leisure-class poolside, high vantage point, hard bright sun |
| Julius Shulman (d. 2009) | Dead | Modernist houses at twilight, interior lamps balanced against the dusk sky |
| Ezra Stoller (d. 2004) | Dead | Architectural precision, deep focus, straight verticals |
| Irving Penn (d. 2009) | Dead | Still life on a grey backdrop, north light |
| Richard Avedon (d. 2004) | Dead | Full figure on a plain white backdrop, hard even light |
| Guy Bourdin (d. 1991) | Dead | Saturated colour, hard crops, surreal staging |
| Saul Leiter (d. 2013) | Dead | Colour seen through glass, rain and reflections, figures small in the frame |
| Raghubir Singh (d. 1999) | Dead | Layered Indian street colour, many planes in one frame |
| Deborah Turbeville (d. 2013) | Dead | Grainy, faded fashion, figures in empty rooms |
| Peter Lindbergh (d. 2019) | Dead | Natural black and white, unretouched faces, wind |
| Satyajit Ray with Subrata Mitra (d. 1992 and 2001) | Dead | Bounced soft daylight, single-source naturalism |
| Stanley Kubrick (d. 1999) | Dead | One-point perspective; candlelight only (Barry Lyndon, 1975) |

### 3.3 Prompt structure

A structure that works across models because it mirrors a caption: subject, action, setting, light, camera, style, constraints, negatives.

1. Subject: who or what, with material and finish. "A woman in her forties in a raw silk ivory sari."
2. Action: one verb, present tense. "Adjusting an earring in a mirror."
3. Setting: specific place and time. "In a lime-washed room at a Jaipur haveli, 7am."
4. Light: one key (the main light), named, and the fill (the secondary light that lifts the shadows) stated. "Single north window camera left, no fill."
5. Camera: lens, aperture, format. "85mm, f/2, medium format."
6. Style: era, film stock, grade. "Kodak Portra 400, muted, visible grain."
7. Constraints: framing for use. "Vertical 4:5, subject lower half, empty wall upper half for type."
8. Negatives: what the model will add unless told (section 3.8).

Order matters for Midjourney and Stable Diffusion (early tokens weigh more). For Flux, GPT Image and Nano Banana, full sentences in natural language outperform comma lists. For video, the motion prompt is a separate short sentence (the higgsfield-prompting skill's three-layer rule: image prompt, identity prompt, motion prompt kept separate, because lighting instructions in the motion layer cause flicker).

### 3.4 Reference images: sref, oref, cref, image prompts and weights

Definitions, with the October 2026 state:

- Image prompt: an image URL placed at the start of a Midjourney prompt; it conditions the composition and content. Weight with --iw (0 to 3, default 1).
- Style reference (--sref): one or more image URLs or an sref code; it transfers palette, grain, light and finish and ignores content. Weight with --sw (0 to 1000, default 100). The --sv parameter selects the style-reference algorithm version. Random exploration: --sref random. The house keeps a library of sref codes per client world, built only from the agency's and the client's own photographs, so that every look traces back to the brand.
- Omni reference (--oref): introduced with V7 in May 2025; places a specific object, character, vehicle or garment from a reference image into the generation, replacing the V6 character reference (--cref, which still works only on V6 and Niji 6). Weight with --ow (1 to 1000, default 100; use 25 to 50 for style transfer of the object, 300 to 400 for strict identity). Omni reference costs about double the GPU time (the graphics-processor time Midjourney bills against a plan) of a plain prompt. One oref image per prompt. It is a V7 feature: a prompt that needs it carries --v 7.
- Edit Model (--edit): the V8.1 and V8.2 replacement for --oref; a written instruction plus up to four reference images given as URLs, the output taking the first image's aspect ratio unless --ar is set (reported from guides to the Midjourney parameter list, October 2026). For product work it behaves like the instruction editors below, and the same rule applies: the real product shot is the first reference and the instruction protects it.
- Multi-reference in other models: Nano Banana Pro accepts up to 14 reference images and keeps the resemblance of up to 5 people (objects and products fall outside that limit); FLUX.2 accepts multiple reference images for subject and style; Kling Elements takes up to 4 subject references for video; Runway Gen-4 References keeps a character or object across shots; Veo 3.1 and Omni Flash take up to 3 reference images.

The rule for product work: the reference image is the real product shot, lit by the agency, and the generation is asked to change everything except it.

Keeping the house look across model versions. sref codes and personalisation profiles are tied to a model version. V7 brought a new style-reference system in 2025, and --sv selects the older algorithm so that pre-V7 codes still resolve (reported); V7 profiles, moodboards and srefs carry over to V8, at about four times the cost of a standard job (section 2.1). Midjourney Moodboards (2025, reported) build a personalisation profile from uploaded images, a more direct route to a house look than rating history because the uploads are the agency's own photographs. Rule: the sref library records the model version for every code; on each new default model the operator re-tests every code with a fixed seed and three standard test prompts (an interior, a skin close-up, a product environment), compares the results side by side with the previous version, and retires codes that drift.

### 3.5 Seeds and variation discipline

A seed is the integer that initialises the noise from which a diffusion model denoises an image; the same seed, prompt, model version and settings reproduce the same image. Use --seed in Midjourney (0 to 4294967295; on V8.x a repeated seed is reported to give a near-identical image with small differences), the seed field in ComfyUI, Kling, Runway and Veo. Discipline:

- Lock the seed when iterating on wording so that the only variable is the prompt.
- Change only the seed when hunting for a composition so that the only variable is chance.
- Record the seed in the asset's sidecar (section 8.3). A client who approves frame 3 of 20 will ask for "the same, wider" and the seed is the only way back.
- Midjourney's Vary (Subtle) and Vary (Strong), and Flux's strength parameter in image-to-image, are controlled drift; use them after the composition is locked, never before.

### 3.6 Iteration loops

The house loop (the 20-to-2 loop), timed for a styleframe session:

1. Generate 20 at draft quality (Midjourney Draft mode is about 10 times faster at half the GPU cost; Omni Flash at 360p; Flux klein). About 15 minutes.
2. Select 2 against the brief and the design-taste tests (design-taste, section 4, step 7). Reject anything with a tell from section 5. About 10 minutes.
3. Refine: lock seed, adjust light and lens words, add the sref, regenerate 8 variations of each survivor. About 20 minutes.
4. Composite: bring the survivor into Photoshop; replace the product with the real plate, correct the text, grade to house tokens, add grain. About 45 minutes.
5. Upscale once at the end, never earlier (upscaling bakes in artefacts).

Total: about 90 minutes to two finished styleframes. Anything shorter has skipped step 4.

### 3.7 Model-specific syntax

| Need | Midjourney V7 and V8.x | Flux 2 and Kontext | GPT Image | Nano Banana Pro | Stable Diffusion (ComfyUI) | Kling via Higgsfield | Veo 3.1 and Omni Flash | Runway Gen-4 and Aleph |
|---|---|---|---|---|---|---|---|---|
| Aspect ratio | --ar 4:5 | width and height in pixels, up to 4 MP | size parameter (1024x1024, 1536x1024, 1024x1536) | aspect ratio setting, up to 4K | latent size | 9:16, 16:9, 1:1 | 16:9 or 9:16 | 16:9, 9:16, 1:1, 4:3 |
| Style strength | --s 0 to 1000 (default 100; house uses 20 to 80), --raw (less default beautification) | none; describe | none; describe | none; describe | CFG scale 4 to 8 | CFG or creativity slider | none | none |
| Negatives | --no text, --no people | describe the absence in the sentence | describe | describe | negative prompt field | negative prompt field | negative prompt field on Veo 3.1 (none on Omni Flash) | none; use Aleph instruction |
| Reference image | image URL, --sref; --oref on V7, --edit with up to 4 images on V8.x; --cref on V6 | reference images, Kontext instruction | attached image, instruction | up to 14 references | IP-Adapter, ControlNet | Elements, start and end frame | up to 3 references, first and last frame | References, Aleph source clip |
| Weights | --iw, --sw; --ow on V7 only | none | none | none | (word:1.3) syntax, LoRA weights | none | none | none |
| Seed | --seed | seed | none exposed in ChatGPT | none exposed | seed | seed | seed | seed |
| Quality tiers | Draft mode; --q on V7; --q 4 (extra coherence) and --hd (native 2K) on V8, each about 4x a standard job | pro, flex, dev, klein | low, medium, high | Flash and Pro | steps and sampler | Standard, Pro, Turbo | Fast, Lite, Standard; 720p to 4K | Turbo and standard |
| Text rendering | poor | fair | good | good | poor | n/a | n/a | n/a |
| Personalisation | --p (trained on your rating history) | LoRA | none | none | LoRA, textual inversion | none | none | none |
| Experimental | --exp (aesthetics, V7), --w weird, --c chaos | none | none | none | samplers | none | none | none |

Midjourney's --p personalisation parameter trains on the operator's rating history; the house keeps a dedicated account rated against the house worlds so that the bias is the agency's and the median is pushed towards matte, muted and still.

Controls in the two tools the table leaves out (interfaces as of 2025, reported; check the current panel):

| Need | Ideogram 3.0 | Firefly Image Model 5 |
|---|---|---|
| Text | Exact words in double quotes; Magic Prompt (Ideogram's automatic prompt rewriter) off for control | Weak; composite real type |
| Style | Style type (Auto, General, Realistic, Design); up to 3 style reference images | Style reference with a strength slider; visual intensity |
| Composition | Aspect ratio | Composition reference image; camera-angle and lighting presets |
| Negatives | Negative prompt field | Describe in the sentence |
| Colour | Colour palette input | Colour and tone presets |
| Content type | n/a | Photo or Art |

Video camera syntax beyond the table: Runway Gen-4 has no negative field and takes the camera move written in plain text; Luma uses keyframes and named camera concepts; Hailuo 02 accepts camera commands in square brackets such as [Pan left] (reported; verify in the current interface).

Audio prompting (Veo 3.1, Kling 3.0, Omni Flash): dialogue goes in double quotes after a described speaker ('A woman in her forties says: "The room faces the sea."'); sound effects and ambience go in separate sentences ("Sound: rain on the window. Ambience: a quiet lobby."); "no music" and "no subtitles" are written out, because the models add a generic score and burn in captions when dialogue is prompted. Generated audio is a guide track: finals get a sound designer, recorded or library foley and VO from a consented voice (see 15-lighting-and-sound.md, section 11).

### 3.8 Negative prompt lists

What the model will add unless told otherwise. In Midjourney these go after --no; in Stable Diffusion and Kling into the negative field; in Flux, GPT Image and Nano Banana they are written into the sentence ("no text, no logos, no people").

General, every brief: text, watermark, logo, signature, caption, frame, border, collage, split screen, duplicate, cropped, out of frame, low resolution, jpeg artefacts, oversaturated, HDR, over-sharpened, neon, lens flare, bokeh balls, god rays, volumetric fog.

People: extra fingers, fused fingers, missing fingers, extra limbs, malformed hands, deformed face, asymmetrical eyes, cross-eyed, plastic skin, airbrushed, perfect teeth, veneers, doll-like, mannequin, uncanny, bad anatomy, long neck, floating hair.

Product and jewellery: deformed clasp, merged chain, floating stone, missing prong, melted metal, extra links, warped reflection, duplicate product, mirrored logo, wrong proportions.

Architecture and interiors: impossible stairs, windows misaligned, doors to nowhere, floating furniture, melted corners, curved straight lines, extra columns, inconsistent flooring, two horizons, two suns.

Video: morphing, flicker, warping, jitter, texture crawl, sliding feet, extra limbs appearing, face change, object popping, camera shake, speed ramp, zoom in and out at the same time.

Audio (Veo, Kling, Omni Flash; written in the sentence): subtitles, captions, music unless wanted, whooshes, risers, crowd walla.

Taste (the house list): cream background, terracotta, beige minimalism, serif overlay, centred subject, symmetrical hero, teal and orange, golden hour, rim light, volumetric light, cinematic, epic, 8k, ultra detailed, trending, award winning, masterpiece. The last five are prompt folklore (stock phrases copied between prompt-sharing communities) that pull towards the 2022 stock-AI distribution.

## 4. Prompt library by Mask360 category

Worked prompts in the house structure. Each names the model it is written for; the Midjourney ones assume the current default V8.x model (V8.1 is the confirmed default from 11 June 2026; check whether V8.2 has replaced it) with --raw --s 50 and an sref from the client's own photography; any prompt that adds --oref also adds --v 7. Replace the bracketed items. Every prompt here produces an environment, a plate or a styleframe; the hero (the piece, the dish, the suite, the face) is composited from real photography afterwards (section 6).

### 4.1 Hospitality interiors and exteriors

1. Midjourney: "Empty corridor of a 1930s Bombay art deco hotel, terrazzo floor, teak doors, single window at the end, 7am dust in the light, no people, 35mm, f/5.6, Kodak Portra 400, muted, visible grain, vertical 4:5, lower third empty --ar 4:5 --no people, text, chandelier, flowers"
2. Midjourney: "Pool at a Goan laterite villa at blue hour, interior lamps warm against cool sky, still water, one wet footprint on stone, 24mm, verticals corrected, f/8, long exposure 2 seconds, Ektachrome E100 --ar 16:9 --no people, umbrellas, loungers, drone view"
3. Nano Banana Pro (edit of a real plate): "Keep this photograph of the suite exactly as it is. Replace the view through the window with a monsoon sky over the Arabian Sea at 6pm, overcast, soft light consistent with the interior exposure, no sun, no rainbow. Do not change the furniture, the bed linen or the floor."
4. Flux 2 pro: "A desert camp dining tent outside Dubai at dawn, raw canvas walls, unlacquered brass lanterns unlit, a long table in untreated oak set for twelve with linen the colour of bone, sand floor, low sun from the east entering at a 15 degree angle, 50mm, f/4, Fujifilm Pro 400H, no HDR, no people."
5. Kling 2.6 image to video (motion layer only, from the real exterior still): "Slow dolly in through the archway, 5 seconds, smooth, stable, no jitter, no warping, leaves move slightly in the wind."

### 4.2 Jewellery on skin

The piece is always the real photograph; these prompts make the skin, the hand and the environment, then the piece is composited by a retoucher at 200 percent with the clasp, prongs, reflections and contact shadow (the tight dark shadow where an object meets a surface) checked.

1. Midjourney: "Close crop of a woman's collarbone and neck, brown skin with visible pores and fine hair, raw silk strap, no jewellery, single north window camera left, no fill, 100mm macro, f/4, medium format, Portra 400, matte, lower half of frame empty --ar 4:5 --no necklace, earrings, retouching, glow"
2. Midjourney: "A hand resting on a honed travertine ledge, fingers relaxed, natural nails, no rings, hard noon sun from above left casting a short black shadow, 85mm, f/5.6, Ilford HP5 monochrome, visible grain --ar 1:1 --no jewellery, watch, text"
3. Nano Banana Pro (composite): "Place the attached photograph of the ring exactly as photographed onto the ring finger of the attached hand, matching the direction of the sunlight from above left, adding a contact shadow and a soft reflection of the skin in the band. Do not alter the stone, the prongs or the band shape."
4. Flux Kontext: "Change the background behind this hand and ring to a lime-washed wall in deep shadow, keeping the light on the hand unchanged."
5. Kling 2.6 image to video from the composited still: "Camera static, the hand turns 10 degrees towards the light over 4 seconds, stone catches one specular highlight, no other motion, smooth, no warping."

### 4.3 Beauty macro

Beauty frames fail on skin first, so every prompt names pores and vellus hair (fine facial down), and the product is always the real bottle.

1. Midjourney: "Extreme close-up of the corner of an eye and cheek, south Asian skin, visible pores, fine vellus hair lit from behind, a single catchlight from a large octabox camera right, no makeup glow, 100mm macro 1:1, f/8, Ektachrome E100, matte --ar 4:5 --no retouching, airbrushed, glitter, dew, sparkle"
2. Midjourney: "Lips slightly parted, matte texture, natural lip lines visible, hard direct flash from camera, hard shadow on the white wall behind, 2000s editorial flatness, 50mm, f/11 --ar 1:1 --no gloss, teeth, retouching"
3. Flux 2 pro: "A glass dropper of amber serum held between thumb and forefinger against a plain bone-coloured wall, hard sun from the right throwing a refracted caustic across the wall, dust in the air, 100mm macro, f/5.6, Kodak Portra 160, no label on the bottle."
4. Nano Banana Pro (edit of real product): "Keep the attached bottle exactly as it is, including the label text. Place it on a wet black slate surface with one hard light from the upper left, a long specular reflection beneath it and nothing else in frame. Do not alter the bottle."
5. Veo 3.1 image to video from the real macro still: "Static camera, a single drop forms at the dropper tip and falls over 6 seconds, slow motion, natural sound of a drop on glass, no music, no subtitles, no other motion."

### 4.4 Fashion editorial

1. Midjourney: "Full-length figure in an oversized ivory khadi coat standing against a raw concrete wall in a Delhi car park, direct on-camera flash, hard shadow on the wall, flat, unretouched, 35mm, f/8, Fujifilm Superia, 1990s catalogue, off-centre with empty wall to the left --ar 4:5 --no runway, smile, golden hour, bokeh"
2. Midjourney: "Figure walking away down a Jaipur lane at 6am, back to camera, saffron silk dupatta in motion blur, 1/15 second, 28mm, Portra 800, muted pinks of the walls, no faces --ar 9:16 --no tourists, cars, text"
3. Flux 2 pro: "Studio shot on a paper backdrop the colour of wet sand, a figure seated on a plain wooden stool in a black wool column dress, one large octabox camera left, a white bounce right, 85mm, f/4, Hasselblad look, unretouched skin, direct eye contact, still."
4. Hailuo 2.3 image to video (fabric test only; no finals while MiniMax is an output-infringement defendant, section 7.2): "The dupatta lifts and settles in a gust of wind over 6 seconds, body still, camera static, natural fabric physics, no face change."
5. Runway Aleph (on real footage): "Change the time of day to blue hour with warm practical lamps in the shop windows, keep the model, the walk and the camera move unchanged."

### 4.5 Real estate materials and spaces

1. Midjourney: "Detail of a brushed brass door handle on a fluted oak door, fingerprint faintly visible, afternoon side light at 20 degrees, 100mm macro, f/4, Portra 400, matte --ar 4:5 --no render, CGI, gloss, reflection of a person"
2. Flux 2 pro: "Material board photographed from above on a honed grey limestone slab: a square of unlacquered bronze with patina, a swatch of raw linen, a chip of Makrana marble, a sample of lime plaster, each with a hard shadow from a single sun from the upper left, 50mm, f/11, no labels, no text."
3. Nano Banana Pro (edit of a real render or plate): "Keep this interior unchanged. Replace the floor with honed Jaisalmer sandstone in 600 by 1200 millimetre slabs with 2 millimetre grout lines, matching the existing light and reflections."
4. Midjourney: "Empty living room in a Dubai Palm villa, floor-to-ceiling glass on the left, sea light bouncing onto a lime-washed ceiling, a single linen sofa, no decor, no art, morning, 24mm tilt-shift, verticals corrected, f/8, Ektachrome --ar 3:2 --no family, dog, plants, candles, golden hour, drone"
5. Kling 3.0 image to video from the real plate: "Camera dollies left along the glass over 8 seconds, slow and stable, sunlight patch moves slightly, no people, no warping."
6. Nano Banana Pro (virtual staging of a real photograph of an empty unit): "Keep this photograph of the empty apartment exactly as it is: walls, floor, ceiling, windows, the view, every fixture and light fitting. Add only loose furniture: a low linen sofa against the left wall, one oak side table, a wool rug in undyed grey, a single floor lamp, unlit. Match the existing daylight from the windows on the right, with contact shadows under every leg. Do not change the window frames, the view, the ceiling height or any finish." The output is labelled "Virtually staged" in real type and shown beside the unstaged photograph (section 6.3).

### 4.6 F&B

1. Midjourney: "A single ceramic bowl of dal on an unvarnished dark wood table, steam, one hard side light from a window at the left, deep shadow right, overhead crumb and a spoon, 50mm, f/4, Portra 400, matte, no garnish --ar 4:5 --no microgreens, drizzle, splash, sprinkle, tablecloth, flowers"
2. Flux 2 pro: "Bar at a Mumbai hotel at 11pm, backlit bottles out of focus, a cut-crystal glass in the foreground with one large clear ice cube, condensation, warm tungsten practicals, 85mm, f/1.8, CineStill 800T with red halation on the lights, no people."
3. Nano Banana Pro (edit of a real dish photograph): "Keep the plated dish exactly as photographed. Replace the table surface with raw oak and the background with a dark lime-washed wall, keep the light direction from the upper left, add nothing to the plate."
4. Midjourney: "Hands of a chef wiping the rim of a plate with a cloth, kitchen pass steel, overhead fluorescent replaced by a single tungsten lamp, 35mm, f/2.8, motion blur in the cloth, Ilford HP5 --ar 16:9 --no face, smile, fire, flames, tweezers"
5. Veo 3.1 image to video from the real still: "Static camera, steam rises slowly from the bowl for 6 seconds, the natural sound of a kitchen far away, nothing else moves, no music, no subtitles."

### 4.7 Events

1. Midjourney: "An empty ballroom at a Mumbai palace hotel at 5am before setup, chairs stacked, one worker's ladder, chandeliers off, daylight from tall windows on the right, 24mm, f/8, Portra 400, muted --ar 16:9 --no guests, flowers, lights on, stage"
2. Flux 2 pro: "A long dinner table in a Jaipur courtyard at night, one line of unscented candles, raw linen, brass, the arches behind lit by the candles only, blue night sky above, 35mm, f/2, 1 second exposure, CineStill 800T, no people."
3. Nano Banana Pro (edit of a real venue plate): "Keep the venue photograph unchanged. Add a single line of 40 candles along the centre of the table and their warm light on the faces of the arches, consistent with a night exposure. Add no flowers and no people."
4. Midjourney: "Detail of a hand-calligraphed place card in black ink on uncoated paper, one line of Devanagari, a single pressed marigold petal, overhead window light, 100mm macro, f/5.6 --ar 1:1 --no legible text, glitter, gold foil, ribbon" (the Devanagari is replaced with real type in post; the model's script will be wrong)
5. Kling 2.6 image to video from the real courtyard still: "Candle flames flicker over 5 seconds, camera static, nothing else moves, no people appear."

## 5. The tells and the fix for each

A tell is a defect that identifies an image or clip as generated to a trained eye within two seconds and to a client within two minutes. The design-taste skill, section 3, lists the taste tells; this section lists the craft tells and the fix for each, and 23-critique-taste-and-craft-judgement.md, section 3, places them in the catalogue of craft tells across all media.

### 5.1 Still image tells

| Tell | What it looks like | Why it happens | Fix |
|---|---|---|---|
| Impossible or multiple light sources | Shadows pointing in two directions; specular highlights on the left of one object and the right of another; a window behind the subject and a lit face with no fill | The model composes from patches of training images with different lighting and has no scene model | Prompt one named key with direction ("single window camera left, no fill"); check every shadow vector at 100 percent; relight with Magnific Relight, IC-Light or Aleph to a single source; composite a real plate for the hero |
| Uniform bokeh | Background blur with no falloff, the same softness at 2 metres and 20 metres; foreground sharp as a cutout | The model has learned "shallow depth of field" as a uniform texture with no distance falloff | Specify lens and aperture; add real lens blur in Photoshop with a depth map (Lens Blur filter) so blur grows with distance; keep a mid-ground element partly sharp |
| Plastic skin and over-symmetry | No pores, no vellus hair, no asymmetry; both eyes identical; the "smoothed" face | Aesthetic scoring during training rewards retouched stock | Prompt "visible pores, unretouched, fine hair"; add grain and a texture pass at 100 percent; use real talent for any face larger than a quarter of the frame |
| Nonsense text and signage | Letterforms that almost spell; Devanagari with wrong matras (vowel signs attached to consonants); Arabic letters unjoined or joined wrongly, reading left to right | Latin text is tokenised well only in Ideogram, GPT Image and Nano Banana Pro; Indic and Arabic shaping (the contextual joining of letters) is poorly represented in training data | Never let a model set text that will be read. Composite real type. For Arabic and Devanagari use a shaping-aware application (InDesign, Illustrator with the World-Ready composer) and a native reader's check |
| Floating or merged objects | A vase with no contact shadow; a chair leg fused to a table; a second handle | No physics, no occlusion reasoning | Check contact shadows and occlusion for every object; inpaint (regenerate a masked region) or composite; never ship an interior with uncounted furniture legs |
| HDR sheen and over-saturation | Lifted shadows and compressed highlights at once; glowing edges; saturated teal and orange | Training data is dominated by processed, upvoted imagery | --raw and --s 20 to 50 in Midjourney; "matte, natural contrast, no HDR" elsewhere; grade in post to house tokens; add grain |
| The cream and serif and terracotta default | Beige room, arched doorway, a serif overlay, a terracotta pot | The 2023 Pinterest and Instagram distribution that every model trained on | Taste problem; design-taste, section 6 lists it as dead. Build from the client's real material world |
| The Midjourney look | Centred subject, volumetric god rays, rim light, wet street, teal shadows, impossible depth, a glowing horizon | Midjourney's aesthetic fine-tuning optimises for its community's upvotes | --raw, low stylize, sref from real photography, off-centre composition, one light source, grain, negative list in section 3.8 |
| Perfect teeth | Every tooth identical, too white, too many | Stock smile bias | Closed mouth or real talent; negative "veneers, perfect teeth" |
| Hands and fingers | Six fingers, fused fingers, a thumb on the wrong side | Hands are small and highly variable in training images; V7 and Flux reduced the error rate and it still occurs | Count every finger; crop hands out or hide them; inpaint from a real hand plate; composite |
| Jewellery that does not clasp | Chain links that merge; a pendant with no bail; stones with no prongs; earrings with no post; a ring that is not round | The model renders the glint before the mechanism | Never generate the piece. Real product photography, generated environment only (section 6.4) |
| Architecture that does not close | Stairs that end in a wall; a window seen outside that does not exist inside; columns that stop; three-quarter arches | No spatial model | Real plates edited with Nano Banana, Kontext or Aleph; for new builds, a real render from the architect's model |
| Sharpened crispness from upscalers | Fabric weave and pores invented at 4x; halos on edges | Creative upscalers synthesise detail | Faithful upscalers for real photography (Topaz High Fidelity); for generated images, Magnific at low creativity and a grain pass over it |
| Garment construction | Seams that vanish, buttons with no buttonholes, a zip that stops mid-garment, a print that ignores the folds, embroidery turning to mush, sari pleats and pallu drape wrong, a dupatta passing through the body | The model renders the surface of cloth with no pattern-cutting logic | Shoot the garment on a body and generate only the environment; a stylist checks construction at 200 percent |
| Food physics | Identical grains of rice, symmetrical garnish, steam as a uniform haze, ice with no refraction, a pour that never lands | Styled food images dominate the data and the model has no physics | Real food on set; real steam shot on black and screened over; real or acrylic ice |
| Glass and mirrors | Glass that refracts nothing behind it; a mirror reflecting a different room | No scene model | Shoot glassware and mirrors; check every reflection against the room |
| The same face across a batch | Recurring default faces, including the cleft "Flux chin" | Aesthetic tuning narrows faces to a few defaults per demographic | Varied casting references per frame, or a consented identity model (section 6.14) |

### 5.2 Video tells

| Tell | What it looks like | Why | Fix |
|---|---|---|---|
| Flicker and texture crawl | Fine texture (foliage, fabric, stone, skin) boils or shimmers while the frame is otherwise still | Each frame denoised with imperfect temporal consistency (stability of textures and identities from frame to frame) | Shorter clips (5 seconds beat 10 in every model), image-to-video from a real still, less motion in the prompt, Topaz Video Starlight or temporal denoise, cut before the crawl begins |
| Morphing | An object becomes another object; a face becomes another face | The model loses identity over frames | Start and end frame, Elements or References for identity, cut at 3 to 5 seconds, never let a face hold for more than 4 seconds in a wide |
| Dead eyes | Eyes that do not converge, no catchlight, no micro-saccades | Eye motion is sub-pixel in training video | Real eyes; or cut away before the eyes read; prompt "eyes on camera, catchlight" and still check |
| The uncanny walk | Feet slide, gait has no weight, arms swing out of phase | Human locomotion is the hardest physics | Avoid full-body walking in generated shots; shoot the walk; or drive the generation from a real performance (Runway Act-Two, Kling motion control) |
| Objects popping | A glass appears or vanishes between frames | Same cause as morphing | Keep props in the start frame; fewer objects |
| Simultaneous zoom and dolly | The frame breathes in both directions | Conflicting motion words in one prompt | One camera verb per prompt (higgsfield-prompting skill) |
| Speed ramps and slow motion by default | Everything floats | Video models drift towards slow, dreamy motion when speed is not stated | Prompt "real-time speed, 24 fps, no slow motion"; retime in the edit |
| The edit rhythm of a fully generated film | Every shot 5 or 8 seconds, every move a slow push | Shot lengths come from the generator's duration settings | Vary shot lengths, cut on action, retime to the music (see 16-editing-colour-grading-and-delivery.md, section 3) |
| Burned-in subtitles | Gibberish captions appear when dialogue is prompted | Training video is full of subtitled clips | Write "no subtitles"; reject any clip with burned-in text |
| Dry voices | Speech with no breaths and no room reflection | The voice is generated apart from the space | Re-record or re-voice; add the room's reverberation in the mix |
| Lip-sync drift | Mouth and words separate over a longer line | Alignment degrades across the clip | Cut at about 4 seconds (a house practice); re-sync with a dedicated lip-sync model (section 6.13) |
| Generic score and whooshes | A swelling music bed and transition whooshes nobody asked for | The model's audio default | Write "no music"; the final score is composed or licensed |
| Room tone jumps | The ambience changes character at every cut | Each clip generates its own ambience | Lay one continuous room tone (the recorded background sound of a space) under the scene |
| Accent drift | A Hindi or Arabic line that slides into another accent mid-sentence | Thin training data for those languages | Native speaker QC (quality control); replace with consented VO |
| Foley with the wrong weight | A glass set on marble that sounds like plastic | Sound effects drawn from the median | Record or license foley (sound effects performed to picture; see 15-lighting-and-sound.md, section 11) |

### 5.3 Counter techniques

The craft moves that take a generation from "AI" to "photograph":

- Grain: a film grain layer at 100 percent (Dehancer, FilmConvert, or scanned grain plates), sized to the format (35mm grain on a 35mm look). Grain hides the smoothness and unifies composited elements, which is why the design-taste currency puts tactile and imperfect at the top of rising.
- Imperfection: a dust spot, a horizon left 0.3 degrees off level, a fingerprint on brass, a crease in linen. One per image.
- Real photography blended: the hero plate at full resolution, the generation as environment, masked with a real edge (hair, fabric) from the plate.
- Retouching passes: frequency separation (splitting an image into a texture layer and a tone layer so each can be edited alone) in reverse (adding texture into the low frequency), dodge and burn for a single light logic, a 2 to 4 percent vignette.
- Colour grading in post: a LUT (lookup table, a fixed colour transform) built from the client's real photography, applied to the generation so that the two share a colour science; DaVinci Resolve or Capture One.
- Compositing real elements: a real hand, a real shadow, real steam shot on black and screened over.
- Shooting plates: half a day with a camera at the real location produces backgrounds, skies, textures and a lighting reference that every generation then has to match. A plate costs less than the retouching it saves.

### 5.4 The human eye on every frame rule

Every delivered still is reviewed at 200 percent by a person other than the operator, with a checklist (section 8.1). Every delivered generated clip is scrubbed frame by frame at the cut points and watched at 100 percent in full; for a 15-second clip at 24 fps that is 360 frames, about 20 minutes. The reason: the tells above recur in every model and every batch, a share of any audience will see them, and on a luxury account the people who look closest (collectors, buyers, the trade press) are the ones the campaign is for.

## 6. Hybrid workflows that hold a luxury standard

A hybrid workflow puts a real photograph, real footage or a real 3D model at the centre and uses generation around it.

### 6.1 Previs and storyboards with AI

A storyboard is a sequence of drawn or generated frames describing each shot (framing, lens, movement) before the shoot; an animatic is that storyboard cut to time against a temp soundtrack. Both exist to test coverage and pace before money is spent on a crew.

The house pipeline for a 60-second brand film of about 18 shots (13-motion-graphics-and-3d-production.md, section 2, has the motion-design pipeline; 14-video-preproduction-and-cinematography.md, section 16, covers AI video direction):

1. Shot list from the treatment (see 19-campaigns-and-creative-direction.md for the treatment and 14-video-preproduction-and-cinematography.md for the shot-list format) with lens, movement and duration per shot.
2. One keyframe per shot, generated in Nano Banana Pro from the recce plates (photographs taken on the location visit) where they exist, or in Midjourney with the client's sref where they do not. Burn a "PREVIS, GENERATED" watermark into every frame at export, because clients mistake previs for the look and then ask why the film looks different.
3. Kling 2.6 image-to-video at draft settings, 3 to 5 seconds per shot, one camera verb each (higgsfield-prompting skill, section on camera movement keywords).
4. Cut in Premiere or Resolve against the temp track (see 16-editing-colour-grading-and-delivery.md, section 1 on editing theory). That cut is the animatic.

Time: about one working day. A drawn board from a storyboard artist takes three to five days and is still the better document when the shot depends on performance, because a generated keyframe cannot act. Three rules: the lenses in previs are the lenses the DP will carry (a 24mm previs shot on 50mm is a different film); the talent's face is never generated from a photograph without a signed release covering synthetic use (section 7.4); the director and DP amend the previs on the recce, so it is versioned (section 8.3) and never treated as locked.

### 6.2 Styleframes and moodboards

A moodboard is a board of existing references (photographs, film stills, materials, type) that shows a direction. A styleframe is a finished-look frame made for this project that shows exactly what one shot will look like after the grade. They are different documents and the house keeps them apart.

- Moodboard rule: built from real, attributable images first, each labelled with its source and the one thing borrowed (design-taste, section 4, the reference board). Generated images on a moodboard are marked "generated" and limited to gaps (an angle of the real location that was not photographed). The reason: a moodboard of generated images references nothing and pulls the whole project towards the median (section 10.1).
- Styleframe rule: three per film (open, middle, close), produced with the 20-to-2 loop (section 3.6), composited with the real product and graded with the house LUT built from the client's photography (section 5.3). Each styleframe is delivered with a one-line note stating what is real and what is generated, because the styleframe is the contract between agency and client about the look and the client is entitled to know which parts are achievable in camera.

### 6.3 Location scouting and set extension

Scouting: the recce produces real photographs, a floor plan, and the sun's path. A sun-position application (PhotoPills, Sun Surveyor) gives azimuth and elevation per minute for the shoot date; the recce plate is then edited in Nano Banana Pro to show the location at the planned hour, in the planned season, or with the planned dressing (a table, candles, a bed made) so the client approves the setting. Every such image is labelled generated and the recce plate is kept beside it.

Set extension is the enlargement of a real shot beyond the built set or the location: more corridor, a taller ceiling, a view where there was a car park. Tools: Photoshop Generative Expand on stills; Runway Aleph or Luma Modify Video on footage; a 3D projection in After Effects or Nuke for a moving camera. The craft reference is matte painting (painted glass or digital extensions used since the 1900s), and its rules transfer unchanged:

- The extension shares the plate's camera height, focal length and vanishing points. Check verticals with a guide and the horizon line against the plate's; a 2 degree mismatch reads as wrong before any texture does.
- The sun or key in the extension matches the plate's shadow vectors, and the extension's reflection appears in any glossy floor or glass.
- A moving camera needs parallax in the extension (nearer elements move more), which a 2D expand cannot give; project onto simple geometry, shoot a plate with the move, or capture the location as a Gaussian splat on the recce (section 2.4) and plan the move inside it.

Hospitality and real estate limit: a real property's architecture is never extended in a way that shows rooms, pools, views or finishes that do not exist. The asset is an advertisement of a specific place; a false feature is a misleading advertisement under India's Consumer Protection Act 2019 (the Central Consumer Protection Authority's 2022 guidelines on misleading advertisements) and under UAE Federal Law No. 15 of 2020 on consumer protection, and under Dubai's property advertising rules, which require a Trakheesi permit number (the advertising permit issued through the Dubai Land Department's Real Estate Regulatory Agency) on every property advertisement. Atmosphere (sky, time of day, a set table) may be generated; built fabric may not.

Virtual staging (furniture placed by generation into a photograph of an empty unit) is the most requested real estate edit, and it sits on that line. The law: section 12 of India's Real Estate (Regulation and Development) Act 2016 makes a promoter liable to compensate an allottee who suffers loss from an incorrect or false statement in an advertisement, prospectus or model apartment, and an allottee who withdraws gets the full investment back with interest; MahaRERA has required the project's registration number and QR code on every advertisement since 2023 (reported; check the current order); Dubai requires the Trakheesi permit; California's AB 723 (in force 1 January 2026, reported) requires a disclosure on digitally altered listing images and access to the unaltered photograph, which is the practice the house adopts everywhere. House rule: staging adds only loose furniture, art, rugs, linen and lamps. It never adds or changes fixtures, finishes, joinery, light fittings, appliances, landscaping, views or ceiling heights. "Virtually staged" is set in real type on the image, and the unstaged photograph sits beside it in the listing or brochure. Renders of projects under construction carry "Artist's impression" and the RERA registration number. The prompt is in section 4.5, item 6.

### 6.4 Product consistency: reference methods, LoRA basics, the product shot plus AI environment

Three methods, ranked by fidelity:

1. Composite the real product shot. Default for every hero and for any frame where the product is larger than about one tenth of the frame.
2. Multi-reference editing. Nano Banana Pro with the product photographed from three angles among its 14 reference slots; FLUX.2 multi-reference; Midjourney --oref with --ow at 300 to 400 for strict identity on V7, or --edit with the product as the first reference on V8.x. Acceptable for variants where the product is small or secondary (a bottle on a far shelf); the hero stays with method 1, because the model reproduces the look of the product and improvises its geometry.
3. A LoRA (Low-Rank Adaptation): a small set of trained weights, from a few megabytes to a few hundred, that adapts a base model to a subject or style without retraining it. Trained on about 15 to 40 photographs of the product from varied angles on plain backgrounds, each captioned with a unique trigger word (a made-up token such as "m360ringA" that calls the subject in a prompt). Rank, the dimensionality of the adaptation, is commonly set between 8 and 32; higher rank captures more detail and overfits sooner. Training of 1,000 to 3,000 steps on fal or Replicate takes minutes and costs a few dollars (reported ranges, October 2026). Base models: FLUX.1 dev or FLUX.2 dev (non-commercial weights, so commercial use goes through a BFL licence or a licensed host) or SDXL and SD 3.5 under the Stability Community License (section 2.1), or Qwen-Image under Apache 2.0, which carries no licence trap for commercial work.

LoRA rules: train only on photography the agency or the client owns; the weights are a derivative of the client's product data, so they are stored privately, named in the contract and deleted at project end when the contract requires it; a LoRA reproduces finish and proportion and still invents hallmarks, clasps and facets, so method 1 remains the hero rule.

The product shot plus AI environment protocol, which is the house's most used hybrid:

1. Shoot the product on a neutral sweep (a continuous curved backdrop with no visible floor-to-wall join). Record camera height, focal length, subject distance, key light azimuth and elevation (for example 45 degrees camera left, 30 degrees up) and the fill ratio.
2. Shoot a grey card (an 18 percent reflectance card) for white balance and a chrome ball (a reflective sphere that records the surrounding light as a map) or at least a matte white ball for the light direction.
3. Generate the environment with the same camera and the same key in words (section 3.1), at the same aspect ratio.
4. Composite in Photoshop: perspective check, contact shadow, a reflection where the surface demands one, the environment's bounce (light reflected from nearby surfaces) on the product's shadow side, grain over everything, the LUT last.
5. A retoucher other than the operator checks at 200 percent against the real product in hand or against the client's technical photograph.

### 6.5 Relighting

Relighting is the change of apparent light on a photographed subject after the fact. Tools as of October 2026: IC-Light (Lvmin Zhang, 2024, open source and native in ComfyUI; relights a foreground to a described or supplied light in a foreground-conditioned or background-conditioned mode), Magnific Relight, Nano Banana Pro by instruction ("light this from a window on the left, no fill"), Beeble SwitchLight for video, Runway Aleph for lighting changes on footage. Photoshop dodge and burn remains the finishing tool because it changes only luminance and never invents geometry.

Rules: relight environments and skin freely; relight metal and stones only with retoucher sign-off, because the pattern of specular highlights on a faceted stone is what a jeweller checks first and a relighting model draws highlights where a lamp would be, with no knowledge of the facets; keep the relit key consistent with every other plate in the set; keep the layers, since a relit composite cannot be unrelit.

### 6.6 Background replacement

Stills: Select Subject and Remove Background in Photoshop, then refine hair and fabric edges with the Object Selection tool; keep a real edge from the plate (hair, fabric, glass) by masking the generation wider and the plate tighter; shoot with colour separation (a mid grey wall behind a black dress; black on black cannot be separated); generate the background at the plate's focal length and camera height; add the subject's shadow on the new ground and the background's bounce on the subject's shadow side (a warm wall warms the shadow). The tell is a subject that shares no light with its background; bounce from the background onto the subject's shadow side fixes it.

Video: shoot on green or blue, evenly lit by two sources at 45 degrees about 1 to 1.5 stops under the key, with the subject at least 3 metres from the screen to limit spill; key in Resolve or After Effects. Runway's green screen tool handles uncontrolled footage for social cuts; Aleph replaces environments where a key fails. Cross-reference 16-editing-colour-grading-and-delivery.md, section 8, for the grade after the key.

### 6.7 Virtual try-on for jewellery

Two classes. AR try-on (augmented reality: a real-time overlay on the camera feed driven by face or hand tracking) for commerce; generative try-on for marketing stills.

- AR: Snap's Lens Studio and Camera Kit, Perfect Corp, Tangiblee and Camweara are among the vendors rendering a 3D model of the piece on a tracked hand, ear or neck. It requires a true-scale model from the jeweller's CAD (Rhino, MatrixGold) or a photogrammetry scan (a mesh reconstructed from photographs taken around the object). Scale is the purchase decision (a 6 mm stone against an 8 mm stone), so a generated mesh from Meshy or Tripo, which has no true scale and invents facets, is unusable for commerce try-on.
- Generative: Nano Banana Pro or Flux Kontext placing the real product shot on a real hand (section 4.2 prompts). Marketing stills only, disclosed, clasp and prong check at 200 percent.

See 09-interaction-design-and-ux-patterns.md, section 6, for where try-on sits in the luxury purchase flow.

### 6.8 Upscaling and cleanup

Order of operations: generate at native resolution, select, composite, grade, upscale once, grain last. The reason: upscaling amplifies every artefact, and grain added before upscaling becomes a repeating pattern.

Print needs 300 pixels per inch at final size: an A2 poster (420 by 594 mm) is 4,961 by 7,016 pixels, so a 1 megapixel generation needs a 5x upscale and will show it. The house generates at 4 megapixels where the model allows it (FLUX.2, Firefly Image Model 5, Nano Banana Pro at 4K) and upscales 2x at most. Topaz Gigapixel's Standard or High Fidelity models for real photography; Magnific at its lowest creativity and highest resemblance settings for generated images; Photoshop Super Zoom for a quick 2x. Prepress and proofing are in 20-print-packaging-ooh-and-physical-production.md, section 5.

Colour pipeline: generators deliver 8-bit files, usually sRGB and often untagged, which then meet 14-bit raw plates, and the mismatch produces banding in skies and walls and shifts in skin. Assign sRGB explicitly to every generated still and convert it to 16-bit before compositing; work in the plate's colour space and grade after compositing; add grain or dither before the 8-bit export so that gradients do not band. For print, soft-proof to the printer's CMYK (the four process inks) profile, commonly FOGRA39 or FOGRA51, or GRACoL in the US; the printer names the profile. Generated clips usually arrive as 8-bit Rec.709 (the HD video colour standard) H.264 or H.265 (compressed delivery codecs); transcode to ProRes 422 HQ (Apple's high-bitrate editing codec) before the grade so the grade does not compound compression artefacts. Luma's 16-bit EXR is the exception (section 2.2).

Cleanup: Photoshop's Remove tool and Generative Fill for sensor dust, cables, exit signs, a fire extinguisher, the crew's reflection; Generative Expand for an aspect change. Never clean, regenerate or expand a hallmark, a logo, a label, a product detail or a property's built fabric. Cleanup technique in post is in 16-editing-colour-grading-and-delivery.md, section 10.

### 6.9 AI motion from real stills: the house 70 percent camera rule

The rule: in a delivered film, at least 70 percent of screen time is camera-originated footage or real stills, and generated motion (image-to-video from real stills, extensions, transitions) is at most 30 percent. Two reasons. Tells accumulate: a viewer forgives one soft 4-second move and distrusts the fourth in a row, and each real shot resets that trust. And the 30 percent is where generated motion is least detectable: a slow push on a still interior, steam, fabric in a breeze, water, candle flames, dust in light.

Why from real stills: identity is locked, the product is real, the text is real, and the model's only job is to move pixels. The per-shot settings: 5 seconds (section 5.2, shorter beats longer in every model), Kling 2.6 or 3.0 through Higgsfield for the plate, Veo 3.1 or Omni Flash where ambient sound is wanted, one camera verb, the stability keywords, no lighting words in the motion prompt (higgsfield-prompting skill, the three-layer system). Every clip is scrubbed at the cut points (section 5.4). Direction of generated shots is in 14-video-preproduction-and-cinematography.md, section 16.

### 6.10 Stages where AI is allowed and the hero assets that must be real

| Stage | Generation allowed | Must be real | Reason |
|---|---|---|---|
| Pitch and concept | Freely, labelled generated on every frame | Nothing | The client is buying a direction, and the label stops the direction becoming a promise |
| Previs and animatic | Keyframes, draft motion, scratch voice | The talent's face (without a synthetic-use release) | Section 7.4 |
| Shoot | Light references, a generated backdrop on a screen for eyeline | The product, the property, the talent, the food, the signage | These are what the advertisement is about; a generated version is a misrepresentation (sections 6.3, 7.5) |
| Post: cleanup | Dust, cables, extras, aspect expansion | Hallmarks, labels, logos, built fabric | Section 6.8 |
| Post: extension and relight | Skies, environments, time of day, far backgrounds | The architecture of a real property, the view a suite actually has | Section 6.3 |
| Post: motion | Up to 30 percent of screen time from real stills | 70 percent camera-originated | Section 6.9 |
| Post: virtual staging | Loose furniture, art, rugs, linen and lamps in an empty unit, labelled "Virtually staged" | Fixtures, finishes, joinery, light fittings, appliances, landscaping, views, ceiling heights | Section 6.3; RERA Act 2016, section 12 |
| Post: localisation | Dubbed voice from a consented clone, lip-sync, on-screen text reset in real type | The talent's approval and a native speaker's QC | Section 6.13 |
| Variants | Crops, aspect ratios, localised text set in real type, seasonal skies | The hero plate in every variant | See 26-platform-and-format-specs-2026.md for the ratios |
| Social | Textures, abstract motion, backgrounds | People presented as real guests or customers; any testimonial | A generated guest is a fabricated review (section 8.4) |
| Audio | Scratch VO, sound effects, temp music | Final VO without a consented clone, final music (section 2.3) | Sections 2.3 and 7.2 |

Hero assets that must be real, by category: jewellery (the piece, on skin and on a stand), beauty (the product, the skin result), fashion (the garment on a body), hospitality (the suite, the pool, the view, the plate of food, the staff), real estate (built fabric, finishes, the view, the floor plan), F&B (the dish, the glass), events (the venue as it will be dressed), agency showcase (the agency's own work as shipped). The common principle: whatever the buyer will compare against reality on arrival.

### 6.11 Documenting what was generated

Every generated or hybrid asset carries a sidecar record (a small text file stored beside the master with the same base name) in JSON with these fields: tool and model version; prompt in full; negative prompt; seed; reference images used and their rights (own, client-owned, licensed with licence number); sref codes; operator; date; post steps in order (composite, relight, grade, upscale, grain); the percentage of the final pixel area that is generated, estimated by mask; C2PA manifest (the signed provenance record; section 7.7) attached (yes or no); the label applied on publication, taken from the label taxonomy in section 7.7; the media buyer who confirmed platform enhancements are off (section 6.12); approver. The record lives in the DAM (digital asset management system) next to the master. Three reasons: a US copyright registration must disclaim the AI-generated material (section 7.1); disclosure rules in the EU and India turn on what was generated (section 7.6); and the client who approves frame 3 of 20 in January asks for "the same, wider" in June.

### 6.12 Platform-side generation after delivery

The house controls what it generates; the ad platforms can generate more after hand-off, and the result carries the brand's name and none of the house checks. A luxury still that passed the 200 percent gate can still run with an expanded background, a generated headline or an auto-animation.

- Meta Advantage+ creative can apply image expansion, background generation, text variations (generated primary text and headlines), image animation, visual touch-ups and generated music, and some of these have been switched on at ad level by default (feature names as shown in Ads Manager in 2025, reported; Meta's developer page on Advantage+ creative, read 29 October 2026, says only that it "automatically creates multiple variations of your ad"). For luxury clients the house turns off every enhancement on every ad and checks the preview in each placement before launch.
- Google Performance Max and Demand Gen can generate images and text from the landing page and auto-crop or expand supplied images. The house turns off auto-generated assets and supplies every ratio itself (26-platform-and-format-specs-2026.md, section 3).
- TikTok Symphony avatars and generated scripts are never used for luxury clients.

Reason: under India's rules on synthetically generated information (SGI, section 7.6) the advertiser remains the publisher of what the platform generates, and a generated headline in a regulated category (real estate, beauty claims) is the advertiser's claim. Feature names and defaults change every quarter, so the media buyer re-checks them in Ads Manager and Google Ads at each launch and is named in the sidecar. 17-short-form-social-and-platform-craft.md, section 8, covers ad creative craft.

### 6.13 Localisation: dubbing and lip-sync

Dubbing a film into Hindi and Arabic is a weekly job for an India and Gulf agency and one of the real gains of the period (section 10.4). The order of work:

1. Transcreation (rewriting a script for the target culture, keeping intent over wording) by a native writer under the mask360-copywriting skill, before any voice work. Translated lines run to a different length, so the edit is re-timed to a native read and only then locked.
2. Dialect: Modern Standard Arabic for formal or pan-Arab work; Gulf Arabic (Khaleeji) for Emirati and Saudi warmth; Egyptian Arabic only by deliberate choice, since it is understood widely through Egyptian film and television and reads as Egyptian. For Hindi, choose conversational Hindustani or a Sanskritised register on purpose; machine output tends to sit between them.
3. Voice: the talent's consented clone (ElevenLabs v3 or ElevenLabs Dubbing) under release item 2 (section 7.4), or a native voice actor.
4. Lip-sync: HeyGen video translation, Sync Labs' lipsync models (Sync Lipsync 3 is in Higgsfield's catalogue, 29 October 2026) or Kling lip-sync, on shots of 5 seconds or less where possible, because sync drifts over longer lines (section 5.2).
5. Viseme QC (visemes: the mouth shapes that correspond to speech sounds) by a native speaker, frame by frame on close-ups. Arabic pharyngeal consonants and Hindi retroflex consonants use mouth and tongue positions English lacks, so a sync model trained mostly on English gets them wrong first.
6. On-screen text reset in real type, right to left for Arabic (see 03-typography.md, section 15).
7. The India SGI label (section 7.6), because a real person's speech has been altered.
8. Talent approval within the 5 working day window (section 7.4, release item 3).

### 6.14 Recurring talent and digital twins

A brand ambassador's schedule in India makes synthetic pickups and localised variants a common request. The governed route:

1. A consented capture session: a few dozen stills across angles, expressions and lighting, plus a voice session, used to build a Soul ID, a LoRA or a Nano Banana Pro reference set (up to 5 people held consistent; section 3.4).
2. Ownership: the talent owns the twin, following H&M's digital twins of 30 models (March 2025), in which each model owns their twin and may license it to other brands.
3. Fees per synthetic use, separate from the shoot fee (release item 5, section 7.4).
4. Storage: the files and any trained weights are personal data, and the face and voice biometric data, under India's Digital Personal Data Protection Act 2023 (DPDP Act) and the UAE Personal Data Protection Law (PDPL; section 7.4). They are stored encrypted on agency systems, access is logged, and they are deleted at the end of the term with written confirmation. Higgsfield keeps content 30 days after account deletion and cannot recall content already used for training (section 2.2), so a twin is built on Higgsfield only under an Enterprise Agreement, or locally.
5. Every output goes through talent approval and, in India, the SGI label.

The consented Indian reference is Cadbury's "Not Just a Cadbury Ad" (Ogilvy India with Rephrase.ai, 2021), in which Shah Rukh Khan's face and voice were synthesised with his consent so that small shopkeepers could generate advertisements naming their own shops (section 10.5).

## 7. Rights and law as of October 2026

Nothing in this section is legal advice; it is the map the creative director needs to know when to call the lawyer. Dates are verified where marked; "reported" means a secondary source. The positions move monthly, and the house re-checks the four anchors (the US Copyright Office page, the EU AI Act page, the rules page of MeitY, the Ministry of Electronics and Information Technology, and the Suno and Udio dockets) before any proposal that depends on them.

### 7.1 Copyright in the output

The question every client asks: do we own the images? The answer depends on the jurisdiction and on how much a person did.

| Jurisdiction | Position as of October 2026 | Source and date |
|---|---|---|
| United States | Human authorship is required. The D.C. Circuit affirmed in Thaler v Perlmutter (No. 23-5233, 18 March 2025) that a work generated autonomously by a machine cannot be registered. The Copyright Office's report Part 2, Copyrightability (29 January 2025), states that prompts alone do not give enough control to make the user the author, that human selection, arrangement and modification of AI output can be protected, and that each case is decided on its facts. Registration applications must disclose and disclaim the AI-generated material (Office guidance of March 2023). The Office's Part 1 on digital replicas (synthetic reproductions of a real person's voice or likeness) was published 31 July 2024 and Part 3 on training as a pre-publication version on 9 May 2025 | Verified at copyright.gov/ai and the D.C. Circuit opinion, October 2026 |
| United Kingdom | Section 9(3) of the Copyright, Designs and Patents Act 1988 names the person who made the arrangements as the author of a computer-generated work, with a 50-year term. The government's consultation of December 2024 to February 2025 proposed removing or reforming that provision; the outcome was unresolved at the time of writing | CDPA 1988; consultation reported |
| European Union | A work must be the author's own intellectual creation (Infopaq, C-5/08, 2009), which requires a human; purely generated output is unprotected, and the human's creative choices in prompting, selecting and editing are what can be protected | Case law |
| India | Section 2(d)(vi) of the Copyright Act 1957 defines the author of a computer-generated literary, dramatic, musical or artistic work as "the person who causes the work to be created". No court has applied it to generative AI. The Copyright Office registered the painting "Suryast" in 2020 with Ankit Sahni and the RAGHAV tool as co-authors and then issued a withdrawal notice in 2021. Originality follows Eastern Book Company v D.B. Modak (Supreme Court, 2008): a modicum of creativity with skill and judgement. The committee of the DPIIT (Department for Promotion of Industry and Internal Trade) issued a working paper, Part 1 (late 2025, titled with the phrase "One Nation One License One Payment") proposes a mandatory licence with statutory remuneration for training; Part 2 on outputs and authorship had not been published as of February 2026 (SpicyIP). The house reads section 2(d)(vi) as giving the person who directs, selects and edits a plausible claim, and as giving a bare prompt almost none | Copyright Act 1957; SpicyIP posts of December 2025 to February 2026 |
| UAE | Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights defines the author as the person who creates the work and has no provision for computer-generated works; purely generated output is therefore most likely unprotected, and no decided case was found | Decree-Law text; the absence of case law is a finding of this research and may be incomplete |

What this means for a client: a purely generated image can be copied by a competitor with no remedy in copyright; the agency cannot assign what nobody owns, so the contract assigns rights "to the extent protectable" and relies on contract, trade mark and passing off for the rest; the protectable value lives in the human layer (the composite, the grade, the typography, the selection), which is one more reason the hero is real and the finishing is by hand.

The contested positions, and the one the house follows:

- Allen v Perlmutter (District of Colorado, No. 1:24-cv-01560): Jason Allen's "Théâtre D'opéra Spatial" was refused registration after at least 624 Midjourney prompts and Photoshop edits; the suit tests whether iterative prompting is authorship (status not verified in this pass).
- "A Single Piece of American Cheese" (Invoke, Kent Keirsey): registered by the Copyright Office in January 2025 on the human selection and arrangement of inpainted regions (inpainting: regenerating a masked part of an image). It is the practical precedent for the house's composite-and-inpaint method.
- Li v Liu (Beijing Internet Court, 27 November 2023): copyright granted in a Stable Diffusion image on the strength of the plaintiff's prompt and parameter choices, the opposite of the US Copyright Office's view.
- Thaler's petition to the US Supreme Court after the D.C. Circuit decision was reported filed in late 2025; its outcome was not verified in this pass.

House position: follow the strictest view (the US), because a campaign crosses borders, and record every human selection, arrangement and edit in the sidecar (section 6.11) so the composite-and-inpaint route is available wherever it is recognised.

### 7.2 Training data litigation and what it means for clients

| Case | Court and status as of October 2026 | Holding or position |
|---|---|---|
| Getty Images v Stability AI | England and Wales High Court, [2025] EWHC 2863 (Ch), judgment 4 November 2025 (Joanna Smith J); Getty reported to have permission to appeal the secondary infringement point (December 2025) | Model weights are not an infringing copy because they do not store the works; limited and historic trade mark infringement where older model versions reproduced the iSTOCK watermark; Getty dropped its training and output copyright claims during trial for want of evidence that training happened in the UK |
| Getty Images v Stability AI (US) | Filed in Delaware in 2023; Getty dismissed it and refiled in the Northern District of California in August 2025; ongoing (reported) | Training and output claims live |
| Andersen v Stability AI, Midjourney and others | Northern District of California; filed January 2023; claims allowed to proceed in August 2024; ongoing | The artists' case; the list of about 16,000 artist names from Midjourney's training surfaced in filings in January 2024 |
| The New York Times v Microsoft and OpenAI | Southern District of New York; filed December 2023; consolidated with related cases before Judge Sidney Stein; ongoing | Training on and memorisation of articles; the output-regurgitation evidence is the part relevant to agencies |
| Bartz v Anthropic | Northern District of California; Judge Alsup's order of 23 June 2025 found training on lawfully bought books to be fair use (the US defence for transformative unlicensed use) and the use of pirated copies not; a settlement of about $1.5 billion was announced in September 2025 and preliminarily approved on 25 September 2025 | The first US decision to call model training transformative, and the first to price piracy |
| Kadrey v Meta | Northern District of California; Judge Chhabria's order of 25 June 2025 granted Meta summary judgment (a ruling without trial because the material facts are not disputed) on fair use on the record before him, with a warning that market-dilution evidence could decide a future case differently | Fair use is fact-specific |
| Thomson Reuters v Ross Intelligence | District of Delaware; Judge Bibas, 11 February 2025, found no fair use for a non-generative legal search tool; interlocutory appeal to the Third Circuit pending (reported) | The counter-example to Bartz |
| Disney and Universal v Midjourney; Warner Bros. Discovery v Midjourney | Central District of California; filed 11 June 2025 and September 2025; ongoing | The studios allege that Midjourney outputs reproduce their characters; the first output-focused cases against an image model |
| UMG, Sony and Warner v Suno; UMG, Sony and Warner v Udio | District of Massachusetts and Southern District of New York; filed 24 June 2024. Udio settled with Universal (announced 29 to 30 October 2025) and with Warner (November 2025); Suno settled with Warner (November 2025). Universal and Sony v Suno and Sony v Udio were still open as of the latest reports read (not re-verified after June 2026, including whether Suno's licensed models have launched); the American Federation of Musicians sued Universal and Warner on 5 June 2026 over the licensing deals (reported) | Section 2.3's rule follows from this table |
| GEMA v OpenAI | Munich Regional Court I, 11 November 2025 | Memorisation and reproduction of song lyrics in outputs infringed; the first European output decision against an LLM (reported) |
| Concord and others v Anthropic | Northern District of California; lyrics; ongoing | Output reproduction of lyrics |
| ANI Media v OpenAI | Delhi High Court, CS(COMM) 1028/2024, filed November 2024; book publishers and music labels sought to intervene; status as of October 2026 not verified in this pass | The Indian training case Mumbai and Delhi clients ask about: whether storing and training on news content infringes, and whether an Indian court has jurisdiction over a US developer |
| Disney, NBCUniversal and Warner Bros. Discovery v MiniMax | Central District of California, filed September 2025; ongoing (reported) | The maker of Hailuo is an output-infringement defendant, so the house treats Hailuo as tests only, no finals (sections 2.2, 4.4) |
| ByteDance Seedance 2.0 | No suit found; studio cease-and-desist letters and a Motion Picture Association statement in February 2026 (reported) | Seedance treated as tests only (section 2.2) |

For a client: the training question is the vendor's risk, and the client's only exposure to it is a vendor disappearing or changing terms, which happened in 2026 (Sora 2 and its API shut down on 24 September; Google scheduled the Veo 3.1 API previews for retirement no earlier than 22 October). The output question is the client's risk: substantial similarity (an output that reproduces a specific protected work or character) and trade marks in the output, which the QC checklist in section 8.1 tests, including a near-copy check (item 10). Indemnified tools (section 7.3) shift the output risk for environments and props; a generated hero that misrepresents a product stays the agency's risk under every tool. The contract (section 7.8) allocates what is left.

### 7.3 Commercial licences per tool and indemnification

Indemnification is a vendor's contractual promise to defend and pay for a third-party claim that the output infringes. Where it exists it is the single most valuable commercial term, and it is always conditional (no prompting for named artists or marks, no disabling of filters, the vendor's own models only).

| Tool | Plan that grants commercial use | Indemnity | Verified |
|---|---|---|---|
| Midjourney | Every paid plan; companies with more than $1 million a year in gross revenue must be on Pro or Mega; generations are public unless Stealth mode (Pro and Mega) is on, so client work needs Pro or Mega twice over | None | Terms as reported by several 2026 sources; the terms page could not be read at the time of writing |
| Adobe Firefly | Creative Cloud and Firefly plans | IP indemnification for enterprise customers for content made with Adobe's own Firefly models, described by Adobe as trained on Adobe Stock, openly licensed and public-domain content; partner models hosted in Firefly are excluded; scope and caps are in the enterprise agreement, which the house reads before relying on it | Adobe's enterprise page states "commercially safe content" and Content Credentials (section 7.7); the indemnity scope was not on the page read in October 2026 |
| Getty Images, Generative AI by Getty | Paid generation | Automatic legal protection up to $50,000 per image on standard plans, uncapped on enterprise plans; trained only on licensed visuals including Getty's creative library; generated images are never offered to others | Verified at gettyimages.com/ai/generation/about, October 2026 |
| Shutterstock AI generator | Paid plans | Indemnification offered to enterprise customers (reported); the page could not be read | Reported |
| OpenAI (GPT Image through the API and ChatGPT business tiers) | Paid | Copyright Shield for API and enterprise customers (announced November 2023) | Reported |
| Google (Imagen, Nano Banana, Veo through Vertex AI and Workspace) | Paid | Generative AI indemnification covering training data and generated output for Google Cloud and Workspace customers (announced October 2023) | Reported |
| Anthropic (Claude for research, writing, code) | Commercial terms | Copyright indemnity for API and enterprise customers under the commercial terms (announced December 2023) | Reported |
| Stability AI (SD 3.5, SDXL, Stable Audio) | Community License free under $1 million revenue; Enterprise above | None in the Community License | Verified at stability.ai/license |
| Black Forest Labs (FLUX) | dev weights non-commercial; pro and flex through the API or licensed hosts | None | Verified |
| ElevenLabs | Starter and above; Free has no commercial licence | None | Verified at elevenlabs.io/pricing |
| Suno and Udio | Paid plans grant commercial rights to songs made while subscribed; outputs remain the subject of open claims by Universal and Sony | None | Reported; section 2.3 rule applies |
| Kling, Hailuo, Pika, Luma, Runway | Paid plans; vendors state that users own outputs subject to the terms | None stated | Runway pricing verified; ownership clauses reported |
| Higgsfield | Paid plans; the terms claim no ownership of outputs and do not restrict their commercial use | None: section 12 of the terms has the user indemnify Higgsfield | Verified against the terms updated 23 October 2026 |
| Bria | Free trial; pay-as-you-go; Enterprise | Capped standard indemnification on pay-as-you-go; unlimited IP indemnification on Enterprise | Verified at bria.ai/pricing, 29 October 2026 |
| Moonvalley (Marey) | Paid plans | Not verified; Moonvalley describes Marey as trained on licensed footage | Pricing and terms pages could not be read |
| Meshy | Paid plans grant private, customer-owned assets; free outputs are CC BY 4.0 | None | Verified |
| Canva | Paid plans under Canva's AI terms | Canva Shield for enterprise (reported) | Reported |

Rule, by medium: for any generated element that will sit next to a client's product or in a paid placement, use an indemnified tool or keep the element so generic (a sky, a wall, a texture) that no claim could attach. Images: Adobe Firefly's own models, Getty's generator, Bria. Video: Firefly Video; Moonvalley Marey once its terms and any indemnity are confirmed in writing. Audio: a composer or a licensed library; Firefly Generate Soundtrack once its licence and indemnity scope are confirmed. A partner model chosen inside Photoshop or Firefly loses Adobe's indemnity.

Data handling decides where client assets may be uploaded. Positions as stated in each vendor's terms or help pages; only Higgsfield was re-read in this pass (terms updated 23 October 2026), so re-check the others before an NDA project.

| Tool or tier | Trains on inputs by default | Outputs public by default | Company jurisdiction and data location | Opt-out route | NDA uploads |
|---|---|---|---|---|---|
| Midjourney | The terms grant Midjourney a licence to prompts and outputs (reported) | Yes, in the public gallery, unless Stealth (Pro and Mega) | Midjourney Inc., US | Stealth mode | No |
| ChatGPT Free, Plus and Pro | Yes, unless "Improve the model for everyone" is switched off | No | OpenAI, US | Data controls setting | No |
| ChatGPT business tiers (Team or Business, Enterprise, Edu) and the OpenAI API | No, by default | No | OpenAI, US | n/a | Yes, under the agency's agreement |
| Gemini app (consumer) | Used for improvement, with human review, unless Keep Activity is off | No | Google, US | Keep Activity setting | No |
| Gemini in Workspace; Vertex AI | No | No | Google Cloud; region selectable on Vertex AI | n/a | Yes |
| Claude Free, Pro and Max | A user choice since 2025 | No | Anthropic, US | Privacy setting | No |
| Claude for Work; Anthropic API | No | No | Anthropic, US | n/a | Yes |
| Adobe Firefly | No: Adobe states it does not train Firefly on customer content | No | Adobe, US | n/a | Yes, with Adobe's own models |
| Higgsfield, without an Enterprise Agreement | Yes: content "may be used by Company to train" its models | Content in shared areas may be seen and reused by other users | Higgsfield Inc., California law | Delete the content or the account; content already used in training is not recalled | No |
| Higgsfield Enterprise | No: the terms exclude Enterprise customers' content from training | Per agreement | As above | n/a | Yes, once the agreement is signed |
| Kling (Kuaishou), Hailuo (MiniMax), Seedance and Dreamina (ByteDance) | Check the licence over uploads | Check | China-headquartered parents; check where data is stored | Check | No |
| Runway, Luma, Pika, ElevenLabs | Check the current terms | Check | Mostly US-headquartered; check each | Check | Only under reviewed enterprise terms |
| Local: ComfyUI with Stable Diffusion, Qwen-Image, Wan open weights, licensed Flux | No | No | The agency's own machine | n/a | Yes |

Rule: client assets under NDA, unreleased property renders and material for government-linked Gulf clients go only to rows that read no training, private, and an acceptable jurisdiction.

### 7.4 Likeness and voice rights

A generated or cloned face, body, gait or voice of a real person engages rights that exist with or without AI: the right of publicity (the US term for a person's right to control commercial use of their identity), personality rights (the Indian courts' term), privacy and data protection, and defamation.

United States: state law, with Tennessee's Ensuring Likeness Voice and Image Security (ELVIS) Act signed on 21 March 2024 (verified at tn.gov), effective 1 July 2024 (reported), adding voice to the protected attributes and reaching tools whose primary purpose is unauthorised cloning; California's AB 2602 (contract terms for digital replicas) and AB 1836 (digital replicas of deceased performers), signed September 2024 (reported); the NO FAKES Act, reintroduced in April 2025 as S.1367 in the 119th Congress and still unenacted at the last check (its page could not be read in October 2026); SAG-AFTRA's 2023 television and theatrical agreement, which requires consent and compensation for a digital replica, and its 2025 Commercials Contracts, which added consent and compensation terms for digital replicas in advertising (reported). New York: on 11 December 2025 Governor Hochul signed S.8420-A/A.8887-B, which requires whoever produces or creates an advertisement to disclose when it includes an AI-generated synthetic performer, and S.8391/A.8882, which requires consent from heirs or executors before a deceased person's name, image or likeness is used commercially (verified at governor.ny.gov; the synthetic-performer rule was reported to take effect 180 days after signing, about June 2026). Any campaign that runs in New York carries the disclosure.

Europe: Denmark proposed in 2025 an amendment to its copyright law giving every individual rights over realistic digital imitations of their face, body and voice (reported; check enactment before relying on it).

India: no statute; personality rights are built in case law, mostly in the Delhi High Court as ex parte (granted without hearing the other side) dynamic injunctions (orders that reach infringers and platforms not yet identified). The line of cases the house cites: ICC Development v Arvee Enterprises (Delhi HC, 2003) and Titan Industries v Ramkumar Jewellers (Delhi HC, 2012) for the foundation; Amitabh Bachchan v Rajat Nagi (Delhi HC, 25 November 2022) protecting name, image and voice; Anil Kapoor v Simply Life India (Delhi HC, 20 September 2023, Justice Prathiba M. Singh), which named AI, deepfakes (synthetic media showing a real person saying or doing what they did not) and voice cloning expressly and protected his name, image, voice and the word "jhakaas"; Jackie Shroff (Delhi HC, May 2024, extending to AI chatbots); Arijit Singh v Codible Ventures (Bombay HC, 26 July 2024) against AI voice cloning platforms; and the September 2025 orders for Aishwarya Rai Bachchan, Abhishek Bachchan and Karan Johar in Delhi and Asha Bhosle in Bombay (reported). Pattern: Indian courts grant quickly, broadly and against AI platforms by name. Data protection adds a second layer: a face and a voice are personal data under the Digital Personal Data Protection Act 2023, whose rules were notified in November 2025 (reported) with phased commencement, so a voice clone needs consent as a data matter as well as a personality matter.

UAE: no personality-rights statute; a cloned likeness used without consent can engage Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes (offences covering altered or fabricated content and defamation online, with imprisonment and fines), the Personal Data Protection Law (Federal Decree-Law No. 45 of 2021, where biometric data is sensitive data) and the Civil Code's protection of the person. The house treats the UAE as consent-only.

The release for synthetic use, which is a separate document from the standard model release (see 14-video-preproduction-and-cinematography.md, section 4) and which every talent signs before any generation touches their face or voice:

1. Scope: which attributes (face, body, voice, gait, name), for which project, in which media, in which territories (India, the GCC or Gulf Cooperation Council states, worldwide), for how long.
2. The synthetic acts permitted: lip-sync into Hindi and Arabic, motion from a still, relighting, a voice clone for a named script only.
3. Approval: the talent or their agent approves each synthetic output before publication, with a 5 working day window.
4. No training: the talent's material is never used to train or fine-tune a model beyond the project, and any embeddings, voice models or LoRAs are deleted at project end with written confirmation.
5. Compensation per synthetic use, separate from the shoot fee, because SAG-AFTRA's 2023 and 2025 terms set the market expectation.
6. Revocation terms and the takedown procedure.
7. Moral protection: no synthetic output places the talent in a context (political, religious, sexual, competitor) outside the brief.
8. Disclosure: the talent consents to the asset being labelled as synthetic where the law or the platform requires it.

### 7.5 Trade marks in generated content and brand safety

Generated outputs reproduce marks and trade dress (the protected overall look of a product or packaging: Tiffany's blue, Hermès's orange box, Louboutin's red sole, Bottega Veneta's green) because the training data is full of them, and the Getty judgment's trade mark findings show it happens without anyone asking. Three rules: never put a brand, product or designer name in a prompt for client work (section 3.2); inspect every generated frame for incidental marks (a bottle on a generated vanity, a logo on a generated chair, a car badge) and remove them; treat trade dress as a mark. The statutes: Trade Marks Act 1999, section 29, in India; Federal Decree-Law No. 36 of 2021 on Trademarks in the UAE; the Lanham Act in the US.

Brand safety beyond marks: a generated face that resembles a real person (the "Sky" voice dispute between Scarlett Johansson and OpenAI in May 2024 is the reference case: OpenAI paused the voice within days and no suit was filed); religious iconography and dress generated wrongly (a model's "Indian bride" that mixes a Kanjeevaram border with a Rajasthani odhni and a Bengali shakha reads as foreign to every Indian viewer); Arabic and Devanagari script that is almost right; skin tone drift towards lighter in beauty prompts (a documented bias in image models), which the house counters by naming the skin in the prompt and checking against the real talent; and a tool's own conduct, which is why xAI's Grok Imagine is on the house's never list on every host, including Higgsfield, after its image editing produced sexualised edits of real people in January 2026 and drew regulatory action, including a MeitY notice to X (reported). The control: a native reviewer for each market signs off every generated frame with people, dress, script or architecture in it.

The Gulf has its own failure set. Models confuse the Emirati kandura (collarless, with the tarboosha tassel at the neck) with the Saudi thobe (collared and buttoned) and the Qatari thobe (collar and cuffs); they mix the white ghutra headcloth, the red-and-white shemagh and the black agal cord that holds them; and they render the abaya (the full-length outer robe) and the shayla (the head scarf) as costume. House rules: no generated likeness of rulers, royal family members or national figures; no generated flags, emblems or national symbols without a permit (the UAE Media Council was reported in 2025 to require prior approval for AI depictions of national symbols and public figures; not verified in this pass); in Saudi Arabia and Sharjah, no alcohol and modest dress, with Saudi content under the General Authority for Media Regulation; Ramadan settings correct (iftar at sunset, suhoor before dawn, prayer direction towards Mecca). Each Gulf market (UAE, Saudi Arabia, Qatar) has its own native reviewer.

India adds a rule that meets a documented model bias head on: the Advertising Standards Council of India (ASCI) guidelines for fairness and skin-lightening products (2014) forbid showing darker skin as inferior, unhappy or a barrier to success, so a generated skincare frame that drifts lighter breaches the spirit of that code as well as the brief.

### 7.6 Disclosure obligations

| Regime | Rule | Dates | House practice |
|---|---|---|---|
| EU AI Act, Regulation (EU) 2024/1689, Article 50 | Providers must mark generated content in a machine-readable way (Article 50(2)); deployers must visibly disclose deepfakes (generated or manipulated content resembling real persons, places or events) and AI-generated text published on matters of public interest (Article 50(4)); under Article 50(4), where content forms part of an evidently artistic, creative, satirical or fictional work, the disclosure may be made in a way that does not hamper the display or enjoyment of the work. Article 50(1) requires a system that interacts directly with people to tell them they are dealing with an AI unless that is obvious; Article 50(3) requires deployers of emotion recognition or biometric categorisation to inform the people exposed. Fines under Article 99(4) of up to EUR 15 million or 3 percent of worldwide turnover | Applies from 2 August 2026. The Commission's final Code of Practice on marking and labelling AI-generated content was published on 10 June 2026 (Jones Day) and found adequate by the Commission and the AI Board on 8 and 9 July 2026 (Reed Smith); it is voluntary, asks providers for at least two layers of machine-readable marking (metadata plus a watermark, for example) and a public detection tool, and exempts AI-assisted text that has had human review or editorial control from the Article 50(4) text label. The Digital Omnibus on AI (approved by Parliament on 16 June 2026 and the Council on 29 June 2026, in force 27 July 2026, as reported by Usercentrics; confirm against the Official Journal) gives a grace period to 2 December 2026 for the Article 50(2) marking duty; whether it covers only systems on the market before 2 August 2026 or all systems is read differently by Gibson Dunn and Simmons and Simmons. Content made before 2 August 2026 need not be labelled retroactively (reported) | Any campaign that targets EU audiences (a Dubai hotel selling to Germany, a Jaipur jeweller shipping to France) is labelled as if the house were the deployer; a brand film carries an end card or caption; a concierge serving EU guests says it is an AI in its first message (section 9.1) |
| India, IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 as amended by the Amendment Rules 2026, G.S.R. 120(E) | Synthetically generated information (SGI, new rule 2(1)(wa): audio, visual or audio-visual content artificially or algorithmically created or altered so that it appears real and depicts a person or event in a way likely to be indistinguishable from a real one). Excluded: good-faith routine editing (formatting, enhancement, colour correction, compression) that does not change substance, context or meaning; routine creation of documents, presentations and educational material that produces no false record; accessibility, translation and description tools. Visual SGI must carry a prominent, easily noticeable label; audio SGI a prominently prefixed audio disclosure; both must embed permanent metadata or provenance markers including a unique identifier of the generating resource, which intermediaries must not let users remove. Significant social media intermediaries (platforms with more than 5 million registered users in India, the threshold notified in February 2021) must ask users to declare SGI before publishing and deploy automated measures to verify the declaration. Takedown on a court order or government direction within 3 hours (previously 36); nudity and sexual content within 2 hours (previously 24); grievances disposed of within 7 days (previously 15) | Notified 10 February 2026, in force 20 February 2026 (verified against the IndiaLaw summary of the gazette text, October 2026); preceded by MeitY's deepfake advisories of March 2024 and the draft of 22 October 2025 | Every generated or hybrid asset published in India carries the visible label and the metadata; the agency's own accounts self-declare; the client's social team is briefed in writing; a hybrid film with a generated sky is SGI if it depicts a real place as real, so the house labels it |
| India, ASCI | The Advertising Standards Council of India's code treats a misleading depiction as a breach regardless of the tool; its influencer guidelines (May 2021) require disclosure of material connections and require a virtual influencer to tell the audience it is not interacting with a real human being | Code in force; AI-specific guidance reported in development | Generated guests, results and testimonials are never presented as real |
| UAE | No AI-specific disclosure rule in the advertising regulations was found as of October 2026; the UAE Media Council's advertising permit regime and the consumer protection law apply to misleading content | Reported | Label anyway; the house labels as a matter of standard, above the legal minimum. Rulers, national symbols and public figures are never generated (section 7.5) |
| Meta (Instagram, Facebook, Threads) | The "AI info" label (renamed from "Made with AI" on 1 July 2024) is applied when industry signals in the file indicate AI or when the uploader discloses; "Imagined with AI" marks Meta AI's own photorealistic images; advertisers must disclose digitally created or altered political and social issue ads. Since 12 September 2024, content detected as only edited with AI tools shows "AI info" in the post's menu, and content detected as generated keeps the label on the post | Verified at about.fb.com, October 2026 | Disclose on upload; expect Instagram to strip most file metadata, so the visible caption label is the one that survives (see 17-short-form-social-and-platform-craft.md, section 7) |
| YouTube | Creators must disclose realistic altered or synthetic content (a real person appearing to say or do something they did not, a realistic event, AI-generated music); the label appears in the expanded description and, for photorealistic content and AI music, in the player; beauty filters and captions do not require disclosure | Verified at support.google.com, October 2026 | Tick the disclosure on every hybrid film |
| TikTok | Reads C2PA Content Credentials to auto-label AI-generated content from other platforms since 9 May 2024 and attaches Content Credentials to content made or edited on TikTok; creators must label realistic AI content | Verified at newsroom.tiktok.com | Keep the credentials in the file; label in the caption as well |
| LinkedIn | Displays Content Credentials where present | Reported | Keep the credentials in the file |
| New York (US) | Advertisements that include an AI-generated synthetic performer must say so (S.8420-A/A.8887-B) | Signed 11 December 2025 (verified); effective about June 2026 (reported) | Any campaign running in New York carries the disclosure |
| Saudi Arabia | Deepfake guidelines from SDAIA, the Saudi Data and AI Authority (2024, reported), and the Personal Data Protection Law | Reported | Label; written consent for every likeness; native review |
| China | Measures for Labelling AI-Generated Synthetic Content (Cyberspace Administration of China): explicit labels and implicit metadata labels on generated content | In force 1 September 2025 | Chinese-made tools (Kling, Hailuo, Seedance) may embed implicit labels, so expect platform detection on upload and declare the content |
| South Korea | AI Basic Act: notice and labelling duties for generative AI output | In force January 2026 | Label for Korean audiences |

### 7.7 C2PA, Content Credentials and the label taxonomy

C2PA is the Coalition for Content Provenance and Authenticity, an open standards body founded in 2021 by Adobe, Arm, BBC, Intel, Microsoft and Truepic, whose specification defines a manifest (a cryptographically signed record of an asset's origin and every edit) bound to the file. Content Credentials is the consumer-facing name and the "cr" icon. The specification moves fast: the version menu at spec.c2pa.org lists 2.3, 2.4 and 2.5 after 2.2, with 2.5 the latest as of October 2026 (the page gives no release dates), so the house checks which version a tool writes before promising a client that a credential will validate. SynthID is Google's separate, invisible watermark embedded in Imagen, Nano Banana, Veo and Omni Flash outputs, detectable with Google's tools and independent of file metadata; it survives crops and re-encoding better than a manifest and tells the viewer less. IPTC's photo metadata standard adds a Digital Source Type field whose value "trainedAlgorithmicMedia" is what Meta's and others' detectors read; the vocabulary also holds "digitalCapture" and "compositeWithTrainedAlgorithmicMedia".

Where credentials come from: Photoshop, Lightroom and Firefly attach them; GPT Image outputs carry them; cameras from Leica (M11-P, October 2023), Nikon and Sony sign in camera; Google's Pixel 10 (2025) signs every photograph (reported). Where they die: most social platforms strip or partly strip metadata on upload, which is why the visible label (section 7.6) is required alongside.

House rule: every delivered generated or hybrid asset carries a C2PA manifest with the generation and the edits recorded; the agency never strips credentials from a supplied asset; the sidecar (section 6.11) records whether the manifest was attached and the platform's expected behaviour.

Label taxonomy. The sidecar records the label applied; this table sets the threshold for each edit type. The IPTC values come from the IPTC Digital Source Type vocabulary; the C2PA action names (c2pa.created, c2pa.edited) come from the C2PA specification; the Meta column follows Meta's 12 September 2024 change.

| Edit type | IPTC Digital Source Type | C2PA action recorded | India SGI label | EU Article 50 disclosure | Expected Meta behaviour |
|---|---|---|---|---|---|
| Capture with routine cleanup by non-generative tools (dust, cables, an exit sign) | digitalCapture | c2pa.edited | No: routine editing is excluded | No | No label |
| Capture with cleanup by a generative tool (Generative Fill, the generative option of the Remove tool) | compositeWithTrainedAlgorithmicMedia, written by the tool | c2pa.edited with the generative step named | No, where substance, context and meaning are unchanged | No | "AI info" in the post's menu |
| Real plate with a generated sky, staging or extension | compositeWithTrainedAlgorithmicMedia | c2pa.edited with the generative step named | Yes, if it depicts a real place as real | Yes, where it would falsely appear authentic | "AI info" in the menu, or on the post if detected as generated |
| Fully generated frame | trainedAlgorithmicMedia | c2pa.created naming the generator | Yes where it appears real; the house labels every published one | Yes; an end card suffices for an evidently creative work | "AI info" on the post |
| Previs and pitch frames | trainedAlgorithmicMedia | c2pa.created | Never published | Never published | Never published |

The 2024 lesson: photographers' retouched work was labelled "Made with AI" because a generative fill wrote the flag into the file, so the house uses non-generative cleanup where it suffices and sets the IPTC value deliberately before export.

### 7.8 The contract clauses an agency needs

With the client:

1. AI use disclosure: a schedule listing which deliverables contain generated material and the estimated percentage, updated at delivery.
2. Ownership: assignment of the agency's rights "to the extent protectable", a licence of the non-protectable material, and an explicit statement that purely generated elements may be unprotectable (section 7.1).
3. Warranty: the agency warrants its process (no named living artists, no marks in prompts, indemnified tools for hero-adjacent generation, QC gate) and no knowing infringement; it does not warrant that generated output is free of all third-party claims.
4. Indemnity caps mirrored on the tools' own caps; Getty's $50,000 per image is the reference figure.
5. Tool risk: a clause allowing substitution of a tool whose licence changes or which is withdrawn (Sora 2 in 2026; the Veo API previews scheduled for retirement) without liability for the change itself.
6. Client approval of every hero-adjacent generated element before publication, in writing, with the sidecar record attached.
7. No training: the agency does not train models on client assets without written consent; client assets under NDA are processed only with local models (Stable Diffusion, Wan, LTX-2 in ComfyUI) or with vendors whose terms exclude training on inputs (the data table in section 7.3 names them).
8. Data residency and deletion: where client assets are uploaded, which vendor, which region, and deletion on completion.
9. Labelling responsibility: who applies the visible label and the metadata on each platform, and who answers a platform's or regulator's query.
10. Regulated claims: real estate finishes and views, beauty results and food are represented from real photography; the agency will not generate a feature that does not exist and the client will not ask it to (sections 6.3, 6.10).
11. Archive: prompts, seeds, references and sidecars are retained for the term of the licence and handed over on request.
12. Audit: the client may inspect the generation records for any deliverable.

With talent: the synthetic-use release in section 7.4. With photographers and composers: a clause stating whether their work may be used as reference images or sref sources, and whether any derivative generation is permitted, because a licensed photograph's licence rarely covers use as a style reference.

With suppliers (photographers, retouchers, production houses, freelancers, stock libraries): the supplier discloses every generative tool used and the elements it touched; warrants that no hero element is generated without the agency's written approval; delivers raw files, or the consecutive frames either side of a selected frame, on request; and preserves C2PA credentials. Intake checks: contentcredentials.org/verify for manifests; Google's SynthID Detector (announced May 2025) and the SynthID check in the Gemini app for Google-made content; commercial classifiers such as Hive or Reality Defender as indicators only, because a classifier score is a probability and a heavily retouched photograph can score as generated; raw files, EXIF data and adjacent frames as proof. Stock: Adobe Stock accepts generative content labelled "Generated with AI", so filter it out when a real location is required; Getty Images and iStock have refused AI-generated submissions since 2022 (re-check the current policy).

## 8. Quality control and process

### 8.1 The QC checklist for generated assets

Run on every generated or hybrid still at 200 percent and on every clip frame by frame at the cuts. A single failure returns the asset to the operator.

1. Anatomy: count fingers, thumbs, limbs, ears, teeth; eyes converge on one point and carry one catchlight each from the same key; hair meets the scalp; no second elbow in a reflection.
2. Light: one key with a direction that can be named; every shadow vector agrees with it; specular highlights sit on the same side of every object; every object that touches a surface has a contact shadow; the shadow side receives bounce of the environment's colour.
3. Text and script: every glyph read by a person; Devanagari matras and conjuncts, Arabic joining and direction checked by a native reader; signage, labels, menus and place cards composited from real type (see 03-typography.md for the multiscript setting).
4. Continuity: across a set, the same room has the same windows, the same floor, the same furniture count; the product keeps its orientation and clasp position; in video, props and faces hold identity through the clip; the motion verb is one.
5. Brand colour: after the grade, the brand's hex sampled on a neutral patch is within 2.0 dE00 of the token (CIEDE2000, the perceptual colour-difference metric where 1.0 is about one just noticeable difference side by side; see 04-colour.md, section 9.3). The reason for checking after the grade: a LUT built for skin and stone will drift a brand's flame or green, and the drift is invisible until the asset sits beside the client's packaging.
6. Resolution and format: pixel dimensions meet the destination in 26-platform-and-format-specs-2026.md; print at 300 ppi at size; no upscale above 2x on a generated source.
7. Artefacts: halos at edges, invented weave or pores from an upscaler, banding in gradients (check at 8 bit after export), JPEG blocking in shadows, texture crawl in video, breathing of the frame edge.
8. Geometry: verticals plumb where the lens says they should be, one horizon, stairs that arrive, windows that match inside and out, furniture with the right number of legs.
9. Marks and likeness: no logos, labels, trade dress, recognisable faces or recognisable buildings unless cleared. The Taj Mahal Palace facade in Mumbai was registered as a trade mark by the Indian Hotels Company in 2017, the Burj Khalifa name and marks belong to Emaar, and commercial filming at a monument protected by the Archaeological Survey of India needs the ASI's permission; a generated building that reads as any of these carries the same clearance question as a photograph of it.
10. Near-copy check: run every hero-adjacent output through Google Lens and TinEye and compare it with its sref and reference sources; any match of composition plus subject goes back to the operator. Reason: Gary Marcus and Reid Southen (IEEE Spectrum, January 2024) showed Midjourney V6 and DALL-E 3 reproducing recognisable film stills and characters from short, indirect prompts.
11. Cultural review: dress, jewellery, script, architecture and ritual objects checked by a reviewer from the market, with a separate reviewer for each Gulf market (section 7.5).
12. Metadata and record: C2PA manifest attached; sidecar complete (section 6.11); operator's personal EXIF data stripped; the visible label prepared for each platform from the taxonomy in section 7.7.
13. Taste: the design-taste tests (section 4, step 7); the tells in section 5 and the taste negatives in section 3.8.

### 8.2 The review gate

Three gates, each with a named person:

1. Operator self-check against section 8.1 before anything leaves the generation folder. Budget 10 minutes per still, 20 minutes per 15-second clip.
2. Second eye: a different person at 200 percent, scoring with the rubric in 23-critique-taste-and-craft-judgement.md, section 13, with the real product, the recce plates and the brand tokens open beside the asset. The second eye can reject without explanation; the operator cannot overrule.
3. Creative director sign-off with the client-facing disclosure note (section 8.4) and the legal checklist (section 11.3). The CD signs the sidecar. For paid placements the media buyer is named at this gate and confirms that platform generative enhancements are off (section 6.12).

The house budgets review at one third of generation time and expects to reject more than half of first passes on anything with hands, text, jewellery or architecture (a house target; the actual rate is unmeasured); a low rejection rate on those categories means the second eye is not looking.

### 8.3 Versioning and naming of generated assets

Folder structure per project: 00_brief, 10_refs (licensed and own references only, with licence files), 20_gen (raw generations, never edited, never deleted), 30_select (the survivors of the 20-to-2 loop), 40_comp (layered working files), 50_master (flattened masters with sidecars and manifests), 60_delivery (per-platform exports). The raw generation is never overwritten, because the seed and the raw file are the only route back to an approved look.

File name: client_project_asset_vNN_tool-version_seed_YYYYMMDD. Example: "taj-mumbai_monsoon26_lobby-styleframe_v03_mj7-oref_s2048119_20261028.png". Hybrid masters add "_hyb" and a percentage: "_hyb40" for 40 percent generated pixel area. Variants per platform add the ratio and size from the specs file. Versions increment on any change to the pixels; the sidecar's "post steps" field records what changed. Prompts are stored in the sidecar and in a per-client prompt library (a text file with the sref codes, the negative lists and the approved prompts by category, section 4), so that a second operator reproduces the look.

### 8.4 The ethics note for clients

The house attaches a standard note to every proposal that involves generation. It states, in plain language: which deliverables will contain generated material and roughly how much; that the product, the property, the people and the food shown as real are real; that no generated person will be presented as a guest, a customer or a reviewer, because that is a fabricated testimonial under ASCI's code and the UK's CAP code (the Code of Non-broadcast Advertising) and a deception of the client's own customers; that no living artist, photographer or brand is named in any prompt; that talent whose likeness or voice is synthesised has signed a synthetic-use release; that assets will be labelled where the law or the platform requires it and the house recommends labelling where it does not; that purely generated elements may be unprotectable by copyright; and that the house will decline a request to generate a feature, result or view that does not exist. The note exists so that the conversation happens at proposal stage, before any complaint.

The evidence on disclosure in high-consideration purchases: Mesut Cicek, Dogan Gursoy and Lu Lu (Journal of Hospitality Marketing and Management, 2024) found that mentioning AI in product and service descriptions lowered emotional trust and purchase intention, and more strongly for high-risk products and services, which is the luxury case. The house reading: label in the form the law and the platform require, and never market "AI-made" as a feature in luxury copy.

### 8.5 The sustainability note

Generation has a measurable energy cost. Luccioni, Jernite and Strubell ("Power Hungry Processing", FAccT 2024) measured image generation at a mean of 2.9 kWh per 1,000 images across the models they tested, over 60 times the mean for text generation (0.047 kWh per 1,000), and the least efficient image model at 11.49 kWh per 1,000, which they equate to about half a smartphone charge per image. Video is heavier again: MIT Technology Review's May 2025 analysis measured a single 5-second clip from an open video model at about 3.4 megajoules (about 0.94 kWh), more than 700 times the cost of an image. The house practice that follows: explore in draft modes (Midjourney Draft, Omni Flash at 360p, Flux klein) and generate at full quality only after selection; batch requests; make variants by editing an approved image; run upscaling and cleanup locally (Topaz, Photoshop) where the model is small; and record generation counts per project in the sidecar totals so a client who asks for the footprint can be answered with a number.

### 8.6 Costing generated work

A generated deliverable is quoted like any production line, from the house's own keeper ratios (a keeper ratio is the number of attempts per usable output); 24-business-of-creative-and-agency-operations.md, section 3, has the agency's pricing method.

Method: (cost per generated second or image x seconds per shot x attempts per keeper) + operator hours + review (one third of generation time, section 8.2) + post (composite, grade, upscale) + a tool-churn contingency.

Worked from the prices in section 2:

- Runway Pro: $35 for 2,250 credits is about $0.016 a credit, so Gen-4.5 at 12 credits a second costs about $0.19 a generated second, and an Aleph 2.0 edit at 140 credits per 5 seconds about $2.18.
- Gemini Omni Flash: about $0.10 a second at 720p, so an 8-second clip costs about $0.80 and 20 attempts for one keeper about $16.
- Nano Banana Pro: $0.134 an image at 2K, so 40 edits towards two styleframes cost about $5.36.

The generation line is small beside the hours: at a keeper ratio of 1 in 20, three 5-second Gen-4.5 shots cost about $57 in credits (3 x 5 x 20 x $0.19), while operator, review and post time run to two or three days.

Rules: record the real keeper ratio per tool in the sidecar totals (section 8.3) and quote from it; quote in INR or AED; imported software subscriptions (SaaS) bought by an Indian business carry 18 percent GST (goods and services tax) under the reverse charge (the buyer accounts for the tax), and imported services in the UAE carry 5 percent VAT under the reverse charge (confirm both with the accountant); credits expire (Lovable's paid credits two months after issue, section 2.6), so credits are bought per project; add a tool-churn contingency of about 10 percent of the generation line (a house figure), because in 2026 Sora 2 was withdrawn and the Veo API previews were scheduled for retirement within a year of launch.

## 9. AI in UX and UI design

### 9.1 Designing AI products

The patterns for a product with a model inside it, as the house applies them to a hotel concierge, a jewellery advisor or a property search. The framework references are Amershi and colleagues' 18 guidelines for human-AI interaction (Microsoft, CHI 2019), Google's People + AI Guidebook and Emily Campbell's Shape of AI pattern library; see 09-interaction-design-and-ux-patterns.md, sections 1 and 10, for how they sit among the other frameworks and for the AI product patterns.

- Streaming: tokens (the model's output units, roughly word fragments) render as they arrive, with the first visible within about 500 ms and a skeleton before that; a stop control is visible from the first token. The reason: perceived latency falls when the user sees progress, and an unstoppable stream is the first thing a luxury guest resents.
- Uncertainty: expressed in plain language ("I could not confirm availability for 14 December; the front desk can"), with no percentages shown, and with the uncertain claim visibly separated from the confirmed one. Moffatt v Air Canada (British Columbia Civil Resolution Tribunal, 2024 BCCRT 149) held the airline liable for its chatbot's wrong statement about a bereavement fare; a concierge that invents a rate or a suite feature creates the same liability for the hotel.
- Citations: inline numbered references that open the source and highlight the quoted span; a response about a property's facilities cites the property's own fact sheet, nothing else.
- Latency: a progress state for anything over 1 second, intermediate steps shown for multi-step actions ("checking the spa calendar"), and a cancel at every step.
- Prompt UX: suggested first prompts written in the house voice (see 10-ux-writing-and-content-design.md), an editable and resendable history, and an empty state that shows three things the product can do and one it will not.
- Guardrails: the refusal copy written by a person, limits stated before they are hit, a human handoff within one tap that carries the conversation across, no emoji, Hindi and Arabic with right-to-left layout tested (see 03-typography.md for Arabic setting).
- Feedback and memory: thumbs and regenerate on every answer; what the product remembers is shown and deletable; consent for memory is explicit under the DPDP Act 2023 and the UAE PDPL.
- Hallucinated availability, price or policy is a design failure: the product reads those from a system of record and the model only phrases them.
- Disclosure: under EU AI Act Article 50(1), applicable from 2 August 2026, a system that interacts directly with people must tell them they are dealing with an AI unless that is obvious; the concierge's first message says so in the house voice for every guest, which also matches ASCI's rule for virtual influencers (section 7.6). Article 50(3) adds a duty to inform where emotion recognition or biometric categorisation is used, which the house does not deploy.
- Evaluation: a golden set (a fixed list of real questions with approved answers) of at least 100 guest questions, re-run on every model or prompt change, plus red-team prompts (deliberate attempts to make the system fail) that try to make it invent prices, availability or policies. A release ships only when the golden set passes at the agreed rate and no red-team prompt produces an invented price.

### 9.2 AI features inside design tools and their craft risks

The generic output problem: Figma Make's first draft, Framer's Wireframer, Relume's wireframes and v0's components are trained on the median web and produce it: Inter, 8px radius cards in a three-column feature row, a gradient hero, an icon in a circle per benefit, "Learn more" with an arrow, and filler copy built from the words design-taste, section 3, bans. Every one of these is a cheap tell (design-taste, section 3). The reason it happens is section 10.1; the fix is section 9.3.

What the features are good for: renaming layers; filling content with realistic data (names, prices in rupees and dirhams, dates) so layouts are tested against real lengths; first-pass translation of UI strings for a native reviewer; placeholder imagery during wireframing only; prototype logic in Make for a usability test; Adobe's selection, content-aware and Enhance Speech tools, which edit pixels and leave every design decision to a person.

Craft risks beyond the look: generated layouts ship with contrast failures and missing focus states (test against WCAG 2.2 AA, the Web Content Accessibility Guidelines level the house requires; see 11-accessibility-and-inclusive-design.md and 06-ui-design-craft.md); tokens are inconsistent (three greys, two radii) and must be replaced by the house tokens (see 07-design-systems-and-tokens.md); generated copy is never shipped (the mask360-copywriting skill's rules apply to every string); auto layout from a generated frame hides broken constraints that appear at 320px.

Research synthesis with AI, with verification: transcription with Whisper or a transcription service (Hindi and Gulf Arabic accuracy is lower than English, so a human corrects before analysis); clustering drafts in Dovetail or a model, then every theme is traced to at least three timestamped quotes the researcher has heard; the model never counts sentiment unaided, because a sample check of 20 codes against a person's coding is required before any number goes in a deck; the model invents plausible quotes, so no quotation enters a deliverable without its timestamp; participants' personal data is handled under DPDP and PDPL consent, and transcripts are never uploaded to a tool whose terms allow training on inputs. See 08-ux-research-and-strategy.md for the research methods themselves.

### 9.3 AI-generated UI and the house standard for finishing it

v0, Figma Make, Lovable and Bolt produce a skeleton. The house finishing list, run in order, before any generated interface is shown to a client:

1. Typeface, weights and tracking replaced by the house layer (design-taste, section 7). Generators default to Inter or the platform's system font, so this step is never skipped even when the draft "looks close".
2. Tokens replaced by the house set (colour, radius, spacing, hairlines) as built in 07-design-systems-and-tokens.md. A generated file typically carries several near-identical greys and two or three radii; each is mapped to one token or deleted, and an audit of the styles panel confirms none survives.
3. Layout: the three-card row, the icon circles, the logo wall and the gradient hero removed; one idea per screen; scale contrast restored (design-taste, section 2).
4. Copy rewritten to the 15 copy rules; no "Learn more", no arrows, sentence case.
5. Motion reduced to one considered move; everything else still; prefers-reduced-motion honoured (see 12-motion-principles-and-ui-motion.md).
6. Images replaced with the client's real photography or removed; no generated placeholder survives to the client review.
7. Accessibility: WCAG 2.2 AA contrast, focus states, keyboard order, labels, Arabic right-to-left mirrored layout.
8. Performance: Largest Contentful Paint (the time until the largest visible element renders) under 2.5 seconds on a mid-range Android on 4G, which rules out a 2 MB hero (see 21-web-design-and-digital-craft.md).
9. Code review: dead CSS, inline styles, duplicated components, missing alt text, the generated component library's unused imports; house microsites are rebuilt in Claude Code with the tokens, and the generator's code is discarded.
10. The design-taste tests (design-taste, section 4, step 7), run by someone who did not prompt the generator.

## 10. AI and taste

### 10.1 Why defaults converge

A generative model learns the distribution of its training data and, when sampled with a generic prompt, returns the mode of that distribution: the image most like the average of what it saw. Three mechanisms sharpen that average into a style.

- The training set is the web, weighted by what was posted and upvoted most: processed, saturated, centred, symmetrical, golden hour, cream rooms with arches. The 2023 Pinterest and Instagram distribution is now baked into every 2025 and 2026 model.
- Aesthetic fine-tuning: vendors tune models on human preference scores (Midjourney on its community's ratings, others on datasets such as LAION-Aesthetics), and the preference of a crowd is the median taste of the crowd. Prompt folklore ("8k, masterpiece, trending on ArtStation") steers back towards the 2022 look that those scores rewarded.
- Recursion: generated images are posted and scraped into the next training set. Shumailov and colleagues (Nature, July 2024) showed that models trained on recursively generated data undergo model collapse (the narrowing of the output distribution towards its centre) and lose the tails, and the tails are where the specific lives.

This convergence is why design-taste, section 6, lists cream, serif and terracotta as dead.

### 10.2 How to stay specific

- References from the real world: the client's own site and archive, the agency's photography, licensed archives, the recce. The sref library per client (section 3.4) is built from these alone; a generated image is excluded as a source because it references nothing.
- Constraints: one light, one lens, one material, one era, the negative lists (section 3.8). A constraint is a choice, and a choice is what the median lacks.
- The hand-made element: a scanned texture, a hand-drawn mark, a real signature, a misregistered print; design-taste, section 6, lists tactile and imperfect as the rising counter-signal to AI polish, and it is also the cheapest provenance signal a brand has.
- The real photograph as anchor: every composite starts from a plate, and the plate's light, grain and colour science are what the generation must match (section 6.4).
- The house tokens (design-taste, section 7): the generation is graded and cropped into them, and the tokens stay fixed; a token is never adjusted to suit a generation.
- Personalisation trained on house ratings (Midjourney --p, section 3.7) so the model's bias is the agency's.
- The edit: remove until it breaks, put one thing back (design-taste, section 4). A generation arrives over-full; the specific is what remains after subtraction.

### 10.3 The creative director's stance

Speed and exploration come from the machine; the decision and the standard come from the person. The CD's three jobs in an AI-era workflow: writing the brief the machine can hear (section 3), making the selection (2 of 20, and saying why), and holding the standard (what is still wrong with the survivor, named precisely enough that a retoucher can fix it). The tells in section 5 are the CD's eyes; the QC gate in section 8 is the CD's signature.

Two consequences. A client is paying for the choice, and a choice is defensible only if the alternatives were seen, so the 20 rejected frames are kept and can be shown. And a case study of generated output is a case study of nothing, because the output contains no decision; the agency's showcase presents the brief, the references, the selection and the finishing, which are where the agency's taste is visible (see 24-business-of-creative-and-agency-operations.md for how the showcase is sold).

### 10.4 Where AI raised the bar and where it lowered it

| Raised | How | Lowered | How |
|---|---|---|---|
| Previs | Every film now has an animatic in a day (section 6.1), so coverage mistakes are found before the shoot | Stock replacement | Generated stand-ins for stock photography, now free and therefore everywhere (design-taste, section 2) |
| Cleanup | A day of retouching takes an hour; the budget moves to the hero | Generic social | The carousel of cream interiors, the "cinematic" reel with the same slow push, identical across every hotel in the Gulf |
| Localisation | A film dubbed into Hindi and Arabic with the talent's consent for a fraction of a re-shoot (section 6.13) | Fabricated people | Generated guests, reviews, UGC (user-generated content) and "AI influencers" for luxury, which the house declines because they are uncanny and because they are deception (section 8.4) |
| Variants | 9:16, 1:1, 4:5 and seasonal skies from one master (section 6.10) | Text in images | Signage and labels that almost read, shipped by teams without a native reviewer |
| Set extension and relight | A real location made larger or lit for the hour (sections 6.3, 6.5) | Taste debt | Teams that stop looking at references because the model has "seen everything", and converge on the median (section 10.1) |
| Research speed | Transcripts synthesised in hours with verification (section 9.2) | Research truth | Invented quotes and uncounted sentiment presented as findings |
| Accessibility | Alt text drafts, captions and transcripts at scale, checked by a person | The hero | Generated jewels, dishes and suites standing in for photographs; the house refuses this outright (section 1) |

### 10.5 Public cases and how they were received

Clients cite AI campaigns ("Coca-Cola did it"); this is the record of where the backlash and the praise fell.

| Case | Date | What was done | Reception |
|---|---|---|---|
| Coca-Cola, "Holidays Are Coming" remade with generative video | November 2024; again in 2025 | The 1995 truck film regenerated with AI studios (Secret Level, Silverside and Wild Card in 2024) | Criticised by creatives as soulless; defended by the brand as craft and technology together |
| Toys"R"Us, "Origin Story" | June 2024 (Cannes Lions) | A brand film made largely with Sora by the studio Native Foreign | Widely called uncanny |
| Guess, generated model in US Vogue | August 2025 issue | A print advertisement featuring a generated model (by the agency Seraphinne Vallora) | Backlash over beauty standards and lost work for models |
| Mango, generated models for its teen line | July 2024 | Generated models in campaign images | Criticised for replacing models |
| Levi's with Lalaland.ai | March 2023 | Announced generated models to show more body types | Backlash; Levi's clarified it would keep hiring human models and keep its diversity commitments |
| H&M digital twins | March 2025 | Consented twins of 30 models, each owned by the model | Received as the consent-led route |
| Dove, "Keep Beauty Real" | April 2024 | A pledge never to use AI to create or distort women's images | The refusal position, received well |
| Cadbury, "Not Just a Cadbury Ad" (Ogilvy India) | 2021 | Shah Rukh Khan's face and voice synthesised with consent so small shopkeepers could promote their own shops during the pandemic | Widely praised; awarded at Cannes Lions in 2022 (categories not verified in this pass) |

House reading: backlash attaches to replacing people and to undisclosed realism; praise attaches to consent and to an idea only the technology makes possible.

## 11. Reference tables

### 11.1 Prompt vocabulary: craft term to prompt phrase per tool

Image-layer terms go to the image model; motion-layer terms go to the video model only (higgsfield-prompting skill, the three-layer system). "n/a" means the term belongs in the other layer.

| Craft term | Midjourney V7 and V8.x | FLUX.2 and Kontext | GPT Image and Nano Banana Pro | Kling via Higgsfield (motion layer) | Veo 3.1 and Omni Flash |
|---|---|---|---|---|---|
| Shallow depth of field | "85mm, f/1.8, shallow depth of field" with --s 50 | "shot on an 85mm lens at f/1.8, background softly out of focus" | Same sentence; for an edit, "keep the subject, soften the background as an 85mm at f/1.8 would" | n/a | "85mm, shallow depth of field" (no aperture control) |
| Deep focus | "f/11, deep focus, edge to edge sharp" | "everything sharp from front to back, f/11" | Same | n/a | "deep focus, everything sharp" |
| Single soft window | "single north window camera left, no fill, deep shadow side" | Same sentence | Same; for an edit, "relight from a single window on the left, no fill" | Never (lighting words cause flicker) | "soft window light from the left" |
| Hard sun | "hard noon sun, short black shadows, high contrast" | Same | Same | n/a | "hard sunlight, short shadows" |
| Practicals | "lit by practical lamps in frame, tungsten, no fill" | Same | Same | n/a | "lit by lamps in the room" |
| Film grain and stock | "Kodak Portra 400, visible grain" with --raw | "shot on Kodak Portra 400 film, visible grain" | "a film photograph on Portra 400 with visible grain" | n/a; grain is added in post | "film grain" (add in post regardless) |
| Matte, no HDR | "--raw --s 20, matte, natural contrast" | "natural contrast, no HDR, matte finish" | Same | n/a | "natural contrast, no HDR" |
| Wide architecture | "24mm tilt-shift, verticals corrected, one-point perspective" | "24mm, perspective corrected, straight verticals" | Same | n/a | "wide lens, straight verticals" |
| Macro | "100mm macro, 1:1, razor-thin focus on the stone" | "100mm macro lens, life-size, focus on the stone" | Same | n/a | "macro, extreme close-up" |
| Motion blur in a still | "1/15 second, motion blur in the fabric" | "slow shutter, the fabric blurred with movement" | Same | n/a | n/a |
| Slow push | n/a | n/a | n/a | "slow dolly in, smooth, stable, no jitter, no warping" | "slow dolly in" |
| Static camera, one element moves | n/a | n/a | n/a | "camera static, only the steam moves, nothing else" | "static camera, steam rises slowly" |
| Handheld | n/a | n/a | n/a | "handheld, slight sway" | "handheld camera" |
| Real-time speed | n/a | n/a | n/a | "real-time speed, 24 fps, no slow motion" | "natural speed, no slow motion" |
| Off-centre for type | "subject lower third, empty upper two thirds --ar 4:5" | "subject in the lower third, the upper two thirds an empty wall" | Same | n/a | "subject low in frame, empty above" |
| Two-colour palette | "two-colour palette: bone and ink, muted" | "a palette of only bone white and ink black, muted" | Same | n/a | "muted, two colours" |
| Material finish | "honed travertine, brushed brass, raw linen" | Same nouns in a sentence | Same | n/a | Same nouns |
| Era | "1990s Japanese catalogue, flat, unretouched" | "in the style of a 1990s Japanese mail-order catalogue, flat and unretouched" | Same | n/a | "1990s catalogue look" |
| Dialogue | n/a | n/a | n/a | Sound on; the line in double quotes after a described speaker | 'A woman in her forties says: "..."' plus "no subtitles" |
| Ambience and effects | n/a | n/a | n/a | Sound on; one sentence per sound | "Sound: rain on glass. Ambience: a quiet lobby." |
| No score | n/a | n/a | n/a | "no music" | "no music" |
| Exclusions | "--no people, text, logo, flowers" | "no people, no text, no logos, no flowers" in the sentence | Same in the sentence | Negative field: "morphing, flicker, warping, extra limbs" | Negative prompt field on Veo 3.1; in the sentence on Omni Flash |

### 11.2 The tells checklist

1. Two shadow directions or two suns.
2. Specular highlights on different sides of neighbouring objects.
3. Background blur with no distance falloff; a cut-out subject.
4. Skin with no pores, no vellus hair, no asymmetry.
5. Eyes that do not converge, or with different catchlights.
6. Teeth too many, too even, too white.
7. Fingers: count them, and the thumbs.
8. Text that almost reads; Devanagari matras or Arabic joins wrong.
9. Objects without contact shadows; furniture fused to surfaces.
10. Chain links merged, pendant without a bail, stone without prongs, ring not round.
11. Stairs or doors to nowhere; windows that differ inside and out; columns that stop.
12. HDR sheen: lifted shadows with glowing edges; teal and orange.
13. Cream, arch, serif overlay, terracotta pot.
14. Centred subject, god rays, rim light, wet street, glowing horizon.
15. Invented weave or pores from an upscaler; halos at edges.
16. Video: texture crawl, morphing identity, popping props, sliding feet, dead eyes, frame breathing in two directions, dreamy half speed.
17. A face held longer than 4 seconds in a generated wide.
18. Metadata: no C2PA manifest, no sidecar, operator's EXIF intact.
19. No grain at 100 percent on an image that claims film.
20. The design-taste tests (section 4, step 7) failed.
21. Garments: seams that vanish, buttons without buttonholes, a print that ignores the folds, a dupatta through the body.
22. Food: identical grains, symmetrical garnish, uniform steam, ice without refraction.
23. Glass and mirrors that refract or reflect the wrong scene; the same face recurring across a batch.
24. Audio: burned-in subtitles, dry voices, lip-sync drift, a generic score, room tone that jumps at a cut.
25. Edit rhythm: every shot the same length, every move a slow push.

### 11.3 The legal checklist

1. No living artist, photographer, director or designer named in any prompt.
2. No brand, product, designer or competitor name in any prompt.
3. Reference images and sref sources are owned, client-owned or licensed for the use, with the licence number in the sidecar.
4. The hero (product, property, talent, food, text) is real and photographed with a release.
5. Every person whose likeness or voice is synthesised has signed the synthetic-use release (section 7.4).
6. No generated person is presented as a guest, customer, reviewer or employee.
7. No feature, finish, view, result or dish is shown that does not exist.
8. Hero-adjacent generated elements come from an indemnified tool, or are generic enough that no claim attaches.
9. Every generated frame has been inspected for incidental marks, trade dress, recognisable faces and recognisable protected buildings.
10. A native reviewer has approved dress, script, architecture and ritual objects for the market.
11. The C2PA manifest is attached and the sidecar is complete.
12. The visible label is prepared for each platform and jurisdiction (section 7.6), and the person applying it is named.
13. The EU Article 50 analysis is done where any audience is in the EU.
14. The India SGI label and metadata are applied where the asset is published in India.
15. The client has approved each hero-adjacent generated element in writing.
16. The contract schedule of AI use is updated at delivery.
17. Client assets under NDA were processed only locally or with no-training vendors (the data table in section 7.3), and uploads are deleted.
18. Weights, LoRAs and voice models made for the project are stored privately or deleted as the contract requires.
19. The music is composed, library-licensed or sync-licensed; no Suno or Udio in a final.
20. Copyright registration, where sought in the US, disclaims the AI-generated material.
21. Platform generative enhancements (Meta Advantage+ creative, Google auto-generated assets) are disabled and checked in preview, and the media buyer is named (section 6.12).
22. Virtually staged images carry "Virtually staged" in real type beside the unstaged photograph; renders carry "Artist's impression" and the RERA number (section 6.3).
23. Campaigns running in New York disclose any synthetic performer (section 7.4).
24. Suppliers have disclosed their generative tools and the intake checks have been run (section 7.8).

### 11.4 The tool matrix as of October 2026

| Tool | Category | Version | Commercial use | Indemnity | Provenance | Status or risk | House use |
|---|---|---|---|---|---|---|---|
| Midjourney | Image, video | V8.1 default from 11 June 2026; V8.2 launched 24 July 2026 (default status unconfirmed); V7 for --oref; Video V1 | Paid plans; Pro or Mega above $1 million revenue and for Stealth | None | None native | Public by default; strong aesthetic prior | Moodboards, styleframes, exploration with sref |
| FLUX.2 (BFL) | Image, editing | FLUX.2 pro, flex, dev, klein; Kontext | API or licence; dev weights non-commercial | None | None native | Weights licence trap | Product-in-environment, instruction edits, LoRA |
| Ideogram | Image with text | 3.0; a version 4 reported and unverified | Paid | None | None stated | Weak skin and light | Latin text comps only |
| GPT Image | Image | gpt-image-2 and 2.5 variants, gpt-image-1.5 (verified 29 October 2026) | Paid ChatGPT or API | Copyright Shield for API and enterprise (reported) | C2PA | Yellow cast, smooth skin | Layout-aware graphics, quick edits |
| Nano Banana Pro | Image editing | Gemini 3 Pro Image; Nano Banana 2 (gemini-3.1-flash-image) | Paid; API $0.134 (2K) and $0.24 (4K) an image | Google indemnity on Cloud and Workspace (reported) | SynthID, C2PA in Gemini app | Invents architecture on extension | Identity-preserving edits, relight, multi-reference |
| Imagen 4 | Image | 4 | Paid | As above | SynthID | Generic default | Rare |
| Stable Diffusion and ComfyUI | Image, pipelines | SD 3.5, SDXL | Community License under $1 million revenue | None | None | Operator skill required | NDA work, ControlNet, LoRA, batch |
| Adobe Firefly and Photoshop | Image, editing | Firefly Image Model 5; Generative Fill and Expand | Creative Cloud | Enterprise indemnity, Adobe models only | Content Credentials | Trails on light and material | Cleanup, expand, retouch, the indemnified environment |
| Magnific | Upscale, relight | Precision V2 | Paid | None | None | Over-detailing | Generated-image upscale at low creativity |
| Topaz | Upscale, denoise | Gigapixel, Photo, Video; Starlight | Paid ($29 to $59 a month by product) | None | None | Creative models hallucinate | Real photography upscale, video cleanup |
| Krea | Real-time canvas, aggregator | Current | Free 100 units a day; Basic $9 to Business $200 | None | None | Nothing exclusive | Live sketch-to-image in client calls |
| Qwen-Image | Image, editing, open weights | Qwen-Image, Qwen-Image-Edit | Apache 2.0 | None | None | Operator skill | Offline NDA edits and LoRA training |
| Bria | Image, cut-outs | Fibo and Bria models | Pay-as-you-go from $0.018 a generation | Capped; unlimited on Enterprise | None stated | Aesthetic trails the leaders | Indemnified environments and product cut-outs |
| Google Veo and Omni Flash | Video | Veo 3.1 in Flow, Gemini, Vertex and Higgsfield; Gemini API previews scheduled for retirement no earlier than 22 October 2026; gemini-omni-1.1-flash | Paid; Omni Flash about $0.10 a second at 720p | Google indemnity on Cloud (reported) | SynthID | API churn; no negative prompt on Omni Flash | Ambient-sound clips from real stills |
| OpenAI Sora 2 | Video | Shut down 24 September 2026 | None | None | Was C2PA | Withdrawn | None |
| Kling | Video | 2.6, O1, 3.0; 4.0 listed on Higgsfield | Paid | None stated | None stated | 4k mode on Higgsfield; 60 fps unverified; China-headquartered | The image-to-video workhorse via Higgsfield |
| Runway | Video, editing | Gen-4.5, Aleph 2.0, Act-Two | Standard $15, Pro $35, Max $95 | None stated | None stated | Aleph 2.0 at 140 credits per 5 seconds | Set extension, relight, angle changes on real footage |
| Higgsfield | Aggregator | Kling 2.6 to 4.0, Veo 3.1, Omni Flash, Wan 2.6 to 3.0, Seedance, MiniMax, Soul, Popcorn (catalogue read 29 October 2026) | Paid; terms do not restrict commercial use of outputs | None; the user indemnifies Higgsfield | Inherits | Trains on user content outside an Enterprise Agreement (terms of 23 October 2026) | All video generation except NDA material; see the higgsfield-prompting skill |
| Luma | Video | Ray3.2 | Plus $30, Pro $90, Ultra $300 | None stated | None stated | No native audio | EXR export for graded films |
| Pika | Video | 2.5 | Starter $10, Creator $35, Fancy $95 | None stated | None stated | Trend-tool look | None for luxury |
| Hailuo (MiniMax) | Video | 2.3; H3 on Higgsfield | Paid | None stated | None stated | Defendant in the studios' output case | Fabric and physics tests only; no finals |
| Moonvalley Marey | Video | Marey | Paid; not verified | Not verified | Not verified | Terms unread | Candidate for indemnified B-roll once terms are confirmed |
| Adobe Firefly Video | Video | Firefly Video Model | Creative Cloud | Enterprise indemnity, Adobe model only | Content Credentials | Quality trails | Indemnified B-roll where required |
| Wan, LTX-2, Seedance | Video | Wan 2.1 and 2.2 open weights, Wan 2.6 to 3.0 hosted; LTX-2 open weights; Seedance 2.0 and 2.5 hosted | Per licence | None | None | Seedance under studio cease-and-desist letters | Wan 2.1, 2.2 and LTX-2 for NDA footage in ComfyUI; Seedance tests only |
| ElevenLabs | Voice, SFX, music | Eleven v3; Music v2 | Starter $6 and above | None | None | Free tier non-commercial | Scratch VO, consented clones, SFX, dubbing |
| Suno and Udio | Music | v5; Udio walled garden | Paid plans | None | None | Open claims by Universal and Sony | Temp tracks only |
| Stable Audio | Sound beds | 2.x, Open, 3.0 | Community License | None | None | Generic | Ambience loops for previs |
| Meshy and Tripo | 3D | Meshy 6; Tripo 3.x | Paid plans (free is CC BY) | None | None | No true scale, smeared topology | Previs props only |
| Figma Make, Framer AI, Relume | Design generation | Current | Paid plans | None | None | The generic output problem | Structure and prototypes; the look comes from the house tokens (section 9.3) |
| v0, Lovable, Bolt | Code generation | Current; v0 Plus $30, Business $100 | Paid plans | None | None | Median web output | Skeletons finished to section 9.3 |
| Cursor, Claude Code | Coding | Current | Paid plans | Anthropic copyright indemnity on commercial terms (reported) | None | None | Production microsites with house tokens |
| Canva AI | Layout generation | Magic Studio | Paid | Canva Shield enterprise (reported) | None | The Canva look | Never for client-facing luxury work |
| xAI Grok Imagine | Image, video | Grok Imagine; Grok Video 1.5 on Higgsfield | Paid | None | None | Sexualised edits of real people, January 2026 | Never, on any host |

## Terms introduced

- 20-to-2 loop: the house styleframe loop: 20 draft generations cut to 2 survivors, refined, composited and upscaled once.
- 70 percent camera rule: the house limit of at least 70 percent camera-originated screen time and at most 30 percent generated motion in a delivered film.
- Abaya: the full-length outer robe worn by women in the Gulf.
- ACES2065-1: the archival colour space of the Academy Color Encoding System, with AP0 primaries.
- Aesthetic fine-tuning: tuning a model on human preference scores so that its default output matches crowd taste.
- Agal: the black cord that holds the ghutra or shemagh in place.
- Aleph: Runway's model for editing an existing shot: adding, removing or transforming objects, new angles, relighting.
- Animatic: a storyboard cut to time against a temp soundtrack.
- API: application programming interface; the route by which software calls a model.
- AR try-on: an augmented reality overlay of a true-scale 3D product on a tracked hand, ear or neck in a live camera feed.
- Bounce: light reflected from nearby surfaces onto a subject, carrying their colour into its shadow side.
- B-roll: supporting footage cut around the main action.
- Butterfly lighting: a key above and in front of the face that casts a small shadow under the nose; also called paramount.
- C2PA: the Coalition for Content Provenance and Authenticity, whose specification (version 2.5 as of October 2026) defines signed provenance manifests bound to a file.
- Cameo: Sora's consented insertion of a real person's likeness, withdrawn with the service.
- Catchlight: the light source reflected in the eye.
- CFG scale: classifier-free guidance scale; how strongly a diffusion model follows the prompt, typically 4 to 8 in Stable Diffusion.
- Character reference (--cref): the Midjourney V6 parameter carrying a character's identity from a reference image, replaced by --oref in V7.
- Chrome ball: a reflective sphere photographed on set to record the lighting environment for later matching.
- CMYK: the four process inks of print (cyan, magenta, yellow, black) and the colour space built on them.
- ComfyUI: a node-based interface for Stable Diffusion and other open models in which each node is a model, a sampler or a filter.
- compositeWithTrainedAlgorithmicMedia: the IPTC Digital Source Type value for a capture combined with generated elements.
- Contact shadow: the tight dark shadow where an object meets a surface; its absence is the floating-object tell.
- Content Credentials: the consumer-facing name and "cr" icon for C2PA manifests.
- ControlNet: a conditioning network that constrains a diffusion model to edges, depth or pose taken from a reference image.
- DAM: digital asset management system, the library in which masters and sidecars are stored.
- Deepfake: synthetic media showing a real person saying or doing what they did not; in the EU AI Act, generated or manipulated content resembling real persons, places or events that would falsely appear authentic.
- Delta E 2000 (dE00): the CIEDE2000 perceptual colour-difference metric, in which 1.0 is about one just noticeable difference.
- Design token: a named design value (colour, radius, spacing, type) stored once and reused; see 07-design-systems-and-tokens.md.
- digitalCapture: the IPTC Digital Source Type value for an image captured by a camera.
- Digital replica: a synthetic reproduction of a performer's voice or likeness, in SAG-AFTRA and Copyright Office usage.
- Digital twin: a consented identity model of a real person's face and voice, owned by that person and licensed per use.
- DPDP Act: India's Digital Personal Data Protection Act 2023, under which faces and voices are personal data.
- Draft mode: Midjourney's faster, cheaper preview generation, about ten times faster at half the GPU cost.
- Dutch angle: a deliberately tilted camera.
- Dynamic injunction: an Indian court order that extends to infringers and platforms identified after it is granted; also called a John Doe order.
- Edit Model (--edit): the Midjourney V8.x instruction editor, taking a written instruction and up to four reference images; it replaces --oref on V8.x.
- EEA: the European Economic Area: the EU plus Iceland, Liechtenstein and Norway.
- Elements: Kling's feature taking up to four reference images to hold a subject consistent across a clip.
- Ex parte: granted without hearing the other side.
- EXR: OpenEXR, a 16 or 32-bit floating-point image format used for grading and compositing.
- Fair use: the US copyright defence for unlicensed use that is transformative and does not harm the market for the work.
- Fill: the secondary light that lifts the shadows left by the key.
- Foley: sound effects performed and recorded to picture.
- Frequency separation: a retouching technique that splits an image into a texture layer and a tone layer so each can be edited alone.
- GA: generally available; a vendor's stable, supported release of a model or endpoint.
- Gaussian splatting: a 3D scene built from millions of small coloured ellipsoids fitted to photographs, viewable from new angles with true parallax.
- GCC: the Gulf Cooperation Council states: Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE.
- Ghutra: the white headcloth worn by men in the Gulf.
- Gobo (cucoloris): a cut-out placed in front of a light to cast a patterned shadow.
- Golden set: a fixed list of real questions with approved answers, re-run on every model or prompt change.
- GPU time: the graphics-processor time a generator bills against a plan.
- Grey card: an 18 percent reflectance card photographed for white balance and exposure.
- Halation: the red glow around bright lights characteristic of CineStill 800T film.
- HDR: high dynamic range; also the over-processed look of lifted shadows and compressed highlights.
- Hero-adjacent: sitting next to the real hero product, or in a paid placement; such generated elements need an indemnified tool or a generic subject.
- Hero asset: the real subject of an advertisement (the piece, the dish, the suite, the face) that the buyer will compare with reality; always photographed.
- Hybrid workflow: a workflow with a real photograph, real footage or a real 3D model at the centre and generation around it.
- IA: information architecture; the structure and labelling of a site's content.
- IC-Light: Lvmin Zhang's open-source relighting model (2024), native in ComfyUI.
- Image prompt: an image URL at the start of a Midjourney prompt that conditions content and composition, weighted by --iw.
- Indemnification: a vendor's contractual promise to defend and pay a third-party claim that its output infringes.
- Inpainting: regenerating a masked region of an image.
- IP-Adapter: an image prompt adapter that lets a diffusion model take an image as a prompt.
- IPTC Digital Source Type: the photo metadata field whose value "trainedAlgorithmicMedia" marks generated media.
- Kandura: the collarless Emirati men's robe, with a tassel (tarboosha) at the neck.
- Keeper ratio: the number of attempts per usable output, recorded per tool and used to quote.
- Key light: the main light on a subject, whose direction every shadow must agree with.
- Kontext: Black Forest Labs' FLUX.1 model for instruction-based editing of an existing image.
- Label taxonomy: the house table mapping each edit type to its IPTC value, C2PA action, legal labels and expected platform behaviour (section 7.7).
- Largest Contentful Paint: the time until the largest visible element of a page renders; the house ceiling is 2.5 seconds.
- LoRA: Low-Rank Adaptation; a small set of trained weights that adapts a base model to a subject or style.
- LUT: lookup table; a fixed colour transform applied to an image or clip.
- Manifest: the C2PA record, cryptographically signed, of an asset's origin and every edit.
- Matra: a Devanagari vowel sign attached to a consonant.
- Matte painting: a painted or digital extension of a set or location composited behind live action.
- Model collapse: the narrowing of a model's output distribution when it is trained on recursively generated data.
- Moodboard: a board of existing references showing a direction, each labelled with its source and the one thing borrowed.
- Moodboards (Midjourney): a Midjourney feature that builds a personalisation profile from uploaded images.
- Multi-reference conditioning: generating from several reference images in one prompt.
- Native audio: sound generated by a video model together with the picture.
- Near-copy check: the QC step that runs hero-adjacent outputs through reverse image search to catch memorised reproductions.
- Negative prompt: the list of what a model should exclude.
- Omni reference (--oref): the Midjourney V7 parameter placing a specific object, character, vehicle or garment from a reference image into a generation, weighted by --ow.
- Parallax: the apparent shift of nearer objects against farther ones as the camera moves.
- Passing off: the common-law wrong of misrepresenting goods or services as another's.
- PBR: physically based rendering; a shading model that uses measured material properties.
- PDPL: the UAE Personal Data Protection Law, Federal Decree-Law No. 45 of 2021, which treats biometric data as sensitive.
- Personalisation (--p): the Midjourney parameter that biases outputs towards an operator's rating history or a moodboard profile.
- Personality rights: the Indian courts' term for a person's control over commercial use of their identity.
- Photogrammetry: reconstruction of a 3D mesh from photographs taken around an object.
- Plate: a clean photograph or shot of a location, background or element made for compositing.
- Platform generative enhancements: features by which ad platforms generate or alter delivered creative (expansion, text variations, animation, music).
- Previs: pre-visualisation; a rough moving sketch of a film made before the shoot to test framing, pace and coverage.
- Prompt folklore: stock phrases copied between prompt-sharing communities ("8k, masterpiece") that pull outputs towards the 2022 look.
- ProRes 422 HQ: Apple's high-bitrate intermediate codec for editing and grading.
- QC: quality control; the house checklist and review gate in section 8.
- Rank: the dimensionality of a LoRA adaptation, commonly 8 to 32.
- Raw mode (--raw): the Midjourney setting that reduces its default beautification.
- Rec.709: the ITU colour standard for HD video, in which most generated clips arrive.
- Recce: the location visit before a shoot at which plates, measurements and the sun path are recorded.
- Red-team prompt: a deliberate attempt to make a system fail, used to find invented prices, availability or policies before release.
- Relighting: changing the apparent light on a photographed subject after the fact.
- Rembrandt lighting: a key high and to one side so that a triangle of light falls on the shadow cheek.
- RERA: India's state real estate regulatory authorities under the Real Estate (Regulation and Development) Act 2016; also the Act itself.
- Reverse charge: the tax mechanism in which the buyer of an imported service accounts for the GST or VAT.
- Right of publicity: the US state-law right to control commercial use of one's identity.
- Room tone: the recorded background sound of a space, laid continuously under a scene.
- Second eye: the reviewer, other than the operator, who checks every generated asset at 200 percent and can reject without explanation.
- Seed: the integer that initialises the noise from which a diffusion model denoises; the same seed and settings reproduce the same output.
- Set extension: enlargement of a real shot beyond the built set or location.
- Shaping: the contextual joining and reordering of letters in Arabic and Indic scripts.
- Shayla: the head scarf worn with the abaya in the Gulf.
- Shemagh: the red-and-white checked headcloth worn in Saudi Arabia and elsewhere in the Gulf.
- Sidecar: a small text file stored beside a master, with the same base name, holding its generation record.
- Significant social media intermediary: under India's IT Rules, a platform with more than 5 million registered users in India, carrying extra due-diligence duties.
- Soul ID: Higgsfield's identity model, trained on photographs of one person.
- Specular highlight: the mirror reflection of a light source on a glossy surface.
- Split lighting: a key at 90 degrees to the face, lighting one half.
- Start and end frame: two images between which a video model generates continuous motion.
- Stealth mode: Midjourney's private generation mode, available on Pro and Mega plans.
- Storyboard: a sequence of frames describing each shot's framing, lens and movement before the shoot.
- Streaming: rendering a model's output as its tokens arrive.
- Styleframe: a finished-look frame made for a project that shows one shot after the grade.
- Style reference (--sref): the Midjourney parameter transferring palette, grain, light and finish from reference images or a code, weighted by --sw.
- Stylize (--s): the Midjourney parameter controlling how strongly its aesthetic prior applies.
- Substantial similarity: the copyright test for whether an output copies a specific protected work.
- Summary judgment: a ruling without trial because the material facts are not disputed.
- Sweep: a continuous curved backdrop (paper or a built cove) with no visible floor-to-wall join, used for product photography.
- Synthetically generated information (SGI): the Indian IT Rules' term for algorithmically created or altered content that appears real and depicts a person or event.
- Synthetic-use release: the house release, separate from the standard model release, that every talent signs before generation touches their face or voice (section 7.4).
- SynthID: Google's invisible watermark embedded in its generated images and video.
- Tell: a defect that identifies an image or clip as generated to a trained eye within two seconds.
- Temporal consistency: a video model's ability to hold textures and identities stable across frames.
- Thobe: the men's robe of Saudi Arabia (collared and buttoned) and Qatar (collar and cuffs).
- Three-layer system: the Higgsfield prompting rule that image, identity and motion prompts are written separately.
- Token: the unit of a language model's output, roughly a word fragment; distinct from a design token.
- Trade dress: the protected overall look of a product or its packaging.
- trainedAlgorithmicMedia: the IPTC Digital Source Type value for media created by a trained generative model.
- Trakheesi permit: the Dubai property advertising permit issued through the Dubai Land Department's Real Estate Regulatory Agency.
- Transcreation: rewriting a script for a target culture, keeping intent over wording.
- Trigger word: a unique token used in LoRA training captions that calls the trained subject in a prompt.
- UGC: user-generated content.
- Upscaler, faithful and creative: a faithful upscaler enlarges without inventing detail; a creative upscaler synthesises it.
- VAE: variational autoencoder; the component that converts between pixels and a diffusion model's compressed latent image.
- Vellus hair: fine facial down, whose presence reads as real skin.
- Virtual staging: furniture placed by generation into a photograph of an empty property.
- Viseme: the mouth shape that corresponds to a speech sound.
- VO: voiceover.
- WCAG 2.2 AA: the Web Content Accessibility Guidelines conformance level the house requires.

## Sources and further reading

Books

- Blain Brown, Cinematography: Theory and Practice, 3rd edition, 2016.
- Bruce Block, The Visual Story, 2nd edition, 2008.
- Ross Lowell, Matters of Light and Depth, 1992.
- Kate Crawford, Atlas of AI, 2021.
- Ethan Mollick, Co-Intelligence, 2024.
- Emily M. Bender and Alex Hanna, The AI Con, 2025.

Specifications, standards and law

- C2PA Technical Specification, versions 2.2 to 2.5, Coalition for Content Provenance and Authenticity, https://spec.c2pa.org
- IPTC Photo Metadata Standard (Digital Source Type), https://iptc.org/standards/photo-metadata/
- Regulation (EU) 2024/1689 (the AI Act), Article 50 and Article 99, https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- European Commission, Code of Practice on Transparency of AI-generated Content, https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Ministry of Electronics and Information Technology, Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 and the 2026 amendment G.S.R. 120(E), https://www.meity.gov.in
- The Copyright Act 1957 (India), section 2(d)(vi), Copyright Office, https://copyright.gov.in
- UAE federal legislation on the UAE legislation portal: Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights; Federal Decree-Laws No. 34 of 2021 (rumours and cybercrimes), No. 36 of 2021 (trade marks) and No. 45 of 2021 (personal data protection); Federal Law No. 15 of 2020 (consumer protection), https://uaelegislation.gov.ae
- India: Copyright Act 1957, Trade Marks Act 1999, Real Estate (Regulation and Development) Act 2016 (section 12), Consumer Protection Act 2019 and Digital Personal Data Protection Act 2023, on India Code, https://www.indiacode.nic.in
- Central Consumer Protection Authority, Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements 2022, https://consumeraffairs.nic.in
- Advertising Standards Council of India, Code for Self-Regulation of Advertising Content, influencer guidelines (2021) and guidelines for fairness and skin-lightening products (2014), https://www.ascionline.in
- Copyright, Designs and Patents Act 1988 (UK), section 9, https://www.legislation.gov.uk/ukpga/1988/48/section/9
- California AB 723 (2025), digitally altered images in real estate advertising, https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB723
- Cyberspace Administration of China, Measures for Labelling AI-Generated Synthetic Content, in force 1 September 2025, https://www.cac.gov.cn
- IPTC NewsCodes, Digital Source Type vocabulary, https://cv.iptc.org/newscodes/digitalsourcetype/
- Content Credentials Verify, https://contentcredentials.org/verify
- United States Copyright Office, Copyright and Artificial Intelligence, Parts 1 to 3, https://www.copyright.gov/ai/
- Stability AI Community License, https://stability.ai/license
- Web Content Accessibility Guidelines (WCAG) 2.2, https://www.w3.org/TR/WCAG22/

Cases

- Thaler v Perlmutter, United States Court of Appeals for the D.C. Circuit, No. 23-5233, 18 March 2025, https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf
- Getty Images (US) Inc v Stability AI Ltd [2025] EWHC 2863 (Ch), https://www.bailii.org/ew/cases/EWHC/Ch/2025/2863.html
- Moffatt v Air Canada, 2024 BCCRT 149, https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html
- Infopaq International A/S v Danske Dagblades Forening, Case C-5/08, Court of Justice of the European Union, 16 July 2009, https://curia.europa.eu/juris/liste.jsf?num=C-5/08
- Andersen v Stability AI Ltd, United States District Court for the Northern District of California, No. 3:23-cv-00201, filed January 2023
- The New York Times Co v Microsoft Corp and OpenAI, United States District Court for the Southern District of New York, No. 1:23-cv-11195, filed December 2023
- Bartz v Anthropic PBC, Northern District of California, No. 3:24-cv-05417, order on fair use of 23 June 2025
- Kadrey v Meta Platforms Inc, Northern District of California, No. 3:23-cv-03417, order of 25 June 2025
- Thomson Reuters Enterprise Centre GmbH v Ross Intelligence Inc, United States District Court for the District of Delaware, No. 1:20-cv-00613, opinion of 11 February 2025
- Disney Enterprises Inc and others v Midjourney Inc, United States District Court for the Central District of California, filed 11 June 2025
- Allen v Perlmutter, United States District Court for the District of Colorado, No. 1:24-cv-01560
- Li v Liu, Beijing Internet Court, judgment of 27 November 2023
- GEMA v OpenAI, Regional Court Munich I, judgment of 11 November 2025
- Eastern Book Company v D.B. Modak, (2008) 1 SCC 1, Supreme Court of India
- Anil Kapoor v Simply Life India and others, Delhi High Court, CS(COMM) 652/2023, order of 20 September 2023
- Arijit Singh v Codible Ventures LLP and others, Bombay High Court, order of 26 July 2024
- ANI Media Pvt Ltd v OpenAI Inc, Delhi High Court, CS(COMM) 1028/2024

Articles, papers and documentation

- Sasha Luccioni, Yacine Jernite and Emma Strubell, "Power Hungry Processing: Watts Driving the Cost of AI Deployment?", FAccT 2024, https://arxiv.org/abs/2311.16863
- Ilia Shumailov and others, "AI models collapse when trained on recursively generated data", Nature 631, 2024, https://www.nature.com/articles/s41586-024-07566-y
- Saleema Amershi and others, "Guidelines for Human-AI Interaction", CHI 2019, https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/
- Google PAIR, People + AI Guidebook, https://pair.withgoogle.com/guidebook
- Microsoft, HAX Toolkit, https://www.microsoft.com/en-us/haxtoolkit/
- Emily Campbell, The Shape of AI, https://www.shapeof.ai
- James O'Donnell and Casey Crownhart, "We did the math on AI's energy footprint", MIT Technology Review, 20 May 2025, https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/
- Gary Marcus and Reid Southen, "Generative AI has a visual plagiarism problem", IEEE Spectrum, January 2024, https://spectrum.ieee.org/midjourney-copyright
- Mesut Cicek, Dogan Gursoy and Lu Lu, "Adverse impacts of revealing the presence of 'Artificial Intelligence (AI)' technology in product and service descriptions on purchase intentions", Journal of Hospitality Marketing and Management, 2024
- Lvmin Zhang and others, IC-Light, https://github.com/lllyasviel/IC-Light
- Runway, "Introducing Runway Aleph", 25 July 2025, https://runway.com/research/introducing-runway-aleph
- Runway, Pricing, https://runway.com/pricing
- Google, Gemini API video generation documentation, https://ai.google.dev/gemini-api/docs/video
- Google, Gemini API deprecations, https://ai.google.dev/gemini-api/docs/deprecations
- OpenAI, Sora 2 model page, https://developers.openai.com/api/docs/models/sora-2
- Kling, "Kling Video 3.0 Omni: multi-shot and native audio guide", https://kling.ai/blog/kling-video-3-omni-multi-shot-native-audio-guide
- Kling, Video 3.0 model user guide, February 2026, https://kling.ai/quickstart/klingai-video-3-model-user-guide
- Higgsfield, Terms of Service, updated 23 October 2026, https://higgsfield.ai/terms
- Midjourney, "V8 Alpha", 17 March 2026, https://updates.midjourney.com/v8-alpha/
- Midjourney, "Version 8.2", 24 July 2026, https://updates.midjourney.com/version-8-2/
- Google, "Nano Banana Pro", 20 November 2025, https://blog.google/technology/ai/nano-banana-pro/
- Google, Gemini API pricing, https://ai.google.dev/gemini-api/docs/pricing
- Google DeepMind, SynthID, https://deepmind.google/technologies/synthid/
- Google, NotebookLM, https://notebooklm.google
- OpenAI, API pricing, https://developers.openai.com/api/docs/pricing
- Luma AI, Pricing, https://lumalabs.ai/pricing
- Pika, Pricing, https://pika.art/pricing
- Bria, Pricing, https://bria.ai/pricing
- Qwen team, Qwen-Image, https://github.com/QwenLM/Qwen-Image
- World Labs, Marble, https://www.worldlabs.ai
- Meta for Developers, Advantage+ creative, https://developers.facebook.com/docs/marketing-api/creative/advantage-creative/
- Office of the Governor of New York, "Governor Hochul signs legislation to protect consumers and boost AI transparency in film industry", 11 December 2025, https://www.governor.ny.gov/news/governor-hochul-signs-legislation-protect-consumers-and-boost-ai-transparency-film-industry
- Midjourney documentation, Version and Parameter List articles, https://docs.midjourney.com
- Midjourney, "Omni-Reference --oref", https://updates.midjourney.com/omni-reference-oref/
- ElevenLabs, Pricing, https://elevenlabs.io/pricing
- Topaz Labs, https://www.topazlabs.com
- Lovable, Pricing, https://lovable.dev/pricing
- Vercel, v0 pricing, https://v0.app/pricing
- Getty Images, Generative AI by Getty Images, https://www.gettyimages.com/ai/generation/about
- Adobe, Firefly for enterprise, https://www.adobe.com/products/firefly/enterprise.html
- Meta, "Our approach to labeling AI-generated content and manipulated media" (with the update of 12 September 2024), https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
- YouTube Help, "Disclosing use of altered or synthetic content", https://support.google.com/youtube/answer/14328491
- TikTok Newsroom, "Partnering with our industry to advance AI transparency and literacy", 9 May 2024, https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy
- Office of the Governor of Tennessee, "Gov. Lee signs ELVIS Act into law", 21 March 2024, https://www.tn.gov/governor/news/2024/3/21/photos--gov--lee-signs-elvis-act-into-law.html
- Legal 500, "2026 IT Rules amendments: AI content labelling and intermediary obligations", https://www.legal500.com/intelligence/india/media-telecoms-it-entertainment/2026-it-rules-amendments-ai-content-labelling-and-intermediary-obligations
- IndiaLaw LLP, "IT Rules 2026 corporate playbook: practical roadmap for synthetic information regulation", https://www.indialaw.in/blog/it-rules-2026-synthetic-media/
- Jones Day, "European Commission publishes final Code of Practice on marking and labelling AI-generated content", June 2026, https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content
- Reed Smith, "Transparency obligations for AI-generated content: the Code of Practice adequacy", https://www.reedsmith.com/our-insights/blogs/viewpoints/102nbz0/transparency-obligations-for-ai-generated-content-the-code-of-practice-adequacy/
- Gibson Dunn, "EU AI Act Omnibus agreement: postponed high-risk deadlines and other key changes", https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
- Simmons and Simmons, "Provisional agreement reached on AI Omnibus package to amend EU AI Act", https://www.simmons-simmons.com/en/publications/cmoveo6ke00icuxskpgueb0od/ai-omnibus-update
- Usercentrics, "EU AI Act high-risk delay and Article 50 transparency", https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/
- Mishcon de Reya, "Getty Images v Stability AI: unpacking the High Court's judgment", https://www.mishcon.com/news/getty-images-v-stability-ai-unpacking-the-high-courts-judgment
- SpicyIP, posts on the DPIIT working paper on generative AI and copyright (December 2025 to February 2026) and on personality rights, https://spicyip.com
