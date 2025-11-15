import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  SimulationLinkDatum,
} from 'd3-force';
import { D3Node } from './knowledgeGraphTypes';
import { LAYOUT_CONSTANTS, categoryFocalPoints } from './knowledgeGraphConfig';
import { knowledgeNodes } from '@/data/knowledgeNodes';

interface ForceContext {
  d3Nodes: D3Node[];
  rootPositions: Map<string, { x: number; y: number }>;
  previousPositions: Map<string, { x: number; y: number }>;
  parentNodeMap: Map<string, string>;
}

/**
 * Shorter link distances create tighter clusters. Relationship hierarchy:
 * hub-child < sibling < root-child < other
 */
function calculateLinkDistance(link: SimulationLinkDatum<D3Node>): number {
  const source = link.source as D3Node;
  const target = link.target as D3Node;

  const isParentChild =
    (source.category === 'root' && target.parentRoot === source.id) ||
    (target.category === 'root' && source.parentRoot === target.id);

  const isHubChild =
    source.hubNode === target.id ||
    target.hubNode === source.id ||
    source.id === target.hubNode ||
    target.id === source.hubNode;

  const isSibling =
    (source.hubNode && source.hubNode === target.hubNode) ||
    (source.parentRoot &&
      source.parentRoot === target.parentRoot &&
      source.hubNode === undefined &&
      target.hubNode === undefined);

  if (isParentChild) return 180;
  if (isHubChild) return 120;
  if (isSibling) return 140;
  return 220;
}

/**
 * Priority system for X positioning: direct parent > hub > root > category focal point.
 * Fallback to previous positions when current simulation hasn't calculated parent position yet.
 */
function getTargetX(d: D3Node, context: ForceContext): number {
  const { d3Nodes, rootPositions, previousPositions, parentNodeMap } = context;

  const directParentId = parentNodeMap.get(d.id);
  if (directParentId) {
    const parent = d3Nodes.find((n) => n.id === directParentId);
    if (parent?.x !== undefined) {
      return parent.x;
    }
    const parentPos = previousPositions.get(directParentId);
    if (parentPos) {
      return parentPos.x;
    }
    const parentKnowledgeNode = knowledgeNodes.find(
      (n) => n.id === directParentId
    );
    if (
      parentKnowledgeNode?.category === 'root' &&
      rootPositions.has(directParentId)
    ) {
      return rootPositions.get(directParentId)!.x;
    }
  }

  if (d.hubNode) {
    const hub = d3Nodes.find((n) => n.id === d.hubNode);
    if (hub?.x !== undefined) {
      return hub.x;
    }
  }

  if (d.targetX !== undefined) {
    return d.targetX;
  }

  return categoryFocalPoints[d.category] ?? LAYOUT_CONSTANTS.CENTER_X;
}

/**
 * Force strength determines how strongly nodes are pulled toward target X.
 * Higher values create tighter clusters but may conflict with other forces.
 */
function getForceXStrength(
  d: D3Node,
  parentNodeMap: Map<string, string>
): number {
  if (parentNodeMap.has(d.id)) return 0.5;
  if (d.hubNode) return 0.6;
  if (d.targetX !== undefined) return 0.3;
  return 0.1;
}

/**
 * Y positioning prioritizes placing children below parents to create hierarchical flow.
 * Offset values (100, 50, 120) create vertical spacing between hierarchy levels.
 */
function getTargetY(d: D3Node, context: ForceContext): number {
  const { d3Nodes, rootPositions, previousPositions, parentNodeMap } = context;

  const directParentId = parentNodeMap.get(d.id);
  if (directParentId) {
    const parent = d3Nodes.find((n) => n.id === directParentId);
    let parentY: number | undefined;

    if (parent?.y !== undefined) {
      parentY = parent.y;
    } else {
      const parentPos = previousPositions.get(directParentId);
      if (parentPos) {
        parentY = parentPos.y;
      } else {
        const parentKnowledgeNode = knowledgeNodes.find(
          (n) => n.id === directParentId
        );
        if (
          parentKnowledgeNode?.category === 'root' &&
          rootPositions.has(directParentId)
        ) {
          parentY = rootPositions.get(directParentId)!.y;
        }
      }
    }

    if (parentY !== undefined) {
      return parentY + 100;
    }
  }

  if (d.hubNode) {
    const hub = d3Nodes.find((n) => n.id === d.hubNode);
    if (hub?.y !== undefined) {
      return hub.y + 50;
    }
  }

  if (d.parentRoot && d.category !== 'root') {
    const parentPos = rootPositions.get(d.parentRoot);
    if (parentPos) {
      return parentPos.y + 120;
    }
  }

  return LAYOUT_CONSTANTS.CENTER_Y;
}

function getForceYStrength(
  d: D3Node,
  parentNodeMap: Map<string, string>
): number {
  if (parentNodeMap.has(d.id)) return 0.4;
  if (d.hubNode) return 0.4;
  if (d.parentRoot && d.category !== 'root') return 0.2;
  return 0.05;
}

/**
 * Configures d3-force simulation with multiple forces:
 * - charge: repulsion between nodes (negative = repulsion)
 * - link: attraction along edges (shorter distances = tighter clusters)
 * - collide: prevents node overlap
 * - categoryX/Y: pulls nodes toward hierarchical positions
 * - center: weak centering to prevent drift
 *
 * alphaDecay and velocityDecay control simulation cooling (how quickly it settles).
 */
export function createForceSimulation(
  d3Nodes: D3Node[],
  d3Links: SimulationLinkDatum<D3Node>[],
  context: ForceContext
) {
  return forceSimulation<D3Node>(d3Nodes)
    .force('charge', forceManyBody<D3Node>().strength(-1500))
    .force(
      'link',
      forceLink<D3Node, SimulationLinkDatum<D3Node>>(d3Links)
        .id((d) => d.id)
        .distance(calculateLinkDistance)
        .strength(0.3)
    )
    .force(
      'collide',
      forceCollide<D3Node>(LAYOUT_CONSTANTS.NODE_RADIUS * 2 + 15).strength(1.0)
    )
    .force(
      'categoryX',
      forceX<D3Node>((d) => getTargetX(d, context)).strength((d) =>
        getForceXStrength(d, context.parentNodeMap)
      )
    )
    .force(
      'categoryY',
      forceY<D3Node>((d) => getTargetY(d, context)).strength((d) =>
        getForceYStrength(d, context.parentNodeMap)
      )
    )
    .force(
      'center',
      forceCenter(
        LAYOUT_CONSTANTS.CENTER_X,
        LAYOUT_CONSTANTS.CENTER_Y
      ).strength(0.02)
    )
    .alphaDecay(0.99)
    .velocityDecay(0.6);
}
