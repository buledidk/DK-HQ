---
name: sector-asset-management
description: Use for sector-polished audit, advisory, and automation work in asset management — asset managers (AIFMs, UCITS mancos), wealth managers, private equity, private credit, hedge funds, venture capital, infrastructure funds, real-estate funds, LTAFs, fund-of-funds, fund administrators, depositaries, and family offices. Covers fund accounting + NAV, valuation, IFRS 10 consolidation (control + investment entity exemption), PRIIPs KID, fund-level + manager-level reporting, AIFMD + UCITS + MIFIDPRU, depositary oversight, side letters, MNPI, and performance fees. Auto-trigger on phrases like "asset manager", "wealth manager", "AIFM", "AIF", "UCITS", "LTAF", "fund audit", "NAV audit", "private equity", "private credit", "hedge fund", "VC", "fund administrator", "depositary", "PRIIPs", "performance fee", "side letter", "limited partnership".
---

# sector-asset-management

Sector expertise for asset-management engagements.

## Entity types

| Entity | Structure | Regulator | Strategy |
|--------|-----------|-----------|----------|
| UCITS fund | ICVC / UT / SICAV | FCA (COLL) / CSSF / CBI | Liquid equity, bonds, ETFs |
| UK AIF | ICVC / ACS / LP / UT | FCA (AIFMD) | Everything else |
| LTAF | ACS | FCA (COLL 15) | Illiquid long-term (DC + wholesale) |
| PE / PC fund | Cayman LP / Lux RAIF / UK LP | FCA (AIFMD) | Buyout, credit, growth |
| Hedge fund | Master-feeder (Cayman + Delaware) | FCA + SEC (40 Act) | Long-short, macro, quant |
| Wealth manager | Limited co / LLP | FCA (MIFIDPRU) | Discretionary / advisory |
| Fund administrator | Limited co | FCA / CSSF / CBI | NAV, shareholder services |
| Depositary | Bank / LP | FCA / CSSF / CBI | Custody, oversight |
| Family office | Varies | Varies | Single-family discretionary |

## Fund accounting + NAV

NAV components: investments at FV (IFRS 13), cash, receivables + payables
(dividends, interest, subs/reds, fee accruals), hedge MTM, accrued expenses
(mgmt, perf, admin, custody, audit, legal, trustee/depositary).

NAV cycle: daily (UCITS + liquid AIFs) → weekly/monthly/quarterly (illiquid).
Cut-off: dealing deadline vs valuation point. Swing pricing / dilution levy
governance + application.

### Performance fees (IFRS 15 variable consideration)
HWM + hurdle + crystallisation + catch-up + clawback. Constraint: include
only if highly probable no significant reversal.

## Valuation

Listed: close/bid/mid per policy; stale-price tolerance.

Unlisted / illiquid (PE, PC, RE, infra): IPEV 2022; methods (multiples,
transaction price, calibration, DCF, fund-of-funds NAV). Valuation
Committee governance — frequency, challenge, independent valuer,
back-test on exit. L3 sensitivity. AIFMD 2 enhanced valuation requirements.

OTC derivatives: model-based + XVA stack (CVA, DVA, FVA); collateral haircuts.

## Consolidation (IFRS 10 + IAS 28 + IFRS 12)

### Investment Entity exemption (IFRS 10 ¶27)
Criteria:
1. Obtains funds from investors for investment mgmt services
2. Commits to investors that purpose is CG + investment income
3. Measures performance substantially-all FV basis

Typical: PE, VC, HF, LTAF. Not typical: strategic holdcos, operating
investment-services subsidiaries.

If IE: don't consolidate investments; measure FVTPL. Still consolidate
controlled investment-service subsidiaries.

### Control (IFRS 10)
- Power + exposure to variable returns + ability to use power
- De facto control with dispersed voting
- Silos (umbrella funds with sub-funds)
- Removal rights / kick-out by unaffiliated parties typically prevent control

### Associates / JVs (IAS 28)
Significant influence (20%+) or GP positions. Equity method or FV exemption
for investment entities.

## Regulation

### AIFMD (UK + EU)
- Full-scope vs sub-threshold (>€100m w/ leverage; >€500m unlev.)
- Regulatory capital: €125k + 0.02% of AuM >€250m, cap €10m
- Depositary Art. 21: cash monitoring, safe-keeping, oversight
- Remuneration (SYSC 19B) — MRTs, deferral, clawback
- Annex IV reporting (semi-annual; quarterly for large)
- Marketing — EEA passport (EU AIFMs) / NPPR / reverse solicitation

