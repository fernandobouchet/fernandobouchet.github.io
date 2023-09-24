import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import style from '../../styles/components/ui/Badge.module.scss';

interface Props {
  className?: string;
  text: string;
}

const Badge = ({ className, text }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${style.badge} ${className && style[className]} ${
        style[theme]
      }`}
    >
      <span className="badge__text">{text}</span>
    </div>
  );
};

export default Badge;
