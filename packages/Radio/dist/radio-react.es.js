import require$$0, { cloneElement, Children, Fragment } from "react";
import { Unit } from "unit-react";
import { Group } from "group-react";
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
const {
  count,
  map
} = Children;
function RadioGroup(props) {
  const {
    children,
    initial = "",
    gap = "0",
    renderLabel,
    direction = "row",
    className
  } = props;
  const onChange = (event) => {
    var _a;
    return (_a = props == null ? void 0 : props.onChange) == null ? void 0 : _a.call(props, event.target.name);
  };
  return /* @__PURE__ */ jsx(Group, {
    as: "div",
    gap,
    options: {
      wrap: "wrap",
      direction
    },
    ...className !== void 0 && {
      className
    },
    children: map(props.children, (radio2) => {
      const {
        name
      } = radio2.props;
      const checked2 = initial === name;
      const radioSize = props.radioSize !== void 0 ? props.radioSize : `calc(${Math.round(100 / count(children))}% - ${gap})`;
      return cloneElement(radio2, {
        name,
        checked: checked2,
        onChange,
        ...renderLabel !== void 0 && {
          renderLabel
        },
        label: name,
        radioSize
      });
    })
  });
}
const control = "_control_11waf_1";
const checked = "_checked_11waf_41";
const radio = "_radio_11waf_45";
const pinned = "_pinned_11waf_107";
var styles = {
  control,
  checked,
  radio,
  pinned
};
function RadioLabel(props) {
  var _a, _b;
  if (props === void 0)
    return /* @__PURE__ */ jsx(Fragment, {});
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    radioSize,
    checked: checked2 = false,
    classNames,
    ...rest
  } = props;
  const handleChange = (event) => onChange == null ? void 0 : onChange(event);
  const inputLabel = renderLabel === void 0 ? /* @__PURE__ */ jsx("span", {
    children: label
  }) : renderLabel == null ? void 0 : renderLabel({
    checked: (_a = props == null ? void 0 : props.checked) != null ? _a : false,
    radioLabel: (_b = props.label) != null ? _b : ""
  });
  const groupClassnames = [styles.radio, checked2 && styles.checked, checked2 && (classNames == null ? void 0 : classNames.checked), classNames == null ? void 0 : classNames.group, (rest == null ? void 0 : rest.xl) && styles.xl].filter(Boolean).join(" ");
  const labelClassNames = [styles.pinned, classNames == null ? void 0 : classNames.label].filter(Boolean).join(" ");
  const inputClassNames = [styles.input, classNames == null ? void 0 : classNames.input].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(Group, {
    as: "div",
    className: groupClassnames,
    size: radioSize,
    children: /* @__PURE__ */ jsxs("label", {
      htmlFor: id,
      children: [/* @__PURE__ */ jsx("div", {
        className: labelClassNames,
        "aria-hidden": "true",
        children: inputLabel
      }), /* @__PURE__ */ jsx("input", {
        type: "radio",
        id,
        name,
        value: name,
        checked: checked2,
        className: inputClassNames,
        onChange: handleChange
      })]
    })
  });
}
function Radio(props) {
  var _a, _b;
  if (props === void 0)
    return /* @__PURE__ */ jsx(Fragment, {});
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    checked: checked2 = false,
    classNames,
    keyboard = true,
    autofocus = false,
    nonKeyboard = true,
    ...rest
  } = props;
  const handleChange = (event) => onChange == null ? void 0 : onChange(event);
  const inputLabel = renderLabel === void 0 ? /* @__PURE__ */ jsx("span", {
    children: label
  }) : renderLabel == null ? void 0 : renderLabel({
    checked: (_a = props == null ? void 0 : props.checked) != null ? _a : false,
    checkboxLabel: (_b = props.label) != null ? _b : ""
  });
  const groupClassnames = [styles.control, checked2 && styles.checked, checked2 && (classNames == null ? void 0 : classNames.checked), classNames == null ? void 0 : classNames.group, (rest == null ? void 0 : rest.xl) && styles.xl].filter(Boolean).join(" ");
  const disableRing = !keyboard && !nonKeyboard;
  return /* @__PURE__ */ jsxs("label", {
    htmlFor: id,
    className: groupClassnames,
    children: [/* @__PURE__ */ jsx(Unit, {
      autofocus,
      disabled: disableRing,
      children: /* @__PURE__ */ jsx("input", {
        type: "radio",
        id,
        name,
        value: name,
        checked: checked2,
        ...(classNames == null ? void 0 : classNames.input) !== void 0 && {
          className: classNames.input
        },
        onChange: handleChange
      })
    }), inputLabel]
  });
}
Radio.Group = RadioGroup;
Radio.Label = RadioLabel;
export { Radio };
