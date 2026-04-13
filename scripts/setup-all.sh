#!/bin/bash
# DK-HQ Master Setup Script
# Run this once to set up everything

set -e
echo "=========================================="
echo "  DK-HQ Master Setup"
echo "=========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Clone related repositories
echo -e "${YELLOW}[1/5] Cloning related repositories...${NC}"
cd /home/user

if [ ! -d "Audit-Engine" ]; then
  git clone https://github.com/buledidk/Audit-Engine.git
  echo -e "${GREEN}✓ Cloned Audit-Engine${NC}"
else
  echo "  Audit-Engine already exists, skipping..."
fi

if [ ! -d "Auditengine" ]; then
  git clone https://github.com/buledidk/Auditengine.git
  echo -e "${GREEN}✓ Cloned Auditengine${NC}"
else
  echo "  Auditengine already exists, skipping..."
fi

if [ ! -d "Indus-Nexus-Limited" ]; then
  git clone https://github.com/buledidk/Indus-Nexus-Limited.git
  echo -e "${GREEN}✓ Cloned Indus-Nexus-Limited${NC}"
else
  echo "  Indus-Nexus-Limited already exists, skipping..."
fi

# 2. Setup environment file
echo -e "${YELLOW}[2/5] Setting up environment...${NC}"
cd /home/user/DK-HQ

if [ ! -f ".env" ]; then
  cp .env.example .env
  echo -e "${GREEN}✓ Created .env from .env.example${NC}"
  echo -e "${YELLOW}  ⚠ Remember to fill in your API keys in .env${NC}"
else
  echo "  .env already exists, skipping..."
fi

# 3. Install dependencies
echo -e "${YELLOW}[3/5] Installing dependencies...${NC}"
cd /home/user/DK-HQ/apps/audit-web
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# 4. Show status
echo -e "${YELLOW}[4/5] Repository status...${NC}"
cd /home/user/DK-HQ
git status --short
git log --oneline -3

# 5. Summary
echo ""
echo "=========================================="
echo -e "${GREEN}  Setup Complete!${NC}"
echo "=========================================="
echo ""
echo "Cloned repos in /home/user/:"
ls -d /home/user/*/ 2>/dev/null | grep -E "(Audit|Indus)"
echo ""
echo "Next steps:"
echo "  1. Edit /home/user/DK-HQ/.env with your API keys"
echo "  2. Run: cd /home/user/DK-HQ/apps/audit-web && npm run dev"
echo "  3. Open http://localhost:3000"
echo ""
echo "Supabase setup:"
echo "  1. Create project at https://supabase.com"
echo "  2. Copy URL and anon key to .env"
echo "  3. Run migrations: npx supabase db push"
echo ""
