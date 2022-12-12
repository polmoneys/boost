import { ComponentProps, ReactNode } from "react";
declare function C(): JSX.Element;
declare namespace C {
    var XY: ({ x, y, children, as }: TransformProps) => JSX.Element;
    var Pin: ({ children, className, ...aria }: PinProps) => JSX.Element;
    var Br: () => JSX.Element;
}
interface TransformProps {
    x?: number;
    y?: number;
    children: ReactNode;
    as?: "div" | "span" | "li";
}
interface PinProps extends ComponentProps<"div"> {
    children: ReactNode;
}
export default C;
