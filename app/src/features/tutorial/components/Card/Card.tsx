import { Fragment, ReactNode } from "react";
import { Shape } from "shape-react";
import Skeleton from "../Skeleton/Skeleton";

function Card({
  children = <Fragment />,
  featured = false,
  sides = 0,
}: {
  children?: ReactNode;
  featured?: boolean;
  sides?: number;
}) {
  const hasShape = sides !== 0;
  return (
    <aside
      className={["p $$$$$ accent white", featured && "accent-error"]
        .filter(Boolean)
        .join(" ")}
    >
      <Skeleton />
      <br />
      {!featured && hasShape && <Shape sides={sides} />}

      {featured && hasShape && (
        <Fragment>
          <Skeleton />
          <br />
          <Shape sides={sides} />
        </Fragment>
      )}
      {!featured && !hasShape && <Skeleton fill="transparent" />}

      {children}
    </aside>
  );
}

export default Card;
