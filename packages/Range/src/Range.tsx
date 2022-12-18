import { ComponentProps, ChangeEvent } from "react";
import styles from "./Range.module.css";

interface Props extends ComponentProps<"input"> {
  initial: number;
  onChangeValue: (value: number) => void;
}

function Range(props: Props) {
  const {
    className,
    initial = 1,
    min = 1,
    max = 100,
    onChangeValue,
    ...rest
  } = props;

  const groupClassNames = [className, styles.group].filter(Boolean).join(" ");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChangeValue(Number(event.target.value));
  return (
    <label className={groupClassNames}>
      <input
        {...rest}
        type="range"
        min={min}
        max={max}
        value={initial}
        onChange={handleChange}
      />
    </label>
  );
}

export default Range;
