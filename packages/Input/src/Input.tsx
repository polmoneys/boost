import { ComponentProps, ChangeEvent, KeyboardEvent } from "react";
import { Group } from "group-react";
import { Unit } from "unit-react";
import { Button } from "button-react";
import { IconCross } from "icon-react";
import styles from "./Input.module.css";

interface Props
  extends Omit<ComponentProps<"input">, "onChange" | "className"> {
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  id: string;
  label: string;
  classNames?: {
    group?: string;
    input?: string;
  };
  keyboard?: boolean;
  autofocus?: boolean;
  nonKeyboard?: boolean;
  direction?: "row" | "column";
  px?: string;
  variant?: "" | "search";
}

function Input(props: Props) {
  const {
    children,
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
    autoFocus = false,
    keyboard = true,
    nonKeyboard = true,
    direction = "column",
    classNames,
    px = "var(--gap-3)",
    variant = "",
    ...rest
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChangeValue?.(value);
    onChange?.(event);
  };

  const groupClassnames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(" ");

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === "Enter" || key === "Escape") {
      e.preventDefault();
    }

    if (key === "Escape") {
      onChangeValue?.("");
    }
  };

  const isSearch = variant === "search";
  const onClear = () => onChangeValue?.("");
  const onPressStart = () => {
    const element = document.querySelector(`#${id}`) as HTMLInputElement;
    if (element) {
      element.focus();
    }
  };

  return (
    <Group
      as="div"
      options={{ direction, alignItems: "flex-start" }}
      className={groupClassnames}
      {...(isSearch && { gap: "0" })}
    >
      <label htmlFor={id} {...(isSearch && { className: "visually-hidden" })}>
        {label}
      </label>
      <Unit autofocus={autoFocus} isTextInput>
        <input
          type={type}
          value={value}
          autoComplete={autocomplete}
          enterKeyHint={enterkeyhint}
          inputMode={inputmode}
          aria-describedby={errorElementId}
          onChange={handleChange}
          {...(placeholder && { placeholder })}
          {...rest}
          {...(px !== undefined && {
            style: {
              paddingLeft: px,
              paddingRight: px,
            },
          })}
          {...(classNames?.input !== undefined && {
            className: classNames?.input,
          })}
          onKeyDown={onKeyDown}
        />
      </Unit>
      {isSearch && (
        <Button
          variant="icon"
          onClick={onClear}
          className={styles.clear}
          keyboard={false}
          nonKeyboard={false}
        >
          <IconCross />
        </Button>
      )}
    </Group>
  );
}

Input.Search = (props: Props) => <Input {...props} variant="search" />;

export default Input;
