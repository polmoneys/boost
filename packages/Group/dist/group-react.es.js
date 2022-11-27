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
    size = "",
    variant = "flex",
    options,
    ...rest
  } = props;
  const isFlex = variant === "flex";
  const stylesConfig = useMemo(() => {
    if (isFlex) {
      return {
        display: "flex",
        gap,
        ...(options == null ? void 0 : options.direction) !== void 0 && {
          flexDirection: options == null ? void 0 : options.direction
        },
        ...(options == null ? void 0 : options.stretch) !== void 0 && {
          width: "100%"
        },
        ...(options == null ? void 0 : options.alignItems) !== void 0 && {
          alignItems: options.alignItems
        },
        ...(options == null ? void 0 : options.justifyContent) !== void 0 && {
          justifyContent: options.justifyContent
        },
        ...(options == null ? void 0 : options.wrap) !== void 0 && {
          flexWrap: options.wrap
        },
        ...size !== "" && {
          flex: `1 0 ${size}`
        }
      };
    }
    return {
      display: "grid",
      gap,
      ...size !== "" && {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`
      },
      ...(options == null ? void 0 : options.stretch) && {
        width: "100%"
      }
    };
  }, [isFlex]);
  const Tag = as || "div";
  return /* @__PURE__ */ jsx(Tag, {
    ...rest,
    style: {
      ...(options == null ? void 0 : options.DANGEROUS) !== void 0 && {
        ...options.DANGEROUS
      },
      ...stylesConfig
    },
    children
  });
}
export { Group };
