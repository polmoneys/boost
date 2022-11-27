import require$$0, { Fragment } from "react";
import { Menu, MenuButton, MenuGroup, MenuDivider, MenuHeader, MenuItem } from "@szhsin/react-menu";
const menu = "_menu_5aflf_1";
const menuOpen = "_menuOpen_5aflf_7";
const menuClose = "_menuClose_5aflf_10";
const item = "_item_5aflf_13";
const button = "_button_5aflf_19";
var styles = {
  menu,
  menuOpen,
  menuClose,
  item,
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
}) => state === "opening" ? styles.menuOpen : styles.menuClose;
function Options(props) {
  const {
    triggerOn = "Close",
    triggerOff = "Options",
    options,
    onChange,
    ssr = false,
    disabled = false,
    portal = true,
    classNames,
    selection,
    id
  } = props;
  if (options.length === 0)
    return /* @__PURE__ */ jsx(Fragment, {});
  const menuClassNames = [styles.menu, menuClassName, classNames == null ? void 0 : classNames.group].filter(Boolean).join(" ");
  const buttonClassNames = [styles.button, classNames == null ? void 0 : classNames.button].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(Menu, {
    id,
    menuClassName: menuClassNames,
    menuButton: ({
      open
    }) => /* @__PURE__ */ jsx(MenuButton, {
      className: buttonClassNames,
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
    portal,
    children: /* @__PURE__ */ jsx(MenuGroup, {
      children: options == null ? void 0 : options.map((option) => {
        if (option.value === "divider") {
          return /* @__PURE__ */ jsx(MenuDivider, {});
        }
        if (option.value === "title") {
          return /* @__PURE__ */ jsx(MenuHeader, {
            children: option.label
          });
        }
        return /* @__PURE__ */ jsx(MenuItem, {
          className: [styles.item, option.value === (selection != null ? selection : "") ? classNames == null ? void 0 : classNames.selected : classNames == null ? void 0 : classNames.item].filter(Boolean).join(" "),
          value: option.value,
          ...(option == null ? void 0 : option.href) !== void 0 && {
            href: option == null ? void 0 : option.href
          },
          children: option.label
        }, option.id);
      })
    })
  });
}
export { Options };
