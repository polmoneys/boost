import { HelveticaNeue } from "font-react";
import require$$0 from "react";
const group = "zv";
var styles = {
  group
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
function Switch(props) {
  const {
    className,
    initial = false,
    onChangeValue,
    id,
    label = "Switch",
    ...rest
  } = props;
  const groupClassNames = [className, styles.group].filter(Boolean).join(" ");
  const handleChange = (event) => onChangeValue(event.target.checked);
  return /* @__PURE__ */ jsxs("label", {
    htmlFor: id,
    className: groupClassNames,
    children: [/* @__PURE__ */ jsx("input", {
      ...rest,
      type: "checkbox",
      ...initial && {
        checked: true
      },
      onChange: handleChange
    }), /* @__PURE__ */ jsx(HelveticaNeue, {
      children: label
    })]
  });
}
export { Switch };
