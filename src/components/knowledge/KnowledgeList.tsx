import { KnowledgeNode } from '@/types/knowledge';
import { KnowledgeListItem } from './KnowledgeListItem';

interface KnowledgeListProps {
  nodes: KnowledgeNode[];
  onNodeClick?: (nodeId: string) => void;
}

export function KnowledgeList({ nodes, onNodeClick }: KnowledgeListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {nodes.map((node) => (
        <KnowledgeListItem key={node.id} node={node} onClick={onNodeClick} />
      ))}
    </div>
  );
}
