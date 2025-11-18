import { Knowledge } from '@/types/knowledge';
import { knowledges } from '@/data/knowledges';
import { LAYOUT_CONSTANTS } from './knowledgeGraphConfig';
import { findRootForNode, findHubNode } from './knowledgeGraphHierarchy';

interface PositionContext {
  visibleNodeIds: Set<string>;
  visibleNodes: Knowledge[];
  rootPositions: Map<string, { x: number; y: number }>;
  previousPositions: Map<string, { x: number; y: number }>;
  parentNodeMap: Map<string, string>;
}

/**
 * Calculates initial node positions using a priority system:
 * 1. Previous position (for smooth transitions when nodes move)
 * 2. Direct parent position (directional expansion - children appear below parent in fan pattern)
 * 3. Hub node position (sub-clustering around intermediate nodes like "Frameworks")
 * 4. Root node position (fallback to hierarchical positioning)
 * 5. Random position (last resort)
 */
export function calculateNodePosition(
  node: Knowledge,
  context: PositionContext
): { initialX: number; initialY: number; targetX?: number } {
  const {
    visibleNodeIds,
    visibleNodes,
    rootPositions,
    previousPositions,
    parentNodeMap,
  } = context;

  const existingPos = previousPositions.get(node.id);
  const isRoot = node.isRoot;

  if (existingPos) {
    return {
      initialX: existingPos.x,
      initialY: existingPos.y,
    };
  }

  if (isRoot) {
    const pos = rootPositions.get(node.id)!;
    return {
      initialX: pos.x,
      initialY: pos.y,
      targetX: pos.x,
    };
  }

  const directParentId = parentNodeMap.get(node.id);
  const parentRoot = findRootForNode(node.id, visibleNodeIds);
  const hubNode = findHubNode(node.id, visibleNodeIds);

  if (directParentId) {
    let parentPos = previousPositions.get(directParentId);
    if (!parentPos) {
      const parentKnowledge = knowledges.find((n) => n.id === directParentId);
      if (parentKnowledge?.isRoot && rootPositions.has(directParentId)) {
        parentPos = rootPositions.get(directParentId)!;
      }
    }

    if (parentPos) {
      const parentNode = knowledges.find((n) => n.id === directParentId);
      if (parentNode) {
        const siblings =
          parentNode.related && visibleNodeIds.has(parentNode.related)
            ? [knowledges.find((n) => n.id === parentNode.related)].filter(
                (n): n is Knowledge => n !== undefined
              )
            : [];

        const siblingIndex = siblings.findIndex((n) => n.id === node.id);
        const totalSiblings = siblings.length;

        if (totalSiblings > 0) {
          const startAngle = -LAYOUT_CONSTANTS.FAN_ANGLE_RANGE / 2;
          const angle =
            startAngle +
            (siblingIndex / Math.max(totalSiblings - 1, 1)) *
              LAYOUT_CONSTANTS.FAN_ANGLE_RANGE;
          const radius = LAYOUT_CONSTANTS.PARENT_CHILD_DISTANCE;

          return {
            initialX: parentPos.x + radius * Math.cos(angle),
            initialY:
              parentPos.y +
              LAYOUT_CONSTANTS.PARENT_CHILD_Y_OFFSET +
              radius * Math.sin(angle),
            targetX: parentPos.x,
          };
        }
      }
    }
  }

  if (hubNode) {
    const hubPos = previousPositions.get(hubNode);
    if (hubPos) {
      const hubSiblings = visibleNodes.filter((n) => {
        if (n.isRoot || n.id === hubNode) return false;
        return findHubNode(n.id, visibleNodeIds) === hubNode;
      });
      const siblingIndex = hubSiblings.findIndex((n) => n.id === node.id);
      const angle =
        (siblingIndex / Math.max(hubSiblings.length, 1)) * 2 * Math.PI;
      const radius = LAYOUT_CONSTANTS.HUB_DISTANCE;

      return {
        initialX: hubPos.x + radius * Math.cos(angle),
        initialY: hubPos.y + radius * Math.sin(angle),
        targetX: hubPos.x,
      };
    }
  }

  if (parentRoot && rootPositions.has(parentRoot)) {
    const parentPos = rootPositions.get(parentRoot)!;

    const childrenOfRoot = visibleNodes.filter((n) => {
      if (n.isRoot) return false;
      return findRootForNode(n.id, visibleNodeIds) === parentRoot;
    });
    const childIndex = childrenOfRoot.findIndex((n) => n.id === node.id);
    const startAngle = -LAYOUT_CONSTANTS.FAN_ANGLE_RANGE / 2;
    const angle =
      startAngle +
      (childIndex / Math.max(childrenOfRoot.length - 1, 1)) *
        LAYOUT_CONSTANTS.FAN_ANGLE_RANGE;
    const radius = LAYOUT_CONSTANTS.ROOT_CHILD_DISTANCE;

    return {
      initialX: parentPos.x + radius * Math.cos(angle),
      initialY:
        parentPos.y +
        LAYOUT_CONSTANTS.ROOT_CHILD_Y_OFFSET +
        radius * Math.sin(angle),
      targetX: parentPos.x,
    };
  }

  return {
    initialX: LAYOUT_CONSTANTS.CENTER_X + (Math.random() - 0.5) * 300,
    initialY: LAYOUT_CONSTANTS.CENTER_Y + (Math.random() - 0.5) * 200,
  };
}

/**
 * Positions root nodes in a circular arrangement around the center.
 * This creates a balanced, visually appealing layout for the knowledge domains.
 */
export function calculateRootPositions(
  rootNodes: Knowledge[]
): Map<string, { x: number; y: number }> {
  const rootPositions = new Map<string, { x: number; y: number }>();

  if (rootNodes.length === 0) {
    return rootPositions;
  }

  // Radius of the circle - adjust based on number of nodes for better spacing
  const radius = Math.max(200, rootNodes.length * 50);
  const centerX = LAYOUT_CONSTANTS.CENTER_X;
  const centerY = LAYOUT_CONSTANTS.CENTER_Y;

  rootNodes.forEach((rootNode, index) => {
    // Calculate angle for each node, evenly distributed around the circle
    // Start from top (12 o'clock) and go clockwise
    const angle = (index / rootNodes.length) * Math.PI * 2 - Math.PI / 2;

    // Calculate x and y positions on the circle
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    rootPositions.set(rootNode.id, { x, y });
  });

  return rootPositions;
}
