import { ReactElement } from "react";
import RenderProp from "./Interfaces/RenderProp";
interface Props {
    children: Array<ReactElement>;
    initial: string;
    gap?: string;
    checkboxSize?: string;
    renderLabel: RenderProp<{
        checked: boolean;
        checkboxLabel: string;
    }, HTMLElement>;
    onChange: (selection: string) => void;
}
declare function RadioGroup(props: Props): JSX.Element;
export default RadioGroup;
