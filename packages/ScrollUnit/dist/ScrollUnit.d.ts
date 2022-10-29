import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    config?: {
        viewportStyles?: Record<string, string>;
        rootStyles?: Record<string, string>;
        dir?: "ltr" | "rtl";
    };
    type?: "auto" | "always" | "scroll" | "hover";
}
declare function ScrollUnit(props: Props): JSX.Element;
export default ScrollUnit;
