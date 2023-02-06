import { CounterProvider, PostsProvider } from '../../contexts';
import {
  ColoredDiv,
  CompoundComponent,
  CompoundContext,
  Counter,
  ErrorBoundary,
  ErrorComponent,
  LazyParent,
  Posts,
} from '../../components';

export const Home = () => {
  return (
    <div>
      <LazyParent />
      <CompoundContext />
      <CompoundComponent />
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
