import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withCounterContext } from './withCounterContext';

const Count = ({ counter }) => {
  return <Text style={styles.wrapper}>{counter}</Text>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default withCounterContext(Count);
