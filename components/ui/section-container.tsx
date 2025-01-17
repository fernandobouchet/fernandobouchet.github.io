import { ReactNode } from "react";
import { InView } from "./in-view";

interface Props {
  sectionId: string;
  children: ReactNode;
}

const SectionContainer = ({ sectionId, children }: Props) => {
  return (
    <section id={sectionId} className="section-container">
      <InView
        variants={{
          hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "40px 0px -150px 0px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </InView>
    </section>
  );
};
export { SectionContainer };
