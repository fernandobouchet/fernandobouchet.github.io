import { FaGithub } from "react-icons/fa";
import { ButtonLink } from "./button-link";

interface Props {
  link: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}
const ButtonGithub = ({ link, children, variant, className }: Props) => {
  return (
    <ButtonLink
      link={link}
      icon={<FaGithub />}
      variant={variant}
      className={className}
    >
      {children}
    </ButtonLink>
  );
};

export { ButtonGithub };
