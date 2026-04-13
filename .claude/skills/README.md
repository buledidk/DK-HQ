# Claude Skills — buledidk / DK-HQ

> **Positioning.** Automations that simplify how large organisations run
> finance, risk, audit, and compliance — packaged as auto-triggering
> Claude Code skills and a portfolio-grade capability statement.

See **[PORTFOLIO.md](./PORTFOLIO.md)** for the services catalogue and
capability map that sits on top of these skills.

To embed every skill in **claude.ai** (the web app) as a Project, see
**[CLAUDE_AI_PROJECTS.md](./CLAUDE_AI_PROJECTS.md)**.

These skills are tuned to the buledidk stack:
**audit-engine** (React 19 + Vite + Supabase), **DK-HQ** (pnpm monorepo),
**Auditengine** (static landing). They auto-trigger when Claude detects
relevant context. You can also invoke any of them manually via
`/<skill-name>`.

---

## Skill index

### Engineering workflow (the daily drivers)

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`audit-commit`](./audit-commit/SKILL.md) | say "commit", "push", finish a change | Runs project checks, writes a conventional commit, pushes to the correct branch |
| [`run-project-checks`](./run-project-checks/SKILL.md) | say "run tests", "lint", "build", "check" | Detects project type and runs the full check suite |
| [`audit-pr-review`](./audit-pr-review/SKILL.md) | open a PR, say "review", paste a diff | Reviews with audit + compliance lens |
| [`scaffold-audit-module`](./scaffold-audit-module/SKILL.md) | say "scaffold", "new app", "new package", "bootstrap" | Creates new apps / packages / audit modules with house structure |
| [`audit-report-writer`](./audit-report-writer/SKILL.md) | say "write report", "status update", "summary" | Produces reports in the established IMPLEMENTATION_*.md style |

### External audit — lifecycle overview

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`external-audit-lifecycle`](./external-audit-lifecycle/SKILL.md) | mention audit planning, materiality, risk assessment, fieldwork, KAM, EQR | Full ISA (UK) external-audit lifecycle with automation hooks per phase |
| [`uk-compliance-review`](./uk-compliance-review/SKILL.md) | touch PII, audit trail, ISA, FRS, FCA, Companies Act, GDPR, AML | Regulatory review with a pass/fail checklist per regime |

### External audit — phase deep-dives

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`audit-planning-materiality`](./audit-planning-materiality/SKILL.md) | say "audit strategy", "materiality", "performance materiality", "ISA 300/320" | Overall strategy + audit plan + OM/PM/CTT/specific/component materiality |
| [`risk-assessment`](./risk-assessment/SKILL.md) | say "ISA 315", "RoMM", "significant risk", "walkthrough", "inherent risk" | ISA 315 revised + ISA 240 risk assessment — with stand-back |
| [`controls-assessment`](./controls-assessment/SKILL.md) | say "control testing", "TOC", "TOE", "walkthrough", "ITGC", "SOD", "SOX" | Design + operating effectiveness testing with sample-size framework |
| [`audit-evidence-sampling`](./audit-evidence-sampling/SKILL.md) | say "sampling", "MUS", "tolerable misstatement", "projection" | Sufficient-appropriate evidence + statistical + data-analytics alternatives |
| [`journal-entry-testing`](./journal-entry-testing/SKILL.md) | say "JE testing", "ISA 240 ¶32", "management override", "top-side entries" | Full-population JE analytics + risk-based criteria |
| [`going-concern-audit`](./going-concern-audit/SKILL.md) | say "going concern", "ISA 570", "material uncertainty", "covenant headroom" | 12-month assessment + stress testing + report implications |
| [`group-audit`](./group-audit/SKILL.md) | say "group audit", "ISA 600", "component auditor", "component materiality" | ISA 600 revised scoping, instructions, direction + supervision |
| [`auditors-report`](./auditors-report/SKILL.md) | say "auditor's report", "KAM", "qualified opinion", "adverse", "disclaimer" | Opinion decision tree + ISA 700/701/705/706 wording |
| [`audit-quality-eqr`](./audit-quality-eqr/SKILL.md) | say "ISQM", "EQR", "engagement quality review", "root cause", "AQR" | ISQM 1 + ISQM 2 + ISA 220 revised + RCA + remediation |

### Financial-statement deep work

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`financial-statement-review`](./financial-statement-review/SKILL.md) | say "review the accounts", "IFRS 15", "IAS 36", "earnings quality", "iXBRL" | Deep FS review — ratios, quality scores, standard-by-standard, disclosures |
| [`disclosure-review`](./disclosure-review/SKILL.md) | say "disclosure review", "notes to the accounts", "TCFD", "APM review", "viability" | Disclosure completeness per standard + narrative consistency |
| [`fs-internal-consistency`](./fs-internal-consistency/SKILL.md) | say "tie out", "does it foot", "reconcile FS", "narrative vs numbers" | 7-layer internal-consistency checks across FS + narrative + external docs |
| [`accounting-judgments-estimates`](./accounting-judgments-estimates/SKILL.md) | say "ISA 540", "critical judgment", "auditor's range", "impairment model", "ECL model" | Evaluate management estimates + bias indicators + hindsight look-back |

### Finance + risk + regulation

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`finance-process-automation`](./finance-process-automation/SKILL.md) | say "automate", "P2P", "O2C", "close", "reconciliation", "cash forecast" | Designs + builds end-to-end finance process automation with controls |
| [`risk-control-governance`](./risk-control-governance/SKILL.md) | say "risk register", "RCSA", "KRI", "SOX", "ICFR", "COSO", "three lines" | ERM + internal controls + governance frameworks + SOX ICFR |
| [`banking-capital-markets-regulation`](./banking-capital-markets-regulation/SKILL.md) | say "Basel", "LCR", "IFRS 9 ECL", "MiFID", "EMIR", "CSDR", "T+1", "AIFMD", "SMCR", "DORA" | Cross-regime regulatory expertise for banks / investment firms / asset managers |
| [`process-mining-optimization`](./process-mining-optimization/SKILL.md) | say "process mining", "event log", "bottleneck", "automation ROI", "business case" | Mines event logs, quantifies KPIs, ranks automation candidates, builds the business case |

### AI in finance + accounting

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`ai-finance-accounting`](./ai-finance-accounting/SKILL.md) | say "AI for audit", "LLM in finance", "multi-agent", "accuracy engine", "hallucination control", "OCR invoices" | Deployment patterns for AI in finance — agents, accuracy engines, governance |

---

## How skills work

A skill is a folder under `.claude/skills/<name>/` containing a `SKILL.md`.
The YAML `description` at the top is the **trigger** — Claude reads it and
decides whether the skill matches the current task. The body of `SKILL.md`
is the instruction set Claude follows when the skill is active.

## Activating these skills

**Project-level** (these files, in DK-HQ): active when Claude runs inside
this repo.

**User-level** (all projects): copy to `~/.claude/skills/`:

```bash
cp -r .claude/skills/* ~/.claude/skills/
```

## Editing a skill

Just edit the `SKILL.md`. Changes take effect in the next Claude session.
Keep the YAML `description` crisp — that's what drives auto-activation.

## Adding a new skill

1. Create `.claude/skills/<new-skill>/SKILL.md`
2. YAML frontmatter with `name` + `description` (include keywords the
   user will actually type)
3. Body: scope, inputs, workflow, anti-patterns
4. Add a row to the index above and a line in PORTFOLIO.md
