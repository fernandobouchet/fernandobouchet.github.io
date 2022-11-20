import { ProjectsData } from "../../utils/projectsData";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div
        id="projects"
        className="max-w-5xl mx-auto min-h-screen p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center"
      >
        {ProjectsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
