import { KnowledgeNode } from '@/types/knowledge';

export const categoryColors: Record<KnowledgeNode['category'], string> = {
  root: '#6366f1',
  backend: '#3b82f6',
  frontend: '#10b981',
  devops: '#f59e0b',
  database: '#8b5cf6',
  tooling: '#ef4444',
  concept: '#6b7280',
};

/**
 * Target X coordinates for each category to create visual clusters.
 * Root nodes override this with calculated positions.
 */
export const categoryFocalPoints: Record<KnowledgeNode['category'], number> = {
  root: 400,
  frontend: 300,
  backend: 500,
  devops: 450,
  database: 550,
  tooling: 350,
  concept: 400,
};

export const LAYOUT_CONSTANTS = {
  NODE_RADIUS: 45,
  ROOT_SPACING: 500,
  CENTER_X: 400,
  CENTER_Y: 300,
  ROOT_Y: 150,
  PARENT_CHILD_DISTANCE: 100,
  PARENT_CHILD_Y_OFFSET: 80,
  HUB_DISTANCE: 70,
  ROOT_CHILD_DISTANCE: 120,
  ROOT_CHILD_Y_OFFSET: 100,
  FAN_ANGLE_RANGE: (Math.PI * 2) / 3,
} as const;

export function getRootNodes(nodes: KnowledgeNode[]): string[] {
  return nodes
    .filter((node) => node.category === 'root')
    .map((node) => node.id);
}
