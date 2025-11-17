import { Knowledge } from '@/types/knowledge';

export const KNOWLEDGE_DATA: Knowledge[] = [
  // --- LEVEL 1: PILLAR NODES (THE NEW ROOTS) ---
  {
    id: 'frontend',
    title: 'Frontend',
    category: 'root',
    content:
      'My 6+ years of experience building scalable, performant, and maintainable user interfaces for complex web applications.',
    markdownFile: 'frontend.mdx',
    level: 'advanced',
  },
  {
    id: 'backend',
    title: 'Backend',
    category: 'root',
    content:
      'My work in backend, focusing on reliability, multi-tenant architecture, and microservice communication.',
    markdownFile: 'backend.mdx',
    level: 'intermediate',
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    category: 'root',
    content:
      "Beyond tools: these are the high-level strategies and architectural patterns I've implemented, from multi-tenancy to system reliability.",
    markdownFile: 'concepts.mdx',
    level: 'advanced',
  },
  {
    id: 'database',
    title: 'Databases',
    category: 'root',
    content:
      'My experience with relational (PostgreSQL) and NoSQL (Redis) databases for primary storage, caching, and job queues.',
    markdownFile: 'database.mdx',
    level: 'intermediate',
  },
  {
    id: 'devops',
    title: 'DevOps',
    category: 'root',
    content:
      'My experience with the operational side, from setting up initial build pipelines (Grunt) to participating in on-call rotations.',
    markdownFile: 'devops.mdx',
    level: 'intermediate',
  },
  {
    id: 'tooling',
    title: 'Tooling',
    category: 'root',
    content:
      'The essential tools I use for observability, monitoring, and internationalization that support the development lifecycle.',
    markdownFile: 'tooling.mdx',
    // No 'related' field, this is a root node.
    level: 'intermediate',
  },

  // --- LEVEL 2: FRONTEND SKILLS ---
  {
    id: 'angular',
    title: 'Angular (2+)',
    category: 'frontend',
    content:
      'My framework of choice for large-scale applications. I led the greenfield architecture of a new rewards platform, setting up test patterns and core logic.',
    markdownFile: 'angular.mdx',
    related: 'frontend',
    level: 'advanced',
    tags: ['frontend', 'framework'],
  },
  {
    id: 'react',
    title: 'React & React Native',
    category: 'frontend',
    content:
      'My experience at VersaFleet building the web dashboard (React) and the driver mobile app (React Native).',
    markdownFile: 'react.mdx',
    related: 'frontend',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'mobile'],
  },
  {
    id: 'geospatial',
    title: 'Geospatial (Maps)',
    category: 'frontend',
    content:
      'Integrating with Google Maps and Mapbox to visualize delivery clusters, plot route nodes, and track real-time locations.',
    markdownFile: 'geospatial.mdx',
    related: 'frontend',
    level: 'intermediate',
    tags: ['frontend', 'google-maps', 'mapbox', 'api'],
  },

  // --- LEVEL 2: BACKEND SKILLS ---
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    category: 'backend',
    content:
      'My primary framework for backend development. Used to build orchestration APIs, manage background jobs, and implement multi-tenant logic.',
    markdownFile: 'ruby-on-rails.mdx',
    related: 'backend',
    level: 'intermediate',
    tags: ['backend', 'framework'],
  },
  {
    id: 'microservice-orchestration',
    title: 'Microservice Orchestration',
    category: 'backend',
    content:
      'Working on the orchestration layer to coordinate multiple downstream services (points, payments, etc.) for complex user journeys like checkout.',
    markdownFile: 'microservice-orchestration.mdx',
    related: 'backend',
    level: 'intermediate',
    tags: ['backend', 'architecture', 'api'],
  },
  {
    id: 'api-design',
    title: 'API Design',
    category: 'backend',
    content:
      'Designing and documenting partner-facing APIs (OpenAPI) and internal APIs. Also includes backend-driven validation using JSON Schema.',
    markdownFile: 'api-design.mdx',
    related: 'backend',
    level: 'intermediate',
    tags: ['backend', 'json-schema', 'openapi', 'api'],
  },
  {
    id: 'c-plus-plus',
    title: 'C++ / C#',
    category: 'backend',
    content:
      'My first internship experience at Autodesk, interfacing with the C++ ObjectARX API and building a prototype with the Windows Touch API.',
    markdownFile: 'c-plus-plus.mdx',
    related: 'backend',
    level: 'beginner',
    tags: ['c++', 'c#', 'internship', 'autodesk'],
  },

  // --- LEVEL 2: CONCEPT SKILLS ---
  {
    id: 'whitelabeling',
    title: 'Whitelabelling / Multi-Tenancy',
    category: 'concept',
    content:
      'The core challenge of my senior work: architecting a single application to serve ~10 different clients with unique themes, features, and builds.',
    markdownFile: 'whitelabeling.mdx',
    related: 'concepts',
    level: 'advanced',
    tags: ['frontend', 'architecture', 'saas', 'multi-tenancy'],
  },
  {
    id: 'frontend-performance',
    title: 'Frontend Performance',
    category: 'concept',
    content:
      'My optimization strategies, including lazy-loading common components per-page and, more critically, lazy-loading whitelabel-specific components.',
    markdownFile: 'frontend-performance.mdx',
    related: 'concepts',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'lazy-loading', 'code-splitting'],
  },
  {
    id: 'reliability-engineering',
    title: 'Reliability & Idempotency',
    category: 'concept',
    content:
      'Re-architecting a large-scale, fragile batch job (200k+ redemptions) to be fully idempotent and fault-tolerant, eliminating manual data patching.',
    markdownFile: 'reliability-engineering.mdx',
    related: 'concepts',
    level: 'advanced',
    tags: ['backend', 'idempotency', 'fault-tolerance', 'sidekiq'],
  },
  {
    id: 'internationalization-i18n',
    title: 'Internationalization (i18n)',
    category: 'concept',
    content:
      'Building a robust translation pipeline with PhraseApp, including the complex implementation of Right-to-Left (RTL) layout support.',
    markdownFile: 'internationalization-i18n.mdx',
    related: 'concepts',
    level: 'advanced',
    tags: ['frontend', 'i18n', 'rtl', 'accessibility'],
  },
  {
    id: 'state-management',
    title: 'State Management (Redux)',
    category: 'concept',
    content:
      'My experience with predictable state containers, including a critical migration from Reflux to Redux, refactoring stores to reducers.',
    markdownFile: 'state-management.mdx',
    related: 'concepts',
    level: 'intermediate',
    tags: ['frontend', 'redux', 'reflux'],
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization',
    category: 'concept',
    content:
      'My work maintaining and improving a large AngularJS monolith by refactoring monolithic controllers into a modern, component-based architecture.',
    markdownFile: 'legacy-modernization.mdx',
    related: 'concepts',
    level: 'intermediate',
    tags: ['frontend', 'angularjs', 'refactoring', 'tech-debt'],
  },

  // --- LEVEL 2: DATABASE SKILLS ---
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: 'database',
    content:
      'Used as the primary relational database for storing application data in my backend work.',
    markdownFile: 'postgresql.mdx',
    related: 'database',
    level: 'intermediate',
    tags: ['database', 'sql'],
  },
  {
    id: 'redis',
    title: 'Redis',
    category: 'database',
    content:
      'Used as an in-memory data store for caching and as a queue for background jobs (Sidekiq).',
    markdownFile: 'redis.mdx',
    related: 'database',
    level: 'intermediate',
    tags: ['database', 'nosql', 'caching', 'queues'],
  },

  // --- LEVEL 2: DEVOPS SKILLS ---
  {
    id: 'on-call-support',
    title: 'On-Call & Production Support',
    category: 'devops',
    content:
      'Participating in a weekly on-call rotation, debugging production incidents, and tracing errors across microservices.',
    markdownFile: 'on-call-support.mdx',
    related: 'devops',
    level: 'intermediate',
    tags: ['devops', 'on-call', 'monitoring'],
  },
  {
    id: 'build-tools',
    title: 'Build Tools (Grunt)',
    category: 'devops',
    content:
      'My early experience setting up an automated build and deployment pipeline using Grunt to remove manual steps.',
    markdownFile: 'build-tools.mdx',
    related: 'devops',
    level: 'beginner',
    tags: ['devops', 'ci-cd', 'grunt'],
  },

  // --- LEVEL 2: TOOLING SKILLS ---
  {
    id: 'observability',
    title: 'Observability Tools',
    category: 'tooling',
    content:
      'Using tools like Grafana, Appsignal, and Rollbar to monitor application health, trace errors, and debug incidents.',
    markdownFile: 'observability.mdx',
    related: 'tooling',
    level: 'intermediate',
    tags: ['tooling', 'grafana', 'appsignal', 'rollbar', 'monitoring'],
  },
  {
    id: 'async-processing-tools',
    title: 'Async Tools (Sidekiq, Kafka)',
    category: 'tooling',
    content:
      'Using Sidekiq for background jobs in Ruby and Kafka as a message queue for reliable, asynchronous communication.',
    markdownFile: 'async-processing-tools.mdx',
    related: 'tooling',
    level: 'intermediate',
    tags: ['tooling', 'sidekiq', 'kafka', 'backend'],
  },
  {
    id: 'phraseapp',
    title: 'PhraseApp',
    category: 'tooling',
    content:
      'The translation management tool I used for i18n. I built a custom script to automate syncing translations with it.',
    markdownFile: 'phraseapp.mdx',
    related: 'tooling',
    level: 'intermediate',
    tags: ['tooling', 'i18n', 'frontend'],
  },
];

