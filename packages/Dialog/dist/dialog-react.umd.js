(function(s,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react"),require("@reach/dialog")):typeof define=="function"&&define.amd?define(["exports","react","@reach/dialog"],n):(s=typeof globalThis!="undefined"?globalThis:s||self,n(s.Dialog={},s.React,s.reachDialog))})(this,function(s,n,c){"use strict";function N(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var E=N(n),g={overlay:"_overlay_4rmqc_1",root:"_root_4rmqc_17",isOpen:"_isOpen_4rmqc_40"},y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=E.default,S=Symbol.for("react.element"),C=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,P=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,l){var o,a={},i=null,r=null;l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(r=t.ref);for(o in t)T.call(t,o)&&!B.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:S,type:e,key:i,ref:r,props:a,_owner:P.current}}p.Fragment=C,p.jsx=w,p.jsxs=w,y.exports=p;const d=y.exports.jsx,O=y.exports.jsxs,L=e=>{const{children:t,closeButton:l,className:o,open:a,onClose:i}=e,[r,f]=n.useState(0);n.useRef(),n.useEffect(()=>{var b,j,D,k;if(r!==0)return;const u=(j=(b=window==null?void 0:window.visualViewport)==null?void 0:b.height)!=null?j:window==null?void 0:window.innerHeight,F=r<850,H=(k=(D=window==null?void 0:window.visualViewport)==null?void 0:D.width)!=null?k:window==null?void 0:window.innerWidth;console.log({newHeight:u,short:F,width:H}),f(u)},[r]);const h={"--tray-min-height":`${r}px`},m=n.cloneElement(l,{onClick:i}),v=[g.root,o].filter(Boolean).join(" ");return d(c.DialogOverlay,{isOpen:a,onDismiss:i,className:g.overlay,children:d(c.DialogContent,{"aria-labelledby":"tray-dialog",className:v,style:h,children:O(n.Fragment,{children:[m,t]})})})};var _={overlay:"_overlay_147bk_10",root:"_root_147bk_25",portrait:"_portrait_147bk_39",landscape:"_landscape_147bk_44"};function x(e){const{label:t,children:l,className:o,closeButton:a,open:i,onClose:r,ratio:f="landscape"}=e,h=f==="portrait",m=f==="landscape",v=n.cloneElement(a,{onClick:r}),u=[_.root,h&&_.portrait,m&&_.landscape,o].filter(Boolean).join(" ");return d(c.DialogOverlay,{isOpen:i,onDismiss:r,className:_.overlay,children:d(c.DialogContent,{"aria-label":t,className:u,children:O(n.Fragment,{children:[v,l]})})})}x.Tray=L,s.Dialog=x,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
