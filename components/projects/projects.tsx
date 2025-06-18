"use client";
import { LanguageContext } from "@/context/language-context";
import { SectionContainer } from "../ui/section-container";
import { ProjectsContainer } from "./projects-container";
import { useContext } from "react";

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="projects">
      <div className="flex flex-col items-center">
        <h2 className="section-title">{texts.projects.title}</h2>
        <p className="text-center pb-4">{texts.projects.p1}</p>
      </div>
      <ProjectsContainer />
    </SectionContainer>
  );
};
export { Projects };
