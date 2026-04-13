# Claude Skills — buledidk / DK-HQ

> **Positioning.** Automations that simplify how large organisations run
> finance, risk, audit, and compliance — packaged as auto-triggering
> Claude Code skills and a portfolio-grade capability statement.

This pack contains **43 auto-triggering skills** + **3 orchestrator agents** + routing trees + end-to-end connectivity guides.

## Navigate

- **[DEPLOY_TODAY.md](./DEPLOY_TODAY.md)** — 3-minute operational runbook (start here if you just want it running).
- **[PORTFOLIO.md](./PORTFOLIO.md)** — services catalogue and capability map.
- **[SKILL_TREES.md](./SKILL_TREES.md)** — decision trees + cross-skill chaining + trigger keyword index.
- **[SETUP_CONNECTIVITY.md](./SETUP_CONNECTIVITY.md)** — end-to-end wiring across claude.ai, Anthropic Console, Skills API, and Claude Code.
- **[CLAUDE_AI_PROJECTS.md](./CLAUDE_AI_PROJECTS.md)** — embedding every skill into claude.ai Projects.

---

## Skill index (43)

### Engineering workflow (5)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`audit-commit`](./audit-commit/SKILL.md) | say "commit", "push" |
| [`run-project-checks`](./run-project-checks/SKILL.md) | say "run tests", "lint", "build", "check" |
| [`audit-pr-review`](./audit-pr-review/SKILL.md) | open a PR, say "review", paste a diff |
| [`scaffold-audit-module`](./scaffold-audit-module/SKILL.md) | say "scaffold", "new app", "new package" |
| [`audit-report-writer`](./audit-report-writer/SKILL.md) | say "write report", "status update" |

### External audit — lifecycle + file delivery + phase deep-dives (12)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`external-audit-lifecycle`](./external-audit-lifecycle/SKILL.md) | mention audit planning, materiality, fieldwork, KAM |
| [`uk-compliance-review`](./uk-compliance-review/SKILL.md) | touch ISA, FRS, FCA, Companies Act, GDPR, AML |
| [`big4-audit-file-delivery`](./big4-audit-file-delivery/SKILL.md) | say "audit file", Aura, Canvas, Clara, Omnia, Caseware |
| [`audit-planning-materiality`](./audit-planning-materiality/SKILL.md) | say "audit strategy", "materiality", "ISA 300/320" |
| [`risk-assessment`](./risk-assessment/SKILL.md) | say "ISA 315", "RoMM", "significant risk" |
| [`controls-assessment`](./controls-assessment/SKILL.md) | say "control testing", "TOC", "TOE", "ITGC", "SOX" |
| [`audit-evidence-sampling`](./audit-evidence-sampling/SKILL.md) | say "sampling", "MUS", "projection" |
| [`journal-entry-testing`](./journal-entry-testing/SKILL.md) | say "JE testing", "ISA 240 ¶32" |
| [`going-concern-audit`](./going-concern-audit/SKILL.md) | say "going concern", "ISA 570", "covenant headroom" |
| [`group-audit`](./group-audit/SKILL.md) | say "group audit", "ISA 600", "component auditor" |
| [`auditors-report`](./auditors-report/SKILL.md) | say "auditor's report", "KAM", "qualified opinion" |
| [`audit-quality-eqr`](./audit-quality-eqr/SKILL.md) | say "ISQM", "EQR", "root cause" |

### Workpaper generation (1)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`audit-workpaper-engine`](./audit-workpaper-engine/SKILL.md) | say "materiality calc", "planning memo", "risk matrix", "write up the testing", "prepare the audit file" |

### Financial-statement deep work (4)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`financial-statement-review`](./financial-statement-review/SKILL.md) | say "review the accounts", "IFRS 15", "IAS 36", "iXBRL" |
| [`disclosure-review`](./disclosure-review/SKILL.md) | say "disclosure review", "notes", "TCFD", "APM" |
| [`fs-internal-consistency`](./fs-internal-consistency/SKILL.md) | say "tie out", "does it foot", "narrative vs numbers" |
| [`accounting-judgments-estimates`](./accounting-judgments-estimates/SKILL.md) | say "ISA 540", "critical judgment", "impairment model", "ECL model" |

### Finance · risk · regulation (4)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`finance-process-automation`](./finance-process-automation/SKILL.md) | say "automate", "P2P", "O2C", "close", "reconciliation" |
| [`risk-control-governance`](./risk-control-governance/SKILL.md) | say "risk register", "RCSA", "KRI", "SOX", "COSO", "three lines" |
| [`banking-capital-markets-regulation`](./banking-capital-markets-regulation/SKILL.md) | say "Basel", "LCR", "MiFID", "EMIR", "CSDR", "AIFMD", "SMCR", "DORA" |
| [`process-mining-optimization`](./process-mining-optimization/SKILL.md) | say "process mining", "event log", "bottleneck", "automation ROI" |

### Budgeting · FP&A · forecasting (1) — NEW

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`budget-forecast-analysis`](./budget-forecast-analysis/SKILL.md) | say "budget", "forecast", "FP&A", "ZBB", "rolling forecast", "variance analysis", "LRP", "scenario", "sensitivity", "driver-based" |

### Business process optimisation (1) — NEW

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`business-process-optimiser`](./business-process-optimiser/SKILL.md) | say "process optimisation", "TOM", "target operating model", "BPO", "Lean", "Six Sigma", "DMAIC", "SLA", "capacity model", "RACI", "shared service", "offshore", "automation road-map" |

