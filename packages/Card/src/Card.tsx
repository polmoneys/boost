import { useMemo, ReactNode } from "react";
import { Pic } from "pic-react";
import { Group } from "group-react";
import { HelveticaNeueBold } from "font-react";
import AsProps from "./Interfaces/As";
import { WithChildren, Dictionary } from "../../Types/dist/types";
import ratios from "./utils";
import "../../Pic/dist/style.css";
import "../../Font/dist/style.css";
import styles from "./Card.module.css";

interface Props extends AsProps, WithChildren {
  ratio: "square" | "portrait" | "landscape";
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  className?: string;
}

function Card(props: Props) {
  const { children, as = "div", ratio = "square", className, DONOTUse } = props;

  const cssRatio = useMemo(() => {
    return `${ratios[ratio].start}/${ratios[ratio].end}`;
  }, [ratio]);

  const groupClassName = [styles.group, className].filter(Boolean).join(" ");
  return (
    <Group
      className={groupClassName}
      as={as}
      options={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        direction: "column",
        DANGEROUS: {
          ["--card-ratio" as string]: cssRatio,
          ...(DONOTUse?.DONOTStyle !== undefined && DONOTUse?.DONOTStyle),
        },
      }}
    >
      {children}
    </Group>
  );
}
interface TitleProps {
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}
Card.Title = (props: TitleProps) => (
  <Group
    as="div"
    options={{ DANGEROUS: { width: "100%", alignItems: "center" } }}
    {...(props?.className !== undefined && { className: props.className })}
    key={props.children as string}
  >
    <HelveticaNeueBold as="h2" className="mr-auto">
      {props.children}
    </HelveticaNeueBold>
    {props?.actions !== undefined && props?.actions}
  </Group>
);
Card.Media = Pic;

export default Card;
