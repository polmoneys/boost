import require$$0, { useState, useEffect, cloneElement } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Group } from "group-react";
import { Button } from "button-react";
import { IconCross } from "icon-react";
import { ScrollUnit } from "scroll-unit-react";
const overlay = "_overlay_188vr_1";
const root = "_root_188vr_15";
const portrait = "_portrait_188vr_25";
const landscape = "_landscape_188vr_30";
const overlayTray = "_overlayTray_188vr_39";
const rootTray = "_rootTray_188vr_54";
const isOpen = "_isOpen_188vr_72";
const viewport = "_viewport_188vr_76";
var styles = {
  overlay,
  root,
  portrait,
  landscape,
  overlayTray,
  rootTray,
  isOpen,
  viewport
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
function getViewportHeight() {
  return (visualViewport == null ? void 0 : visualViewport.height) || window.innerHeight;
}
const Tray = (props) => {
  var _a, _b;
  const {
    children,
    actions,
    classNames,
    open,
    onClose,
    id,
    overlay: overlay2 = "var(--overlay)"
  } = props;
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (height !== 0)
      return;
    const newHeight = getViewportHeight();
    setHeight(newHeight);
  }, [height]);
  const trayHeight = {
    "--tray-min-height": `${height}px`
  };
  const contentStyles = [styles.rootTray, classNames == null ? void 0 : classNames.content].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    isOpen: open,
    onDismiss: onClose,
    className: styles.overlayTray,
    style: {
      backgroundColor: overlay2
    },
    children: /* @__PURE__ */ jsxs(DialogContent, {
      "aria-labelledby": "tray-dialog",
      className: contentStyles,
      style: trayHeight,
      id,
      children: [/* @__PURE__ */ jsxs(Group, {
        as: "div",
        gap: "var(--gap-2)",
        options: {
          DANGEROUS: {
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "var(--gap-2)",
            paddingBottom: 0
          }
        },
        ...((_a = props == null ? void 0 : props.classNames) == null ? void 0 : _a.title) !== void 0 && {
          className: props.classNames.title
        },
        children: [/* @__PURE__ */ jsx(Button, {
          variant: "icon",
          onClick: onClose,
          ...((_b = props == null ? void 0 : props.classNames) == null ? void 0 : _b.closeButton) !== void 0 && {
            className: props.classNames.closeButton
          },
          children: /* @__PURE__ */ jsx(IconCross, {})
        }), actions !== void 0 && cloneElement(actions, {
          key: `${id}-action`
        })]
      }), /* @__PURE__ */ jsx(ScrollUnit, {
        classNames: {
          viewport: styles.viewport
        },
        type: "always",
        children
      })]
    })
  });
};
function Dialog(props) {
  var _a, _b;
  const {
    id,
    label,
    children,
    actions,
    classNames,
    open,
    onClose,
    ratio = "landscape",
    isLastDialogOpened = false,
    overlay: overlay2 = "var(--overlay)"
  } = props;
  const isPortrait = ratio === "portrait";
  const isLandscape = ratio === "landscape";
  const groupClassNames = [styles.root, isPortrait && styles.portrait, isLandscape && styles.landscape, classNames == null ? void 0 : classNames.content].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(DialogOverlay, {
    isOpen: open,
    onDismiss: onClose,
    className: styles.overlay,
    style: {
      backgroundColor: overlay2
    },
    children: /* @__PURE__ */ jsxs(DialogContent, {
      id,
      ...isLastDialogOpened && {
        blockScrollOnMount: false
      },
      "aria-label": label,
      className: groupClassNames,
      children: [/* @__PURE__ */ jsxs(Group, {
        as: "div",
        gap: "var(--gap-2)",
        options: {
          DANGEROUS: {
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "var(--gap-2)",
            paddingBottom: 0
          }
        },
        ...((_a = props == null ? void 0 : props.classNames) == null ? void 0 : _a.title) !== void 0 && {
          className: props.classNames.title
        },
        children: [/* @__PURE__ */ jsx(Button, {
          variant: "icon",
          onClick: onClose,
          ...((_b = props == null ? void 0 : props.classNames) == null ? void 0 : _b.closeButton) !== void 0 && {
            className: props.classNames.closeButton
          },
          children: /* @__PURE__ */ jsx(IconCross, {})
        }), actions !== void 0 && cloneElement(actions, {
          key: `${id}-action`
        })]
      }), children]
    })
  });
}
Dialog.Tray = Tray;
export { Dialog };
