# Contributing to AgentDepot Agents

Thank you for contributing to AgentDepot! 🎉

This guide will help you add agents to our community-curated database.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Agent Schema](#agent-schema)
3. [Submission Guidelines](#submission-guidelines)
4. [Review Process](#review-process)
5. [Tips for Success](#tips-for-success)
6. [Code of Conduct](#code-of-conduct)

---

## 🚀 Quick Start

### Prerequisites

- GitHub account
- Basic knowledge of TypeScript/JSON
- The agent you want to submit (tested and working!)

### Step-by-Step

1. **Fork this repository**
   - Click "Fork" button in top-right
   - Clone your fork locally

2. **Create a branch**
   ```bash
   git checkout -b add-my-agent
   ```

3. **Find the right file**
   - Cursor → `agents/cursor.ts`
   - Windsurf → `agents/windsurf.ts`
   - Claude Code → `agents/claude-code.ts`
   - Replit → `agents/replit.ts`
   - MCP → `agents/mcp.ts`

4. **Add your agent**
   - Follow the schema below
   - Add to the appropriate array
   - Save the file

5. **Test locally** (optional but recommended)
   ```bash
   npm install
   npm run build
   # Should compile without errors
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "Add [Agent Name] for [Tool]"
   git push origin add-my-agent
   ```

7. **Open Pull Request**
   - Go to original repo on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out PR template
   - Submit!

---

## 📦 Agent Schema

Every agent must follow this TypeScript schema:

```typescript
{
  // REQUIRED FIELDS

  id: string;
  // Unique identifier in kebab-case
  // Example: "cursor-react-typescript-pro"
  // Must be unique across ALL agents

  name: string;
  // Display name
  // Example: "React + TypeScript Professional"
  // Max 60 characters

  description: string;
  // One-line description for cards
  // Example: "Production-ready React with TypeScript best practices"
  // Max 150 characters

  tool: AgentTool;
  // One of: "cursor" | "windsurf" | "claude-code" | "replit" | "mcp"

  type: AgentType;
  // One of: "rule" | "agent" | "plugin" | "skill" | "template"

  category: string;
  // One of: "coding" | "debugging" | "testing" | "productivity" | "data" | "web" | "other"

  tags: string[];
  // Array of relevant keywords
  // Example: ["react", "typescript", "tailwind"]
  // 2-5 tags recommended

  author: {
    name: string;        // Your name or username
    github?: string;     // Your GitHub profile (optional)
    url?: string;        // Your website (optional)
  };

  installation: {
    type?: string;       // "manual" | "npm" | "brew" | "curl" | "extension" | "other"
    instructions?: string; // How to install (markdown supported)
    command?: string;    // Install command (if applicable)
  };

  verified: boolean;
  // ALWAYS set to false - we'll set to true after testing

  createdAt: string;
  // Today's date in YYYY-MM-DD format
  // Example: "2025-11-22"


  // OPTIONAL FIELDS

  fullDescription?: string;
  // Detailed markdown description
  // Include: features, usage, examples
  // Recommended for complex agents

  featured?: boolean;
  // Leave undefined - we'll set for exceptional agents

  trending?: boolean;
  // Leave undefined - we'll set based on usage

  stats?: {
    downloads?: number;  // We'll populate this
    stars?: number;      // From GitHub if applicable
  };

  links?: {
    github?: string;     // Source code repository
    website?: string;    // Project website
    demo?: string;       // Video demo URL (YouTube, etc.)
  };

  updatedAt?: string;
  // Last update date - only for updates to existing agents
}
```

---

## ✅ Submission Guidelines

### Quality Requirements

**Your agent must:**

1. **Work** ✅
   - Test it yourself before submitting
   - Verify installation instructions are accurate
   - No errors or warnings

2. **Be useful** ✅
   - Solve a real problem
   - Not a duplicate of existing agent
   - Clear use case

3. **Have clear documentation** ✅
   - Installation instructions included
   - Description explains what it does
   - Examples if complex

4. **Give proper credit** ✅
   - Original author attributed in `author` field
   - Link to source if adapting someone else's work
   - Permission obtained if required

### What We Accept

- ✅ Original agents you created
- ✅ Adaptations with proper attribution
- ✅ Translations/improvements of existing agents
- ✅ Ports of agents from other tools
- ✅ Well-documented complex workflows
- ✅ Simple but useful rules

### What We Reject

- ❌ Spam or promotional content
- ❌ Duplicates of existing agents (check first!)
- ❌ Broken or untested agents
- ❌ Malicious code or security risks
- ❌ Plagiarism without attribution
- ❌ Low-effort submissions (no description, etc.)
- ❌ Offensive or inappropriate content

---

## 🔍 Review Process

### What Happens After You Submit

1. **Automated Checks** (Instant)
   - TypeScript compilation
   - Schema validation
   - Duplicate ID check
   - Basic linting

2. **Manual Review** (24-48 hours)
   - We read your agent description
   - We test installation instructions
   - We verify it works as described
   - We check code quality (if applicable)

3. **Approval or Feedback**
   - ✅ **Approved:** We merge and set `verified: true`
   - 💬 **Needs changes:** We comment with specific requests
   - ❌ **Rejected:** We explain why with suggestions

4. **Go Live**
   - Merged agents sync to AgentDepot.dev within 24 hours
   - You'll get credit on the website
   - Your GitHub profile shows the contribution

### Response Times

- **Automated checks:** Instant
- **Initial review:** Within 24 hours (usually faster)
- **Full testing:** Within 48 hours
- **Merge:** Usually same day for quality submissions

---

## 💡 Tips for Success

### Make Your Agent Stand Out

1. **Great Description**
   ```typescript
   // ❌ Bad
   description: "A cursor rule"

   // ✅ Good
   description: "Production-ready React with TypeScript, Tailwind, and best practices for modern web apps"
   ```

2. **Detailed fullDescription**
   ```typescript
   fullDescription: `
   # React + TypeScript Professional

   This rule transforms Cursor into a senior React engineer.

   ## Features
   - Enforces strict TypeScript typing
   - Suggests Tailwind utility classes
   - Promotes composition over inheritance

   ## Best For
   - React 18+ projects
   - TypeScript codebases
   - Teams following modern patterns

   ## Usage
   Copy to \`.cursorrules\` in your project root.
   Cursor will automatically apply these rules.
   `
   ```

3. **Clear Installation**
   ```typescript
   installation: {
     type: "manual",
     instructions: `
   1. Copy the rule content below
   2. Create or open \`.cursorrules\` in your project root
   3. Paste the content
   4. Restart Cursor (if open)
   5. Start coding! Cursor will now follow these rules.
     `
   }
   ```

4. **Relevant Tags**
   ```typescript
   // ❌ Too few
   tags: ["react"]

   // ❌ Too many
   tags: ["react", "typescript", "javascript", "frontend", "web", "development", "coding", "programming"]

   // ✅ Just right
   tags: ["react", "typescript", "tailwind", "best-practices"]
   ```

### Common Mistakes to Avoid

1. **Duplicate IDs**
   - Always check existing agents first
   - Use descriptive, unique IDs
   - Format: `tool-name-variant`

2. **Forgetting verified: false**
   - We set this to true after testing
   - Your submission should always be false

3. **Missing installation instructions**
   - Every agent needs clear install steps
   - Test your own instructions!

4. **Wrong file**
   - Cursor → `agents/cursor.ts` (not `windsurf.ts`!)
   - Check tool field matches file

5. **Incomplete schema**
   - All required fields must be present
   - Use TypeScript to catch errors

---

## 🏆 Recognition

### Contributor Badges

After contributing, you'll earn badges:

- 🌱 **First PR** - Your first merged agent
- ⭐ **5 Agents** - Contributed 5+ agents
- 🔥 **Top Contributor** - 10+ agents or exceptional quality
- 💎 **Maintainer** - Trusted community reviewer (by invitation)

### Featured Agents

Exceptional agents get featured on:
- AgentDepot.dev homepage
- "Agent of the Week" newsletter
- Social media spotlights

**What makes an agent exceptional:**
- Solves a common pain point
- Excellent documentation
- High quality code/rules
- Positive community feedback

---

## 📝 Examples

### Example 1: Cursor Rule

```typescript
{
  id: "cursor-nextjs-app-router",
  name: "Next.js App Router Expert",
  description: "Specialized rules for Next.js 14+ App Router with Server Components",
  fullDescription: `
# Next.js App Router Expert

Transform Cursor into a Next.js App Router specialist.

## Features
- Enforces App Router patterns
- Server/Client component best practices
- Proper data fetching patterns
- SEO optimization

## Usage
Copy to \`.cursorrules\` in your Next.js project.
  `,
  tool: "cursor",
  type: "rule",
  category: "web",
  tags: ["nextjs", "react", "app-router", "server-components"],
  author: {
    name: "John Doe",
    github: "https://github.com/johndoe",
  },
  installation: {
    type: "manual",
    instructions: "Copy the rule content to .cursorrules in your project root",
  },
  verified: false,
  createdAt: "2025-11-22",
}
```

### Example 2: MCP Server

```typescript
{
  id: "mcp-postgres-connector",
  name: "PostgreSQL Database Connector",
  description: "Connect Claude to your PostgreSQL database for schema inspection and query generation",
  fullDescription: `
# PostgreSQL Database Connector

Safe, read-only database access for Claude.

## Features
- Schema inspection
- Query generation
- Read-only by default
- Connection pooling

## Installation
Install via npm and configure with your database credentials.
  `,
  tool: "mcp",
  type: "plugin",
  category: "data",
  tags: ["database", "postgresql", "sql"],
  author: {
    name: "Jane Smith",
    github: "https://github.com/janesmith",
  },
  installation: {
    type: "npm",
    command: "npx -y @modelcontextprotocol/server-postgres",
    instructions: `
1. Install: \`npx -y @modelcontextprotocol/server-postgres\`
2. Configure in Claude Desktop settings
3. Add database connection string
4. Restart Claude Desktop
    `,
  },
  links: {
    github: "https://github.com/modelcontextprotocol/servers",
  },
  verified: false,
  createdAt: "2025-11-22",
}
```

### Example 3: Replit Template

```typescript
{
  id: "replit-nextjs-starter",
  name: "Next.js Full-Stack Starter",
  description: "Production-ready Next.js template with authentication, database, and deployment configured",
  fullDescription: `
# Next.js Full-Stack Starter

Complete Next.js starter with everything configured.

## Included
- Next.js 14 with App Router
- PostgreSQL database (Neon)
- Authentication (NextAuth.js)
- Tailwind CSS
- TypeScript
- Deployment ready

## Usage
Fork this Replit template and start building!
  `,
  tool: "replit",
  type: "template",
  category: "web",
  tags: ["nextjs", "fullstack", "starter", "authentication"],
  author: {
    name: "Replit Team",
    url: "https://replit.com",
  },
  installation: {
    type: "other",
    instructions: "Click 'Use Template' on Replit to fork this template",
    url: "https://replit.com/@templates/nextjs-starter",
  },
  links: {
    website: "https://replit.com/@templates/nextjs-starter",
  },
  verified: false,
  createdAt: "2025-11-22",
}
```

---

## 🤝 Code of Conduct

### Our Standards

We are committed to providing a welcoming and inclusive environment.

**We expect contributors to:**
- ✅ Be respectful and constructive
- ✅ Give and receive feedback graciously
- ✅ Focus on what's best for the community
- ✅ Show empathy towards others

**Unacceptable behavior:**
- ❌ Harassment or discrimination
- ❌ Trolling or insulting comments
- ❌ Publishing others' private information
- ❌ Spam or self-promotion

### Enforcement

Violations may result in:
- Warning
- Temporary ban from contributing
- Permanent ban (severe cases)

---

## ❓ FAQ

### How long does review take?

Usually 24-48 hours. Complex agents may take longer.

### Can I submit multiple agents?

Yes! Please submit related agents in separate PRs for easier review.

### What if my agent is rejected?

We'll explain why and help you improve it. Most rejections are fixable!

### Can I update an existing agent?

Yes! Submit a PR with your improvements.

### Who maintains this?

The AgentDepot team, with help from trusted community contributors.

### How do I report an issue?

Open a [GitHub Issue](https://github.com/biagruot/agentdepot-agents/issues).

### Can I become a maintainer?

After 5+ quality contributions, we'll consider it!

---

## 📞 Contact

- **Questions:** Open an issue or email support@agentdepot.dev
- **Website:** [agentdepot.dev](https://agentdepot.dev)

---

## 🙏 Thank You!

Every contribution makes AgentDepot better for developers worldwide.

**Ready to contribute?** Fork the repo and submit your first agent! 🚀

---

*This repository is maintained by the AgentDepot team and community contributors.*