### UCITS V / VI
- Eligible assets + 5/10/40 diversification; borrowing 10%
- Liquidity stress testing (ESMA guidelines)
- PRIIPs KID (retail) + KIID transition
- Depositary liability + single-line pay-back
- Remuneration (SYSC 19E)

### MIFIDPRU (UK portfolio managers)
- K-factors: KAUM (AUM × 0.02%), K-CMH, K-ASA, K-COH, K-NPR
- ICARA — internal capital + risk assessment
- Liquidity: 1/3 fixed overhead req
- SYSC + MIFIDPRU 8 remuneration

### PRIIPs KID
- SRI 1–7
- Performance scenarios (stressed/unfavourable/moderate/favourable)
- Costs (RIY)
- Annual refresh + trigger-event refresh

### LTAF (UK COLL 15)
- Notice periods typically 90–180 days
- Illiquid mandate (PE, PC, RE, infra)
- Targets DC pension + wholesale
- Depositary + liquidity management tools

### Op Resilience + DORA
- PS21/3 for FCA-authorised AIFMs + MANCOs
- DORA applies to EU AIFMs + UCITS mancos from Jan 2025

### MAR + conduct
- Insider list for listed investments
- STORs from trading
- Benchmark integrity (IBOR → RFR)

### Financial crime
- AML — enhanced for PEP + offshore + opaque UBO
- Sanctions — issuer + counterparty + country, EM deep-dive
- FATCA + CRS investor classification + reporting

## Sector audit focus

### Fund audit
- NAV/share reconciliation
- FV audit — IPV, L3 challenge, sensitivity
- Performance fee — HWM, hurdle, crystallisation, clawback
- Mgmt fee vs IMA
- Subs + reds — cut-off, NAV applied, AML
- Related-party — cross-trades, seed, co-investment, affiliate services
- FATCA / CRS classification + reporting
- Distribution + equalisation
- Depositary opinion cross-check

### Manager audit
- Regulatory capital (MIFIDPRU / AIFMD)
- Mgmt fee revenue (IFRS 15)
- Performance fee constraint
- Deferred remuneration accounting
- Seed capital (consolidation / IE)

### Separate regulated opinions
- CASS audit (where client money held)
- AAF 01/20 (outsourced admin / custodian)
- ISAE 3402 (service org)

## Manager-level KPIs

AuM (end vs avg), net flows, gross flows, blended fee rate, performance-
fee dependency, op margin, PRE (PE), carry realised + unrealised, investor
concentration, fund-of-funds TER.

## Fund-level KPIs

Return TWR vs MWR, alpha, information ratio, net IRR, MOIC/TVPI, DPI,
RVPI, Sharpe, Sortino, max drawdown, liquidity score, leverage.

## Automation opportunities

1. NAV automation (ETL + exception-based review + auto swing-pricing)
2. FV governance (L3 inventory + calibration + back-test + disclosure)
3. Performance fee engine (HWM + hurdle + crystallisation + clawback)
4. PRIIPs KID auto-compute + annual + trigger-event refresh
5. Annex IV / Form PF / AIFMD reporting from risk + admin
6. Depositary oversight dashboard (cash + asset + breach mgmt)
7. MIFIDPRU K-factor + ICARA pipeline
8. Investor onboarding + AML (OCR + screening + classification)
9. Side-letter tracker (MFN, capacity, reporting, fee preference)
10. Capital-account statements (PE ILPA template)

## Anti-patterns

- IE criteria ticked without FV-basis performance monitoring evidence
- NAV tolerance thresholds for convenience (swing-pricing; stale-price FV)
- Performance fees accrued without VC constraint
- Side letters not disclosed despite MFN
- PRIIPs KID not refreshed on trigger
- Depositary verification tick-box without sample asset testing
- AIFMD reg capital + MIFIDPRU K-factors monthly instead of daily
- Cross-trades without best-execution evidence

## Output pattern

Blend core audit (ISA) + fund accounting + valuation (IFRS 13 + IPEV) +
regulation (AIFMD / UCITS / MIFIDPRU / PRIIPs / LTAF) + depositary/admin
interfaces + KPIs + automation.
