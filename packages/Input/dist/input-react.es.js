import require$$0, { useMemo } from "react";
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min$1 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = require$$0, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k$1, type: c, key: e, ref: h, props: d, _owner: n$1.current };
}
reactJsxRuntime_production_min$1.Fragment = l$1;
reactJsxRuntime_production_min$1.jsx = q$1;
reactJsxRuntime_production_min$1.jsxs = q$1;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min$1;
}
const jsx$1 = jsxRuntime$1.exports.jsx;
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
  return /* @__PURE__ */ jsx$1(Tag, {
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
const root = "rv";
const input = "Hv";
var styles = {
  root,
  input
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
    autoFocus,
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
    classNames,
    ...rest
  } = props;
  const handleChange = (event) => {
    const value2 = event.target.value;
    if (value2.length > 2) {
      onChangeValue == null ? void 0 : onChangeValue(value2);
      onChange == null ? void 0 : onChange(event);
    }
  };
  const rootClassnames = [styles.root, classNames == null ? void 0 : classNames.root].filter(Boolean).join(" ");
  const inputClassnames = [styles.input, classNames == null ? void 0 : classNames.input].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(Group, {
    as: "div",
    options: {
      direction: "column",
      alignItems: "flex-start"
    },
    className: rootClassnames,
    children: [/* @__PURE__ */ jsx("label", {
      htmlFor: id,
      children: label
    }), /* @__PURE__ */ jsx("input", {
      className: inputClassnames,
      type,
      defaultValue: value,
      autoComplete: autocomplete,
      enterKeyHint: enterkeyhint,
      inputMode: inputmode,
      "aria-describedby": errorElementId,
      onChange: handleChange,
      ...placeholder && {
        placeholder
      },
      ...rest
    })]
  });
}
export { Input };
