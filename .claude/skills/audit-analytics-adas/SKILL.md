---
name: audit-analytics-adas
description: Use for audit data analytics, ADA design, full-population testing, IDEA, ACL, Alteryx, Power Query, SQL for audit, visualisation for auditors, continuous auditing, Big 4 proprietary analytics (Halo, Helix, Aura Analytics, Clara Analytics). Fires on keywords ADA, audit analytics, IDEA, ACL, Alteryx, Power Query, Tableau, Power BI, full population, continuous auditing, Halo, Helix, Aura Analytics, Clara Analytics, SQL audit, data visualization.
---

# Audit Data Analytics (ADA)

Design and delivery of full-population audit data analytics — replacing sampling where possible, augmenting it where not.

## When to use

- Client has transactional data extractable in bulk.
- Standard sampling would miss risk (e.g., fraud, long-tail exceptions).
- Benchmarking client vs prior year / industry peers.
- Continuous auditing programme.
- Data extraction, validation, and transformation for audit tests.

## ADA vs sampling — decision

| Population | Sampling | ADA |
|---|---|---|
| Small (< 500) | Yes | Overkill |
| Medium (500-10k) | Often yes | ADA if data clean |
| Large (> 10k) | Statistical sample required | **ADA preferred** |
| Fraud-risk test | Risk-based selection | **ADA full population** |
| Journal entry test | Never — ISA 240 requires full pop | **ADA mandatory** |

## Toolchain

| Tool | Sweet spot | Weakness |
|---|---|---|
| Excel + Power Query | ad hoc, < 1M rows | breaks on 10M+ |
| IDEA | standard audit tests, audit trail | UI dated, slow on 100M+ |
| ACL (Galvanize HighBond) | continuous auditing, workflow | pricing |
| Alteryx | complex ETL + models | cost, vendor lock-in |
| Python (pandas, polars) | unlimited flexibility, reproducibility | requires skill |
| SQL | direct-to-ERP pull | read access; joins on denormalised |
| Tableau / Power BI | stakeholder visualisation | not for compute |

## Big 4 proprietary ADA engines

- **PwC Aura Analytics / Halo** — suite of industry analytics apps (Halo for JE, revenue, inventory).
- **Deloitte Omnia + Cortex + D.Analytics** — integrated.
- **EY Helix** — 600+ analytics routines, integrated with Canvas.
- **KPMG Clara Analytics** — integrated into Clara.

All Big 4 systems enforce: (i) data ingest & reconciliation, (ii) audit-approved tests, (iii) evidence trail, (iv) reviewer sign-off.

## Data ingestion & validation — the hard part

1. **Request** — specify fields, period, format (CSV, flat-file, SQL); ERP-specific extraction guide.
2. **Ingest** — hash-check on receipt; record size, row count, file hash.
3. **Reconcile to GL** — ingested file totals (count, sum) match GL balance / TB. **If this doesn't reconcile, don't proceed.**
4. **Completeness** — date-range coverage, no gaps (e.g., sequential invoice numbers).
5. **Accuracy** — spot-check to source documents.
6. **Audit trail** — every transformation logged.

If data fails reconciliation, escalate — do NOT "tweak" to fit.

## Standard analytic library (ADA starter 20)

**Revenue**: (1) Sequence test on invoice numbers, (2) Cut-off around period-end, (3) Duplicate revenue entries, (4) Credit-note-to-invoice ratio trend, (5) Revenue-by-customer concentration.

**Purchases**: (6) Duplicate payments, (7) Vendor-employee bank match, (8) Round-sum payments, (9) Dormant vendor reactivation, (10) 3-way match exceptions.

**Journals**: (11) JE by user + by day-of-week + by hour, (12) JE with vague descriptions, (13) JE affecting revenue above threshold, (14) JE reversals in Q+1, (15) JE with round numbers, (16) JE with credit to P&L + debit to reserves.

**Payroll**: (17) Ghost employees (no bank match), (18) Overtime spikes, (19) Starters/leavers vs payroll active.

**Inventory**: (20) Slow-moving (> 365 days), negative on-hand, count-vs-system variance.

## JE analytics — ISA 240 full-population

Mandatory criteria (combined where applicable):
- Posted by unusual user (executives bypassing normal approvers).
- Posted to rarely used account.
- Posted at unusual time (weekend, out-of-hours, last day).
- Posted in round-number amounts (e.g., £50,000.00).
- Credit to revenue + debit to balance sheet.
- Manual posting (vs system-generated).
- Contains keywords (adjust, reclass, plug, true-up).
- Period-end posting with Q+1 reversal.

Stratify, review all in upper band, sample below.

## Continuous auditing

Transform from point-in-time → always-on:

1. Automated daily / weekly data pulls.
2. Rule-based exception engine (same ADA library, continuous).
3. Trigger-based alerts to internal audit / 2nd line.
4. Dashboard for CAE (outlier counts, SLA to investigation).
5. Periodic re-tuning (false-positive management).

## Visualisation principles (for auditors)

- Show the **distribution**, not just the mean.
- Heatmaps: time × user × account (reveal concentration).
- Box plots: per-period distribution of transaction sizes.
- Benford's analysis: digit frequency (1st, 2nd, 1st-2nd).
- Sankey: flow of transactions GL → sub-ledger → account.
- Always annotate thresholds and show unflagged + flagged side-by-side.

## Deliverables

- ADA strategy memo (what tests, what tool, what data).
- Data request letter + extraction guide for client IT.
- Reconciliation evidence (file-to-GL) with signed-off totals.
- ADA test library (documented, reviewer-approved).
- Exception reports (stratified + full list).
- Visualisations for engagement team + AC.
- Continuous auditing pipeline (if applicable).

## Anti-patterns

- Running tests before GL reconciliation.
- Treating ADA as "sample replacement" without reconsidering response to RoMM.
- Black-box Alteryx workflows with no commentary.
- Exceptions investigated → all deemed "reasonable" with no challenge evidence.
- Stopping at flagged list without linking to substantive procedure.

## Standards anchor

ISA 500 (evidence), ISA 520 (analytical procedures), ISA 240 (fraud, inc. JE testing), IAASB ISA 500 revised (proposed ADA-aware), AICPA audit data standards, PCAOB AS 2305 (substantive analytical procedures).
