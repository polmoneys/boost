import { useRef, useEffect, ElementType, useState, Fragment } from "react";
import AsProps from "./Interfaces/As";
import Options from "./Interfaces/Options";
import { WithChildren } from "../../Types/dist/types";
import Scroller from "./utils";
import styles from "./Track.module.css";

export interface Props extends AsProps, WithChildren {
  className?: string;
  gap?: string;
  options?: Options;
  maskSize: string;
}

function Track(props: Props) {
  const {
    className,
    children,
    maskSize,
    gap = "var(--gap-3)",
    as = "div",
  } = props;

  const [base, setBase] = useState<Scroller | null>(null);
  const isScrollerReady = base !== null;

  const maskRef = useRef<HTMLDivElement>(null);

  const mountRef = (ref: any) => {
    if (ref && maskRef.current !== null && base === null) {
      const instance = new Scroller({
        container: ref,
        slider: maskRef.current,
      });
      setBase(instance);
    }
  };
  useEffect(() => {
    return () => base?.destroy();
  }, []);

  const containerClassName = [styles.root, className].filter(Boolean).join(" ");
  const Tag = as as ElementType;
  return (
    <Tag ref={mountRef} className={containerClassName}>
      <div
        ref={maskRef}
        className={styles.viewport}
        style={{ width: maskSize, gap }}
      >
        {isScrollerReady && <Fragment>{children}</Fragment>}
      </div>
    </Tag>
  );
}

export default Track;
