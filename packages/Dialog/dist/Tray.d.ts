import { ReactNode, ReactElement } from "react";
export interface Props {
    closeButton: ReactElement;
    children: ReactNode;
    label: string;
    /** 🚨 */
    open: boolean;
    /** Callbacks */
    onClose: () => void;
    className?: string;
}
declare const Tray: (props: Props) => JSX.Element;
export default Tray;
