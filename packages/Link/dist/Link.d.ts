import { ReactNode, ComponentProps } from "react";
interface Props extends ComponentProps<"a"> {
    variant?: "button" | "default";
    children: string | ReactNode;
    newTab?: boolean;
    href: string;
}
declare function Link(props: Props): JSX.Element;
export default Link;
