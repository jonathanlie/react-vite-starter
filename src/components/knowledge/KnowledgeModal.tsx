import { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
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
import { markdownComponents } from '@/components/common/MarkdownComponents';

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
 * Handles loading states, error states, and dynamically imports markdown content.
 */
export function KnowledgeModal({
  nodeId,
  isOpen,
  onClose,
}: KnowledgeModalProps) {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const node = nodeId ? getKnowledgeById(nodeId) : null;

  useEffect(() => {
    if (!isOpen || !node) {
      setMarkdownContent(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    if (!node.markdownFile) {
      setError('This knowledge item does not have detailed content available.');
      setIsLoading(false);
      return;
    }

    const loadContent = async () => {
      setIsLoading(true);
      setError(null);
      setMarkdownContent(null);

      try {
        const content = await loadMarkdownContent(node.markdownFile!);
        setMarkdownContent(content);
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
      <DialogContent className="scroll-container max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/10 shadow-2xl shadow-black/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,0.1)] [&>button]:cursor-pointer [&>button]:focus-visible:outline-none [&>button]:focus-visible:ring-0 [&>button]:focus-visible:ring-offset-0">
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

          {!isLoading && !error && markdownContent && (
            <ReactMarkdown components={markdownComponents}>
              {markdownContent}
            </ReactMarkdown>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
