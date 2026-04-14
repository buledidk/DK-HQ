---
name: transfer-pricing
description: Use for transfer pricing — OECD Transfer Pricing Guidelines, arm's-length principle, Master File + Local File + Country-by-Country Report (BEPS Action 13), functional + risk + asset analysis (FAR), benchmarking studies, Pillar One (Amount A + Amount B), Pillar Two (GloBE) interaction with TP, DEMPE for intangibles, financial-transaction TP (IGLs, cash-pooling, guarantees), business restructuring, permanent establishments (PE), Advance Pricing Agreements (APAs), Mutual Agreement Procedure (MAP), HMRC + IRS + EU TP audits, UK DPT (Diverted Profits Tax), UK Profit Diversion Compliance Facility. Auto-trigger on phrases like "transfer pricing", "TP", "arm's length", "BEPS Action 13", "Master File", "Local File", "country by country", "CbCR", "DEMPE", "benchmarking study", "comparable", "APA", "advance pricing agreement", "MAP", "mutual agreement procedure", "Amount A", "Amount B", "GloBE", "Pillar One", "Pillar Two TP", "Diverted Profits Tax", "DPT", "FAR analysis", "IGL", "intragroup loan", "cash pooling".
---

# transfer-pricing

Deep-dive for TP + cross-border tax. Chains from `tax-provisioning-ias12`, `risk-assessment`, `disclosure-review`.

## Core principle

**Arm's-length principle** (OECD MTC Art 9 + TPG 2022) — conditions made or imposed between associated enterprises shall not differ from conditions made between independent enterprises.

Test: what would unrelated parties agree in same / comparable circumstances?

## OECD TPG framework (2022)

### Nine-step comparability analysis

1. Understand industry + the MNE group + controlled transaction.
2. FAR analysis — functions, assets, risks.
3. Review existing contractual terms.
4. Identify the tested party.
5. Select most appropriate method.
6. Identify potential comparables + benchmarking.
7. Determine arm's-length range.
8. Apply method + comparability adjustments.
9. Interpret + document.

### Methods (TPG Ch II)

- **Comparable Uncontrolled Price (CUP)** — direct external comparable. Gold standard when available.
- **Resale Price Method (RPM)** — distributor gross margin.
- **Cost Plus (CPM)** — manufacturer / service provider mark-up.
- **Transactional Net Margin Method (TNMM)** — net margin indicator (return on costs, return on assets, Berry ratio, operating margin).
- **Profit Split** — split actual combined profit per agreed allocation keys; used for highly integrated or unique intangible contributions.

"Most appropriate method" — TPG 2010 onwards no hierarchy; method selection justified.

### FAR analysis

- **Functions** — who does what (R&D, manufacturing, marketing, distribution, services, management, finance).
- **Assets** — tangible (plant, inventory) + intangible (brands, patents, technology, customer lists, software).
- **Risks** — market, credit, FX, inventory, R&D, warranty, IP enforcement, regulatory.

Analysis determines characterisation — routine manufacturer, limited-risk distributor, contract R&D, commissionaire, strategic-entrepreneur, full-fledged.

### DEMPE (TPG Ch VI — intangibles)

Intangible returns go to parties that perform + control + bear risks for:
- **D**evelopment
- **E**nhancement
- **M**aintenance
- **P**rotection
- **E**xploitation

Legal ownership alone does NOT determine entitlement. Cost contribution arrangements (CCAs / CSAs — US) supplement.

## BEPS Action 13 — three-tier documentation

### Master File

Group-wide:
- Organisational structure.
- Description of MNE business — drivers of profit, supply chain, service arrangements, restructuring.
- Intangibles + R&D locations + strategy.
- Intercompany financial activities + TP policy on financing.
- Financial + tax positions — consolidated FS, unilateral APAs, rulings.

### Local File

Country-specific:
- Local entity — management, business strategy, restructuring.
- Controlled transactions — description, amounts, counterparty, functional analysis, method, benchmarking.
- Financial information — statutory FS, controlled transaction P&L.

### Country-by-Country Report (CbCR)

- Revenue (related party + unrelated party), profit, income tax paid + accrued, stated capital, accumulated earnings, employees, tangible assets by jurisdiction.
- Entities in each jurisdiction + main activities.
- For MNEs with consolidated revenue ≥ €750m.
- Filed in parent jurisdiction; exchanged via treaty.

## Financial transactions (TPG Ch X — 2020)

### Intragroup loans
- Characterisation as debt (vs equity) — substance over form.
- Credit rating of borrower standalone + group support (halo effect range).
- Interest rate — base rate + credit spread + tenor + seniority + currency.
- Two-sided analysis — lender perspective + borrower perspective.

### Cash-pooling
- Notional vs physical.
- Short-term liquidity smoothing vs long-term financing (re-characterisation risk).
- Pool leader function — coordinator (low return) vs banking function (spread + risk).

### Guarantees + performance guarantees
- Implicit support (halo) excluded from fee.
- Yield approach, cost approach, option pricing, benefit approach, capital-support approach.

### Captive insurance
- Insurance substance — risk diversification, regulatory capital, pricing aligned with market.

## Pillar One + Pillar Two interaction

