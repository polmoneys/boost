import { roundTo, numberClamp } from "./number";

/**
 * Utility to measure a ref<HTMElement>
 */

export async function measure(el: any) {
  if (el.current === null) return;
  const rect = el.current.getBoundingClientRect();
  return new Promise(resolveIt => resolveIt(rect));
}

/**
 * Utility to return a ratio from an image
 */

export async function measureAspectRatioFit(
  targetImage: HTMLImageElement,
  maxWidth: number,
  maxHeight: number
) {
  const { width, height } = targetImage;
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return new Promise(resolveIt =>
    resolveIt({
      ratio,
      width: roundTo(width * ratio, 0),
      height: roundTo(height * ratio, 0),
      targetImage,
    })
  );
}

/**
 * Utility to animate img taking ratio into account
 */

export async function measureAnimation(
  imageRef: HTMLImageElement,
  frame: number,
  breakpoint: number
) {
  const w = window,
    d = document,
    scrollTop = w.scrollY,
    scrollLeft = w.scrollX,
    viewportWidth = w.innerWidth || d.documentElement.clientWidth || 0,
    viewportHeight = w.innerHeight || d.documentElement.clientHeight || 0,
    targetImage: any = await measure(imageRef),
    { ratio }: any = await measureAspectRatioFit(
      targetImage,
      viewportWidth,
      viewportHeight
    ),
    viewportX = viewportWidth / 2,
    viewportY = scrollTop + viewportHeight / 2,
    imageCenterX = targetImage.left + scrollLeft + targetImage.width / 2,
    imageCenterY = targetImage.top + scrollTop + targetImage.height / 2,
    translateX = roundTo(viewportX - imageCenterX, 0),
    translateY = roundTo(viewportY - imageCenterY, 0),
    factor =
      viewportHeight < breakpoint || viewportWidth < breakpoint
        ? 1
        : numberClamp(
            roundTo(numberClamp(roundTo(ratio, 2), 1, 5) - frame, 2),
            1,
            5
          );
  return new Promise(resolve => resolve({ factor, translateX, translateY }));
}
