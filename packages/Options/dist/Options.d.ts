import { ReactNode } from "react";
import OptionsProps from "./Interfaces/Options";
interface Props {
    id: string;
    options: OptionsProps;
    onChange?: (selection: string) => void;
    triggerOn?: ReactNode;
    triggerOff?: ReactNode;
    ssr?: boolean;
    portal?: boolean;
    disabled?: boolean;
    classNames?: {
        group?: string;
        button?: string;
        item?: string;
        selected?: string;
    };
    selection?: string;
}
declare function Options(props: Props): JSX.Element;
export default Options;
