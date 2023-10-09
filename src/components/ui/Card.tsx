import style from '@styles/components/ui/Card.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import Badge from './Badge';
import { Github } from '@components/icons';
import LinkButton from './LinkButton';
import useImageIsLoaded from '@hooks/useImageIsLoaded';
import { LanguageContext } from '@context/LanguageContext';

interface Props {
  data: {
    id: number;
    title: string;
    info_es: string;
    info_en: string;
    image: string;
    demo: string;
    github: string;
    techstack: string[];
  };
}

const Card = ({ data }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { texts, language } = useContext(LanguageContext);

  const isImageLoaded = useImageIsLoaded(data.image);

  return (
    <div className={`fadeIn ${style.card}  ${style[theme]}`}>
      <div className={style.card__image__wrapper}>
        {isImageLoaded ? (
          <div
            className={`${style.card__image__wrapper} ${style.card__image}`}
            style={{ backgroundImage: `url(${data.image})` }}
          />
        ) : (
          <div
            className={`pulse ${style.card__image__wrapper}`}
            style={{ background: '#373a40' }}
          ></div>
        )}
      </div>
      <div className={style.card__content}>
        <div className={style.card__content__title__wrapper}>
          <h3 className={style.card__content__title}>{data.title}</h3>
          <a href={data.github} target="_blank">
            <Github />
          </a>
        </div>
        <p className={style.card__content__text}>
          {language === 'EN' ? data.info_en : data.info_es}
        </p>
        <div className={style.card__content__bagde__wrapper}>
          {data.techstack.map((stack) => (
            <Badge
              key={stack}
              className={'card__content__badge'}
              text={`#${stack}`}
            />
          ))}
        </div>
        <LinkButton
          className="secondary"
          text={texts.cardProjects.preview}
          link={data.demo}
        />
      </div>
    </div>
  );
};

export default Card;
