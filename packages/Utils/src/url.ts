/**
 * Utility to open url in new tab imperatively
 */
export const openUrl = (to: string) => window?.open(to, "_blank");

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

/**
 * Get params as in {url}?{params}
 * e.g &theme=black&country=es,de
 *
 */

export const getUrlParams = () => {
  const queryParamsString = window.location.search.substr(1);

  let queryParams = queryParamsString
    .split("&")
    .reduce((accumulator, singleQueryParam) => {
      const [key, value] = singleQueryParam.split("=");
      accumulator[key] = decodeURIComponent(value);
      return accumulator;
    }, {} as any);

  for (const q in queryParams) {
    if (q.trim() === "") delete queryParams[""];
  }

  return queryParams;
};
