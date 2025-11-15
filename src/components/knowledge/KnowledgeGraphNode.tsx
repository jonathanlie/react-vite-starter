import { memo } from 'react';
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
}

/**
 * Custom Node Component for Knowledge Graph
 *
 * Displays a circular knowledge node with category-based styling.
 * Fixed size with clear title and word-wrapped description.
 */
export const KnowledgeGraphNode = memo(
  ({ data }: NodeProps<KnowledgeGraphNodeData>) => {
    const nodeSize = 140; // Fixed circular node size

    return (
      <div
        className="relative flex items-center justify-center shadow-md bg-white dark:bg-gray-800 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110"
        style={{
          width: `${nodeSize}px`,
          height: `${nodeSize}px`,
          borderRadius: '50%',
          borderColor: data.color,
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
        <Handle
          type="target"
          position={Position.Top}
          className="w-2 h-2"
          style={{ backgroundColor: data.color }}
        />

        <div
          className="flex flex-col items-center justify-center px-3 py-2 text-center"
          style={{ width: '100%', height: '100%' }}
        >
          <div
            className="text-sm font-bold mb-1 leading-tight"
            style={{ color: data.color }}
          >
            {data.label}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 wrap-break-word">
            {data.content}
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
    );
  }
);

KnowledgeGraphNode.displayName = 'KnowledgeGraphNode';
