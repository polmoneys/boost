import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    keyboard?: boolean;
    autofocus?: boolean;
    nonKeyboard?: boolean;
    within?: boolean;
}
declare function Unit(props: Props): JSX.Element;
export default Unit;
