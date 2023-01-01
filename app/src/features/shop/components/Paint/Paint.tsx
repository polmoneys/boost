import { Group } from "group-react";
import { useResizeObserver } from "hooks-react";
import { useRef, useState } from "react";
import { Shape } from "shape-react";
import { Stat } from "stat-react";
import { useRect } from "@reach/rect";

function Paint() {
  const refA = useRef<HTMLDivElement | null>(null); // Point A
  const refB = useRef<HTMLDivElement | null>(null); // Point B
  const refC = useRef<HTMLDivElement | null>(null); // Point C

  const maskRef = useRef<HTMLDivElement | null>(null);

  const rect = useRect(maskRef, { observe: true });

  return (
    <div ref={maskRef} className="demo-party">
      <div className="ref-1" ref={refA}>
        <Shape.Square size={100} />
      </div>
      <div className="ref-2" ref={refB}>
        <Shape.Square size={100} />
      </div>
      <div className="ref-3" ref={refC}>
        <Shape.Square size={100} />
      </div>
      <Stat.Draw
        boundary={rect}
        // variant="curve"
        round
        refs={[refA, refB, refC]}
        weigth={10}
        fill={"yellow"}
      />
    </div>
  );
}

export default Paint;
