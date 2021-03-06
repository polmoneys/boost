import { useMemo, memo } from "react";
import { polygon } from "./utils";

interface Props {
  sides?: number;
  size?: number;
  fill?: string;
  transforms?: string;
}

function Shape(props: Props) {
  const { sides = 3, size = 69, fill = "currentColor", transforms } = props;

  const polyPath = useMemo(() => {
    const clampedSides = sides < 3 ? 3 : sides > 30 ? 30 : sides;
    const center = size / 2;
    return polygon(center, center, clampedSides, size / 2);
  }, [sides, size]);

  const viewbox = `0 0 ${size} ${size}`;
  return (
    <svg
      aria-hidden="true"
      viewBox={viewbox}
      width={size}
      height={size}
      fill={fill}
      {...(transforms && { style: { transform: transforms } })}
    >
      <path d={polyPath} />
    </svg>
  );
}

Shape.Triangle = (props: Props) => <Shape {...props} sides={3} />;
Shape.Square = (props: Props) => <Shape {...props} sides={4} />;
Shape.Circle = (props: Props) => <Shape {...props} sides={25} />;

const avoidRerenderIf = (prevProps: Props, nextProps: Props) => {
  return prevProps.sides === nextProps.sides;
};

Shape.Freeze = memo((props: Props) => <Shape {...props} />, avoidRerenderIf);

export default Shape;
