import { ComponentProps, ChangeEvent } from "react";
import { Group } from "group-react";
import styles from "./Input.module.css";

interface Props extends Omit<ComponentProps<"input">, "onChange"> {
  // id of element describing error
  errorElementId?: string;
  autocomplete?:
    | "off"
    | "on"
    | "honorific-prefix"
    | "new-password"
    | "current-password"
    | "one-time-code"
    | "cc-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc";
  inputmode?: "text" | "numeric" | "tel" | "search" | "email" | "url";
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  id: string;
  label: string;
}

function Input(props: Props) {
  const {
    children,
    autoFocus,
    onChange,
    value,
    autocomplete = "off",
    enterkeyhint = "next",
    inputmode = "text",
    type = "text",
    placeholder = "Type ",
    errorElementId = "",
    onChangeValue,
    id,
    label,
    ...rest
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 2) {
      onChangeValue?.(value);
      onChange?.(event);
    }
  };

  return (
    <Group
      as="div"
      options={{ direction: "column", alignItems: "flex-start" }}
      className={styles.root}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        defaultValue={value}
        autoComplete={autocomplete}
        enterKeyHint={enterkeyhint}
        inputMode={inputmode}
        aria-describedby={errorElementId}
        onChange={handleChange}
        {...(placeholder && { placeholder })}
        {...rest}
      />
    </Group>
  );
}

export default Input;
