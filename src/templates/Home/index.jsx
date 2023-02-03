import { ColoredDiv } from '../../components/ColoredDiv';
import { Counter } from '../../components/Counter';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';

export const Home = () => {
  return (
    <div>
      <ColoredDiv />
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
};
