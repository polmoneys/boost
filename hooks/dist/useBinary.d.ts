export declare type BinaryState = "on" | "off";
declare function useBinary(initialState: BinaryState): {
    state: BinaryState;
    actions: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
};
export default useBinary;
