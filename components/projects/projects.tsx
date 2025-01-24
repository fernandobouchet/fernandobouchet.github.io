"use client";
import { LanguageContext } from "@/context/language-context";
import { SectionContainer } from "../ui/section-container";
import { ProjectsContainer } from "./card/projects-container";
import { useContext } from "react";

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="projects" className="h-full">
      <div className="flex flex-col items-center gap-4 pt-4 pb-6">
        <h2 className="section-title">{texts.projects.title}</h2>
        <p>
          {texts.projects.p1}{" "}
          <a
            href="https://github.com/fernandobouchet"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Github
          </a>
          .
        </p>
      </div>
      <ProjectsContainer />
    </SectionContainer>
  );
};
export { Projects };
