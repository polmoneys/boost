/**
 * Utility to open url in new tab imperatively
 */
export declare const openUrl: (to: string) => Window | null;
/**
 * Get params from URI.
 * e.g. /orders/99/items/22, it will return  [orderId = 99, items = 22]
 */
export declare const getOrderFromUri: (uri: string) => any[];
/**
 * Pick item ID from URI.
 * e.g 50-foo-bar will return 50 or 0 if op fails
 *
 */
export declare function getIdFromUri(uri: string): number;
/**
 * Remove trailing slash of URI.
 *
 */
export declare const removeTrailingSlash: (uri: string) => string;
/**
 * Get params as in {url}?{params}
 * e.g &theme=black&country=es,de
 *
 */
export declare const getUrlParams: () => any;
