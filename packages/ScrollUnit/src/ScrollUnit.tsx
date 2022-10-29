import { ReactNode } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styles from "./ScrollUnit.module.css";

interface Props {
  children: ReactNode;
  dir?: "ltr" | "rtl";
  classNames?: {
    root?: string;
    viewport?: string;
  };
  type?: "auto" | "always" | "scroll" | "hover";
}

function ScrollUnit(props: Props) {
  const { children, type = "auto", dir = "ltr", classNames, ...rest } = props;

  const rootClassnames = [styles.root, classNames?.root]
    .filter(Boolean)
    .join(" ");
  const viewportClassnames = [styles.viewport, classNames?.viewport]
    .filter(Boolean)
    .join(" ");

  return (
    <ScrollArea.Root className={rootClassnames} type={type} {...rest}>
      <ScrollArea.Viewport className={viewportClassnames}>
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
