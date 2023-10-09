import { createContext, useState } from 'react';
import { getSavedLanguage, saveLanguage } from '@utils/Functions';
import { Translations } from '@utils/Translations';

type LanguageKey = keyof typeof Translations;

export const LanguageContext = createContext({
  language: 'EN' as LanguageKey,
  texts: Translations.EN,
  handleChangeLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<LanguageKey>(getSavedLanguage());

  const [texts, setTexts] = useState(Translations[language]);

  const handleChangeLanguage = () => {
    if (language === 'EN') {
      setLanguage('ES');
      setTexts(Translations.ES);
      saveLanguage('ES');
    } else {
      setLanguage('EN');
      setTexts(Translations.EN);
      saveLanguage('EN');
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, handleChangeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
