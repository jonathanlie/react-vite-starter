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
  const isRoot = node.category === 'root';

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
      const parentKnowledge = knowledges.find(
        (n) => n.id === directParentId
      );
      if (
        parentKnowledge?.category === 'root' &&
        rootPositions.has(directParentId)
      ) {
        parentPos = rootPositions.get(directParentId)!;
      }
    }

    if (parentPos) {
      const parentNode = knowledges.find((n) => n.id === directParentId);
      if (parentNode) {
        const siblings = parentNode.related
          .filter((id) => visibleNodeIds.has(id))
          .map((id) => knowledges.find((n) => n.id === id))
          .filter((n): n is Knowledge => n !== undefined);

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
        if (n.category === 'root' || n.id === hubNode) return false;
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
      if (n.category === 'root') return false;
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
 * Positions root nodes horizontally centered with equal spacing.
 * This creates a clear visual separation between different knowledge domains.
 */
export function calculateRootPositions(
  rootNodes: Knowledge[]
): Map<string, { x: number; y: number }> {
  const rootPositions = new Map<string, { x: number; y: number }>();

  rootNodes.forEach((rootNode, index) => {
    const startX =
      LAYOUT_CONSTANTS.CENTER_X -
      ((rootNodes.length - 1) * LAYOUT_CONSTANTS.ROOT_SPACING) / 2;
    const x = startX + index * LAYOUT_CONSTANTS.ROOT_SPACING;
    const y = LAYOUT_CONSTANTS.ROOT_Y;

    rootPositions.set(rootNode.id, { x, y });
  });

  return rootPositions;
}
