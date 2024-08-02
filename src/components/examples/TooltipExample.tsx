import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const TooltipExample = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="md:w-40">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip Example</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
