import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
