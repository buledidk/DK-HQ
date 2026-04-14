---
name: impairment-ias36
description: Use for impairment testing under IAS 36 (Impairment of Assets) — CGU identification, goodwill allocation, annual impairment test for goodwill + indefinite-life intangibles + intangibles-not-yet-available-for-use, trigger-based test for other non-financial assets, recoverable amount (higher of fair value less costs of disposal and value in use), VIU DCF mechanics, FVLCD hierarchy, discount rates (WACC / pre-tax), terminal value, sensitivity disclosures, reversal (except goodwill), corporate asset allocation, interaction with IFRS 16 ROU assets. Auto-trigger on phrases like "IAS 36", "impairment", "impairment test", "CGU", "cash-generating unit", "goodwill impairment", "value in use", "VIU", "fair value less costs of disposal", "FVLCD", "DCF", "terminal value", "WACC", "pre-tax discount rate", "impairment indicator", "headroom", "sensitivity disclosure", "ASC 350", "ASC 360".
---

# impairment-ias36

Deep-dive for non-financial-asset impairment. Chains from `accounting-judgments-estimates`, `disclosure-review`, `going-concern-audit`.

## When to test

### Annual
- Goodwill (¶10)
- Intangibles with indefinite life
- Intangibles not yet available for use

Any time in annual period; repeat at same time each year.

### Trigger-based (¶12 + ¶14)

External:
- Market value decline
- Adverse technological / market / economic / legal changes
- Interest rates up materially affecting VIU
- Market cap below book NAV

Internal:
- Evidence of obsolescence / physical damage
- Significant changes — restructuring, discontinuing, reassessing useful life
- Worse-than-expected performance
- Dividends from subsidiary / JV / associate exceeding total comprehensive income + carrying amount exceeds net assets of investee in parent FS.

## CGU identification (¶66–73)

- Lowest level at which identifiable cash inflows largely independent of cash inflows from other assets/groups.
- By product, by geography, by business line. NOT by department, function, or responsibility.
- Active-market test: if output has active market, CGU is that production unit even if internal use.
- Consistent CGU identification between periods — change only on significant event.

## Goodwill allocation (¶80–87)

- Allocate to each CGU (or group of CGUs) expected to benefit from synergies.
- Cannot be larger than an operating segment (IFRS 8) before aggregation.
- If reorganise: reallocate using relative value approach.

## Recoverable amount = Higher of

### Fair Value Less Costs of Disposal (FVLCD) — IFRS 13

- Level 1: quoted market price minus costs to dispose.
- Level 2: observable inputs (comparable transactions, trading multiples).
- Level 3: unobservable (discounted cash flows from market-participant perspective, precedent transactions).
- Uses **market participant** assumptions (not entity-specific).

### Value In Use (VIU) — DCF

**Critical rules** (¶30–57):

- Pre-tax cash flows discounted at pre-tax rate.
- Use management's most recent budgets + forecasts, max 5 years unless justified.
- Terminal value: steady-state cash flow × (1 + long-term growth) / (discount rate − growth). Growth must not exceed long-term average for products / industries / countries / economies in which entity operates.
- **Exclude**:
  - Future restructurings not yet committed (IAS 37)
  - Enhancements to existing asset (future capex beyond maintenance)
  - Finance costs
  - Tax cash flows
- **Include**:
  - Maintenance capex
  - Working-capital changes
  - Existing condition cash flows + reasonable extrapolation

**Discount rate**:
- Pre-tax rate reflecting current market + specific risks of asset.
- Starting point: WACC (CAPM), adjusted to pre-tax + remove financing decisions + include specific risks not in cash flows.
- Documentation of grossing-up WACC (post-tax → pre-tax using iterative method, not simple ÷ (1 − tax rate)).
- Separate rate per CGU if risks differ.

## Recognition + allocation of impairment loss (¶104–108)

Order within CGU:
1. Goodwill allocated to CGU — reduce to zero.
2. Other assets in CGU pro rata to carrying amount.
3. Floor per asset: don't reduce below higher of FVLCD (if determinable), VIU (if determinable), zero.
4. Remaining loss applied to other assets.

## Reversal (¶109–125)

- Assess at each reporting date whether indicators that loss has decreased / no longer exists.
- **Goodwill impairment is NEVER reversed** (¶124).
- Other assets: reverse to lesser of recoverable amount or carrying amount had no impairment been recognised (net of depreciation).

## Corporate assets (¶100–103)

- HQ, R&D facility, shared IT — cannot generate independent cash flows.
- Allocate to CGUs on reasonable + consistent basis.
- If cannot be allocated, test at smallest group of CGUs to which can be allocated.

## Interaction with IFRS 16 ROU

- ROU asset part of CGU carrying amount.
- When testing: include lease payments in CGU cash outflows; consistency between liability + ROU asset in the test.
- Sale-and-leaseback gain not "recoverable" via VIU (operating cash flows, not financing).

## Disclosures (¶126–137)

By class of assets + by CGU:
- Impairment loss + reversal recognised, line item in P&L / OCI.
- Events + circumstances leading to impairment.
- Whether recoverable amount is FVLCD or VIU.
- If FVLCD: fair-value hierarchy level, valuation technique, key inputs.
- If VIU: discount rate(s), growth rate(s), extrapolation period, terminal-growth rate, basis for assumptions.
- **Sensitivity** (¶134(f)): for material goodwill + indefinite-life intangibles, headroom + reasonably-possible change in key assumption that would cause impairment.

## Common judgments + challenges

- CGU granularity — too aggregated hides impairment (reallocate back later creates investor surprise).
- Growth rate vs long-term GDP — hockey stick projections that don't inflect.
- Terminal value as >75% of VIU — sense-check vs multiple of EBITDA implied.
- Maintenance capex understated — reinvestment ratio should approximate depreciation for stable CGU.
- Management commitments to restructure embedded in cash flows without IAS 37 constructive obligation evidence.
- Discount rate too low relative to comparable market WACC / cost of equity.
- FVLCD benchmark: trading multiples for listed comps — control premium adjustment appropriate?
- Market cap below NAV: impairment indicator requiring direct VIU / FVLCD challenge.

## Audit focus

- Independent recomputation of key drivers + recalculation of VIU.
- Sensitivity on discount rate, terminal growth, EBITDA growth, working-capital assumption.
- Back-testing: compare prior-period budget to actual — are forecasts reliable?
- Corroboration of market inputs (beta, risk-free rate, ERP, peer multiples).
- Pre-tax vs post-tax arithmetic — common error.
- CGU identification consistency + unchanged from prior year absent reorganisation.
- IAS 36 ¶134(f) sensitivity disclosure completeness.

## Anti-patterns

- "Budget + extrapolation" with no basis — review committee-approved forecast + justify growth curve.
- Impairment model using post-tax cash flows + post-tax rate (not IAS 36 compliant — must be pre-tax).
- Discount rate ÷ (1 − tax rate) gross-up — incorrect; use iterative method matching pre-tax VIU to post-tax VIU.
- Headroom >100% in prior year → no detailed disclosure; followed by impairment next year — should have sensitivity disclosure.
- Goodwill reversal recorded (prohibited).
- CGU = legal entity — often wrong if product cross-sells across entities.
- Restructuring benefits embedded in cash flows while costs excluded.
