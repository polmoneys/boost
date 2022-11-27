import { ReactElement } from "react";
import { FocusRing } from "@react-aria/focus";

interface Props {
  children: ReactElement;
  autofocus?: boolean;
  within?: boolean;
  isTextInput?: boolean;
  disabled?: boolean;
}

function Unit(props: Props) {
  const {
    children,
    autofocus = false,
    within = false,
    isTextInput = false,
    disabled = false,
  } = props;

  return (
    <FocusRing
      autoFocus={autofocus}
      focusClass={disabled ? "no-ring" : "ring"}
      focusRingClass={disabled ? "no-ring" : "ring-keyboard"}
      within={within}
      isTextInput={isTextInput}
    >
      {children}
    </FocusRing>
  );
}

export default Unit;
