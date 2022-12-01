import { RefObject } from "react";
interface Props {
    ref: RefObject<HTMLElement>;
    onResize: () => void;
}
declare function useResizeObserver(props: Props): void;
export default useResizeObserver;
