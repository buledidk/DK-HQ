---
name: sector-banking-capital-markets
description: Use for sector-polished audit, advisory, and automation work in banking (retail, commercial, investment), building societies, payments, e-money, and capital markets (broker-dealers, exchanges, CCPs, CSDs, MTFs, OTFs). Covers sector-specific accounting (IFRS 9 ECL, hedge accounting, fair-value, business combinations), prudential + conduct regulation, treasury + market operations, surveillance, and sector-specific audit procedures. Auto-trigger on phrases like "bank audit", "building society", "broker-dealer", "investment bank", "capital markets", "CCP", "CSD", "exchange", "payments firm", "e-money", "IFRS 9", "hedge accounting", "trading book", "banking book", "Pillar 3", "RWA audit", "treasury audit", "ECL audit".
---

# sector-banking-capital-markets

Sector expertise layered on top of core audit + automation skills.

## Entity types

| Entity | Regulator | Core products | Key risks |
|--------|-----------|--------------|-----------|
| UK ring-fenced bank | PRA + FCA | Retail deposits, loans, mortgages | Credit, liquidity, conduct, op-res |
| UK non-ring-fenced | PRA + FCA | Wholesale, IB | Market, counterparty, op-res |
| Building society | PRA + FCA | Mortgages, retail savings | Credit, funding mix, op-res |
| Investment bank | PRA + FCA (SMCR) | Markets, M&A, prime | Market, counterparty, conduct, MAR |
| UK broker-dealer | FCA (MIFIDPRU) | Execution, clearing, prime | K-factors, conduct, CASS |
| US broker-dealer | SEC + FINRA | Same | 15c3-1 net capital, 15c3-3 |
| Payments / e-money | FCA (PSRs/EMRs) | Payments, wallets | Safeguarding, AML, op-res |
| Exchange / MTF / OTF | FCA (MAR, MiFID II) | Venues | Market integrity, MAR |
| CCP | BoE + ESMA | Clearing | Default waterfall, margin, liquidity |
| CSD | BoE + ESMA (CSDR) | Settlement | Settlement fails, cash penalties |

## Sector-specific accounting

### IFRS 9 financial instruments
- C&M: amortised cost (SPPI + HTC) / FVOCI (SPPI + HTC&S) / FVTPL
- SPPI: principal + interest; fails on equity-linked / leverage / non-recourse beyond collateral
- ECL 3-stage: 12M → lifetime on SICR → lifetime credit-impaired; POCI separate
- SICR triggers: quantitative PD thresholds + qualitative (watch-list, forbearance, 30-dpd backstop)
- Forward-looking macro: min 3 scenarios, prob weights, governed overlays
- Hedge accounting: FV / CF / NIFO; hedge ratio + economic relationship + credit-risk dominance; rebalancing vs discontinuation

### IAS 39 carve-out (macro hedging) — some banks still elected for portfolio FV hedge of IR risk

### Derivatives + embedded
- Host/derivative separation for hybrids
- Benchmark reform novation amendments

### Fair value (IFRS 13)
- L3 common in IB (illiquid credit, structured products)
- Day-one P&L deferral on L3 at inception
- XVA stack: CVA, DVA, FVA, KVA, MVA — governance + disclosure
- Valuation adjustments reconciled to risk-managed FV

### Consolidation (IFRS 10 + structured entities)
- Securitisation SPVs, CLO / conduit, repackaging
- De-recognition (IFRS 9 pass-through; risks & rewards vs control)
- IFRS 12 structured-entities disclosure

### Revenue (IFRS 15)
- Fee / commission vs interest income
- Asset-mgmt performance fees — variable-consideration constraint
- IB fees — over-time vs point-in-time by deal stage

### Own credit (IFRS 9)
- FVTPL liabilities: own-credit change to OCI (non-recyclable)

## Sector regulation

Prudential (see `banking-capital-markets-regulation` skill for depth):
Basel III/IV, CRR II/III, CRD V/VI, FRTB, ECL + stress, MREL, ICAAP,
ILAAP, LCR, NSFR, leverage, Pillar 3.

Conduct:
- **SMCR** — SMFs + SoRs + certification + conduct rules + regulatory references
- **Consumer Duty (PS22/9)** — four outcomes, annual board report, price + value
- **CASS** — CASS 6/7/8 reconciliation, client-money calc, acknowledgement letters, annual CASS audit
- **MiFID II / COBS** — best ex (RTS 28 retained), suitability, product governance, client categorisation

