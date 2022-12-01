import { ReactNode, ComponentProps } from "react";
import styles from "./List.module.css";

interface Props extends ComponentProps<"ul"> {
  children: string | ReactNode;
  label: string;
  zebra?: boolean;
}

function List(props: Props) {
  const { children, className, label, zebra = true, ...rest } = props;

  const classNames = [className, styles.group, zebra && styles.zebra]
    .filter(Boolean)
    .join(" ");
  return (
    <ul role="list" className={classNames} aria-label={label} {...rest}>
      {children}
    </ul>
  );
}

interface PropsItem extends ComponentProps<"li"> {
  children: string | ReactNode;
  description?: string;
  start?: ReactNode;
  end?: ReactNode;
}

List.Item = (props: PropsItem) => {
  const { className, children, description, start, end } = props;
  const classNamesGroup = [styles.listItem, className]
    .filter(Boolean)
    .join(" ");
  const classNamesContent = [styles.content, styles.contentBody]
    .filter(Boolean)
    .join(" ");
  const classNamesStart = [styles.content, styles.contentLeft]
    .filter(Boolean)
    .join(" ");
  const classNamesEnd = [styles.content, styles.contentRight]
    .filter(Boolean)
    .join(" ");
  return (
    <li className={classNamesGroup}>
      {start && <div className={classNamesStart}>{start}</div>}
      <div className={classNamesContent}>
        {children}
        {description && (
          <div className={styles.contentDescription}>{description}</div>
        )}
      </div>
      {end && <div className={classNamesEnd}>{end}</div>}
    </li>
  );
};

List.Divider = ({ children }: { children?: ReactNode }) => {
  const classNamesGroup = [styles.listItem, styles.listDivider]
    .filter(Boolean)
    .join(" ");
  const classNamesContent = [styles.content, styles.contentBody]
    .filter(Boolean)
    .join(" ");
  return (
    <li className={classNamesGroup}>
      <div className={classNamesContent}>
        <div className={styles.listDividerTitle}>{children && children}</div>
      </div>
    </li>
  );
};

export default List;
