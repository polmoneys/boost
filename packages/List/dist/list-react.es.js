import require$$0 from "react";
const group = "IW";
const listItem = "DV";
const zebra = "ES";
const content = "_4l";
const contentBody = "Zl";
const contentLeft = "G0";
const contentRight = "gh";
const contentDescription = "_86";
const listDividerTitle = "vx";
var styles = {
  group,
  listItem,
  zebra,
  content,
  contentBody,
  contentLeft,
  contentRight,
  contentDescription,
  listDividerTitle
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
function List(props) {
  const {
    children,
    className,
    label,
    zebra: zebra2 = true,
    ...rest
  } = props;
  const classNames = [className, styles.group, zebra2 && styles.zebra].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("ul", {
    role: "list",
    className: classNames,
    "aria-label": label,
    ...rest,
    children
  });
}
List.Item = (props) => {
  const {
    className,
    children,
    description,
    start,
    end
  } = props;
  const classNamesGroup = [styles.listItem, className].filter(Boolean).join(" ");
  const classNamesContent = [styles.content, styles.contentBody].filter(Boolean).join(" ");
  const classNamesStart = [styles.content, styles.contentLeft].filter(Boolean).join(" ");
  const classNamesEnd = [styles.content, styles.contentRight].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("li", {
    className: classNamesGroup,
    children: [start && /* @__PURE__ */ jsx("div", {
      className: classNamesStart,
      children: start
    }), /* @__PURE__ */ jsxs("div", {
      className: classNamesContent,
      children: [children, description && /* @__PURE__ */ jsx("div", {
        className: styles.contentDescription,
        children: description
      })]
    }), end && /* @__PURE__ */ jsx("div", {
      className: classNamesEnd,
      children: end
    })]
  });
};
List.Divider = ({
  children
}) => {
  const classNamesGroup = [styles.listItem, styles.listDivider].filter(Boolean).join(" ");
  const classNamesContent = [styles.content, styles.contentBody].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("li", {
    className: classNamesGroup,
    children: /* @__PURE__ */ jsx("div", {
      className: classNamesContent,
      children: /* @__PURE__ */ jsx("div", {
        className: styles.listDividerTitle,
        children: children && children
      })
    })
  });
};
export { List };
