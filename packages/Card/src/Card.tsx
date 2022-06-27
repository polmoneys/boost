import { useMemo, ReactNode } from "react";
import { Dictionary } from "./Interfaces/Dictionary";
import AsProps from "./Interfaces/As";
import { CardMedia } from "card-media-react";
import { Group } from "group-react";
import ratios from "./utils";
import styles from "./Card.module.css";

interface Props extends AsProps {
  children: ReactNode;
  ratio: "square" | "portrait" | "landscape";
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
}

function Card(props: Props) {
  const { children, as = "div", ratio = "square" } = props;

  const cssRatio = useMemo(() => {
    return `${ratios[ratio].start}/${ratios[ratio].end}`;
  }, [ratio]);

  return (
    <Group
      className={styles.root}
      as={as}
      options={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        direction: "column",
      }}
      DONOTUse={{
        DONOTStyle: {
          ["--card-ratio" as string]: cssRatio,
        },
      }}
    >
      {children}
    </Group>
  );
}

Card.Media = CardMedia;

export default Card;
