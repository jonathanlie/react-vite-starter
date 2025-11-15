import { useState, useCallback, useMemo } from 'react';
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
import { knowledgeNodes, getNodeById } from '@/data/knowledgeNodes';
import { KnowledgeGraphNode } from './KnowledgeGraphNode';

/**
 * Category color mapping for node styling
 */
const categoryColors: Record<KnowledgeNode['category'], string> = {
  root: '#6366f1', // indigo
  backend: '#3b82f6', // blue
  frontend: '#10b981', // green
  devops: '#f59e0b', // amber
  database: '#8b5cf6', // purple
  tooling: '#ef4444', // red
  concept: '#6b7280', // gray
};

/**
 * Get root nodes (nodes with category 'root')
 * These will be the initial visible nodes
 */
function getRootNodes(nodes: KnowledgeNode[]): string[] {
  return nodes
    .filter((node) => node.category === 'root')
    .map((node) => node.id);
}

/**
 * Node size constants
 */
const NODE_SIZE = 140;
const MIN_HORIZONTAL_SPACING = 180; // Minimum space between nodes horizontally
const MIN_VERTICAL_SPACING = 200; // Minimum space between levels vertically
const ROOT_Y_POSITION = 100;

/**
 * Calculate the width required for a subtree
 * This recursively calculates how much horizontal space is needed
 * for all children and their descendants
 */
function calculateSubtreeWidth(
  nodeId: string,
  nodeMap: Map<string, KnowledgeNode>,
  visibleNodeIds: Set<string>,
  expandedNodes: Set<string>,
  visited: Set<string>
): number {
  if (visited.has(nodeId)) return 0;
  visited.add(nodeId);

  const node = nodeMap.get(nodeId);
  if (!node) return NODE_SIZE;

  // If not expanded, only this node's width
  if (!expandedNodes.has(nodeId)) {
    return NODE_SIZE;
  }

  // Get visible children
  const children = node.related.filter(
    (relatedId) =>
      visibleNodeIds.has(relatedId) &&
      nodeMap.has(relatedId) &&
      !visited.has(relatedId)
  );

  if (children.length === 0) {
    return NODE_SIZE;
  }

  // Calculate total width needed for all children's subtrees
  const childrenWidths = children.map((childId) =>
    calculateSubtreeWidth(
      childId,
      nodeMap,
      visibleNodeIds,
      expandedNodes,
      visited
    )
  );

  const totalChildrenWidth =
    childrenWidths.reduce((sum, width) => sum + width, 0) +
    (children.length - 1) * MIN_HORIZONTAL_SPACING;

  // Return the maximum of this node's width or children's total width
  return Math.max(NODE_SIZE, totalChildrenWidth);
}

/**
 * Calculate hierarchical layout for nodes with dynamic spacing
 * Prevents overlaps by calculating subtree widths and positioning accordingly
 */
function calculateLayout(
  visibleNodeIds: Set<string>,
  nodes: KnowledgeNode[],
  expandedNodes: Set<string>
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Get root nodes
  const rootIds = Array.from(visibleNodeIds).filter((id) => {
    const node = nodeMap.get(id);
    return node?.category === 'root';
  });

  if (rootIds.length === 0) return positions;

  // Calculate subtree widths for each root to determine spacing
  const rootSubtreeWidths = rootIds.map((rootId) => {
    const visited = new Set<string>();
    return calculateSubtreeWidth(
      rootId,
      nodeMap,
      visibleNodeIds,
      expandedNodes,
      visited
    );
  });

  // Calculate starting positions for root nodes
  // Position them with enough space for their subtrees
  let currentX = 400;
  const rootPositions: Array<{ id: string; x: number }> = [];

  rootIds.forEach((rootId, index) => {
    const subtreeWidth = rootSubtreeWidths[index];
    const rootX = currentX + subtreeWidth / 2 - NODE_SIZE / 2;
    rootPositions.push({ id: rootId, x: rootX });
    currentX += subtreeWidth + MIN_HORIZONTAL_SPACING * 2; // Extra spacing between root subtrees
  });

  // Center all root nodes around the center point
  const totalWidth =
    rootSubtreeWidths.reduce((sum, w) => sum + w, 0) +
    (rootIds.length - 1) * MIN_HORIZONTAL_SPACING * 2;
  const centerOffset = 400 - totalWidth / 2;

  // Position root nodes and their subtrees
  rootPositions.forEach(({ id: rootId, x: rootX }) => {
    const adjustedX = rootX + centerOffset;
    positionSubtree(
      rootId,
      adjustedX,
      ROOT_Y_POSITION,
      0,
      nodeMap,
      visibleNodeIds,
      expandedNodes,
      positions,
      new Set<string>()
    );
  });

  return positions;
}

/**
 * Recursively position a node and its subtree
 */
