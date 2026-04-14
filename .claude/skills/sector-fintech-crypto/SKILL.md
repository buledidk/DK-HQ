---
name: sector-fintech-crypto
description: Use for sector-polished audit, advisory, and automation work in fintech + crypto-asset businesses — payment institutions (PI), e-money institutions (EMI), crypto-asset service providers (CASPs), exchanges, custodians, stablecoin issuers, lending + BNPL fintechs, open-banking TPPs, embedded-finance platforms, neobanks. Covers PSD2 + PSR2, PSR 2017, EMR 2011, FCA cryptoasset registration (MLR 2017), MiCA (Markets in Crypto-Assets Regulation), Travel Rule, SAB 121 (SEC crypto custody), IFRIC agenda decisions on crypto accounting, stablecoin reserve attestation, safeguarding + segregation audit, AML / sanctions in crypto. Auto-trigger on phrases like "fintech audit", "crypto audit", "crypto-asset", "EMI audit", "payment institution", "PSD2", "PSR2", "MiCA", "stablecoin", "CASP", "cryptoasset service provider", "Travel Rule", "SAB 121", "safeguarding audit", "open banking TPP", "BNPL", "neobank", "embedded finance", "FCA cryptoasset registration", "MLR cryptoasset".
---

# sector-fintech-crypto

Sector expertise for fintech + crypto-asset engagements.

## Entity types + licensing

| Entity | UK / EU regime | US regime |
|---|---|---|
| Payment Institution (PI) | PSR 2017 (UK) / PSD2 (EU) | State MTLs + FinCEN MSB |
| E-money Institution (EMI) | EMR 2011 (UK) / EMD2 (EU) | State MTLs + FinCEN MSB |
| Small PI / Small EMI | Register under PSR / EMR | N/A |
| Crypto exchange / custodian | FCA MLR 2017 registration (UK) / MiCA CASP (EU) | SEC / CFTC / NY BitLicense / state MTLs |
| Stablecoin issuer | MiCA ART / EMT (EU) / BoE-FCA systemic SC regime (UK, pending) | State money-transmitter + OCC / Fed / FDIC / Treasury |
| Open-banking TPP (AISP/PISP) | PSR 2017 + FCA | N/A (open banking limited) |
| Lending fintech / BNPL | FCA consumer credit | State + federal (CFPB) |
| Neobank | FCA banking permission (UK) / EU credit institution | OCC charter / state charter / fintech-bank partnership |

## Safeguarding + segregation

### EMI / authorised PI — Safeguarding

- PSR 2017 Regulation 23 + EMR 2011 Regulation 20.
- Methods: (1) segregation in separate account with authorised credit institution; (2) insurance / comparable guarantee.
- Daily reconciliation + no commingling with operating funds.
- Safeguarding audit — annual statutory audit + focused safeguarding audit (FCA expectation for larger firms; letter to firms March 2023).
- End-of-day + intra-day thresholds.

### CASS (investment firms)

- CASS 7 (client money) + CASS 6 (client assets).
- Segregation, daily recs, trust status, CMAR reporting.
- Investment firm crypto: custody of crypto-assets tested against CASS scope (ongoing industry debate).

## Accounting — crypto-assets

### IFRS (IFRIC June 2019 agenda decision)

- Crypto-asset held for investment: NOT cash, NOT financial asset (no contractual right).
- Typically intangible asset (IAS 38) — indefinite life → revaluation model permitted if active market.
- Held for sale in ordinary course → IAS 2 inventory at lower of cost + NRV; broker-dealer exception (FV through P&L) for commodity-broker-dealer.
- Stablecoins — fact-pattern dependent: if right to redeem at par in fiat → often financial asset (IFRS 9).
- NFT — usually IAS 38 intangible; utility tokens + governance tokens may differ.

### US GAAP (ASU 2023-08 — crypto-assets at fair value)

- In-scope crypto-assets measured at FV with changes in P&L.
- Scope: intangible that meets 6 criteria (fungible, secured cryptographically, on distributed ledger, not issued by reporting entity / related party, not embody enforceable rights, not issued by entity).
- Excludes: wrapped tokens (some), NFTs, stablecoins with redemption rights.
- Disclosures: significant holdings, FV roll-forward, restrictions.

### SAB 121 (SEC — superseded Jan 2025 by SAB 122, but still relevant context)

- SEC registrants safeguarding crypto for platform users were required to recognise asset + liability at fair value.
- SAB 122 (2025) rescinded blanket requirement — registrants follow ASC 450 analysis.
- Private companies + platform auditors — evaluate on same principles.

## MiCA (Markets in Crypto-Assets — EU)

Staged application:
- Title III + IV (stablecoins — ART + EMT) from 30 Jun 2024.
- Full application (CASPs) from 30 Dec 2024.

Key obligations:

