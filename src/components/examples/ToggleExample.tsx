import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export const TogglesExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center gap-4">
        <Label htmlFor="switch-example">Example switch</Label>
        <Switch id="switch-example" />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-example" />
        <Label htmlFor="checkbox-example">Example checkbox</Label>
      </div>
    </div>
  );
};
