# Un-Mission Mission Workshop - Deck Spec v3.0

## What changed from v2

- Why-listen-to-me arc restored to 3 slides (credibility / rock / green building)
- Somer photo filename corrected: `18-somer-soaring.jpg` (Blythe is her mom, who took the photo)
- Added `data-skip` attribute mechanism for easily hiding slides during specific deliveries
- Slide count: 38 (was 37)

## Build context

- **Format:** HTML presentation deck (16:9, browser-based)
- **Length:** 60-90 minutes hybrid workshop
- **Audience:** Real paid client engagement
- **Brand:** NBC v1.2 (white-led, ink for emphasis, red full-bleed for crescendo)
- **Folder:** `examples/un-mission-workshop/`
- **Files:** `index.html`, `style.css`, `script.js`, `assets/`

## Navigation

- Right arrow / spacebar: advance to next reveal or next slide
- Left arrow: previous reveal or slide
- F: toggle fullscreen
- P: print mode (all slides stacked for PDF export)
- Esc: exit fullscreen
- Slide counter bottom right (mono, small)

## Slide hiding mechanism

Any slide can be hidden by adding `data-skip="true"` to its `<section>` element:

```html
<section class="slide" id="slide-14" data-skip="true">
  ...
</section>
```

The navigation script checks for this attribute and skips over hidden slides during presentation. To unhide, remove the attribute. No other code changes needed.

This lets Nick customize the deck per audience without restructuring the file. Common use cases:
- Skip the personal story slides for a corporate client
- Skip example brands when presenting to that brand's competitor
- Compress to 45 minutes by hiding 2-3 expansion slides

## Animation defaults

- **Slide-to-slide transitions:** instant cut (no fade)
- **Element reveals within a slide:** fade in + slight slide-up (translateY 20px → 0), 400ms, ease-out
- **Photo reveals (full-screen image after text):** crossfade 600ms
- **Built to Last graph lines:** SVG path animation, drawn left-to-right, ~800-1200ms
- **使命 character reveal:** each character fades in separately, 500ms

## Surface rhythm

White-led with ink moments where content earns weight:
- White: most teaching slides, working content, structural reference
- Ink: parking attendant moment, why-listen origin arc, mission definition, full-screen brand photos in the famous examples, the Somer story arc
- Red full-bleed: closing only

---

## Slide-by-slide spec

### 01. Cover

**Surface:** white
**Motifs:** eyebrow with red dot, hero headline, mono caption

**Content:**
- Eyebrow (top left): NICK BANKS CONSULTING
- Top right (mono): // [client name] / [date]
- Hero headline (Inter Black, ~64pt): "The un-mission mission."
- Subtitle (Inter Regular, 18pt): "Leaning, learning, loving."
- Mono caption (bottom): // a workshop on what mission actually is

**Animation:** static.

---

### 02. Agenda

**Surface:** white
**Motifs:** eyebrow, headline, mono numbered list with hairline rules

**Content:**
- Eyebrow: WELCOME
- Headline: "Here's where we're going."
- List (mono numbered, hairlines between):
  - 01 / Intros
  - 02 / Why listen to me
  - 03 / Architecture, intention, environment
  - 04 / The mission - what it is, what it isn't
  - 05 / How do we find ours
  - 06 / Your turn
  - 07 / What's next

**Animation:** static.

---

### 03. Just for now (parking attendant)

**Surface:** ink
**Motifs:** eyebrow, headline, full-bleed photo on right, mono caption

**Content:**
- Left: eyebrow (BEFORE WE START), headline "Just for now."
- Mono caption: // I'm the parking attendant. Marking your tires.
- Body text (Inter Regular): "Set aside everything you know about mission, vision, purpose. You can pick it back up in two hours. Try not to map this onto something else."
- Right: photo `03-just-for-now-traffic.jpg` (parking attendant marking tires)
- Photo credit (mono, very small): // photo: jean-marc

**Animation:** static.

---

### 04. Why listen to me - the credibility

**Surface:** ink
**Motifs:** eyebrow, headline, mono caption, four-item list, background photo

