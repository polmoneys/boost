import { ReactNode } from "react";
import { Pic } from "pic-react";
import AsProps from "./Interfaces/As";
import { WithChildren, Dictionary } from "../../Types/dist/types";
interface Props extends AsProps, WithChildren {
    ratio: "square" | "portrait" | "landscape";
    DONOTUse?: {
        DONOTStyle: Dictionary;
    };
    className?: string;
}
declare function Card(props: Props): JSX.Element;
declare namespace Card {
    var Title: (props: TitleProps) => JSX.Element;
    var Media: typeof Pic;
}
interface TitleProps {
    actions?: ReactNode;
    children: ReactNode;
    className?: string;
}
export default Card;
