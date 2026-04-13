# Claude Skills — buledidk / DK-HQ

> **Positioning.** Automations that simplify how large organisations run
> finance, risk, audit, and compliance — packaged as auto-triggering
> Claude Code skills and a portfolio-grade capability statement.

This pack contains **39 auto-triggering skills** + **3 orchestrator agents** + routing trees + end-to-end connectivity guides.

## Navigate

- **[PORTFOLIO.md](./PORTFOLIO.md)** — services catalogue and capability map.
- **[SKILL_TREES.md](./SKILL_TREES.md)** — decision trees + cross-skill chaining + trigger keyword index.
- **[SETUP_CONNECTIVITY.md](./SETUP_CONNECTIVITY.md)** — end-to-end wiring across claude.ai, Anthropic Console, Skills API, and Claude Code.
- **[CLAUDE_AI_PROJECTS.md](./CLAUDE_AI_PROJECTS.md)** — embedding every skill into claude.ai Projects.

---

## Skill index (39)

### Engineering workflow (5)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`audit-commit`](./audit-commit/SKILL.md) | say "commit", "push", finish a change | Runs project checks, writes a conventional commit, pushes |
| [`run-project-checks`](./run-project-checks/SKILL.md) | say "run tests", "lint", "build", "check" | Detects project type, runs the full check suite |
| [`audit-pr-review`](./audit-pr-review/SKILL.md) | open a PR, say "review", paste a diff | Reviews with audit + compliance lens |
| [`scaffold-audit-module`](./scaffold-audit-module/SKILL.md) | say "scaffold", "new app", "new package", "bootstrap" | Creates new apps / packages / audit modules |
| [`audit-report-writer`](./audit-report-writer/SKILL.md) | say "write report", "status update", "summary" | Produces reports in IMPLEMENTATION_*.md style |

### External audit — lifecycle overview (2)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`external-audit-lifecycle`](./external-audit-lifecycle/SKILL.md) | mention audit planning, materiality, risk, fieldwork, KAM, EQR | Full ISA (UK) external-audit lifecycle with automation hooks |
| [`uk-compliance-review`](./uk-compliance-review/SKILL.md) | touch PII, audit trail, ISA, FRS, FCA, Companies Act, GDPR, AML | Regulatory review with pass/fail checklist per regime |

### External audit — phase deep-dives + file delivery (10)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`big4-audit-file-delivery`](./big4-audit-file-delivery/SKILL.md) | say "audit file", "Aura", "Canvas", "Clara", "Omnia", "Caseware", "lead schedule", "section A/B/C" | File prep, drafting, review, QC, approval on Big 4 + mid-tier systems |
| [`audit-planning-materiality`](./audit-planning-materiality/SKILL.md) | say "audit strategy", "materiality", "performance materiality", "ISA 300/320" | Strategy + plan + OM/PM/CTT/specific/component materiality |
| [`risk-assessment`](./risk-assessment/SKILL.md) | say "ISA 315", "RoMM", "significant risk", "walkthrough", "inherent risk" | ISA 315 revised + ISA 240 risk assessment |
| [`controls-assessment`](./controls-assessment/SKILL.md) | say "control testing", "TOC", "TOE", "walkthrough", "ITGC", "SOD", "SOX" | D&I + OE testing with sample-size framework |
| [`audit-evidence-sampling`](./audit-evidence-sampling/SKILL.md) | say "sampling", "MUS", "tolerable misstatement", "projection" | Sufficient-appropriate evidence + statistical + ADA |
| [`journal-entry-testing`](./journal-entry-testing/SKILL.md) | say "JE testing", "ISA 240 ¶32", "management override", "top-side entries" | Full-population JE analytics |
| [`going-concern-audit`](./going-concern-audit/SKILL.md) | say "going concern", "ISA 570", "material uncertainty", "covenant headroom" | 12-month assessment + stress testing + report implications |
| [`group-audit`](./group-audit/SKILL.md) | say "group audit", "ISA 600", "component auditor", "component materiality" | ISA 600 revised scoping, instructions, direction + supervision |
| [`auditors-report`](./auditors-report/SKILL.md) | say "auditor's report", "KAM", "qualified opinion", "adverse", "disclaimer" | Opinion decision tree + ISA 700/701/705/706 wording |
| [`audit-quality-eqr`](./audit-quality-eqr/SKILL.md) | say "ISQM", "EQR", "engagement quality review", "root cause" | ISQM 1 + 2 + ISA 220 revised + RCA + remediation |

