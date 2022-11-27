import AsProps from "./Interfaces/As";
import Options from "./Interfaces/Options";
import { WithChildren } from "../../Types/dist/types";
export interface Props extends AsProps, WithChildren {
    className?: string;
    gap?: string;
    options?: Options;
    maskSize: string;
}
declare function Track(props: Props): JSX.Element;
export default Track;
