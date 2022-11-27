import { WithChildren } from "../../Types/dist/types";
interface Props extends WithChildren {
    dir?: "ltr" | "rtl";
    classNames?: {
        group?: string;
        viewport?: string;
    };
    type?: "auto" | "always" | "scroll" | "hover";
}
declare function ScrollUnit(props: Props): JSX.Element;
export default ScrollUnit;
