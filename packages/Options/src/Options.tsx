import { Fragment, ReactNode } from "react";
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuGroup,
  MenuDivider,
  MenuHeader,
} from "@szhsin/react-menu";
import OptionsProps from "./Interfaces/Options";
import styles from "./Options.module.css";

interface Props {
  id: string;
  options: OptionsProps;
  onChange?: (selection: string) => void;
  triggerOn?: ReactNode;
  triggerOff?: ReactNode;
  ssr?: boolean;
  portal?: boolean;
  disabled?: boolean;
  classNames?: {
    group?: string;
    button?: string;
    item?: string;
    selected?: string;
  };
  selection?: string;
}

const menuClassName = ({ state }: { state: string }) =>
  state === "opening" ? styles.menuOpen : styles.menuClose;

function Options(props: Props) {
  const {
    triggerOn = "Close",
    triggerOff = "Options",
    options,
    onChange,
    ssr = false,
    disabled = false,
    portal = true,
    classNames,
    selection,
    id,
  } = props;
  if (options.length === 0) return <Fragment />;

  const menuClassNames = [styles.menu, menuClassName, classNames?.group]
    .filter(Boolean)
    .join(" ");
  const buttonClassNames = [styles.button, classNames?.button]
    .filter(Boolean)
    .join(" ");

  return (
    <Menu
      id={id}
      menuClassName={menuClassNames}
      menuButton={({ open }) => (
        <MenuButton
          className={buttonClassNames}
          {...(disabled && { disabled })}
        >
          {open ? triggerOn : triggerOff}
        </MenuButton>
      )}
      {...(onChange && { onItemClick: event => onChange?.(event.value) })}
      {...(ssr && { initialMounted: true })}
      portal={portal}
    >
      <MenuGroup>
        {options?.map(option => {
          if (option.value === "divider") {
            return <MenuDivider />;
          }
          if (option.value === "title") {
            return <MenuHeader>{option.label}</MenuHeader>;
          }
          return (
            <MenuItem
              key={option.id}
              className={[
                styles.item,
                option.value === (selection ?? "")
                  ? classNames?.selected
                  : classNames?.item,
              ]
                .filter(Boolean)
                .join(" ")}
              value={option.value}
              {...(option?.href !== undefined && {
                href: option?.href,
              })}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </MenuGroup>
    </Menu>
  );
}

export default Options;
