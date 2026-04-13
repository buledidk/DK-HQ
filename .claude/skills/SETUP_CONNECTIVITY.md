# End-to-End Connectivity — claude.ai · Anthropic Console · Skills API · Claude Code

This guide connects four surfaces so DK's skills pack runs identically everywhere.

```
┌───────────────────────┐         ┌───────────────────────┐
│   claude.ai (Pro)     │         │  Anthropic Console    │
│   settings/skills     │◄───────►│  console.anthropic    │
│   Projects            │         │  .com / skills        │
└───────────┬───────────┘         └───────────┬───────────┘
            │                                 │
            │        SAME ORG                 │
            │ (skills are org-scoped)         │
            ▼                                 ▼
        ┌───────────────────────────────────────┐
        │      /v1/skills  (REST API)           │
        │      auth = x-api-key                 │
        └───────────────────────────────────────┘
                         ▲
                         │ pnpm sync-skills
                         │ (scripts/sync-skills.ts)
                         │
        ┌───────────────────────────────────────┐
        │   GitHub: buledidk/DK-HQ              │
        │   branch: claude/draft-skills-profile │
        │   .claude/skills/*/SKILL.md  (source) │
        └───────────────────────────────────────┘
                         │
                         │ claude launches in repo
                         ▼
        ┌───────────────────────────────────────┐
        │   Claude Code (terminal)              │
        │   auto-loads .claude/skills/          │
        └───────────────────────────────────────┘
```

Source of truth is **GitHub**. Every other surface syncs from there.

---

## 0 · Accounts checklist

Confirm all three before anything else:

| Account | URL | What you check |
|---|---|---|
| claude.ai Pro | `claude.ai/settings/billing` | Pro subscription active post-resubscribe |
| Anthropic Console org | `console.anthropic.com` | Org exists, billing active, ≥ $5 credit |
| API key | `console.anthropic.com/settings/keys` | Create `dk-hq-skills-sync`, scope = All |

If claude.ai Pro and Console org were created with **the same email**, they are the same org. If different emails, they are **different orgs** — skills pushed via API will not appear in claude.ai. Fix by either:

- (recommended) sign out of claude.ai, sign back in with the Console email, or
- invite the claude.ai email into the Console org as a member, or
- skip linkage and rely on manual paste via `CLAUDE_AI_PROJECTS.md`.

---

## 1 · One-time setup (15 min)

### 1.1 Clone the repo locally

```bash
cd ~
git clone https://github.com/buledidk/DK-HQ.git
cd DK-HQ
git checkout claude/draft-skills-profile-5mltb
git pull origin claude/draft-skills-profile-5mltb
pnpm install
```

### 1.2 Set API key (scoped — do not export globally)

The global `ANTHROPIC_API_KEY` shadow-breaks Claude Code's OAuth. Scope it per command:

```bash
# inline, one-shot (preferred)
ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills

# OR a separate shell profile just for sync
echo 'alias dk-sync="ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills"' >> ~/.zshrc
```

### 1.3 First sync — push all skills

```bash
ANTHROPIC_API_KEY=sk-ant-... pnpm sync-skills
```

Expected stdout:

```
Upserted audit-commit → skill_01AB...
Upserted run-project-checks → skill_01CD...
...
Upserted ai-finance-accounting → skill_01ZY...
Wrote .claude/skills-manifest.json (N skills)
```

### 1.4 Commit manifest back

```bash
git add .claude/skills-manifest.json
git -c commit.gpgsign=false commit -m "chore: record Anthropic skill IDs from sync"
git push origin claude/draft-skills-profile-5mltb
```

---

## 2 · Validation — see it running

### 2.1 Console validation

```bash
ANTHROPIC_API_KEY=sk-ant-... curl -s \
  https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" | jq '.data | length, .data[].name'
```

Then open `console.anthropic.com` → Skills tab → confirm the same list.

### 2.2 claude.ai validation

Open `claude.ai/settings/skills`. If the org is linked, you see the same list. If not, the count is smaller — skills need manual paste (see `CLAUDE_AI_PROJECTS.md`) OR link the orgs per § 0.

