import { ReactNode } from "react";
import OptionsProps from "./Interfaces/Options";
interface Props {
    options: OptionsProps;
    onChange?: (selection: string) => void;
    triggerOn?: ReactNode;
    triggerOff?: ReactNode;
    ssr?: boolean;
    disabled?: boolean;
    classNames?: {
        group?: string;
        button?: string;
        item?: string;
    };
}
declare function Options(props: Props): JSX.Element;
export default Options;
