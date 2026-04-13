---
name: corroborating-evidence-inspection
description: Inspect critical documents and establish plausible relationships within a document and across a document set. Corroborate evidence under International Standard on Auditing (ISA) 500, test internal consistency, cross-document reconciliation, third-party confirmation, narrative-versus-numbers challenge, chain of custody, and authenticity checks. Fires on keywords corroborate, corroboration, inspection, document inspection, cross-document, consistency check, plausibility, authenticity, ISA 500, evidence sufficiency, evidence appropriateness, third-party confirmation, external confirmation, ISA 505, expert report, tie-out, reconcile, narrative check.
---

# Corroborating Evidence & Critical Document Inspection

Structured inspection of documents to establish plausibility within a single document, and reconciliation across a document set — the auditor, investigator, lender, acquirer, and regulator's workhorse discipline.

## When to use

- Reviewing a set of primary evidence (contracts, invoices, board minutes, bank statements, confirmations).
- Testing plausibility of a narrative against the numbers.
- Pre-committee / pre-court / pre-regulator document pack QC.
- Transaction due diligence document inspection.
- Fraud investigation document analysis.
- Whistleblower allegation evidencing.
- ISA 500 evidence sufficiency & appropriateness challenge.

## The 4 layers of evidence work

```
Layer 1 — WITHIN document  (does this document make sense by itself?)
Layer 2 — ACROSS documents (do related documents tell the same story?)
Layer 3 — EXTERNAL corroboration (does an independent third party confirm?)
Layer 4 — NARRATIVE ↔ NUMBERS (does the story fit the data?)
```

All four layers should fire on any critical document set. Layer 3 is the strongest evidence (International Standard on Auditing — ISA — 500 hierarchy).

## Layer 1 — Within-document inspection

Test a single document for internal coherence. Every item below can be a dead-giveaway red flag.

| Check | What it catches |
|---|---|
| Dates logical | Invoice date before PO date; signature after contract expiry |
| Maths correct | Sub-totals, VAT, discounts, totals — recompute every line |
| Signatories valid | Signatory named exists, in role at that date, within authority limit |
| Terms self-consistent | Payment terms × delivery terms × penalty clauses don't contradict |
| Currency + units consistent | GBP vs £ vs "pounds"; kilos vs tonnes vs "t"; rate × hours = total |
| References resolve | "Per Schedule 3" exists; "as defined in clause 1.1" defined |
| Formatting anomalies | Font change, different date format mid-document, copy-paste residue |
| Metadata | File creation date, author, revision history — consistent with claim |
| Pagination continuous | No missing pages (signature / execution often on missing page) |
| Schedule totals foot | Schedules sum to the cover sheet figure |
| Language consistent | Sudden change in vocabulary / register = paste from elsewhere |

## Layer 2 — Across-document reconciliation

Test a document set for coherence. Build the **evidence cross-matrix**:

```
              Doc A      Doc B      Doc C      Doc D
Party         match      match      match      match
Date          match      match      mismatch✗  match
Amount        match      match      match      mismatch✗
Scope         match      match      match      match
Signatory     match      mismatch✗  match      match
```

Any ✗ is an action — not a walk-past.

### Standard cross-document ties

| Pair | What should match |
|---|---|
| Purchase order ↔ invoice ↔ goods receipt ↔ payment | Party, amount, date sequence, description |
| Contract ↔ revenue recognised ↔ invoicing schedule | Performance obligations, milestones, amounts |
| Board minutes ↔ executed document ↔ disclosure | Authority, signatory, date, material terms |
| Management accounts ↔ general ledger ↔ sub-ledger | Numbers tie — cast and cross-cast |
| Financial statements ↔ tax return ↔ regulatory return | Reconciling differences identified & explained |
| Employment contract ↔ payroll ↔ bank payment | Start date, salary, variations, bonus |
| Loan agreement ↔ drawdown notice ↔ bank statement ↔ ledger | Amount, date, interest rate, term |
| Customer contract ↔ fulfilment ↔ invoice ↔ cash receipt | End-to-end revenue trail |

### Date-chain logic

Many frauds / errors show on the timeline, not in the numbers. Always plot:

```
T0: Board approval
T1: Contract signed
T2: Goods / service delivered
T3: Invoice raised
T4: Payment due
T5: Payment received
```

Flag any inversion (signed after delivery) or unusual gap (signed same day as payment).

## Layer 3 — External / third-party corroboration

ISA 505 hierarchy (strongest first):

| Rank | Source | Reliability |
|---|---|---|
| 1 | Direct bank / counterparty / legal confirmation sent & returned to auditor | Highest |
| 2 | Regulatory filings / Companies House / Land Registry | High |
| 3 | External analyst / industry / market data | High (independence) |
| 4 | Management-prepared schedule backed by system of record | Medium |
| 5 | Management-prepared schedule unchecked | Lowest |

**Confirmation controls**:
- Auditor / investigator controls the address (never relayed through client).
- Returned directly to auditor (never via client).
- Non-responses followed up or alternative procedures applied.
- Disconfirmation responses investigated.

