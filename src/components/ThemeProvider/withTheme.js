import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export const withTheme = (BaseComponent) => (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <BaseComponent theme={theme} toggleTheme={toggleTheme} {...props} />;
};
