import { Agent } from "../types/agent";

export const windsurfAgents: Agent[] = [
  {
    id: "windsurf-python-expert",
    name: "Windsurf Python Expert",
    description:
      "Specialized Cascade persona for Python development, enforcing PEP 8, type hinting, and modular design.",
    fullDescription: `You are an expert Python developer using Windsurf.
    
Rules:
- Always use type hints (typing module) for functions and classes.
- Follow PEP 8 style guidelines strictly.
- Prefer modular code structure.
- Use 'pytest' for testing.
- Optimize for readability and performance.
- When generating code, include docstrings (Google style).`,
    tool: "windsurf",
    type: "rule",
    category: "coding",
    tags: ["Python", "PEP8", "Typing", "Cascade"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/ichoosetoaccept/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Copy content to .windsurfrules or global_rules.md",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-react-nextjs-pro",
    name: "React & Next.js Pro",
    description:
      "Cascade rules for Modern Web Development with Next.js App Router, React Server Components, and Tailwind.",
    fullDescription: `You are a Senior Frontend Engineer.

Rules:
- Use Next.js 14+ App Router structure.
- Explicitly mark Client Components with 'use client'.
- Use React Server Components (RSC) by default.
- Style with Tailwind CSS (mobile-first).
- Use proper naming conventions (kebab-case for files, PascalCase for components).
- Ensure accessibility (ARIA labels) in all internal components.`,
    tool: "windsurf",
    type: "rule",
    category: "web",
    tags: ["React", "Next.js", "Tailwind", "Web"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/ichoosetoaccept/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Copy content to .windsurfrules in your project root.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-typescript-strict",
    name: "TypeScript Strict Mode",
    description:
      'Enforces strict TypeScript usage, avoiding "any", and preferring interfaces over types.',
    fullDescription: `You are a TypeScript purist.

Rules:
- NO explicit 'any' types. Use 'unknown' if necessary.
- Prefer 'interface' for object definitions.
- Use strict null checks.
- properly type all error handling (try/catch).
- Use functional components for React.
- Ensure all async functions have proper error boundaries.`,
    tool: "windsurf",
    type: "rule",
    category: "coding",
    tags: ["TypeScript", "Strict", "Type Safety"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/ichoosetoaccept/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions:
        "Copy content to global_rules.md for organization-wide enforcement.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-clean-code",
    name: "Clean Code Architect",
    description:
      "Focuses on engineering efficiency, SOLID principles, and modular architecture.",
    fullDescription: `You are a Software Architect focused on Clean Code.

Rules:
- Follow SOLID principles.
- specific focus on Single Responsibility Principle.
- DRY (Don't Repeat Yourself).
- Functions should be small and do one thing.
- Use meaningful variable names.
- Prefer composition over inheritance.`,
    tool: "windsurf",
    type: "rule",
    category: "coding",
    tags: ["Architecture", "Clean Code", "SOLID"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/kundansinghdev/Awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Add to .windsurfrules to guide Cascade code generation.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-security-guardian",
    name: "Security Guardian",
    description:
      "Security-focused rules to prevent common vulnerabilities during code generation.",
    fullDescription: `You are a Security Specialist.

Rules:
- Validate all inputs.
- Sanitize data before database queries (No SQL Injection).
- Encode output to prevent XSS.
- Never hardcode secrets/API keys (use env vars).
- Use secure dependency versions.
- Follow OWASP Top 10 guidelines.`,
    tool: "windsurf",
    type: "rule",
    category: "coding",
    tags: ["Security", "OWASP", "Safety"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/ichoosetoaccept/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Essential for sensitive projects. Add to .windsurfrules.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-gitlens",
    name: "GitLens for Windsurf",
    description:
      "Supercharge Git inside Windsurf. Visualize code authorship and history.",
    fullDescription:
      "GitLens helps you better understand code. Quickly glimpse into whom, why, and when a line or code block was changed. Jump back through time to gain further insights on how and why the code evolved.",
    tool: "windsurf",
    type: "plugin",
    category: "productivity",
    tags: ["Git", "Version Control", "Productivity"],
    author: {
      name: "GitKraken",
      url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
    },
    installation: {
      type: "extension",
      instructions:
        'Search "GitLens" in Windsurf Extensions marketplace and install.',
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-snyk",
    name: "Snyk Security",
    description:
      "Find and fix security vulnerabilities in your code and open source dependencies.",
    fullDescription:
      "Snyk Security scans your code for vulnerabilities and provides actionable fixes. Integrates seamlessly with Windsurf to ensure you are shipping secure code.",
    tool: "windsurf",
    type: "plugin",
    category: "coding",
    tags: ["Security", "Vulnerability", "Scanning"],
    author: {
      name: "Snyk",
      url: "https://marketplace.visualstudio.com/items?itemName=snyk-security.snyk-vulnerability-scanner",
    },
    installation: {
      type: "extension",
      instructions: "Install via Extensions view. Requires Snyk account.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-sonarqube",
    name: "SonarQube for IDE",
    description: "Detect bugs, vulnerabilities, and code smells on the fly.",
    fullDescription:
      "SonarQube (formerly SonarLint) provides on-the-fly feedback to developers on new bugs and quality issues injection into their code.",
    tool: "windsurf",
    type: "plugin",
    category: "coding",
    tags: ["Quality", "Linting", "Bugs"],
    author: {
      name: "SonarSource",
      url: "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode",
    },
    installation: {
      type: "extension",
      instructions: "Install from Marketplace.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-error-lens",
    name: "Error Lens",
    description:
      "Improve highlighting of errors, warnings and other language diagnostics.",
    fullDescription:
      "ErrorLens turbo-charges language diagnostic features by making diagnostics stand out more prominently, highlighting the entire line wherever a diagnostic is generated by the language and also printing the message inline.",
    tool: "windsurf",
    type: "plugin",
    category: "productivity",
    tags: ["Diagnostics", "Errors", "Productivity"],
    author: {
      name: "Alexander",
      url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
    },
    installation: {
      type: "extension",
      instructions: "Install from Marketplace.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-python-extension",
    name: "Python (Microsoft)",
    description:
      "Rich support for the Python language: IntelliSense, linting, debugging.",
    fullDescription:
      "The official Python extension for VS Code/Windsurf. Essential for any Python development offering rich support for the language.",
    tool: "windsurf",
    type: "plugin",
    category: "coding",
    tags: ["Python", "IntelliSense", "Debugging"],
    author: {
      name: "Microsoft",
      url: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
    },
    installation: {
      type: "extension",
      instructions: "Install via Windsurf Extensions marketplace.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-workflow-deploy",
    name: "Auto-Deploy Service Workflow",
    description:
      "Automated workflow to build, test, and deploy a microservice.",
    fullDescription: `A Cascade Workflow (.windsurf/workflows/deploy.md).

Steps:
1. Run unit tests.
2. Build Docker container.
3. Push to registry.
4. Update Kubernetes manifest.
5. Verification step.

Usage: Run /deploy in Cascade chat.`,
    tool: "windsurf",
    type: "skill",
    category: "productivity",
    tags: ["Workflow", "Deployment", "DevOps"],
    author: {
      name: "Windsurf Community",
      url: "https://docs.codeium.com/windsurf/cascade",
    },
    installation: {
      type: "manual",
      instructions:
        "Create .windsurf/workflows/deploy.md with the workflow steps.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-workflow-pr",
    name: "PR Comment Responder",
    description:
      "Workflow to automatically address simple PR comments and style fixes.",
    fullDescription: `Automates the loop of checking out a PR branch, reading comments, making fixes, and pushing changes.

Usage: /fix-pr inside Cascade.`,
    tool: "windsurf",
    type: "skill",
    category: "productivity",
    tags: ["Workflow", "GitHub", "PR"],
    author: {
      name: "Windsurf Community",
      url: "https://docs.codeium.com/windsurf/cascade",
    },
    installation: {
      type: "manual",
      instructions: "Define in .windsurf/workflows/pr-fix.md",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-workflow-api-docs",
    name: "API Doc Generator",
    description:
      "Workflow that detects API changes and regenerates Swagger/OpenAPI documentation.",
    fullDescription: `Keeps your documentation in sync with your code.

Triggers: On file save (if configured) or manual invocation via /docs.
Action: Scans routes, updates openapi.yaml.`,
    tool: "windsurf",
    type: "skill",
    category: "productivity",
    tags: ["Workflow", "Documentation", "API"],
    author: {
      name: "Windsurf Community",
      url: "https://docs.codeium.com/windsurf/cascade",
    },
    installation: {
      type: "manual",
      instructions: "Create .windsurf/workflows/generate-docs.md",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-mcp-github",
    name: "GitHub MCP for Cascade",
    description:
      "Connect Cascade to your GitHub repositories for context-aware coding.",
    fullDescription:
      "Enables Windsurf to search, read, and understand your remote GitHub repositories via the Model Context Protocol.",
    tool: "windsurf",
    type: "skill",
    category: "productivity",
    tags: ["MCP", "GitHub", "Integration"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "manual",
      instructions: "Configure GitHub MCP server in Windsurf settings.",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "windsurf-mcp-postgres",
    name: "PostgreSQL MCP for Cascade",
    description:
      "Give Cascade read access to your database for intelligent query generation and debugging.",
    fullDescription:
      "Connects your local or remote PostgreSQL database to Windsurf. Cascade can inspect schemas and run safe queries to help you write better SQL.",
    tool: "windsurf",
    type: "skill",
    category: "data",
    tags: ["MCP", "PostgreSQL", "Database"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "manual",
      instructions: "Add PostgreSQL MCP configuration in Windsurf.",
    },
    createdAt: "2025-12-06",
  },
];
