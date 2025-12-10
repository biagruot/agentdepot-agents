export type AgentTool = 'cursor' | 'windsurf' | 'claude-code' | 'replit' | 'mcp';

export type AgentType = 'rule' | 'agent' | 'plugin' | 'skill' | 'template';

export interface AgentAuthor {
  name: string;
  url?: string;
  github?: string;
}

export interface AgentInstallation {
  type?: 'manual' | 'npm' | 'brew' | 'curl' | 'extension' | 'other';
  manual?: string;
  command?: string;
  url?: string;
  instructions?: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  tool: AgentTool;
  type: AgentType;
  category: 'coding' | 'debugging' | 'testing' | 'productivity' | 'data' | 'web' | 'other';
  tags: string[];
  author: AgentAuthor;
  installation: AgentInstallation;
  featured?: boolean;
  trending?: boolean;
  stats?: {
    downloads?: number;
    stars?: number;
  };
  links?: {
    github?: string;
    website?: string;
    demo?: string; // Video URL
  };
  license?: string; // e.g., "MIT", "Apache-2.0", "GPL-3.0", "Proprietary", etc.
  createdAt: string;
  updatedAt?: string;
}
