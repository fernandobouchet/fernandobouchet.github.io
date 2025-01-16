import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Projects } from "@/components/projects/projects";
import { Background } from "@/components/ui/background";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="flex flex-col items-center">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
