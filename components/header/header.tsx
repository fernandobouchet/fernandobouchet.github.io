import { Nav } from "./nav";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 w-full flex backdrop-blur h-12 z-50 p-3">
      <Nav />
    </header>
  );
};
export { Header };
