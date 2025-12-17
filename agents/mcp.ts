import { Agent } from "../types/agent";

export const mcpAgents: Agent[] = [
  {
    id: "mcp-server-github",
    name: "GitHub MCP Server",
    description:
      "The official GitHub integration for Model Context Protocol. Manage repos, issues, and PRs.",
    fullDescription:
      "Enables AI agents to interact directly with your GitHub repositories. \n\nCapabilities:\n- Read and write files\n- Search code and repositories\n- Manage issues and pull requests\n- Inspect Git history",
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["MCP", "GitHub", "Version Control", "Official"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-github",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-postgres",
    name: "PostgreSQL MCP Server",
    description:
      "Safe, readonly database access for AI agents to inspect schemas and query data.",
    fullDescription:
      "Connect your AI to your PostgreSQL database. Allows models to view table schemas and execute read-only queries to understand your data model and answer questions about your data.",
    tool: "mcp",
    type: "plugin",
    category: "data",
    tags: ["MCP", "PostgreSQL", "Database", "SQL"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions:
        "npx -y @modelcontextprotocol/server-postgres <database-url>",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-filesystem",
    name: "Filesystem MCP Server",
    description: "Grant AI agents controlled access to your local file system.",
    fullDescription:
      "The foundational MCP server for file operations. Allows agents to read, write, list, and analyze files in specified directories. Essential for coding and system tasks.",
    tool: "mcp",
    type: "plugin",
    category: "coding",
    tags: ["MCP", "Filesystem", "Local", "Core"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions:
        "npx -y @modelcontextprotocol/server-filesystem <allowed-paths>",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-google-drive",
    name: "Google Drive MCP Server",
    description:
      "Access and manage Google Drive files directly from your AI assistant.",
    fullDescription:
      "Seamless integration with Google Workspace. Search for documents, read file contents, and organize folders within your Google Drive using natural language.",
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["MCP", "Google Drive", "Documents", "Cloud"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-gdrive",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-slack",
    name: "Slack MCP Server",
    description:
      "Interact with Slack workspaces: read messages, post updates, and manage channels.",
    fullDescription:
      "Turn your AI into a Slack power user. summarize channels, find specific conversations, and post messages to collaborate with your team.",
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["MCP", "Slack", "Communication", "Chat"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-slack",
    },
    createdAt: "2025-12-06",
  },

  // ------------------------------------------------------------------
  // POPULAR COMMUNITY SERVERS
  // ------------------------------------------------------------------
  {
    id: "mcp-server-puppeteer",
    name: "Puppeteer Browser Automation",
    description:
      "Enable AI agents to control a web browser for scraping, testing, and automation.",
    fullDescription:
      "Gives your agent a browser. It can navigate to URLs, click elements, fill forms, and take screenshots. Useful for web scraping, end-to-end testing, and automating web-based tasks.",
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["MCP", "Puppeteer", "Browser", "Automation"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-puppeteer",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-brave-search",
    name: "Brave Search MCP",
    description:
      "Privacy-focused web search for AI agents using the Brave Search API.",
    fullDescription:
      "Allow your agent to search the web without tracking. Provides search results, news, and checking for real-time information to ground AI responses.",
    tool: "mcp",
    type: "plugin",
    category: "data",
    tags: ["MCP", "Search", "Web", "Brave"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-brave-search",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-sqlite",
    name: "SQLite Explorer",
    description: "Lightweight database interaction for local SQLite files.",
    fullDescription:
      "Perfect for local development and embedded databases. Inspect schemas and run queries on .sqlite files directly on your machine.",
    tool: "mcp",
    type: "plugin",
    category: "data",
    tags: ["MCP", "SQLite", "Database", "Local"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-sqlite <file-path>",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-memory",
    name: "Memory Graph",
    description:
      "Adds a persistent memory layer to your AI interactions using a knowledge graph.",
    fullDescription:
      'Enables specialized memory management. The server maintains a graph of entities and relations, allowing the AI to "remember" facts and context across different sessions and tasks.',
    tool: "mcp",
    type: "plugin",
    category: "data",
    tags: ["MCP", "Memory", "Graph", "Context"],
    author: {
      name: "Model Context Protocol",
      url: "https://github.com/modelcontextprotocol/servers",
    },
    installation: {
      type: "npm",
      instructions: "npx -y @modelcontextprotocol/server-memory",
    },
    createdAt: "2025-12-06",
  },
  {
    id: "mcp-server-gitlab",
    name: "GitLab MCP Server",
    description:
      "GitLab integration for managing projects, merge requests, and pipelines.",
    fullDescription:
      "Brings MCP capabilities to the GitLab ecosystem. Agents can inspect code, manage MRs, and monitor CI/CD pipelines within GitLab.",
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["MCP", "GitLab", "DevOps", "Community"],
    author: {
      name: "Community (mcp-gitlab)",
      url: "https://github.com/topics/mcp-server",
    },
    installation: {
      type: "npm",
      instructions: "npx -y mcp-server-gitlab",
    },
    createdAt: "2025-12-06",
  },
];
