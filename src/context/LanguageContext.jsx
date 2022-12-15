import { createContext, useState } from 'react';
import { getSavedLanguage, saveLanguage } from '../utils/localStorage';
import { Translations } from '../utils/Translations';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguege] = useState(getSavedLanguage());
  const [texts, setTexts] = useState(Translations[language]);

  const handleChangeLanguage = () => {
    if (language === 'EN') {
      setLanguege('ES');
      setTexts(Translations.ES);
      saveLanguage('ES');
    } else {
      setLanguege('EN');
      setTexts(Translations.EN);
      saveLanguage('EN');
    }
  };

  const data = { texts, handleChangeLanguage, language };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
