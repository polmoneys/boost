import { ReactElement, ReactNode } from "react";

export type Value = string | number;
export type ValueAndBoolean = string | number | boolean;
export type ValueAndArrays = string | number | Dictionaries;

export type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {}

export type DomElementSize = `${string}px` | `${string}%` | `calc(${string})`;

const sizeUnits = ["xs", "sm", "md", "lg", "xl"] as const;
export type Size = typeof sizeUnits[number];
// use as Sizes.SM
export const Sizes: { [key: string]: Size } = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
};

export interface WithChildren {
  children: ReactNode;
}

export interface RenderProp<TChildrenProps, TElement = any> {
  (props: TChildrenProps): ReactElement<TElement>;
}

// type One = (x:number) => void
// type Two = AddParams<One, [y:string]>
// type TwoOldWay = (x:number, y:string) => void
export type AddParams<
  TFn extends (...args: never[]) => void,
  TParams extends [...args: unknown[]]
> = (...args: [...Parameters<TFn>, ...TParams]) => ReturnType<TFn>;

export interface ViewportSize {
  width: number;
  height: number;
}
