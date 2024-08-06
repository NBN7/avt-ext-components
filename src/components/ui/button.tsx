import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-disabled transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/90 text-zinc-50',
        outline: 'border border-primary text-primary',
        secondary: 'bg-zinc-100 text-primary hover:bg-neutral-100/80',
        ghost: 'text-primary hover:bg-primary/40',
        link: 'text-primary underline-offset-4 hover:underline',
        success: 'bg-success hover:bg-success/90 text-zinc-50',
        warning: 'bg-warning hover:bg-warning/90 text-zinc-50',
        destructive: 'bg-error hover:bg-error/90 text-zinc-50',
      },
      size: {
        default: 'h-10 p-4',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-lg px-8 py-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
