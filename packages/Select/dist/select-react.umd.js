(function(i,u){typeof exports=="object"&&typeof module!="undefined"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(i=typeof globalThis!="undefined"?globalThis:i||self,u(i.Select={},i.React))})(this,function(i,u){"use strict";function O(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var _=O(u),v={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=_.default,g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,R=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function y(n,e,s){var r,o={},l=null,t=null;s!==void 0&&(l=""+s),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(t=e.ref);for(r in e)$.call(e,r)&&!T.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:g,type:n,key:l,ref:t,props:o,_owner:R.current}}f.Fragment=S,f.jsx=y,f.jsxs=y,v.exports=f;const b=v.exports.jsx;function w(n){const{children:e,as:s,gap:r="1em",size:o="320px",css:l="flex",options:t,DONOTUse:a,...U}=n,m=l==="flex",q=u.useMemo(()=>{var h;return m?{display:"flex",gap:r,flexDirection:(h=t==null?void 0:t.direction)!=null?h:"row",...(t==null?void 0:t.stretch)&&{width:"100%"},...(t==null?void 0:t.alignItems)&&{alignItems:t==null?void 0:t.alignItems},...(t==null?void 0:t.justifyContent)&&{justifyContent:t==null?void 0:t.justifyContent},...(t==null?void 0:t.wrap)&&{flexWrap:t.wrap},...o!=="320px"&&{flex:`1 0 ${o}`}}:{display:"grid",gap:r,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%,${o}), 1fr))`,...(t==null?void 0:t.stretch)&&{width:"100%"}}},[m]);return b(s||"div",{...U,style:{...a!==void 0&&{...a.DONOTStyle},...q},children:e})}var E={root:"tg"},c={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=_.default,k=Symbol.for("react.element"),I=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,N=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function x(n,e,s){var r,o={},l=null,t=null;s!==void 0&&(l=""+s),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(t=e.ref);for(r in e)P.call(e,r)&&!D.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:k,type:n,key:l,ref:t,props:o,_owner:N.current}}d.Fragment=I,d.jsx=x,d.jsxs=x,c.exports=d;const p=c.exports.jsx,L=c.exports.jsxs;function F(n){const{options:e,value:s,onChange:r}=n;function o(l){const{selectedIndex:t}=l.currentTarget,a=e[t];r(a.value)}return p(w,{as:"label",className:E.root,children:L("select",{value:s,onChange:o,required:!0,children:[p("option",{value:"",hidden:!0,children:"Example Placeholder"}),e.map(l=>p("option",{value:l.value,children:l.label},l.value))]})})}i.Select=F,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
