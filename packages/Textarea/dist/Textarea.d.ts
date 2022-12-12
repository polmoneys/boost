import { ComponentProps } from "react";
interface Props extends Omit<ComponentProps<"textarea">, "onChange" | "className"> {
    onChangeValue: (value: string | number) => void;
    label: string;
    classNames?: {
        group?: string;
        input?: string;
    };
    autofocus?: boolean;
    initial: string | number;
}
declare function Textarea(props: Props): JSX.Element;
export default Textarea;
