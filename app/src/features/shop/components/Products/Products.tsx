import { Card } from "card-react";
import { ReactNode, Fragment } from "react";
import { ScrollUnit } from "scroll-unit-react";
import Skeleton from "../../../tutorial/components/Skeleton/Skeleton";
import styles from "./Products.module.css";

interface Props {
  children?: ReactNode;
}

function Products(props: Props) {
  return (
    <ScrollUnit classNames={{ viewport: styles.viewport }}>
      <div className={styles.gallery}>
        <div className={styles.wrapper}>{props?.children ?? <Fragment />}</div>
      </div>
    </ScrollUnit>
  );
}

export default Products;
