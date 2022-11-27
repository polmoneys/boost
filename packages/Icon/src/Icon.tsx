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
    variant,
    fill = "var(--accent)",
    stroke = "currentColor",
    strokeWidth = 2,
    size = "md",
    // TODO:
    disabled = false,
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
export const IconPlus = Compose(iconPaths["plus"]);
export const IconMinus = Compose(iconPaths["minus"]);
export const IconCross = Compose(iconPaths["cross"]);
export const IconCheck = Compose(iconPaths["check"]);
export const IconDash = Compose(iconPaths["dash"]);
export const IconSlash = Compose(iconPaths["slash"]);
export const IconCaretUp = Compose(iconPaths["caretUp"]);
export const IconCaretDown = Compose(iconPaths["caretDown"]);
export const IconDotsX = Compose(iconPaths["dotsX"]);
export const IconDotsY = Compose(iconPaths["dotsY"]);
export const IconStar = Compose(iconPaths["star"]);
export const IconIg = Compose(iconPaths["instagram"]);
export const IconTwitter = Compose(iconPaths["twitter"]);
export const IconGithub = Compose(iconPaths["github"]);
export const IconQuestion = Compose(iconPaths["question"]);
export const IconEmail = Compose(iconPaths["email"]);
export const IconBookmark = Compose(iconPaths["bookmark"]);
export const IconPin = Compose(iconPaths["pin"]);
export const IconHeart = Compose(iconPaths["heart"]);
export const IconColorPicker = Compose(iconPaths["colorPicker"]);

export default Icon;
