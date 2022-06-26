import require$$0, { memo, useMemo } from "react";
function polygon(centerX, centerY, points, radius) {
  const degreeIncrement = 360 / points;
  const d = new Array(points).fill("#").map((p2, i) => {
    const point = polarToCartesian(centerX, centerY, radius, degreeIncrement * i);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
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
function Shape(props) {
  const {
    sides = 3,
    size = 69,
    fill = "currentColor",
    transforms
  } = props;
  const polyPath = useMemo(() => {
    const clampedSides = sides < 3 ? 3 : sides > 30 ? 30 : sides;
    const center = size / 2;
    return polygon(center, center, clampedSides, size / 2);
  }, [sides, size]);
  const viewbox = `0 0 ${size} ${size}`;
  return /* @__PURE__ */ jsx("svg", {
    "aria-hidden": "true",
    viewBox: viewbox,
    width: size,
    height: size,
    fill,
    ...transforms && {
      style: {
        transform: transforms
      }
    },
    children: /* @__PURE__ */ jsx("path", {
      d: polyPath
    })
  });
}
Shape.Triangle = (props) => /* @__PURE__ */ jsx(Shape, {
  ...props,
  sides: 3
});
Shape.Square = (props) => /* @__PURE__ */ jsx(Shape, {
  ...props,
  sides: 4
});
Shape.Circle = (props) => /* @__PURE__ */ jsx(Shape, {
  ...props,
  sides: 25
});
const avoidRerenderIf = (prevProps, nextProps) => {
  return prevProps.sides === nextProps.sides;
};
Shape.Freeze = memo((props) => /* @__PURE__ */ jsx(Shape, {
  ...props
}), avoidRerenderIf);
export { Shape };
