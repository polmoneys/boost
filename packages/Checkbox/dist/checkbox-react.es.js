import require$$0, { useMemo, useEffect } from "react";
import { IconDash, IconCheck, IconCross } from "icon-react";
import { Unit } from "unit-react";
const group = "p-";
const checkbox = "af";
const mixed = "DU";
const checked = "wT";
const unchecked = "-b";
var styles = {
  group,
  checkbox,
  mixed,
  checked,
  unchecked
};
var style = /* @__PURE__ */ (() => "._-7{vertical-align:middle;overflow:hidden;border-radius:50%;aspect-ratio:1}\n")();
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
function Checkbox(props) {
  const {
    value,
    isMixed,
    onChange,
    classNames,
    label,
    id,
    name,
    checked: checked2,
    keyboard = true,
    autofocus = false,
    nonKeyboard = true
  } = props;
  const groupClassNames = useMemo(() => [styles.group, classNames == null ? void 0 : classNames.group, isMixed && styles.mixed, checked2 && styles.checked].filter(Boolean).join(" "), [isMixed, checked2]);
  const checkboxClassNames = useMemo(() => {
    var _a, _b, _c, _d, _e, _f;
    return [styles.checkbox, isMixed && ((_a = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _a.mixed) && ((_b = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _b.mixed), checked2 && ((_c = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _c.checked) && ((_d = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _d.checked), !checked2 && ((_e = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _e.unchecked) && ((_f = classNames == null ? void 0 : classNames.checkbox) == null ? void 0 : _f.unchecked)].filter(Boolean).join(" ");
  }, [isMixed, checked2]);
  useEffect(() => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.indeterminate = isMixed ? true : false;
    }
  }, [isMixed]);
  const disableRing = !keyboard && !nonKeyboard;
  return /* @__PURE__ */ jsxs("label", {
    htmlFor: id,
    className: groupClassNames,
    children: [isMixed && /* @__PURE__ */ jsx(IconDash, {
      size: "lg"
    }), checked2 && /* @__PURE__ */ jsx(IconCheck, {
      size: "lg"
    }), !checked2 && isMixed === void 0 && /* @__PURE__ */ jsx(IconCross, {
      size: "lg"
    }), /* @__PURE__ */ jsx(Unit, {
      autofocus,
      disabled: disableRing,
      children: /* @__PURE__ */ jsx("input", {
        className: checkboxClassNames,
        onChange,
        type: "checkbox",
        name,
        id,
        ...!isMixed && {
          value
        },
        checked: !isMixed && checked2
      })
    }), label]
  });
}
export { Checkbox };
