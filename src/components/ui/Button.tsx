import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import style from '@styles/components/ui/Button.module.scss';

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ className, text, onClick }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${style.button} ${
        className && style[className + '-' + theme]
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
