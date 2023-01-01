import { ReactNode, CSSProperties } from "react";

export const Svg = ({
  children,
  height = "100%",
  style,
}: {
  children: ReactNode;
  height: string;
  style?: CSSProperties;
}) => (
  <svg width="100%" height={height} {...(style !== undefined && { style })}>
    {children}
  </svg>
);

export const Group = ({ translate, children }: any) => (
  <g style={{ transform: translate }}>{children}</g>
);

export const Rectangle = ({
  x = "0%",
  y = "0%",
  fill = "currentColor",
  width = "10%",
  height = "10%",
}) => <rect x={x} y={y} width={width} height={height} fill={fill} />;

function mapPoints(el: any, boundary: any, spaceX = 0, spaceY = 0) {
  let rect;
  if ("current" in el) {
    rect = el.current.getBoundingClientRect();
  } else {
    rect = el.getBoundingClientRect();
  }
  const offsetWidth = Math.round(rect.width / 2);
  const offsetHeight = Math.round(rect.height / 2);
  return [
    Math.round(rect.left + offsetWidth - boundary.x) - spaceX,
    Math.round(rect.top + offsetHeight - boundary.y) - spaceY,
  ];
}

export function matchRefsToPoints(
  refs: any,
  boundary: any,
  spaceX: number,
  spaceY: number
): Promise<Array<[number, number]>> {
  const points = refs.map((p: any) => mapPoints(p, boundary, spaceX, spaceY));
  return new Promise(resolveIt => resolveIt(points));
}
