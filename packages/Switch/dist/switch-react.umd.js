(function(n,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("font-react"),require("react")):typeof define=="function"&&define.amd?define(["exports","font-react","react"],s):(n=typeof globalThis!="undefined"?globalThis:n||self,s(n.Switch={},n.FontReact,n.React))})(this,function(n,s,d){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var h=_(d),y={group:"zv"},f={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=h.default,x=Symbol.for("react.element"),v=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,j=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,c){var r,o={},i=null,a=null;c!==void 0&&(i=""+c),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)g.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:x,type:e,key:i,ref:a,props:o,_owner:j.current}}u.Fragment=v,u.jsx=l,u.jsxs=l,f.exports=u;const p=f.exports.jsx,b=f.exports.jsxs;function O(e){const{className:t,initial:c=!1,onChangeValue:r,id:o,label:i="Switch",...a}=e,R=[t,y.group].filter(Boolean).join(" ");return b("label",{htmlFor:o,className:R,children:[p("input",{...a,type:"checkbox",...c&&{checked:!0},onChange:k=>r(k.target.checked)}),p(s.HelveticaNeue,{children:i})]})}n.Switch=O,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
