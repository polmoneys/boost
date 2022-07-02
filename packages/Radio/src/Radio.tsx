import { ChangeEvent, ComponentProps, Fragment } from "react";
import styles from "./Radio.module.css";
import { Group } from "group-react";
import RenderProp from "./Interfaces/RenderProp";

import RadioGroup from "./RadioGroup";

export interface RadioProps extends ComponentProps<"input"> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  renderLabel?: RenderProp<
    { checked: boolean; checkboxLabel: string },
    HTMLElement
  >;
  checkboxSize?: string;
}

function Radio(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    checkboxSize,
    checked = false,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.(event);

  const inputLabel =
    renderLabel === undefined ? (
      <span>{label}</span>
    ) : (
      renderLabel?.({
        checked: props?.checked ?? false,
        checkboxLabel: props.label ?? "",
      })
    );

  const classNames = [styles.radio, checked && styles.checked]
    .filter(Boolean)
    .join(" ");

  return (
    <Group as="div" className={classNames} size={checkboxSize}>
      <label htmlFor={id}>
        <div className={styles.pinned} aria-hidden="true">
          {inputLabel}
        </div>
        <input
          type="radio"
          id={id}
          name={name}
          value={name}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </Group>
  );
}

Radio.Group = RadioGroup;

export default Radio;
