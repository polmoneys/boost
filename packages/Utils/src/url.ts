/**
 * Get params from URI.
 * e.g. /orders/99/items/22, it will return  [orderId = 99, items = 22]
 */

export const getOrderFromUri = (uri: string) => {
  const {
    // @ts-ignore
    groups: { orderId, itemId },
  } = uri.match(/(?<orderId>\d+)\/items\/(?<itemId>\d+)\/?/);
  return [orderId, itemId];
};

/**
 * Pick item ID from URI.
 * e.g 50-foo-bar will return 50 or 0 if op fails
 *
 */
export function getIdFromUri(uri: string): number {
  const parts = uri ? uri.split("-") : [];

  if (parts.length > 0) {
    const parsed = parseInt(parts[0], 10);
    return isNaN(parsed) ? 0 : parsed;
  }

  return 0;
}

/**
 * Remove trailing slash of URI.
 *
 */
export const removeTrailingSlash = (uri: string) => {
  if (uri[uri.length - 1] === "/") {
    return uri.slice(0, -1);
  }

  return uri;
};