/**
 * Get a knowledge item by its ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The knowledge item if found, undefined otherwise
 */
export function getKnowledgeById(id: string): Knowledge | undefined {
  return KNOWLEDGE_DATA.find((knowledge) => knowledge.id === id);
}

/**
 * Get the related knowledge item for a given knowledge ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The related knowledge item if found, undefined otherwise
 */
export function getRelatedKnowledge(id: string): Knowledge | undefined {
  const knowledge = getKnowledgeById(id);
  if (!knowledge || !knowledge.related) return undefined;

  return getKnowledgeById(knowledge.related);
}

/**
 * Get all related knowledge items for a given knowledge ID (legacy function)
 * @deprecated Use getRelatedKnowledge instead. Returns array with single item or empty array.
 */
export function getRelatedKnowledges(id: string): Knowledge[] {
  const related = getRelatedKnowledge(id);
  return related ? [related] : [];
}

/**
 * Get all knowledge items filtered by category
 *
 * @param category - The category to filter by
 * @returns Array of knowledge items in the specified category
 */
export function getKnowledgesByCategory(
  category: Knowledge['category']
): Knowledge[] {
  return KNOWLEDGE_DATA.filter((knowledge) => knowledge.category === category);
}

/**
 * Get all knowledge items filtered by tag
 *
 * @param tag - The tag to filter by
 * @returns Array of knowledge items with the specified tag
 */
export function getKnowledgesByTag(tag: string): Knowledge[] {
  return KNOWLEDGE_DATA.filter(
    (knowledge) => knowledge.tags && knowledge.tags.includes(tag)
  );
}

/**
 * Get all unique categories from all knowledge items
 *
 * @returns Array of unique category values
 */
export function getAllCategories(): Knowledge['category'][] {
  return Array.from(
    new Set(KNOWLEDGE_DATA.map((knowledge) => knowledge.category))
  ) as Knowledge['category'][];
}

// Export alias for backward compatibility
export const knowledges = KNOWLEDGE_DATA;

// Legacy exports for backward compatibility during migration
export const knowledgeNodes = KNOWLEDGE_DATA;
export const getNodeById = getKnowledgeById;
export const getRelatedNodes = getRelatedKnowledges;
export const getNodesByCategory = getKnowledgesByCategory;
export const getNodesByTag = getKnowledgesByTag;
