import { useMemo, ElementType, CSSProperties } from "react";
import AsProps from "./Interfaces/As";
import VariantProps from "./Interfaces/Variants";
import { Dictionary, WithChildren } from "../../Types/dist/types";

interface Props extends AsProps, VariantProps, WithChildren {
  className?: string;
  gap?: string;
  size?: string;
  id?: string;
  options?: {
    stretch?: boolean;
    alignItems?: string;
    justifyContent?: string;
    wrap?: string;
    direction?: string;
    placeItems?: string;
    DANGEROUS?: Dictionary;
  };
}

function Group(props: Props) {
  const {
    children,
    as,
    gap = "1em",
    size = "",
    variant = "flex",
    options,
    ...rest
  } = props;

  const isFlex = variant === "flex";

  const stylesConfig = useMemo(() => {
    if (isFlex) {
      return {
        display: "flex",
        gap,
        ...(options?.direction !== undefined && {
          flexDirection: options?.direction,
        }),
        ...(options?.stretch !== undefined && {
          width: "100%",
          height: "100%",
        }),
        ...(options?.alignItems !== undefined && {
          alignItems: options.alignItems,
        }),
        ...(options?.justifyContent !== undefined && {
          justifyContent: options.justifyContent,
        }),

        ...(options?.wrap !== undefined && { flexWrap: options.wrap }),
        ...(size !== "" && { flex: `1 0 ${size}` }),
      };
    }
    return {
      display: "grid",
      gap,
      ...(size !== "" && {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      }),
      ...(options?.stretch && { width: "100%" }),
    };
  }, [isFlex]) as CSSProperties;
  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      {...rest}
      style={{
        ...(options?.DANGEROUS !== undefined && {
          ...options.DANGEROUS,
        }),
        ...stylesConfig,
      }}
    >
      {children}
    </Tag>
  );
}

Group.Row = (props: Props) => <Group {...props} />;

Group.Column = (props: Props) => {
  const { options, ...rest } = props;
  return (
    <Group
      options={{ direction: "column", ...(options !== undefined && options) }}
      {...rest}
    />
  );
};

Group.ColToRow = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <Group
      {...rest}
      className={["col-to-row", className].filter(Boolean).join(" ")}
    />
  );
};

Group.Center = (props: Props) => {
  const { options, ...rest } = props;
  return (
    <Group
      {...rest}
      options={{
        ...options,
        alignItems: "center",
        justifyContent: "center",
        stretch: true,
      }}
    />
  );
};

export default Group;
