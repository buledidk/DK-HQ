// scripts/mirror-to-supabase.ts
//
// Mirrors the Anthropic Skills API (claude.ai source of truth) to a
// Supabase `skills_catalog` table. Any app (Audit-Engine web UI, the Vercel
// display page, a future dashboard) can then query Supabase instead of
// needing an Anthropic API key.
//
// Requires env:
//   ANTHROPIC_API_KEY          — reads /v1/skills
//   SUPABASE_URL               — e.g. https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY  — service role key (not the anon key)
//
// Usage:
//   pnpm mirror-to-supabase            — real run
//   pnpm mirror-to-supabase --dry-run  — print rows without writing

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DRY_RUN = process.argv.includes('--dry-run');

if (!ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY required');
  process.exit(1);
}
if (!DRY_RUN && (!SUPABASE_URL || !SUPABASE_KEY)) {
  console.error('SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY required (or pass --dry-run)');
  process.exit(1);
}

type Skill = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  created_at?: string;
  updated_at?: string;
};

async function listSkills(): Promise<Skill[]> {
  const r = await fetch('https://api.anthropic.com/v1/skills', {
    headers: {
      'x-api-key': ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
  });
  if (!r.ok) {
    throw new Error(`GET /v1/skills: ${r.status} ${await r.text()}`);
  }
  const j = (await r.json()) as { data: Skill[] };
  return j.data;
}

async function upsert(skills: Skill[]): Promise<void> {
  const rows = skills.map((s) => ({
    skill_id: s.id,
    name: s.name,
    description: s.description,
    instructions: s.instructions,
    created_at: s.created_at ?? null,
    updated_at: s.updated_at ?? null,
  }));

  if (DRY_RUN) {
    console.log(`[dry-run] Would upsert ${rows.length} rows:`);
    for (const r of rows) {
      console.log(`  ${r.name.padEnd(40)} -> ${r.skill_id}`);
    }
    return;
  }

  const r = await fetch(`${SUPABASE_URL}/rest/v1/skills_catalog?on_conflict=skill_id`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY!,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(rows),
  });
  if (!r.ok) {
    throw new Error(`POST skills_catalog: ${r.status} ${await r.text()}`);
  }
  console.log(`Upserted ${rows.length} skills to Supabase -> skills_catalog`);
}

async function main(): Promise<void> {
  const remote = await listSkills();
  console.log(`Pulled ${remote.length} skills from /v1/skills (claude.ai)`);
  if (remote.length === 0) {
    console.log('Nothing to mirror. Skipping Supabase write.');
    return;
  }
  await upsert(remote);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
