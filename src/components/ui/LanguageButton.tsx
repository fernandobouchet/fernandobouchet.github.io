import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext';
import styles from '@styles/components/ui/LanguageButton.module.scss';

const LanguageButton = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);

  return (
    <button
      className={`${styles.button__theme}`}
      onClick={() => handleChangeLanguage()}
    >
      {language === 'EN' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageButton;
