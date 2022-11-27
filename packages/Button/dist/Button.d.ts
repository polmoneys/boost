import { ReactNode, ComponentProps } from "react";
interface Props extends ComponentProps<"button"> {
    variant?: "" | "text" | "icon";
    children: string | ReactNode;
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
}
declare function Button(props: Props): JSX.Element;
export default Button;
