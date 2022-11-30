import { ChangeEvent, useEffect, useMemo } from "react";
import { IconCheck, IconDash, IconCross } from "icon-react";
import { Unit } from "unit-react";
import "../../Icon/dist/style.css";
import styles from "./Checkbox.module.css";

type Props = {
  label: string;
  id: string;
  name: string;
  value: string;
  isMixed?: boolean;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classNames?: {
    group?: string;
    checkbox?: {
      checked?: string;
      unchecked?: string;
      mixed?: string;
    };
  };
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
};

function Checkbox(props: Props) {
  const {
    value,
    isMixed,
    onChange,
    classNames,
    label,
    id,
    name,
    checked,
    keyboard = true,
    autofocus = false,
    nonKeyboard = true,
  } = props;

  const groupClassNames = useMemo(
    () =>
      [
        styles.group,
        classNames?.group,
        isMixed && styles.mixed,
        checked && styles.checked,
      ]
        .filter(Boolean)
        .join(" "),
    [isMixed, checked]
  );
  const checkboxClassNames = useMemo(
    () =>
      [
        styles.checkbox,
        isMixed && classNames?.checkbox?.mixed && classNames?.checkbox?.mixed,
        checked &&
          classNames?.checkbox?.checked &&
          classNames?.checkbox?.checked,
        !checked &&
          classNames?.checkbox?.unchecked &&
          classNames?.checkbox?.unchecked,
      ]
        .filter(Boolean)
        .join(" "),
    [isMixed, checked]
  );

  useEffect(() => {
    const element = document.querySelector(`#${id}`) as HTMLInputElement;
    if (element) {
      element.indeterminate = isMixed ? true : false;
    }
  }, [isMixed]);

  const disableRing = !keyboard && !nonKeyboard;
  return (
    <label htmlFor={id} className={groupClassNames}>
      {isMixed && <IconDash size="lg" />}
      {checked && <IconCheck size="lg" />}
      {!checked && isMixed === undefined && <IconCross size="lg" />}
      <Unit autofocus={autofocus} disabled={disableRing}>
        <input
          className={checkboxClassNames}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
          {...(!isMixed && {
            value,
          })}
          checked={!isMixed && checked}
        />
      </Unit>
      {label}
    </label>
  );
}

export default Checkbox;