### Public-source corroboration — UK checklist

- **Companies House** — incorporation date, directors, filings, charges register, PSC.
- **Land Registry** — property ownership, charges, restrictions.
- **Court records** — active / historic litigation.
- **Financial Conduct Authority (FCA) Register** — regulated status, permissions.
- **OFAC / UK Sanctions / HM Treasury** — sanctions screening.
- **Charity Commission** — for non-profit counterparties.
- **HMRC VAT number check** — validate supplier.
- **ICO Register** — data controller registration.
- **LinkedIn / news** — personnel validation (sanity check only, not evidentiary).

## Layer 4 — Narrative-versus-numbers challenge

The most common failure. Every narrative claim should be testable against numbers:

| Narrative claim | Number test |
|---|---|
| "Strong growth in the Americas" | Segment revenue CAGR by geography |
| "Market-leading margins" | Gross margin vs named peers |
| "Digital transformation delivering efficiency" | Headcount, opex, cycle time over period |
| "Investment in R&D is our engine" | R&D % of revenue trend, R&D output (launches, patents) |
| "Strong cash generation" | Operating cash conversion = OCF / EBITDA; FCF yield |
| "Diversified customer base" | Top-10 customer concentration |
| "Prudent balance sheet" | Net debt / EBITDA, interest cover, maturity profile |
| "Growing market share" | Absolute share + source + vs peers |

If the narrative and the numbers tell different stories, the narrative is usually wrong.

## Authenticity checks (fraud lens)

- **Document provenance** — where did the file come from (email with headers? client portal? printed and re-scanned?).
- **File metadata** — author, revision count, creation/modification dates vs claim.
- **Digital signature** — validate certificate, chain to root, revocation status.
- **OCR artefacts** — evidence of scanning-for-editing (missing metadata + image-based text).
- **Pixel-level inspection** — font mismatches, mis-aligned baselines, altered fields.
- **Known templates** — does the document match the genuine template (HMRC SA302, bank statement, court order)?
- **Cross-reference to issuer** — can the issuer confirm it was issued?

## Chain-of-custody log

Every evidence item tracked with:

| Field | Example |
|---|---|
| Evidence ID | E-0142 |
| Description | Loan agreement dated 14 March 2025 |
| Source | Received from client via secure portal |
| Received by | [Initials] |
| Received date | 2026-03-12 14:32 UTC |
| Format | PDF, 2.1 MB, SHA-256 hash a4b2... |
| Custodian path | Portal → audit working file → evidence tree § 4.3 |
| Reviewed by | [Initials], [Date] |
| Cross-referenced | Working paper WP-0402 |

Break-in-custody = evidence loses weight in court / regulator.

## Plausibility heuristics — things that should not happen

- Invoice posted on a bank holiday.
- Employee expense claim on the day they were on annual leave.
- Contract signed by a director no longer in office at that date.
- Vendor with same bank details as employee.
- Round-sum high-value payment with no underlying documentation.
- Payment to a jurisdiction inconsistent with the counterparty's stated business.
- Board minute approving a transaction dated after execution.
- Large customer of a UK firm with no UK / EU presence.
- Supplier invoicing a group company in a zero-rate tax jurisdiction without substance.

## ISA 500 — evidence sufficiency and appropriateness

Every piece of evidence is tested on:

- **Sufficiency** (quantity) — enough to reduce audit risk to acceptably low.
- **Appropriateness** (quality) — relevant + reliable.

Relevance = does it address the assertion being tested (existence ≠ valuation ≠ rights).
Reliability ranks: direct external > indirect external > internal controls-backed > internal management-prepared > management oral.

## Deliverables

- Document inspection log (Layer 1 findings per document).
- Cross-document reconciliation matrix (Layer 2).
- External confirmation tracker (Layer 3 — sent, returned, exceptions).
- Narrative vs numbers challenge memo (Layer 4).
- Chain-of-custody log.
- Plausibility exception register with remediation owner.
- Evidence-hierarchy memo concluding on sufficiency & appropriateness.

## Anti-patterns

- Skimming a document set for the "big items" without Layer 1 checks.
- Accepting client-prepared schedules without reconciling to source.
- Confirmation letter routed via client — defeats independence.
- Narrative accepted because it is well-written — not tested.
- Red flags noted but not escalated / investigated.
- Evidence gathered but not cross-referenced in working papers.
- Same evidence used to test multiple assertions without reassessing relevance.

## Standards + references

International Standard on Auditing (ISA) 500 (Audit Evidence), ISA 501 (Specific Considerations for Selected Items), ISA 505 (External Confirmations), ISA 230 (Audit Documentation), ISA 240 (Fraud), ICAEW Technical Releases on evidence, IAASB handbook, UK Criminal Procedure Rules Part 35 (expert evidence), UK Civil Procedure Rules Part 32 (evidence), ACFE Fraud Examiners Manual (authenticity + chain of custody).
