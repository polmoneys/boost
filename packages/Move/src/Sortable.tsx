import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-aria";
import { snap } from "boost-utils";
import { List } from "list-react";
import Move from "./Move";
import styles from "./Move.module.css";

/*
  DROP
    crud []
  DRAGGABLE LIST AFFORDANCE + ACTION
https://react-spectrum.adobe.com/react-aria/useDrag.html#drag-button

  <DragPreview ref={preview}>
    {(items) => (
      <div style={{ background: 'green', color: 'white' }}>
        {items[0]['text/plain']}
      </div>
    )}
  </DragPreview>

*/

interface Props {
  items: Array<{
    label: string;
    id: string;
  }>;
  itemHeight: number;
  onDrop?: (position: { x: number; y: number }) => void;
  onDropValue?: (start: string, end: string) => void;
}
function Sortable(props: Props) {
  const { items, itemHeight, onDrop, onDropValue } = props;

  const [cuePos, setPos] = useState(0);

  const valuesRange = items.map((opt, i) => i * itemHeight);
  const valuesRangeWithoutZero = valuesRange.filter((opt, i) => i !== 0);
  const reversedOpts = items.reverse();
  const snapTo = snap(valuesRangeWithoutZero);

  const showCues = (y: number) => {
    const finalPosition = snapTo(y);
    setPos(finalPosition);
  };

  const reorder = (y: number, startId: string) => {
    setPos(0);
    const finalPosition = snapTo(y);
    const endId =
      items
        .map((item, itemPos) => ({
          ...item,
          finalPosition: itemPos * itemHeight,
        }))
        .find(item => item.finalPosition === finalPosition)?.id ?? "";
    onDropValue?.(startId, endId);
  };

  return (
    <div className={styles.overflow}>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "red",
          transform: `translateY(${cuePos}px)`,
          position: "absolute",
          opacity: cuePos === 0 ? 0 : 1,
        }}
      />
      <List label="test">
        {items?.map(item => (
          <Move.Drag
            id={item.id}
            label={item.label}
            key={item.id}
            onMove={pos => showCues(pos.y)}
            onDrop={y => reorder(y, item.id)}
          >
            <List.Item>{item.label}</List.Item>
          </Move.Drag>
        ))}
      </List>
    </div>
  );
}

export default Sortable;
