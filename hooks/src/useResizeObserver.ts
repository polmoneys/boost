import { RefObject, useEffect } from "react";

function hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}

interface Props {
  ref: RefObject<HTMLElement>;
  onResize: () => void;
}

function useResizeObserver(props: Props) {
  const { ref, onResize } = props;

  useEffect(() => {
    let element = ref?.current;
    if (!element) {
      return;
    }

    if (!hasResizeObserver()) {
      window.addEventListener("resize", onResize, false);
      return () => {
        window.removeEventListener("resize", onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver(entries => {
        if (!entries.length) {
          return;
        }

        onResize();
      });
      resizeObserverInstance.observe(element);

      return () => {
        if (element) {
          resizeObserverInstance.unobserve(element);
        }
      };
    }
  }, [onResize, ref]);
}

export default useResizeObserver;
