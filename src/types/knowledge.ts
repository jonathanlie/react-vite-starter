/**
 * Knowledge Web Types
 *
 * Defines the schema for knowledge entities in the knowledge web visualization.
 * Each knowledge represents a skill, technology, or concept with relationships to other knowledge entities.
 */

/**
 * Knowledge Schema
 *
 * Represents a single knowledge entity in the knowledge web with:
 * - Basic metadata (id, title, isRoot)
 * - Short description for initial load (performance optimization)
 * - External MDX file reference for detailed content (lazy-loaded)
 * - Relationship mapping to other knowledge entities
 */
export interface Knowledge {
  /** Unique identifier for the knowledge (kebab-case recommended) */
  id: string;

  /** Display title of the knowledge */
  title: string;

  /**
   * Whether this is a root knowledge node
   * Root nodes are top-level categories (e.g., Frontend, Backend, DevOps)
   */
  isRoot: boolean;

  /**
   * Short description (1-2 sentences)
   * Loaded immediately for performance. Used in cards, tooltips, and previews.
   */
  content?: string;

  /**
   * Path to external MDX file containing detailed markdown content
   * Format: relative path from src/content/knowledge/ (e.g., "kafka.mdx")
   * The modal will lazy-load this content when the knowledge is clicked.
   */
  markdownFile: string;

  /**
   * Related knowledge ID (optional)
   * Used to create edges/connections in the graph visualization.
   * Each knowledge entity can be related to one other knowledge entity.
   */
  related?: string;

  /**
   * Proficiency score on a scale of 1-10
   * 1-2: Conceptual, 3-5: Operational, 6-7: Proficient, 8-10: Architectural
   */
  proficiencyScore?: number;

  /**
   * Optional additional tags for filtering and search
   */
  tags?: string[];
}

/**
 * Knowledge with loaded markdown content
 *
 * Extended interface for knowledge entities that have had their markdown content loaded.
 * Used internally by components that render the detailed content.
 */
export interface KnowledgeWithContent extends Knowledge {
  /** Loaded markdown content (React component from MDX) */
  markdownComponent: React.ComponentType;
}

/**
 * Helper function type for loading markdown content
 */
export type LoadMarkdownContent = (
  markdownFile: string
) => Promise<React.ComponentType>;
