# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

DK-HQ is the master portal consolidating DK Buledi's audit-automation work — a **pnpm workspace** that will host five previously-separate repos as internal apps, plus shared packages, plus a substantial `.claude/` skills pack that is itself part of the product (a portfolio-grade, auto-triggering skill library for finance, audit, risk, and governance work).

The apps under `apps/` are currently **scaffolded but empty** ("Pending migration" in the README table). Do not assume code exists there — check the directory before making claims about behaviour, and favour creating new files over assuming migration has happened.

## Commands

Root is a pnpm workspace; every script fans out via `pnpm -r` to all apps/packages:

```bash
pnpm install              # install all workspace dependencies
pnpm dev                  # run every package's dev script in parallel
pnpm build                # build all workspace packages
pnpm test                 # run all tests
pnpm lint                 # lint all packages
pnpm typecheck            # type-check all packages
pnpm clean                # clean all build outputs
```

Run a single package's script by filtering:

```bash
pnpm --filter <pkg-name> dev
pnpm --filter <pkg-name> test -- <test-file-pattern>
```

Skills pipeline (this repo's other first-class workflow):

```bash
ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills
# Reads every .claude/skills/*/SKILL.md, POSTs new skills and PATCHes existing
# ones to https://api.anthropic.com/v1/skills, writes the id map to
# .claude/skills-manifest.json. Idempotent.
```

One-command bootstrap (clones, installs, syncs):

```bash
curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh \
  | ANTHROPIC_API_KEY=sk-ant-... bash
```

Environment: Node ≥ 18, pnpm ≥ 8 (pinned via `packageManager: pnpm@8.15.0`). Copy `.env.example` → `.env` before dev — it registers API keys for Anthropic, OpenAI, Xero, QuickBooks, Sage, Companies House, HMRC. See `docs/API-KEYS-REGISTRY.md` if present.

## Architecture

### Workspace layout

```
apps/                         # end-user applications (all empty — pending migration)
  audit-engine/               # core audit engine (ex: Audit-Engine repo, JS)
  audit-web/                  # web interface (ex: Auditengine, HTML/React)
  audit-automation/           # automation scripts (ex: audit-automation)
  company-portal/             # Indus Nexus portal (ex: Indus-Nexus-Limited)
  main/                       # main application (ex: Main)

packages/                     # shared internal libraries
  api-client/                 # unified API client for all external integrations
  shared/                     # shared utilities / components

scripts/                      # repo-level automation (not workspace packages)
  setup.sh                    # one-command local setup
  bootstrap.sh                # clones+installs+syncs skills (for fresh machines)
  sync-skills.ts              # pushes .claude/skills/* to Anthropic Skills API

.claude/                      # auto-loaded by Claude Code in this repo
  settings.json               # harness config (permissions, env)
  skills/                     # 44 auto-triggering skills (SKILL.md per folder)
  agents/                     # 3 orchestrator agents (audit-file-reviewer, fs-close-coordinator, governance-pack-builder)
  skills-manifest.json        # skill-name → Anthropic skill_id (written by sync-skills)

docs/                         # architecture, API-keys registry, roadmap, session history
```

### Key architectural points for future Claude instances

1. **The apps are empty scaffolds.** The README lists five repos "pending migration" into `apps/`. If a user asks you to modify code in `apps/<name>`, check first — you will likely be creating the file, not editing it. When creating new files in an app, follow the pattern hinted by that app's origin (audit-engine was JS; audit-web was HTML/React; the others are TBD).

2. **The skills pack is a first-class deliverable, not repo furniture.** `.claude/skills/` contains 44 dense, ISA / IFRS / UK-GAAP / regulatory skills that auto-fire from keyword-rich `description:` YAML. When adding a new skill:
   - Create `.claude/skills/<kebab-name>/SKILL.md` with `name` and keyword-packed `description` frontmatter.
   - Add a row to `.claude/skills/README.md` (the skill index).
   - Add a branch to `.claude/skills/SKILL_TREES.md` (routing trees).
   - Run `pnpm sync-skills` to deploy to the user's Anthropic org.
   - Do NOT rename existing skill folders — `skills-manifest.json` maps folder names to remote IDs; a rename creates an orphan.

3. **`sync-skills.ts` is idempotent via the manifest.** It POSTs new skills, PATCHes existing ones based on `skills-manifest.json`. If a sync fails partway through, re-running picks up cleanly. If the manifest drifts from remote (e.g., a skill deleted via UI), delete the stale id from the manifest and re-sync.

4. **Compliance framing is intentional.** Code and docs assume UK statutory audit context by default: ISA (UK), FRS 102, Companies Act 2006 (s.495-497). IFRS and US GAAP are supported but not the default. The demo entity is "Indus Nexus Limited" (primary) or "ABC Company" (fallback) — never substitute a real client/firm name.

5. **Integrations route through `packages/api-client/`.** Any new external-service call (Xero, QuickBooks, Sage, Companies House, HMRC, Anthropic, OpenAI) should be added there rather than duplicated per app. Credentials come from `.env` and are catalogued in `docs/API-KEYS-REGISTRY.md`.

6. **The dev branch.** Ongoing work happens on `claude/draft-skills-profile-5mltb` (user-pinned). The user's contribution rules say: develop on this branch, commit with clear messages, push with `git push -u origin <branch>`, never push to a different branch without explicit permission.

### Useful entry points for common questions

| Question | Read first |
|---|---|
| "What does this repo do?" | `README.md` + `.claude/skills/PORTFOLIO.md` |
| "How do I deploy the skills?" | `.claude/skills/DEPLOY_TODAY.md` + `.claude/skills/SETUP_CONNECTIVITY.md` |
| "Which skill handles X?" | `.claude/skills/SKILL_TREES.md` (router + keyword index) |
| "How does sync-skills work?" | `scripts/sync-skills.ts` — single file, no runtime deps beyond global `fetch` |
| "What's the roadmap?" | `docs/ROADMAP.md` (if present) |
| "How are integrations wired?" | `packages/api-client/` (when migrated) + `docs/API-KEYS-REGISTRY.md` |

## Conventions worth knowing

- Conventional commits (`feat(skills): ...`, `docs(skills): ...`, `chore(claude): ...`).
- Skills with acronyms in the body should spell the first occurrence in full (e.g., "Financial Planning & Analysis (FP&A)", "International Standard on Auditing (ISA) 500") so the skill is discoverable regardless of how the user phrases a request.
- `.env` files are gitignored; `.env.example` is the canonical list of required keys.
- Commit signing via the sandbox has failed historically — in this environment use `git -c commit.gpgsign=false commit` if a signing hook blocks you. Do not silently skip other hooks.
