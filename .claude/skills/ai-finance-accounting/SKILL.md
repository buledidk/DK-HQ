---
name: ai-finance-accounting
description: Use when deploying AI (LLMs, agents, vision, classification models) into finance + accounting workflows — audit automation, invoice + receipt extraction, contract analysis (IFRS 15 / IFRS 16), estimate benchmarking, disclosure drafting, narrative analytics, variance commentary, control-testing evidence review, regulatory reporting assistance, fraud detection. Auto-trigger on phrases like "AI for audit", "AI for accounting", "LLM in finance", "Claude API", "multi-agent", "agent framework", "prompt engineering", "RAG over accounts", "accuracy engine", "hallucination control", "OCR invoices".
---

# ai-finance-accounting

Deploying AI in finance, accounting, and audit — grounded in the
architecture of `buledidk/audit-engine` (Anthropic Claude Sonnet 4.6 as
primary, Opus 4.6 for agents, Haiku 4.5 for fast-path, GPT-4 fallback,
Ollama local; 10 specialist agents; 15 accuracy-enhancement engines).

## Where AI actually earns its fee in finance / accounting

| Task | Why AI helps | Tech pattern |
|------|-------------|-------------|
| Invoice + receipt extraction | Unstructured → structured | Vision-LLM (Claude vision / GPT-4V) + rules |
| Contract analysis (IFRS 15, IFRS 16, loans) | Read long docs; extract clauses | Retrieval + LLM + deterministic classifier |
| Revenue-recognition clause tagging | 5-step framework automation | Fine-tuned classifier + LLM |
| Lease identification + measurement | IBR + term + option detection | LLM + decision tables |
| Impairment cash-flow builder | Unstructured budget → DCF inputs | LLM + sensitivity engine |
| ECL macro-scenario drafting | Economic text → numeric paths | LLM + time-series model |
| Fraud-risk narrative mining | Board minutes, correspondence | LLM + RAG |
| JE narrative scoring | Free-text anomaly detection | Embeddings + clustering |
| Disclosure drafting | Generate ¶125 / ¶134 sensitivity disclosures | LLM from model output |
| Variance commentary | Draft MD&A commentary from numbers | LLM + controller guardrails |
| Working-paper drafting | Walkthrough → narrative + flowchart | LLM + template |
| Audit-evidence summary | Multiple source docs → workpaper summary | RAG + LLM |
| Confirmation response review | Unstructured confirmation → match to ledger | Extraction + LLM |
| Peer benchmarking | Pull + normalise filings | Ingestion + LLM extraction |
| Regulatory-change monitoring | FCA, FRC, IASB texts → impact | RAG + LLM |

## Architecture patterns (from audit-engine)

### Multi-agent orchestration (AgentFramework.js pattern)
- **Orchestrator agent** — plans, routes, aggregates
- **Specialist agents** — one per domain (ISA, FRS, FCA, tax, ECL, impairment, sampling, JE, disclosure, risk)
- **Critic agent** — reviews outputs against policy / standards
- **Compliance agent** — stamps citations + evidence hashes
- Model tiering: Opus 4.6 for planning / judgment, Sonnet 4.6 for work, Haiku 4.5 for fast classification + extraction

### Accuracy-enhancement engines (audit-engine: 15 engines)
Layers that turn raw LLM output into audit-file evidence:

1. **Citation engine** — every claim links to a source paragraph
2. **Hallucination detector** — claim vs source similarity scoring
3. **Confidence scorer** — LLM log-prob + ensemble disagreement
4. **Cross-standard consistency** — same concept, consistent treatment
5. **Numerical check** — arithmetic + unit + rounding validation
6. **Policy check** — against firm methodology / ISA references
7. **Terminology normaliser** — "PBT" = "operating profit before tax"
8. **Bias detector** — directional language patterns
9. **Freshness check** — standards / regulations current version
10. **Completeness scorer** — required disclosures checklist
11. **Evidence adequacy** — source strength per ISA 500 hierarchy
12. **Self-critique loop** — LLM reviews + revises its own output
13. **Adversarial probe** — counter-question to stress-test conclusion
14. **Audit-trail logger** — immutable log per claim + prompt + output
15. **Reviewer queue** — anything scoring below threshold → human

## Governance (non-negotiable)

- Model-risk management: SR 11-7 / PRA SS1/23
- Data governance: PII minimisation, residency, logging, zero-training
- Outputs are assisted not authoritative — EP still responsible (ISA 220)
- Bias + fairness testing for credit/ECL/pricing models; explainability; HITL

## Red flags (stop + escalate)

- LLM making numerical conclusions without a calculator tool
- LLM generating audit conclusions without citations
- Customer data flowing to a non-enterprise LLM endpoint
- No model-risk governance for a production AI pipeline
- Working papers signed off with LLM output, no human review note
- "AI said so" used as audit evidence

## Success metrics

- Accuracy vs gold standard ≥ 95% on structured extraction
- Reviewer override rate < 10%
- Time saved 30–70% for scoped tasks
- Defect rate post-deployment should not exceed baseline

## Anti-patterns

- Using an LLM for arithmetic
- Deploying without an evaluation set
- Production without model-risk sign-off
- Prompt engineering as a substitute for domain knowledge
