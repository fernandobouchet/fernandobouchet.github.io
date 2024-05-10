import { Badge } from "@/components/ui/badge";
import {
  IconCss,
  IconExpress,
  IconHtml,
  IconJs,
  IconMongodb,
  IconMysql,
  IconNextjs,
  IconNode,
  IconPostgresql,
  IconReact,
  IconTs,
} from "../icons";

const Technologies = [
  { id: 0, title: "HTML", icon: <IconHtml /> },
  { id: 1, title: "CSS", icon: <IconCss /> },
  { id: 2, title: "JAVASCRIPT", icon: <IconJs /> },
  { id: 3, title: "TYPESCRIPT", icon: <IconTs /> },
  { id: 4, title: "REACT", icon: <IconReact /> },
  { id: 5, title: "NEXT JS", icon: <IconNextjs /> },
  { id: 6, title: "NODE JS", icon: <IconNode /> },
  { id: 7, title: "EXPRESS", icon: <IconExpress /> },
  { id: 8, title: "MONGO DB", icon: <IconMongodb /> },
  { id: 9, title: "POSTGRESQL", icon: <IconPostgresql /> },
  { id: 10, title: "MYSQL", icon: <IconMysql /> },
];

const AboutBadgesWrapper = () => {
  return (
    <div className="max-w-xs md:max-w-md lg:max-w-lg inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-4">
      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {Technologies.map((item) => (
          <li
            className="mx-4 flex flex-col items-center [&_svg]:w-6 [&_svg]:h-6 [&_svg]:md:w-8 [&_svg]:md:h-8 [&_svg]:!fill-tertiary-foreground"
            key={item.id}
          >
            {item.icon}
            <Badge key={item.id} text={item.title} className="bg-transparent" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start animate-infinite-scroll"
        aria-hidden="true"
      >
        {Technologies.map((item) => (
          <li
            className="mx-4 flex flex-col items-center [&_svg]:w-6 [&_svg]:h-6 [&_svg]:md:w-8 [&_svg]:md:h-8 [&_svg]:!fill-tertiary-foreground"
            key={item.id}
          >
            {item.icon}
            <Badge key={item.id} text={item.title} className="bg-transparent" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AboutBadgesWrapper };
