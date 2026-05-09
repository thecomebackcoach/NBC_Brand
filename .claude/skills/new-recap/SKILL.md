---
name: new-recap
description: Create a new branded NBC un-mission workshop recap from templates/recap.html. Asks for client, date, and the capture .txt file exported from slide 33 of the deck, drafts themes from the captured words, then generates a multi-page HTML recap in recaps/ ready to print to PDF. Trigger when the user types /new-recap or asks to create a workshop recap.
---

# New recap

Generate a new branded NBC un-mission workshop recap from `templates/recap.html` into `recaps/`.

## Step 1 — gather inputs

Ask the user for these fields. Default the ones marked **default** unless the user overrides them. Use `AskUserQuestion` if available, otherwise ask in plain text.

- **Client name** — full name as it should appear on the recap (e.g. `Alex Pym`, `Sam Tilden`). Used in proper case on the cover and closing, and lowercased automatically for the mono page footers.
- **Workshop date** — ISO `YYYY-MM-DD`. **Default:** today's date. Only the year is rendered (in the cover mono `// workshop · YYYY`).
- **Capture file** — absolute or relative path to the `.txt` file the user exported from slide 33 of the deck (filename pattern: `capture-YYYY-MM-DD.txt`). Read it with the Read tool. If the user pastes the contents directly into chat instead of giving a path, accept that and skip the file read.

If any required field is missing, ask for it. Don't fabricate.

## Step 2 — parse the captured words

Take the capture text and split it into individual words/phrases. The text the user types into the capture board is freeform — usually one phrase per line, sometimes separated by commas, sometimes with blank lines between thoughts.

- Split on newlines first.
- Trim whitespace.
- Drop empty lines.
- If a single line obviously contains multiple distinct phrases separated by commas or semicolons, split those too — but only if it's clearly a list, not prose. When in doubt, keep the line intact.
- Preserve punctuation, capitalization, and spelling exactly as the user typed it. Do a light typo pass only if something is obviously a slip (e.g. `teh` → `the`); err on the side of leaving things alone. The recap page literally says "captured live · light typo pass only" — that's the contract.

Each surviving line becomes one `<li>` in the captured-words list.

## Step 3 — draft the themes

Read all the captured phrases as a whole. Look for clusters — words that point at the same underlying feeling, image, or move. Group them into **3 or 4 themes**. (Three is fine. Four is the cap — more than that and it stops being a pattern.)

For each theme produce:
- **Headline** — a short, declarative phrase (3–6 words) that names the cluster the way Nick would: warm, plainspoken, sentence case, ending with a period. Look at the existing example for the rhythm: `Free, light, unshackled.` / `Fully seen, fully fine.` / `Lit up, alive, in it.` / `Together, not alone.`
- **Traces** — a `· `-separated list of the actual phrases from the capture that belong to this theme. Lowercase the phrases. These appear in italic mono and let the client see why this theme was named.

Then **show the drafted themes to the user inline** and ask them to edit, reorder, drop, or add before you write the file. Use this format:

```
Drafted 4 themes from the capture:

01 — Free, light, unshackled.
   traces: freed up · unshackled · flying · soaring · take a leap · on adventure · I thought this was supposed to be hard

02 — Fully seen, fully fine.
   traces: your weird is okay · I see them · take the mask off · loved and safe

03 — Lit up, alive, in it.
   traces: lit up · life is fun · laughing · excitement · optimism · curiosity

04 — Together, not alone.
   traces: comradeship · winning together · you're not alone · making connections

Tweak any of these (rename, reorder, drop, merge, add) before I write the file?
```

Wait for the user's edits. If they say "looks good" or similar, proceed.

## Step 4 — render

1. Read `templates/recap.html`.
2. Substitute the placeholders below. Do exact string replacement — the template uses `{{TOKEN}}` style.
3. Write to `recaps/{client-slug}-recap.html` where `{client-slug}` is the client name lowercased, non-alphanumerics replaced with `-`, collapsed and trimmed (e.g. `Alex Pym` → `alex-pym`, `Sam O'Brien` → `sam-o-brien`).

### Placeholder map

| Placeholder | Value |
|---|---|
| `{{CLIENT_NAME}}` | client name exactly as entered (proper case) |
| `{{CLIENT_NAME_LOWER}}` | client name lowercased (used in mono page footers) |
| `{{WORKSHOP_YEAR}}` | the year from the workshop date (e.g. `2026`) |
| `{{CAPTURED_WORDS_LIST}}` | one `<li>...</li>` per captured phrase, joined with newlines |
| `{{THEME_CARDS}}` | the 3 or 4 theme `<div class="theme">` blocks |

### Captured words list template

For each captured phrase, generate one `<li>`. HTML-escape any `<`, `>`, or `&` characters in case the user typed them literally. Keep the phrase otherwise verbatim.

```html
<li>{PHRASE}</li>
```

### Theme card template

For each theme, generate one card. Number them `Thread 01`, `Thread 02`, etc., in the order the user approved. Build the traces string by joining the lowercased phrases with ` · `. Wrap traces in `<em>// ... .</em>` (mono italic, leading `// `, trailing period).

```html
<div class="theme">
  <div class="label">Thread {NN}</div>
  <h4>{HEADLINE}</h4>
  <p class="traces"><em>// {trace1} · {trace2} · {trace3}.</em></p>
</div>
```

## Step 5 — open and report

1. Open the generated file in the user's default browser via `start "" "<absolute-path>"` on Windows.
2. Tell the user:
   - The file path that was created.
   - A reminder line on how to PDF: `Ctrl+P → Save as PDF → Letter → Margins: None → Background graphics: ON`.
   - That the captured-words page (page 5) and the themes page (page 6) are the parts most likely to want a second pass — they can ask for tweaks (rename a theme, reorder, fix a transcription) before printing.

## Constraints

- **Don't commit** the new recap to git. The user commits manually if/when ready.
- **Don't change** `templates/recap.html` — only read it. If the template needs updating (new section, copy edit, brand change), do that as a separate explicit change.
- **Don't fabricate** any field. If the user hasn't given the client name or the capture, ask for it.
- **Don't rewrite the captured words.** They are the client's own language — preserve them. Light typo pass only.
- **Don't add features** beyond v1: no client-specific principles, no per-client examples, no per-client homework. The body of the recap is the un-mission workshop content as-is. Customizations come later as a separate version.
