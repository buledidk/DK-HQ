# Claude Code Context

This file provides context for Claude Code when working on DK-HQ.

## Project Overview

DK-HQ is the **Master Portal** consolidating all Audit Automation work into one monorepo. It unifies:
- Audit-Engine (core engine)
- Auditengine (HTML/web UI)
- Indus-Nexus-Limited (company portal)

## Architecture

- **Monorepo:** pnpm workspaces
- **apps/** — end-user applications (audit-engine, audit-web, company-portal, etc.)
- **packages/** — shared libraries (@dk-hq/shared, @dk-hq/api-client)
- **docs/** — architecture, roadmap, API registry, session history

## Key Files

- `docs/ROADMAP.md` — Strategic roadmap across 6 phases
- `docs/API-KEYS-REGISTRY.md` — Central API key documentation
- `docs/ARCHITECTURE.md` — System design
- `docs/SESSION-HISTORY.md` — Key decisions across sessions
- `.env.example` — Template for all API keys

## Compliance Context

The Audit Engine is built around UK audit compliance:
- **ISA (UK)** — International Standards on Auditing (risk assessment, materiality, procedures)
- **FRS 102** — Financial Reporting Standard (disclosures, accounting policies)
- **Companies Act 2006** — Size classification, statutory audit thresholds

## Conventions

- ES modules (`"type": "module"` in package.json)
- Node 18+ (uses native `fetch`)
- Workspace packages referenced as `@dk-hq/<name>` with `workspace:*`
- Run from root with pnpm: `pnpm dev`, `pnpm test`, `pnpm build`

## Development Workflow

1. Branch off `main` with pattern `feature/<name>` or `fix/<name>`
2. CI runs lint, typecheck, test, build on every PR
3. Merge to `main` triggers deploy workflow

## API Integrations

All external APIs flow through `@dk-hq/api-client`. Never call external APIs directly from app code — use the client wrappers for consistent auth, rate limiting, and error handling.
