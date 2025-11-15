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
  // Root Nodes (Start visible)
  {
    id: 'frontend',
    title: 'Frontend',
    category: 'root',
    content:
      'Client-side development focusing on user interfaces, user experience, and browser interactions.',
    markdownFile: 'frontend.mdx',
    related: ['frameworks', 'css-modules', 'i18n', 'multitenancy-frontend'],
  },
  {
    id: 'backend',
    title: 'Backend',
    category: 'root',
    content:
      'Server-side development focusing on APIs, databases, and business logic implementation.',
    markdownFile: 'backend.mdx',
    related: ['rails', 'multitenancy-backend'],
  },

  // Frontend Technologies (Hidden until Frontend is expanded)
  {
    id: 'frameworks',
    title: 'Frameworks',
    category: 'frontend',
    content:
      'JavaScript frameworks and libraries for building modern web applications.',
    markdownFile: 'frameworks.mdx',
    related: ['frontend', 'react', 'angular', 'angularjs', 'react-native'],
  },
  {
    id: 'react',
    title: 'React',
    category: 'frontend',
    content:
      'A JavaScript library for building user interfaces. Uses component-based architecture and virtual DOM.',
    markdownFile: 'react.mdx',
    related: ['frameworks'],
  },
  {
    id: 'angular',
    title: 'Angular',
    category: 'frontend',
    content:
      'A TypeScript-based web application framework for building single-page applications.',
    markdownFile: 'angular.mdx',
    related: ['frameworks'],
  },
  {
    id: 'angularjs',
    title: 'AngularJS',
    category: 'frontend',
    content:
      'The original Angular framework (v1.x) for building dynamic web applications using two-way data binding.',
    markdownFile: 'angularjs.mdx',
    related: ['frameworks'],
  },
  {
    id: 'react-native',
    title: 'React Native',
    category: 'frontend',
    content:
      'A framework for building native mobile applications using React and JavaScript.',
    markdownFile: 'react-native.mdx',
    related: ['frameworks', 'react'],
  },
  {
    id: 'css-modules',
    title: 'CSS Modules',
    category: 'frontend',
    content:
      'CSS files in which all class names and animation names are scoped locally by default.',
    markdownFile: 'css-modules.mdx',
    related: ['frontend', 'sass', 'scss'],
  },
  {
    id: 'sass',
    title: 'SASS',
    category: 'frontend',
    content:
      'Syntactically Awesome Style Sheets - a CSS preprocessor with variables, nesting, and mixins.',
    markdownFile: 'sass.mdx',
    related: ['css-modules'],
  },
  {
    id: 'scss',
    title: 'SCSS',
    category: 'frontend',
    content:
      'Sassy CSS - a CSS preprocessor syntax that uses curly braces and semicolons, similar to CSS.',
    markdownFile: 'scss.mdx',
    related: ['css-modules'],
  },
  {
    id: 'i18n',
    title: 'Internationalization (i18n)',
    category: 'frontend',
    content:
      'The process of designing and developing applications to support multiple languages and regions.',
    markdownFile: 'i18n.mdx',
    related: ['frontend'],
  },
  {
    id: 'multitenancy-frontend',
    title: 'Multitenancy (Frontend)',
    category: 'frontend',
    content:
      'Frontend architecture pattern where a single application instance serves multiple tenants with isolated data and configurations.',
    markdownFile: 'multitenancy-frontend.mdx',
    related: ['frontend'],
  },

  // Backend Technologies (Hidden until Backend is expanded)
  {
    id: 'rails',
    title: 'Ruby on Rails',
    category: 'backend',
    content:
      'A web application framework written in Ruby. Follows convention over configuration and the MVC pattern.',
    markdownFile: 'rails.mdx',
    related: ['backend'],
  },
  {
    id: 'multitenancy-backend',
    title: 'Multitenancy (Backend)',
    category: 'backend',
    content:
      'Backend architecture pattern where a single application instance serves multiple tenants with data isolation at the database or schema level.',
    markdownFile: 'multitenancy-backend.mdx',
    related: ['backend'],
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
