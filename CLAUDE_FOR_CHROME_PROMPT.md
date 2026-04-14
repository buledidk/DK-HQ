# Claude-for-Chrome Prompt — Seamless Skill Sync to claude.ai + Console

Paste the **▼ Full Prompt** below into Claude-for-Chrome (the browser extension
where Claude can navigate and interact with pages on your behalf). It will
navigate to `https://claude.ai/customize/skills` and add every skill from
the DK-HQ GitHub repo one-by-one, using only the Console UI — no API key
needed, no local commands.

**Why this exists:** the Anthropic Skills API endpoint may not be enabled
for every Claude org yet, and `pnpm sync-skills` requires a working API key
in a terminal. This path requires neither — just a logged-in claude.ai
session in the browser Claude-for-Chrome is driving.

**Approx runtime:** 60-70 skills × ~30s per skill = ~30-35 minutes fully
unattended. Claude-for-Chrome will pause on CAPTCHAs or login prompts.

---

## Pre-flight

1. Log in to `https://claude.ai` in Chrome manually.
2. Open Claude-for-Chrome (browser extension icon).
3. Paste the entire block below into the chat.
4. Watch Claude drive the UI. Take over if it asks.

---

## ▼ Full Prompt (paste this verbatim)

```
You are driving my Chrome browser to mirror my DK-HQ GitHub skill catalogue
into my Claude Skills account (claude.ai + Anthropic Console are the same
org for me, so skills added in one appear in both).

## Task

For every skill in the list below:
1. Fetch the SKILL.md file from its raw GitHub URL.
2. Parse its YAML frontmatter to extract `name` and `description`.
   The body (everything after the second `---` line) is the "instructions".
3. Navigate to https://claude.ai/customize/skills .
4. If a skill with this `name` already exists in the sidebar:
   - Click it, then click the edit / pencil icon.
   - Replace the description and body with the fetched content.
   - Save.
   - Log 'UPDATE <name>'.
5. Else:
   - Click the '+' button (add skill) in the top-right of the Skills panel.
   - Paste the `name` into the Name field.
   - Paste the `description` into the Description field.
   - Paste the instructions (body) into the large Markdown editor.
   - Ensure the 'Trigger' toggle is set to 'Auto' (not just slash command).
   - Save.
   - Log 'CREATE <name>'.
6. Verify the skill appears in the left sidebar. If not, pause and flag it.
7. Continue to the next skill in the list.

Stop and ask me what to do if:
- claude.ai shows a login page or CAPTCHA.
- The 'Add skill' button disappears.
- You get a 403 / 404 fetching the GitHub raw URL (report which one).
- Any save attempt returns an error (e.g. 'skill name already taken' on a
  skill you thought was new — just retry as an UPDATE).

At the end, output:
- Total CREATE count
- Total UPDATE count
- Total FAIL count (with list of skill names)
- Runtime

## Skill list

Repo: buledidk/DK-HQ
Branch: claude/draft-skills-profile-5mltb
Raw URL pattern:
  https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/.claude/skills/<name>/SKILL.md

Skills (process in this order):

### Personal + meta
1.  dk-job-scanner
2.  audit-workpaper-engine
3.  algorithmic-art                 (placeholder in repo — if body is just a stub saying "run pnpm pull-skills", SKIP and log SKIP)
4.  canvas-design                   (placeholder — SKIP if stub)
5.  skill-creator                   (placeholder — SKIP if stub)

### Engineering workflow
6.  audit-commit
7.  run-project-checks
8.  audit-pr-review
9.  scaffold-audit-module
10. audit-report-writer

### External audit — phases + delivery
11. audit-planning-materiality
12. risk-assessment
13. controls-assessment
14. audit-evidence-sampling
15. journal-entry-testing
16. going-concern-audit
17. group-audit
18. auditors-report
19. audit-quality-eqr
20. big4-audit-file-delivery
21. audit-analytics-adas

### Financial-statement deep work
22. disclosure-review
23. fs-internal-consistency
24. accounting-judgments-estimates
25. corroborating-evidence-inspection

### Technical accounting standards
26. ifrs15-revenue-recognition
27. ifrs16-lease-accounting
28. ifrs17-insurance-contracts
29. impairment-ias36
30. employee-benefits-ias19
31. tax-provisioning-ias12

### Treasury / TP / hedging
32. treasury-hedge-accounting
33. transfer-pricing

### Finance / risk / regulation
34. finance-process-automation
35. risk-control-governance
36. uk-compliance-review

### IT audit / cyber / ESG assurance
37. itgc-soc-cyber-audit
38. climate-assurance-issa5000
39. esg-sustainability-reporting

### Internal audit / DD / forensic / data room
40. internal-audit-iia
41. transaction-services-dd
42. forensic-fraud-investigation
43. data-room-automation

### AI in finance / AI governance
44. ai-finance-accounting
45. ai-governance-model-risk

### Sector polish
46. sector-banking-capital-markets
47. sector-asset-management
48. sector-insurance
49. sector-pensions
50. sector-fintech-crypto
51. sector-manufacturing-industry
52. sector-public-charity

### FP&A + strategy + governance packs
53. budget-forecast-analysis
54. business-process-optimiser
55. governance-structure-enhancement
56. board-investor-governance-packs

### Leadership + soft skills
57. leadership-soft-skills

## Frontmatter parsing rules

Each SKILL.md starts with:

    ---
    name: <exact string to paste into Name field>
    description: <possibly long, possibly spanning one line—paste verbatim>
    ---

    <markdown body — this is the 'instructions'>

- The 'description' may contain commas, colons, quotes — do NOT escape or
  modify. Paste as-is into the Description field.
- If the 'description' field wraps across multiple lines in the YAML (rare),
  join with single spaces before pasting.
- The body starts immediately after the second `---` line. Preserve all
  Markdown exactly — headings, code fences, tables, lists. Do not reformat.

## UI selectors (as of claude.ai/customize/skills April 2026)

- Add-skill button: '+' icon in the top-right of the 'Skills' column.
- Name field: first text input in the modal / right panel.
- Description field: second text input, labelled 'Description'.
- Body editor: the large multi-line editor below Description; supports
  Markdown.
- Trigger toggle: labelled 'Trigger' with options 'Slash command only' /
  'Slash command + auto'. Set to 'Slash command + auto'.
- Save button: bottom-right of the panel.
- Existing skill row in sidebar: click once to select; edit button appears
  in the top-right of the detail pane.

If any selector has moved, search the page for the nearest equivalent and
proceed. Don't guess or hallucinate — if you truly can't find the control,
pause and ask me.

## Begin

Start with skill 1 (dk-job-scanner). Log progress every 5 skills.
```

