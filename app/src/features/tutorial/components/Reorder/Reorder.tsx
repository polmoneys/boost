import { Move } from "move-react";
import { useEffect, useState } from "react";
import {
  Button,
  HelveticaNeueBoldS,
  IconBookmark,
  IconHeart,
  IconIg,
  IconGithub,
  IconTwitter,
  IconStar,
  List,
  UI,
  Group,
} from "styled-react";

const initialDrags = [
  {
    id: "instagram",
    label: <IconIg size="lg" />,
  },
  {
    id: "github",
    label: <IconGithub size="lg" />,
  },
  {
    id: "twitter",
    label: <IconTwitter size="lg" />,
  },
];
function Reorder() {
  const [state, setState] = useState<Array<string>>([]);
  const onChange = (newItem: string) => {
    if (state.includes(newItem)) {
      setState(prev => prev.filter(it => it !== newItem));
      const newDrag = initialDrags?.find(it => it.id === newItem);
      if (newDrag !== undefined) {
        setDrags(prev => [...new Set([...prev, newDrag])]);
      }
    } else {
      setState(prev => [...prev, newItem]);
      setDrags(prev => prev.filter(it => it.id !== newItem));
    }
  };
  // const [stateB, setStateB] = useState<Array<string>>([]);

  // const onChangeB = (newItem: string) => {
  //   if (stateB.includes(newItem)) {
  //     setStateB(prev => prev.filter(it => it !== newItem));
  //   } else {
  //     setStateB(prev => [...prev, newItem]);
  //   }
  // };

  const [loaded, setLoaded] = useState(false);

  const [drags, setDrags] = useState(() => initialDrags);
  const resetDrags = () => setDrags(initialDrags);

  useEffect(() => {
    console.log("hei", state.length, drags.length);

    if (state.length === 3 && drags.length === 0) {
      resetDrags();
    }
  }, [state.length, drags.length]);

  return (
    <div>
      <Group as="div">
        {drags.map(drag => (
          <Move.Drag
            // mode="copy"
            key={drag.id}
            id={drag.id}
            classNames={{ group: "drag-icon", dragging: "dragging" }}
          >
            {drag.label}
          </Move.Drag>
        ))}
      </Group>
      <UI.Br />
      <Group as="div">
        <Move.Drop
          initial={state}
          onDrop={label => onChange(label[0])}
          onCancel={label => onChange(label)}
          id="dr-2"
          classNames={{
            group: "drop-area",
            dragging: "dragging",
            dropping: "dropping",
          }}
        />
        {/* <Move.Drop
          initial={state}
          onDrop={label => onChangeB(label[0])}
          onCancel={label => onChangeB(label)}
          id="dr-3"
          classNames={{
            group: "drop-area",
            dragging: "dragging",
            dropping: "dropping",
          }}
        /> */}
      </Group>
    </div>
  );
}

export default Reorder;
