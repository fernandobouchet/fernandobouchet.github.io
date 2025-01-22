import { SectionContainer } from "../ui/section-container";
import { ProjectsContainer } from "./card/projects-container";

const Projects = () => {
  return (
    <SectionContainer sectionId="projects" className="h-full">
      <div className="flex flex-col items-center gap-4 pt-4 pb-6">
        <h2 className="section-title">Projects</h2>
        <p>
          These are some of the projects I have been working on, you can find
          more on my{" "}
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
