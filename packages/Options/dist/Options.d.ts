import { ReactNode } from "react";
interface Props {
    options: Array<{
        value: string;
        id: string;
        href?: string;
    }>;
    onChange?: (selection: string) => void;
    triggerOn?: ReactNode;
    triggerOff?: ReactNode;
    ssr?: boolean;
    disabled?: boolean;
}
declare function Options(props: Props): JSX.Element;
export default Options;
