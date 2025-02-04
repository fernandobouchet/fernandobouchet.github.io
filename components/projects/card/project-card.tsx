"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "../../ui/morphing-dialog";
import { ProjectTechBadge } from "./project-tech-badge";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { ButtonLink } from "@/components/ui/button-link";
import { Button } from "@/components/ui/button";
import { CardImage } from "./card-image";

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
  const { texts, language } = useContext(LanguageContext);

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "24px",
        }}
        className="flex max-w-lg flex-col overflow-hidden bg-card text-card-foreground border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 h-full"
      >
        <CardImage src={project.image} alt={project.title} />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <MorphingDialogTitle className="text-card-foreground text-xl">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-2">
              {language === "EN" ? project.info_en : project.info_es}
            </MorphingDialogSubtitle>
          </div>
        </div>
        <div className="w-full flex p-2">
          <Button
            className="ml-auto"
            aria-label="Open dialog"
            variant="secondary"
          >
            {texts.projects.info_button}
          </Button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden bg-card text-card-foreground sm:w-[500px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <MorphingDialogImage
            src={project.image}
            alt={project.title}
            className="h-full lg:h-72 object-cover object-center"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-zinc-700 dark:text-zinc-400">
                {language === "EN" ? project.info_en : project.info_es}
              </p>
            </MorphingDialogDescription>
            <ProjectTechBadge techstack={project.techstack} />
            <div className="w-full flex justify-evenly">
              <ButtonLink link={project.github} icon={<FaGithub />}>
                {texts.projects.repo}
              </ButtonLink>
              <ButtonLink link={project.demo} icon={<LuExternalLink />}>
                Demo
              </ButtonLink>
            </div>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};
export { ProjectCard };
