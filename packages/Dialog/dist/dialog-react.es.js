import require$$0, { useState, useRef, useEffect, cloneElement, Fragment } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
const overlay$1 = "_overlay_4rmqc_1";
const root$1 = "_root_4rmqc_17";
const isOpen = "_isOpen_4rmqc_40";
var styles$1 = {
  overlay: overlay$1,
  root: root$1,
  isOpen
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
const Tray = (props) => {
  const {
    children,
    closeButton,
    className,
    open,
    onClose
  } = props;
  const [height, setHeight] = useState(0);
  useRef();
  useEffect(() => {
    var _a, _b, _c, _d;
    if (height !== 0)
      return;
    const newHeight = (_b = (_a = window == null ? void 0 : window.visualViewport) == null ? void 0 : _a.height) != null ? _b : window == null ? void 0 : window.innerHeight;
    const short = height < 850;
    const width = (_d = (_c = window == null ? void 0 : window.visualViewport) == null ? void 0 : _c.width) != null ? _d : window == null ? void 0 : window.innerWidth;
    console.log({
      newHeight,
      short,
      width
    });
    setHeight(newHeight);
  }, [height]);
  const trayHeight = {
    "--tray-min-height": `${height}px`
  };
  const trigger = cloneElement(closeButton, {
    onClick: onClose
  });
  const contentStyles = [styles$1.root, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    isOpen: open,
    onDismiss: onClose,
    className: styles$1.overlay,
    children: /* @__PURE__ */ jsx(DialogContent, {
      "aria-labelledby": "tray-dialog",
      className: contentStyles,
      style: trayHeight,
      children: /* @__PURE__ */ jsxs(Fragment, {
        children: [trigger, children]
      })
    })
  });
};
const overlay = "_overlay_147bk_10";
const root = "_root_147bk_25";
const portrait = "_portrait_147bk_39";
const landscape = "_landscape_147bk_44";
var styles = {
  overlay,
  root,
  portrait,
  landscape
};
function Dialog(props) {
  const {
    label,
    children,
    className,
    closeButton,
    open,
    onClose,
    ratio = "landscape"
  } = props;
  const isPortrait = ratio === "portrait";
  const isLandscape = ratio === "landscape";
  const trigger = cloneElement(closeButton, {
    onClick: onClose
  });
  const classNames = [styles.root, isPortrait && styles.portrait, isLandscape && styles.landscape, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    isOpen: open,
    onDismiss: onClose,
    className: styles.overlay,
    children: /* @__PURE__ */ jsx(DialogContent, {
      "aria-label": label,
      className: classNames,
      children: /* @__PURE__ */ jsxs(Fragment, {
        children: [trigger, children]
      })
    })
  });
}
Dialog.Tray = Tray;
export { Dialog };
