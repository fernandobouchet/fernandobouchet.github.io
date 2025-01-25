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
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "24px",
        }}
        className="flex max-w-lg flex-col overflow-hidden bg-card text-card-foreground border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover rounded-b-2xl"
        />
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
          <button
            type="button"
            className="bg-secondary text-secondary-foreground rounded-full ml-auto inline-flex py-2 px-4"
            aria-label="Open dialog"
          >
            {texts.projects.info_button}
          </button>
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
              <button className="border-2 border-secondary text-secondary-foreground px-4 py-2 rounded-full transition hover:border-primary-foreground hover:text-primary-foreground">
                <a
                  className="inline-flex items-center gap-2"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {texts.projects.repo}
                  <FaGithub />
                </a>
              </button>
              <button className="border-2 border-secondary text-secondary-foreground px-4 py-2 rounded-full transition hover:border-primary-foreground hover:text-primary-foreground">
                <a
                  className="inline-flex items-center gap-2"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                  <LuExternalLink />
                </a>
              </button>
            </div>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};
export { ProjectCard };
