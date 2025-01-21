import { SectionContainer } from "../ui/section-container";
import { GetResumeButton } from "./get-resume-button";
import { TechSlider } from "./tech-slider";
import { Avatar } from "./avatar";

const About = () => {
  return (
    <SectionContainer sectionId="about">
      <Avatar />
      <h1 className="text-3xl md:text-4xl font-bold py-4">Hi, Im Fernando</h1>
      <div className="flex flex-col text-center">
        <p className="text-center">
          I&apos;m a{" "}
          <span className="text-secondary-foreground">
            University Technician in Programming
          </span>{" "}
          and an intermediate student in the{" "}
          <span className="text-secondary-foreground">
            Bachelor&apos;s degree in Computer Science
          </span>
          . Passionate about{" "}
          <span className="text-secondary-foreground">full-stack</span>{" "}
          development, I combine a solid academic foundation with a strong
          commitment to{" "}
          <span className="text-secondary-foreground">
            self-taught learning
          </span>
          , continually enhancing my skills through both individual and
          collaborative projects.
        </p>
        <p>Here are some technologies I have been working with recently:</p>
      </div>
      <TechSlider />
      <div>
        <GetResumeButton />
      </div>
    </SectionContainer>
  );
};
export { About };
