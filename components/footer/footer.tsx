import { IconGithub } from "@/components/icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-xs py-1">
      <a
        href="https://github.com/fernandobouchet/fernandobouchet.github.io"
        target="_blank"
        className="flex items-center gap-1 px-1"
      >
        © Fernando Bouchet
        <IconGithub className="w-3 h-auto" />
      </a>
      {"  "} - {year}
    </footer>
  );
};

export { Footer };
