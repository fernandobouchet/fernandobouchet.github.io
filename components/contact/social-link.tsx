"use client";

import { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  label: string;
}

export const SocialLink = ({ href, icon, label }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2 px-4 py-2 rounded-xl
        transition-colors duration-300
        
        /* 1. Color Global Sólido */
        text-foreground
        
        /* 2. Hover Optimizado para Light/Dark */
        /* Usa el color primario con transparencia (se ve bien en blanco y en negro) */
        hover:bg-primary/10 hover:text-primary
      "
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};
