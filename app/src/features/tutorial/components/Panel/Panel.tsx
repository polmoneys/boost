import { HelveticaNeue } from "font-react";
import { ReactNode } from "react";
import styles from "./Panel.module.css";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  actions?: ReactNode;
}
function Panel(props: Props) {
  const { children, title, description, actions } = props;

  const hasFooter = actions !== undefined;
  return (
    <div className={styles.white}>
      <div className="p $$$$">
        <HelveticaNeue className={styles.title}>{title}</HelveticaNeue>
        <HelveticaNeue className={styles.description}>
          {description}
        </HelveticaNeue>
        {children}
      </div>
      {hasFooter && (
        <div className={[styles.footer, "p $$"].join(" ")}>
          <HelveticaNeue className={styles.subtitle}>footer</HelveticaNeue>
          {actions}
        </div>
      )}
    </div>
  );
}

interface ActionProps {
  actionStart?: ReactNode;
  actionEnd?: ReactNode;
}

Panel.Action = (props: ActionProps) => (
  <div className={styles.item}>
    {props.actionStart !== undefined && props.actionStart}
    {props.actionEnd !== undefined && props.actionEnd}
  </div>
);

export default Panel;
