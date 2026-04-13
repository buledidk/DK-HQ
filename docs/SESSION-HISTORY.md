# Session History & Key Decisions

> Consolidated record of major decisions, architectural choices, and work across all Claude sessions.

## April 2026 — Consolidation Session

### Decision: Create DK-HQ as Master Monorepo
- **Rationale:** Work was scattered across 4 repos (Audit-Engine, Auditengine, Indus-Nexus-Limited, DK-HQ) and multiple Claude sessions.
- **Approach:** pnpm workspace monorepo with apps/, packages/, docs/ structure.
- **Outcome:** Single source of truth for all Audit Automation work.

### Decision: Dual Deployment Target
- **Web:** React/Next.js for SaaS
- **Desktop:** Electron for offline-capable audit work
- **Shared:** Core engine code via `@dk-hq/audit-engine` and `@dk-hq/api-client`

### Decision: Compliance-First Architecture
- ISA (UK) compliance baked into the risk-assessment module
- FRS 102 disclosure checks via `ComplianceChecklist`
- Companies Act 2006 size classification (small/medium/large)

### Decision: Unified API Client Package
- `@dk-hq/api-client` wraps all external APIs
- Reads credentials from a single `.env` via `ApiClient.fromEnv()`
- Integrations: Companies House, Xero, QuickBooks, Sage, HMRC, OpenAI, Anthropic

---

## Repositories Merged / To Merge

| Repo | Language | Status | Target Location |
|------|----------|--------|-----------------|
| Audit-Engine | JavaScript | To migrate | `apps/audit-engine/` |
| Auditengine | HTML | To migrate | `apps/audit-web/` |
| Indus-Nexus-Limited | JavaScript | To migrate | `apps/company-portal/` |
| DK-HQ | - | Base (this repo) | root |

---

## Open Items

- [ ] Source code migration from Audit-Engine repo
- [ ] HTML UI migration from Auditengine repo
- [ ] Company portal migration from Indus-Nexus-Limited
- [ ] Fill in actual API keys in `.env` (see `docs/API-KEYS-REGISTRY.md`)
- [ ] Wire up CI secrets for deployment
