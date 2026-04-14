---
name: dk-job-scanner
description: Automated UK finance job search, application tracking, CV alignment, and career strategy for senior reporting, technical accounting, controls, SOX/ICFR, and audit roles. Trigger whenever the user mentions job search, job scan, new roles, applications, CV review, cover letter, job tracker, career strategy, salary benchmarking, or any reference to finding or applying for finance roles. Also trigger for specific company or role mentions like "Rank Group", "Deliveroo finance", "SOX Manager", or any phrasing like "run the scan", "any new roles", "update the tracker", or "check for jobs". Covers the full application lifecycle from discovery through offer negotiation.
---

# DK Job Scanner

End-to-end job search automation and application management for senior UK
finance roles. Designed for a Dynamic Finance Professional with 9+ years
across statutory audit, IFRS, FRS 102, SOX/ICFR, and financial controls,
holding ACCA membership and ILR status in the UK.

> **Provenance:** This file is a faithful mirror of the canonical `dk-job-scanner`
> skill authored directly in Anthropic Console. To refresh from the live source:
> `export ANTHROPIC_API_KEY=sk-ant-... && pnpm pull-skills`.

## Role filters (locked)

All scans and recommendations must match these criteria:

- **Seniority:** Senior / Manager / Senior Manager level
- **Domains:** Financial reporting, technical accounting, group reporting,
  controls, SOX/ICFR, internal audit, governance, IFRS 9, financial services
  audit
- **Sponsorship:** Exclude roles requiring visa sponsorship (ILR holder)
- **Location:** UK-based (London preferred, remote/hybrid acceptable)
- **Exclusions:** Junior roles, pure tax roles, pure advisory without
  reporting/controls component

## Target-employer watchlist

**Banking + FS:** LSEG, LBG, NatWest, HSBC, Barclays UK, Citi UK, Santander UK,
M&G, Legal & General, Aviva, Phoenix Group, Prudential, Scottish Widows.

**Asset management:** Schroders, Abrdn, Jupiter, Man Group, Hargreaves
Lansdown, Rathbones, Ninety One, Polar Capital.

**Insurance:** Direct Line, Admiral, Hiscox, Beazley, Lloyd's syndicates.

**Consumer / hospitality / tech:** Rank Group, Entain, Flutter, Deliveroo,
JD Wetherspoon, Compass Group, Marks & Spencer Finance, Sainsbury's,
Ocado, ASOS, Boohoo, Trainline, Moneysupermarket, Deliveroo.

**Big 4 + mid-tier:** Deloitte, PwC, EY, KPMG (Senior Mgr + Director
reporting-specialist tracks), BDO, Grant Thornton, RSM, Forvis Mazars.

**Industry corporates:** Centrica, SSE, BT Group, Tesco Finance, ITV,
National Grid, Rolls-Royce, BAE Systems, Diageo, Unilever.

## Workflow

1. **Daily scan** across LinkedIn Jobs, Totaljobs, Indeed, ICAEW Jobs,
   eFinancialCareers, Reed, CV-Library, and target-company careers pages.
2. **Apply role filters** — rank by composite fit score (seniority × domain
   match × location × exclusions × sponsorship).
3. **Update application tracker** (Applied → Recruiter screen → Hiring mgr →
   Assessment → Offer → Closed / Rejected / Withdrawn).
4. **Tailor CV + cover letter** against JD keywords for each qualifying role.
5. **Salary benchmark** against Robert Half UK 2026, Marks Sattin Finance
   Salary Survey, Morgan McKinley UK Banking & FS, Michael Page UK Finance.
6. **Interview-prep pack** — STAR stories mapped to competencies, technical
   refresh (ISA/IFRS/SOX), company-research brief, likely question bank.
7. **Offer negotiation** — anchor range, total comp (base + bonus + LTIP +
   pension + benefits), start date, notice period, equity where applicable.
8. **Rejection handling** — 20-minute recovery loop + structured lesson log.

## CV alignment framework

Anchor every CV variant on three pillars:

1. **Technical depth** — IFRS (9/15/16/17), FRS 102, UK GAAP, ISA (UK),
   SOX 302/404, ISAE 3000, CSRD/ESRS.
2. **Leadership scale** — team size, budget, stakeholder mix, regulator
   interaction (FCA/PRA/FRC/HMRC), audit-committee exposure.
3. **Transformation outcomes** — close-cycle days cut, cost-out £, automation
   coverage %, control-deficiency reduction, audit-file pass rate.

Rotate emphasis per role family (listed-company reporting / PE portfolio /
Big 4 practice / industry).

## Cover-letter templates

One-screen format:
- **Hook** (2 sentences) — why this firm, why now, tangible signal.
- **3 bullets** — each anchored to a distinct JD keyword, with a
  transformation outcome or measurable delivery.
- **Close** — availability window + explicit CTA + professional sign-off.

## Application tracker schema

| Column | Content |
|---|---|
| Role | JD title |
| Employer | Company |
| Source | Channel (LinkedIn / careers page / recruiter) |
| Applied date | ISO 8601 |
| Stage | Applied / Screen / HM / Assessment / Offer / Closed |
| Fit score | 1–10 composite |
| Salary range | £base + bonus target |
| Location | City + hybrid policy |
| Sponsorship | Required Y/N (auto-exclude if Y) |
| Next action | + owner + due date |
| Outcome / lesson | Free text |

## Cross-skill chaining

Chains into → `leadership-soft-skills`, `board-investor-governance-packs`,
`financial-reporting-preparation`, `financial-reporting-controls-assurance`,
`budget-forecast-analysis` (FP&A), `audit-quality-eqr`,
`governance-structure-enhancement`, `corroborating-evidence-inspection`.
