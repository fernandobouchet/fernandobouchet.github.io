import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import styles from '@styles/components/ui/ThemeButton.module.scss';
import { DarkMode, LightMode } from '@components/icons';

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${styles.button__theme} ${styles[theme]}`}
      onClick={() => changeTheme()}
      aria-label="Change theme button"
    >
      {theme === 'dark' ? (
        <LightMode className={`${styles.icon}`} />
      ) : (
        <DarkMode className={`${styles.icon}`} />
      )}
    </button>
  );
};

export default ThemeButton;
