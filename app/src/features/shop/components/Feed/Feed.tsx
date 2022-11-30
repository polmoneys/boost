import { Button } from "button-react";
import { usePullToRefresh } from "hooks-react";
import { Fragment } from "react";
import { Shape } from "shape-react";
import Skeletons from "../../../tutorial/components/Skeletons/Skeletons";
import styles from "./Feed.module.css";

function Feed() {
  const { isPulling } = usePullToRefresh({
    onEndPTR: () => console.log("END PTR"),
    durationPTR: 3000,
    element: document.querySelector("#arghhhh") ?? undefined,
  });
  return (
    <div
      id="arghhhh"
      className={[
        styles.group,
        isPulling && styles.isPulling,
        "flex-grow-children",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isPulling && (
        <div>
          <Shape.Square fill="var(--accent)" />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <Skeletons amount={8} />
      </div>
    </div>
  );
}

export default Feed;
