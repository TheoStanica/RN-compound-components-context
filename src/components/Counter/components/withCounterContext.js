import React, { useContext } from 'react';
import { CounterContext } from '../context';

export const withCounterContext = (BaseComponent) => (props) => {
  const { counter, increaseCounter, decreaseCounter } = useContext(
    CounterContext
  );

  return (
    <BaseComponent
      counter={counter}
      increaseCounter={increaseCounter}
      decreaseCounter={decreaseCounter}
      {...props}
    />
  );
};
