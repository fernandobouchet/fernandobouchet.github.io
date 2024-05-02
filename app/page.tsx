import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/nav/nav";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-col items-center">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
