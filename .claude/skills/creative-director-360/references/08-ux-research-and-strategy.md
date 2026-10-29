# UX research, strategy and discovery

How to learn what is true about users and the business before and after designing: planning, methods with protocols and sample sizes, recruiting and the law in India, the UAE and the EU, synthesis, the models research produces, the strategy frameworks it feeds, the metrics that judge the result, and how Mask360 runs research for luxury categories. As of October 2026. Taste judgement sits above this file in the design-taste skill; research tells you what people need and do, taste decides how the answer looks.

## Contents

1. [Research planning](#1-research-planning)
2. [Interview methods](#2-interview-methods)
3. [Observation and longitudinal methods](#3-observation-and-longitudinal-methods)
4. [Surveys](#4-surveys)
5. [Information architecture methods](#5-information-architecture-methods)
6. [Usability testing](#6-usability-testing)
7. [Inspection methods](#7-inspection-methods)
8. [Behavioural and quantitative methods](#8-behavioural-and-quantitative-methods)
9. [Attitudinal instruments, concept and first-impression tests](#9-attitudinal-instruments-concept-and-first-impression-tests)
10. [Recruiting, ethics and the law](#10-recruiting-ethics-and-the-law)
11. [Synthesis](#11-synthesis)
12. [Models and artefacts](#12-models-and-artefacts)
13. [Strategy frameworks](#13-strategy-frameworks)
14. [Metrics](#14-metrics)
15. [Research for Mask360 categories](#15-research-for-mask360-categories)
16. [Research operations](#16-research-operations)
17. [Communicating research](#17-communicating-research)
18. [AI in research, October 2026](#18-ai-in-research-october-2026)
19. [Method selection and sample size tables](#19-method-selection-and-sample-size-tables)
20. [Terms introduced](#terms-introduced)
21. [Sources and further reading](#sources-and-further-reading)

## 1. Research planning

### 1.1 Start from the decision

Every study begins with the decision it will change. Erika Hall's rule in "Just Enough Research" (2013, second edition 2019): research is the systematic reduction of the risk of being wrong, so a study with no decision attached is theatre. Write three lines before choosing a method:

1. The decision: "Choose between a concierge-led and a self-serve booking flow for the Goa villa microsite by 14 November."
2. What we would need to believe to choose each option.
3. The cheapest evidence that would move that belief.

### 1.2 Research questions and hypotheses

- A research question is an open question the team needs answered, written in the team's language: "How do NRI (non-resident Indian) buyers in Dubai decide which Mumbai developer to trust?" It is answered by description and explanation, usually qualitatively. Write three to seven per study; more than seven means two studies.
- A hypothesis is a falsifiable statement with a threshold set before the data arrives: "At least 6 of 8 NRI buyers will name a relative's site visit as the decisive trust event." The threshold is written first because a team that sets it afterwards will always find its result.
- Interview questions are different again: the research question is never read aloud. "Why do you trust developers?" invites a theory; "Tell me about the last time you sent money for a flat you had not seen" produces evidence (section 2.2).
- Generative studies run on research questions. Evaluative and summative studies run on hypotheses. Mixing them in one session dilutes both: the participant who has just evaluated your prototype can no longer describe their world without it.

### 1.3 The methods landscape

Christian Rohrer's chart for Nielsen Norman Group, "When to Use Which User-Experience Research Methods" (first published 2014, current version July 2022, reviewed July 2026), places 20 methods on three dimensions. The reason to know it: it stops a team using an attitudinal method to answer a behavioural question, the most common research error in agencies.

| Dimension | Poles | What it decides |
|---|---|---|
| Attitudinal against behavioural | What people say against what people do | Use behavioural methods (observation, analytics, usability tests, A/B tests) when the question is about action; people misreport their own behaviour, especially habits and spend |
| Qualitative against quantitative | Why and how, by direct observation, against how many and how much, by measurement | Qualitative finds the problems and their causes; quantitative sizes them. Qualitative findings are never reported as percentages |
| Context of use | Natural (product used as in life), scripted (tasks you set), limited (a constrained version, such as a card sort), no use of the product | Natural context gives validity; scripted context gives control. Decide which you need before recruiting |

Rohrer maps the methods to three phases: strategise ("find new directions and opportunities"), design ("improve usability of design"), and launch and assess ("measure product performance against itself or its competition").

### 1.4 Generative, evaluative, summative

| Type | Question | Typical methods | When |
|---|---|---|---|
| Generative (also called exploratory or discovery research) | What should we make, for whom, and why? | Interviews, contextual inquiry, diary studies, JTBD switch interviews, desk research | Before a brief exists, or when a brief is suspect |
| Evaluative (formative) | Does this design work, and what breaks? | Usability tests, tree tests, first-click tests, heuristic evaluation, cognitive walkthrough | During design, on prototypes, repeatedly |
| Summative | How well does the finished thing perform, against a benchmark or a competitor? | Benchmarked usability (SUS, task success), A/B tests, analytics, surveys | After launch, and before a redesign to set the baseline |

Formative studies are small and frequent. Summative studies are large and rare. A summative study run on five users produces a confident number with a confidence interval wide enough to be useless (section 19.2).

### 1.5 When research is unnecessary

Skip a study, and say so in writing, when one of these holds:

- The decision is cheap and reversible and live data will answer it faster: a headline on a landing page with 50,000 monthly visitors can be tested in production.
- The answer already exists: the client's CRM (customer relationship management system), reviews, support tickets, or a study under twelve months old on the same audience. Read before you recruit.
- Nobody will act on the result: the founder has decided, the budget is spent, or the legal team owns the answer. Research used to ratify a decision damages trust in research.
- The question is one of brand expression. Whether the serif is Canela or a custom cut is a taste judgement (see design-taste, references/type.md); preference tests on brand expression reward the familiar and punish the distinctive.
- The cost of being wrong is lower than the cost of the study. A ₹4 lakh study to protect a ₹2 lakh decision is a loss.
- The population cannot be reached in time. A study with the wrong participants is worse than none because it carries false confidence.

### 1.6 Timeboxing

| Study | Planning | Recruiting | Fieldwork | Synthesis and report | Total |
|---|---|---|---|---|---|
| Guerrilla usability test (intercepts, 5 to 8 people) | Half a day | None | 1 day | 1 day | 2 to 3 days |
| Moderated usability round (5 to 8 sessions) | 2 days | 5 to 10 working days | 2 days | 2 to 3 days | 2 to 3 weeks |
| Unmoderated test on a panel | 1 day | 1 to 2 days | 1 to 3 days | 2 days | 1 week |
| Discovery interviews (10 to 15) | 3 days | 1 to 3 weeks (longer for HNW) | 1 to 2 weeks | 1 to 2 weeks | 4 to 8 weeks |
| Diary study | 1 week | 2 weeks | 1 to 4 weeks | 2 weeks | 6 to 10 weeks |
| Survey (n 400) | 1 week including pilot | 1 to 2 weeks | Overlaps recruiting | 1 week | 3 to 4 weeks |
| Card sort or tree test | 2 days | 2 to 5 days | 3 to 7 days | 2 days | 2 weeks |

Recruiting is the variable that breaks schedules. For high-net-worth (HNW) respondents, people with investable assets above about US$1 million in the wealth-report convention, double the recruiting allowance.

Fieldwork calendar for India and the Gulf (festival dates follow moon sighting or the Hindu lunisolar calendar, so confirm each against an official calendar when booking; the campaign view of the same calendar is in 19-campaigns-and-creative-direction.md, sections 6.12 and 6.13):

| Period | Effect on fieldwork | House rule |
|---|---|---|
| Ramadan (expected to begin around 8 February 2027) | Daytime energy is low; evenings are social and full | Sessions after iftar, roughly 20:00 to 23:00, of 45 minutes at most; no daytime tastings or F&B intercepts; none in the last ten nights, which are given to prayer |
| Eid al-Fitr and Eid al-Adha | Public holidays of several days; families travel | No fieldwork in Eid weeks |
| UAE summer, July to August | Schools close and many residents leave; response rates and in-person availability fall | Run remote sessions, or move fieldwork to September to May |
| Friday midday prayers in the Gulf | Muslim participants unavailable roughly 12:00 to 14:00 | Never book Friday midday sessions with them |
| Diwali (8 November 2026) and the festive weeks before it | Jewellery, gifting and property buying peak; store and sales staff are least available | Interview buyers in the weeks after, while memory is fresh; observe stores in Dhanteras and Diwali week only when the question is about peak service |
| Indian wedding season, roughly November to February | Bridal jewellery and events respondents are most relevant and least available | Recruit four weeks ahead; offer 30-minute remote slots |
| Mumbai monsoon, June to September | Flooding and travel disruption cancel in-home visits at short notice | Book a reserve day; switch to remote sessions on India Meteorological Department red-alert days |

### 1.7 The research plan

One page, signed off by the client before recruiting. Sections: background (three lines); the decision; research questions; hypotheses with thresholds; method and why it fits the question type (section 19.1); participants, criteria and number (section 19.2); schedule; roles (moderator, note-taker, observers); deliverable and date; consent and data handling (section 10.4); budget including incentives. A plan the client has not signed is a plan the client will dispute when the findings are inconvenient.

Research is sold as fixed offers, so a client can buy it like any other deliverable:

| Offer | Scope | Duration |
|---|---|---|
| Expert review and analytics audit | Expert review (7.3), funnel read (8.2), 10 to 15 ranked fixes | 1 week |
| Discovery sprint | 6 to 8 stakeholder and 10 user interviews, synthesis, archetypes, opportunity map | 3 to 4 weeks |
| Usability round | 5 to 8 moderated sessions on a prototype, findings and fixes | 2 to 3 weeks |
| Benchmark | 40 or more participants, SUS or SUPR-Q and task metrics (9.1) | 3 weeks |

Cost lines in every estimate: the recruiting fee per head, priced by incidence (section 10.2); incentives; moderator and analyst days; translation and transcription; travel or facility hire; tool seats; and the client's own hours for interviews and workshops. Price the study against the cost of the decision it protects (section 1.5). The agency's scoping and pricing models are in 24-business-of-creative-and-agency-operations.md, section 3, which carries research only as a phase inside larger scopes; quote stand-alone research from these four offers.

## 2. Interview methods

### 2.1 Stakeholder interviews

- Purpose: learn the business goal, the constraints, the politics, the history of failed attempts and the definition of success before talking to a single user. Kim Goodwin's "Designing for the Digital Age" (2009) sets the form most agencies use.
- Who: 6 to 12 people for a typical brand or product engagement: the founder or general manager, sales or reservations lead, marketing, operations, technology, finance, and the front-line person with the most customer contact (the head concierge, the senior sales associate, the site sales manager). Front-line staff are interviewed separately from their managers because they speak more freely.
- Duration: 45 to 60 minutes each, one at a time. Group stakeholder sessions produce the view of the most senior person present.
- Core questions: what does success look like in twelve months, in numbers; what has been tried and why it stopped; what would make this project fail; who else has to approve; what do customers complain about most; what do you believe about customers that you have never tested.
- Deliverable: a stakeholder map (influence against interest), a list of assumptions to test with users (assumption mapping, section 13.2), the success metrics (section 14), and the constraints log.
- Pitfall: treating stakeholder opinion as user evidence. A general manager's "our guests want speed" is a hypothesis.

### 2.2 User interviews: protocol design

A semi-structured interview is a conversation guided by a discussion guide (the ordered list of topics, prompts and timings) where the moderator may follow an unplanned thread. Steve Portigal's "Interviewing Users" (second edition 2023) is the house reference.

| Block | Minutes (of 60) | Content |
|---|---|---|
| Introduction and consent | 5 | Who we are, how long, recording consent read aloud and confirmed on tape, "there are no wrong answers, you are the expert on your own life" |
| Warm-up | 5 | Their context: work, household, a typical week. Easy, factual, builds rhythm |
| Core, story-based | 30 to 35 | "Tell me about the last time you..." then follow the story in order. Specific past episodes produce evidence; generalisations produce opinion |
| Concept or artefact reaction (optional) | 10 | Only after the core, so the concept cannot contaminate their account of their world |
| Wrap | 5 | "What should I have asked?", thanks, incentive, next steps |

Rules with reasons:

- Ask about specific past behaviour. "Would you use..." questions produce forecasts that people are bad at making; Rob Fitzpatrick's "The Mom Test" (2013) gives the three rules: talk about their life instead of your idea; ask about specifics in the past instead of generics or opinions about the future; talk less and listen more.
- Use TEDW prompts: "tell me", "explain", "describe", "walk me through". They open answers; "do you", "is it" and "would you" close them.
- Silence: wait about five seconds after an answer ends. The second answer is usually the true one.
- Echo and probe: repeat their exact last word as a question ("Embarrassing?"). Using their words prevents you inserting your framing.
- Never ask a leading question. "How frustrating was the check-in?" presumes frustration; "Walk me through check-in" does not. Never ask a double question. Never offer answer options in an open question ("was it the price or the location?").
- Ask for artefacts: the WhatsApp thread with the broker, the screenshot of the shortlist, the gift receipt. Artefacts correct memory.
- Two people per interview: one moderates, one takes notes in a notes grid (timestamp, verbatim quote, observation, tag). A moderator who takes notes stops listening.
- Number: 5 to 8 per distinct segment for a generative study, 10 to 15 in total for most engagements (saturation evidence in section 11.4). Remote sessions are fine for most topics; in-person in the participant's place is better when the environment matters (section 3).
- Courtesy bias: respondents tell a researcher who seems to represent the brand what they think will please. E. Lee Jones named it ("The Courtesy Bias in South-East Asian Surveys", International Social Science Journal, 1963), and the house meets it in the hierarchical, hospitality-minded cultures of India and the Gulf. Controls: recruit and brand the study independently of the client where possible; ask about past behaviour; use third-person projective prompts ("What would your friends say about this?"); interview staff without their managers present; treat unanimous praise as a data-quality warning.
- Moderator language: match the participant's dialect and register. Hinglish code-switching is normal in metro India, and a moderator who avoids it sounds formal and distant. Use Gulf (Khaleeji) Arabic with Emirati and Saudi participants, because Levantine or Egyptian dialect reads as foreign.
- Extremes and mainstreams: add two extreme participants to each study, such as the guest with 60 hotel nights a year or the first-time buyer. IDEO.org's "The Field Guide to Human-Centered Design" (2015) recommends the mix, and Eric von Hippel's lead users ("Lead Users: A Source of Novel Product Concepts", Management Science, 1986) explain it: people at the edge meet needs early that the mainstream meets later.

### 2.3 Laddering and the five whys

- Laddering, from means-end chain theory (Thomas Reynolds and Jonathan Gutman, Journal of Advertising Research, 1988), climbs from an attribute to a consequence to a value: "You chose the hotel with the private pool" (attribute) then "What does the private pool give you?" ("we can be with the children without other guests watching", a consequence) then "Why does that matter?" ("my family's privacy is the point of the holiday", a value). Stop at the value; going further produces philosophy. Luxury positioning lives at the value rung, which is why laddering is the strategist's favourite interview tool (see 18-brand-strategy-and-identity-design.md, section 1.1, for how the value rung becomes a positioning).
- The five whys, from Sakichi Toyoda and the Toyota Production System, is a root-cause technique for processes. In interviews a bare "why?" repeated feels like an interrogation and invites rationalisation. Rephrase each why as "What made that important?" or "What was going on for you then?" Use the five-whys structure in synthesis and stakeholder workshops, where the subject is a process failure, more than with customers.

### 2.4 Jobs to be done interviews

Jobs to be done (JTBD) is the theory that people "hire" a product to make progress in a particular circumstance; the job is the progress, independent of any product. Clayton Christensen, Taddy Hall, Karen Dillon and David Duncan set it out in "Competing Against Luck" (2016); Bob Moesta, who ran the original interviews with Christensen, wrote the method up in "Demand-Side Sales 101" (2020).

Two camps, and the house position:

| Camp | Proponents | Unit | Method |
|---|---|---|---|
| Jobs as progress (switch) | Christensen, Moesta, Alan Klement ("When Coffee and Kale Compete", 2016) | The struggling moment (the circumstance in which the old way stops working) and the progress sought | Switch interviews with recent buyers, forces diagram |
| Outcome-driven innovation (ODI) | Tony (Anthony) Ulwick, Strategyn ("Jobs to be Done: Theory to Practice", 2016) | The functional job and its desired outcome statements, rated for importance and satisfaction | Large surveys scoring outcome statements on an opportunity algorithm |

House position: switch interviews for luxury and lifestyle categories, where the job is emotional and social as much as functional and the decision is rare; ODI is suited to functional, high-frequency, measurable jobs (software, tools) that Mask360 rarely owns.

When a client team brings ODI data, read its opportunity score: importance plus the greater of (importance minus satisfaction) or zero, where each is the share of respondents rating the outcome 4 or 5 on a 5-point scale, divided by 10. Ulwick reads a score above 10 as an opportunity and above 15 as an extreme one. The job story (Paul Adams at Intercom, developed by Alan Klement) writes a job as "When [situation], I want to [motivation], so I can [expected outcome]"; it keeps the circumstance that a persona-based user story drops.

The switch interview:

- Participants: 10 to 12 people who made the switch recently, ideally within the last few months, while the memory is detailed. Include people who considered and did not buy, because their anxieties are the clearest.
- Duration: 45 to 90 minutes. Reconstruct the timeline like a documentary: first thought (when did you first realise the old way was not working), passive looking, the event that started active looking, active looking (what did you compare, who did you ask), the event that triggered the decision, deciding, buying, first use, and what they now tell others.
- Probe for the physical: where were you, who was with you, what day was it. Concrete memory brings the emotion back.

The forces diagram, also called forces of progress, scores four forces from the interview:

| Force | Direction | Example: first-time NRI buyer of a Mumbai sea-facing flat |
|---|---|---|
| Push of the situation | Towards change | Rent in Dubai rising; parents ageing in Mumbai |
| Pull of the new solution | Towards change | A flat near the parents; an asset in rupees; the view |
| Anxiety of the new solution | Against change | Fear of construction delay; fear of being cheated at a distance |
| Habit of the present | Against change | Money already in Dubai property; the comfort of renting |

Switching happens when push plus pull exceed anxiety plus habit. Most brands spend their budget on pull (the view, the render); the switch interview usually shows that reducing anxiety (the registration number under RERA, India's Real Estate (Regulation and Development) Act, 2016, displayed; a live construction camera; a named relationship manager) moves more buyers, which is a creative brief in itself (see 19-campaigns-and-creative-direction.md, section 2).

### 2.5 Focus groups, mini-groups, dyads and triads

A focus group is a moderated discussion among a small group of similar people on a defined topic. Robert Merton and Patricia Kendall described the method ("The Focused Interview", American Journal of Sociology, 1946); Richard Krueger and Mary Anne Casey's "Focus Groups: A Practical Guide for Applied Research" (fifth edition, 2015) is the house manual. Indian and Gulf clients and their research departments call them FGDs (focus group discussions) and ask for them by default.

- Size and length: 5 to 8 participants (Krueger and Casey; the older 8 to 10 norm suits only simple topics, because ten people in 90 minutes get under nine minutes each); 90 to 120 minutes; a moderator plus a note-taker.
- Composition: homogeneous by segment, NCCS band (section 10.1), gender where custom requires, and seniority, because people defer to those above them in income, age or rank.
- Number: 3 to 4 groups per segment. Greg Guest, Emily Namey and Kevin McKenna ("How Many Focus Groups Are Enough?", Field Methods, 2017) found 2 to 3 groups captured about 80 percent of themes and 3 to 6 about 90 percent.
- Use for: category vocabulary; social norms (what is acceptable to wear, gift or show at a wedding); early reactions to territories and names; co-creation (section 3.5).
- Keep out: usability (one person drives and the rest watch); purchase prediction; private subjects (money, the body, family disputes); HNW participants, who will not speak candidly before peers; finished films (19-campaigns-and-creative-direction.md, section 8.1, anti-law 20, and section 10.8).
- Pitfalls: conformity, which Solomon Asch demonstrated in 1951 (participants went along with a group's plainly wrong judgement on about a third of critical trials), and the dominant voice; the moderator controls both by collecting individual written answers before discussion. Professional repeat respondents are a known problem in Indian fieldwork: screen out anyone who joined any group in the last six months, and ask the recruiter for a signed declaration and a call-back check. The client in the viewing room reacts to one quote; brief observers that one voice is an anecdote (section 6.7).
- Variants: mini-groups of 4 to 5 for affluent or senior participants; dyads and triads (a mother and bride, a couple buying property, two friends who travel together) where the decision is shared, because the negotiation between them is the data.

## 3. Observation and longitudinal methods

### 3.1 Contextual inquiry

Contextual inquiry is an interview conducted in the participant's own setting while they do the real work, devised by Hugh Beyer and Karen Holtzblatt ("Contextual Design", 1998; second edition "Contextual Design: Design for Life", 2017).

- The master and apprentice model: the participant is the master, the researcher learns by watching and asking during the task. People cannot fully describe tacit work; they can show it.
- Four principles: context (go where the work happens), partnership (the participant steers), interpretation (check your reading with them in the moment: "So you print it because the GM signs on paper?"), focus (a clear project focus decides what to notice).
- Protocol: about two hours per session; 15 minutes of conventional interview, 90 minutes of observed work with questions at natural pauses, 15 minutes of wrap-up where you play back what you saw.
- Number: 4 to 6 per role; for a hotel, that might be 4 front-office agents, 4 concierges and 4 housekeeping supervisors.
- Deliverable: an interpretation session within 48 hours, while memory is fresh, producing affinity notes (section 11.2) and work models. The original five models are flow (who communicates with whom), sequence (steps and triggers), artefact (the things people make and use), cultural (influences, values, pressures) and physical (the space).
- Pitfall: the observer effect. Staff perform the standard operating procedure when watched. Return for a second session, or observe at a busy hour when performance gives way to habit.

### 3.2 Ethnography and rapid ethnography

Ethnography is extended immersion in a group's life, from anthropology (weeks to months). Commercial work uses rapid ethnography, David Millen's term (DIS 2000) for narrowing the focus, using key informants, and combining several observers to compress fieldwork into days. Use it for cultural questions that interviews cannot reach: how a Marwari family in Jaipur sequences wedding jewellery purchases across months, or how an Emirati family uses a majlis on a Friday. Pair the researcher by gender and language with the participants where custom requires; in the Gulf a female researcher for in-home visits with Emirati women is the norm, and access often comes through a family elder.

### 3.3 Diary studies

A diary study asks participants to log experiences over time in their own setting, catching behaviour that is too spread out to observe and too frequent to remember.

- Prompt types (Niall Bolger, Angelina Davis and Eshkol Rafaeli, Annual Review of Psychology, 2003): interval-contingent (log at fixed times, for routines), signal-contingent (log when pinged, for momentary states), event-contingent (log when the event happens, for purchases, stays, cravings).
- Duration: one to four weeks; long enough to see variation, short enough to keep compliance. Beauty routines need at least two weeks to see weekday and weekend differences; a hotel stay is a three-to-five-day diary with pre-arrival and post-stay entries.
- Number: recruit 12 to 15 to finish with 10; dropout of 20 to 30 percent is ordinary in house experience, so plan for it.
- Tools: dscout is the purpose-built platform; WhatsApp is the practical tool in India and the Gulf because participants already live in it (with a consent form that covers the data flow, section 10.4).
- Protocol: a kick-off call to build rapport and teach the logging; daily nudges; a mid-point check; a closing interview built around their own entries, which is where the insight surfaces.
- Pitfall: entries decay into box-ticking after day five. Vary prompts, pay part of the incentive per completed week, and read entries daily so you can probe while it is fresh.

### 3.4 Mystery shopping and service audits

Mystery shopping is covert evaluation of a service by a trained assessor posing as a customer, against defined, observable standards. Luxury hotels are inspected against Forbes Travel Guide standards (the guide says its inspectors apply "up to 900 objective criteria", read October 2026) and audited by LQA (Leading Quality Assurance); jewellery and fashion maisons mystery-shop their clienteling (relationship selling by named associates).

- Protocol: a scenario script with a persona and a test (an unusual request, a complaint, a price objection); 2 to 3 shops per site per scenario across days and shifts, because one visit measures one person on one day; a scoring sheet of observable behaviours (greeted within a set time, name used, follow-up within 24 hours); notes written immediately after leaving.
- Recording: none in the UAE, where recording a person without consent is a criminal offence (section 10.3); in India, only where the venue and the law permit it and the brief records why.
- Ethics: follow the ESOMAR and MRS mystery-shopping guidelines. Staff are told that mystery shopping may occur, and results fix the system; individuals are disciplined on them only where that was agreed with staff in advance.
- Use on pre-arrival enquiry response, phone handling, the showroom and the site visit. Run the same script on competitors for the teardown (section 9.2).

### 3.5 Participatory and co-design methods

Generative making methods let participants express needs they cannot put into words. Elizabeth Sanders and Pieter Jan Stappers's "Convivial Toolkit" (2012) sets out make-tools (collage kits, mapping sheets, modelling kits) used in a sequence of priming (a short homework that sensitises people to the topic), making, and telling (each person explains what they made). Example: a bride and her mother build a collage of the wedding look before the store visit, and the telling shows which choices are hers and which are the family's. Use on bridal, villa and wellness briefs where the need is latent or aspirational; house practice is 6 to 12 participants over 2 to 3 sessions. Co-design with disabled participants follows 11-accessibility-and-inclusive-design.md, section 15.2.

## 4. Surveys

### 4.1 When a survey is the right tool

A survey measures the distribution of known attitudes or self-reported facts across a population. It is the wrong tool for discovering what matters (you can only ask about what you already thought of) and for measuring behaviour (people misreport frequency and spend). Run interviews first and survey second, so the answer options come from real language. Don Dillman, Jolene Smyth and Leah Christian ("Internet, Phone, Mail, and Mixed-Mode Surveys", fourth edition, 2014) build cognitive interviews and pretesting into every survey design for the same reason.

### 4.2 Question design

- One idea per question. "How satisfied are you with the speed and courtesy of check-in?" is double-barrelled; split it.
- Item-specific wording over agree and disagree. Agree and disagree formats invite acquiescence bias (the tendency to agree regardless of content); Willem Saris and colleagues (Survey Research Methods, 2010) found item-specific questions ("How clean was the room?" with a cleanliness scale) more reliable.
- Label every point on 5 and 7 point scales; numbers without labels are read differently by different people. A Likert scale (Rensis Likert, 1932) is strictly a summed set of agreement items; a single rating item is a rating scale.
- Balance: as many negative points as positive, with a true midpoint. Offer "not applicable" where it can apply, or the midpoint fills with people who have no opinion.
- Order: general before specific, so specific items do not prime the general one; randomise option order in lists to cancel primacy effects (the pull of options listed first).
- Length: under 10 minutes on mobile. Jon Krosnick's satisficing theory (1991) explains the decay: as effort rises, respondents choose the first acceptable answer, then straight-line (give the same answer down a grid).
- Avoid sensitive questions early (income, age) and ask income in bands. In India, ask household income in rupee bands and in the Gulf ask nationality and residency status separately, because both drive behaviour.
- Bilingual surveys: translate, then back-translate by a second translator, then reconcile. Hindi and Arabic versions need native review for register; formal Modern Standard Arabic reads stiff to Gulf respondents in casual contexts, and Gulf dialect reads wrong in a formal one.
- Pilot with 5 people, watching them answer (cognitive pretesting: they think aloud while answering). Every pilot finds at least one misread question.

### 4.3 Bias catalogue

| Bias | Mechanism | Control |
|---|---|---|
| Sampling bias | The people reached differ from the population | Define the population first; weight or quota by known proportions |
| Non-response bias | The people who answer differ from those who do not | Keep it short; send reminders; compare early and late responders |
| Social desirability | Respondents give the admirable answer | Indirect questions; anonymity; avoid moral framing |
| Acquiescence | Tendency to agree | Item-specific scales |
| Order and priming | Earlier items change later answers | General before specific; randomise |
| Recall bias | Memory distorts frequency and timing | Short recall windows ("in the last 7 days") |
| Survivorship | Only current customers answer | Include lapsed and lost customers |

### 4.4 Sampling and minimum n

- A probability sample (everyone in the population has a known chance of selection) supports generalisation; a convenience sample (whoever answers the Instagram link) supports only description of those who answered. Most agency surveys are convenience samples and must be reported as such.
- Margin of error (the range around a sample estimate within which the population value probably lies) at 95 percent confidence for a proportion near 50 percent: n 100 gives plus or minus 9.8 points; n 200 gives 6.9; n 384 gives 5.0; n 600 gives 4.0; n 1,067 gives 3.0. Each subgroup you intend to compare needs its own n; a 400-person survey split into four cities is four surveys of 100.
- House floor: 100 per subgroup for directional reads, 384 overall when a single headline proportion must hold to plus or minus 5 points.
- UAE samples: quota by nationality group (Emirati, other Arab, Western expatriate, South Asian, other Asian), residency and visa status, and income band, because nationality drives behaviour and Emiratis are a small minority of residents; a convenience sample over-represents expatriate English speakers. Recruit Emirati participants through Emirati or Arabic-speaking recruiters and moderate in Gulf Arabic. Take any population share quoted in a proposal from the latest UAE Federal Competitiveness and Statistics Centre (FCSC) release, with its date.
- Fraud: count n after removing fraudulent and bot responses (section 10.9).
- Tools: Typeform for brand-quality front ends, Google Forms for internal speed, Qualtrics for logic, quotas and panels. Distribute in India and the Gulf by WhatsApp and SMS as well as email; email-only distribution skews older and more corporate.

### 4.5 Pricing and trade-off methods

Unit mix and payment plans in real estate, hotel packages, menus and jewellery price ladders all need evidence of what people will pay and what they will trade.

| Method | Key reference | Mechanics | Use and limits |
|---|---|---|---|
| Van Westendorp Price Sensitivity Meter | Peter van Westendorp, ESOMAR Congress, 1976 | Four questions: so cheap you would doubt the quality; a bargain; getting expensive; too expensive to consider. Cumulative curves cross to give a range of acceptable prices | Fast and needs no price list. In luxury, read the "too cheap" curve first, because a low price destroys the quality signal |
| Gabor-Granger | André Gabor and Clive Granger, 1960s | Stated purchase likelihood at successive prices gives a demand curve and a revenue-maximising price | One product at a time; ignores competitors |
| Choice-based conjoint analysis | Paul Green and V. Srinivasan, Journal of Consumer Research, 1978; run in Sawtooth Software or Conjointly | Respondents choose between bundles of attribute levels; the model estimates each level's worth (a part-worth utility) | Values view, floor, payment plan, developer brand and possession date against each other. Sample: Rich Johnson's rule of thumb, quoted in Bryan Orme's "Getting Started with Conjoint Analysis", is n times tasks times alternatives divided by the largest number of levels of any attribute, at least 500; Orme advises at least 300 respondents, and about 200 per subgroup to be compared |
| MaxDiff (best-worst scaling) | Jordan Louviere, with Adam Finn, 1992 | Respondents pick the best and the worst from sets of 4 to 5 items, ranking 10 to 30 amenities, claims or messages | Avoids the "everything is important" ceiling of rating scales; says nothing about price |

Pitfalls: stated willingness to pay overstates real spend, so read results as relative and validate against sales data. HNW samples are too small for conjoint; run it on the aspirational affluent segment and triangulate HNW with CRM and sales records (section 10.6).

## 5. Information architecture methods

The IA (information architecture) principles and patterns live in 09-interaction-design-and-ux-patterns.md, section 2. This section is the study design.

### 5.1 Card sorting

Card sorting asks participants to group content items (cards) into categories, revealing their mental model of the content.

- Open sort: participants create and name their own groups. Use for discovery, before the navigation exists.
- Closed sort: participants place cards into categories you supply. Use for validation of an existing scheme.
- Hybrid sort: supplied categories plus permission to create new ones. Use when the scheme is half-built.
- Cards: 30 to 60 items; above about 60, fatigue degrades the later sorts. Write card labels in plain language, without category words in them, because a card called "Bridal necklaces" sorts itself into "Bridal" (label craft: 10-ux-writing-and-content-design.md, sections 4.2 and 4.16).
- Number: Thomas Tullis and Larry Wood (UPA, 2004) compared subsamples with a 168-person sort: 15 participants correlated at about 0.90 and 30 at about 0.95; Nielsen interpolates about 0.93 at 20. House: 15 minimum for remote unmoderated sorts, 20 to 30 for decisions that will be expensive to reverse.
- Tool: Optimal Workshop's card sorting tool (sold for years as OptimalSort; the company now presents itself as Optimal); Lyssna also runs card sorts. Moderated in-person sorts with paper cards and think-aloud give the reasons behind the groups, which remote sorts do not.
- Analysis: the similarity matrix shows, for each pair of cards, the percentage of participants who grouped them together. The dendrogram is the tree produced by hierarchical cluster analysis of that matrix; cut it at a level that yields the number of groups the navigation can carry, and read the joins near the root as weak. House reading: treat clusters above about 60 to 70 percent pairwise agreement as stable; cards that float between clusters need cross-links or relabelling.
- Pitfall: a card sort shows how people group content. Labels and findability need their own evidence, so validate both with a tree test (section 5.2).

### 5.2 Tree testing

Tree testing (reverse card sorting) gives participants a text-only version of the navigation hierarchy and a task ("Where would you find the spa's cancellation policy?"), measuring whether they find the right place without visual design helping or hurting.

- Tasks: 8 to 10 per participant; more causes learning effects as participants memorise the tree.
- Number: about 50 participants, Optimal Workshop's guidance, because success rates per task need a usable confidence interval.
- Metrics: success rate (direct success reached the answer without backtracking; indirect success reached it after backtracking), directness (the share of participants who went down the tree without backtracking, whatever their final answer), time, and first click. The first click matters because a correct first click predicts success (section 5.3).
- Run it twice: once on the current tree as a baseline, once on the proposed tree. A redesign that cannot beat the baseline tree has not earned a build.

### 5.3 First-click testing

First-click testing shows a screen and a task and records where participants click first. Bob Bailey and Cari Wolfson's study (2009) found that participants whose first click was correct completed the task about 87 percent of the time, against about 46 percent when the first click was wrong. Use it on navigation, home screens and campaign landing pages; 20 to 50 participants per screen; tools include Optimal's first-click test (long sold as Chalkmark), Lyssna and Maze. Pair the heatmap with the time-to-first-click: a correct but slow click signals a label that works only on reflection.

## 6. Usability testing

A usability test watches representative people attempt realistic tasks with a design, to find where it fails and why. Steve Krug's "Rocket Surgery Made Easy" (2010) is the do-it-yourself manual; its rhythm of three users on one morning a month, with the team watching, is the cheapest discipline a studio can adopt.

### 6.1 Formats

| Format | Strength | Weakness | Use for |
|---|---|---|---|
| Moderated in person | Body language, physical prototypes, packaging, devices in hand, rapport with senior participants | Cost, travel, smaller n | Luxury clients, kiosks, print and packaging, older participants |
| Moderated remote (Zoom, Google Meet, Lookback) | Geography (a Mumbai designer can test with Dubai residents), recording is simple | Connection quality, less context | Most evaluative work |
| Unmoderated remote (Maze, Lyssna, UserTesting) | Speed, scale, low cost per session | No follow-up questions, professional testers, shallow tasks | Validating fixes, benchmarking, simple flows |
| Guerrilla (intercepts in a café, a mall, a hotel lobby) | Hours instead of weeks | Unscreened participants | Early concepts with general audiences; HNW audiences need recruited sessions (10.6) |

### 6.2 Think-aloud

Think-aloud asks participants to verbalise their thoughts while working. K. Anders Ericsson and Herbert Simon's protocol analysis ("Verbal Reports as Data", Psychological Review, 1980; "Protocol Analysis", 1984, revised edition 1993) distinguishes concurrent think-aloud (speaking during the task) from retrospective think-aloud (narrating while watching a recording afterwards). Concurrent is the default; it slows people slightly, so do not take time-on-task from think-aloud sessions. Retrospective suits fast tasks and eye-tracking studies, where talking would move the eyes. Prompt with "What are you thinking now?" and never "Why did you click that?", which makes people defend the click.

### 6.3 Task design

- Write scenarios with a goal and a reason: "Your sister's engagement is in March in Jaipur. Find a necklace under ₹3 lakh you could give her and reserve it to view in the store." Tasks without a reason produce mechanical clicking.
- Never use the interface's words in the task. If the button says "Reserve to view", the task says "arrange to see it in person".
- Define success before the session: the end state, the acceptable paths, and the time limit after which you call it a failure.
- Five to eight tasks in a 60-minute session; start with an easy task to build confidence; put the critical task second or third, before fatigue.
- Mix closed tasks (one right answer) with one open task ("Explore as you would at home and tell me what you would do next").
- Pilot the script with a colleague. Every pilot finds an ambiguous task.

### 6.4 Metrics

| Metric | Definition | Reading |
|---|---|---|
| Task success (completion) rate | Share of participants who reach the defined end state | Jeff Sauro's analysis of 1,189 tasks from 115 tests (MeasuringU) gives an average of 78 percent; above 92 percent is the top quartile, below 49 percent the bottom quartile |
| Time on task | Seconds from task start to success | Report the geometric mean for small samples, because time data is skewed (Sauro and Lewis) |
| Error rate | Slips and mistakes per task, with severity | Count only errors defined before the session |
| Single Ease Question (SEQ) | One 7-point item after each task: "Overall, how difficult or easy was the task to complete?" | Average about 5.5 across more than 400 tasks (MeasuringU, 2019 update); below 5 flags a problem task |
| SUS at the end | Ten-item post-test questionnaire (section 9.1) | Average 68 |
| Severity rating | Nielsen's 0 to 4 scale: 0 not a problem, 1 cosmetic, 2 minor, 3 major, 4 catastrophe | Combine frequency, impact and persistence |

With small n, report confidence intervals (the range likely to contain the population value at a stated confidence) and say whether each is one- or two-sided. With 10 of 10 successes the two-sided 95 percent interval is about 68 to 100 percent by the adjusted Wald method (Alan Agresti and Brent Coull, The American Statistician, 1998), which Sauro and Lewis recommend for small samples; the exact (Clopper-Pearson) lower bound is about 69 and the Wilson about 72. One-sided, you can be 95 percent confident the rate is at least about 75 percent. Never print "100 percent success" from 8 people without the interval.

### 6.5 The five-user rule and its limits

Jakob Nielsen and Thomas Landauer (INTERCHI 1993) modelled problem discovery as 1 minus (1 minus L) to the power n, where L is the probability that one user meets a given problem. With their average L of 0.31, five users find about 84 to 85 percent of problems; hence "test with five users" (Nielsen, 2000).

The limits, with their proponents:

- Jared Spool and Will Schroeder (CHI 2001) found five users revealed about 35 percent of problems on large e-commerce sites, because L was far below 0.31.
- Laura Faulkner (Behavior Research Methods, Instruments and Computers, 2003) ran 60 participants and showed that random sets of five found between 55 and 99 percent of problems; sets of 20 found at least 95 percent.
- The arithmetic: a problem affecting 10 percent of users (L 0.10) has a 41 percent chance of appearing with five users, 65 percent with ten and 79 percent with fifteen.
- Five users per distinct user group: a site serving Indian residents and Gulf NRIs is two groups and needs ten.
- The rule applies to formative problem-finding only. Any number (success rate, SUS, time) needs the sample sizes in section 19.2.

House position: five to eight users per segment per round, then fix and test again. Three rounds of five beat one round of fifteen because each round tests the fixes and finds the problems the first round's problems were hiding.

### 6.6 RITE

Rapid iterative testing and evaluation (RITE) changes the design between sessions as soon as a problem is clear, often after one or two participants. Michael Medlock, Dennis Wixon and colleagues described it at Microsoft Game Studios in 2002 for "Age of Empires II". It needs the designer in the observation room and authority to change the prototype on the spot; the report records each change and whether later participants still met the problem. Use it on onboarding, booking and checkout prototypes in Figma, where a change takes minutes.

### 6.7 Observers and debriefs

Invite the client and the creative team to watch at least two sessions live. Watching one participant fail at a task the client signed off moves a decision more than any report. Debrief for 15 minutes after each session: each observer writes their top three observations on separate notes, which feed synthesis (section 11) and prevent the loudest observer rewriting the record.

### 6.8 Testing on mobile

Most traffic to Mask360 client sites is mobile, and some problems appear only on real devices: one-time password (OTP) autofill, handoffs to UPI (Unified Payments Interface) apps and WhatsApp, system font scaling, Arabic right-to-left rendering.

- Test on participants' own phones wherever possible, so their settings, fonts, language, saved payments and WhatsApp are present.
- Capture: in person, a document camera or a mobile sled (a rig that holds a camera over the phone), or screen mirroring; remotely, Zoom or Lookback mobile screen share.
- Devices: always include a mid-range Android on a throttled connection (Chrome DevTools network presets), because Android held 93.9 percent of India's mobile operating system share in September 2026 (Statcounter). In the UAE, iOS held 26.7 percent against Android's 73.3 percent in the same month, more than four times India's iOS share of 6.1 percent, so test both.
- Script tasks across handoffs: OTP autofill, UPI intent (the switch to a payment app), WhatsApp deep links, Apple Pay and Google Pay, the maps handoff for a site visit.
- Test the Arabic build on a real device set to an Arabic system locale; desktop emulation misses mirrored icons and mixed-direction numbers.
- Patterns: 09-interaction-design-and-ux-patterns.md, sections 11 (mobile conventions) and 16 (India and the Gulf); performance on a mid-range Android: 21-web-design-and-digital-craft.md, section 5.1.

### 6.9 Testing with disabled participants

Every major release includes sessions with disabled participants: five per profile (screen reader, magnification, voice or switch, cognitive) on the main task, as set in 11-accessibility-and-inclusive-design.md, section 16.8. Recruit through Enable India, Saksham, BarrierBreak or the Zayed Higher Organisation for People of Determination (section 15.2 of that file), pay at professional rates, and let participants use their own devices and settings, because assistive technology configured by someone else behaves as a different product.

## 7. Inspection methods

Inspection methods use experts instead of users. They are cheap and fast and find a different set of problems: experts catch violations of convention; users catch mismatches with their world. Use both.

### 7.1 Heuristic evaluation

Heuristic evaluation has evaluators inspect an interface independently against a set of principles, then merge findings. Jakob Nielsen and Rolf Molich introduced it in 1990; Nielsen refined the ten heuristics in 1994 from a factor analysis of 249 usability problems (NN/g page reviewed January 2024). A single evaluator finds about 35 percent of the problems and five find about 75 percent; Nielsen recommends five evaluators, and at least three ("How to Conduct a Heuristic Evaluation").

| Heuristic (Nielsen's wording) | Current example of a violation, 2026 |
|---|---|
| 1. Visibility of system status | A villa booking engine that takes eight seconds to confirm with no progress indicator; guests press "Pay" twice |
| 2. Match between the system and the real world | A jewellery site listing gold as "22K" only, when Indian buyers also look for the BIS (Bureau of Indian Standards) hallmark and the HUID (hallmark unique identification) code, and Gulf buyers expect "21K" options |
| 3. User control and freedom | A spa booking that cannot be changed online, only cancelled and rebooked, losing the slot |
| 4. Consistency and standards | An Arabic version where the back arrow still points left in a right-to-left layout (see 09-interaction-design-and-ux-patterns.md, section 16) |
| 5. Error prevention | A dining reservation form that accepts a date in the past, or a party of 20 at a 12-seat restaurant |
| 6. Recognition rather than recall | A loyalty app that asks for the membership number instead of showing it on the profile |
| 7. Flexibility and efficiency of use | No saved guest preferences, so a returning suite guest re-enters pillow and dietary choices every stay |
| 8. Aesthetic and minimalist design | A product page where the price and "book a viewing" sit below six paragraphs of brand story |
| 9. Help users recognise, diagnose, and recover from errors | "Something went wrong" on a failed card payment with no reason and no route to a person |
| 10. Help and documentation | A real estate payment plan with no explanation of the RERA-registered schedule or what each milestone means |

Protocol: two passes per evaluator (one to learn the flow, one to inspect); each problem recorded with heuristic, location, screenshot and severity (0 to 4); merge in a session where evaluators rate severity independently before discussing. Deliverable: a ranked list with fixes. Pitfall: findings become opinions dressed as heuristics; every finding must name the heuristic and the evidence on screen.

### 7.2 Cognitive walkthrough

A cognitive walkthrough steps through a task as a first-time user, asking at each action whether the user will succeed. Cathleen Wharton, John Rieman, Clayton Lewis and Peter Polson set the four questions (1994):

1. Will the user try to achieve the right effect?
2. Will the user notice that the correct action is available?
3. Will the user associate the correct action with the effect they want?
4. If the correct action is performed, will the user see that progress is being made?

Rick Spencer's streamlined version (CHI 2000) reduces these to two questions for teams under time pressure: will the user know what to do at this step, and if they do the right thing, will they know they did and are making progress. Use it for learnability of first-use flows: onboarding, first booking, account creation. It misses problems of efficiency for expert users.

### 7.3 Expert review

An expert review is a less formal inspection by an experienced practitioner, drawing on heuristics, platform guidelines (Apple Human Interface Guidelines, Material Design 3), accessibility criteria (WCAG 2.2; see 11-accessibility-and-inclusive-design.md) and domain research such as the Baymard Institute's e-commerce benchmarks. It is the right first step on any inherited site because it costs a day. Its weakness is that it reflects one person's judgement; label it "expert review" in the deliverable and report it in a section separate from user evidence.

## 8. Behavioural and quantitative methods

### 8.1 A/B and multivariate testing

An A/B test (online controlled experiment) randomly splits live traffic between a control and one or more variants and compares a pre-declared metric. A multivariate test (MVT) varies several elements at once and estimates each element's effect and their interactions; it needs a multiple of the traffic, one full A/B sample per combination cell. Ron Kohavi, Diane Tang and Ya Xu's "Trustworthy Online Controlled Experiments" (2020) is the reference.

The four numbers set before launch:

| Term | Definition | House default |
|---|---|---|
| Significance level (alpha) | The false-positive rate you accept: the chance of declaring a difference when none exists | 0.05, two-sided |
| Statistical power | The chance of detecting a real effect of the chosen size | 0.80 |
| Minimum detectable effect (MDE) | The smallest true change worth detecting, relative or absolute | The smallest lift that would change the business decision |
| Baseline rate | The current conversion of the metric | From 4 weeks of analytics |

Sample size per variant, by Lehr's approximation for 80 percent power and alpha 0.05: n is about 16 times p(1 minus p) divided by the square of the absolute difference.

| Baseline | Relative MDE | Absolute difference | n per variant |
|---|---|---|---|
| 3 percent | 10 percent | 0.3 points | about 51,700 |
| 3 percent | 20 percent | 0.6 points | about 12,900 |
| 2 percent | 10 percent | 0.2 points | about 78,400 |
| 1 percent | 20 percent | 0.2 points | about 39,600 |

The consequence for luxury: a villa microsite with 20,000 monthly sessions and a 1 percent enquiry rate cannot detect a 20 percent lift in under four months. Most Mask360 clients cannot A/B test small changes; they should test big swings (a different offer, a concierge entry point against a booking engine), test upstream metrics with higher baselines (click-through to the enquiry form), or use qualitative methods.

Rules with reasons:

- Do not peek. Checking a fixed-horizon test daily and stopping at the first p below 0.05 inflates the false-positive rate far above 5 percent; Evan Miller's "How Not To Run an A/B Test" (2010) shows the effect, and Ramesh Johari, Pete Koomen, Leonid Pekelis and David Walsh ("Peeking at A/B Tests", KDD 2017) built the always-valid sequential method that Optimizely's Stats Engine uses. Either fix the sample in advance or use a sequential method built for continuous monitoring.
- Run whole weeks, at least two, to cover weekday and weekend behaviour; in the UAE the weekend has been Saturday and Sunday since January 2022, with a Friday half-day for federal government, while Saudi Arabia keeps Friday and Saturday; in India festival weeks (Diwali, Akshaya Tritiya, Dhanteras) distort jewellery and real estate traffic.
- Check sample ratio mismatch (SRM): if a 50/50 split arrives as 52/48 at scale, the randomisation or tracking is broken and the result is void.
- One primary metric, declared in advance, plus guardrail metrics (revenue per visitor, page speed, unsubscribes) that must not degrade.
- Twyman's law, as Kohavi quotes it: any figure that looks interesting or different is usually wrong. Re-check surprising wins before announcing them.
- CUPED (Alex Deng and colleagues at Microsoft, WSDM 2013) uses pre-experiment data to cut variance and so the sample needed; ask whether the platform supports it before concluding that traffic is too thin.
- Google Optimize was shut down on 30 September 2023; current tools include Optimizely, VWO, AB Tasty, Statsig, GrowthBook and PostHog's experiments. Check the platform's statistics method (fixed horizon, sequential or Bayesian) before reading its dashboard.
- Novelty effect and change aversion: returning users click a new element because it is new, or resist it because it changed. Segment new against returning users and run at least two full weeks so either effect can fade.
- Multiple comparisons: with four variants against a control at alpha 0.05, the chance of at least one false winner is about 19 percent (1 minus 0.95 to the power 4). Apply a Holm or Bonferroni correction (Bonferroni divides alpha by the number of comparisons), or test fewer variants.
- Bayesian dashboards: "probability to beat control" is a posterior probability and answers a different question from a p-value. Set the decision threshold (for example 95 percent) and the minimum run before launch, or the dashboard invites peeking by another name.
- Long-term holdout: keep 5 to 10 percent of users on the old experience for a quarter to measure the cumulative effect of a series of wins, which Kohavi, Tang and Xu warn is usually smaller than the sum of the individual lifts.

### 8.2 Analytics and funnel analysis

- Google Analytics 4 (GA4) is the default; Universal Analytics stopped processing standard properties on 1 July 2023. GA4 is event-based: every interaction is an event with parameters, so the measurement plan (which events, named how, with which parameters) must be written before build. Product analytics tools (Mixpanel, Amplitude, PostHog) are better at user-level funnels, cohorts and retention.
- A funnel is the ordered sequence of steps to a goal with the share surviving each step: landing, villa page, dates selected, enquiry started, enquiry sent. Read the biggest absolute drop first, then segment it by device, source, country and new against returning. A drop that appears only on Android in the UAE is a bug, and a drop everywhere is a design or offer problem.
- Analytics shows what happened and where; the reason comes from session replays or a usability test of the failing step, so pair every funnel finding with one of them.
- Closing the offline loop: hospitality, real estate and jewellery clients convert offline. The enquiry ends on WhatsApp or the phone and the sale happens at a site visit or in the showroom, so a GA4 funnel stops at the click. Instrument click-to-WhatsApp, click-to-call and form submits as GA4 events; use call tracking with dynamic numbers (a different number per source, so each call is credited); pass a lead ID into the CRM; and import the downstream stages (qualified lead, site visit, booking, purchase) back into Google Ads through offline conversion import and into Meta through the Conversions API. The funnel then ends at revenue, and creative is judged on qualified leads. Category business metrics are in section 14.5.
- GA4 caveats that hit small luxury audiences: Google Consent Mode v2 has been required for EEA (European Economic Area) and UK traffic since March 2024 for ads measurement and personalisation, and it fills consent gaps with modelled data, so label modelled numbers in reports; GA4 applies data thresholds that withhold small segments, which hides the low-volume villa or suite segment you care about; the free BigQuery export gives raw event-level data; UTM rules (the naming of campaign tags on links) are written into the measurement plan before launch.
- Pitfalls: bot traffic; consent banners that suppress tracking for a share of users (and under DPDP and GDPR, tracking without valid consent is unlawful, section 10.5); untagged campaign links that pile traffic into "direct"; vanity metrics such as page views without a decision attached.

### 8.3 Session replay

Session replay reconstructs individual visits from recorded page events: cursor, scroll, taps, errors and rage clicks (rapid repeated clicks on one spot, a sign of frustration). Tools: Microsoft Clarity (free), Hotjar (part of Contentsquare since 2021), Contentsquare, FullStory and PostHog. Use it to explain a funnel drop: filter to sessions that abandoned at the step and watch 20 to 30. Configure masking of all form fields and personal data before going live, because replays capture what users type; disclose replay in the privacy notice and gate it behind consent where the law requires.

### 8.4 Eye tracking

Eye tracking records where people look (fixations), how their eyes jump between points (saccades), and in what order (gaze plots). Heatmaps aggregate fixations across participants.

- Sample: Kara Pernice and Jakob Nielsen ("How to Conduct Eyetracking Studies", NN/g, 2009) recommend about 30 usable participants for stable heatmaps, recruiting about 39 to allow for calibration failures. Gaze plots for qualitative insight need 6 to 8.
- Hardware: screen-based and wearable trackers (Tobii is the best-known vendor). Webcam eye tracking, sold by several unmoderated-testing platforms, has far lower spatial accuracy; treat it as a rough attention map.
- Known patterns: the F-shaped scanning pattern on text-heavy pages (Nielsen, 2006, revisited by Pernice in 2017) appears when content gives no visual cues; strong hierarchy breaks it (see 02-perception-and-psychology.md, section 5).
- Use for: packaging and shelf tests, print advertisements, hero imagery and product pages where the question is whether the price, the product or the brand is seen first. Skip it for most interface work; a usability test answers the same questions more cheaply.
- Pitfall: a fixation shows attention and says nothing about comprehension. A fixation on the price can mean interest or confusion; pair with retrospective think-aloud.

## 9. Attitudinal instruments, concept and first-impression tests

### 9.1 Standardised questionnaires and benchmarking

Benchmarking measures a product's usability or experience with a standard instrument at a point in time, so it can be compared with itself later, with competitors, or with published norms. Use a standardised instrument because its reliability and norms are known; a home-made "rate us 1 to 10" has neither.

| Instrument | Author, year | Items and scale | Output | Benchmark |
|---|---|---|---|---|
| System Usability Scale (SUS) | John Brooke, Digital Equipment Corporation, 1986, published 1996 | 10 items, alternating positive and negative, 5-point agreement | 0 to 100 | Average 68 across about 500 studies (MeasuringU), the 50th percentile; grades on the curved scale below |
| SUPR-Q | Jeff Sauro, Journal of Usability Studies, 2015 | 8 items, mostly 5-point, plus likelihood to recommend (0 to 10, halved) | Overall score and four sub-scales: usability, credibility and trust, loyalty, appearance | Percentile rank against MeasuringU's database of about 200 websites |
| UMUX | Kraig Finstad, Interacting with Computers, 2010 | 4 items, 7-point | 0 to 100, designed to track SUS | Correlates closely with SUS |
| UMUX-Lite | James Lewis, Brian Utesch and Deborah Maher, CHI 2013 | 2 items (capabilities meet requirements; easy to use), 7-point | 0 to 100 after regression adjustment to the SUS scale | Use where survey space is tight |
| SEQ | Sauro | 1 item per task, 7-point | Task-level ease | About 5.5 average |
| UEQ | Bettina Laugwitz, Theo Held and Martin Schrepp, 2008 | 26 semantic-differential pairs, 7-point | Six scales: attractiveness, perspicuity, efficiency, dependability, stimulation, novelty | Published benchmark data set by its authors |
| AttrakDiff | Marc Hassenzahl and colleagues, 2003 | Word pairs | Pragmatic and hedonic quality | Useful when beauty and stimulation matter as much as usability |
| NASA-TLX | Sandra Hart and Lowell Staveland, 1988 | 6 sub-scales of workload | Weighted workload | For operational tools: hotel PMS (property management system) screens, sales-team dashboards |

SUS scoring: for odd items subtract 1 from the response; for even items subtract the response from 5; sum and multiply by 2.5. The result is a 0 to 100 score that becomes a percentile only through the published norms: a SUS of 68 sits at the 50th percentile. Use 12 or more respondents for a usable SUS estimate in formative work (Thomas Tullis and Jacqueline Stetson, UPA 2004, found SUS reached reliable conclusions from about 12 participants, sooner than the other questionnaires they compared), and 40 or more for a benchmark you will compare across time (section 19.2).

SUS grades on the Sauro and Lewis curved grading scale ("Quantifying the User Experience", 2016; MeasuringU's table, read October 2026), which supersedes the older cut-offs of 80.3 for an A and 51 for an F still quoted in decks:

| Grade | A+ | A | A- | B+ | B | B- | C+ | C | C- | D | F |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SUS score | 84.1 to 100 | 80.8 to 84.0 | 78.9 to 80.7 | 77.2 to 78.8 | 74.1 to 77.1 | 72.6 to 74.0 | 71.1 to 72.5 | 65.0 to 71.0 | 62.7 to 64.9 | 51.7 to 62.6 | 0 to 51.6 |
| Percentile | 96 to 100 | 90 to 95 | 85 to 89 | 80 to 84 | 70 to 79 | 65 to 69 | 60 to 64 | 41 to 59 | 35 to 40 | 15 to 34 | 0 to 14 |

Aaron Bangor, Philip Kortum and James Miller's adjective ratings ("Determining What Individual SUS Scores Mean", Journal of Usability Studies, 2009) translate scores for clients: a mean SUS of about 51 for "OK", about 71 for "good" and about 85 for "excellent".

House instrument choice: SUS for applications and booking engines; SUPR-Q for websites, because its appearance and trust sub-scales speak to luxury clients; UEQ or AttrakDiff when the brief is about desirability. Run the same instrument, with the same tasks, at the same point in the session, every time, or the comparison is void.

When a hospitality or retail client asks whether the experience reads as luxury, add two instruments beside SUPR-Q's appearance sub-scale: the Brand Experience Scale (J. Josko Brakus, Bernd Schmitt and Lia Zarantonello, Journal of Marketing, 2009), 12 items in four dimensions (sensory, affective, intellectual, behavioural); and the luxury value model of Klaus-Peter Wiedmann, Nadine Hennigs and Astrid Siebels (Psychology and Marketing, 2009), which separates financial, functional, individual and social value, so the team sees whether the property sells price, quality, self-reward or status.

### 9.2 Competitive teardown

A competitive teardown documents competitors' experiences step by step to find conventions, gaps and the bar to beat.

- Set: 4 to 6 direct competitors plus 2 to 3 out-of-category references with the experience quality the client aspires to (see design-taste, references/worlds.md for the reference worlds by category).
- Walk each flow on mobile and desktop: screenshot every step; count steps, form fields, taps to price, taps to a human; record claims, prices, payment options, policies, languages, response time to an enquiry (send a real enquiry and time the reply; for luxury, time to a human reply is the experience).
- Score on a fixed rubric (the heuristics in section 7.1 work) so the comparison is like for like.
- Deliverable: a matrix (competitors against criteria), a convention list (what every competitor does, which users will expect), a gap list (what nobody does well), and the five steps where the client can lead.
- Pitfall: copying conventions that are bad. A teardown shows what is normal; research shows whether normal works.

### 9.3 Desk research

Desk research (secondary research) assembles what is already known before collecting new data. Sources in order of value: the client's own data (CRM, sales by product and season, reservations, support tickets, guest comment cards, lost-deal notes); public reviews (Google, TripAdvisor, Booking.com, Zomato, app stores), mined for the verbatim language of praise and complaint (section 9.8); social listening; category reports (the Bain and Altagamma luxury market study, the Knight Frank Wealth Report, Euromonitor, McKinsey's State of Fashion with the Business of Fashion); government data (Census of India, Reserve Bank of India, Dubai Statistics Center, Dubai Land Department transaction data); academic papers. Record every source with date and URL in the research log, because a number without a source cannot go into a deck.

### 9.4 Five-second tests

A five-second test shows a design for five seconds, hides it, and asks what participants remember and understood. Christine Perfetti described it at User Interface Engineering in 2005. It measures first impression and message clarity: what is this, who is it for, what can I do here, what do you remember. Use it for hero screens, key visuals, outdoor posters and packaging fronts, where the real exposure is that short. 20 to 50 participants per design; Lyssna offers it natively. Pitfall: a five-second test rewards the obvious; a brand idea that rewards the second look will score worse and may still be right (see design-taste, section 1, on tension).

### 9.5 Preference and desirability tests

- A preference test shows two or more options and asks which participants prefer and why. The "why" carries the value; the count is weak evidence. With 30 participants, a split of 21 to 9 or wider is significant at 95 percent (two-sided binomial test); with 50, 33 to 17; with 20, 15 to 5. Anything closer is a tie.
- The desirability test uses the Microsoft product reaction cards, 118 words (about 60 percent positive and 40 percent negative) created by Joey Benedek and Trish Miner (UPA, 2002). Participants choose the five words that best describe the design, then explain each choice. Compare the chosen words against the brand's intended attributes from the brand platform (18-brand-strategy-and-identity-design.md, section 1.2). If the target is "calm, exclusive, personal" and participants pick "busy, impersonal", the design is off-brief whatever the client feels.
- House position on preference testing for brand work: use it to detect misreadings (a crest that reads as a bank, a colour that reads as a discount retailer). The identity decision stays with the creative director and the brand strategy, because preference tests reward familiarity and distinctive work starts unfamiliar.

### 9.6 Concept testing

Concept testing shows early ideas (a written proposition, a board, a rough film, a mock product page) to target users to judge appeal, comprehension, credibility and fit before production money is spent.

- Monadic design: each participant sees one concept, giving uncontaminated reactions; needs more participants. Sequential monadic: each sees several in rotated order; cheaper, with order effects that rotation only partly cancels.
- Present concepts at equal fidelity. A finished film against a scamp loses the scamp its fair hearing.
- Qualitative concept tests (6 to 12 interviews) find why a concept fails; quantitative tests (100 or more per concept, monadic) size appeal. Purchase-intent scores overstate actual buying; read them as relative ranks between concepts.
- In luxury, test with past buyers of the category, recruited through the client (section 10.6), and test credibility harder than appeal: the luxury buyer forgives a quiet idea and punishes one that feels unearned.

### 9.7 Advertising pre-testing, brand lift and incrementality

The campaign view, with the house position on testing luxury films, is in 19-campaigns-and-creative-direction.md, section 10.8; this section is the method.

- Pre-test systems: System1's Test Your Ad gives a Star rating (1 to 5.9, from viewers' emotional response, predicting long-term brand growth) and a Spike rating (short-term sales potential), on the evidence Orlando Wood set out in "Lemon" (19, section 6.1). Kantar LINK (with an AI-predicted variant) and Ipsos's Creative|Spark measure branding (correct brand attribution), attention, emotion, message take-out and persuasion.
- In-market measures: Meta Brand Lift and Google and YouTube Brand Lift hold out a randomised control group and survey both groups on ad recall, awareness and consideration. Incrementality (the actions that would not have happened without the ads) is measured with Meta Conversion Lift and with geo experiments such as GeoLift, Meta's open-source library comparing matched regions with and without spend. Marketing mix models (MMM: regression of sales on media spend and other drivers over two to three years of weekly data) suit low-traffic luxury clients that cannot A/B test (section 8.1); Google's open-source Meridian became generally available in January 2025, and Meta's Robyn is the other open-source option.
- House method: pre-test animatics (filmed storyboards with a temporary soundtrack) to find misreadings and branding failures, such as the brand unseen by second 5 or a claim read backwards. Ideas are chosen by the creative director and the brief, because scores reward the familiar (19, sections 4.5 and 15.4). Test at equal fidelity (section 9.6).
- Facial coding and emotion AI (Realeyes, Affectiva) process face video, which is personal data in every regime and special category (GDPR Article 9) or sensitive data (UAE PDPL) where biometric processing is involved; the EU AI Act, Article 50(3), requires deployers to inform people exposed to an emotion recognition system. Use it only with explicit consent logged in the consent register (section 16).

### 9.8 Review mining and social listening

Review mining is the systematic coding of public reviews for themes and vocabulary.

- Protocol (house practice): pull 300 to 1,000 recent reviews per property or brand and the same for two competitors; split by rating band (1 to 3 against 5, because 4-star reviews mix both); code with the study codebook (section 11.3); report theme share by band; harvest verbatim vocabulary for copy (10-ux-writing-and-content-design.md).
- Sources: hotels, Google, TripAdvisor and Booking.com, or ReviewPro, TrustYou and Revinate exports; F&B, Google, Zomato and EazyDiner; beauty, Nykaa, Sephora and Amazon; Indian property, 99acres, MagicBricks and Housing.com; Gulf property, Bayut and Property Finder. Respect each platform's terms on scraping; use exports, APIs or manual samples where scraping is barred.
- Social listening (Brandwatch, Talkwalker, Sprinklr, Meltwater) tracks mentions and sentiment across social platforms. Hinglish and Arabizi (Arabic written in Latin script, with numerals for missing letters, such as 3 for ain) need human coding, because sentiment models misread both.
- Pitfalls: reviews skew to extremes and recent visits, and paid and fake reviews exist. India's BIS standard IS 19000:2022 sets principles for collecting, moderating and publishing online consumer reviews; weight a platform's reviews by whether it follows them.

## 10. Recruiting, ethics and the law

### 10.1 Screeners

A screener is the questionnaire that admits or excludes candidate participants.

- Screen on behaviour with a time window and a threshold: "How many nights did you spend in hotels priced above ₹40,000 a night in the last 12 months?" Self-labels such as "Do you consider yourself a luxury traveller?" admit aspirants.
- Hide the target. Ask several category questions so the candidate cannot guess the right answer; professional testers learn to say yes.
- Exclusions: people working in marketing, research, design, or the client's industry; anyone who took part in a study in the last six months; employees and relatives of the client.
- Articulation check: one open question ("Describe the last gift you bought for someone and why you chose it"). One-word answers predict a silent interview.
- Socio-economic class in India: NCCS (New Consumer Classification System), launched in 2011 by MRUC (Media Research Users Council) and MRSI (Market Research Society of India) to replace the older urban and rural SEC (socio-economic classification) grids, sorts households into 12 grades, A1 to E3, from two questions: the education of the chief earner, and how many of 11 listed durables the household owns (electricity connection, ceiling fan, LPG stove, two-wheeler, colour TV, refrigerator, washing machine, personal computer or laptop, car, jeep or van, air conditioner, agricultural land). Recruiters quote "NCCS A1" by default. A1 is too broad for luxury because it includes the upper middle class, so always add behavioural spend screens (nights above a rate, jewellery spend in the last 12 months, property owned).
- Access needs: ask every participant whether they use assistive technology or need an adjustment, so sessions can be adapted.
- Quotas: write the mix (city, age band, new against returning customer, resident against NRI, NCCS band, nationality group in the UAE, section 4.4) before recruiting, so the easy-to-reach group does not fill the study; include disabled participants for any public-facing product (11-accessibility-and-inclusive-design.md, section 16.8).
- Over-recruit by 20 percent for no-shows; for unmoderated tests, add attention checks (items with one correct answer that catch inattentive respondents) and discard speeders (anyone finishing in under a third of the median time). Neither stops an AI agent (section 10.9).

### 10.2 Incentives

An incentive compensates participants for time and expertise; it is paid in full whatever the participant says, so answers carry no financial pressure.

Verified reference points, October 2026: Prolific sets a minimum of £6.00 or US$8.00 an hour and recommends at least £9.00 or US$12.00, with a platform fee usually of 42.8 percent for corporate customers (33.3 percent for academic and non-profit); Respondent's product pages illustrate US$100 for a 60-minute professional video call, paid through Tremendous. No published India or UAE incentive benchmark could be verified, so the house builds its own dated rate card:

- Each year, get written quotes from at least two recruiters in Mumbai or Delhi and two in Dubai; record every incentive actually paid in the participant database (section 16); publish the card in rupees and dirhams with its date and review it every six months. Axes: participant tier (consumer NCCS A, affluent, professional, senior professional or CXO, medical professional, HNW gesture) by format (15-minute unmoderated task, 60-minute interview, 90-minute in-home visit, 2-hour group) by market.
- Incidence rate: the share of screened people who qualify. Recruiters price each recruit by incidence, so a 5 percent incidence costs several times a 40 percent one; tighten a screener only where the criterion changes the finding.
- Budget the recruiting fee separately from the incentive, and add tax on recruiter and research fees: GST (goods and services tax) at 18 percent in India, VAT (value added tax) at 5 percent in the UAE.
- Price by the participant's hourly value: consumer, professional, senior professional, HNW. Pay professionals and executives a multiple of the consumer rate; a ₹2,000 voucher for an hour of a Mumbai managing director's time reads as an insult and reduces show rates.
- Form: in India, UPI transfer or Amazon Pay voucher for consumers, a premium voucher (Taj, Tata CLiQ Luxury) for affluent participants; in the UAE, bank transfer or vouchers redeemable at Dubai Mall or Mall of the Emirates retailers. Include in-home and travel time in the hours.
- HNW participants: cash or vouchers can offend. Offer a gesture tied to the brand: a private preview, a meal at the property, a donation in their name to a cause they choose, early access. Confirm the gesture with the client's relationship manager.
- Pay within 48 hours. Late payment poisons the panel for the next study.
- Record every incentive against the participant ID for tax and audit; a client-funded incentive to an existing customer can look like an inducement to buy, so the consent form states that participation has no effect on their relationship with the brand.

### 10.3 Consent and recording

- Informed consent: the participant knows who is running the study and for whom (or that the client is confidential until the end), the purpose, what is recorded, who will see it, how long it is kept, that they can stop at any time without losing the incentive, and how to withdraw data afterwards. Give it in writing before the session and confirm it on the recording.
- Separate consents for separate uses: taking part; audio and video recording; sharing clips with the client; using clips in internal training; using quotes in published work. A participant who agrees to recording has not agreed to appear in a client's town-hall highlight reel.
- Language: offer consent in the participant's language (English, Hindi or the relevant regional language in India; Arabic and English in the UAE). India's DPDP Act requires notices to be available in English or any language in the Eighth Schedule of the Constitution (22 languages) on request.
- Minors: under India's DPDP Act a child is anyone under 18, and processing needs verifiable consent of a parent or guardian; in the EU the GDPR age for information society services is 16 by default, which member states may lower to 13. House rule: no research with under-18s without written parental consent and a parent present.
- Recording: video only where it adds value; HNW participants frequently decline video, so offer audio only or a note-taker only.
- Field photography and recording in the UAE: Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes, Article 44, makes capturing, recording or publishing images, video or audio of a person without consent an offence, in public places as well as private ones; penalties include imprisonment and fines reported at AED 150,000 to 500,000. House rules for contextual inquiry, intercepts, event observation and mystery shops in the UAE: no photograph or recording of an identifiable person without a signed release; photograph spaces, artefacts and hands only, and blur bystanders; get written permission from mall or venue management (Emaar Malls, Majid Al Futtaim) before intercepts; record nothing covertly (section 3.4). In India, DPDP consent covers any recording that identifies a person, and hotel or venue permission is still needed. Release forms: 24-business-of-creative-and-agency-operations.md, section 14.2; likeness rights: 22-ai-era-craft-and-generative-tools.md, section 7.4.

### 10.4 Personal data handling

Personally identifiable information (PII), called personal data in the statutes, is any information that identifies a person directly or in combination: name, phone, email, face on video, voice, address, employer, and combinations such as "the only Emirati woman on the board of X".

- Data minimisation: collect only what the study needs. The screener asks for the age band, which is all the analysis uses.
- Pseudonymise at source: participants are P01, P02 in every artefact; the key linking IDs to names lives in one access-controlled file held by the research lead.
- Storage: recordings in an access-controlled store (Dovetail, a restricted Google Drive or SharePoint folder) with named access; personal laptops and WhatsApp hold no recordings after the session.
- Retention: delete raw recordings at the end of the stated retention period (house default 12 months after the study ends) and log the deletion.
- Redact before sharing: clips shared beyond the core team have faces blurred and names bleeped unless the participant consented otherwise.
- AI tools: never upload transcripts or recordings to a tool whose terms allow training on customer inputs; see section 18 and 22-ai-era-craft-and-generative-tools.md, sections 7.3 and 9.2.
- AI note-takers (Otter, Fireflies, Read.ai, Zoom AI Companion, Copilot in Teams, Gemini in Meet) are barred from sessions unless the consent form names them, because they send participants' voices and transcripts to vendors the participant never agreed to. Sessions run on the house's account with AI companions switched off; client observers join through a separate observer link or backroom (Lookback's observer room, or a webinar-style viewer) where their assistants cannot join. The consent version names the transcription vendor and the data location, for DPDP, PDPL and GDPR transfer rules.
- Session replay and analytics are research data too (section 8.3).

### 10.5 The law: GDPR, India's DPDP Act, UAE and Saudi PDPL

| Regime | Instrument and status as of October 2026 | What it means for research |
|---|---|---|
| EU and UK | GDPR, Regulation (EU) 2016/679, applying since 25 May 2018; UK GDPR alongside the Data Protection Act 2018 | Applies when researching people in the EU or UK (European guests of a Goa resort, for instance). Lawful basis needed (consent or legitimate interests); special category data (health, religion, ethnicity) needs explicit consent; Article 89 sets safeguards (minimisation, pseudonymisation) for research and statistical processing; fines up to €20 million or 4 percent of global annual turnover |
| India | Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023, assent 11 August 2023); DPDP Rules, 2025, with commencement in three phases: Data Protection Board and definitions from 13 November 2025; registration of consent managers (registered intermediaries through which a person gives, manages and withdraws consent) from 13 November 2026; all remaining obligations from 13 May 2027 | Consent must be free, specific, informed, unconditional and unambiguous with a clear affirmative action; notice itemises the data and purpose; data principals (the individuals whose data is processed) can access, correct, erase and withdraw consent; children's data needs verifiable parental consent and bans tracking and targeted advertising at children. Penalties under the Schedule run up to ₹250 crore for failure to take reasonable security safeguards. Treat May 2027 obligations as live now for new studies, because a study's data outlives the study |
| UAE (federal) | Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL), in force from 2 January 2022; the UAE Data Office established by Federal Decree-Law No. 44 of 2021. DLA Piper's summary dated January 2025 recorded that the Executive Regulations had not been published, and the government portal u.ae (page updated 4 December 2025) does not mention them; their status in October 2026 was not verified, so check with the UAE Data Office before relying on deadlines | Consent is the default legal basis with listed exceptions; rights of access, correction, erasure, restriction, portability and objection to direct marketing; cross-border transfers restricted to adequate jurisdictions or listed exceptions, which matters when a Dubai study's recordings sit on servers in the US or India |
| UAE free zones | DIFC (Dubai International Financial Centre) Data Protection Law, DIFC Law No. 5 of 2020; ADGM (Abu Dhabi Global Market) Data Protection Regulations 2021 | Apply to entities in those free zones (many private banks and family offices whose clients are research targets); GDPR-style regimes with their own commissioners |
| Saudi Arabia | Personal Data Protection Law (Royal Decree M/19 of 2021, amended 2023), in force from 14 September 2023 with enforcement from 14 September 2024; regulator SDAIA (Saudi Data and Artificial Intelligence Authority) | Applies to research with Riyadh participants; consent, purpose limitation, and transfer restrictions |

The DPDP research exemption: section 17(2)(b) of the Act exempts processing "necessary for research, archiving or statistical purposes" where the personal data is not used to take any decision specific to the data principal and the processing follows the standards the Rules prescribe; the DPDP Rules 2025 set those standards in their Second Schedule (lawful, purpose-limited, minimised, accurate, storage-limited, secured, accountable). Client legal teams cite it. House position: do not rely on it for client research. Participants come from the client's CRM, incentives require identity, and clips go to the client, so any one of these can turn into a decision about the person; take full consent anyway, and keep the exemption for aggregated or anonymised analysis.

Industry codes add a layer the law does not: the ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics (2016) requires that research is distinguished from selling, participants are not harmed or misled, and participants' identities are protected. Following it keeps research data out of the marketing CRM, which is the line clients most often try to cross: a study participant who did not consent to marketing must not appear in the next mailing list.

### 10.6 Researching luxury customers

- Access through the brand: the client's CRM, relationship managers, private bankers, concierges, store directors and sales associates. An introduction from a person the client trusts is the only door that opens; cold panels do not reach this population.
- The first contact comes from the brand, in the brand's voice, framed as an invitation to shape something ("We are designing the next version of our residences and would value an hour of your view"). Research agencies' generic recruitment emails are deleted.
- Gatekeepers: personal assistants, family office staff. Brief them; they schedule.
- Sessions at the participant's place and time: their office, their home, the brand's private salon, the hotel's suite. 30 to 45 minutes is the realistic length; plan the guide for 30 and treat the rest as gift.
- Moderator seniority: a senior researcher or the strategy lead moderates. HNW participants test the moderator in the first two minutes; a junior moderator gets polite generalities.
- Observation by proxy: the people who serve HNW customers (butlers, concierges, private bankers, personal shoppers, villa managers) see patterns across hundreds of clients. Interview 6 to 10 of them as expert informants; treat their accounts as second-hand evidence and triangulate (section 11.6).
- Confidentiality runs both ways: participants may ask for an NDA or for their name to be withheld from the client. Agree before the session.
- Small n: 6 to 10 interviews is often the realistic ceiling; compensate by triangulating with CRM data, staff interviews and review mining.

### 10.7 B2B recruiting and panels

- B2B participants (hotel general managers, procurement heads, developers' sales directors, wedding planners) are recruited through the client's accounts, LinkedIn outreach, industry associations, and professional panels. Price them as senior professionals (section 10.2) and offer the findings summary as part of the incentive; professionals value the benchmark.
- Panels and their biases:

| Panel | Claimed reach, October 2026 | Strength | Bias to correct |
|---|---|---|---|
| UserTesting | "7M+ authenticated participants across 34 countries" | Fast unmoderated video with think-aloud | Heavy users of testing become fluent testers who narrate for the camera; skewed to the US, UK and English speakers |
| Respondent | "4.3M+" participants in 150+ countries including "3.1M verified professionals", verified by work email, phone and government ID | B2B and professional roles for moderated interviews | Professionals who join panels are more digitally engaged than their peers |
| Prolific | "300,000+ active participants" in 40+ countries, strongest in the US, UK and Europe | Clean academic-grade samples for surveys and unmoderated tasks; fair-pay floors | Thin in India and the Gulf; younger, more educated, more online than the general population |
| Lyssna | "690,000+ verified participants" | Five-second, preference, first-click, card sort, tree tests | Quick-test participants answer quickly; screen hard |

- No global panel reaches luxury buyers in India or the Gulf in usable numbers. Use panels for general-audience comprehension and usability, and the client's own customers for anything about value, desire or price.

### 10.8 Safety and wellbeing

- In-home and site visits go in pairs. Log each visit's address and times with the studio, with check-in calls at the start and the end.
- No lone visits where gender norms or personal safety make them unwise; match the researcher's gender to the household where custom requires (section 3.2).
- Distress protocol for sensitive subjects (inheritance jewellery after a death, a property sale forced by divorce, fertility or skin conditions in beauty): pause; offer to stop or skip; do not probe tears for insight; pay the full incentive; point to support.
- Debrief the researcher after emotionally heavy sessions; the ICC/ESOMAR Code's duty of care (section 10.5) runs to participants, and the house extends it to its own staff.
- Promise nothing the client has not agreed: a participant told "this will fix it" becomes a complaint.

### 10.9 Respondent fraud and AI-generated responses

Sean Westwood of Dartmouth built an autonomous synthetic respondent that passed 99.8 percent of 6,000 trials of standard attention checks, evaded logic puzzles and "reverse shibboleth" questions designed to catch non-humans, wrote open-ends calibrated to its persona's education, and could be instructed to shift results or to confirm a researcher's inferred hypothesis ("The potential existential threat of large language models to online survey research", PNAS, 20 November 2025). Attention checks and CAPTCHA (challenge tests meant to tell people from machines) no longer do that job, and the house treats every remote B2B participant as unverified until checked. Controls, strongest first:

1. Recruit from client lists and identity-verified panels (Respondent verifies by work email, phone and government ID; section 10.7).
2. Hold a short camera-on screener call before every moderated session.
3. Detect pasted open-ends (paste events, typing speed) and compare open-end similarity across respondents.
4. Flag duplicate devices and IP addresses and impossible timings.
5. Ask questions that need lived local knowledge, or a photograph of a real artefact (the receipt, the shelf, the view from the balcony).
6. For B2B, check the LinkedIn profile against the work email.
7. Report the share of responses removed and the reasons.

## 11. Synthesis

### 11.1 Observation, interpretation, insight

| Level | Definition | Example from a jewellery study |
|---|---|---|
| Observation | What was seen or said, verbatim, with source and timestamp | P04 (12:40): "I sent the photo to my mother and my sister before I even asked the price." |
| Interpretation (finding) | A pattern across observations, stated with its evidence count | 7 of 10 bridal buyers sought family approval by photograph before asking the price |
| Insight | The underlying tension or motive that explains the pattern and suggests action | The bridal piece is chosen by the family through the phone screen, so the product photograph is the first showroom and it must survive WhatsApp compression and a mother's scrutiny |

Keep the levels in separate columns in every synthesis artefact. A report that mixes them lets an interpretation pass as an observation and an opinion pass as an insight. The creative director's definition of insight (19-campaigns-and-creative-direction.md, section 3) adds the creative test: a research insight becomes a campaign insight only when it also opens a door for the work.

### 11.2 Affinity mapping

Affinity mapping groups individual observations, one per note, into clusters by similarity, bottom up. It descends from Jiro Kawakita's KJ method (1960s).

1. Write one observation per note, with participant ID, taken straight from the notes grid; one idea per note, so notes can move independently.
2. Sort silently first, as a team, so the most senior voice does not set the clusters.
3. Name clusters only after they form, with a sentence in the participant's voice ("I need my family to see it first") instead of a topic label ("Family").
4. Group clusters into higher themes; the hierarchy is the beginning of the report structure.
5. Count participants per cluster: one talkative participant can produce twenty notes on a single point, so a note count overstates the pattern.

Tools: a wall and paper notes for in-person teams; FigJam or Miro for remote; Dovetail's canvas for teams that tag in the repository. For usability rounds, Tomer Sharon's rainbow spreadsheet ("It's Our Research", 2012) is faster: observations as rows, participants as colour-coded columns, so frequency shows as a band of colour and the team synthesises during the testing day.

### 11.3 Thematic analysis and coding

Thematic analysis is the systematic identification of patterns of meaning (themes) across qualitative data. Virginia Braun and Victoria Clarke's six phases (Qualitative Research in Psychology, 2006) are the standard: familiarisation with the data; generating initial codes; generating initial themes; reviewing themes; defining and naming themes; writing up.

- A code is a short label attached to a segment of data that captures one idea. Deductive coding applies a codebook written in advance from the research questions; inductive coding builds codes from the data. Most studies combine them: a starter codebook from the questions, extended as the data surprises you.
- A codebook lists each code with definition, inclusion and exclusion rules and an example. Without the rules, two coders apply "trust" to different things.
- Contested point: inter-rater reliability. One position (common in applied research) has two coders code the same 10 to 20 percent of transcripts and compute Cohen's kappa, with 0.61 to 0.80 read as substantial agreement (Landis and Koch, 1977). Braun and Clarke's later reflexive thematic analysis (2019 onwards: analysis in which the researcher's interpretation is the instrument, made explicit) rejects reliability scores as incoherent for interpretive work and asks instead for a reflexive account of the researcher's position. House position: double-code a sample when findings will drive spend above about ₹50 lakh or will be challenged by a client team; otherwise one coder with a documented codebook and a second researcher reviewing themes against the raw data.

### 11.4 Saturation

Saturation is the point at which new data stops producing new codes or themes. Greg Guest, Arwen Bunce and Laura Johnson (Field Methods, 2006) found 92 percent of codes emerged within the first 12 of 60 interviews in a fairly homogeneous group, with the basic themes present after 6. Monique Hennink and Bonnie Kaiser's systematic review (Social Science and Medicine, 2022) found saturation at 9 to 17 interviews and 4 to 8 focus groups in empirical studies. Saturation depends on homogeneity: four distinct segments need four sets of interviews. Track it with a running tally of new codes per interview; when two consecutive interviews add nothing material, stop or change the sample.

### 11.5 Insight statements

Write each insight as a structured sentence the team can act on: "[Who] [needs or does] [what], because [motive or tension], but [obstacle], which means [implication for design or communication]." Attach the evidence: number of participants, two or three verbatim quotes with IDs, and a clip if available. An insight with no quotes is a hypothesis; mark it as one.

### 11.6 Guarding against confirmation, and triangulation

Confirmation bias is the tendency to notice and weight evidence that supports what you already believe; the wider catalogue of decision biases is in 02-perception-and-psychology.md, section 12.2. Controls:

- Write the hypotheses and thresholds before fieldwork (section 1.2) and report the ones that failed.
- Assign a devil's advocate in synthesis whose job is to find the counter-evidence for each theme.
- Count disconfirming cases and report them: "7 of 10, and the 3 who did not were all buying for themselves."
- Separate the researcher who designed the concept from the one who synthesises the reactions to it where team size allows.
- Use the participants' words in theme names, which resists the drift towards the team's vocabulary.

Triangulation is the use of several sources to check a finding. Norman Denzin (1978) named four types: data triangulation (different people, times, places), investigator triangulation (several researchers), theory triangulation (several explanatory frames), and methodological triangulation (interviews plus analytics plus observation). A finding that appears in interviews, in the CRM data and in the concierge's account is strong; one that appears only in interviews is a lead.

## 12. Models and artefacts

Each model compresses research into a shape a team can use. Each also misleads in a known way; the misreading is listed with the method.

### 12.1 Personas, archetypes and jobs

| Model | What it is | Built from | When it misleads |
|---|---|---|---|
| Persona | A fictional individual with name, photograph, demographics, goals and behaviours, representing a segment; introduced by Alan Cooper in "The Inmates Are Running the Asylum" (1999) | Interviews and observation clustered by behaviour and goal | When invented without research (a proto-persona, drafted from team assumptions before research, left unvalidated); when demographic detail (age 34, two children, drives an Audi) is mistaken for the cause of behaviour; when the photograph and name trigger stereotypes |
| Archetype | A behavioural pattern without demographic detail or a face: "the delegator who buys through the family office", "the researcher who reads every review" | The same clustering, stopped before decoration | When the patterns are too abstract to design for |
| Thinking style | Indi Young's term for a person's reasoning and guiding principles in a context, independent of demographics ("Describing Personas", 2016, and "Time to Listen", 2022) | Listening sessions coded for reasoning and emotion | Rarely; it demands more research skill |
| Job (JTBD) | The progress a person seeks in a circumstance (section 2.4) | Switch interviews | When stretched to cover identity and taste, which a job statement flattens |

The critique of personas, with its proponents: Indi Young argues demographics cause stereotyping and that one person moves between thinking styles by context; JTBD writers (Klement, Moesta) argue that circumstance predicts behaviour better than attributes; Jared Spool argues that a persona's value lies in the research and the shared understanding behind it, and that the document alone changes little. Cooper's defence: a well-researched primary persona forces trade-offs by giving the team one person to satisfy first.

House position: build archetypes or thinking styles from behaviour, add jobs for the decision moments, and use a named persona only when a client team needs a person to rally around, with every attribute traced to research. Never put a stock photograph on a persona; use an illustration or no image, because a face invites assumptions the data did not support.

### 12.2 Empathy maps

An empathy map is a one-page canvas of what a user says, thinks, does and feels, created by Dave Gray at XPLANE; his 2017 revision added a goal section at the top (who we are empathising with and what they need to do) and split the quadrants into see, hear, say and do, with think and feel at the centre. Use it as a 30-minute alignment exercise at the start of synthesis. It misleads when filled from the team's imagination instead of data, which is how most are made; insist on a participant ID beside every note.

### 12.3 Customer stage maps

A customer stage map, which the industry calls a customer journey map (the term of art, kept here so it can be recognised), visualises one archetype's experience of achieving a goal over time, across channels, as a sequence of stages.

Rows, top to bottom: the archetype and goal; stages (for a resort: inspire, plan, book, pre-arrival, arrive, stay, depart, remember); actions in each stage; touchpoints and channels; thoughts (verbatim quotes); the emotional line (plotted high to low from coded evidence); pain points; opportunities. Build it from research, one map per archetype and scenario; a map for "all guests" averages away the differences that matter. Jim Kalbach's "Mapping Experiences" (2016, second edition 2020) covers the family of maps. It misleads when the emotional curve is drawn by the team (the curve is a claim and needs evidence), and when it describes the ideal path the business designed, which is a different artefact (a future-state map) and must be labelled as one.

Mark the moments that decide the relationship. Jan Carlzon, chief executive of SAS, called every contact between a customer and staff a moment of truth that made or lost the customer ("Moments of Truth", 1987; Swedish original 1985). A. G. Lafley's first moment of truth at Procter and Gamble (2005) is the shelf and the second is use; Jim Lecinski's "Winning the Zero Moment of Truth" (Google, 2011) adds the search before purchase. The peak-end rule (Daniel Kahneman and colleagues, Psychological Science, 1993; see 02-perception-and-psychology.md, section 6.7) says remembered experience is weighted to the most intense moment and to the end, so every map marks the peak and the end with evidence, and the departure (the bill, the car, the goodbye) gets design attention; in house experience it is often the weakest stage at resorts. Method: a week after the stay, ask "What do you remember most?" and code the answers by intensity.

### 12.4 Service blueprints

A service blueprint maps how a service is delivered, extending the customer map downwards into the organisation. G. Lynn Shostack introduced it ("Designing Services That Deliver", Harvard Business Review, 1984); Mary Jo Bitner, Amy Ostrom and Felicia Morgan formalised the current form ("Service Blueprinting: A Practical Technique for Service Innovation", California Management Review, 2008).

| Lane | Content | Example: villa arrival in Goa |
|---|---|---|
| Physical evidence | What the customer sees and touches | The WhatsApp arrival message, the gate, the welcome drink, the villa folder |
| Customer actions | What the guest does | Lands, is met, drives, arrives, settles |
| Line of interaction | The boundary where customer and organisation meet | |
| Frontstage actions | What staff do in the customer's view | Driver greets by name; villa manager walks the guest through the house |
| Line of visibility | The boundary below which the customer cannot see | |
| Backstage actions | What staff do out of view | Reservations confirms flight; housekeeping final check; chef receives dietary notes |
| Line of internal interaction | The boundary between front-line teams and support functions | |
| Support processes | Systems and teams that enable the rest | PMS, flight-tracking, procurement, the WhatsApp Business account |

Add time per step and the fail points (where a step breaks most often) and the wait points. Build it in a workshop with the people who do the work, because managers describe the procedure and staff describe the workaround. The brand and identity layer of the blueprint (the artefacts, the staff vocabulary, the moments that matter) is in 18-brand-strategy-and-identity-design.md, section 10.3. It misleads when drawn from the standard operating procedure without observation (section 3.1).

### 12.5 Experience maps

An experience map shows a human activity independent of any one product or company: "planning a destination wedding" across every vendor, family member and platform. Adaptive Path's "Guide to Experience Mapping" (Chris Risdon and colleagues) set the form. Use it for strategy and new-business work, when the question is where the client could play. It misleads when a client reads it as their own customer map and assumes they own every stage.

### 12.6 Mental model diagrams

Indi Young's mental model diagram ("Mental Models: Aligning Design Strategy with Human Behavior", Rosenfeld Media, 2008) arranges people's tasks, feelings and guiding principles above a horizontal line, grouped into "towers" by mental space, and the organisation's existing features and services below the line, aligned to the towers they support. Gaps (towers with nothing beneath) are opportunities; crowded areas with no tower above are waste. It is built from many non-directed listening sessions and takes weeks; reserve it for long-term product strategy. It misleads when the towers are built from the team's assumptions, and its size intimidates stakeholders, so present a single slice first.

### 12.7 User story maps

A user story map, Jeff Patton's method ("User Story Mapping", 2014), lays user activities left to right as a backbone, with the tasks and stories under each activity ordered top to bottom by priority. Horizontal lines cut release slices; the thinnest slice that lets a user complete the whole activity end to end is the walking skeleton. It translates research into a build plan that keeps the whole experience in view. It misleads when the team maps the system's features instead of the user's activities.

### 12.8 Opportunity solution trees

Teresa Torres's opportunity solution tree ("Continuous Discovery Habits", 2021) has four levels: the desired outcome at the root ("the business need that reflects how your team can create business value"); the opportunity space below it (customer needs, pain points and desires, discovered in interviews); solutions under each opportunity; assumption tests under each solution. Torres distinguishes business outcomes (revenue, share, churn), product outcomes (customer behaviour or sentiment in the product, the right scope for discovery) and traction metrics (adoption of a single feature, too narrow). She advises revisiting the opportunity space every three to four interviews. It misleads when opportunities are written as solutions in disguise ("guests need a chatbot"); an opportunity is a need stated in the customer's terms.

### 12.9 Value proposition canvas

The value proposition canvas (Alexander Osterwalder, Yves Pigneur, Greg Bernarda and Alan Smith, "Value Proposition Design", 2014) sets a customer profile (jobs, pains, gains) beside a value map (products and services, pain relievers, gain creators) and checks fit. Use it to test a new offer, such as a branded-residence concierge membership, against research. It misleads when the customer side is filled by the team in the same meeting as the value map, because the two then fit by construction.

### 12.10 Kano

Noriaki Kano's model (1984) classifies features by how their presence and absence affect satisfaction:

| Category | Absent | Present | Luxury hotel example |
|---|---|---|---|
| Must-be (basic) | Strong dissatisfaction | No extra satisfaction | Spotless room, working Wi-Fi |
| One-dimensional (performance) | Dissatisfaction | Satisfaction in proportion | Speed of check-in, quality of breakfast |
| Attractive (delighter) | No dissatisfaction | Disproportionate delight | The butler who remembered the child's name from three years ago |
| Indifferent | Neither | Neither | A tablet controlling the curtains, for many guests |
| Reverse | Satisfaction | Dissatisfaction | Over-attentive staff for guests who want privacy |

Method: for each feature ask a functional question ("How would you feel if the villa had a private chef?") and a dysfunctional one ("...if it did not?"), each with five answers (I like it; I expect it; I am neutral; I can tolerate it; I dislike it), and classify each response pair on Kano's evaluation table; 20 to 30 respondents per segment for a qualitative read, more for quantified category shares. Delighters decay into must-bes over time, which is why the luxury bar keeps rising: free Wi-Fi was once a delighter and is a must-be now.

### 12.11 Problem statements and how-might-we questions

A problem statement frames the need without a solution: "Bridal buyers in Jaipur need a way to show a shortlist to family who are not in the store, because the decision is collective, but the store's photographs flatten the stones." A how-might-we (HMW) question turns it into an invitation: "How might we let a family decide together on a piece none of them can touch?" HMW was popularised at Procter and Gamble in the 1970s by Min Basadur and later by IDEO. Write five to ten per problem at varying breadth; too broad ("HMW improve weddings?") gives nothing to grip, too narrow ("HMW add a share button?") contains the answer.

## 13. Strategy frameworks

### 13.1 Continuous discovery

Teresa Torres defines continuous discovery as weekly touchpoints with customers, by the team building the product, in pursuit of a desired outcome. The team is the product trio: a product manager, a designer and a software engineer. Her habits: interview at least one customer every week with automated recruiting; synthesise each interview into an interview snapshot (a one-page summary with a memorable quote, quick facts, the story, opportunities and insights); maintain the opportunity solution tree (section 12.8); compare several solutions per opportunity; and test assumptions in five categories (desirability, viability, feasibility, usability, ethical) with small fast tests before building.

Agency adaptation: Mask360 sells projects, while continuous discovery needs a standing product team. Offer it as a retained research cadence for clients with live products (a hotel group's app, a developer's sales portal): two interviews a fortnight, a monthly opportunity review with the client team, a quarterly read-out.

### 13.2 Lean UX hypotheses

Jeff Gothelf and Josh Seiden's "Lean UX" (2013, third edition 2021) replaces requirements with testable hypotheses. Format: "We believe [business outcome] will be achieved if [user] attains [benefit] with [feature]." Each hypothesis carries the smallest experiment that could disprove it (the minimum viable product, in Eric Ries's sense from "The Lean Startup", 2011: the smallest thing that tests the riskiest assumption).

Assumption mapping, from David Bland and Alexander Osterwalder's "Testing Business Ideas" (2019), plots each assumption on two axes, importance against strength of existing evidence; the important, unevidenced quadrant is tested first. Marty Cagan's "Inspired" (second edition 2017) names the four product risks to test: value (will they buy or use it), usability (can they), feasibility (can we build it), business viability (does it work for the business).

### 13.3 The design sprint

Jake Knapp created the design sprint at Google in 2010 and ran it at GV (Google Ventures); "Sprint" (Knapp, John Zeratsky and Braden Kowitz, 2016) is the manual.

| Day | Name | Work |
|---|---|---|
| Monday | Map | Long-term goal, sprint questions, a map of the customer's path, expert interviews, choose a target on the map |
| Tuesday | Sketch | Lightning demos (three-minute tours of existing solutions); individual four-step sketches (notes, ideas, Crazy 8s: eight sketches in eight minutes, solution sketch) |
| Wednesday | Decide | Art-museum display, heat-map voting (silent dot stickers on the parts of sketches people like), speed critique, straw poll, the supervote of the Decider (the person with final say); storyboard of the prototype |
| Thursday | Prototype | A realistic facade built in one day ("Goldilocks quality": real enough to get honest reactions) |
| Friday | Test | Five one-to-one interviews with target customers, the team watching; patterns recorded on a grid |

The four-day variant (Sprint 2.0, developed by AJ&Smart with Knapp around 2018) compresses Monday and Tuesday into one day of mapping and individual sketching, decides and storyboards on day two, prototypes on day three and tests on day four; the full team is needed only for the first two days. Knapp and Zeratsky's later "Click" (2025) adds the Foundation Sprint, a short sprint run before design sprints to set the customer, problem, differentiation and approach as a testable founding hypothesis.

When it works: a single high-stakes question, a decision-maker in the room, and five recruitable users by Friday. When it fails: the Decider leaves after Monday; the question is strategic and cannot be answered by a prototype; HNW customers cannot be booked for a fixed Friday (move testing to the following week and say so).

### 13.4 The double diamond and its critique

The UK Design Council published the double diamond in 2005: discover (diverge on the problem), define (converge on a problem definition), develop (diverge on solutions), deliver (converge on a solution). The 2019 "Framework for Innovation" added design principles, methods and engagement around the diamonds; the 2021 "Systemic Design Framework" extended it for systemic and climate challenges.

Critique: it is drawn linear while real projects loop; teams treat discover as a phase to finish instead of a habit; and it is silent on craft quality. House use: a communication device for clients, showing why the first weeks produce no design, and a reminder that the problem definition is a deliverable. Plans are written as loops (section 13.1), whatever the diagram.

### 13.5 Design thinking and its critics

Design thinking, popularised by IDEO (Tim Brown, "Design Thinking", Harvard Business Review, 2008; "Change by Design", 2009) and by the Stanford d.school's five modes (empathise, define, ideate, prototype, test), packages designers' methods for non-designers.

The critics:

- Natasha Jen, partner at Pentagram, "Design Thinking Is Bullshit" (99U Conference, 2017): the process has replaced the crit; its signature artefact is a wall of sticky notes; it skips the evaluation of the work's quality and the evidence that it worked.
- Lee Vinsel, historian of technology (Medium, 2017), argued it repackages commonplace ideas as a universal method and overstates its record.
- Don Norman, "Design Thinking: A Useful Myth" (Core77, 2010): designers have no monopoly on creative problem solving; the label is useful as a way to win resources.

House position: use the methods (research, framing, prototyping, testing), drop the theatre (stickies without evidence, workshops as deliverables), and keep the crit (see 23-critique-taste-and-craft-judgement.md, section 4). A workshop is valuable when it produces a decision; a wall of notes is an input.

### 13.6 Outcome over output

Josh Seiden's "Outcomes Over Output" (2019) separates three levels. An output is what the team ships (a new booking flow); an outcome is the change in behaviour it causes (more guests completing a booking without a phone call); an impact is the business result (direct revenue share up, commission to online travel agencies down). Brief, contract and report on outcomes wherever the client can measure them, because output-based scopes reward shipping and leave the agency exposed when the shipped thing does not move the business (see 24-business-of-creative-and-agency-operations.md, section 3.1, value-based pricing).

### 13.7 North Star metric and input metrics

A North Star metric is the single measure that best captures the value customers get from the product and predicts long-term business results; Sean Ellis is credited with the term and Amplitude's "North Star Playbook" (John Cutler and colleagues, 2019) is the working guide. Input metrics are the three to five levers the team can move that drive the North Star. Examples: a hotel group's direct channel might choose "nights booked direct by returning guests", with inputs such as share of returning guests logged in, enquiry-to-booking conversion, and time to first human reply. A North Star must be a behaviour that reflects customer value; revenue is a lagging consequence and a poor North Star because it can be raised by extracting value.

### 13.8 Prioritisation

| Method | Mechanics | Strength | Weakness |
|---|---|---|---|
| RICE (Sean McBride, Intercom) | Reach (people per period) times Impact (3 massive, 2 high, 1 medium, 0.5 low, 0.25 minimal) times Confidence (100, 80 or 50 percent) divided by Effort (person-months) | Forces reach and confidence into the conversation | Impact scores are guesses; precision is false |
| ICE (Sean Ellis) | Impact, Confidence and Ease, each 1 to 10, multiplied or averaged | Fast, for growth experiments | Highly subjective; scores drift between scorers |
| MoSCoW (Dai Clegg, Oracle, 1994; adopted by DSDM, the Dynamic Systems Development Method) | Must have, Should have, Could have, Won't have this time | Clear for fixed-deadline scope | Everything becomes a must; set a cap (DSDM guidance keeps musts to about 60 percent of effort) |
| Impact against effort | Two-by-two: quick wins, big bets, fill-ins, money pits | Workshop-friendly | Estimates are made in the room without evidence |
| Kano (section 12.10) | Classify by satisfaction effect | Uses customer data | Says nothing about cost |

House position: score with RICE when evidence exists, and write the evidence beside each confidence score; use impact against effort in client workshops for speed; use Kano to argue for a delighter that scores low on reach.

### 13.9 Roadmaps and OKRs

- Roadmap literacy: a roadmap communicates strategy and sequence; a delivery plan commits to dates. The now, next, later format (Janna Bastow, ProdPad) commits to near-term work and keeps later items as problems to solve. A roadmap of features with dates a year out is a list of promises research has not yet tested. When a client presents one, ask what outcome each item serves and what evidence put it there.
- OKRs (objectives and key results) originate with Andy Grove at Intel ("High Output Management", 1983) and were spread by John Doerr ("Measure What Matters", 2018). An objective is qualitative and directional; each has three to five key results that are measurable outcomes. A key result that is a task ("launch the app") is an output in disguise; rewrite it as a behaviour ("40 percent of in-house guests use the app to make one request").

## 14. Metrics

### 14.1 HEART and goals, signals, metrics

Kerry Rodden, Hilary Hutchinson and Xin Fu built HEART at Google ("Measuring the User Experience on a Large Scale", CHI 2010) to give large products user-centred metrics. Five categories, each worked through goals (what the team wants), signals (the user behaviour or attitude that shows it) and metrics (the number tracked). Choose the categories that matter for this product; few products need all five.

| Category | Meaning | Example goal | Signal | Metric (luxury hotel app) |
|---|---|---|---|---|
| Happiness | Attitude: satisfaction, perceived ease, trust | Guests feel looked after | Post-stay survey answers | Average SEQ on "request something during your stay"; SUS each quarter |
| Engagement | Depth and frequency of use by active users | Guests use the app during the stay | Requests made in-app | In-app requests per occupied room-night |
| Adoption | New users of the product or a feature | Arriving guests start using the app | First login before arrival | Share of arrivals with pre-arrival login |
| Retention | Return over time | Guests come back to the app on the next stay | Login on a later stay | Share of returning guests who log in again |
| Task success | Effectiveness and efficiency | Guests complete a request without calling | Request completed without a follow-up call | Completion rate; median time to confirmation |

### 14.2 Customer-feedback metrics

| Metric | Question and scale | Calculation | Use and critique |
|---|---|---|---|
| Net Promoter Score (NPS) | "How likely are you to recommend [brand] to a friend or colleague?" 0 to 10 | Percentage of promoters (9 and 10) minus percentage of detractors (0 to 6); range minus 100 to plus 100 | Fred Reichheld, "The One Number You Need to Grow" (HBR, 2003). Critique: Timothy Keiningham and colleagues (Journal of Marketing, 2007) found no evidence that NPS predicts growth better than other satisfaction measures; the 11-point scale is compressed into three bins, losing information; recommendation intent is a poor proxy in luxury where clients do not recommend discreet services; the number moves with sampling and timing. Use it for tracking only, with its distribution and the verbatim reasons; tying staff bonuses to it invites gaming |
| Customer satisfaction (CSAT) | "How satisfied were you with [interaction]?" usually 5-point | Share answering 4 or 5 | Good for transactional moments (check-out, delivery, a support case). Ceiling effects in hospitality, where scores cluster at the top; read the share of 5s on its own, because the 4s hide the guests who were merely content |
| Customer Effort Score (CES) | CES 2.0: "[Company] made it easy for me to handle my issue", 7-point agreement | Mean, or share agreeing (5 to 7) | Matthew Dixon, Karen Freeman and Nicholas Toman, "Stop Trying to Delight Your Customers" (HBR, 2010): reducing effort predicts loyalty better than delight in service interactions. Fits concierge, reservations and after-sales |

House rule for luxury clients: replace NPS as the headline with a direct-return measure (repeat stay rate, repeat purchase within 24 months, referral bookings traced to a named client) and keep NPS as a tracking signal with verbatims.

### 14.3 Usability and product metrics

- Task success rate, time on task, error rate, SEQ and SUS: section 6.4 and 9.1.
- Conversion rate: share of sessions or users completing a goal (booking, enquiry, purchase). Define the denominator in writing; "conversion" means different things to the client's marketing team and to the e-commerce platform.
- Activation: the share of new users who reach the first moment of real value (the "aha" moment), defined per product by testing which early behaviour best predicts retention. For a residences portal it might be "viewed the floor plan and booked a site visit within 14 days".
- Retention curve: the share of a starting cohort still active at each later period. A curve that flattens shows a retained core; one that decays towards zero shows no product-market fit (a product retaining a core of users who need it) for that cohort, whatever the acquisition numbers say. For client apps, add Sean Ellis's product-market-fit question, "How would you feel if you could no longer use [product]?", with 40 percent or more answering "very disappointed" as his threshold for fit.
- Cohort analysis: group users by start date (or by acquisition channel, or by first product bought) and compare their curves; it separates the effect of a change from the effect of who arrived that month. Seasonality in the Gulf (summer exodus, Ramadan, the cooler-season peak from October to April) and in India (wedding seasons, festive quarter) makes cohort comparison essential before crediting a redesign.
- Funnel metrics: step conversion and cumulative conversion (section 8.2); report both, because a fix at step two that raises step conversion can lower cumulative conversion if it moves the drop downstream.
- Guardrails: page speed (Core Web Vitals, see 21-web-design-and-digital-craft.md), complaint rate, refund and cancellation rate.

### 14.4 Content, social and campaign metrics

The metrics for short-form content and social platforms (reach, watch time, completion, saves, shares, the platform-specific signals each algorithm rewards) live in 17-short-form-social-and-platform-craft.md; campaign effectiveness measures are in 19-campaigns-and-creative-direction.md, section 10.8; brand metrics (unaided and aided awareness, consideration, preference, image attributes, share of search) are in 18-brand-strategy-and-identity-design.md, section 9.3. The research discipline in this file applies to both: declare the metric and the threshold before launch, compare against a baseline, and separate correlation from cause.

### 14.5 Category business metrics

Every research recommendation names which of these it should move, because these are the numbers the client's board reads.

| Category | Metrics |
|---|---|
| Hospitality | Occupancy; ADR (average daily rate); RevPAR (revenue per available room: occupancy times ADR); direct booking share; repeat-guest rate; online reputation index (ReviewPro's Global Review Index or TrustYou's score) |
| Real estate | Cost per qualified lead; enquiry to site-visit ratio; site visit to booking; booking cancellation rate; time to first human reply |
| Jewellery and fashion retail | Footfall conversion (share of store visitors who buy); average transaction value; appointment to purchase; repeat purchase within 24 months |
| F&B | Covers (guests served); average spend per cover; table turns; no-show rate |
| Events | Registration to attendance (show-up) rate; dwell time; session attendance; leads scanned |

## 15. Research for Mask360 categories

### 15.1 What changes with high-net-worth respondents

Logistics and access are in section 10.6. Three further shifts, from house experience: behavioural evidence comes from staff and records more than from the participant's account, because HNW clients delegate much of their own experience (an assistant books, a driver collects, a family office pays); stated price sensitivity is low and misleading, so study time, privacy and recognition, which are what they protect; and the interview itself is part of the brand experience, so the invitation, the setting and the thank-you are designed to the brand's standard.

### 15.2 Category playbook

| Category | Key questions | Methods that work | Watch for |
|---|---|---|---|
| Luxury hospitality: pre-arrival | How is the stay chosen and by whom; what reassures; which preferences are worth asking for | Reservation and enquiry log analysis; interviews with past guests and travel advisors; teardown of competitors' pre-arrival messages | The booker is often an assistant or a travel advisor; interview them as well as the guest |
| Luxury hospitality: in-stay | Where service breaks; which moments are remembered | Service blueprint workshop with staff (section 12.4); contextual inquiry at front office and concierge; guest diaries over a three-to-five-day stay; mystery-guest stays (section 3.4) | Staff perform when observed; observe at peak hours |
| Luxury hospitality: post-stay | What brings guests back; what they tell others | Review mining (section 9.8); CRM repeat-stay analysis; short post-stay interviews within two weeks | Survey fatigue; one well-timed question beats a 20-item survey |
| Jewellery: gifting | Who decides, on what budget, for which occasion | Switch interviews with recent gift buyers; accompanied shopping (the researcher shops alongside the participant) | Occasion calendars: Diwali, Dhanteras, Akshaya Tritiya, Karva Chauth in India; Eid, Valentine's Day and the Dubai Shopping Festival in the Gulf |
| Jewellery: self-purchase | What the purchase means (reward, investment, identity) | Laddering to values (section 2.3); diary of browsing to buying | Growing among working women in Indian metros; research the language of self-reward without moralising it |
| Jewellery: bridal in India | How the family decides across months | Rapid ethnography with families; in-store observation; interviews with the mother and the bride separately | Trust signals: the BIS hallmark and HUID, buyback and exchange policy, the family jeweller relationship; the family photograph test (section 11.1) |
| Beauty | Routines, triggers, ingredient knowledge, shade match | Photo diaries of the shelf and routine over two weeks; in-home visits; ingredient-literacy card sorts (which ingredients are known, trusted, feared) | Indian skin tones across Fitzpatrick types III to VI (the dermatological scale of skin phototypes, I to VI); Gulf fragrance culture (oud, bakhoor, layering) needs gender-matched researchers for in-home work |
| Real estate: India | How buyers judge a developer and a project; who in the family decides | Site-visit observation; broker and sales-manager interviews; CRM lost-deal analysis; switch interviews with recent buyers | RERA registration as the trust floor; section 11(2) of the Act requires the registration number on every project advertisement, enforced by state authorities such as MahaRERA |
| Real estate: NRI and Gulf buyers | How distance changes trust; how decisions run across time zones and family | Remote interviews scheduled to Gulf hours; interviews with relatives in India who do site visits; forces diagram (section 2.4) | In Dubai, RERA sits within the Dubai Land Department and property advertising needs a Trakheesi permit; Golden Visa eligibility through property ownership shapes Gulf buyer motivation |
| F&B | Why people choose, return, recommend | Observation during service; reservation and POS (point-of-sale) data; intercepts at the door; review mining | Ramadan changes the whole pattern in the Gulf (iftar and suhoor peaks); weekend definitions differ between India and the UAE |
| Event attendees | What people came for and what they remember | Intercepts on site; observation of dwell and flow; post-event survey within 24 to 48 hours; interviews a week later on what they remember | Memory fades fast; the 48-hour window catches detail, the one-week interview catches what lasted |

Structural facts that shape the research questions, as of October 2026:

- NRI property in India: under FEMA (the Foreign Exchange Management Act, 1999) and the Reserve Bank of India's rules, NRIs and OCIs (Overseas Citizens of India) may buy residential and commercial property but not agricultural land, plantation property or farmhouses; they pay through NRE, NRO or FCNR bank accounts (the rupee and foreign-currency accounts for non-residents), and may repatriate sale proceeds for up to two residential properties. These rules feed the anxiety force in the forces diagram (section 2.4).
- Gulf property: the UAE Golden Visa through property needs property worth at least AED 2 million; Dubai transaction data is public through the Dubai Land Department's open data.
- Jewellery: gold passed US$4,000 an ounce in October 2025. Record the day's gold rate in every jewellery interview and screen for caratage preference, because lightweight and lower-carat buying moves with price.
- Events: use badge, RFID (radio-frequency identification) or app check-in data for show-up rate and dwell time; time intercepts to session exits.

## 16. Research operations

Research operations (ResearchOps) is the people, process and tooling that let research run at scale and be reused. Kate Towsey's "Research That Scales" (2024) is the reference; the ResearchOps Community's 2018 framework set the field's agenda.

- Repository: a single searchable home for raw data, highlights and insights. Dovetail (as of October 2026 offering transcription with timestamps, translation, speaker separation, redaction of personal data, classification of feedback into themes, cited AI chat across the data, and MCP connectors for Claude and other assistants) is the house choice for research-heavy clients; a Notion database (one row per insight, linked to studies and evidence) is the lighter option. The rule for either: every insight links to its evidence.
- Tagging taxonomy: three families of tags, kept short (under about 60 tags in total, or nobody applies them consistently): descriptive (stage of the experience, channel, segment, market: India, UAE, KSA); analytic (need, pain, delight, workaround, trust signal, emotion); project (study ID, client, date). A tag owner reviews new tags monthly and merges duplicates.
- Insight library: atomic research (Tomer Sharon's Polaris at WeWork and Daniel Pidcock's atomic research model, both 2017 to 2018) breaks findings into experiments, facts (evidence), insights and conclusions, each linked, so an insight can be re-validated by later evidence and retired when it is contradicted.
- Consent management: a consent register with participant ID, consent version, date, scopes granted (section 10.3), retention end date and deletion date. It is checked before any clip leaves the team.
- Formats kept in the studio library: research plan (section 1.7), screener, discussion guide, consent form in English, Hindi and Arabic, notes grid, interview snapshot, synthesis board, report and one-page summary, highlight-reel brief.
- Participant database: an opted-in list of past participants and willing clients, with consent under DPDP and PDPL, contact history and incentive history, so no one is over-researched (house limit: one study per person per six months).

## 17. Communicating research

### 17.1 The report

1. One-page summary: the decision, the answer, three to five findings with confidence levels, and the recommended actions. Most executives read nothing else.
2. Method and participants: what was done, with whom, when, and the limits of the sample.
3. Findings: one per page, headline as a full sentence, with evidence (quotes with IDs, counts of participants, clips, data), and the implication.
4. Recommendations, ranked by impact and effort (section 13.8), each linked to its findings.
5. Open questions and what to research next.
6. Appendix: discussion guide, screener, full data references.

The order follows Barbara Minto's pyramid principle ("The Pyramid Principle", 1987): the answer first, then the grouped arguments, then the evidence. Severity, frequency and confidence are stated for each finding; a finding without its count of participants cannot be weighed. Confidence levels: high, seen in most participants of the segment and confirmed by a second method or source (section 11.6); medium, consistent within one method; low, few participants or a single source, reported as a lead.

### 17.2 Highlight reels and insight posters

- Highlight reel: 2 to 4 minutes, 6 to 10 clips, each captioned with the finding it supports and the participant ID. One participant failing is an anecdote; three participants failing in sequence is a finding the room accepts. Only clips with sharing consent (section 10.3), faces blurred where required.
- Insight poster: A2 or A3, one insight per poster, with the insight statement, two quotes and a photograph of the context (with consent). Posted in the studio and the client's office, they keep the insight alive after the deck is closed. Typography and layout to house standard (see 05-layout-grids-and-composition.md).

### 17.3 Workshops

- Assumption mapping, run as in section 13.2.
- Findings to priorities: present findings, then the client team votes on opportunities with dot voting (each person places a fixed number of dots on the options they favour), then places them on impact against effort. The output is a ranked backlog with owners.
- Rule: every workshop ends with a decision written on the wall and an owner for each action.

### 17.4 Executives and creative teams

- Executives: lead with the decision and the number at stake ("enquiry abandonment at the payment-plan step is costing about 40 qualified leads a month"); one slide per finding; show one clip; state confidence plainly; bring a recommendation and the cost of doing nothing.
- Creative teams: bring them into sessions as observers; give them the raw material (quotes, photographs, artefacts, the words people use) in place of a summary; frame findings as tensions they can work with. Never hand a persona over as a brief.
- Turning insight into a creative brief: the research insight becomes the brief's insight line when it passes the two-sided test in 19-campaigns-and-creative-direction.md, section 3.5; the audience portrait in the brief (section 2 of that file) is written from archetypes and verbatims; the "what we want them to think, feel and do" line takes its "do" from the behavioural metric this research established.

## 18. AI in research, October 2026

### 18.1 What the tools do now

| Use | State as of October 2026 | House rule |
|---|---|---|
| Transcription, translation, speaker separation | Standard in Dovetail and most platforms; OpenAI's Whisper and similar models run locally | A person corrects every transcript used for analysis; Hindi, Hinglish and Gulf Arabic accuracy trails English, and code-switching mid-sentence is where errors cluster |
| AI-moderated interviews | Maze sells an AI moderator as an Enterprise add-on that asks follow-ups against researcher-set goals and, in Maze's own words, is "best for early-stage, generative research at scale"; Optimal lists an "AI Interviewer"; UserTesting lists "AI Moderation" | Use for breadth (50 to 200 short text or voice interviews on a narrow topic) after human interviews have set the questions. Keep it away from HNW and senior B2B participants, who read an AI moderator as a sign that they are not valued |
| Tagging, clustering, summarisation | Dovetail classifies feedback into themes and sentiment and answers questions across the repository with citations; Optimal's analysis cites time-stamped sources | Treat AI themes as a first draft; trace every theme to at least three timestamped quotes a researcher has checked (the verification protocol in 22-ai-era-craft-and-generative-tools.md, section 9.2) |
| Synthetic users and digital twins | Products simulate participants from a model, some seeded with real customer data (Dovetail markets "Digital Twins") | See 18.2. Never reported as user evidence |

The EU AI Act (Regulation (EU) 2024/1689), Article 50(1), requires that people interacting with an AI system are told so unless it is obvious, from 2 August 2026. House rule in every market: disclose AI moderation in the invitation and the consent form, and offer a human-moderated alternative. Before buying an AI moderator (Maze, Optimal and UserTesting above; Outset, Listen Labs, Strella and Conveo also sell them, offers not verified in this pass), test its Hindi, Hinglish and Gulf Arabic handling on a recorded pilot and confirm where it stores data.

### 18.2 Where synthetic users mislead

Maria Rosala and Kate Moran's NN/g study (June 2024) compared synthetic users with real participants and found: sycophancy (synthetic users approve every concept; one claimed to have completed all its courses when real learners had not); shallow, undifferentiated needs (they "seem to care about everything", useless for prioritisation); no behavioural data, since a model can only produce plausible accounts; and patchy knowledge of niche populations. Their acceptable uses: desk-research synthesis, exploring an unfamiliar domain before fieldwork, piloting a discussion guide, and generating hypotheses that real research must test. The opposing position: Lisa Argyle and colleagues ("Out of One, Many: Using Language Models to Simulate Human Samples", Political Analysis, 2023) found that a model conditioned on demographic backstories reproduced some aggregate opinion distributions of US subgroups, which they called silicon samples. Critics, NN/g among them, reply that sycophancy, flattened variance and failure on thin populations remain. House position follows NN/g: synthetic output may pilot a guide or a survey and shape hypotheses, and it never sizes or ranks anything, because luxury, Indian regional and Gulf audiences are under-represented in training data.

### 18.3 Summarisation risks and verification

- Fabricated quotes: models produce fluent quotations nobody said. Every quote in a deliverable carries a participant ID and timestamp a person has checked against the recording.
- Averaging: summaries flatten disagreement into consensus and drop the outlier who held the insight. Ask the model for disconfirming cases explicitly, then check them.
- Counting: models miscount. Any number ("7 of 10") is counted by a person from the coded data.
- Over-confidence: a summary reads equally sure about a theme from two participants and one from twelve. Add evidence counts by hand.
- Privacy: transcripts go only to tools whose terms exclude training on inputs and whose data residency fits DPDP, PDPL and GDPR transfer rules (section 10.5).
- Check: sample 20 AI-assigned codes against a researcher's coding before relying on any automated tagging; disagreement above about one in five means recalibrate the codebook or code by hand.

## 19. Method selection and sample size tables

### 19.1 Method selection

| The question | Type | Methods, first choice first |
|---|---|---|
| Who are our users, what are they trying to do, what is their context? | Generative, attitudinal and behavioural | Interviews (2.2), contextual inquiry (3.1), diary study (3.3) |
| Why do people switch to us or away from us? | Generative | JTBD switch interviews (2.4), CRM lost-deal analysis, review mining (9.8) |
| What language and norms does this category use? | Generative, attitudinal | Focus groups or mini-groups (2.5), review mining (9.8), co-design (3.5) |
| What do the people who run the service know? | Generative | Stakeholder interviews (2.1), expert informants (10.6), service blueprint workshop (12.4) |
| How should content be grouped and labelled? | Generative and evaluative | Open card sort (5.1), then tree test (5.2) |
| Can people find things in this structure? | Evaluative, behavioural | Tree test (5.2), first-click test (5.3) |
| Can people complete this task with this design? | Evaluative, behavioural | Moderated usability test (6), RITE (6.6) |
| Can disabled people complete the core task? | Evaluative, behavioural | Accessibility audit plus testing with disabled participants (6.9) |
| Does the service meet its standard when nobody is announced? | Evaluative, behavioural | Mystery shopping (3.4) |
| Where does this interface break convention? | Evaluative, expert | Heuristic evaluation (7.1), cognitive walkthrough (7.2), expert review (7.3) |
| What is the first impression and does the message land? | Evaluative, attitudinal | Five-second test (9.4), desirability test (9.5) |
| Will this film be noticed, branded and understood? | Evaluative, attitudinal | Pre-test of the animatic (9.7) |
| Did the campaign change awareness or sales? | Summative | Brand lift, geo holdout or MMM (9.7) |
| What will they pay, and which features are worth it? | Quantitative, attitudinal | Van Westendorp, conjoint or MaxDiff (4.5) |
| Which concept has the most appeal and credibility? | Evaluative, attitudinal | Qualitative concept test, then monadic quantitative test (9.6) |
| How many people hold this view or have this trait? | Quantitative, attitudinal | Survey (4) |
| Where in the flow do people drop out, and how many? | Quantitative, behavioural | Funnel analysis (8.2), then session replay (8.3) |
| Which version performs better on a live metric? | Quantitative, behavioural | A/B test (8.1), if traffic allows |
| How usable is the product against last year or competitors? | Summative | Benchmark study with SUS or SUPR-Q and task metrics (9.1) |
| Where do people look on this pack, page or poster? | Behavioural | Eye tracking (8.4) |
| What do competitors do and where are the gaps? | Desk | Competitive teardown (9.2), desk research (9.3) |
| Which features delight and which are expected? | Attitudinal, quantified | Kano survey (12.10) |

### 19.2 Sample sizes

| Method | Recommended n | Basis |
|---|---|---|
| Stakeholder interviews | 6 to 12 | Coverage of functions and levels (2.1) |
| Generative interviews | 5 to 8 per segment; 10 to 15 total for most studies | Saturation at 9 to 17 (Hennink and Kaiser, 2022); 12 for 92 percent of codes in a homogeneous group (Guest, Bunce and Johnson, 2006) |
| HNW interviews | 6 to 10, triangulated | Access ceiling (10.6) |
| JTBD switch interviews | 10 to 12 | House practice for switch interviews (2.4) |
| Focus groups | 3 to 4 per segment; 5 to 8 per group | Krueger and Casey (2015); Guest, Namey and McKenna (2017) (2.5) |
| Contextual inquiry | 4 to 6 per role | Beyer and Holtzblatt (3.1) |
| Diary study | Recruit 12 to 15 to finish 10 | Dropout allowance (3.3) |
| Formative usability test | 5 to 8 per segment per round | Nielsen and Landauer (1993) with its limits (6.5) |
| Quantitative usability benchmark | 40 for binary metrics (95 percent confidence, 15 percent margin); 47 for continuous metrics such as time | NN/g sample-size summary |
| SUS for a formative read | 12 or more | Tullis and Stetson (2004) |
| Card sort | 15 minimum; 20 to 30 for high-stakes IA | Tullis and Wood (2004): about 0.90 at 15 and 0.95 at 30 against 168; Nielsen interpolates 0.93 at 20 |
| Tree test | About 50 | Optimal Workshop guidance |
| First-click test | 20 to 50 per screen | House practice |
| Five-second test | 20 to 50 per design | House practice |
| Preference test | 30 or more per comparison | 21 to 9 is the narrowest significant split at 30 (two-sided binomial, 95 percent) |
| Eye-tracking heatmaps | About 30 usable, recruit about 39 | Pernice and Nielsen (2009) |
| Heuristic evaluation | 5 evaluators, at least 3 | One finds about 35 percent of problems, five about 75 percent (Nielsen) |
| Mystery shopping | 2 to 3 shops per site per scenario | House practice (3.4) |
| Survey, one headline proportion | 384 for plus or minus 5 points; 1,067 for plus or minus 3 | 95 percent confidence, p 0.5 |
| Survey subgroups | 100 per subgroup minimum | Plus or minus 9.8 points per subgroup |
| Kano survey | 20 to 30 per segment for a read; more to quantify | House practice (12.10) |
| Conjoint analysis | n times tasks times alternatives divided by the largest number of levels, at least 500; at least 300 overall, about 200 per subgroup compared | Johnson's rule of thumb; Orme (4.5) |
| A/B test | Calculated per test; about 12,900 per variant for a 20 percent relative lift on a 3 percent baseline | Lehr's approximation, 80 percent power, alpha 0.05 (8.1) |

Every n counts participants after fraud removal (section 10.9); over-recruit by the expected removal rate.

## Terms introduced

- A/B test: an online controlled experiment that randomly splits live traffic between a control and variants and compares a pre-declared metric.
- Acquiescence bias: the tendency of respondents to agree with statements regardless of content.
- Activation: the share of new users who reach the first moment of real value in a product.
- Adjusted Wald interval: a binomial confidence interval computed after adding about two successes and two failures; recommended for small samples (Agresti and Coull).
- ADR, RevPAR: average daily rate per occupied room; revenue per available room, occupancy times ADR.
- Affinity mapping: grouping individual observations bottom up into clusters by similarity; descends from the KJ method.
- AI-moderated interview: an interview in which software asks the questions and follow-ups against researcher-set goals.
- AI note-taker: a meeting assistant that joins calls to record and transcribe; barred from sessions unless the consent form names it.
- Animatic: a filmed storyboard with a temporary soundtrack, the usual stimulus for an advertising pre-test.
- Arabizi: Arabic written in Latin script, with numerals standing for letters Latin lacks.
- Archetype: a behavioural pattern describing a segment without demographic detail or a face.
- Articulation check: an open screener question whose answer predicts whether a candidate will talk freely.
- Assumption mapping: plotting assumptions by importance against strength of evidence to choose what to test first.
- Atomic research: a repository model that stores experiments, facts, insights and conclusions as separate linked units.
- Attention check: a survey item with one correct answer, used to catch inattentive respondents.
- Attitudinal research, behavioural research: studying what people say; studying what people do.
- AttrakDiff: Hassenzahl's word-pair questionnaire of pragmatic and hedonic quality.
- Benchmarking: measuring a product with a standard instrument so it can be compared over time or against competitors.
- Brand Experience Scale: Brakus, Schmitt and Zarantonello's 12-item scale of sensory, affective, intellectual and behavioural brand experience.
- Brand lift: a platform's randomised holdout survey of ad recall, awareness and consideration.
- CAPTCHA: a challenge test meant to tell people from bots; no longer reliable against AI agents.
- Card sorting (open, closed, hybrid): participants group content cards into categories they create, that you supply, or both.
- Clienteling: relationship selling by named sales associates who keep a record of each client.
- Code, codebook: a short label attached to a segment of qualitative data; the list of codes with definitions and inclusion rules.
- Cognitive pretesting: piloting a survey while respondents think aloud as they answer.
- Cognitive walkthrough: an inspection that steps through a task as a first-time user, asking four (or two) questions at each action.
- Cohen's kappa, inter-rater reliability: a statistic of agreement between coders corrected for chance; the degree to which coders agree.
- Cohort analysis: comparing groups of users defined by start date or another shared attribute over time.
- Competitive teardown: a step-by-step documentation of competitors' experiences scored on a fixed rubric.
- Concept testing (monadic, sequential monadic): judging early ideas with target users; one concept per participant, or several in rotated order.
- Confidence interval (one-sided, two-sided): the range likely to contain the population value at a stated confidence; bounded on one side or on both.
- Confidence level (high, medium, low): the house rating of a finding by the number of participants and independent sources behind it.
- Confirmation bias: noticing and weighting evidence that supports an existing belief.
- Conformity: yielding to a group's judgement against one's own, as Asch demonstrated in 1951.
- Conjoint analysis (choice-based), part-worth utility: a trade-off method in which respondents choose between bundles of attribute levels; the estimated worth of each level.
- Consent manager: under India's DPDP Act, a registered intermediary through which a person gives, manages and withdraws consent.
- Consent register: the log of each participant's consent version, scopes, retention end date and deletion date.
- Context of use (natural, scripted, limited, none): how far a study lets people use the product as in life.
- Contextual inquiry: an interview in the participant's own setting during real work, on the master and apprentice model.
- Continuous discovery: weekly customer touchpoints by the team building the product, in pursuit of a desired outcome (Torres).
- Convenience sample, probability sample: whoever is reachable; a sample in which everyone in the population has a known chance of selection.
- Conversion rate: the share of sessions or users who complete a defined goal.
- Courtesy bias: respondents' tendency to tell a researcher who seems to represent the brand what will please (Jones, 1963).
- Crazy 8s, lightning demos, heat-map voting, Decider: design-sprint exercises and role: eight sketches in eight minutes; three-minute tours of existing solutions; silent dot stickers on liked parts of sketches; the person with final say.
- CUPED: a variance-reduction technique for experiments that uses pre-experiment data.
- Customer Effort Score (CES): a 7-point agreement rating of how easy the company made it to handle an issue.
- Customer satisfaction (CSAT): the share of respondents rating an interaction 4 or 5 on a 5-point satisfaction scale.
- Customer stage map: a visual of one archetype's experience of a goal over time, across stages and channels, known in the industry by the name noted in section 12.3.
- Data minimisation: collecting only the personal data a study needs.
- Data principal: under India's DPDP Act, the individual whose personal data is processed.
- Data thresholds: GA4's withholding of small segments from reports, which hides low-volume luxury segments.
- Deductive coding, inductive coding: applying a codebook written in advance; building codes from the data.
- Dendrogram, similarity matrix: the tree from hierarchical clustering of card-sort data; the table of how often each pair of cards was grouped together.
- Design sprint: Jake Knapp's five-day process (map, sketch, decide, prototype, test) for answering a critical question with a prototype; Sprint 2.0 is the four-day variant.
- Design thinking: IDEO's and the Stanford d.school's packaging of designers' methods (empathise, define, ideate, prototype, test) for non-designers.
- Desirability test: participants choose words from the 118 Microsoft product reaction cards to describe a design, then explain.
- Desk research (secondary research): assembling existing data and sources before collecting new data.
- Diary study (interval-, signal-, event-contingent): participants log experiences over days or weeks, at fixed times, when pinged, or when the event happens.
- Directness: in tree testing, the share of participants who went down the tree without backtracking.
- Discussion guide: the ordered list of topics, prompts and timings that structures an interview.
- Dot voting: each person places a fixed number of dots on the options they favour.
- Double-barrelled question: a question that asks about two things at once.
- Double diamond: the Design Council's 2005 model of discover, define, develop and deliver.
- Dyad, triad, mini-group: interviews with two or three people who share a decision; a focus group of 4 to 5.
- Empathy map: a canvas of what a user says, thinks, does and feels, with a goal section in Dave Gray's 2017 revision.
- Ethnography, rapid ethnography: extended immersion in a group's life; a compressed form using narrow focus, key informants and several observers.
- Evaluative (formative) research, generative research, summative research: testing whether a design works; discovering what to make and for whom; measuring how well a finished product performs.
- Experience map: a map of a human activity independent of any one product or company.
- Expert informant: a person who serves the target customers (a concierge, a private banker) interviewed for second-hand evidence across many clients.
- Expert review: an informal inspection by an experienced practitioner against heuristics, guidelines and domain knowledge.
- Extremes and mainstreams, lead users: sampling a few people at the edges beside the typical ones; people who meet a need before the market does (von Hippel).
- Eye tracking (fixation, saccade, gaze plot, heatmap): recording where people look; a pause of the eye; a jump between pauses; one person's sequence; aggregated fixations.
- Fail point, wait point: the step in a service blueprint that breaks most often; a step where the customer waits.
- First-click testing: recording where participants click first for a task on a screen.
- Fitzpatrick skin types: the dermatological classification of skin phototypes from I to VI by response to sun.
- Five-second test: showing a design for five seconds, then asking what participants remember and understood.
- Five-user rule: Nielsen and Landauer's finding that five users find about 85 percent of problems when each problem affects 31 percent of users.
- Five whys: Toyoda's root-cause technique of asking why repeatedly until the cause is reached.
- Focus group (FGD): a moderated discussion among 5 to 8 similar people on a defined topic.
- Footfall conversion: the share of store visitors who buy.
- Forces diagram: the JTBD model of push and pull towards change against anxiety and habit.
- Foundation Sprint: Knapp and Zeratsky's short sprint, set out in "Click" (2025), that fixes customer, problem, differentiation and approach before design sprints.
- F-shaped pattern: the scanning pattern on text-heavy pages without visual cues (Nielsen, 2006).
- Funnel: the ordered steps to a goal with the share surviving each step.
- Future-state map: a map of the experience the business intends, labelled apart from the researched current state.
- Gabor-Granger: a pricing method that asks purchase likelihood at successive prices to build a demand curve.
- Geo experiment, incrementality: a test comparing matched regions with and without spend; the actions that would not have happened without the ads.
- Guardrail metric: a metric that must not degrade while an experiment optimises its primary metric.
- HEART: Google's framework of happiness, engagement, adoption, retention and task success, worked through goals, signals and metrics.
- Heuristic evaluation, severity rating: independent inspection against usability principles; Nielsen's 0 to 4 scale of problem seriousness.
- Highlight reel, insight poster: 2 to 4 minutes of captioned clips supporting findings; a printed sheet carrying one insight with quotes and context.
- High-net-worth (HNW): people with investable assets above about US$1 million in the wealth-report convention.
- How-might-we (HMW) question: a problem reframed as an open invitation to generate solutions.
- Hypothesis: a falsifiable statement with a threshold set before the data arrives.
- ICE: prioritisation scoring of impact, confidence and ease, each 1 to 10.
- Incentive: payment to participants for time and expertise, paid whatever they say.
- Incidence rate: the share of screened people who qualify for a study; recruiters price by it.
- Informed consent: a participant's agreement given with knowledge of purpose, recording, access, retention and the right to stop.
- Input metrics: the levers a team can move that drive a North Star metric.
- Insight, insight statement: the tension or motive that explains a pattern and suggests action; a structured sentence carrying it with evidence.
- Inspection methods: evaluations in which experts examine an interface in place of users.
- Interview snapshot: Torres's one-page summary of a single interview.
- Jobs to be done (JTBD), outcome-driven innovation (ODI), switch interview: the theory that people hire products to make progress in a circumstance; Ulwick's survey-based variant; the timeline interview with recent switchers.
- Job story: "When [situation], I want to [motivation], so I can [expected outcome]" (Adams, Klement).
- Kano model: classification of features as must-be, one-dimensional, attractive, indifferent or reverse by their effect on satisfaction.
- Laddering: questioning that climbs from attribute to consequence to value, from means-end chain theory.
- Lean UX hypothesis: "We believe [outcome] will be achieved if [user] attains [benefit] with [feature]."
- Likert scale, rating scale: a summed set of agreement items; a single rated item.
- Luxury value model: Wiedmann, Hennigs and Siebels's financial, functional, individual and social dimensions of luxury value.
- Make-tools: Sanders and Stappers's collage, mapping and modelling kits through which participants express latent needs.
- Margin of error: the range around a sample estimate within which the population value probably lies at a stated confidence.
- Marketing mix model (MMM): a regression of sales on media spend and other drivers over two to three years of weekly data.
- MaxDiff (best-worst scaling): ranking items by repeatedly choosing the best and the worst from small sets.
- Measurement plan: the written list of analytics events, their names and parameters, and campaign tagging rules, fixed before build.
- Mental model diagram: Indi Young's alignment of users' tasks and reasoning (towers) above a line with the organisation's support below it.
- Minimum detectable effect (MDE): the smallest true change an experiment is designed to detect.
- Minimum viable product (MVP): the smallest thing that tests the riskiest assumption.
- Moderated, unmoderated and guerrilla testing: a facilitator runs the session; participants work alone on a platform; quick intercepts of unscreened people in public places.
- Moment of truth (first, second, zero): a customer contact that makes or loses the customer (Carlzon); the shelf and use (Lafley); the search before purchase (Lecinski).
- MoSCoW: prioritisation into must, should, could and won't have this time.
- Multiple comparisons: testing several variants at once, which raises the chance of a false winner unless alpha is corrected (Holm, Bonferroni).
- Multivariate test (MVT): an experiment varying several elements at once to estimate each effect and their interactions.
- Mystery shopping: covert evaluation of a service by a trained assessor posing as a customer, against observable standards.
- NASA-TLX: Hart and Staveland's six-sub-scale measure of perceived workload.
- NCCS: India's New Consumer Classification System, 12 household grades from A1 to E3 set by chief earner's education and durables owned.
- Net Promoter Score (NPS): percentage of promoters (9 and 10) minus percentage of detractors (0 to 6) on likelihood to recommend.
- North Star metric: the single measure that best captures customer value and predicts long-term results.
- Notes grid: a note-taking table of timestamp, verbatim quote, observation and tag.
- Novelty effect, change aversion: users engaging with something because it is new; users resisting it because it changed.
- Now, next, later roadmap: Janna Bastow's format committing to near-term work and holding later items as problems.
- Observation, interpretation (finding): what was seen or said, verbatim; a pattern across observations with its count.
- Observer effect: people changing their behaviour because they are watched.
- Offline conversion import: sending CRM stages (qualified lead, site visit, sale) back to ad platforms so campaigns are judged on them.
- OKRs: objectives with three to five measurable key results.
- Opportunity score: Ulwick's importance plus the greater of (importance minus satisfaction) or zero; above 10 an opportunity.
- Opportunity solution tree: Torres's tree of outcome, opportunities, solutions and assumption tests.
- Outcome, output, impact (business outcome, product outcome, traction metric): a change in behaviour; what the team ships; the business result; Torres's levels of business result, customer behaviour in the product, and adoption of one feature.
- Peak-end rule: remembered experience is weighted to its most intense moment and its end.
- Peeking: checking a fixed-horizon test repeatedly and stopping at the first significant result, which inflates false positives.
- Personal data (PII), special category data: information that identifies a person directly or in combination; the GDPR's protected classes such as health, religion, ethnicity and biometric identification.
- Persona, proto-persona, thinking style: a fictional individual representing a segment; a persona drafted from team assumptions before research; Indi Young's description of a person's reasoning in a context.
- Preference test: participants choose between options and explain why.
- Pre-test: measuring an advertisement's branding, attention, emotion and message take-out before it runs.
- Primacy effect: the pull of options listed first.
- Problem statement: a framing of a need without a solution.
- Product-market fit, PMF survey: a product retaining a core of users who need it; Sean Ellis's question, with 40 percent "very disappointed" as his threshold.
- Product trio: a product manager, a designer and a software engineer doing discovery together.
- Pseudonymisation: replacing identities with codes, with the key held separately.
- Qualitative research, quantitative research: finding why and how by direct observation; measuring how many and how much.
- Rage clicks: rapid repeated clicks on one spot, a sign of frustration in session replays.
- Rainbow spreadsheet: Tomer Sharon's synthesis grid of observations against colour-coded participants.
- Reflexive thematic analysis: Braun and Clarke's later form of thematic analysis that treats the researcher's interpretation as the instrument and rejects reliability scores.
- Research operations (ResearchOps): the people, process and tooling that let research run at scale and be reused.
- Research plan: the one-page, client-signed statement of decision, questions, method, participants, schedule and budget.
- Research question: an open question the team needs answered, pursued through interview questions about specific episodes and kept out of the moderator's script.
- Retention curve: the share of a cohort still active at each later period.
- Review mining: systematic coding of public reviews for themes and vocabulary.
- RICE: reach times impact times confidence, divided by effort.
- RITE: rapid iterative testing and evaluation, changing the design between sessions.
- Sample ratio mismatch (SRM): a traffic split that departs from the design, signalling broken randomisation or tracking.
- Sampling bias, non-response bias, recall bias, survivorship bias, social desirability bias: the people reached differ from the population; responders differ from non-responders; memory distorts frequency; only current customers answer; respondents give the admirable answer.
- Satisficing: choosing the first acceptable answer as survey effort rises.
- Saturation: the point at which new data stops producing new codes or themes.
- Screener: the questionnaire that admits or excludes candidate participants.
- Semi-structured interview: a guided conversation in which the moderator may follow unplanned threads.
- Sequential (always-valid) testing: an experiment design whose statistics stay valid under continuous monitoring.
- Service blueprint (lines of interaction, visibility, internal interaction): a map of service delivery from physical evidence and customer actions down through frontstage, backstage and support processes.
- Session replay: reconstruction of individual visits from recorded page events.
- Significance level (alpha), statistical power: the accepted false-positive rate; the chance of detecting a real effect of the chosen size.
- Single Ease Question (SEQ): a 7-point post-task rating of ease.
- Social listening: tracking brand and category mentions and sentiment across social platforms.
- Speeder: an unmoderated participant who finishes in under a third of the median time.
- Stakeholder map: a plot of stakeholders by influence against interest.
- Straight-lining: giving the same answer down a grid of survey items.
- Struggling moment: in JTBD, the circumstance in which the old way stops working.
- SUPR-Q: an 8-item questionnaire of website quality with usability, trust, loyalty and appearance sub-scales.
- Synthetic users, digital twins, silicon samples: model-generated stand-ins for research participants.
- System Usability Scale (SUS), curved grading scale: a 10-item questionnaire scored 0 to 100, average 68; Sauro and Lewis's percentile-based grades from A+ to F.
- Tagging taxonomy: the controlled list of descriptive, analytic and project tags in a research repository.
- Task success rate, time on task, error rate: share reaching the end state; time to success; predefined errors per task.
- TEDW: the open prompts "tell me", "explain", "describe", "walk me through".
- Thematic analysis: Braun and Clarke's six-phase identification of patterns of meaning in qualitative data.
- Think-aloud (concurrent, retrospective): participants verbalise thoughts during the task; or afterwards while watching a recording.
- Tree testing: finding items in a text-only navigation hierarchy to test findability.
- Triangulation: checking a finding across sources, investigators, theories or methods.
- Twyman's law: any figure that looks interesting or different is usually wrong.
- UEQ: the 26-item User Experience Questionnaire with six scales.
- UMUX, UMUX-Lite: 4-item and 2-item usability questionnaires that track SUS.
- Usability test: watching representative people attempt realistic tasks with a design to find where it fails and why.
- User story map, walking skeleton: activities as a backbone with stories beneath, cut into release slices; the thinnest end-to-end slice.
- Value proposition canvas: a customer profile of jobs, pains and gains set against a value map.
- Van Westendorp Price Sensitivity Meter: four price questions whose cumulative curves give a range of acceptable prices.
- Work models: Beyer and Holtzblatt's flow, sequence, artefact, cultural and physical models of observed work.

## Sources and further reading

Books
- William Albert and Thomas Tullis, "Measuring the User Experience", third edition, 2022. Jeff Sauro and James Lewis, "Quantifying the User Experience", second edition, 2016.
- Hugh Beyer and Karen Holtzblatt, "Contextual Design", 1998; Karen Holtzblatt and Hugh Beyer, "Contextual Design: Design for Life", second edition, 2017.
- David Bland and Alexander Osterwalder, "Testing Business Ideas", 2019. Alexander Osterwalder, Yves Pigneur, Greg Bernarda and Alan Smith, "Value Proposition Design", 2014.
- Marty Cagan, "Inspired", second edition, 2017. Eric Ries, "The Lean Startup", 2011.
- Jan Carlzon, "Moments of Truth", 1987. Jim Lecinski, "Winning the Zero Moment of Truth", Google, 2011.
- Clayton Christensen, Taddy Hall, Karen Dillon and David Duncan, "Competing Against Luck", 2016. Bob Moesta, "Demand-Side Sales 101", 2020. Alan Klement, "When Coffee and Kale Compete", 2016. Anthony Ulwick, "Jobs to be Done: Theory to Practice", 2016.
- Alan Cooper, "The Inmates Are Running the Asylum", 1999. Kim Goodwin, "Designing for the Digital Age", 2009.
- Don Dillman, Jolene Smyth and Leah Christian, "Internet, Phone, Mail, and Mixed-Mode Surveys: The Tailored Design Method", fourth edition, 2014.
- John Doerr, "Measure What Matters", 2018. Andrew Grove, "High Output Management", 1983.
- Rob Fitzpatrick, "The Mom Test", 2013. Steve Portigal, "Interviewing Users", second edition, 2023. Erika Hall, "Just Enough Research", second edition, 2019.
- Jeff Gothelf and Josh Seiden, "Lean UX", third edition, 2021. Josh Seiden, "Outcomes Over Output", 2019.
- IDEO.org, "The Field Guide to Human-Centered Design", 2015. Elizabeth Sanders and Pieter Jan Stappers, "Convivial Toolkit: Generative Research for the Front End of Design", 2012.
- Jim Kalbach, "Mapping Experiences", second edition, 2020. Jeff Patton, "User Story Mapping", 2014. Donna Spencer, "Card Sorting", 2009.
- Jake Knapp, John Zeratsky and Braden Kowitz, "Sprint", 2016. Jake Knapp and John Zeratsky, "Click", 2025.
- Ron Kohavi, Diane Tang and Ya Xu, "Trustworthy Online Controlled Experiments", 2020. Richard Krueger and Mary Anne Casey, "Focus Groups: A Practical Guide for Applied Research", fifth edition, 2015. Steve Krug, "Rocket Surgery Made Easy", 2010. Barbara Minto, "The Pyramid Principle", 1987.
- Bryan Orme, "Getting Started with Conjoint Analysis", Research Publishers, first edition 2006, with later editions. Tomer Sharon, "It's Our Research", 2012. Teresa Torres, "Continuous Discovery Habits", 2021. Kate Towsey, "Research That Scales", 2024. Orlando Wood, "Lemon: How the Advertising Brain Turned Sour", IPA, 2019.
- Indi Young, "Mental Models", 2008; "Practical Empathy", 2015; "Time to Listen", 2022.

Papers
- Alan Agresti and Brent Coull, "Approximate Is Better than 'Exact' for Interval Estimation of Binomial Proportions", The American Statistician, 1998.
- Lisa Argyle, Ethan Busby, Nancy Fulda, Joshua Gubler, Christopher Rytting and David Wingate, "Out of One, Many: Using Language Models to Simulate Human Samples", Political Analysis, 2023.
- Solomon Asch, "Effects of Group Pressure upon the Modification and Distortion of Judgments", in "Groups, Leadership and Men", 1951.
- Aaron Bangor, Philip Kortum and James Miller, "Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale", Journal of Usability Studies, 2009. Joey Benedek and Trish Miner, "Measuring Desirability: New Methods for Evaluating Desirability in a Usability Lab Setting", UPA, 2002.
- Mary Jo Bitner, Amy Ostrom and Felicia Morgan, "Service Blueprinting: A Practical Technique for Service Innovation", California Management Review, 2008. G. Lynn Shostack, "Designing Services That Deliver", Harvard Business Review, 1984.
- Niall Bolger, Angelina Davis and Eshkol Rafaeli, "Diary Methods: Capturing Life as It Is Lived", Annual Review of Psychology, 2003. J. Josko Brakus, Bernd Schmitt and Lia Zarantonello, "Brand Experience: What Is It? How Is It Measured? Does It Affect Loyalty?", Journal of Marketing, 2009.
- Virginia Braun and Victoria Clarke, "Using Thematic Analysis in Psychology", Qualitative Research in Psychology, 2006. John Brooke, "SUS: A Quick and Dirty Usability Scale", in "Usability Evaluation in Industry", 1996. Tim Brown, "Design Thinking", Harvard Business Review, 2008.
- Alex Deng, Ya Xu, Ron Kohavi and Toby Walker, "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data", WSDM, 2013.
- Matthew Dixon, Karen Freeman and Nicholas Toman, "Stop Trying to Delight Your Customers", Harvard Business Review, 2010. Frederick Reichheld, "The One Number You Need to Grow", Harvard Business Review, 2003. Timothy Keiningham and colleagues, "A Longitudinal Examination of Net Promoter and Firm Revenue Growth", Journal of Marketing, 2007.
- K. Anders Ericsson and Herbert Simon, "Verbal Reports as Data", Psychological Review, 1980; "Protocol Analysis: Verbal Reports as Data", 1984, revised edition 1993.
- Laura Faulkner, "Beyond the Five-User Assumption", Behavior Research Methods, Instruments and Computers, 2003. Jakob Nielsen and Thomas Landauer, "A Mathematical Model of the Finding of Usability Problems", INTERCHI, 1993. Jared Spool and Will Schroeder, "Testing Web Sites: Five Users Is Nowhere Near Enough", CHI, 2001.
- Kraig Finstad, "The Usability Metric for User Experience", Interacting with Computers, 2010. James Lewis, Brian Utesch and Deborah Maher, "UMUX-LITE", CHI, 2013. Jeff Sauro, "SUPR-Q", Journal of Usability Studies, 2015.
- Paul Green and V. Srinivasan, "Conjoint Analysis in Consumer Research: Issues and Outlook", Journal of Consumer Research, 1978. Greg Guest, Arwen Bunce and Laura Johnson, "How Many Interviews Are Enough?", Field Methods, 2006. Greg Guest, Emily Namey and Kevin McKenna, "How Many Focus Groups Are Enough? Building an Evidence Base for Nonprobability Sample Sizes", Field Methods, 2017. Monique Hennink and Bonnie Kaiser, "Sample Sizes for Saturation in Qualitative Research", Social Science and Medicine, 2022.
- Sandra Hart and Lowell Staveland, "Development of NASA-TLX (Task Load Index): Results of Empirical and Theoretical Research", in "Human Mental Workload", 1988. Marc Hassenzahl, Michael Burmester and Franz Koller, "AttrakDiff: Ein Fragebogen zur Messung wahrgenommener hedonischer und pragmatischer Qualität", Mensch und Computer, 2003. Bettina Laugwitz, Theo Held and Martin Schrepp, "Construction and Evaluation of a User Experience Questionnaire", USAB, 2008.
- Ramesh Johari, Pete Koomen, Leonid Pekelis and David Walsh, "Peeking at A/B Tests", KDD, 2017. E. Lee Jones, "The Courtesy Bias in South-East Asian Surveys", International Social Science Journal, 1963.
- Daniel Kahneman, Barbara Fredrickson, Charles Schreiber and Donald Redelmeier, "When More Pain Is Preferred to Less: Adding a Better End", Psychological Science, 1993. Noriaki Kano, Nobuhiko Seraku, Fumio Takahashi and Shinichi Tsuji, "Attractive Quality and Must-Be Quality", Journal of the Japanese Society for Quality Control, 1984.
- Jon Krosnick, "Response Strategies for Coping with the Cognitive Demands of Attitude Measures in Surveys", Applied Cognitive Psychology, 1991. Willem Saris, Melanie Revilla, Jon Krosnick and Eric Shaeffer, "Comparing Questions with Agree/Disagree Response Options to Questions with Item-Specific Response Options", Survey Research Methods, 2010.
- Richard Landis and Gary Koch, "The Measurement of Observer Agreement for Categorical Data", Biometrics, 1977. Michael Medlock, Dennis Wixon and colleagues, "Using the RITE Method to Improve Products", UPA, 2002. Robert Merton and Patricia Kendall, "The Focused Interview", American Journal of Sociology, 1946. David Millen, "Rapid Ethnography: Time Deepening Strategies for HCI Field Research", DIS, 2000.
- Jakob Nielsen and Rolf Molich, "Heuristic Evaluation of User Interfaces", CHI, 1990. Thomas Reynolds and Jonathan Gutman, "Laddering Theory, Method, Analysis, and Interpretation", Journal of Advertising Research, 1988. Kerry Rodden, Hilary Hutchinson and Xin Fu, "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications", CHI, 2010.
- Thomas Tullis and Larry Wood, "How Many Users Are Enough for a Card-Sorting Study?", UPA, 2004. Thomas Tullis and Jacqueline Stetson, "A Comparison of Questionnaires for Assessing Website Usability", UPA, 2004.
- Peter van Westendorp, "NSS Price Sensitivity Meter: A New Approach to Study Consumer Perception of Prices", ESOMAR Congress, 1976. Eric von Hippel, "Lead Users: A Source of Novel Product Concepts", Management Science, 1986.
- Sean Westwood, "The potential existential threat of large language models to online survey research", PNAS, 20 November 2025. https://doi.org/10.1073/pnas.2518075122
- Cathleen Wharton, John Rieman, Clayton Lewis and Peter Polson, "The Cognitive Walkthrough Method: A Practitioner's Guide", 1994. Rick Spencer, "The Streamlined Cognitive Walkthrough Method", CHI, 2000. Klaus-Peter Wiedmann, Nadine Hennigs and Astrid Siebels, "Value-Based Segmentation of Luxury Consumption Behavior", Psychology and Marketing, 2009.

Standards, law and codes
- Regulation (EU) 2016/679 (GDPR). https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Regulation (EU) 2024/1689 (AI Act), Article 50, applying from 2 August 2026. https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- Digital Personal Data Protection Act, 2023 (No. 22 of 2023), section 17(2)(b), and Digital Personal Data Protection Rules, 2025, Second Schedule, Ministry of Electronics and Information Technology. https://www.meity.gov.in/
- UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws ; DLA Piper, "Data Protection Laws of the World: United Arab Emirates" (updated January 2025). https://www.dlapiperdataprotection.com/?t=law&c=AE
- UAE Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes, Article 44. https://uaelegislation.gov.ae/
- DIFC Data Protection Law, DIFC Law No. 5 of 2020. https://www.difc.ae/ ; ADGM Data Protection Regulations 2021. https://www.adgm.com/ ; Saudi Personal Data Protection Law (Royal Decree M/19 of 2021), SDAIA. https://sdaia.gov.sa/
- Real Estate (Regulation and Development) Act, 2016 (India), India Code. https://www.indiacode.nic.in/
- Bureau of Indian Standards, IS 19000:2022, Online Consumer Reviews: Principles and Requirements for Their Collection, Moderation and Publication. https://www.bis.gov.in/
- ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics, 2016; ESOMAR and MRS mystery-shopping guidelines. https://esomar.org/ ; https://www.mrs.org.uk/
- NCCS (New Consumer Classification System), MRUC and MRSI, 2011.

Articles and product documentation
- Christian Rohrer, "When to Use Which User-Experience Research Methods", Nielsen Norman Group. https://www.nngroup.com/articles/which-ux-research-methods/
- Jakob Nielsen, "10 Usability Heuristics for User Interface Design" and "How to Conduct a Heuristic Evaluation", Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/ ; https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
- Jakob Nielsen, "Card Sorting: How Many Users to Test", Nielsen Norman Group. https://www.nngroup.com/articles/card-sorting-how-many-users-to-test/
- Kara Pernice and Jakob Nielsen, "How to Conduct Eyetracking Studies", Nielsen Norman Group report, 2009.
- Maria Rosala and Kate Moran, "Synthetic Users: If, When, and How to Use AI-Generated Research", Nielsen Norman Group, 2024. https://www.nngroup.com/articles/synthetic-users/
- Nielsen Norman Group, summary of quantitative sample sizes. https://www.nngroup.com/articles/summary-quant-sample-sizes/
- MeasuringU (Jeff Sauro): SUS https://measuringu.com/sus/ ; interpreting a SUS score and the curved grading scale https://measuringu.com/interpret-sus-score/ ; task completion https://measuringu.com/task-completion/ ; SEQ https://measuringu.com/seq10/ ; SUPR-Q https://measuringu.com/suprq/
- Evan Miller, "How Not To Run an A/B Test", 2010. https://www.evanmiller.org/how-not-to-run-an-ab-test.html
- Teresa Torres, "Opportunity Solution Trees", Product Talk. https://www.producttalk.org/opportunity-solution-trees/
- Design Council, "Framework for Innovation", 2019. https://www.designcouncil.org.uk/ ; Amplitude, "North Star Playbook" (John Cutler and colleagues), 2019. https://amplitude.com/
- Don Norman, "Design Thinking: A Useful Myth", Core77, 2010. Natasha Jen, "Design Thinking Is Bullshit", 99U Conference, 2017.
- Statcounter, mobile operating system market share, India and United Arab Emirates, September 2026. https://gs.statcounter.com/os-market-share/mobile/india ; https://gs.statcounter.com/os-market-share/mobile/united-arab-emirates
- Forbes Travel Guide, star-rating criteria (read October 2026). https://www.forbestravelguide.com/award-winners
- Advertising measurement: System1, Test Your Ad https://system1group.com/ ; Google Meridian https://developers.google.com/meridian ; Meta GeoLift https://facebookincubator.github.io/GeoLift/ ; Meta Robyn https://facebookexperimental.github.io/Robyn/
- Panels and tools (claims quoted as published, October 2026): https://www.prolific.com/pricing ; https://www.respondent.io/ ; https://www.usertesting.com/ ; https://www.lyssna.com/ ; https://maze.co/features/ai-moderator/ ; https://dovetail.com/ ; https://www.optimalworkshop.com/
