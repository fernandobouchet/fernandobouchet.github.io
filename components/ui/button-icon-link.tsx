import { ReactNode } from "react";

interface Props {
  link: string;
  icon: ReactNode;
  children?: ReactNode;
  className?: string;
}

const ButtonIconLink = ({ icon, link, children, className }: Props) => {
  return (
    <a
      className={`group relative inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary *:z-10 ${className}`}
      href={link}
      target="_blank"
    >
      <span className="absolute h-0 w-0 rounded-full bg-secondary transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
      {children ? (
        <span className="flex items-center gap-2">
          {children} {icon}
        </span>
      ) : (
        icon
      )}
    </a>
  );
};

export { ButtonIconLink };
