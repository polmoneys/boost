import { useState, ElementType, SyntheticEvent, Fragment } from "react";

interface ImageSize {
  width: number;
  height: number;
}

function useImageSize(): [
  ImageSize | null,
  (event: SyntheticEvent<HTMLImageElement, Event>) => void
] {
  const [imageSize, setImageSize] = useState<ImageSize | null>(null);

  const getImageSize = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    setImageSize({ width: target.naturalWidth, height: target.naturalHeight });
  };

  return [imageSize, getImageSize];
}
export default useImageSize;
