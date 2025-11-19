import { useState, useEffect, Suspense } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { loadMarkdownContent, MarkdownLoadError } from '@/utils/loadMarkdown';
import { getKnowledgeById } from '@/data/knowledges';
import { ProficiencyScore } from './ProficiencyScore';
import type { ComponentType } from 'react';

interface KnowledgeModalProps {
  /** The ID of the knowledge node to display */
  nodeId: string | null;
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when the modal should be closed */
  onClose: () => void;
}

/**
 * Knowledge Modal Component
 *
 * Displays detailed markdown content for a knowledge node in a modal dialog.
 * Handles loading states, error states, and dynamically imports MDX content.
 */
export function KnowledgeModal({
  nodeId,
  isOpen,
  onClose,
}: KnowledgeModalProps) {
  const [MarkdownComponent, setMarkdownComponent] =
    useState<ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const node = nodeId ? getKnowledgeById(nodeId) : null;

  // Load MDX content when nodeId changes and modal is open
  useEffect(() => {
    if (!isOpen || !node) {
      // Reset state when modal closes
      setMarkdownComponent(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    // If no markdownFile, don't try to load
    if (!node.markdownFile) {
      setError('This knowledge item does not have detailed content available.');
      setIsLoading(false);
      return;
    }

    const loadContent = async () => {
      setIsLoading(true);
      setError(null);
      setMarkdownComponent(null);

      try {
        const Component = await loadMarkdownContent(node.markdownFile!);
        setMarkdownComponent(() => Component);
      } catch (err) {
        if (err instanceof MarkdownLoadError) {
          setError(
            `Failed to load content for ${node.title}. The markdown file "${node.markdownFile}" may not exist.`
          );
        } else {
          setError(
            `An unexpected error occurred while loading content for ${node.title}.`
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [isOpen, node]);

  if (!node) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/10 shadow-2xl shadow-black/50">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
                {node.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {node.proficiencyScore && (
                  <ProficiencyScore score={node.proficiencyScore} />
                )}
              </div>
            </div>
          </div>
          <DialogDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2"></DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400 dark:text-gray-500 mb-4" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Loading content...
              </p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
              <p className="text-sm text-red-600 dark:text-red-400 text-center max-w-md">
                {error}
              </p>
            </div>
          )}

          {!isLoading && !error && MarkdownComponent && (
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                  </div>
                }
              >
                <MarkdownContentWrapper>
                  <MarkdownComponent />
                </MarkdownContentWrapper>
              </Suspense>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Wrapper component for MDX content with consistent styling
 *
 * Applies markdown styling similar to WorkHistoryEntry for consistency.
 * Uses Tailwind classes with global CSS for MDX-generated elements.
 */
function MarkdownContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="markdown-content [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-gray-900 dark:[&_h1]:text-gray-100 [&_h1]:tracking-tight [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-gray-900 dark:[&_h2]:text-gray-100 [&_h2]:tracking-tight [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-gray-900 dark:[&_h3]:text-gray-100 [&_h3]:tracking-tight [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-gray-700 dark:[&_p]:text-zinc-400 [&_ul]:list-none [&_ul]:mb-4 [&_ul]:pl-0 [&_li]:flex [&_li]:items-start [&_li]:text-base [&_li]:leading-relaxed [&_li]:mb-3 [&_li]:text-gray-700 dark:[&_li]:text-zinc-400 [&_li]:before:content-[''] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-gray-400 dark:[&_li]:before:bg-gray-500 [&_li]:before:mr-3 [&_li]:before:mt-2 [&_li]:before:shrink-0 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-gray-100 [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 dark:[&_code]:text-zinc-400 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_pre]:bg-gray-100 dark:[&_pre]:bg-gray-800 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_pre]:leading-relaxed [&_pre_code]:bg-transparent [&_pre_code]:p-0 dark:[&_pre_code]:text-zinc-400 [&_a]:text-blue-500 dark:[&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-600 dark:[&_a]:hover:text-blue-300">
      {children}
    </div>
  );
}
