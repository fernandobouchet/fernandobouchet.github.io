import { createContext, useState } from 'react';
import {
  getThemeFromLocalStorage,
  saveThemeToLocalStorage,
} from '@utils/Functions';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {},
});

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
