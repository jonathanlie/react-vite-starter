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
 * Cache for loaded MDX modules to avoid re-importing the same file
 */
const moduleCache = new Map<string, ComponentType>();

/**
 * Loads an MDX file dynamically and returns the React component.
 *
 * Uses Vite's dynamic import with template literals to enable true lazy loading.
 * The MDX files are processed by the @mdx-js/rollup plugin and exported as React components.
 *
 * This implementation uses a relative path with template literals, which allows Vite to:
 * - Statically analyze the import pattern at build time
 * - Create separate code chunks for each MDX file
 * - Load files on-demand without pre-loading all content
 * - Scale efficiently as the number of MDX files grows
 *
 * Unlike import.meta.glob, this approach doesn't require enumerating all files upfront,
 * making it truly dynamic and sustainable for large content repositories.
 *
 * @param markdownFile - The filename of the MDX file (e.g., "kafka.mdx")
 * @returns Promise resolving to the React component from the MDX file
 * @throws {MarkdownLoadError} If the file cannot be loaded or doesn't exist
 *
 * @example
 * ```ts
 * const Component = await loadMarkdownContent('kafka.mdx');
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
    // Dynamic import using template literal
    // Vite will statically analyze this at build time and create separate chunks
    // for each MDX file, enabling true lazy loading without pre-loading all files
    // Using relative path from utils directory to content directory
    // @vite-ignore: Intentionally using dynamic imports for lazy loading MDX files
    const module = await import(
      /* @vite-ignore */ `../content/knowledge/${markdownFile}`
    );

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
