import { Fragment } from "react";
import { DomElementSize } from "../../Types/dist/types";

interface Props {
  label: string;
  min?: number;
  max: number;
  value: number;
  height: `${string}px`;
  items: Array<{
    label: string;
    color: string;
    value: `${string}%`;
  }>;
  className?: string;
}

function Meter(props: Props) {
  const { label, items, height, min = 0, max, value, className } = props;

  const pattern = items.reduce(
    (acc, current) => acc + `${current.color} ${current.value},`,
    ""
  );

  return (
    <Fragment>
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height,
          backgroundImage: `repeating-linear-gradient(
            90deg,${pattern.slice(0, -1)})`,
          backgroundSize: "100% 100%",
        }}
        {...(className !== undefined && { className })}
      />
      <meter
        className="visually-hidden"
        value={value.toString()}
        min={min.toString()}
        max={max.toString()}
        title={label}
      >
        {label}
      </meter>
    </Fragment>
  );
}

export default Meter;
