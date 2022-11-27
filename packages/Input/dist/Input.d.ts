import { ComponentProps, ChangeEvent } from "react";
interface Props extends Omit<ComponentProps<"input">, "onChange" | "className"> {
    errorElementId?: string;
    autocomplete?: "off" | "on" | "honorific-prefix" | "new-password" | "current-password" | "one-time-code" | "cc-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc";
    inputmode?: "text" | "numeric" | "tel" | "search" | "email" | "url";
    enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeValue?: (value: string) => void;
    id: string;
    label: string;
    classNames?: {
        group?: string;
        input?: string;
    };
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
    direction?: "row" | "column";
    px?: string;
    variant?: "" | "search";
}
declare function Input(props: Props): JSX.Element;
declare namespace Input {
    var Search: (props: Props) => JSX.Element;
}
export default Input;
