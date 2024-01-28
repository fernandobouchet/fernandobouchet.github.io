import style from '@styles/components/CardCarousel.module.scss';
import { useContext, useState } from 'react';
import Card from '@components/ui/Card';
import { ProjectsData } from '@utils/Types';
import Button from '@components/ui/Button';
import { ArrowBack, ArrowNext } from '@components/icons';
import { LanguageContext } from '@context/LanguageContext';

interface Props {
  data: ProjectsData;
}

const CardCarousel = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { texts } = useContext(LanguageContext);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.carousel}>
      <Card key={data[currentIndex].id} data={data[currentIndex]} />
      <div className={style.carousel__slider}>
        <Button
          className="secondary"
          text={texts.projects.prev}
          icon={<ArrowBack />}
          iconPosition="left"
          onClick={handlePrevious}
        />
        <Button
          className="secondary"
          text={texts.projects.next}
          icon={<ArrowNext />}
          iconPosition="right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
export default CardCarousel;
