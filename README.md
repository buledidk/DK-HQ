# DK-HQ: Master Portal

> **Unified Audit Automation Platform** - All dashboards, tools, and project files in one place.

## Overview

DK-HQ is the consolidated master repository bringing together all Audit Automation work from multiple repositories, Claude sessions, and development efforts.

### Consolidated Repositories

| Original Repo | Location in DK-HQ | Status |
|---------------|-------------------|--------|
| Audit-Engine | `apps/audit-engine/` | Pending migration |
| Auditengine | `apps/audit-web/` | Pending migration |
| Indus-Nexus-Limited | `apps/company-portal/` | Pending migration |
| audit-automation | `apps/audit-automation/` | Pending migration |
| Main | `apps/main/` | Pending migration |

## Project Structure

```
DK-HQ/
├── apps/
│   ├── audit-engine/        # Core Audit Engine (JavaScript)
│   ├── audit-web/           # Web Interface (HTML/React)
│   ├── audit-automation/    # Automation Scripts
│   ├── company-portal/      # Indus Nexus Portal
│   └── main/                # Main Application
├── packages/
│   ├── shared/              # Shared utilities & components
│   └── api-client/          # Unified API client for all integrations
├── docs/
│   ├── ARCHITECTURE.md      # System design overview
│   ├── API-KEYS-REGISTRY.md # Central API key documentation
│   ├── ROADMAP.md           # Strategic roadmap
│   └── SESSION-HISTORY.md   # Key decisions & context
└── scripts/
    └── setup.sh             # One-command setup
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/buledidk/DK-HQ.git
cd DK-HQ

# Copy environment variables
cp .env.example .env
# Fill in your API keys in .env

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## API Integrations

This platform integrates with:

- **AI/LLM**: OpenAI, Anthropic (Claude)
- **Accounting**: Xero, QuickBooks, Sage
- **UK Government**: Companies House, HMRC

See [docs/API-KEYS-REGISTRY.md](docs/API-KEYS-REGISTRY.md) for complete API documentation.

## Compliance Standards

- ISA (UK) - International Standards on Auditing
- FRS 102 - Financial Reporting Standard
- Companies Act 2006

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for the full strategic roadmap.

### Current Phase: Foundation
- [x] Repository consolidation structure
- [ ] API keys centralization
- [ ] Code migration from all repos
- [ ] Shared configuration setup

## Development

### Prerequisites
- Node.js 18+
- pnpm 8+
- Git

### Deployment Targets
- **Web**: React/Next.js SaaS application
- **Desktop**: Electron application with offline capability

## License

Proprietary - Indus Nexus Limited

---

*Last Updated: April 2026*
