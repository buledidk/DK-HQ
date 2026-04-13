# @dk-hq/shared

> Shared utilities, types, and constants for DK-HQ platform

## Overview

This package contains:

- TypeScript type definitions
- Shared utility functions
- Constants and enums
- Validation schemas

## Usage

```typescript
import { ClientType, AuditStatus } from '@dk-hq/shared';
import { formatCurrency, calculateMateriality } from '@dk-hq/shared/utils';
```

## Structure (Planned)

```
src/
├── types/
│   ├── client.ts         # Client types
│   ├── engagement.ts     # Engagement types
│   ├── workpaper.ts      # Working paper types
│   └── index.ts          # Type exports
├── utils/
│   ├── formatting.ts     # Formatting utilities
│   ├── calculations.ts   # Financial calculations
│   └── validation.ts     # Validation helpers
└── constants/
    ├── audit.ts          # Audit constants
    └── compliance.ts     # Compliance constants
```
