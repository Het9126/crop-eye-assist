import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-bounce font-semibold",
        upload: "bg-gradient-success text-success-foreground hover:bg-success/90 shadow-medium border-2 border-transparent hover:border-accent",
        detection: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft font-semibold",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-soft",
        farmer: "bg-gradient-card text-foreground hover:shadow-medium border border-primary/20 hover:border-primary/40",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-lg px-8 text-lg",
        xl: "h-16 rounded-lg px-10 text-xl",
        icon: "h-12 w-12",
        touch: "h-14 px-8 text-lg min-w-[120px]", // Farmer-friendly touch targets
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };