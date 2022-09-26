import { ReactNode, ReactElement } from "react";
interface Props {
    children: ReactNode;
    label: string;
    open: boolean;
    /** Callbacks */
    onClose: () => void;
    /** Button that close dialog */
    closeButton: ReactElement;
    /** Aspect ratio of Dialog */
    ratio?: "portrait" | "landscape" | "tray";
    className?: string;
}
declare function Dialog(props: Props): JSX.Element;
declare namespace Dialog {
    var Tray: (props: import("./Tray").Props) => JSX.Element;
}
export default Dialog;
