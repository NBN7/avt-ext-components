import { Badge } from '../ui/badge';

export const BadgesExample = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  );
};
