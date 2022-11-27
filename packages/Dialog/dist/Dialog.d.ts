import { ReactElement } from "react";
import { WithChildren } from "../../Types/dist/types";
interface Props extends WithChildren {
    id: string;
    label: string;
    open: boolean;
    /** Callbacks */
    onClose: () => void;
    actions?: ReactElement;
    /** Aspect ratio of Dialog */
    ratio?: "portrait" | "landscape" | "tray";
    classNames?: {
        content?: string;
        title?: string;
        closeButton?: string;
    };
    overlay?: string;
    isLastDialogOpened?: boolean;
}
declare function Dialog(props: Props): JSX.Element;
declare namespace Dialog {
    var Tray: (props: import("./Tray").Props) => JSX.Element;
}
export default Dialog;
