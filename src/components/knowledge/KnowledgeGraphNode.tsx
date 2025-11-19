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
  hasModalContent?: boolean; // Whether this node has modal content (clickable)
}

/**
 * Custom Node Component for Knowledge Graph
 *
 * Displays a compact circular knowledge node with glassmorphism styling.
 * Shows only the title for a cleaner, less cluttered visualization.
 */
export const KnowledgeGraphNode = memo(
  ({ data }: NodeProps<KnowledgeGraphNodeData>) => {
    const nodeSize = 90; // Reduced from 140px - smaller nodes for better clustering
    const innerRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);
    const nodeIdRef = useRef<string | undefined>(undefined);

    const isClickable = data.hasModalContent ?? false;

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
        onClick={isClickable ? data.onClick : undefined}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={
          isClickable
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  data.onClick();
                }
              }
            : undefined
        }
        title={!isClickable ? 'Concept' : undefined}
      >
        {/* Inner wrapper for animation - React Flow controls outer div positioning */}
        <div
          ref={innerRef}
          className={`relative flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
            isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-default'
          }`}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: isClickable
              ? '#2A2A35' // Solid, lighter dark tone for active
              : 'rgba(255, 255, 255, 0.03)', // Ultra-low opacity for dormant
            boxShadow: isClickable
              ? '0 0 12px rgba(120, 80, 255, 0.5)' // Outer glow for active
              : 'none',
            filter: isClickable ? 'none' : 'none', // Will be used for brightness on hover
            // Animation handled by useEffect, but ensure transition is always present
            transition:
              'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, filter 0.3s ease-in-out',
          }}
          onMouseEnter={
            isClickable
              ? (e) => {
                  // Glow expands to 20px and brightness increases
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(120, 80, 255, 0.7)';
                  e.currentTarget.style.filter = 'brightness(1.1)';
                }
              : (e) => {
                  // Opacity increases slightly for legibility, but not button-like
                  e.currentTarget.style.backgroundColor =
                    'rgba(255, 255, 255, 0.1)';
                }
          }
          onMouseLeave={
            isClickable
              ? (e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 12px rgba(120, 80, 255, 0.5)';
                  e.currentTarget.style.filter = 'none';
                }
              : (e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(255, 255, 255, 0.03)';
                }
          }
        >
          {/* Hidden handles for read-only graph */}
          <Handle type="target" position={Position.Top} className="opacity-0" />

          <div
            className="flex items-center justify-center px-2 py-1 text-center"
            style={{ width: '100%', height: '100%' }}
          >
            <div
              className={`text-xs leading-tight px-1 ${
                isClickable ? 'font-bold text-white' : 'font-normal'
              }`}
              style={{
                color: isClickable
                  ? '#FFFFFF' // Bright white for active
                  : 'rgba(255, 255, 255, 0.5)', // Semi-transparent white for dormant (alternative: #6B7280)
              }}
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
