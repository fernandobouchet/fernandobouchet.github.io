import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

const TechSliderItem = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 [&_svg]:!fill-secondary-foreground [&_svg]:w-8 [&_svg]:h-8 [&_svg]:md:w-10 [&_svg]:md:h-10">
      {icon}
      <span className="text-secondary-foreground font-medium">{title}</span>
    </div>
  );
};
export { TechSliderItem };
