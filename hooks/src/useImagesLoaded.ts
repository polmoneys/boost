import { useEffect, useState } from "react";

function useImagesLoaded(ref: any) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const resolveReference: Array<any> = [];
    const imageElements = ref.current.getElementsByTagName("img");
    const promisesArray = [...imageElements].map(img => {
      if (!img.complete) {
        return new Promise(resolve => {
          resolveReference.push(resolve);
          img.addEventListener("load", resolve, { once: true });
        });
      } else return null;
    });
    if (promisesArray.length > 0) {
      Promise.all(promisesArray).then(() => {
        setImagesLoaded(true);
      });
    }

    return () => {
      for (const [i, shot] of imageElements.entries()) {
        shot.removeEventListener("load", resolveReference[i]);
      }
    };
  }, [ref]);
  return imagesLoaded;
}

export default useImagesLoaded;
