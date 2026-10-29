# UX writing and content design

What this file is for: the words inside products and interfaces (the system, the rules, the inventory, the voice) so that Claude can write, review and localise product copy for Mask360 clients to a professional standard. As of October 2026.

## Contents

1. [The discipline](#1-the-discipline)
2. [Voice and tone](#2-voice-and-tone)
3. [Principles with examples](#3-principles-with-examples)
4. [The microcopy inventory](#4-the-microcopy-inventory)
5. [Mechanics](#5-mechanics)
6. [Localisation and internationalisation](#6-localisation-and-internationalisation)
7. [Content strategy](#7-content-strategy)
8. [Accessibility of content](#8-accessibility-of-content)
9. [Naming](#9-naming)
10. [Writing for AI products](#10-writing-for-ai-products)
11. [Writing for luxury and hospitality products](#11-writing-for-luxury-and-hospitality-products)
12. [Process](#12-process)
13. [Reference tables](#13-reference-tables)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. The discipline

### 1.1 Four crafts that share a keyboard

Content design is the practice of working out what a person needs to know or do at a given moment and giving them that in the best form, which may be words, a table, a diagram, a number, or nothing. Sarah Winters (then Richards) defined it at GOV.UK around 2014 and in the book Content Design (2017): start from the user need, and decide whether words are even the answer. UX (user experience) writing is the narrower craft of writing the words that appear inside an interface: labels, buttons, errors, empty states, notifications. Copywriting is persuasive writing that makes a person want something, and lives in campaigns, captions and landing pages. Technical writing explains how a thing works, in documentation, help centres and API (application programming interface) references, and is measured by whether the reader can complete the procedure.

| Craft | Unit of work | Primary measure | Typical owner | Reason the distinction matters |
|---|---|---|---|---|
| Content design | A user need and the moment it occurs | Task completion, drop-off, support contacts | Content designer in the product team | Decides whether copy exists at all; removes screens as often as it writes them |
| UX writing | A string in a component | Comprehension, error rate, time on task | UX writer or content designer | The words are part of the component; they ship with the code |
| Copywriting | A headline, a caption, a page | Attention, recall, conversion | Copywriter in brand or performance | Persuasion is the job; restraint is the luxury version of persuasion |
| Technical writing | A procedure or reference entry | Procedure success, deflected tickets | Technical writer in docs or support | Completeness and accuracy beat brevity here |

### 1.2 Where it sits in a team

Product teams that treat words as part of the design (Shopify's Polaris content guidelines, Atlassian's design system content section, Microsoft's Writing Style Guide, Mailchimp's content style guide, Monzo's tone of voice, GOV.UK's content design manual) all share one structural choice: the writer is in the room when the flow is drawn, and the strings are reviewed in the same pull request as the component. Embedding the writer before the frames exist is the reason their products read as one voice. A writer brought in after the frames are built can only fit words into boxes that were sized for lorem ipsum.

Three team models recur. Centralised: one content design team serves every squad, which keeps the voice consistent and loses context on each flow. Embedded: a writer sits in each product squad, which keeps context and lets terminology drift between squads. Hub and spoke: a content lead owns the voice chart, the terminology table and the review standard, and embedded writers ship the strings; the house recommends it to clients because it keeps both the standard and the context. Two GOV.UK habits travel to any model: pair writing, in which the content designer writes with the subject expert in one session so that accuracy and plainness are settled together, and 2i (second pair of eyes), in which a second content designer reviews every piece before it publishes.

The agency version: Mask360 sells content design as named deliverables, in the order a product needs them, each estimated per flow or per 100 strings so that product copy is scoped and priced as its own line: voice chart (section 2.4), terminology table (5.9), string audit (7.2), copy deck (12.3), content model (7.3), localisation brief (6.9 and 6.10). Pricing method is in 24-business-of-creative-and-agency-operations.md, section 3.

### 1.3 How this file layers with the house skills

- The mask360-copywriting skill owns marketing copy: the 5-point storytelling structure (hook, pain point, micro-story, unexpected solution, fear of missing out (FOMO) plus one call to action (CTA)), video overlays, captions, cold outreach, pitch decks. Its register is persuasion with restraint.
- The design-taste skill owns the copy taste rules on every line; see design-taste, section 2 ("Copy that does not sell") and section 3 (the copy tells).
- This file owns the words a person reads while doing something: the booking form, the error, the confirmation, the settings page, the push notification. The register here is service.

The boundary in practice: in a hotel booking flow the marketing voice ends at the "Reserve" button. From that tap onward every word is product copy, and the measure changes from desire to completion. A line that persuades after that point is a defect, because it slows a person who has already decided.

## 2. Voice and tone

### 2.1 Voice is constant, tone moves

Voice is the stable personality of the product: what it sounds like on every screen. Tone is the adjustment of that voice to the person's state in the moment. Mailchimp's content style guide (published openly under a Creative Commons Attribution-NonCommercial 4.0 International licence) states the split in one line: "You have the same voice all the time, but your tone changes." Its four voice traits are plainspoken, genuine, translators and dry humour; its writing goals are empower, respect, educate, guide and speak truth; its principles ask that content be clear, useful, friendly and appropriate. The companion Voice and Tone site maps each touchpoint to what the person is feeling (a failed payment, a successful campaign send) and the tone that fits. The house borrows the method: list each touchpoint, name what the person feels there, then set the tone for it. Brand-level tone of voice frameworks and verbal identity are in 18-brand-strategy-and-identity-design.md, sections 1.4 and 4.10; this section is the product layer.

### 2.2 The Nielsen Norman four dimensions

Kate Moran's article "The Four Dimensions of Tone of Voice", written for the Nielsen Norman Group (NN/g) on 17 July 2016 and reviewed August 2023, reduced a long list of literary tone words to four scales, each of which a piece of copy can sit anywhere along:

| Dimension | One end | Other end | Where Mask360 luxury clients sit | Reason |
|---|---|---|---|---|
| Funny vs serious | Humour | Gravity | Serious, with wit allowed once per flow | A joke in a payment error reads as mockery; a single knowing line elsewhere proves a human wrote it |
| Formal vs casual | Formal | Casual | Formal leaning, with contractions allowed ("you're", "we'll") | Full formality reads as a bank; contractions keep it spoken |
| Respectful vs irreverent | Respectful | Irreverent | Respectful, always | The person is a guest or client; irreverence is for consumer apps that sell cheapness as charm |
| Enthusiastic vs matter-of-fact | Enthusiasm | Flat statement | Matter-of-fact | Enthusiasm in product copy is the exclamation mark problem in another form; confidence is quiet |

NN/g's companion study (Moran, "The Impact of Tone of Voice on Users' Brand Perception", 7 August 2016, reviewed January 2024) found that tone alone changed ratings of friendliness, trustworthiness and desirability (willingness to recommend). Trustworthiness explained about 52 per cent of the variance in desirability, and friendliness added about 8 per cent more when entered after it; casual, conversational versions generally won, a playful insurance page read as friendlier and less trustworthy, and the humorous version of a home-security site scored higher on all three scales, though some qualitative participants found the humour corny, so NN/g calls humour risky. The position is contested for luxury: the NN/g data favour casual, and the house leans formal with contractions because trust is the variable that predicts desirability and its audiences pay for assurance. It tests tone with the client's own guests (section 12.6) before fixing the chart.

### 2.3 Tone by moment

| Moment | What the person feels | Tone setting | Example (hospitality client) | Avoid |
|---|---|---|---|---|
| Onboarding | Curious, slightly wary | Calm, brief, one benefit per screen | "Save your preferences once. Every stay starts from them." | Three screens of welcome |
| Error | Blocked, maybe at fault | Plain, specific, blame-free | "That card was declined. Try another card or pay on arrival." | "Oops!", "Something went wrong" |
| Success | Relieved | Short confirmation, next step | "Reserved. We've sent the details to a.mehta@example.com." | Confetti, "Woohoo!" |
| Empty | Unsure what the screen is for | Explain, then one action | "No stays yet. Your next reservation will appear here." | A sad illustration with "Nothing to see" |
| Loading | Waiting | Honest about duration | "Checking availability for 14 to 16 March" | "Hang tight!" |
| Legal and consent | Suspicious | Plain, complete, no persuasion | "We'll use your number to send booking updates on WhatsApp. You can turn this off in Settings." | Pre-ticked boxes, "By continuing you agree" buried under the fold |
| Payment | Alert, cautious | Precise amounts, precise timing | "You'll be charged AED 2,310 now. Cancel free until 12 March, 18:00 Dubai time." | "Secure checkout" badges doing the work of a sentence |
| Destructive action | Hesitant | Name the consequence | "Cancel this reservation? The non-refundable amount of ₹18,000 will not be returned." | "Are you sure?" |
| Waiting on a human | Impatient | Give a time | "A concierge will reply within 10 minutes." | "We'll get back to you soon" |
| Brand-caused failure | Let down, suspicious | Own it once; give the effect and the remedy | "Card payments are down at our end. Your dates are held for 30 minutes, or you can pay at the hotel." | Repeated apologies, "technical difficulties" |
| Security alert | Alarmed | No warmth, verbs first, the time, two routes, no links in SMS | "We blocked a sign-in from a new device at 03:12. If this was you, approve it in the app. If not, change your password now." | "Unusual activity detected" with a link to tap |
| Policy or price change | Wary of a trick | The change, the date, the effect on this person | "From 1 April, free cancellation on the Flexible rate moves from 48 to 72 hours before arrival. Your stay on 14 March keeps the old terms." | "We're updating our policies to serve you better" |
| Suspension or overdue payment | Embarrassed, defensive | Facts, consequence, date, route; no threats | "Your membership payment of ₹25,000 is 10 days overdue. Benefits pause on 30 April. Update your card to keep them." | "Final warning", capitals, legal threats |
| Bereavement, illness, a cancelled wedding | Grieving, exhausted | Plain human language, no brand flourish, the waiver route before any request for proof where policy allows | "We're sorry for your loss. We've cancelled the reservation and will return the ₹40,000 deposit. You don't need to send anything." | A certificate requested in the first message |
| Data breach | Anxious, angry | The content rule 7 of India's Digital Personal Data Protection (DPDP) Rules 2025 asks for (section 4.19), in the order the person needs it | "On 2 May someone accessed guest emails and phone numbers. Card details were not affected. Ignore any message asking for a code. Questions: privacy@example.com" | Minimising ("a small number of guests"), legal register |

### 2.4 Voice charts

A voice chart is a one-page document with three to five traits, each described, each with a sample line and a line that overshoots. It replaces adjectives ("warm", "premium") with evidence. Format:

| Trait | Means | Sounds like | Overshoot (too far) |
|---|---|---|---|
| Assured | States things once, without hedging or hype | "Your table is held until 21:15." | "Rest assured, your exclusive table is absolutely confirmed!" |
| Attentive | Anticipates the next question | "Parking is complimentary. The entrance is on Al Wasl Road." | Listing every hotel facility on a confirmation |
| Spare | One idea per element, no adjectives doing an image's job | "Sea view. King bed. 48 sq m." | "Breathtaking sea views from your spacious luxury king suite" |
| Human | Admits limits plainly | "We can't change the check-in date online. Call the front desk and they'll do it." | "Unfortunately our system is unable to process this request at this time" |

The house format for product work is Torrey Podmajersky's voice chart (Strategic Writing for UX, O'Reilly, 2019, in its chapter on voice): the columns are the product's three or four voice principles, and the rows turn each principle into decisions a writer can check line by line. The sample-line chart above stays for brand presentations.

| Row | Assured | Attentive | Spare |
|---|---|---|---|
| Concepts (what the product talks about) | Confirmed facts: holds, times, amounts | The guest's next need: transfer, parking, dress code | One concept per element |
| Vocabulary (words used and avoided) | "Held", "confirmed", "charged"; avoid "rest assured", "guaranteed" | The guest's words ("transfer", "table"); avoid internal terms ("folio", "rate code") | Nouns and verbs; avoid adjectives that do an image's job |
| Verbosity | One sentence per fact | One fact plus the answer to the next question | The budgets in section 5.10, never exceeded |
| Grammar | Declaratives, present or future tense, "we" for commitments | Second person; questions only where a reply is wanted | Fragments allowed in summaries and labels |
| Punctuation | Full stops; no exclamation marks | Question marks only on real questions | Colons over parentheses |
| Capitalisation | Sentence case | Sentence case; proper nouns kept | Sentence case |

Per-locale rows go under the English rows, because a chart written only in English leaves translators guessing at the voice:

| Row | Hindi | Arabic |
|---|---|---|
| Register | Everyday Hindustani (section 6.10) | Simplified Modern Standard Arabic; Gulf dialect only on marketing surfaces |
| Address | आप, always | The masdar (verbal noun) on buttons; second person where gender is known or neutral |
| Gender handling | Section 5.7 techniques; a stored gender variable for named greetings | Same, with feminine forms reviewed by a native woman reader |
| Loanwords | English technology words in Devanagari (बुकिंग, पेमेंट) | Established Arabic terms (حجز, دفع); brand names stay Latin |
| Digits and dates | Western digits, Indian grouping | Per client: Western or Eastern Arabic-Indic, set in the locale tag (section 6.5) |

### 2.5 The luxury register

- Restraint: fewer words than feels safe. The Aman and The Row reading of copy (see design-taste, section 1, Restraint) applies to product strings as much as to campaigns. A luxury booking engine says "Reserve", a budget one says "Book now and save!".
- Second person: "you" and "your", always. Never "the user", never "customers". In hospitality the person is a guest; in jewellery and real estate a client; in beauty simply "you".
- Sentence case everywhere (section 5.1).
- No exclamation marks, no superlatives, no "please" on routine instructions. "Please" is reserved for asking the person to bear a cost: wait, re-enter, call.
- "We" is the brand speaking and is used sparingly, for commitments ("We'll confirm within an hour"). The system itself speaks in the imperative ("Choose dates") and in flat statements ("Reserved").
- Absolute precision on numbers, dates, times and money. Luxury is the absence of surprise; vagueness ("soon", "shortly", "some fees may apply") is a cheap tell in a product.

## 3. Principles with examples

### 3.1 Clear, concise, useful

The triad comes from Google's UX writing talk at I/O 2017 (Maggie Stanphill and colleagues) and survives because the order is the test order. Clear first: can a person who has never seen this product understand it on one read? Concise second: nothing removable left. Useful last: does it move the person towards what they came to do? Cutting words before the meaning is clear produces cryptic copy; the order protects against that.

| Before | After | What changed |
|---|---|---|
| "An error occurred while attempting to process your request. Please try again later." | "We couldn't save your changes. Try again." | Says what failed, in the brand's voice, with the next step |
| "Would you like to enable notifications so that we can keep you up to date?" | "Get a message when your table is ready?" | Names the one benefit, drops the request framing |
| "Your session has expired due to inactivity. For security reasons you have been logged out." | "You've been signed out after 15 minutes of inactivity. Sign in again." | Specific number, next action |

### 3.2 Front loading

Put the meaningful word first, because people scan the first one or two words of a line, a link or a list item and decide whether to read on. Jakob Nielsen's 1998 "Microcontent" guidance and the 2006 eyetracking study that named the F-pattern (people read two horizontal bands at the top of a page, then scan down the left edge; updated in 2017 as still valid) both show reading concentrated at line starts. "Cancellation policy" beats "Information about our cancellation policy". In a settings list, "Notifications", "Payment methods", "Addresses" beat "Manage your notifications", "View payment methods", "Edit addresses", because the verbs are noise and the nouns are what the eye is hunting for.

### 3.3 Plain language and reading level

Plain language is writing a person can understand on the first read and act on. Reading level is a proxy for that, measured in English by formulas such as Flesch Reading Ease (FRE = 206.835 minus 1.015 times average sentence length minus 84.6 times average syllables per word; higher is easier) and the Flesch-Kincaid grade (a US school grade). Targets:

- GOV.UK content guidance has long advised writing for a reading age of about 9, the figure the Government Digital Service cited for average UK literacy; the current guidance pages (as of October 2026) stress plain English and short sentences and no longer quote the number, and GOV.UK style keeps sentences to 25 words or fewer.
- Product UI (user interface) copy in English: aim for FRE 60 or higher and Flesch-Kincaid grade 8 or lower; legal and consent copy can go to grade 10 if the structure (headings, short paragraphs) compensates. Hemingway Editor and Readable both report these.
- The formulas measure English syllables and sentence length and say nothing useful about Hindi or Arabic. For those, measure average sentence length in words (keep under 15), the proportion of Sanskritised or Modern Standard Arabic vocabulary versus spoken vocabulary, and test comprehension with people (section 12.6).
- The Web Content Accessibility Guidelines (WCAG) 2.2, success criterion 3.1.5 Reading Level (AAA), ask for a version readable by someone with lower secondary education where the main text goes beyond that level; the house treats it as the target for consent and payment copy, where misunderstanding costs money.
- ISO 24495-1:2023 (Plain language, Part 1: Governing principles and guidelines, June 2023) defines plain language by its outcome, through four principles: readers get what they need (relevant), find it easily (findable), understand it (understandable) and can use it (usable). It is the citable standard for consent and policy work in India and the UAE, where no local plain-language law exists.
- The formulas are contested. They count sentence and word length and ignore order, layout, familiarity and context; Janice (Ginny) Redish argued in the ACM Journal of Computer Documentation (24(3), 2000) that they can flag a problem and can never certify a text. House position: formulas run as a lint, and comprehension tests (section 12.6) are the proof.

### 3.4 Scannability

Nielsen's 2008 article "How Little Do Users Read?", built on Weinreich, Obendorf, Herder and Mayer's study of 25 users and about 59,000 page views, concluded (5 May 2008) that on an average page visit people read about 20 per cent of the words and have time to read at most 28 per cent; only on pages of 111 words or fewer do they read about half, and the share falls steeply as word count rises. Structure accordingly: one idea per paragraph, headings that work as a summary when read alone, lists for parallel items (three or more), tables for anything compared on two or more attributes, bold for the one phrase the eye must catch, never for emphasis sprinkled through a paragraph.

### 3.5 Consistency

One concept, one term, everywhere: "reservation" or "booking", "sign in" or "log in", "cancel" or "remove", never both. A terminology table (section 5.9) is the mechanism. The reason is cognitive: every synonym forces the person to decide whether two words mean two things. Shopify's Polaris guidance and the Microsoft Writing Style Guide both keep term lists for this reason.

### 3.6 Action-oriented

Lead with the verb the person performs. "Choose a date" beats "Date selection". "Add card" beats "Card details". Buttons are verbs (section 4.1). Passive voice hides who acts: "Your request will be processed" versus "We'll confirm within an hour". The Microsoft Writing Style Guide's top tips ask for active voice for this reason, and Shopify Polaris calls the pattern actionable language.

### 3.7 One idea per element

A button does one thing and says one thing. A dialogue has one question. A toast reports one event. A notification carries one reason to open the app. When a string holds two ideas, split the element; when it cannot be split, cut the second idea. It is the one-primary-action rule of section 4.1 applied to every element: two ideas make the person rank them, and each ranking is a moment to drop out.

### 3.8 Writing for translation

Translators see strings out of context, often alphabetised by key. Write so that each string survives that: full sentences with named placeholders ("{guestName}, your table is ready"), no idioms, no puns, no sentence fragments stitched together in code, subject-verb-object order, no dependence on English word order, and a context note on every string (where it appears, what the placeholder holds, the character budget). Section 6 covers the mechanics.

Before strings go to translation the house runs the rules of ASD-STE100 Simplified Technical English (the aerospace controlled-language specification, maintained by the ASD STE Maintenance Group) as a checklist: one word has one meaning and one part of speech; procedural sentences run to 20 words at most and descriptive ones to 25; noun clusters stop at three words ("guest profile payment method screen" fails); -ing forms that read as noun or verb are rewritten ("Loading options" can mean two things); every "it" and "this" has a clear antecedent; "must" carries obligation and "can" ability, and "should" never states a rule; a phrasal verb stays only when it is the person's own word, with a note for the translator. The house does not adopt STE's restricted dictionary in UI, where it reads like a maintenance manual.

## 4. The microcopy inventory

Microcopy is the set of small strings that carry a person through an interface: labels, buttons, hints, errors, states. Each element below has a rule, the reason, and examples. "Bad" examples are real patterns seen in Indian and Gulf hospitality, retail and property products.

### 4.1 Buttons and calls to action

Rule: verb plus object, in sentence case, describing what happens next. One to three words. One primary button per view. The label must make sense if it were the only text on screen.

Reason: the button is the sentence the person completes. "Submit" describes the form's mechanism, and "Learn more" describes nothing. Both force the person to look elsewhere to find out what they are agreeing to. Shopify Polaris and Microsoft's style guide both ask for specific verbs for the same reason.

| Good | Bad | Why |
|---|---|---|
| Reserve | Submit | Names the outcome |
| Add to bag | Add | Object makes it concrete; "bag" over "cart" for fashion and jewellery clients in the UK and Gulf register |
| Pay AED 2,310 | Confirm | Carries the amount so the person never pays blind |
| See cancellation policy | Learn more | Front-loaded, specific |
| Save changes | OK | A dialogue's primary action states the action |
| Keep editing / Discard changes | Cancel / Yes | Paired buttons each name their outcome; "Yes" and "No" fail because the question above can be read two ways |
| Call the concierge | Contact us | The channel and the person |

Secondary buttons: "Cancel" is acceptable only when it means "close this without doing anything" and the primary action is a clear verb. Tertiary links: the same verb rule applies ("Edit guests", "Change dates").

Common buttons in Hindi and Arabic, as starting candidates for the terminology table (5.9): each Hindi pair is tested with five native readers and the decision recorded with its reason. Arabic buttons use the masdar (verbal noun) so the label carries no gender (section 5.7); the imperative احجز (masculine) or احجزي (feminine) forces a choice.

| English | Hindi, everyday (house default, 6.10) | Hindi, shuddh (Sanskritised; heritage and government-adjacent clients) | Arabic (simplified Modern Standard Arabic, MSA) |
|---|---|---|---|
| Save | सेव करें | सहेजें | حفظ |
| Cancel | कैंसल करें | रद्द करें | إلغاء |
| Continue | आगे बढ़ें | जारी रखें | متابعة |
| Reserve | बुक करें | आरक्षित करें | تأكيد الحجز |
| Sign in | साइन इन करें | प्रवेश करें | تسجيل الدخول |
| Remove | हटाएँ | हटाएँ | إزالة |

### 4.2 Labels

Rule: a noun or noun phrase, sentence case, no colon, no trailing punctuation, visible at all times above or beside the field. Match the label to the data asked for and the term used on the receipt or confirmation.

Reason: the label is the field's name in the person's memory and in the screen reader's announcement; a label that vanishes or changes breaks both.

| Good | Bad | Why |
|---|---|---|
| Mobile number | Phone no.: | No abbreviation, no colon |
| Name as on passport | Full name | Hospitality and travel need the legal form; say so |
| Card number | Enter your credit or debit card number here | The label is a name; instructions go in helper text |
| PAN (for invoices above ₹2 lakh) | PAN* | The condition replaces the asterisk; the person knows why they are asked (PAN: Permanent Account Number, India's income-tax identifier) |
| Emirates ID | ID | Specific document, in its official name |

#### Optional fields, names, addresses and phone numbers

- Optional and required: mark optional fields with "(optional)" in the label and leave required fields unmarked, as the GOV.UK Design System's question pages do; an asterisk legend is one more thing to decode, and screen readers announce "star". Better still, remove the optional field, which also serves the data minimisation the DPDP Act asks for (section 4.19).
- Names: one "Full name" field by default (W3C Internationalization, Richard Ishida, "Personal names around the world"). Many South Indians use one given name with an initial ("R. Lakshmi"), and Arabic names carry nasab (lineage) and family elements ("Fatima bint Khalid Al Mansoori"); a forced "Last name" makes people type a dot, repeat the first name or enter a father's name, which then fails the passport match at check-in. Where a property management system or an airline needs split names, label them "Given names" and "Family name (if any)" with the helper "As on passport", and ask "What should we call you?" separately for greetings.
- Indian addresses: flat or house number, building, street, area, "Landmark (optional)", city, and a 6-digit PIN code (postal index number) that autofills city and state. UAE addresses: villa or apartment, building, street, community, emirate, "Makani number (optional)" in Dubai, and no postcode field, because the UAE has none.
- Phone: a country selector defaulting to the market (+91, +971, +966); accept spaces and a leading zero; store in E.164 (the ITU international format, "+971501234567"); label by use ("Mobile number for WhatsApp updates").

### 4.3 Placeholders

Rule: never use a placeholder as the label. Use placeholders only for a format example ("DD/MM/YYYY", "+971 50 123 4567"), in a lighter colour, and expect them to vanish on typing.

Reason: placeholders disappear when the person starts typing, fail colour contrast more often than labels, and are skipped by some screen readers. NN/g's "Placeholders in Form Fields Are Harmful" (2014) and the GOV.UK Design System both say the same.

### 4.4 Helper text

Rule: one short line under or beside the field, present before the person types, stating the constraint or why the data is needed. Full sentence with a full stop if it is a sentence; fragment with no full stop if it is a format. Examples: "We'll only use this for booking updates." "At least 15 characters. A phrase is easiest to remember." (the password rule in section 4.25) "As it appears on your Emirates ID."

### 4.5 Validation and error messages

Rule: say what happened, why (when the why helps), and what to do, in that order, next to the field, in the brand's voice, with no blame and no bare error codes. Validate inline on blur (when the person leaves the field), never on every keystroke, and never before they have finished.

Reason: Rachel Krause's "10 Design Guidelines for Reporting Errors in Forms" (NN/g, 2019, reviewed December 2024) covers placement, timing, colour, icons, and the warning against validation summaries as the only indicator. WCAG 2.2 success criteria 3.3.1 Error Identification (A), 3.3.3 Error Suggestion (AA) and 3.3.4 Error Prevention for legal and financial data (AA) make the same demands binding. Error codes exist for support staff; if one must appear, it follows the plain sentence in smaller type ("Reference: PAY-4021"). The interaction side (timing, focus, inline and summary) is in 09-interaction-design-and-ux-patterns.md, section 12.4.

| Good | Bad | Why |
|---|---|---|
| "Enter the expiry date as MM/YY." | "Invalid input" | Says what to do |
| "That email doesn't look right. Check for a missing @ or dot." | "Email is invalid!" | Specific, no exclamation mark |
| "This card was declined by your bank. Try another card, or pay at the hotel." | "Transaction failed. Error 05." | Names the actor (the bank), gives two routes |
| "Choose a check-out date after 14 March." | "Date range invalid" | Tells the person the exact constraint |
| "We couldn't load your reservations. Check your connection and try again." | "Something went wrong" | Cause, action |
| "This username is taken. Try a.mehta2 or add your city." | "Username unavailable" | Offers alternatives |

Never: "Oops", "Whoops", "Uh oh", "Sorry!" (a sorry can be a full sentence once, for a failure that is the brand's fault: "Sorry, our payment provider is down. We'll hold your dates for 30 minutes."), "You entered", "You failed to", "illegal", "fatal", "forbidden".

#### Error summaries, message formulas and system faults

- When a form of more than about three fields fails on submit, show an error summary at the top, as the GOV.UK Design System's error summary component does: the heading "There is a problem", one line per error that links to its field, focus moved to the summary, and the same wording as the inline message, which stays in place. Prefix the page title with "Error: " so screen-reader users hear the failure first (WCAG 2.4.2, section 8.7).
- Never clear what the person typed. Where the payment provider clears card fields, say so: "For your security we've cleared the card number. Enter it again."
- Formulas, one per failure type, after the GOV.UK error message component: missing ("Enter your mobile number"), wrong format ("Enter a mobile number in the correct format, like 50 123 4567"), too long ("Name must be 70 characters or fewer"), out of range ("Check-out must be after check-in").
- System faults state the charge status and a human route: "We couldn't complete the payment because of a problem on our side. You have not been charged. Try again, or call +971 4 000 0000 (reference PAY-4021)."

### 4.6 Confirmations and destructive actions

Rule: a confirmation dialogue names the object, the consequence and the irreversibility, and its buttons name the outcomes. Use a dialogue only when the action cannot be undone; otherwise perform the action and offer "Undo" in a toast for 5 to 10 seconds.

Reason: "Are you sure?" transfers the thinking to the person. Undo is kinder and faster than a dialogue for anything reversible (Gmail's send undo is the canonical example). Every Undo toast also needs a persistent route, such as Undo in the item's menu or a "Recently removed" list, because a screen-reader user may not reach a toast before it goes (WCAG 2.2.1 Timing Adjustable, section 8.7).

| Good | Bad |
|---|---|
| Title: "Cancel this reservation?" Body: "The non-refundable amount of ₹18,000 will not be returned." Buttons: "Keep reservation" / "Cancel reservation" | Title: "Warning" Body: "Are you sure you want to proceed?" Buttons: "Yes" / "No" |
| Title: "Delete your account?" Body: "Your stays, invoices, and saved cards will be removed in 30 days. You can sign in before then to restore them." Buttons: "Keep account" / "Delete account" | "This action cannot be undone. Continue?" |

Confirmshaming, the deceptive pattern (an interface design that tricks or pressures a person into an action they did not intend) in which the decline option mocks the person ("No thanks, I don't like saving money"), is banned. India's Guidelines for Prevention and Regulation of Dark Patterns (Central Consumer Protection Authority, 30 November 2023) list confirmshaming, false urgency, basket sneaking, forced action and drip pricing among 13 named patterns; see 09-interaction-design-and-ux-patterns.md, section 13, for the legal detail.

### 4.7 Empty states

Three kinds, three jobs:

| Kind | Job | Example |
|---|---|---|
| First use | Explain what will appear here and offer the first action | "No saved addresses. Add one to check out faster next time." Button: "Add address" |
| No results | Say what was searched, suggest a widening | "No tables for 4 at 20:00 on Friday. Try 19:30 or 21:00, or a table for 2 and 2." |
| Error | Say what failed and how to retry | "We couldn't load your orders. Try again." Button: "Retry" |

Rule: a sentence, an action, no illustration unless the brand's illustration system is already on the page. "Nothing here yet" with a sad cloud is a cheap tell.

### 4.8 Success and done states

Rule: confirm the thing in one word or one short sentence, show the key facts (what, when, reference), and give the next step. No celebration graphics for routine actions; a quiet confirmation is the luxury move. Example: "Reserved. Villa 3, 14 to 16 March. Confirmation 8H2K4. We've sent this to your email and WhatsApp." Button: "Add to calendar".

### 4.9 Loading and progress copy

Rule: for under about 1 second, nothing; 1 to 10 seconds, a spinner or skeleton screen (a grey placeholder in the shape of the content to come) with no words; over 10 seconds, a sentence stating what is happening and a progress indicator. Nielsen's three response-time limits (0.1 second, 1 second, 10 seconds, from Usability Engineering, 1993) set these thresholds. "Checking availability" beats "Loading..." because it says what the wait buys. Never "Hang tight", "Hold on", "Almost there" unless it is true.

### 4.10 Tooltips

Rule: a tooltip explains an unlabelled control or adds a secondary fact; it never holds information the person needs to complete the task, because touch devices have no hover and screen readers may not reach it. One sentence or fragment, no full stop on a fragment, sentence case.

### 4.11 Toasts, snackbars and notifications in-app

A toast (Material calls it a snackbar) is a brief in-app message about something that just happened. Rule: one line, past tense, optional single-word action ("Undo", "View"), dismisses itself after 4 to 10 seconds, never used for errors that need action, never stacked. Examples: "Address saved." "Removed from bag. Undo." "Reservation updated." Toasts are announced to screen readers as status messages without moving focus (section 8.7), so each must make sense heard alone.

### 4.12 Push notifications

Rule: title under about 40 characters, body under about 100, the reason to open in the first five words, one notification per event, sent in the person's local time within quiet hours set by the brand (the house default is 09:00 to 21:00 local). The hard limits are payload bytes, the visible limits are device and launcher dependent (section 13.1).

| Good | Bad |
|---|---|
| Title: "Table ready" Body: "Your table at Example Haveli is ready. Head to the host stand." | Title: "Hey Arjun!!" Body: "Don't miss out on our exclusive dining experience tonight" |
| Title: "Check-in open" Body: "Villa 3 is ready from 14:00. Tap to check in." | "You have a new notification" |

Marketing pushes follow the mask360-copywriting skill; transactional pushes follow this section. Mixing them in one channel trains people to switch the channel off. The interaction rules for notifications and the inbox are in 09-interaction-design-and-ux-patterns.md, section 8.2.

#### Interruption levels and notification channels

iOS 15 introduced four interruption levels: passive (delivered silently), active (the default), time-sensitive (breaks through Focus modes) and critical (sounds even on mute, by Apple entitlement only, for health and safety). Time-sensitive is reserved for moments like "Your car is at the porch"; marking marketing as time-sensitive is an App Review risk and teaches guests to turn Focus breakthrough off. Android 8.0 introduced notification channels, whose names and descriptions appear in system Settings and are therefore copy: "Booking updates", "Messages from the concierge", "Offers and news". Separate channels let a guest switch off offers without losing check-in messages; keep names to two or three words because Settings truncates long ones.

#### SMS in India and the UAE

- India: every commercial SMS, including OTPs (one-time passwords) and booking updates, goes out from a registered header (the sender ID) using a content template registered on a DLT (distributed ledger technology) platform run by the operators, under the Telecom Regulatory Authority of India's (TRAI) Telecom Commercial Communications Customer Preference Regulations 2018 (TCCCPR). Variable parts are marked {#var#} and text outside the registered template is blocked, so a copy change is a re-registration with lead time; write the template once, in the voice chart, with every variable named in the copy deck.
- Since 1 October 2024 any URL, APK (Android app package), OTT (over-the-top app) link or call-back number in an SMS must be whitelisted on DLT or the message is dropped, so the copy deck lists every link domain.
- The TCCCPR (Second Amendment) Regulations 2025, notified 12 February 2025, have operators suffix each header with its class: "-P" promotional, "-S" service, "-T" transactional, "-G" government. The amendment's text describes the header as an 11-character alphanumeric string "or as directed by the Authority", and DLT platforms register 6-character headers in practice, so the brand must be recognisable in 6 characters.
- Write "INR" or "Rs" in English SMS, because ₹ forces UCS-2 encoding and cuts a message from 160 characters to 70 (section 13.1).
- UAE: alphanumeric sender IDs run to 11 characters; promotional SMS carries the "AD-" prefix and an opt-out, and the Telecommunications and Digital Government Regulatory Authority (TDRA) limits the hours in which promotional SMS may be sent. Take the current window from the operator (du or e&) before scheduling; the October 2026 text was not confirmed for this file.
- Copy order in both markets: brand, fact, code or link, nothing else. "Example Haveli: Villa 3 is ready from 14:00. Check in at example.com/c/8H2K4"

### 4.13 Permission requests and priming

A permission request is the operating system (OS) dialogue (location, camera, notifications, contacts, tracking) whose wording the app cannot change beyond the purpose string, the sentence Apple requires in the app's Info.plist (NSCameraUsageDescription and its siblings) and shows inside the system dialogue. Priming is the app's own screen shown before the OS dialogue, explaining the benefit so that the person says yes once. Apple's App Review Guideline 5.1.1 requires the purpose string to explain clearly and specifically why the data is needed; vague strings ("This app needs camera access") are rejected. Ask only when the feature is about to be used, because iOS shows the system dialogue once and a refusal sends the person to Settings. The pattern side is in 09-interaction-design-and-ux-patterns.md, section 5.3.

- iOS priming copy, from Apple's Human Interface Guidelines (HIG; Privacy, "Pre-alert screens", as of October 2026): one benefit in the person's terms and a single button titled "Continue" or "Next" that opens the system alert. Apple asks for no "Allow" on the custom button, because it borrows the alert's meaning, and no cancel or close control; it lists designs that cause rejection: incentives, a screen that looks like a request, an image of the alert, and annotation that draws the eye to Allow. Example: "Get a message when your table is ready." Button: "Continue".
- App Tracking Transparency (ATT, iOS 14.5 and later) needs the system prompt and an NSUserTrackingUsageDescription string that names the use plainly: "Your data is used to show you Example Haveli offers on other apps and sites." Opt-in rates are low and vary by category; take the current figure from AppsFlyer or Adjust before planning iOS retargeting.
- Android: since Android 13 (API level 33, 2022) notifications need the POST_NOTIFICATIONS runtime permission, so priming applies on Android too. Android's guidance asks for a "cancel" or "no thanks" option on the rationale screen, the opposite of Apple's rule, so the two platforms get different priming screens from one copy deck. After a first refusal the app may show a rationale (shouldShowRequestPermissionRationale); after two refusals the system stops showing the dialogue, so the rationale is written once and carefully.
- Location: ask for "While using the app" and approximate location unless the feature needs precision (an in-resort buggy pickup does, a city guide does not), and say why in the string: "Your location lets the buggy find you on the estate."

### 4.14 Onboarding screens

Rule: at most three screens, each one sentence of fact and one of benefit, each skippable, each ending on the action that proves the benefit. A luxury product onboards by doing: the first screen of a hotel app is the next stay, or the booking flow, and the explanation is absent. Apple's HIG Onboarding page asks for a brief experience that teaches through interaction; the three-screen cap is a house figure. The pattern detail is in 09-interaction-design-and-ux-patterns.md, section 5.1.

### 4.15 Settings labels

Rule: nouns for groups ("Notifications", "Payment methods"), verb phrases for toggles stated in the on condition ("Send booking updates on WhatsApp"), no "Enable" or "Disable" in the label because the switch shows the state. Every toggle gets one line of helper text saying what changes. Group by what the person is trying to do, never by the engineering module. Apple's HIG (Toggles) and Material 3's switch guidance both have the label name the setting and the control show the state, which is why "Enable" is redundant.

### 4.16 Navigation labels

Rule: one or two words, nouns, the person's words from research ("Stays", "Dining", "Spa", "Account"), consistent between the tab bar, the page title and the breadcrumb, with three to five destinations in a bottom bar (Material 3 navigation bar). Never a brand-coined name for a standard destination ("Discover" for search, "Hub" for account).

The research methods and their numbers are in 08-ux-research-and-strategy.md, sections 5.1 to 5.3. An open card sort (participants group and name the content) produces the vocabulary, and about 15 participants give groupings that correlate at about 0.90 with a large sample (Tullis and Wood, 2004). A tree test (people find items in a text-only hierarchy, in Optimal Workshop's Treejack, Maze or UXtweak) tests the labels by task success and directness. A first-click test rests on Bob Bailey and Cari Wolfson's 2009 finding that people whose first click was right finished the task about 87 per cent of the time, against about 46 per cent when it was wrong. Run tree tests separately in Hindi and Arabic, because label words do not map one to one.

### 4.17 Page titles and headings

Rule: the page title states what the page is in the person's terms and matches the navigation label that led there. Headings summarise the section beneath them so that a person reading only the headings gets the structure (WCAG 2.2 2.4.6 Headings and Labels, AA). Sentence case, no full stop, no questions as headings unless the page answers them, one h1 per page.

### 4.18 Modals and dialogues

Rule: a modal interrupts, so it must be worth the interruption: a decision the flow cannot continue without, or a destructive confirmation. Title asks or states the one thing ("Cancel this reservation?"), body gives the consequence in one or two sentences, buttons name outcomes, the close control is present. No marketing modals on entry; no modal that can be replaced by inline content.

### 4.19 Legal and consent copy

Rule: plain language, specific purposes, one consent per purpose, no pre-ticked boxes, a visible way to withdraw, and the option to read the notice in the person's language. India's Digital Personal Data Protection Act 2023 (DPDP Act), section 5, requires notice in clear and plain language stating the data, the purpose and how to exercise rights, and section 5(3) gives the person the option to access it in English or any of the 22 languages in the Eighth Schedule of the Constitution; the DPDP Rules 2025 were notified on 13 November 2025 with the notice and consent provisions commencing 18 months later, on 13 May 2027. The UAE's Federal Decree-Law No. 45 of 2021 on personal data protection (the PDPL) requires consent to be clear, specific and withdrawable. Write the notice as the product would speak: "We'll keep your passport details for 30 days after check-out, as UAE hotel regulations require, then delete them."

- Cookies for EU and UK guests: the European Data Protection Board's (EDPB) Cookie Banner Taskforce report (17 January 2023) records that most EU authorities treat a banner with an accept button and no reject option on the same layer as an infringement. The house puts "Accept all" and "Reject all" side by side at equal weight on the first layer, with "Manage choices" and each purpose named in plain words ("Measure how the site is used").
- UAE free zones: clients in the Dubai International Financial Centre (DIFC) fall under DIFC Data Protection Law No. 5 of 2020, and clients in Abu Dhabi Global Market (ADGM) under the ADGM Data Protection Regulations 2021; the federal PDPL excludes free zones that have their own data protection law, so the notice names the law that applies.
- Saudi Arabia: the Personal Data Protection Law, supervised by the Saudi Data and AI Authority (SDAIA), has been in force since 14 September 2023 with enforcement from 14 September 2024; consent and privacy notices are given in Arabic.
- Breach notices: DPDP Rules 2025, rule 7 (commencing 13 May 2027 with the other operational rules), requires intimation to each affected person without delay, in concise, clear and plain language: what happened and when, the likely consequences, what the business is doing, what the person can do, and a contact. Draft the notice before any breach; the tone is in section 2.3.
- Children: DPDP Act section 9 requires verifiable parental consent for anyone under 18, which reaches family booking flows that collect a child's name, age or passport.
- Marketing consent: one unticked checkbox per channel ("Send me offers by email", "Send me offers on WhatsApp"), never bundled with booking terms; a WhatsApp opt-in names both the business and WhatsApp.

### 4.20 404 and offline

404: say the page is missing, give the three most likely destinations and a search. No jokes for a luxury client; one line of wit is acceptable for a consumer brand whose voice chart allows it. "We can't find that page. It may have moved. Try Stays, Dining, or search." Offline: state it and what still works. "You're offline. Your saved reservations are still here. We'll sync changes when you're back." Error page patterns are in 09-interaction-design-and-ux-patterns.md, section 8.10.

### 4.21 Pricing and payment copy

Rule: show the total the person will pay, in the currency they will pay it in, with taxes and fees stated by name, before the payment button. Drip pricing (revealing fees late) is a named dark pattern in India's 2023 guidelines and breaks the Consumer Protection (E-Commerce) Rules 2020 requirement to show the total price in a single figure with its break-up; in the UAE, Federal Decree-Law No. 8 of 2017 on value added tax (VAT), Article 38, requires advertised prices to include tax. The deceptive-pattern law is in 09-interaction-design-and-ux-patterns.md, section 13; the invoicing side is in 24-business-of-creative-and-agency-operations.md, section 3.6.

Rupee formatting:
- Symbol ₹ (U+20B9, designed by D. Udaya Kumar, selected by the Union Cabinet on 15 July 2010, encoded in Unicode 6.0, October 2010), no space, before the number: ₹18,000.
- Indian grouping: three digits, then twos. ₹1,20,000 (one lakh twenty thousand); ₹1,20,00,000 (one crore twenty lakh). The en-IN locale in the International Components for Unicode (ICU) library and the browser's Intl.NumberFormat API produces this; en-US produces ₹12,000,000, which Indian readers misread.
- Lakh (1,00,000) and crore (1,00,00,000) in display copy for property and large-ticket retail ("₹1.2 crore", "₹85 lakh"; "Cr" only in a table cell under a budget), full numerals on invoices, receipts and anything legal. Never mix "million" and "lakh" on one screen. For a Gulf or international audience add the converted figure in brackets: "₹1.2 crore (about AED 530,000)".
- Paise exist (100 paise = ₹1) but most consumer prices are whole rupees; show ".00" only on invoices.
- MRP (maximum retail price) on packaged goods in India is inclusive of all taxes under the Legal Metrology (Packaged Commodities) Rules 2011; a product page that shows "₹4,500 + GST" (GST: India's goods and services tax) for a packaged cosmetic is wrong on two counts.
- GST rates differ by category; the product copy states the applicable rate on the invoice and shows inclusive prices everywhere else.

Dirham and riyal formatting:
- The Central Bank of the UAE unveiled a dirham symbol on 27 March 2025; Unicode 18.0 (September 2026) encoded it as U+20C3 UAE DIRHAM SIGN. The symbol sits before the numeral; the house never sets it together with "AED" or "Dh", because a doubled currency marker reads as an error. As of October 2026 most fonts and keyboards have not shipped the glyph, so product UI uses the ISO code "AED 2,310" (code, space, number) and switches to the symbol when the brand's typeface carries it. Gulf News house style has been "Dh2,310"; the house avoids it in product copy because it is a newspaper convention.
- Fils (100 fils = AED 1) appear on receipts; consumer prices are whole dirhams.
- VAT at 5 per cent (since 1 January 2018) is included in displayed prices. Dubai hotel bills carry charges the booking flow must name before payment: service charge (10 per cent), municipality fee (7 per cent), VAT (5 per cent) and the Tourism Dirham per room per night (about AED 7 to 20 by hotel classification). Other emirates set their own fees (Abu Dhabi, for example, levies its own tourism and municipality fees and a per-night charge), so the figures are confirmed with the client's finance team before launch; the copy rule is that every line is named and totalled before "Pay".
- The Saudi Central Bank (SAMA) introduced a riyal symbol in February 2025, and Unicode 17.0 (September 2025) encoded it as U+20C1 SAUDI RIYAL SIGN. Follow SAMA's usage guidance on placement and spacing, use "SAR 1,250" where the typeface lacks the glyph, and never set the code and the symbol together.
- Saudi VAT has been 15 per cent since 1 July 2020 (Zakat, Tax and Customs Authority, ZATCA), and displayed prices include it.

#### Payment methods and payment states

- UPI (Unified Payments Interface, the National Payments Corporation of India's real-time account-to-account rail) has two flows. Intent: the app hands off to the person's UPI app, "Pay ₹18,000 with any UPI app". Collect: a request goes to a UPI ID, "Approve the request in your UPI app. It expires in 5:00.", with a visible countdown (NPCI withdrew person-to-person collect requests from 1 October 2025; merchant collect continues). "Don't close this page" appears only while the status is unknown.
- Pending gets its own screen: "Payment pending. Your bank hasn't confirmed it yet. We'll update this page and message you within 30 minutes. If it fails, any amount debited returns automatically." The Reserve Bank of India's (RBI) turnaround-time circular of 20 September 2019 sets auto-reversal of a failed UPI debit by T+1 for person-to-person payments and by T+5 where the merchant did not receive confirmation (T is the transaction date), with ₹100 a day in compensation after that, so a merchant checkout can promise "within 5 days" and never "by tomorrow".
- Cards: since 1 October 2022 merchants may not store card numbers; saving a card is tokenisation (the card number replaced by a network token) and needs an unticked consent: "Save this card for faster checkout (stored as a secure token, as RBI requires)".
- Recurring payments on e-mandate (a standing instruction on a card or UPI): additional factor authentication is needed above ₹15,000 a debit, and above ₹1 lakh for insurance premiums, mutual fund subscriptions and credit card bills since December 2023. A pre-debit notification at least 24 hours ahead names the amount, the date and the merchant: "₹25,000 will be charged to your card ending 4210 on 1 May for your Signature membership."
- "No Cost EMI" (equated monthly instalment) copy states the interest, the discount that offsets it, any processing fee and the GST on the interest, because the card statement will show all four.
- Refunds name the method and the time: "Refund of ₹6,000 started. It reaches your HDFC card in 5 to 7 working days" (a typical card timeline; confirm with the payment provider).
- UAE buy now, pay later (BNPL: Tabby, Tamara): "Pay in 4: AED 577.50 today, then 3 monthly payments", with late-fee terms one tap away.
- 3-D Secure (the card scheme's step-up authentication) gets a preface so the bank's page is expected: "Your bank will ask for a code to confirm AED 2,310." The RBI authentication directions behind Indian payment screens are in 09-interaction-design-and-ux-patterns.md, section 5.2.

### 4.22 Dates, times and localisation formats

- India and the UAE both read day-month-year. Write dates with the month spelled or abbreviated to remove ambiguity: "14 Mar 2027", never "03/14/2027". Store and transmit in ISO 8601 ("2027-03-14T18:00:00+04:00").
- Time: India uses 12-hour with am and pm in speech and most UI; the Gulf hospitality sector uses 24-hour on confirmations. The house uses 24-hour on anything transactional ("Check-in from 14:00") and 12-hour in conversational copy ("We'll call you around 6 pm").
- Time zones: India Standard Time (IST) is UTC+5:30, Gulf Standard Time is UTC+4, and neither observes daylight saving. Always state the zone on a cross-border confirmation. Write "Dubai time (UTC+4)" or "Gulf time" on any surface an Indian audience reads, because GST also means India's goods and services tax; "GST" for the zone is acceptable only in Gulf-only products.
- Hijri dates appear alongside Gregorian on UAE government documents, are more expected in Saudi contexts (the islamic-umalqura calendar, section 6.5), and matter for Ramadan and Eid timing; show them only where the brand's audience expects them, with the Gregorian date first.
- Relative times ("2 hours ago") need localised pluralisation (section 6.3) and should switch to absolute dates after 24 hours.

### 4.23 Numbers and units

- Metric throughout, with two exceptions the markets impose: property is marketed in sq ft in India and in Dubai and Abu Dhabi listings alike (Dubai Land Department documents use sq m, so anything legal shows both), and Indian listings state carpet area (the usable floor area inside a unit's walls): the Real Estate (Regulation and Development) Act 2016 makes carpet area the basis of sale (sections 2(k), 4 and 13), and state authorities such as MahaRERA require it in advertisements, so confirm the rule of the state concerned before launch. Otherwise km, kg, °C, and ml for beauty. Numerals versus words are in section 5.4.
- A space between number and unit (48 sq m, 20 km, 50 ml), no space before the % sign in UI (5%), "per cent" spelled out in prose.
- Ranges with "to" ("2 to 4 guests"), never a dash, by house rule.
- Large counts rounded with a word ("1.2k" is acceptable in social counters, never on money).
- Precision matches the decision: carat weights to two decimals (0.52 ct), gold purity in karat and fineness (18k, 750), room sizes to the nearest whole unit.

### 4.24 Order, delivery and returns states

Fashion, jewellery and beauty clients live after checkout as much as before it. One state per line, in the order the person lives them: "Order placed", "Confirmed", "Packed", "Shipped", "Out for delivery", "Delivered"; exceptions: "Delayed", "Delivery attempted", "Cancelled", "Return requested", "Refund issued".

- Each state carries a date and the next expected date. "Arrives by Thursday, 14 March" beats "3 to 5 working days", because people plan around a date.
- Returns copy states the window from delivery ("Return within 14 days of delivery"), the condition (unworn, tags attached), who pays for return shipping, the refund method and timing, and the exclusions (engraved, made-to-order, pierced jewellery, opened beauty), beside "Add to bag" as well as in the policy.
- Cash on delivery (COD): "Pay ₹4,500 in cash or UPI on delivery".
- India's Consumer Protection (E-Commerce) Rules 2020 (rules 4 to 7, by business model) require the return, refund, exchange, warranty, delivery and shipment terms, the total price with its break-up, the country of origin and the grievance officer's contact to be shown before purchase, and the Legal Metrology (Packaged Commodities) Rules 2011 require the label declarations (manufacturer, net quantity, MRP, consumer care contact, country of origin) on the listing. The order page repeats them and the confirmation email links them.

### 4.25 Sign-in, passwords, one-time codes and passkeys

The method choice is in 09-interaction-design-and-ux-patterns.md, section 5.2; this section is the copy.

- Passwords: the US National Institute of Standards and Technology's SP 800-63B-4 (Digital Identity Guidelines, final August 2025) says composition rules and periodic changes shall not be imposed, length must allow at least 64 characters, password managers and paste are allowed, and new passwords are checked against a blocklist of common and breached passwords. The minimum is 15 characters when the password is the only factor and 8 when it is part of multi-factor sign-in. Helper text: "At least 15 characters. A phrase is easiest to remember." Rejection: "This password has appeared in a data breach. Choose another."
- Sign-in failure: "Email or password is incorrect", so the copy never confirms that an account exists, with a "Reset password" link beside it.
- One-time codes: the screen states length, channel and expiry: "Enter the 6-digit code we sent to the number ending 4210. It expires in 10 minutes." "Resend code" appears after 30 seconds with a visible timer, with "Get the code on WhatsApp" as the second route, and the field accepts paste (WCAG 3.3.8, section 8.7).
- OTP messages carry "Never share this code. Example Haveli will never ask for it." For autofill, the Android message ends with the app's 11-character SMS Retriever hash, and for iOS and Safari the last line is "@example.com #123456" (the domain-bound code format), so the code fills only on that domain.
- Passkeys (FIDO, Fast Identity Online, credentials confirmed with the device's biometric or screen lock): write "passkey" in lower case, as the FIDO Alliance's design guidelines do. The button reads "Sign in with a passkey". The creation prompt names the benefit and where it is saved: "Next time, sign in with your face or fingerprint. No password to remember. Saved to iCloud Keychain."

### 4.26 Search, filters and sort

The search label or placeholder names the scope ("Search stays, dining, and spa"), with a visible or programmatic label (4.3). Autocomplete groups suggestions by type (Stays, Dining, Experiences). A correction reads "Showing results for Jaipur. Search instead for Jaipr". Counts carry the query ("24 stays in Goa"). Filters are nouns ("Price", "Pool", "Beachfront"); applied filters show as removable chips whose accessible names say what they do ("Remove filter: Pool"). Sort labels give the direction ("Price: low to high"). "Clear all" beats "Reset" because it names what happens. Baymard Institute's e-commerce search and filtering research documents each failure; the no-results state is in section 4.7.

## 5. Mechanics

### 5.1 Sentence case everywhere

Sentence case capitalises the first word and proper nouns only. The house applies it to headings, buttons, labels, tabs, menu items, titles, notifications and table headers. Reasons: it is how people read sentences, so it costs nothing to parse; it keeps proper nouns visible (in "Add Emirates ID" the capital on Emirates carries meaning, in "Add Emirates Id" under Title Case it is lost); it translates, because Hindi and Arabic have no case and Title Case rules cannot be localised; and Google's Material content design guidance, Shopify Polaris, Atlassian and GOV.UK all use it, so Title Case in a web or Android product reads as legacy enterprise software. Apple's Human Interface Guidelines are the exception: they ask for title-style capitalisation in buttons, menu items and titles on Apple platforms, so a Mask360 app on iOS keeps sentence case inside its own components and accepts Apple's casing in system-provided alerts and share sheets, because fighting the system reads as a bug. Exceptions: a brand's own wordmark styling (which lives in the identity, see 18-brand-strategy-and-identity-design.md, section 3.8) and all-caps micro labels where the design-taste house layer permits wide tracked caps at 400 weight for a small label system, never for buttons or headings.

### 5.2 Punctuation

| Mark | Rule | Reason |
|---|---|---|
| Full stop | On every complete sentence in body copy, helper text and error messages. None on labels, buttons, headings, list items that are fragments, tooltips that are fragments, or single-sentence toasts of under about 5 words ("Address saved" and "Address saved." are both acceptable; pick one per product and keep it) | A full stop marks a sentence; a label is a name |
| Em dash and en dash | Banned (house rule; see design-taste, section 3). Use a colon, a comma, a full stop, or "to" for ranges ("14 to 16 March", "2 to 4 guests") | Dashes signal generated text in 2026 and they wrap badly in narrow Hindi and Arabic layouts, where a dash between an Arabic word and a Western numeral also triggers bidi reordering surprises |
| Hyphen | Inside compound modifiers only ("non-refundable", "check-in", "sign-in page" as adjective, "sign in" as verb) | Keeps verb and noun forms distinct, which matters for buttons (verb) and labels (noun) |
| Exclamation mark | Never in product copy | Enthusiasm is the brand shouting; the luxury register is quiet (section 2.5) |
| Question mark | In dialogue titles that ask ("Cancel this reservation?") and in nothing else routine | A question invites a decision; a question in a heading over content that answers nothing is a tease |
| Serial (Oxford) comma | Contested. The Chicago Manual of Style (18th edition, 2024) and Oxford style require it; AP style and most British newspapers (The Guardian, The Times) omit it unless needed for clarity. The house uses it in every list of three or more in body copy, because it removes the one ambiguity (the last two items reading as a pair: "spa, dining and bar access" versus "spa, dining, and bar access") at the cost of one character, and because translators working from a serial comma can see the list structure. UI lists of three or more items should usually be a list element anyway | A rule that varies by sentence produces inconsistency across a product written by several people |
| Colon | Introduces a list or an example; never after a label in UI (write "Mobile number"; avoid "Mobile number:") | The field's border already separates label and value; a colon is visual noise and breaks screen-reader announcements in some pairings |
| Ellipsis | Use the single character U+2026, never three full stops, and only to mark truncation or an action that opens a further step ("Choose a file…") where the platform convention asks for it; never in loading copy ("Loading...") | Three full stops wrap as three characters and read as hesitation; the loading case is covered by section 4.9 |
| Quotation marks | Curly (U+2018, U+2019, U+201C, U+201D) in all English copy; straight marks only inside code samples. Single quotes as the primary form in British style, double inside | Straight quotes read as untypeset; the British convention matches the house spelling |
| Apostrophe | Curly (U+2019). "Guests' details" and "it's" (it is) versus "its" checked on every string | The straight apostrophe is the most common cheap typesetting tell in UI |
| Ampersand | Only inside proper names ("Dolce & Gabbana", "P&O") and never as a substitute for "and" in copy or navigation ("Spa and wellness"; avoid "Spa & Wellness") | It is a ligature of a Latin word, reads as a logo device, and has no equivalent in Hindi or Arabic |
| Slash | Avoid; write "or" or "and" | "and/or" and "Tuesday/Wednesday" are ambiguous in speech and screen readers announce "slash" |
| Parentheses | For a short clarification that the sentence survives without ("PAN (for invoices above ₹2 lakh)") | Anything the sentence needs belongs in the sentence |
| % sign | In UI, numeral then symbol with no space ("5%"); in prose, "5 per cent" | Compact in tables; spelled out in sentences matches the house no-symbol rule |

### 5.3 Capitalisation of product names and trademarks

- A product or feature name is a proper noun and keeps the owner's capitalisation: "Apple Pay", "WhatsApp", "iPhone" (even at the start of a sentence), "PayPal", "YouTube", "Razorpay", "Noon". Brands that style their names in lower case or all caps in logos (adidas, ZARA, SSENSE) are written in standard case in running text ("Adidas", "Zara", "Ssense") because the logo is a graphic and running text follows standard spelling. The exception is a client whose brand guidelines insist otherwise, recorded in the terminology table.
- A generic feature stays lower case ("saved cards", "guest profile", "the booking engine"). Capitalising generic features ("Your Guest Profile") is a cheap tell: it makes a plain thing pose as a product, and it multiplies capitals until none of them carry signal.
- A named plan or tier is capitalised in UI ("Signature", "Private") and referred to with its noun on first mention ("the Signature membership").
- Trademark symbols (™, ®) do not appear in product UI or body copy; they belong in legal pages and packaging. A ® after every mention is how a brand looks insecure.

### 5.4 Numerals versus words

In UI, numerals for every number including one to nine, because a numeral is scanned faster than a word and because translated strings expand less when the number is a digit ("3 guests", "1 night", "Step 2 of 4"). In prose (help articles, long-form legal text), spell out one to nine and use numerals from 10, which is Oxford and Guardian style. In help prose, never start a sentence with a numeral ("Three guests can share the villa"); in UI, chips and labels start with the numeral ("3 guests"). Use digits for all money, dates, times, measurements, percentages and page numbers regardless of size. Put a space between number and unit, as section 4.23 prescribes.

### 5.5 Abbreviations and acronyms

- Avoid abbreviations in UI unless the full form would not fit the budget (section 5.10) and the abbreviation is universal in the market ("PAN", "GST", "VAT", "ID", "km", "sq ft", "AED"). Spell out on first use in prose ("goods and services tax (GST)").
- Never abbreviate by truncation ("Reserv.", "Notif.") or with a full stop; if a word must be shortened, give translators the full form in the context note, because W3C's text-size guidance warns that abbreviations are the hardest strings to localise.
- Never "e.g.", "i.e.", "etc." in UI; write "for example", "that is", and end the list.
- Dates: three-letter month abbreviations without a full stop ("14 Mar") in constrained spaces; the full month wherever there is room.
- Latin plurals and jargon ("via", "per", "re:") are replaced by English ("through", "for each", "about").

### 5.6 Inclusive language

- Describe people by what matters to the task and nothing else. A booking flow needs "guests" and "adults", "children" with ages, never gender unless a visa form demands it; when it does, offer the options the receiving authority accepts and nothing more.
- Honorifics ("Mr", "Ms", "Mx", "Dr") are optional and never required; India's hospitality forms often require a title, and the house removes it unless a downstream system (a property management system, an airline) cannot accept its absence.
- Disability language: person first or identity first according to the community's preference, and in UI the question rarely arises because the copy addresses "you". Never "normal" as the opposite of a disability or accessibility setting; use "default" or name the setting.
- No idioms that assume a culture or a religion ("hit a home run", "a godsend"), no references to drinking or pork in copy aimed at the Gulf, no assumption of a weekend on Saturday and Sunday (the UAE moved its public-sector weekend to Saturday and Sunday on 1 January 2022, with Friday a half day; Saudi Arabia keeps Friday and Saturday).
- Age: never "elderly", "seniors" in UI; name the thing ("senior citizen fare" only when that is the legal product name in India).

### 5.7 Gendered language in Hindi and Arabic UI

English hides gender in verbs; Hindi and Arabic do not, so a string that is neutral in English forces a choice in translation. The failure mode is a product that addresses every woman in the masculine. The techniques, in order of preference:

| Technique | Hindi | Arabic | Reason it works |
|---|---|---|---|
| Imperative with the respectful second person | "जारी रखें" (continue), "सहेजें" (save): the आप imperative does not inflect for gender | Imperatives inflect ("اضغط" masculine, "اضغطي" feminine), so prefer the next technique | Hindi's polite imperative is gender neutral by construction |
| Verbal noun or nominal phrase for the action | "भुगतान पूरा हुआ" (payment completed: the payment is the subject) | "تسجيل الدخول" (signing in), "تأكيد الحجز" (booking confirmation): the masdar (verbal noun) has no gender agreement with the user | Makes the system or the object the subject so the user's gender never enters the sentence |
| Ergative construction for past actions | "आपने पता सहेजा": the verb agrees with the object (पता, masculine) | Not available | Hindi's perfective transitive verbs agree with the object |
| Avoid participles and adjectives that agree with the user | Write "साइन इन सफल" (sign-in successful) or "आप साइन इन हैं" (avoid "आप साइन इन हो गए हैं", whose participle गए is masculine and would need गई for a woman) | Prefer "مرحباً بك" (welcome to you); an adjective would agree with the user | Participles and adjectives are where gender leaks |
| Plural or honorific plural | आप always takes the plural verb, which in Hindi is the same for both genders in most present-tense forms | The plural "أنتم" avoids the masculine/feminine singular split but reads as addressing a group; use sparingly | A grammatical escape that costs some warmth |
| Ask and store a form of address | Where a product addresses a named guest, store the guest's preferred form (Mr, Ms, none) and the grammatical gender for languages that need it, with an option to leave it blank | Same | The only honest solution for warm, personal copy such as a welcome letter |

Microsoft publishes per-language localisation style guides for Hindi and Arabic (at learn.microsoft.com/globalization) that document each language's approach to gender, formality and address; the house reads the relevant guide before briefing a translator. Never ship the masculine as a silent default: if a string cannot be made neutral, it must be stored with a gender variable so that the product can address a woman correctly.

### 5.8 Pronouns and addressing the user

- "You" and "your" for the person, always; never "the user", "the customer", "the guest" in copy addressed to them (those words belong in internal documents and in third-party references such as "guest names").
- "We" for the brand only where the brand is making a commitment or taking responsibility ("We'll confirm within an hour", "We couldn't save your changes"). The system does not have an "I": first person singular is reserved for the user's own statements in checkboxes ("I agree to the house rules") and for AI assistants that have a declared persona (section 10).
- Never "me" or "my" in navigation labels ("My account") when the whole product is already the person's; "Account" suffices. The house rule, because "My" labels proliferate ("My bookings", "My cards", "My profile") and the word carries nothing.
- Pronouns in confirmation emails: "your reservation" in the body, the guest's name once in the greeting, the brand name once in the signature. A hospitality email that repeats the guest's name four times reads as a mail merge.

### 5.9 Terminology management and glossaries

A terminology table is the single list of the words a product uses for its concepts, one approved term per concept, with the banned synonyms, the definition, the part of speech, the languages, and the owner. Format:

| Concept | Approved (en) | Banned synonyms | Hindi | Arabic | Part of speech | Context note |
|---|---|---|---|---|---|---|
| A confirmed hotel stay | reservation | booking, stay (as a noun for the record) | बुकिंग (house default); आरक्षण for shuddh-register clients | حجز | noun | "Stays" remains the navigation label for the list; बुकिंग chosen because आरक्षण reads as railway and government register and also means caste and quota reservation in Indian usage; decision tested with five native readers |
| Begin a session | sign in | log in, login, log on | साइन इन करें | تسجيل الدخول | verb (two words); "sign-in" as adjective | Matches Apple and Google platform strings so the person sees one term across OS and app |
| Remove an item from the bag | remove | delete, discard | हटाएँ | إزالة | verb | "Delete" is reserved for account and data destruction |
| The shopping container | bag | cart, basket | बैग | حقيبة التسوق | noun | Fashion and jewellery clients; F&B and grocery use "basket" |

The Hindi column follows the register decision in section 6.10; where two candidates exist, the table records both, the decision and the reason.

Tooling: a shared sheet is enough for a single product; across a client portfolio the house uses the glossary feature of the translation management system (Lokalise, Phrase, Crowdin and Smartling all carry one, as of October 2026) so that the term base is enforced at translation time and flagged by QA checks. The reason to own a terminology table before design starts: Figma text layers are the first place synonyms creep in, and a designer who types "Log in" on one frame and "Sign in" on another has created a bug that costs a sprint to find later.

### 5.10 String length budgets

A string length budget is the maximum character count a component can show without truncation, set per component at the smallest supported screen and the largest supported type size, then reduced by the expansion factor of the longest target language.

| Component | English budget (about) | Why | After Hindi and Arabic expansion |
|---|---|---|---|
| Tab bar or bottom navigation label | 10 to 12 characters | Five tabs on a 375 px wide screen at the largest default type size | 8 characters of English: choose shorter nouns |
| Button label | 20 characters | A primary button at 16px type on a 343 px wide mobile button, with padding | 15 characters of English |
| Toast | 40 characters | One line at mobile width | 30 characters |
| Push title | 40 characters; body about 100 on the lock screen | Visible limits vary by device and launcher; iOS and Android both truncate with an ellipsis on the collapsed banner | Title 30, body 75 |
| Form label | 25 characters | Must fit above a field at the smallest width without wrapping to a third line | 18 characters |
| Helper and error text | 90 characters | Two lines under a field | 65 characters |
| Dialogue title | 40 characters | One line, display size | 30 characters |
| Dialogue body | 150 characters | Three lines; a dialogue is read once and dismissed | 110 characters |
| Empty state | 100 characters plus one button | Two lines and an action | 75 characters |
| Onboarding screen | One line of 50 characters plus one of 90 | Headline and one supporting sentence | Headline 35, body 65 |

The reason to set budgets in English before translation: W3C's "Text size in translation" (Richard Ishida) reproduces IBM's finding that strings of up to 10 characters expand by 200 to 300 per cent in European languages, 11 to 20 characters by 180 to 200 per cent, and only strings over 70 characters settle at about 130 per cent. Short strings expand most, and the shortest strings in a product are the buttons and tabs. Budgets are written into the copy deck (section 12.3) and enforced by the translation management system's length check.

### 5.11 Contractions and interaction verbs

Contractions are contested. GOV.UK's A to Z style guide (checked October 2026) says: "Avoid negative contractions like can't and don't. Many users find them harder to read, or misread them as the opposite of what they say. Use cannot, instead of can't." Mailchimp, Microsoft and Shopify Polaris favour contractions for a spoken voice. House position: positive contractions everywhere ("you'll", "we'll"); negative contractions are fine in routine copy and are written out in payment, cancellation, consent and destructive dialogues, where a misread costs money: "The non-refundable ₹18,000 will not be returned." "You cannot change these dates online."

Interaction verbs: "Select" in cross-platform copy and help, because not every person clicks or taps (GOV.UK's style guide makes the point under "click"); "Tap" only on touch-only surfaces such as push notifications and widgets; "Enter" for typing; "Choose" for picking from a set. "Click here" never appears (section 8.2).

## 6. Localisation and internationalisation

Internationalisation (i18n) is engineering a product so that it can be adapted to any locale without code changes: externalised strings, locale-aware formatting, bidirectional layout. Localisation (l10n) is adapting the product to one locale: translating, reformatting, re-choosing images and examples. The writer's part of i18n is to write strings that survive both.

### 6.1 String expansion

| Target | Expansion from English | Notes |
|---|---|---|
| German, French, Spanish, Italian | Average 130 per cent for long strings, 200 to 300 per cent for strings under 10 characters (IBM figures via W3C) | German compounds do not wrap ("Stornierungsbedingungen" for "cancellation policy" is one unbreakable word) |
| Hindi (Devanagari) | About 15 to 30 per cent longer in characters and visibly taller: Devanagari needs more vertical space for the headstroke (shirorekha), matras above and below, and conjuncts | Line height for Devanagari body text runs 1.6 to 1.8 against 1.4 to 1.5 for Latin; see 03-typography.md, section 15, for the multiscript setting rules |
| Arabic | Similar or slightly shorter in character count, often wider in rendered width because of connected letterforms and kashida (the elongation stroke), and taller for the ascender and descender range | Arabic UI fonts render smaller than Latin at the same point size; raise the Arabic size by about 10 to 15 per cent or the line looks timid next to its English twin |
| Chinese, Japanese, Korean | Shorter in characters; each character counts about two Latin widths | Relevant for Gulf hospitality clients with East Asian guests |

Rules that follow: no fixed-width containers for text; buttons grow with their label; layouts tested with pseudo-localisation (a build in which every string is mechanically lengthened by 30 to 50 per cent and wrapped in brackets, so that truncation and hard-coded strings show up before translation starts: Android Studio and Xcode both ship a pseudo-locale).

### 6.2 RTL and bidi

Right-to-left (RTL) layout mirrors the interface for Arabic, Hebrew, Persian and Urdu. Bidirectional (bidi) text is a single run that mixes directions, such as an Arabic sentence containing a Latin brand name, a flight code and a price. Both are governed by the Unicode Bidirectional Algorithm, UAX #9, revision 52 for Unicode 18.0.0 (1 September 2026), which decides the display order of characters from their directional properties.

Rules for the writer and the front-end together:

- Set the document or component direction explicitly (HTML `dir="rtl"` on the root for an Arabic locale; `dir="auto"` on user-generated fields so that a guest typing in Arabic into an English UI gets correct ordering). Never rely on the first strong character of the content.
- Isolate inserted values. A placeholder such as a name, a flight number or a URL inside an Arabic sentence must be wrapped in a bidi isolate (`<bdi>` in HTML, or the Unicode isolate characters U+2066 to U+2069 in plain strings), otherwise the algorithm may reorder the punctuation and digits around it. The classic failure: an Arabic string ending in "AED 2,310" that renders as "2,310 AED" with the comma displaced.
- Numbers: decide the digit set per locale (section 6.5). Phone numbers and codes are always left-to-right runs and need the isolate.
- Mirror what has direction and leave alone what does not. Back and forward arrows, progress indicators, sliders, the order of columns, the position of the primary button and the alignment of text all mirror. Clocks, media controls (play still points right), logos, checkmarks, phone handsets and anything depicting the physical world do not. Material's bidirectionality guidance and Apple's RTL guidance list the exceptions.
- Use CSS logical properties (`margin-inline-start`, `padding-inline-end`, `text-align: start`), named by flow direction, so one stylesheet serves both directions; see 21-web-design-and-digital-craft.md, section 2.7.
- Arabic punctuation: the comma is "،" (U+060C), the question mark "؟" (U+061F), the semicolon "؛" (U+061B). A Latin "?" at the end of an Arabic sentence is a cheap tell that nobody who reads Arabic reviewed the build.
- Mixed-script brand names: a Latin wordmark inside Arabic running text stays Latin (it is a logo); a transliterated brand name in Arabic script is a brand decision recorded in the identity (18-brand-strategy-and-identity-design.md, section 3.4 on bilingual lockups).

### 6.3 Pluralisation

Languages count differently. The Unicode CLDR plural rules (the Common Locale Data Repository, the Unicode Consortium's locale database, which reached version 49 on 22 October 2026, integrated into ICU 79) define up to six cardinal categories per language: zero, one, two, few, many, other.

| Language | Categories used | Examples (integers) | Consequence for the writer |
|---|---|---|---|
| English | one, other | 1; 0, 2 to 16, 100 | Two forms: "1 night", "2 nights", and 0 takes the plural ("0 nights") |
| Hindi | one, other | 0 and 1; 2 to 17, 100 | Two forms, and zero takes the singular ("0 रात" with the singular form), unlike English |
| Arabic | zero, one, two, few, many, other | 0; 1; 2; 3 to 10, 103 to 110; 11 to 26, 111; 100 to 102, 200, 1000 | Six forms: a translator needs six strings for "{n} nights", and the few and many forms change the noun's grammatical case |

A string with a count therefore cannot be written as "{n} night(s)" or assembled as number plus noun. It must be written as a message with a plural selector. ICU MessageFormat (the syntax from the International Components for Unicode library, used by Android through ICU4J, by i18next with its ICU plugin and by FormatJS on the web, and by most translation management systems; Apple platforms express the same CLDR categories through stringsdict files and String Catalogs):

```
{count, plural,
  one {{count} night}
  other {{count} nights}}
```

The translator supplies the forms their language needs; Arabic gets six branches. Use # (or the named placeholder) in every branch and never a literal digit, and use the explicit selectors =0 and =1 for exact-value text: "{count, plural, =0 {No items} =1 {One item} other {# items}}". CLDR's one category means the forms that take the singular in a language, which is 0 and 1 in Hindi and French and numbers ending in 1 (except 11) in Russian, so a literal "1" in the one branch prints "1 item" for a count of zero in Hindi. Unicode's MessageFormat 2.0 (Part 9 of the LDML specification, UTS #35, declared stable with CLDR 47 on 13 March 2025, and the successor to ICU MessageFormat) separates the declaration from the pattern and allows multiple selectors. Implementations lag the specification (in the CLDR 48 cycle the ICU4J core API reached draft status and the C++ implementation stayed a technology preview), so the house ships ICU MessageFormat strings and plans for version 2:

```
.input {$count :integer}
.match $count
one {{You have {$count} reservation.}}
*   {{You have {$count} reservations.}}
```

Ordinals ("1st", "2nd", "3rd") have their own CLDR category set (`selectordinal`) and should be avoided in UI where a cardinal does the job ("Step 2 of 4"; avoid "2nd step"). Relative time ("2 hours ago") is a plural problem in every language and is handled by the platform's relative time formatter (Intl.RelativeTimeFormat on the web), never by hand.

### 6.4 Concatenation hazards

Concatenation is building a sentence in code from fragments: "You have " + count + " items in your " + container. It fails in translation because word order, gender agreement, case marking and pluralisation all differ by language. Arabic puts the adjective after the noun and inflects it; Hindi puts the verb last. Rules:

- One string, one complete sentence, with named placeholders: "Your table for {guestCount} is held until {time}."
- Never reuse a word as a string in two grammatical roles. "Open" as a button verb and "Open" as a status adjective are two strings with two keys, because they translate differently ("खोलें" versus "खुला"; "افتح" versus "مفتوح").
- Never build a sentence around a link: "Read our {link}privacy policy{/link} before continuing" keeps the link inside the sentence so that the translator can move it.
- Never split a sentence across two text layers in Figma or two components in code to achieve a layout; use a single string with inline styling marks.
- Dates, numbers and currency are never typed into strings; they are placeholders filled by the locale formatter (section 6.5).

### 6.5 Date and number formats

The formatter does the work; the writer chooses the pattern and checks the output. On the web the Intl API (ECMA-402) reads CLDR data; on iOS, Foundation; on Android, ICU4J.

| Item | en-IN | hi-IN | ar-AE | Rule |
|---|---|---|---|---|
| Short date | 14/03/2027 | Use the medium pattern: 14 मार्च 2027 | ١٤‏/٠٣‏/٢٠٢٧ or 14/03/2027 depending on the digit set chosen | Prefer the medium pattern with month name ("14 Mar 2027", "١٤ مارس ٢٠٢٧") to kill the day-month ambiguity for international guests |
| Time | 6:00 pm (12-hour default) | Check whether the formatter emits Latin am and pm or Hindi day periods (पूर्वाह्न, अपराह्न) at the chosen width | ٦:٠٠ م or 18:00 | House: 24-hour on anything transactional in all three locales (section 4.22) |
| Grouping | 1,20,00,000 (lakh and crore groups) | 1,20,00,000; लाख and करोड़ in words | 12,000,000 | Pass the locale; never hard-code separators |
| Decimal separator | . | . | Arabic decimal separator "٫" (U+066B) when Eastern digits are used; "." with Western digits | Follow the digit set |
| Currency | ₹1,20,000 | ₹1,20,000 | AED 2,310 or the dirham sign where the font has it (section 4.21) | Code or symbol, never both |
| Digit set | Western digits | Western digits by default; Devanagari digits (०१२३४५६७८९) with hi-IN-u-nu-deva, rare in consumer UI | Decision per client: Western (ASCII) digits are the norm on UAE government, transport and most retail interfaces and the house default for UAE Arabic UI; Eastern Arabic-Indic digits (U+0660 to U+0669) where the client's print and signage use them, and more often for Saudi and Egyptian audiences | Set the numbering system explicitly in the locale tag (ar-AE-u-nu-latn or ar-AE-u-nu-arab), because defaults differ by locale and by CLDR version and the mismatch between a bill and a screen is a trust failure; Eastern digits are more common in Saudi consumer UI, so set nu explicitly for ar-SA too |

Test the formatter output in each CLDR version a product ships on, because day periods and defaults change between versions. Intl here is the browser's internationalisation API, specified in ECMA-402. Hijri dates: Intl supports the islamic-umalqura calendar (the Umm al-Qura calendar used by Saudi Arabia) as a calendar extension (ar-SA-u-ca-islamic-umalqura); the UAE follows astronomical sighting for Ramadan and Eid, so a product must never compute an Eid date and present it as fact. Show the Gregorian first, the Hijri in a secondary style, and label holidays as "expected" until announced.

### 6.6 Cultural references

Every example, image, name and metaphor in a string is a localisation decision. Example names in placeholders ("a.mehta@example.com", "Fatima Al Mansoori") are chosen per market and never left as "John Smith". Example addresses use real formats (an Indian PIN code has six digits; UAE addresses have no postcode and rely on P.O. Box, area and the Makani number in Dubai, a 10-digit code that identifies a building entrance). Colour words, seasons ("summer sale" means something different in Dubai in August), food, sport, religion and humour are all checked by an in-market reviewer (section 6.9). A luxury product's images are chosen for the market: a Jaipur hotel's "family" illustration for a Gulf audience depicts a family that a Gulf guest recognises, with the modesty conventions of the market, or the illustration is removed.

### 6.7 Transcreation versus translation

Translation renders meaning faithfully; transcreation (a term from advertising, used since the 1960s and popularised in the 2000s) rewrites copy for the same effect in the target culture, which may change the idea, the image and the joke. Product copy is translated, with a terminology table and a style guide, because the measure is comprehension and consistency. Marketing copy inside a product (a campaign banner, an onboarding headline, a loyalty programme name) is transcreated, because the measure is response. The brief states which is which, string by string, in the copy deck: a translator given a pun as a product string will either translate it literally or spend an hour on it; both are waste. Transcreation is briefed to a copywriter in the target language with the English intent, the tone, the constraints and the reference, under the mask360-copywriting skill's rules; translation is briefed to a translator with the glossary.

### 6.8 Hinglish and Arabizi decisions

Hinglish is Hindi written in Latin script, mixed freely with English ("Aapka order ready hai"). Arabizi (also Franco-Arabic or the Arabic chat alphabet) is Arabic written in Latin letters with numerals standing for sounds that Latin lacks (3 for ع, 7 for ح, 5 or kh for خ). Both are how a large share of the audience actually texts, and both are contested in product copy.

Positions:

- For: it is the register of the audience, it proves the brand is local, and the Indian consumer apps that lead on engagement (Zomato and Swiggy built much of their push-notification voice on it) use it in pushes and empty states. Dubai youth brands and delivery apps use Arabizi in social copy for the same reason.
- Against: it has no standard spelling ("aap" and "ap", "3ala" and "ala"), so it fails consistency and search; it excludes people who read Devanagari or Arabic script but not the Latin improvisation; it reads as juvenile to the luxury audience; screen readers mispronounce it entirely; and it fails the formality that payment, legal and hospitality copy need.

House position: no Hinglish or Arabizi in product copy for luxury and premium clients. Where a client's voice chart explicitly allows it (a youth F&B brand, an events brand), it is restricted to marketing surfaces (pushes classed as marketing, social captions, banners), never to transactional, legal or error copy, and the product offers a proper Hindi or Arabic locale alongside. The reason: product copy is read by people who are paying, and the register in which a person pays is the register in which they want to be sure.

### 6.9 Review process

| Stage | Who | What they check | Tooling |
|---|---|---|---|
| Source review | Content designer | English strings meet sections 3 to 5, context notes complete, budgets set, placeholders named | Copy deck or translation management system (TMS) |
| Translation | Professional translator resident in the target market | Meaning, glossary compliance | TMS with glossary and translation memory (a database of previously translated segments) |
| Editing | Second linguist | Fluency, register, consistency | TMS (the TEP model: translation, editing, proofreading) |
| In-context review | Translator or in-market reviewer in the built product or in a Figma locale swap | Truncation, bidi errors, wrong digit set, tone in place | Pseudo-localised and localised builds, Figma with a localisation plugin |
| Linguistic quality assurance (LQA) | Independent reviewer scoring against a typology | Error categories and severity: the MQM framework (Multidimensional Quality Metrics, developed in the EU-funded QTLaunchPad project, 2012 to 2014, extended in QT21 and maintained by the MQM Council) scores accuracy, fluency, terminology, style, locale convention and design errors by severity | Spreadsheet or TMS LQA module |
| Sign-off | Client's in-market owner | Brand and legal fit | Written sign-off against the string table version |

Standards: ISO 17100:2015 sets the requirements for translation service providers (qualifications, the TEP process, project management) and is the thing to ask a vendor to hold. Machine translation with post-editing (MTPE: a linguist corrects machine output) is acceptable for support content and never for product strings in a luxury product without full human editing, because a single mistranslated amount or date in a confirmation is a service failure the guest will remember.

### 6.10 Register and dialect

Every Hindi and Arabic product decides its register before the first string is translated; otherwise the translator decides it one string at a time.

- Arabic UI is written in simplified Modern Standard Arabic (MSA, al-fusha): short sentences, common vocabulary, no classical constructions. It reads across the Arab world, it is the register of UAE government and banking interfaces, and it has one stable spelling for search. Gulf dialect (Khaleeji) is kept for marketing, social and voice surfaces where the voice chart allows it. Egyptian or Levantine dialect never stands in for Gulf: حضرتك (a respectful "you") reads Egyptian to a Gulf guest.
- Hindi has three registers: Sanskritised shuddh (pure) Hindi (आरक्षण, प्रवेश करें); everyday Hindustani, which writes English technology words in Devanagari (बुकिंग, पेमेंट, साइन इन); and Hinglish in Latin script (section 6.8). The house default is everyday Hindustani, because shuddh terms read like railway or government forms and slow comprehension; shuddh Hindi is used only for heritage or government-adjacent clients whose voice chart asks for it. The pronoun is always आप.
- The decision is recorded in the voice chart's locale rows (2.4), the terminology table (5.9) and the translator brief; Microsoft's Hindi and Arabic localisation style guides are the published reference for both languages.

### 6.11 Language and region switcher

- Language names are written in their own script (endonyms): "English", "हिन्दी", "العربية". The person who needs the switcher may not read the current language.
- No flags: a flag is a country. Arabic is official in more than 20 states, and India's flag stands for 22 scheduled languages.
- The switcher sits in the same place on every screen (header or footer on the web, Settings in apps), marked with a globe icon or "Language" plus the endonym, and the choice is remembered in the account.
- Never auto-switch on IP address alone: an Indian guest in Dubai is usually not an Arabic reader. Offer the switch, and treat the browser's Accept-Language header as a hint.
- Direction switches to RTL with the language (section 6.2). Language, region and currency are separate choices ("Language: العربية", "Currency: AED"), because a Gulf resident may read English and pay in dirhams. W3C Internationalization's article on indicating the language of a link destination carries the detail.

## 7. Content strategy

### 7.1 Halvorson and Rach

Kristina Halvorson's "Content Strategy for the Web" (New Riders, 2010; second edition with Melissa Rach, 2012) gave the field its definition: content strategy plans for the creation, delivery and governance of useful, usable content. The second edition's framework has a core strategy statement at the centre ("what content will this organisation produce, for whom, to achieve what") and four quadrants around it, two about the content and two about the people:

| Quadrant | Question | Deliverables | Reason it is in the model |
|---|---|---|---|
| Substance | What content, about what, for whom, in what voice | Messaging hierarchy, voice chart, content requirements, terminology | Without it the product has words but no argument |
| Structure | How content is organised, prioritised, chunked, linked and displayed | Content model, taxonomy, page tables, string architecture | Structure is what lets one piece of content serve a hotel site, an app, a WhatsApp template and a concierge screen |
| Workflow | How content is requested, written, reviewed, approved, published, maintained | Process map, roles, tools, calendar | Content that nobody owns rots |
| Governance | Who decides, by what standards, how changes are made and measured | Style guide ownership, review cadence, metrics, retirement rules | Governance gives the style guide force: a named owner with a veto, a review cadence and metrics (section 7.6) |

The reason the house uses the model on product work: a booking engine for a hotel group is content (room names, rate names, policy text, amenity lists, error strings) as much as interface, and when the strategy is absent the content is written by whoever is in the content management system (CMS) last, which is how one property ends up with "Deluxe Sea View" and its sister with "Sea-facing Deluxe".

### 7.2 Content audits and inventories

A content inventory is the quantitative list: every page, screen, string, email and template, with its identifier, location, owner, last updated date, word count, language versions and traffic. A content audit is the qualitative judgement of that inventory against criteria. The ROT test (redundant, outdated, trivial) is the first pass; the second scores each item for accuracy, voice, usefulness, findability, and compliance. For a product, the inventory is pulled from the string table and the CMS export, because those hold every locale and every state a screenshot misses. Columns the house uses: ID, type (screen, string, email, template, help article), location (route or key), language versions, owner, last updated, word count, reading grade (English only), voice score (1 to 3 against the voice chart), ROT flag, action (keep, revise, merge, remove), notes. The audit runs before a redesign, because a redesign that ports 400 strings nobody has read ports the defects with them, and again twelve months after launch.

### 7.3 Content models and structured content

A content model defines the types of content a product has, the fields each type carries, the relationships between types, and the rules on each field. Structured content is content stored as typed, reusable fields, so that the same room description can appear on a web product detail page (PDP), an app card, a confirmation email and a partner feed without re-entry. The principle is COPE (create once, publish everywhere), named by Daniel Jacobson at NPR in 2009. Rachel Lovinger's "Content Modelling: A Master Skill" (A List Apart, 2012) and Mike Atherton and Carrie Hane's "Designing Connected Content" (New Riders, 2018) set out the method: domain model first (the concepts and their relationships, drawn with the subject experts), then the content model (types and fields), then the design.

Example content model for a hotel group, as a starting point:

| Type | Fields | Rules | Relationships |
|---|---|---|---|
| Property | name, locality, city, country, short description (120 characters), long description, hero image set, check-in and check-out times, local currency, time zone, policies (references), contact | Short description is written for the listing card and never truncated from the long one | has many Room types, Outlets, Experiences |
| Room type | name (as sold), size in sq m and sq ft, bed configuration, occupancy (adults, children), view, one-line description (90 characters), amenity list (references), image set | Name uses the terminology table; size always carries both units | belongs to Property; has many Rate plans |
| Rate plan | name, inclusions (references), cancellation policy (reference), payment terms, member-only flag | Cancellation policy text is a reference, never retyped per rate | belongs to Room type |
| Policy | type (cancellation, child, pet, smoking, ID), short form (one sentence for the booking flow), long form (legal) | Short form is the one the booking flow shows; long form is one tap away | referenced by Property and Rate plan |
| Amenity | name, icon, category | A controlled vocabulary; no free text | referenced by Room type and Property |
| Message string | key, en, hi, ar, context note, budget, status | One key per grammatical role (section 6.4) | referenced by every surface |

### 7.4 Headless CMS content modelling

A headless CMS stores structured content and serves it over an API with no fixed presentation layer; the product, the site and the emails each render it. As of October 2026 the tools the house meets most are Sanity (schema as code, a customisable studio, GROQ, Graph-Relational Object Queries), Contentful (content types with a visual modeller, rich text as a structured JSON (JavaScript Object Notation) tree), Storyblok (component-based blocks with a visual editor), Payload (open source, code-first) and Strapi (open source). Modelling rules that protect the copy:

- Model the meaning. A field called "left column text" is a layout; a field called "cancellation summary" is content.
- Keep rich text fields rare and small. Every rich text field is a place where a marketing manager will paste a Word document with its own typography; prefer typed fields with length limits and plain text.
- Set validation that encodes the budgets: maximum lengths, required fields, allowed values, and a regular expression on anything with a format (a phone number, a Makani number).
- Localise at the field level, with fallbacks declared (Arabic falls back to English for a missing string, never to Hindi), and the fallback shown visibly in the editing UI so that editors see which strings are missing.
- Give every content type a help text that tells the editor what the field is for, with an example that passes the voice chart. The field help text is the editor's style guide at the moment of writing; the PDF style guide is never open.
- Version and preview: editors see the string in the real component at the real width before publishing, or they will never catch truncation.

### 7.5 Editorial calendars for product content

Product content changes on a schedule like any other content: seasonal rates and inclusions, Ramadan timings (restaurant hours, iftar menus, modified check-in), Diwali and wedding season (October to February in North India), summer closures, regulatory dates (a new tax rate, a new ID requirement), platform deadlines (an OS release that changes the permission dialogue), and the product's own release train. The calendar lists each change, the strings and surfaces it touches, the owner, the translation lead time (a week for two languages at normal volume), the legal review date, and the publish date. The reason: the most common product copy failure in hospitality is a confirmation email that still describes last season's breakfast.

### 7.6 Governance

| Element | What the house sets | Reason |
|---|---|---|
| Owner | One named content owner per product, with authority to reject a string | Without a veto, the style guide is advice |
| Style guide | A living document (section 12) with the voice chart, mechanics, terminology table and examples, versioned, with a change log | A PDF nobody can edit is dead within a quarter |
| Review | Every new or changed string reviewed by the content owner before merge; weekly review of strings added by engineers; quarterly audit of the whole table | Strings added in hotfixes bypass design |
| Metrics | Task completion, error rate, support tickets by topic, comprehension scores, translation defect rate (section 12.6) | Governance without numbers is taste alone |
| Retirement | A rule for removing content: no owner, no traffic in 90 days, or no longer true | Content grows; nobody removes it unless told to |
| Decision rights | A RACI (responsible, accountable, consulted, informed) across product, brand, legal and the client | The client's legal counsel is consulted on consent copy, never responsible for its tone |
| Automation | House rules encoded in a linter that runs on every change (section 12.5) | A rule a machine checks holds on the thousandth string as well as the first |

## 8. Accessibility of content

11-accessibility-and-inclusive-design.md carries the standard (section 2), the testing method and the assistive technology detail, and the Indian and UAE obligations that cite it (section 14); this section covers the writer's share. The reference is WCAG 2.2 (W3C Recommendation, 5 October 2023).

### 8.1 Alt text craft

Alternative text (alt text) is the text equivalent of an image, read by screen readers and shown when the image fails to load. The W3C Web Accessibility Initiative's images tutorial divides images into seven kinds: informative, decorative, functional, images of text, complex, groups, and image maps, with an alt decision tree to classify each.

| Kind | Alt text | Example (hospitality and jewellery) |
|---|---|---|
| Informative | The information the image carries, in the context of the page, in one sentence | Hero of a villa: "Private pool and deck of a one-bedroom villa at sunset, sea beyond" |
| Decorative | Empty alt attribute (`alt=""`) so the screen reader skips it; never omit the attribute, which makes some readers announce the file name | A texture, a divider, a mood image repeated from the hero |
| Functional | The action the control performs | A magnifier icon button: "Search" (avoid: "magnifying glass") |
| Image of text | The text itself | A quoted review set as an image: the full quote |
| Complex | A short alt plus a long description in the page or a linked page | A floor plan: alt "Floor plan of the two-bedroom residence"; the room list and sizes as text below |
| Product image on a PDP | The product as a buyer would describe it: material, form, the view shown | "18k yellow gold bangle with channel-set diamonds, shown on a wrist" (avoid: "bangle") |

Rules: never begin with "image of" or "picture of" (the screen reader already announces the element type); length is as long as the information needs and no longer, usually under about 150 characters (the often-quoted 125-character limit comes from older behaviour of JAWS, the Freedom Scientific screen reader, and is not in any standard); no keyword stuffing; include text that is in the image; write the alt in the language of the page; in a carousel, each image has its own alt; and a luxury brand's alt text is written with the same care as its captions, because the person reading it is a guest.

### 8.2 Link text

A link's text must make sense out of context, because screen reader users navigate by pulling up a list of links. "Learn more", "Click here", "Read more" and a bare URL fail; "See the cancellation policy", "Download the floor plan (PDF, 2 MB)" pass. WCAG 2.2 success criterion 2.4.4 Link Purpose (In Context) is level A; 2.4.9 Link Purpose (Link Only) is AAA and is the house target because it costs nothing. Two links with the same text go to the same place, always (house rule; it supports 2.4.4 and 2.4.9). The same function carries the same label across pages, "Search" everywhere and never "Find" on some pages (3.2.4 Consistent Identification, AA). State the format and size for downloads, and whether a link opens a new window.

### 8.3 Heading structure

Headings are an outline, read as a list by screen reader users (the most common way they navigate a long page, in WebAIM's screen reader surveys). One h1 per page, which matches the page title; h2 for sections, h3 inside, never skipping a level, never choosing a level for its size (size is a style decision made in CSS). Each heading describes what is beneath it (WCAG 2.4.6 Headings and Labels, AA). A heading is never a question the section does not answer, never a joke, and never the only indicator of a state (a red heading "Error" with no text).

### 8.4 Reading order

The order in which a screen reader reads a page is the DOM order (document object model, the page's element tree), which must match the visual order and the logical order (WCAG 1.3.2 Meaningful Sequence, A). The writer's responsibility: the copy must make sense read top to bottom with no images, which is also the content-first test (section 12.1). Common failures: a price placed visually beside a product name but after the description in the DOM; a "Pay" button that reads before the total; a modal whose close button reads before its title. In RTL layouts the DOM order is unchanged and the visual mirror happens in CSS, so the reading order is preserved automatically if the DOM was right.

### 8.5 Captions and transcripts

Prerecorded video needs captions (WCAG 1.2.2, A) and an audio description or a text alternative (1.2.3, A; 1.2.5 audio description, AA); live video needs captions (1.2.4, AA); audio-only content needs a transcript (1.2.1, A). The writer's craft in captions (accuracy, speaker identification, sound descriptions in brackets, line length of about 32 to 42 characters, reading rate) and the file formats (SRT, the SubRip text format; WebVTT, the W3C web video text tracks format; the burnt-in versus sidecar decision for social) are in 11-accessibility-and-inclusive-design.md, section 10, and in 16-editing-colour-grading-and-delivery.md, section 11; this file's rule is that captions and transcripts are written in the voice chart's register and are proofread as copy, because they are the version of the film most people on Instagram actually read.

### 8.6 Plain language for cognitive accessibility

WCAG 2.2 section 3.1 (Readable) carries the content criteria: 3.1.1 Language of Page (A) and 3.1.2 Language of Parts (AA) require the `lang` attribute on the page and on any passage in another language (a Hindi string inside an English page, an Arabic brand name), so that screen readers switch pronunciation; 3.1.3 Unusual Words, 3.1.4 Abbreviations and 3.1.5 Reading Level are AAA and the house treats them as the standard for consent, payment and policy copy. The W3C Cognitive and Learning Disabilities Accessibility Task Force's "Making Content Usable for People with Cognitive and Learning Disabilities" (W3C Working Group Note, 2021) adds the patterns: clear words, short sentences, one idea per paragraph, consistent navigation, explicit instructions, no time limits without warning, and help that is easy to find. The reason these matter to a luxury product specifically: fatigue, jet lag, a second language and a wedding week are cognitive load, and the guest in all four states is the one trying to pay. The cognitive accessibility detail (the task force's guidance, reading level, timeouts) is in 11-accessibility-and-inclusive-design.md, section 9.

### 8.7 Strings that are accessibility attributes

Some strings are never seen and are still copy; the writer owns them in the copy deck, each with its own key.

| Criterion (WCAG 2.2) | What the writer writes | Example and reason |
|---|---|---|
| 2.5.3 Label in Name (A) | An accessible name (the name assistive technology announces) that contains the visible label and starts with it | A button showing "Reserve" is named "Reserve" or "Reserve Villa 3" (avoid: "Book now"), because voice-control users say what they see |
| 4.1.3 Status Messages (AA) | Toasts, "Checking availability", "Added to bag" and result counts, announced without moving focus (role="status" or aria-live="polite") | Short sentences that make sense heard alone: "24 stays found" |
| 1.3.3 Sensory Characteristics (A) | Instructions that name the control | Never "tap the gold button" or "the menu on the right", which is also wrong in an RTL build |
| 2.4.2 Page Titled (A) | The HTML title: page, then brand | "Payment, Example Haveli"; prefixed "Error: " when a form returns errors (section 4.5) |
| 3.3.7 Redundant Entry (A) | An offer to reuse data already given | "Same as billing address" |
| 3.3.8 Accessible Authentication (Minimum) (AA) | Helper text that never forbids paste | Password and code fields accept paste and password managers (section 4.25) |
| 3.2.6 Consistent Help (A) | A help route in the same place on every page | "Contact the concierge" in one position throughout |
| 2.2.1 Timing Adjustable (A) | A persistent route for anything shown briefly | Every Undo toast also has Undo in the item's menu or a "Recently removed" list (section 4.6) |

## 9. Naming

### 9.1 Features, products and plans

Naming inside a product follows one rule above the others: a feature is named by what it does, in the person's words, in lower case, unless it is a product the brand will market. "Saved cards" is a feature; "Signature" is a membership tier the brand sells; "Concierge" is a service that already has a name in the world. The reason to resist naming features: every proper noun is a term the person must learn and the translator must transcreate, and a product with eight coined names ("Discover", "Moments", "Vault", "Hub") reads as a product that could not decide what it was. Naming hierarchies across a portfolio are in 18-brand-strategy-and-identity-design.md, section 1.6.

Taxonomy of names (the categories used by naming agencies such as Igor and by Alexandra Watkins in "Hello, My Name Is Awesome", 2014, second edition 2019):

| Type | Example | When it fits a product or plan | Cost |
|---|---|---|---|
| Descriptive | "Late checkout", "Family suite" | Features and options: zero learning | No distinctiveness; cannot be trademarked alone |
| Suggestive | "Quiet hours", "The Residences" | Plans and programmes that need a mood | Needs one line of explanation on first use |
| Evocative or experiential | "Signature", "Private", "Atelier" | Membership tiers in luxury, where the name signals a world | Must be backed by a real difference in the offer |
| Invented | "Aman", "Soneva" | Brands and sub-brands, never features | Expensive to establish; easiest to protect |
| Founder or place | "Oberoi", "Jumeirah" | Brands and properties | Inherits the place's meaning, including its politics |

Plan names: avoid "Basic", "Pro", "Premium", "Platinum" and the metals ladder in luxury, because they rank the customer in front of themselves; name tiers by the experience ("Member", "Signature", "Private") and make the difference legible in one line under each. Never name a tier "Free" in a luxury product; name what it includes.

### 9.2 Naming criteria

Watkins's SMILE and SCRATCH tests are the house's first filter: a good name is Suggestive, Meaningful (it resonates with the audience), uses Imagery, has Legs (can extend into campaigns and sub-brands) and is Emotional; it is rejected if it is Spelling-challenged, a Copycat, Restrictive, Annoying, Tame, suffers the Curse of knowledge (only insiders get it) or is Hard to pronounce. To that the house adds, for the markets it works in:

- Pronounceable by a Hindi speaker and an Arabic speaker without a lesson. Arabic has no native /p/ or /v/ (Pepsi becomes "Bebsi" in Gulf speech) and no /g/ in Modern Standard Arabic (Gulf dialects do have it); Hindi speakers conflate /v/ and /w/ and add vowels inside consonant clusters. A name that depends on those sounds will be reshaped by the market.
- Transliterable into Devanagari and Arabic script with one agreed spelling, checked for meaning in Hindi, Urdu, Arabic, Marathi, Gujarati, Tamil and Malayalam (the Gulf's South Indian audience), see 18-brand-strategy-and-identity-design.md, section 2.3.
- Passes the WhatsApp test: a person who hears it once can type it and find it.
- Not already a common noun in the product's own vocabulary (a tier called "Reservation" collides with the terminology table).
- Available as a domain, an Instagram handle and, for anything sold, a trademark in the right class (section 9.3).

### 9.3 Trademark checks

A product, plan or programme name that will appear in marketing is pre-screened before anyone falls in love with it. The process, the registries (India's Trade Marks Registry search under the Trade Marks Act 1999, the UAE Ministry of Economy register under Federal Decree-Law No. 36 of 2021, WIPO's Global Brand Database and the Madrid System) and the law of names in both markets are in 18-brand-strategy-and-identity-design.md, sections 2.4 and 2.6. The content designer's part: record the classes of the Nice Classification (the international system of 45 classes of goods and services under which trademarks are registered) that the name must clear (class 43 for hotel and restaurant services, class 14 for jewellery, class 3 for cosmetics, class 36 for real estate services, class 35 for retail and advertising, class 9 and 42 for software and apps), and record the clearance result in the terminology table so that a cleared name is not quietly changed in a later sprint.

## 10. Writing for AI products

AI products ship text that no other product category has: the system's own description of its abilities, text that arrives token by token, refusals, citations and warnings. The craft references are Microsoft's "Guidelines for Human-AI Interaction" (Saleema Amershi and colleagues, CHI 2019; 18 guidelines, with G1 "make clear what the system can do" and G2 "make clear how well the system can do what it can do" as the writer's first two), Google's People + AI Guidebook (PAIR, 2019, revised 2021; chapters on mental models, explainability and trust, and errors and graceful failure), and Apple's Human Interface Guidelines, which carry a "Generative AI" page. The interaction patterns are in 09-interaction-design-and-ux-patterns.md, section 10; the tooling and AI in UX work are in 22-ai-era-craft-and-generative-tools.md, section 9.

### 10.1 Visible system messages

The copy that tells the person what the AI is, what it can do, and what it cannot. Rules: state the capability in task terms ("Ask about availability, dining, and spa bookings"), state the limit next to it ("I can't change a reservation; a concierge can, and I'll pass you over"), name the thing as what it is (an assistant, never presented as a person; the EU AI Act, Article 50(1), applicable from 2 August 2026, requires that people are informed they are interacting with an AI system unless it is obvious), and never claim understanding or feeling ("I understand how frustrating that is" from a model is a cheap tell; "That shouldn't have happened. Here's what I can do" is honest).

### 10.2 Streaming text conventions

Streaming is the display of a response as it is generated. Conventions as observed across ChatGPT, Claude, Gemini and Perplexity, as of October 2026: a visible cursor or pulse while tokens arrive; a "Stop" control that replaces "Send" during generation; Markdown rendered progressively so that headings and lists form as they arrive; a short status line for tool use ("Checking availability for 14 to 16 March") in a quieter style than the answer; and the answer's first sentence written to stand alone, because people act on it before the rest arrives. The writer's rules for the model's output, set through the system prompt: sentence case, no exclamation marks, short paragraphs, numbers formatted for the locale, no em dashes (the house rule applies to generated text, and is enforced in the prompt and by a post-processing check), and a length budget per surface (a chat bubble in a hotel app holds about 300 characters comfortably).

### 10.3 Error and refusal copy

An AI product fails in new ways: it does not know, it is not allowed, it is uncertain, it is overloaded, or the tool it called failed. Each needs its own copy:

| Failure | Copy pattern | Example |
|---|---|---|
| Does not know | Say so and route | "I don't have the spa's Friday hours. The spa desk does: +971 4 000 0000, or I can ask them to call you." |
| Not allowed (policy or scope) | State the boundary without moralising, offer the nearest permitted help | "I can't give medical advice about that reaction. The hotel doctor is available 24 hours; shall I call them?" |
| Uncertain | Mark confidence in words and give the way to verify | "The Diwali rate is probably the same as last year's, ₹42,000 a night, and I've asked reservations to confirm." |
| Overloaded or down | Plain, with a time | "I'm not responding right now. Try again in a minute, or message the concierge on WhatsApp." |
| Tool failed | Separate the model from the tool | "I couldn't reach the booking system. Your dates aren't held yet." |

Never "I apologise for any inconvenience", never "As an AI language model", never a refusal that lectures. Under the EU AI Act and under the house's own rules a refusal is a service moment and is written in the voice chart.

### 10.4 Citations

A citation in an AI answer is the link to the source the answer was drawn from. Rules: numbered inline markers that are tappable, a sources list in order of first use, the source's real title and domain (a bare URL tells the person nothing), the retrieval date for anything time-sensitive, and a visible difference between a quotation and a paraphrase. For a client product, the sources are the client's own content (the policy, the menu, the rate) and the citation is the way the person checks the assistant: "Cancellation is free until 48 hours before arrival (Cancellation policy, updated 2 March 2027)". A citation that cannot be opened is decoration.

### 10.5 Short disclaimers

The persistent line under an AI input is a disclaimer that must be read and so must be short. ChatGPT, Gemini and Claude each carry one under the input: the product's name, a statement that it can make mistakes, and an instruction to check what matters, in under about 60 characters and in sentence case (check the live wording before quoting any of them). The pattern for a client: "{Assistant} can make mistakes. Confirm anything you'll pay for." The legal text (data use, retention, the model provider) sits one tap away under "How this works", and is written to section 4.19's rules.

### 10.6 Prompt placeholder copy

The placeholder in the input box teaches the person what to ask. Rules: a real example in the person's words ("Is there a table for 4 on Friday at 8?"), rotated from a small set, never a generic "Ask me anything" or "Type a message", never a leading question that the assistant cannot in fact answer, and cleared the moment the person types. Suggested prompts shown as chips below the input follow the button rule (verb plus object, under 25 characters): "Book a spa slot", "Change my dates", "Late checkout?".

### 10.7 Labelling generated content

Where a product shows AI-generated images, text or audio to the public, it labels them. The EU AI Act, Article 50(2) and 50(4), requires machine-readable marking of synthetic output and disclosure of deepfakes from 2 August 2026, with a lighter notice for evidently artistic work; the Digital Omnibus on AI set a transitional deadline of 2 December 2026 for the 50(2) marking by providers of generative systems already on the market before 2 August 2026 (European Commission, AI Act Service Desk timeline, checked October 2026), with every other Article 50 duty applying on schedule. India's Ministry of Electronics and Information Technology (MeitY) published draft amendments to the IT Rules 2021 on 22 October 2025 proposing a visible label covering at least 10 per cent of the visual display, or the first 10 per cent of an audio clip; the amendment notified on 10 February 2026 (G.S.R. 120(E), in force 20 February 2026) requires synthetically generated content to be prominently labelled and embedded with permanent metadata or provenance markers, and a further draft of 21 April 2026 proposed that labels stay visible for the whole duration of visual content. Read the Gazette text for any size rule before an Indian launch. The copy rule either way: a plain label ("Generated image", "AI-assisted translation") in the same style as a caption, never hidden in a tooltip, never phrased as an apology. For how Mask360 handles generated imagery in client work and its disclosure duties, see 22-ai-era-craft-and-generative-tools.md, section 7.6.

### 10.8 Agentic actions, feedback and persona

An agentic action is one the assistant performs for the person: it books, pays, cancels or messages staff.

- Before acting, confirm the object, amount, date and reversibility in one line, with two named buttons: "Book the 20:00 table at Example Haveli for 4? No charge; cancel free until 18:00." Buttons: "Book table" / "Not now". Spending money always needs an explicit tap; an inferred yes from the conversation never counts.
- After acting, echo the result with the reference and the undo window: "Booked. Confirmation 8H2K4. Undo until 18:00." This is Amershi et al.'s G16 (convey the consequences of user actions) in copy.
- Feedback: thumbs controls with accessible names ("Helpful", "Not helpful") and an optional reason list ("Wrong information", "Didn't answer", "Too long"); regenerate is labelled "Try again" (G15, encourage granular feedback).
- Memory: say what is kept and where to switch it off: "I'll remember you prefer a quiet room. Manage this in Settings."
- Persona naming is contested. A human name (Bank of America's Erica) gives warmth and invites people to assume a human, which blurs the Article 50(1) disclosure (section 10.1). The house names the assistant by function ("Example Haveli concierge assistant") with "AI assistant" under the name.
- Review assistant and WhatsApp flows against Grice's cooperative maxims as Erika Hall's Conversational Design (2018) applies them: quantity (as much as needed and no more), quality (only what is true), relation (relevant), manner (clear and orderly). The conversational patterns are in 09-interaction-design-and-ux-patterns.md, section 14.

## 11. Writing for luxury and hospitality products

### 11.1 Booking flows

The booking flow is where the marketing voice stops (section 1.3) and the product voice carries a person who has decided through five to seven screens of risk: dates, room, rate, guests, payment, confirmation. Rules:

- Name the steps as the person thinks of them: "Dates", "Room", "Guests", "Payment", "Done". Never "Step 3: Configuration".
- The summary panel repeats the facts on every step (property, dates, nights, room, rate, total) so the person never scrolls back. It is the most read copy in the flow and is written in fragments: "Villa 3. 14 to 16 March. 2 nights. 2 adults."
- Rate names describe the deal itself: "Flexible rate", "Non-refundable rate", "Member rate", "Stay 3, pay 2". A rate called "Serenity Escape" hides the cancellation terms.
- The short-form policy (section 7.3) sits beside the rate: "Cancel free until 12 March, 18:00 Dubai time. After that, the first night is charged." The long form is one tap away.
- The pay button carries the amount and the currency: "Pay AED 2,310" or "Hold with card, pay at the hotel". Nothing is charged that the button did not name.
- Sold out is a specific sentence with an alternative: "Villa 3 is taken on 15 March. Villa 2 is free for the same dates, or Villa 3 from 16 March."
- Price breakdown lines are named in the words the invoice will use. Dubai bills carry each charge named as in section 4.21, confirmed with the property's finance team, one line each. In India, GST on hotel rooms is tiered by tariff (as of the rate changes effective 22 September 2025, 5 per cent without input credit for rooms up to ₹7,500 a night and 18 per cent above), so a product that shows "taxes extra" on a room has hidden a figure that changes the decision.
- Guest details ask only what the property needs for check-in and the law (name as on passport, nationality, Emirates ID or passport number for UAE hotels, which the Dubai Department of Economy and Tourism's guest registration requires), each with its reason in helper text (section 4.4).

### 11.2 Concierge tone

A concierge channel (in-app chat, WhatsApp, a messaging feature in the hotel app) is product copy written one message at a time, and the assistant or agent's lines are drafted in the voice chart. The register is the professional who does not need to sell: attentive, unhurried, exact. Rules the house briefs:

- Greet once by name and never again in the same conversation. "Good evening, Ms Mehta. How can I help?" No emoji, no exclamation mark, no "Hey".
- Answer the question first, then add the one thing the person will ask next. "Yes, the pool is open until 22:00. Towels are at the deck." 
- Give times, prices and names, never "shortly", "a team member", "our best price".
- Promise only what is confirmed. "I've asked housekeeping for a cot; they'll confirm within 20 minutes" rather than "A cot will be arranged".
- Hand over visibly. "I'm passing this to Ravi at the front desk, who can change the booking. He'll message you here."
- Close with the next step. "Your table is held until 21:15. See you then."
- Templates (quick replies) are written once, in the voice chart, and never contain placeholders that an agent can forget to fill; "{guestName}" sent raw to a guest is a measured failure in every hospitality chat review.

### 11.3 Confirmation emails

A confirmation email is a document the guest keeps, forwards and shows at the desk; it is product copy, written as a record.

| Part | Rule | Example |
|---|---|---|
| Subject | Fact first, under about 50 characters so it survives mobile truncation, no marketing, no exclamation mark | "Reserved: Villa 3, 14 to 16 March" |
| Preheader | The reference and the next step | "Confirmation 8H2K4. Check-in from 14:00." |
| Opening | One sentence of confirmation, the guest's name once | "Ms Mehta, your reservation at Example Haveli, Jaipur is confirmed." |
| Facts block | Property, address, dates, nights, room, guests, rate, inclusions, total paid or due, reference, in a two-column table that reads in order on a screen reader | |
| Next step | What to do, with a date | "Add the stay to your calendar. We'll message you on WhatsApp on 11 March to arrange your transfer." |
| Policies | The short form of cancellation, ID, child and pet policies, with the link to the long form | "Cancel free until 12 March, 18:00 IST." |
| Contact | One phone number, one email, one WhatsApp, with hours | |
| Legal footer | The entity name, address, registration, and the data notice link; no unsubscribe on a transactional email (there is nothing to unsubscribe from), and marketing is never appended to a confirmation | |

A plain-text version is generated from the same strings for clients that strip HTML, and the whole email is proofread as a document, because a wrong date in a confirmation is the most expensive typo a hotel can make. The calendar attachment (.ics) carries the same facts and the property's address in a form Maps can read.

The sender name is the brand plus function ("Example Haveli Reservations"), and reply-to is a monitored inbox, never "noreply", because a guest's reply to a confirmation is a service request. Since February 2024 Gmail and Yahoo require bulk senders (over 5,000 messages a day to Gmail) to authenticate with SPF, DKIM and DMARC (the three email authentication standards), to offer one-click unsubscribe (RFC 8058) on marketing mail, and to keep spam rates under 0.3 per cent: one more reason never to append marketing to a confirmation. The same rules run across the transactional suite: password reset (with the expiry and "If you didn't ask for this, ignore this email"), receipt and tax invoice, pre-arrival, cancellation confirmation, refund issued. Email build is in 21-web-design-and-digital-craft.md, section 10.

### 11.4 In-stay messaging

In-stay messaging is the sequence of transactional messages from booking to departure, most often on WhatsApp in India and the Gulf. The platform constraints (WhatsApp Business Platform, as of October 2026): messages outside an open 24-hour customer service window must be pre-approved templates in one of three categories (marketing, utility, authentication); utility templates carry a text header of up to 60 characters, a body of up to 1,024, a footer of up to 60, and up to 10 buttons of 25 characters each; pricing has been per message since 1 July 2025, and from 1 October 2026 utility messages inside an open window are charged too, with service messages free up to 1,000 per phone number per month. Each message is therefore a cost and a permission, and the arc is designed as a whole:

| Moment | Message (utility) | Rule |
|---|---|---|
| 3 days before | "Your stay at Example Haveli begins on 14 March. Check-in is from 14:00. Shall we arrange a transfer from Jaipur airport?" Buttons: "Arrange transfer", "No transfer" | Ask one question with buttons so the reply needs no typing |
| Arrival morning | "Villa 3 is ready from 14:00 today. Reply here if you'd like an early check-in and we'll see what we can do." | A promise only if it can be kept |
| In stay | One message a day at most, only with news the guest needs: "Breakfast on 15 March is on the terrace from 07:30 because of the garden event." | Silence is the luxury default; each message must carry news |
| Departure eve | "Check-out is by 12:00 tomorrow. Your bill is ₹84,000; see it here. Shall we hold a late check-out until 14:00 (₹6,000)?" | The amount, the time, the option |
| After departure | One message, within 24 hours, for the invoice and a single-question review request; marketing consent is a separate, later ask | A review request sent with a promotion is marketing and will be classed and priced as such |

Quiet hours (the house default 09:00 to 21:00 local, adjusted for Ramadan, when evening hours move later) and the opt-out line ("Reply STOP to stop these messages") apply to every message.

### 11.5 Jewellery product copy inside PDPs

A product detail page (PDP) for fine jewellery is specification writing with a luxury register: the person is deciding on a figure in lakh or in tens of thousands of dirhams and wants facts set with care. Materials language:

- Metal and fineness together: "18k yellow gold (750)", "22k gold (916)" for Indian bridal, "platinum 950". Karat is a proportion of 24; fineness is parts per thousand; luxury clients state both because the Indian buyer reads 916 and the Gulf buyer reads 22k.
- Hallmark: in India, the Bureau of Indian Standards (BIS) hallmark with the six-digit alphanumeric HUID (hallmark unique identification) is the legal assurance of purity for gold jewellery under the Hallmarking of Gold Jewellery and Gold Artefacts Order (first issued 15 January 2020 and amended repeatedly since; mandatory hallmarking was rolled out district by district from June 2021, and from 1 April 2023 only six-digit HUID-hallmarked gold jewellery may be sold). The PDP states "BIS hallmarked, HUID on the piece"; the exact HUID is on the invoice.
- Diamonds: the 4Cs (carat, colour, clarity, cut), with the certificate named ("GIA report 2201234567", from the Gemological Institute of America), carat to two decimals (0.52 ct), colour as a letter (D to Z), clarity by grade (FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1 to I3), cut only for round brilliants where GIA grades it. Lab-grown diamonds are stated as such in the product name, every time, because omission is misrepresentation.
- Coloured stones: origin and treatment if known ("Burmese ruby, heated"), which is the disclosure convention of the trade.
- Weights: gross weight and net metal weight in grams to two decimals, because Indian pricing is by weight and the buyer will calculate.
- Size and fit: ring sizes in the Indian and the international scale together; bangle diameter in mm; chain length in cm; adjustability stated.
- Lead time for made-to-order pieces in working days; "Price on request" only when the client's policy requires it and then with a way to request that works in one tap.
- Care: one sentence, imperative, specific ("Remove before swimming; chlorine dulls the rhodium finish").

| Before | After |
|---|---|
| "A stunning statement of timeless elegance, this exquisite bangle is crafted from the finest gold and adorned with dazzling diamonds." | "18k yellow gold bangle (750), 32.40 g gross, set with 24 round brilliant diamonds, 2.10 ct total, G colour, VS clarity. BIS hallmarked. Inner diameter 62 mm." |

### 11.6 Beauty product copy inside PDPs

- Ingredients listed by INCI name (International Nomenclature of Cosmetic Ingredients) in descending order of concentration down to 1 per cent, then in any order, which is the convention of EU Regulation 1223/2009 Article 19 and the one Indian and Gulf retailers follow; India's Cosmetics Rules 2020 govern the label and the house mirrors the label on the PDP so that the two never disagree.
- Net quantity in ml or g, period after opening (PAO: the open-jar symbol with "12M"), country of origin, and the manufacturer or importer, because these are what the label carries and what a reader who has been told to check checks.
- Claims: every claim is either verifiable on the PDP ("dermatologist tested" with the test named) or removed. In India the Advertising Standards Council of India's code and the Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 constrain therapeutic claims; in the UAE, cosmetic products fall under the Ministry of Industry and Advanced Technology's conformity schemes and the cosmetic safety standard of the GCC Standardization Organization (GSO). "Clean", "natural", "chemical-free" and "non-toxic" are undefined terms and the house does not use them unless the brand defines them on the page.
- Usage in the imperative, with quantity and timing: "Apply two pumps to damp skin, morning and evening." Fragrance notes in the trade's three-tier form (top, heart, base) for perfume.
- Skin and hair type in the person's words, never clinical.

### 11.7 Real estate listings

A listing is product copy under advertising law. In India, the Real Estate (Regulation and Development) Act 2016 requires every advertisement to carry the project's registration number with the Real Estate Regulatory Authority (RERA) and the authority's website address (section 11(2)); the Act makes carpet area the basis of sale, and state authorities such as MahaRERA require it in advertisements (section 4.23); prices are in ₹ crore and lakh with the full figure on the price sheet. In Dubai, RERA (the Real Estate Regulatory Agency under the Dubai Land Department) requires a Trakheesi advertising permit number on every listing, and listings carry the price in AED, area in sq ft, the community, the completion status (ready or off-plan, with the expected handover quarter for off-plan) and the service charge per sq ft per year. The copy rule: the facts in the first line, the view and the finish in the second, nothing else. "Three-bedroom residence, 2,450 sq ft, Palm Jumeirah. Sea-facing, Italian stone, private pool. AED 9.5 million. Ready. Permit 1234567890."

### 11.8 The difference from marketing copy

| Dimension | Marketing copy (mask360-copywriting) | Product copy (this file) |
|---|---|---|
| Goal | Desire, then one action | Completion, then confidence |
| Measure | Attention, recall, conversion to the first action | Task success, error rate, support contacts, comprehension |
| Register | Persuasion with restraint; the 5-point structure | Service: exact, brief, second person |
| Adjectives | Rare, chosen, image-carrying | Absent, unless they are specifications ("non-refundable", "sea-facing") |
| Length | As long as the story needs | As short as the task allows |
| Voice | Brand speaking to the world | Brand speaking to one person who has already said yes |
| Review | Creative director | Content designer, with legal on consent and payment strings |
| Where it ends | At the first "Reserve" | At the thank-you after departure |

### 11.9 Fashion and accessories product copy inside PDPs

- Composition by percentage in descending order, with generic fibre names ("Silk 100%", "Wool 70%, cashmere 30%"), lining stated separately.
- Care as imperative fragments that match the ISO 3758:2023 symbols on the sewn-in label ("Dry clean only. Do not tumble dry."), so the PDP and the label never disagree.
- Size in the brand's own scale plus a conversion table (IN, UK, EU, US), and fit from measurements: "Model is 178 cm and wears S."
- Country of manufacture stated plainly ("Made in Italy"), which India's e-commerce rules require before purchase (section 4.24).
- Personalisation (monogram, engraving): the character limit sits in the helper text ("Up to 10 characters, letters A to Z"), with a live preview, the lead time in working days, and "Personalised pieces cannot be returned" beside the button.
- Clienteling (a boutique's one-to-one service for known clients) strings carry time, place and hold duration: "Reserved at the Palladium boutique until 19:00 tomorrow." "Book an appointment" offers a slot and the stylist's name. "Price on request" is one tap, with the response time stated ("We'll reply within 2 hours").

### 11.10 Restaurants, events and weddings

- Reservations name the hold ("We hold tables for 15 minutes after the booking time"), the deposit and no-show fee with the amount and when it is charged, and the dress code in plain terms ("Smart casual. No shorts after 19:00"). The pattern is in 09-interaction-design-and-ux-patterns.md, section 7.2.
- UAE alcohol: "Guests must be 21 or over to be served alcohol. Bring your Emirates ID or passport."
- Dietary tags come from a controlled vocabulary (vegetarian, vegan, Jain, halal, contains nuts), and allergen statements match the kitchen's declaration word for word. In India the Food Safety and Standards Authority of India's (FSSAI) Labelling and Display Regulations 2020 set the vegetarian and non-vegetarian symbols and allergen declarations on packaged food, and calorie display for larger food service chains; confirm the scope with the client's counsel before citing it on a menu.
- Events: ticket type, entry window, ID and age rule, transferability, refund rule and access information, in that order on the ticket page and the pass.
- Wedding microsites: an RSVP per function ("Mehendi, 14 March, 16:00: Attending / Not attending"), guest-count limits per invitation, and dietary capture for each guest by name.
- Apple Wallet and Google Wallet passes carry the same facts as label and value pairs ("Table: 4 guests", "Entry: from 19:00"), with policies on the back of the pass; front fields hold a few words because values truncate.

## 12. Process

### 12.1 Content-first design

Jeffrey Zeldman's line (2008) is the principle: content precedes design, and design in the absence of content is decoration. In practice: the content designer writes the screen as a priority guide (a plain text document listing what the screen must say and do in order of importance, a method from Drew Clemens's "Design Process in the Responsive Age", A List Apart, 2012) before any frame is drawn; the designer lays out the real words; the engineer builds from the string table. The test of a content-first screen is that it works as text alone, which is also the screen-reader test (section 8.4) and the test of whether the page is an idea or a decoration (see design-taste, section 4, the single idea).

### 12.2 Writing in Figma with real copy

- No lorem ipsum, ever. Real strings from the copy deck, real names from the market, real prices in the right format, real dates in the right order. Lorem ipsum hides the two problems that decide a layout: how long the words are and whether they say the right thing.
- Figma's string variables with modes (available since the 2023 variables release) hold the English, Hindi and Arabic strings on one frame so that a locale swap shows truncation and bidi problems in the design file. As of October 2026 the Ditto plugin links Figma text layers to a managed string table and syncs edits in both directions; the house uses it on products with more than one language or more than one writer, and a shared copy deck on smaller work.
- Text layers are named with the string key (booking.summary.payButton) so that a designer and an engineer are talking about the same thing.
- Every frame is tested at the longest locale and the largest supported text size before review.
- The design review includes the content designer, who reviews the words in place; words reviewed in a spreadsheet are reviewed out of context.

### 12.3 Copy decks

A copy deck is the document that carries every string from writer to designer to translator to engineer. Columns: key; surface (screen or email); element type (button, label, error, toast); English string; Hindi; Arabic; context note (where it appears, what triggers it, what the placeholders hold); character budget; placeholders and their types; plural or gender variants; status (draft, reviewed, approved, in build, live); owner; version; link to the Figma frame. The reason for the context note on every row: translators, engineers and the writer's own future self all see strings out of context, and the note is the only thing that stops "Open" the verb from becoming "Open" the adjective.

### 12.4 String tables and formats

| Format | Platform | Plural support | Notes |
|---|---|---|---|
| String Catalogs (.xcstrings) | Apple, since Xcode 15 (2023) | Yes, via the String Catalog's plural variants | Replaces .strings and .stringsdict; one file for all locales |
| strings.xml with `<plurals>` | Android | Yes, CLDR categories | Quantity strings per category |
| JSON (i18next, FormatJS) | Web | Yes, with ICU MessageFormat | i18next needs the ICU plugin for full MessageFormat |
| ARB | Flutter | Yes, ICU | JSON with metadata entries |
| XLIFF 2.1 | Exchange with translators (OASIS standard, 2018) | Carries plural units | The interchange format every TMS exports |
| PO (gettext) | Legacy web and desktop | Yes, by plural rule expression | Still common in PHP and Python products |

Keys name the surface, the element and the purpose (booking.summary.payButton, booking.error.cardDeclined), never the English text (a key called "submit_button" that now says "Reserve" is a bug waiting to be found in translation). One key per grammatical role; shared strings only where the meaning is identical in every language.

### 12.5 Review and sign-off

A string ships when: it passes the mechanics checklist (sections 5.1 to 5.5), it is in the terminology table or adds to it, it has a context note and a budget, it has been read aloud (the ear catches what the eye forgives), it has been seen in place at mobile width, the Hindi and Arabic are in-context reviewed (section 6.9), legal has signed consent and payment strings against the current regulation, and the client's content owner has signed the version. Sign-off is recorded against the string table version, so that any later change triggers a new review against a known, signed version.

Automation carries the mechanical half of review. Vale, an open-source prose linter whose rules are YAML (plain-text configuration) files, runs in continuous integration (CI) over Markdown, JSON string files and docs: a regular expression fails U+2013 and U+2014; the banned terms from the terminology table ("log in", "Submit", "Learn more", "Oops") fail; exclamation marks, Title Case in button strings, "e.g." and straight apostrophes fail. Acrolinx and Writer are the commercial equivalents, and Figma plugins lint text layers against the same list. A review pass by a large language model (LLM) with the voice chart and terminology table in its prompt flags tone and never signs off. Each component's content rules (budget, label pattern, examples, do and don't) live in its design-system documentation, as in Polaris and Atlassian, so the rule is in front of the writer at the moment of writing; see 07-design-systems-and-tokens.md, section 9.

### 12.6 Measuring copy

The research methods behind these are in 08-ux-research-and-strategy.md, sections 6 (usability testing), 8.1 (A/B testing) and 9.4 (five-second tests).

| Method | What it measures | How | Threshold or reading |
|---|---|---|---|
| Task success in usability tests | Whether the words let people finish | Five people per round, think-aloud, the string under test in context | A string that two of five misread is rewritten |
| Support tickets by string | What the copy failed to explain | Tag tickets to the screen or string they arose from | A top-ten string gets rewritten and retested |
| Cloze test | Comprehension of a passage | Delete every sixth word, ask people to fill the blanks (Nielsen, NN/g, 2011) | 60 per cent correct is the pass mark |
| Highlighter test | Tone against the voice chart | Readers mark what sounds like the brand in green and what does not in red, string by string | Red clusters name the strings to fix |
| Paraphrase test | Whether a policy or consent is understood | Ask the person to say the policy back in their words | Any misstatement of money or date fails |
| Five-second test | What a screen's words communicate at a glance | Show for five seconds, ask what it was for | The answer must name the task |
| A/B test | Which of two strings produces more of a measured action | Split traffic, hold everything else constant | At a 5 per cent baseline conversion, detecting a 10 per cent relative lift (to 5.5 per cent) at 95 per cent confidence and 80 per cent power needs about 31,000 sessions per arm; at a 20 per cent baseline, about 6,500 (Evan Miller's sample size calculator). Run whole weeks, including the Gulf weekend, fix the stopping point in advance and do not peek. Most luxury flows lack this traffic, so the house tests copy qualitatively and keeps A/B tests for the booking button and pushes |
| Tone perception survey | How friendly, formal and trustworthy the copy feels | The NN/g method: rate the same content in two tones on scales | Use for the voice chart's calibration, once a year |
| Translation defect rate | Quality of localised strings | MQM errors per thousand words by severity | Set with the vendor; critical errors (money, dates, legal) are zero-tolerance |

## 13. Reference tables

### 13.1 Character limits by platform and element

Hard limits are from the platform's documentation; visible limits ("about") depend on device, font size and launcher and are the house's working figures for English. Reduce by the expansion factors in section 6.1 for Hindi and Arabic. Social caption and bio limits are in 26-platform-and-format-specs-2026.md, section 2.

| Platform and element | Limit | Kind | Note (as of October 2026) |
|---|---|---|---|
| iOS push: payload | 4 KB (4,096 bytes) for standard notifications | Hard (Apple Push Notification service, APNs, documentation) | VoIP pushes 5 KB |
| iOS push: title on the lock screen | About 40 characters before truncation | Visible | Body about 100 to 150 characters on the collapsed banner; long press expands |
| Android push: payload | About 4 KB (Firebase Cloud Messaging) | Hard | Data messages slightly less |
| Android push: title and body | About 65 characters title, about 240 body expanded | Visible | Varies by launcher and by the phone maker's (OEM, original equipment manufacturer) skin |
| SMS, GSM-7 alphabet (the 7-bit default SMS alphabet; English) | 160 characters per message; 153 per segment when concatenated | Hard (GSM 03.38, now 3GPP TS 23.038) | A single curly quote or ₹ forces UCS-2 |
| SMS, UCS-2 (the 16-bit encoding; Hindi, Arabic, any non-GSM character) | 70 characters; 67 per segment concatenated | Hard | A Hindi OTP message of 80 characters is two billed segments |
| WhatsApp template: header text | 60 characters | Hard (WhatsApp Business Platform) | One placeholder allowed |
| WhatsApp template: body | 1,024 characters | Hard | |
| WhatsApp template: footer | 60 characters | Hard | |
| WhatsApp template: button text | 25 characters; up to 10 buttons per template; URL buttons up to 2, phone buttons 1 | Hard | URL itself up to 2,000 characters |
| Email: subject | About 40 to 60 characters; mobile clients show about 35 to 40 in portrait | Visible | Test in Litmus or Email on Acid; fact first |
| Email: preheader | About 40 to 130 characters shown | Visible | Written, never left to default to the first body line |
| App Store: app name | 30 characters | Hard (App Store Connect) | Minimum 2 |
| App Store: subtitle | 30 characters | Hard | |
| App Store: promotional text, description, keywords | 170 characters, 4,000 characters, 100 bytes | Hard | Keywords count in bytes: Arabic takes 2 bytes a letter in UTF-8 and Devanagari 3, so plan about 35 to 50 characters for ar and hi keyword fields; comma separated, no spaces |
| App Store: in-app event name, short description, long description | 30, 50, 120 characters | Hard (App Store Connect) | |
| Google Play: app name, short description, full description | 30, 80, 4,000 characters | Hard (Play Console help) | Same count for full-width characters |
| India SMS header (DLT) | 6 characters in practice | Hard | Plus the class suffix (-P, -S, -T, -G) since the 2025 amendment (section 4.12) |
| UAE alphanumeric sender ID | 11 characters | Hard | Promotional IDs carry the "AD-" prefix |
| RCS (Rich Communication Services) Business Messaging: rich card title, description, suggestion | 200, 2,000, 25 characters | Hard (Google RCS Business Messaging API reference) | Rich card payload up to 250 KB |
| Gmail: HTML email size | Clipped above 102 KB | Hard | Clipping hides the footer and legal text; keep transactional HTML lean |
| Android notification channel name | A few words | Visible | System Settings truncates long names |
| Apple Wallet pass front fields | A few words per value | Visible | Values truncate; policies go on the back |
| Google Search: title link | About 50 to 60 characters (about 600 px) before truncation | Visible | Google may rewrite it |
| Google Search: snippet from meta description | About 150 to 160 characters | Visible | Written for the click; Google does not use it for ranking |
| In-product elements | See section 5.10 | House budgets | Tab 10 to 12, button 20, toast 40, label 25, error 90, dialogue title 40 |

### 13.2 Forty microcopy fixes

| # | Before | After | Rule applied |
|---|---|---|---|
| 1 | Submit | Reserve | Verb plus outcome (4.1) |
| 2 | Learn more | See the cancellation policy | Specific link text (4.1, 8.2) |
| 3 | OK | Save changes | Dialogue button names the action (4.1) |
| 4 | Yes / No | Keep reservation / Cancel reservation | Paired buttons name outcomes (4.6) |
| 5 | Are you sure? | Cancel this reservation? The non-refundable ₹18,000 will not be returned. | Consequence named, negative written out (4.6, 5.11) |
| 6 | Oops! Something went wrong | We couldn't save your changes. Try again. | What failed, next step, no exclamation (4.5) |
| 7 | Invalid input | Enter the expiry date as MM/YY | What to do (4.5) |
| 8 | Error 05 | This card was declined by your bank. Try another card, or pay at the hotel. Reference PAY-05 | Plain sentence first, code after (4.5) |
| 9 | Email is invalid! | That email doesn't look right. Check for a missing @ or dot. | Specific, no blame (4.5) |
| 10 | Please enter your name | Name as on passport | Label is a noun; helper text carries the reason (4.2) |
| 11 | Phone no.: | Mobile number | No abbreviation, no colon (4.2, 5.2) |
| 12 | Placeholder "Enter email" as the only label | Visible label "Email", placeholder "name@example.com" | Placeholder never a label (4.3) |
| 13 | PAN* | PAN (for invoices above ₹2 lakh) | Condition replaces asterisk (4.2) |
| 14 | Loading... | Checking availability for 14 to 16 March | Says what the wait buys (4.9) |
| 15 | Hang tight! | Nothing under 1 second; a skeleton screen to 10 seconds | Nielsen's thresholds (4.9) |
| 16 | Nothing to see here | No stays yet. Your next reservation will appear here. | First-use empty state (4.7) |
| 17 | No results | No tables for 4 at 20:00 on Friday. Try 19:30 or 21:00. | Widen the search (4.7) |
| 18 | Woohoo! You're all set! | Reserved. Villa 3, 14 to 16 March. Confirmation 8H2K4. | Quiet confirmation with facts (4.8) |
| 19 | Success! | Address saved. | One-line toast, past tense (4.11) |
| 20 | Enable notifications | Send booking updates on WhatsApp | Toggle stated in the on condition (4.15) |
| 21 | My Bookings | Stays | No "My"; the person's word (5.8, 4.16) |
| 22 | Discover | Search | Standard destination, standard name (4.16) |
| 23 | This app needs camera access | Scan your passport to check in faster | Purpose string names the benefit (4.13) |
| 24 | We'd love to send you notifications! | Get a message when your table is ready. Button: Continue | iOS pre-alert: one benefit, one button that opens the alert (4.13) |
| 25 | By continuing you agree to our Terms | I agree to the house rules and the data notice (unticked checkbox, both linked) | One consent per purpose, no pre-tick (4.19) |
| 26 | Secure checkout | Pay AED 2,310 | Amount on the button (4.21) |
| 27 | ₹12,00,000 shown as ₹1,200,000 | ₹12,00,000 | Indian grouping via en-IN (4.21) |
| 28 | AED 2,310 Dh | AED 2,310 | Code or symbol, never both (4.21) |
| 29 | 03/14/2027 | 14 Mar 2027 | Day-month-year with month name (4.22) |
| 30 | 6pm | 18:00 Dubai time (UTC+4) | 24-hour and an unambiguous zone on transactional copy (4.22) |
| 31 | 2 - 4 guests | 2 to 4 guests | No dashes (5.2) |
| 32 | Book Now And Save! | Reserve | Sentence case, no selling (5.1, 2.5) |
| 33 | Spa & Wellness | Spa and wellness | No ampersand in copy (5.2) |
| 34 | e.g. 50 123 4567 | For example, 50 123 4567 | No Latin abbreviations (5.5) |
| 35 | 3 item(s) | {count, plural, one {# item} other {# items}} | Plural message with # in every branch, never "(s)" (6.3) |
| 36 | "Your " + room + " is ready" | "{roomName} is ready" | No concatenation (6.4) |
| 37 | Page not found. Error 404. | We can't find that page. Try Stays, Dining, or search. | 404 with routes (4.20) |
| 38 | Image alt: "image of bangle" | "18k yellow gold bangle with channel-set diamonds, shown on a wrist" | Alt text craft (8.1) |
| 39 | As an AI language model, I cannot... | I can't change a reservation. A concierge can; I'll pass you over. | Refusal as service (10.3) |
| 40 | Ask me anything | Is there a table for 4 on Friday at 8? | Prompt placeholder as a real example (10.6) |

## Terms introduced

- 2i (second pair of eyes): GOV.UK's review of every piece of content by a second content designer before it publishes.
- 3-D Secure: the card schemes' step-up authentication in which the issuing bank confirms a card payment with a code or an app prompt.
- 4Cs: the four diamond grading attributes (carat, colour, clarity, cut), stated together with the grading report that certifies them.
- Accessible name: the name assistive technology announces for a control; it must contain the visible label (WCAG 2.5.3).
- Agentic action: an action an AI assistant performs for the person, such as booking, paying or messaging staff.
- Alt text: the text equivalent of an image, read by screen readers and shown when the image fails to load.
- API (application programming interface): the defined way one piece of software requests data or actions from another.
- App Tracking Transparency (ATT): Apple's framework, since iOS 14.5, that requires the person's permission before an app tracks them across other companies' apps and sites.
- Arabizi: Arabic written in Latin letters with numerals standing for sounds Latin lacks (3 for ع, 7 for ح).
- ASD-STE100 (Simplified Technical English): an aerospace controlled-language specification that limits sentence length, noun clusters and word meanings.
- Bidi (bidirectional text): a single run of text mixing right-to-left and left-to-right scripts, ordered by the Unicode Bidirectional Algorithm (UAX #9).
- Bidi isolate: a wrapper (HTML `<bdi>` or Unicode U+2066 to U+2069) that stops an inserted value from reordering the text around it.
- BIS hallmark: the Bureau of Indian Standards' purity mark on gold jewellery, carrying a HUID.
- BNPL (buy now, pay later): a purchase split into instalments by a provider such as Tabby or Tamara.
- Card sorting: a research method in which participants group content items; in an open sort they also name the groups.
- Carpet area: the usable floor area inside a unit's walls; the basis of sale under India's RERA Act 2016, and required in advertisements by state authorities such as MahaRERA.
- CLDR: the Unicode Common Locale Data Repository, the locale database (plural rules, date and number formats) behind Intl, ICU and the platforms.
- Clienteling: a boutique's one-to-one service for known clients: holds, appointments, private viewings.
- Cloze test: a comprehension test in which every nth word is deleted and readers fill the blanks; 60 per cent correct passes.
- CMS (content management system): the software in which editors create, store and publish content.
- Concatenation: building a sentence in code from fragments; fails in translation because word order, gender and plurals differ.
- Confirmshaming: a deceptive pattern in which the decline option mocks the person.
- Content audit: the qualitative judgement of a content inventory against criteria such as accuracy, voice and ROT.
- Content design: working out what a person needs at a moment and giving it in the best form, which may not be words.
- Content inventory: the quantitative list of every page, screen, string, email and template with its metadata.
- Content model: the definition of a product's content types, their fields, rules and relationships.
- Content strategy: planning for the creation, delivery and governance of useful, usable content (Halvorson).
- Content-first design: writing a screen's content, as a priority guide, before any layout is drawn.
- COPE: create once, publish everywhere; structured content reused across surfaces (Jacobson, NPR, 2009).
- Copy deck: the document carrying every string with key, context, budget, translations and status from writer to engineer.
- Copywriting: persuasive writing that makes a person want something; lives in campaigns and landing pages.
- Core strategy statement: the centre of Halvorson and Rach's model: what content the organisation will produce, for whom, to achieve what.
- CSS logical properties: CSS properties named by flow direction (inline-start, inline-end), so one stylesheet serves left-to-right and right-to-left layouts.
- Customer service window: the 24-hour period after a person's last message in which a WhatsApp business may reply freely; outside it only approved templates may be sent.
- Deceptive pattern (dark pattern): an interface design that tricks or pressures a person into an action they did not intend; India's 2023 Central Consumer Protection Authority guidelines name 13.
- DLT (distributed ledger technology) platform: the operator-run registry in India on which commercial SMS headers and content templates are registered under TRAI's TCCCPR.
- DOM (document object model): a page's element tree, whose order is the screen-reader reading order.
- Domain model: a map of a subject's concepts and their relationships, drawn with subject experts before the content model.
- Domain-bound code: an SMS one-time code whose last line names the domain ("@example.com #123456"), so iOS and Safari autofill it only there.
- Drip pricing: revealing fees late in a purchase flow; a named deceptive pattern in India's 2023 guidelines.
- E.164: the ITU international phone number format ("+971501234567").
- Eastern Arabic-Indic digits: the digit forms U+0660 to U+0669 (٠ to ٩) used in Arabic text in parts of the Arab world, more often in Saudi than in UAE consumer UI.
- E-mandate: a standing instruction on a card or UPI for recurring debits, with a pre-debit notification at least 24 hours ahead under RBI rules.
- EMI (equated monthly instalment): a purchase repaid in fixed monthly amounts; "No Cost EMI" offsets the interest with a discount.
- Empty state: a screen with no content yet, no results, or an error in place of content.
- Endonym: a language's name in its own script ("हिन्दी", "العربية").
- Ergative construction: the Hindi perfective pattern in which a transitive verb agrees with its object, which keeps the user's gender out of the sentence.
- Error summary: a list of a form's errors at the top of the page, each linked to its field, headed "There is a problem" (GOV.UK Design System).
- Fineness: gold purity in parts per thousand (750 for 18k, 916 for 22k).
- First-click test: showing a screen and a task and recording where people click first; a correct first click predicts success.
- Five-second test: showing a screen for five seconds and asking what it was for, to test what its words say at a glance.
- Flesch Reading Ease: an English readability formula based on sentence length and syllables per word; higher is easier.
- Flesch-Kincaid grade: an English readability formula expressed as a US school grade.
- F-pattern: the eyetracking pattern in which people read two horizontal bands at the top of a page, then scan down the left edge.
- Front loading: putting the meaningful word first in a line, link or list item.
- Grice's maxims: quantity, quality, relation and manner, the cooperative principles of conversation, used to review assistant flows.
- GSM-7 and UCS-2: the two SMS encodings; GSM-7 carries 160 Latin characters per message, UCS-2 carries 70 characters of any script.
- GST: India's goods and services tax, charged at rates that vary by category and, for hotel rooms, by tariff; the abbreviation also names Gulf Standard Time, so the house writes "Dubai time" where Indian readers see it.
- Gulf Standard Time: UTC+4, the UAE's time zone; its abbreviation GST clashes with India's tax, so the house writes "Dubai time".
- Hard limit and visible limit: a maximum the platform enforces, against the device-dependent point at which text truncates.
- Header (SMS): the registered sender ID on a commercial SMS; in India suffixed by class (-P, -S, -T, -G) since 2025.
- Headless CMS: a content store that serves structured content over an API with no fixed presentation layer.
- Helper text: the short line beside a field stating the constraint or the reason for the data.
- Highlighter test: readers mark copy in green where it sounds like the brand and in red where it does not, to test tone against a voice chart.
- Hijri calendar and Umm al-Qura: the Islamic lunar calendar, and Saudi Arabia's computed version of it that Intl supports as islamic-umalqura.
- Hinglish: Hindi written in Latin script and mixed with English.
- Hub and spoke: a content team model in which a lead owns the standards and embedded writers ship the strings.
- HUID: hallmark unique identification, the six-digit alphanumeric code on BIS-hallmarked gold jewellery in India.
- ICU MessageFormat: the message syntax from the International Components for Unicode (ICU) library that expresses plural and select variants in one string.
- INCI: International Nomenclature of Cosmetic Ingredients, the naming system for ingredient lists.
- In-context review: a translator's review of strings in the built product or a localised design file.
- Internationalisation (i18n): engineering a product so it can be adapted to any locale without code changes.
- Interruption level: iOS's class for a notification (passive, active, time-sensitive, critical), which decides whether it breaks through Focus.
- Intl (ECMA-402): the browser's internationalisation API for locale-aware dates, numbers, plurals and relative times.
- ISO 24495-1: the 2023 international plain language standard, built on four principles: relevant, findable, understandable, usable.
- Karat: gold purity as a proportion of 24 (18k is 18 parts in 24).
- Kashida: the elongation stroke between connected Arabic letters, used for justification and emphasis.
- Khaleeji: Gulf Arabic dialect, kept for marketing, social and voice surfaces.
- Lakh and crore: Indian units of 100,000 and 10,000,000, with digit grouping in twos after the first three.
- Localisation (l10n): adapting a product to one locale: translation, formats, images, examples.
- LQA (linguistic quality assurance): independent scoring of translated strings against an error typology.
- Makani number: Dubai's 10-digit code identifying a building entrance, used in place of a postcode.
- Masdar: the Arabic verbal noun, used in UI to name an action without gender agreement.
- MessageFormat 2.0: Unicode's successor to ICU MessageFormat, Part 9 of the LDML specification (UTS #35), stable since CLDR 47 (March 2025).
- Microcopy: the small strings that carry a person through an interface: labels, buttons, hints, errors, states.
- MQM: Multidimensional Quality Metrics, a framework for scoring translation errors by category and severity.
- MRP: maximum retail price, the tax-inclusive price printed on packaged goods in India under the Legal Metrology rules.
- MSA (Modern Standard Arabic, al-fusha): the shared written register of Arabic, used in simplified form in UI.
- MTPE (machine translation with post-editing): machine translation output corrected by a linguist.
- Nasab: the lineage element of an Arabic name ("bint Khalid", daughter of Khalid).
- Nice Classification: the international system of 45 classes under which trademarks are registered.
- NN/g: the Nielsen Norman Group, the usability research and consulting firm.
- Notification channel: an Android category of notifications with a name shown in system Settings, switchable on its own.
- OTP (one-time password): a short code sent by SMS, WhatsApp or app to confirm identity or a payment.
- Pair writing: a content designer and a subject expert writing together in one session (GOV.UK).
- Paise and fils: the hundredths of the rupee and the dirham.
- PAN (Permanent Account Number): India's income-tax identifier, asked for on large invoices.
- PAO: period after opening, the open-jar symbol with a month count on cosmetic labels.
- Paraphrase test: asking a person to restate a policy or consent in their own words to check comprehension.
- Passkey: a FIDO credential stored on a device or in a password manager and confirmed with a biometric or the screen lock; written in lower case.
- PDP (product detail page): the page for one product with its specification, price and purchase action.
- Permission priming: the app's own screen (Apple's pre-alert screen) shown before the OS permission dialogue to explain the benefit.
- PIN code: India's 6-digit postal index number.
- Placeholder: example text inside an empty field that vanishes on typing; never a substitute for a label.
- Plain language: writing a person can understand on the first read and act on.
- Plural categories: the CLDR set (zero, one, two, few, many, other) a language uses for counted nouns.
- Preheader: the preview line an email client shows after the subject, written deliberately.
- Priority guide: a plain text list of what a screen must say and do, in order of importance, written before layout.
- Pseudo-localisation: a test build in which strings are mechanically lengthened and marked to expose truncation and hard-coded text.
- Purpose string: the sentence an app supplies for the OS permission dialogue (NSCameraUsageDescription and siblings on iOS).
- Quiet hours: the local-time window outside which non-urgent messages are held (house default 09:00 to 21:00).
- RACI: a decision-rights matrix: responsible, accountable, consulted, informed.
- RCS Business Messaging: Google's rich messaging channel for businesses on Rich Communication Services, with cards and suggestion chips.
- Reading level: a proxy for comprehension, measured in English by grade-level formulas.
- Register: the formality and vocabulary of a language variety, such as shuddh Hindi, everyday Hindustani or MSA.
- RERA: India's state Real Estate Regulatory Authorities under the 2016 Act, and Dubai's Real Estate Regulatory Agency; both regulate property advertising.
- ROT: redundant, outdated, trivial; the first-pass test in a content audit.
- RTL: right-to-left layout for Arabic, Hebrew, Persian and Urdu.
- Sentence case: capitalising only the first word and proper nouns.
- Serial (Oxford) comma: the comma before "and" in a list of three or more.
- Shirorekha: the horizontal headstroke of Devanagari letters.
- Shuddh Hindi: Sanskritised Hindi vocabulary (आरक्षण, प्रवेश), kept for heritage and government-adjacent clients.
- Skeleton screen: a grey placeholder in the shape of content still loading.
- SMILE and SCRATCH: Alexandra Watkins's naming tests, five qualities a name should have and seven faults that rule it out.
- SMS Retriever hash: the 11-character app hash at the end of an Android OTP message that lets the app read the code without an SMS permission.
- SPF, DKIM and DMARC: the three email authentication standards Gmail and Yahoo require of bulk senders since February 2024.
- Status message: a change announced to screen readers without moving focus (WCAG 4.1.3).
- Streaming: displaying a generated response as it is produced, token by token.
- String length budget: the maximum character count a component can show at the smallest screen and largest type size, reduced for expansion.
- String table: the externalised file of keys and strings per locale from which a product renders text.
- Structured content: content stored as typed, reusable fields, so that one entry serves every surface.
- Technical writing: explaining how a thing works, in documentation and help, measured by procedure success.
- TEP: translation, editing, proofreading; the three-linguist process ISO 17100 describes.
- Terminology table: the single list of approved terms per concept with banned synonyms, translations and context.
- Toast (snackbar): a brief in-app message about something that just happened, dismissing itself.
- Tokenisation: replacing a card number with a network token; required in India for saved cards since 1 October 2022.
- Tone: the adjustment of a voice to the person's state in the moment.
- Tourism Dirham: Dubai's fee per room per night, about AED 7 to 20 by hotel classification, named as its own line on a bill.
- Trakheesi: the Dubai RERA advertising permit whose number must appear on every property listing.
- Transcreation: rewriting copy in the target language for the same effect, changing the idea, image or joke where needed.
- Translation management system (TMS): software that stores strings, glossaries and translation memory and runs the translation and review workflow.
- Translation memory: a database of previously translated segments, reused to keep translations consistent and cut cost.
- Tree test: finding items in a text-only version of a navigation hierarchy, to test its labels.
- UAX #9: the Unicode Bidirectional Algorithm, revision 52 for Unicode 18.0.0.
- UI (user interface): the screens, controls and text through which a person uses a product.
- UPI (Unified Payments Interface): NPCI's real-time account-to-account payment rail, with intent and collect flows.
- Utility template: a pre-approved WhatsApp message template about a transaction the person started, such as a booking update.
- UX writing: writing the words that appear inside an interface.
- Vale: an open-source prose linter whose YAML rules enforce house style in continuous integration.
- Voice chart: a one-page statement of a product's voice, either traits with sample and overshoot lines or Podmajersky's principles set against concepts, vocabulary, verbosity, grammar, punctuation and capitalisation.
- Voice: the stable personality of a product's language across every screen.
- WCAG: the W3C Web Content Accessibility Guidelines; version 2.2 is the October 2023 Recommendation, graded A, AA and AAA.
- XLIFF: the OASIS XML interchange format for localisation data; version 2.1 (2018).

## Sources and further reading

Books

- Kristina Halvorson and Melissa Rach, Content Strategy for the Web, second edition, New Riders, 2012.
- Sarah Winters (Richards), Content Design, Content Design London, 2017.
- Torrey Podmajersky, Strategic Writing for UX, O'Reilly, 2019.
- Michael J. Metts and Andy Welfle, Writing Is Designing, Rosenfeld Media, 2020.
- Kinneret Yifrah, Microcopy: The Complete Guide, second edition, Nemala, 2019.
- Nicole Fenton and Kate Kiefer Lee, Nicely Said, New Riders, 2014.
- Erika Hall, Conversational Design, A Book Apart, 2018.
- Mike Atherton and Carrie Hane, Designing Connected Content, New Riders, 2018.
- Alexandra Watkins, Hello, My Name Is Awesome, second edition, Berrett-Koehler, 2019.
- Jakob Nielsen, Usability Engineering, Academic Press, 1993.
- The Chicago Manual of Style, 18th edition, University of Chicago Press, 2024.

Specifications and standards

- W3C, Web Content Accessibility Guidelines (WCAG) 2.2, Recommendation, 5 October 2023, https://www.w3.org/TR/WCAG22/ (Understanding documents at https://www.w3.org/WAI/WCAG22/Understanding/)
- W3C WAI, Images Tutorial and alt decision tree, https://www.w3.org/WAI/tutorials/images/
- W3C, Making Content Usable for People with Cognitive and Learning Disabilities, Working Group Note, 2021, https://www.w3.org/TR/coga-usable/
- Unicode, UAX #9 Unicode Bidirectional Algorithm, revision 52, Unicode 18.0.0, https://www.unicode.org/reports/tr9/
- Unicode, UTS #35 LDML Part 9: MessageFormat, stable since CLDR 47 (2025), https://www.unicode.org/reports/tr35/tr35-messageFormat.html
- Unicode CLDR, Language Plural Rules chart, https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
- Unicode code chart, Currency Symbols (U+20C1 SAUDI RIYAL SIGN, Unicode 17.0; U+20C3 UAE DIRHAM SIGN, Unicode 18.0), https://www.unicode.org/charts/PDF/U20A0.pdf
- ECMA-402, ECMAScript Internationalization API Specification, https://tc39.es/ecma402/
- ISO 8601-1:2019 (date and time), ISO 4217:2015 (currency codes), ISO 17100:2015 (translation services), ISO 24495-1:2023 (plain language, governing principles) and ISO 3758:2023 (textile care labelling code), ISO catalogue, https://www.iso.org/
- OASIS, XLIFF Version 2.1, 2018, https://docs.oasis-open.org/xliff/xliff-core/v2.1/xliff-core-v2.1.html
- 3GPP TS 23.038, Alphabets and language-specific information (the GSM 7-bit default alphabet), https://www.3gpp.org/ftp/Specs/archive/23_series/23.038/
- IETF, RFC 8058, Signaling One-Click Functionality for List Email Headers, 2017, https://www.rfc-editor.org/rfc/rfc8058
- NIST, SP 800-63B-4, Digital Identity Guidelines: Authentication and Authenticator Management, 2025, https://pages.nist.gov/800-63-4/sp800-63b.html
- WICG, Origin-bound one-time codes delivered via SMS, https://wicg.github.io/sms-one-time-codes/
- ASD-STE100 Simplified Technical English specification, https://www.asd-ste100.org/
- Regulation (EU) 2024/1689 (the AI Act), Article 50, https://artificialintelligenceact.eu/article/50/; European Commission, AI Act Service Desk, Timeline for the implementation of the EU AI Act, https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- Regulation (EC) No 1223/2009 on cosmetic products, https://eur-lex.europa.eu/eli/reg/2009/1223/oj
- European Data Protection Board, Report of the work undertaken by the Cookie Banner Taskforce, adopted 17 January 2023, https://www.edpb.europa.eu/
- India: Digital Personal Data Protection Act 2023 (Act No. 22 of 2023) and Digital Personal Data Protection Rules 2025 (notified 13 November 2025), https://www.meity.gov.in/
- India: Central Consumer Protection Authority, Guidelines for Prevention and Regulation of Dark Patterns, 30 November 2023; Consumer Protection (E-Commerce) Rules 2020; Legal Metrology (Packaged Commodities) Rules 2011; Cosmetics Rules 2020; FSSAI (Labelling and Display) Regulations 2020; BIS Hallmarking of Gold Jewellery and Gold Artefacts Order 2020.
- India: Real Estate (Regulation and Development) Act 2016 (Act No. 16 of 2016), https://www.indiacode.nic.in/handle/123456789/2158
- India: Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules 2026, G.S.R. 120(E), 10 February 2026.
- India: TRAI, Telecom Commercial Communications Customer Preference Regulations 2018, and Second Amendment Regulations 2025 (12 February 2025), https://www.trai.gov.in/sites/default/files/2025-02/Regulation_12022025.pdf
- India: Reserve Bank of India, Harmonisation of Turn Around Time and customer compensation for failed transactions (20 September 2019), card-on-file tokenisation (effective 1 October 2022) and the e-mandate framework (limits revised December 2023), https://www.rbi.org.in/
- UAE: Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data; Federal Decree-Law No. 8 of 2017 on Value Added Tax; DIFC Data Protection Law No. 5 of 2020; ADGM Data Protection Regulations 2021; UAE legislation portal, https://uaelegislation.gov.ae/
- Saudi Arabia: Personal Data Protection Law (SDAIA), in force 14 September 2023.

Platform guidance (as of October 2026)

- Apple, Human Interface Guidelines: Writing, https://developer.apple.com/design/human-interface-guidelines/writing
- Apple, Human Interface Guidelines: Generative AI, https://developer.apple.com/design/human-interface-guidelines/generative-ai
- Apple, Human Interface Guidelines: Privacy (pre-alert screens, tracking requests), https://developer.apple.com/design/human-interface-guidelines/privacy
- Apple, User privacy and data use (App Tracking Transparency), https://developer.apple.com/app-store/user-privacy-and-data-use/
- Apple, App Review Guidelines, https://developer.apple.com/app-store/review/guidelines/
- Apple, App Store Connect help: App information, https://developer.apple.com/help/app-store-connect/reference/app-information/ and Platform version information (keywords in bytes), https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Android Developers, Notification runtime permission, https://developer.android.com/develop/ui/views/notifications/notification-permission; Request runtime permissions, https://developer.android.com/training/permissions/requesting; SMS Retriever, https://developer.android.com/identity/sms-retriever
- Google, Material Design 3, Content design, https://m3.material.io/foundations/content-design/overview; Navigation bar, https://m3.material.io/components/navigation-bar/overview
- Google Play Console help, Store listing character limits, https://support.google.com/googleplay/android-developer/answer/9859152
- Google, RCS Business Messaging API reference, https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages
- Google, Email sender guidelines, https://support.google.com/a/answer/81126
- Meta, WhatsApp Business Platform, Message template components, https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components
- Meta, WhatsApp Business Platform, Pricing, https://developers.facebook.com/docs/whatsapp/pricing
- Microsoft, Writing Style Guide, https://learn.microsoft.com/en-us/style-guide/welcome/
- Microsoft, Localization Style Guides (Hindi, Arabic and others), https://learn.microsoft.com/en-us/globalization/reference/microsoft-style-guides
- Shopify, Polaris content guidelines, https://polaris.shopify.com/content
- Mailchimp, Content Style Guide (CC BY-NC 4.0), https://styleguide.mailchimp.com/
- GOV.UK, Writing to GOV.UK standards, https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/; Style guide A to Z, https://www.gov.uk/guidance/style-guide/a-to-z
- GOV.UK Design System: Error summary, https://design-system.service.gov.uk/components/error-summary/; Error message, https://design-system.service.gov.uk/components/error-message/; Question pages, https://design-system.service.gov.uk/patterns/question-pages/; Names, https://design-system.service.gov.uk/patterns/names/
- FIDO Alliance, Passkey design guidelines, https://fidoalliance.org/design-guidelines/
- Vale prose linter, https://vale.sh/

Articles and talks

- Kate Moran, The Four Dimensions of Tone of Voice, Nielsen Norman Group, 2016, https://www.nngroup.com/articles/tone-of-voice-dimensions/
- Kate Moran, The Impact of Tone of Voice on Users' Brand Perception, Nielsen Norman Group, 2016, https://www.nngroup.com/articles/tone-voice-users/
- Jakob Nielsen, Microcontent: How to Write Headlines, Page Titles, and Subject Lines, 1998, https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/
- Jakob Nielsen, F-Shaped Pattern For Reading Web Content, 2006, https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/; Kara Pernice, the 2017 update, https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Jakob Nielsen, How Little Do Users Read?, Nielsen Norman Group, 2008, https://www.nngroup.com/articles/how-little-do-users-read/
- Harald Weinreich, Hartmut Obendorf, Eelco Herder and Matthias Mayer, Not Quite the Average: An Empirical Study of Web Use, ACM Transactions on the Web 2(1), 2008, https://doi.org/10.1145/1326561.1326566
- Janice C. Redish, Readability formulas have even more limitations than Klare discusses, ACM Journal of Computer Documentation 24(3), 2000, https://doi.org/10.1145/344599.344637
- Jakob Nielsen, Cloze Test for Reading Comprehension, Nielsen Norman Group, 2011, https://www.nngroup.com/articles/cloze-test-reading-comprehension/
- Rachel Krause, 10 Design Guidelines for Reporting Errors in Forms, Nielsen Norman Group, 2019, https://www.nngroup.com/articles/errors-forms-design-guidelines/
- Katie Sherwin, Placeholders in Form Fields Are Harmful, Nielsen Norman Group, 2014, https://www.nngroup.com/articles/form-design-placeholders/
- Richard Ishida, Text size in translation, W3C Internationalization, https://www.w3.org/International/articles/article-text-size; Personal names around the world, https://www.w3.org/International/questions/qa-personal-names
- W3C Internationalization, Indicating the language of a link destination, https://www.w3.org/International/questions/qa-link-lang
- Rachel Lovinger, Content Modelling: A Master Skill, A List Apart, 2012, https://alistapart.com/article/content-modelling-a-master-skill/
- Drew Clemens, Design Process in the Responsive Age, A List Apart, 2012, https://alistapart.com/article/design-process-in-the-responsive-age/
- Daniel Jacobson, COPE: Create Once, Publish Everywhere, ProgrammableWeb, 2009 (no live URL confirmed).
- Saleema Amershi et al., Guidelines for Human-AI Interaction, CHI 2019, https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/
- Google PAIR, People + AI Guidebook, https://pair.withgoogle.com/guidebook/
- Maggie Stanphill et al., How Words Can Make Your Product Stand Out, Google I/O 2017, https://www.youtube.com/watch?v=DIGfwUt53nI
- Thomas Tullis and Larry Wood, How Many Users Are Enough for a Card-Sorting Study?, UPA 2004; Bob Bailey and Cari Wolfson's first-click study, 2009 (full citations in 08-ux-research-and-strategy.md, Sources).
- WebAIM, Screen Reader User Survey #10, 2024, https://webaim.org/projects/screenreadersurvey10/
- Evan Miller, Sample Size Calculator, https://www.evanmiller.org/ab-testing/sample-size.html
- Baymard Institute, E-commerce search usability research, https://baymard.com/research/ecommerce-search
