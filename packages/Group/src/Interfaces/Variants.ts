const VariantOptions = ["flex", "grid"] as const;
type Variants = typeof VariantOptions[number];

interface VariantProps {
  css?: Variants;
}

export default VariantProps;
