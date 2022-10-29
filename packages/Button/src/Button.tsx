import { ReactNode, ComponentProps } from "react";
import { Unit } from "unit-react";
import styles from "./Button.module.css";

type SurfaceTypes = "highlight" | "" | "success" | "error";

interface Props extends ComponentProps<"button"> {
  variant?: "text" | "icon" | "default";
  children: string | ReactNode;
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
  surface?: SurfaceTypes;
}

function Button(props: Props) {
  const {
    children,
    keyboard = true,
    autoFocus = false,
    nonKeyboard = true,
    variant = "default",
    surface = "",
    className,
    ...rest
  } = props;

  const isText = variant === "text";
  const isIcon = variant === "icon";
  const classNames = [
    className,
    styles.root,
    isText && styles.text,
    isIcon && styles.icon,
    surface !== undefined && `surface-${surface}`,
    // py !== undefined && `py ${[...Array(py).keys()].map(k => "$").join("")}`,
    // px !== undefined && `px ${[...Array(px).keys()].map(k => "$").join("")}`,
    // p !== undefined && `p ${[...Array(p).keys()].map(k => "$").join("")}`,
    // pb !== undefined && `pb ${[...Array(pb).keys()].map(k => "$").join("")}`,
    // pt !== undefined && `p ${[...Array(pt).keys()].map(k => "$").join("")}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Unit autofocus={autoFocus} keyboard={keyboard} nonKeyboard={nonKeyboard}>
      <button {...rest} className={classNames}>
        {children}
      </button>
    </Unit>
  );
}

export default Button;
