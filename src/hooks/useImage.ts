import { useState, useEffect } from 'react';

export const useImage = (src: string): HTMLImageElement | null => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImage(img);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setImage(null);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return image;
};
