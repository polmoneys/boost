import { ComponentProps } from "react";
interface Props extends ComponentProps<"input"> {
    initial: number;
    onChangeValue: (value: number) => void;
}
declare function Range(props: Props): JSX.Element;
export default Range;
