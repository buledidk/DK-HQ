---
name: accounting-judgments-estimates
description: Use for evaluating accounting technical judgments and estimates — ISA 540 (revised) estimation methodology, critical judgments (IAS 1 para 122), estimation uncertainty (IAS 1 para 125), management bias indicators, point-estimate vs auditor's range, fair-value estimation (IFRS 13), impairment testing (IAS 36), ECL under IFRS 9, provisions (IAS 37), deferred tax recoverability, pensions (IAS 19 assumptions), goodwill, revenue variable consideration (IFRS 15), going-concern forecast evaluation. Auto-trigger on phrases like "accounting estimate", "ISA 540", "critical judgment", "management bias", "auditor's range", "point estimate", "sensitivity", "estimation uncertainty", "impairment model", "ECL model", "DCF", "terminal value", "going-concern forecast".
---

# accounting-judgments-estimates

Aligned to ISA 540 (revised) + the underlying accounting frameworks.

## ISA 540 revised framework

### 1. Understand + evaluate
- Method (the formula/model)
- Assumptions (inputs)
- Data (facts feeding the model)
- How management selects method + assumptions, understands + addresses uncertainty

### 2. Identify + assess RoMM at assertion level
Inherent risk factors: complexity, subjectivity, change, uncertainty, management-bias susceptibility.

### 3. Respond — one or more
a. Evidence from events up to report date (actual outcomes)
b. Test how management made the estimate
c. Develop auditor's own point estimate or range

### 4. Evaluate estimation uncertainty
If estimate within range of reasonable outcomes, evaluate mgmt's point in range. If not → further procedures.

### 5. Indicators of management bias
- Assumptions at high/low end of reasonable range
- Changes in method/assumption that flatter results
- Estimates concentrated around covenant/bonus/goal thresholds
- Hindsight review: PY estimates vs actual → directional bias?

### 6. Written representations
Mgmt confirms assumptions reasonable + reflect intention/ability.

### 7. Disclose (IAS 1 ¶122 + ¶125)
¶122 judgments (description), ¶125 estimation uncertainty (amount + assumptions + sensitivity).

## Critical judgments vs estimates

| Dimension | Judgment (¶122) | Estimate (¶125) |
|-----------|-----------------|-----------------|
| Type | Binary/qualitative choice | Continuous/quantitative |
| Example | Operating lease vs service; consolidate or not | Useful life; ECL; FV |
| Disclosure | Description | Amount + assumptions + sensitivity |

## Major estimate playbooks

### A. Impairment (IAS 36)
Method: max(FVLCD, VIU); VIU = DCF.
Assumptions: growth, margin, capex, pre-tax WACC, terminal growth.
Pitfalls: terminal g > long-run economy; discount-rate-currency mismatch;
unrealistic restructuring benefits; no sensitivity with <10% headroom.
Technique: parallel DCF; sensitivity grid; benchmark vs peers; market cap.

### B. ECL (IFRS 9)
PD × LGD × EAD (discounted). 12M vs lifetime.
Assumptions: staging criteria (SICR), macro scenarios + weights, PD curves,
LGD recovery, post-model adjustments.
Pitfalls: SICR lax; scenario weighting to upside; ungoverned overlays;
overlays never released.
Technique: back-test PD/LGD; compare weights to economic consensus;
recompute sample ECL.

### C. Fair value (IFRS 13)
L1/L2/L3 hierarchy. L3 judgment: volatility, credit spread, liquidity
discount, DLOM.
Pitfalls: L3 masquerading as L2; calibration to cost without refresh;
cherry-picked comparables.
Technique: back-test with later observables; independent valuation expert;
L3 sensitivity to unobservable inputs.

### D. Provisions (IAS 37)
Present obligation + probable outflow + reliable estimate. Discount if material.
Areas: restructuring, warranty, onerous contracts, legal/regulatory,
decommissioning, environmental.
Pitfalls: constructive obligation stretched; discount inconsistent with risk;
"general" provisions; legal release on rumour.
Technique: legal confirmations; board minutes; subsequent events.

### E. Deferred tax recoverability (IAS 12)
Sufficient taxable profit probable.
Pitfalls: horizon too long vs historical profitability; forecast exceeds budget;
interaction with impairment / going-concern inconsistent.
Technique: track record of hitting forecasts; consistency check.

### F. Pensions (IAS 19)
Assumptions: discount rate (HQCB yield), inflation, mortality, salary growth.
Pitfalls: outdated mortality tables; narrow bond universe; stale RPI-CPI wedge.
Technique: actuarial specialist; peer-assumption benchmarking; sensitivity.

### G. Revenue — variable consideration (IFRS 15)
Constraint: include only if highly probable no significant reversal.
Pitfalls: under-accrued rebates; hindsight-biased returns; stretch-target
discount releases.
Technique: hindsight PY-estimate look-back; cut-off; customer confirmations.

### H. Going concern (IAS 1 ¶25)
Period ≥ 12 months from approval date.
Pitfalls: weak sensitivities; mitigating actions depending on third parties;
covenant calc vs lender definition mismatch.
Technique: stress-test (volume, margin, working-cap shocks); covenant
reconciliation to facility agreement; subsequent events through report date.

## Hindsight look-back (most powerful technique)

For each material estimate in PY FS: actual vs original; directional bias?
>2 consecutive years directional → evidence of management bias → expand
procedures + consider disclosure implications.

## Output

```
# Accounting Judgments + Estimates Memo — <Entity> — <Period>
## Critical judgments (¶122)
## Significant estimates
### <Estimate>
- Method
- Key assumptions (range tested)
- Management point; auditor's range / point
- Location within range → conclusion
- Management-bias indicators
- Disclosure evaluation
## Hindsight review
## Aggregate effect on FS
## Conclusion
```

## Automation

- Independent DCF + Monte Carlo
- ECL back-test PD/LGD
- Hindsight auto-match PY vs actual
- Peer benchmarking (discount rates, growth, margins) from filings
- Sensitivity grid engine
- Management-bias LLM scan of board minutes
- Disclosure generator from model output

## Anti-patterns

- Accepting mgmt point without independent range
- Sensitivity +/-1% when reasonable is +/-3%
- L3 FV treated as "fact"
- Going-concern reliant on unexecuted mitigations
- Stale pension assumptions
- No hindsight look-back because "same team"
