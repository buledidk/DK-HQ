---
name: risk-control-governance
description: Use for enterprise risk management, internal controls, and corporate governance work — designing frameworks, running RCSAs, testing controls (design + operating effectiveness), SOX §404 ICFR, COSO ERM / Internal Control, Three Lines Model, UK Corporate Governance Code, board / audit-committee reporting, issue + remediation management. Auto-trigger on phrases like "risk register", "RCSA", "key risk indicator", "KRI", "control testing", "design effectiveness", "operating effectiveness", "SOX", "ICFR", "COSO", "three lines", "audit committee pack", "governance", "remediation".
---

# risk-control-governance

Enterprise risk, controls, and governance — end to end, framework-anchored.

## Frameworks

| Framework | Use |
|-----------|-----|
| **COSO ERM 2017** | Risk appetite, profile, portfolio view |
| **COSO IC-IF 2013** | 17 principles across 5 components (CE, RA, CA, IC, MA) |
| **IIA Three Lines (2020)** | mgmt (1), risk+compliance (2), internal audit (3) |
| **UK Corp Gov Code 2024** | Board, audit+risk committees, Provision 29 |
| **FRC Guidance** | Practical UK board-level |
| **SOX §404 + AS 2201** | ICFR design + operating effectiveness, mgmt + auditor |
| **ISO 31000:2018** | Principles-based risk mgmt |
| **ISO 27001 / 27002** | InfoSec controls |
| **NIST CSF 2.0** | Cyber governance |
| **Basel BCBS 239** | Risk data aggregation (G-SIBs/D-SIBs) |
| **Op Resilience** (PS21/3, DORA) | IBSs, impact tolerances, scenarios |

## Risk taxonomy

```
Strategic    — business model, competitive, M&A, ESG, climate
Financial    — credit, market, liquidity, capital, funding
Operational  — process, people, systems, fraud, third-party, change
Compliance   — regulatory, legal, tax, AML/sanctions, conduct
Technology   — cyber, data, resilience, obsolescence, AI/model
Reputational — customer, brand, media, social, activist
People+culture — conduct, D&I, wellbeing, skills, succession
Climate+ESG  — transition, physical, greenwashing, supply chain
```

## Operating rhythm

1. RAS (Risk Appetite Statement) — board-approved, quant + qual, linked to strategy + KPIs
2. Top-down risk identification — horizon scan + board/exec workshops
3. Bottom-up RCSA — BU workshops, inherent / control strength / residual, 1LoD sign-off
4. Emerging-risk radar (quarterly)
5. KRI framework — leading indicators, RAG thresholds, escalation paths
6. Control inventory — ID, objective, type, frequency, owner, evidence, last-test, result
7. Control testing cycle — DE → OE (AICPA sample sizes)
8. Issues + remediation — rated, owner, target date, root-cause, compensating, validation
9. Board/audit-committee reporting — risk profile, heatmap, top issues, KRI+RAS breaches, emerging, regulatory landscape, internal-audit plan + findings
10. Annual attestation / ICFR opinion (SOX 302/404)

## Framework from scratch (9 steps)

1. Charter (mandate, scope, 1/2/3 LoD roles, delegated authorities)
2. Risk taxonomy (adopt + tailor)
3. Risk appetite (enterprise + BU cascade)
4. Assessment method (heat-map vs quantitative — VaR, Monte Carlo, FAIR for cyber)
5. Control library (ELCs, process-level, ITGCs, ITACs)
6. Policies + standards (Policy → Standard → Procedure → Work Instruction)
7. Technology (ServiceNow GRC, Archer, Workiva, LogicGate, MetricStream, or custom)
8. Assurance map (1/2/3 LoD + external + regulator; gaps + overlaps)
9. KPIs for RCG itself (control-testing on-time %, issue aging, RAS breaches, KRI triggers, RCSA completion)

## SOX ICFR — automation-friendly

- Scoping: materiality (15% PBT, 5% rev, 5% assets)
- RMM per assertion per significant account
- Map to controls — automated preferred
- Testing strategy — benchmarking automated controls (test once, rely up to 3 years if ITGCs effective)
- Deficiency evaluation (AS 2201 ¶A7–A9)
- Quarterly 302 sub-certifications; annual 404 management + auditor

## Automation playbook

| Area | Automation |
|------|-----------|
| RCSA | Workflow + scoring engine → heat-map |
| KRI | Live data feeds + threshold alerting |
| Control testing | Evidence pull-down, attribute-test scripts, sample selection, exception capture |
| ITGC | Automated access reviews, change-ticket reconciliation, privileged-access monitoring |
| Issue mgmt | Jira/ServiceNow, SLA clock, auto-escalation |
| Reporting | Pre-rendered board packs, regulator filings |
| Policy mgmt | Attestation, training tracking, policy-diff |
| Third-party risk | Onboarding questionnaire → risk rating → continuous monitoring (SOC 2, sanctions, adverse media) |

## Anti-patterns

- Heat-maps without calibrated scales (a "4" in one BU ≠ "4" in another)
- RCSAs never challenged by 2LoD
- Control libraries bloated with >10 controls per risk
- SOX scope that never contracts as processes mature
- Board packs averaging >150 pages
- KRIs that only go red after the event
