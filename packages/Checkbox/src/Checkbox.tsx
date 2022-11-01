import { Group } from "group-react";
import { ChangeEvent, CSSProperties, useEffect, useMemo } from "react";
import styles from "./Checkbox.module.css";

type Props = {
  isMixed?: boolean;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
  id: string;
  name: string;
  value: string;
  fill?: string;
};

/* 
  Roadmap:
  [ ] make icon version 
*/
function Checkbox(props: Props) {
  const {
    value,
    isMixed,
    onChange,
    className,
    label,
    id,
    name,
    checked,
    fill,
  } = props;

  const rootClassNames = [styles.root, className].filter(Boolean).join(" ");

  const checkboxClassNames = useMemo(
    () =>
      [
        styles.checkbox,
        isMixed && styles.mixed,
        checked && styles.checked,
        // leadCheckbox
        !checked && isMixed !== undefined && styles.unchecked,
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

  return (
    <Group as="label">
      <label htmlFor={id} className={rootClassNames}>
        <input
          className={checkboxClassNames}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
          {...(!isMixed && {
            value,
          })}
          {...(!isMixed &&
            fill !== undefined && {
              style: {
                "--checkbox-fill": fill,
              } as CSSProperties,
            })}
          checked={!isMixed && checked}
        />
        {label}
      </label>
    </Group>
  );
}

export default Checkbox;
