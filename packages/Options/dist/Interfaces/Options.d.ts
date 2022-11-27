import { ReactNode } from "react";
declare type Options = Array<{
    value: string;
    label: string | ReactNode;
    id: string;
    href?: string;
    icon?: ReactNode;
}>;
export default Options;
