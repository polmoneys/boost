import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    dir?: "ltr" | "rtl";
    classNames?: {
        root?: string;
        viewport?: string;
    };
    type?: "auto" | "always" | "scroll" | "hover";
}
declare function ScrollUnit(props: Props): JSX.Element;
export default ScrollUnit;
