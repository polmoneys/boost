import { ReactNode } from "react";
import AsProps from "./Interfaces/As";
interface Props extends AsProps {
    children: ReactNode;
    className?: string;
    options?: {
        threshold?: number;
        rootMargin?: string;
        triggerOnce?: boolean;
    };
    onChange?: (on: boolean) => void;
}
declare function Fence(props: Props): JSX.Element;
export default Fence;
