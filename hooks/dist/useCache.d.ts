declare type UnknownArray = Array<unknown>;
declare type UnknownObject = {
    [key: string]: UnknownArray;
};
interface Option {
    id: string;
    name: string;
}
declare type Options = Array<Option>;
declare function useCache(): {
    cache: UnknownObject;
    has(key: string): boolean;
    set(key: string, value: UnknownArray | Options): void;
    clear(): void;
    get(key: string): UnknownArray | undefined;
};
export default useCache;
