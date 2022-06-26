import require$$0, { useMemo } from "react";
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
  return /* @__PURE__ */ jsx(Tag, {
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
export { Group };
