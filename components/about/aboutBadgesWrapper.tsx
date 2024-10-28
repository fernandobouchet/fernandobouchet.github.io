import { TechIcons } from "@/components/icons";

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
];

const AboutBadgesWrapper = () => {
  return (
    <div className="max-w-xs md:max-w-md lg:max-w-lg inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-5">
      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {Technologies.map((item) => (
          <li
            className="mx-4 flex flex-col items-center [&_svg]:w-6 [&_svg]:h-6 [&_svg]:md:w-8 [&_svg]:md:h-8 [&_svg]:!fill-tertiary-foreground"
            key={item.id}
          >
            {item.tech.icon}
            <span className="text-tertiary-foreground py-2 font-medium text-sm lg:text-base">
              {item.tech.title}
            </span>
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
            {item.tech.icon}
            <span className="text-tertiary-foreground py-2 font-medium text-sm lg:text-base">
              {item.tech.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AboutBadgesWrapper };
