import * as ScrollArea from "@radix-ui/react-scroll-area";
import require$$0 from "react";
const group = "Nh";
const viewport = "GD";
const scrollbar = "_4Q";
const thumb = "_9B";
const corner = "cz";
var styles = {
  group,
  viewport,
  scrollbar,
  thumb,
  corner
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
function ScrollUnit(props) {
  const {
    children,
    type = "hover",
    dir = "ltr",
    classNames,
    ...rest
  } = props;
  const groupClassnames = [styles.group, classNames == null ? void 0 : classNames.group].filter(Boolean).join(" ");
  const viewportClassnames = [styles.viewport, classNames == null ? void 0 : classNames.viewport].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(ScrollArea.Root, {
    className: groupClassnames,
    type,
    ...rest,
    children: [/* @__PURE__ */ jsx(ScrollArea.Viewport, {
      className: viewportClassnames,
      children
    }), /* @__PURE__ */ jsx(ScrollArea.Scrollbar, {
      orientation: "vertical",
      className: styles.scrollbar,
      children: /* @__PURE__ */ jsx(ScrollArea.Thumb, {
        className: styles.thumb
      })
    }), /* @__PURE__ */ jsx(ScrollArea.Scrollbar, {
      orientation: "horizontal",
      className: styles.scrollbar,
      children: /* @__PURE__ */ jsx(ScrollArea.Thumb, {
        className: styles.thumb
      })
    }), /* @__PURE__ */ jsx(ScrollArea.Corner, {
      className: styles.corner
    })]
  });
}
export { ScrollUnit };
