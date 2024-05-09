interface Props {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: Props) => {
  return (
    <div
      className={`flex min-w-fit items-center gap-2 px-2 py-1 bg-tertiary text-tertiary-foreground rounded-full font-medium text-xs md:text-sm whitespace-nowrap ${className}`}
    >
      <span>{text}</span>
    </div>
  );
};

export { Badge };
