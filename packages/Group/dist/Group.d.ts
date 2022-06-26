import { ReactNode } from "react";
import AsProps from "./Interfaces/As";
import VariantProps from "./Interfaces/Variants";
import { Dictionary } from "./Interfaces/Dictionary";
interface Props extends AsProps, VariantProps {
    className?: string;
    children: ReactNode;
    gap?: string;
    size?: string;
    DONOTUse?: {
        DONOTStyle: Dictionary;
    };
    options?: {
        stretch?: boolean;
        alignItems?: string;
        justifyContent?: string;
        wrap?: string;
        direction?: string;
        placeItems?: never;
    } | {
        placeItems?: string;
        alignItems?: never;
        stretch?: never;
        justifyContent?: never;
        wrap?: never;
        direction?: never;
    };
}
declare function Group(props: Props): JSX.Element;
export default Group;
