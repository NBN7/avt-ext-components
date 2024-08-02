import { Badge } from "@/components/ui/badge";

export const BadgeExample = () => {
  return (
    <div className="flex gap-2">
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  );
};
