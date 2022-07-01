import { useState, useEffect } from 'react';

interface Dimensions {
  width?: number;
  height?: number;
}

const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return {}
  }
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width, height
  }
}

export const useWindowDimensions = () => {
  const [ windowDimensions, setWindowDimensions ] = useState<Dimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
