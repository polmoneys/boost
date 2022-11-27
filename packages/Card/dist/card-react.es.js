import require$$0, { useMemo, createElement } from "react";
import { Pic } from "pic-react";
import { Group } from "group-react";
import { HelveticaNeueBold } from "font-react";
const ratios = {
  square: {
    start: 1,
    end: 1
  },
  portrait: {
    start: 9,
    end: 16
  },
  landscape: {
    start: 16,
    end: 9
  }
};
var style$1 = /* @__PURE__ */ (() => ".iv{overflow:hidden;width:100%}.iv img{border:0;border-style:none;width:100%;max-width:100%;background-repeat:no-repeat;--background-img-intensity: .95;--background-img-saturate: 1.25;height:100%;filter:brightness(var(--background-img-intensity)) saturate(var(--background-img-saturate))}.iv img{object-fit:cover}\n")();
var style = /* @__PURE__ */ (() => '.jO{font-family:Helvetica Neue LT Std,Helvetica,"sans-serif";font-weight:400;font-style:normal}._8Y{font-family:Helvetica Neue LT Std,Helvetica,"sans-serif";font-weight:500;font-style:normal}.cq{font-family:Helvetica Neue LT Std,Helvetica,"sans-serif";font-weight:600;font-style:bold}.fq{font-family:Helvetica Neue LT Std,Helvetica,"sans-serif";font-weight:300;font-style:normal}.YI{font-family:HKGrotesk Black;font-weight:600}:root{--font-size-0: .75em;--font-size-1: 1em;--font-size-2: 1.25em;--font-size-3: 1.6em;--font-size-4: 2.5em;--font-size-fluid-1: clamp(2rem, 9vw, 3.5rem)}.Gj{font-size:var(--font-size-0)}.x-{font-size:var(--font-size-1)}.z0{font-size:var(--font-size-2)}.Mw{font-size:var(--font-size-3)}.Em{font-size:var(--font-size-4)}:is(.Em,.Mw){line-height:1;overflow-wrap:break-word}:is(.Em,.Mw):first-letter{text-transform:var(--shout)}.Em:has(span,b),.Mw:has(span,b),.z0:has(span,b),.x-:has(span,b){font-size:inherit}.JV{font-variant-numeric:tabular-nums}.SK{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;hyphens:auto;min-width:0}.Fx{word-wrap:break-word!important;word-break:break-word!important}.HD{overflow-wrap:break-word;hyphens:auto}\n')();
const group = "Vm";
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
function Card(props) {
  const {
    children,
    as = "div",
    ratio = "square",
    className,
    DONOTUse
  } = props;
  const cssRatio = useMemo(() => {
    return `${ratios[ratio].start}/${ratios[ratio].end}`;
  }, [ratio]);
  const groupClassName = [styles.group, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(Group, {
    className: groupClassName,
    as,
    options: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      direction: "column",
      DANGEROUS: {
        ["--card-ratio"]: cssRatio,
        ...(DONOTUse == null ? void 0 : DONOTUse.DONOTStyle) !== void 0 && (DONOTUse == null ? void 0 : DONOTUse.DONOTStyle)
      }
    },
    children
  });
}
Card.Title = (props) => /* @__PURE__ */ createElement(Group, {
  as: "div",
  options: {
    DANGEROUS: {
      width: "100%",
      alignItems: "center"
    }
  },
  ...(props == null ? void 0 : props.className) !== void 0 && {
    className: props.className
  },
  key: props.children
}, /* @__PURE__ */ jsx(HelveticaNeueBold, {
  as: "h2",
  className: "mr-auto",
  children: props.children
}), (props == null ? void 0 : props.actions) !== void 0 && (props == null ? void 0 : props.actions));
Card.Media = Pic;
export { Card };
