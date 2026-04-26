# NBC Motifs

The signature visual moves that recur across the brand. Each motif is a way of combining tokens (color, type, spacing) into a pattern that makes a surface feel like NBC.

This file documents what each motif is, when to use it, the exact specs, and code/markup examples. Anyone (Nick, an AI tool, a designer) should be able to read a motif spec and recreate it correctly.

For the underlying tokens these motifs reference, see `/tokens/` and `/design-system.json`.

## Quick index

1. The red dot
2. Eyebrow labels
3. Racing numbers
4. Monospace `// comments`
5. Red top edges
6. Red full-bleed surfaces
7. Hairline rules
8. Standard footer

---

## 1. The red dot

The brand fingerprint. A small red circle.

**When to use**
- Next to "CONSULTING" on the wordmark
- Before eyebrow labels on every slide
- As a divider in select contexts
- As the bullet for short featured lists (max 3 items)

**Spec**
- Color: `#D9352A` (red)
- Shape: perfect circle
- Size depends on context:
  - In wordmark next to CONSULTING: 8-9px
  - Before eyebrow labels on slides: 8px
  - In footers next to NBC short mark: 6-7px
  - As list bullets: 9px

**Code (CSS)**
```css
.nbc-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #D9352A;
  border-radius: 50%;
}
```

**Code (SVG)**
```xml
<circle cx="4" cy="4" r="4" fill="#D9352A"/>
```

**Don't**
- Don't recolor the dot
- Don't outline it
- Don't make it square or rounded-square
- Don't use it as decoration; it's punctuation

---

## 2. Eyebrow labels

The uppercase label that opens almost every slide. Pairs the red dot with a short tracked-out word.

**When to use**
- Top of every working slide and section break
- As section headers in long documents
- As category tags in lists

**Spec**
- Type: Inter Medium 500
- Size: 10-11pt
- Tracking: 0.18em
- Case: UPPERCASE
- Color: `#F2F1ED` (text primary on dark) or `#1C1B19` (text body on off-white)
- Red dot before the label, 10-12px gap between dot and text
- Text is typically 1-3 words: "SECTION", "ABOUT", "PROCESS", "RECENT WORK"

**Examples of eyebrow text**
- SECTION
- SECTION 02 / CLARITY
- ABOUT
- PROCESS
- RECENT WORK
- DELIVERABLES
- WHAT WE BELIEVE
- END

**Code (HTML/CSS)**
```html
<div class="nbc-eyebrow">SECTION 02 / CLARITY</div>
```

```css
.nbc-eyebrow {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #F2F1ED;
  display: flex;
  align-items: center;
  gap: 10px;
}
.nbc-eyebrow::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #D9352A;
  border-radius: 50%;
}
```

**Don't**
- Don't use Title Case or sentence case
- Don't skip the dot
- Don't use heavy weight; 500 only

---

## 3. Racing numbers

Oversized section markers in muted red. Inspired by racing numbers on rally cars. Sit partially behind or beside the section's headline word.

**When to use**
- On section break slides only
- Once per section break
- Number reflects the section's position in the deck (01, 02, 03, etc.)

**Spec**
- Type: Inter Black 900
- Color: Brand red `#D9352A` at reduced opacity. **35% on light surfaces, 25% on dark surfaces.** Use the CSS variable `--nbc-red-recede-on-light` or `--nbc-red-recede-on-dark` depending on the surface.
- Size scales with canvas:
  - Slide at 16:9 / 1920x1080: 200-280pt
  - Slide at 16:9 / 1280x720: 180-220pt
  - Print or large format: scale proportionally
- Tracking: -0.04em to -0.06em (very tight)
- Position: right-aligned, may bleed past the right edge of the canvas
- Z-index: behind the headline word, in front of the surface

The racing number uses the same brand red as the rest of the system, calibrated by opacity for the surface. There is no separate "muted red" token.

**Composition with headline word**
The racing number sits to the right; the headline word ("Why", "What", "How", "Now what") sits left at Inter Black 130pt. They overlap visually but the headline word is in front and uses the surface's primary text color (`#0A0A0A` on light, `#F2F1ED` on dark) so it reads cleanly.

**Code (HTML/CSS) - light surface (default)**
```html
<div class="nbc-section-break nbc-section-break--light">
  <div class="nbc-eyebrow">SECTION</div>
  <div class="nbc-racing-number">02</div>
  <div class="nbc-section-headline">Why</div>
  <div class="nbc-mono-caption">// the part where we ask better questions</div>
</div>
```

```css
.nbc-section-break {
  position: relative;
  padding: 3rem;
  overflow: hidden;
}
.nbc-section-break--light {
  background: #FFFFFF;
}
.nbc-section-break--light .nbc-racing-number {
  color: rgba(217, 53, 42, 0.35); /* --nbc-red-recede-on-light */
}
.nbc-section-break--light .nbc-section-headline {
  color: #0A0A0A;
}

.nbc-racing-number {
  position: absolute;
  right: -2rem;
  top: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 360px;
  line-height: 0.85;
  letter-spacing: -0.05em;
  z-index: 1;
}
.nbc-section-headline {
  position: relative;
  z-index: 2;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 130px;
  letter-spacing: -0.045em;
  line-height: 1;
  margin-top: 4rem;
}
```

