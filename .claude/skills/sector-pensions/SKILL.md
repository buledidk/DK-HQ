---
name: sector-pensions
description: Use for sector-polished audit, advisory, and automation work on pension schemes — occupational trust-based DB, DC, master trusts, hybrid schemes, LGPS (Local Government Pension Scheme), public-service schemes (PCSPS, TPS, NHS, armed forces), insured occupational schemes. Covers Pensions SORP (FRS 102 + revised 2018), scheme-level accounts (Trustee's Report, Net Assets, FFoA / Revenue Account, Fund Account), employer covenant, Integrated Risk Management (IRM), TPR Funding Code, statutory funding objective, DB Funding Code 2024, DC governance (ChairsStatement, Value-for-Members assessment), Pensions Schemes Act 2021, GMP equalisation, dashboards, trustee effectiveness. Auto-trigger on phrases like "pension scheme audit", "occupational pension", "Pensions SORP", "master trust", "LGPS", "local government pension", "DC scheme", "chair's statement", "VFM assessment DC", "IRM", "integrated risk management", "employer covenant", "statutory funding objective", "TPR Funding Code", "DB Funding Code", "GMP equalisation", "pensions dashboard", "Pensions Regulator", "TPR".
---

# sector-pensions

Sector expertise for pension-scheme trustees + scheme managers + sponsoring employers.

## Entity types

| Scheme | Type | Regulator | Accounting |
|---|---|---|---|
| Occupational trust DB | Private, trust-based | TPR | Pensions SORP (FRS 102) |
| Occupational trust DC | Private, trust-based | TPR | Pensions SORP + Chair's Statement |
| Master Trust (MT) | Multi-employer DC | TPR (authorised) | Pensions SORP + MT-specific |
| Hybrid | Mixed DB + DC | TPR | Pensions SORP |
| LGPS | Public, funded | MHCLG + Scheme Advisory Board + TPR | LGPS Regs + Pensions SORP |
| PCSPS / TPS / NHS / Armed Forces | Public, unfunded | HM Treasury + TPR | Resource Accounts + Res Accounting Manual |
| Insured contract-based | Personal / GPP | FCA | N/A — life-insurer regs |

Note: for employer-side DB pension accounting (IAS 19 / FRS 102 s28), chain to `employee-benefits-ias19`.

## Pensions SORP (FRS 102)

- Revised 2018 + 2024 update.
- Fund Account (changes in net assets); Statement of Net Assets Available for Benefits.
- Investments at fair value through Fund Account.
- No P&L (scheme is not a profit entity) — all movements in Fund Account.
- Annuities purchased in name of trustees — include as asset + matching liability.
- Longevity swaps / hedges — separately disclosed.
- Related parties — sponsoring employer, trustees, fund managers, custodian, actuary.

## DB scheme — funding + regulation

### TPR Funding Code (2024 revised — DB Funding Code)

- Statutory Funding Objective (SFO) — have sufficient + appropriate assets to cover technical provisions.
- **Low-dependency funding basis** (LDFB) at relevant date (typically when scheme significantly mature) + low-dependency investment allocation.
- Journey plan — trajectory from current basis to LDFB.
- Schedule of contributions + recovery plan.
- Statement of Investment Principles (SIP).
- Statement of Funding Principles.
- Actuarial valuation — triennial (minimum) + annual funding update.
- Covenant assessment — strength rating (strong / tending to strong / tending to weak / weak) + time horizon.

### Integrated Risk Management (IRM)

Trustees manage three risks in combination:
- Covenant (employer ability + willingness).
- Investment (asset allocation + matching).
- Funding (liability measurement + prudence).

Sensitivity to each + combined scenarios — journey plan response.

## DC scheme — governance

### Chair's Statement

- TPR statutory requirement.
- Default investment strategy + rationale + review evidence.
- Core transaction processing (contributions, transfers, investment switches, payments out).
- Charges + transaction costs.
- Value for Members assessment (VFM).
- Trustee knowledge + understanding (TKU).

### Value for Members (VFM) — smaller DC schemes

Compare to three large schemes on:
- Costs + charges.
- Net investment returns (5-yr periods, 1-yr, since inception).
- Quality of services (governance + administration + communication + investment).

If poor VFM → wind up + transfer (TPR expects).

### Master Trust authorisation

Five criteria:
- Fit + proper persons.
- Financially sustainable.
- Systems + processes adequate.
- Scheme funder adequate.
- Continuity strategy in place.

Ongoing supervision + triennial SE review.

## Scheme audit focus

- Contributions completeness — employer + employee + AVC; reconciliation to payroll + banking.
- Investment asset valuation — FV hierarchy; L3 (private markets, property, infra); fund-of-funds look-through.
- Investment income + changes in market value correctly split.
- Benefit payments — verified against benefit statements + authorised signatories.
- Transfers — CETV correctness + member declaration + pension liberation checks.
- Trustee bank reconciliation + AVC accounts.
- Related-party transactions — sponsoring employer contributions; custody; investment consultants; actuaries.
- GMP equalisation — past-service reconciliations; impact on FS (via actuary).
- Common investment fund allocations consistent with SIP.
- Custodian reconciliation + SAS 70 / ISAE 3402 reliance.

## LGPS specifics

- Statutory valuation every 3 years — by scheme actuary, regulations prescribe assumptions.
- Triennial valuation → employer contribution rates for next 3 years.
- Governance: pension committee + local pension board.
- Cost-cap mechanism — ceiling + floor on member contributions + future-service cost.
- Annual benefit statements + triennial valuation disclosures.
- Investment pooling — 8 LGPS pools + individual scheme investments.
- Asset classes: LGPS eligible investments per Regs 2016 + 2023.

## Public-service unfunded schemes

- PCSPS, Teachers' Pension Scheme (TPS), NHS Pension, Armed Forces, Firefighters, Police.
- No scheme assets (pay-as-you-go); liabilities disclosed in sponsoring-body Resource Accounts (FReM adapted IAS 19 / GIAM).
- Notional investment returns for GAD valuations.
- Employer contribution set by Treasury / SCAPE discount rate.

## Pensions Schemes Act 2021 + regulatory updates

- Criminal sanctions — "avoidance" of employer debt.
- Enhanced TPR powers — Contribution Notice + Financial Support Direction + information gathering + 2% civil penalty.
- Notifiable events — broader set.
- Corporate transactions — DB implications + covenant test.

## Pensions Dashboards

- Dashboards staging deadlines (2024–2026 phased).
- Scheme data readiness + matching + common data standards.
- Governance: connectivity provider, dashboard-data service, scheme's responsibility for accuracy.

## GMP equalisation

- Lloyds Banking Group litigation (2018 + 2020 updates).
- Methods: C2 (year-by-year dual records), D2 (conversion), one-off lump sums.
- Past-service accrual + payment — actuarial + legal + tax implications.
- Auditor: consider IAS 19 past-service impact for sponsoring employer + scheme FS impact.

## Automation opportunities

1. Scheme accounts automation (SORP template + iXBRL tagging + Net Assets / Fund Account generator).
2. Contribution completeness engine — payroll → scheme bank reconciliation.
3. Benefit-payment authorisation workflow + anti-fraud (BACS / Faster Payments control).
4. Investment valuation pipeline — daily / weekly / monthly FV by asset class + fair-value-hierarchy tagging.
5. Transfer-out CETV verification + pension-liberation red-flag library.
6. Chair's Statement auto-compile from scheme MI + benchmarks.
7. VFM comparator report (costs + net returns + services).
8. GMP-equalisation calculation engine + member statement generator.
9. Dashboard data-match automation + exception handling.
10. Covenant monitoring dashboard — employer financials + early-warning signals.

## Anti-patterns

- Trustee annual report boilerplate; no discussion of actual funding position + journey plan.
- Covenant "strong" rating without time horizon + mitigants.
- Chair's Statement drafted by sponsor not trustees — undermines governance.
- VFM assessment done as compliance exercise without comparator benchmarks.
- Related-party disclosure limited to paid transactions — SORP requires broader connectivity (trustee sponsor links).
- Investment FV reliance on fund manager statements without independent check on L3 holdings.
- GMP equalisation deferred with "waiting for industry practice" — clarified by 2020 ruling; must recognise.
- Pensions Dashboards readiness postponed; data quality addressed reactively.

## Output pattern

Blend Pensions SORP + TPR Funding Code / DC governance + scheme-audit procedures + employer covenant + sector-specific (LGPS / MT / public-service) + automation.
