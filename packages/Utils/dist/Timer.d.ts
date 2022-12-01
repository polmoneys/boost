declare class Timer {
    timerId: ReturnType<typeof setTimeout> | null;
    start?: number;
    remaining: number;
    cb: () => void;
    constructor(cb: () => void, delay: number);
    resume: () => void;
    clear: () => void;
    pause: () => void;
}
export default Timer;
