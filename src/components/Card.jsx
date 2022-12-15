import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import LinkButtonSecondary from './LinkButtonSecondary';

const Card = ({ data }) => {
  const { title, info_en, info_es, image, demo, github } = data;

  const { texts, language } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-sm md:max-w-2xl lg:max-w-3xl items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-fadeIn hover:bg-sky-300 dark:hover:bg-sky-900 transition">
        <img src={image} alt={title} className="w-82 md:w-96 rounded-lg" />
        <div className="w-full h-full flex flex-col items-center p-3">
          <div>
            <h3 className="mb-2 font-medium">{title}</h3>
            <p className="text-sm md:text-base p-2">
              {language === 'EN' ? info_en : info_es}
            </p>
          </div>
          <div className="flex gap-8">
            <LinkButtonSecondary
              href={demo}
              text={texts.cardProjects.preview}
            />
            <LinkButtonSecondary
              href={github}
              text={texts.cardProjects.source}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
