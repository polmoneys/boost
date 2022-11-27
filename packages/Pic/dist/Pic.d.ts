import { Dictionary } from "../../Types/dist/types";
interface Props {
    alt: string;
    src: string;
    height?: string;
    sources?: Dictionary;
    eager?: boolean;
    DONOTUse?: {
        DONOTStyle: Dictionary;
    };
    priority?: "low" | "hight";
}
declare function Pic(props: Props): JSX.Element;
export default Pic;
