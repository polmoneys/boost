import { useState, Fragment, ReactNode } from "react";
import { Dictionary } from "../../Types/dist/types";
import fallback from "./utils";
import styles from "./Pic.module.css";

interface Props {
  alt: string;
  src: string;
  height?: string;
  sources?: Dictionary;
  eager?: boolean;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  priority?: "low" | "hight";
}

function Pic(props: Props) {
  const {
    height,
    sources,
    src,
    alt = "",
    eager = false,
    priority = "low",
  } = props;

  const [hasError, setError] = useState(false);
  const onErrorImage = () => {
    setError(true);
  };

  let sourcesTags: ReactNode = <Fragment />;

  if (sources !== undefined) {
    sourcesTags = Object.keys(sources).map(key => {
      const hasSource = sources?.[key] !== undefined;
      const type = `image/${key}`;
      const srcSet = sources[key].toString();
      return hasSource ? (
        <source key={key} type={type} srcSet={srcSet} />
      ) : (
        <Fragment />
      );
    });
  }

  return (
    <picture
      className={styles.root}
      {...(height && { style: { height: height } })}
      onError={onErrorImage}
    >
      {hasError && (
        <img
          src={fallback("600px", height ?? "200px", "currentColor")}
          alt="Loading error"
        />
      )}

      {!hasError && (
        <Fragment>
          {sourcesTags}
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            height={height}
            // fetchpriority={priority}
          />
        </Fragment>
      )}
    </picture>
  );
}

export default Pic;
