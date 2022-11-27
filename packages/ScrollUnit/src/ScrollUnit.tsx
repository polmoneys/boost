import * as ScrollArea from "@radix-ui/react-scroll-area";
import { WithChildren } from "../../Types/dist/types";
import styles from "./ScrollUnit.module.css";

interface Props extends WithChildren {
  dir?: "ltr" | "rtl";
  classNames?: {
    group?: string;
    viewport?: string;
  };
  type?: "auto" | "always" | "scroll" | "hover";
}

function ScrollUnit(props: Props) {
  const { children, type = "hover", dir = "ltr", classNames, ...rest } = props;

  const groupClassnames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(" ");
  const viewportClassnames = [styles.viewport, classNames?.viewport]
    .filter(Boolean)
    .join(" ");

  return (
    <ScrollArea.Root className={groupClassnames} type={type} {...rest}>
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
