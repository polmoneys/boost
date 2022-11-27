(function(n,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("@react-aria/focus"),require("react")):typeof define=="function"&&define.amd?define(["exports","@react-aria/focus","react"],s):(n=typeof globalThis!="undefined"?globalThis:n||self,s(n.Unit={},n.ReactAriaFocus,n.React))})(this,function(n,s,d){"use strict";function p(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var _=p(d),a={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=_.default,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,R=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,f){var r,o={},i=null,l=null;f!==void 0&&(i=""+f),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)v.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:m,type:e,key:i,ref:l,props:o,_owner:R.current}}u.Fragment=x,u.jsx=c,u.jsxs=c,a.exports=u;const O=a.exports.jsx;function b(e){const{children:t,autofocus:f=!1,within:r=!1,isTextInput:o=!1,disabled:i=!1}=e;return O(s.FocusRing,{autoFocus:f,focusClass:i?"no-ring":"ring",focusRingClass:i?"no-ring":"ring-keyboard",within:r,isTextInput:o,children:t})}n.Unit=b,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
