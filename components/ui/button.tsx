"use client";

import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`group relative inline-flex h-12 items-center text-base lg:text-lg justify-center overflow-hidden rounded-full bg-primary px-6 text-primary-foreground font-semibold my-2 *:z-10 ${className}`}
      onClick={onClick ? onClick : undefined}
    >
      <span className="absolute h-0 w-0 rounded-full bg-card transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
      <span>{children}</span>
    </button>
  );
};

export { Button };
