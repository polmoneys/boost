import { ComponentProps } from "react";
interface Props extends ComponentProps<"input"> {
    initial: boolean;
    onChangeValue: (value: boolean) => void;
    label: string;
}
declare function Switch(props: Props): JSX.Element;
export default Switch;
