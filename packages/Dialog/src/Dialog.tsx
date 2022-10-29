import { cloneElement, ReactNode, ReactElement, Fragment } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Tray from "./Tray";
import styles from "./Dialog.module.css";

interface Props {
  children: ReactNode;
  label: string;
  open: boolean;
  /** Callbacks */
  onClose: () => void;
  /** Button that close dialog */
  closeButton: ReactElement;
  /** Aspect ratio of Dialog */
  ratio?: "portrait" | "landscape" | "tray";
  className?: string;
  isLastDialogOpened?: boolean;
}

function Dialog(props: Props) {
  const {
    label,
    children,
    className,
    closeButton,
    open,
    onClose,
    ratio = "landscape",
    isLastDialogOpened = false,
  } = props;
  const isPortrait = ratio === "portrait";
  const isLandscape = ratio === "landscape";

  const trigger = cloneElement(closeButton, {
    onClick: onClose,
  });
  const classNames = [
    styles.root,
    isPortrait && styles.portrait,
    isLandscape && styles.landscape,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <DialogOverlay isOpen={open} onDismiss={onClose} className={styles.overlay}>
      <DialogContent
        {...(isLastDialogOpened && {
          blockScrollOnMount: false,
        })}
        aria-label={label}
        className={classNames}
      >
        <Fragment>
          {trigger}
          {children}
        </Fragment>
      </DialogContent>
    </DialogOverlay>
  );
}
Dialog.Tray = Tray;
export default Dialog;
