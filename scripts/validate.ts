// Validates the agent catalog. `tsc --noEmit` already enforces the Agent schema
// (types, required fields, enum values) at compile time; this adds the runtime
// checks the type system can't express: unique ids and well-formed values.
import { cursorAgents } from "../agents/cursor";
import { windsurfAgents } from "../agents/windsurf";
import { claudeCodeAgents } from "../agents/claude-code";
import { replitAgents } from "../agents/replit";
import { mcpAgents } from "../agents/mcp";
import type { Agent } from "../types/agent";

const all: Agent[] = [
  ...cursorAgents,
  ...windsurfAgents,
  ...claudeCodeAgents,
  ...replitAgents,
  ...mcpAgents,
];

const errors: string[] = [];

// Duplicate id detection
const counts = new Map<string, number>();
for (const a of all) counts.set(a.id, (counts.get(a.id) ?? 0) + 1);
for (const [id, n] of counts) {
  if (n > 1) errors.push(`Duplicate id "${id}" (appears ${n} times)`);
}

// Well-formed values
for (const a of all) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.id)) {
    errors.push(`id must be kebab-case: "${a.id}"`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.createdAt)) {
    errors.push(`createdAt must be YYYY-MM-DD on "${a.id}": "${a.createdAt}"`);
  }
  if (!a.tags || a.tags.length === 0) {
    errors.push(`"${a.id}" must have at least one tag`);
  }
}

if (errors.length > 0) {
  console.error(`✗ Validation failed (${errors.length} issue(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✓ ${all.length} agents validated — unique ids, well-formed fields.`);
