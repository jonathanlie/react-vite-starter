import { Knowledge } from '@/types/knowledge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProficiencyScore } from './ProficiencyScore';

interface KnowledgeListItemProps {
  node: Knowledge;
  onClick?: (nodeId: string) => void;
}

export function KnowledgeListItem({ node, onClick }: KnowledgeListItemProps) {
  const handleClick = () => {
    onClick?.(node.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Card
      role="button"
      tabIndex={0}
      className="knowledge-card cursor-pointer border-0 text-left transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_12px_0_hsla(0,0%,0%,0.3)] shadow-[0_2px_8px_0_hsla(0,0%,0%,0.15)] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] flex flex-col h-[300px]"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader className="p-6 pb-4 shrink-0">
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="text-xl md:text-2xl font-bold text-[#E0E0E0] dark:text-[#E0E0E0] leading-tight">
            {node.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm md:text-base text-[#B0B0B0] dark:text-[#B0B0B0] leading-relaxed mt-2">
          {node.content}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-6 pt-0 mt-auto flex flex-col gap-3">
        {node.tags && node.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {node.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-transparent border-[#2A2A2A] text-[#B0B0B0] rounded-md px-2 py-0.5 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {node.proficiencyScore && (
          <ProficiencyScore score={node.proficiencyScore} className="mt-auto" />
        )}
      </CardFooter>
    </Card>
  );
}
