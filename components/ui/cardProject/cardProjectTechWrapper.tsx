import { TechIcons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

interface Props {
  techstack: string[];
}

const Technologies = [
  { id: 0, tech: TechIcons.html },
  { id: 1, tech: TechIcons.css },
  { id: 2, tech: TechIcons.javascript },
  { id: 3, tech: TechIcons.typescript },
  { id: 4, tech: TechIcons.react },
  { id: 5, tech: TechIcons.nextjs },
  { id: 6, tech: TechIcons.nodejs },
  { id: 7, tech: TechIcons.express },
  { id: 8, tech: TechIcons.mongodb },
  { id: 9, tech: TechIcons.postgresql },
  { id: 10, tech: TechIcons.mysql },
  { id: 11, tech: TechIcons.tailwind },
  { id: 12, tech: TechIcons.reactQuery },
  { id: 13, tech: TechIcons.styledComponents },
  { id: 14, tech: TechIcons.bootstrap },
  { id: 15, tech: TechIcons.firebase },
  { id: 16, tech: TechIcons.reactRouter },
  { id: 17, tech: TechIcons.chakraUi },
  { id: 18, tech: TechIcons.supabase },
  { id: 19, tech: TechIcons.shadcnui },
  { id: 20, tech: TechIcons.redux },
  { id: 99, tech: TechIcons.api },
];

const CardProjectTechWrapper = ({ techstack }: Props) => {
  const cardIcons = Technologies.filter((item) =>
    techstack.includes(item.tech.title)
  );

  return (
    <div className="flex flex-wrap py-2 mt-auto gap-2 justify-center">
      {cardIcons.map((item) => (
        <Badge key={item.id} text={item.tech.title} icon={item.tech.icon} />
      ))}
    </div>
  );
};

export { CardProjectTechWrapper };
