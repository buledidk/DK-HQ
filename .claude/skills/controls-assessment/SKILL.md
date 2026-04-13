---
name: controls-assessment
description: Use for designing, documenting, and testing internal controls — control identification, design effectiveness (walkthroughs), operating effectiveness (sampling + re-performance), ITGCs, IT application controls, SOD, SOC 1 / 2 reliance, control deficiencies, SOX §404 testing. Auto-trigger on phrases like "control testing", "design effectiveness", "operating effectiveness", "TOC", "TOE", "walkthrough", "ITGC", "SOD matrix", "control deficiency", "significant deficiency", "material weakness", "SOC 1", "SOC 2", "entity-level control".
---

# controls-assessment

Controls testing that stands up to external audit, SOX auditors, and
regulators.

## Control hierarchy

- Entity-level controls (pervasive + precise ELCs)
- Process-level controls (manual / automated)
- IT general controls (access, change, ops, acquisition + development)
- IT application controls (input, processing, output)

## Control documentation

Every control has: ID, objective, assertion, risk, description (who/what/
when/how/evidence), type (P/D/C), nature (manual/IT-dep-manual/automated/
ELC), frequency, owner + performer, evidence location, key/non-key.

## Design effectiveness (walkthrough)

Goal: control if operated as designed would prevent/detect the risk.
Technique: walk one transaction end-to-end; observe; inspect evidence;
enquire; re-perform.

Evaluate: precision (threshold, frequency, reviewer examines underlying),
competence, authority, evidenced.

If design not effective → STOP; remediate, then re-walkthrough.

## Operating effectiveness

Sample-size framework (AICPA table):
- Many-times-per-day / transactional: 25–60
- Daily: 25–40
- Weekly: 5–15
- Monthly: 2–5
- Quarterly: 2
- Annual: 1

Adjust upward for higher reliance, higher inherent risk, manual controls,
complex judgment, deviations in design.

Automated controls + effective ITGCs: benchmarking allows test-once
reliance up to 3 years.

Evidence hierarchy: re-performance > inspection > observation > enquiry.

## ITGC testing

- Provisioning (JML timely?)
- Access reviews (quarterly? remediation?)
- Privileged access (named, monitored)
- Change management (request → approval → UAT → prod segregation)
- Emergency changes (retrospective approval + documented)
- Developer access to prod (none, or monitored)
- Backup + recovery (tested, RTO/RPO)
- Cybersecurity + incident (ISO 27001 / SOC 2)

Weak ITGCs → automated controls can't be relied on; system-generated
reports unreliable; substantive approach + likely material weakness.

## SOD matrix

Classic finance conflicts:
- Create vendor + approve invoice
- Approve invoice + release payment
- Post + approve journal
- Post + reconcile account
- User admin + process transactions
- Customer credit limit + sales-order approval
- Vendor master + bank-account change

Remove or compensate detectively with documented design.

## SOC 1 / SOC 2 reliance (ISA 402)

- Type 2 for OE
- Evaluate CPA firm
- Identify CUECs (complementary user-entity controls) + test
- Identify CSOCs (subservice); carve-out vs inclusive
- Bridge letter for period-vs-audit gap

## Deficiency evaluation (SOX / AS 2201)

Severity escalation:
- Control deficiency → significant deficiency → material weakness
- AS 2201 ¶A7–A9 factors: likelihood, magnitude, account nature,
  fraud susceptibility, cause/frequency, interaction, compensating

Material weakness indicators (AS 2201 ¶A9):
- Senior-management fraud (any amount)
- Restatement
- Material misstatement auditor-identified
- Ineffective audit-committee oversight
- Ineffective internal-audit / risk function

## Output

```
# Controls Assessment — <Entity/Process> — <Period>
## Scope + approach
## Control inventory tested (table: ID | Objective | Assertion | Type | Freq | DE | OE)
## Deficiencies (table: ID | Desc | Severity | Root cause | Compensating | Remediation)
## Overall conclusion (per assertion)
## Implications for substantive strategy
```

## Automation

- SOD detection scan over roles/permissions
- Journal-entry 100%-population rules + ML
- Access review vs AD/IAM vs HR active list
- Change-ticket reconciliation to prod code
- Stratified random sample selection (seeded, reproducible)
- Evidence-collection APIs
- Attribute testing rule engine
- Automated retest post-remediation

## Anti-patterns

- Walkthrough signed without observing the control
- Sample size chosen for convenience not risk
- Enquiry-only for key controls
- ITGC effectiveness assumed because "enterprise vendor"
- SOC 2 used for financial-reporting controls (SOC 1 is right)
- Deficiency severity negotiated rather than AS 2201-determined
