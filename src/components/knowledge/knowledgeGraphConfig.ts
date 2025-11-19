import { Knowledge } from '@/types/knowledge';

export const LAYOUT_CONSTANTS = {
  NODE_RADIUS: 45,
  ROOT_SPACING: 700,
  CENTER_X: 400,
  CENTER_Y: 300,
  ROOT_Y: 150,
  PARENT_CHILD_DISTANCE: 150,
  PARENT_CHILD_Y_OFFSET: 120,
  HUB_DISTANCE: 100,
  ROOT_CHILD_DISTANCE: 180,
  ROOT_CHILD_Y_OFFSET: 150,
  FAN_ANGLE_RANGE: (Math.PI * 2) / 3,
} as const;

export function getRootNodes(nodes: Knowledge[]): string[] {
  return nodes.filter((node) => node.isRoot).map((node) => node.id);
}
