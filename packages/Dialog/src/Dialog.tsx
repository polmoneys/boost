import { ReactElement, cloneElement } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Group } from "group-react";
import { Button } from "button-react";
import { IconCross } from "icon-react";
import { WithChildren } from "../../Types/dist/types";
import Tray from "./Tray";
import styles from "./Dialog.module.css";

interface Props extends WithChildren {
  id: string;
  label: string;
  open: boolean;
  /** Callbacks */
  onClose: () => void;
  actions?: ReactElement;
  /** Aspect ratio of Dialog */
  ratio?: "portrait" | "landscape" | "tray";
  classNames?: {
    content?: string;
    title?: string;
    closeButton?: string;
  };
  overlay?: string;
  isLastDialogOpened?: boolean;
}

function Dialog(props: Props) {
  const {
    id,
    label,
    children,
    actions,
    classNames,
    open,
    onClose,
    ratio = "landscape",
    isLastDialogOpened = false,
    overlay = "var(--overlay)",
  } = props;
  const isPortrait = ratio === "portrait";
  const isLandscape = ratio === "landscape";

  const groupClassNames = [
    styles.root,
    isPortrait && styles.portrait,
    isLandscape && styles.landscape,
    classNames?.content,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <DialogOverlay
      isOpen={open}
      onDismiss={onClose}
      className={styles.overlay}
      style={{
        backgroundColor: overlay,
      }}
    >
      <DialogContent
        id={id}
        {...(isLastDialogOpened && {
          blockScrollOnMount: false,
        })}
        aria-label={label}
        className={groupClassNames}
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
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}
Dialog.Tray = Tray;
export default Dialog;
