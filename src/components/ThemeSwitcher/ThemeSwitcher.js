import React from 'react';
import { Button } from 'react-native';
import { withTheme } from '../ThemeProvider/withTheme';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <Button
      color={theme.colors.primary}
      title="Toggle Theme"
      onPress={toggleTheme}
    />
  );
};

export default withTheme(ThemeSwitcher);
