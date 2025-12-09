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
| Cursor | 15 |
| Windsurf | 15 |
| Claude Code | 15 |
| MCP | 10 |
| Replit | 16 |
| **Total** | **71** |

---

## ✅ What We Accept

We accept **real, working** agents that:

- ✅ Work (we test everything)
- ✅ Solve a real problem
- ✅ Have clear installation instructions
- ✅ Credit the original author

We reject: spam, duplicates, broken agents, malicious code.

---

## 🔍 Review Process

1. **Automated checks** (instant) - GitHub Actions validates your submission
   - TypeScript compilation
   - Schema validation
   - Duplicate ID detection
   - Required fields check
2. **Manual review** (24-48hrs) - We test your agent
3. **Merge** - PR merged to main branch
4. **Sync** - Agents automatically sync to agentdepot.dev (within 24hrs)

**How the sync works:** This is a public data repository. After your PR is merged, agents are synced to the private production repo and deployed to agentdepot.dev.

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
- **Email:** support@agentdepot.dev

---

*This is the open data source for [AgentDepot.dev](https://agentdepot.dev)*
