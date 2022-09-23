import require$$0, { useMemo } from "react";
const helveticaNeue = "jO";
const medium = "_8Y";
const bold = "cq";
const thin = "fq";
const grotesk = "YI";
const xs = "Gj";
const s = "x-";
const r = "z0";
const l$1 = "Mw";
const xl = "Em";
const numeric = "JV";
const truncate = "SK";
const hyphenate = "HD";
var styles = {
  helveticaNeue,
  medium,
  bold,
  thin,
  grotesk,
  xs,
  s,
  r,
  l: l$1,
  xl,
  numeric,
  truncate,
  "break": "Fx",
  hyphenate
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
function Font(props) {
  const {
    as,
    truncate: truncate2,
    dangerousColor,
    dangerousTransform,
    children,
    breakWord = false,
    hyphenate: hyphenate2 = false,
    numeric: numeric2 = false,
    className,
    size = "r",
    ...rest
  } = props;
  const Tag = as || "p";
  const css = useMemo(() => [className, styles[size], breakWord && styles.break, hyphenate2 && styles.hyphenate, numeric2 && styles.numeric].filter(Boolean).join(" "), [className, size, breakWord, hyphenate2, numeric2]);
  return /* @__PURE__ */ jsx(Tag, {
    ...rest,
    style: {
      ...truncate2 && {
        width: `${truncate2}px`
      },
      ...dangerousColor && {
        color: dangerousColor
      },
      ...dangerousTransform && {
        transform: dangerousTransform
      }
    },
    className: css,
    children
  });
}
const Compose = (composeClassName) => (props) => {
  const {
    className,
    ...rest
  } = props;
  const css = useMemo(() => [props.className, composeClassName].filter(Boolean).join(" "), [props.className, composeClassName]);
  return /* @__PURE__ */ jsx(Font, {
    ...rest,
    className: css
  });
};
const ComposeSize = (Base, size) => (props) => /* @__PURE__ */ jsx(Base, {
  ...props,
  size
});
const HelveticaNeue = Compose(styles.helveticaNeue);
const HelveticaNeueMedium = Compose(styles.medium);
const HelveticaNeueBold = Compose(styles.bold);
const HelveticaNeueThin = Compose(styles.thin);
const Grotesk = Compose(styles.grotesk);
const HelveticaNeueBoldXL = ComposeSize(HelveticaNeueBold, "xl");
const HelveticaNeueBoldS = ComposeSize(HelveticaNeueBold, "s");
export { Font, Grotesk, HelveticaNeue, HelveticaNeueBold, HelveticaNeueBoldS, HelveticaNeueBoldXL, HelveticaNeueMedium, HelveticaNeueThin };
