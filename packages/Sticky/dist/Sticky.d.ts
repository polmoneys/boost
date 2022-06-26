import { ReactNode } from "react";
import AsProps from "./Interfaces/As";
interface Props extends AsProps {
    children: string | ReactNode;
    options?: {
        top: number;
        left: number;
    };
    className?: string;
}
declare function Sticky(props: Props): JSX.Element;
export default Sticky;
