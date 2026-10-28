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

Content design is the practice of working out what a person needs to know or do at a given moment and giving them that in the best form, which may be words, a table, a diagram, a number, or nothing. Sarah Winters (then Richards) defined it at GOV.UK around 2014 and in the book Content Design (2017): start from the user need, and decide whether words are even the answer. UX writing is the narrower craft of writing the words that appear inside an interface: labels, buttons, errors, empty states, notifications. Copywriting is persuasive writing that makes a person want something, and lives in campaigns, captions and landing pages. Technical writing explains how a thing works, in documentation, help centres and API references, and is measured by whether the reader can complete the procedure.

| Craft | Unit of work | Primary measure | Typical owner | Reason the distinction matters |
|---|---|---|---|---|
| Content design | A user need and the moment it occurs | Task completion, drop-off, support contacts | Content designer in the product team | Decides whether copy exists at all; removes screens as often as it writes them |
| UX writing | A string in a component | Comprehension, error rate, time on task | UX writer or content designer | The words are part of the component; they ship with the code |
| Copywriting | A headline, a caption, a page | Attention, recall, conversion | Copywriter in brand or performance | Persuasion is the job; restraint is the luxury version of persuasion |
| Technical writing | A procedure or reference entry | Procedure success, deflected tickets | Technical writer in docs or support | Completeness and accuracy beat brevity here |

### 1.2 Where it sits in a team

Product teams that treat words as part of the design (Shopify's Polaris content guidelines, Atlassian's design system content section, Microsoft's Writing Style Guide, Mailchimp's content style guide, Monzo's tone of voice, GOV.UK's content design manual) all share one structural choice: the writer is in the room when the flow is drawn, and the strings are reviewed in the same pull request as the component. Embedding the writer before the frames exist is the reason their products read as one voice. A writer brought in after the frames are built can only fit words into boxes that were sized for lorem ipsum.

### 1.3 How this file layers with the house skills

- The mask360-copywriting skill owns marketing copy: the 5-point storytelling structure (hook, pain point, micro-story, unexpected solution, FOMO plus one CTA), video overlays, captions, cold outreach, pitch decks. Its register is persuasion with restraint.
- The design-taste skill owns the copy taste rules on every line: few words, no selling, sentence case, no exclamation marks, no "Learn more" with an arrow, no em dashes, no contrast constructions. See design-taste, section 2 ("Copy that does not sell") and section 3 (the copy tells).
- This file owns the words a person reads while doing something: the booking form, the error, the confirmation, the settings page, the push notification. The register here is service.

The boundary in practice: in a hotel booking flow the marketing voice ends at the "Reserve" button. From that tap onward every word is product copy, and the measure changes from desire to completion. A line that persuades after that point is a defect, because it slows a person who has already decided.

## 2. Voice and tone

### 2.1 Voice is constant, tone moves

Voice is the stable personality of the product: what it sounds like on every screen. Tone is the adjustment of that voice to the person's state in the moment. Mailchimp's content style guide (public since 2015 under a Creative Commons Attribution-NonCommercial 4.0 licence) states the split plainly: the voice does not change much day to day, the tone changes all the time. Mailchimp's voice traits are human, familiar, friendly and straightforward, and its four writing goals are empower, respect, educate and stay appropriate. The companion Voice and Tone site maps each touchpoint to what the person is feeling (a failed payment, a successful campaign send) and the tone that fits. The method, more than the specific traits, is what the house borrows.

### 2.2 The Nielsen Norman four dimensions

Kate Moran's article "The Four Dimensions of Tone of Voice" (Nielsen Norman Group, 17 July 2016, reviewed August 2023) reduced a long list of literary tone words to four scales, each of which a piece of copy can sit anywhere along:

