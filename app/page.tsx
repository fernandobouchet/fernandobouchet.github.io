import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { Background } from "@/components/ui/background";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="flex flex-col items-center">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
