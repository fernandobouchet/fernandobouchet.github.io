import StyledLinkButton from "./StyledLinkButton";
import Badge from "./Badge";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="max-w-5xl mx-auto h-screen flex flex-col gap-14 justify-center items-center p-5"
      >
        <div>
          <h1 className="font-medium text-4xl md:text-5xl">Hi, I'm Fernando</h1>
        </div>
        <div>
          <p className="text-sm md:text-base max-w-2xl text-center font-light">
            I'm a{" "}
            <span className="font-medium text-blue-300">
              full-stack developer
            </span>
            , at present studying a technical degree in programming while I'm
            learning self-taught MERN stack, currently creating and colaborating
            in projects to improve my skills. I'm looking for my first
            professional experience in the IT world.
          </p>
          <p className="text-sm md:text-base max-w-2xl text-center font-light">
            Here are some technologies I've been working with recently:
          </p>
          <div className="max-w-md flex justify-center m-auto pt-5 flex-wrap">
            <Badge text="HTML" />
            <Badge text="CSS" />
            <Badge text="JAVASCRIPT" />
            <Badge text="REACT" />
            <Badge text="NODEJS" />
            <Badge text="EXPRESS" />
            <Badge text="MONGO DB" />
            <Badge text="MY SQL" />
          </div>
        </div>
        <div className="flex">
          <StyledLinkButton
            href="https://drive.google.com/file/d/1U6ObryGK9yXwLtXGHUxjpji0cY1MPwar/view?usp=sharing"
            text="Get Resume"
          />
        </div>
      </div>
    </>
  );
};
export default About;
