const VariantOptions = ["flex", "grid"] as const;
type Variants = typeof VariantOptions[number];

interface VariantProps {
  variant?: Variants;
}

export default VariantProps;
