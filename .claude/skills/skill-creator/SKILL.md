---
name: skill-creator
description: Placeholder mirror of the canonical `skill-creator` skill authored directly in Anthropic Console. Run `pnpm pull-skills` to overwrite with the live definition from /v1/skills.
---

# Skill Creator — placeholder

This SKILL.md is a stub. The canonical definition lives in your Anthropic
Skills API (authored via `console.anthropic.com/settings/skills`).

## To populate

```bash
export ANTHROPIC_API_KEY=sk-ant-...
cd ~/DK-HQ
pnpm pull-skills
git add .claude/skills/skill-creator/SKILL.md
git -c commit.gpgsign=false commit -m "pull: mirror skill-creator from Console"
git push origin claude/draft-skills-profile-5mltb
```
