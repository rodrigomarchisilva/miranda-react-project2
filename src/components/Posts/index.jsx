import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { Loading } from '../Loading';

export const Posts = () => {
  const isMounted = useRef(true);
  const { statePosts, dispatchPosts } = useContext(PostsContext);
  const { posts, loading } = statePosts;

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
      <h1>Posts</h1>
      {loading && <Loading />}
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
