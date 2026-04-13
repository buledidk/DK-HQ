---
name: finance-process-automation
description: Use when automating finance/accounting end-to-end processes — Procure-to-Pay (P2P), Order-to-Cash (O2C), Record-to-Report (R2R), Hire-to-Retire (H2R), Treasury, FP&A, Tax. Auto-trigger on phrases like "automate invoice processing", "three-way match", "bank reconciliation", "month-end close", "consolidation", "cash forecasting", "accruals automation", "intercompany". Designs the workflow, selects the control points, and generates the code / RPA / SQL.
---

# finance-process-automation

Design + build skill for enterprise finance process automation across
financial services, banking, capital markets, asset management, and general
services.

## Process taxonomy (APQC-aligned)

| Cycle | Sub-processes |
|-------|---------------|
| **P2P** | PR/PO, supplier onboarding, 3-way match, AP invoice capture (OCR/LLM), approval routing, payment run, duplicate detection, fraud screening |
| **O2C** | Customer master, credit scoring, order mgmt, billing, revenue recognition (IFRS 15 5-step), cash application, collections, dispute mgmt, dunning |
| **R2R** | Subledger close, accruals, intercompany auto-elim, FX reval, allocations, consolidation, mgmt reporting, statutory, iXBRL |
| **H2R** | Payroll reconciliation, pension, RTI/HMRC, expenses, time-and-attendance |
| **Treasury** | Bank reconciliation, cash pooling, in-house bank, FX hedging, 13-week cash, covenant monitoring, payment factories |
| **FP&A** | Driver-based planning, rolling forecasts, variance analysis, scenarios, KPI dashboards |
| **Tax** | VAT + MTD, CT600, transfer pricing, CbCR |

## Design workflow

### 1. Baseline
Map as-is (actors/systems/data/handoffs/cycle time/error rate). Identify pain.
Quantify (FTE hours, cost/txn, SLA breach %).

### 2. SoD matrix
Prevent: create vendor ↔ approve invoice ↔ release payment; post ↔ approve ↔
reconcile; user admin ↔ transaction execution.

### 3. Control design (preventive + detective)

| Risk | Preventive | Detective |
|------|------------|-----------|
| Duplicate invoice | Hash dedupe (supplier, inv#, amount, date) | Daily duplicate-payment report |
| Unauth payment | Multi-party approval ladder | Payment vs approval log |
| Period manipulation | System-locked close | Journal-after-close report |
| Manual journal abuse | Required narrative + evidence | Top-N manual review |
| Master-data tampering | Dual control on vendor bank | Vendor bank-change report |

### 4. Target operating model
Touchless (0 human) / touch-lite (1 human exception) / assisted (human + AI).
Benchmark mix: 70 / 20 / 10.

### 5. Tech pattern
- OCR + LLM extraction (Claude vision) + human fallback
- RPA: last resort, flag as tech-debt
- iPaaS / API: preferred (Xero/QuickBooks/Sage/Workday/NetSuite/SAP/Oracle)
- Event-driven micro-services (webhook-first, idempotent, replayable)
- Reconciliation engines (rule + fuzzy + ML for long-tail)

### 6. Evidence + audit trail
Immutable event record; linkable evidence; control-result log. Maps to
ISA 315/330 + SOX ICFR.

## Deliverables

1. Process map (BPMN / Mermaid)
2. SoD / RACI matrix
3. Control catalogue
4. Automation design doc (systems, data, APIs, failure modes)
5. Build
6. Test pack (unit, integration, UAT, control-effectiveness)
7. Go-live + hypercare playbook
8. KPI dashboard

## Integrations known

- Accounting: Xero, QuickBooks, Sage, NetSuite, Workday, SAP S/4HANA, Oracle Fusion, Dynamics
- Banking: Open Banking UK (OBIE), SWIFT gpi, Plaid, TrueLayer, BACS, FPS, SEPA, CHAPS
- Tax: HMRC MTD, VAT API, CT600, Companies House
- Spend: Concur, Coupa, Ariba
- FP&A: Anaplan, Workday Adaptive, Pigment, Oracle EPBCS

## Red-flags (STOP + escalate)

- Automating a control you don't fully understand
- Removing human checkpoint without compensating detective control
- No rollback path for automated payment run
- No kill-switch for end-to-end flow
