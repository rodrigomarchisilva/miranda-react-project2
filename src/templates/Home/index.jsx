import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';

export const Home = () => {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
};
