import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkMode, lightMode } from '../styles/themeStyle';

interface ModeProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

export const Mode = createContext<ModeProps | null>(null);

const ModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkMode : lightMode;

  const switchMode = (localTheme: string) => {
    switch (localTheme) {
      case 'dark':
        setIsDarkMode(true);
        break;
      case 'light':
        setIsDarkMode(false);
        break;
      default:
        setIsDarkMode(false);
        break;
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Check local storage theme
  useEffect(() => {
    const localTheme = localStorage.getItem('themeMode');
    if (localTheme) {
      switchMode(localTheme);
    }
  }, []);

  // Update Localstorage when state changed
  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Mode.Provider value={{ isDarkMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Mode.Provider>
  );
};

export default ModeProvider;
