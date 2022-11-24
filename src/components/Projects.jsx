import { ProjectsData } from "../utils/projectsData";
import Card from "./Card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto min-h-[calc(100vh_+_40rem)] md:min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="font-semibold text-1xl md:text-3xl">
        These are some projects I've been working on:
      </h2>
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center">
        {ProjectsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