**Stablecoins (ART / EMT)**:
- Reserve — 1:1 segregated + bankruptcy-remote + specific asset composition rules (T-Bills, demand deposits, MMF).
- Disclosure whitepaper + ongoing.
- Significant SC additional capital (3% of reserve), interoperability, recovery + redemption plans.

**CASPs (exchanges, custodians, advisers, brokers, placement agents)**:
- Prudential own-funds (EUR 50k – 150k class-based).
- Conflicts of interest, safeguarding, custody segregation, complaints, market abuse.
- Whitepaper for non-ART / non-EMT tokens.

## Travel Rule

- FATF Recommendation 16 + local implementation (UK FCA Sep 2023; EU TFR Dec 2024).
- Virtual asset transfers: originator + beneficiary info shared between VASPs for transfers above threshold.
- Sunrise issue — cross-jurisdiction delay in adoption; UK firms must collect info + delay / freeze if counterparty non-compliant.

## Payments regulation

### PSD2 / PSR 2017

- SCA (Strong Customer Authentication) — two-factor for electronic payments + dynamic linking for remote transactions.
- AISPs + PISPs + CBPII with FCA permissions.
- Maximum H + H response times + availability.
- Operational + security risk assessment — annual.
- Incident reporting — to FCA / NCA.

### Faster Payments + CHAPS + SEPA + Instant Payments

- Pay.UK / BoE direct participation vs indirect.
- APP fraud reimbursement (PSR new rules Oct 2024) — 50 / 50 sender + receiver PSP + DDL to sending PSP.

## Fintech-specific audit focus

- Safeguarding audit (EMI / PI): daily reconciliation, method selection, segregation integrity, same-day repair of breaches.
- Revenue — interchange, FX spread, subscription, lending income; IFRS 15 principal-agent analysis (card schemes).
- Credit + lending book — IFRS 9 ECL with limited history; peer + external benchmarks.
- BNPL — consumer-duty price / value, collections + default modelling.
- Customer-asset custody — crypto-asset custody arrangements, wallet hierarchy (hot / warm / cold), private-key management.
- Stablecoin reserve attestation — at specific date; composition + segregation + third-party-bank confirmation.
- Crypto-asset valuation — active market assessment (IFRS 13 L1 test); price-feed governance.
- AML in crypto — address screening (sanctions + OFAC SDN + high-risk counterparties), blockchain analytics (Chainalysis / Elliptic / TRM).
- Wallet ownership assertions — proof of control via signed message vs asset-to-wallet reconciliation.

## Key controls in crypto operations

- Private-key ceremony + multi-sig quorum + hardware-security-module (HSM) use.
- Cold / warm / hot wallet segmentation + threshold rules + transaction approval workflow.
- Transaction allow-listing + cancel / speedup governance.
- Staking / validator-node operations — slashing risk + reward accrual.
- DeFi protocol interaction — smart-contract audit reliance + protocol risk.

## Stablecoin reserve audit / attestation

- AICPA attestation standards (AT-C 105 + 205 / 215) for examination or review.
- Or full audit under ISAs if trust-account-level.
- Tests: bank confirmation at date, composition breakdown (T-Bills vs deposits vs MMF), maturity profile, counterparty concentration, segregation / bankruptcy remoteness evidence.
- Frequency: some issuers monthly attestation, some real-time dashboards (out of scope for point-in-time assurance).

## Automation opportunities

1. Safeguarding reconciliation engine — per-customer balance vs pooled account, daily + intra-day.
2. SCA + PSD2 incident-reporting pipeline.
3. Crypto-asset wallet-to-GL reconciliation (on-chain + off-chain).
4. Blockchain analytics integration for AML screening + address labelling.
5. Stablecoin reserve dashboard + automated attestation-data package.
6. Price-feed governance (multi-source median + confidence band + stale-price alert).
7. IFRS 9 ECL for short-history lending books with peer-benchmark overlay.
8. Travel Rule message-passing integration (TRP / IVMS-101).
9. Revenue engine for interchange + FX spread + subscription across payment products.
10. Change-management governance for smart-contract upgrades + DeFi protocol integrations.

## Anti-patterns

- EMI safeguarding reconciliation end-of-month only — regulator expects daily at minimum.
- Commingling funds "temporarily" overnight while awaiting safeguarding sweep — breach.
- Crypto-assets classified as cash equivalents on balance sheet (contrary to IFRIC 2019 + ASU 2023-08).
- Stablecoin reserve "backed 1:1" without disclosed composition + auditor's date-specific attestation.
- Proof-of-reserve based on snapshot without matching proof-of-liability (total customer claims).
- BNPL lending modelling extrapolating narrow-history behaviour to full economic cycle.
- PSD2 SCA exemptions relied on without TRA + low-value thresholds policy documented.
- MLR cryptoasset registration treated as one-off onboarding; ongoing customer + counterparty monitoring absent.

## Output pattern

Blend payments / crypto regulation + safeguarding / segregation + crypto accounting (IFRIC / ASU 2023-08) + blockchain-specific controls + AML + automation.
