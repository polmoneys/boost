import { useState } from "react";
import useEvent from "./useEvent";
import Timer from "../../packages/Utils/src/Timer";

interface Props {
  onEndPTR?: () => void;
  durationPTR: number;
}

function usePullToRefresh(props: Props) {
  const { durationPTR = 1000, onEndPTR } = props;

  const pStart = { x: 0, y: 0 };
  const pStop = { x: 0, y: 0 };
  const [isPTR, setStatus] = useState(false);
  function swipeStart(e: any) {
    if (typeof e["targetTouches"] !== "undefined") {
      const touch = e.targetTouches[0];
      pStart.x = touch.screenX;
      pStart.y = touch.screenY;
    } else {
      pStart.x = e.screenX;
      pStart.y = e.screenY;
    }
  }

  function isPullDown(dY: any, dX: any) {
    // methods of checking slope, length, direction of line created by swipe action
    return (
      dY < 0 &&
      ((Math.abs(dX) <= 100 && Math.abs(dY) >= 300) ||
        (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
    );
  }

  function swipeCheck() {
    const changeY = pStart.y - pStop.y;
    const changeX = pStart.x - pStop.x;
    if (isPullDown(changeY, changeX)) {
      console.log("Swipe Down!");
      setStatus(true);
      onEndPTR?.();
      new Timer(() => setStatus(false), durationPTR);
    } else {
      setStatus(false);
    }
  }

  function swipeEnd(e: any) {
    if (typeof e["changedTouches"] !== "undefined") {
      const touch = e.changedTouches[0];
      pStop.x = touch.screenX;
      pStop.y = touch.screenY;
    } else {
      pStop.x = e.screenX;
      pStop.y = e.screenY;
    }

    swipeCheck();
  }

  useEvent("touchstart", function (e: any) {
    swipeStart(e);
  });

  useEvent("touchend", function (e: any) {
    swipeEnd(e);
  });
  return {
    isPulling: isPTR,
  };
}

export default usePullToRefresh;
