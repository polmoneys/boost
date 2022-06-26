declare const VariantOptions: readonly ["flex", "grid"];
declare type Variants = typeof VariantOptions[number];
interface VariantProps {
    css?: Variants;
}
export default VariantProps;
