import { createContext, useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '../theme';

export const ColorModeContext = createContext({});

const ColorModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  console.log(theme);

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
