import { ReactNode, Fragment } from "react";
import { FocusRing } from "@react-aria/focus";

interface Props {
  children: ReactNode;
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
  within?: boolean;
}

function Unit(props: Props) {
  const {
    children,
    keyboard,
    autofocus = false,
    within = false,
    nonKeyboard,
  } = props;

  return (
    <FocusRing
      autoFocus={autofocus}
      focusClass={nonKeyboard ? "ring" : "no-ring"}
      focusRingClass={keyboard ? "ring-keyboard" : "no-ring-keyboard"}
      within={within}
    >
      <Fragment>{children}</Fragment>
    </FocusRing>
  );
}

export default Unit;
