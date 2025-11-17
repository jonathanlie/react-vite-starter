import { KnowledgeNode } from '@/types/knowledge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface KnowledgeListItemProps {
  node: KnowledgeNode;
  onClick?: (nodeId: string) => void;
}

export function KnowledgeListItem({ node, onClick }: KnowledgeListItemProps) {
  const handleClick = () => {
    onClick?.(node.id);
  };

  return (
    <Card
      className="cursor-pointer bg-gray-50 dark:bg-gray-800 transition-shadow hover:shadow-md"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-xl">{node.title}</CardTitle>
        <CardDescription>{node.content}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{node.category}</Badge>
          {node.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {node.level && (
        <CardFooter>
          <Badge variant="default">{node.level}</Badge>
        </CardFooter>
      )}
    </Card>
  );
}
