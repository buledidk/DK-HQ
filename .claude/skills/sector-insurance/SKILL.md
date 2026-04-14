---
name: sector-insurance
description: Use for sector-polished audit, advisory, and automation work in insurance — life insurers, general / non-life (P&C), Lloyd's syndicates + managing agents, London market, reinsurers, health + protection, bancassurance, insurance brokers + MGAs. Covers IFRS 17 accounting, Solvency II (pillars 1–3, SCR, MCR, ORSA, own funds tiering), PRA + FCA dual regulation, SM&CR insurance, TCF, policyholder protection, asset-liability matching, reinsurance (proportional + non-proportional + alternative risk transfer), technical provisions audit, actuarial function, and operational resilience. Auto-trigger on phrases like "insurer", "insurance audit", "life insurer", "general insurer", "P&C", "Lloyd's", "London market", "Solvency II", "SCR", "MCR", "ORSA", "technical provisions", "IBNR", "reinsurance audit", "treaty reinsurance", "facultative", "MGA", "broker regulation", "IDD", "consumer duty insurance", "PRA insurance rulebook".
---

# sector-insurance

Sector expertise for insurance engagements — issuer side + intermediary side.

## Entity types

| Entity | Regulator | Primary FS | Key metric |
|---|---|---|---|
| UK Life insurer | PRA + FCA | IFRS 17 + Solvency II QRTs | NBV, VNB, IFRS 17 CSM |
| UK General insurer | PRA + FCA | IFRS 17 + SII | Combined ratio, net-loss ratio |
| Lloyd's syndicate | Lloyd's Council + PRA | Lloyd's GAAP + IFRS 17 (agent) | Syndicate result, capacity utilisation |
| Managing agent | Lloyd's + PRA + FCA | IFRS | Profit commission, syndicate fees |
| Reinsurer | PRA / Bermuda BMA / BaFin | IFRS 17 + SII equivalent | Technical result, retrocession use |
| Bancassurance | PRA / FCA + home NCA | IFRS 17 bundle | Product mix, persistency |
| Broker | FCA (ICOBS, IDD) | FRS 102 or IFRS | Client-money buffer, commission |
| MGA | FCA | FRS 102 | Binder count, gross premium bound |

## Accounting — IFRS 17 lens

IFRS 17 replaced IFRS 4 from 1 Jan 2023. Chain to `ifrs17-insurance-contracts` for deep-dive. Sector-specific application:

- **Life**: GMM for long-tail savings + protection; VFA for unit-linked / with-profits; annual cohorts sensitive for back-book.
- **General / P&C**: PAA eligible for most short-tail lines (motor, property, marine, accident); GMM for long-tail casualty (ELI, asbestos, environmental).
- **Lloyd's**: syndicate-level IFRS 17 + annual venture 3-year accounting for RITC (reinsurance-to-close).
- **Health / protection**: PAA for short coverage periods; GMM or VFA for whole-of-life + guaranteed-renewable.

## Solvency II (Pillar 1 — capital)

### Own Funds

- Tier 1 (unrestricted + restricted) — highest quality; ordinary share capital, retained earnings, subordinated mutual member accounts.
- Tier 2 — subordinated liabilities meeting SII criteria.
- Tier 3 — net deferred tax assets.

### Technical Provisions (TP)

- **Best Estimate Liabilities (BEL)** — PV of future cash flows, best estimate.
- **Risk Margin (RM)** — cost of providing capital to support non-hedgeable risks (cost-of-capital method, UK rate 4% post-reform).
- Discount — EIOPA risk-free curve + volatility adjustment (VA) + matching adjustment (MA) for eligible annuity books.

### SCR + MCR

- **SCR** — 99.5% VaR over 1-year horizon; standard formula or internal model (IM).
- **MCR** — 25–45% of SCR; compact form.
- Ratio of Own Funds / SCR — solvency coverage; PRA expects >100% with management buffer.

### Matching Adjustment (MA) — UK annuity writers

- Fixed book of liabilities + fixed eligible assets.
- Permits discount-rate uplift above risk-free.
- Post-Solvency UK reforms: broader eligible assets + simplified matching.

## Pillar 2 — governance + ORSA

- Own Risk + Solvency Assessment — forward-looking, business-plan linked.
- Key functions: risk, compliance, internal audit, actuarial (Actuarial Function Holder).
- Actuarial Function Report annually — technical provisions + underwriting + reinsurance opinions.
- SM&CR insurance — SMFs + Certification Regime + Conduct Rules.

## Pillar 3 — reporting

