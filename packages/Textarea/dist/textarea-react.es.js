import require$$0, { useState, useRef, useCallback, useEffect } from "react";
import { Group } from "group-react";
const group = "XR";
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
function Textarea(props) {
  const {
    initial,
    placeholder = "Type ",
    onChangeValue,
    id,
    label,
    autoFocus = false,
    classNames
  } = props;
  const [editingValue, setEditingValue] = useState(initial);
  const onChange = (event) => setEditingValue(event.target.value);
  const textareaRef = useRef(null);
  const onInput = useCallback((target) => {
    if (target.scrollHeight > 40) {
      target.style.height = target.scrollHeight + "px";
    }
  }, []);
  useEffect(() => {
    if (textareaRef && textareaRef.current !== null) {
      onInput(textareaRef.current);
    }
  }, [onInput, textareaRef]);
  useEffect(() => {
    onChangeValue(editingValue);
  }, [editingValue]);
  const groupClassnames = [styles.group, classNames == null ? void 0 : classNames.group].filter(Boolean).join(" ");
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      event.target.blur();
    }
  };
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      onChangeValue(initial);
    } else {
      onChangeValue(event.target.value);
    }
  };
  return /* @__PURE__ */ jsxs(Group, {
    as: "div",
    options: {
      direction: "column"
    },
    className: groupClassnames,
    children: [/* @__PURE__ */ jsx("label", {
      htmlFor: id,
      children: label
    }), /* @__PURE__ */ jsx("textarea", {
      autoFocus: true,
      placeholder,
      rows: 1,
      "aria-label": "Field name",
      value: editingValue,
      onBlur,
      onChange,
      onKeyDown,
      onInput: (event) => onInput(event.target),
      ref: textareaRef
    })]
  });
}
export { Textarea };
