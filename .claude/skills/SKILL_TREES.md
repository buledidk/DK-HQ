# DK Buledi — Skill Decision Trees

Visual routing map for the skills pack. Use this to:

- pick the right skill when a request could match several
- chain skills across a multi-phase workflow
- extend the pack consistently without collisions

Every skill name below is an auto-trigger skill — Claude Code / claude.ai fires it automatically when the user prompt hits its keyword description. The trees show the decision boundary between them.

---

## 0 · Master Router (triage)

Every incoming request passes this triage first:

```
USER REQUEST
│
├─ Code · repo · commit · CI · PR?
│  └─► § 1  Engineering Workflow
│
├─ Audit engagement (client-facing work product)?
│  ├─ Big-4 system file delivery (Aura · Omnia · Canvas · Clara · Caseware)?
│  │  └─► big4-audit-file-delivery  →  audit-quality-eqr
│  ├─ Engagement phase = Plan · Risk · Controls · Evidence · Close · Report?
│  │  └─► § 2  External Audit Lifecycle
│  └─ Whole-lifecycle walkthrough (training, onboarding, proposal)?
│     └─► external-audit-lifecycle
│
├─ Financial statements (prepare · review · consistency · judgment)?
│  └─► § 3  FS Deep Work
│
├─ Process design · controls · regulation · automation?
│  └─► § 4  Finance · Risk · Regulation
│
├─ Board pack · investor deck · governance report?
│  └─► board-investor-governance-packs
│
├─ Sector lens (language · KPIs · regulations)?
│  └─► § 5  Sector Polish
│
├─ ESG · sustainability · CSRD · ISSB · TCFD?
│  └─► esg-sustainability-reporting
│
├─ Internal audit · three-lines · IIA GIAS?
│  └─► internal-audit-iia
│
├─ Deal · M&A · QoE · due-diligence · SPA?
│  └─► transaction-services-dd
│
├─ Fraud · investigation · expert-witness?
│  └─► forensic-fraud-investigation
│
├─ Treasury · hedging · IRRBB · IFRS 9 hedge docs?
│  └─► treasury-hedge-accounting
│
├─ Tax provisioning · IAS 12 · Pillar Two · ASC 740?
│  └─► tax-provisioning-ias12
│
├─ Data room · VDR · Q&A · redaction · indexing?
│  └─► data-room-automation
│
├─ Audit data analytics · full-population testing · IDEA · ACL · Alteryx?
│  └─► audit-analytics-adas
│
├─ People · team · decision · communication · cross-cultural?
│  └─► leadership-soft-skills
│
└─ AI · LLM · copilots in finance function?
   └─► ai-finance-accounting
```

---

## 1 · Engineering Workflow Tree

Used for work INSIDE this repo (or any audit-engine repo) — not client-facing.

```
§ 1  Engineering Workflow
│
├─ Commit / stage / squash?
│  └─► audit-commit
│
├─ Lint · typecheck · test · coverage?
│  └─► run-project-checks
│
├─ PR review · diff walkthrough · change-risk?
│  └─► audit-pr-review
│
├─ New module / feature scaffold?
│  └─► scaffold-audit-module
│
└─ Memo · design doc · runbook · change log?
   └─► audit-report-writer
```

**Chaining pattern** (typical feature branch):
`scaffold-audit-module → run-project-checks → audit-commit → audit-pr-review → audit-report-writer`

---

## 2 · External Audit Lifecycle Tree

Phases mapped to ISA (UK) numbering for unambiguous routing.

