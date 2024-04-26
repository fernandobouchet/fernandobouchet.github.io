import { ReactNode } from "react";

interface Props {
  link: string;
  icon: ReactNode;
}

const LinkWithIcon = ({ icon, link }: Props) => {
  return (
    <a
      className="group relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary"
      href={link}
      target="_blank"
    >
      <span className="absolute h-0 w-0 rounded-full bg-card transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
      {icon}
    </a>
  );
};

export { LinkWithIcon };
