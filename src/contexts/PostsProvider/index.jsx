import P from 'prop-types';
import { useReducer } from 'react';
import { PostsContext } from './context';
import { initialState } from './data';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [statePosts, dispatchPosts] = useReducer(reducer, initialState);

  return (
    <PostsContext.Provider value={{ statePosts, dispatchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};
