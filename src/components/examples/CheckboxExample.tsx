import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const CheckboxExample = () => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox id="checkbox-example" />
      <Label htmlFor="checkbox-example">Example checkbox</Label>
    </div>
  );
};