### Financial-statement deep work (4)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`financial-statement-review`](./financial-statement-review/SKILL.md) | say "review the accounts", "IFRS 15", "IAS 36", "earnings quality", "iXBRL" | Deep FS review with standard-by-standard mapping |
| [`disclosure-review`](./disclosure-review/SKILL.md) | say "disclosure review", "notes", "TCFD", "APM review", "viability" | Disclosure completeness + narrative consistency |
| [`fs-internal-consistency`](./fs-internal-consistency/SKILL.md) | say "tie out", "does it foot", "reconcile FS", "narrative vs numbers" | 7-layer internal-consistency checks |
| [`accounting-judgments-estimates`](./accounting-judgments-estimates/SKILL.md) | say "ISA 540", "critical judgment", "auditor's range", "impairment model", "ECL model" | Evaluate management estimates + bias + hindsight |

### Finance · risk · regulation (4)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`finance-process-automation`](./finance-process-automation/SKILL.md) | say "automate", "P2P", "O2C", "close", "reconciliation", "cash forecast" | End-to-end finance process automation with controls |
| [`risk-control-governance`](./risk-control-governance/SKILL.md) | say "risk register", "RCSA", "KRI", "SOX", "ICFR", "COSO", "three lines" | ERM + internal controls + governance frameworks |
| [`banking-capital-markets-regulation`](./banking-capital-markets-regulation/SKILL.md) | say "Basel", "LCR", "IFRS 9 ECL", "MiFID", "EMIR", "CSDR", "AIFMD", "SMCR", "DORA" | Cross-regime regulatory expertise |
| [`process-mining-optimization`](./process-mining-optimization/SKILL.md) | say "process mining", "event log", "bottleneck", "automation ROI" | Mines logs, quantifies KPIs, ranks automation candidates |

### Board · investor · governance (1)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`board-investor-governance-packs`](./board-investor-governance-packs/SKILL.md) | say "board pack", "AC pack", "ALCO", "investor deck", "s166", "Dear CEO" | Drafts board / AC / RC / ALCO / investor / regulator packs |

### Sector polish (3)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`sector-banking-capital-markets`](./sector-banking-capital-markets/SKILL.md) | say "bank audit", "broker-dealer", "CCP", "CSD", "IFRS 9 ECL audit", "trading book", "CASS audit" | Polished sector expertise — banks, investment firms, capital-markets infra |
| [`sector-asset-management`](./sector-asset-management/SKILL.md) | say "AIFM", "UCITS", "LTAF", "NAV audit", "performance fee", "depositary", "PRIIPs" | Polished sector expertise — AMCM + wealth + fund admin |
| [`sector-manufacturing-industry`](./sector-manufacturing-industry/SKILL.md) | say "manufacturer", "retail audit", "construction", "oil and gas", "inventory audit" | Polished sector expertise — industrials, consumer, tech, O&G, real estate, pharma |

### Leadership + soft skills (1)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`leadership-soft-skills`](./leadership-soft-skills/SKILL.md) | say "communication", "decision under uncertainty", "cross-cultural", "distributed team", "negotiation", "coaching" | Communication by audience, decisions under uncertainty, running distributed teams, executive presence |

### AI in finance + accounting (1)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`ai-finance-accounting`](./ai-finance-accounting/SKILL.md) | say "AI for audit", "LLM in finance", "multi-agent", "accuracy engine", "hallucination control" | Deployment patterns for AI in finance — agents, accuracy engines, governance |

