# Un-Mission Mission Workshop — Deck v1.0

A 38-slide HTML presentation deck for the "un-mission mission" workshop. Built on the NBC v1.2 brand system (white-led, ink for emphasis, red full-bleed for the close).

## How to open

Double-click `index.html`, or in Chrome: **File → Open File** → select `index.html`.

The deck runs entirely in the browser with no build step. Designed for Chrome on macOS or Windows.

## How to navigate

| Key | Action |
|---|---|
| **Right arrow** / **Spacebar** | Advance to next reveal, or next slide if all reveals are shown |
| **Left arrow** | Go back one reveal, or previous slide |
| **Home** | Jump to slide 01 |
| **End** | Jump to last slide |
| **F** | Toggle fullscreen |
| **P** | Toggle print mode (all slides stacked, ready for PDF export) |
| **Esc** | Exit fullscreen or print mode |
| **Click on the slide** | Right two-thirds advances; left quarter goes back |

You can also start mid-deck by adding `#N` to the URL (e.g. `index.html#10` opens at slide 10).

## How to skip slides

Any slide can be hidden from the running deck without restructuring the file. Edit `index.html`, find the slide's `<section>` element, and add `data-skip="true"`:

```html
<section class="slide" id="slide-14" data-skip="true">
  ...
</section>
```

Skipped slides:
- are not navigated to during presentation,
- do not count in the slide counter ("01 / 36" instead of "01 / 38"),
- are excluded from print/PDF export.

To unhide, remove the attribute. Common uses:
- Skip personal-story slides for corporate clients.
- Skip example brands when presenting to that brand's competitor.
- Compress the deck to 45 minutes by hiding 2–3 expansion slides.

## How to export to PDF

1. Press **P** to enter print mode (all slides stack vertically as full 16:9 pages).
2. Press **Cmd+P** (macOS) or **Ctrl+P** (Windows) to open Chrome's print dialog.
3. Set destination to **Save as PDF**.
4. In **More settings**, set:
   - **Paper size**: a custom 1920×1080 page works best, or use Letter Landscape if custom isn't available.
   - **Margins**: None.
   - **Background graphics**: On.
5. Save.

Press **P** again or **Esc** to leave print mode.

## File structure

```
examples/un-mission-workshop/
├── index.html              The deck. 38 <section class="slide"> elements.
├── style.css               Brand tokens, slide framework, motifs, surfaces, animations.
├── script.js               Navigation, reveal engine, print mode, fullscreen.
├── README.md               This file.
├── SPEC.md                 The slide-by-slide spec the deck was built from.
└── assets/
    ├── fonts/
    │   └── Caveat.woff2    Local handwritten font for the Built to Last graph.
    └── *.jpg / *.png       21 photos referenced by the slides.
```

Inter, JetBrains Mono, and Noto Sans JP load from Google Fonts CDN. Caveat (the handwritten font for the Built to Last graph axes) is bundled locally so it always renders, even if the laptop is offline.

## Brand notes

- **White is the default surface.** Ink is used at moments of weight (parking attendant, why-listen arc, Ferrari, mission definition, full-screen brand photos in the famous-examples block, the Somer story arc). Red full-bleed is reserved for the closing slide.
- **Racing numbers** on section breaks use the brand red at 35% opacity on light surfaces and 25% on ink — same red as everywhere else, calibrated to recede.
- **Mono `// comments`** signal AI-fluency without bragging — captions, tags, footnotes, page numbers.
- **Eyebrows** are uppercase, tracked, with a red dot before them.
- Headlines are sentence case ending with a period. No em dashes anywhere.

## Versioning

v1.0 — first complete build off SPEC.md v3.0.
