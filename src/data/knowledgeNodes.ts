import { KnowledgeNode } from '@/types/knowledge';

/**
 * Knowledge Nodes Data
 *
 * Centralized data structure for all knowledge web nodes.
 * Each node references an external MDX file for detailed content.
 *
 * To add a new node:
 * 1. Create the MDX file in src/content/knowledge/{node-id}.mdx
 * 2. Add the node definition below with markdownFile pointing to the MDX file
 * 3. Update related arrays to establish connections
 */

export const knowledgeNodes: KnowledgeNode[] = [
  // Backend Technologies
  {
    id: 'kafka',
    title: 'Kafka',
    category: 'backend',
    content:
      'A distributed streaming platform. Solves backpressure and durability. Used for our OrderStream example.',
    markdownFile: 'kafka.mdx',
    related: ['aws-msk', 'idempotency', 'rails', 'backend'],
    level: 'intermediate',
    tags: ['messaging', 'streaming', 'distributed-systems'],
  },
  {
    id: 'rails',
    title: 'Ruby on Rails',
    category: 'backend',
    content:
      'A web application framework written in Ruby. Follows convention over configuration and the MVC pattern.',
    markdownFile: 'rails.mdx',
    related: ['kafka', 'idempotency', 'backend', 'postgresql'],
    level: 'advanced',
    tags: ['framework', 'mvc', 'api'],
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    category: 'backend',
    content:
      'JavaScript runtime built on Chrome V8 engine. Enables server-side JavaScript development with event-driven architecture.',
    markdownFile: 'nodejs.mdx',
    related: ['javascript', 'express', 'backend'],
    level: 'intermediate',
    tags: ['runtime', 'javascript', 'async'],
  },
  {
    id: 'express',
    title: 'Express.js',
    category: 'backend',
    content:
      'Minimalist web framework for Node.js. Provides robust routing and middleware support for building APIs.',
    markdownFile: 'express.mdx',
    related: ['nodejs', 'backend', 'api'],
    level: 'intermediate',
    tags: ['framework', 'api', 'middleware'],
  },

  // Frontend Technologies
  {
    id: 'react',
    title: 'React',
    category: 'frontend',
    content:
      'A JavaScript library for building user interfaces. Uses component-based architecture and virtual DOM for efficient rendering.',
    markdownFile: 'react.mdx',
    related: ['javascript', 'typescript', 'frontend', 'redux'],
    level: 'advanced',
    tags: ['ui', 'components', 'hooks'],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    category: 'frontend',
    content:
      'Typed superset of JavaScript that compiles to plain JavaScript. Adds static type checking and improved developer experience.',
    markdownFile: 'typescript.mdx',
    related: ['javascript', 'react', 'frontend'],
    level: 'advanced',
    tags: ['types', 'language', 'tooling'],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    category: 'frontend',
    content:
      'High-level programming language that powers interactive web applications. Supports both functional and object-oriented paradigms.',
    markdownFile: 'javascript.mdx',
    related: ['react', 'typescript', 'nodejs', 'frontend'],
    level: 'advanced',
    tags: ['language', 'es6', 'async'],
  },
  {
    id: 'tailwindcss',
    title: 'Tailwind CSS',
    category: 'frontend',
    content:
      'Utility-first CSS framework for rapid UI development. Provides low-level utility classes for building custom designs.',
    markdownFile: 'tailwindcss.mdx',
    related: ['frontend', 'react'],
    level: 'intermediate',
    tags: ['css', 'styling', 'utilities'],
  },

  // DevOps & Infrastructure
  {
    id: 'aws-msk',
    title: 'AWS MSK',
    category: 'devops',
    content:
      'Managed Kafka service on AWS. Provides high availability and automatic scaling for Kafka clusters.',
    markdownFile: 'aws-msk.mdx',
    related: ['kafka', 'aws', 'docker'],
    level: 'intermediate',
    tags: ['aws', 'managed-service', 'streaming'],
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    category: 'devops',
    content:
      'Comprehensive cloud computing platform offering infrastructure, storage, and managed services for scalable applications.',
    markdownFile: 'aws.mdx',
    related: ['aws-msk', 'docker', 'kubernetes'],
    level: 'intermediate',
    tags: ['cloud', 'infrastructure', 'iaas'],
  },
  {
    id: 'docker',
    title: 'Docker',
    category: 'devops',
    content:
      'Containerization platform that packages applications and dependencies into portable containers for consistent deployment.',
    markdownFile: 'docker.mdx',
    related: ['kubernetes', 'aws', 'ci-cd'],
    level: 'intermediate',
    tags: ['containers', 'deployment', 'virtualization'],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    category: 'devops',
    content:
      'Container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    markdownFile: 'kubernetes.mdx',
    related: ['docker', 'aws', 'ci-cd'],
    level: 'beginner',
    tags: ['orchestration', 'containers', 'scaling'],
  },
  {
    id: 'ci-cd',
    title: 'CI/CD',
    category: 'devops',
    content:
      'Continuous Integration and Continuous Deployment practices for automating software delivery pipelines.',
    markdownFile: 'ci-cd.mdx',
    related: ['docker', 'github-actions', 'devops'],
    level: 'intermediate',
    tags: ['automation', 'pipeline', 'deployment'],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    category: 'devops',
    content:
      'GitHub integrated CI/CD platform for automating workflows, testing, and deployment directly from repositories.',
    markdownFile: 'github-actions.mdx',
    related: ['ci-cd', 'devops', 'git'],
    level: 'intermediate',
    tags: ['automation', 'workflow', 'testing'],
  },

  // Databases
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: 'database',
    content:
      'Advanced open-source relational database with ACID compliance, JSON support, and extensible architecture.',
    markdownFile: 'postgresql.mdx',
    related: ['database', 'rails', 'backend'],
    level: 'intermediate',
    tags: ['rdbms', 'sql', 'acid'],
  },
  {
    id: 'redis',
    title: 'Redis',
    category: 'database',
    content:
      'In-memory data structure store used as database, cache, and message broker. Supports multiple data structures.',
    markdownFile: 'redis.mdx',
    related: ['database', 'backend', 'kafka'],
    level: 'intermediate',
    tags: ['cache', 'key-value', 'in-memory'],
  },
  {
    id: 'database',
    title: 'Database Systems',
    category: 'concept',
    content:
      'Systems for storing, organizing, and retrieving data. Includes relational, NoSQL, and in-memory databases.',
    markdownFile: 'database.mdx',
    related: ['postgresql', 'redis', 'backend'],
    level: 'intermediate',
    tags: ['data-storage', 'persistence'],
  },

  // Tooling
  {
    id: 'git',
    title: 'Git',
    category: 'tooling',
    content:
      'Distributed version control system for tracking changes in source code. Essential for collaborative development.',
    markdownFile: 'git.mdx',
    related: ['github-actions', 'vite'],
    level: 'advanced',
    tags: ['vcs', 'version-control', 'collaboration'],
  },
  {
    id: 'vite',
    title: 'Vite',
    category: 'tooling',
    content:
      'Next-generation frontend build tool providing fast development server and optimized production builds.',
    markdownFile: 'vite.mdx',
    related: ['react', 'frontend', 'tooling'],
    level: 'intermediate',
    tags: ['build-tool', 'bundler', 'dev-server'],
  },

  // Concepts
  {
    id: 'idempotency',
    title: 'Idempotency',
    category: 'concept',
    content:
      'A property of operations that can be applied multiple times without changing the result beyond the initial application.',
    markdownFile: 'idempotency.mdx',
    related: ['kafka', 'rails', 'backend', 'api'],
    level: 'intermediate',
    tags: ['design-pattern', 'api-design'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    category: 'concept',
    content:
      'Server-side development focusing on APIs, databases, and business logic implementation.',
    markdownFile: 'backend.mdx',
    related: ['rails', 'kafka', 'database', 'api'],
    level: 'intermediate',
    tags: ['architecture', 'server-side'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    category: 'concept',
    content:
      'Client-side development focusing on user interfaces, user experience, and browser interactions.',
    markdownFile: 'frontend.mdx',
    related: ['react', 'javascript', 'tailwindcss'],
    level: 'intermediate',
    tags: ['ui', 'ux', 'client-side'],
  },
  {
    id: 'api',
    title: 'RESTful APIs',
    category: 'concept',
    content:
      'Architectural style for designing networked applications using HTTP methods and stateless communication.',
    markdownFile: 'api.mdx',
    related: ['backend', 'express', 'rails'],
    level: 'intermediate',
    tags: ['architecture', 'http', 'integration'],
  },
  {
    id: 'redux',
    title: 'Redux',
    category: 'concept',
    content:
      'Predictable state container for JavaScript applications. Manages application state with unidirectional data flow.',
    markdownFile: 'redux.mdx',
    related: ['react', 'frontend', 'javascript'],
    level: 'intermediate',
    tags: ['state-management', 'flux', 'predictable'],
  },
];

/**
 * Get a knowledge node by its ID
 *
 * @param id - The unique identifier of the node
 * @returns The knowledge node if found, undefined otherwise
 */
export function getNodeById(id: string): KnowledgeNode | undefined {
  return knowledgeNodes.find((node) => node.id === id);
}

/**
 * Get all related nodes for a given node ID
 *
 * @param id - The unique identifier of the node
 * @returns Array of related knowledge nodes
 */
export function getRelatedNodes(id: string): KnowledgeNode[] {
  const node = getNodeById(id);
  if (!node) return [];

  return node.related
    .map((relatedId) => getNodeById(relatedId))
    .filter((node): node is KnowledgeNode => node !== undefined);
}

/**
 * Get all nodes filtered by category
 *
 * @param category - The category to filter by
 * @returns Array of knowledge nodes in the specified category
 */
export function getNodesByCategory(
  category: KnowledgeNode['category']
): KnowledgeNode[] {
  return knowledgeNodes.filter((node) => node.category === category);
}

/**
 * Get all nodes filtered by tag
 *
 * @param tag - The tag to filter by
 * @returns Array of knowledge nodes with the specified tag
 */
export function getNodesByTag(tag: string): KnowledgeNode[] {
  return knowledgeNodes.filter((node) => node.tags && node.tags.includes(tag));
}

/**
 * Get all unique categories from all nodes
 *
 * @returns Array of unique category values
 */
export function getAllCategories(): KnowledgeNode['category'][] {
  return Array.from(
    new Set(knowledgeNodes.map((node) => node.category))
  ) as KnowledgeNode['category'][];
}
