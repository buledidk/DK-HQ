// scripts/generate-skill.ts
//
// Generate or enhance a SKILL.md using Claude Opus 4.6 with adaptive
// thinking. Pulls the existing .claude/skills/ catalogue into context (via
// prompt caching) so the model matches voice, depth, and conventions of the
// existing pack.
//
// Usage:
//   pnpm generate-skill <name> "<topic / scope>"
//   pnpm enhance-skill  <name>
//
// Examples:
//   pnpm generate-skill ifrs-18-presentation-disclosure \
//     "Prepare entities for IFRS 18 effective Jan 2027 — new P&L categories, MPMs, aggregation rules, transitions from IAS 1"
//
//   pnpm enhance-skill big4-audit-file-delivery
//
// Requires: ANTHROPIC_API_KEY env var + @anthropic-ai/sdk dev dep.

import Anthropic from "@anthropic-ai/sdk";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("ANTHROPIC_API_KEY env var required");
  process.exit(1);
}

const client = new Anthropic({ apiKey: API_KEY });
const SKILLS_DIR = ".claude/skills";
const MODEL = "claude-opus-4-6";

const SYSTEM_PROMPT = `You are an expert skill-engineer for the DK-HQ Claude Skills pack — a portfolio-grade capability statement for a senior UK finance / audit / risk professional (DK Buledi, ACCA, ILR holder).

You produce SKILL.md files with:

- YAML frontmatter: \`name\` (kebab-case) and \`description\` (keyword-packed
  paragraph, aggressively specific triggers, ends with what the skill covers
  — aim ~80–200 words of trigger phrases).
- Body of ~200–350 lines with sections: Scope & frameworks; Workflow
  (end-to-end); Standards / regulator references; Output templates;
  Common errors + anti-patterns; AI-enablement hooks; Cross-skill chaining.
- Demo entities only: "Indus Nexus Limited" (UK standalone), "Indus Nexus
  Group" (consolidated), "Indus Nexus Inc." (SEC filer), "ABC Company"
  (fallback). NEVER real client or firm names.
- UK statutory audit default unless specified otherwise (ISA (UK), FRS 102,
  Companies Act 2006). Cite specific ISAs / IFRSs / IASs / regulators.
- House style: terse, tables where possible, bulleted checklists, cross-links
  to other skills in the pack by name.

Match the depth, voice, and structure of the existing pack — the YAML
frontmatter index of the 60+ existing skills is provided in the cached
system message.`;

type Skill = { name: string; description: string };

function loadCatalog(): string {
  const entries: Skill[] = [];
  for (const dir of readdirSync(SKILLS_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const file = join(SKILLS_DIR, dir.name, "SKILL.md");
    if (!existsSync(file)) continue;
    const md = readFileSync(file, "utf8");
    const m = md.match(/^---\n([\s\S]*?)\n---/);
    if (!m) continue;
    const fm = m[1];
    const nameMatch = fm.match(/^name:\s*(.+)$/m);
    const descMatch = fm.match(/^description:\s*(.+)$/m);
    if (nameMatch && descMatch) {
      entries.push({
        name: nameMatch[1].trim(),
        description: descMatch[1].trim(),
      });
    }
  }
  return entries
    .map((e) => `### ${e.name}\n${e.description}`)
    .join("\n\n");
}

function extractText(message: Anthropic.Message): string {
  return message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");
}

async function createSkill(name: string, topic: string): Promise<void> {
  const catalog = loadCatalog();
  const dir = join(SKILLS_DIR, name);
  const file = join(dir, "SKILL.md");
  if (existsSync(file)) {
    console.error(
      `Skill ${name} already exists at ${file}. Use \`pnpm enhance-skill ${name}\` instead, or delete the file first.`,
    );
    process.exit(1);
  }

  console.log(`Generating SKILL.md for \`${name}\` via ${MODEL}...`);

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    system: [
      { type: "text", text: SYSTEM_PROMPT },
      {
        type: "text",
        text: `## Existing skills in the pack (YAML frontmatter index)\n\nUse these to match voice, cross-link, and avoid duplication.\n\n${catalog}`,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: `Draft a new SKILL.md for:\n\nName: ${name}\nTopic / scope: ${topic}\n\nReturn ONLY the raw SKILL.md content (YAML frontmatter + markdown body). No code fences around the whole output, no surrounding commentary, no preamble.`,
      },
    ],
  });

  const text = extractText(message).trim();
  if (!text.startsWith("---")) {
    console.error(
      "Generated output did not start with YAML frontmatter. Aborting.\n\n---\n" +
        text.slice(0, 500),
    );
    process.exit(1);
  }

  mkdirSync(dir, { recursive: true });
  writeFileSync(file, text + "\n");

  const usage = message.usage;
  console.log(`✓ Wrote ${file} (${text.length} chars)`);
  console.log(
    `  Tokens: ${usage.input_tokens} in / ${usage.output_tokens} out` +
      ` / ${usage.cache_read_input_tokens ?? 0} cache-read` +
      ` / ${usage.cache_creation_input_tokens ?? 0} cache-write`,
  );
  console.log(
    `\nNext: review the draft, then \`pnpm sync-skills\` to deploy.`,
  );
}

