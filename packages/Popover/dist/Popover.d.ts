import { ReactElement } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { WithChildren } from "../../Types/dist/types";
interface Props extends WithChildren {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
    trigger: ReactElement;
    arrowFill?: string;
    classNames?: {
        trigger?: string;
        group?: string;
    };
}
declare function Popover(props: Props): JSX.Element;
declare namespace Popover {
    var Trigger: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    var Content: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<unknown>>;
}
export default Popover;
