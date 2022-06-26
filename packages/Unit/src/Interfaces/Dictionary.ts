import { Value } from "./Value";

export type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {}
