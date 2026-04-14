---
name: itgc-soc-cyber-audit
description: Use for IT general controls (ITGC), IT application controls (ITAC), cyber + IT-risk audit, service-organisation reporting under ISAE 3402 / SSAE 18 (SOC 1) + SOC 2 (Trust Services Criteria), segregation of duties (SoD), privileged access management (PAM), change + release management, backup + disaster recovery, and SOX §404 IT controls. Covers COBIT 2019, NIST CSF + 800-53, ISO 27001, CIS Controls, Cloud Security Alliance CCM, FCA operational-resilience (SYSC 15A + PS21/3), DORA (EU), PRA SS2/21. Auto-trigger on phrases like "ITGC", "IT general controls", "ITAC", "IT application controls", "SOC 1", "SOC 2", "ISAE 3402", "SSAE 18", "bridging letter", "CUEC", "complementary user entity controls", "privileged access", "PAM", "change management", "segregation of duties", "SoD matrix", "cyber audit", "DORA", "operational resilience", "SYSC 15A", "SOX ITGC", "COBIT", "NIST CSF", "ISO 27001", "CIS Controls".
---

# itgc-soc-cyber-audit

Deep-dive for IT + cyber audit — ITGC / ITAC testing, SOC reliance + issuance, cyber-risk assessment, operational resilience. Chains from `controls-assessment`, `risk-assessment`, `risk-control-governance`.

## IT control taxonomy

| Layer | Controls | Owner |
|---|---|---|
| **ITGC** — IT general | Access mgmt, change mgmt, ops, dev | IT function |
| **ITAC** — application | Input / process / output / master-data | Business + IT |
| **ELC IT** — entity-level | IT strategy, governance, risk mgmt, policies | CIO + CISO + ExCo |

ITGC supports reliance on ITAC. Weak ITGC = cannot rely on ITAC = substantive + CAAT testing or non-reliance approach.

## ITGC domains (COBIT 2019 mapping)

### Access management
- User provisioning + deprovisioning (joiners / movers / leavers).
- Privileged access management (PAM) — admin account inventory + approval + session recording + rotation.
- Authentication — MFA for privileged + remote + sensitive, password policy, SSO.
- Segregation of Duties (SoD) — user-to-role-to-permission design + violation detection.
- User access review (UAR) — periodic recertification + remediation.
- Role-based access control (RBAC) + least privilege.

