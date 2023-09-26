import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import style from '@styles/components/ui/Button.module.scss';

interface Props {
  className?: string;
  text: string;
}

const Button = ({ className, text }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${style.button} ${
        className && style[className + '-' + theme]
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
