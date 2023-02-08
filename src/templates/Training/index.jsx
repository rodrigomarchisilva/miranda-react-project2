import { CounterProvider, PostsProvider } from '../../contexts';
import {
  ColoredDiv,
  CompoundComponent,
  CompoundContext,
  Counter,
  ErrorBoundary,
  ErrorComponent,
  LazyLoading,
  Posts,
  StateComponent,
} from '../../components';

export const Training = () => {
  return (
    <div className="Training">
      <StateComponent />
      <LazyLoading />
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
