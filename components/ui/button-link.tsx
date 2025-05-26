import { ReactNode } from "react";
import { MdOutlineArrowForward } from "react-icons/md";

interface Props {
  link: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const ButtonLink = ({ link, icon, children, className }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`group/link relative inline-flex items-center justify-center overflow-hidden bg-primary py-2 px-4 md:px-6 font-medium text-primary-foreground duration-300 primary-hover rounded-full ${className}`}
    >
      <div className="relative inline-flex -translate-x-0 items-center transition group-hover/link:-translate-x-6">
        <div className="absolute translate-x-0 opacity-100 transition group-hover/link:-translate-x-6 group-hover/link:opacity-0">
          {icon}
        </div>
        <span className="pl-6 font-semibold">{children}</span>
        <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover/link:translate-x-6 group-hover/link:opacity-100">
          <MdOutlineArrowForward
            className={`link-icon ${className} border-none`}
          />
        </div>
      </div>
    </a>
  );
};
export { ButtonLink };