```
§ 2  External Audit Lifecycle
│
├─ PRE-ENGAGEMENT  (ISA 210 · 220 · ISQM 1/2)
│  └─► audit-quality-eqr          (independence, acceptance, EQR scoping)
│
├─ PLANNING  (ISA 300 · 315 · 320)
│  ├─ Scoping · materiality · team deployment?
│  │  └─► audit-planning-materiality
│  ├─ Understanding entity · ID risks of material misstatement?
│  │  └─► risk-assessment
│  └─ Big-4 system file setup (Aura / Omnia / Canvas / Clara)?
│     └─► big4-audit-file-delivery
│
├─ CONTROLS  (ISA 315 · 330 · 402)
│  └─► controls-assessment
│       └─ Walkthroughs · D&I · OE testing · ITGC · SOC 1
│
├─ FIELDWORK · EVIDENCE  (ISA 330 · 500-540 · 610 · 620)
│  ├─ Sampling design · sample size · projection?
│  │  └─► audit-evidence-sampling
│  ├─ JE testing · fraud-risk-response (ISA 240)?
│  │  └─► journal-entry-testing
│  ├─ Technical judgement · estimates (IFRS 9 ECL · impairments · fair value)?
│  │  └─► accounting-judgments-estimates
│  └─ ADA / full-population testing?
│     └─► audit-analytics-adas
│
├─ GROUP · SUBSIDIARIES  (ISA 600 · 402)
│  └─► group-audit
│
├─ CLOSE  (ISA 450 · 540 · 560 · 570 · 580)
│  ├─ Going concern assessment · stress tests?
│  │  └─► going-concern-audit
│  └─ Final analytics · misstatements · SOCR?
│     └─► financial-statement-review (crosses to § 3)
│
├─ REPORTING  (ISA 700 · 701 · 705 · 706 · 720)
│  └─► auditors-report
│       └─ Opinion · KAMs · EoM · OM · OI
│
├─ QUALITY  (ISQM 1 · 2 · ISA 220 rev.)
│  └─► audit-quality-eqr
│
└─ UK SPECIFIC  (Companies Act 2006 · FRC Ethical Standard · FRS 100-105)
   └─► uk-compliance-review
```

**Chaining pattern** (mainstream engagement):
```
audit-quality-eqr (acceptance)
  → audit-planning-materiality
    → risk-assessment + controls-assessment  (parallel)
      → audit-evidence-sampling
        → journal-entry-testing
          → accounting-judgments-estimates
            → group-audit (if applicable)
              → going-concern-audit
                → financial-statement-review
                  → auditors-report
                    → audit-quality-eqr (EQR sign-off)
```

---

## 3 · Financial Statement Deep-Work Tree

Used when the artefact IS the FS (client-prepared or auditor-reviewed).

```
§ 3  FS Deep Work
│
├─ Full FS review (primary statements + notes)?
│  └─► financial-statement-review
│
├─ Disclosure completeness · wording · regulator hot-spots?
│  └─► disclosure-review
│
├─ Cross-check primary ↔ notes ↔ narrative ↔ prior year?
│  └─► fs-internal-consistency
│
└─ Judgement / estimate challenged (ECL · impairment · DTA · provisions · FV)?
   └─► accounting-judgments-estimates
```

**Chaining pattern**:
`fs-internal-consistency → disclosure-review → accounting-judgments-estimates → financial-statement-review`

---

## 4 · Finance · Risk · Regulation Tree

```
§ 4  Finance · Risk · Regulation
│
├─ Process redesign · RPA · OCR · close acceleration?
│  ├─ Design / target state?
│  │  └─► finance-process-automation
│  └─ Current-state discovery · event-log mining?
│     └─► process-mining-optimization
│
├─ Control framework · COSO · three-lines · risk register?
│  └─► risk-control-governance
│
└─ Regulatory (prudential · conduct · markets)?
   ├─ Banking / CM (Basel IV · CRR · FRTB · LCR · NSFR · MIFIDPRU)?
   │  └─► banking-capital-markets-regulation
   └─ Sector-specific conduct (Consumer Duty · CASS · SMCR)?
      └─► banking-capital-markets-regulation (same — covers conduct)
```

---

## 5 · Sector Polish Tree

Applied AS A FILTER over whichever § 2–§ 4 skill is firing.

```
§ 5  Sector Polish
│
├─ Bank · building society · broker · exchange · clearing house?
│  └─► sector-banking-capital-markets
│
├─ Asset manager · wealth · fund admin · platform · LTAF · UCITS · AIFM?
│  └─► sector-asset-management
│
└─ Manufacturer · industrials · consumer · services (real economy)?
   └─► sector-manufacturing-industry
```

Sector skills **compose** with lifecycle skills. Example stack for a bank:
`sector-banking-capital-markets` + `audit-planning-materiality` + `banking-capital-markets-regulation` + `accounting-judgments-estimates` (IFRS 9 ECL).

---

## 6 · Leadership & AI Trees

```
§ 6a  Leadership
│
└─ People · team · decision · executive presence?
   └─► leadership-soft-skills

§ 6b  AI in Finance
│
└─ Deploy AI / LLM / copilots in finance · accounting · audit?
   └─► ai-finance-accounting
```

---

## 7 · Extended Specialist Tree

