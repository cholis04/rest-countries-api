import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { global } from '../styles/themeStyle';

interface ModeProps {
  isDarkMode: boolean | null;
  toggleMode: () => void;
}

export const Mode = createContext<ModeProps | null>(null);

const ModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  // const theme = isDarkMode ? darkMode : lightMode;

  const toggleMode = () => {
    const androidTC = document.querySelector('meta[name="theme-color"]');
    const iosTC = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    // Set meta theme color!!
    if (isDarkMode) {
      setIsDarkMode(false);
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme-mode', 'light');
      androidTC?.setAttribute('content', 'hsl(0, 0%, 98%)');
      iosTC?.setAttribute('content', 'hsl(0, 0%, 98%)');
    } else {
      setIsDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme-mode', 'dark');
      androidTC?.setAttribute('content', 'hsl(207, 26%, 17%)');
      iosTC?.setAttribute('content', 'hsl(207, 26%, 17%)');
    }
  };

  // Initialize Thgeme mode
  useEffect(() => {
    const local = localStorage.getItem('theme-mode');
    if (local === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <Mode.Provider value={{ isDarkMode, toggleMode }}>
      <ThemeProvider theme={global}>{children}</ThemeProvider>
    </Mode.Provider>
  );
};

export default ModeProvider;
