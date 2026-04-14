---
name: ai-governance-model-risk
description: Use for AI governance + model risk management — frameworks (SR 11-7, OCC 2011-12, PRA SS1/23, EU AI Act, NIST AI RMF, ISO/IEC 42001), model inventory + tiering, model development + validation + ongoing monitoring, independent validation, challenger models, explainability + fairness, LLM-specific controls (prompt injection, hallucination, data leakage, jailbreak), responsible-AI programme design, regulatory submissions, Basel model-risk capital add-ons, SR 11-7 audit. Auto-trigger on phrases like "model risk", "SR 11-7", "model risk management", "MRM", "model inventory", "model tiering", "model validation", "ongoing monitoring", "challenger model", "EU AI Act", "AI Act", "NIST AI RMF", "ISO 42001", "responsible AI", "LLM governance", "hallucination", "prompt injection", "model card", "explainability", "SHAP", "fairness", "bias", "champion challenger", "PRA SS1/23".
---

# ai-governance-model-risk

Deep-dive for AI + model governance across financial services + regulated industries. Chains from `risk-control-governance`, `ai-finance-accounting`, `itgc-soc-cyber-audit`.

## Regulatory + framework landscape

| Framework | Scope | Mandatory? |
|---|---|---|
| SR 11-7 (Fed + OCC 2011-12) | US bank model risk | Yes (Fed + OCC) |
| PRA SS1/23 (UK) | UK bank model risk | Yes (PRA firms) |
| EBA Guidelines (EBA/GL/2017/06) | EU bank credit risk IRB | Yes |
| EU AI Act | All AI in EU | Yes (phased 2025-2027) |
| NIST AI Risk Management Framework | Voluntary, US | No (but best practice) |
| ISO/IEC 42001 | AI management system | Certification optional |
| OECD AI Principles | High-level | No |
| EEOC / FTC guidance | US employment + consumer AI | Conditional |

## Model Risk Management (MRM) — SR 11-7 + PRA SS1/23

### Model definition

Quantitative method, system, or approach applying statistical, economic, financial, or mathematical theories / techniques / assumptions to process input data into quantitative estimates.

Includes: credit scorecards, ECL (IFRS 9 / CECL), market risk (VaR), liquidity, fraud detection, AML transaction monitoring, capital (IRB, IMM), stress test, valuation (prices, greeks), ALM, pricing engines, actuarial, LLMs used for decisions / content at scale.

### Lifecycle

1. **Identification + inventory** — every model; tiered by materiality + complexity + business impact.
2. **Development** — documentation (theory, data, assumptions, implementation, testing, limitations).
3. **Independent validation** (IVF — Independent Validation Function):
   - Conceptual soundness.
   - Ongoing monitoring design.
   - Outcomes analysis (back-testing).
   - Pre-implementation review.
4. **Approval + implementation** — governance body sign-off; production deployment controls.
5. **Ongoing monitoring** — performance metrics, stability, drift, re-validation triggers.
6. **Periodic re-validation** — annual for Tier 1; 2-3 year for lower tiers.
7. **Change management** — material changes revalidated before deployment.
8. **Decommissioning** — retirement with documented rationale.

### Tiering

- **Tier 1 (material)** — regulatory capital, financial reporting, critical credit / market / liquidity risk decision.
- **Tier 2** — significant operational impact but not regulatory capital.
- **Tier 3** — tactical / supporting / low-materiality.

Validation depth + frequency scales with tier.

### Governance

- **Model owner** — business user, accountable.
- **Model developer** — builds, documents.
- **Model validator (IVF)** — independent of development.
- **Model approver** — committee (MRMC or equivalent).
- **Model risk function (MRF)** — second line, owns framework.
- **Internal audit** — third line, periodic review of framework + samples.

## EU AI Act

Risk-tiered approach:

| Tier | Examples | Obligations |
|---|---|---|
| Unacceptable | Social scoring, subliminal manipulation, real-time biometric ID in public | Banned |
| High-risk | Biometric ID, critical infra, education, employment, essential services, law enforcement, migration, justice, democratic processes | Risk mgmt, data governance, technical docs, transparency, human oversight, accuracy, cybersecurity, CE marking, conformity assessment |
| Limited | Chatbots, deepfakes | Transparency disclosure |
| Minimal | Video games, spam filters | Voluntary code |
| GPAI (General-purpose AI) | Foundation models | Technical documentation, copyright policy, training-data summary; additional for "systemic risk" models |

- Phased application: prohibitions from 2 Feb 2025; GPAI from 2 Aug 2025; full high-risk from 2 Aug 2026 (some classes Aug 2027).
- Fines — up to €35m / 7% global turnover.

## LLM-specific risks + controls

### Risk catalogue

