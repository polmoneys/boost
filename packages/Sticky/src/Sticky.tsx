import { ReactNode, ElementType } from "react";
import AsProps from "./Interfaces/As";

interface Props extends AsProps {
  children: string | ReactNode;
  options?: {
    top: number;
    left: number;
  };
  className?: string;
}

function Sticky(props: Props) {
  const { as, children, options, className } = props;

  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      style={{
        width: "100%",
        position: "sticky",
        top: options?.top ?? 0,
        left: options?.left ?? 0,
      }}
      {...(className !== undefined && { className })}
    >
      {children}
    </Tag>
  );
}

export default Sticky;