Markets:
- **MAR** — insider dealing, manipulation, PDMR, insider lists, STORs, delayed disclosure
- **RTS 22** — 65 fields, T+1, LEI + National ID, validation + reconciliation + error workflow
- **EMIR Refit** — clearing, risk mitigation, 203-field reporting, NFC/NFC+/FC/FC+
- **SFTR** — repos, sec-lending
- **CSDR** — settlement discipline cash penalties (live); buy-ins (suspended)
- **T+1** — US May 2024; UK/EU Oct 2027

Resolution + resilience:
- **Op Res** PS21/3 — IBSs, impact tolerances, severe-but-plausible, self-attestation March 2025
- **DORA (EU)** — ICT risk, incident reporting, TLPT, third-party register
- **Recovery + resolution** — RPI, MREL/TLAC, RAF (SS4/19)

Financial crime + tax:
- **MLR 2017 + JMLSG** — CDD/EDD, PEP, SAR
- **Sanctions** — OFSI/OFAC/UN/EU, PEP, adverse media
- **FATCA + CRS** — classification + reporting

## Sector audit focus (ISA areas with sector overlay)

- **Interest income (ISA 240 ¶26)** — EIR, modification gains/losses, penalty fees
- **ECL (ISA 540 revised)** — SICR testing, PD/LGD back-test, scenario-weight challenge, overlay governance, stage migration
- **L3 FV (IFRS 13 + ISA 540)** — IPV, model governance, back-test, disclosure sensitivity
- **Hedge accounting** — inception docs, effectiveness testing, rebalancing
- **CASS** — monthly + annual client money + asset reconciliation, CASS audit standard separate opinion
- **Capital + liquidity returns** — COREP / FINREP → reconcile to audited FS
- **Transaction reporting (RTS 22)** — sample + reconciliation to source trades + exception reports
- **MAR surveillance** — universe coverage, alert tuning, STOR completeness
- **Going concern + viability** — stress scenarios, covenant breach risk

### Sector IT + controls
- Core banking: Mambu, Temenos, FIS, Oracle Flexcube, Finacle
- Risk engines: Moody's, SAS, Murex, Calypso, Summit, Adaptiv
- Ledger + treasury: SAP, Oracle, Kyriba, FIS Quantum
- SWIFT CSP + ISO 20022 migration testing
- ITGC scope scales with product complexity

## Operational KPIs

| Metric | Definition | Benchmark |
|--------|-----------|-----------|
| NIM | NII / avg IEA | 2–4% retail; 1–2% wholesale |
| Cost:Income | Op costs / op income | <55% best retail |
| RoTE | Profit / avg tangible equity | 12%+ UK listed target |
| CET1 | CET1 / RWA | Reg min 4.5% + buffers; 13%+ strong |
| LCR | HQLA / 30-day net outflows | ≥100% |
| NSFR | ASF / RSF | ≥100% |
| Leverage | T1 / leverage exposure | ≥3.25% UK |
| Impairment | ECL / avg loans | Through-cycle 20–50bps retail |
| Cost of risk | Impairment / loans | Cyclical indicator |
| Fee income ratio | Non-interest / total | Diversification proxy |

## Automation opportunities

1. ECL end-to-end pipeline (data → PD/LGD/EAD → scenarios → overlays → reconciliation → disclosures)
2. Client-money daily recon (CASS) — auto 3-way match + exceptions + audit trail
3. Transaction reporting QA (RTS 22) — validation + daily recon + break investigation
4. MAR surveillance — rule + ML with feedback from STOR outcomes
5. Prudential return assembly (COREP/FINREP) from GL + risk + treasury
6. FRTB SBA + SA-CVA engines with per-desk attribution
7. Climate stress testing (CBES-aligned) with sector attributions
8. Consumer Duty outcomes dashboards (product/price/understanding/support)

## Anti-patterns

- ECL audit relying on model docs without back-testing
- L3 FV at mgmt point without independent range
- Hedge docs re-created after year-end
- CASS breach investigation without RCA
- Transaction reporting tested on sample — must be 100% vs trade system
- MAR alert thresholds never tuned
- Consumer Duty as disclosure exercise rather than outcomes evidence

## Output pattern

Blend: core audit (ISA) + sector accounting (IFRS 9/13/15) + sector regulation (Basel/MIFIDPRU/CASS/MAR/RTS 22/CSDR/DORA) + KPIs + automation.
