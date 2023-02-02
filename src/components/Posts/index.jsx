import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { Loading } from '../Loading';
import { useFetch } from '../../hooks/UseFetch';

export const Posts = () => {
  const isMounted = useRef(true);
  const { statePosts, dispatchPosts } = useContext(PostsContext);
  const { posts: postsContext, loading: loadingContext } = statePosts;
  const {
    response: responseHook,
    loading: loadingHook,
    error: errorHook,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  useEffect(() => {
    loadPosts(dispatchPosts).then((myDispatch) => {
      if (isMounted.current) myDispatch();
      return () => {
        isMounted.current = false;
      };
    });
  }, [dispatchPosts]);

  return (
    <div>
      <h1>Context Posts</h1>
      {loadingContext && <Loading />}
      {postsContext.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <h1>Hook Posts</h1>
      {loadingHook && <Loading />}
      {errorHook && <p>{errorHook}</p>}
      {responseHook?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
