import { AriaAttributes, ReactNode } from "react";
import AsProps from "./Interfaces/As";
import Sizes from "./Interfaces/Sizes";
interface Props extends AriaAttributes, AsProps {
    size?: Sizes;
    children: ReactNode;
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
declare const HelveticaNeueS: (props: Props) => JSX.Element;
export default Font;
export { HelveticaNeue, HelveticaNeueMedium, HelveticaNeueBold, HelveticaNeueThin, Grotesk, HelveticaNeueBoldXL, HelveticaNeueBoldS, HelveticaNeueS, };
