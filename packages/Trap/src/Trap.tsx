import { FocusScope } from "@react-aria/focus";
import OptionsProps from "./Interfaces/Options";
import { WithChildren } from "../../Types/dist/types";

interface Props extends WithChildren {
  initial?: boolean;
  options?: OptionsProps;
}

function Trap(props: Props) {
  const { initial, children, options = ["restorefocus"] } = props;
  let config = {
    contain: initial,
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
