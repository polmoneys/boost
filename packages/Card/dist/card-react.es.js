import require$$0, { useState, Fragment, useMemo } from "react";
const fallback = (width, height, fill) => `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect  fill='%23${fill}' width="${width}" height="${height}"/></svg>`;
const root$1 = "Fj";
var styles$1 = {
  root: root$1
};
var jsxRuntime$2 = { exports: {} };
var reactJsxRuntime_production_min$2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = require$$0, k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$2(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m$2.call(a, b) && !p$2.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k$2, type: c, key: e, ref: h, props: d, _owner: n$2.current };
}
reactJsxRuntime_production_min$2.Fragment = l$2;
reactJsxRuntime_production_min$2.jsx = q$2;
reactJsxRuntime_production_min$2.jsxs = q$2;
{
  jsxRuntime$2.exports = reactJsxRuntime_production_min$2;
}
const jsx$2 = jsxRuntime$2.exports.jsx;
const jsxs = jsxRuntime$2.exports.jsxs;
function CardMedia(props) {
  const {
    height,
    sources,
    src,
    alt = "",
    eager = false
  } = props;
  const [hasError, setError] = useState(false);
  const onErrorImage = () => {
    setError(true);
  };
  let sourcesTags = /* @__PURE__ */ jsx$2(Fragment, {});
  if (sources !== void 0) {
    sourcesTags = Object.keys(sources).map((key) => {
      const hasSource = (sources == null ? void 0 : sources[key]) !== void 0;
      const type = `image/${key}`;
      const srcSet = sources[key].toString();
      return hasSource ? /* @__PURE__ */ jsx$2("source", {
        type,
        srcSet
      }, key) : /* @__PURE__ */ jsx$2(Fragment, {});
    });
  }
  return /* @__PURE__ */ jsxs("picture", {
    className: styles$1.root,
    ...height && {
      style: {
        height
      }
    },
    onError: onErrorImage,
    children: [hasError && /* @__PURE__ */ jsx$2("img", {
      src: fallback("600px", height != null ? height : "200px", "currentColor"),
      alt: "Loading error"
    }), !hasError && /* @__PURE__ */ jsxs(Fragment, {
      children: [sourcesTags, /* @__PURE__ */ jsx$2("img", {
        src,
        alt,
        loading: eager ? "eager" : "lazy",
        height
      })]
    })]
  });
}
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min$1 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = require$$0, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k$1, type: c, key: e, ref: h, props: d, _owner: n$1.current };
}
reactJsxRuntime_production_min$1.Fragment = l$1;
reactJsxRuntime_production_min$1.jsx = q$1;
reactJsxRuntime_production_min$1.jsxs = q$1;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min$1;
}
const jsx$1 = jsxRuntime$1.exports.jsx;
function Group(props) {
  const {
    children,
    as,
    gap = "1em",
    size = "320px",
    css = "flex",
    options,
    DONOTUse,
    ...rest
  } = props;
  const isFlex = css === "flex";
  const stylesConfig = useMemo(() => {
    var _a;
    if (isFlex) {
      return {
        display: "flex",
        gap,
        flexDirection: (_a = options == null ? void 0 : options.direction) != null ? _a : "row",
        ...(options == null ? void 0 : options.stretch) && {
          width: "100%"
        },
        ...(options == null ? void 0 : options.alignItems) && {
          alignItems: options == null ? void 0 : options.alignItems
        },
        ...(options == null ? void 0 : options.justifyContent) && {
          justifyContent: options == null ? void 0 : options.justifyContent
        },
        ...(options == null ? void 0 : options.wrap) && {
          flexWrap: options.wrap
        },
        ...size !== "320px" && {
          flex: `1 0 ${size}`
        }
      };
    }
    return {
      display: "grid",
      gap,
      gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      ...(options == null ? void 0 : options.stretch) && {
        width: "100%"
      }
    };
  }, [isFlex]);
  const Tag = as || "div";
  return /* @__PURE__ */ jsx$1(Tag, {
    ...rest,
    style: {
      ...DONOTUse !== void 0 && {
        ...DONOTUse.DONOTStyle
      },
      ...stylesConfig
    },
    children
  });
}
const ratios = {
  square: {
    start: 1,
    end: 1
  },
  portrait: {
    start: 9,
    end: 16
  },
  landscape: {
    start: 16,
    end: 9
  }
};
const root = "iR";
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
function Card(props) {
  const {
    children,
    as = "div",
    ratio = "square"
  } = props;
  const cssRatio = useMemo(() => {
    return `${ratios[ratio].start}/${ratios[ratio].end}`;
  }, [ratio]);
  return /* @__PURE__ */ jsx(Group, {
    className: styles.root,
    as,
    options: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      direction: "column"
    },
    DONOTUse: {
      DONOTStyle: {
        ["--card-ratio"]: cssRatio
      }
    },
    children
  });
}
Card.Media = CardMedia;
export { Card };
