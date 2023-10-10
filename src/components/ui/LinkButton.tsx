import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import style from '@styles/components/ui/Button.module.scss';

interface Props {
  className?: string;
  text: string;
  link: string;
  description: string;
}

const LinkButton = ({ className, text, link, description }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      className={`${style.button} ${
        className && style[className + '-' + theme]
      }`}
      href={link}
      target="_blank"
      aria-label={description}
    >
      {text}
    </a>
  );
};

export default LinkButton;
