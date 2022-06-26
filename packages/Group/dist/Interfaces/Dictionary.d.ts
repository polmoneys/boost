import { Value } from "./Value";
export declare type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {
}
