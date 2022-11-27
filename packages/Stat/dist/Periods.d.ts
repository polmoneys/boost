import { DomElementSize } from "../../Types/dist/types";
interface Props {
    colors?: {
        start: string;
        end: string;
    };
    size: `${string}%`;
    width?: DomElementSize;
    height?: DomElementSize;
    marker?: {
        width: DomElementSize;
        height: DomElementSize;
        color: string;
        position: `${string}%`;
    };
    className?: string;
}
declare function Periods(props: Props): JSX.Element;
export default Periods;
