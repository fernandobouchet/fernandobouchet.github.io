import { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/ui/carousel/carouselControlls";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "@/components/ui/carousel/carouselSelectedCounter";

type PropType = {
  children: ReactNode;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { children, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="max-w-xs min-[375px]:max-w-[25rem] md:max-w-2xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="flex touch-pan-y -ml-4"
        >
          {children}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] justify-between gap-5 mt-4">
        <div className="grid grid-cols-[repeat(2,_1fr)] gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export { Carousel };
