import { ReactNode, useMemo, ComponentProps } from "react";
import styles from "./Link.module.css";

interface Props extends ComponentProps<"a"> {
  variant?: "button" | "default";
  children: string | ReactNode;
  newTab?: boolean;
  href: string;
}

function Link(props: Props) {
  const {
    children,
    newTab = false,
    href,
    variant = "default",
    className,
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
    <a {...rest} className={classNames} rel={rel} target={target} href={href}>
      {children}
    </a>
  );
}

export default Link;
