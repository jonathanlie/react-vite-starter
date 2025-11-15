import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  ConnectionMode,
  NodeTypes,
} from 'reactflow';
import { KnowledgeNode } from '@/types/knowledge';
import { knowledgeNodes } from '@/data/knowledgeNodes';
import { KnowledgeGraphNode } from './KnowledgeGraphNode';

/**
 * Category color mapping for node styling
 */
const categoryColors: Record<KnowledgeNode['category'], string> = {
  backend: '#3b82f6', // blue
  frontend: '#10b981', // green
  devops: '#f59e0b', // amber
  database: '#8b5cf6', // purple
  tooling: '#ef4444', // red
  concept: '#6b7280', // gray
};

/**
 * Convert knowledge nodes to React Flow nodes with automatic layout
 *
 * @param nodes - Array of knowledge nodes
 * @param onNodeClick - Callback when a node is clicked
 * @returns Array of React Flow nodes
 */
function convertToFlowNodes(
  nodes: KnowledgeNode[],
  onNodeClick: (nodeId: string) => void
): Node[] {
  // Simple grid layout - you can replace this with a force-directed layout algorithm
  const cols = Math.ceil(Math.sqrt(nodes.length));
  const nodeWidth = 200;
  const nodeHeight = 100;
  const spacing = 250;

  return nodes.map((node, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = col * spacing + 100;
    const y = row * spacing + 100;

    return {
      id: node.id,
      type: 'knowledgeNode',
      position: { x, y },
      data: {
        label: node.title,
        category: node.category,
        content: node.content,
        color: categoryColors[node.category],
        onClick: () => onNodeClick(node.id),
      },
    };
  });
}

/**
 * Convert knowledge node relationships to React Flow edges
 *
 * @param nodes - Array of knowledge nodes
 * @returns Array of React Flow edges
 */
function convertToFlowEdges(nodes: KnowledgeNode[]): Edge[] {
  const edges: Edge[] = [];
  const edgeSet = new Set<string>(); // Prevent duplicate edges

  nodes.forEach((node) => {
    node.related.forEach((relatedId) => {
      // Create edge in both directions for bidirectional relationships
      const edgeKey1 = `${node.id}-${relatedId}`;
      const edgeKey2 = `${relatedId}-${node.id}`;

      if (!edgeSet.has(edgeKey1) && !edgeSet.has(edgeKey2)) {
        edges.push({
          id: edgeKey1,
          source: node.id,
          target: relatedId,
          type: 'smoothstep',
          animated: false,
          style: { stroke: '#94a3b8', strokeWidth: 2 },
        });
        edgeSet.add(edgeKey1);
      }
    });
  });

  return edges;
}

interface KnowledgeGraphProps {
  onNodeClick: (nodeId: string) => void;
}

/**
 * Knowledge Graph Component
 *
 * Displays knowledge nodes as an interactive graph using React Flow.
 * Nodes are positioned automatically and connected based on their relationships.
 */
export function KnowledgeGraph({ onNodeClick }: KnowledgeGraphProps) {
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      knowledgeNode: KnowledgeGraphNode,
    }),
    []
  );

  const nodes = useMemo(
    () => convertToFlowNodes(knowledgeNodes, onNodeClick),
    [onNodeClick]
  );

  const edges = useMemo(() => convertToFlowEdges(knowledgeNodes), []);

  return (
    <div className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={2}
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: false,
        }}
      >
        <Background color="#e5e7eb" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const category = node.data?.category as KnowledgeNode['category'];
            return category ? categoryColors[category] : '#94a3b8';
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>
    </div>
  );
}

