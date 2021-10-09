import { useEffect, useState } from 'react';

interface IWindowSize {
  windowSize: ISize;
  isMobile: boolean;
  isDesktop: boolean;
}

interface ISize {
  width?: number;
  height?: number;
}

export const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });

  const isMobile = (windowSize.width as number) < 420;
  const isDesktop = (windowSize.width as number) >= 420;

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowSize, isMobile, isDesktop };
};
