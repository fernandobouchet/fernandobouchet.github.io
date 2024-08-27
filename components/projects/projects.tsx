"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "@/context/languageContext";
import { ProjectsData } from "@/utils/projectsData";
import { CardProject } from "@/components/ui/cardProject/cardProject";
import { motion } from "framer-motion";
import { mainSectionAnimation } from "@/utils/motionContants";
import { Button } from "../ui/button";

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  const sortedProjects = ProjectsData.sort((a, b) => b.id - a.id);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(4);
  const [projects, setProjects] = useState(
    sortedProjects.slice(0, currentProjectIndex)
  );

  const handleOnClick = () => {
    setCurrentProjectIndex(currentProjectIndex + 2);
    setProjects((prevProjects) => [
      ...prevProjects,
      ...sortedProjects.slice(currentProjectIndex, currentProjectIndex + 2),
    ]);
  };

  return (
    <motion.section
      id="projects"
      className={`section-container h-auto max-w-none`}
      {...mainSectionAnimation}
    >
      <h2 className="section-title">{texts.projects.title}</h2>
      <p className="text-sm md:text-base text-center py-4">
        {texts.projects.p1}{" "}
        <a
          href="https://github.com/fernandobouchet"
          target="_blank"
          className="link-text"
        >
          Github
        </a>
        .
      </p>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:max-w-6xl md:px-4 pb-2">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
      {currentProjectIndex < sortedProjects.length && (
        <Button onClick={handleOnClick} className="mt-10">
          {texts.projects.button}
        </Button>
      )}
    </motion.section>
  );
};

export { Projects };
