# AgentDepot Agents

**Community-curated AI coding agents for [AgentDepot.dev](https://agentdepot.dev)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Agents](https://img.shields.io/badge/agents-0-blue.svg)](https://agentdepot.dev)

---

## 🎯 What is this?

This is the **open-source agent database** powering [AgentDepot.dev](https://agentdepot.dev) - the only premium directory covering every major AI coding tool in one place.

**We curate AI coding agents, plugins, and tools for:**

- 🟢 **Cursor** - Rules and workflows
- 🔵 **Windsurf** - Rules and MCP servers
- 🟣 **Claude Code** - Agents, skills, and plugins
- 🟠 **Replit** - Templates and extensions
- 💚 **MCP** - Model Context Protocol servers

**Anyone can contribute!** We review and test every submission to maintain quality.

---

## 🚀 Quick Start

### For Users

**Browse with beautiful UI:** Visit [agentdepot.dev](https://agentdepot.dev)

**Use in your code:**
```typescript
import { agents, cursorAgents, windsurfAgents } from 'agentdepot-agents';

// All agents across all tools
console.log(agents.length);

// Just Cursor rules
const cursors = cursorAgents.filter(agent => agent.verified);
```

### For Contributors

Want to add your agent? See [CONTRIBUTING.md](./CONTRIBUTING.md)

**Quick steps:**
1. Fork this repo
2. Add your agent to the appropriate file (`agents/cursor.ts`, `agents/windsurf.ts`, etc.)
3. Follow the schema in `types/agent.ts`
4. Submit a Pull Request
5. We'll review and merge (usually within 24-48 hours)

---

## 📁 Repository Structure

```
agentdepot-agents/
├── agents/
│   ├── cursor.ts          # Cursor rules and workflows
│   ├── windsurf.ts        # Windsurf rules and MCP servers
│   ├── claude-code.ts     # Claude Code agents and skills
│   ├── mcp.ts             # MCP servers
│   ├── replit.ts          # Replit templates
│   └── index.ts           # Exports all agents
├── types/
│   └── agent.ts           # TypeScript type definitions
├── CONTRIBUTING.md        # Contribution guidelines
├── LICENSE                # MIT License
└── README.md              # This file
```

---

## 🎨 What We Accept

We accept **real, working** AI coding agents that:

✅ **Work** - We test every submission
✅ **Are useful** - Solve a real problem
✅ **Have clear docs** - Installation instructions included
✅ **Give credit** - Original author properly attributed

We **reject**:

❌ Spam or low-effort submissions
❌ Duplicates of existing agents
❌ Broken or untested agents
❌ Malicious or unsafe code

---

## 📊 Current Stats

| Tool | Agents | Status |
|------|--------|--------|
| **Cursor** | 0 | 🚧 Building |
| **Windsurf** | 0 | 🚧 Building |
| **Claude Code** | 0 | 🚧 Building |
| **MCP** | 0 | 🚧 Building |
| **Replit** | 0 | 🚧 Building |
| **Total** | **0** | 🏗️ **Launching Soon** |

*Last updated: 2025-11-22*

---

## 🌟 Featured Agents

*Coming soon - we're building our initial collection!*

**Want to be featured?** Submit a high-quality, well-documented agent and we'll spotlight it here.

---

## 🤝 How to Contribute

We love community contributions! Here's how:

### Step 1: Find Your Tool

- Cursor → `agents/cursor.ts`
- Windsurf → `agents/windsurf.ts`
- Claude Code → `agents/claude-code.ts`
- Replit → `agents/replit.ts`
- MCP → `agents/mcp.ts`

### Step 2: Add Your Agent

Follow the schema in `types/agent.ts`:

```typescript
{
  id: "unique-kebab-case-id",
  name: "Your Agent Name",
  description: "Brief one-line description",
  fullDescription: `Full markdown description...`,
  tool: "cursor", // cursor | windsurf | claude-code | replit | mcp
  type: "rule",   // rule | agent | plugin | skill | template
  category: "web", // coding | debugging | testing | productivity | data | web | other
  tags: ["react", "typescript"],
  author: {
    name: "Your Name",
    github: "https://github.com/biagruot",
  },
  installation: {
    type: "manual",
    instructions: "Copy to .cursorrules file",
  },
  verified: false, // We'll set to true after testing
  createdAt: "2025-11-22",
}
```

### Step 3: Submit PR

1. Fork this repository
2. Create a branch: `git checkout -b add-my-agent`
3. Add your agent
4. Commit: `git commit -m "Add [Agent Name] for [Tool]"`
5. Push: `git push origin add-my-agent`
6. Open Pull Request

**See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.**

---

## 🔍 Review Process

1. **Automated checks** - TypeScript validation, schema validation
2. **Manual review** - We test your agent personally
3. **Approval** - If it works, we mark `verified: true` and merge
4. **Go live** - Appears on [agentdepot.dev](https://agentdepot.dev) within 24 hours

**Typical review time: 24-48 hours**

---

## 💡 Why Contribute?

- ✅ **Help the community** - Make great tools easier to discover
- ✅ **Get recognition** - Your name on every agent you submit
- ✅ **Build your profile** - GitHub contributions visible to employers
- ✅ **Free promotion** - Your agents featured on AgentDepot.dev
- ✅ **Learn together** - See how others build agents

---

## 🏆 Top Contributors

*Coming soon - be the first!*

---

## 📄 License

MIT License - Free to use, modify, and distribute with attribution.

See [LICENSE](./LICENSE) for details.

---

## 🔗 Links

- **Website:** [agentdepot.dev](https://agentdepot.dev)
- **Submit Agent:** [Open a Pull Request](https://github.com/biagruot/agentdepot-agents/pulls)
- **Report Issue:** [GitHub Issues](https://github.com/biagruot/agentdepot-agents/issues)
- **Email:** support@agentdepot.dev

---

## ❓ FAQ

### Can I submit someone else's agent?

Yes, but you must:
- Credit the original author properly
- Link to the original source
- Have permission (or it's open source)

### How do I update an existing agent?

Submit a PR with your changes. We'll review and merge if improved.

### Can I submit multiple agents in one PR?

Yes! But please keep related (same tool/category).

### What if my PR is rejected?

We'll explain why and help you improve it. Most common reasons:
- Agent doesn't work as described
- Missing installation instructions
- Duplicate of existing agent
- Low quality / not useful

### Can I become a maintainer?

After contributing 5+ quality agents, we'll consider it!

---

**Ready to contribute?** Read [CONTRIBUTING.md](./CONTRIBUTING.md) and submit your first agent! 🚀

---

*This repository is the data source for [AgentDepot.dev](https://agentdepot.dev). The UI and product code are proprietary.*
