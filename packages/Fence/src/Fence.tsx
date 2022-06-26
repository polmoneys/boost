import { ReactNode } from "react";
import { InView } from "react-intersection-observer";
import AsProps from "./Interfaces/As";

interface Props extends AsProps {
  children: ReactNode;
  className?: string;
  options?: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  };
  onChange?: (on: boolean) => void;
}

function Fence(props: Props) {
  const { as = "div", children, options, onChange, className } = props;

  return (
    <InView
      as={as}
      {...(options !== undefined && {
        ...options,
      })}
      onChange={(inView, entry) => onChange?.(inView)}
      {...(className !== undefined && { className })}
    >
      {children}
    </InView>
  );
}

export default Fence;
