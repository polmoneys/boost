import { line, curveCardinal } from "d3-shape";
import { MutableRefObject, useCallback, useState, useEffect } from "react";
import { matchRefsToPoints } from "./utils";
import styles from "./Stat.module.css";

export interface Props {
  /** useRect() */
  boundary:
    | (Partial<DOMRect> & {
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
      })
    | null;
  /** Line width */
  weigth?: number;
  /** Color */
  fill?: string;
  /** Adjustments */
  transforms?: string;
  /** Spacing X axis */
  x?: number;
  /** Spacing Y axis */
  y?: number;
  /** strokeLinecap, strokeLineJoin */
  round?: boolean;
  /** HTML elements to join */
  /** Join with svg as */
  refs: Array<MutableRefObject<HTMLDivElement | null>>;
  variant?: "line" | "curve";
}

const Draw = (props: Props) => {
  const {
    boundary,
    refs,
    fill = "yellow",
    weigth = 10,
    round = true,
    x = 0,
    y = 0,
    variant = "line",
    transforms = undefined,
  } = props;
  const [path, setPath] = useState<string | null>(null);

  const drawSvg = useCallback(() => {
    if (boundary === null) return;
    matchRefsToPoints(refs, boundary, x, y)
      .then((points: Array<[number, number]>) => {
        if (variant === "line") {
          return line()([...points]);
        } else {
          return line().curve(curveCardinal)([...points]);
        }
      })
      .then((path: unknown) => {
        const p = path as string;
        setPath(p);
      });
  }, [boundary, refs, x, y, variant]);

  useEffect(() => {
    drawSvg();
  }, [boundary, drawSvg, variant]);

  return (
    <svg
      className={styles.svg}
      style={{
        transform: transforms ? transforms : undefined,
      }}
    >
      {path && (
        <path
          fill="none"
          stroke={fill}
          strokeWidth={weigth}
          strokeLinecap={round ? "round" : "square"}
          strokeLinejoin={round ? "round" : "miter"}
          d={path}
        />
      )}
    </svg>
  );
};

export default Draw;
