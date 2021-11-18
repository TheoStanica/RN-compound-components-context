import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Count from './components/Count';
import Minus from './components/Minus';
import Plus from './components/Plus';
import { CounterContext } from './context';

const Counter = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increaseCounter, decreaseCounter }}
    >
      <View style={styles.contextWrapper}>
        {React.Children.map(children, (childElement, index) => {
          let roundLeft = false;
          let roundRight = false;
          if (index === 0) {
            roundLeft = true;
          }
          if (index === children.length - 1) {
            roundRight = true;
          }
          return React.cloneElement(
            childElement,
            { roundLeft, roundRight },
            null
          );
        })}
      </View>
    </CounterContext.Provider>
  );
};

const styles = StyleSheet.create({
  contextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 3,
    borderRadius: 20,
    backgroundColor: '#939ecf',
  },
});

Counter.Count = Count;
Counter.Plus = Plus;
Counter.Minus = Minus;

export { Counter };
