import { ReactNode, CSSProperties } from "react";
export declare const Svg: ({ children, height, style, }: {
    children: ReactNode;
    height: string;
    style?: CSSProperties | undefined;
}) => JSX.Element;
export declare const Group: ({ translate, children }: any) => JSX.Element;
export declare const Rectangle: ({ x, y, fill, width, height, }: {
    x?: string | undefined;
    y?: string | undefined;
    fill?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
}) => JSX.Element;
export declare function matchRefsToPoints(refs: any, boundary: any, spaceX: number, spaceY: number): Promise<Array<[number, number]>>;
