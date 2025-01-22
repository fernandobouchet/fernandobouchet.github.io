import { ProjectsData } from "@/utils/projects-data";
import { SectionContainer } from "../ui/section-container";
import { ProjectCard } from "./card/project-card";

const Projects = () => {
  const projects = ProjectsData.sort((a, b) => b.id - a.id);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
export { Projects };
