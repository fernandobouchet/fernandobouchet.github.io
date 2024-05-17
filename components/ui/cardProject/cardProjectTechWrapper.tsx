import {
  IconBadgeBootstrap,
  IconBadgeChakra,
  IconBadgeCss,
  IconBadgeExpress,
  IconBadgeFirebase,
  IconBadgeMongodb,
  IconBadgeNextJs,
  IconBadgeReact,
  IconBadgeReactQuery,
  IconBadgeReactRouter,
  IconBadgeStyledComponents,
  IconBadgeTailwind,
  IconBadgeTypescript,
} from "@/components/icons/techStackBadgesIcons";

interface Props {
  techstack: string[];
}

const badgeIcons = [
  { id: 1, name: "React", icon: <IconBadgeReact /> },
  { id: 2, name: "Typescript", icon: <IconBadgeTypescript /> },
  { id: 3, name: "Mongo", icon: <IconBadgeMongodb /> },
  { id: 4, name: "Express", icon: <IconBadgeExpress /> },
  { id: 5, name: "Next", icon: <IconBadgeNextJs /> },
  { id: 6, name: "ReactQuery", icon: <IconBadgeReactQuery /> },
  { id: 7, name: "ReactRouter", icon: <IconBadgeReactRouter /> },
  { id: 8, name: "Firebase", icon: <IconBadgeFirebase /> },
  { id: 9, name: "Bootstrap", icon: <IconBadgeBootstrap /> },
  { id: 10, name: "Css", icon: <IconBadgeCss /> },
  { id: 11, name: "StyledComponents", icon: <IconBadgeStyledComponents /> },
  { id: 12, name: "Chakra", icon: <IconBadgeChakra /> },
  { id: 13, name: "Tailwind", icon: <IconBadgeTailwind /> },
];

const CardProjectTechWrapper = ({ techstack }: Props) => {
  const cardIcons = badgeIcons.filter((item) => techstack.includes(item.name));

  return (
    <div className="flex flex-wrap py-2 mt-auto gap-2 justify-center">
      {cardIcons.map((tech) => (
        <span key={tech.id} className="[&_svg]:rounded-lg">
          {tech.icon}
        </span>
      ))}
    </div>
  );
};

export { CardProjectTechWrapper };
