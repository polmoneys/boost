interface Options {
    container: HTMLElement;
    slider: HTMLElement;
    hasTouchEvent?: boolean;
    smoothAmount?: number;
    dragSpeed?: number;
    mouseEnter?: () => void;
    mouseUp?: () => void;
    mouseLeave?: () => void;
    mouseDown?: () => void;
}
export default Options;
