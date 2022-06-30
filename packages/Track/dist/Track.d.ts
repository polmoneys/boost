import { ReactNode } from "react";
import AsProps from "./Interfaces/As";
import Options from "./Interfaces/Options";
export interface Props extends AsProps {
    children: ReactNode;
    className?: string;
    gap?: string;
    options?: Options;
    maskSize: string;
}
declare function Track(props: Props): JSX.Element;
export default Track;
