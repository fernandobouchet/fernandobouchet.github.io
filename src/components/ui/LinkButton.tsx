import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import style from '@styles/components/ui/Button.module.scss';

interface Props {
  className?: string;
  text: string;
  link: string;
}

const LinkButton = ({ className, text, link }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      className={`${style.button} ${
        className && style[className + '-' + theme]
      }`}
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default LinkButton;
