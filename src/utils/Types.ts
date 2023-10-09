interface Translations {
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
}

export type { Translations };
