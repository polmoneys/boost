/**
 * Utility to format a number using locale.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 *
 */
export const formatNumber = (num: number, locale?: string) =>
  new Intl.NumberFormat(locale, { minimumIntegerDigits: 2 }).format(num);

/**
 * Utility to clamp a value between a range
 */

export const numberClamp = (num: number, min: number, max: number) => {
  return num <= min ? min : num >= max ? max : num;
};

/**
 * Utility to round numbers
 */

export const roundTo = (n: number, precision: number) =>
  Math.round(n * 10 ** precision) / 10 ** precision;

/**
 * Get 1fr
 */

export function gridColumnWidth() {
  const grid = document.querySelector(".grid");
  if (grid) {
    return getComputedStyle(grid).gridTemplateColumns;
  }
  return 0;
}

/**
 * Snap point to an Array<points>
 */

export function snap(points: any) {
  if (typeof points === "number") {
    return (v: any) => Math.round(v / points) * points;
  } else {
    let i = 0;
    const numPoints = points.length;

    return (v: any) => {
      let lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        const point = points[i];
        const distance = Math.abs(point - v);

        if (distance === 0) return point;

        if (distance > lastDistance) return points[i - 1];

        if (i === numPoints - 1) return point;

        lastDistance = distance;
      }
    };
  }
}
