"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { motion } from "motion/react";
import Image from "next/image";
import { CardBackground } from "./card-background";
import { ProjectTechBadge } from "./project-tech-badge";
import { ProjectLinks } from "./project-links";

interface Props {
  project: {
    id: number;
    title: string;
    info_es: string;
    info_en: string;
    image: string;
    demo?: string;
    github: string;
    techstack?: string[];
  };
}

const ProjectCard = ({ project }: Props) => {
  const { language } = useContext(LanguageContext);
  const { title, info_es, info_en, image, demo, github, techstack } = project;

  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.3,
      }}
      className="overflow-hidden transition-all duration-500 w-full relative group h-full rounded-2xl flex flex-col shadow-xl"
    >
      <CardBackground />
      <div className="absolute inset-0 bg-surface-container/40 group-hover:bg-surface-container/60 dark:bg-surface-container/20 dark:group-hover:bg-surface-container/30 transition-all duration-500 rounded-2xl" />

      <div className="relative h-56 overflow-hidden z-10 rounded-2xl">
        <div className="absolute inset-0 transition-all duration-500">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover scale-105 group-hover:scale-110 brightness-95 dark:brightness-90 group-hover:brightness-100 transition-all duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent dark:from-black/70 dark:via-black/20 dark:to-transparent" />
      </div>

      <div className="relative z-10 p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground drop-shadow-lg">
            {title}
          </h3>
          <p className="text-base text-foreground/90 leading-relaxed drop-shadow-md">
            {language === "ES" ? info_es : info_en}
          </p>
        </div>
        {techstack && <ProjectTechBadge techstack={techstack} />}
        <ProjectLinks demo={demo} github={github} />
      </div>
    </motion.div>
  );
};
export { ProjectCard };
