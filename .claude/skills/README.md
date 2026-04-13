# Claude Skills — buledidk / DK-HQ

> **Positioning.** Automations that simplify how large organisations run
> finance, risk, audit, and compliance — packaged as auto-triggering
> Claude Code skills and a portfolio-grade capability statement.

See **[PORTFOLIO.md](./PORTFOLIO.md)** for the services catalogue and
capability map that sits on top of these skills.

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

### Audit + assurance

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`external-audit-lifecycle`](./external-audit-lifecycle/SKILL.md) | mention audit planning, materiality, risk assessment, fieldwork, KAM, EQR | Full ISA (UK) external-audit lifecycle with automation hooks per phase |
| [`uk-compliance-review`](./uk-compliance-review/SKILL.md) | touch PII, audit trail, ISA, FRS, FCA, Companies Act, GDPR, AML | Regulatory review with a pass/fail checklist per regime |
| [`financial-statement-review`](./financial-statement-review/SKILL.md) | say "review the accounts", "IFRS 15", "IAS 36", "earnings quality", "iXBRL" | Deep FS review — ratios, quality scores, standard-by-standard deep dives, disclosures |

### Finance + risk + regulation

| Skill | Auto-triggers when you... | What it does |
|-------|---------------------------|--------------|
| [`finance-process-automation`](./finance-process-automation/SKILL.md) | say "automate", "P2P", "O2C", "close", "reconciliation", "cash forecast" | Designs + builds end-to-end finance process automation with controls |
| [`risk-control-governance`](./risk-control-governance/SKILL.md) | say "risk register", "RCSA", "KRI", "SOX", "ICFR", "COSO", "three lines" | ERM + internal controls + governance frameworks + SOX ICFR |
| [`banking-capital-markets-regulation`](./banking-capital-markets-regulation/SKILL.md) | say "Basel", "LCR", "IFRS 9 ECL", "MiFID", "EMIR", "CSDR", "T+1", "AIFMD", "SMCR", "DORA" | Cross-regime regulatory expertise for banks / investment firms / asset managers |
| [`process-mining-optimization`](./process-mining-optimization/SKILL.md) | say "process mining", "event log", "bottleneck", "automation ROI", "business case" | Mines event logs, quantifies KPIs, ranks automation candidates, builds the business case |

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