### Governance design (1) — NEW

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`governance-structure-enhancement`](./governance-structure-enhancement/SKILL.md) | say "governance structure", "board composition", "board effectiveness", "committee", "ToR", "delegated authority", "SMCR", "SYSC", "UK Corporate Governance Code", "Wates", "skills matrix", "NED", "SMF" |

### Board · investor · governance communication (1)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`board-investor-governance-packs`](./board-investor-governance-packs/SKILL.md) | say "board pack", "AC pack", "ALCO", "investor deck", "s166", "Dear CEO" |

### Sector polish (3)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`sector-banking-capital-markets`](./sector-banking-capital-markets/SKILL.md) | say "bank audit", "broker-dealer", "CCP", "IFRS 9 ECL audit", "CASS audit" |
| [`sector-asset-management`](./sector-asset-management/SKILL.md) | say "AIFM", "UCITS", "LTAF", "NAV audit", "PRIIPs" |
| [`sector-manufacturing-industry`](./sector-manufacturing-industry/SKILL.md) | say "manufacturer", "retail audit", "oil and gas", "inventory audit" |

### Leadership + soft skills (1)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`leadership-soft-skills`](./leadership-soft-skills/SKILL.md) | say "communication", "decision under uncertainty", "cross-cultural", "distributed team", "coaching" |

### AI in finance + accounting (1)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`ai-finance-accounting`](./ai-finance-accounting/SKILL.md) | say "AI for audit", "LLM in finance", "multi-agent", "accuracy engine" |

### Specialist extended pack (8)

| Skill | Auto-triggers when you... |
|-------|---------------------------|
| [`esg-sustainability-reporting`](./esg-sustainability-reporting/SKILL.md) | say "ESG", "CSRD", "ESRS", "ISSB S1/S2", "TCFD", "double materiality", "Scope 1/2/3" |
| [`internal-audit-iia`](./internal-audit-iia/SKILL.md) | say "internal audit", "IIA", "GIAS", "three lines", "CAE", "QAIP", "EQA" |
| [`transaction-services-dd`](./transaction-services-dd/SKILL.md) | say "DD", "QoE", "SPA", "NWC", "net debt", "earn-out", "locked box", "carve-out" |
| [`forensic-fraud-investigation`](./forensic-fraud-investigation/SKILL.md) | say "fraud", "forensic", "investigation", "whistleblower", "bribery", "expert witness" |
| [`treasury-hedge-accounting`](./treasury-hedge-accounting/SKILL.md) | say "hedge accounting", "IFRS 9 hedge", "IRRBB", "cash flow hedge" |
| [`tax-provisioning-ias12`](./tax-provisioning-ias12/SKILL.md) | say "IAS 12", "ASC 740", "deferred tax", "UTP", "IFRIC 23", "Pillar Two", "GloBE" |
| [`data-room-automation`](./data-room-automation/SKILL.md) | say "VDR", "data room", "Q&A log", "redaction", "Intralinks", "Datasite" |
| [`audit-analytics-adas`](./audit-analytics-adas/SKILL.md) | say "ADA", "audit analytics", "IDEA", "ACL", "Alteryx", "full population", "Halo", "Helix" |

---

## Orchestrator agents (3)

Under `.claude/agents/` — invoke via `@<agent-name>` inside Claude Code:

| Agent | Orchestrates |
|---|---|
| [`audit-file-reviewer`](../agents/audit-file-reviewer.md) | big4-audit-file-delivery · controls-assessment · audit-evidence-sampling · journal-entry-testing · accounting-judgments-estimates · financial-statement-review · audit-quality-eqr · **audit-workpaper-engine** |
| [`fs-close-coordinator`](../agents/fs-close-coordinator.md) | fs-internal-consistency · disclosure-review · accounting-judgments-estimates · financial-statement-review |
| [`governance-pack-builder`](../agents/governance-pack-builder.md) | board-investor-governance-packs · **governance-structure-enhancement** · sector-* · risk-control-governance · leadership-soft-skills · **budget-forecast-analysis** · **business-process-optimiser** |

---

## Deploy to Anthropic Skills API

All 43 skills can be pushed to your Anthropic account programmatically:

```bash
ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills          # uses scripts/sync-skills.ts
```

Or one-command:

```bash
curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh \
  | ANTHROPIC_API_KEY=sk-ant-... bash
```

See **[DEPLOY_TODAY.md](./DEPLOY_TODAY.md)** for the 3-minute runbook, **[SETUP_CONNECTIVITY.md](./SETUP_CONNECTIVITY.md)** for end-to-end wiring.

---

## How skills work

A skill is a folder under `.claude/skills/<name>/` with a `SKILL.md`. The YAML `description` at the top is the **trigger** — Claude reads it and decides whether to fire the skill. The body is the instruction set it follows when active.

## Activating locally

**Project-level** (this repo): active when Claude Code runs inside DK-HQ.

**User-level** (all projects): copy to `~/.claude/skills/`:

```bash
cp -r .claude/skills/* ~/.claude/skills/
```

## Editing a skill

Edit the `SKILL.md`. Changes take effect next Claude session. Re-run `pnpm sync-skills` to propagate to the Anthropic org.

## Adding a new skill

1. `.claude/skills/<new-skill>/SKILL.md` with YAML frontmatter.
2. Body: scope, phase-by-phase workflow, deliverables, anti-patterns, standards.
3. Add a row here, a branch in `SKILL_TREES.md`, and a line in `PORTFOLIO.md`.
4. `pnpm sync-skills` to deploy.
