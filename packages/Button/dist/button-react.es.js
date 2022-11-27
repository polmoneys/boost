import { Unit } from "unit-react";
import require$$0 from "react";
const root = "Cb";
const icon = "Df";
const stretch = "Qm";
const text = "_5m";
const ring = "_1p";
var styles = {
  root,
  icon,
  stretch,
  text,
  ring
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
function Button(props) {
  const {
    children,
    keyboard = true,
    autoFocus = false,
    nonKeyboard = true,
    variant = "",
    className,
    ...rest
  } = props;
  const isText = variant === "text";
  const isIcon = variant === "icon";
  const classNames = [className, styles.root, isText && styles.text, isIcon && styles.icon].filter(Boolean).join(" ");
  const disableRing = !keyboard && !nonKeyboard;
  return /* @__PURE__ */ jsx(Unit, {
    autofocus: autoFocus,
    disabled: disableRing,
    children: /* @__PURE__ */ jsx("button", {
      ...rest,
      className: classNames,
      children
    })
  });
}
export { Button };
