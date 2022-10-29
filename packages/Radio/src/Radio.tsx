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
  classNames?: {
    root?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
  xl?: boolean;
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
    classNames,
    ...rest
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

  const rootClassNames = [
    styles.radio,
    checked && styles.checked,
    checked && classNames?.checked,
    classNames?.root,
    rest?.xl && styles.xl,
  ]
    .filter(Boolean)
    .join(" ");
  const labelClassNames = [styles.pinned, classNames?.label]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [styles.input, classNames?.input]
    .filter(Boolean)
    .join(" ");
  return (
    <Group as="div" className={rootClassNames} size={checkboxSize}>
      <label htmlFor={id}>
        <div className={labelClassNames} aria-hidden="true">
          {inputLabel}
        </div>
        <input
          type="radio"
          id={id}
          name={name}
          value={name}
          checked={checked}
          className={inputClassNames}
          onChange={handleChange}
        />
      </label>
    </Group>
  );
}

Radio.Group = RadioGroup;

export default Radio;
