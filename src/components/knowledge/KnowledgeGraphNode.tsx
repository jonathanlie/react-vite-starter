import { memo, useEffect, useRef } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

interface KnowledgeGraphNodeData {
  label: string;
  category: string;
  content: string;
  color: string;
  onClick: () => void;
  isExpanded?: boolean;
  onExpand?: () => void;
  relatedCount?: number;
  isNew?: boolean; // Flag for animation
}

/**
 * Custom Node Component for Knowledge Graph
 *
 * Displays a compact circular knowledge node with category-based styling.
 * Shows only the title for a cleaner, less cluttered visualization.
 */
export const KnowledgeGraphNode = memo(
  ({ data }: NodeProps<KnowledgeGraphNodeData>) => {
    const nodeSize = 90; // Reduced from 140px - smaller nodes for better clustering
    const innerRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);
    const nodeIdRef = useRef<string | undefined>(undefined);

    // Animate node appearance when it's marked as new
    useEffect(() => {
      // Reset if this is a different node (node was replaced)
      if (nodeIdRef.current !== data.label) {
        hasAnimatedRef.current = false;
        nodeIdRef.current = data.label;
      }

      if (data.isNew && !hasAnimatedRef.current && innerRef.current) {
        // Mark as animated immediately to prevent re-triggering
        hasAnimatedRef.current = true;

        // Start from invisible/small
        innerRef.current.style.opacity = '0';
        innerRef.current.style.transform = 'scale(0)';

        // Trigger animation after React has rendered
        // Use multiple RAF to ensure DOM is ready
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (innerRef.current) {
                innerRef.current.style.opacity = '1';
                innerRef.current.style.transform = 'scale(1)';
              }
            });
          });
        });
      } else if (!data.isNew && hasAnimatedRef.current) {
        // Node is no longer "new" - ensure it's visible
        if (innerRef.current) {
          innerRef.current.style.opacity = '1';
          innerRef.current.style.transform = 'scale(1)';
        }
      }
    }, [data.isNew, data.label]);

    return (
      <div
        className="relative"
        style={{
          width: `${nodeSize}px`,
          height: `${nodeSize}px`,
        }}
        onClick={data.onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            data.onClick();
          }
        }}
      >
        {/* Inner wrapper for animation - React Flow controls outer div positioning */}
        <div
          ref={innerRef}
          className="relative flex items-center justify-center shadow-md bg-white dark:bg-gray-800 border-2 cursor-pointer hover:shadow-lg hover:scale-110"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            borderColor: data.color,
            // Animation handled by useEffect, but ensure transition is always present
            transition:
              'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <Handle
            type="target"
            position={Position.Top}
            className="w-2 h-2"
            style={{ backgroundColor: data.color }}
          />

          <div
            className="flex items-center justify-center px-2 py-1 text-center"
            style={{ width: '100%', height: '100%' }}
          >
            <div
              className="text-xs font-bold leading-tight px-1"
              style={{ color: data.color }}
            >
              {data.label}
            </div>
          </div>

          {data.relatedCount !== undefined && data.relatedCount > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                data.onExpand?.();
              }}
              className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              aria-label={data.isExpanded ? 'Collapse' : 'Expand'}
              title={`${data.isExpanded ? 'Collapse' : 'Expand'} related nodes`}
            >
              {data.isExpanded ? '−' : '+'}
            </button>
          )}

          <Handle
            type="source"
            position={Position.Bottom}
            className="w-2 h-2"
            style={{ backgroundColor: data.color }}
          />
        </div>
      </div>
    );
  }
);

KnowledgeGraphNode.displayName = 'KnowledgeGraphNode';
