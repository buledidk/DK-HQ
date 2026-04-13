---
name: fs-internal-consistency
description: Use for internal consistency checks across the financial statements — primary statements tying to each other, notes tying to face, prior-year comparatives, segment to group, narrative to numbers, strategic report to audited figures, investor-deck + earnings-call to filed accounts, tax reconciliation, cash-flow reconciliation, APM reconciliation. Auto-trigger on phrases like "consistency check", "tie out", "cross-check", "does it foot", "reconcile FS", "narrative vs numbers", "KPIs vs audited", "APM reconciliation".
---

# fs-internal-consistency

A hard-nosed "does everything agree with everything else?" skill.

## Seven layers of consistency

### 1. Primary statements foot + cross-foot
IS lines foot; BS assets = equity + liabilities; CF foots to cash movement;
SoCiE movements = closing equity; PY comparatives foot the same.

### 2. Primary statements agree to each other
- CF net cash movement = closing cash − opening cash on BS
- NI in IS = CF top-line = SoCiE movement
- OCI in IS = OCI in SoCiE
- Dividends in SoCiE = CF financing
- Share issue in SoCiE = CF financing proceeds
- PP&E: opening + additions (CF) − disposals (CF + gains in IS) − depreciation (IS) = closing (BS + note)

### 3. Notes agree to face of statements
Every note total = primary statement line. Movement tables open+movements=close.
Segment revenue/result/assets reconcile to group with reconciling item disclosed.
Tax reconciliation: ETR reconciles statutory to actual.

### 4. This year vs prior year
Opening = last year's closing (no unexplained restatement).
Restatement? IAS 8 disclosure reconciling change.
Policies unchanged or change disclosed.
Line-item definitions unchanged.
Comparative narrative consistent with comparative numbers.

### 5. Narrative vs numbers
Chair/CEO metrics appear in audited section.
Strategic Report KPIs tie to audited (or reconcile as APMs).
Risk factor severity consistent with numbers.
Going-concern narrative consistent with cash-flow forecast summary,
covenant headroom, working-capital, bank facilities note.

### 6. External-facing consistency
Investor deck = filed-accounts metrics (same definitions).
Earnings call guidance = disclosed forward-looking statements.
Press release numbers = audited numbers.
Prior RNS / ad-hoc consistent with year-end position.
Regulatory returns (FCA RMAR, PRA COREP/FINREP, HMRC CT600) reconcile.

### 7. APM + non-GAAP
Every APM reconciled to nearest GAAP.
Adjusting items consistently defined YoY.
Not more prominent than GAAP (ESMA).
Same formula across all documents.
Underlying profit adds to statutory.

## Systematic workflow

1. Build cross-reference matrix (value, source, page, note)
2. Run pre-defined consistency tests (list below)
3. Narrative–numbers extraction + verification
4. Multi-document cross-check vs investor deck / press / call
5. Report

## Test set (automated)

```
✓ Net income: IS = CF top-line = SoCiE movement
✓ Total equity: BS = SoCiE closing
✓ Cash: BS = CF closing balance
✓ Total assets = Equity + Liabilities
✓ Segment totals reconcile to group (IFRS 8)
✓ PP&E note closing = BS line
✓ Goodwill / intangibles notes tie to BS + movement
✓ Provisions movement table ties to BS
✓ Deferred tax note ties to BS + ETR reconciliation
✓ Lease-liability maturity ties to BS short+long split
✓ Revenue disaggregation sums to IS revenue
✓ Financial-instruments category analysis foots to BS
✓ Contingent-liability reference matches director's report
✓ Parent FS (if separate) consistent with consolidated
```

## Output

```
# Internal Consistency Report — <Entity> — <Period>
## Tests summary
- Footing + cross-footing: X/Y passed
- Notes-to-face: X/Y
- PY-to-CY opening-balance tie: PASS/FAIL
- Narrative-to-numbers: X/Y claims verified
- External-doc consistency: PASS/FAIL
## Failures (location, expected, actual, difference)
## Minor inconsistencies (rounding, presentation, terminology)
## Recommended corrections
```

## Automation

- iXBRL / PDF-table parsing → arithmetic validation
- Rule engine with standard test-set
- Named-reference graph: every number tagged once
- PY-diff tool with IAS 8 flag
- LLM extraction of numeric claims + lookup
- APM reconciliation templates

## Anti-patterns

- "Footnote is illustrative" — no, they must agree
- Rounding >£1 without documented convention
- Silent reclassification without restatement
- APM reconciled once in appendix but used differently elsewhere
- "Pro forma" in strategic report not reconciling to audited
