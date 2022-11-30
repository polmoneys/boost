import { ReactNode } from "react";
import { Group } from "group-react";
import { Button } from "button-react";
import { HelveticaNeue } from "font-react";
import styles from "./Panel.module.css";

interface Action {
  label: ReactNode;
  action?: () => void;
  className?: string;
}

interface Props {
  children: ReactNode;
  title: string;
  id: string;
  description: string;
  subtitle?: string;
  actions?: Array<Action>;
  classNames?: {
    group?: string;
    content?: string;
    footer?: string;
  };
}
function Panel(props: Props) {
  const { id, children, title, description, actions, subtitle, classNames } =
    props;

  const hasFooter = actions !== undefined;
  const hasSubtitle = subtitle !== undefined;
  const groupClassNames = [styles.white, classNames?.group]
    .filter(Boolean)
    .join(" ");

  const contentClassNames = ["p $$$$", classNames?.content]
    .filter(Boolean)
    .join(" ");

  const footerClassNames = ["p $$", styles.footer, classNames?.footer]
    .filter(Boolean)
    .join(" ");
  return (
    <Group
      as="div"
      options={{ direction: "column" }}
      className={groupClassNames}
      gap="0"
      id={id}
    >
      <div className={contentClassNames}>
        <HelveticaNeue className={styles.title}>{title}</HelveticaNeue>
        <HelveticaNeue className={styles.description}>
          {description}
        </HelveticaNeue>
        {children}
      </div>
      {hasFooter && (
        <div className={footerClassNames}>
          {hasSubtitle && (
            <HelveticaNeue className={styles.subtitle}>
              {subtitle}
            </HelveticaNeue>
          )}
          <Group as="div">
            {actions.map(action => {
              const hasAction = action.action !== undefined;
              if (hasAction) {
                return (
                  <Button
                    keyboard={false}
                    nonKeyboard={false}
                    className={[styles.item, action.className]
                      .filter(Boolean)
                      .join(" ")}
                    {...(action.action !== undefined && {
                      onClick: () => action.action?.() ?? {},
                    })}
                  >
                    {action.label}
                  </Button>
                );
              }
              return (
                <div
                  className={[styles.item, action.className]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {action.label}
                </div>
              );
            })}
          </Group>
        </div>
      )}
    </Group>
  );
}

export const PanelTransparent = (props: Props) => (
  <Panel
    {...props}
    classNames={{
      group: styles.transparent,
      content: "p $$$$",
      footer: "p $$",
    }}
  />
);

export default Panel;