### Change management
- Change request → approval → testing → deployment → post-implementation review.
- Segregation between developer + tester + deployer (can't be same person in prod).
- Emergency-change procedure (retrospective approval).
- Source-code control + versioning.
- Release management + production-promotion gate.

### Computer operations
- Job scheduling + monitoring + exception handling.
- Backup + restoration testing (regular).
- Incident + problem management.
- Capacity management.
- Batch processing integrity.

### Development + security
- SDLC phases + gates.
- Vulnerability management + patching.
- Security configuration + hardening standards.
- Data protection — encryption at rest + in transit; key management.
- Logging + SIEM + monitoring.

## ITAC types

- **Input** — edit checks, validation, range checks, mandatory fields, reasonableness.
- **Processing** — calculation accuracy, completeness of transactions, interfaces integrity.
- **Output** — distribution controls, reconciliation of outputs to inputs, reporting accuracy.
- **Master-data** — reference data maintenance controls, customer/supplier/employee master.

## Testing approach

### Design effectiveness
- Walkthrough with control owner + evidence inspection.
- End-to-end trace of one transaction / change / access event.
- Document control objective, risk, activity, evidence, frequency.

### Operating effectiveness
- Sample selection from population (IPE — information produced by entity — completeness + accuracy).
- Frequency-based sample size:
  - Daily / multiple times per day: 25
  - Weekly: 5
  - Monthly: 2
  - Quarterly: 2
  - Annual: 1
- Test attributes + evidence inspection.
- Exception handling + re-evaluation.

## Service-organisation reporting

### SOC 1 (ISAE 3402 / SSAE 18) — ICFR relevance

- For user entities whose FS-relevant processes are outsourced (payroll, custody, SaaS accounting, fund admin, cloud hosting).
- Type 1 — design at point in time.
- Type 2 — design + operating effectiveness over period (≥6 months typical).
- Complementary User Entity Controls (CUECs) — user entity must operate to make service organisation's controls effective.
- Bridging letter — service organisation confirms no material change between SOC report period end + user entity period end.

### SOC 2 — operational (not ICFR)

Trust Services Criteria (TSC):
- **Security** (mandatory) — common criteria.
- **Availability**.
- **Confidentiality**.
- **Processing Integrity**.
- **Privacy**.

Covers: SaaS, cloud infra, data-centre, managed services. Used for customer / regulator assurance, not financial-reporting reliance.

### User entity responsibilities

- Identify all service providers.
- Obtain current SOC 1 or SOC 2 report.
- Review scope + opinion (qualified? + bridging-letter gap).
- Map CUECs to internal controls + test they operate.
- Period coverage — period gap analysis.

## Cyber-risk audit

### Frameworks

- **NIST CSF 2.0** — Govern, Identify, Protect, Detect, Respond, Recover.
- **ISO 27001:2022** — Annex A 93 controls (organisational, people, physical, technological).
- **CIS Controls v8** — 18 safeguards.
- **Cloud Security Alliance CCM** — cloud-specific.

### Assessment approach

1. Business-process-to-asset mapping (crown-jewel analysis).
2. Threat modelling (STRIDE / MITRE ATT&CK).
3. Control-maturity assessment (per framework).
4. Penetration test + red team.
5. Vulnerability scan + attack-surface management.
6. Phishing + social engineering test.
7. Incident-response tabletop + live exercise.
8. Third-party risk (supply chain — Kaseya, SolarWinds-style exposure).

### Key cyber controls

- MFA everywhere (priority: admin + remote + sensitive apps).
- Privileged access + just-in-time (JIT) elevation.
- Endpoint detection + response (EDR).
- Network segmentation (micro-segmentation in high-value zones).
- Data-loss prevention (DLP) + classification.
- Vulnerability management SLA (critical patch ≤14 days, high ≤30 days).
- Backup immutability + offline copy (ransomware resilience).
- Incident-response plan + forensic retainer.
- Cyber-insurance — policy reviewed + exclusions understood.

## Operational resilience (UK + EU)

### UK — FCA SYSC 15A + PRA SS1/21 + SS2/21

- Identify **important business services (IBS)**.
- Set **impact tolerances** — maximum tolerable disruption.
- Map IBS to people / processes / tech / facilities / third parties.
- Scenario testing — severe-but-plausible, must recover within impact tolerance.
- Self-assessment annually; BoD signs off.
- 31 March 2025 — full operational-resilience compliance.

### EU — DORA (effective 17 Jan 2025)

- ICT risk management framework.
- ICT-related incident reporting (major incidents — within 4 hours classification + 24 hours initial).
- Digital operational resilience testing — TLPT every 3 years for significant entities.
- Third-party ICT risk — register, contractual requirements, concentration risk, critical ICT providers direct-oversight regime.
- Information-sharing arrangements.

## SOX §404 IT controls

- Documented in matrix (PCAOB AS 2201).
- Tested both design + operating effectiveness.
- Deficiencies: deficiency → significant deficiency → material weakness, assessed on likelihood + magnitude.
- ITGC weakness typically escalates ITAC reliance decision.
- Remediation tracking + ongoing monitoring.

## Audit procedures

### Access management testing
- New hire sample: provision timely? right role? approved?
- Leaver sample: deprovisioned within policy (e.g. same day for privileged, 24h standard)?
- Periodic UAR sample: evidence of review + remediation of exceptions.
- SoD conflict matrix + violation report + approvals.

### Change management testing
- Change sample: approval prior to deployment? testing evidence? rollback plan?
- Emergency change sample: retrospective approval timely?
- Source-code integrity: version control logs + production-promotion segregation.

### Operations
- Backup restoration test log — frequency + success.
- Incident log sample — categorisation + RCA + remediation.

## Anti-patterns

- Treating SOC 1 Type 2 report as blanket reliance without CUEC mapping.
- Using SOC 2 for ICFR reliance (wrong framework — needs SOC 1).
- ITGC test results applied to ITAC without operating-effectiveness link analysis.
- UAR sign-off without evidence of remediation of exceptions found.
- SoD matrix exists but violations not reported + no approval for exceptions.
- Cyber assessment as compliance tick-box without threat modelling / red-team challenge.
- Operational-resilience IBS identification by IT not by business — wrong owner.
- DORA ICT third-party register built once + not maintained with new vendor on-boarding.
- Privileged-access accounts shared between admins (no individual accountability).
- Change management in DevOps / CI-CD without segregation — code-author deploys to prod.

## Deliverables

- ITGC / ITAC matrix + test results + exceptions + remediation.
- SOC-reliance memo (report scope, CUEC mapping, gap analysis, bridging).
- Cyber-maturity assessment (NIST CSF / ISO 27001) — current-state + target + roadmap.
- Penetration / red-team report + remediation plan.
- Operational-resilience self-assessment (UK) or ICT-risk report (DORA EU).
- SOX IT-deficiency schedule + classification.
