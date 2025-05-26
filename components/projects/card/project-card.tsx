"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { LuExternalLink } from "react-icons/lu";
import { ButtonGithub } from "@/components/ui/button-github";
import { motion } from "motion/react";
import Image from "next/image";
import { CardImage } from "./card-image";
import { ProjectTechBadge } from "./project-tech-badge";
import { ButtonLink } from "@/components/ui/button-link";

interface Props {
  project: {
    id: number;
    title: string;
    info_es: string;
    info_en: string;
    image: string;
    demo: string;
    github: string;
    techstack: string[];
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
      className="overflow-hidden transition-all duration-500 w-full relative group h-full shadow-[0px_4px_16px_rgba(0,0,0,0.04),0px_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0px_16px_32px_rgba(0,0,0,0.08),0px_8px_16px_rgba(0,0,0,0.04)] dark:shadow-[0px_4px_16px_rgba(0,0,0,0.06),0px_2px_8px_rgba(0,0,0,0.04)] dark:group-hover:shadow-[0px_16px_32px_rgba(0,0,0,0.12),0px_8px_16px_rgba(0,0,0,0.08)] rounded-2xl flex flex-col"
    >
      <CardImage src={image} alt={title} />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-surface-container/40 group-hover:bg-surface-container/60 dark:bg-surface-container/20 dark:group-hover:bg-surface-container/30 transition-all duration-500 rounded-2xl" />

      <div className="relative h-56 overflow-hidden z-10 rounded-2xl">
        <div className="absolute inset-0 backdrop-blur-[1px] group-hover:backdrop-blur-[0px] transition-all duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-100 group-hover:scale-105 brightness-95 dark:brightness-90 group-hover:brightness-100 transition-all duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/70 dark:via-black/20 dark:to-transparent" />
      </div>

      <div className="relative z-10 p-4">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          {title}
        </h3>
        <p className="text-base text-white/90 leading-relaxed drop-shadow-md">
          {language === "ES" ? info_es : info_en}
        </p>

        <ProjectTechBadge techstack={techstack} length={3} />
      </div>

      <div className="relative z-10 flex gap-8 p-4 mt-auto">
        {demo && (
          <ButtonLink link={demo} icon={<LuExternalLink />}>
            Demo
          </ButtonLink>
        )}

        {github && <ButtonGithub link={github}>Github</ButtonGithub>}
      </div>
    </motion.div>
  );
};
export { ProjectCard };
