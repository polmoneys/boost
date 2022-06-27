import { ReactNode } from "react";
import AsProps from "./Interfaces/As";
interface Props extends AsProps {
    align?: "start" | "end" | "center";
    children: ReactNode;
    className?: string;
}
declare function Layers(props: Props): JSX.Element;
export default Layers;
