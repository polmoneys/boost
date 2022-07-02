import { cloneElement, ChangeEvent, Children, ReactElement } from "react";
import { Group } from "group-react";
import RenderProp from "./Interfaces/RenderProp";
const { count, map } = Children;

interface Props {
  children: Array<ReactElement>;
  initial: string;
  gap?: string;
  checkboxSize?: string;
  renderLabel: RenderProp<
    { checked: boolean; checkboxLabel: string },
    HTMLElement
  >;
  onChange: (selection: string) => void;
}

function RadioGroup(props: Props) {
  const { children, initial = false, gap = "0", renderLabel } = props;
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    props?.onChange?.(event.target.name);

  return (
    <Group as="div" gap={gap} options={{ wrap: "wrap" }}>
      {map(props.children, (radio: ReactElement) => {
        const { name } = radio.props;
        const checked = initial === name;
        const checkboxSize =
          props.checkboxSize !== undefined
            ? props.checkboxSize
            : `calc(${Math.round(100 / count(children))}% - ${gap})`;

        return cloneElement(radio, {
          name,
          checked,
          onChange,
          renderLabel: renderLabel,
          label: name,
          checkboxSize,
        });
      })}
    </Group>
  );
}

export default RadioGroup;