### Amount A (Pillar One)
- In-scope MNEs (global turnover > €20bn, profitability >10%).
- Reallocation of 25% of residual profit to market jurisdictions.
- Special rules; limited scope.

### Amount B (Pillar One)
- Simplified + streamlined approach for baseline marketing + distribution activities.
- Fixed margin based on pricing matrix (industry + factor intensity).
- OECD report Feb 2024; opt-in for low-capacity jurisdictions.

### Pillar Two GloBE
- Global minimum tax 15% — top-up tax via IIR, UTPR, QDMTT.
- TP determines jurisdictional GloBE income + covered taxes — interaction with TP adjustments.
- Substance-based income exclusion (SBIE).
- See `tax-provisioning-ias12` for GloBE accounting.

## UK-specific

### DPT (Diverted Profits Tax)
- 25% (31% from 1 Apr 2023 aligned with CT main rate + 6%).
- Three triggers: entity avoiding UK PE; lack of economic substance in relevant provisions; alternative provision would increase UK tax.
- Interacts with TP — TP adjustment closes DPT notice.

### Profit Diversion Compliance Facility (PDCF)
- HMRC programme for MNEs to self-review + disclose.
- Reduced penalties + rapid closure.

### Uncertain Tax Treatment (UTT) notification
- From Apr 2022 — large businesses notify HMRC of uncertain tax treatments (threshold £5m).
- Includes TP positions.

### Enquiry + settlement
- HMRC TP enquiry typical scope: 3–4 years; extended up to 6 where careless behaviour + 20 where deliberate.
- Contemporaneous documentation expectation.

## US IRC §482 + §6662

- §482 — regulatory framework (CUP + CPM + RPM + CPM + profit split + services cost method).
- §6662 — penalty 20% / 40% for substantial / gross valuation misstatement — TP penalty protection via contemporaneous documentation.
- APA programme — annual reports.

## EU

- EU Joint Transfer Pricing Forum — guidance + mutual-agreement best practice.
- EU TP Directive (DAC 13 + public CbCR — effective Jun 2024 for large MNEs).
- Court of Justice judgments — Amazon (2023), Apple (ongoing appeals).

## APA + MAP

### APA
- Unilateral (one tax authority) / bilateral / multilateral.
- Agreed methodology + margin / range.
- Duration typically 3–5 years + possible roll-back.

### MAP
- Dispute resolution between treaty tax authorities.
- OECD MTC Art 25 — mandatory arbitration if unresolved 2 years (BEPS Action 14 minimum standard).

## Audit + accounting interactions

### FS disclosure
- IAS 12 UTP — uncertain tax position provision (IFRIC 23).
- IAS 24 related-party — related-party transactions + pricing basis.
- IFRS 8 segment — reportable segment inter-segment revenue.
- Disclosure of CbCR? Most jurisdictions — no public disclosure; EU public CbCR for largest MNEs.

### Audit procedures
- Review TP policy + contemporaneous documentation (Master + Local File).
- Material intercompany transactions — method rationale + benchmarking refresh date.
- Loans / cash-pooling — arm's-length rate test.
- Restructuring — compensation + exit charges.
- DEMPE — substance in claimed owner jurisdiction.
- UTP provision — completeness + methodology (probability-weighted or most-likely).

## Common issues + judgments

- Benchmarking study age — refresh every 3 years + search update annually (OECD expects).
- Range choice — full range vs interquartile; adjustments for comparability.
- Loss-making comparables — typically excluded unless structural loss.
- Capacity-adjustment for idle-capacity comparability.
- Royalty rate for brand — transactional CUP vs profit-split + DEMPE test.
- Permanent Establishment — dependent agent, construction, service, digital-economy anti-fragmentation.
- Limited-risk distributor — when is it really full-fledged? Substance over contract.
- Year-end TP adjustments — commercial rationality + customs + VAT implications.
- Financial-transaction TP — intercompany loan at >10x external debt-to-EBITDA — credit-support assumption justified?

## Anti-patterns

- Benchmarking study re-used unchanged for 5+ years.
- Local File drafted by outsourced provider without local-entity management review.
- Intragroup loan interest rate set at fixed basis-point spread without credit rating refresh.
- DEMPE substance claimed in low-tax jurisdiction with 2 FTEs (risk of BEPS challenge + DPT).
- Profit split applied without demonstrating unique / integrated contributions.
- CbCR inconsistency with statutory FS or consolidated FS — reconciliation missing.
- UTP notification (UK) ignored for TP positions meeting threshold.
- Intercompany services charged on cost basis without mark-up (below arm's length) or with arbitrary mark-up (above).
- "Stewardship" services cross-charged to subsidiaries (should be parent-borne).
- Year-end true-up material but commercial justification absent + customs re-declaration missed.

## Deliverables

- Master File + Local File + CbCR.
- TP policy paper per transaction class.
- Benchmarking reports (DB sources: TP Catalyst, Orbis, Standard & Poor's, Bloomberg, Moody's).
- APA application pack + rollback analysis.
- UTP register + IFRIC 23 provision calculation.
- PDCF / enquiry response + defence file.
- TP risk map (legal entity × transaction × jurisdiction × risk rating).
