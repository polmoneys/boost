import { SyntheticEvent } from "react";
interface ImageSize {
    width: number;
    height: number;
}
declare function useImageSize(): [
    ImageSize | null,
    (event: SyntheticEvent<HTMLImageElement, Event>) => void
];
export default useImageSize;
