import { ChangeEvent, ComponentProps } from "react";
import { RenderProp } from "../../Types/dist/types";
import RadioGroup from "./RadioGroup";
import RadioLabel from "./RadioLabel";
export interface RadioProps extends ComponentProps<"input"> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label?: string;
    renderLabel?: RenderProp<{
        checked: boolean;
        checkboxLabel: string;
    }, HTMLElement>;
    classNames?: {
        group?: string;
        label?: string;
        input?: string;
        checked?: string;
    };
    xl?: boolean;
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
}
declare function Radio(props?: RadioProps): JSX.Element;
declare namespace Radio {
    var Group: typeof RadioGroup;
    var Label: typeof RadioLabel;
}
export default Radio;
