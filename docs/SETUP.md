# Setup Guide

> **Connect Supabase, Vercel, and GitHub for DK-HQ**

## Prerequisites

- Node.js 18+
- pnpm 8+
- Git
- GitHub account
- Supabase account
- Vercel account

---

## 1. Supabase Setup

### Create Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Settings > API
3. Get your database password from Settings > Database

### Configure Environment

```bash
# Add to your .env file
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.your-project.supabase.co:5432/postgres
```

### Run Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

### Configure Auth

1. Go to Authentication > Providers
2. Enable Email authentication
3. (Optional) Enable OAuth providers (Google, GitHub)
4. Set Site URL to `http://localhost:3000` (dev) or your production URL
5. Add redirect URLs:
   - `http://localhost:3000/api/auth/callback`
   - `https://dk-hq.vercel.app/api/auth/callback`

---

## 2. Vercel Setup

### Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Select the DK-HQ repo

### Configure Project

**Framework Preset**: Next.js
**Root Directory**: `apps/audit-web`
**Build Command**: `pnpm build`
**Install Command**: `pnpm install`

### Add Environment Variables

In Vercel Dashboard > Settings > Environment Variables:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...` | All |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | Production, Preview |
| `DATABASE_URL` | `postgresql://...` | Production, Preview |

### Get Vercel Tokens for CI/CD

1. Go to Settings > Tokens
2. Create a new token with full access
3. Add to GitHub Secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID` (from `.vercel/project.json`)
   - `VERCEL_PROJECT_ID` (from `.vercel/project.json`)

---

## 3. GitHub Actions Setup

### Add Repository Secrets

Go to GitHub Repo > Settings > Secrets and variables > Actions

**Supabase Secrets:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_ACCESS_TOKEN` (from Supabase dashboard > Access Tokens)
- `SUPABASE_DB_PASSWORD`
- `SUPABASE_PROJECT_ID`

**Vercel Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## 4. API Keys Setup

### Companies House

1. Register at [developer.company-information.service.gov.uk](https://developer.company-information.service.gov.uk/)
2. Create an application
3. Copy the API key to `COMPANIES_HOUSE_API_KEY`

### Xero

1. Register at [developer.xero.com](https://developer.xero.com/)
2. Create an app (OAuth 2.0 type)
3. Set redirect URI: `http://localhost:3000/api/auth/callback/xero`
4. Copy Client ID and Secret

### QuickBooks

1. Register at [developer.intuit.com](https://developer.intuit.com/)
2. Create an app
3. Set redirect URI: `http://localhost:3000/api/auth/callback/quickbooks`
4. Copy Client ID and Secret

### AI Services

- **OpenAI**: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Anthropic**: [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)

---

## 5. Local Development

```bash
# Clone the repository
git clone https://github.com/buledidk/DK-HQ.git
cd DK-HQ

# Copy environment file
cp .env.example .env

# Fill in your API keys in .env

# Install dependencies
pnpm install

# Run Supabase locally (optional)
supabase start

# Run development server
pnpm dev
```

---

## 6. Deployment

### Automatic (via GitHub Actions)

Push to `main` branch triggers:
1. Lint and type check
2. Run tests
3. Build application
4. Deploy to Vercel (production)
5. Run Supabase migrations

### Manual

```bash
# Deploy to Vercel
vercel --prod

# Push Supabase migrations
supabase db push
```

---

## Troubleshooting

### Supabase Connection Issues

```bash
# Test database connection
psql $DATABASE_URL -c "SELECT 1"

# Check Supabase status
supabase status
```

### Vercel Build Failures

1. Check build logs in Vercel Dashboard
2. Ensure all environment variables are set
3. Verify Node.js version matches (18+)

### Auth Redirect Issues

1. Verify Site URL in Supabase Auth settings
2. Check redirect URLs are whitelisted
3. Ensure cookies are enabled in browser

---

*Last Updated: April 2026*
