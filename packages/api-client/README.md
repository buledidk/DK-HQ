# @dk-hq/api-client

> Unified API client for all external service integrations

## Overview

This package provides a unified interface to:

- **AI Services**: OpenAI, Anthropic Claude
- **Accounting Software**: Xero, QuickBooks, Sage
- **UK Government APIs**: Companies House, HMRC
- **Document Services**: OCR, PDF processing

## Usage

```typescript
import { 
  AIClient, 
  CompaniesHouseClient, 
  XeroClient 
} from '@dk-hq/api-client';

// AI Analysis
const ai = new AIClient({ provider: 'anthropic' });
const risks = await ai.analyzeRisks(financialData);

// Companies House lookup
const ch = new CompaniesHouseClient(process.env.COMPANIES_HOUSE_API_KEY);
const company = await ch.getCompany('12345678');

// Xero integration
const xero = new XeroClient();
await xero.authenticate(tokens);
const trialBalance = await xero.getTrialBalance();
```

## Structure (Planned)

```
src/
├── openai/
│   ├── client.ts
│   └── types.ts
├── anthropic/
│   ├── client.ts
│   └── types.ts
├── xero/
│   ├── client.ts
│   ├── auth.ts
│   └── types.ts
├── quickbooks/
│   ├── client.ts
│   └── types.ts
├── companies-house/
│   ├── client.ts
│   └── types.ts
└── index.ts              # Unified exports
```

## Configuration

All API keys should be set via environment variables:

```bash
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
COMPANIES_HOUSE_API_KEY=...
XERO_CLIENT_ID=...
XERO_CLIENT_SECRET=...
```

See `docs/API-KEYS-REGISTRY.md` for complete documentation.
