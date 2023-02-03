import { useEffect } from 'react';
import { useState, useCallback } from 'react';

export const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    status: 'idle',
    error: null,
    data: null,
  });

  const run = useCallback(() => {
    setState({ status: 'pending', error: null, data: null });

    return asyncFunction()
      .then((response) => {
        setState({ status: 'resolved', error: null, data: response });
      })
      .catch((error) => {
        setState({ status: 'rejected', error, data: null });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) run();
  }, [shouldRun, run]);

  return { status: state.status, error: state.error, data: state.data, run };
};
