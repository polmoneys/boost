import { ReactNode, ComponentProps } from "react";
interface Props extends ComponentProps<"a"> {
    variant?: "button" | "";
    children: string | ReactNode;
    newTab?: boolean;
    href: string;
    tooltip?: string;
}
declare function Link(props: Props): JSX.Element;
export default Link;
