---
name: new-invoice
description: Create a new branded NBC invoice from templates/invoice.html. Asks for invoice #, client, date, and line items, then generates a single-page HTML invoice in invoices/ ready to print to PDF. Trigger when the user types /new-invoice or asks to create an invoice.
---

# New invoice

Generate a new branded NBC invoice from `templates/invoice.html` into `invoices/`.

## Step 1 — gather inputs

Ask the user for these fields. Default the ones marked **default** unless the user overrides them. Use `AskUserQuestion` if available, otherwise ask in plain text.

- **Client name** — full name as it should appear on the invoice (e.g. `Alex Pym`, `Acme Co.`).
- **Optional bill-to lines** — extra lines under the client name (address, contact, attn). Default empty.
- **Issue date** — ISO `YYYY-MM-DD`. **Default:** today's date.
- **Due date** — ISO `YYYY-MM-DD`. **Default:** issue date + 30 days.
- **Invoice number** — integer. **Default:** scan `invoices/*.html` for the highest existing `<invoice_num>-*.html` and add 1. If `invoices/` is empty, default to one higher than the most recent invoice number visible in the conversation, or `194` if there's no other signal.
- **P.O. number** — string or blank. Default `—` (em-dash).
- **Line items** — at least one. For each: `item` (short label like `Consulting`), `description` (one short line), `qty` (number), `rate` (number, dollars). Default to a single line if the user only describes one piece of work.
- **Taxable?** — per line item, defaults to **yes** (5% GST). Only ask if the user mentions something non-taxable.

Confirm the assembled inputs back to the user in a tight summary before generating.

## Step 2 — compute

For each line item: `amount = qty * rate`, formatted to 2 decimals.
- `subtotal = sum of all amounts`
- `taxable_subtotal = sum of amounts where taxable = true`
- `tax_amount = round(taxable_subtotal * 0.05, 2)` — Canadian 5% GST
- `total = subtotal + tax_amount`
- `balance_due = total` (no partial payments handled in v1)

All money values render to 2 decimal places, no currency symbol in the line items / subtotals (matches QuickBooks-style original). The Balance Due line uses `$ NNN.NN CAD` formatting (already in template).

## Step 3 — render

1. Read `templates/invoice.html`.
2. Substitute the placeholders below. Do exact string replacement — the template uses `{{TOKEN}}` style.
3. Write to `invoices/{INVOICE_NUM}-{client-slug}.html` where `{client-slug}` is the client name lowercased, non-alphanumerics replaced with `-`, collapsed and trimmed (e.g. `Alex Pym` → `alex-pym`, `Acme Co.` → `acme-co`).

### Placeholder map

| Placeholder | Value |
|---|---|
| `{{INVOICE_NUM}}` | invoice number, no leading zeros (e.g. `194`) |
| `{{ISSUE_DATE}}` | ISO date |
| `{{DUE_DATE}}` | ISO date |
| `{{CLIENT_NAME}}` | exactly as entered |
| `{{CLIENT_LINES}}` | additional bill-to lines, each wrapped in `<div class="extra">…</div>` and joined; empty string if none |
| `{{PO_NUMBER}}` | P.O. number text (default `—`). Use `<span class="empty">—</span>` only if blank by default — otherwise render the value as plain text inside the `value` cell. (Easiest: always render plain; the `.empty` class is optional polish.) |
| `{{LINE_ITEMS_ROWS}}` | one `<tr>` per line item, see template below |
| `{{SUBTOTAL}}` | 2-decimal number |
| `{{TAX_AMOUNT}}` | 2-decimal number |
| `{{TOTAL}}` | 2-decimal number |
| `{{BALANCE_DUE}}` | 2-decimal number |

### Line item row template

For each line item, generate one `<tr>`:

```html
<tr>
  <td class="item">{ITEM}</td>
  <td>{DESCRIPTION}</td>
  <td class="right">{QTY}</td>
  <td class="right">{RATE}</td>
  <td class="right">{AMOUNT}<span class="tax-mark">T</span></td>
</tr>
```

Drop the `<span class="tax-mark">T</span>` if the line is **not** taxable. Concatenate all rows into the `{{LINE_ITEMS_ROWS}}` slot.

## Step 4 — open and report

1. Open the generated file in the user's default browser via `start "" "<absolute-path>"` on Windows.
2. Tell the user:
   - The file path that was created.
   - One reminder line on how to PDF: `Ctrl+P → Save as PDF → Letter → Margins: None → Background graphics: ON`.
   - A nudge that they can ask for tweaks (e.g. wording on payment line, add a non-taxable item) before printing.

## Constraints

- **Don't commit** the new invoice to git. The user commits manually if/when ready.
- **Don't change** `templates/invoice.html` — only read it. If the template needs updating, do that as a separate explicit change.
- **Don't fabricate** any field. If the user hasn't given the client name or a line item, ask for it.
- **Don't add features** beyond v1: no multi-currency, no partial-payment handling, no PST, no logo upload. Those come later.
