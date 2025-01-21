import { InfiniteSlider } from "../ui/infinite-slider";
import { TechIcons } from "../ui/tech-icons";
import { TechSliderItem } from "./tech-slider-item";

const Technologies = [
  TechIcons.css,
  TechIcons.javascript,
  TechIcons.typescript,
  TechIcons.html,
  TechIcons.react,
  TechIcons.nextjs,
  TechIcons.nodejs,
  TechIcons.express,
  TechIcons.mongodb,
  TechIcons.postgresql,
  TechIcons.mysql,
  TechIcons.java,
  TechIcons.springboot,
];

const TechSlider = () => {
  return (
    <div className="max-w-xs md:max-w-md lg:max-w-lg verflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-6 mx-auto">
      <InfiniteSlider className="w-full">
        {Technologies.map((item, index) => (
          <TechSliderItem key={index} icon={item.icon} title={item.title} />
        ))}
      </InfiniteSlider>
    </div>
  );
};
export { TechSlider };
