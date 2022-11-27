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
 * Get 1fr
 */

export function gridColumnWidth() {
  const grid = document.querySelector(".grid");
  if (grid) {
    return getComputedStyle(grid).gridTemplateColumns;
  }
  return 0;
}
