import { TableExample } from '@/components/examples/TableExample';
import { InputsExample } from '@/components/examples/InputsExample';
import { ToggleExample } from '@/components/examples/ToggleExample';
import { ButtonsExample } from '@/components/examples/ButtonsExample';
import { BadgesExample } from '@/components/examples/BadgesExample';
import { CardExample } from '@/components/examples/CardExample';
import { TimelineExample } from '@/components/examples/TimelineExample';

import { Separator } from '@/components/ui/separator';

export const ComponentsSection = () => {
  return (
    <div className="mt-8 flex min-h-screen w-full flex-col items-center rounded-lg bg-white p-4 text-black">
      <div className="flex flex-col gap-6 sm:max-w-2xl">
        <InputsExample />

        <Separator />

        <ToggleExample />

        <Separator />

        <ButtonsExample />

        <Separator />

        <BadgesExample />

        <Separator />

        <CardExample />
        <TimelineExample />

        <Separator />

        <TableExample />

        <Separator />
      </div>
    </div>
  );
};
