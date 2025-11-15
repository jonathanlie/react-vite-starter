/**
 * Knowledge Web Node Types
 *
 * Defines the schema for knowledge nodes in the knowledge web visualization.
 * Each node represents a skill, technology, or concept with relationships to other nodes.
 */

/**
 * Category classification for knowledge nodes
 */
export type KnowledgeCategory =
  | 'root'
  | 'backend'
  | 'frontend'
  | 'devops'
  | 'database'
  | 'tooling'
  | 'concept';

/**
 * Skill proficiency level (optional)
 */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Knowledge Node Schema
 *
 * Represents a single node in the knowledge web with:
 * - Basic metadata (id, title, category)
 * - Short description for initial load (performance optimization)
 * - External MDX file reference for detailed content (lazy-loaded)
 * - Relationship mapping to other nodes
 */
export interface KnowledgeNode {
  /** Unique identifier for the node (kebab-case recommended) */
  id: string;

  /** Display title of the node */
  title: string;

  /** Category classification */
  category: KnowledgeCategory;

  /**
   * Short description (1-2 sentences)
   * Loaded immediately for performance. Used in cards, tooltips, and previews.
   */
  content: string;

  /**
   * Path to external MDX file containing detailed markdown content
   * Format: relative path from src/content/knowledge/ (e.g., "kafka.mdx")
   * The modal will lazy-load this content when the node is clicked.
   */
  markdownFile: string;

  /**
   * Array of related node IDs
   * Used to create edges/connections in the graph visualization
   */
  related: string[];

  /**
   * Optional skill proficiency level
   */
  level?: SkillLevel;

  /**
   * Optional additional tags for filtering and search
   */
  tags?: string[];
}

/**
 * Knowledge Node with loaded markdown content
 *
 * Extended interface for nodes that have had their markdown content loaded.
 * Used internally by components that render the detailed content.
 */
export interface KnowledgeNodeWithContent extends KnowledgeNode {
  /** Loaded markdown content (React component from MDX) */
  markdownComponent: React.ComponentType;
}

/**
 * Helper function type for loading markdown content
 */
export type LoadMarkdownContent = (
  markdownFile: string
) => Promise<React.ComponentType>;

