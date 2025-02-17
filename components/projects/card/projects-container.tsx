"use client";
import { useContext, useState } from "react";
import { ProjectsData } from "@/utils/projects-data";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LanguageContext } from "@/context/language-context";
import { MainTechFilter } from "./main-tech-filter";

const ProjectsContainer = () => {
  const { texts } = useContext(LanguageContext);

  const sortedProjects = ProjectsData.slice().sort((a, b) => b.id - a.id);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(2);
  const [projects, setProjects] = useState(sortedProjects);

  const handleOnClick = () => {
    setCurrentProjectIndex((prevIndex) => prevIndex + 2);
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
    <div className="flex flex-col justify-center gap-6">
      <div>
        <MainTechFilter onClick={handleFilterProjects} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, currentProjectIndex).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
          >
            <ProjectCard project={project} />{" "}
          </motion.div>
        ))}
      </div>
      {currentProjectIndex < projects.length && (
        <Button onClick={handleOnClick} className="md:w-1/4 mx-auto flex">
          {texts.projects.button}
        </Button>
      )}
    </div>
  );
};
export { ProjectsContainer };
