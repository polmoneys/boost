import { ReactNode } from "react";
import { FocusScope } from "@react-aria/focus";

const VariantOptions = ["autofocus", "restorefocus"] as const;
type Variants = typeof VariantOptions[number];
type ArrayProp = Array<Variants> | Variants;

interface Props {
  children: ReactNode;
  initial?: boolean;
  options?: ArrayProp;
}

function Trap(props: Props) {
  const { initial, children, options = ["restorefocus"] } = props;
  let config = {
    contain: initial ? true : false,
  };
  if (options !== undefined) {
    const items = Array.isArray(options) ? options : [options];
    items?.map(item => {
      config = {
        ...config,
        [item]: true,
      };
    });
  }
  return <FocusScope {...config}>{children}</FocusScope>;
}

export default Trap;
