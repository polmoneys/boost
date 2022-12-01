/**
 * Utility to split an array by a condition ()=>
 */
export const arraySplit = <T>(
  items: T[],
  fn: (el: T) => boolean
): [T[], T[]] => {
  let match = [] as T[];
  let dispose = [] as T[];
  for (const el of items) {
    if (fn(el) === true) {
      match.push(el);
    } else {
      dispose.push(el);
    }
  }
  return [match, dispose];
};

/**
 * Utility to create Array[n]
 */

export const rangify = (to: number) => [...Array(to).keys()];

/**
 * Utility to nest hierarchical data
 * https://codepen.io/polmoneys/pen/NWvYRvJ
 */

export const nest = (
  items: Array<any>,
  id: number | null = null,
  link = "parent_id"
): any =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id, link) }));

export const arrayLatest = <T>(items: Array<T>, upcoming: T, clamp: number) => [
  upcoming,
  ...items.slice(0, clamp - 1),
];

/**
 * Utility filter n properties for truthy or falsy...
 * ...values on type T (no effect if no filter selected)
 */

export interface Filter<T> {
  property: keyof T;
  isTruthyPicked: boolean;
}

export function filterT<T>(object: T, filters: Array<Filter<T>>) {
  if (filters.length === 0) {
    return true;
  }

  return filters.every(filter => {
    return filter.isTruthyPicked
      ? object[filter.property]
      : !object[filter.property];
  });
}

/**
 * Utility for sorting strings, numbers (+ dates).
 */

export interface Sorter<T> {
  property: Extract<keyof T, string | number | Date>;
  isDescending: boolean;
}

export function sortT<T>(objectA: T, objectB: T, sorter: Sorter<T>) {
  const result = () => {
    if (objectA[sorter.property] > objectB[sorter.property]) {
      return 1;
    } else if (objectA[sorter.property] < objectB[sorter.property]) {
      return -1;
    } else {
      return 0;
    }
  };

  return sorter.isDescending ? result() * -1 : result();
}

/**
 *  Utility to move array items.
 *  http://github.com/sindresorhus/array-move 🙏
 */

const moveMutate = <T>(arr: Array<T>, from: number, to: number) => {
  arr.splice(to < 0 ? arr.length + to : to, 0, arr.splice(from, 1)[0]);
};

export const arrayMove = <T>(arr: Array<T>, from: number, to: number) => {
  arr = arr.slice();
  moveMutate(arr, from, to);
  return arr;
};
