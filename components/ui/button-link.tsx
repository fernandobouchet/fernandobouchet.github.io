import { ReactNode } from "react";
import { MdOutlineArrowForward } from "react-icons/md";

interface Props {
  link: string;
  icon?: ReactNode;
  children: ReactNode;
}

const ButtonLink = ({ link, icon, children }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden bg-primary px-4 md:px-6 font-medium text-primary-foreground duration-300 primary-hover rounded-full"
    >
      <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
        <div className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
          {icon}
        </div>
        <span className="pl-6">{children}</span>
        <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
          <MdOutlineArrowForward className="link-icon" />
        </div>
      </div>
    </a>
  );
};
export { ButtonLink };
