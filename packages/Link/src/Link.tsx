import { ReactNode, useMemo, ComponentProps } from "react";
import { Unit } from "unit-react";
import styles from "./Link.module.css";

interface Props extends ComponentProps<"a"> {
  variant?: "button" | "";
  children: string | ReactNode;
  newTab?: boolean;
  href: string;
  tooltip?: string;
  keyboard?: boolean;
  nonkeyboard?: boolean;
}

function Link(props: Props) {
  const {
    children,
    newTab = false,
    href,
    variant = "",
    className,
    tooltip,
    ...rest
  } = props;

  const { rel, target } = useMemo(() => {
    const target_ = newTab ? "_blank" : "";
    return {
      target: target_,
      rel: target_ ? "noopener noreferrer" : undefined,
    };
  }, [newTab]);

  const isButton = variant === "button";
  const classNames = [className, styles.root, isButton && styles.button]
    .filter(Boolean)
    .join(" ");

  return (
    <Unit disabled={!isButton}>
      <a
        {...rest}
        className={classNames}
        rel={rel}
        target={target}
        href={href}
        {...(tooltip !== undefined && { "data-tooltip": tooltip })}
      >
        {children}
      </a>
    </Unit>
  );
}

export default Link;
