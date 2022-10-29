import { ReactNode } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styles from "./ScrollUnit.module.css";

interface Props {
  children: ReactNode;
  config?: {
    viewportStyles?: Record<string, string>;
    rootStyles?: Record<string, string>;
    dir?: "ltr" | "rtl";
  };
  type?: "auto" | "always" | "scroll" | "hover";
}

function ScrollUnit(props: Props) {
  const {
    children,
    type = "auto",
    config = {
      rootStyles: {
        width: "290px",
        height: "200px",
        border: "var(--border-width) solid currentColor",
      },
      viewportStyles: { backgroundColor: "transparent" },
      dir: "ltr",
    },
    ...rest
  } = props;

  return (
    <ScrollArea.Root
      className={styles.root}
      style={config.rootStyles}
      type={type}
      {...rest}
    >
      <ScrollArea.Viewport
        className={styles.viewport}
        style={config.viewportStyles}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
        <ScrollArea.Thumb className={styles.thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className={styles.scrollbar}
      >
        <ScrollArea.Thumb className={styles.thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={styles.corner} />
    </ScrollArea.Root>
  );
}

export default ScrollUnit;
