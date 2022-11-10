export const About = () => {
  return (
    <div
      id="about"
      className="max-w-3xl mx-auto h-screen flex flex-col gap-14 justify-center items-center p-5"
    >
      <div>
        <h1 className="font-semibold text-5xl">Hi, I'm Fernando</h1>
      </div>
      <div>
        <p className=" text-xl max-w-2xl text-center font-light">
          I'm a{" "}
          <span className="font-normal text-sky-500">full-stack developer</span>
          , at present studying a technical degree in programming while I'm
          learning self-taught MERN stack, currently creating and colaborating
          in projects to improve my skills. I'm looking for my first
          professional experience in the IT world.
        </p>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1U6ObryGK9yXwLtXGHUxjpji0cY1MPwar/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="py-3 px-4 font-semibold rounded-md bg-sky-500 text-white hover:bg-sky-700"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
};
