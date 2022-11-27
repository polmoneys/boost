import { ReactElement } from "react";
import { RenderProp } from "../../Types/dist/types";
interface Props {
    children: Array<ReactElement>;
    initial: string | Array<string>;
    className?: string;
    gap?: string;
    radioSize?: string;
    renderLabel?: RenderProp<{
        checked: boolean;
        radioLabel: string;
    }, HTMLElement>;
    onChange: (selection: string) => void;
    direction?: "row" | "column";
}
declare function RadioGroup(props: Props): JSX.Element;
export default RadioGroup;
