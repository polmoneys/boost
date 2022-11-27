import { ReactElement, ReactNode } from "react";
export declare type Value = string | number;
export declare type ValueAndBoolean = string | number | boolean;
export declare type ValueAndArrays = string | number | Dictionaries;
export declare type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {
}
export declare type DomElementSize = `${string}px` | `${string}%` | `calc(${string})`;
export interface WithChildren {
    children: ReactNode;
}
export interface RenderProp<TChildrenProps, TElement = any> {
    (props: TChildrenProps): ReactElement<TElement>;
}
export declare type AddParams<TFn extends (...args: never[]) => void, TParams extends [...args: unknown[]]> = (...args: [...Parameters<TFn>, ...TParams]) => ReturnType<TFn>;
export interface ViewportSize {
    width: number;
    height: number;
}
