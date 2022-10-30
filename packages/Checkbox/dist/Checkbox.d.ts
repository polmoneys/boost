import { ChangeEvent } from "react";
declare type Props = {
    isMixed?: boolean;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    label: string;
    id: string;
    name: string;
    value: string;
    fill?: string;
};
declare function Checkbox(props: Props): JSX.Element;
export default Checkbox;
