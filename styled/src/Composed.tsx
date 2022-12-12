import { ComponentProps, Fragment, ReactNode } from "react";
import styles from "./Composed.module.css";

function C() {
  return <Fragment />;
}

interface TransformProps {
  x?: number;
  y?: number;
  children: ReactNode;
  as?: "div" | "span" | "li";
}

C.XY = ({ x = 0, y = 0, children, as = "div" }: TransformProps) => {
  const Tag = as;
  return (
    <Tag
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </Tag>
  );
};

interface PinProps extends ComponentProps<"div"> {
  children: ReactNode;
}

C.Pin = ({ children, className, ...aria }: PinProps) => {
  const groupClassName = [styles.groupPin, className].filter(Boolean).join(" ");

  return (
    <div {...aria} className={groupClassName}>
      {children}
    </div>
  );
};

C.Br = () => <br aria-hidden="true" />;

export default C;
