---
name: business-process-optimiser
description: Redesign and optimise end-to-end business processes across finance, risk, operations, commercial, HR, procurement, and IT — with target operating model, capacity model, control redesign, automation road-map, and benefits tracking. Fires on keywords process optimisation, TOM, target operating model, BPO, business process, Lean, Six Sigma, DMAIC, value stream, cycle time, SLA, capacity model, RACI, swim-lane, operating model, shared service, outsourcing, offshore, nearshore, automation road-map, BPR.
---

# Business Process Optimiser

End-to-end redesign of how work gets done. Covers current-state analysis, root-cause, target operating model design, automation, controls, and benefits realisation.

## When to use

- Cost-out / transformation programme > 10% of BU cost base.
- Post-M&A integration / carve-out.
- Shared services / GBS stand-up.
- Process broken (SLA miss, control fail, regulatory finding).
- Pre-automation scoping (avoid "automating the mess").
- Board asks "can we do this faster / cheaper / safer?".

## Methodology choice

| Method | Best for | Typical result |
|---|---|---|
| **Lean** | Flow + waste elimination | 20-40% cycle-time reduction |
| **Six Sigma / DMAIC** | Quality / error rate | Defect rate drops 1 σ-level |
| **BPR (re-engineering)** | Radical redesign | 30-60% cost reduction with system replacement |
| **Process mining** | Large transactional processes with event logs | Variant visibility + surgical targeting |
| **Design thinking / outcome-first** | Customer journey | UX / NPS uplift |

Typically you combine: mining discovers, Lean fixes flow, DMAIC stabilises, BPR when system replacement anyway.

## 8-step optimisation playbook

### Step 1 — Scope + sponsor
- Process boundaries (start trigger → end output).
- Sponsor (budget owner, will defend change).
- Success metrics: cycle time, cost, error rate, FTE, customer NPS.
- Baseline freeze date.

### Step 2 — Current state (AS-IS)
- Swim-lane diagram (BPMN 2.0) with actors × systems × handoffs.
- Volumetrics: cases/day, handle time, queue time, wait time.
- Event-log pull if available; otherwise shadowing / timekeeping sample.
- Control points catalogue (SOX / regulatory).
- Pain-point heat map with dollar impact.

### Step 3 — Root cause (fishbone / 5-whys / Pareto)
- 6-M fishbone: Man, Machine, Method, Material, Measurement, Mother Nature.
- Pareto: top 20% of drivers = 80% of waste.
- Distinguish symptoms (long cycle time) from causes (manual reconciliation, rework loops).

### Step 4 — Target operating model (TO-BE)
The TOM canvas:
1. **Customer** (internal / external) + outcome
2. **Processes** (re-drawn swim-lanes)
3. **Organisation** (roles, spans, locations)
4. **Technology** (systems + data + integrations)
5. **Data** (source of truth, data quality rules)
6. **Governance** (RACI, decision rights, escalation)
7. **Performance** (KPIs, SLAs, reporting)
8. **Sourcing** (in-house / shared service / outsource / offshore / nearshore)

### Step 5 — Automation road-map
Decision tree for each process step:

```
Step rule-based? ──no── Human judgement needed
     │
     yes
     │
 Volume > threshold? ──no── Tolerate (don't over-engineer)
     │
     yes
     │
 System API? ──yes── API integration
     │
     no
     │
 Screen-level? ──yes── RPA (UiPath / Blue Prism / Power Automate)
     │
     no
     │
 Document-heavy? ──yes── IDP (Intelligent Doc Processing) + RPA
     │
     no
     │
 Judgement-boundary? ──yes── AI copilot / LLM with HITL
```

### Step 6 — Controls redesign
Automation ≠ control removal. Every new process step needs:
- Preventive control (e.g., 4-way match).
- Detective control (e.g., exception report with SLA).
- Monitoring control (KPI dashboard).
- Evidence trail (system of record timestamp).

SOX / regulatory controls preserved, not deleted.

### Step 7 — Transition plan
- Change management: stakeholder map + ADKAR assessment + training plan.
- Pilot → scale → full cutover.
- Dual-run period (old vs new) with reconciliation.
- Risk register + contingency.
- TUPE / works council for headcount change (UK + EU).

### Step 8 — Benefits realisation
- Baseline locked (Step 1).
- Benefits tracker: FTE, £, cycle time, error %, NPS.
- Claw-back discipline: if savings don't show in P&L within 6 months, challenge.
- Post-implementation review (6 + 12 months).
- Sustain plan: control plan, SPC, ongoing KPIs.

## Capacity model essentials

For any process you want to size / re-size:

- **Demand** = transactions per period × variability (seasonality, day-of-week).
- **Handle time** = mean + distribution (95th percentile for SLA sizing).
- **Utilisation** = 70-80% (never 100% — queues explode).
- **FTE** = (demand × handle time) ÷ (productive hours × utilisation).
- **Shrinkage** (holidays, training, meetings, breaks) = 20-30%.
- **Buffer** for variance.

Test against real volumes + skill mix, not averages.

## Cross-sector process hot-spots (quick targeting)

| Sector | High-value processes |
|---|---|
| Banking | KYC onboarding, reconciliations, regulatory reporting (COREP / FINREP), AML alert handling, mortgage underwriting |
| Insurance | Claims FNOL-to-settle, underwriting referrals, renewals, regulatory reporting (SII) |
| Asset Mgmt | NAV strike, trade settlement exceptions, corporate actions, KYB for funds, MIFIDPRU reporting |
| Fintech | Payment reconciliation, chargebacks, fraud alert, merchant onboarding |
| Industrials | Order-to-cash, procure-to-pay, inventory management, warranty claims |
| Retail | Store labour scheduling, demand forecasting, returns, supplier receipts |
| Healthcare | Prior authorisation, revenue cycle, clinical documentation, supply chain |
| Tech / SaaS | Customer onboarding, usage-based billing, subscription renewals, incident response |
| Utilities | Meter-to-cash, outage response, regulatory filings |
| Real Estate | Lease admin, service charge reconciliation, valuation updates |

## Shared service + outsourcing sizing

| Lever | Typical saving | Risk |
|---|---|---|
| Onshore GBS consolidation | 15-25% | Change friction |
| Nearshore (e.g., Portugal / Poland from UK) | 30-40% | Language, time-zone |
| Offshore (India / Philippines) | 50-70% | Controls, regulator reliance, data residency |
| Outsource BPO | similar to offshore + risk transfer | Vendor lock-in, control embedding |
| Automation | 40-80% on scope | Implementation cost, maintenance |

Combine: offshore baseline + automate atop = compounded saving, but plan one step at a time.

## Deliverables

- Current-state swim-lane + volumetrics.
- Root-cause analysis.
- TOM canvas (8 domains).
- Automation road-map + business case.
- Control redesign matrix.
- Transition plan + RACI.
- Capacity model (spreadsheet).
- Benefits tracker.
- Post-implementation review.

## Anti-patterns

- Automating without redesigning → cemented waste.
- Cost-out plan with no headcount trajectory → saving doesn't materialise.
- Removing controls for speed → regulatory / audit breach.
- Shared service set up with legacy system → extract-transform-rekey nightmare.
- Process mining treated as a tool, not a method → dashboards no-one uses.
- Benefits un-owned by a business P&L → claim evaporates.

## Standards + references

ISO 9001 (quality management), Lean Six Sigma bodies of knowledge, APQC PCF (process classification framework), BPMN 2.0, COSO 2013 + COSO ERM 2017 for control redesign, FRC Corporate Governance Code for process governance.
