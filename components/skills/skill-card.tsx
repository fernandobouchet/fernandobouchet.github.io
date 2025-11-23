"use client";

import { motion } from "motion/react";
import { CardBackground } from "../projects/card/card-background";
import { ElementType, ReactNode } from "react";

export type SkillItem = string | { name: string; icon: ElementType };

interface Props {
  title: string;
  icon: ReactNode;
  items: SkillItem[];
}

const SkillCard = ({ title, icon, items }: Props) => {
  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.4,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-50px" }}
      className="
        relative group flex flex-col h-full overflow-hidden
        rounded-4xl p-6
        backdrop-blur-2xl
        shadow-lg shadow-black/5
        transition-all duration-500 
      "
    >
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <CardBackground />
      </div>

      <div className="relative z-10 mb-6 flex items-center gap-4">
        <div
          className="
          flex items-center justify-center w-12 h-12 rounded-2xl
          bg-primary/10 text-primary
          group-hover:bg-primary group-hover:text-primary-foreground
          group-hover:shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)]
          transition-all duration-300
        "
        >
          <span className="text-2xl">{icon}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground/90 tracking-tight">
          {title}
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 justify-center">
        {items.map((item, index) => {
          const isObject = typeof item === "object";
          const name = isObject ? item.name : item;
          const Icon = isObject ? item.icon : null;

          return (
            <div
              key={index}
              className="
                flex items-center gap-2 px-3 py-1.5 rounded-xl
                text-sm font-medium transition-colors duration-200
                bg-white/40 dark:bg-white/5 
                text-secondary-foreground
                 border border-white/5
                cursor-default select-none
              "
            >
              {Icon && <Icon className="w-4 h-4 text-primary opacity-90" />}
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { SkillCard };
