import { SimulationNodeDatum } from 'd3-force';
import { Knowledge } from '@/types/knowledge';

export interface D3Node extends SimulationNodeDatum {
  id: string;
  isRoot: boolean;
  targetX?: number;
  parentRoot?: string;
  hubNode?: string;
}

export interface KnowledgeGraphProps {
  onNodeClick: (nodeId: string) => void;
}
