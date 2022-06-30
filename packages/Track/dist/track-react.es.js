var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import require$$0, { useState, useRef, useEffect, Fragment } from "react";
const root = "fy";
const scrolling = "VP";
const viewport = "AB";
var styles = {
  root,
  scrolling,
  viewport
};
const ROOT_ACTIVE_CLASSNAME = styles.scrolling;
const initialOptions = {
  hasTouchEvent: true,
  dragSpeed: 2,
  smoothAmount: 0.1
};
class Scroller {
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "containerTag");
    __publicField(this, "sliderTag");
    __publicField(this, "sliderTagLeft");
    __publicField(this, "sliderTagRight");
    __publicField(this, "dragSpeed");
    __publicField(this, "smoothAmount");
    __publicField(this, "down");
    __publicField(this, "startX");
    __publicField(this, "scrollLeft");
    __publicField(this, "isAnimating");
    __publicField(this, "x");
    __publicField(this, "dist");
    __publicField(this, "scrollAmount");
    __publicField(this, "stopAnimation");
    __publicField(this, "animationRef");
    __publicField(this, "scrollWidth");
    __publicField(this, "getScrollWidth", () => {
      return this.sliderTag.scrollWidth - this.containerTag.offsetWidth + this.sliderTagLeft + this.sliderTagRight;
    });
    __publicField(this, "callCallback", (type, value) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      switch (type) {
        case "mousedown":
          if (this.checkCallbackType((_a = this.options) == null ? void 0 : _a.mouseDown)) {
            (_c = (_b = this.options) == null ? void 0 : _b.mouseDown) == null ? void 0 : _c.call(_b);
          }
          break;
        case "mouseleave":
          if (this.checkCallbackType((_d = this.options) == null ? void 0 : _d.mouseLeave)) {
            (_f = (_e = this.options) == null ? void 0 : _e.mouseLeave) == null ? void 0 : _f.call(_e);
          }
          break;
        case "mouseup":
          if (this.checkCallbackType((_g = this.options) == null ? void 0 : _g.mouseUp)) {
            (_i = (_h = this.options) == null ? void 0 : _h.mouseUp) == null ? void 0 : _i.call(_h);
          }
          break;
        case "mousemove":
          if (this.checkCallbackType((_j = this.options) == null ? void 0 : _j.mouseEnter)) {
            (_l = (_k = this.options) == null ? void 0 : _k.mouseEnter) == null ? void 0 : _l.call(_k);
          }
          break;
        default:
          console.warn("No default callback");
          break;
      }
    });
    __publicField(this, "getEvent", (event) => {
      return event.targetTouches ? event.targetTouches[0] : event;
    });
    __publicField(this, "checkCallbackType", (option) => {
      return !!(option && typeof option === "function");
    });
    __publicField(this, "mousedown", (e) => {
      if (!this.isAnimating) {
        this.anime();
      }
      const event = this.getEvent(e);
      this.down = true;
      this.startX = event.pageX - this.sliderTag.offsetLeft;
      this.scrollLeft = this.scrollAmount;
      this.sliderTag.classList.add(ROOT_ACTIVE_CLASSNAME);
      this.callCallback("mousedown", null);
    });
    __publicField(this, "mouseleave", () => {
      this.down = false;
      this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
      this.callCallback("mouseleave", null);
    });
    __publicField(this, "mouseup", () => {
      this.down = false;
      this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
      this.callCallback("mouseup", null);
    });
    __publicField(this, "mousemove", (e) => {
      this.callCallback("mousemove", null);
      const event = this.getEvent(e);
      if (!this.down)
        return;
      e.preventDefault();
      this.x = event.pageX - this.sliderTag.offsetLeft;
      this.dist = this.scrollLeft - (this.x - this.startX) * this.dragSpeed;
    });
    __publicField(this, "transformElement", () => {
      const amount = -this.scrollAmount.toFixed(3);
      this.sliderTag.style.transform = `translate3D(${amount}px, 0, 0)`;
    });
    __publicField(this, "map", (value, x1, y1, x2, y2) => {
      return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    });
    __publicField(this, "getFloatNumber", (value, defaultValue, min, max) => {
      if (isNaN(+value)) {
        return +defaultValue.toFixed(3);
      }
      const v = parseFloat((+value).toFixed(3));
      return v > max ? +max.toFixed(3) : v < min ? +min.toFixed(3) : v;
    });
    __publicField(this, "anime", () => {
      this.isAnimating = true;
      if (this.dist + this.scrollAmount <= 0) {
        this.dist = 0;
      } else if (this.dist >= this.scrollWidth) {
        this.dist = this.scrollWidth;
      }
      this.scrollAmount = this.lerp(this.scrollAmount, this.dist, this.smoothAmount);
      this.transformElement();
      if (this.stopAnimation) {
        cancelAnimationFrame(this.animationRef);
      } else {
        this.animationRef = requestAnimationFrame(this.anime);
      }
    });
    __publicField(this, "lerp", (start, end, alpha) => {
      return start * (1 - alpha) + end * alpha;
    });
    __publicField(this, "setRelativePosition", (x) => {
      this.x = this.sliderTag.offsetLeft - x;
      this.startX = this.sliderTag.offsetLeft;
      this.scrollLeft = this.scrollAmount;
      this.dist = this.scrollLeft - (this.x - this.startX) * this.dragSpeed;
      if (this.dist + this.scrollAmount <= 0)
        return;
      if (this.dist >= this.scrollWidth)
        return;
      this.sliderTag.classList.add(ROOT_ACTIVE_CLASSNAME);
      this.anime();
      this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
    });
    __publicField(this, "init", () => {
      this.isAnimating = false;
      this.stopAnimation = false;
      this.sliderTag.style.willChange = "transform";
      const isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (!isTouchScreen) {
        this.containerTag.addEventListener("mousedown", this.mousedown);
        this.containerTag.addEventListener("mouseleave", this.mouseleave);
        this.containerTag.addEventListener("mouseup", this.mouseup);
        this.containerTag.addEventListener("mousemove", this.mousemove);
      } else if (isTouchScreen && this.options.hasTouchEvent) {
        this.containerTag.addEventListener("touchstart", this.mousedown);
        this.containerTag.addEventListener("touchleave", this.mouseleave);
        this.containerTag.addEventListener("touchend", this.mouseup);
        this.containerTag.addEventListener("touchmove", this.mousemove);
      } else if (isTouchScreen && !this.options.hasTouchEvent) {
        this.containerTag.style.overflowX = "scroll";
      }
    });
    __publicField(this, "destroy", () => {
      this.stopAnimation = true;
      this.containerTag.removeEventListener("mousedown", this.mousedown);
      this.containerTag.removeEventListener("mouseleave", this.mouseleave);
      this.containerTag.removeEventListener("mouseup", this.mouseup);
      this.containerTag.removeEventListener("mousemove", this.mousemove);
      this.containerTag.removeEventListener("touchstart", this.mousedown);
      this.containerTag.removeEventListener("touchleave", this.mouseleave);
      this.containerTag.removeEventListener("touchend", this.mouseup);
      this.containerTag.removeEventListener("touchmove", this.mousemove, false);
    });
    var _a, _b, _c, _d;
    this.options = { ...initialOptions, ...options };
    this.containerTag = (_a = this.options) == null ? void 0 : _a.container;
    this.sliderTag = (_b = this.options) == null ? void 0 : _b.slider;
    const leftMargin = window.getComputedStyle(this.sliderTag).getPropertyValue("margin-left");
    const rightMargin = window.getComputedStyle(this.sliderTag).getPropertyValue("margin-right");
    this.sliderTagLeft = parseInt(leftMargin, 10);
    this.sliderTagRight = parseInt(rightMargin, 10);
    this.dragSpeed = this.getFloatNumber((_c = this.options) == null ? void 0 : _c.dragSpeed, 1, 1, 100);
    this.smoothAmount = this.getFloatNumber((_d = this.options) == null ? void 0 : _d.smoothAmount, 0.15, 0.01, 1);
    this.down = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.isAnimating = false;
    this.x = 0;
    this.dist = 0;
    this.scrollAmount = 0;
    this.stopAnimation = false;
    this.animationRef = null;
    this.scrollWidth = this.getScrollWidth();
    this.init();
  }
}
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
function Track(props) {
  const {
    className,
    children,
    maskSize,
    gap = "1em",
    as = "div"
  } = props;
  const [base, setBase] = useState(null);
  const isScrollerReady = base !== null;
  const maskRef = useRef(null);
  const mountRef = (ref) => {
    if (ref && maskRef.current !== null && base === null) {
      const instance = new Scroller({
        container: ref,
        slider: maskRef.current
      });
      setBase(instance);
    }
  };
  useEffect(() => {
    return () => base == null ? void 0 : base.destroy();
  }, []);
  const containerClassName = [styles.root, className].filter(Boolean).join(" ");
  const Tag = as;
  return /* @__PURE__ */ jsx(Tag, {
    ref: mountRef,
    className: containerClassName,
    children: /* @__PURE__ */ jsx("div", {
      ref: maskRef,
      className: styles.viewport,
      style: {
        width: maskSize,
        gap
      },
      children: isScrollerReady && /* @__PURE__ */ jsx(Fragment, {
        children
      })
    })
  });
}
export { Track };
