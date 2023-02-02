import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

export const incrementCounter = (dispatch) => {
  dispatch({ type: INCREMENT_COUNTER, payload: 1 });
};

export const decrementCounter = (dispatch) => {
  dispatch({ type: DECREMENT_COUNTER, payload: 1 });
};
