---
name: audit-workpaper-engine
description: Generate ISA-compliant audit workpapers, risk assessments, materiality calculations, analytical procedures, and audit conclusions as polished documents. Trigger whenever the user mentions audit workpapers, ISA standards, materiality, risk assessment, analytical review, going concern, audit opinions, planning memos, completion memos, control testing, or any statutory audit documentation. Also trigger for casual phrasing like "write up the risk assessment", "document the testing", "prepare the audit file". Covers UK statutory audit (FRS 102, Companies Act 2006), IFRS, ISA (UK), SOX/ICFR documentation, internal audit workpapers, and financial controls testing.
---

# Audit Workpaper Engine

Generate professional, ISA-compliant audit workpapers and documentation that are ready for review and sign-off. All outputs use generic demo entities only (never real client or firm names).

## Core Principles

1. **ISA Compliance First**: Every workpaper references the specific ISA standard it addresses (e.g. ISA 315 for risk assessment, ISA 320 for materiality, ISA 520 for analytical procedures). Include the standard reference in the document header.

2. **Professional Judgement Trail**: Audit documentation exists to evidence professional judgement. Every conclusion must have a clear "because" — the reasoning chain from evidence to conclusion must be explicit and traceable.

3. **Generic Entities Only**: Use "Indus Nexus Limited" as the primary demo entity and "ABC Company" as the secondary fallback. Never use real client names, firm names, or any identifying information from actual engagements.

4. **UK Statutory Audit Default**: Unless specified otherwise, assume UK statutory audit under FRS 102 / Companies Act 2006 / ISA (UK). Adapt for IFRS or US GAAP only when explicitly requested.

5. **No Setup Required**: All outputs must be usable immediately — no developer knowledge, no configuration, no dependencies. Deliver as .docx, .xlsx, or rendered React/.html artifacts.

## Workpaper Types

When the user requests audit documentation, identify which workpaper type they need and follow the corresponding template structure below. If ambiguous, ask which type — but default to the most likely match based on context.

### 1. Planning & Materiality (ISA 300, ISA 320)

**Trigger phrases**: "materiality calculation", "planning memo", "audit strategy", "overall materiality", "performance materiality", "trivial threshold"

**Structure**:
```
HEADER: [Entity] | [Period End] | ISA 300/320 | Prepared by: [Initials] | Date: [Date]
─────────────────────────────────────────────────────────
1. ENGAGEMENT OVERVIEW
   - Entity background (nature, size, industry, ownership)
   - Reporting framework (FRS 102 / IFRS / other)
   - Statutory requirements (Companies Act 2006 s.495-497)

2. MATERIALITY DETERMINATION
   - Benchmark selected (revenue / total assets / PBT / net assets)
   - Justification for benchmark choice
   - Percentage applied with reasoning
   - Overall materiality calculation
   - Performance materiality (typically 60-85% of overall)
   - Clearly trivial threshold (typically 5% of overall)
   - Prior year comparison

3. KEY AUDIT MATTERS
   - Significant risks identified at planning
   - Areas requiring special audit consideration
   - Related party considerations

4. AUDIT APPROACH
   - Combined / substantive approach rationale
   - Reliance on controls (if any)
   - Group audit considerations (if applicable)

5. CONCLUSION
   - Sign-off: Prepared by / Reviewed by / Date
```

### 2. Risk Assessment (ISA 315 Revised)

**Trigger phrases**: "risk assessment", "risk matrix", "significant risk", "risk of material misstatement", "inherent risk", "control risk"

**Structure**:
```
HEADER: [Entity] | [Period End] | ISA 315 (Revised) | Prepared by: [Initials] | Date: [Date]
─────────────────────────────────────────────────────────
1. UNDERSTANDING THE ENTITY
   - Industry and regulatory environment
   - Nature of the entity (ownership, governance, structure)
   - Accounting policies and objectives
   - Performance measures and review

2. INTERNAL CONTROL ENVIRONMENT
   - Control environment assessment
   - Risk assessment process
   - Information system and communication
   - Control activities
   - Monitoring of controls

3. RISK IDENTIFICATION
   For each financial statement area:
   - Assertion level risks (existence, completeness, accuracy, valuation, classification, cut-off, rights & obligations)
   - Inherent risk assessment (High / Medium / Low) with rationale
   - Control risk assessment (High / Medium / Low) with rationale
   - Combined risk of material misstatement
   - Significant risk designation (Yes/No) with reasoning

4. FRAUD RISK ASSESSMENT (ISA 240)
   - Revenue recognition presumption (rebutted? why?)
   - Management override of controls
   - Other identified fraud risks

5. RESPONSE TO ASSESSED RISKS
   - Overall audit response
   - Specific procedures mapped to each significant risk

6. CONCLUSION
   - Sign-off block
```

### 3. Analytical Procedures (ISA 520)

**Trigger phrases**: "analytical review", "analytical procedures", "trend analysis", "ratio analysis", "substantive analytics", "flux analysis"

