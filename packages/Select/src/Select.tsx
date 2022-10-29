import { Group } from "group-react";
import Value from "./Interfaces/Value";
import Option from "./Interfaces/Option";
import styles from "./Select.module.css";

type Props<T extends Value> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  classNames?: {
    root?: string;
    select?: string;
  };
};

function Select<T extends Value>(props: Props<T>) {
  const { options, value, onChange, classNames } = props;
  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption.value);
  }
  const rootClassNames = [styles.root, classNames?.root]
    .filter(Boolean)
    .join(" ");
  const selectClassNames = [styles.select, classNames?.select]
    .filter(Boolean)
    .join(" ");
  return (
    <Group as="label" className={rootClassNames}>
      <select
        value={value}
        onChange={handleOnChange}
        className={selectClassNames}
      >
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
