import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { Loading } from '../Loading';
import { useFetch } from '../../hooks/useFetch';
import { useAsync } from '../../hooks/useAsync';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export const Posts = () => {
  const isMounted = useRef(true);
  const { statePosts, dispatchPosts } = useContext(PostsContext);
  const { posts: postsContext, loading: loadingContext } = statePosts;
  const {
    response: responseHook,
    loading: loadingHook,
    error: errorHook,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const {
    data: responseHook2,
    status: statusHook2,
    error: errorHook2,
    run: reRunHook2,
  } = useAsync(fetchPosts, true);

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
      <h1>useFetch Posts</h1>
      {loadingHook && <Loading />}
      {errorHook && <p>{errorHook}</p>}
      {responseHook?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <h1>useAsync Posts</h1>
      {statusHook2 === 'pending' && <Loading />}
      {errorHook2 && <p>{errorHook2}</p>}
      {statusHook2 === 'resolved' && (
        <button onClick={reRunHook2}>Re-run</button>
      )}
      {responseHook2?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
