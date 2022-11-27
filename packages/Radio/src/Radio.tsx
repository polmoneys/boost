import { ChangeEvent, ComponentProps, Fragment } from "react";
import { Unit } from "unit-react";
import { RenderProp } from "../../Types/dist/types";
import RadioGroup from "./RadioGroup";
import RadioLabel from "./RadioLabel";
import styles from "./Radio.module.css";

export interface RadioProps extends ComponentProps<"input"> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  renderLabel?: RenderProp<
    { checked: boolean; checkboxLabel: string },
    HTMLElement
  >;
  classNames?: {
    group?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
  xl?: boolean;
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
}

function Radio(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    checked = false,
    classNames,
    keyboard = true,
    autofocus = false,
    nonKeyboard = true,
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

  const groupClassnames = [
    styles.control,
    checked && styles.checked,
    checked && classNames?.checked,
    classNames?.group,
    rest?.xl && styles.xl,
  ]
    .filter(Boolean)
    .join(" ");

  const disableRing = !keyboard && !nonKeyboard;
  return (
    <label htmlFor={id} className={groupClassnames}>
      <Unit autofocus={autofocus} disabled={disableRing}>
        <input
          type="radio"
          id={id}
          name={name}
          value={name}
          checked={checked}
          {...(classNames?.input !== undefined && {
            className: classNames.input,
          })}
          onChange={handleChange}
        />
      </Unit>
      {inputLabel}
    </label>
  );
}

Radio.Group = RadioGroup;
Radio.Label = RadioLabel;

export default Radio;
