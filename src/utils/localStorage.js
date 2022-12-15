const saveLanguage = (language) => {
  localStorage.setItem('lang', JSON.stringify(language));
};

const getSavedLanguage = () => {
  let savedLangage = JSON.parse(localStorage.getItem('lang'));
  if (savedLangage !== null) {
    return savedLangage;
  } else {
    return 'EN';
  }
};

export { saveLanguage, getSavedLanguage };
