---
name: ifrs17-insurance-contracts
description: Use for IFRS 17 Insurance Contracts implementation, preparation, or audit — contract boundary, level of aggregation (portfolios + annual cohorts + onerous / profitable-no-significant-risk / remainder groups), General Measurement Model (GMM / BBA), Premium Allocation Approach (PAA), Variable Fee Approach (VFA), Contractual Service Margin (CSM) mechanics, Liability for Remaining Coverage (LRC), Liability for Incurred Claims (LIC), risk adjustment, discount rates (top-down / bottom-up), reinsurance held asymmetries, transition approaches (full retrospective / modified retrospective / fair value), disclosures, presentation. Auto-trigger on phrases like "IFRS 17", "insurance contracts", "GMM", "BBA", "PAA", "premium allocation", "VFA", "variable fee", "CSM", "contractual service margin", "LRC", "LIC", "liability for remaining coverage", "liability for incurred claims", "risk adjustment", "RA", "insurance service result", "reinsurance contracts held", "annual cohorts".
---

# ifrs17-insurance-contracts

Deep-dive for insurance accounting under IFRS 17 (effective 1 Jan 2023). Chains from `sector-insurance`, `disclosure-review`, `accounting-judgments-estimates`, `audit-quality-eqr`.

## Contract scope + definition

- Insurance contract: one party (issuer) accepts significant insurance risk from another party (policyholder) by agreeing to compensate policyholder if uncertain future event adversely affects them.
- Significance of insurance risk: scenario (even low probability) where issuer pays significant additional amounts.
- Out of scope: product warranties issued by manufacturer/dealer/retailer; employer's assets + liabilities under IAS 19; residual-value guarantees under IFRS 16; some fixed-fee service contracts (option to apply IFRS 15).
- Separation: investment components distinct from insurance + embedded derivatives + distinct service POs unbundled.

## Level of aggregation (¶14–24)

1. **Portfolio** — contracts subject to similar risks + managed together.
2. **Annual cohort** — contracts issued no more than 1 year apart.
3. **Group within cohort**:
   - Onerous at inception
   - No significant possibility of becoming onerous (profitable)
   - Remainder

Aggregation is irreversible once determined. Annual cohort carve-out (EU only for certain intergenerationally mutualised VFA contracts).

## Measurement models

### General Measurement Model (GMM / Building Block Approach)

Liability = LRC + LIC.

**LRC components**:
1. **Fulfilment cash flows (FCF)** = PV of future cash flows (probability-weighted) + Risk Adjustment for non-financial risk − expected future cash inflows.
2. **Contractual Service Margin (CSM)** — unearned profit; released as service provided.

CSM mechanics:
- Initial CSM = negative of FCF (if inflows > outflows + RA).
- If FCF is net outflow at inception → onerous group, immediate loss, no CSM.
- Subsequent: unwind interest on CSM at locked-in discount rate (GMM); adjust for new contracts in year; adjust for changes in estimates relating to future service (absorbs gains/losses, CSM floor of zero — onerous group immediately); release to P&L based on coverage units.

**LIC** = FCF for incurred claims (PV claims + expenses + RA). No CSM on LIC.

### Premium Allocation Approach (PAA) — simplified

Eligible if:
- Coverage period ≤1 year, OR
- Demonstrably produces measurement not materially different from GMM.

LRC = unearned premium (like old UPR) − acquisition cash flows amortised over coverage. No CSM computation. Usually for short-tail P&C (motor, property, marine, accident).
LIC still measured like GMM (PV + RA).

### Variable Fee Approach (VFA)

For contracts with direct-participation features (policyholder shares substantially all returns on pool of underlying items; substantial proportion of fair-value movements shared; substantial share of any variability). Typical: unit-linked, with-profits, variable annuities.

- Entity's share of underlying items fair value movement → adjusts CSM (not P&L) while CSM positive.
- Different from GMM treatment of financial assumption changes.

## Risk adjustment (RA)

Compensation entity requires for bearing uncertainty in amount + timing of cash flows from non-financial risk. Methods:
- Confidence level / VaR — disclose equivalent confidence level.
- Cost-of-capital (Solvency II consistency).
- Tail VaR (CTE).
- Consistent across portfolios + over time.

## Discount rates

Curves characteristic of liability cash flows — adjusted for liquidity.
- **Bottom-up**: risk-free rate + liquidity premium.
- **Top-down**: reference portfolio yield − credit risk − liquidity mismatch.

Locked-in at initial recognition for CSM unwind (GMM); current rate for FCF remeasurement. Disagreement → OCI option to reduce P&L volatility.

## Reinsurance contracts held

Asymmetries vs issued contracts:
- Onerous underlying → loss in P&L immediately.
- Reinsurance held → recovery recognised when underlying loss recognised (¶66A–66B amendment allows simultaneous recognition).
- No "onerous" concept for reinsurance held — negative CSM possible (net cost of purchasing).

## Presentation

- **Insurance service result** = insurance revenue − insurance service expenses (net of reinsurance recoveries + expenses from reinsurance held).
- **Insurance finance income / expense** = unwind of discount + changes in financial assumptions (P&L or OCI option).
- Non-distinct investment components excluded from revenue + claims.

## Transition (¶C1–C33)

Choose per group:
1. **Full retrospective** — apply IFRS 17 as if always applied; demanding data requirement.
2. **Modified retrospective** — where full retro impracticable; specified simplifications.
3. **Fair value** — CSM = difference between fair value + FCF at transition; common for back books with limited data.

Transition OCI + interaction with IFRS 9 classification overlay.

## Disclosures (¶93–132)

- Reconciliations of insurance contract liability components (LRC — excluding loss component; loss component; LIC — estimate of PV of future cash flows; RA; CSM).
- Insurance revenue analysis.
- Amounts recognised in P&L + OCI.
- Confidence level for RA.
- Discount-rate curves + approach.
- Coverage units + CSM release pattern.
- Onerous group analysis + loss-component movement.
- Yield curves used.
- Transition approach per group + quantitative effect.

## Common judgments

- Contract boundary — particularly renewal; "substantially new" test.
- Onerous assessment at inception — facts + circumstances; set of contracts.
- VFA eligibility criteria — "substantially all" is high bar; clearly ≥ ~80%.
- PAA eligibility — materiality test vs GMM; especially for contracts with long-tail embedded.
- Coverage-unit pattern — passage of time vs quantity-of-coverage units; assess each period.
- RA method + confidence level — should reflect risk appetite + diversification at portfolio level.
- Locked-in vs current discount rate split (OCI option).

## Audit focus

- Data completeness + granularity for aggregation (contract-level systems).
- Actuarial model controls + governance.
- Onerous group identification controls at inception.
- Reasonableness of assumption-change attributions (CSM-absorbing vs immediate P&L).
- CSM balance consistency + release correctness.
- Transition approach selection + documentation sustained for ongoing use.
- Reinsurance held symmetry with issued contracts.

## Anti-patterns

- Using PAA because it's easier, without the materiality test.
- Aggregation at "portfolio" level only, skipping cohort + group (loses insight + not permitted).
- Annual cohort carve-out applied outside EU intergenerationally mutualised scope.
- CSM released purely by passage of time for volume-based products (should be coverage units).
- Discount rate set at group-wide weighted-average cost of capital (not IFRS 17 compliant).
- Transition fair-value CSM set without documented observable market inputs or credible proxies.
- Reinsurance held gain recognised before underlying onerous group loss.