| Dimension | One end | Other end | Where Mask360 luxury clients sit | Reason |
|---|---|---|---|---|
| Funny vs serious | Humour | Gravity | Serious, with wit allowed once per flow | A joke in a payment error reads as mockery; a single knowing line elsewhere proves a human wrote it |
| Formal vs casual | Formal | Casual | Formal leaning, with contractions allowed ("you're", "we'll") | Full formality reads as a bank; contractions keep it spoken |
| Respectful vs irreverent | Respectful | Irreverent | Respectful, always | The person is a guest or client; irreverence is for consumer apps that sell cheapness as charm |
| Enthusiastic vs matter-of-fact | Enthusiasm | Flat statement | Matter-of-fact | Enthusiasm in product copy is the exclamation mark problem in another form; confidence is quiet |

NN/g's companion study (Moran, "The Impact of Tone of Voice on Users' Brand Perception", 2016) found that tone variations alone produced measurable differences in how friendly and how formal the same content was perceived to be, and that those impressions fed into desirability. The article's closing advice is to test tone with your own users; the house does, because luxury audiences differ from the general web.

### 2.3 Tone by moment

| Moment | What the person feels | Tone setting | Example (hospitality client) | Avoid |
|---|---|---|---|---|
| Onboarding | Curious, slightly wary | Calm, brief, one benefit per screen | "Save your preferences once. Every stay starts from them." | Three screens of welcome |
| Error | Blocked, maybe at fault | Plain, specific, blame-free | "That card was declined. Try another card or pay on arrival." | "Oops!", "Something went wrong" |
| Success | Relieved | Short confirmation, next step | "Reserved. We've sent the details to a.mehta@example.com." | Confetti, "Woohoo!" |
| Empty | Unsure what the screen is for | Explain, then one action | "No stays yet. Your next reservation will appear here." | A sad illustration with "Nothing to see" |
| Loading | Waiting | Honest about duration | "Checking availability for 14 to 16 March" | "Hang tight!" |
| Legal and consent | Suspicious | Plain, complete, no persuasion | "We'll use your number to send booking updates on WhatsApp. You can turn this off in Settings." | Pre-ticked boxes, "By continuing you agree" buried under the fold |
| Payment | Alert, cautious | Precise amounts, precise timing | "You'll be charged AED 2,310 now. Cancel free until 12 March, 18:00 GST." | "Secure checkout" badges doing the work of a sentence |
| Destructive action | Hesitant | Name the consequence | "Cancel this reservation? The non-refundable amount of ₹18,000 won't be returned." | "Are you sure?" |
| Waiting on a human | Impatient | Give a time | "A concierge will reply within 10 minutes." | "We'll get back to you soon" |

### 2.4 Voice charts

A voice chart is a one-page document with three to five traits, each described, each with a sample line and a line that overshoots. It replaces adjectives ("warm", "premium") with evidence. Format:

| Trait | Means | Sounds like | Overshoot (too far) |
|---|---|---|---|
| Assured | States things once, without hedging or hype | "Your table is held until 21:15." | "Rest assured, your exclusive table is absolutely confirmed!" |
| Attentive | Anticipates the next question | "Parking is complimentary. The entrance is on Al Wasl Road." | Listing every hotel facility on a confirmation |
| Spare | One idea per element, no adjectives doing an image's job | "Sea view. King bed. 48 sq m." | "Breathtaking sea views from your spacious luxury king suite" |
| Human | Admits limits plainly | "We can't change the check-in date online. Call the front desk and they'll do it." | "Unfortunately our system is unable to process this request at this time" |

### 2.5 The luxury register

- Restraint: fewer words than feels safe. The Aman and The Row reading of copy (see design-taste, section 2) applies to product strings as much as to campaigns. A luxury booking engine says "Reserve", a budget one says "Book now and save!".
- Second person: "you" and "your", always. Never "the user", never "customers". In hospitality the person is a guest; in jewellery and real estate a client; in beauty simply "you".
- Sentence case everywhere, including headings and buttons. Title Case reads as American corporate software; ALL CAPS on labels is a cheap tell listed in design-taste, section 3.
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

