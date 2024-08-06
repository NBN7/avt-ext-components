import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex min-w-[100px] justify-center items-center rounded-xl border border-zinc-200 px-2.5 py-0.5 text-sm font-medium transition-colors focus:outline cursor-default',
  {
    variants: {
      variant: {
        default: 'border-primary bg-primary/20 text-primary',
        success: 'border border-success bg-success/20 text-success',
        destructive: 'border border-error bg-error/20 text-error',
        warning: 'border border-warning bg-warning/20 text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
