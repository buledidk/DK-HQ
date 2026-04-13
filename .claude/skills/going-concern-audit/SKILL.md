---
name: going-concern-audit
description: Use for going-concern assessment under ISA 570 (revised) and IAS 1 ¶25 / FRS 102 §3.8 — evaluating management's 12-month forecast, covenant headroom, liquidity, mitigating actions, stress testing, considering "events or conditions" that cast significant doubt, and determining the appropriate auditor's report outcome (unmodified with material-uncertainty section, modified, adverse). Auto-trigger on phrases like "going concern", "ISA 570", "material uncertainty", "significant doubt", "covenant headroom", "liquidity forecast", "stress test", "12-month period".
---

# going-concern-audit

Highest-risk audit area. FRC / PCAOB hit going-concern deficiencies hard.

## Framework

- IAS 1 ¶25–26 / FRS 102 §3.8: directors assess ≥ 12 months from FS approval date
- ISA 570 (Revised 2019): auditor obtains sufficient evidence + concludes on
  appropriateness + material uncertainty + disclose + report

## Phase 1 — Understand management's assessment

- Period covered (from approval date, not year-end)
- Base-case cash-flow forecast + assumptions
- Stress / sensitivity scenarios
- Mitigating actions + feasibility + timing
- Covenant tracking + headroom forecast
- Facility maturity schedule
- Renewals in progress + likelihood

## Phase 2 — Identify events or conditions (ISA 570 non-exhaustive)

**Financial**: net liability / current liability; borrowings nearing maturity
without replacement; withdrawal of support indicators; negative operating CF;
adverse ratios; substantial losses; arrears; inability to pay creditors on
due dates; covenant non-compliance; credit-to-cash supplier terms; inability
to finance essential investment.

**Operating**: intentions to liquidate; loss of key management; loss of major
market/customer/franchise/licence/supplier; labour difficulties; shortage of
supplies; successful competitor emergence.

**Other**: capital/statutory/regulatory non-compliance; legal/regulatory
proceedings (unaffordable claims); law/regulation/government-policy changes;
uninsured catastrophes.

## Phase 3 — Evaluate forecast

### Method + assumptions + data
Granularity (weekly/monthly); drivers; linkage to prior performance;
consistency with impairment + DTA. Assumptions: revenue, margin, working-
capital, capex, financing, tax. Data: actuals through report date, external
forecasts.

### Stress testing
Severe-but-plausible: revenue shock (−10 to −30%); margin compression;
working-capital tightening; covenant tightening; facility withdrawal; FX
shock. Calculate months of liquidity remaining; first covenant breach per
scenario.

### Mitigating actions
Within mgmt control (cost-cut, dividend suspension)? Or requiring third-party
consent (refinance, waiver, equity injection — reduce reliance)? Committed
vs forecast.

## Phase 4 — Conclude (4 outcomes)

| Scenario | Disclosure | Report |
|----------|-----------|--------|
| Appropriate; no MU | Standard | Unmodified |
| Appropriate; MU exists + disclosed | IAS 1 ¶25 | Unmodified + "Material Uncertainty Related to Going Concern" (ISA 570 ¶22) |
| Appropriate but disclosures inadequate | — | Qualified/Adverse (ISA 705) |
| Inappropriate (liquidation) | Alternative basis | Adverse if on going-concern basis |

"Material uncertainty" = conditions cast significant doubt that would be
important to users + disclosure needed for fair presentation.

## Phase 5 — Subsequent events to report date

- Monthly actuals vs forecast
- Covenant tracking
- Facility status
- Material customer/supplier changes
- Legal/regulatory developments
- Board approvals of material actions

## Documentation

- Period assessed
- Events/conditions identified
- Management's assessment evaluation
- Stress testing + results
- Mitigating actions evaluated
- Discussion with TCWG
- Written representations (ISA 580 covers GC)
- Auditor conclusion
- Report wording

## Automation hooks

- Covenant calculator with facility-agreement definitions
- 13-week cash flow with real-time actuals
- Scenario engine (Monte Carlo or deterministic)
- Sensitivity dashboard — first month of breach per scenario
- Mitigating-action tracker (committed/probable/speculative)
- Peer-liquidity benchmarking

## Anti-patterns

- 12-month period measured from year-end (wrong — from approval date)
- Base case accepted; stress barely stressed
- Mitigating actions relied on without feasibility evidence
- MU disclosure buried in "principal risks"
- Silent YoY removal of GC disclosure without evidence
- Covenant forecast vs lender-definition mismatched
