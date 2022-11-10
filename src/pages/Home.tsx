import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
