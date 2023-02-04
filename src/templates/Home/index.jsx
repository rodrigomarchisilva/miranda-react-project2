import { ColoredDiv } from '../../components/ColoredDiv';
import { Counter } from '../../components/Counter';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { ErrorComponent } from '../../components/ErrorComponent';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';

export const Home = () => {
  return (
    <div>
      <ColoredDiv />
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
};
