---
name: audit-pr-review
description: Use when the user asks to review a PR, code diff, or patch — phrases like "review this PR", "look at PR #123", "is this diff okay", "can you audit these changes". Auto-trigger on GitHub PR URLs, `pull_request_read` calls, or pasted diffs. Applies a code-review lens tuned for financial-services / audit-tooling code (buledidk stack).
---

# audit-pr-review

Structured PR review for the buledidk stack. Produce a review that is useful
to merge against, not a generic lint report.

## 1. Gather context

- Read the PR title, description, and linked issue
- Pull the diff: `mcp__github__pull_request_read` with the PR number
- Identify which repo (audit-engine / DK-HQ / Auditengine) and which layer
  (UI, services, agents, regulatory data, DB schema, CI)

## 2. Review in this order (stop early only if blocking issue found)

### A. Correctness
- Does the change do what the PR description claims?
- Are edge cases handled (empty inputs, null, >, <, =)?
- For audit procedures: does the code match the cited ISA/FRS/FCA reference?

### B. Audit-trail & data integrity (CRITICAL for this stack)
- Any new write path to `engagements`, `engagement_data`, `documents`,
  `document_links`, or `audit_trail` must produce an `audit_trail` entry.
- Any mutation of regulatory data (RegulatoryData.js, StandardsLibrary.js,
  AuditMethodology.js, FRSEncyclopaedia.js) must cite a source.
- Destructive operations must be reversible or logged.
- RLS policies present for any new Supabase table.

### C. Compliance surface
- **PII / client data**: encrypted in transit, no logging of names/emails/NI numbers/account numbers
- **Secrets**: no API keys, tokens, or Supabase service-role keys in code, tests, fixtures, or commit messages
- **GDPR**: retention + deletion story for any new data field
- **AML / Sanctions**: if touching client onboarding, sanctions screening must remain on the path
- **FCA Consumer Duty (PS22/9)**: customer-impact changes need a clear fair-value rationale

### D. Code quality
- Tests added/updated (audit-engine: keep 219/219 green or higher)
- ESLint / Prettier clean
- No `any` leaks in new TS; no `eslint-disable` without a one-line reason
- Functions <60 lines; files <500 unless good reason
- No new dependency without a size/maintenance check

### E. Operational
- No breaking change to `vercel.json`
- Migrations in `migrations/` forward-only with rollback note
- Env vars added to `.env.example` AND documented

## 3. Output format

```
## Summary
<one line + overall read: approve / request changes / comment>

## Blocking issues
- [ ] <file:line> — <issue> — <why it blocks>

## Non-blocking suggestions
- <file:line> — <suggestion>

## Compliance checklist
- [x/ ] Audit-trail entries on new writes
- [x/ ] No PII in logs
- [x/ ] Secrets clean
- [x/ ] RLS policies present
- [x/ ] Sources cited for regulatory changes

## Tests
<what ran, passed/failed, missing>
```

## 4. Posting the review

Use `mcp__github__pull_request_review_write` with event `REQUEST_CHANGES` /
`COMMENT` / `APPROVE`.

**Be frugal.** One consolidated review > many nitpick comments.
