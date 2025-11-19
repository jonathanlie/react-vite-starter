import type { LoadMarkdownContent } from '@/types/knowledge';

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

const modules = import.meta.glob('../content/knowledge/*.md', {
  query: '?raw',
  import: 'default',
});

const contentCache = new Map<string, string>();

export const loadMarkdownContent: LoadMarkdownContent = async (
  markdownFile: string
): Promise<string> => {
  if (contentCache.has(markdownFile)) {
    return contentCache.get(markdownFile)!;
  }

  const nameWithExt = markdownFile.endsWith('.md')
    ? markdownFile
    : `${markdownFile}.md`;

  const path = `../content/knowledge/${nameWithExt}`;
  const loader = modules[path];

  if (!loader) {
    const availableKeys = Object.keys(modules);
    throw new MarkdownLoadError(
      markdownFile,
      new Error(
        `Markdown file not found: ${path}. Available files: ${availableKeys.join(', ')}`
      )
    );
  }

  try {
    const content = (await loader()) as string;
    contentCache.set(markdownFile, content);
    return content;
  } catch (error) {
    if (error instanceof MarkdownLoadError) {
      throw error;
    }

    throw new MarkdownLoadError(
      markdownFile,
      error instanceof Error
        ? error
        : new Error(`Failed to load markdown file: ${markdownFile}`)
    );
  }
};
