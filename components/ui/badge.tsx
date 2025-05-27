import { JSX } from "react";

interface Props {
  text: string;
  className?: string;
  icon?: JSX.Element;
}

const Badge = ({ text, className, icon }: Props) => {
  return (
    <div
      className={`flex min-w-fit items-center px-2 py-1 rounded-full font-medium text-xs lg:text-sm whitespace-nowrap border border-neutral-200/20 dark:border-neutral-300/20 text-neutral-200 dark:text-neutral-300 ${className}`}
    >
      <span className="flex items-center gap-1">
        {icon}
        {text}
      </span>
    </div>
  );
};
export { Badge };
