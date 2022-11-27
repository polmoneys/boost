import { ReactElement } from "react";
interface Props {
    children: ReactElement;
    autofocus?: boolean;
    within?: boolean;
    isTextInput?: boolean;
    disabled?: boolean;
}
declare function Unit(props: Props): JSX.Element;
export default Unit;
