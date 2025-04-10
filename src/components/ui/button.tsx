import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "px-4 py-2 rounded text-sm font-medium transition";

    const variants = {
      default: "bg-white text-black hover:bg-gray-200",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      outline: "border border-white text-white hover:bg-white hover:text-black",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
