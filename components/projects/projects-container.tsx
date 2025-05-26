"use client";
import { useContext } from "react";
import { ProjectsData } from "@/utils/projects-data";
import { ProjectCard } from "./card/project-card";
import { motion } from "motion/react";
import { LanguageContext } from "@/context/language-context";
import { ButtonGithub } from "@/components/ui/button-github";

const ProjectsContainer = () => {
  const { texts } = useContext(LanguageContext);

  const sortedProjects = ProjectsData.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProjects.slice(0, 6).map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>

      <ButtonGithub
        link="https://github.com/fernandobouchet?tab=repositories"
        className="md:fit mx-auto flex"
      >
        {texts.projects.githubButton}
      </ButtonGithub>
    </div>
  );
};
export { ProjectsContainer };
