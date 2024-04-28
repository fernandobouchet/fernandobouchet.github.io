interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <div className="flex min-w-fit items-center gap-2 px-2 py-1 md:px-4 md:py-2 bg-tertiary text-tertiary-foreground rounded-full font-medium text-xs md:text-sm">
      <span>{text}</span>
    </div>
  );
};

export { Badge };
