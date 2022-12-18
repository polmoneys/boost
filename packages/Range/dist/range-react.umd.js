(function(r,u){typeof exports=="object"&&typeof module!="undefined"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(r=typeof globalThis!="undefined"?globalThis:r||self,u(r.Range={},r.React))})(this,function(r,u){"use strict";function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var _=c(u),m={group:"MK"},f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=_.default,g=Symbol.for("react.element"),v=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,i){var n,o={},a=null,l=null;i!==void 0&&(a=""+i),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)h.call(t,n)&&!R.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:g,type:e,key:a,ref:l,props:o,_owner:x.current}}s.Fragment=v,s.jsx=p,s.jsxs=p,f.exports=s;const d=f.exports.jsx;function j(e){const{className:t,initial:i=1,min:n=1,max:o=100,onChangeValue:a,...l}=e,b=[t,m.group].filter(Boolean).join(" ");return d("label",{className:b,children:d("input",{...l,type:"range",min:n,max:o,value:i,onChange:O=>a(Number(O.target.value))})})}r.Range=j,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
