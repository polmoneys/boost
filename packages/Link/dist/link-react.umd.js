(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o.Link={},o.React))})(this,function(o,n){"use strict";function p(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var y=p(n),l={root:"_root_1y58m_1",button:"_button_1y58m_40",ring:"_ring_1y58m_41"},_={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=y.default,b=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,g=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var r,s={},u=null,a=null;i!==void 0&&(u=""+i),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)x.call(t,r)&&!j.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:b,type:e,key:u,ref:a,props:s,_owner:g.current}}f.Fragment=v,f.jsx=c,f.jsxs=c,_.exports=f;const k=_.exports.jsx;function O(e){const{children:t,newTab:i=!1,href:r,variant:s="default",className:u,...a}=e,{rel:h,target:R}=n.useMemo(()=>{const d=i?"_blank":"";return{target:d,rel:d?"noopener noreferrer":void 0}},[i]),L=s==="button",S=[u,l.root,L&&l.button].filter(Boolean).join(" ");return k("a",{...a,className:S,rel:h,target:R,href:r,children:t})}o.Link=O,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
