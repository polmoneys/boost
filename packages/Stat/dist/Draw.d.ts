import { MutableRefObject } from "react";
export interface Props {
    /** useRect() */
    boundary: (Partial<DOMRect> & {
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
    }) | null;
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
declare const Draw: (props: Props) => JSX.Element;
export default Draw;
