import { ReactNode } from "react";
declare const VariantOptions: readonly ["autofocus", "restorefocus"];
declare type Variants = typeof VariantOptions[number];
declare type ArrayProp = Array<Variants> | Variants;
interface Props {
    children: ReactNode;
    initial?: boolean;
    options?: ArrayProp;
}
declare function Trap(props: Props): JSX.Element;
export default Trap;
