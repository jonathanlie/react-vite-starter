import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Edge,
  BackgroundVariant,
} from 'reactflow';
import { SimulationLinkDatum } from 'd3-force';
import { Knowledge } from '@/types/knowledge';
import { knowledges, getKnowledgeById } from '@/data/knowledges';
import { KnowledgeGraphNode } from './KnowledgeGraphNode';
import { categoryColors, getRootNodes } from './knowledgeGraphConfig';
import { D3Node, KnowledgeGraphProps } from './knowledgeGraphTypes';
import { findRootForNode, findHubNode } from './knowledgeGraphHierarchy';
import {
  calculateNodePosition,
  calculateRootPositions,
} from './knowledgeGraphPositioning';
import { createForceSimulation } from './knowledgeGraphForces';

const nodeTypes = {
  knowledgeNode: KnowledgeGraphNode,
};

function LayoutFlow({ onNodeClick }: KnowledgeGraphProps) {
  const { fitView } = useReactFlow();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const rootNodeIds = useMemo(() => new Set(getRootNodes(knowledges)), []);
  const [visibleNodeIds, setVisibleNodeIds] = useState<Set<string>>(
    () => new Set(getRootNodes(knowledges))
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const previousPositionsRef = useRef<Map<string, { x: number; y: number }>>(
    new Map()
  );
  const previouslyVisibleRef = useRef<Set<string>>(new Set());
  const parentNodeMap = useRef<Map<string, string>>(new Map());
  const isInitialLoadRef = useRef(true);
  const lastExpandedNodeRef = useRef<string | null>(null);

  /**
   * Toggles node expansion state and manages visibility of related nodes.
   * When expanding: shows related nodes and tracks parent-child relationships for directional positioning.
   * When collapsing: hides related nodes only if they're not referenced by other expanded nodes.
   */
  const handleExpand = useCallback(
    (nodeId: string) => {
      const node = getKnowledgeById(nodeId);
      if (!node) return;

      setExpandedNodes((prev) => {
        const next = new Set(prev);
        const willBeExpanded = !next.has(nodeId);

        if (next.has(nodeId)) {
          next.delete(nodeId);
        } else {
          next.add(nodeId);
        }

        setVisibleNodeIds((prevVisible) => {
          const nextVisible = new Set(prevVisible);

          if (willBeExpanded) {
            // Show children: nodes that have this node as their related parent
            const childIds: string[] = [];
            knowledges.forEach((childNode) => {
              if (childNode.related === nodeId) {
                nextVisible.add(childNode.id);
                parentNodeMap.current.set(childNode.id, nodeId);
                childIds.push(childNode.id);
              }
            });
            // Track the expanded node to fit view to it after simulation
            if (childIds.length > 0) {
              lastExpandedNodeRef.current = nodeId;
            }
          } else {
            // Hide children: nodes that have this node as their related parent
            knowledges.forEach((childNode) => {
              if (childNode.related === nodeId) {
                // Don't hide if it's a root node (roots are always visible)
                if (rootNodeIds.has(childNode.id)) {
                  return;
                }

                // With single relationships, each child has only one parent
                // So if we're collapsing this parent, hide the child
                nextVisible.delete(childNode.id);
                parentNodeMap.current.delete(childNode.id);
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

  /**
   * Builds React Flow edges from visible and expanded nodes.
   * Creates edges from parent nodes to their children when the parent is expanded.
   */
  const flowEdges = useMemo(() => {
    const edgesList: Edge[] = [];
    const edgeSet = new Set<string>();

    // For each expanded node, create edges to its children
    expandedNodes.forEach((parentId) => {
      if (!visibleNodeIds.has(parentId)) return;

      // Verify parent node exists
      const parentNode = getKnowledgeById(parentId);
      if (!parentNode) return;

      // Find all children (nodes that have this parent as their related)
      knowledges.forEach((childNode) => {
        if (
          childNode.related === parentId &&
          visibleNodeIds.has(childNode.id) &&
          childNode.id !== parentId // Prevent self-loops
        ) {
          const edgeKey = `${parentId}-${childNode.id}`;

          if (!edgeSet.has(edgeKey)) {
            edgesList.push({
              id: edgeKey,
              source: parentId,
              target: childNode.id,
              type: 'default',
              animated: true,
              style: { stroke: '#555' },
            });
            edgeSet.add(edgeKey);
          }
        }
      });
    });

    return edgesList;
  }, [visibleNodeIds, expandedNodes]);

  /**
   * Core layout calculation effect: Runs whenever visible nodes or expansion state changes.
   *
   * Flow:
   * 1. Filter visible nodes and track which are new (for animation)
   * 2. Calculate root node positions (horizontally spaced)
   * 3. Convert knowledge nodes to d3-force format with initial positions and hierarchy metadata
   * 4. Build d3-force links from React Flow edges
   * 5. Run force simulation to calculate final positions
   * 6. On simulation end: store positions, convert to React Flow format, trigger animations
   *
   * The simulation runs asynchronously, so we wait for the 'end' event before updating React state.
   * Previous positions are preserved for smooth transitions when nodes move.
   */
  useEffect(() => {
    const visibleNodes = knowledges.filter((node) =>
      visibleNodeIds.has(node.id)
    );

    if (visibleNodes.length === 0) {
      setNodes([]);
      setEdges([]);
      previouslyVisibleRef.current = new Set();
      return;
    }

    const currentlyVisible = new Set(visibleNodes.map((n) => n.id));
    const newNodesSet = new Set<string>();
    visibleNodes.forEach((node) => {
      if (!previouslyVisibleRef.current.has(node.id)) {
        newNodesSet.add(node.id);
      }
    });

    const rootNodes = visibleNodes.filter((n) => n.category === 'root');
    const rootPositions = calculateRootPositions(rootNodes);

    const d3Nodes: D3Node[] = visibleNodes.map((node) => {
      const position = calculateNodePosition(node, {
        visibleNodeIds,
        visibleNodes,
        rootPositions,
        previousPositions: previousPositionsRef.current,
        parentNodeMap: parentNodeMap.current,
      });

      const isRoot = node.category === 'root';
      const hubNode = isRoot ? null : findHubNode(node.id, visibleNodeIds);

      return {
        id: node.id,
        category: node.category,
        x: position.initialX,
        y: position.initialY,
        targetX: position.targetX,
        parentRoot: isRoot
          ? node.id
          : findRootForNode(node.id, visibleNodeIds) || undefined,
        hubNode: hubNode || undefined,
      };
    });

    const d3Links: SimulationLinkDatum<D3Node>[] = flowEdges.map((edge) => {
      const source = d3Nodes.find((n) => n.id === edge.source);
      const target = d3Nodes.find((n) => n.id === edge.target);
      if (!source || !target) {
        throw new Error(`Invalid edge: ${edge.source} -> ${edge.target}`);
      }
      return { source, target };
    });

    const simulation = createForceSimulation(d3Nodes, d3Links, {
      d3Nodes,
      rootPositions,
      previousPositions: previousPositionsRef.current,
      parentNodeMap: parentNodeMap.current,
    });

    simulation.on('end', () => {
      d3Nodes.forEach((d3Node) => {
        if (d3Node.x !== undefined && d3Node.y !== undefined) {
          previousPositionsRef.current.set(d3Node.id, {
            x: d3Node.x,
            y: d3Node.y,
          });
        }
      });

      const reactFlowNodes = d3Nodes.map((d3Node) => {
        const knowledgeNode = knowledges.find((n) => n.id === d3Node.id)!;
        // Count children: nodes that have this node as their related parent
        const relatedCount = knowledges.filter(
          (n) => n.related === d3Node.id
        ).length;

        return {
          id: d3Node.id,
          type: 'knowledgeNode',
          position: {
            x: d3Node.x ?? 0,
            y: d3Node.y ?? 0,
          },
          data: {
            label: knowledgeNode.title,
            category: knowledgeNode.category,
            content: knowledgeNode.content,
            color: categoryColors[knowledgeNode.category],
            onClick: () => onNodeClick(d3Node.id),
            isExpanded: expandedNodes.has(d3Node.id),
            onExpand: () => handleExpand(d3Node.id),
            relatedCount,
            isNew: newNodesSet.has(d3Node.id),
          },
        };
      });

      setNodes(reactFlowNodes);
      setEdges(flowEdges);
      previouslyVisibleRef.current = currentlyVisible;

      setTimeout(() => {
        setNodes((prevNodes) =>
          prevNodes.map((node) => ({
            ...node,
            data: {
              ...node.data,
              isNew: newNodesSet.has(node.id),
            },
          }))
        );

        // Only fit view on initial load to show all root nodes
        if (isInitialLoadRef.current) {
          fitView({ padding: 0.2, duration: 300 });
          isInitialLoadRef.current = false;
        } else if (lastExpandedNodeRef.current) {
          // When a node is expanded, fit view to the expanded area (parent + children)
          const expandedNodeId = lastExpandedNodeRef.current;
          const expandedNodeIds = [
            expandedNodeId,
            ...knowledges
              .filter((n) => n.related === expandedNodeId)
              .map((n) => n.id),
          ];
          const nodesToFit = reactFlowNodes.filter((n) =>
            expandedNodeIds.includes(n.id)
          );
          if (nodesToFit.length > 0) {
            fitView({
              nodes: nodesToFit,
              padding: 0.3,
              duration: 400,
              maxZoom: 1.5,
            });
          }
          lastExpandedNodeRef.current = null;
        }
      }, 100);
    });

    return () => {
      simulation.stop();
    };
  }, [
    visibleNodeIds,
    expandedNodes,
    flowEdges,
    handleExpand,
    onNodeClick,
    fitView,
    setNodes,
    setEdges,
  ]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      connectionMode={ConnectionMode.Loose}
      nodesDraggable={false}
      minZoom={0.1}
      maxZoom={2}
      defaultEdgeOptions={{
        type: 'default',
        animated: false,
      }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        color="#444"
        gap={24}
        size={1}
        style={{ opacity: 0.2 }}
      />
      <Controls />
      <MiniMap
        nodeColor={(node) => {
          const category = node.data?.category as Knowledge['category'];
          return category ? categoryColors[category] : '#94a3b8';
        }}
        maskColor="rgba(0, 0, 0, 0.1)"
      />
    </ReactFlow>
  );
}

export function KnowledgeGraph({ onNodeClick }: KnowledgeGraphProps) {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto h-[calc(100vh-200px)] min-h-[800px] border-t border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <ReactFlowProvider>
        <LayoutFlow onNodeClick={onNodeClick} />
      </ReactFlowProvider>
    </div>
  );
}
