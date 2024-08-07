import { TableExample } from '@/components/examples/TableExample';
import { InputsExample } from '@/components/examples/InputsExample';
import { TogglesExample } from '@/components/examples/ToggleExample';
import { ButtonsExample } from '@/components/examples/ButtonsExample';
import { BadgesExample } from '@/components/examples/BadgesExample';
import { CardExample } from '@/components/examples/CardExample';
import { TimelineExample } from '@/components/examples/TimelineExample';
import { UserInteractiveExample } from '@/components/examples/UserInteractiveExample';

import { Separator } from '@/components/ui/separator';
import { AccordionExample } from './examples/AccordionExample';

export const ComponentsSection = () => {
  return (
    <div className="mt-8 flex min-h-screen w-full flex-col items-center rounded-lg bg-white p-4 text-black">
      <div className="flex w-full flex-col gap-6 sm:max-w-2xl">
        <InputsExample />

        <Separator />

        <TogglesExample />

        <Separator />

        <ButtonsExample />

        <Separator />

        <BadgesExample />

        <Separator />

        <UserInteractiveExample />

        <Separator />

        <CardExample />
        <TimelineExample />

        <Separator />

        <AccordionExample />
        <TableExample />

        <Separator />
      </div>
    </div>
  );
};