```
§ 7  Specialist skills (extended pack)
│
├─ Sustainability / ESG reporting or assurance?
│  └─► esg-sustainability-reporting
│
├─ Internal audit plan · IIA GIAS · three-lines?
│  └─► internal-audit-iia
│
├─ M&A · DD · QoE · SPA mechanics?
│  └─► transaction-services-dd
│
├─ Fraud · financial-crime · investigation · expert-witness?
│  └─► forensic-fraud-investigation
│
├─ Hedge accounting · IRRBB · treasury policy?
│  └─► treasury-hedge-accounting
│
├─ Income tax provisioning · IAS 12 · Pillar Two · ASC 740?
│  └─► tax-provisioning-ias12
│
├─ Virtual data room · VDR · Q&A log · redaction?
│  └─► data-room-automation
│
└─ ADA / audit data analytics · full-population tests · IDEA · Alteryx?
   └─► audit-analytics-adas
```

---

## 8 · Cross-Skill Chaining Map

Common multi-skill workflows. Read left-to-right.

| Workflow | Chain |
|---|---|
| Bank year-end audit | `audit-planning-materiality` → `sector-banking-capital-markets` → `banking-capital-markets-regulation` → `risk-assessment` → `controls-assessment` → `journal-entry-testing` → `accounting-judgments-estimates` (ECL) → `financial-statement-review` → `auditors-report` → `audit-quality-eqr` |
| Asset manager audit | `audit-planning-materiality` → `sector-asset-management` → `controls-assessment` (fund admin SOC 1) → `audit-evidence-sampling` → `disclosure-review` (NAV, fee, liquidity notes) → `auditors-report` |
| Manufacturing group audit | `group-audit` → `sector-manufacturing-industry` → `risk-assessment` → `audit-evidence-sampling` (inventory count) → `going-concern-audit` → `auditors-report` |
| CFO finance transformation | `process-mining-optimization` → `finance-process-automation` → `ai-finance-accounting` → `risk-control-governance` → `board-investor-governance-packs` |
| Pre-IPO readiness | `fs-internal-consistency` → `disclosure-review` → `accounting-judgments-estimates` → `data-room-automation` → `transaction-services-dd` → `board-investor-governance-packs` |
| CSRD / ISSB programme | `esg-sustainability-reporting` → `risk-control-governance` → `controls-assessment` → `audit-quality-eqr` (assurance) |
| Fraud investigation | `forensic-fraud-investigation` → `journal-entry-testing` → `audit-analytics-adas` → `audit-report-writer` |
| IFRS 9 hedge book review | `treasury-hedge-accounting` → `accounting-judgments-estimates` → `disclosure-review` → `financial-statement-review` |
| Pillar Two roll-out | `tax-provisioning-ias12` → `finance-process-automation` → `disclosure-review` → `board-investor-governance-packs` |
| Engineering delivery on this repo | `scaffold-audit-module` → `run-project-checks` → `audit-commit` → `audit-pr-review` → `audit-report-writer` |

---

## 9 · Trigger Keyword Index

Quick lookup: keyword → skill that fires. Use when you want to guarantee a specific skill triggers.

