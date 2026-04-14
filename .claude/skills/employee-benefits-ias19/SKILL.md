---
name: employee-benefits-ias19
description: Use for employee benefits accounting under IAS 19 (revised 2011) — short-term benefits, defined contribution (DC), defined benefit (DB) plans, actuarial valuation (Projected Unit Credit method), net interest, remeasurements via OCI (actuarial gains/losses, return on plan assets excluding net interest, asset ceiling effects), service cost (current + past + curtailment + settlement), termination benefits (IAS 19 + IFRIC 14), asset ceiling + minimum funding requirement, multi-employer + group plans. FRS 102 s28 + ASC 715 comparison. Auto-trigger on phrases like "IAS 19", "employee benefits", "defined benefit", "DB pension", "defined contribution", "DC pension", "Projected Unit Credit", "PUC", "actuarial assumption", "discount rate pension", "remeasurement", "OCI pension", "asset ceiling", "IFRIC 14", "minimum funding requirement", "past service cost", "curtailment", "settlement", "multi-employer", "FRS 102 section 28", "ASC 715".
---

# employee-benefits-ias19

Deep-dive for pension + other post-employment benefits. Chains from `accounting-judgments-estimates`, `disclosure-review`, `sector-pensions` (for trust-side).

## Benefit categories (¶5)

1. **Short-term** — wages, paid absences (holiday), bonuses, non-monetary benefits (≤12 months from period end).
2. **Post-employment** — DC + DB plans.
3. **Other long-term** — long-service awards, long-term disability, profit share + bonuses with vesting >12 months.
4. **Termination benefits** — in exchange for termination of employment.

## Short-term benefits

- Expected cost recognised when service rendered.
- Short-term compensated absences:
  - Accumulating (carry forward): liability at reporting date.
  - Non-accumulating: expense when absence occurs.
- Bonuses: recognise liability if entity has present obligation (legal or constructive) + reliable estimate.

## Defined Contribution (DC)

- Entity pays fixed contribution; no further obligation.
- Expense recognised when service rendered.
- Contributions to state plans (UK National Insurance, QPPS, etc.) treated as DC.
- Multi-employer DB plan treated as DC if insufficient info to apply DB — disclose reason.

## Defined Benefit (DB)

Net liability / (asset) = PV of DBO − FV of plan assets ± asset ceiling adjustment.

### DBO measurement — Projected Unit Credit (PUC)

Actuarial method:
- Each period of service → unit of benefit entitlement.
- Measure each unit separately to build up final obligation.
- Actuarial assumptions:
  - **Financial**: discount rate (high-quality corporate bonds, or government in deep-bond-market absence; currency + term matching), future salary increases, benefit increases (statutory indexation), future medical costs (post-employment medical).
  - **Demographic**: mortality (updated tables — CMI / S2/S3), employee turnover, early retirement, disability.
- Discount rate — critical — rate reflecting time value of money; typically AA corporate bond yields matched to liability cash flows (duration + currency).

### Plan assets (¶8 + ¶113–114)

Assets held by entity (fund) legally separate from reporting entity + available only to pay employee benefits. Measured at fair value.

Qualifying insurance policies: if proceeds can only be used to pay benefits + not available to creditors + not used for other purposes, treat as plan assets.

### Service cost (P&L)

- **Current service cost** — increase in DBO from services rendered in period (PUC allocation).
- **Past service cost** — change in DBO for services in prior periods resulting from plan amendment or curtailment. Recognise at earlier of amendment/curtailment date or when related restructuring/termination benefits recognised.
- **Gain or loss on settlement** — difference between DBO settled + settlement price (including plan assets transferred + any direct payments by entity).

### Net interest (P&L)

Net interest on net DB liability (asset) = net DB liability (asset) at start of period × discount rate. Reflects:
- Interest cost on DBO
- Interest income on plan assets
- Interest on asset ceiling effect

### Remeasurements (OCI — never reclassified to P&L)

- Actuarial gains/losses on DBO (changes in assumptions + experience adjustments).
- Return on plan assets excluding amounts in net interest.
- Changes in asset ceiling effect excluding amounts in net interest.

