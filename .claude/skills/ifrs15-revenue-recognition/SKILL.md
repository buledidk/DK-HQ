---
name: ifrs15-revenue-recognition
description: Use for revenue recognition under IFRS 15 (Revenue from Contracts with Customers) and ASC 606 (US GAAP equivalent) — the 5-step model, performance obligation identification, transaction-price allocation, variable consideration + constraint, significant financing component, principal vs agent, licences, contract costs (capitalisation + amortisation), contract modifications, disclosures, and industry-specific application (SaaS, telco, construction, retail, real-estate, asset management performance fees). Auto-trigger on phrases like "IFRS 15", "ASC 606", "revenue recognition", "five-step model", "performance obligation", "SSP", "standalone selling price", "variable consideration", "constraint", "principal vs agent", "over time vs point in time", "contract asset", "contract liability", "deferred revenue", "percentage of completion", "POC", "SaaS revenue", "licence revenue".
---

# ifrs15-revenue-recognition

Deep-dive skill for revenue technical accounting. Chains from `disclosure-review`, `accounting-judgments-estimates`, sector skills.

## 5-step model

1. **Identify the contract** — approved, rights identifiable, payment terms identifiable, commercial substance, collectibility probable.
2. **Identify performance obligations** — distinct (capable of being distinct + distinct in context of contract). Series guidance (B18). Bundle vs unbundle test.
3. **Determine transaction price** — fixed + variable (estimate) + constraint + significant financing + non-cash + consideration payable to customer.
4. **Allocate transaction price to POs** — relative standalone selling price (SSP). Allocation of discounts + variable consideration (¶85 exceptions).
5. **Recognise revenue** — over time (¶35: customer simultaneously receives + consumes, or asset with no alternative use + enforceable right to payment, or customer controls asset as created) or point in time. Measure progress — input or output method.

## Key judgments

### Distinct POs
- Separately identifiable in context of contract (integration, modification, high interdependence).
- Common examples: SaaS (platform + implementation; distinction question); telco (handset + service; often distinct); construction (project often one PO).

### Variable consideration
- Methods: expected value OR most likely amount — consistent application.
- Constraint (¶56–58): include only to extent "highly probable" no significant reversal when uncertainty resolved. Factors: experience with similar contracts, range of outcomes, resolution timing, market + regulatory environment.

### Significant financing component
- Implicit financing when >12 months between transfer + payment and interest rate would be material.
- Practical expedient for periods ≤12 months (¶63).

### Principal vs agent (¶B34–B38)
- Control indicators: primary responsibility, inventory risk, pricing discretion.
- Not determinative: exposure to credit risk alone, form of consideration.

### Licences (¶B52–B63)
- Right to use (point in time) vs right to access (over time).
- Sales-based / usage-based royalty exception — recognise as underlying sales / usage occurs OR PO satisfied, whichever later.

## Contract costs (¶91–104)

- **Costs to obtain** — incremental (sales commissions); capitalise unless amortisation period ≤1 year (practical expedient).
- **Costs to fulfil** — within scope of another standard first (IAS 2, 16, 38); otherwise capitalise if meet 3 criteria (relate directly, generate / enhance resources, expected to be recovered).
- Amortise on systematic basis consistent with pattern of transfer.
- Impairment test each period.

## Contract modifications (¶18–21)

- Separate contract — distinct goods/services + price reflects SSP.
- Termination + new contract — remaining POs distinct.
- Cumulative catch-up — remaining POs not distinct.

## Disclosures (¶110–129)

- Disaggregation (¶114) — by primary geographical market, major product line, timing (over time vs point in time), contract type.
- Contract balances — opening + closing receivables, contract assets, contract liabilities; revenue recognised in period from prior-period contract liability; revenue from prior-period POs.
- Performance obligations — when typically satisfied, significant payment terms, nature (principal / agent), warranties, returns.
- Transaction price allocated to remaining POs — quantitative + expected timing; practical expedients (¶121).
- Significant judgments — timing of satisfaction, determining + allocating transaction price.

## Common sector applications

### SaaS / software
- Implementation services: distinct if can be provided by third party without major rework.
- Term licences: often point in time at go-live (right to use); SaaS hosting usually over time.
- Set-up fees: usually not distinct — deferred + recognised over expected customer life.
- Usage-based pricing: allocation to distinct service periods; royalty exception.

### Telco
- Handset + service bundle: handset is usually distinct; allocate based on SSP; recognise handset at point in time, service over time.
- Subsidised device creates contract asset.

### Construction / long-term contracts
- Usually one PO (highly interrelated); over time recognition (¶35(c) — no alternative use + enforceable right to payment).
- Input method (cost-to-cost) most common; output method where reliably measurable.
- Uninstalled materials (¶B19) — zero margin if significant.
- Loss contracts — provision (IAS 37) recognised fully when probable.

### Retail
- Returns: refund liability + right-of-return asset; estimate using most likely / expected value.
- Loyalty programmes: material right = separate PO.
- Gift cards: breakage — recognise proportionally to redemption pattern.

### Real estate
- Sale of apartment pre-completion: ¶35 analysis — no alternative use? enforceable right to payment for work-to-date? If yes → over time.

### Asset management performance fees
- Variable consideration + constraint — include only amount highly probable no significant reversal at period end.
- Typically recognise over time as services rendered; crystallisation event often releases constraint.

## Audit focus (links to `audit-evidence-sampling` + `accounting-judgments-estimates`)

- PO identification: sample contracts, re-perform distinct analysis.
- Variable consideration: management's estimation + constraint application.
- Cut-off: POs satisfied before vs after year-end.
- Contract modifications — retrospective re-allocation vs prospective.
- SSP estimation methods (adjusted market, expected cost plus margin, residual) — residual only when not observable.
- Significant financing component (IFRS 15 vs IFRS 9 interaction).

## Anti-patterns

- Boilerplate policy quoting the standard verbatim without entity application.
- Aggregating POs for convenience despite them being distinct.
- Accruing variable consideration without applying the constraint.
- Capitalising every sales commission without amortisation period analysis.
- Treating every licence as "right to access" to push to over time (higher revenue in early periods).
- Cost-to-cost POC without excluding uninstalled materials (¶B19).
- Loyalty programme liability measured at incremental cost instead of SSP (wrong — IFRS 15 uses transaction-price allocation).
