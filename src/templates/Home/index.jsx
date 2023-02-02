import { Counter } from '../../components/Counter';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';

export const Home = () => {
  return (
    <div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
};
