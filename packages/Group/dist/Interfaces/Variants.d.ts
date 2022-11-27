declare const VariantOptions: readonly ["flex", "grid"];
declare type Variants = typeof VariantOptions[number];
interface VariantProps {
    variant?: Variants;
}
export default VariantProps;
