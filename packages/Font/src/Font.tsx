import { AriaAttributes, ElementType, useMemo, ReactNode } from "react";
import AsProps from "./Interfaces/As";
import Sizes from "./Interfaces/Sizes";
import styles from "./Font.module.css";

interface Props extends AriaAttributes, AsProps {
  size?: Sizes;
  children: ReactNode;
  className?: string;
  /** truncate (px) */
  truncate?: number;
  /** for numbers */
  numeric?: boolean;
  /** flow */
  hyphenate?: boolean;
  /** break long word  */
  breakWord?: boolean;
  /** Last resort */
  dangerousColor?: string;
  /** Last resort */
  dangerousTransform?: string;
}

function Font(props: Props) {
  const {
    as,
    truncate,
    dangerousColor,
    dangerousTransform,
    children,
    breakWord = false,
    hyphenate = false,
    numeric = false,
    className,
    size = "r",
    ...rest
  } = props;
  const Tag = as || ("p" as ElementType);

  const css = useMemo(
    () =>
      [
        className,
        styles[size],
        breakWord && styles.break,
        hyphenate && styles.hyphenate,
        numeric && styles.numeric,
      ]
        .filter(Boolean)
        .join(" "),
    [className, size, breakWord, hyphenate, numeric]
  );

  return (
    <Tag
      {...rest}
      style={{
        ...(truncate && { width: `${truncate}px` }),
        ...(dangerousColor && { color: dangerousColor }),
        ...(dangerousTransform && { transform: dangerousTransform }),
      }}
      className={css}
    >
      {children}
    </Tag>
  );
}

const Compose = (composeClassName: string) => (props: Props) => {
  const { className, ...rest } = props;
  const css = useMemo(
    () => [props.className, composeClassName].filter(Boolean).join(" "),
    [props.className, composeClassName]
  );
  return <Font {...rest} className={css} />;
};
const ComposeSize = (Base: typeof Font, size: Sizes) => (props: Props) =>
  <Base {...props} size={size} />;

// Family variants
const HelveticaNeue = Compose(styles.helveticaNeue);
const HelveticaNeueMedium = Compose(styles.medium);
const HelveticaNeueBold = Compose(styles.bold);
const HelveticaNeueThin = Compose(styles.thin);
const Grotesk = Compose(styles.grotesk);

// Size variants
const HelveticaNeueBoldXL = ComposeSize(HelveticaNeueBold, "xl");
const HelveticaNeueBoldS = ComposeSize(HelveticaNeueBold, "s");
const HelveticaNeueS = ComposeSize(HelveticaNeue, "s");

export default Font;
export {
  HelveticaNeue,
  HelveticaNeueMedium,
  HelveticaNeueBold,
  HelveticaNeueThin,
  Grotesk,
  HelveticaNeueBoldXL,
  HelveticaNeueBoldS,
  HelveticaNeueS,
};
