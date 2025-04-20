import { FaGithub } from "react-icons/fa";
import { ButtonLink } from "./button-link";

interface Props {
  link: string;
  children: React.ReactNode;
  className?: string;
}
const ButtonGithub = ({ link, children, className }: Props) => {
  return (
    <ButtonLink link={link} icon={<FaGithub />} className={className}>
      {children}
    </ButtonLink>
  );
};

export { ButtonGithub };
