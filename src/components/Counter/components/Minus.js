import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withCounterContext } from './withCounterContext';

const Minus = ({ decreaseCounter, roundRight, roundLeft }) => {
  return (
    <TouchableOpacity
      style={styles.button({ roundRight, roundLeft })}
      onPress={decreaseCounter}
    >
      <Text style={{ color: 'white' }}>-</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: ({ roundRight, roundLeft }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 25,
    backgroundColor: '#3f51b5',
    borderTopRightRadius: roundRight ? 15 : 3,
    borderBottomRightRadius: roundRight ? 15 : 3,
    borderTopLeftRadius: roundLeft ? 15 : 3,
    borderBottomLeftRadius: roundLeft ? 15 : 3,
    marginHorizontal: 0.5,
  }),
});

export default withCounterContext(Minus);
