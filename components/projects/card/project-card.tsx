"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "../../ui/morphing-dialog";
import { ProjectTechBadge } from "./project-tech-badge";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { LuExternalLink } from "react-icons/lu";
import { ButtonLink } from "@/components/ui/button-link";
import { CardImage } from "./card-image";
import { ButtonGithub } from "@/components/ui/button-github";

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

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="flex max-w-lg flex-col overflow-hidden bg-card text-card-foreground h-full rounded-3xl transition-colors text-opacity-75 hover:bg-card/50 dark:hover:bg-card/85">
        <CardImage src={project.image} alt={project.title} />
        <div className="flex grow flex-row items-end justify-between p-4">
          <div>
            <MorphingDialogTitle className="text-xl font-semibold">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogDescription className="line-clamp-2">
              {language === "EN" ? project.info_en : project.info_es}
            </MorphingDialogDescription>
            <ProjectTechBadge techstack={project.techstack} length={3} />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative flex h-auto flex-col overflow-hidden bg-card text-card-foreground w-full max-w-xl m-4 rounded-3xl">
          <MorphingDialogImage
            src={project.image}
            alt={project.title}
            className="h-72 object-cover object-center rounded-b-3xl scale-105"
          />
          <div className="p-4">
            <MorphingDialogTitle className="text-2xl font-semibold">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogDescription>
              <p className="mt-2">
                {language === "EN" ? project.info_en : project.info_es}
              </p>
            </MorphingDialogDescription>
            <ProjectTechBadge techstack={project.techstack} />
            <div className="w-full flex justify-end gap-4">
              <ButtonGithub link={project.github}>GitHub</ButtonGithub>
              <ButtonLink link={project.demo} icon={<LuExternalLink />}>
                Demo
              </ButtonLink>
            </div>
          </div>
          <MorphingDialogClose className="text-accent dark:text-accent-foreground cursor-pointer" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};
export { ProjectCard };
