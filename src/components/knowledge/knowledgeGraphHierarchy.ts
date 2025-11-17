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

  // Check if any related node is a root
  for (const relatedId of node.related) {
    if (visibleNodeIds.has(relatedId)) {
      const relatedNode = knowledges.find((n) => n.id === relatedId);
      if (relatedNode?.category === 'root') {
        return relatedId;
      }
      // Recursively check related nodes
      const root = findRootForNode(relatedId, visibleNodeIds, visited);
      if (root) return root;
    }
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

  // Strategy 1: Check if any related node is a hub (has multiple visible connections)
  // This catches cases like CSS Modules (connects to SASS, SCSS, frontend)
  for (const relatedId of node.related) {
    if (visibleNodeIds.has(relatedId)) {
      const relatedNode = knowledges.find((n) => n.id === relatedId);
      if (!relatedNode || relatedNode.category === 'root') continue;

      // Count how many visible non-root nodes this related node connects to
      const nonRootConnections = relatedNode.related.filter((id) => {
        if (!visibleNodeIds.has(id)) return false;
        const connectedNode = knowledges.find((n) => n.id === id);
        return connectedNode && connectedNode.category !== 'root';
      });

      // If it connects to 2+ non-root nodes, it's a hub
      // Lowered threshold from 3 to 2 to catch CSS Modules case
      if (nonRootConnections.length >= 2) {
        return relatedId;
      }
    }
  }

  // Strategy 2: Check if this node itself is a hub (connects to multiple siblings)
  // Count visible non-root connections
  const visibleConnections = node.related.filter((id) =>
    visibleNodeIds.has(id)
  );
  const nonRootConnections = visibleConnections.filter((id) => {
    const relatedNode = knowledges.find((n) => n.id === id);
    return relatedNode && relatedNode.category !== 'root';
  });

  // If this node connects to 2+ non-root nodes, check for mutual relationships
  if (nonRootConnections.length >= 2) {
    // Check if at least 2 of those connections are mutual (both nodes reference each other)
    let mutualCount = 0;
    for (const relatedId of nonRootConnections) {
      const relatedNode = knowledges.find((n) => n.id === relatedId);
      if (relatedNode?.related.includes(nodeId)) {
        mutualCount++;
      }
    }
    // If 2+ mutual connections, this node acts as a hub for clustering
    if (mutualCount >= 2) {
      return nodeId; // This node is the hub
    }
  }

  // Strategy 3: Find nodes that share a common connection (siblings)
  // If node A connects to node B, and node B connects to node C, and node A also connects to node C,
  // then node B is likely a hub
  for (const relatedId of node.related) {
    if (visibleNodeIds.has(relatedId)) {
      const relatedNode = knowledges.find((n) => n.id === relatedId);
      if (!relatedNode || relatedNode.category === 'root') continue;

      // Check if this related node connects to other nodes that the current node also connects to
      const sharedConnections = node.related.filter(
        (id) => relatedNode.related.includes(id) && visibleNodeIds.has(id)
      );
      // If they share 1+ non-root connections, the related node is likely a hub
      const sharedNonRoot = sharedConnections.filter((id) => {
        const sharedNode = knowledges.find((n) => n.id === id);
        return sharedNode && sharedNode.category !== 'root';
      });
      if (sharedNonRoot.length >= 1) {
        // Use the node with more connections as the hub
        const nodeConnections = node.related.filter((id) =>
          visibleNodeIds.has(id)
        ).length;
        const relatedConnections = relatedNode.related.filter((id) =>
          visibleNodeIds.has(id)
        ).length;
        return relatedConnections >= nodeConnections ? relatedId : nodeId;
      }
    }
  }

  return null;
}
