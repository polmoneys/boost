import { Fragment, ReactNode, useMemo, useRef, useState } from "react";
import { useDrag, useDrop } from "react-aria";
import { List } from "list-react";
import { Button } from "button-react";
import { Group } from "group-react";
import { IconCross } from "icon-react";
import Sortable from "./Sortable";
import styles from "./Move.module.css";

function Move() {
  return <Fragment />;
}

interface Props {
  children?: ReactNode;
  preview?: boolean;
  classNames?: {
    group?: string;
    dragging?: string;
    dropping?: string;
  };
  onCancel?: (item: string) => void;
  onDrop?: (y: number) => void;
  onMove?: (position: { x: number; y: number }) => void;
  id: string;
  label?: string;
  mode?: "move" | "copy";
}

Move.Drag = (props: Props) => {
  const {
    children,
    preview = false,
    classNames,
    onCancel,
    onDrop,
    onMove,
    id,
    label,
    mode = "move",
  } = props;

  const [visibility, setVisibility] = useState(true);
  // const previewEl = useRef(null);
  const { dragProps, isDragging } = useDrag({
    // preview: previewEl,
    getItems() {
      return [
        {
          "text/plain": id,
        },
        {
          "text/plain": label ?? "",
        },
      ];
    },
    onDragMove(event) {
      onMove?.({
        x: event.x,
        y: event.y,
      });
    },
    onDragEnd(event) {
      const { y, dropOperation } = event;
      const op = dropOperation;
      onDrop?.(y);
      if (op === "cancel") onCancel?.(id);
      if (op === "move") {
        if (mode === "move") {
          setVisibility(false);
        }
      }
    },
  });

  const groupClassNames = useMemo(
    () =>
      [
        classNames?.group,
        styles.group,
        isDragging && styles.dragging,
        isDragging && classNames?.dragging,
      ]
        .filter(Boolean)
        .join(" "),
    [isDragging]
  );

  if (!visibility) {
    return null;
  }
  return (
    <div {...dragProps} role="button" className={groupClassNames} tabIndex={0}>
      {children}
    </div>
  );
};

interface DropProps extends Omit<Props, "children" | "onDrop" | "preview"> {
  initial: Array<string>;
  onDrop: (items: Array<string>) => void;
}

Move.Drop = (props: DropProps) => {
  const { classNames, id, onDrop, onCancel, initial } = props;
  const ref = useRef(null);
  const onEvent = (e: any) => ({});

  const { dropProps, isDropTarget } = useDrop({
    ref,
    onDropEnter: onEvent,
    onDropMove: onEvent,
    onDropExit: onEvent,
    async onDrop(e) {
      const items = await Promise.all(
        e.items
          .filter(item => item.kind === "text" && item.types.has("text/plain"))
          .map((item: any) => item.getText("text/plain"))
      );
      onDrop?.(items);
    },
  });
  const groupClassNames = [
    classNames?.group,
    styles.group,
    isDropTarget && styles.dropped,
    isDropTarget && classNames?.dropping,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Group as="div" options={{ direction: "column" }}>
      <div
        {...dropProps}
        ref={ref}
        role="button"
        className={groupClassNames}
        tabIndex={0}
      />
      {initial?.length > 0 && (
        <List id={`list-drop-${id}`} label="">
          {initial?.map(item => (
            <List.Item
              key={item}
              end={
                <Button variant="icon" onClick={() => onCancel?.(item)}>
                  <IconCross />
                </Button>
              }
            >
              {item}
            </List.Item>
          ))}
        </List>
      )}
    </Group>
  );
};

Move.Sortable = Sortable;

export default Move;
