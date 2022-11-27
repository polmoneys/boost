(function(n,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("unit-react"),require("react")):typeof define=="function"&&define.amd?define(["exports","unit-react","react"],i):(n=typeof globalThis!="undefined"?globalThis:n||self,i(n.Button={},n.UnitReact,n.React))})(this,function(n,i,_){"use strict";function y(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var m=y(_),a={root:"Cb",icon:"Df",stretch:"Qm",text:"_5m",ring:"_1p"},l={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m.default,v=Symbol.for("react.element"),b=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,u){var o,r={},s=null,f=null;u!==void 0&&(s=""+u),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(f=t.ref);for(o in t)h.call(t,o)&&!R.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:v,type:e,key:s,ref:f,props:r,_owner:j.current}}c.Fragment=b,c.jsx=d,c.jsxs=d,l.exports=c;const p=l.exports.jsx;function O(e){const{children:t,keyboard:u=!0,autoFocus:o=!1,nonKeyboard:r=!0,variant:s="",className:f,...S}=e,T=s==="text",g=s==="icon",k=[f,a.root,T&&a.text,g&&a.icon].filter(Boolean).join(" "),E=!u&&!r;return p(i.Unit,{autofocus:o,disabled:E,children:p("button",{...S,className:k,children:t})})}n.Button=O,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
