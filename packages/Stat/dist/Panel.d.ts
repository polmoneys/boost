import { ReactNode } from "react";
interface Action {
    label: ReactNode;
    action?: () => void;
    className?: string;
}
interface Props {
    children: ReactNode;
    title: string;
    id: string;
    description: string;
    subtitle?: string;
    actions?: Array<Action>;
    classNames?: {
        group?: string;
        content?: string;
        footer?: string;
    };
}
declare function Panel(props: Props): JSX.Element;
export declare const PanelTransparent: (props: Props) => JSX.Element;
export default Panel;
