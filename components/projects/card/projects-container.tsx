"use client";
import { useState } from "react";
import { ProjectsData } from "@/utils/projects-data";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";

const ProjectsContainer = () => {
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
    <div className="flex flex-col justify-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Button onClick={handleOnClick} className="w-1/4 mx-auto">
        Show more
      </Button>
    </div>
  );
};
export { ProjectsContainer };
