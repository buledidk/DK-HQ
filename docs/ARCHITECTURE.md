# System Architecture

> **DK-HQ Audit Automation Platform - Technical Architecture**

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                                    │
├─────────────────────────────┬───────────────────────────────────────────────┤
│      Web Application        │           Desktop Application                 │
│      (React/Next.js)        │           (Electron + React)                  │
│                             │           - Offline Capability                │
│                             │           - Local File Access                 │
└─────────────────────────────┴───────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              API LAYER                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                         Next.js API Routes / Express                         │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │    Auth      │  │   Audit      │  │   Client     │  │   Reports    │    │
│  │   Routes     │  │   Routes     │  │   Routes     │  │   Routes     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SERVICE LAYER                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │                    packages/api-client                                  │ │
│  │   Unified API client handling all external service integrations        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  AI Service  │  │  Accounting  │  │  Companies   │  │   Document   │    │
│  │  (OpenAI/    │  │  Service     │  │  House       │  │   Service    │    │
│  │   Claude)    │  │  (Xero/QB)   │  │  Service     │  │   (OCR/PDF)  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DATA LAYER                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  PostgreSQL  │  │   Redis      │  │    S3        │  │  Local FS    │    │
│  │  (Primary)   │  │   (Cache)    │  │  (Documents) │  │  (Desktop)   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Application Structure

### Monorepo Layout

```
DK-HQ/
├── apps/
│   ├── audit-engine/          # Core audit automation logic
│   │   ├── src/
│   │   │   ├── compliance/    # ISA, FRS 102, Companies Act
│   │   │   ├── procedures/    # Audit procedures & tests
│   │   │   ├── workpapers/    # Working paper generation
│   │   │   └── reports/       # Report generation
│   │   └── package.json
│   │
│   ├── audit-web/             # Web application
│   │   ├── src/
│   │   │   ├── app/          # Next.js app router
│   │   │   ├── components/   # React components
│   │   │   └── api/          # API routes
│   │   └── package.json
│   │
│   ├── audit-desktop/         # Electron desktop app
│   │   ├── src/
│   │   │   ├── main/         # Electron main process
│   │   │   └── preload/      # Preload scripts
│   │   └── package.json
│   │
│   ├── company-portal/        # Indus Nexus company portal
│   │   └── ...
│   │
│   └── audit-automation/      # Automation scripts & tools
│       └── ...
│
├── packages/
│   ├── shared/                # Shared utilities
│   │   ├── src/
│   │   │   ├── types/        # TypeScript types
│   │   │   ├── utils/        # Utility functions
│   │   │   └── constants/    # Shared constants
│   │   └── package.json
│   │
│   └── api-client/            # Unified API client
│       ├── src/
│       │   ├── openai/       # OpenAI integration
│       │   ├── anthropic/    # Claude integration
│       │   ├── xero/         # Xero integration
│       │   ├── quickbooks/   # QuickBooks integration
│       │   ├── companies-house/ # Companies House API
│       │   └── index.ts      # Unified exports
│       └── package.json
│
└── package.json               # Root package.json (workspace config)
```

## Core Modules

### 1. Compliance Engine (`apps/audit-engine/src/compliance/`)

Handles UK audit compliance requirements:

- **ISA (UK)** - International Standards on Auditing
  - Risk assessment procedures
  - Substantive testing
  - Analytical procedures
  
- **FRS 102** - Financial Reporting Standard
  - Disclosure checklists
  - Accounting policy validation
  
- **Companies Act 2006**
  - Filing requirements
  - Director duties validation
  - Statutory audit thresholds

### 2. AI Integration (`packages/api-client/src/`)

```typescript
// Unified AI client usage
import { AIClient } from '@dk-hq/api-client';

const ai = new AIClient({
  provider: 'anthropic', // or 'openai'
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Risk assessment
const risks = await ai.analyzeRisks(financialData);

// Document analysis
const extracted = await ai.extractDocumentData(pdfBuffer);
```

### 3. Accounting Integration

```typescript
import { AccountingClient } from '@dk-hq/api-client';

// Connect to Xero
const xero = new AccountingClient({ provider: 'xero' });
await xero.authenticate(tokens);

// Fetch trial balance
const trialBalance = await xero.getTrialBalance(startDate, endDate);

// Fetch journal entries
const journals = await xero.getJournalEntries({ limit: 100 });
```

### 4. Companies House Integration

```typescript
import { CompaniesHouseClient } from '@dk-hq/api-client';

const ch = new CompaniesHouseClient(process.env.COMPANIES_HOUSE_API_KEY);

// Company lookup
const company = await ch.getCompany('12345678');

// Filing history
const filings = await ch.getFilingHistory('12345678');

// Officers
const officers = await ch.getOfficers('12345678');
```

## Data Flow

### Audit Engagement Workflow

```
1. Client Setup
   └─> Companies House lookup
   └─> Accounting software connection
   └─> Risk assessment questionnaire

2. Planning Phase
   └─> AI-powered risk assessment
   └─> Materiality calculation
   └─> Audit strategy generation

3. Fieldwork
   └─> Data extraction from accounting software
   └─> Substantive testing procedures
   └─> Working paper generation

4. Completion
   └─> Analytical review
   └─> Report generation
   └─> Filing preparation
```

## Security Considerations

1. **API Keys**: Stored in environment variables, never in code
2. **OAuth Tokens**: Encrypted at rest, refreshed automatically
3. **Client Data**: Encrypted in transit (TLS) and at rest (AES-256)
4. **Audit Trail**: All actions logged with user attribution
5. **Access Control**: Role-based permissions (Admin, Manager, Staff)

## Deployment Architecture

### Web (Production)

```
                    ┌─────────────┐
                    │   Vercel    │
                    │  (Next.js)  │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌─────▼─────┐     ┌────▼────┐
    │ Vercel  │      │  Neon/    │     │   S3    │
    │  Edge   │      │ Supabase  │     │ Storage │
    │Functions│      │  (PG DB)  │     │         │
    └─────────┘      └───────────┘     └─────────┘
```

### Desktop (Distribution)

- **Windows**: MSI installer via electron-builder
- **macOS**: DMG/PKG via electron-builder
- **Auto-updates**: electron-updater with GitHub releases

---

*Last Updated: April 2026*
