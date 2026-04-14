# Skills Hub — claude.ai as source of truth, mirrored everywhere

**claude.ai is the authoring hub. Every other surface is a downstream mirror.**

This repo is the long-term canonical Git mirror. Supabase is the queryable
mirror for apps. Vercel / GitHub Pages is the public HTML display. Claude
Code reads from GitHub (this repo) or `~/.claude/skills/` locally.

---

## Full topology

```
                     authored in browser
                             |
                             v
       console.anthropic.com/settings/skills
                             |
                             v
      =====================================
      |   Anthropic Skills API /v1/skills  |   <- SOURCE OF TRUTH
      =====================================
                             |
       -------------+--------+--------+--------------
       |            |                 |              |
       v            v                 v              v
   claude.ai     Claude Code       Supabase      Vercel display
   capabilities  (any repo)        skills_catalog docs/skills.html
                                   (app queries)  (public catalogue)
                        ^
                        |  pulls locally via pnpm pull-skills
                        v
                DK-HQ GitHub repo
                .claude/skills/<name>/SKILL.md
                (long-term version history)
```

---

## The 4 sync commands

| Command | Direction | Use when |
|---|---|---|
| `pnpm pull-skills` | API -> Git | You edited skills in the Console UI and want the Git mirror to catch up. |
| `pnpm sync-skills` | Git -> API | You drafted a SKILL.md locally (e.g. via `pnpm generate-skill`) and want to deploy it. |
| `pnpm mirror-to-supabase` | API -> Supabase | Your apps (Audit-Engine, dashboards) need to query the catalog without an Anthropic key. |
| `pnpm generate-catalog` | Local -> Git | Regenerates `SKILLS_CATALOG.md` + `docs/skills.html` from the local SKILL.md files. |

### All-in-one

```bash
export ANTHROPIC_API_KEY=sk-ant-...
export SUPABASE_URL=https://xxxx.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=sbp_...

pnpm skills:mirror-all
# pull-skills + mirror-to-supabase + generate-catalog

git add . && git -c commit.gpgsign=false commit -m "mirror: full sync from claude.ai"
git push origin claude/draft-skills-profile-5mltb
```

---

## One-time setup per surface

### 1. claude.ai / Anthropic Console
Nothing to do — authoring happens in the browser UI. Add / edit / delete
skills at `https://console.anthropic.com/settings/skills` or
`https://claude.ai/customize/skills`.

### 2. GitHub (this repo)
Already set up. `pnpm pull-skills` writes to `.claude/skills/<name>/SKILL.md`
and the GitHub Action (`.github/workflows/skills-roundtrip.yml`) nightly-
mirrors any Console drift into a PR automatically.

### 3. Supabase (queryable mirror for apps)
One-time:

```bash
# Apply schema via Supabase SQL editor, or:
psql "$DATABASE_URL" -f packages/db/migrations/0001_skills_catalog.sql
```

Then populate:

```bash
export SUPABASE_URL=https://xxxx.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=sbp_...
pnpm mirror-to-supabase
```

From any client app:

```typescript
// Public read, no service key needed (RLS allows SELECT for everyone)
const { data } = await supabase
  .from('skills_catalog')
  .select('name, description, updated_at')
  .order('name');
```

### 4. Vercel (public HTML catalogue)
`pnpm generate-catalog` writes `docs/skills.html`. To serve it publicly:

- **GitHub Pages:** Enable Pages on the repo, source `docs/`. URL becomes
  `https://buledidk.github.io/DK-HQ/skills.html`.
- **Vercel static project:** Point a new Vercel project at this repo with
  Output Directory `docs`.
- **Inside Audit-Engine:** Copy `docs/skills.html` to `apps/web/public/skills.html`
  at build time, or symlink.

The HTML page reads nothing at runtime — everything is pre-rendered from
the `.claude/skills/` filesystem at `pnpm generate-catalog` time. Re-run
after every `pull-skills` to keep the display fresh.

### 5. Claude Code (any repo)
Claude Code reads `.claude/skills/` from the current repo, or `~/.claude/skills/`
as a user-level fallback. Copy once for global availability:

```bash
mkdir -p ~/.claude/skills ~/.claude/agents
cp -r .claude/skills/* ~/.claude/skills/
cp -r .claude/agents/* ~/.claude/agents/
```

---

## Authoring workflows

### A. Console-first (quick, live, no IDE)
1. Edit at `https://claude.ai/customize/skills`. Save.
2. `pnpm skills:mirror-all` on your laptop.
3. Commit + push. All surfaces in sync.

### B. IDE-first (PR-reviewed or AI-drafted)
1. Write `.claude/skills/<name>/SKILL.md` or use
   `pnpm generate-skill <name> "<topic>"` (Opus 4.6 + adaptive thinking
   + prompt caching over existing pack).
2. Commit + push + review.
3. `pnpm sync-skills` (claude.ai + Console update).
4. `pnpm mirror-to-supabase && pnpm generate-catalog`.

### C. UI-only manual sync (no API key, no local commands)
See `CLAUDE_FOR_CHROME_PROMPT.md`. Paste the prompt into Claude-for-Chrome
and it drives the claude.ai Console UI to add every skill manually.

---

## Auth checklist

| Env var | Used by | Where to get it |
|---|---|---|
| `ANTHROPIC_API_KEY` | `pull-skills`, `sync-skills`, `mirror-to-supabase`, `generate-skill` | `console.anthropic.com/settings/keys` |
| `SUPABASE_URL` | `mirror-to-supabase` | Supabase project → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | `mirror-to-supabase` | Supabase project → Settings → API → service_role |

Store locally in `.env.local` (gitignored) and source with `set -a; source .env.local; set +a`.

---

## Drift resolution + nightly CI

If Console and Git both changed a skill between syncs, **last-write-wins**.
Git keeps the history of the losing side. Safe protocol: start each work
session with `pnpm pull-skills`. The nightly GitHub Action
(`.github/workflows/skills-roundtrip.yml`) does the same at 02:00 UTC and
opens a PR if Console has drifted.

---

## Endpoint sanity check

```bash
curl -sI https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" | head -n 1
# Expect: HTTP/2 200

curl -s https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" | jq '.data | length'
```
