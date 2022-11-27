import require$$0, { useState, Fragment } from "react";
const fallback = (width, height, fill) => `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect  fill='%23${fill}' width="${width}" height="${height}"/></svg>`;
const root = "iv";
var styles = {
  root
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function Pic(props) {
  const {
    height,
    sources,
    src,
    alt = "",
    eager = false,
    priority = "low"
  } = props;
  const [hasError, setError] = useState(false);
  const onErrorImage = () => {
    setError(true);
  };
  let sourcesTags = /* @__PURE__ */ jsx(Fragment, {});
  if (sources !== void 0) {
    sourcesTags = Object.keys(sources).map((key) => {
      const hasSource = (sources == null ? void 0 : sources[key]) !== void 0;
      const type = `image/${key}`;
      const srcSet = sources[key].toString();
      return hasSource ? /* @__PURE__ */ jsx("source", {
        type,
        srcSet
      }, key) : /* @__PURE__ */ jsx(Fragment, {});
    });
  }
  return /* @__PURE__ */ jsxs("picture", {
    className: styles.root,
    ...height && {
      style: {
        height
      }
    },
    onError: onErrorImage,
    children: [hasError && /* @__PURE__ */ jsx("img", {
      src: fallback("600px", height != null ? height : "200px", "currentColor"),
      alt: "Loading error"
    }), !hasError && /* @__PURE__ */ jsxs(Fragment, {
      children: [sourcesTags, /* @__PURE__ */ jsx("img", {
        src,
        alt,
        loading: eager ? "eager" : "lazy",
        height
      })]
    })]
  });
}
export { Pic };
