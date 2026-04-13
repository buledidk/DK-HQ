---
name: uk-compliance-review
description: Use when the user is writing or changing code that touches regulated data flows — PII, client money, audit trail, Supabase schemas, Companies House / HMRC integrations, FCA handbook references, ISA procedures, FRS disclosures, or Consumer Duty. Auto-trigger on files matching src/RegulatoryData.js, src/StandardsLibrary.js, src/AuditMethodology.js, src/FRSEncyclopaedia.js, migrations/**, database/**, or when the user mentions "GDPR", "AML", "sanctions", "CASS", "MiFID", "ISA", "FRS", "Companies Act", "FCA".
---

# uk-compliance-review

A compliance lens applied to code changes in the buledidk UK audit stack.

## Coverage

| Regime | Focus | Key refs |
|--------|-------|---------|
| **ISA (UK)** 200–810 | Audit procedures, documentation, risk | ISA 200, 240, 315, 330, 500, 540, 570, 600, 700 |
| **ISQM 1 & 2** | Firm + engagement quality | ISQM 1 §16-57, ISQM 2 |
| **FCA Handbook** | PRIN, SYSC, CASS, MIFIDPRU, Consumer Duty | PS22/9, SYSC 4, CASS 6/7 |
| **FRS 100–105** | UK GAAP incl. 2026 amendments | FRS 102 §§1–35 |
| **Companies Act 2006** | 62 refs across audit-engine | s.495, s.496, s.498 |
| **GDPR / UK DPA 2018** | Lawful basis, retention, rights | Art. 5, 6, 17, 32 |
| **AML / MLR 2017** | CDD, EDD, PEP, SAR | Reg. 28, 33, 35 |
| **Bribery Act 2010** | Adequate procedures | s.7 |
| **Modern Slavery Act 2015** | Statement, due diligence | s.54 |
| **Sanctions (OFSI)** | Screening, reporting | UK Financial Sanctions |

## Checks

### 1. PII / client data
Search for: name, email, phone, NI, passport, DoB, address, account, sort code,
balance, transaction amount. Confirm not logged, not in errors, not in analytics.
If stored: encrypted at rest, TLS in transit, RLS policy present.

### 2. Audit trail (ISA 230 / 500)
Every state-change writes `audit_trail`: who, what, when, before, after, correlation-id.
Evidence has immutable hash.

### 3. ISA procedure integrity
Changes to `AuditMethodology.js` / `StandardsLibrary.js` must cite paragraph
(e.g. "ISA 540 ¶13(c)"). Risk-response linkage (ISA 315 → 330) unbroken.
Estimation uncertainty (ISA 540) needs low/high/reasonable range.

### 4. FRS disclosures
FRS 102 §1A exemptions only if small-company test satisfied.
FRS 102 §3.3 GC disclosure required.
2026 amendments active for periods from 1 Jan 2026.

### 5. FCA obligations
**CASS**: client money → CASS 7 reconciliation + audit evidence.
**Consumer Duty**: customer-outcome changes need fair-value rationale.
**SYSC 4**: governance decisions need documented rationale.

### 6. Data subject rights (GDPR 15–22)
Access endpoint; deletion endpoint with audit; consent UI where basis is consent.

### 7. AML red-flags
Payments/onboarding hit sanctions screening. PEP screening for UK/EEA. SAR
not bypassable by admin overrides.

## Output

Compliance checklist grouped by regime, PASS/FAIL/N/A with file:line refs.
FAIL → suggest specific standard paragraph for fix.

Do NOT rewrite code silently. Fixes need user sign-off.
