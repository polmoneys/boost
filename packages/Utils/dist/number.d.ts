/**
 * Utility to format a number using locale.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 *
 */
export declare const formatNumber: (num: number, locale?: string | undefined) => string;
/**
 * Utility to clamp a value between a range
 */
export declare const numberClamp: (num: number, min: number, max: number) => number;
/**
 * Utility to round numbers
 */
export declare const roundTo: (n: number, precision: number) => number;
/**
 * Get 1fr
 */
export declare function gridColumnWidth(): string | 0;
/**
 * Snap point to an Array<points>
 */
export declare function snap(points: any): (v: any) => any;
