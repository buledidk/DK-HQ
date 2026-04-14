---
name: ifrs16-lease-accounting
description: Use for lease accounting under IFRS 16 (Leases) and ASC 842 (US GAAP equivalent) — lessee single-model (right-of-use asset + lease liability), lease definition + identification, lease term (extension + termination options), discount rate (IBR), initial + subsequent measurement, reassessments, modifications, sale-and-leaseback, short-term + low-value exemptions, lessor classification (finance vs operating), sublease, and FRS 102 + Section 20 comparison. Auto-trigger on phrases like "IFRS 16", "ASC 842", "leases", "lease accounting", "right-of-use asset", "ROU", "lease liability", "IBR", "incremental borrowing rate", "lease term", "extension option", "lease modification", "sale and leaseback", "short-term lease", "low-value lease", "sublease", "finance lease", "operating lease", "FRS 102 section 20".
---

# ifrs16-lease-accounting

Deep-dive skill for lease technical accounting. Chains from `disclosure-review`, `accounting-judgments-estimates`, `fs-internal-consistency`.

## Scope + definition (¶9–11 + B9–B33)

A contract contains a lease if it conveys **right to control the use of an identified asset** for a period in exchange for consideration. Tests:

1. **Identified asset** — explicitly or implicitly specified; no substantive substitution right for supplier (practical ability + economic benefit).
2. **Right to obtain substantially all economic benefits** throughout period of use.
3. **Right to direct the use** — decides how + for what purpose asset is used. If pre-determined, falls back to who operates or designed.

Outcomes that are NOT leases: service contracts; shared-use capacity agreements without identified asset.

## Lessee accounting (single model)

### Initial measurement

- **Lease liability** = PV of future lease payments, discounted at rate implicit in lease (if readily determinable) or incremental borrowing rate (IBR).
- Lease payments include: fixed (less incentives receivable), variable dependent on index/rate (at initial index), residual-value guarantees, exercise price of purchase options reasonably certain to exercise, termination penalties if term reflects termination.
- **ROU asset** = lease liability + prepayments made at or before commencement + initial direct costs + restoration / dismantling provision (IAS 37) − incentives received.

### Subsequent measurement

- Liability: accrete at effective interest rate; reduce by payments.
- ROU asset: depreciate over shorter of useful life + lease term (lease term if no purchase option reasonably certain).
- Impairment: IAS 36 applies.

### Lease term (¶18–21)

Non-cancellable period **plus**:
- periods covered by extension options reasonably certain to exercise
- periods covered by termination options reasonably certain NOT to exercise

Assess at commencement; reassess on significant event or change in circumstances within lessee's control.

### Discount rate — IBR

IBR = rate lessee would pay to borrow, over similar term, with similar security, funds needed to obtain asset of similar value in similar economic environment. Common approach:
- Risk-free rate (matched currency + tenor) + entity-specific spread + adjustment for asset security.
- Build-up documented + consistent across portfolio.

### Reassessments vs modifications

- **Reassessment** (no contract change): change in lease term, purchase option, residual-value guarantee, variable payment becoming fixed-in-substance. Remeasure liability + adjust ROU asset.
- **Modification** (contract change): if increases scope + price reflects SSP stand-alone → separate lease. Otherwise remeasure liability with revised rate; adjust ROU (partial termination — recognise gain/loss; others — adjust ROU).

### Exemptions

- **Short-term** (lease term ≤12 months at commencement, no purchase option) — on-balance-sheet optional; expense S/L over term if elected. Apply by asset class.
- **Low-value** — assessed when new at ~$5,000 absolute threshold; applied lease-by-lease. IT equipment, small office furniture.

### Variable lease payments
- Index/rate-linked: initial at current index; remeasure on rate change.
- Usage-based / performance-based: NOT in liability; expensed as incurred.

## Sale-and-leaseback (¶98–103)

- Is transfer a sale under IFRS 15? (Control passes to buyer-lessor?)
- If yes: seller-lessee recognises ROU asset at proportion of previous carrying amount relating to right retained; gain/loss only on rights transferred. Buyer-lessor applies lessor accounting.
- If no: financing arrangement; seller-lessee retains asset + recognises financial liability.

## Lessor accounting (¶61–97)

Classify at inception: finance vs operating.

- **Finance** if substantially all risks + rewards incidental to ownership transferred. Indicators: ownership transfers; bargain purchase option; term for major part of useful life (~75%+); PV of lease payments substantially all (~90%+) of fair value; specialised asset.
- **Operating** otherwise — retain on balance sheet, recognise lease income S/L (or other systematic basis if more representative).

### Sublease
- Classify with reference to ROU asset (not underlying asset).

## FRS 102 Section 20 comparison (UK GAAP)

FRS 102 still uses finance / operating distinction for lessees. Periodic review (effective Jan 2026) brings UK GAAP closer to IFRS 16 — on-balance-sheet model for lessees with simplifications:
- No need to separate lease + non-lease components (optional expedient retained)
- Simplified reassessment triggers
- IBR determination guidance

## Disclosures (¶51–60)

### Lessee
- Depreciation by underlying asset class
- Interest expense on lease liability
- Short-term + low-value + variable expense
- Total cash outflows
- Additions to ROU assets
- Carrying amount of ROU by class
- Maturity analysis of lease liability (like IFRS 7)
- Commitments for leases not yet commenced
- Sale-and-leaseback gains/losses
- Extension / termination options — judgments on lease term
- Restoration provisions

### Lessor
- Lease income (broken between fixed + variable)
- Finance lease: net investment roll-forward + undiscounted maturity
- Operating lease: undiscounted maturity

## Common traps

- Embedded leases — power purchase agreements, outsourced IT, logistics (dedicated fleet), advertising hoardings, mobile towers.
- IT / cloud arrangements — SaaS typically NOT a lease (customer doesn't control IT infra); hosting with dedicated servers can be.
- Estate agreements with break clauses — reasonably-certain assessment is judgmental; rolling month-to-month is short-term.
- Variable rent tied to revenue — NOT in liability (expense as incurred) — can materially reduce the balance-sheet impact.
- Peppercorn / concessionary leases in public / charity sector — fair-value adjustment + deferred income treatment.
- IBR "single rate for all leases" — rarely defensible if tenors + asset types vary.
- Incentives netted against ROU rather than liability (check definition — rent-free is embedded in payments; cash reimbursement is ROU).

## Audit focus

- Completeness: ELTA (Embedded Lease Tracker Audit) — scan contracts > threshold + contract master data for lease indicators.
- Discount rate: IBR build-up documentation + sensitivity on liability.
- Lease term judgments: extension / termination option reasonably-certain tests evidenced.
- Modifications recognised at correct date + rate.
- Variable payments correctly classified.
- Cash-flow statement: principal in financing, interest in operating or financing (policy choice), short-term / low-value / variable in operating.

## Anti-patterns

- "All our leases are short-term so we elect the exemption" — 5-year office lease with no exit right isn't short-term.
- IBR set once at transition + never refreshed for new leases.
- Reassessment of lease term ignored ("we'll just fix it at next renewal").
- SaaS treated as lease to get to capitalisation (contrary to IFRIC April 2019 + March 2021 agenda decisions).
- Disclosure of weighted-average IBR without range / sensitivity.
- Dual-model lessee: pushing leases to operating exemption + on-balance-sheet selectively to manage covenants.
