import { ProjectsData } from "../utils/projectsData";
import Card from "./Card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto min-h-screen flex flex-col items-center pt-20"
    >
      <h2 className="font-semibold text-1xl md:text-3xl">
        These are some projects I've been working on:
      </h2>
      <div className="pt-10 flex flex-col gap-10">
        {ProjectsData.slice(0, 5).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
