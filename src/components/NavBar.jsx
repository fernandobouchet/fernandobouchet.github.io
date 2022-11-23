const NavBar = () => {
  return (
    <>
      <div className="max-w-5xl h-16 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 bg-inherit">
        <ul className="flex flex-row gap-4">
          <li>
            <a href="#about" className="hover:text-stone-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-stone-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-stone-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
