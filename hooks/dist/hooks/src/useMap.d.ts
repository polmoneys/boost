declare function useMap(initialState?: never[]): {
    items: [unknown, unknown][];
    size: number;
    empty: () => void;
    add: (key: any, value: any) => void;
    remove: (key: any) => void;
    has: (key: string) => boolean;
};
export default useMap;
