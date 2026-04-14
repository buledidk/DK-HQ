// scripts/generate-catalog.ts
//
// Generates a public-facing skills catalog from the local
// .claude/skills/<name>/SKILL.md files. Produces two artifacts:
//
//   SKILLS_CATALOG.md  — markdown index (repo root)
//   docs/skills.html   — standalone HTML page (Vercel / GitHub Pages)
//
// Usage: pnpm generate-catalog

import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'node:fs';
import { join } from 'node:path';

const SKILLS_DIR = '.claude/skills';
const OUT_MD = 'SKILLS_CATALOG.md';
const OUT_HTML = 'docs/skills.html';

type Entry = { name: string; description: string; lineCount: number };

function loadSkills(): Entry[] {
  const entries: Entry[] = [];
  if (!existsSync(SKILLS_DIR)) return entries;
  for (const dir of readdirSync(SKILLS_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const file = join(SKILLS_DIR, dir.name, 'SKILL.md');
    if (!existsSync(file)) continue;
    const md = readFileSync(file, 'utf8');
    const m = md.match(/^---\n([\s\S]*?)\n---/);
    if (!m) continue;
    const fm = m[1];
    const nameMatch = fm.match(/^name:\s*(.+)$/m);
    const descMatch = fm.match(/^description:\s*(.+)$/m);
    if (!nameMatch || !descMatch) continue;
    entries.push({
      name: nameMatch[1].trim(),
      description: descMatch[1].trim(),
      lineCount: md.split('\n').length,
    });
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));
  return entries;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[c];
  });
}

function renderMd(entries: Entry[]): string {
  const now = new Date().toISOString();
  const lines = [
    '# DK Buledi — Skills Catalog',
    '',
    '> Auto-generated from `.claude/skills/`. Run `pnpm generate-catalog` to refresh.',
    '',
    `**${entries.length} skills** · Generated ${now}`,
    '',
    'Source of truth: Anthropic Skills API (claude.ai). This file mirrors the',
    'YAML frontmatter of every `SKILL.md` in this repo for browsing and linking.',
    '',
    '| # | Skill | Description | Lines |',
    '|---|-------|-------------|-------|',
  ];
  entries.forEach((e, i) => {
    const desc = e.description.replace(/\|/g, '\\|');
    const clipped = desc.length > 240 ? desc.slice(0, 240) + '…' : desc;
    lines.push(
      `| ${i + 1} | [\`${e.name}\`](./.claude/skills/${e.name}/SKILL.md) | ${clipped} | ${e.lineCount} |`,
    );
  });
  return lines.join('\n') + '\n';
}

function renderHtml(entries: Entry[]): string {
  const now = new Date().toISOString();
  const rows = entries
    .map(
      (e, i) =>
        `    <tr><td>${i + 1}</td><td><code>${escapeHtml(e.name)}</code></td><td>${escapeHtml(e.description)}</td><td class="num">${e.lineCount}</td></tr>`,
    )
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>DK Buledi — Skills Catalog</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { --bg:#0b0f19; --fg:#e2e8f0; --muted:#94a3b8; --border:#1e293b; --accent:#7dd3fc; --hover:#111827; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0 auto; padding: 2rem 1rem; max-width: 1280px; background: var(--bg); color: var(--fg); }
  h1 { font-size: 1.75rem; margin: 0 0 0.25rem; font-weight: 600; }
  .meta { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }
  table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
  th, td { text-align: left; padding: 0.75rem 0.5rem; border-bottom: 1px solid var(--border); vertical-align: top; }
  th { background: #0f172a; position: sticky; top: 0; font-weight: 500; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; color: var(--muted); }
  code { background: var(--border); padding: 2px 6px; border-radius: 3px; font-size: 0.85em; color: var(--accent); }
  td.num { text-align: right; color: var(--muted); font-variant-numeric: tabular-nums; }
  tr:hover { background: var(--hover); }
</style>
</head>
<body>
  <header>
    <h1>DK Buledi — Skills Catalog</h1>
    <div class="meta">${entries.length} skills · Generated ${now} · Source: Anthropic Skills API (claude.ai)</div>
  </header>
  <table>
    <thead><tr><th>#</th><th>Skill</th><th>Description</th><th>Lines</th></tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>
</body>
</html>
`;
}

function main(): void {
  const entries = loadSkills();
  writeFileSync(OUT_MD, renderMd(entries));
  console.log(`Wrote ${OUT_MD} (${entries.length} skills)`);
  mkdirSync('docs', { recursive: true });
  writeFileSync(OUT_HTML, renderHtml(entries));
  console.log(`Wrote ${OUT_HTML}`);
}

main();
