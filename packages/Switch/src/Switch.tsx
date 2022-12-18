import { ComponentProps, ChangeEvent } from "react";
import { HelveticaNeue } from "font-react";
import styles from "./Switch.module.css";

interface Props extends ComponentProps<"input"> {
  initial: boolean;
  onChangeValue: (value: boolean) => void;
  label: string;
}

function Switch(props: Props) {
  const {
    className,
    initial = false,
    onChangeValue,
    id,
    label = "Switch",
    ...rest
  } = props;

  const groupClassNames = [className, styles.group].filter(Boolean).join(" ");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChangeValue(event.target.checked);
  return (
    <label htmlFor={id} className={groupClassNames}>
      <input
        {...rest}
        type="checkbox"
        {...(initial && { checked: true })}
        onChange={handleChange}
      />
      <HelveticaNeue>{label}</HelveticaNeue>
    </label>
  );
}

export default Switch;
