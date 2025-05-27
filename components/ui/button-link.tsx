import { ReactNode } from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import clsx from "clsx";

interface Props {
  link: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

const ButtonLink = ({
  link,
  icon,
  children,
  className,
  variant = "primary",
}: Props) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "bg-muted/20 text-muted-foreground hover:bg-muted/30",
  };

  return (
    <a
      href={link}
      target="_blank"
      className={clsx(
        "group/link relative inline-flex items-center justify-center overflow-hidden py-2 px-4 md:px-6 font-medium duration-300 rounded-full",
        variantClasses[variant],
        className
      )}
    >
      <div className="relative inline-flex -translate-x-0 items-center transition group-hover/link:-translate-x-6">
        <div className="absolute translate-x-0 opacity-100 transition group-hover/link:-translate-x-6 group-hover/link:opacity-0 text-foreground">
          {icon}
        </div>
        <span className="pl-6 font-semibold text-foreground">{children}</span>
        <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover/link:translate-x-6 group-hover/link:opacity-100">
          <MdOutlineArrowForward className="border-none text-foreground" />
        </div>
      </div>
    </a>
  );
};

export { ButtonLink };
