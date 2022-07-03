import { Fragment, ReactNode } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import styles from "./Options.module.css";

interface Props {
  options: Array<{
    value: string;
    id: string;
    href?: string;
  }>;
  onChange?: (selection: string) => void;
  triggerOn?: ReactNode;
  triggerOff?: ReactNode;
  ssr?: boolean;
  disabled?: boolean;
}

const menuClassName = ({ state }: { state: string }) =>
  state === "opening"
    ? styles.menuOpen
    : state === "closing"
    ? styles.menuClose
    : styles.menu;

const menuItemClassName = ({ hover }: any) =>
  hover ? styles.itemHover : styles.item;

function Options(props: Props) {
  const {
    triggerOn = "Close",
    triggerOff = "Options",
    options,
    onChange,
    ssr = false,
    disabled = false,
  } = props;
  if (options.length === 0) return <Fragment />;
  return (
    <Menu
      menuClassName={menuClassName}
      menuButton={({ open }) => (
        <MenuButton className={styles.button} {...(disabled && { disabled })}>
          {open ? triggerOn : triggerOff}
        </MenuButton>
      )}
      {...(onChange && { onItemClick: event => onChange?.(event.value) })}
      {...(ssr && { initialMounted: true })}
    >
      {options?.map(option => (
        <MenuItem
          key={option.id}
          className={menuItemClassName}
          value={option.value}
          // {...(option?.href !== undefined && {
          //   href:{ option?.href }
          //  } )}
        >
          {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default Options;
