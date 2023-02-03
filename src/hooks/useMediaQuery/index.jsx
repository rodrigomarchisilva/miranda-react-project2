import { useState, useEffect } from 'react';

export const useMediaQuery = (query, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      if (isMounted) setMatch(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setMatch(mediaQuery.matches);

    return () => {
      isMounted = false;
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return match;
};
