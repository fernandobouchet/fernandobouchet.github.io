interface Props {
  text: string;
  className?: string;
  icon?: JSX.Element;
}

const Badge = ({ text, className, icon }: Props) => {
  return (
    <div
      className={`flex min-w-fit items-center gap-2 px-2 py-1 bg-tertiary text-tertiary-foreground rounded-full font-medium text-sm lg:text-base whitespace-nowrap ${className}`}
    >
      <span className="flex items-center gap-2">
        {icon}
        {text}
      </span>
    </div>
  );
};

export { Badge };