**Code (HTML/CSS) - dark contrast variant**
```css
.nbc-section-break--dark {
  background: #0E0E0F;
}
.nbc-section-break--dark .nbc-racing-number {
  color: rgba(217, 53, 42, 0.25); /* --nbc-red-recede-on-dark */
}
.nbc-section-break--dark .nbc-section-headline {
  color: #F2F1ED;
}
```

**For PowerPoint specifically**
The visual ideal of "bleeds off the right edge" is hard to reproduce in PowerPoint without rasterizing the number. Acceptable compromise: render the number large but contained within the slide. Aim for 200-240pt at 10x5.625 inch slides, right-aligned in a text box that ends at the slide edge. Apply the brand red (#D9352A) and set the text fill transparency to match the surface (35% on light, 25% on dark).

**Don't**
- Don't use a separate muted-red color; the system uses brand red with opacity
- Don't center it; right-aligned with potential bleed
- Don't add it to non-section-break slides
- Don't let it compete with the headline word; the headline is the focus
- Don't use the racing number opacity values for any other element. They're calibrated specifically for large-format type. Other elements use full-strength brand red.

---

## 4. Monospace `// comments`

JetBrains Mono labels and captions formatted to look like code comments. The most opinionated motif in the system. Signals AI-fluency without bragging.

**When to use**
- Eyebrow-style captions under headlines on section breaks
- Inline column labels on multi-column slides ("// what we do", "// what you get")
- Tags on cards or items ("// healthcare", "// strategy")
- Page numbers and project tags in slide footers
- Date/location displays on covers
- Contact info on closing slides

**Spec**
- Type: JetBrains Mono Regular 400
- Size: 9-12pt depending on context
- Tracking: 0.04em
- Case: lowercase preferred for caption-style ("// the part where we ask better questions")
- Format: always start with `// ` (two slashes plus a space)
- Color depends on role:
  - As a label/header in red: `#D9352A`
  - As secondary text on dark surfaces: `#B8B5AB`
  - As secondary text on off-white surfaces: `#5C5A53`

**Examples**
- `// the work`
- `// the tools`
- `// what we do`
- `// what you get`
- `// process`
- `// the part where we ask better questions`
- `// fresh, current, ai-fluent. grounded, human, useful.`
- `// healthcare`, `// manufacturing`, `// software` (as tags)

**Code (HTML/CSS)**
```html
<div class="nbc-mono-label">// what we do</div>
<p>Map the moving parts. Name what is changing. Decide what matters next.</p>
```

```css
.nbc-mono-label {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #D9352A;
}
```

**Don't**
- Don't use Inter or another mono font; only JetBrains Mono
- Don't use Title Case or all-caps; lowercase is the voice
- Don't skip the `// ` prefix
- Don't make it longer than ~10 words; it's a caption, not body copy
- Don't use mono comments on every slide; they punctuate, not decorate

---

## 5. Red top edges

A 1px or 1.2px red horizontal line on the top edge of cards and pillars. Adds a subtle structural accent without becoming decoration.

**When to use**
- Top of each card on the recent-work or pillars slides
- Top of feature blocks on the website
- As a subtle divider before key content blocks

**Spec**
- Color: `#D9352A`
- Weight: 1px (cards), 1.2px (pillars on section overview)
- Position: top edge of the container, full width
- Always paired with content sitting below it; never floating alone

**Code (HTML/CSS)**
```html
<div class="nbc-card">
  <div class="nbc-mono-label">// healthcare</div>
  <h3>Culture transformation</h3>
  <p>Multi-year effort to strengthen leadership, connection, and care...</p>
</div>
```

```css
.nbc-card {
  border-top: 1.2px solid #D9352A;
  padding: 1rem 1.25rem;
  border-left: 0.5px solid #2A2A2A;
  border-right: 0.5px solid #2A2A2A;
  border-bottom: 0.5px solid #2A2A2A;
}
```

**Don't**
- Don't apply red edges to all sides of a container; top edge only
- Don't use red edges as a constant pattern (every block); they earn attention
- Don't make them thicker than 1.2px

---

## 6. Red full-bleed surfaces

One slide or section per artifact rendered on a fully red background. The graphic crescendo.

**When to use**
- Closing slide of a deck (typically a "Let's talk." or "Now what." moment)
- Hero CTA section on the website
- One editorial moment in long-form content

**Use rule: once per artifact maximum.** A deck has one red full-bleed slide. A web page has one red full-bleed section. Using it more than once dilutes its weight.

**Spec**
- Background: `#D9352A` (red)
- Text color: `#FCEEEC` (text on red)
- Eyebrow label uses `#FCEEEC` for both dot and text on this surface
- Hairline rules use a 30% alpha white: `rgba(255,255,255,0.3)`
- All other rules of typography apply (Inter Black for headlines, mono for captions/footers)

**Code (HTML/CSS)**
```html
<section class="nbc-red-bleed">
  <div class="nbc-eyebrow nbc-eyebrow--on-red">END</div>
  <h1>Let's talk.</h1>
  <p>If something here landed, the next move is a 30-minute conversation.</p>
  <div class="nbc-mono-contact">nick@nickbanksconsulting.com / nickbanksconsulting.com</div>
</section>
```

```css
.nbc-red-bleed {
  background: #D9352A;
  color: #FCEEEC;
  padding: 4rem 3rem;
}
.nbc-red-bleed h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 110pt;
  letter-spacing: -0.045em;
  line-height: 1;
}
.nbc-eyebrow--on-red,
.nbc-eyebrow--on-red::before {
  color: #FCEEEC;
}
.nbc-eyebrow--on-red::before {
  background: #FCEEEC;
}
```

**Don't**
- Don't use the red full-bleed more than once per artifact
- Don't put body copy in long paragraphs on red; the surface is for short, declarative statements
- Don't use the bright text-primary `#F2F1ED` on red; use `#FCEEEC`

---

## 7. Hairline rules

0.5px lines that structure surfaces without competing for attention.

**When to use**
- Footer separators on slides (above the NBC mark / project tag / page count line)
- Between rows in tables and lists (process steps, commitments tables)
- Below section headers on long-form content
- Between feature blocks on the website

**Spec**
- Weight: 0.5px (always; never thicker)
- Color depends on surface:
  - On ink: `#2A2A2A` (hairline dark)
  - On off-white: `#BDB8AC` (hairline light)
  - On red full-bleed: `rgba(255,255,255,0.3)`

**Code (CSS)**
```css
.nbc-hairline {
  border-bottom: 0.5px solid #2A2A2A;
}
.nbc-hairline--light {
  border-bottom: 0.5px solid #BDB8AC;
}
```

**Don't**
- Don't use thicker rules; 0.5px keeps them out of the way
- Don't use red rules as hairlines; red is reserved for accents (see "Red top edges")
- Don't skip them on long content; they create rhythm

---

## 8. Standard footer

The composition that closes every slide in a deck. Three elements separated by a hairline rule.

**Layout**
A 0.5px hairline rule across the slide, then below it: NBC short mark with red dot (left), project tag in monospace (center), page count in monospace (right).

**Spec**
- Hairline rule: 0.5px solid (color depends on surface; see Hairline rules above)
- Left: "NBC" in Inter Black 11pt + red dot
- Center: project tag in JetBrains Mono 9pt; lowercase preferred ("// brand deck", "// tality workshop 2026-04")
- Right: page count in JetBrains Mono 9pt, format `01 / 12`
- Text colors:
  - On ink: text primary `#F2F1ED` for NBC mark, secondary `#B8B5AB` for tag and count
  - On off-white: black `#0A0A0A` for NBC mark, muted `#5C5A53` for tag and count
  - On red full-bleed: `#FCEEEC` for everything

**Composition example**
```
─────────────────────────────────────────────────────
NBC●           // brand deck                  03 / 12
```

**Don't**
- Don't change the order; left/center/right is consistent
- Don't add extra elements (logos, dates, URLs) to the footer; those go on the cover or closing
- Don't skip the page count; it's a wayfinding aid

---

## How motifs combine

The motifs aren't independent decorations; they layer to make NBC slides recognizable.

**Section break slide:**
Eyebrow (#2) + racing number (#3) + headline word + monospace caption (#4) + standard footer (#8)

**Working content slide:**
Eyebrow (#2) + headline + body content + standard footer (#8)

**Card-based slide (recent work, etc.):**
Eyebrow (#2) + headline + cards with red top edges (#5) + standard footer (#8)

**Closing slide:**
Eyebrow (#2, on-red variant) + headline + body + monospace contact (#4) + standard footer (#8, on-red variant) + the surface itself is red full-bleed (#6)

If you can't tell which motifs are doing the work on a finished slide, the slide is probably underbuilt or overbuilt. Audit it against this list.

---

## Surface choice and rhythm

The motifs above are surface-agnostic - they work on white, ink, or red. The decision of *which* surface to use for a given artifact section is governed by the surface rhythm principle in `design-system.json` (under `surfaceRhythm`) and `BRAND_GUIDELINES.md`.

Short version: default white. Use ink when content earns weight (the manifesto, dense card layouts, pause-before-crescendo section breaks). Use red full-bleed once per artifact for the graphic crescendo.

Mechanical alternation is the trap. Real rhythm follows the content.

---

## When to add a new motif

Don't add a motif until you've used it three times across different artifacts. Brand systems get bloated when every one-off treatment becomes a documented pattern. Keep this file lean.

If you find yourself needing a new motif, add it here with the same structure: when to use it, spec, code example, and what not to do.

---

## Version

Current motifs: v1.0.0 (matches design-system.json v1.0.0)

Last updated: 2026-04 - initial documentation
