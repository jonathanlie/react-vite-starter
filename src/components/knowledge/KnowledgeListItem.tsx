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
  const hasModalContent = !!node.markdownFile;
  const isClickable = hasModalContent;

  const handleClick = () => {
    if (isClickable) {
      onClick?.(node.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick();
    }
  };

  // Get category color from first tag or use default
  const categoryColor =
    node.tags && node.tags.length > 0
      ? 'rgba(120, 80, 255, 0.3)' // Primary color tint
      : 'rgba(120, 80, 255, 0.2)';

  return (
    <Card
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={`knowledge-card text-left transition-all duration-200 ease-in-out outline-none flex flex-col h-[300px] group relative ${
        isClickable
          ? 'cursor-pointer hover:-translate-y-1 focus-visible:ring-ring/50 focus-visible:ring-[3px] border-0'
          : 'cursor-default'
      }`}
      style={{
        background: isClickable
          ? 'linear-gradient(to bottom, rgba(120, 80, 255, 0.1), rgba(0, 0, 0, 0.3))' // Gradient: faint primary tint to dark
          : 'rgba(255, 255, 255, 0.02)', // Transparent or very faint background for dormant
        boxShadow: isClickable
          ? '0 2px 8px rgba(0, 0, 0, 0.3)' // Soft drop shadow
          : 'none',
        border: !isClickable ? '1px dashed #333' : 'none', // Very faint dashed line for structure if needed
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={
        isClickable
          ? (e) => {
              // Shadow gets stronger on hover
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
            }
          : (e) => {
              // Background might darken slightly for dormant
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }
      }
      onMouseLeave={
        isClickable
          ? (e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
            }
          : (e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            }
      }
    >
      {/* Category indicator bar for showcase cards */}
      {isClickable && (
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
          style={{ backgroundColor: categoryColor }}
        />
      )}
      <CardHeader className="p-6 pb-4 shrink-0">
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle
            className={`text-xl md:text-2xl font-bold leading-tight ${
              isClickable
                ? 'text-[#E0E0E0] dark:text-[#E0E0E0]'
                : 'text-[#6B7280] dark:text-[#6B7280]'
            }`}
          >
            {node.title}
          </CardTitle>
        </div>
        {isClickable ? (
          <CardDescription className="text-sm md:text-base text-[#B0B0B0] dark:text-[#B0B0B0] leading-relaxed mt-2">
            {node.content}
          </CardDescription>
        ) : (
          <div className="mt-2">
            <Badge
              variant="outline"
              className="bg-transparent border-[#2A2A2A] text-[#6B7280] rounded-md px-2 py-0.5 text-xs"
            >
              Concept
            </Badge>
          </div>
        )}
      </CardHeader>
      {isClickable && (
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
            <ProficiencyScore
              score={node.proficiencyScore}
              className="mt-auto"
            />
          )}
        </CardFooter>
      )}
      {isClickable && (
        <div className="absolute bottom-4 right-4 text-xs text-[#B0B0B0] dark:text-[#B0B0B0] opacity-0 group-hover:opacity-100 transition-opacity">
          Read Story →
        </div>
      )}
    </Card>
  );
}
