const Variants = ["autofocus", "restorefocus"] as const;
type Options = typeof Variants[number];
type OptionsProps = Array<Options> | Options;

export default OptionsProps;
