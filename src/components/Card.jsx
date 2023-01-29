import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import LinkButtonSecondary from './LinkButtonSecondary';
import Badge from './Badge';
import imageIsLoaded from '../hooks/imageIsLoaded';

const Card = ({ data }) => {
  const isLoaded = imageIsLoaded(data.image);

  const { title, info_en, info_es, image, demo, github, techstack } = data;

  const { texts, language } = useContext(LanguageContext);

  return (
    <>
      {isLoaded && (
        <div className="flex flex-col max-w-sm items-center rounded-xl bg-neutral-100 dark:bg-neutral-800 animate-fadeIn hover:bg-sky-100 dark:hover:bg-sky-900 transition shadow-lg">
          <div>
            <a href={demo} target="_blank">
              <img
                src={image}
                alt={title}
                className="w-82 md:w-96 rounded-lg"
              />
            </a>
          </div>
          <div className="w-full h-full flex flex-col items-center p-2">
            <div className="h-full flex flex-col">
              <h3 className="text-base md:text-lg font-medium text-center">
                {title}
              </h3>
              <p className="text-xs md:text-sm p-2 text-center">
                {language === 'EN' ? info_en : info_es}
              </p>
              <div className="flex flex-wrap justify-center mt-auto">
                {techstack.map((item, index) => (
                  <span
                    className="text-xs md:text-sm px-2 text-blue-600 text-opacity-75 dark:text-blue-300 dark:text-opacity-75"
                    key={index}
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-2">
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
      )}
    </>
  );
};
export default Card;
