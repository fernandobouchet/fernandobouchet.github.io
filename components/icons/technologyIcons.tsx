import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiShadcnui,
  SiPrisma,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

const TechIcons = {
  html: { title: "HTML", icon: <SiHtml5 /> },
  css: { title: "CSS", icon: <SiCss3 /> },
  javascript: { title: "JavaScript", icon: <SiJavascript /> },
  typescript: { title: "TypeScript", icon: <SiTypescript /> },
  react: { title: "React", icon: <SiReact /> },
  reactQuery: { title: "React Query", icon: <SiReactquery /> },
  reactRouter: { title: "React Router", icon: <SiReactrouter /> },
  nextjs: { title: "Next.js", icon: <SiNextdotjs /> },
  nodejs: { title: "Node.js", icon: <SiNodedotjs /> },
  express: { title: "Express", icon: <SiExpress /> },
  mongodb: { title: "MongoDB", icon: <SiMongodb /> },
  postgresql: { title: "PostgreSQL", icon: <SiPostgresql /> },
  mysql: { title: "MySQL", icon: <GrMysql /> },
  supabase: {
    title: "Supabase",
    icon: <SiSupabase />,
  },
  firebase: { title: "Firebase", icon: <SiFirebase /> },
  bootstrap: { title: "Bootstrap", icon: <SiBootstrap /> },
  styledComponents: {
    title: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  chakraUi: { title: "Chakra UI", icon: <SiChakraui /> },
  tailwind: { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  api: { title: "API", icon: <TbApi /> },
  redux: { title: "Redux", icon: <SiRedux /> },
  shadcnui: { title: "Shadcn/UI", icon: <SiShadcnui /> },
  prisma: { title: "Prisma", icon: <SiPrisma /> },
};

export { TechIcons };
