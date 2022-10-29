import { ComponentProps, ChangeEvent } from "react";
interface Props extends Omit<ComponentProps<"input">, "onChange"> {
    errorElementId?: string;
    autocomplete?: "off" | "on" | "honorific-prefix" | "new-password" | "current-password" | "one-time-code" | "cc-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc";
    inputmode?: "text" | "numeric" | "tel" | "search" | "email" | "url";
    enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeValue?: (value: string) => void;
    id: string;
    label: string;
    classNames?: {
        root?: string;
        input?: string;
        focusWithin?: string;
    };
}
declare function Input(props: Props): JSX.Element;
export default Input;
