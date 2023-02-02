import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    default:
      return { ...state };
  }
};
