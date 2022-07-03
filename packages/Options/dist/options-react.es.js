import require$$0, { Fragment } from "react";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
const menu = "_menu_1nxxz_1";
const menuOpen = "_menuOpen_1nxxz_4";
const menuClose = "_menuClose_1nxxz_7";
const item = "_item_1nxxz_10";
const itemHover = "_itemHover_1nxxz_12";
const button = "_button_1nxxz_15";
var styles = {
  menu,
  menuOpen,
  menuClose,
  item,
  itemHover,
  button
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
const menuClassName = ({
  state
}) => state === "opening" ? styles.menuOpen : state === "closing" ? styles.menuClose : styles.menu;
const menuItemClassName = ({
  hover
}) => hover ? styles.itemHover : styles.item;
function Options(props) {
  const {
    triggerOn = "Close",
    triggerOff = "Options",
    options,
    onChange,
    ssr = false,
    disabled = false
  } = props;
  if (options.length === 0)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx(Menu, {
    menuClassName,
    menuButton: ({
      open
    }) => /* @__PURE__ */ jsx(MenuButton, {
      className: styles.button,
      ...disabled && {
        disabled
      },
      children: open ? triggerOn : triggerOff
    }),
    ...onChange && {
      onItemClick: (event) => onChange == null ? void 0 : onChange(event.value)
    },
    ...ssr && {
      initialMounted: true
    },
    children: options == null ? void 0 : options.map((option) => /* @__PURE__ */ jsx(MenuItem, {
      className: menuItemClassName,
      value: option.value,
      children: option.value.charAt(0).toUpperCase() + option.value.slice(1)
    }, option.id))
  });
}
export { Options };
