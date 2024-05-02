"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "@/context/languageContext";
import { ProjectsData } from "@/utils/projectsData";
import { CardProject } from "@/components/ui/cardProject/cardProject";
import { Button } from "../ui/button";
import { useIntersection } from "@/context/intersectionContext";

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  const { RegisterAndObserveElement } = useIntersection();
  const ref = RegisterAndObserveElement();

  const sortedProjects = ProjectsData.sort((a, b) => b.id - a.id);
  const [projects, setProjects] = useState(sortedProjects.slice(0, 2));
  const [currentProjectIndex, setCurrentProjectIndex] = useState(2);

  const handleOnClick = () => {
    setCurrentProjectIndex(currentProjectIndex + 2);
    setProjects((prevProjects) => [
      ...prevProjects,
      ...sortedProjects.slice(currentProjectIndex, currentProjectIndex + 2),
    ]);
  };

  return (
    <section id="projects" className={`section-container pt-14`} ref={ref}>
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
      <div className="flex flex-col gap-4 pb-2">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
      {currentProjectIndex < sortedProjects.length && (
        <Button onClick={handleOnClick}>{texts.projects.button}</Button>
      )}
    </section>
  );
};

export { Projects };
