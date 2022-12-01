/**
 * Utility to split an array by a condition ()=>
 */
export declare const arraySplit: <T>(items: T[], fn: (el: T) => boolean) => [T[], T[]];
/**
 * Utility to create Array[n]
 */
export declare const rangify: (to: number) => number[];
/**
 * Utility to nest hierarchical data
 * https://codepen.io/polmoneys/pen/NWvYRvJ
 */
export declare const nest: (items: Array<any>, id?: number | null, link?: string) => any;
export declare const arrayLatest: <T>(items: T[], upcoming: T, clamp: number) => T[];
/**
 * Utility filter n properties for truthy or falsy...
 * ...values on type T (no effect if no filter selected)
 */
export interface Filter<T> {
    property: keyof T;
    isTruthyPicked: boolean;
}
export declare function filterT<T>(object: T, filters: Array<Filter<T>>): boolean;
/**
 * Utility for sorting strings, numbers (+ dates).
 */
export interface Sorter<T> {
    property: Extract<keyof T, string | number | Date>;
    isDescending: boolean;
}
export declare function sortT<T>(objectA: T, objectB: T, sorter: Sorter<T>): number;
export declare const arrayMove: <T>(arr: T[], from: number, to: number) => T[];
