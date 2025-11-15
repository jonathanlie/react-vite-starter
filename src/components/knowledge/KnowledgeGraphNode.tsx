import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

interface KnowledgeGraphNodeData {
  label: string;
  category: string;
  content: string;
  color: string;
  onClick: () => void;
}

/**
 * Custom Node Component for Knowledge Graph
 *
 * Displays a knowledge node with category-based styling and click handler.
 */
export const KnowledgeGraphNode = memo(
  ({ data }: NodeProps<KnowledgeGraphNodeData>) => {
    return (
      <div
        className="px-4 py-3 rounded-lg shadow-md bg-white dark:bg-gray-800 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
        style={{
          borderColor: data.color,
          minWidth: '150px',
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
          className="w-3 h-3"
          style={{ backgroundColor: data.color }}
        />

        <div className="text-center">
          <div
            className="text-sm font-semibold mb-1"
            style={{ color: data.color }}
          >
            {data.label}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
            {data.content}
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3"
          style={{ backgroundColor: data.color }}
        />
      </div>
    );
  }
);

KnowledgeGraphNode.displayName = 'KnowledgeGraphNode';