Put the meaningful word first, because people scan the first one or two words of a line, a link or a list item and decide whether to read on. Jakob Nielsen's 1998 "Microcontent" guidance and the 2006 F-pattern eyetracking study (updated in 2017 as still valid) both show reading concentrated at line starts. "Cancellation policy" beats "Information about our cancellation policy". In a settings list, "Notifications", "Payment methods", "Addresses" beat "Manage your notifications", "View payment methods", "Edit addresses", because the verbs are noise and the nouns are what the eye is hunting for.

### 3.3 Plain language and reading level

Plain language is writing a person can understand on the first read and act on. Reading level is a proxy for that, measured in English by formulas such as Flesch Reading Ease (FRE = 206.835 minus 1.015 times average sentence length minus 84.6 times average syllables per word; higher is easier) and the Flesch-Kincaid grade (a US school grade). Targets:

- GOV.UK writes for a reading age of 9, a standard set by the Government Digital Service on the basis of average UK literacy, and local authority guides derived from it keep sentences under 20 to 25 words.
- Product UI in English: aim for FRE 60 or higher and Flesch-Kincaid grade 8 or lower; legal and consent copy can go to grade 10 if the structure (headings, short paragraphs) compensates. Hemingway Editor and Readable both report these.
- The formulas measure English syllables and sentence length and say nothing useful about Hindi or Arabic. For those, measure average sentence length in words (keep under 15), the proportion of Sanskritised or Modern Standard Arabic vocabulary versus spoken vocabulary, and test comprehension with people (section 12.6).
- WCAG 2.2 success criterion 3.1.5 Reading Level (AAA) asks for a version readable by someone with lower secondary education where the main text goes beyond that level; the house treats it as the target for consent and payment copy, where misunderstanding costs money.

### 3.4 Scannability

Nielsen's 2008 article "How Little Do Users Read?", built on Weinreich, Obendorf, Herder and Mayer's study of 25 users and about 59,000 page views, concluded that on an average visit people read about 20 percent of the words, with a ceiling of about 28 percent on pages of around 110 words, and the share falls as word count rises. Structure accordingly: one idea per paragraph, headings that work as a summary when read alone, lists for parallel items (three or more), tables for anything compared on two or more attributes, bold for the one phrase the eye must catch, never for emphasis sprinkled through a paragraph.

### 3.5 Consistency

One concept, one term, everywhere: "reservation" or "booking", "sign in" or "log in", "cancel" or "remove", never both. A terminology table (section 5.8) is the mechanism. The reason is cognitive: every synonym forces the person to decide whether two words mean two things. Shopify's Polaris guidance and the Microsoft Writing Style Guide both keep term lists for this reason.

### 3.6 Action-oriented

Lead with the verb the person performs. "Choose a date" beats "Date selection". "Add card" beats "Card details". Buttons are verbs (section 4.1). Passive voice hides who acts: "Your request will be processed" versus "We'll confirm within an hour".

### 3.7 One idea per element

A button does one thing and says one thing. A dialogue has one question. A toast reports one event. A notification carries one reason to open the app. When a string holds two ideas, split the element; when it cannot be split, cut the second idea.

### 3.8 Writing for translation

Translators see strings out of context, often alphabetised by key. Write so that each string survives that: full sentences with named placeholders ("{guestName}, your table is ready"), no idioms, no puns, no sentence fragments stitched together in code, subject-verb-object order, no dependence on English word order, and a context note on every string (where it appears, what the placeholder holds, the character budget). Section 6 covers the mechanics.

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

### 4.2 Labels

Rule: a noun or noun phrase, sentence case, no colon, no trailing punctuation, visible at all times above or beside the field. Match the label to the data asked for and the term used on the receipt or confirmation.

