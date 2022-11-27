import { useState, useEffect, ReactElement, cloneElement } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { ScrollUnit } from "scroll-unit-react";
import { Group } from "group-react";
import { Button } from "button-react";
import { IconCross } from "icon-react";
import { WithChildren } from "../../Types/dist/types";
import styles from "./Dialog.module.css";

export interface Props extends WithChildren {
  actions?: ReactElement;
  label: string;
  id: string;
  /** 🚨 */
  open: boolean;
  /** Callbacks */
  onClose: () => void;
  classNames?: {
    content?: string;
    title?: string;
    closeButton?: string;
  };
  overlay?: string;
}

function getViewportHeight() {
  return visualViewport?.height || window.innerHeight;
}

const Tray = (props: Props) => {
  const {
    children,
    actions,
    classNames,
    open,
    onClose,
    id,
    overlay = "var(--overlay)",
  } = props;

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (height !== 0) return;
    const newHeight = getViewportHeight();
    setHeight(newHeight);
  }, [height]);

  const trayHeight: Record<string, string> = {
    "--tray-min-height": `${height}px`,
  };

  const contentStyles = [styles.rootTray, classNames?.content]
    .filter(Boolean)
    .join(" ");

  return (
    <DialogOverlay
      isOpen={open}
      onDismiss={onClose}
      className={styles.overlayTray}
      style={{
        backgroundColor: overlay,
      }}
    >
      <DialogContent
        aria-labelledby={"tray-dialog"}
        className={contentStyles}
        style={trayHeight}
        id={id}
      >
        <Group
          as="div"
          gap="var(--gap-2)"
          options={{
            DANGEROUS: {
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "var(--gap-2)",
              paddingBottom: 0,
            },
          }}
          {...(props?.classNames?.title !== undefined && {
            className: props.classNames.title,
          })}
        >
          <Button
            variant="icon"
            onClick={onClose}
            {...(props?.classNames?.closeButton !== undefined && {
              className: props.classNames.closeButton,
            })}
          >
            <IconCross />
          </Button>
          {actions !== undefined &&
            cloneElement(actions, { key: `${id}-action` })}
        </Group>

        <ScrollUnit classNames={{ viewport: styles.viewport }} type="always">
          {children}
        </ScrollUnit>
      </DialogContent>
    </DialogOverlay>
  );
};

export default Tray;
