import { useState, useEffect, useRef, RefObject } from "react";
import styles from "./Surface.module.css";

const Surface = ({
  initialValue = [0, 0],
  onChange = (points: [number, number]) => {},
}) => {
  const sliderContainer = useRef();

  const [xValue, setXValue] = useState(initialValue[0]);
  const [yValue, setYValue] = useState(initialValue[1]);

  const getValueFromPosition = (mouseX: number, mouseY: number) => {
    if (!sliderContainer.current) return [0, 0];
    const { height, width, x, y } = (
      sliderContainer.current as HTMLElement
    ).getBoundingClientRect();
    return [((mouseX - x) / width) * 100, ((mouseY - y) / height) * 100];
  };
  const updateValue = (mouseX: number, mouseY: number) => {
    const [newXValue, newYValue] = getValueFromPosition(mouseX, mouseY);

    if (newXValue > 100) {
      setXValue(100);
    } else if (newXValue < 0) {
      setXValue(0);
    } else {
      setXValue(newXValue);
    }

    if (newYValue > 100) {
      setYValue(100);
    } else if (newYValue < 0) {
      setYValue(0);
    } else {
      setYValue(newYValue);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    updateValue(event.clientX, event.clientY);
  };

  const handleMouseUp = (event: MouseEvent) => {
    window.removeEventListener("pointermove", handleMouseMove);
    window.removeEventListener("pointerup", handleMouseUp);
  };

  const handleMouseDown = (event: any) => {
    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerup", handleMouseUp);
    updateValue(event.clientX, event.clientY);
  };

  useEffect(() => {
    onChange([xValue, yValue]);
  }, [xValue, yValue]);

  return (
    <div className={styles.surface}>
      <div
        className={styles.interactive}
        ref={sliderContainer as unknown as RefObject<HTMLDivElement>}
        onPointerDown={handleMouseDown}
      >
        <div className={styles.bg} />
        <div
          className={styles.thumb}
          style={{ top: `${yValue}%`, left: `${xValue}%` }}
        />
      </div>
    </div>
  );
};

export default Surface;
