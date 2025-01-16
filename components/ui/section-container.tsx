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
          hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
      >
        {children}
      </InView>
    </section>
  );
};
export { SectionContainer };
