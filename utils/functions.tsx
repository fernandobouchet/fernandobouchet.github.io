const saveLanguage = (language: string) => {
  localStorage.setItem("lang", JSON.stringify(language));
};

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem("lang");
  return savedLanguage ? JSON.parse(savedLanguage) : "EN";
};

export { saveLanguage, getSavedLanguage };
