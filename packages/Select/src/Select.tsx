import { Group } from "group-react";
import styles from "./Select.module.css";

type OptionValue = string | number;
type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

function Select<T extends OptionValue>(props: Props<T>) {
  const { options, value, onChange } = props;
  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption.value);
  }
  return (
    <Group as="label" className={styles.root}>
      <select value={value} onChange={handleOnChange} required>
        <option value="" hidden>
          Example Placeholder
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Group>
  );
}

export default Select;
