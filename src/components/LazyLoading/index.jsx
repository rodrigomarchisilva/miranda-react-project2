import { useState, Suspense, lazy } from 'react';
import { Loading } from '../Loading';

const LazyComponent = lazy(() => import('./LazyComponent'));

export const LazyLoading = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <div>
      <button onClick={toggle}>Show/Hide Lazy Component</button>
      <Suspense fallback={<Loading />}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
