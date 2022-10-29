export const targets = [
  { value: "es3", label: "ECMAScript 3" },
  { value: "es5", label: "ECMAScript 5" },
  { value: "es2015", label: "ECMAScript 2015" },
  { value: "es2016", label: "ECMAScript 2016" },
  { value: "es2017", label: "ECMAScript 2017" },
  { value: "es2018", label: "ECMAScript 2018" },
  { value: "es2019", label: "ECMAScript 2019" },
];

export const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export type StatusMachine = "draft" | "live" | "unknown" | "published";
