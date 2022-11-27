import { cloneElement, ChangeEvent, Children, ReactElement } from "react";
import { Group } from "group-react";
import { RenderProp } from "../../Types/dist/types";
const { count, map } = Children;

interface Props {
  children: Array<ReactElement>;
  initial: string | Array<string>;
  className?: string;
  gap?: string;
  radioSize?: string;
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >;
  onChange: (selection: string) => void;
  direction?: "row" | "column";
}

function RadioGroup(props: Props) {
  const {
    children,
    initial = "",
    gap = "0",
    renderLabel,
    direction = "row",
    className,
  } = props;
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    props?.onChange?.(event.target.name);

  return (
    <Group
      as="div"
      gap={gap}
      options={{ wrap: "wrap", direction }}
      {...(className !== undefined && { className })}
    >
      {map(props.children, (radio: ReactElement) => {
        const { name } = radio.props;
        const checked = initial === name;
        const radioSize =
          props.radioSize !== undefined
            ? props.radioSize
            : `calc(${Math.round(100 / count(children))}% - ${gap})`;

        return cloneElement(radio, {
          name,
          checked,
          onChange,
          ...(renderLabel !== undefined && { renderLabel }),
          label: name,
          radioSize,
        });
      })}
    </Group>
  );
}

export default RadioGroup;
