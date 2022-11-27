import { Group } from "group-react";
import { Unit } from "unit-react";
import { Button } from "button-react";
import { IconCross } from "icon-react";
import require$$0 from "react";
const group = "T-";
const input = "Hv";
const clear = "su";
var styles = {
  group,
  input,
  clear
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
function Input(props) {
  const {
    children,
    onChange,
    value,
    autocomplete = "off",
    enterkeyhint = "next",
    inputmode = "text",
    type = "text",
    placeholder = "Type ",
    errorElementId = "",
    onChangeValue,
    id,
    label,
    autoFocus = false,
    keyboard = true,
    nonKeyboard = true,
    direction = "column",
    classNames,
    px = "var(--gap-3)",
    variant = "",
    ...rest
  } = props;
  const handleChange = (event) => {
    const value2 = event.target.value;
    onChangeValue == null ? void 0 : onChangeValue(value2);
    onChange == null ? void 0 : onChange(event);
  };
  const groupClassnames = [styles.group, classNames == null ? void 0 : classNames.group].filter(Boolean).join(" ");
  const onKeyDown = (e) => {
    const key = e.key;
    if (key === "Enter" || key === "Escape") {
      e.preventDefault();
    }
    if (key === "Escape") {
      onChangeValue == null ? void 0 : onChangeValue("");
    }
  };
  const isSearch = variant === "search";
  const onClear = () => onChangeValue == null ? void 0 : onChangeValue("");
  return /* @__PURE__ */ jsxs(Group, {
    as: "div",
    options: {
      direction,
      alignItems: "flex-start"
    },
    className: groupClassnames,
    ...isSearch && {
      gap: "0"
    },
    children: [/* @__PURE__ */ jsx("label", {
      htmlFor: id,
      ...isSearch && {
        className: "visually-hidden"
      },
      children: label
    }), /* @__PURE__ */ jsx(Unit, {
      autofocus: autoFocus,
      isTextInput: true,
      children: /* @__PURE__ */ jsx("input", {
        type,
        value,
        autoComplete: autocomplete,
        enterKeyHint: enterkeyhint,
        inputMode: inputmode,
        "aria-describedby": errorElementId,
        onChange: handleChange,
        ...placeholder && {
          placeholder
        },
        ...rest,
        ...px !== void 0 && {
          style: {
            paddingLeft: px,
            paddingRight: px
          }
        },
        ...(classNames == null ? void 0 : classNames.input) !== void 0 && {
          className: classNames == null ? void 0 : classNames.input
        },
        onKeyDown
      })
    }), isSearch && /* @__PURE__ */ jsx(Button, {
      variant: "icon",
      onClick: onClear,
      className: styles.clear,
      keyboard: false,
      nonKeyboard: false,
      children: /* @__PURE__ */ jsx(IconCross, {})
    })]
  });
}
Input.Search = (props) => /* @__PURE__ */ jsx(Input, {
  ...props,
  variant: "search"
});
export { Input };
