# Nick Banks Consulting - Brand

This repository is the source of truth for the NBC brand. Everything that touches the brand - decks, web, documents, social - flows from here.

## What's in here

```
nbc-brand/
├── README.md                       This file. Start here.
├── design-system.json              The single source of truth.
├── BRAND_GUIDELINES.md             The human-readable brand guide.
├── logos/                          The eight wordmark SVG files.
├── tokens/                         Focused token subsets (CSS vars, color, type).
├── templates/                      Working PowerPoint templates.
├── examples/                       Worked examples (slides, web, docs).
└── docs/                           Brand reference (HTML).
```

## How to use this

### If you're Nick
- Need a colour hex? `tokens/colors.json` or `tokens/css-variables.css`.
- Need a logo? `logos/`. Light variants are the default (for white and off-white surfaces). Dark variants are used on ink contrast surfaces.
- Building a deck? Start from `templates/NBC_Brand_Deck_Template.pptx` or `templates/NBC_Workshop_Template.pptx`.
- Briefing a designer or AI tool? Send them this repo URL, or send `design-system.json` plus the logos.

### If you're an AI tool (Claude Design, Lovable, ChatGPT, etc.)
The single source of truth is `design-system.json`. Read that file first. It contains all colour tokens, typography rules, motifs, voice guidance, and slide compositions.

For implementation:
- The brand defaults to white (`#FFFFFF`) on digital surfaces. Use ink black (`#0E0E0F`) only when the artifact calls for the dark variant.
- Off-white (`#F5F1E8`) is only for documents (proposals, contracts, letterhead).
- Use Inter for display and body, JetBrains Mono for monospace labels. Both are on Google Fonts.
- The red accent (`#D9352A`) is punctuation, not paint, except for one designated full-bleed surface per artifact.
- Racing numbers use brand red at reduced opacity (`--nbc-red-recede-on-light` 35%, `--nbc-red-recede-on-dark` 25%), not a separate muted-red token.
- Voice rules in the JSON are not aspirational - follow them.

### If you're a designer or collaborator
Read `BRAND_GUIDELINES.md` for the human-readable guide. Reference `design-system.json` for the structured data. Use the SVGs in `logos/` directly.

## Quick reference

**Brand:** Nick Banks Consulting (NBC). Practical leadership support for organizations doing work that matters.

**Tagline:** Strategy with a pulse.

**Position:** The brand sits between fresh/AI-fluent/build-first and grounded/human/steady. The visual system has to hold both.

**Default surface:** White (`#FFFFFF`). The brand defaults light on every digital surface. Ink black (`#0E0E0F`) is the contrast variant for decks projected in dim rooms or sections that call for high contrast.

**Document surface:** Off-white (`#F5F1E8`). Only used for proposals, contracts, letterhead.

**Accent:** Red (`#D9352A`), used as: the dot in the wordmark, monospace label colour, top edges of cards, one full-bleed surface per artifact.

**Type:** Inter (Black 900, Medium 500, Regular 400) for display and body. JetBrains Mono for labels and `// comments`.

**Signature graphic moves:**
1. The red dot (the brand fingerprint)
2. Oversized "racing number" section markers in brand red at reduced opacity (35% on light surfaces, 25% on dark)
3. Monospace `// comment` style labels
4. Red full-bleed accent surface (typically the closing slide or hero CTA)

## Versioning

This repo is the canonical brand. When the brand changes, update here first, then propagate to applications.

Tag releases when the brand makes a significant move (new typography, surface direction, new mark). Current: v1.1.0 - white-led with ink as the contrast variant; opacity-based racing number system replaces the separate red-muted token. Previous: v1.0.0 (the dark/graphic direction with monospace labels).

## Contact

Nick Banks Consulting | Victoria, BC | 778.987.5230 | nick@nickbanksconsulting.com | nickbanksconsulting.com