| Keyword / phrase | Skill |
|---|---|
| `commit`, `stage`, `squash`, `conventional commit` | audit-commit |
| `lint`, `typecheck`, `test`, `coverage`, `CI` | run-project-checks |
| `PR review`, `diff walk`, `change risk`, `rollback plan` | audit-pr-review |
| `scaffold`, `bootstrap module`, `new package` | scaffold-audit-module |
| `design doc`, `runbook`, `RFC`, `change memo` | audit-report-writer |
| `audit planning`, `materiality`, `performance materiality`, `CTT`, `PM`, `SUM` | audit-planning-materiality |
| `risk of material misstatement`, `RoMM`, `significant risk`, `fraud risk` | risk-assessment |
| `walkthrough`, `D&I`, `OE`, `ITGC`, `SOC 1`, `SOC 2`, `control test` | controls-assessment |
| `sample size`, `MUS`, `attribute sampling`, `stratification`, `projection` | audit-evidence-sampling |
| `JE test`, `journal entry testing`, `ISA 240 response` | journal-entry-testing |
| `going concern`, `stress test`, `liquidity forecast`, `covenant headroom` | going-concern-audit |
| `component auditor`, `group instructions`, `significant component`, `ISA 600` | group-audit |
| `auditor's report`, `KAM`, `EoM`, `opinion`, `ISA 700` | auditors-report |
| `EQR`, `hot file`, `cold review`, `ISQM`, `quality review` | audit-quality-eqr |
| `Aura`, `Omnia`, `Canvas`, `Clara`, `Caseware`, `big 4 system` | big4-audit-file-delivery |
| `UK audit`, `FRC`, `FRS 102`, `FRS 101`, `Companies Act` | uk-compliance-review |
| `external audit lifecycle`, `phase-by-phase`, `audit methodology` | external-audit-lifecycle |
| `FS review`, `primary statements`, `note review` | financial-statement-review |
| `disclosure`, `note X`, `disclosure completeness`, `DCL`, `FRC thematic` | disclosure-review |
| `tie-out`, `consistency check`, `casting`, `cross-cast`, `narrative match` | fs-internal-consistency |
| `ECL`, `impairment`, `fair value`, `DTA recoverability`, `provisions`, `estimate` | accounting-judgments-estimates |
| `RPA`, `close the books`, `record to report`, `P2P`, `O2C`, `automation` | finance-process-automation |
| `process mining`, `event log`, `Celonis`, `happy path`, `variant analysis` | process-mining-optimization |
| `COSO`, `three lines`, `risk register`, `control framework`, `ERM` | risk-control-governance |
| `Basel`, `CRR`, `CRD`, `FRTB`, `LCR`, `NSFR`, `MIFIDPRU`, `ICAAP`, `ILAAP` | banking-capital-markets-regulation |
| `board pack`, `investor deck`, `audit committee`, `AGM`, `governance pack` | board-investor-governance-packs |
| `bank`, `building society`, `exchange`, `clearing house`, `broker` | sector-banking-capital-markets |
| `asset manager`, `AMC`, `fund admin`, `UCITS`, `AIFMD`, `LTAF`, `NAV` | sector-asset-management |
| `manufacturer`, `industrial`, `inventory`, `BOM`, `standard costing` | sector-manufacturing-industry |
| `team`, `leadership`, `decision`, `communication`, `cross-cultural`, `distributed team` | leadership-soft-skills |
| `AI in finance`, `LLM`, `copilot`, `RAG`, `GenAI controls` | ai-finance-accounting |
| `CSRD`, `ISSB`, `S1`, `S2`, `TCFD`, `SASB`, `sustainability`, `ESG` | esg-sustainability-reporting |
| `internal audit`, `IIA`, `GIAS`, `three lines`, `IA plan` | internal-audit-iia |
| `due diligence`, `QoE`, `SPA`, `NWC`, `net debt`, `earn-out` | transaction-services-dd |
| `fraud`, `investigation`, `forensic`, `whistleblower`, `expert witness` | forensic-fraud-investigation |
| `hedge accounting`, `IRRBB`, `IFRS 9 hedge`, `effectiveness test`, `hedge docs` | treasury-hedge-accounting |
| `IAS 12`, `deferred tax`, `UTP`, `IFRIC 23`, `Pillar Two`, `GloBE`, `ASC 740` | tax-provisioning-ias12 |
| `VDR`, `data room`, `Q&A log`, `indexing`, `redaction` | data-room-automation |
| `ADA`, `audit analytics`, `IDEA`, `ACL`, `Alteryx`, `Power Query`, `full population` | audit-analytics-adas |

---

## 10 · Decision Heuristics

When two skills *could* fire, prefer the more specific one:

1. **Specific regulator beats generic framework.** `banking-capital-markets-regulation` beats `risk-control-governance` when Basel / MIFIDPRU is in scope.
2. **Phase beats lifecycle.** `audit-planning-materiality` beats `external-audit-lifecycle` when the user asks about planning only.
3. **Artefact beats process.** `board-investor-governance-packs` beats `leadership-soft-skills` when the deliverable is the pack, not the presentation skill.
4. **Deep-work beats overview.** `accounting-judgments-estimates` beats `financial-statement-review` when the focus is one specific estimate.
5. **Sector composes; doesn't replace.** Sector skills add lens but the base lifecycle / FS skill still runs.
6. **Engineering never mixes with engagement.** `audit-commit` never runs on a client audit workflow; `audit-planning-materiality` never runs on a repo PR.

---

## 11 · Extending the Pack

When you add a new skill, update in this order:

1. Create `.claude/skills/<new-name>/SKILL.md` with frontmatter `name`, `description` (keyword-rich), and body.
2. Add the skill to `README.md` under the right category.
3. Add a branch to the relevant § tree above and at least one row in § 8 (chaining) and § 9 (keyword index).
4. If the skill belongs to a new category, add a new § tree.
5. Run `pnpm sync-skills` to upsert into your Anthropic org.
6. If claude.ai Pro org ≠ API org, paste manually via `CLAUDE_AI_PROJECTS.md`.

Consistency is the value. A skill nobody can find is a skill that doesn't exist.
