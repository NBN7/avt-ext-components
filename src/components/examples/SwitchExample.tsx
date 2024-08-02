import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const SwitchExample = () => {
  return (
    <div className="flex w-full items-center gap-12">
      <Label htmlFor="switch-example">Example switch</Label>
      <Switch id="switch-example" />
    </div>
  );
};
