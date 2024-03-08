import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-td-black text-primary-foreground hover:bg-primary/90",
        beige:
          "bg-td-beige text-td-black border-td-black border hover:bg-td-black hover:text-td-white active:bg-td-white active:text-td-black",
        daun: "bg-td-daun text-td-white hover:bg-td-black hover:text-td-white active:bg-td-black/70 active:text-td-white",
        whitenoborder:
          "bg-td-white text-td-black hover:bg-td-daun hover:text-td-white active:bg-td-daun/70 active:text-td-white",
        blackwhiteborder:
          "bg-td-black text-td-white border-td-white border hover:bg-td-white hover:text-td-black active:bg-td-white/70 active:text-td-black",
        primary:
          "bg-td-black text-td-white hover:bg-td-daun active:bg-td-daun/80",
        transparent:
          "bg-transparent text-td-black border border-td-black hover:bg-td-black hover:text-td-white active:bg-td-white active:text-td-black",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-td-white text-td-black hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "rounded-full bg-none hover:bg-primary",
        clear:
          "bg-transparent text-td-black border-2 border-td-black text-xl active:bg-td-black active:text-td-white focus:text-td-black focus:bg-transparent",
        black:
          "text-xl font-medium text-td-white bg-td-black active:bg-td-white active:border-2 active:border-td-black active:text-td-black",
      },
      size: {
        default: "h-[52px] rounded-full px-4",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8",
        icon: "px-2 h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
