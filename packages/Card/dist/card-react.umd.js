(function(a,l){typeof exports=="object"&&typeof module!="undefined"?l(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],l):(a=typeof globalThis!="undefined"?globalThis:a||self,l(a.Card={},a.React))})(this,function(a,l){"use strict";function b(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var v=b(l);const C=(r,e,s)=>`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${e}"><rect  fill='%23${s}' width="${r}" height="${e}"/></svg>`;var N={root:"Fj"},x={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=v.default,I=Symbol.for("react.element"),P=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,F=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function O(r,e,s){var t,n={},i=null,o=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)D.call(e,t)&&!L.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:I,type:r,key:i,ref:o,props:n,_owner:F.current}}c.Fragment=P,c.jsx=O,c.jsxs=O,x.exports=c;const f=x.exports.jsx,j=x.exports.jsxs;function U(r){const{height:e,sources:s,src:t,alt:n="",eager:i=!1}=r,[o,m]=l.useState(!1),g=()=>{m(!0)};let d=f(l.Fragment,{});return s!==void 0&&(d=Object.keys(s).map(u=>{const T=(s==null?void 0:s[u])!==void 0,y=`image/${u}`,te=s[u].toString();return T?f("source",{type:y,srcSet:te},u):f(l.Fragment,{})})),j("picture",{className:N.root,...e&&{style:{height:e}},onError:g,children:[o&&f("img",{src:C("600px",e!=null?e:"200px","currentColor"),alt:"Loading error"}),!o&&j(l.Fragment,{children:[d,f("img",{src:t,alt:n,loading:i?"eager":"lazy",height:e})]})]})}var $={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=v.default,B=Symbol.for("react.element"),W=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,J=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function h(r,e,s){var t,n={},i=null,o=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)A.call(e,t)&&!Y.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:B,type:r,key:i,ref:o,props:n,_owner:J.current}}p.Fragment=W,p.jsx=h,p.jsxs=h,$.exports=p;const z=$.exports.jsx;function q(r){const{children:e,as:s,gap:t="1em",size:n="320px",css:i="flex",options:o,DONOTUse:m,...g}=r,d=i==="flex",u=l.useMemo(()=>{var y;return d?{display:"flex",gap:t,flexDirection:(y=o==null?void 0:o.direction)!=null?y:"row",...(o==null?void 0:o.stretch)&&{width:"100%"},...(o==null?void 0:o.alignItems)&&{alignItems:o==null?void 0:o.alignItems},...(o==null?void 0:o.justifyContent)&&{justifyContent:o==null?void 0:o.justifyContent},...(o==null?void 0:o.wrap)&&{flexWrap:o.wrap},...n!=="320px"&&{flex:`1 0 ${n}`}}:{display:"grid",gap:t,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%,${n}), 1fr))`,...(o==null?void 0:o.stretch)&&{width:"100%"}}},[d]);return z(s||"div",{...g,style:{...m!==void 0&&{...m.DONOTStyle},...u},children:e})}const R={square:{start:1,end:1},portrait:{start:9,end:16},landscape:{start:16,end:9}};var G={root:"iR"},S={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=v.default,K=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,X=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function w(r,e,s){var t,n={},i=null,o=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)V.call(e,t)&&!Z.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:K,type:r,key:i,ref:o,props:n,_owner:X.current}}_.Fragment=Q,_.jsx=w,_.jsxs=w,S.exports=_;const ee=S.exports.jsx;function E(r){const{children:e,as:s="div",ratio:t="square"}=r,n=l.useMemo(()=>`${R[t].start}/${R[t].end}`,[t]);return ee(q,{className:G.root,as:s,options:{alignItems:"flex-start",justifyContent:"flex-start",direction:"column"},DONOTUse:{DONOTStyle:{["--card-ratio"]:n}},children:e})}E.Media=U,a.Card=E,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
