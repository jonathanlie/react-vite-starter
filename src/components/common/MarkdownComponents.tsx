import type { Components } from 'react-markdown';

/**
 * Shared markdown component configuration for consistent styling
 * across WorkHistoryEntry and KnowledgeModal components.
 *
 * Provides styled components for headings, paragraphs, lists, code blocks,
 * and other markdown elements with dark mode support.
 */
export const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900 dark:text-gray-100 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-relaxed mb-4 text-gray-700 dark:text-zinc-400 last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-none mb-4 pl-0 space-y-3">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex items-start text-base leading-relaxed text-gray-700 dark:text-zinc-400">
      <span className="mr-3 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </strong>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 dark:text-zinc-400 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className="bg-transparent p-0 dark:text-zinc-400" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 leading-relaxed">
      {children}
    </pre>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};
