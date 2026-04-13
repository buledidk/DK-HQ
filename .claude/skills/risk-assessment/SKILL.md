---
name: risk-assessment
description: Use for entity-level and audit risk assessment under ISA 315 (revised) and ISA 240 — understanding the entity, business model, IT environment, inherent risk factors (complexity / subjectivity / change / uncertainty / management-bias), assertion-level risk of material misstatement (RoMM), significant risks, fraud-risk factors, identifying risks of management override, and linking assessed risks to audit response (ISA 330). Auto-trigger on phrases like "risk assessment", "ISA 315", "inherent risk", "RoMM", "significant risk", "fraud risk", "management override", "walkthrough", "business understanding".
---

# risk-assessment

Audit-grade risk-assessment skill aligned with ISA 315 (revised) and ISA 240.

## Building blocks

### 1. Understand the entity + environment
Business model, industry + regulatory, ownership + governance, objectives
+ strategies, measurement + review metrics, financial performance.

### 2. Understand internal control — 5 components (ISA 315 App 3)
Control environment, entity-level risk-assessment process, information
system (incl. IT), control activities, monitoring.

### 3. IT environment
IT applications in scope, relevant data, ITGCs (access / change / ops /
acquisition), risks arising from use of IT (RAFIT).

### 4. Significant CoTABDs — relevant assertions + inherent risk factors
Assertions: Existence, Completeness, Accuracy+Cut-off, Valuation/
Allocation, Rights/Obligations, Presentation.

Inherent risk factors:
- Complexity (derivatives, leases, revenue multi-obligation)
- Subjectivity (FV, impairment, warranty)
- Change (new standard, new system, M&A)
- Uncertainty (litigation, going concern)
- Susceptibility to bias / fraud (revenue, reserves)

Inherent risk rating: Low / Moderate / High / Significant.
RoMM = inherent × control.

### 5. Significant risks
Mandatory presumed:
- Revenue recognition (ISA 240 ¶26) — rebut only with documented rationale
- Management override of controls (ISA 240 ¶31) — always present

Require: control design + implementation evaluation; substantive
procedures; no reliance on prior-period evidence alone; documented response.

### 6. Fraud risk (ISA 240)
Team discussion documented. Fraud risk factors:
- Incentives / pressures (covenants, bonus, CEO ego)
- Opportunities (weak controls, RP transactions, overseas ops)
- Rationalisations ("industry norm")

Mandatory procedures:
- Journal-entry testing (see `journal-entry-testing`)
- Estimate-bias review
- Significant-transaction evaluation outside normal course

### 7. Stand-back (ISA 315 ¶35)
After risk identification, stand back: have I identified all significant
areas? Are assessments discriminating? Are fraud + significant risks
captured? Does the population drive a coherent response?

## Workflow

1. Gather inputs (PY file, TB, mgmt accounts, board papers, strategy)
2. Walkthroughs (one per significant CoTABD)
3. Risk workshop (ISA 240 + ISA 315 discussion — document)
4. Risk register: CoTABD | Assertion | IR factor | IR | CR | RoMM |
   Significant? | Fraud? | Planned response | ISA link
5. Stand-back peer review
6. Finalise + feed into ISA 330 response

## Automation hooks

- Entity profile: Companies House + regulator + analyst feed
- Walkthrough: transcript → narrative → flow-chart
- Industry risk library keyed by NAICS/SIC/ICB
- 100% journal-entry analytics (ISA 240 ¶32)
- Fraud brainstorm: facilitated template + industry prompts
- Stand-back: quantitative discriminating-enough test

## Anti-patterns

- All RoMMs "moderate" — not discriminating
- Fraud discussion not documented
- Revenue rebutted without evidence
- Management-override procedures skipped
- ITGCs not understood but automated controls relied upon
- Walkthroughs refreshed from PY without confirming unchanged