Reason: the label is the field's name in the person's memory and in the screen reader's announcement; a label that vanishes or changes breaks both.

| Good | Bad | Why |
|---|---|---|
| Mobile number | Phone no.: | No abbreviation, no colon |
| Name as on passport | Full name | Hospitality and travel need the legal form; say so |
| Card number | Enter your credit or debit card number here | The label is a name; instructions go in helper text |
| PAN (for invoices above ₹2 lakh) | PAN* | The condition replaces the asterisk; the person knows why they are asked |
| Emirates ID | ID | Specific document, in its official name |

### 4.3 Placeholders

Rule: never use a placeholder as the label. Use placeholders only for a format example ("DD/MM/YYYY", "+971 50 123 4567"), in a lighter colour, and expect them to vanish on typing.

Reason: placeholders disappear when the person starts typing, fail colour contrast more often than labels, and are skipped by some screen readers. NN/g's "Placeholders in Form Fields Are Harmful" (2014) and the GOV.UK Design System both say the same.

### 4.4 Helper text

Rule: one short line under or beside the field, present before the person types, stating the constraint or why the data is needed. Full sentence with a full stop if it is a sentence; fragment with no full stop if it is a format.

Examples: "We'll only use this for booking updates." "8 characters or more, with at least one number." "As it appears on your Emirates ID."

### 4.5 Validation and error messages

Rule: say what happened, why (when the why helps), and what to do, in that order, next to the field, in the brand's voice, with no blame and no bare error codes. Validate inline on blur (when the person leaves the field), never on every keystroke, and never before they have finished.

Reason: Rachel Krause's "10 Design Guidelines for Reporting Errors in Forms" (NN/g, 2019, reviewed December 2024) covers placement, timing, colour, icons, and the warning against validation summaries as the only indicator. WCAG 2.2 success criteria 3.3.1 Error Identification (A), 3.3.3 Error Suggestion (AA) and 3.3.4 Error Prevention for legal and financial data (AA) make the same demands binding. Error codes exist for support staff; if one must appear, it follows the plain sentence in smaller type ("Reference: PAY-4021").

| Good | Bad | Why |
|---|---|---|
| "Enter the expiry date as MM/YY." | "Invalid input" | Says what to do |
| "That email doesn't look right. Check for a missing @ or dot." | "Email is invalid!" | Specific, no exclamation mark |
| "This card was declined by your bank. Try another card, or pay at the hotel." | "Transaction failed. Error 05." | Names the actor (the bank), gives two routes |
| "Choose a check-out date after 14 March." | "Date range invalid" | Tells the person the exact constraint |
| "We couldn't load your reservations. Check your connection and try again." | "Something went wrong" | Cause, action |
| "This username is taken. Try a.mehta2 or add your city." | "Username unavailable" | Offers alternatives |

