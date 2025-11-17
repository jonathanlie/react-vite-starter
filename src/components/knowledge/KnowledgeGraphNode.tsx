import { memo, useEffect, useRef, useMemo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Knowledge } from '@/types/knowledge';

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
 * Get glow color based on category for glassmorphism effect
 */
function getGlowColor(category: Knowledge['category']): string {
  const glowColors: Record<Knowledge['category'], string> = {
    root: 'rgba(99, 102, 241, 0.3)', // Indigo
    backend: 'rgba(59, 130, 246, 0.3)', // Blue
    frontend: 'rgba(16, 185, 129, 0.3)', // Green
    devops: 'rgba(245, 158, 11, 0.3)', // Amber
    database: 'rgba(139, 92, 246, 0.3)', // Purple
    tooling: 'rgba(239, 68, 68, 0.3)', // Red
    concept: 'rgba(107, 114, 128, 0.3)', // Gray
  };
  return glowColors[category] || glowColors.concept;
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

    // Get glow color based on category
    const glowColor = useMemo(
      () => getGlowColor(data.category as Knowledge['category']),
      [data.category]
    );

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
          className="relative flex items-center justify-center rounded-full cursor-pointer backdrop-blur-md border transition-all duration-300 hover:scale-110"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: '1px',
            boxShadow: `0 0 15px ${glowColor}`,
            // Animation handled by useEffect, but ensure transition is always present
            transition:
              'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 25px ${glowColor.replace('0.3', '0.6')}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 15px ${glowColor}`;
          }}
        >
          {/* Hidden handles for read-only graph */}
          <Handle type="target" position={Position.Top} className="opacity-0" />

          <div
            className="flex items-center justify-center px-2 py-1 text-center"
            style={{ width: '100%', height: '100%' }}
          >
            <div className="text-xs font-medium leading-tight px-1 text-white">
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

          {/* Hidden handles for read-only graph */}
          <Handle
            type="source"
            position={Position.Bottom}
            className="opacity-0"
          />
        </div>
      </div>
    );
  }
);

KnowledgeGraphNode.displayName = 'KnowledgeGraphNode';
