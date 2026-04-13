/**
 * Sync all .claude/skills/<name>/SKILL.md files to the Anthropic Skills API.
 *
 * Reads every SKILL.md in .claude/skills/, parses YAML frontmatter for
 * `name` + `description`, takes the markdown body as `instructions`, then
 * upserts each skill via the Anthropic API. Tracks skill_name -> skill_id
 * in .claude/skills-manifest.json so re-runs are idempotent.
 *
 * Usage:
 *   export ANTHROPIC_API_KEY=sk-ant-...
 *   pnpm sync-skills
 *
 * Requires Node 20+ (uses global `fetch`). No runtime deps.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("ANTHROPIC_API_KEY env var required");
  process.exit(1);
}

const API = "https://api.anthropic.com/v1";
const HEADERS: Record<string, string> = {
  "x-api-key": API_KEY,
  "anthropic-version": "2023-06-01",
  "content-type": "application/json",
};

const SKILLS_DIR = ".claude/skills";
const MANIFEST = ".claude/skills-manifest.json";

interface Skill {
  id: string;
  name: string;
  description: string;
  instructions: string;
}

interface ParsedSkill {
  name: string;
  description: string;
  body: string;
}

function parseSkill(path: string): ParsedSkill | null {
  const text = readFileSync(path, "utf8");
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const [, fm, body] = m;
  const meta: Record<string, string> = {};
  for (const line of fm.split("\n")) {
    const eq = line.indexOf(": ");
    if (eq > 0) meta[line.slice(0, eq).trim()] = line.slice(eq + 2).trim();
  }
  if (!meta.name || !meta.description) return null;
  return { name: meta.name, description: meta.description, body: body.trim() };
}

async function listRemote(): Promise<Record<string, Skill>> {
  const r = await fetch(`${API}/skills`, { headers: HEADERS });
  if (!r.ok) throw new Error(`list skills: ${r.status} ${await r.text()}`);
  const j = (await r.json()) as { data?: Skill[] };
  const skills = j.data ?? [];
  return Object.fromEntries(skills.map((s) => [s.name, s]));
}

async function upsert(
  name: string,
  description: string,
  instructions: string,
  existingId?: string,
): Promise<string> {
  const body = JSON.stringify({ name, description, instructions });
  const url = existingId ? `${API}/skills/${existingId}` : `${API}/skills`;
  const method = existingId ? "PATCH" : "POST";
  const r = await fetch(url, { method, headers: HEADERS, body });
  if (!r.ok) throw new Error(`${method} ${name}: ${r.status} ${await r.text()}`);
  const j = (await r.json()) as Skill;
  return j.id;
}

async function main(): Promise<void> {
  const manifest: Record<string, string> = existsSync(MANIFEST)
    ? JSON.parse(readFileSync(MANIFEST, "utf8"))
    : {};

  let remote: Record<string, Skill> = {};
  try {
    remote = await listRemote();
  } catch (e) {
    console.warn(`warn: could not list remote skills (${(e as Error).message})`);
    console.warn("      falling back to manifest-only id lookup");
  }

  const entries = readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const name of entries) {
    const p = join(SKILLS_DIR, name, "SKILL.md");
    if (!existsSync(p)) continue;
    const parsed = parseSkill(p);
    if (!parsed) {
      console.warn(`SKIP   ${name}: no valid YAML frontmatter`);
      skipped++;
      continue;
    }
    const existingId = remote[parsed.name]?.id ?? manifest[parsed.name];
    const id = await upsert(parsed.name, parsed.description, parsed.body, existingId);
    manifest[parsed.name] = id;
    const action = existingId ? "UPDATE" : "CREATE";
    console.log(`${action.padEnd(6)} ${parsed.name} -> ${id}`);
    if (existingId) updated++;
    else created++;
  }

  // sort keys for stable diffs
  const sortedManifest: Record<string, string> = {};
  for (const k of Object.keys(manifest).sort()) sortedManifest[k] = manifest[k];
  writeFileSync(MANIFEST, JSON.stringify(sortedManifest, null, 2) + "\n");

  console.log(
    `\n${created} created, ${updated} updated, ${skipped} skipped. Manifest: ${MANIFEST}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
