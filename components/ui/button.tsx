"use client";

import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  className,
  children,
  onClick,
  variant = "primary",
}: Props) => {
  return (
    <button
      className={`group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-4 md:px-6 text-primary-foreground font-semibold my-2 *:z-10 cursor-pointer ${
        variant === "primary"
          ? "bg-primary text-primary-foreground primary-hover"
          : "bg-secondary text-secondary-foreground secondary-hover"
      } ${className}`}
      onClick={onClick ? onClick : undefined}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };
