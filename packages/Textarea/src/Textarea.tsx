import {
  useRef,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  ComponentProps,
} from "react";
import { Group } from "group-react";
import styles from "./Textarea.module.css";

interface Props
  extends Omit<ComponentProps<"textarea">, "onChange" | "className"> {
  onChangeValue: (value: string | number) => void;
  label: string;
  classNames?: {
    group?: string;
    input?: string;
  };
  autofocus?: boolean;
  initial: string | number;
}

function Textarea(props: Props) {
  const {
    initial,
    placeholder = "Type ",
    onChangeValue,
    id,
    label,
    autoFocus = false,
    classNames,
  } = props;

  const [editingValue, setEditingValue] = useState(initial);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setEditingValue(event.target.value);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInput = useCallback((target: HTMLTextAreaElement) => {
    if (target.scrollHeight > 40) {
      target.style.height = target.scrollHeight + "px";
    }
  }, []);

  useEffect(() => {
    if (textareaRef && textareaRef.current !== null) {
      onInput(textareaRef.current);
    }
  }, [onInput, textareaRef]);

  useEffect(() => {
    onChangeValue(editingValue);
  }, [editingValue]);

  const groupClassnames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(" ");

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      (event.target as HTMLTextAreaElement).blur();
    }
  };

  const onBlur = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.trim() === "") {
      onChangeValue(initial);
    } else {
      onChangeValue(event.target.value);
    }
  };

  // const onPressStart = () => {
  //   const element = document.querySelector(`#${id}`) as HTMLTextAreaElement;
  //   if (element) {
  //     element.focus();
  //   }
  // };

  return (
    <Group
      as="div"
      options={{ direction: "column" }}
      className={groupClassnames}
    >
      <label htmlFor={id}>{label}</label>
      <textarea
        autoFocus
        placeholder={placeholder}
        rows={1}
        aria-label="Field name"
        value={editingValue}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onInput={event => onInput(event.target as HTMLTextAreaElement)}
        ref={textareaRef}
      />
    </Group>
  );
}

export default Textarea;
