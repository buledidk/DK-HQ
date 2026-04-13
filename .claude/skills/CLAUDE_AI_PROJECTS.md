# Claude.ai Projects — Embedding These Skills in the Web App

> Your skills also need to work in **claude.ai** (the chat app), not only
> in Claude Code. claude.ai doesn't have file-based skills — it has
> **Projects**. This doc shows how to embed every skill as a Project.

---

## Concept map

| Claude Code | Claude.ai | Anthropic API / Agent SDK |
|-------------|-----------|---------------------------|
| Skill (`SKILL.md`) | **Project** (custom instructions + knowledge files) | `system` prompt |

Projects persist:
- **Custom instructions** — system prompt across every chat in the Project
- **Project knowledge** — files (PDF, MD, spreadsheets) for retrieval
- **Chat history** — scoped to the Project

---

## Key URLs

- Projects list: https://claude.ai/projects
- New Project: https://claude.ai/new-project
- Global custom instructions: https://claude.ai/settings/profile
- Console (API): https://console.anthropic.com/workbench

---

## Two ways to embed

### A — one Project per skill (recommended)
Each skill = its own Project. Switching skill = switching Project.
Cleaner context, better quality.

### B — master Project with all skills
Prefix prompt with skill name. Less context per chat, one destination.

Run both: Option A for heavy domain skills, Option B for workflow ones.

---

## Setup — Option A

For each skill:
1. https://claude.ai/new-project
2. Name = skill's filename (e.g. `external-audit-lifecycle`)
3. Description = YAML `description` line
4. Custom instructions = entire `SKILL.md` body (after the `---`)
5. Upload reference files to Project knowledge
6. Save; start a chat to test

## Setup — Option B (master Project)

1. Create Project `buledidk-skills-master`
2. Custom instructions: the master template below
3. Upload each SKILL.md as a knowledge file
4. Invoke with `/<skill-name>` prefix in chats

### Master template

```
You are a senior automation + audit + finance assistant with skills across
UK statutory audit, IFRS / US GAAP / UK GAAP, banking + capital markets
regulation, finance-process automation, risk + controls + governance, and
AI deployment in finance.

When the user starts a message with /<skill-name>, load that skill from
project knowledge and follow its instructions verbatim.

Without a prefix, infer which skill best applies and state which skill
you're using at the top of the reply:
  [Using skill: audit-planning-materiality]
  <answer>

Skills available:
accounting-judgments-estimates, ai-finance-accounting, audit-commit,
audit-evidence-sampling, audit-planning-materiality, audit-pr-review,
audit-quality-eqr, audit-report-writer, auditors-report,
banking-capital-markets-regulation, controls-assessment, disclosure-review,
external-audit-lifecycle, finance-process-automation,
financial-statement-review, fs-internal-consistency, going-concern-audit,
group-audit, journal-entry-testing, process-mining-optimization,
risk-assessment, risk-control-governance, run-project-checks,
scaffold-audit-module, uk-compliance-review

Always cite the relevant standard (ISA, IFRS, FRS, Companies Act, FCA
handbook).

Never provide legal, tax, or investment advice.
```

---

## Automated setup via Claude for Chrome

Paste this prompt in a Claude for Chrome session:

```
Open https://claude.ai/new-project.

For each skill in the list below:
1. Navigate to https://claude.ai/new-project
2. Fetch the SKILL.md from:
   https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/.claude/skills/<skill>/SKILL.md
3. Name field = <skill>
4. Description field = the YAML `description` line
5. Custom Instructions = the body after the YAML frontmatter
6. Click "Create project"
7. Confirm saved; move to next

Skills (25): accounting-judgments-estimates, ai-finance-accounting,
audit-commit, audit-evidence-sampling, audit-planning-materiality,
audit-pr-review, audit-quality-eqr, audit-report-writer, auditors-report,
banking-capital-markets-regulation, controls-assessment, disclosure-review,
external-audit-lifecycle, finance-process-automation,
financial-statement-review, fs-internal-consistency, going-concern-audit,
group-audit, journal-entry-testing, process-mining-optimization,
risk-assessment, risk-control-governance, run-project-checks,
scaffold-audit-module, uk-compliance-review
```

---

## Keep in sync with Claude Code

When a skill changes:
1. Edit `.claude/skills/<skill>/SKILL.md` locally
2. Commit + push
3. Update the corresponding claude.ai Project's custom instructions
   (or re-run the Claude for Chrome prompt to bulk-update)

---

## Recommended knowledge files per Project

- Firm audit methodology manual
- House templates (engagement letter, materiality memo, KAM drafts)
- Redacted PY files for client continuity
- Standards text extracts (ISA UK, FRS 102, IFRS S1/S2, FCA handbook)
- DK-HQ + audit-engine architecture docs
- PORTFOLIO.md for tone + positioning

⚠️ Confirm data-protection + engagement terms before uploading client-
confidential material. Anthropic doesn't train on enterprise / Teams /
API data.

---

## Validation after setup

- [ ] 25 Projects visible at https://claude.ai/projects
- [ ] Each Project has custom instructions populated
- [ ] Smoke-test one Project with a real scenario; answer reflects framework
- [ ] Star daily-use Projects
- [ ] Share with team (Teams / Enterprise plan)

---

## Why this is worth doing

- Depth: 200+ line custom instructions > one-shot prompts
- Consistency: same framework applied every time
- Audit trail: chat history = how analysis was done
- Leverage: share once, team benefits
- Defensibility: methodology documented for regulator review
