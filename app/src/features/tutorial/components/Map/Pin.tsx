import { Fragment } from "react";
import {
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
} from "font-react";
import { Shape } from "shape-react";
import { Group } from "group-react";
import { IconBookmark, IconHeart, IconPin, IconStar } from "icon-react";
import styles from "./Pin.module.css";

interface Props {
  step: number;
  pin: {
    label: string;
    y: string;
    step: number;
  };
}

function Badge({ isCurrent }: { isCurrent: boolean }) {
  return (
    <Group as="div" className={styles.badge}>
      <Shape
        sides={6}
        size={40}
        fill={isCurrent ? "var(--accent)" : "var(--white)"}
      />
      <IconBookmark fill={isCurrent ? "var(--accent)" : "currentColor"} />
    </Group>
  );
}

function Pin(props: Props) {
  const { step = 0, pin } = props;
  const isCurrent = step === pin.step;
  return (
    <Group
      as="div"
      className={[
        styles.pin,
        isCurrent && styles.current,
        step > pin.step && styles.done,
      ]
        .filter(Boolean)
        .join(" ")}
      options={{
        alignItems: "center",
        DANGEROUS: {
          zIndex: "var(--z-max)",
          top: pin.y,
        },
      }}
    >
      <HelveticaNeueBoldS className="mr-auto">{pin.label}</HelveticaNeueBoldS>
      <Badge isCurrent={isCurrent} />
    </Group>
  );
}

export default Pin;