- **Hallucination** — confident but false output.
- **Prompt injection** — attacker input overrides system instructions.
- **Jailbreak** — bypassing safety guardrails.
- **Data leakage** — training-data / context-window leaking into output.
- **Sensitive data exfiltration** — user input → provider logs.
- **Bias + fairness** — disparate impact in protected characteristics.
- **Copyright + IP** — training data + output attribution.
- **Regulatory + compliance** — false advice in regulated context (financial, legal, medical).
- **Consistency** — stochastic output variability.
- **Economic** — cost of inference + context drift.

### Control pattern

| Layer | Controls |
|---|---|
| Input | Prompt sanitisation, PII redaction, data classification gate |
| Model | Foundation-model selection, fine-tuning + RAG design, guardrails (Anthropic safety, output filters) |
| Output | Content filtering, hallucination detection (evidence + retrieval check), consistency check against knowledge base |
| Process | Human-in-the-loop for high-stakes decisions, disclosure to users, review + escalation |
| Monitoring | Telemetry — prompt + output samples, drift detection, cost monitoring, feedback loop |
| Incident | Red-team + bug bounty, incident-response plan for AI-specific events |

### Responsible-AI programme components

1. AI principles + ethics statement (board-level).
2. AI inventory + use-case register.
3. Pre-deployment risk assessment (AIA — AI impact assessment).
4. Model cards / system cards per use-case.
5. Fairness + bias testing.
6. Explainability methods (SHAP, LIME, counterfactuals) sized to audience (dev vs customer vs regulator).
7. User disclosure + consent.
8. Human oversight design.
9. Post-market monitoring + incident reporting.
10. Supplier-AI due diligence (third-party foundation models, SaaS AI).

## Model validation techniques

### Conceptual soundness
- Review theory, assumptions, design choices, literature benchmark.
- Identify limitations + boundaries of applicability.

### Data quality
- Completeness, accuracy, timeliness, representativeness, bias.
- Labelling quality (for supervised).
- Lineage + reproducibility.

### Performance testing
- **Accuracy** — classification: confusion matrix, precision, recall, F1, ROC-AUC. Regression: RMSE, MAE, R². LLM: BLEU, ROUGE, BERTScore, human evals.
- **Stability** — PSI (Population Stability Index), characteristic stability.
- **Discrimination** — Gini, KS, lift.
- **Calibration** — Hosmer-Lemeshow, reliability diagram.
- **Sensitivity** — partial-dependence, ICE plots, Sobol indices.
- **Out-of-time / out-of-sample** — back-testing over hold-out + multiple economic scenarios.

### Challenger model
- Alternative specification (different algorithm, different feature set, different data window).
- Benchmark champion vs challenger performance; document gap rationale.

### Fairness + bias testing
- Demographic parity, equalised odds, equal opportunity, calibration parity.
- Protected-characteristic tagging per jurisdiction.
- Mitigation: pre-processing (reweighting), in-processing (constraint optimisation), post-processing (threshold calibration).

## Audit focus (internal + external)

- Model inventory completeness (shadow IT / shadow AI risk).
- Tier assignment consistency with materiality.
- IVF independence + competence + resourcing.
- Validation depth commensurate with tier.
- Ongoing monitoring triggers + re-validation timeliness.
- Material changes escalation (parameter re-calibration vs structural change).
- Governance committee minutes + approval evidence.
- LLM / GenAI specifically — pre-deployment risk assessment + deployment controls + monitoring.
- Regulatory compliance — SR 11-7 / SS1/23 / EU AI Act mapping; SOX IT + MRM intersection.
- Basel Pillar 2 — model risk add-on disclosed in ICAAP / ICARA.

## Anti-patterns

- Model inventory captures IRB + ECL only; ignores fraud + AML + pricing + operational models.
- IVF reports to CRO + development — independence compromised.
- Ongoing monitoring dashboard exists but no action taken on threshold breaches.
- LLM deployed without pre-deployment risk assessment — "it's just a pilot".
- Hallucination risk accepted by business; no disclosure to end users; no human-in-the-loop control.
- Challenger-model approach set up once; never refreshed — no real challenge.
- Fairness testing using proxies that themselves embed bias; no audit of mitigation.
- Model approvals by junior committee with no material-decision authority.
- EU AI Act "high-risk" use case self-classified as "limited" to avoid conformity assessment.
- Third-party AI vendor due diligence limited to security questionnaire — no model risk + performance + transparency check.

## Deliverables

- Model inventory + tiering + current status.
- Annual model-risk report to ExCo + Risk Committee + regulator.
- Validation report per Tier 1 model — findings, limitations, recommendations.
- AI inventory + responsible-AI programme dashboard.
- EU AI Act compliance register + technical documentation for high-risk.
- SR 11-7 / SS1/23 self-assessment + gap remediation plan.
- Incident log + RCA for AI / model incidents.
