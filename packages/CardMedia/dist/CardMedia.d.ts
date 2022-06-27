import { Dictionary } from "./Interfaces/Dictionary";
interface Props {
    alt: string;
    src: string;
    height?: string;
    sources?: Dictionary;
    eager?: boolean;
    DONOTUse?: {
        DONOTStyle: Dictionary;
    };
}
declare function CardMedia(props: Props): JSX.Element;
export default CardMedia;
