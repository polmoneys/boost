(function(n,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("react-intersection-observer"),require("react")):typeof define=="function"&&define.amd?define(["exports","react-intersection-observer","react"],s):(n=typeof globalThis!="undefined"?globalThis:n||self,s(n.Fence={},n.reactIntersectionObserver,n.React))})(this,function(n,s,l){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var a=_(l),d={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=a.default,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,O=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,u){var t,o={},i=null,c=null;u!==void 0&&(i=""+u),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)x.call(r,t)&&!b.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:y,type:e,key:i,ref:c,props:o,_owner:O.current}}f.Fragment=m,f.jsx=p,f.jsxs=p,d.exports=f;const j=d.exports.jsx;function R(e){const{as:r="div",children:u,options:t,onChange:o,className:i}=e;return j(s.InView,{as:r,...t!==void 0&&{...t},onChange:(c,h)=>o==null?void 0:o(c),...i!==void 0&&{className:i},children:u})}n.Fence=R,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
