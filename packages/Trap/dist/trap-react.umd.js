(function(o,u){typeof exports=="object"&&typeof module!="undefined"?u(exports,require("@react-aria/focus"),require("react")):typeof define=="function"&&define.amd?define(["exports","@react-aria/focus","react"],u):(o=typeof globalThis!="undefined"?globalThis:o||self,u(o.Trap={},o.ReactAriaFocus,o.React))})(this,function(o,u,d){"use strict";function l(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var _=l(d),c={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=_.default,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,j=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function p(r,t,s){var e,n={},i=null,a=null;s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(e in t)x.call(t,e)&&!O.hasOwnProperty(e)&&(n[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:m,type:r,key:i,ref:a,props:n,_owner:j.current}}f.Fragment=v,f.jsx=p,f.jsxs=p,c.exports=f;const R=c.exports.jsx;function T(r){const{initial:t,children:s,options:e=["restorefocus"]}=r;let n={contain:!!t};if(e!==void 0){const i=Array.isArray(e)?e:[e];i==null||i.map(a=>{n={...n,[a]:!0}})}return R(u.FocusScope,{...n,children:s})}o.Trap=T,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
