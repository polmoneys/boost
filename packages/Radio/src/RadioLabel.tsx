import { ChangeEvent, ComponentProps, Fragment } from "react";
import styles from "./Radio.module.css";
import { Group } from "group-react";
import { RenderProp } from "../../Types/dist/types";

export interface RadioProps extends ComponentProps<"input"> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >;
  radioSize?: string;
  classNames?: {
    group?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
  xl?: boolean;
}

function RadioLabel(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    radioSize,
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
        radioLabel: props.label ?? "",
      })
    );

  const groupClassnames = [
    styles.radio,
    checked && styles.checked,
    checked && classNames?.checked,
    classNames?.group,
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
    <Group as="div" className={groupClassnames} size={radioSize}>
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

export default RadioLabel;
