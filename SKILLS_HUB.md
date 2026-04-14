# Skills Hub — Claude-first bidirectional sync

**Claude is the authoring hub. GitHub is the versioned mirror of record.**

This repo authors skills in either surface (Console UI or IDE), then reconciles
them via scripts that talk to the Anthropic Skills API (`/v1/skills`).

---

## The three sync commands

| Command | Direction | Use when |
|---|---|---|
| `pnpm sync-skills` | Git → API | you edited `.claude/skills/**/SKILL.md` locally |
| `pnpm pull-skills` | API → Git | you edited a skill in `console.anthropic.com/settings/skills` |
| `pnpm skills:roundtrip` | API ↔ API | full reconciliation; pulls first, then pushes |

All three require `ANTHROPIC_API_KEY` in the environment. Both scripts are
idempotent: skill `name` is the stable identity key; `.claude/skills-manifest.json`
caches `name → id`.

---

## Authoring workflows

### A) Console-first (quick, live, no IDE)

1. Edit in the browser: `https://console.anthropic.com/settings/skills`.
2. Save in Console — skill is live immediately across claude.ai + Claude Code.
3. Mirror back to Git when you have a shell handy:
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-...
   pnpm pull-skills
   git add .claude/skills .claude/skills-manifest.json
   git commit -m "pull: mirror Console edits"
   git push origin claude/draft-skills-profile-5mltb
   ```

### B) IDE-first (for review-heavy work, PRs, CI)

1. Edit `.claude/skills/<name>/SKILL.md` in your editor.
2. Commit + push + open PR if needed.
3. After merge:
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-...
   pnpm sync-skills
   ```

### C) Claude Code in this repo

Claude Code reads skills directly from `.claude/skills/` when run inside
DK-HQ. No API round-trip needed at runtime. If you also want project-level
skills available globally:

```bash
mkdir -p ~/.claude/skills ~/.claude/agents
cp -r .claude/skills/* ~/.claude/skills/
cp -r .claude/agents/* ~/.claude/agents/
```

---

## Drift resolution

When someone edits the same skill in both surfaces between sync runs,
**last-write-wins** at the API level. Git keeps the history of the losing
side.

**Safe protocol:** run `pnpm skills:roundtrip` at the start of each work
session. It pulls Console edits first, then pushes any Git commits on top.

**Nightly drift reconciliation:** `.github/workflows/skills-roundtrip.yml`
runs `pnpm pull-skills` every night at 02:00 UTC and opens a PR if Console
has drifted ahead of Git.

---

## What is NOT synced through the API

The Anthropic Skills API stores `name`, `description`, `instructions`
(the YAML frontmatter + body). It does NOT currently store:

- `scripts/*` bundled into a skill folder (Anthropic Skills pack format)
- `assets/*` (images, PDFs, templates)
- `references/*` (external docs)

Those stay in Git only and load when Claude Code runs locally. The Hub
workflow covers the instructional content that powers `/v1/skills` —
which is what claude.ai + Console surface.

---

## Topology

```
                 Author in either surface
                 ┌───────────────────────────┐
                 │                        │
           console.anthropic.com     .claude/skills/**/SKILL.md
                 │                        │
                 │  ← pnpm pull-skills    │
                 │  → pnpm sync-skills    │
                 └─────────┬────────────────┘
                           │
                  Anthropic Skills API
                    /v1/skills (auth: x-api-key)
                           │
          ┌───────────────┼──────────────┐
      claude.ai capabilities    Claude Code (any repo)
   (your Pro/Team/Enterprise)   (via `/skills` + MCP)
```

---

## Bootstrap (one-command)

Still the fastest path to deploy everything on a fresh laptop:

```bash
curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh \
  | ANTHROPIC_API_KEY=sk-ant-... bash
```

Runs `pnpm install` + `pnpm sync-skills` + writes manifest. Safe to re-run.

---

## Appendix — verify the endpoint before deploying

```bash
curl -sI https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" | head -n 1
```

Expect `HTTP/2 200`. `401` = wrong key. `404` = endpoint not live for your
org (contact Anthropic; fall back to Console paste + `pnpm pull-skills`).
