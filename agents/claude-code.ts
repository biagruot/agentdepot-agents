import { Agent } from '../types/agent';

export const claudeCodeAgents: Agent[] = [
  {
    id: 'architect-agent',
    name: 'Software Architect Agent',
    description: 'Expert system design agent specializing in patterns, scalability, and technical decision making.',
    fullDescription: `You are a Software Architect Agent with deep expertise in system design, cloud patterns, and architectural best practices.

Your capabilities include:
- Designing scalable and maintainable system architectures
- Evaluating technology choices and trade-offs (CAP theorem, etc.)
- documenting architecture using C4 model or Mermaid diagrams
- Identifying potential bottlenecks and single points of failure
- Advising on microservices vs. monolith decisions

When presented with a problem, you should:
1. Clarify requirements (functional and non-functional)
2. Analyze constraints
3. Propose multiple architectural options with pros/cons
4. Recommend a specific path with justification`,
    tool: 'claude-code',
    type: 'agent',
    category: 'coding',
    tags: ['Architecture', 'System Design', 'Patterns'],
    author: {
      name: 'Seth Hobson',
      url: 'https://github.com/wshobson/agents',
      github: 'https://github.com/wshobson/agents',
    },
    installation: {
      type: 'manual',
      instructions: '1. Copy the agent prompt from the GitHub repo: https://github.com/wshobson/agents/blob/main/plugins/backend-development/agents/backend-architect.md\n2. In your terminal, create a file: ~/.claude/agents/architect.md\n3. Paste the prompt content\n4. Invoke in Claude Code with: @architect\n\nOr use directly in conversations by pasting the prompt.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'security-engineer-agent',
    name: 'Security Engineer Agent',
    description: 'Specialized agent for application security, vulnerability assessment, and hardening.',
    fullDescription: `You are a Security Engineer Agent dedicated to ensuring the safety and integrity of software systems.

Your expertise covers:
- OWASP Top 10 vulnerability identification and mitigation
- Secure coding practices for various languages
- Infrastructure security (IAM, network policies)
- Dependency auditing and supply chain security
- Threat modeling

Always prioritize security over convenience. When reviewing code, look for injection flaws, broken authentication, sensitive data exposure, and other common vulnerabilities.`,
    tool: 'claude-code',
    type: 'agent',
    category: 'coding',
    tags: ['Security', 'OWASP', 'Vulnerability'],
    author: {
      name: 'Seth Hobson',
      url: 'https://github.com/wshobson/agents',
      github: 'https://github.com/wshobson/agents',
    },
    installation: {
      type: 'manual',
      instructions: '1. Download from GitHub: https://github.com/wshobson/agents/blob/main/plugins/full-stack-orchestration/agents/security-auditor.md\n2. Save to ~/.claude/agents/security-engineer.md\n3. Invoke with @security-engineer in Claude Code\n\nAlternatively, copy and paste the prompt directly into your conversation.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'devops-engineer-agent',
    name: 'DevOps Engineer Agent',
    description: 'Expert in CI/CD pipelines, containerization (Docker/K8s), and infrastructure as code.',
    fullDescription: `You are a DevOps Engineer Agent focused on automation, reliability, and deployment efficiency.

Your core competencies:
- Docker and Kubernetes orchestration
- CI/CD pipeline design (GitHub Actions, GitLab CI)
- Infrastructure as Code (Terraform, Ansible)
- Monitoring and Observability (Prometheus, Grafana)
- Cloud Platforms (AWS, Azure, GCP)

Help users automate their workflows, ensure reproducible environments, and implement robust deployment strategies.`,
    tool: 'claude-code',
    type: 'agent',
    category: 'productivity',
    tags: ['DevOps', 'Docker', 'CI/CD', 'Terraform'],
    author: {
      name: 'Seth Hobson',
      url: 'https://github.com/wshobson/agents',
      github: 'https://github.com/wshobson/agents',
    },
    installation: {
      type: 'manual',
      instructions: '1. Get the agent: https://github.com/wshobson/agents/blob/main/plugins/cicd-automation/agents/deployment-engineer.md\n2. Create file: ~/.claude/agents/devops.md\n3. Paste the prompt content\n4. Use in Claude Code: @devops\n\nGreat for CI/CD, Docker, and infrastructure tasks.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'qa-engineer-agent',
    name: 'QA Engineer Agent',
    description: 'Specialist in testing strategies, automated test writing, and bug tracking.',
    fullDescription: `You are a QA Engineer Agent dedicated to software quality and test coverage.

You specialize in:
- Writing unit, integration, and E2E tests (Jest, Playwright, Cypress)
- Designing test plans and strategies
- Identifying edge cases and regression risks
- Automating testing workflows
- Analyzing bug reports for root causes

Your goal is to ensure software is robust, bug-free, and meets requirements before deployment.`,
    tool: 'claude-code',
    type: 'agent',
    category: 'testing',
    tags: ['QA', 'Testing', 'Jest', 'Playwright'],
    author: {
      name: 'Seth Hobson',
      url: 'https://github.com/wshobson/agents',
      github: 'https://github.com/wshobson/agents',
    },
    installation: {
      type: 'manual',
      instructions: '1. Download: https://github.com/wshobson/agents/blob/main/plugins/unit-testing/agents/test-automator.md\n2. Save as ~/.claude/agents/qa-engineer.md\n3. Invoke with @qa-engineer\n\nPerfect for generating test suites and finding edge cases.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'tech-writer-agent',
    name: 'Technical Writer Agent',
    description: 'Documentation expert for rewriting READMEs, API docs, and user guides.',
    fullDescription: `You are a Technical Writer Agent capable of transforming complex technical concepts into clear, accessible documentation.

You excel at:
- Writing clear and engaging README files
- API Documentation (OpenAPI/Swagger)
- User Guides and Tutorials
- Code comments and inline documentation
- Maintaining consistent tone and terminology

Focus on clarity, brevity, and usefulness for the end-user.`,
    tool: 'claude-code',
    type: 'agent',
    category: 'productivity',
    tags: ['Documentation', 'Writing', 'Docs'],
    author: {
      name: 'Seth Hobson',
      url: 'https://github.com/wshobson/agents',
      github: 'https://github.com/wshobson/agents',
    },
    installation: {
      type: 'manual',
      instructions: '1. Get prompt from: https://github.com/wshobson/agents/blob/main/plugins/code-documentation/agents/docs-architect.md\n2. Save to ~/.claude/agents/tech-writer.md\n3. Use with @tech-writer in Claude Code\n\nIdeal for README files, API docs, and user guides.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'repomix-plugin',
    name: 'Repomix',
    description: 'AI-friendly codebase packer that converts your project into a single understandable format for LLMs.',
    fullDescription: `Repomix (formerly Repopack) is a powerful tool that packs your entire repository into a single, AI-friendly file. This allows you to easily feed your codebase context to Claude or other LLMs.

Features:
- Respects .gitignore
- Optimizes token usage
- Security-aware file exclusion
- XML and text output formats
- Remote repository processing`,
    tool: 'claude-code',
    type: 'plugin',
    category: 'productivity',
    tags: ['Codebase', 'Context', 'LLM', 'Productivity'],
    author: {
      name: 'Kazuki Yamada',
      url: 'https://github.com/yamadashy/repomix',
      github: 'https://github.com/yamadashy/repomix',
    },
    installation: {
      type: 'npm',
      command: 'npx repomix',
      instructions: 'Run npx repomix in your project root to generate a packed file.',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'github-mcp-server',
    name: 'GitHub MCP Server',
    description: 'Official Model Context Protocol server for GitHub integration. Search, read, and manage repositories.',
    fullDescription: `Connect Claude Desktop to GitHub using the Model Context Protocol.

Capabilities:
- Search repositories and code
- Read file contents and commit history
- Manage issues and pull requests
- Explore repository structures
- Interact with GitHub Actions

This plugin enables Claude to act as an intelligent coding assistant with direct access to your remote repositories.`,
    tool: 'claude-code',
    type: 'plugin',
    category: 'productivity',
    tags: ['GitHub', 'MCP', 'Integration', 'Version Control'],
    author: {
      name: 'Model Context Protocol',
      url: 'https://github.com/modelcontextprotocol/servers',
      github: 'https://github.com/modelcontextprotocol/servers',
    },
    installation: {
      type: 'manual',
      instructions: '1. Create GitHub Personal Access Token: https://github.com/settings/tokens (needs repo scope)\n2. Edit ~/.config/claude/claude_desktop_config.json (Mac/Linux) or %APPDATA%\\Claude\\claude_desktop_config.json (Windows)\n3. Add:\n{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": {\n        "GITHUB_TOKEN": "your_token_here"\n      }\n    }\n  }\n}\n4. Restart Claude Desktop\n\nGitHub: https://github.com/modelcontextprotocol/servers',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'postgresql-mcp-server',
    name: 'PostgreSQL MCP Server',
    description: 'Safe, read-only database exploration and query execution for PostgreSQL databases.',
    fullDescription: `Model Context Protocol server for PostgreSQL interactions.

Allows Claude to:
- Inspect database schemas and table structures
- Run read-only SQL queries safely
- Analyze data distributions
- Help write and debug complex SQL

Perfect for data analysis workflows and debugging applications with database dependencies.`,
    tool: 'claude-code',
    type: 'plugin',
    category: 'data',
    tags: ['PostgreSQL', 'Database', 'SQL', 'MCP'],
    author: {
      name: 'Model Context Protocol',
      url: 'https://github.com/modelcontextprotocol/servers',
      github: 'https://github.com/modelcontextprotocol/servers',
    },
    installation: {
      type: 'manual',
      instructions: '1. Edit claude_desktop_config.json (see GitHub MCP for location)\n2. Add PostgreSQL configuration:\n{\n  "mcpServers": {\n    "postgres": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-postgres"],\n      "env": {\n        "DATABASE_URL": "postgresql://user:password@localhost:5432/dbname"\n      }\n    }\n  }\n}\n3. Replace DATABASE_URL with your actual connection string\n4. Restart Claude Desktop\n\nGitHub: https://github.com/modelcontextprotocol/servers',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'google-workspace-mcp',
    name: 'Google Workspace MCP',
    description: 'Integrates Google Drive, Docs, Sheets, and Calendar directly into Claude.',
    fullDescription: `Official Google Workspace integration for Claude via MCP.

Enables you to:
- Read and summarize Google Docs
- Analyze data in Google Sheets
- Check and manage Calendar events
- Search Google Drive files

Streamlines administrative and personal productivity tasks by connecting your primary workspace tools to AI.`,
    tool: 'claude-code',
    type: 'plugin',
    category: 'productivity',
    tags: ['Google', 'Workspace', 'Docs', 'Sheets', 'MCP'],
    author: {
      name: 'Model Context Protocol',
      url: 'https://github.com/modelcontextprotocol/servers',
      github: 'https://github.com/modelcontextprotocol/servers',
    },
    installation: {
      type: 'manual',
      instructions: '1. Set up Google Cloud OAuth credentials: https://console.cloud.google.com/apis/credentials\n2. Download credentials JSON file\n3. Edit claude_desktop_config.json:\n{\n  "mcpServers": {\n    "google-workspace": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-google-workspace"],\n      "env": {\n        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/credentials.json"\n      }\n    }\n  }\n}\n4. Restart Claude Desktop\n\nDocs: https://github.com/modelcontextprotocol/servers',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'puppeteer-mcp-server',
    name: 'Puppeteer Browser MCP',
    description: 'Headless browser automation for Claude, enabling web testing and scraping.',
    fullDescription: `Puppeteer integration for Claude using Model Context Protocol.

Gives Claude the ability to:
- Visit websites and extract content
- Take screenshots for UI verification
- Interact with web pages (click, type, submit)
- Automate browser-based testing workflows

Essential for testing agents and web automation tasks.`,
    tool: 'claude-code',
    type: 'plugin',
    category: 'testing',
    tags: ['Puppeteer', 'Browser', 'Automation', 'MCP'],
    author: {
      name: 'Model Context Protocol',
      url: 'https://github.com/modelcontextprotocol/servers',
      github: 'https://github.com/modelcontextprotocol/servers',
    },
    installation: {
      type: 'manual',
      instructions: '1. Edit claude_desktop_config.json\n2. Add Puppeteer server:\n{\n  "mcpServers": {\n    "puppeteer": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]\n    }\n  }\n}\n3. Restart Claude Desktop\n4. Claude can now control a headless browser for testing and automation\n\nGitHub: https://github.com/modelcontextprotocol/servers',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'excel-creation-skill',
    name: 'Excel Spreadsheet Creator',
    description: 'Skill to generate professional Excel files with formatting, formulas, and charts.',
    fullDescription: `This skill equips Claude with the ability to create complex Excel spreadsheets (.xlsx).

Capabilities:
- Generating multi-sheet workbooks
- Applying professional formatting (colors, fonts, borders)
- inserting formulas and functions
- Creating charts and data visualizations
- Handling large datasets efficiently

Ideal for data analysis reports, financial models, and structured data exports.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'productivity',
    tags: ['Excel', 'Data', 'Spreadsheet', 'Office'],
    author: {
      name: 'Anthropic',
      url: 'https://github.com/anthropics/skills',
      github: 'https://github.com/anthropics/skills',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone skills repository: git clone https://github.com/anthropics/skills\n2. Copy the xlsx skill:\n   cp -r skills/xlsx ~/.claude/skills/\n3. Install dependencies:\n   cd ~/.claude/skills/xlsx && npm install\n4. Restart Claude Desktop\n5. Invoke with: "Create an Excel spreadsheet with..."\n\nGitHub: https://github.com/anthropics/skills',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'word-creation-skill',
    name: 'Word Document Creator',
    description: 'Skill for creating formatted Word documents including headers, tables, and images.',
    fullDescription: `Enables Claude to author high-quality Microsoft Word documents (.docx).

Features:
- Text formatting (styles, headings, paragraphs)
- Table creation and formatting
- Image insertion and manipulation
- Header and Footer management
- Page layout control

Perfect for generating reports, proposals, whitepapers, and documentation.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'productivity',
    tags: ['Word', 'Document', 'Report', 'Office'],
    author: {
      name: 'Anthropic',
      url: 'https://github.com/anthropics/skills',
      github: 'https://github.com/anthropics/skills',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone: git clone https://github.com/anthropics/skills\n2. Copy Word skill:\n   cp -r skills/docx ~/.claude/skills/\n3. Install dependencies:\n   cd ~/.claude/skills/docx && npm install\n4. Restart Claude Desktop\n5. Use with: "Create a Word document with..."\n\nGitHub: https://github.com/anthropics/skills',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'pdf-processing-skill',
    name: 'PDF Processor',
    description: 'Advanced skill for regarding, analyzing, and extracting data from PDF files.',
    fullDescription: `A comprehensive skill for PDF interaction.

Allows Claude to:
- Read text content from PDF documents
- Extract tables and structured data
- Analyze layout and formatting
- Search for specific information within large PDFs

Essential for research, legal document review, and data extraction pipelines.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'productivity',
    tags: ['PDF', 'Extraction', 'Analysis', 'Document'],
    author: {
      name: 'Anthropic',
      url: 'https://github.com/anthropics/skills',
      github: 'https://github.com/anthropics/skills',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone: git clone https://github.com/anthropics/skills\n2. Copy PDF skill:\n   cp -r skills/pdf ~/.claude/skills/\n3. Install dependencies:\n   cd ~/.claude/skills/pdf && npm install\n4. Restart Claude Desktop\n5. Ask Claude to "Extract data from this PDF..." or "Analyze this PDF document"\n\nGitHub: https://github.com/anthropics/skills',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'mcp-generator-skill',
    name: 'MCP Server Generator',
    description: 'Specialized skill to help Claude write and scaffold new Model Context Protocol servers.',
    fullDescription: `Accelerates the development of new tools for Claude by automating MCP server creation.

Capabilities:
- Scaffolding MCP project structure (TypeScript/Python)
- Defining tools and resources schemas
- Generating boilerplate code for server implementation
- Implementing error handling and type safety
- Writing README and usage instructions

Use this skill to quickly extend Claude's capabilities with your own custom tools.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'coding',
    tags: ['MCP', 'Generator', 'TypeScript', 'Tooling'],
    author: {
      name: 'Anthropic',
      url: 'https://github.com/anthropics/skills',
      github: 'https://github.com/anthropics/skills',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone: git clone https://github.com/anthropics/skills\n2. Copy MCP generator skill:\n   cp -r skills/mcp-builder ~/.claude/skills/\n3. Install dependencies:\n   cd ~/.claude/skills/mcp-builder && npm install\n4. Restart Claude Desktop\n5. Ask: "Create a new MCP server for [your use case]"\n\nGitHub: https://github.com/anthropics/skills',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'web-testing-skill',
    name: 'Web Application Tester',
    description: 'Skill for planning and executing comprehensive web application tests.',
    fullDescription: `A quality assurance skill designed for modern web apps.

Helps Claude to:
- Create test plans based on user stories
- Write automated test scripts (Playwright/Selenium)
- Analyze HTML structure for selectors
- Identify potential accessibility issues
- Suggest edge cases for testing

Combine with the Puppeteer MCP plugin for a complete testing workflow.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'testing',
    tags: ['Testing', 'Web', 'QA', 'Automation'],
    author: {
      name: 'Anthropic',
      url: 'https://github.com/anthropics/skills',
      github: 'https://github.com/anthropics/skills',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone: git clone https://github.com/anthropics/skills\n2. Copy testing skill:\n   cp -r skills/webapp-testing ~/.claude/skills/\n3. Install dependencies:\n   cd ~/.claude/skills/webapp-testing && npm install\n4. Restart Claude Desktop\n5. Use with: "Create Playwright tests for..." or "Generate a test plan for..."\n\nGitHub: https://github.com/anthropics/skills',
    },
    createdAt: '2025-12-06',
  },
  {
    id: 'project-scaffolding-skill',
    name: 'Project Scaffolding Skill',
    description: 'IDE-grade project scaffolding wizard for 70+ project types including React, Next.js, FastAPI, and more.',
    fullDescription: `An IDE-grade project scaffolding wizard comparable to WebStorm and PyCharm, integrated as a skill for Claude Code.

Features:
- 70+ Project Templates spanning web, mobile, desktop, and backend development
- Interactive wizard workflow with step-by-step configuration
- Framework-specific options (TypeScript, CSS frameworks, state management, routing)
- SDK/environment configuration with version selection
- Database & ORM setup (PostgreSQL, MySQL, SQLite, MongoDB)
- Code quality tools (ESLint, Prettier, Ruff, mypy, golangci-lint)
- Testing configuration (Vitest, Jest, pytest, Playwright)
- DevOps ready with Docker, docker-compose, and GitHub Actions CI/CD

Supported project types include: static websites, React, Next.js, Vue, Svelte, Angular, Astro, React Native, Expo, Flutter, Tauri, Electron, FastAPI, Django, Express, NestJS, Go/Gin, Rust/Axum, Spring Boot, and many more.`,
    tool: 'claude-code',
    type: 'skill',
    category: 'coding',
    tags: ['Scaffolding', 'Templates', 'Project Setup', 'IDE'],
    author: {
      name: 'Hatem Mohamed',
      url: 'https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill',
      github: 'https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill',
    },
    installation: {
      type: 'manual',
      instructions: '1. Clone: git clone https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill\n2. Install the skill:\n   mkdir -p ~/.claude/skills/project-scaffolding\n   cp -r SKILL.md scripts/ references/ assets/ ~/.claude/skills/project-scaffolding/\n3. Verify installation:\n   ls ~/.claude/skills/project-scaffolding/\n4. Use with natural language: "Create a Next.js project with TypeScript and Tailwind" or "Set up a FastAPI backend with PostgreSQL"\n\nGitHub: https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill',
    },
    createdAt: '2025-11-11',
  },
];
