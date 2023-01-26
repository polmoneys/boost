import ms from "ms";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

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

/**
 * Utility for month mgmt
 * console.log(month.name(2));
 * → March
 * console.log(month.number("November"));
 * → 10
 */

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type MonthName = typeof months[number];

export const monthMgmt = (function () {
  const names: Array<MonthName> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    name: function (number: number) {
      return names[number];
    },
    number: function (name: MonthName) {
      return names.indexOf(name);
    },
  };
})();
