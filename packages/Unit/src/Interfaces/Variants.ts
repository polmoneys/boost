const VariantOptions = ["primary", "secondary"] as const;
type Variants = typeof VariantOptions[number];

interface VariantProps {
  variant: Variants;
}

export default VariantProps;
