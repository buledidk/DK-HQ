---
name: algorithmic-art
description: Placeholder mirror of the canonical `algorithmic-art` skill authored directly in Anthropic Console. Run `pnpm pull-skills` to overwrite with the live definition from /v1/skills.
---

# Algorithmic Art — placeholder

This SKILL.md is a stub. The canonical definition lives in your Anthropic
Skills API (authored via `console.anthropic.com/settings/skills`) and is not
yet mirrored here.

## To populate

```bash
export ANTHROPIC_API_KEY=sk-ant-...
cd ~/DK-HQ
pnpm install                  # picks up @anthropic-ai/sdk if new
pnpm pull-skills              # overwrites this file with canonical content
git add .claude/skills/algorithmic-art/SKILL.md
git -c commit.gpgsign=false commit -m "pull: mirror algorithmic-art from Console"
git push origin claude/draft-skills-profile-5mltb
```

The `pull-skills` script (`scripts/pull-skills.ts`) performs `GET /v1/skills`
and rewrites every `.claude/skills/<name>/SKILL.md` file on disk, so this
placeholder gets overwritten automatically.
