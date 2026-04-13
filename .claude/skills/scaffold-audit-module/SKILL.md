---
name: scaffold-audit-module
description: Use when the user wants to create a new app, package, audit module, ISA standard module, FRS section, or client-engagement scaffold — phrases like "scaffold", "bootstrap a new", "add a new app/package/module", "create a new audit procedure". Generates the file layout expected in DK-HQ (pnpm workspace) or audit-engine.
---

# scaffold-audit-module

Create new units in the buledidk stack with the structure the repo already uses.

## 1. Identify the target

- New **app** in DK-HQ (`apps/<name>/`)?
- New **package** in DK-HQ (`packages/<name>/`)?
- New **audit module** in audit-engine?
- New **regulatory extension** (ISA / FRS / FCA / Companies Act)?

## 2. DK-HQ: new app in apps/<name>/

```
apps/<name>/
├── package.json          # "name": "@dk-hq/<name>", workspace:* for internal deps
├── README.md
├── src/
│   └── index.(ts|tsx|js)
├── tests/
│   └── <name>.test.(ts|js)
└── tsconfig.json         # extends ../../tsconfig.base.json
```

Add to `pnpm-workspace.yaml` if the glob doesn't cover it.

## 3. DK-HQ: new package in packages/<name>/

Same layout but:
- `"private": false` only if publishable
- exports map for dual `import`/`require`
- No runtime UI — libraries only

## 4. audit-engine: new audit module

```
src/
├── agents/              # multi-agent-framework agent
├── services/            # background engine
├── modules/<name>/
│   ├── <Name>Panel.jsx
│   ├── <name>Engine.js
│   ├── <name>.data.js
│   └── <name>.test.js
```

Register the panel route in `src/router.jsx`.

## 5. New regulatory extension

| Source | File |
|--------|------|
| ISA (UK) standard | `src/StandardsLibrary.js` |
| Audit procedure | `src/AuditMethodology.js` |
| FRS section | `src/FRSEncyclopaedia.js` |
| FCA handbook / PRIN / SYSC / CASS | `src/RegulatoryData.js` |

Always include citation: standard number + paragraph + effective date.

## 6. Required tests (gate for every new module)

- Happy-path unit test
- Edge-case test (empty input, boundary)
- If writes to Supabase: test `audit_trail` entry written
- If handles PII: test no PII reaches console/logs

## 7. Finalise

- Update `docs/ARCHITECTURE.md` (DK-HQ) or `CLAUDE.md` (audit-engine)
- Run `run-project-checks`
- Hand off to `audit-commit`
