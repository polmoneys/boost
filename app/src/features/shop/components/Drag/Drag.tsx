import { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";

interface Props {
  fn: any;
}

function Drag(props: Props) {
  const { fn } = props;
  const [{ x, y }, setState] = useState({ x: 0, y: 0 });

  const handleChange = (state: any) => {
    if (!state) return;

    const {
      event, // the source event
      xy, // [x,y] values (pointer position or scroll offset)
      initial, // xy value when the gesture started
      intentional, // is the gesture intentional
      delta, // movement delta (movement - previous movement)
      offset, // offset since the first gesture
      lastOffset, // offset when the last gesture started
      movement, // displacement between offset and lastOffset
      velocity, // momentum of the gesture per axis (in px/ms)
      distance, // offset distance per axis
      direction, // direction per axis
      startTime, // gesture start time
      elapsedTime, // gesture elapsed time
      type, // event type
      target, // event target
      currentTarget, // event currentTarget
      timeStamp, // timestamp of the event
      first, // true when it's the first event
      last, // true when it's the last event
      active, // true when the gesture is active
      memo, // value returned by your handler on its previous run
      cancel, // function you can call to interrupt some gestures
      canceled, // whether the gesture was canceled (drag and pinch)
      down, // true when a mouse button or touch is down
      buttons, // number of buttons pressed
      touches, // number of fingers touching the screen
      args, // arguments you passed to bind (React only)
      ctrlKey, // true when control key is pressed
      altKey, // "      "  alt     "      "
      shiftKey, // "      "  shift   "      "
      metaKey, // "      "  meta    "      "
      locked, // whether document.pointerLockElement is set
      dragging, // is the component currently being dragged
      moving, // "              "              "  moved
      scrolling, // "              "              "  scrolled
      wheeling, // "              "              "  wheeled
      pinching, // "              "              "  pinched
    } = state;

    if (down) {
      const isColliding = fn({ x, y, width: 60, height: 60 });

      console.log({
        isColliding,
      });
    }
    setState({ x: down ? movement[0] : 0, y: down ? movement[1] : 0 });
  };

  const bind = useDrag(state => handleChange(state));
  return (
    <div
      className="drag-t"
      {...bind()}
      style={{ transform: `translate(${x}px,${y}px)` }}
    />
  );
}

export default Drag;
