import { useState } from "react";
import useEvent from "./useEvent";
import Timer from "../../packages/Utils/src/Timer";

interface Props {
  onEndPTR?: () => void;
  durationPTR: number;
  element?: Element;
}

function usePullToRefresh(props: Props) {
  const { durationPTR = 1000, onEndPTR, element = window } = props;

  const startPoint = { x: 0, y: 0 };
  const endPoint = { x: 0, y: 0 };
  const [isPTR, setStatus] = useState(false);
  function swipeStart(e: any) {
    if (typeof e["targetTouches"] !== "undefined") {
      const touch = e.targetTouches[0];
      startPoint.x = touch.screenX;
      startPoint.y = touch.screenY;
    } else {
      startPoint.x = e.screenX;
      startPoint.y = e.screenY;
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
    const changeY = startPoint.y - endPoint.y;
    const changeX = startPoint.x - endPoint.x;
    if (isPullDown(changeY, changeX)) {
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
      endPoint.x = touch.screenX;
      endPoint.y = touch.screenY;
    } else {
      endPoint.x = e.screenX;
      endPoint.y = e.screenY;
    }

    swipeCheck();
  }

  useEvent(
    "touchstart",
    function (e: any) {
      swipeStart(e);
    },
    element
  );

  useEvent("touchend", function (e: any) {
    swipeEnd(e);
  });
  return {
    isPulling: isPTR,
  };
}

export default usePullToRefresh;