### Specialist extended pack (8) — NEW

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`esg-sustainability-reporting`](./esg-sustainability-reporting/SKILL.md) | say "ESG", "CSRD", "ESRS", "ISSB S1/S2", "TCFD", "SASB", "double materiality", "Scope 1/2/3" | CSRD / ISSB preparer + ISSA 5000 assurance |
| [`internal-audit-iia`](./internal-audit-iia/SKILL.md) | say "internal audit", "IIA", "GIAS", "three lines", "CAE", "QAIP", "EQA" | IIA GIAS 2024 engagements + annual planning + QAIP |
| [`transaction-services-dd`](./transaction-services-dd/SKILL.md) | say "DD", "due diligence", "QoE", "SPA", "NWC", "net debt", "earn-out", "locked box", "carve-out" | Buy-side / sell-side FDD + QoE + SPA mechanics |
| [`forensic-fraud-investigation`](./forensic-fraud-investigation/SKILL.md) | say "fraud", "forensic", "investigation", "whistleblower", "bribery", "expert witness", "asset tracing" | Fraud investigation + ACFE schemes + CPR 35 expert reports |
| [`treasury-hedge-accounting`](./treasury-hedge-accounting/SKILL.md) | say "hedge accounting", "IFRS 9 hedge", "IRRBB", "cash flow hedge", "fair value hedge", "net investment hedge" | IFRS 9 hedge docs + effectiveness + IRRBB + treasury policy |
| [`tax-provisioning-ias12`](./tax-provisioning-ias12/SKILL.md) | say "IAS 12", "ASC 740", "deferred tax", "DTA", "UTP", "IFRIC 23", "Pillar Two", "GloBE", "ETR" | IAS 12 + IFRIC 23 + Pillar Two + ASC 740 provisioning |
| [`data-room-automation`](./data-room-automation/SKILL.md) | say "VDR", "data room", "Q&A log", "redaction", "Intralinks", "Datasite", "Ansarada" | VDR setup + indexing + Q&A workflow + redaction pipeline |
| [`audit-analytics-adas`](./audit-analytics-adas/SKILL.md) | say "ADA", "audit analytics", "IDEA", "ACL", "Alteryx", "Power Query", "full population", "Halo", "Helix" | Full-population ADA + data pipeline + continuous auditing |

---

## Orchestrator agents (3)

Under `.claude/agents/` — invoke via `@<agent-name>` inside Claude Code. Agents orchestrate multiple skills into a workflow:

| Agent | Orchestrates | Use when |
|---|---|---|
| [`audit-file-reviewer`](../agents/audit-file-reviewer.md) | big4-audit-file-delivery · controls-assessment · audit-evidence-sampling · journal-entry-testing · accounting-judgments-estimates · financial-statement-review · audit-quality-eqr | Manager / partner / pre-EQR full file review |
| [`fs-close-coordinator`](../agents/fs-close-coordinator.md) | fs-internal-consistency · disclosure-review · accounting-judgments-estimates · financial-statement-review | Month-end / year-end / interim FS review |
| [`governance-pack-builder`](../agents/governance-pack-builder.md) | board-investor-governance-packs · sector-* · risk-control-governance · leadership-soft-skills + topical skills | Board / AC / RC / ALCO / investor / regulator pack drafting |

---

## Deploy to Anthropic Skills API

All 39 skills can be pushed to your Anthropic account programmatically:

```bash
ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills          # uses scripts/sync-skills.ts
```

The script reads every `SKILL.md`, upserts to the Anthropic Skills API (POST → create, PATCH → update), and writes `.claude/skills-manifest.json` so re-runs are idempotent. See **[SETUP_CONNECTIVITY.md](./SETUP_CONNECTIVITY.md)** for the end-to-end wiring across claude.ai, Console, and Claude Code.

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

Edit the `SKILL.md`. Changes take effect next Claude session. Keep YAML `description` keyword-rich — that drives auto-activation. Re-run `pnpm sync-skills` to propagate to the Anthropic org.

## Adding a new skill

1. `.claude/skills/<new-skill>/SKILL.md` with YAML frontmatter (`name`, `description`).
2. Body: scope, phase-by-phase workflow, deliverables, anti-patterns, standards.
3. Add a row here, a branch in `SKILL_TREES.md`, and a line in `PORTFOLIO.md`.
4. `pnpm sync-skills` to deploy.
