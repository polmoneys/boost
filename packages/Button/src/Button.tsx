import { ReactNode, ComponentProps } from "react";
import { Unit } from "unit-react";
import styles from "./Button.module.css";

interface Props extends ComponentProps<"button"> {
  variant?: "" | "text" | "icon";
  children: string | ReactNode;
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
}

function Button(props: Props) {
  const {
    children,
    keyboard = true,
    autoFocus = false,
    nonKeyboard = true,
    variant = "",
    className,
    ...rest
  } = props;

  const isText = variant === "text";
  const isIcon = variant === "icon";
  const classNames = [
    className,
    styles.group,
    isText && styles.text,
    isIcon && styles.icon,
  ]
    .filter(Boolean)
    .join(" ");
  const disableRing = !keyboard && !nonKeyboard;
  return (
    <Unit autofocus={autoFocus} disabled={disableRing}>
      <button {...rest} className={classNames}>
        {children}
      </button>
    </Unit>
  );
}

export default Button;
