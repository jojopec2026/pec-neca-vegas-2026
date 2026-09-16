import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-pill px-3 py-1 text-xs font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        navy: "bg-navy text-white",
        gold: "bg-gold/20 text-navy border border-gold-dark/40",
        outline: "border border-navy/20 text-navy",
        mint: "bg-mint-light text-navy border border-navy/10",
        alert: "bg-alert text-white",
      },
    },
    defaultVariants: {
      variant: "navy",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
