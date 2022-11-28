export declare type BinaryState = "on" | "off";
export declare type ActionsTypes = "ON" | "OFF" | "TOGGLE";
declare function useBinary(initialState: BinaryState): {
    state: BinaryState;
    actions: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
};
export default useBinary;
