import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Counter } from '../components/Counter/Counter';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';
import { withTheme } from '../components/ThemeProvider/withTheme';

const Landing = ({ theme }) => {
  return (
    <View style={styles.page(theme)}>
      <ThemeSwitcher />
      <Counter>
        <Counter.Minus />
        <Counter.Count />
        <Counter.Plus />
      </Counter>
    </View>
  );
};

const styles = StyleSheet.create({
  page: (theme) => ({
    backgroundColor: theme.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});

export default withTheme(Landing);
