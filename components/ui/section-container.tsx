import { ReactNode } from "react";
import { InView } from "./in-view";

interface Props {
  sectionId: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ sectionId, children, className }: Props) => {
  return (
    <section id={sectionId}>
      <InView
        variants={{
          hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5 }}
        className={`section-container ${className ? className : ""}`}
        as={"section"}
      >
        {children}
      </InView>
    </section>
  );
};
export { SectionContainer };
