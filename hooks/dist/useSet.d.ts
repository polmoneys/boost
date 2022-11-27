declare function useSet(initialState?: never[]): {
    items: string[];
    size: number;
    empty: () => void;
    add: (newItem: string) => void;
    remove: (newItem: string) => void;
    has: (key: string) => boolean;
};
export default useSet;
