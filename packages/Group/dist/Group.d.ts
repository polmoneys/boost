import AsProps from "./Interfaces/As";
import VariantProps from "./Interfaces/Variants";
import { Dictionary, WithChildren } from "../../Types/dist/types";
interface Props extends AsProps, VariantProps, WithChildren {
    className?: string;
    gap?: string;
    size?: string;
    id?: string;
    options?: {
        stretch?: boolean;
        alignItems?: string;
        justifyContent?: string;
        wrap?: string;
        direction?: string;
        placeItems?: string;
        DANGEROUS?: Dictionary;
    };
}
declare function Group(props: Props): JSX.Element;
export default Group;
