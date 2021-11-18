import React, { createContext, useState } from 'react';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    colors: {
      primary: 'red',
    },
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    colors: {
      primary: 'darkred',
    },
  },
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
