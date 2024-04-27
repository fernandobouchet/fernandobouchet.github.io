const saveLanguage = (language: string) => {
  typeof window !== "undefined" &&
    localStorage.setItem("lang", JSON.stringify(language));
};

const getSavedLanguage = () => {
  const savedLanguage =
    typeof window !== "undefined" && localStorage.getItem("lang");
  return savedLanguage ? JSON.parse(savedLanguage) : "EN";
};

export { saveLanguage, getSavedLanguage };
