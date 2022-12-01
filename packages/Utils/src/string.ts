/**
 * Utility to truncate a string from both ends
 */

export function truncateStartEnd(initial: string, padding = 4) {
  if (!initial) return;
  const str = initial.toString();
  const leftSide = str.substr(0, padding);
  const rightSide = str.substr(str.length - padding, padding);
  const newStr = `${leftSide}${".".repeat(padding)}${rightSide}`;
  return {
    next: newStr,
    prev: str,
  };
}

/**
 * Utility to test for special chars in a file name
 */

export function validFileName(initial: string) {
  const specialCharacters = /[!$\[\]{}%\/\\"?&|~]+|[\.]{2,}]/;
  return !specialCharacters.test(initial);
}
