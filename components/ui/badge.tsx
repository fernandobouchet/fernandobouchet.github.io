interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <div className="px-2 py-1 md:px-4 md:py-2 bg-tertiary text-tertiary-foreground rounded-full font-medium text-xs md:text-sm">
      {text}
    </div>
  );
};

export { Badge };
