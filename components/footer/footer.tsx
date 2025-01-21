import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-xs lg:text-sm py-1 text-muted-foreground">
      <a
        href="https://github.com/fernandobouchet/fernandobouchet.github.io"
        target="_blank"
        className="flex items-center gap-1 px-1"
      >
        © Fernando Bouchet
        <FaGithub className="w-3 h-auto" />
      </a>
      {"  "} - {year}
    </footer>
  );
};
export { Footer };
