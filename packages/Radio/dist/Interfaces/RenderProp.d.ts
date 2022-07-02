import { ReactElement } from "react";
interface RenderProp<TChildrenProps, TElement = any> {
    (props: TChildrenProps): ReactElement<TElement>;
}
export default RenderProp;
