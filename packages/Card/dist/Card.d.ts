import { ReactNode } from "react";
import { Dictionary } from "./Interfaces/Dictionary";
import AsProps from "./Interfaces/As";
import { CardMedia } from "card-media-react";
interface Props extends AsProps {
    children: ReactNode;
    ratio: "square" | "portrait" | "landscape";
    DONOTUse?: {
        DONOTStyle: Dictionary;
    };
}
declare function Card(props: Props): JSX.Element;
declare namespace Card {
    var Media: typeof CardMedia;
}
export default Card;
