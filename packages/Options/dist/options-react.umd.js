(function(f,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("react"),require("@szhsin/react-menu")):typeof define=="function"&&define.amd?define(["exports","react","@szhsin/react-menu"],o):(f=typeof globalThis!="undefined"?globalThis:f||self,o(f.Options={},f.React,f.ReactMenu))})(this,function(f,o,s){"use strict";function y(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var b=y(o),m={menu:"_menu_5aflf_1",menuOpen:"_menuOpen_5aflf_7",menuClose:"_menuClose_5aflf_10",item:"_item_5aflf_13",button:"_button_5aflf_19"},v={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=b.default,j=Symbol.for("react.element"),C=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,g=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function O(n,r,c){var t,l={},d=null,_=null;c!==void 0&&(d=""+c),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(_=r.ref);for(t in r)x.call(r,t)&&!R.hasOwnProperty(t)&&(l[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)l[t]===void 0&&(l[t]=r[t]);return{$$typeof:j,type:n,key:d,ref:_,props:l,_owner:g.current}}a.Fragment=C,a.jsx=O,a.jsxs=O,v.exports=a;const i=v.exports.jsx,S=({state:n})=>n==="opening"?m.menuOpen:m.menuClose;function k(n){const{triggerOn:r="Close",triggerOff:c="Options",options:t,onChange:l,ssr:d=!1,disabled:_=!1,portal:B=!0,classNames:u,selection:p,id:E}=n;if(t.length===0)return i(o.Fragment,{});const T=[m.menu,S,u==null?void 0:u.group].filter(Boolean).join(" "),I=[m.button,u==null?void 0:u.button].filter(Boolean).join(" ");return i(s.Menu,{id:E,menuClassName:T,menuButton:({open:e})=>i(s.MenuButton,{className:I,..._&&{disabled:_},children:e?r:c}),...l&&{onItemClick:e=>l==null?void 0:l(e.value)},...d&&{initialMounted:!0},portal:B,children:i(s.MenuGroup,{children:t==null?void 0:t.map(e=>e.value==="divider"?i(s.MenuDivider,{}):e.value==="title"?i(s.MenuHeader,{children:e.label}):i(s.MenuItem,{className:[m.item,e.value===(p!=null?p:"")?u==null?void 0:u.selected:u==null?void 0:u.item].filter(Boolean).join(" "),value:e.value,...(e==null?void 0:e.href)!==void 0&&{href:e==null?void 0:e.href},children:e.label},e.id))})})}f.Options=k,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
