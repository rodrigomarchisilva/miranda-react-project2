import { POSTS_LOADING, POSTS_SUCCESS } from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: POSTS_LOADING });
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  return () => dispatch({ type: POSTS_SUCCESS, payload: posts });
};
