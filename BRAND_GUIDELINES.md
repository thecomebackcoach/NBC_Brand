# NBC Brand Guidelines

The human-readable companion to `design-system.json`. Read this for context. Reference the JSON for exact tokens.

## What NBC is

Nick Banks Consulting is a sole-proprietor consulting practice in Victoria, BC. Nick is a consultant, facilitator, and fractional executive. He helps leadership teams clarify direction, strengthen culture, and turn important ideas into practical action.

The practice serves mission-driven organizations across healthcare, manufacturing, housing, hospitality, and creative sectors, with an increasingly important audience of younger founder-led companies.

## Position

The tagline is "Strategy with a pulse." The longer version: practical leadership support for organizations doing work that matters.

The brand holds two ideas that usually pull apart: fresh, current, AI-fluent, build-first, and grounded, human, steady, care-led. Most consultants pick one. NBC is both, and the visual system is built to hold both.

## Voice

Five traits: clear, human, practical, thoughtful, steady.

Speak like a trusted advisor, not a vendor. Use first-person where it fits ("I help leadership teams..."). Use plain language with depth behind it. Concrete nouns over abstractions: teams, decisions, systems, meetings, plans, roles, tools.

Lean into: clarity, structure, trust, momentum, follow-through, care, human, practical, grounded.

Avoid: transformation, disruption, innovation, synergy, optimization, world-class, unlock, empower, leverage, holistic, paradigm.

Avoid AI tells: no negative parallelism ("It's not X, it's Y"), no false suspense ("Here's the kicker"), no pedagogical voice ("Let's break this down"), no em dashes (use en dashes), no bolding inside paragraphs for emphasis.

Headlines are sentence case with a period: "Make the important work clearer." Not all-caps, not Title Case.

## Visual system

### Surface

The brand defaults light. White (`#FFFFFF`) is the surface for every digital application: the website, decks shown on screen, social cards, anything on a screen.

Ink (`#0E0E0F`) is the contrast variant. Used deliberately when a surface calls for the dark treatment: decks projected in dim rooms, accent sections within a light-led page, artifacts where the audience or context warrants high contrast.

Red (`#D9352A`) becomes a full-bleed surface for one designated moment per artifact (typically the closing slide or hero CTA).

Off-white (`#F5F1E8`) is the document-only surface for proposals, contracts, and letterhead. It exists because documents are read on paper or in PDF readers where pure white can read harsh. Off-white is never used on digital surfaces.

### Surface rhythm

Default to white. Use dark and red when content earns the weight, not on a schedule. Mechanical alternation is not rhythm - it's a pattern. Real rhythm follows the content.

**Use white** for the default, hero/cover sections, detailed structured content (process steps, multi-column layouts), reference content (pillars, grids, tables), transitional section breaks, and body-heavy sections where readability matters most.

**Use ink** for the brand's central argument (the manifesto), dense card-based layouts where cards carry a lot of structure (recent work cards, case studies), section breaks that mark a meaningful transition or pause, and single-statement slides where the goal is gravity rather than detail.

**Use red full-bleed** once per artifact maximum, for the graphic crescendo - typically the closing slide or hero CTA.

The trap to avoid: alternating light/dark every section because variety feels safe. That's a pattern. Real rhythm has asymmetry. Some artifacts will have three white sections in a row, then ink, then more white. That's fine if each surface choice is content-driven.

### Type

Three typefaces, each with one job. All free.

- Inter Black (900) for display headlines and the wordmark
- Inter Bold (700) for working titles
- Inter Medium (500) for eyebrow labels and "CONSULTING" in the wordmark
- Inter Regular (400) for body
- JetBrains Mono for monospace labels, captions, page numbers, and `// comments`

Display headlines are tight (-0.04em letter-spacing). Eyebrow labels are wide and uppercase (0.18em). Body is default. Monospace gets a small positive tracking (0.04em).

### Wordmark

The wordmark is "Nick Banks" in Inter Black with a red dot followed by "CONSULTING" in Inter Medium uppercase below. The dot is part of the system, not optional.

Four marks live in the system:
- **Primary wordmark** (`logos/nbc-wordmark.svg`) - the light variant, default for white and off-white surfaces. The dark variant (`nbc-wordmark-dark.svg`) is used on ink contrast surfaces.
- **Lockup** (`logos/nbc-lockup.svg`) - light variant default; dark variant for ink surfaces. Black NB block beside the wordmark, for letterhead and contexts wanting more presence.
- **Short mark** (`logos/nbc-short-mark.svg`) - light variant default; dark variant for ink surfaces. "NBC" with red dot tight to the C, for footers and signatures.
- **Monogram** (`logos/nbc-monogram.svg`) - square NB on black block, for favicons and tight square spaces. Universal mark - works on white, off-white, and ink because the block is part of the design.

