import { Badge } from "../badge";

interface Props {
  techstack: string[];
}

const CardProjectTechWrapper = ({ techstack }: Props) => {
  return (
    <div className="flex flex-wrap py-4 md:py-2 my-auto gap-2 justify-center">
      {techstack.map((tech, index) => (
        <Badge
          key={index}
          text={`#${tech}`}
          className="md:!px-2 md:!py-1 md:text-xs"
        />
      ))}
    </div>
  );
};

export { CardProjectTechWrapper };
