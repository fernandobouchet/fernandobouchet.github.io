type Translations = {
  [key: string]: {
    navbar: {
      about: string;
      projects: string;
      contact: string;
    };
    about: {
      hero: string;
      p1: string;
      span1: string;
      span2: string;
      span3: string;
      p2: string;
      p3: string;
      p4: string;
      resumeButton: string;
    };
    projects: {
      title: string;
      p1: string;
      loadButton: string;
    };
    cardProjects: {
      preview: string;
    };
    contact: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
    };
  };
};

type ProjectsData = {
  id: number;
  title: string;
  info_es: string;
  info_en: string;
  image: string;
  demo: string;
  github: string;
  techstack: string[];
}[];

export type { Translations, ProjectsData };