function positionSubtree(
  nodeId: string,
  centerX: number,
  y: number,
  level: number,
  nodeMap: Map<string, KnowledgeNode>,
  visibleNodeIds: Set<string>,
  expandedNodes: Set<string>,
  positions: Map<string, { x: number; y: number }>,
  visited: Set<string>
): void {
  if (visited.has(nodeId)) return;
  visited.add(nodeId);

  const node = nodeMap.get(nodeId);
  if (!node) return;

  // Position this node
  positions.set(nodeId, { x: centerX - NODE_SIZE / 2, y });

  // If not expanded, we're done
  if (!expandedNodes.has(nodeId)) return;

  // Get visible children
  const children = node.related.filter(
    (relatedId) =>
      visibleNodeIds.has(relatedId) &&
      nodeMap.has(relatedId) &&
      !visited.has(relatedId)
  );

  if (children.length === 0) return;

  // Calculate subtree widths for children
  const childrenWidths = children.map((childId) => {
    const childVisited = new Set(visited);
    return calculateSubtreeWidth(
      childId,
      nodeMap,
      visibleNodeIds,
      expandedNodes,
      childVisited
    );
  });

  const totalChildrenWidth =
    childrenWidths.reduce((sum, width) => sum + width, 0) +
    (children.length - 1) * MIN_HORIZONTAL_SPACING;

  // Position children centered under parent
  let childX = centerX - totalChildrenWidth / 2;

  children.forEach((childId, index) => {
    const childWidth = childrenWidths[index];
    const childCenterX = childX + childWidth / 2;
    const childY = y + MIN_VERTICAL_SPACING;

    positionSubtree(
      childId,
      childCenterX,
      childY,
      level + 1,
      nodeMap,
      visibleNodeIds,
      expandedNodes,
      positions,
      visited
    );

    childX += childWidth + MIN_HORIZONTAL_SPACING;
  });
}

interface KnowledgeGraphProps {
  onNodeClick: (nodeId: string) => void;
}

/**
 * Knowledge Graph Component
 *
 * Displays knowledge nodes as an interactive graph using React Flow.
 * Implements expandable/collapsible nodes to reduce visual complexity.
 * Only shows root nodes initially, with related nodes revealed on expansion.
 */
export function KnowledgeGraph({ onNodeClick }: KnowledgeGraphProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const rootNodeIds = useMemo(() => new Set(getRootNodes(knowledgeNodes)), []);
  const [visibleNodeIds, setVisibleNodeIds] = useState<Set<string>>(
    () => new Set(getRootNodes(knowledgeNodes))
  );

  const nodeTypes: NodeTypes = useMemo(
    () => ({
      knowledgeNode: KnowledgeGraphNode,
    }),
    []
  );

  const handleExpand = useCallback(
    (nodeId: string) => {
      const node = getNodeById(nodeId);
      if (!node) return;

      setExpandedNodes((prev) => {
        const next = new Set(prev);
        const willBeExpanded = !next.has(nodeId);

        if (next.has(nodeId)) {
          next.delete(nodeId);
        } else {
          next.add(nodeId);
        }

        // Update visible nodes based on the new expanded state
        setVisibleNodeIds((prevVisible) => {
          const nextVisible = new Set(prevVisible);

          if (willBeExpanded) {
            // Expanding - add related nodes
            node.related.forEach((relatedId) => {
              if (getNodeById(relatedId)) {
                nextVisible.add(relatedId);
              }
            });
          } else {
            // Collapsing - remove related nodes that aren't connected to other expanded nodes
            node.related.forEach((relatedId) => {
              // Never remove root nodes
              if (rootNodeIds.has(relatedId)) return;

              // Check if this related node is referenced by other expanded nodes
              const isReferencedByOthers = Array.from(next).some(
                (expandedId) => {
                  if (expandedId === nodeId) return false;
                  const expandedNode = getNodeById(expandedId);
                  return expandedNode?.related.includes(relatedId);
                }
              );

              // Only remove if not referenced by other expanded nodes
              if (!isReferencedByOthers) {
                nextVisible.delete(relatedId);
              }
            });
          }

          return nextVisible;
        });

        return next;
      });
    },
    [rootNodeIds]
  );

  const { nodes, edges } = useMemo(() => {
    const visibleNodes = knowledgeNodes.filter((node) =>
      visibleNodeIds.has(node.id)
    );

    const positions = calculateLayout(
      visibleNodeIds,
      knowledgeNodes,
      expandedNodes
    );

    const flowNodes: Node[] = visibleNodes.map((node) => {
      const position = positions.get(node.id) || { x: 400, y: 100 };
      const relatedCount = node.related.filter((id) =>
        knowledgeNodes.some((n) => n.id === id)
      ).length;

      return {
        id: node.id,
        type: 'knowledgeNode',
        position,
        data: {
          label: node.title,
          category: node.category,
          content: node.content,
          color: categoryColors[node.category],
          onClick: () => onNodeClick(node.id),
          isExpanded: expandedNodes.has(node.id),
          onExpand: () => handleExpand(node.id),
          relatedCount,
        },
      };
    });

    const flowEdges: Edge[] = [];
    const edgeSet = new Set<string>();

    visibleNodes.forEach((node) => {
      if (!expandedNodes.has(node.id)) return;

      node.related.forEach((relatedId) => {
        if (!visibleNodeIds.has(relatedId)) return;

        const edgeKey1 = `${node.id}-${relatedId}`;
        const edgeKey2 = `${relatedId}-${node.id}`;

        if (!edgeSet.has(edgeKey1) && !edgeSet.has(edgeKey2)) {
          flowEdges.push({
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

    return { nodes: flowNodes, edges: flowEdges };
  }, [visibleNodeIds, expandedNodes, onNodeClick, handleExpand]);

  return (
    <div className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{ padding: 0.2, duration: 300 }}
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
