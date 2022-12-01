/**
 * Utility to format a Date according to a locale
 */

export const formatDate = (date: Date, locale = "es-ES") =>
  new Intl.DateTimeFormat(locale).format(new Date(date));

/**
 * Utility to format time in coffe emoji
 */
export function formatReadingTime(minutes: number) {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`;
}
