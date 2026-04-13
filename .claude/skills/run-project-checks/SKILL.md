---
name: run-project-checks
description: Use when the user wants to run tests, lint, typecheck, or build — phrases like "run the tests", "lint this", "does it build", "check everything", "is it green". Auto-detects whether the current project is audit-engine (npm), DK-HQ (pnpm monorepo), or Auditengine (static) and runs the correct command chain.
---

# run-project-checks

Unified "is it green?" workflow for the buledidk repos.

## 1. Detect the project

| Signal | Project | Tooling |
|--------|---------|---------|
| `pnpm-workspace.yaml` present | **DK-HQ** | pnpm, workspace-aware |
| `package.json` with `"vite"` + `src/AuditEngine*.jsx` | **audit-engine** | npm, Vite 8, Vitest 4 |
| Single `index.html` at root, no `package.json` | **Auditengine** | static |
| None of the above | Ask the user |

## 2. Run the right command chain

### audit-engine
```bash
npm run lint                    # ESLint v9 flat config
npx vitest run                  # target: 219/219 passing
npm run build                   # Vite production build, 0 errors
```
Optional: `npm run agents` (CLI agent tool) — only if the user asks.

### DK-HQ (pnpm monorepo)
```bash
pnpm install --frozen-lockfile  # only if node_modules missing
pnpm -r lint
pnpm -r test
pnpm -r build
```
Scope to one workspace when possible:
```bash
pnpm --filter ./apps/audit-engine test
```

### Auditengine
- `python3 -m http.server 8000` (or equivalent) and confirm `index.html` loads.
- No lint/test suite. If the user wants HTML validation, use `npx html-validate index.html`.

## 3. Report results

- Show pass/fail counts for each step
- For test failures: show the failing test name + first 10 lines of the error
- For build failures: show the first error, file, and line
- For lint: summarise by rule (e.g. "12 `no-unused-vars` in src/services/")

## 4. On failure

Do NOT attempt to fix without confirmation unless the fix is trivial (e.g.
formatter auto-fix, missing import). Ask the user before:

- Modifying test expectations
- Adding `// eslint-disable-*`
- Skipping tests with `.skip` or `.only`
- Downgrading package versions

## 5. Environment notes

- audit-engine requires Node 20.x
- DK-HQ requires Node 18+ and pnpm 8+
- Supabase env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) must be set for audit-engine integration tests
- If `VITE_CLAUDE_API_KEY` is missing, Claude-powered tests will be skipped (not failed) — expected
