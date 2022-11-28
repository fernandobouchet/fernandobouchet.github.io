const NavBar = () => {
  return (
    <>
      <div className="z-10 max-w-5xl h-16 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 bg-inherit">
        <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-stone-300">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-stone-400">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-stone-400">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
