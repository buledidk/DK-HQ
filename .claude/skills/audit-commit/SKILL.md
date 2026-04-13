---
name: audit-commit
description: Use when the user wants to commit, stage, push, or finalise changes in the buledidk repos (audit-engine, Auditengine, DK-HQ). Auto-trigger on phrases like "commit this", "push the changes", "ship it", "save my work", or after a logical unit of edits is complete. Runs project checks first, writes a conventional commit message, pushes to the correct feature branch.
---

# audit-commit

End-to-end commit workflow for buledidk repos. **Never skip hooks, never force-push main.**

## 1. Detect the repo and branch policy

Check `git remote -v` and the repo name:

- **audit-engine** / **Audit-Engine**: production policy is `main`-only, BUT active task branches follow `claude/*` naming. Use whatever branch is currently checked out; confirm with the user if on `main`.
- **Auditengine**: static site — `main` deploys to Vercel. Confirm before committing to `main`.
- **DK-HQ**: pnpm monorepo. Feature branches expected.

If `CLAUDE.md` specifies a branch (e.g. `claude/draft-skills-profile-*`), use that.

## 2. Run pre-commit checks (mandatory)

Run these in order and STOP on first failure. Surface the failure to the user
before committing.

**audit-engine** (npm, React 19 + Vite):
```bash
npm run lint
npx vitest run         # must remain 219/219 or better
npm run build          # must produce 0 errors
```

**DK-HQ** (pnpm monorepo):
```bash
pnpm -r lint
pnpm -r test
pnpm -r build
```

**Auditengine** (static): no test suite — just verify `index.html` parses and
open it in a headless check if possible.

If a check fails: DO NOT commit. Fix the root cause or report to the user.
Never use `--no-verify`.

## 3. Draft the commit message

Use Conventional Commits with a scope:

```
<type>(<scope>): <imperative summary under 72 chars>

<body: why, not what — 2–4 sentences max>

Refs: <issue/PR if any>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `ci`, `build`, `perf`, `compliance`.

Scopes for these repos:
- audit-engine: `audit`, `accuracy`, `agents`, `isa`, `frs`, `fca`, `supabase`, `ui`, `export`
- DK-HQ: `apps/<name>`, `packages/<name>`, `docs`, `scripts`
- Auditengine: `site`

Example:
```
compliance(isa): add ISA (UK) 540 estimation procedures

ISA 540 revised requires auditor to evaluate estimation uncertainty
with separate low/high/reasonable-range points. Previous module
collapsed these into a single point estimate, which failed review.
```

## 4. Stage, commit, push

- `git add <specific-files>` — never `-A` / `.` unless reviewed first
- NEVER stage `.env`, `*.key`, `credentials.json`, `auditengine_monitor.log`, or anything under `exports/` without explicit confirmation
- Commit with a HEREDOC to preserve formatting
- `git push -u origin <branch>` — retry up to 4x with exponential backoff (2s, 4s, 8s, 16s) on network failures only

## 5. After push

Report the commit SHA, branch, and whether CI is running. Ask the user if they
want a PR (do NOT open one automatically).

## Anti-patterns to refuse

- Amending a pushed commit
- Committing to `main` on audit-engine without explicit confirmation (deploys to Vercel)
- Committing the `*_CHECKLIST.md` / `EXECUTE_NOW*.sh` files in audit-engine without a reason
- Committing secrets or `.env*` files
