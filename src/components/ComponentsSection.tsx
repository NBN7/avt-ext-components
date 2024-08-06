import { Separator } from '@/components/ui/separator';
import { TableExample } from './sections/TableExample';

import { InputsExample } from './sections/InputsExample';
import { ToggleExample } from './sections/ToggleExample';
import { ButtonsExample } from './sections/ButtonsExample';
import { BadgesExample } from './sections/BadgesExample';
import { CardExample } from './sections/CardExample';
import { TimelineExample } from './sections/TimelineExample';

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
