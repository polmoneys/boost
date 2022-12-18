import { ReactNode } from "react";
declare function Move(): JSX.Element;
declare namespace Move {
    var Drag: (props: Props) => JSX.Element | null;
    var Drop: (props: DropProps) => JSX.Element;
    var Sortable: typeof import("./Sortable").default;
}
interface Props {
    children?: ReactNode;
    preview?: boolean;
    classNames?: {
        group?: string;
        dragging?: string;
        dropping?: string;
    };
    onCancel?: (item: string) => void;
    onDrop?: (y: number) => void;
    onMove?: (position: {
        x: number;
        y: number;
    }) => void;
    id: string;
    label?: string;
    mode?: "move" | "copy";
}
interface DropProps extends Omit<Props, "children" | "onDrop" | "preview"> {
    initial: Array<string>;
    onDrop: (items: Array<string>) => void;
}
export default Move;
