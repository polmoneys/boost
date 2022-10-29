import require$$0, { useState, useRef, useEffect, cloneElement, Fragment } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
const overlay = "_overlay_jw3ma_10";
const root = "_root_jw3ma_25";
const portrait = "_portrait_jw3ma_39";
const landscape = "_landscape_jw3ma_44";
const overlayTray = "_overlayTray_jw3ma_57";
const rootTray = "_rootTray_jw3ma_72";
const isOpen = "_isOpen_jw3ma_95";
var styles = {
  overlay,
  root,
  portrait,
  landscape,
  overlayTray,
  rootTray,
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
    var _a, _b;
    if (height !== 0)
      return;
    const newHeight = (_b = (_a = window == null ? void 0 : window.visualViewport) == null ? void 0 : _a.height) != null ? _b : window == null ? void 0 : window.innerHeight;
    setHeight(newHeight);
  }, [height]);
  const trayHeight = {
    "--tray-min-height": `${height}px`
  };
  const trigger = cloneElement(closeButton, {
    onClick: onClose
  });
  const contentStyles = [styles.rootTray, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    isOpen: open,
    onDismiss: onClose,
    className: styles.overlayTray,
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
function Dialog(props) {
  const {
    label,
    children,
    className,
    closeButton,
    open,
    onClose,
    ratio = "landscape",
    isLastDialogOpened = false
  } = props;
  const isPortrait = ratio === "portrait";
  const isLandscape = ratio === "landscape";
  const trigger = cloneElement(closeButton, {
    onClick: onClose
  });
  const classNames = [styles.root, isPortrait && styles.portrait, isLandscape && styles.landscape, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    ...isLastDialogOpened && {
      blockScrollOnMount: false
    },
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
