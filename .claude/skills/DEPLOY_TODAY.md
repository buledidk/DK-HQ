# Deploy Today — 3 Minute Operational Runbook

You are here because you want the 39 skills live in **both** claude.ai and the Anthropic Console today. This is the shortest path.

## Step 0 — Which route?

Answer one question: **do you have an Anthropic API key?**

| Answer | Go to |
|---|---|
| Yes, I have `sk-ant-...` from `console.anthropic.com/settings/keys` | **Route A** (1 command) |
| No — I only have Claude Pro | **Route B** (manual paste, 10 min) |
| I'm not sure | **Step 1** below |

---

## Step 1 — Check whether you have an API key

1. Open `https://console.anthropic.com/settings/keys`
2. If you see a "Create Key" button and no key listed → you don't have one.
3. Click "Create Key", name it `dk-hq-sync`, copy the `sk-ant-...` string.
4. Verify billing at `https://console.anthropic.com/settings/billing` — if it says "Add payment method", add it and put in $5 credit. Without credit the API will 402.
5. Now go to **Route A**.

**Important:** claude.ai Pro subscription does **NOT** include API credit. They are two separate products under the same login. Many people have Pro but never enabled API billing.

---

## Route A — You have an API key (1 command)

```bash
curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh \
  | ANTHROPIC_API_KEY=sk-ant-YOUR_KEY bash
```

This clones to `~/DK-HQ`, installs deps, and deploys all 39 skills to your Anthropic org. Expected runtime ~45 seconds.

**What success looks like:**

```
─────────────────────────────────────────────────────
  DK-HQ Skills bootstrap
─────────────────────────────────────────────────────
→ Cloning to /Users/you/DK-HQ
→ Installing dependencies (pnpm)
→ Syncing skills to Anthropic org
Upserted audit-commit → skill_01AB...
Upserted run-project-checks → skill_01CD...
... (39 lines) ...
Upserted audit-analytics-adas → skill_01ZY...
Wrote .claude/skills-manifest.json (39 skills)

  ✓ Done. 39 skills synced.
```

**Then validate:**

```bash
# Count skills in your org
curl -s https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" | jq '.data | length'
# Expected: 39 (+ any skills you already had like buledidk-master)
```

**Then see them in the UIs:**

- `https://console.anthropic.com/settings/skills` — developer view (always works)
- `https://claude.ai/settings/capabilities` → Skills tab — consumer view (only if Pro org = API org)

---

## Route B — Manual paste (no API key, Pro only)

If you don't have an API key and only have claude.ai Pro, you must paste each skill manually into the claude.ai UI.

1. Open `https://claude.ai/settings/capabilities`
2. Click **Skills** tab → **Create Skill**
3. Paste the content of a SKILL.md file (the body after the YAML frontmatter).
4. Name it exactly as the folder name (e.g. `audit-commit`).
5. Save.
6. Repeat for each of the 39 skills.

**Speed-up:** use Claude for Chrome with a prompt like:

> "Open https://claude.ai/settings/capabilities. For each file in https://github.com/buledidk/DK-HQ/tree/claude/draft-skills-profile-5mltb/.claude/skills, create a new skill with the folder name as the skill name and the SKILL.md contents as the body."

Claude for Chrome can drive the UI for you.

**Or** use claude.ai **Projects**:

1. `https://claude.ai/projects` → **Create Project** "DK Audit & Automation".
2. **Custom instructions** = paste `PORTFOLIO.md` content.
3. **Knowledge** = upload each SKILL.md (drag and drop).
4. Projects do NOT auto-trigger like Skills but give you the same capability within the Project chat.

---

## Run inside Claude Code (local)

Regardless of route, from inside the repo:

```bash
cd ~/DK-HQ
claude
```

Skills in `.claude/skills/` auto-load. Agents in `.claude/agents/` are invokable with `@agent-name`.

**Test auto-trigger:**

Type in Claude Code:

```
Draft a going-concern memo for a UK building society with £1.2bn liquid assets and a 99% LCR.
```

Expected behaviour: `going-concern-audit` + `banking-capital-markets-regulation` + `sector-banking-capital-markets` fire together.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Browser shows "Google — page not found" | You typed the wrong URL. Use exactly: `https://console.anthropic.com/settings/skills` (developer) or `https://claude.ai/settings/capabilities` (consumer). |
| `claude install` → unknown command | Install Claude Code: `npm install -g @anthropic-ai/claude-code` |
| `/login` loops with 401 | `unset ANTHROPIC_API_KEY` in your shell, then `claude` then `/login`. Global API key shadows OAuth. |
| `pnpm sync-skills` → 401 | API key invalid/revoked. Regenerate at `console.anthropic.com/settings/keys`. |
| `pnpm sync-skills` → 402 | No API credit. Top up at `console.anthropic.com/settings/billing`. |
| `pnpm sync-skills` → 404 | Script points at wrong endpoint. Should be `https://api.anthropic.com/v1/skills`. |
| Skills in Console but NOT claude.ai | Pro account email ≠ Console org email. Sign into claude.ai with the Console email, OR invite the Pro email into the Console org. |
| `pnpm` not found | `npm install -g pnpm` or `corepack enable` |
| `tsx` not found | `pnpm install` in the repo directory first |

---

## After today — maintenance

- Edit any SKILL.md locally.
- `git commit && git push`.
- `ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills` — idempotent PATCH of existing, POST for new.
- Manifest `.claude/skills-manifest.json` stays synced automatically.

That's the complete flow. If Route A fails, paste me the first 5 lines of error and I will patch the script immediately.