**Structure**:
```
HEADER: [Entity] | [Period End] | ISA 520 | Prepared by: [Initials] | Date: [Date]
─────────────────────────────────────────────────────────
1. PURPOSE AND SCOPE
   - Stage of audit (planning / substantive / overall review)
   - Financial statement areas covered

2. EXPECTATION DEVELOPMENT
   - Data sources used (prior year, budgets, industry data)
   - Method of developing expectation
   - Threshold for investigation (link to materiality)

3. COMPARISON AND ANALYSIS
   For each line item / area:
   - Current year balance
   - Expected balance and basis
   - Difference (absolute and %)
   - Whether difference exceeds threshold
   - Investigation findings (if applicable)
   - Corroborating evidence obtained

4. RATIO ANALYSIS
   - Profitability ratios (gross margin, net margin, ROCE)
   - Liquidity ratios (current ratio, quick ratio)
   - Gearing ratios (debt-to-equity, interest cover)
   - Year-on-year movement analysis
   - Industry comparison (if available)

5. CONCLUSION
   - Whether analytical procedures identify RMM
   - Impact on further audit procedures
   - Sign-off block
```

### 4. Going Concern Assessment (ISA 570)

**Trigger phrases**: "going concern", "ISA 570", "viability", "cash flow forecast", "material uncertainty"

### 5. Audit Completion Memo

**Trigger phrases**: "completion memo", "audit summary", "wrap up", "final review", "opinion memo"

### 6. SOX / ICFR Documentation

**Trigger phrases**: "SOX testing", "ICFR", "control testing", "walkthrough", "design effectiveness", "operating effectiveness", "test of controls"

**Structure**:
```
HEADER: [Entity] | [Period End] | SOX/ICFR | Control: [Control ID] | Prepared by: [Initials]
─────────────────────────────────────────────────────────
1. CONTROL DESCRIPTION
   - Control ID and title
   - Control objective
   - Process / sub-process
   - Control frequency (daily/weekly/monthly/quarterly/annual)
   - Control type (preventive/detective)
   - Manual / automated / IT-dependent manual

2. DESIGN EFFECTIVENESS
   - Walkthrough performed (date, personnel interviewed)
   - Control design adequately addresses the risk (Yes/No)
   - Evidence of design (screenshots, policy docs, system configs)
   - Gaps or deficiencies identified

3. OPERATING EFFECTIVENESS
   - Testing methodology (inquiry, observation, inspection, re-performance)
   - Sample size determination and basis
   - Population and sample details
   - Test results (pass/fail for each sample item)
   - Exceptions identified and evaluated

4. CONCLUSION
   - Control operating effectively (Yes / No / Partial)
   - Deficiency classification (deficiency / significant deficiency / material weakness)
   - Compensating controls (if applicable)
   - Sign-off block
```

## Output Format Rules

1. **For .docx outputs**: Use the docx skill. Include a professional header on every page with entity name, period end, ISA reference, and preparer initials. Use a table of contents for documents longer than 3 pages. Apply consistent formatting (Calibri 11pt body, Calibri 14pt bold headings).

2. **For React/HTML outputs**: Build interactive workpapers with input fields, auto-calculations (e.g. materiality percentages), and a print/export function. Use clean, professional styling — dark navy (#1a1a2e) headers, white body, subtle borders.

3. **For .xlsx outputs**: Use the xlsx skill. Include a summary sheet, detailed calculation sheets, and cross-references. Lock formula cells and protect structure.

## Quality Checklist

Before finalising any workpaper, verify:
- [ ] ISA standard reference in header
- [ ] Generic entity names only (Indus Nexus Limited / ABC Company)
- [ ] Clear conclusion with professional judgement rationale
- [ ] Prepared by / Reviewed by / Date sign-off block
- [ ] Cross-references to other workpapers where relevant
- [ ] No real client or firm names anywhere in the output
- [ ] Materiality figures are internally consistent across documents
- [ ] Risk assessments link to planned audit responses

## Working with Multiple Workpapers

When the user requests a full audit file or multiple workpapers:
1. Establish the entity profile first (industry, size, period end, framework)
2. Set materiality as the anchor — all other workpapers reference this
3. Build risk assessment next — this drives the audit approach
4. Generate remaining workpapers with consistent cross-references
5. Deliver as a structured set with a master index

## Adapting to Frameworks

| Framework | Key Differences |
|-----------|----------------|
| FRS 102 (UK) | Reduced disclosure requirements, Section 1A for small entities, no OCI recycling for some items |
| IFRS | Full disclosure, IFRS 9 expected credit loss, IFRS 15 revenue, IFRS 16 leases |
| US GAAP | ASC codification, different lease classification, CECL model |
| SOX/ICFR | Control-focused, top-down risk assessment, PCAOB standards |

## Example Interaction

**User says**: "Generate a materiality workpaper for a mid-size UK retail company with £12m revenue"

**Skill does**:
1. Creates a .docx (or interactive React artifact) with ISA 320 header
2. Uses "Indus Nexus Limited" as entity name
3. Selects revenue as benchmark (appropriate for retail)
4. Applies 1.5% = £180,000 overall materiality (mid-range for established retail)
5. Sets performance materiality at 75% = £135,000
6. Sets trivial threshold at 5% = £9,000
7. Includes prior year comparison section (left blank for user to complete)
8. Adds sign-off block
9. Delivers as polished, print-ready document
