import require$$0, { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
const group = "kI";
const trigger = "ST";
const arrow = "vQ";
var styles = {
  group,
  trigger,
  arrow
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
const PopoverContent = forwardRef(({
  children,
  arrowFill = "currentColor",
  ...props
}, forwardedRef) => /* @__PURE__ */ jsxs(PopoverPrimitive.Content, {
  sideOffset: 5,
  ...props,
  ref: forwardedRef,
  children: [children, /* @__PURE__ */ jsx(PopoverPrimitive.Arrow, {
    className: styles.arrow,
    style: {
      color: arrowFill
    }
  })]
}));
function Popover(props) {
  const {
    children,
    trigger: trigger2,
    classNames,
    arrowFill
  } = props;
  const groupClassnames = [styles.group, classNames == null ? void 0 : classNames.group].filter(Boolean).join(" ");
  const triggerClassnames = [styles.trigger, classNames == null ? void 0 : classNames.trigger].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(PopoverPrimitive.Root, {
    children: [/* @__PURE__ */ jsx(PopoverPrimitive.Trigger, {
      className: triggerClassnames,
      children: trigger2
    }), /* @__PURE__ */ jsx(PopoverContent, {
      className: groupClassnames,
      arrowFill,
      children
    })]
  });
}
Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = PopoverContent;
export { Popover };
