import require$$0, { useMemo } from "react";
const root = "_root_1fs58_1";
const button = "_button_1fs58_40";
const ring = "_ring_1fs58_41";
var styles = {
  root,
  button,
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
function Link(props) {
  const {
    children,
    newTab = false,
    href,
    variant = "default",
    className,
    ...rest
  } = props;
  const {
    rel,
    target
  } = useMemo(() => {
    const target_ = newTab ? "_blank" : "";
    return {
      target: target_,
      rel: target_ ? "noopener noreferrer" : void 0
    };
  }, [newTab]);
  const isButton = variant === "button";
  const classNames = [className, styles.root, isButton && styles.button].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", {
    ...rest,
    className: classNames,
    rel,
    target,
    href,
    children
  });
}
export { Link };
