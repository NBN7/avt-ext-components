import {
  BadgeExample,
  CardExample,
  CheckboxExample,
  DialogExample,
  DropdownMenuExample,
  InputExample,
  SelectExample,
  SwitchExample,
  TableExample,
  TextareaExample,
  TimelineExample,
  TooltipExample,
} from "@/components/examples";
import { Separator } from "@/components/ui/separator";

export const ComponentsSection = () => {
  return (
    <div className="mt-8 flex min-h-screen w-full flex-col gap-6 rounded-lg bg-white p-4 text-black">
      <InputExample />
      <TextareaExample />
      <SelectExample />
      <SwitchExample />
      <CheckboxExample />
      <DialogExample />
      <Separator />
      <BadgeExample />
      <TimelineExample />
      <CardExample />
      <TooltipExample />
      <TableExample />
      <DropdownMenuExample />
    </div>
  );
};
