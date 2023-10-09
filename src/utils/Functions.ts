const saveThemeToLocalStorage = (theme: string) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};

const getThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : 'light';
};

const saveLanguage = (language: string) => {
  localStorage.setItem('lang', JSON.stringify(language));
};

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('lang');
  return savedLanguage ? JSON.parse(savedLanguage) : 'EN';
};

export {
  saveThemeToLocalStorage,
  getThemeFromLocalStorage,
  saveLanguage,
  getSavedLanguage,
};
