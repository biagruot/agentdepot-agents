# AgentDepot Agents

**Open-source database of AI coding agents for [AgentDepot.dev](https://agentdepot.dev)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Community-curated agents for **Cursor, Windsurf, Claude Code, Replit, and MCP**. Browse at [agentdepot.dev](https://agentdepot.dev) or contribute below.

---

## 🚀 Contribute an Agent

**3 simple steps:**

1. **Fork** this repo
2. **Add** your agent to `agents/[tool].ts` (e.g., `agents/cursor.ts`)
3. **Submit** a Pull Request

We review within 24-48 hours. See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Quick Example

```typescript
{
  id: "my-agent-name",
  name: "My Agent Name",
  description: "What your agent does in one line",
  tool: "cursor", // cursor | windsurf | claude-code | replit | mcp
  type: "rule",   // rule | agent | plugin | skill | template
  category: "web", // coding | debugging | testing | web | data | productivity
  tags: ["react", "typescript"],
  author: {
    name: "Your Name",
    github: "https://github.com/yourusername"
  },
  installation: {
    type: "manual",
    instructions: "Copy to .cursorrules file"
  },
  createdAt: "2025-12-09"
}
```

**Full schema:** See `types/agent.ts` or [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📊 Current Stats

| Tool | Agents |
|------|--------|
| Cursor | 17 |
| Windsurf | 17 |
| Claude Code | 17 |
| MCP | 16 |
| Replit | 18 |
| **Total** | **85** |

---

## ✅ What We Accept

We accept **real, working, free** tools that:

- ✅ **Are free to use** — no paid, subscription, or paywalled tools
- ✅ Work as described
- ✅ Solve a real problem
- ✅ Have clear installation instructions
- ✅ Credit the original author

We reject: paid or paywalled tools, spam, duplicates, broken agents, and malicious code.

---

## 🔍 Review Process

1. **Automated checks** (on every PR) — [GitHub Actions](.github/workflows/validate.yml) runs `npm run validate`:
   - TypeScript compilation against the `Agent` schema (required fields and valid enums)
   - Duplicate `id` detection across all tool files
2. **Manual review** — a maintainer confirms the tool is free, real, and useful
3. **Merge** — once it passes, the PR is merged to `main`
4. **Sync** — merged agents are synced to [agentdepot.dev](https://agentdepot.dev)

This is the public data source for AgentDepot; the web app reads from it.

---

## ❓ FAQ

**Can I submit someone else's agent?**
Yes, with proper attribution and permission.

**How do I update an agent?**
Submit a PR with your changes.

**What if rejected?**
We'll explain why and help you fix it.

**Full FAQ:** See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

MIT License - See [LICENSE](./LICENSE)

---

## 🔗 Links

- **Browse agents:** [agentdepot.dev](https://agentdepot.dev)
- **Report issue:** [GitHub Issues](https://github.com/biagruot/agentdepot-agents/issues)
- **Email:** hello@agentdepot.dev

---

*This is the open data source for [AgentDepot.dev](https://agentdepot.dev)*
