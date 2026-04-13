---
name: journal-entry-testing
description: Use for journal-entry testing under ISA 240 ¶32 — full-population JE analytics to detect management override of controls and fraudulent journal entries. Covers population extraction, completeness verification, risk-based criteria (unusual accounts, round-number, out-of-hours, manual vs system, close-to-period-end, source code), sampling of flagged items, vouching to supporting evidence, and documenting auditor's conclusion. Auto-trigger on phrases like "journal entry testing", "JE testing", "ISA 240 paragraph 32", "management override", "suspicious journals", "round-number journals", "period-end adjustments", "top-side entries".
---

# journal-entry-testing

Mandatory ISA 240 ¶32. Modern approach: 100%-population rules + anomaly detection.

## Why mandatory

ISA 240 ¶32: auditor must test JE appropriateness, review estimates for bias,
evaluate significant transactions outside normal course, to address management
override risk.

## Population

All JEs during period + FS preparation adjustments (consolidation, audit,
top-side).

Completeness: TB extract → opening + closing + movements reconcile; unique
IDs, no gaps/dupes; all accounts present; cutoff inclusive of year-end close.

Source segregation: system-generated; manual; system-init-user-approved;
recurring templates; reversing. System + ITGCs effective → lower risk.
Manual, top-side, adjusting, consolidation → higher risk.

## Risk-based criteria

| Criterion | Rule |
|-----------|------|
| Suspicious accounts | Revenue, reserves, accruals, provisions at period-end |
| Round-number | amount mod £1k or £10k = 0, >threshold |
| Unusual user | Not in posting-role pattern; terminated user |
| Out-of-hours | Outside 08–19, weekend, holiday |
| Unusual combos | Revenue DR / Cash CR; Expense DR / Revenue CR |
| Self-balancing | Large 2-leg to unrelated accounts |
| Manual at period-end | Last 5 business days |
| Post-close | In-period dated but posted after close |
| Narrative red-flag | "adjust", "reclass", "correction", "per CFO", empty |
| Reversing failures | Accrual never reversed next period |
| High value | >PM × 25% |
| Matched pairs | Same DR/CR reversed later |
| Rounding pattern | Same user, repeated similar rounds |
| Unusual frequency | 3× baseline in period |

## Testing per selected JE

1. Obtain supporting docs (approval, spreadsheet, invoice, bank, contract)
2. Confirm business rationale vs understanding
3. Trace amounts to source
4. Verify approval vs authority matrix
5. Assess account codings
6. Evaluate substance over form
7. Consistency with auditor expectation given risk

## Post-analysis

- Quantify factual misstatements; project if applicable
- Pattern detection → systematic issue?
- Root-cause any control deficiencies
- Reassess fraud risk
- Communicate to TCWG

## Documentation

- Population definition + extraction evidence
- Completeness verification
- Criteria applied + rationale
- Selection methodology + listing
- Results per criterion
- Flagged items tested
- Conclusion

## Automation example

```sql
-- Manual period-end JEs above materiality
SELECT je_id, posted_date, posted_by, amount, narrative
FROM gl_je
WHERE source = 'MANUAL'
  AND posted_date >= :period_end_date - INTERVAL '5 days'
  AND ABS(amount) > :materiality_threshold;
```

Toolchain: SAP/Oracle GL extracts → Python/DuckDB/ACL/IDEA → LLM narrative
classification → evidence portal auto-matching support to JE.

## Anti-patterns

- Sampling when full-population available
- Amount + date only criteria (catches nothing)
- Auto-dismissing large system JEs without verifying ITGCs
- No completeness check on population (could miss the fraud)
- Not testing year-end top-side consolidation JEs (highest risk)
- Every flag treated as finding (noise vs signal)
- "See attached" counting as narrative
