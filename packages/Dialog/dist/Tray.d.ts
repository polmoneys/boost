import { ReactElement } from "react";
import { WithChildren } from "../../Types/dist/types";
export interface Props extends WithChildren {
    actions?: ReactElement;
    label: string;
    id: string;
    /** 🚨 */
    open: boolean;
    /** Callbacks */
    onClose: () => void;
    classNames?: {
        content?: string;
        title?: string;
        closeButton?: string;
    };
    overlay?: string;
}
declare const Tray: (props: Props) => JSX.Element;
export default Tray;
