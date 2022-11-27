import { ElementType, useMemo } from "react";
import AsProps from "./Interfaces/As";
import { WithChildren } from "../../Types/dist/types";
import styles from "./Layers.module.css";

interface Props extends AsProps, WithChildren {
  align?: "start" | "end" | "center";
  className?: string;
}

function Layers(props: Props) {
  const { align, as, children, className } = props;

  const classNames = useMemo(() => {
    const isNotDefault = align !== "center";
    return [className, styles.root, isNotDefault && styles[`${align}`]]
      .filter(Boolean)
      .join(" ");
  }, [align]);

  const Tag = as || ("div" as ElementType);

  return <Tag className={classNames}>{children}</Tag>;
}

export default Layers;
