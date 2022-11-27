import { ChangeEvent } from "react";
declare type Props = {
    label: string;
    id: string;
    name: string;
    value: string;
    isMixed?: boolean;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    classNames?: {
        group?: string;
        checkbox?: {
            checked?: string;
            unchecked?: string;
            mixed?: string;
        };
    };
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
};
declare function Checkbox(props: Props): JSX.Element;
export default Checkbox;