### Asset ceiling (¶64–65 + IFRIC 14)

Net asset limited to **asset ceiling** = PV of economic benefits available in form of refunds from plan or reductions in future contributions.

IFRIC 14 minimum funding requirement (MFR):
- If MFR requires contributions for past service → additional liability recognised if future economic benefits (refund + reduction) are not available to offset.
- UK triennial valuation + recovery plan — commonly triggers IFRIC 14 liability for schemes in deficit.

## Curtailments + settlements (¶99–108)

- **Curtailment** — significant reduction in employees covered by plan or amendment reducing material element of future service benefits. P&L at date.
- **Settlement** — transaction eliminating all further legal / constructive obligation for part / all of benefits. P&L at date.
- Distinguish from plan amendment → past service cost.

## Termination benefits (¶159–171)

- Arise from termination (not exchange for service).
- Recognise at earlier of:
  - Entity can no longer withdraw offer (voluntary).
  - Entity recognises restructuring costs under IAS 37 (involuntary).
- Measurement for short-term termination benefits: same as short-term benefits. Long-term: same as other long-term benefits.

## Multi-employer + group plans (¶32–49)

- DB treated as DC if insufficient info (e.g. industry-wide plans) — disclose arrangement + reason.
- Group plans (parent + subsidiary sharing DB risks): plan sponsor recognises net DB cost; subsidiary recognises cost per agreed charge-back.

## Disclosures (¶135–158)

Comprehensive:
- Characteristics of plans + regulatory framework + governance.
- Risks — investment, longevity, inflation, discount-rate, currency.
- Explanation of remeasurement amounts in OCI.
- Reconciliation of DBO, plan assets, net DB liability.
- Fair-value hierarchy of plan assets + major categories (equities, bonds, property, derivatives, insurance contracts).
- Actuarial assumptions.
- Sensitivity analysis — reasonably-possible change in each significant assumption.
- Asset-liability matching strategies.
- Future cash flows — expected contributions next year + weighted-average duration.
- Multi-employer / group plan disclosures where treated as DC.

## FRS 102 s28 comparison

- DB measurement largely aligned with IAS 19 (PUC, discount rate, assumptions).
- Actuarial gains/losses in OCI (same as IAS 19).
- No specific asset ceiling / IFRIC 14 but similar logic via "recoverable amount of surplus" (s28.22).
- Disclosure less extensive than IAS 19 but covers key items.

## ASC 715 (US GAAP) key differences

- Service + interest components in operating expense; other NPPC components outside operating.
- Corridor approach (alternative): allowable amortisation of unrecognised gains/losses outside ±10% corridor.
- Asset ceiling not applied — instead limitation via ASU 2018-14 disclosures.
- Interim remeasurement at year-end only (unless curtailment/settlement).

## Audit focus

- Actuary independence + competence (ISA 620); scope + assumption challenge + range.
- Completeness of membership data — starters / leavers / deaths / transfers.
- Discount rate: basis, curve, duration-match, corroboration vs market.
- Mortality assumption refresh + basis (CMI year, projection model, scheme-specific mortality study).
- Salary + inflation assumption consistency with entity budget.
- Asset valuation — FV hierarchy; L3 assets (unlisted funds) subject to independent challenge.
- Asset ceiling + IFRIC 14 — MFR recovery plan reviewed + implications assessed.
- Sensitivity disclosure — reasonableness of +/− move.

## Anti-patterns

- Discount rate lifted from prior year without re-calibrating to curve.
- Mortality assumption not updated for CMI 2022 / 2023 — pandemic distortions need specific modelling, not raw adoption.
- Asset ceiling ignored despite surplus + contribution holiday not negotiable.
- IFRIC 14 MFR recovery plan ignored — DB pensions in UK often require IFRIC 14 additional liability.
- Treating multi-employer DB as DC without disclosure of reason + contributions next period.
- Curtailment gain recognised from redundancy without IAS 37 restructuring recognition timing alignment.
- Sensitivity disclosure using unrealistic +/− moves to minimise apparent risk.
