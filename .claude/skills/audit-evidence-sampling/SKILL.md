---
name: audit-evidence-sampling
description: Use for audit evidence sufficiency + appropriateness (ISA 500) and audit sampling design + evaluation (ISA 530) — defining populations, sampling units, stratification, statistical (MUS / classical variables) vs non-statistical sampling, sample-size formulas, tolerable + expected misstatement, evaluation of sample results, projection of misstatements, 100%-population alternatives via data analytics. Auto-trigger on phrases like "sampling", "sample size", "MUS", "monetary unit sampling", "attribute sampling", "tolerable misstatement", "projected misstatement", "audit evidence", "sufficient appropriate evidence".
---

# audit-evidence-sampling

Sampling a regulator would accept, and the data-analytics alternatives.

## Evidence framework (ISA 500)

Sufficient (quantity) + appropriate (relevance + reliability).

Reliability hierarchy (strongest → weakest):
1. Independent external source
2. Auditor-derived (recalculation, reperformance)
3. Entity controls effective → internal evidence reliable
4. Documentary > oral
5. Originals > photocopies

Direct vs indirect — direct more persuasive.

## Sample vs 100% vs specific-items

Sample when: homogenous, large, testing-all impractical, some misstatement tolerable.
100% when: small pop of large items, data analytics available, significant risk + cost-effective.
Specific items: key items (above threshold), unusual items, information items.

## Sampling approaches

### Attribute sampling (TOC)
Unit: control occurrence. Attribute: control operated?
Formula: n = f(confidence, TDR, EDR, small population).
AICPA tables: TDR 5% EDR 0% → n≈60; TDR 10% EDR 0% → n≈30.
Evaluation: UDL vs TDR. UDL≤TDR → reliable; UDL>TDR → expand or change strategy.

### Monetary Unit Sampling (substantive TOD)
Unit: individual £/$. Emphasises larger items.
Sample size: n = (BV × RF) / (TM − EM × Expansion). RF 95%=3.0; 90%=2.3.
Selection: PPS (fixed interval).
Evaluation: taint % = (BV − AV)/BV; projected = taint × interval; + precision.
Compare total upper limit to TM.

### Classical variables
Mean-per-unit, ratio, difference. Better for understatement or variable pops.

### Non-statistical
Structured professional judgement. Same inputs, no formal statistical measures.
Still project misstatements.

## Population

Completeness: all items for assertion.
Period: full year; interim → rollforward.
Stratify by risk (high-value, related-party, new items, FX).
Items ≥ PM: tested individually.

## Evaluate results

1. Classify: factual / judgemental / projected
2. Project (MUS formula or non-stat ratio)
3. Aggregate with other misstatements (ISA 450)
4. Evaluate: individual >TM? Cumulative >PM? Systematic pattern?
5. Communicate unadjusted to TCWG

## When sampling isn't enough

- Significant risks → substantive over+above
- JEs (ISA 240 ¶32) — all, risk-filtered
- Related parties — specific items
- Estimates (ISA 540) — specific procedures

## Data-analytics alternatives

| Traditional | Replacement |
|-------------|-------------|
| MUS on revenue | 100% recompute, cut-off matrix, price×qty, channel-stuffing |
| MUS on AR | 100% aging + dunning + subsequent receipt |
| Attribute TOC | 100% system-log control evidence |
| JE sampling | 100% with risk-based filters |
| Inventory sampling | 100% cycle-count reconciliation + COGS margin |

Requires: data completeness verification; effective ITGCs (or independent
verification); auditor understanding of data structure.

## Output

```
# Sampling Memo — <Test> — <Population>
## Objective + assertion
## Population definition + completeness check
## Stratification rationale
## Sample-size determination (method, inputs, result)
## Selection technique
## Testing procedures
## Results
## Projection
## Evaluation vs tolerable
## Conclusion + linkage to response
```

## Anti-patterns

- Haphazard sampling
- Client-chosen samples
- TM > PM
- Ignoring <CTT items without projection
- Reusing PY samples without refresh
- Not projecting judgemental misstatements
