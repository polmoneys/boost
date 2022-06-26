import { ReactNode, useMemo, ElementType } from "react";
import AsProps from "./Interfaces/As";
import VariantProps from "./Interfaces/Variants";
import { Dictionary } from "./Interfaces/Dictionary";

interface Props extends AsProps, VariantProps {
  className?: string;
  children: ReactNode;
  gap?: string;
  size?: string;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  options?:
    | {
        stretch?: boolean;
        alignItems?: string;
        justifyContent?: string;
        wrap?: string;
        direction?: string;
        placeItems?: never;
      }
    | {
        placeItems?: string;
        alignItems?: never;
        stretch?: never;
        justifyContent?: never;
        wrap?: never;
        direction?: never;
      };
}

function Group(props: Props) {
  const {
    children,
    as,
    gap = "1em",
    size = "320px",
    css = "flex",
    options,
    DONOTUse,
    ...rest
    // rest === className,
  } = props;

  const isFlex = css === "flex";

  const stylesConfig = useMemo(() => {
    if (isFlex) {
      return {
        display: "flex",
        gap,
        flexDirection: options?.direction ?? "row",
        ...(options?.stretch && { width: "100%" }),
        ...(options?.alignItems && { alignItems: options?.alignItems }),
        ...(options?.justifyContent && {
          justifyContent: options?.justifyContent,
        }),

        ...(options?.wrap && { flexWrap: options.wrap }),
        ...(size !== "320px" && { flex: `1 0 ${size}` }),
      };
    }
    return {
      display: "grid",
      gap,
      gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      ...(options?.stretch && { width: "100%" }),
    };
  }, [isFlex]) as Dictionary;

  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      {...rest}
      style={{
        ...(DONOTUse !== undefined && {
          ...DONOTUse.DONOTStyle,
        }),
        ...stylesConfig,
      }}
    >
      {children}
    </Tag>
  );
}

export default Group;