- QRTs (Quantitative Reporting Templates) — annual + quarterly.
- Solvency + Financial Condition Report (SFCR) — public.
- Regular Supervisory Report (RSR) — triennial.
- National Specific Templates.
- IFRS 17 disclosures separately.

## General insurance — technical provisions audit

- Case-estimate reserves + IBNR.
- Methods: Chain Ladder (CL), Bornhuetter-Ferguson (BF), expected loss ratio, Cape Cod, stochastic (Mack, GLMs, bootstrap).
- Segmentation by line + cohort + treaty year.
- Large-loss adjustments + catastrophe provisions.
- Reinsurance recoveries — gross + net triangles; counterparty credit risk.
- ULAE (unallocated loss adjustment expense).
- Discounting under IFRS 17 (LIC); nominal for SII TP with curve discount.

## Life — key judgments

- Assumptions: mortality (CMI), lapse / persistency, expenses (per-policy + inflation), investment returns, bonus + management actions.
- With-profits: PPFM (Principles + Practices of Financial Management); fairness to policyholders.
- Unit-linked: unit-pricing controls, tax drag in fund calculations.
- Annuity longevity assumption — post-pandemic CMI update, longevity improvement sensitivity.

## Reinsurance

- **Proportional**: quota-share, surplus, fac-oblig. Cedes premium + losses pro rata.
- **Non-proportional**: XoL (excess of loss), stop-loss, aggregate XoL. Cedes losses above retention.
- Alternative risk transfer: ILS, cat bonds, sidecars, industry loss warranties.
- Risk transfer test (ASC 944 / IFRS 17) — substantial likelihood of significant loss to reinsurer.

## Broker + MGA regulation

- FCA ICOBS + IDD (Insurance Distribution Directive).
- Client money — CASS 5 (insurance intermediary) — statutory trust vs non-statutory.
- Commission disclosure + remuneration fair-value.
- Delegated authority / binder — underwriting control, claims handling standards.
- Consumer Duty — fair value + understanding + support + good outcomes.

## Sector audit focus

### Insurer
- Technical provisions (BEL + IBNR) — actuarial function opinion + auditor's actuary.
- Reinsurance — counterparty credit + disputed recoveries + recoverability.
- Assets — L3 valuation (private credit, infra), derivatives, derivative collateral, investment property.
- Solvency II — own funds tiering, SCR calculation (IM validation if internal model).
- IFRS 17 transition approach + CSM integrity + annual cohort discipline.

### Broker / MGA
- CASS 5 client money — daily reconciliation + segregation.
- Commission revenue recognition + claw-backs.
- Delegated-authority bordereau accuracy + timeliness.
- IDD disclosures + Consumer Duty price-value outcomes.

## Sector KPIs

- **Life**: NBV (new-business value), VNB (value of new business), EV (embedded value), IFRS 17 CSM balance + release, persistency, APE (annual premium equivalent).
- **General**: combined ratio (CoR) = loss ratio + expense ratio; attritional vs large + cat; net / gross ratios.
- **Lloyd's**: RITC outcome, syndicate capacity, three-year accounting surplus.
- **Broker**: gross premium bound, commission rate, client-money buffer %, retention rate.

## Automation opportunities

1. Technical-provisions recalc engine (triangles → reserves → Pillar 1 TP + IFRS 17 FCF in one pass).
2. ORSA automation (stress-test library + narrative generator).
3. QRT XBRL validation + submission pipeline.
4. IFRS 17 actuarial-to-GL integration (cohort-level journals).
5. Reinsurance counterparty credit engine (S&P / A.M. Best feed + recoverable haircut).
6. CASS 5 daily reconciliation automation + client-money breach alert.
7. IDD / Consumer Duty product-value dashboard.
8. Binder bordereau QA — completeness + accuracy + timeliness vs delegated authority contract.

## Anti-patterns

- Reserves set by management + actuary produces "comfort range" ex post — reverse the burden.
- Reinsurance treated as collectable without counterparty-credit adjustment.
- Solvency II SCR reliance on standard formula when risk profile clearly atypical (internal model adjustment justified).
- IFRS 17 onerous group identification done at portfolio level — not compliant.
- CASS 5 client-money treated as operating cash in bank recs (segregation breach).
- Binder "monitored on review only" without sample audit of underlying risks + claims handling.
- Run-off reserves subject to "management's view" overriding actuarial CoC / CL best estimate without documented rationale.

## Output pattern

Blend core audit (ISA) + IFRS 17 technical + Solvency II + actuarial function interaction + sector KPIs + automation.