---

## After Claude-for-Chrome finishes

1. Verify count: open `https://claude.ai/customize/skills` and count sidebar
   rows. Expect 55-57 personal skills (skipping 3 placeholders).
2. Optionally run `pnpm pull-skills` locally to bring the freshly-synced
   Console state back into this repo (Console may have normalised some
   descriptions).
3. Optionally run `pnpm mirror-to-supabase` to propagate to the Audit-Engine
   app.

---

## If Claude-for-Chrome isn't available / doesn't work

Fall back to **`pnpm sync-skills`**:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
cd ~/DK-HQ
pnpm install                    # picks up @anthropic-ai/sdk and tsx
pnpm sync-skills                # Git -> /v1/skills (writes to claude.ai)
```

The sync script is idempotent and uses skill `name` as the stable key, so
re-runs are safe.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| 'Skill name already exists' on CREATE | Console has an older version | Have Claude-for-Chrome switch to UPDATE path (click row, edit) |
| Body pastes with escaped chars (`\n`) | Clipboard transformed Markdown | Ask Claude-for-Chrome to type the body instead of pasting |
| 404 on raw GitHub URL | Typo in skill name, or skill not yet in repo | Skip and log; re-run after next `git push` |
| 401 on /v1/skills from terminal | Wrong or missing API key | Regenerate key at `console.anthropic.com/settings/keys` |
| Supabase mirror 404 `skills_catalog` | Migration not applied | Apply `packages/db/migrations/0001_skills_catalog.sql` via Supabase SQL editor |

---

**End state:** claude.ai + Anthropic Console show every skill from the
GitHub repo; Supabase `skills_catalog` table mirrors them; `docs/skills.html`
on Vercel / GitHub Pages is your public capability statement.