### 2.3 Claude Code validation

From any terminal:

```bash
cd ~/DK-HQ
claude
```

Inside Claude Code, run:

```
> list loaded skills
```

Claude Code auto-scans `.claude/skills/*/SKILL.md` and reports every loaded skill. Then test auto-trigger:

```
> Draft a going-concern memo for a UK building society with £1.2bn liquid assets and a breach of LCR at 99%
```

You should see `going-concern-audit` + `banking-capital-markets-regulation` + `sector-banking-capital-markets` activate.

### 2.4 API validation (from a script / app)

```bash
ANTHROPIC_API_KEY=sk-ant-... curl -s https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-opus-4-6",
    "max_tokens": 1024,
    "skills": [{"id":"skill_01DTDMHnMbWb8XgGwiExFGfm"}],
    "messages": [{"role":"user","content":"Draft an ISA 540 challenge on a bank ECL model"}]
  }'
```

Replace the skill id with any from `.claude/skills-manifest.json`.

---

## 3 · Editing flow (after the first deploy)

```
edit SKILL.md locally
      │
      ▼
git commit + push
      │
      ▼
pnpm sync-skills                  # PATCHes existing skill_id
      │
      ▼
refresh claude.ai / Console       # auto-syncs
```

The sync script is **idempotent** — it PATCHes when the manifest has the id, POSTs when new. Safe to run on every edit.

---

## 4 · Agent ↔ Skill alignment

Claude Code also supports **agents** under `.claude/agents/`. Agents are orchestrators — they pick and sequence skills.

Alignment rule:

```
Skill  = one capability (knows how to do X)
Agent  = one workflow (knows when + in what order to fire skills)
```

Our three orchestrators live in `.claude/agents/`:

| Agent | Orchestrates |
|---|---|
| `audit-file-reviewer` | big4-audit-file-delivery · controls-assessment · accounting-judgments-estimates · audit-quality-eqr |
| `fs-close-coordinator` | fs-internal-consistency · disclosure-review · accounting-judgments-estimates · financial-statement-review |
| `governance-pack-builder` | board-investor-governance-packs · leadership-soft-skills · sector-* · risk-control-governance |

Invoke in Claude Code:

```
> @audit-file-reviewer review the Q3 controls testing on the bank engagement
```

Agents are sandbox-specific (Claude Code) — they are NOT pushed to the Skills API.

---

## 5 · Failure matrix

| Symptom | Root cause | Fix |
|---|---|---|
| `sync-skills` → 401 | API key invalid / revoked | regenerate in Console |
| `sync-skills` → 402 | billing not active post-resub | add credit at Console / Billing |
| `sync-skills` → 429 | rate limit on burst upsert | script has backoff; re-run |
| `sync-skills` → 400 "description too long" | `description:` field > 1024 chars | shorten YAML description |
| Skills in Console but not in claude.ai | Pro org ≠ API org | link orgs or manual paste |
| Claude Code doesn't auto-fire a skill | keywords too narrow | widen `description:` → re-sync |
| `claude install` unknown command | command doesn't exist | `npm i -g @anthropic-ai/claude-code` |
| `/login` loops 401 | stale `ANTHROPIC_API_KEY` env var | `unset ANTHROPIC_API_KEY` and retry |
| Manifest out of date after upstream delete | someone deleted via UI | delete id from manifest, re-run sync |

---

## 6 · Operational cadence

- **Daily**: just work — `claude` inside the repo, skills auto-fire.
- **On skill edit**: `pnpm sync-skills` (takes ~30 s).
- **Monthly**: diff Console list vs manifest; prune orphans.
- **On new skill**: add to `README.md`, `SKILL_TREES.md`, `PORTFOLIO.md`, then sync.
- **On API key rotation**: regenerate in Console, update shell alias, run sync to verify.

---

## 7 · One-command bootstrap (future machines)

```bash
curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh | bash
```

(The bootstrap script is a planned extension that clones, pnpm-installs, and prompts for the API key. Not required — the manual flow above works today.)
