// scripts/pull-skills.ts
//
// Reverse sync: pulls skills FROM the Anthropic Skills API INTO the local
// repo. Makes Claude (Console + /v1/skills) the authoring hub, with this
// Git repo as the versioned mirror of record.
//
// Pairs with scripts/sync-skills.ts (local → API) to give a bidirectional
// workflow: author in EITHER surface, then run `pnpm skills:roundtrip` to
// reconcile.
//
// Usage: ANTHROPIC_API_KEY=sk-ant-... pnpm pull-skills

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("ANTHROPIC_API_KEY env var required");
  process.exit(1);
}

const API = "https://api.anthropic.com/v1";
const HEADERS = {
  "x-api-key": API_KEY,
  "anthropic-version": "2023-06-01",
};

const SKILLS_DIR = ".claude/skills";
const MANIFEST = ".claude/skills-manifest.json";

type Skill = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  updated_at?: string;
};

async function listRemote(): Promise<Skill[]> {
  const r = await fetch(`${API}/skills`, { headers: HEADERS });
  if (!r.ok) {
    throw new Error(`GET /v1/skills failed: ${r.status} ${await r.text()}`);
  }
  const j = (await r.json()) as { data: Skill[] };
  return j.data;
}

function renderSkillMd(s: Skill): string {
  // Collapse newlines in description to keep YAML frontmatter valid.
  const desc = s.description.replace(/\s*\n+\s*/g, " ").trim();
  return `---\nname: ${s.name}\ndescription: ${desc}\n---\n\n${s.instructions.trim()}\n`;
}

async function main() {
  const remote = await listRemote();
  if (!remote.length) {
    console.log("No skills on Anthropic Skills API — nothing to pull.");
    return;
  }

  const manifest: Record<string, string> = {};
  let created = 0;
  let updated = 0;

  for (const skill of remote) {
    const dir = join(SKILLS_DIR, skill.name);
    const file = join(dir, "SKILL.md");
    const wasExisting = existsSync(file);
    mkdirSync(dir, { recursive: true });
    writeFileSync(file, renderSkillMd(skill));
    manifest[skill.name] = skill.id;
    if (wasExisting) {
      updated++;
      console.log(`UPDATE ${skill.name.padEnd(40)} → ${file}`);
    } else {
      created++;
      console.log(`CREATE ${skill.name.padEnd(40)} → ${file}`);
    }
  }

  // Persist manifest sorted by skill name for deterministic diffs.
  const sorted: Record<string, string> = {};
  for (const k of Object.keys(manifest).sort()) sorted[k] = manifest[k];
  writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");

  console.log(
    `\nPulled ${remote.length} skills from /v1/skills  (created=${created}, updated=${updated})`
  );
  console.log(`Manifest: ${MANIFEST}`);
  console.log(
    `\nNext: git add .claude/skills && git commit -m "pull: sync skills from Claude Console"`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