Never: "Oops", "Whoops", "Uh oh", "Sorry!" (a sorry can be a full sentence once, for a failure that is the brand's fault: "Sorry, our payment provider is down. We'll hold your dates for 30 minutes."), "You entered", "You failed to", "illegal", "fatal", "forbidden".

### 4.6 Confirmations and destructive actions

Rule: a confirmation dialogue names the object, the consequence and the irreversibility, and its buttons name the outcomes. Use a dialogue only when the action cannot be undone; otherwise perform the action and offer "Undo" in a toast for 5 to 10 seconds.

Reason: "Are you sure?" transfers the thinking to the person. Undo is kinder and faster than a dialogue for anything reversible (Gmail's send undo is the canonical example).

| Good | Bad |
|---|---|
| Title: "Cancel this reservation?" Body: "The non-refundable amount of ₹18,000 won't be returned." Buttons: "Keep reservation" / "Cancel reservation" | Title: "Warning" Body: "Are you sure you want to proceed?" Buttons: "Yes" / "No" |
| Title: "Delete your account?" Body: "Your stays, invoices and saved cards will be removed in 30 days. You can sign in before then to restore them." Buttons: "Keep account" / "Delete account" | "This action cannot be undone. Continue?" |

Confirmshaming, the deceptive pattern in which the decline option mocks the person ("No thanks, I don't like saving money"), is banned. India's Guidelines for Prevention and Regulation of Dark Patterns (Central Consumer Protection Authority, 30 November 2023) list confirmshaming, false urgency, basket sneaking, forced action and drip pricing among 13 named patterns; see file 18 for the legal detail.

### 4.7 Empty states

Three kinds, three jobs:

| Kind | Job | Example |
|---|---|---|
| First use | Explain what will appear here and offer the first action | "No saved addresses. Add one to check out faster next time." Button: "Add address" |
| No results | Say what was searched, suggest a widening | "No tables for 4 at 20:00 on Friday. Try 19:30 or 21:00, or a table for 2 and 2." |
| Error | Say what failed and how to retry | "We couldn't load your orders. Try again." Button: "Retry" |

Rule: a sentence, an action, no illustration unless the brand's illustration system is already on the page. "Nothing here yet" with a sad cloud is a cheap tell.

### 4.8 Success and done states

Rule: confirm the thing in one word or one short sentence, show the key facts (what, when, reference), and give the next step. No celebration graphics for routine actions; a quiet confirmation is the luxury move.

"Reserved. Villa 3, 14 to 16 March. Confirmation 8H2K4. We've sent this to your email and WhatsApp." Button: "Add to calendar".

### 4.9 Loading and progress copy

Rule: for under about 1 second, nothing; 1 to 10 seconds, a spinner or skeleton screen (a grey placeholder in the shape of the content to come) with no words; over 10 seconds, a sentence stating what is happening and a progress indicator. Nielsen's three response-time limits (0.1 second, 1 second, 10 seconds, from Usability Engineering, 1993) set these thresholds. "Checking availability" beats "Loading..." because it says what the wait buys. Never "Hang tight", "Hold on", "Almost there" unless it is true.

### 4.10 Tooltips

Rule: a tooltip explains an unlabelled control or adds a secondary fact; it never holds information the person needs to complete the task, because touch devices have no hover and screen readers may not reach it. One sentence or fragment, no full stop on a fragment, sentence case.

### 4.11 Toasts, snackbars and notifications in-app

A toast (Material calls it a snackbar) is a brief in-app message about something that just happened. Rule: one line, past tense, optional single-word action ("Undo", "View"), dismisses itself after 4 to 10 seconds, never used for errors that need action, never stacked.

"Address saved." "Removed from bag. Undo." "Reservation updated."

### 4.12 Push notifications

Rule: title under about 40 characters, body under about 100, the reason to open in the first five words, one notification per event, sent in the person's local time within quiet hours set by the brand (the house default is 09:00 to 21:00 local). The hard limits are payload bytes, the visible limits are device and launcher dependent (section 13.1).

| Good | Bad |
|---|---|
| Title: "Table ready" Body: "Your table at Jiwan is ready. Head to the host stand." | Title: "Hey Arjun!!" Body: "Don't miss out on our exclusive dining experience tonight" |
| Title: "Check-in open" Body: "Villa 3 is ready from 14:00. Tap to check in." | "You have a new notification" |

Marketing pushes follow the mask360-copywriting skill; transactional pushes follow this section. Mixing them in one channel trains people to switch the channel off.

### 4.13 Permission requests and priming

A permission request is the OS dialogue (location, camera, notifications, contacts) whose wording the app cannot change beyond the purpose string, the sentence Apple requires in the app's Info.plist (NSCameraUsageDescription and its siblings) and shows inside the system dialogue. Priming is the app's own screen shown before the OS dialogue, explaining the benefit so that the person says yes once. Apple's App Review Guideline 5.1.1 requires the purpose string to explain clearly and specifically why the data is needed; vague strings ("This app needs camera access") are rejected.

Rule for priming copy: one benefit, in the person's terms, with a defer option. "Get a message when your table is ready" with "Allow" and "Not now". Ask only when the feature is about to be used, because iOS shows the system dialogue once; a refusal sends the person to Settings.

### 4.14 Onboarding screens

Rule: at most three screens, each one sentence of fact and one of benefit, each skippable, each ending on the action that proves the benefit. A luxury product onboards by doing, not by describing: the first screen of a hotel app should be the next stay, or the booking flow, with the explanation absent.

### 4.15 Settings labels

Rule: nouns for groups ("Notifications", "Payment methods"), verb phrases for toggles stated in the on condition ("Send booking updates on WhatsApp"), no "Enable" or "Disable" in the label because the switch shows the state. Every toggle gets one line of helper text saying what changes. Group by what the person is trying to do, never by the engineering module.

### 4.16 Navigation labels

Rule: one or two words, nouns, the person's words from research ("Stays", "Dining", "Spa", "Account"), consistent between the tab bar, the page title and the breadcrumb. Never a brand-coined name for a standard destination ("Discover" for search, "Hub" for account).

### 4.17 Page titles and headings

Rule: the page title states what the page is in the person's terms and matches the navigation label that led there. Headings summarise the section beneath them so that a person reading only the headings gets the structure (WCAG 2.2 2.4.6 Headings and Labels, AA). Sentence case, no full stop, no questions as headings unless the page answers them, one h1 per page.

### 4.18 Modals and dialogues

Rule: a modal interrupts, so it must be worth the interruption: a decision the flow cannot continue without, or a destructive confirmation. Title asks or states the one thing ("Cancel this reservation?"), body gives the consequence in one or two sentences, buttons name outcomes, the close control is present. No marketing modals on entry; no modal that can be replaced by inline content.

### 4.19 Legal and consent copy

Rule: plain language, specific purposes, one consent per purpose, no pre-ticked boxes, a visible way to withdraw, and the option to read the notice in the person's language. India's Digital Personal Data Protection Act 2023, section 5, requires notice in clear and plain language stating the data, the purpose and how to exercise rights, and section 5(3) gives the person the option to access it in English or any of the 22 languages in the Eighth Schedule of the Constitution; the DPDP Rules 2025 were notified on 13 November 2025 with the notice and consent provisions commencing 18 months later, on 13 May 2027. The UAE's Federal Decree-Law No. 45 of 2021 on personal data protection requires consent to be clear, specific and withdrawable. Write the notice as the product would speak: "We'll keep your passport details for 30 days after check-out, as UAE hotel regulations require, then delete them." See file 18 for the regulatory layer.

### 4.20 404 and offline

404: say the page is missing, give the three most likely destinations and a search. No jokes for a luxury client; one line of wit is acceptable for a consumer brand whose voice chart allows it. "We can't find that page. It may have moved. Try Stays, Dining or search."

Offline: state it and what still works. "You're offline. Your saved reservations are still here. We'll sync changes when you're back."

### 4.21 Pricing and payment copy

Rule: show the total the person will pay, in the currency they will pay it in, with taxes and fees stated by name, before the payment button. Drip pricing (revealing fees late) is a named dark pattern in India's 2023 guidelines and breaks the Consumer Protection (E-Commerce) Rules 2020 requirement to show the total price in a single figure with its break-up; in the UAE, Federal Decree-Law No. 8 of 2017 on VAT, Article 38, requires advertised prices to include tax. See file 18.

Rupee formatting:
- Symbol ₹ (U+20B9, designed by D. Udaya Kumar, selected by the Union Cabinet on 15 July 2010, encoded in Unicode 6.0, October 2010), no space, before the number: ₹18,000.
- Indian grouping: three digits, then twos. ₹1,20,000 (one lakh twenty thousand); ₹1,20,00,000 (one crore twenty lakh). The en-IN locale in ICU and Intl.NumberFormat produces this; en-US produces ₹12,000,000, which Indian readers misread.
- Lakh (1,00,000) and crore (1,00,00,000) in display copy for property and large-ticket retail ("₹1.2 Cr", "₹85 lakh"), full numerals on invoices, receipts and anything legal. Never mix "million" and "lakh" on one screen. For a Gulf or international audience add the converted figure in brackets: "₹1.2 crore (about AED 530,000)".
- Paise exist (100 paise = ₹1) but most consumer prices are whole rupees; show ".00" only on invoices.
- MRP (maximum retail price) on packaged goods in India is inclusive of all taxes under the Legal Metrology (Packaged Commodities) Rules 2011; a product page that shows "₹4,500 + GST" for a packaged cosmetic is wrong on two counts.
- GST (goods and services tax) rates differ by category; the product copy states the applicable rate on the invoice and shows inclusive prices everywhere else.

Dirham formatting:
- The Central Bank of the UAE unveiled a dirham symbol on 27 March 2025; Unicode 18.0 (September 2026) encoded it as U+20C3 UAE DIRHAM SIGN. The Central Bank's guidance places the symbol before the numeral and asks that it never appear together with "AED" or "Dh". As of October 2026 most fonts and keyboards have not shipped the glyph, so product UI uses the ISO code "AED 2,310" (code, space, number) and switches to the symbol when the brand's typeface carries it. Gulf News house style has been "Dh2,310"; the house avoids it in product copy because it is a newspaper convention.
- Fils (100 fils = AED 1) appear on receipts; consumer prices are whole dirhams.
- VAT at 5 percent (since 1 January 2018) is included in displayed prices. Hotel bills in Dubai carry additional charges that the booking flow must name before payment: service charge, municipality fee, a tourism fee, VAT, and the Tourism Dirham fee per room per night, which varies by hotel classification (about AED 7 to 20). The exact percentages change by emirate and are set out in file 18; the copy rule is that every line is named and totalled before "Pay".

### 4.22 Dates, times and localisation formats

- India and the UAE both read day-month-year. Write dates with the month spelled or abbreviated to remove ambiguity: "14 Mar 2027", never "03/14/2027". Store and transmit in ISO 8601 ("2027-03-14T18:00:00+04:00").
- Time: India uses 12-hour with am and pm in speech and most UI; the Gulf hospitality sector uses 24-hour on confirmations. The house uses 24-hour on anything transactional ("Check-in from 14:00") and 12-hour in conversational copy ("We'll call you around 6 pm").
- Time zones: India Standard Time is UTC+5:30, Gulf Standard Time is UTC+4, and neither observes daylight saving. Always state the zone on a cross-border confirmation ("18:00 GST").
- Hijri dates appear alongside Gregorian on UAE government documents and matter for Ramadan and Eid timing; show them only where the brand's audience expects them, with the Gregorian date first.
- Relative times ("2 hours ago") need localised pluralisation (section 6.3) and should switch to absolute dates after 24 hours.

### 4.23 Numbers and units

- Numerals in UI, always, including one to nine ("3 guests", "1 night"). Prose outside UI may spell one to nine.
- Metric throughout: sq m for property in the UAE and sq ft in India (Indian property is marketed in sq ft; state carpet area versus built-up area as the Real Estate (Regulation and Development) Act 2016 requires carpet area in advertisements), km, kg, °C, ml for beauty.
- A space between number and unit (48 sq m, 20 km, 50 ml), no space before a percent sign in UI (5%), "percent" spelled out in prose.
- Ranges with "to" ("2 to 4 guests"), never a dash, by house rule.
- Large counts rounded with a word ("1.2k" is acceptable in social counters, never on money).
- Precision matches the decision: carat weights to two decimals (0.52 ct), gold purity in karat and fineness (18k, 750), room sizes to the nearest whole unit.

