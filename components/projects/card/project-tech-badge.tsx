import { Badge } from "@/components/ui/badge";
import { TechIcons } from "@/components/ui/tech-icons";

interface Props {
  techstack: string[];
  length?: number;
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
  { id: 21, tech: TechIcons.prisma },
  { id: 22, tech: TechIcons.nextUI },
  { id: 23, tech: TechIcons.i18n },
  { id: 24, tech: TechIcons.java },
  { id: 25, tech: TechIcons.springboot },
  { id: 99, tech: TechIcons.api },
];

const ProjectTechBadge = ({ techstack, length }: Props) => {
  const cardIcons = Technologies.filter((item) =>
    techstack.includes(item.tech.title)
  );

  return (
    <div className="flex flex-wrap py-4 mt-auto gap-1 justify-center">
      {cardIcons.slice(0, length).map((item) => (
        <Badge key={item.id} text={item.tech.title} icon={item.tech.icon} />
      ))}

      {length && length < cardIcons.length && (
        <Badge text={`+${cardIcons.length - length}`} />
      )}
    </div>
  );
};
export { ProjectTechBadge };
