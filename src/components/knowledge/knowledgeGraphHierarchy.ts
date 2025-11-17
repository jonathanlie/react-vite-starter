import { knowledges } from '@/data/knowledges';

/**
 * Find the root node that a given node is connected to
 *
 * @param nodeId - The node ID to find the root for
 * @param visibleNodeIds - Set of currently visible node IDs
 * @param visited - Set of visited nodes (for cycle detection)
 * @returns The root node ID, or null if not found
 */
export function findRootForNode(
  nodeId: string,
  visibleNodeIds: Set<string>,
  visited = new Set<string>()
): string | null {
  if (visited.has(nodeId)) return null;
  visited.add(nodeId);

  const node = knowledges.find((n) => n.id === nodeId);
  if (!node) return null;

  // If it's a root node, return it
  if (node.category === 'root') return nodeId;

  // Check if the related node is a root
  if (node.related && visibleNodeIds.has(node.related)) {
    const relatedNode = knowledges.find((n) => n.id === node.related);
    if (relatedNode?.category === 'root') {
      return node.related;
    }
    // Recursively check related node
    const root = findRootForNode(node.related, visibleNodeIds, visited);
    if (root) return root;
  }

  return null;
}

/**
 * Find intermediate hub nodes (nodes that connect multiple children)
 * These act as sub-cluster centers (e.g., "Frameworks" groups React, Angular, etc.)
 *
 * @param nodeId - The node ID to find the hub for
 * @param visibleNodeIds - Set of currently visible node IDs
 * @returns The hub node ID, or null if not found
 */
export function findHubNode(
  nodeId: string,
  visibleNodeIds: Set<string>
): string | null {
  const node = knowledges.find((n) => n.id === nodeId);
  if (!node || node.category === 'root') return null;

  // With single relationships, hub detection is simplified
  // A hub is a node that is referenced by multiple other nodes
  // Check if the related node is referenced by other visible nodes (making it a hub)
  if (node.related && visibleNodeIds.has(node.related)) {
    const relatedNode = knowledges.find((n) => n.id === node.related);
    if (relatedNode && relatedNode.category !== 'root') {
      // Count how many visible nodes reference this related node
      const referencingNodes = knowledges.filter(
        (n) =>
          n.related === node.related &&
          visibleNodeIds.has(n.id) &&
          n.id !== nodeId
      );

      // If 2+ nodes reference it, it's a hub
      if (referencingNodes.length >= 1) {
        return node.related;
      }
    }
  }

  return null;
}
