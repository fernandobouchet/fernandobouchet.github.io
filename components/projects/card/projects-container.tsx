"use client";
import { useContext, useRef, useState } from "react";
import { ProjectsData } from "@/utils/projects-data";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LanguageContext } from "@/context/language-context";
import { MainTechFilter } from "./main-tech-filter";
import { ButtonGithub } from "@/components/ui/button-github";
import { useIsMobile } from "@/hooks/useMobile";

const ProjectsContainer = () => {
  const { texts } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  const lastVisibleProjectRef = useRef<HTMLDivElement | null>(null);

  const sortedProjects = ProjectsData.slice().sort((a, b) => b.id - a.id);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(2);
  const [projects, setProjects] = useState(sortedProjects);

  const handleOnClick = () => {
    setCurrentProjectIndex((prev) => {
      const nextIndex = prev + 2;
      setTimeout(() => {
        lastVisibleProjectRef.current?.scrollIntoView({
          behavior: "smooth",
          block: `${isMobile ? "nearest" : "center"}`,
        });
      }, 100);

      return nextIndex;
    });
  };

  const handleFilterProjects = (technology: string) => {
    setCurrentProjectIndex(2);
    setProjects(
      technology === "all"
        ? sortedProjects
        : sortedProjects.filter((project) =>
            project.techstack.includes(technology)
          )
    );
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <MainTechFilter onClick={handleFilterProjects} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.slice(0, currentProjectIndex).map((project, index) => {
          const isLastVisible = index === currentProjectIndex - 1;
          return (
            <motion.div
              key={project.id}
              ref={isLastVisible ? lastVisibleProjectRef : null}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
      {currentProjectIndex < projects.length ? (
        <Button onClick={handleOnClick} className="md:w-1/4 mx-auto flex">
          {texts.projects.button}
        </Button>
      ) : (
        <ButtonGithub
          link="https://github.com/fernandobouchet?tab=repositories"
          className="md:fit mx-auto flex"
        >
          {texts.projects.githubButton}
        </ButtonGithub>
      )}
    </div>
  );
};
export { ProjectsContainer };
