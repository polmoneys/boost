import { Fragment, useMemo } from "react";
import styles from "./Icon.module.css";
import iconPaths from "./icons";

interface Props {
  disabled?: boolean;
  variant?: "outline" | "solid";
  d?: string;
  size?: "sm" | "md" | "lg";
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

function Icon(props: Props) {
  const {
    d = "",
    disabled = false,
    variant,
    fill = "var(--accent-highlight)",
    stroke = "currentColor",
    strokeWidth = 2,
    size = "md",
  } = props;

  const { outline, backgroundColor } = useMemo(() => {
    const bg = variant === "solid" ? fill : "transparent";
    let strokeTheme = `${strokeWidth}px solid transparent`;
    if (variant !== undefined && variant === "outline")
      strokeTheme = `${strokeWidth}px solid ${stroke}`;
    if (variant !== undefined && variant === "solid")
      strokeTheme = `${strokeWidth}px solid ${fill}`;

    return { outline: strokeTheme, backgroundColor: bg };
  }, [variant]);

  const inlineStyles = {
    svg: {
      outline,
      backgroundColor,
      strokeWidth,
    },
  };

  const iconSize = useMemo(() => {
    if (size === "sm") return "12";
    if (size === "md") return "15";
    return "30";
  }, [size]);
  if (d === "") return <Fragment />;
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 15 15"
      focusable="false"
      style={inlineStyles.svg}
      className={styles.root}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill={stroke} />
    </svg>
  );
}

const Compose = (d: string) => (props: Props) => <Icon {...props} d={d} />;

// Sugar
const IconPlus = Compose(iconPaths["plus"]);
const IconMinus = Compose(iconPaths["minus"]);
const IconCross = Compose(iconPaths["cross"]);
const IconCheck = Compose(iconPaths["check"]);
const IconDash = Compose(iconPaths["dash"]);
const IconSlash = Compose(iconPaths["slash"]);
const IconCaretUp = Compose(iconPaths["caretUp"]);
const IconCaretDown = Compose(iconPaths["caretDown"]);
const IconDotsX = Compose(iconPaths["dotsX"]);
const IconDotsY = Compose(iconPaths["dotsY"]);

export default Icon;
export {
  IconPlus,
  IconMinus,
  IconCross,
  IconCheck,
  IconDash,
  IconSlash,
  IconCaretUp,
  IconCaretDown,
  IconDotsX,
  IconDotsY,
};
