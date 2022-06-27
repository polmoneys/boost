(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o.Layers={},o.React))})(this,function(o,n){"use strict";function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var p=_(n),l={root:"_7-",start:"Ix",end:"_3V"},c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=p.default,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,j=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,u){var r,s={},f=null,a=null;u!==void 0&&(f=""+u),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)x.call(e,r)&&!O.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m,type:t,key:f,ref:a,props:s,_owner:j.current}}i.Fragment=v,i.jsx=d,i.jsxs=d,c.exports=i;const R=c.exports.jsx;function T(t){const{align:e,as:u,children:r,className:s}=t,f=n.useMemo(()=>{const b=e!=="center";return[s,l.root,b&&l[`${e}`]].filter(Boolean).join(" ")},[e]);return R(u||"div",{className:f,children:r})}o.Layers=T,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
