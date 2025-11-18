import type { ComponentType } from 'react';
import type { LoadMarkdownContent } from '@/types/knowledge';

/**
 * Error thrown when a markdown file cannot be loaded
 */
export class MarkdownLoadError extends Error {
  constructor(
    public readonly markdownFile: string,
    public readonly originalError?: unknown
  ) {
    super(
      `Failed to load markdown file: ${markdownFile}. ${originalError instanceof Error ? originalError.message : 'Unknown error'}`
    );
    this.name = 'MarkdownLoadError';
  }
}

/**
 * Pre-load all MDX files using import.meta.glob for production builds
 * This ensures Vite can statically analyze and bundle all MDX files
 */
const mdxModules = import.meta.glob<{ default: ComponentType }>(
  '../content/knowledge/*.mdx',
  { eager: false }
);

/**
 * Cache for loaded MDX modules to avoid re-importing the same file
 */
const moduleCache = new Map<string, ComponentType>();

/**
 * Loads an MDX file dynamically and returns the React component.
 *
 * Uses Vite's import.meta.glob to enable lazy loading while ensuring
 * all MDX files are properly bundled in production builds.
 *
 * @param markdownFile - The filename of the MDX file (e.g., "react.mdx")
 * @returns Promise resolving to the React component from the MDX file
 * @throws {MarkdownLoadError} If the file cannot be loaded or doesn't exist
 *
 * @example
 * ```ts
 * const Component = await loadMarkdownContent('react.mdx');
 * <Component />
 * ```
 */
export const loadMarkdownContent: LoadMarkdownContent = async (
  markdownFile: string
): Promise<ComponentType> => {
  // Check cache first
  if (moduleCache.has(markdownFile)) {
    return moduleCache.get(markdownFile)!;
  }

  try {
    // Construct the path that matches the glob pattern
    const filePath = `../content/knowledge/${markdownFile}`;

    // Get the loader function from the glob result
    const loader = mdxModules[filePath];

    if (!loader) {
      throw new MarkdownLoadError(
        markdownFile,
        new Error(
          `MDX file "${markdownFile}" not found in src/content/knowledge/. Please ensure the file exists.`
        )
      );
    }

    // Load the module (this is lazy - only loads when called)
    const module = await loader();

    // MDX files export a default React component
    const Component = module.default;

    if (!Component) {
      throw new Error(
        `MDX file ${markdownFile} does not have a default export`
      );
    }

    // Cache the loaded component
    moduleCache.set(markdownFile, Component);

    return Component;
  } catch (error) {
    // Provide more helpful error messages
    if (error instanceof MarkdownLoadError) {
      throw error;
    }

    if (error instanceof Error) {
      // Check if it's a module not found error
      if (
        error.message.includes('Failed to fetch') ||
        error.message.includes('Cannot find module') ||
        error.message.includes('Failed to resolve')
      ) {
        throw new MarkdownLoadError(
          markdownFile,
          new Error(
            `MDX file "${markdownFile}" not found in src/content/knowledge/. Please ensure the file exists.`
          )
        );
      }
    }
    // Re-throw as MarkdownLoadError for better error handling
    throw new MarkdownLoadError(markdownFile, error);
  }
};