**Content:**
- Background: `05-why-listen-vancouver-workshop.jpg` (Vancouver workshop crowd 2011) at low opacity OR as side panel
- Eyebrow: WHY LISTEN TO ME
- Headline: "Radical demonstrations of high-performance organizations."
- Mono caption: // measured by
- Four items (mono numbered, hairlines between, fade in on click):
  - 01 / Outstanding financial performance
  - 02 / Exceptional operational excellence and quality
  - 03 / Unprecedented social impact
  - 04 / Having fun

**Animation:** items fade in one at a time on click.

**Notes:** You walk through items while telling your career arc story (UK / PR training / electric cars / buses / met-the-guy-at-the-workshop). The four items are the framing for what you and your former partner set out to do.

---

### 05. Why listen to me - Nick & Rags

**Surface:** ink
**Motifs:** eyebrow, mono caption, large photo

**Content:**
- Eyebrow: WHY LISTEN TO ME (continued)
- Photo (large, prominent): `05-business-partner-rock.png` (Nick and Rags on the rock, cigar)
- Mono caption: // nick and rags. one rock. one cigar.
- Body text (Inter Regular, smaller): "We had fun. Traveled the world. Eventually went different directions."

**Animation:** static.

---

### 06. Why listen to me - re-invigorated

**Surface:** ink
**Motifs:** eyebrow, headline, mono caption, photo

**Content:**
- Eyebrow: WHERE I AM NOW
- Headline (Inter Black, large): "Re-invigorated. Re-committed."
- Mono caption: // why this work, and why now
- Photo: `06-where-am-i-now-green-building.jpg` (lush green architecture - regrowth metaphor)
- Body text (Inter Regular, smaller): "Coming out of COVID, took this work further. Deeper. Expanded it for the world."

**Animation:** static.

**Notes:** Closes the why-listen arc. Three beats: what I set out to do (slide 4), what happened (slide 5), where I am now (slide 6).

---

### 07. Three foundations - section break

**Surface:** white
**Motifs:** eyebrow, racing number "01", section headline, mono caption

**Content:**
- Eyebrow: PART ONE
- Racing number "01" at 35% red opacity, oversized, right-aligned, may bleed
- Section headline (Inter Black 130pt): "Foundations."
- Mono caption: // architecture, intention, environment

**Animation:** static.

---

### 08. Three foundations - the Ferrari

**Surface:** ink
**Motifs:** eyebrow, three-stage reveal with photo

**Content:**
- Background: Ferrari pit stop photo (`07-three-foundations-ferrari.jpg`) - large, prominent
- Eyebrow: THREE FOUNDATIONS
- Headline (Inter Black, large): "How high-performance happens."

Reveal sequence (on clicks):
1. First click: "01 / Architecture" appears with mono caption // Ferrari vs Chevy. Designed for what?
2. Second click: "02 / Intention" appears with mono caption // What's actually happening, not what we say
3. Third click: "03 / Environment" appears with mono caption // Church or Irish pub. Same street, different calls.

**Animation:** each item fades in + slides up. Photo stays constant.

