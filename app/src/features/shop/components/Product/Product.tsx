import { ReactNode } from "react";
import { ScrollUnit } from "scroll-unit-react";
import Skeleton from "../../../tutorial/components/Skeleton/Skeleton";
import Products from "../Products/Products";
import styles from "./Product.module.css";

interface Props {
  popover: ReactNode;
  options: ReactNode;
  button: ReactNode;
  shape: ReactNode;
  radio: ReactNode;
}

function Product(props: Props) {
  const { popover, options, button, shape, radio } = props;

  const placeholders = ["image", "header", "footer", "brand"].map(element => (
    <div className={styles[element]} key={element}>
      <Skeleton {...(element === "image" && { cover: true })} />
    </div>
  ));
  return (
    <div className="shadow" style={{ position: "relative" }}>
      <ScrollUnit classNames={{ viewport: styles.viewport }}>
        <article className={styles.product}>
          <div className={styles.popover}>{popover}</div>
          <div className={styles.shape}>{shape}</div>
          <div className={styles.options}>{options}</div>
          <div className={styles.radio}>{radio}</div>

          <div className={styles.button}>{button}</div>
          <div className={styles.content}>
            {[...Array(6)].map((k, v) => (
              <div className={styles.item} key={v}>
                <Skeleton />
              </div>
            ))}
          </div>
          {placeholders}
        </article>
        <div className={styles.extra}>
          {[...Array(4)].map((k, v) => (
            <div className={styles.item} key={v}>
              <Skeleton />
            </div>
          ))}
        </div>
        <Products />
        <div className={styles.extra}>
          {[...Array(4)].map((k, v) => (
            <div className={styles.item} key={v}>
              <Skeleton />
            </div>
          ))}
        </div>
      </ScrollUnit>
    </div>
  );
}

export default Product;