async function enhanceSkill(name: string): Promise<void> {
  const file = join(SKILLS_DIR, name, "SKILL.md");
  if (!existsSync(file)) {
    console.error(`Skill ${name} not found at ${file}`);
    process.exit(1);
  }
  const current = readFileSync(file, "utf8");
  const catalog = loadCatalog();

  console.log(
    `Enhancing SKILL.md for \`${name}\` via ${MODEL} (${current.length} chars → target ~350 lines)...`,
  );

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: "adaptive" },
    output_config: { effort: "high" },
    system: [
      { type: "text", text: SYSTEM_PROMPT },
      {
        type: "text",
        text: `## Existing skills in the pack (YAML frontmatter index)\n\n${catalog}`,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: `Enhance this SKILL.md to ~350 lines depth. Add where missing: case studies, output templates (fenced code blocks / tables), regulator Q&A if applicable, cross-skill chaining, AI-enablement section with 5+ concrete automation patterns + tooling landscape + guardrails. Keep the existing YAML frontmatter — only broaden the description keywords if it unlocks triggers, do not narrow.\n\nCurrent content:\n\n${current}\n\nReturn ONLY the enhanced SKILL.md. No code fences around the whole output, no commentary.`,
      },
    ],
  });

  const text = extractText(message).trim();
  if (!text.startsWith("---")) {
    console.error(
      "Enhanced output did not start with YAML frontmatter. Aborting, original preserved.",
    );
    process.exit(1);
  }

  writeFileSync(file, text + "\n");
  console.log(
    `✓ Enhanced ${file} (${current.length} → ${text.length} chars)`,
  );
  console.log(
    `  Tokens: ${message.usage.input_tokens} in / ${message.usage.output_tokens} out` +
      ` / ${message.usage.cache_read_input_tokens ?? 0} cache-read` +
      ` / ${message.usage.cache_creation_input_tokens ?? 0} cache-write`,
  );
}

async function main(): Promise<void> {
  const [cmd, name, ...rest] = process.argv.slice(2);
  if (!cmd || !name) {
    console.error(
      `Usage:\n  pnpm generate-skill <name> "<topic>"\n  pnpm enhance-skill  <name>`,
    );
    process.exit(1);
  }
  if (cmd === "create") {
    const topic = rest.join(" ");
    if (!topic) {
      console.error("create requires a topic argument");
      process.exit(1);
    }
    await createSkill(name, topic);
  } else if (cmd === "enhance") {
    await enhanceSkill(name);
  } else {
    console.error(`Unknown command: ${cmd}. Use create or enhance.`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
