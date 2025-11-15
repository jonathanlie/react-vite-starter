import { SimulationNodeDatum } from 'd3-force';
import { KnowledgeNode } from '@/types/knowledge';

export interface D3Node extends SimulationNodeDatum {
  id: string;
  category: KnowledgeNode['category'];
  targetX?: number;
  parentRoot?: string;
  hubNode?: string;
}

export interface KnowledgeGraphProps {
  onNodeClick: (nodeId: string) => void;
}
