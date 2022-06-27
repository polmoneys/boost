type Size = number | string;

const fallback = (width: Size, height: Size, fill: string) =>
  `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect  fill='%23${fill}' width="${width}" height="${height}"/></svg>`;

export default fallback;
