import { useContext } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';

export const Counter = () => {
  const { stateCounter, dispatchCounter } = useContext(CounterContext);
  const { counter } = stateCounter;

  return (
    <div>
      <p>{`Context counter is at ${counter}`}</p>
      <button onClick={() => incrementCounter(dispatchCounter)}>+</button>
      <button onClick={() => decrementCounter(dispatchCounter)}>-</button>
    </div>
  );
};
