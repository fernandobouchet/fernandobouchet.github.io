import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import style from '@styles/components/ui/Button.module.scss';

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}

const Button = ({ className, text, onClick, icon, iconPosition }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${style.button} ${
        className && style[className + '-' + theme]
      }`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && (
        <>
          {icon} {text}
        </>
      )}
      {!icon && <>{text}</>}
      {icon && iconPosition === 'right' && (
        <>
          {text}
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;
