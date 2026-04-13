# Audit Web

> Web application for DK-HQ Audit Automation Platform

## Overview

Next.js web application providing:

- User authentication
- Dashboard interface
- Client management
- Audit workflow UI
- Report generation

## Status

**Pending Migration** - Code to be migrated from the original Auditengine repository.

## Tech Stack (Planned)

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Structure (Planned)

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (dashboard)/      # Main dashboard
│   ├── clients/          # Client management
│   ├── engagements/      # Audit engagements
│   └── api/              # API routes
├── components/
│   ├── ui/               # Base UI components
│   └── features/         # Feature components
└── lib/
    ├── auth/             # Auth utilities
    └── api/              # API client
```

## Development

```bash
pnpm dev
```
