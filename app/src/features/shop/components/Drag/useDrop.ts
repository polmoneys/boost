import { useEffect, useState } from "react";

function collision(r1: any, r2: any) {
  if (
    r1.x + r1.width >= r2.x &&
    r1.x <= r2.x + r2.width &&
    r1.y + r1.height >= r2.y &&
    r1.y <= r2.y + r2.height
  ) {
    const top_diff = r2.y + r2.height - r1.y;
    const bottom_diff = r1.y + r1.height - r2.y;
    const left_diff = r2.x + r2.width - r1.x;
    const right_diff = r1.x + r1.width - r2.x;

    const min = Math.min(bottom_diff, top_diff, left_diff, right_diff);

    return {
      bottom: bottom_diff == min,
      right: right_diff == min,
      left: left_diff == min,
      top: top_diff == min,
    };
  }
  return null;
}

function useDrop(ref: any) {
  const [state, setState] = useState({
    hit: {
      bottom: false,
      right: false,
      left: false,
      top: false,
    },
    area: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });
  useEffect(() => {
    if (ref.current === null) return;
    const {
      // bottom
      // ,left
      // ,right
      // ,top
      height,
      width,
      x,
      y,
    } = ref.current.getBoundingClientRect();
    setState(prev => ({
      ...prev,
      area: {
        height,
        width,
        x,
        y,
      },
    }));
  }, []);

  const isColliding = (rect1: any) => {
    console.log({ rect1 });
    const x = collision(rect1, state.area);
    return x;
  };
  return { ...state, isColliding };
}

export default useDrop;
