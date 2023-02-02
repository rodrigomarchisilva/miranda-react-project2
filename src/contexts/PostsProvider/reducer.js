import { POSTS_LOADING, POSTS_SUCCESS } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case POSTS_LOADING:
      return { ...state, loading: true };
  }
  return { ...state };
};
