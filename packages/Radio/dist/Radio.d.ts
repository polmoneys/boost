import { ChangeEvent, ComponentProps } from "react";
import RenderProp from "./Interfaces/RenderProp";
import RadioGroup from "./RadioGroup";
export interface RadioProps extends ComponentProps<"input"> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label?: string;
    renderLabel?: RenderProp<{
        checked: boolean;
        checkboxLabel: string;
    }, HTMLElement>;
    checkboxSize?: string;
    classNames?: {
        root?: string;
        label?: string;
        input?: string;
        checked?: string;
    };
    xl?: boolean;
}
declare function Radio(props?: RadioProps): JSX.Element;
declare namespace Radio {
    var Group: typeof RadioGroup;
}
export default Radio;
