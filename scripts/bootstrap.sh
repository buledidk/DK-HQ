#!/usr/bin/env bash
# DK-HQ Skills bootstrap — one-command deploy of all 39 skills.
#
# Usage:
#   curl -sSL https://raw.githubusercontent.com/buledidk/DK-HQ/claude/draft-skills-profile-5mltb/scripts/bootstrap.sh | bash
#
# Or inside a local clone:
#   bash scripts/bootstrap.sh
#
# Requires: git, node >=20, pnpm, and ANTHROPIC_API_KEY env var OR you'll be prompted.

set -euo pipefail

REPO_URL="https://github.com/buledidk/DK-HQ.git"
BRANCH="claude/draft-skills-profile-5mltb"
TARGET_DIR="${DK_HQ_DIR:-$HOME/DK-HQ}"

echo "─────────────────────────────────────────────────────"
echo "  DK-HQ Skills bootstrap"
echo "─────────────────────────────────────────────────────"

# 1. Clone or update
if [ -d "$TARGET_DIR/.git" ]; then
  echo "→ Updating existing clone at $TARGET_DIR"
  cd "$TARGET_DIR"
  git fetch origin "$BRANCH"
  git checkout "$BRANCH"
  git pull origin "$BRANCH"
else
  echo "→ Cloning to $TARGET_DIR"
  git clone --branch "$BRANCH" "$REPO_URL" "$TARGET_DIR"
  cd "$TARGET_DIR"
fi

# 2. Install deps
echo "→ Installing dependencies (pnpm)"
if ! command -v pnpm >/dev/null 2>&1; then
  echo "   pnpm not found, installing via corepack"
  corepack enable
  corepack prepare pnpm@latest --activate
fi
pnpm install --frozen-lockfile=false

# 3. Require API key
if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo ""
  echo "✖ ANTHROPIC_API_KEY not set."
  echo ""
  echo "  Get one: https://console.anthropic.com/settings/keys"
  echo "  Then run:  ANTHROPIC_API_KEY=sk-ant-... bash scripts/bootstrap.sh"
  echo ""
  exit 1
fi

# 4. Sync skills
echo "→ Syncing skills to Anthropic org"
pnpm sync-skills

# 5. Summarise
SKILL_COUNT=$(ls -1 .claude/skills/ 2>/dev/null | grep -v '\.md$' | grep -v '\.json$' | wc -l | tr -d ' ')
echo ""
echo "─────────────────────────────────────────────────────"
echo "  ✓ Done. $SKILL_COUNT skills synced."
echo ""
echo "  Validate API     : curl -s https://api.anthropic.com/v1/skills \\"
echo "                       -H 'x-api-key: \$ANTHROPIC_API_KEY' \\"
echo "                       -H 'anthropic-version: 2023-06-01' | jq '.data | length'"
echo ""
echo "  Validate Console : https://console.anthropic.com/settings/skills"
echo "  Validate claude.ai: https://claude.ai/settings/capabilities"
echo ""
echo "  Run in Claude Code: cd $TARGET_DIR && claude"
echo "─────────────────────────────────────────────────────"
