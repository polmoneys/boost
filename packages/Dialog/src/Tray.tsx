import {
  ReactNode,
  cloneElement,
  useState,
  useRef,
  useEffect,
  ReactElement,
  Fragment,
} from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styles from "./Tray.module.css";

export interface Props {
  closeButton: ReactElement;
  children: ReactNode;
  label: string;
  /** 🚨 */
  open: boolean;
  /** Callbacks */
  onClose: () => void;
  className?: string;
}

const Tray = (props: Props) => {
  const { children, closeButton, className, open, onClose } = props;

  const [height, setHeight] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (height !== 0) return;
    const newHeight = window?.visualViewport?.height ?? window?.innerHeight;
    const short = height < 850;
    const width = window?.visualViewport?.width ?? window?.innerWidth;
    console.log({ newHeight, short, width });
    setHeight(newHeight);
  }, [height]);

  const trayHeight: Record<string, string> = {
    "--tray-min-height": `${height}px`,
  };
  const trigger = cloneElement(closeButton, {
    onClick: onClose,
  });
  const contentStyles = [styles.root, className].filter(Boolean).join(" ");
  return (
    <DialogOverlay isOpen={open} onDismiss={onClose} className={styles.overlay}>
      <DialogContent
        aria-labelledby={"tray-dialog"}
        className={contentStyles}
        style={trayHeight}
      >
        <Fragment>
          {trigger}
          {children}
        </Fragment>
      </DialogContent>
    </DialogOverlay>
  );
};

export default Tray;
