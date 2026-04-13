# API Keys Registry

> **Central documentation for all API keys across the Audit Automation platform**

## Overview

This document serves as the single source of truth for all API integrations. All keys should be stored in the root `.env` file and referenced using the environment variable names below.

---

## AI/LLM Services

### OpenAI
| Field | Value |
|-------|-------|
| **Service** | OpenAI API |
| **Purpose** | AI analysis, document processing, content generation |
| **Env Variable** | `OPENAI_API_KEY` |
| **Apps Using** | audit-engine, audit-automation |
| **Obtain From** | https://platform.openai.com/api-keys |
| **Rate Limits** | Tier-based, check dashboard |

### Anthropic (Claude)
| Field | Value |
|-------|-------|
| **Service** | Anthropic Claude API |
| **Purpose** | Risk assessment, document analysis, audit procedures |
| **Env Variable** | `ANTHROPIC_API_KEY` |
| **Apps Using** | audit-engine |
| **Obtain From** | https://console.anthropic.com/settings/keys |
| **Rate Limits** | Tier-based |

---

## UK Government APIs

### Companies House
| Field | Value |
|-------|-------|
| **Service** | Companies House Public Data API |
| **Purpose** | Company search, filings, officers, PSC data |
| **Env Variables** | `COMPANIES_HOUSE_API_KEY` |
| **Apps Using** | audit-engine, company-portal |
| **Obtain From** | https://developer.company-information.service.gov.uk/ |
| **Rate Limits** | 600 requests/5 minutes |

### HMRC
| Field | Value |
|-------|-------|
| **Service** | HMRC APIs |
| **Purpose** | VAT, Corporation Tax, Making Tax Digital |
| **Env Variables** | `HMRC_CLIENT_ID`, `HMRC_CLIENT_SECRET` |
| **Apps Using** | audit-engine |
| **Obtain From** | https://developer.service.hmrc.gov.uk/ |
| **Notes** | OAuth2 flow required |

---

## Accounting Software

### Xero
| Field | Value |
|-------|-------|
| **Service** | Xero API |
| **Purpose** | Accounting data sync, trial balance, journal entries |
| **Env Variables** | `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET` |
| **Apps Using** | audit-engine |
| **Obtain From** | https://developer.xero.com/app/manage |
| **Auth Type** | OAuth2 |
| **Scopes Needed** | `accounting.transactions.read`, `accounting.reports.read` |

### QuickBooks
| Field | Value |
|-------|-------|
| **Service** | QuickBooks Online API |
| **Purpose** | Accounting data sync, financial reports |
| **Env Variables** | `QB_CLIENT_ID`, `QB_CLIENT_SECRET` |
| **Apps Using** | audit-engine |
| **Obtain From** | https://developer.intuit.com/app/developer/dashboard |
| **Auth Type** | OAuth2 |

### Sage
| Field | Value |
|-------|-------|
| **Service** | Sage Business Cloud API |
| **Purpose** | Accounting data sync |
| **Env Variables** | `SAGE_CLIENT_ID`, `SAGE_CLIENT_SECRET` |
| **Apps Using** | audit-engine |
| **Obtain From** | https://developer.sage.com/api/accounts/ |
| **Auth Type** | OAuth2 |

---

## Document & Storage

### AWS S3 (if used)
| Field | Value |
|-------|-------|
| **Service** | Amazon S3 |
| **Purpose** | Document storage, audit file backup |
| **Env Variables** | `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET` |
| **Apps Using** | All apps |

### Google Cloud (if used)
| Field | Value |
|-------|-------|
| **Service** | Google Cloud Storage / Vision API |
| **Purpose** | Document OCR, storage |
| **Env Variables** | `GOOGLE_CLOUD_PROJECT`, `GOOGLE_APPLICATION_CREDENTIALS` |
| **Apps Using** | audit-engine |

---

## Email & Notifications

### SendGrid / Mailgun / SMTP
| Field | Value |
|-------|-------|
| **Service** | Email service |
| **Purpose** | Notifications, reports delivery |
| **Env Variables** | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` |
| **Apps Using** | All apps |

---

## Database

### PostgreSQL / MongoDB
| Field | Value |
|-------|-------|
| **Service** | Database |
| **Purpose** | Data persistence |
| **Env Variables** | `DATABASE_URL` |
| **Apps Using** | All apps |

---

## Authentication

### Auth0 / Clerk / Custom
| Field | Value |
|-------|-------|
| **Service** | Authentication provider |
| **Purpose** | User authentication, SSO |
| **Env Variables** | `AUTH_SECRET`, `AUTH_CLIENT_ID`, `AUTH_CLIENT_SECRET` |
| **Apps Using** | All apps |

---

## Action Required

**Please fill in your actual API keys in the `.env` file. This registry documents WHERE keys should go, not the actual values.**

### Steps to Consolidate Your Keys:

1. Open your `.env` file
2. For each service above that you use, add the corresponding environment variable
3. Check your existing repositories for any keys in:
   - `.env` files
   - `.env.local` files
   - Config files
   - Notes/documents
4. Consolidate all keys into the single `.env` file

### Keys to Locate:

- [ ] OpenAI API Key
- [ ] Anthropic API Key  
- [ ] Companies House API Key
- [ ] HMRC Credentials
- [ ] Xero OAuth Credentials
- [ ] QuickBooks OAuth Credentials
- [ ] Sage OAuth Credentials
- [ ] Database connection string
- [ ] Any other service keys

---

*Last Updated: April 2026*
