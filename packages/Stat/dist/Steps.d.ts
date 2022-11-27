import { ReactElement } from "react";
interface Item {
    label: ReactElement;
    completed: boolean;
}
interface Props {
    items: Array<Item>;
    classNames?: {
        group?: string;
        item?: string;
        complete?: string;
    };
    id: string;
}
declare function Steps(props: Props): JSX.Element;
export default Steps;
