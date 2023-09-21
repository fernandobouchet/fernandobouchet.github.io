import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {},
});

const saveThemeToLocalStorage = (theme: string) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};

const getThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : 'light';
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const changeTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    saveThemeToLocalStorage(updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
