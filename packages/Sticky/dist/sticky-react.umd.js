(function(n,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(n=typeof globalThis!="undefined"?globalThis:n||self,i(n.Sticky={},n.React))})(this,function(n,i){"use strict";function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var a=_(i),l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=a.default,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,S=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(t,r,s){var e,o={},d=null,f=null;s!==void 0&&(d=""+s),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)x.call(r,e)&&!j.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:d,ref:f,props:o,_owner:S.current}}u.Fragment=v,u.jsx=c,u.jsxs=c,l.exports=u;const k=l.exports.jsx;function O(t){var f,p;const{as:r,children:s,options:e,className:o}=t;return k(r||"div",{style:{width:"100%",position:"sticky",top:(f=e==null?void 0:e.top)!=null?f:0,left:(p=e==null?void 0:e.left)!=null?p:0},...o!==void 0&&{className:o},children:s})}n.Sticky=O,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
