import { cloneElement, ReactElement, ReactNode } from "react";
import styles from "./Steps.module.css";

interface Item {
  label: ReactElement;
  completed: boolean;
}

interface Props {
  items: Array<Item>;
  classNames?: {
    group?: string;
    item?: string;
    complete?: string;
  };
  id: string;
}

function Steps(props: Props) {
  const {
    items,
    classNames = {
      group: styles.stepper,
    },
    id,
  } = props;

  return (
    <ol className={classNames.group}>
      {items.map((step, pos) => {
        const itemClassNames = [
          styles.stepperItem,
          step.completed && styles.complete,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li className={itemClassNames} key={pos}>
            <span className={styles.stepperCounter}></span>
            {cloneElement(step.label, { key: `${id}-trigger` })}
            <span className={styles.stepperLine}></span>
          </li>
        );
      })}
    </ol>
  );
}

export default Steps;