**Notes:** Stories per beat:
- Architecture: F1 vs Chevy (grandmother in back, two gears, donkey)
- Intention: Whistler weekend (don't get there) vs brother's wedding (do). Three-partners-with-precariously-balanced-life story.
- Environment: Church (calm, prayerful) vs Irish pub across the street (singing, dancing, loud).

---

### 09. The mission - section break

**Surface:** white
**Motifs:** eyebrow, racing number "02", section headline, mono caption

**Content:**
- Eyebrow: PART TWO
- Racing number "02" at 35% red opacity
- Section headline: "The mission."
- Mono caption: // what it is, what it isn't, where it comes from

**Animation:** static.

---

### 10. The mission - 使命 reveal

**Surface:** white
**Motifs:** eyebrow, headline, animated character reveal

**Content:**
Start state:
- Eyebrow: A JAPANESE WOMAN TOLD ME
- Headline (smaller, Inter Black): "The Japanese for mission is two characters."

Reveal sequence (on clicks):
1. First click: 使 character appears (large, centered) with caption "use" below
2. Second click: 命 character appears next to it with caption "life"
3. Third click: combined: "= mission. how you want to use your life."

**Animation:** each character fades in, 500ms. Caption text appears under each.

---

### 11. The mission - my definition

**Surface:** ink
**Motifs:** eyebrow, large statement, two-click reveal

**Content:**
State 1 (slide loads):
- Eyebrow: MY DEFINITION

Reveal sequence:
1. First click: Headline appears (Inter Black 44-52pt): "How we want to leave everyone we come into contact with."
   Mono caption: // that's the whole thing
2. Second click: Below the headline, smaller (Inter Regular ~18pt): "Mission is the link between architecture, intention, and environment. The thing that makes them a system, not just three pieces."
   Mono caption changes to: // mission connects the three

**Animation:** definition fades up first. On second click, the link statement fades in below.

---

### 12. Built to Last - the setup

**Surface:** white
**Motifs:** eyebrow, headline, body, mono caption

**Content:**
- Eyebrow: WHERE THIS COMES FROM
- Headline (Inter Black ~36pt): "Jim Collins studied companies that lasted."
- Body (Inter Regular, smaller): "Decades. 80, 90, 100+ years. Most companies don't make it past one decade. He wanted to know what these long-lasting ones had in common."
- Mono caption: // built to last - the book

**Animation:** static.

---

### 13. Built to Last - the graph

**Surface:** white
**Motifs:** eyebrow, hand-drawn SVG graph with 3-stage animation

**Content:**
Empty SVG graph on slide load:
- Y-axis labeled "Success" in handwritten yellow
- X-axis labeled "Decades" in handwritten yellow
- Just the L-shape of axes, nothing else

Reveal sequence:
1. First click: red flat squiggly line draws across the bottom (~800ms). Mono caption: "// most companies that survived stayed flat"
2. Second click: 4-5 blue rising lines draw in above (each ~1s, staggered ~150ms). Mono caption: "// a smaller subset did something different"
3. Third click: caption changes to: "// they all had a commitment statement"

**Animation:** SVG path animation using `stroke-dasharray` technique. Hand-drawn aesthetic preserved through slightly irregular paths and yellow handwritten labels.

---

### 14. Disney - the guess and reveal

**Surface state 1:** white
**Surface state 2:** ink (full-screen photo)

**State 1 (slide loads):**
- Eyebrow: GUESS WHO
- Headline (Inter Black, very large, ~96pt): "Magic, fun, and happiness."
- Mono caption: // who said this?

**State 2 (after click):**
- Photo full-bleed (`10-disney-walt-mickey.jpg`)
- Headline shrinks to corner: "Magic, fun, and happiness."
- Mono caption: // disney

**Animation:** photo crossfades in 600ms; headline scales/moves smoothly.

---

### 15. Cirque - the guess and reveal

**Surface state 1:** white
**Surface state 2:** ink (full-screen photo)

**State 1:**
- Eyebrow: GUESS WHO
- Headline: "To invoke the imagination, provoke the senses, and evoke the emotions of people around the world."
- Mono caption: // a tough one. who said this?

**State 2 (after click):**
- Photo full-bleed (`11-cirque-du-soleil.jpg`)
- Headline shrinks to: "Invoke. Provoke. Evoke."
- Mono caption: // cirque du soleil

**Animation:** photo crossfades in.

---

### 16. Coke vs Pepsi - the contrast

**Surface state 1:** white (split layout)
**Surface state 2:** ink with photo

**State 1 (slide loads):**
Two columns side by side:
- Left column (large, Inter Black ~48pt): "To refresh the world."
- Right column (smaller, Inter Regular ~14pt): "We have absolute clarity around what we do. We sell X. Our success will ensure customers build their businesses, employees build their futures, and shareholders build their wealth."
- Eyebrow: GUESS WHO (BOTH)
- Mono caption: // two competitors. one mission, one... statement.

**State 2 (after click):**
- Photo (`12-coke-vs-pepsi.jpg`) appears
- Mono caption: // coca-cola vs pepsi
- Small annotation: // notice who pepsi is talking to

**Animation:** photo crossfades in.

---

### 17. Starbucks - the guess and reveal

**Surface state 1:** white
**Surface state 2:** ink with photo

**State 1:**
- Eyebrow: GUESS WHO
- Headline: "To inspire and nurture the human spirit. One coffee, one community at a time."
- Mono caption: // who said this?

**State 2 (after click):**
- Photo full-bleed (`13-starbucks.jpg`)
- Headline shrinks to: "Inspire. Nurture."
- Mono caption: // starbucks

**Animation:** photo crossfades in.

---

### 18. More examples

**Surface:** white
**Motifs:** eyebrow, headline, mono list with reveal animation

**Content:**
- Eyebrow: MORE EXAMPLES
- Headline: "Some others I've worked on or seen."
- List (Inter Black 24pt, fading in one at a time on clicks):
  - Life unleashed
  - Holy fuck what a rush
  - Lit up
  - Stoked
  - Life is great
  - Unlocked
  - Leaning, learning, loving
  - Elevating the world from mediocrity to greatness // Chip @ Lululemon

**Animation:** items fade in sequentially on click.

**Notes:** "Holy fuck what a rush" - per-audience call. Use `data-skip` to swap to censored variant if needed.

---

### 19. Mission as a tool - section break

**Surface:** white
**Motifs:** eyebrow, racing number "03", section headline, mono caption

**Content:**
- Eyebrow: PART THREE
- Racing number "03" at 35% red opacity
- Section headline: "How to use it."
- Mono caption: // mission as a tool, five ways

---

### 20. Mission as a Tool - 01: Alignment

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: TOOL 01
- Mono number (red): 01
- Headline: "Alignment tool."
- Quote (Inter Regular Italic, larger): "Building a visionary company requires 1% vision and 99% alignment. When you have superb alignment, a visitor can drop in from outer space and infer your vision from the operations and activities of the company without ever reading it on paper or meeting a single senior executive."
- Attribution (mono, smaller): // jim collins and jerry porras. harvard business review.
- Photo: `16-tool-alignment-collins.png`
- Mono caption bottom: // people step in or step out. both are right outcomes.

**Animation:** static.

---

### 21. Mission as a Tool - 02: Decision-Making

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: TOOL 02
- Mono number (red): 02
- Headline: "Decision-making tool."
- Body (Inter Regular): "We make decisions all day. The mission gives the next step when policy doesn't cover it. Disney's street sweeper sees a child crying. Puts down the broom. Goes to deliver magic, fun, and happiness."
- Photo: `16-tool-joey-restaurant.jpg`
- Mono caption: // joey's. the founder asked: do we really need this manual?

**Animation:** static.

---

### 22. Mission as a Tool - 03: Creativity and Design

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: TOOL 03
- Mono number (red): 03
- Headline: "Creativity and design tool."
- Body (Inter Regular): "Every act, email, booth, activity gets held up to the mission. Cirque does it for every stunt. Riders did it for trade show booths - low budget, won People's Choice, every time."
- Photo: `16-tool-creativity-ryders.png`
- Mono caption: // riders' booth. mission: leave everyone stoked.

**Animation:** static.

---

### 23. Mission as a Tool - 04: Elevating

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: TOOL 04
- Mono number (red): 04
- Headline: "Elevating tool."
- Body (Inter Regular): "High-performers always look for what's inconsistent. A way for everyone to surface where things could be elevated."
- Photo: `16-tool-yvr-airport.jpg`
- Mono caption: // a contractor we worked with started paying their subs the day work was done. industry followed.

**Animation:** static.

---

### 24. Mission as a Tool - 05: Do The Right Thing

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, no photo

**Content:**
- Eyebrow: TOOL 05
- Mono number (red): 05
- Headline: "Do the right thing tool."
- Body (Inter Regular): "Organizations rooted in this start doing the right thing - for everyone, for the community, for the planet. Without being mandated to. They recycle. They change the lightbulb. They extend 'everyone' to mean everyone."
- Mono caption: // no image. the work speaks for itself here.

**Animation:** static.

---

### 25. What it isn't - section break

**Surface:** white
**Motifs:** eyebrow, racing number "04", section headline

**Content:**
- Eyebrow: A QUICK CLEAR-UP
- Racing number "04" at 35% red opacity
- Section headline: "What it isn't."
- Mono caption: // two common confusions

---

### 26. What it isn't - 01: A slogan or tagline

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: NOT THIS
- Mono number (red): 01
- Headline: "Not a slogan or tagline."
- Body (Inter Regular): "Slogans are external. 'Just Do It.' That's marketing. Mission is internal. The secret sauce. We don't care if anyone outside knows what 'leave more Remi Moments' means - we know."
- Photo: `14-nike-just-do-it.jpg`
- Mono caption: // remi moments. internal language. theirs alone.

**Animation:** static.

---

### 27. What it isn't - 02: A make-everyone-happy tool

**Surface:** white
**Motifs:** eyebrow, mono number, headline, body, photo

**Content:**
- Eyebrow: NOT THIS EITHER
- Mono number (red): 02
- Headline: "Not a make-everyone-happy tool."
- Body (Inter Regular): "Bad news still gets delivered. People don't always leave happy. The mission isn't about happiness - it's about whether people are left feeling that they matter, even when the answer is no."
- Photo: `17-what-isnt-crying-toddler.jpg`
- Mono caption: // my daughter wants more youtube. i say no. she's mad. the commitment holds.

**Animation:** static.

---

### 28. The Somer story - section break

**Surface:** ink
**Motifs:** eyebrow, racing number "05", section headline

**Content:**
- Eyebrow: HOW I FOUND MINE
- Racing number "05" at 25% red opacity (dark recede)
- Section headline: "Somer."
- Mono caption: // a story about a play structure

---

### 29. The Somer story - the play structure

**Surface:** ink
**Motifs:** eyebrow, mono caption, full-bleed photo

**Content:**
- Eyebrow: WHERE THIS LANDED FOR ME
- Photo: `18-playground.jpg` (full-bleed, prominent)
- Mono caption: // somer at the play structure. when she was small.

**Animation:** static.

**Notes:** Tell the full story while photo holds the visual:
- Living in Cooks Point Victoria, working from home
- Daily walks to the park
- The ladder she'd climb, get scared, look back at you
- Months of this. Other parents lifting their own kids.
- Eventually she did it herself.

---

### 30. The Somer story - the realization

**Surface:** ink
**Motifs:** eyebrow, headline, photo

**Content:**
- Eyebrow: WHAT I REALIZED
- Photo: `18-somer-soaring.jpg` (large, full-bleed)
- Headline (Inter Black, large): "I could die now and she'd be okay."
- Mono caption: // that was the mission

**Animation:** photo on load. Headline can fade in mid-story (your click).

---

### 31. Your turn - section break

**Surface:** white
**Motifs:** eyebrow, racing number "06", section headline

**Content:**
- Eyebrow: PART FIVE
- Racing number "06" at 35% red opacity
- Section headline: "Your turn."
- Mono caption: // how do we find ours

---

### 32. Your turn - the prompts

**Surface:** white
**Motifs:** eyebrow, headline, three numbered prompts with hairlines

**Content:**
- Eyebrow: START HERE
- Headline: "How do you want to leave people?"
- Three prompts (mono numbered, hairlines between, fade in one at a time):
  - 01 / Everyone you come into contact with - clients, employees, even people who've left. How do you want them to feel?
  - 02 / Your closest, dearest person - after a lunch together. How would you want to leave them, such that you could "shoot me now" and be okay?
  - 03 / Your children - if they were left this way in life, would you be content?

**Animation:** prompts fade in one at a time on click.

---

### 33. Your turn - what we've lived

**Surface:** white
**Motifs:** eyebrow, headline, body prompts

**Content:**
- Eyebrow: WHAT WE'VE ALREADY LIVED
- Headline: "When have you lived this?"
- Body (Inter Black ~28pt, hairlines between, fade in):
  - Stories of when you showed up big
  - Times when someone felt massively supported
  - Moments where the work transformed someone
- Mono caption: // before, during, after. find the stories.

**Animation:** items fade in.

---

### 34. Your turn - what to carry forward

**Surface:** white
**Motifs:** eyebrow, headline, body prompts

**Content:**
- Eyebrow: FROM YOUR DNA
- Headline: "What's worth carrying forward?"
- Body (Inter Black ~28pt, hairlines between):
  - Phrases or values from your past you still believe in
  - Commitments or ways of being you've liked
  - Pieces of your culture that deserve to come along
- Mono caption: // we didn't start from nothing.

**Animation:** items fade in.

---

### 35. Your turn - what's emerging

**Surface:** white
**Motifs:** eyebrow, headline, body prompts

**Content:**
- Eyebrow: LISTEN FOR PATTERNS
- Headline: "What's emerging?"
- Body (Inter Black ~28pt, hairlines between):
  - Words and phrases coming up again and again
  - What's surprising. What's obvious.
  - This isn't the final mission - it's the soil it'll grow from.
- Mono caption: // try it on.

**Animation:** items fade in.

---

### 36. The proof - your notebook

**Surface:** white
**Motifs:** eyebrow, mono caption, large photo

**Content:**
- Eyebrow: I'VE DONE THIS TOO
- Photo: `19-handwritten-notebook.jpg` (large, ideally full-bleed)
- Mono caption: // my own work on this

**Animation:** static.

---

### 37. Now what - the close

**Surface:** white
**Motifs:** eyebrow, headline, body

**Content:**
- Eyebrow: NOW WHAT
- Headline (Inter Black, large): "Try it on."
- Body (Inter Regular):
  - Take what you have today and live with it
  - Notice when it fits. Notice when it doesn't.
  - Workshop the words. Go deeper.
  - This is the soil, not the final tree.
- Mono caption: // we keep working it together.

**Animation:** static or fade-in.

---

### 38. Closing - red full-bleed

**Surface:** red full-bleed
**Motifs:** eyebrow on red, large headline, mono contact info

**Content:**
- Eyebrow: END
- Headline (Inter Black, very large): "Thank you."
- Sub-statement (Inter Regular, smaller): "Now go and do this work."
- Mono contact: nick@nickbanksconsulting.com / nickbanksconsulting.com / 778.987.5230

**Animation:** static.

---

## Slide count summary

38 slides total. Surface rhythm:
- White: 24 slides
- Ink: 13 slides
- Red full-bleed: 1 slide (closing only)

## Assets checklist

All in `assets/`:

**Used in deck:**
- 03-just-for-now-traffic.jpg
- 05-business-partner-rock.png (Nick & Rags cigar)
- 05-why-listen-vancouver-workshop.jpg (slide 4 background)
- 06-where-am-i-now-green-building.jpg (slide 6)
- 07-three-foundations-ferrari.jpg
- 08-mission-shimei-characters.jpg (or rendered as type)
- 09-built-to-last-flat.jpg, 09-built-to-last-rising.jpg (reference for SVG)
- 10-disney-walt-mickey.jpg
- 11-cirque-du-soleil.jpg
- 12-coke-vs-pepsi.jpg
- 13-starbucks.jpg
- 14-nike-just-do-it.jpg
- 16-tool-alignment-collins.png
- 16-tool-creativity-ryders.png
- 16-tool-joey-restaurant.jpg
- 16-tool-yvr-airport.jpg
- 17-what-isnt-crying-toddler.jpg
- 18-playground.jpg
- 18-somer-soaring.jpg (renamed from 18-daughter-blythe-throw.jpg)
- 19-handwritten-notebook.jpg

Total: 21 files, all present in `examples/un-mission-workshop/assets/`.

## Technical implementation notes for Claude Code

### Fonts

Load Inter (400, 500, 700, 900) and JetBrains Mono (400) from Google Fonts CDN with local font files as fallback. Local fallback files should be downloaded to `assets/fonts/` as part of the build:

```css
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter-Black.woff2') format('woff2');
  font-weight: 900;
}
/* etc. */
```

In HTML head:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### Brand tokens

Reference the design-system.json in the repo root for all colors, spacing, typography. Read it on build and apply consistently.

### Animation engine

Use vanilla JS with CSS transitions. No framework needed. The slide system is:

```javascript
// State: current slide index, current reveal index within slide
// Spacebar/right arrow: advance reveal, or advance slide if at last reveal
// Each slide has data attributes:
//   data-reveals="3" - how many reveals it has
//   data-skip="true" - skip during navigation
```

### SVG hand-drawn graph

The Built to Last graph (slide 13) needs custom SVG with:
- Slightly irregular paths to feel hand-drawn
- Yellow handwritten labels (use Caveat or similar handwritten Google Font, or include as SVG paths)
- Path animation via stroke-dasharray for the line drawing effect

### Print mode

Press P to enter print mode. All slides stack vertically, no animations, optimized for PDF export via browser's print-to-PDF function.

## Open decisions resolved

All previous open decisions are now resolved. Build can begin.
