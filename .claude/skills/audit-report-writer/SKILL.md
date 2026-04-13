---
name: audit-report-writer
description: Use when the user asks for a status report, implementation summary, progress update, handoff doc, or execution report — phrases like "write a report", "summarise progress", "status update", "handoff note", "implementation summary". Produces reports in the established format used across audit-engine (IMPLEMENTATION_COMPLETE.md, FINAL_SYSTEM_REPORT.md, PROGRESS_EXECUTION_REPORT_*.md).
---

# audit-report-writer

Generate reports in the house style already present in audit-engine.

## When triggered, ask ONE question

Report type?
1. **Implementation summary** — what was built vs requirements
2. **Status / progress** — dated snapshot of work-in-flight
3. **Verification checklist** — line-by-line "does it meet the spec"
4. **Handoff note** — what the next person needs to know
5. **Go-live report** — readiness, risks, rollback plan

## House-style template

### Front matter
```markdown
# <Report Title>

**Date:** YYYY-MM-DD
**Repo:** buledidk/<repo>
**Branch:** <branch>
**Author:** <Claude session id or user>
**Scope:** <one line>
```

### Section order

1. Executive summary (3–5 bullets)
2. Scope (in/out)
3. Work completed (grouped by area)
4. Metrics (tests X/Y, build, bundle size, coverage)
5. Regulatory coverage (ISA/FRS/FCA items touched)
6. Verification checklist (`- [x]` / `- [ ]`)
7. Known issues / risks (severity + mitigation)
8. Rollback plan (go-live only)
9. Next steps (dated, owned)
10. Appendix (file list, migrations, links)

### Metrics block

```
- Tests: 219 / 219 passing ✅
- Build: 0 errors, 247 modules, <XX>kb gzipped
- Lint: clean
- Type check: clean
- Coverage: <XX>%
- Audit-trail integrity: PASS
```

## Filename conventions

- `IMPLEMENTATION_<AREA>_SUMMARY.md`
- `PHASE_<N>_IMPLEMENTATION_STATUS.md`
- `PROGRESS_EXECUTION_REPORT_YYYY-MM-DD.md`
- `FINAL_VERIFICATION_CHECKLIST.md`
- `GO-LIVE-<AREA>.txt` (.txt is the convention)

Root for audit-engine; `docs/` for DK-HQ.

## Do NOT

- Invent metrics (say "not measured" if unknown)
- Mark `- [x]` unverified
- Claim regulatory coverage not verified
- Use marketing language