Light variants are the default (for white and off-white surfaces). Dark variants are used on ink contrast surfaces. The monogram has no separate variant - it works everywhere as-is.

### Motifs

The brand has four signature graphic moves. Use all of them. They're what makes a surface feel like NBC.

**The red dot.** A small red circle next to "CONSULTING" on the wordmark, before eyebrow labels on slides, and as a divider in select contexts. The brand fingerprint.

**Racing numbers.** On section break slides, the section number ("01", "02", etc.) appears as an oversized character in brand red at reduced opacity (35% on light surfaces, 25% on dark surfaces). The same red as everywhere else in the system, just calibrated to recede on each surface type. Inspired by racing numbers on rally cars. The number can bleed off the right edge of the surface; cropping is intentional.

**Monospace comments.** JetBrains Mono labels in red appear as inline column headers (`// what we do`, `// the tools`), as captions under section headlines (`// the part where we ask better questions`), and as small annotations. They look like code comments. They signal AI-fluency without bragging.

**Red full-bleed.** One slide or section per artifact gets to be on a fully red surface. Typically the closing slide ("Let's talk."). The graphic crescendo.

### Layout principles

Type does the work. Graphics support, never lead. One bold move per surface, with breathing room. Generous whitespace. Photography is large, lit like a studio shot, real, never stock. No drop shadows, gradients, soft rounded cards, swooshy graphics, or AI-generated imagery. Hairline rules at 0.5px.

## Application

### Decks

16:9 format. White-led by default. Use the ink variant for decks projected in dim rooms or contexts that call for high contrast. Section breaks use racing numbers. Working slides use eyebrow + headline + body. The closing slide is red full-bleed.

Standard slides in the system:
1. Cover (oversized headline + mono caption)
2. Manifesto (argument + two-column resolution with mono labels)
3. Section break (eyebrow + racing number + headline word + mono caption)
4. Portrait + frame (text left, real photo right)
5. Four pillars (red top rules, mono numbers, four columns)
6. Recent work (three cards with red top edges and mono tags)
7. Process steps (mono numbers, titles, mono `// comment` annotations)
8. Deliverables (two columns with mono tags and Inter body)
9. Closing (red full-bleed CTA)

### Website

`nickbanksconsulting.com` is white-led. Inter for everything visible. JetBrains Mono for accent labels.

Use ink (`#0E0E0F`) sections sparingly within the white-led page for emphasis - one or two contrast moments per page, not every block. Off-white is not used on web; off-white is only for documents.

### Documents

Off-white-led for proposals, letterhead, and contracts. Standard footer:

> Nick Banks Consulting | Victoria, BC | 778.987.5230 | nick@nickbanksconsulting.com | nickbanksconsulting.com

File naming: `Client_Doctype_YYYY-MM-DD.docx`.

Workshop materials match the client's brand, not NBC's.

### Social

White-led by default, type-driven. The ink variant is used for high-impact moments. LinkedIn banner uses the lockup. Post images use the racing number system or the red full-bleed treatment.

## What this brand is not

To stay honest, here's what to avoid:

- Not a serif/literary brand. The previous nickbanksconsulting.com used Playfair-style serifs; the new system replaces those.
- Not a warm cream-led editorial brand. Earlier explorations used cream as a primary surface; the brand now uses pure white as default with off-white reserved for documents.
- Not a dark-led brand. Earlier explorations defaulted to ink black; the brand now defaults light with dark as a deliberate contrast variant.
- Not a corporate consultancy aesthetic. No chevrons, drop shadows, or stock people-laughing-at-laptops imagery.
- Not a startup SaaS aesthetic. No purple gradients, glass-morphism, or AI swoosh graphics.
- Not a coach/personal-development aesthetic. No soft pastels, no "unlock your potential" register.

## Versioning

Current: v1.1.0 - white-led with ink as the contrast variant; opacity-based racing number system replaces the separate red-muted token.

Earlier versions: v1.0.0 (dark/graphic direction with monospace labels). Earlier explorations (cream-led editorial, charcoal-led with serif) are not the current brand and shouldn't be referenced.
