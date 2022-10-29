import { Fragment, ReactNode } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import OptionsProps from "./Interfaces/Options";
import styles from "./Options.module.css";

interface Props {
  options: OptionsProps;
  onChange?: (selection: string) => void;
  triggerOn?: ReactNode;
  triggerOff?: ReactNode;
  ssr?: boolean;
  disabled?: boolean;
  classNames?: {
    group?: string;
    button?: string;
    item?: string;
  };
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
    classNames,
  } = props;
  if (options.length === 0) return <Fragment />;

  const menuClassNames = [styles.menu, menuClassName, classNames?.group]
    .filter(Boolean)
    .join(" ");
  const buttonClassNames = [styles.button, classNames?.button]
    .filter(Boolean)
    .join(" ");
  const menuItemClassNames = [styles.item, classNames?.item]
    .filter(Boolean)
    .join(" ");

  return (
    <Menu
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
    >
      {options?.map(option => (
        <MenuItem
          key={option.id}
          className={menuItemClassNames}
          value={option.value}
          {...(option?.href !== undefined && {
            href: option?.href,
          })}
        >
          {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default Options;
