import { Nav } from "./nav";

const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <Nav />
    </header>
  );
};
export { Header };
