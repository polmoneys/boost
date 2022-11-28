declare type Updater = number | ((currentState: number) => number);
declare type Handlers = {
    update: (updater: Updater) => void;
    reset: () => void;
    zero: () => void;
};
declare function useNumber(initialState?: number): [number, Handlers];
export default useNumber;
