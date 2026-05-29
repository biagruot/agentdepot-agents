# Contributing to AgentDepot

Thank you for contributing! This guide will help you add agents quickly.

---

## 🚀 Quick Start

**5 steps to contribute:**

1. **Fork** this repo and create a branch
   ```bash
   git checkout -b add-my-agent
   ```

2. **Find the right file:**
   - Cursor → `agents/cursor.ts`
   - Windsurf → `agents/windsurf.ts`
   - Claude Code → `agents/claude-code.ts`
   - Replit → `agents/replit.ts`
   - MCP → `agents/mcp.ts`

3. **Add your agent** following the schema below

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add [Agent Name] for [Tool]"
   git push origin add-my-agent
   ```

5. **Open a Pull Request** on GitHub

---

## 📦 Agent Schema

**Required fields:**

```typescript
{
  id: "unique-kebab-case-id",        // Must be unique
  name: "Agent Name",                 // Max 60 chars
  description: "One-line summary",    // Max 150 chars
  tool: "cursor",                     // cursor | windsurf | claude-code | replit | mcp
  type: "rule",                       // rule | agent | plugin | skill | template
  category: "web",                    // coding | debugging | testing | web | data | productivity | other
  tags: ["react", "typescript"],      // 2-5 relevant keywords
  author: {
    name: "Your Name",
    github: "https://github.com/username" // optional
  },
  installation: {
    type: "manual",                   // manual | npm | brew | curl | extension
    instructions: "How to install"
  },
  createdAt: "2025-12-09"            // Today's date (YYYY-MM-DD)
}
```

**Optional fields:**

- `fullDescription` - Detailed markdown description
- `links.github` - Source code URL
- `links.website` - Project website
- `links.demo` - Demo video (YouTube)
- `license` - License identifier (e.g., "MIT", "Apache-2.0", "GPL-3.0")

**Full type definition:** See `types/agent.ts`

---

## ✅ Submission Guidelines

**Your agent must:**

1. ✅ **Be free to use** - no paid, subscription, or paywalled tools
2. ✅ **Work** - Test it yourself first
3. ✅ **Be useful** - Solve a real problem
4. ✅ **Have clear docs** - Installation instructions required
5. ✅ **Give credit** - Attribute original author if applicable

**We reject:** paid or paywalled tools, spam, duplicates, broken agents, malicious code

---

## 🔍 Review Process

1. **Automated checks** (on every PR) - `npm run validate` runs TypeScript + schema checks and duplicate-ID detection
2. **Manual review** - a maintainer confirms the tool is free, real, and useful
3. **Merge** - once it passes, the PR is merged to `main`
4. **Go live** - merged agents sync to agentdepot.dev

**Response time:** Usually within 24-48 hours

---

## 💡 Tips for Success

**Write a great description:**
```typescript
// ❌ Bad
description: "A cursor rule"

// ✅ Good
description: "Production-ready React with TypeScript, Tailwind, and best practices"
```

**Use relevant tags (2-5):**
```typescript
// ✅ Good
tags: ["react", "typescript", "tailwind", "best-practices"]

// ❌ Too many
tags: ["react", "typescript", "javascript", "frontend", "web", "dev", "code"]
```

**Common mistakes to avoid:**
- Duplicate IDs (check existing agents first)
- Missing installation instructions
- Wrong file (make sure `tool` matches filename)
- Forgetting createdAt date

---

## 📝 Example

**Complete Cursor rule submission:**

```typescript
{
  id: "cursor-nextjs-app-router",
  name: "Next.js App Router Expert",
  description: "Specialized rules for Next.js 14+ App Router with Server Components",
  fullDescription: `
# Next.js App Router Expert

Transforms Cursor into a Next.js App Router specialist.

## Features
- App Router best practices
- Server/Client component patterns
- Proper data fetching
- SEO optimization
  `,
  tool: "cursor",
  type: "rule",
  category: "web",
  tags: ["nextjs", "react", "app-router"],
  author: {
    name: "Your Name",
    github: "https://github.com/yourusername"
  },
  installation: {
    type: "manual",
    instructions: "Copy the rule content to .cursorrules in your project root"
  },
  createdAt: "2025-12-09"
}
```

**See existing agents in `agents/*.ts` for more examples.**

---

## ❓ FAQ

**How long does review take?**
24-48 hours for most submissions.

**Can I submit multiple agents?**
Yes! Submit in separate PRs for easier review.

**What if rejected?**
We'll explain why and help you fix it.

**Can I update an existing agent?**
Yes! Submit a PR with improvements.

**How do I report an issue?**
Open a [GitHub Issue](https://github.com/biagruot/agentdepot-agents/issues).

---

## 🤝 Code of Conduct

Be respectful, constructive, and helpful. No harassment, spam, or trolling.

---

## 📞 Contact

- Email: hello@agentdepot.dev
- Website: [agentdepot.dev](https://agentdepot.dev)

---

**Ready to contribute?** Fork the repo and submit your first agent! 🚀
