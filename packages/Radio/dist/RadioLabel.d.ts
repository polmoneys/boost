import { ChangeEvent, ComponentProps } from "react";
import { RenderProp } from "../../Types/dist/types";
export interface RadioProps extends ComponentProps<"input"> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label?: string;
    renderLabel?: RenderProp<{
        checked: boolean;
        radioLabel: string;
    }, HTMLElement>;
    radioSize?: string;
    classNames?: {
        group?: string;
        label?: string;
        input?: string;
        checked?: string;
    };
    xl?: boolean;
}
declare function RadioLabel(props?: RadioProps): JSX.Element;
export default RadioLabel;
