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

const CardTutorial = () => {
  return (
    <div className="resize">
      <div className="sticky-grid" style={{ width: "100%" }}>
        {[...Array(12)].map((k, v) => (
          <Card key={v} featured={v === 3} sides={v + 3} />
        ))}
      </div>
    </div>
  );
};
export default CardTutorial;
