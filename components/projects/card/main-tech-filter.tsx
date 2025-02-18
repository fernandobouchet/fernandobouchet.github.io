import { Badge } from "@/components/ui/badge";
import { TechIcons } from "@/components/ui/tech-icons";

const MainTechnologies = [
  { id: 1, tech: TechIcons.react },
  { id: 2, tech: TechIcons.nextjs },
  { id: 3, tech: TechIcons.express },
  { id: 4, tech: TechIcons.mongodb },
  { id: 5, tech: TechIcons.postgresql },
  /*   { id: 7, tech: TechIcons.java },
  { id: 8, tech: TechIcons.springboot }, */
];

interface Props {
  onClick: (technology: string) => void;
}

const MainTechFilter = ({ onClick }: Props) => {
  return (
    <div className="flex flex-wrap py-4 mt-auto gap-2 justify-center">
      <button className="cursor-pointer" onClick={() => onClick("all")}>
        <Badge className="h-10 px-4 [&_span]:text-base" text="All" />
      </button>
      {MainTechnologies.map((item) => (
        <button
          className="cursor-pointer"
          key={item.id}
          onClick={() => onClick(item.tech.title)}
        >
          <Badge
            className="h-10 px-4 [&_span]:text-base"
            text={item.tech.title}
            icon={item.tech.icon}
          />
        </button>
      ))}
    </div>
  );
};

export { MainTechFilter };
