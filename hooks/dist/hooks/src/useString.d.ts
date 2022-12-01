declare type Updater = string | ((currentState: string) => string);
declare type Handlers = {
    update: (updater: Updater) => void;
    reset: () => void;
    empty: () => void;
};
declare function useString(initialState?: string): [string, Handlers];
export default useString;
