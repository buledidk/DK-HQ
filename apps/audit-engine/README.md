# Audit Engine

> Core audit automation logic for DK-HQ platform

## Overview

This app contains the core audit functionality including:

- ISA (UK) compliance framework
- FRS 102 reporting
- Companies Act 2006 requirements
- Working paper generation
- Audit procedures and testing

## Status

**Pending Migration** - Code to be migrated from the original Audit-Engine repository.

## Structure (Planned)

```
src/
├── compliance/
│   ├── isa-uk/           # ISA (UK) procedures
│   ├── frs102/           # FRS 102 checklists
│   └── companies-act/    # Companies Act requirements
├── procedures/
│   ├── risk-assessment/  # Risk assessment logic
│   ├── substantive/      # Substantive testing
│   └── analytical/       # Analytical procedures
├── workpapers/
│   ├── templates/        # Working paper templates
│   └── generator/        # Document generation
└── reports/
    ├── templates/        # Report templates
    └── builder/          # Report builder
```

## Integration Points

- `@dk-hq/api-client` - For AI and external API calls
- `@dk-hq/shared` - Shared types and utilities
