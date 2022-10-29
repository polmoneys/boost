import { ReactNode, ComponentProps } from "react";
declare type SurfaceTypes = "highlight" | "" | "success" | "error";
interface Props extends ComponentProps<"button"> {
    variant?: "text" | "icon" | "default";
    children: string | ReactNode;
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
    surface?: SurfaceTypes;
}
declare function Button(props: Props): JSX.Element;
export default Button;
