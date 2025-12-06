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
      instructions: 'Install via Claude Code CLI or copy agent prompt to your interactions.',
    },
    verified: true,
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
      instructions: 'Install via Claude Code CLI: /agent add security-engineer',
    },
    verified: true,
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
      instructions: 'Install via Claude Code CLI or integrate into your project workflows.',
    },
    verified: true,
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
      instructions: 'Install via Claude Code CLI to assist with test generation.',
    },
    verified: true,
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
      instructions: 'Install via Claude Code CLI to improve project documentation.',
    },
    verified: true,
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
    verified: true,
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
      instructions: 'Add to claude_desktop_config.json with "npx -y @modelcontextprotocol/server-github"',
    },
    verified: true,
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
      instructions: 'Add to claude_desktop_config.json with the connection string.',
    },
    verified: true,
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
      instructions: 'Add to claude_desktop_config.json using "npx -y @modelcontextprotocol/server-google-workspace".',
    },
    verified: true,
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
      instructions: 'Add to claude_desktop_config.json using "npx -y @modelcontextprotocol/server-puppeteer".',
    },
    verified: true,
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
      instructions: 'Copy "skills/xlsx" folder from the repository to your Claude Skills directory.',
    },
    verified: true,
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
      instructions: 'Copy "skills/docx" folder from the repository to your Claude Skills directory.',
    },
    verified: true,
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
      instructions: 'Copy "skills/pdf" folder from the repository to your Claude Skills directory.',
    },
    verified: true,
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
      instructions: 'Load the "skills/mcp-generator" skill into your Claude environment.',
    },
    verified: true,
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
      instructions: 'Copy "skills/testing" folder from the repository to your Claude Skills directory.',
    },
    verified: true,
    createdAt: '2025-12-06',
  },
];
