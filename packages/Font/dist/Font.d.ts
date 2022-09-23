import { AriaAttributes, ReactElement, ReactNode } from "react";
declare type FontSizes = "xs" | "s" | "r" | "l" | "xl";
interface Props extends AriaAttributes {
    size?: FontSizes;
    children: HTMLElement | ReactElement | ReactNode | Array<ReactNode> | string;
    as?: "label" | "span" | "p" | "b" | "em" | "strong" | "time" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    /** truncate (px) */
    truncate?: number;
    /** for numbers */
    numeric?: boolean;
    /** flow */
    hyphenate?: boolean;
    /** break long word  */
    breakWord?: boolean;
    /** Last resort */
    dangerousColor?: string;
    /** Last resort */
    dangerousTransform?: string;
}
declare function Font(props: Props): JSX.Element;
declare const HelveticaNeue: (props: Props) => JSX.Element;
declare const HelveticaNeueMedium: (props: Props) => JSX.Element;
declare const HelveticaNeueBold: (props: Props) => JSX.Element;
declare const HelveticaNeueThin: (props: Props) => JSX.Element;
declare const Grotesk: (props: Props) => JSX.Element;
declare const HelveticaNeueBoldXL: (props: Props) => JSX.Element;
declare const HelveticaNeueBoldS: (props: Props) => JSX.Element;
export default Font;
export { HelveticaNeue, HelveticaNeueMedium, HelveticaNeueBold, HelveticaNeueThin, Grotesk, HelveticaNeueBoldXL, HelveticaNeueBoldS, };
