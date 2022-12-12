export const isBoolean = (x: unknown) => typeof x === "boolean";
/**
 * Utility to ease dealing with booleans
 */

export const boolOrBoolString = (x: unknown) =>
  x === "true" ? true : isBoolean(x) ? x : false;
