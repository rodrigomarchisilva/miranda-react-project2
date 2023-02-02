import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  const compareObjects = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  useEffect(() => {
    if (
      !compareObjects(urlRef.current, url) ||
      !compareObjects(optionsRef.current, options)
    ) {
      urlRef.current = url;
      optionsRef.current = options;
    }
  }, [url, options]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        });
        const json = await res.json();
        if (isMounted) {
          setResponse(json);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, options]);

  return { response, error, loading };
};
