import P from 'prop-types';
import { useReducer } from 'react';
import { CounterContext } from './context';
import { initialState } from './data';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [stateCounter, dispatchCounter] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ stateCounter, dispatchCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};
