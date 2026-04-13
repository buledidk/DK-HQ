---
name: disclosure-review
description: Use for financial-statement disclosure completeness and quality review under IFRS, US GAAP, or UK GAAP (FRS 100-105). Covers notes-to-accounts completeness, critical judgments + estimates (IAS 1 para 125), accounting policies, related parties (IAS 24 / FRS 102 s33), going concern (IAS 1 para 25), segment (IFRS 8), financial-instruments risk (IFRS 7), fair-value (IFRS 13), events after the reporting period (IAS 10), tax (IAS 12), APMs (ESMA / FRC), climate + TCFD + IFRS S1/S2, viability statement. Auto-trigger on phrases like "disclosure review", "notes to the accounts", "policy disclosure", "critical estimates disclosure", "segmental", "related parties", "TCFD", "APM review", "viability".
---

# disclosure-review

Deep, standard-indexed review of the notes to the financial statements. The
disclosure layer is where most audit-quality issues actually live — this
skill treats it with the rigour it deserves.

## Five layers (in order)

1. Numbers — tie-out + reconcile
2. Policies — compliant, consistent, appropriate
3. Estimates + judgments — reasonable range with sensitivities
4. Quality — earnings + cash-flow + balance-sheet integrity
5. Narrative + disclosures — completeness + fair balance

## Disclosure inventory — key standards

- IAS 1 / FRS 102 §3: policies, going concern, critical judgments (¶122), estimation uncertainty (¶125)
- IAS 7: cash vs equivalents, reconciliation of financing liabilities
- IAS 8: policy changes, estimates, errors
- IAS 12: current + deferred tax, ETR reconciliation, Pillar 2
- IAS 16 / 38 / 40: movement tables, useful lives, investment-property FV
- IAS 19: DB assumptions (discount, inflation, mortality), sensitivity
- IAS 21: functional currency, FX translation
- IAS 24 / FRS 102 §33: related parties, KMP compensation, transactions
- IAS 36 ¶134: CGU goodwill allocation, recoverable-amount basis, sensitivities
- IAS 37: provisions movement, contingent liabilities
- IFRS 7: credit / liquidity / market risk, hedge accounting
- IFRS 8: segments, CODM, reconciling items
- IFRS 9: ECL staging, SICR, scenarios, overlays
- IFRS 13: FV hierarchy, L3 reconciliation + sensitivities
- IFRS 15 / FRS 102 §23: disaggregation, contract balances, remaining POs
- IFRS 16 / FRS 102 §20: RoU movement, maturity analysis, variable/extension
- IAS 10: adjusting vs non-adjusting events
- UK: directors' remuneration (Sch 5 / Sch 8), auditor remuneration,
  political donations, employee costs, related undertakings

## Non-financial disclosures

- Strategic Report (CA 2006 s414A-C), s.414CA Non-Financial + Sustainability
- Section 172(1) statement
- TCFD (LR 9.8.6R) → IFRS S1/S2 transition
- SECR (Streamlined Energy + Carbon)
- Gender pay gap (>250 employees), Modern Slavery (>£36m)

## APMs (ESMA 2015/1415 / FRC)

- Definition + reconciliation to GAAP + rationale
- Consistent over time
- Not more prominent than GAAP
- Adjusting items consistently defined

## Review workflow

1. Build inventory from applicable framework + regime
2. Tie notes to primary statements (movement tables, totals, currency)
3. Policy consistency (disclosed = applied)
4. Narrative-numbers fit (Strategic Report KPIs tie to audited)
5. Completeness trap list (going concern, sensitivities, off-balance-sheet,
   estimate-change narratives, cash-equivalent restrictions, L3 sensitivities,
   Pillar 2 exposure)
6. Fair-balance check (prominence, selective aggregation, APM skew)

## Output

```
# Disclosure Review — <Entity> — <Period>
## Overall assessment: Compliant / Compliant with observations / Non-compliant
## By standard (table with Status + Observations)
## Narrative consistency
## Material omissions
## Recommended wording changes
```

## Anti-patterns

- Checklist ticked without reading the policy
- "Commercially sensitive" as blanket omission reason
- Copy-paste risk factors / TCFD paragraphs YoY
- APM reconciliation buried in an appendix
