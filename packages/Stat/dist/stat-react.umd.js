(function(E,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("react"),require("group-react"),require("button-react"),require("font-react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","group-react","button-react","font-react","react-dom"],o):(E=typeof globalThis!="undefined"?globalThis:E||self,o(E.Stat={},E.React,E.GroupReact,E.ButtonReact,E.FontReact,E.ReactDOM))})(this,function(E,o,le,ye,$,_e){"use strict";function Ne(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var se=Ne(o),y={white:"pi",transparent:"wG",footer:"Ix",subtitle:"uG",item:"kt",title:"aJ",description:"tP"},q={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=se.default,Te=Symbol.for("react.element"),Ae=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Oe=Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,De={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var c,r={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(c in t)Le.call(t,c)&&!De.hasOwnProperty(c)&&(r[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps,t)r[c]===void 0&&(r[c]=t[c]);return{$$typeof:Te,type:e,key:l,ref:s,props:r,_owner:Oe.current}}H.Fragment=Ae,H.jsx=ae,H.jsxs=ae,q.exports=H;const h=q.exports.jsx,N=q.exports.jsxs;function ie(e){const{id:t,children:n,title:c,description:r,actions:l,subtitle:s,classNames:a={group:y.white,content:"p $$$$",footer:"p $$"}}=e,i=l!==void 0,u=s!==void 0;return N(le.Group,{as:"div",options:{direction:"column"},className:a.group,gap:"0",id:t,children:[N("div",{className:a.content,children:[h($.HelveticaNeue,{className:y.title,children:c}),h($.HelveticaNeue,{className:y.description,children:r}),n]}),i&&N("div",{className:[y.footer,a.footer].join(" "),children:[u&&h($.HelveticaNeue,{className:y.subtitle,children:s}),h(le.Group,{as:"div",children:l.map(d=>d.action!==void 0?h(ye.Button,{keyboard:!1,nonKeyboard:!1,className:[y.item,d.className].filter(Boolean).join(" "),...d.action!==void 0&&{onClick:()=>{var f,m;return(m=(f=d.action)==null?void 0:f.call(d))!=null?m:{}}},children:d.label}):h("div",{className:[y.item,d.className].filter(Boolean).join(" "),children:d.label}))})]})]})}const Me=e=>h(ie,{...e,classNames:{group:y.transparent,content:"p $$$$",footer:"p $$"}});function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},v.apply(this,arguments)}function Ie(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function de(...e){return t=>e.forEach(n=>Ie(n,t))}function R(...e){return o.useCallback(de(...e),e)}const ue=o.forwardRef((e,t)=>{const{children:n,...c}=e,r=o.Children.toArray(n),l=r.find(Ue);if(l){const s=l.props.children,a=r.map(i=>i===l?o.Children.count(s)>1?o.Children.only(null):o.isValidElement(s)?s.props.children:null:i);return o.createElement(ee,v({},c,{ref:t}),o.isValidElement(s)?o.cloneElement(s,void 0,a):null)}return o.createElement(ee,v({},c,{ref:t}),n)});ue.displayName="Slot";const ee=o.forwardRef((e,t)=>{const{children:n,...c}=e;return o.isValidElement(n)?o.cloneElement(n,{...We(c,n.props),ref:de(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null});ee.displayName="SlotClone";const ze=({children:e})=>o.createElement(o.Fragment,null,e);function Ue(e){return o.isValidElement(e)&&e.type===ze}function We(e,t){const n={...t};for(const c in t){const r=e[c],l=t[c];/^on[A-Z]/.test(c)?n[c]=(...a)=>{l==null||l(...a),r==null||r(...a)}:c==="style"?n[c]={...r,...l}:c==="className"&&(n[c]=[r,l].filter(Boolean).join(" "))}return{...e,...n}}const z=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{const n=o.forwardRef((c,r)=>{const{asChild:l,...s}=c,a=l?ue:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(a,v({},s,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),te=Boolean(globalThis==null?void 0:globalThis.document)?o.useLayoutEffect:()=>{};function je(e,t){return o.useReducer((n,c)=>{const r=t[n][c];return r!=null?r:n},e)}const U=e=>{const{present:t,children:n}=e,c=He(t),r=typeof n=="function"?n({present:c.isPresent}):o.Children.only(n),l=R(c.ref,r.ref);return typeof n=="function"||c.isPresent?o.cloneElement(r,{ref:l}):null};U.displayName="Presence";function He(e){const[t,n]=o.useState(),c=o.useRef({}),r=o.useRef(e),l=o.useRef("none"),s=e?"mounted":"unmounted",[a,i]=je(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const u=Y(c.current);l.current=a==="mounted"?u:"none"},[a]),te(()=>{const u=c.current,d=r.current;if(d!==e){const f=l.current,m=Y(u);e?i("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(d&&f!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,i]),te(()=>{if(t){const u=p=>{const m=Y(c.current).includes(p.animationName);p.target===t&&m&&_e.flushSync(()=>i("ANIMATION_END"))},d=p=>{p.target===t&&(l.current=Y(c.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:o.useCallback(u=>{u&&(c.current=getComputedStyle(u)),n(u)},[])}}function Y(e){return(e==null?void 0:e.animationName)||"none"}function Ye(e,t=[]){let n=[];function c(l,s){const a=o.createContext(s),i=n.length;n=[...n,s];function u(p){const{scope:f,children:m,...b}=p,g=(f==null?void 0:f[e][i])||a,O=o.useMemo(()=>b,Object.values(b));return o.createElement(g.Provider,{value:O},m)}function d(p,f){const m=(f==null?void 0:f[e][i])||a,b=o.useContext(m);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${l}\``)}return u.displayName=l+"Provider",[u,d]}const r=()=>{const l=n.map(s=>o.createContext(s));return function(a){const i=(a==null?void 0:a[e])||l;return o.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return r.scopeName=e,[c,Xe(r,...t)]}function Xe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const c=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(l){const s=c.reduce((a,{useScope:i,scopeName:u})=>{const p=i(l)[`__scope${u}`];return{...a,...p}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function T(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var c;return(c=t.current)===null||c===void 0?void 0:c.call(t,...n)},[])}const Be=o.createContext(void 0);function Ve(e){const t=o.useContext(Be);return e||t||"ltr"}function ke(e,[t,n]){return Math.min(n,Math.max(t,e))}function A(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Fe(e,t){return o.useReducer((n,c)=>{const r=t[n][c];return r!=null?r:n},e)}const fe="ScrollArea",[pe,Ut]=Ye(fe),[Ge,w]=pe(fe),Je=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:c="hover",dir:r,scrollHideDelay:l=600,...s}=e,[a,i]=o.useState(null),[u,d]=o.useState(null),[p,f]=o.useState(null),[m,b]=o.useState(null),[g,O]=o.useState(null),[C,G]=o.useState(0),[ce,J]=o.useState(0),[K,j]=o.useState(!1),[Q,Z]=o.useState(!1),S=R(t,I=>i(I)),P=Ve(r);return o.createElement(Ge,{scope:n,type:c,dir:P,scrollHideDelay:l,scrollArea:a,viewport:u,onViewportChange:d,content:p,onContentChange:f,scrollbarX:m,onScrollbarXChange:b,scrollbarXEnabled:K,onScrollbarXEnabledChange:j,scrollbarY:g,onScrollbarYChange:O,scrollbarYEnabled:Q,onScrollbarYEnabledChange:Z,onCornerWidthChange:G,onCornerHeightChange:J},o.createElement(z.div,v({dir:P},s,{ref:S,style:{position:"relative",["--radix-scroll-area-corner-width"]:C+"px",["--radix-scroll-area-corner-height"]:ce+"px",...e.style}})))}),Ke="ScrollAreaViewport",Qe=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:c,...r}=e,l=w(Ke,n),s=o.useRef(null),a=R(t,s,l.onViewportChange);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(z.div,v({"data-radix-scroll-area-viewport":""},r,{ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style}}),o.createElement("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"}},c)))}),x="ScrollAreaScrollbar",Ze=o.forwardRef((e,t)=>{const{forceMount:n,...c}=e,r=w(x,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=r,a=e.orientation==="horizontal";return o.useEffect(()=>(a?l(!0):s(!0),()=>{a?l(!1):s(!1)}),[a,l,s]),r.type==="hover"?o.createElement($e,v({},c,{ref:t,forceMount:n})):r.type==="scroll"?o.createElement(qe,v({},c,{ref:t,forceMount:n})):r.type==="auto"?o.createElement(me,v({},c,{ref:t,forceMount:n})):r.type==="always"?o.createElement(ne,v({},c,{ref:t})):null}),$e=o.forwardRef((e,t)=>{const{forceMount:n,...c}=e,r=w(x,e.__scopeScrollArea),[l,s]=o.useState(!1);return o.useEffect(()=>{const a=r.scrollArea;let i=0;if(a){const u=()=>{window.clearTimeout(i),s(!0)},d=()=>{i=window.setTimeout(()=>s(!1),r.scrollHideDelay)};return a.addEventListener("pointerenter",u),a.addEventListener("pointerleave",d),()=>{window.clearTimeout(i),a.removeEventListener("pointerenter",u),a.removeEventListener("pointerleave",d)}}},[r.scrollArea,r.scrollHideDelay]),o.createElement(U,{present:n||l},o.createElement(me,v({"data-state":l?"visible":"hidden"},c,{ref:t})))}),qe=o.forwardRef((e,t)=>{const{forceMount:n,...c}=e,r=w(x,e.__scopeScrollArea),l=e.orientation==="horizontal",s=V(()=>i("SCROLL_END"),100),[a,i]=Fe("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if(a==="idle"){const u=window.setTimeout(()=>i("HIDE"),r.scrollHideDelay);return()=>window.clearTimeout(u)}},[a,r.scrollHideDelay,i]),o.useEffect(()=>{const u=r.viewport,d=l?"scrollLeft":"scrollTop";if(u){let p=u[d];const f=()=>{const m=u[d];p!==m&&(i("SCROLL"),s()),p=m};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[r.viewport,l,i,s]),o.createElement(U,{present:n||a!=="hidden"},o.createElement(ne,v({"data-state":a==="hidden"?"hidden":"visible"},c,{ref:t,onPointerEnter:A(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:A(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),me=o.forwardRef((e,t)=>{const n=w(x,e.__scopeScrollArea),{forceMount:c,...r}=e,[l,s]=o.useState(!1),a=e.orientation==="horizontal",i=V(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,d=n.viewport.offsetHeight<n.viewport.scrollHeight;s(a?u:d)}},10);return D(n.viewport,i),D(n.content,i),o.createElement(U,{present:c||l},o.createElement(ne,v({"data-state":l?"visible":"hidden"},r,{ref:t})))}),ne=o.forwardRef((e,t)=>{const{orientation:n="vertical",...c}=e,r=w(x,e.__scopeScrollArea),l=o.useRef(null),s=o.useRef(0),[a,i]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Se(a.viewport,a.content),d={...c,sizes:a,onSizesChange:i,hasThumb:Boolean(u>0&&u<1),onThumbChange:f=>l.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function p(f,m){return st(f,s.current,a,m)}return n==="horizontal"?o.createElement(et,v({},d,{ref:t,onThumbPositionChange:()=>{if(r.viewport&&l.current){const f=r.viewport.scrollLeft,m=ge(f,a,r.dir);l.current.style.transform=`translate3d(${m}px, 0, 0)`}},onWheelScroll:f=>{r.viewport&&(r.viewport.scrollLeft=f)},onDragScroll:f=>{r.viewport&&(r.viewport.scrollLeft=p(f,r.dir))}})):n==="vertical"?o.createElement(tt,v({},d,{ref:t,onThumbPositionChange:()=>{if(r.viewport&&l.current){const f=r.viewport.scrollTop,m=ge(f,a);l.current.style.transform=`translate3d(0, ${m}px, 0)`}},onWheelScroll:f=>{r.viewport&&(r.viewport.scrollTop=f)},onDragScroll:f=>{r.viewport&&(r.viewport.scrollTop=p(f))}})):null}),et=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:c,...r}=e,l=w(x,e.__scopeScrollArea),[s,a]=o.useState(),i=o.useRef(null),u=R(t,i,l.onScrollbarXChange);return o.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),o.createElement(be,v({"data-orientation":"horizontal"},r,{ref:u,sizes:n,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,["--radix-scroll-area-thumb-width"]:B(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,p)=>{if(l.viewport){const f=l.viewport.scrollLeft+d.deltaX;e.onWheelScroll(f),Ee(f,p)&&d.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&c({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}}))}),tt=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:c,...r}=e,l=w(x,e.__scopeScrollArea),[s,a]=o.useState(),i=o.useRef(null),u=R(t,i,l.onScrollbarYChange);return o.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),o.createElement(be,v({"data-orientation":"vertical"},r,{ref:u,sizes:n,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)",["--radix-scroll-area-thumb-height"]:B(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,p)=>{if(l.viewport){const f=l.viewport.scrollTop+d.deltaY;e.onWheelScroll(f),Ee(f,p)&&d.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&c({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}}))}),[nt,he]=pe(x),be=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:c,hasThumb:r,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:i,onDragScroll:u,onWheelScroll:d,onResize:p,...f}=e,m=w(x,n),[b,g]=o.useState(null),O=R(t,S=>g(S)),C=o.useRef(null),G=o.useRef(""),ce=m.viewport,J=c.content-c.viewport,K=T(d),j=T(i),Q=V(p,10);function Z(S){if(C.current){const P=S.clientX-C.current.left,I=S.clientY-C.current.top;u({x:P,y:I})}}return o.useEffect(()=>{const S=P=>{const I=P.target;(b==null?void 0:b.contains(I))&&K(P,J)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[ce,b,J,K]),o.useEffect(j,[c,j]),D(b,Q),D(m.content,Q),o.createElement(nt,{scope:n,scrollbar:b,hasThumb:r,onThumbChange:T(l),onThumbPointerUp:T(s),onThumbPositionChange:j,onThumbPointerDown:T(a)},o.createElement(z.div,v({},f,{ref:O,style:{position:"absolute",...f.style},onPointerDown:A(e.onPointerDown,S=>{S.button===0&&(S.target.setPointerCapture(S.pointerId),C.current=b.getBoundingClientRect(),G.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",Z(S))}),onPointerMove:A(e.onPointerMove,Z),onPointerUp:A(e.onPointerUp,S=>{S.target.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=G.current,C.current=null})})))}),oe="ScrollAreaThumb",ot=o.forwardRef((e,t)=>{const{forceMount:n,...c}=e,r=he(oe,e.__scopeScrollArea);return o.createElement(U,{present:n||r.hasThumb},o.createElement(rt,v({ref:t},c)))}),rt=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:c,...r}=e,l=w(oe,n),s=he(oe,n),{onThumbPositionChange:a}=s,i=R(t,p=>s.onThumbChange(p)),u=o.useRef(),d=V(()=>{u.current&&(u.current(),u.current=void 0)},100);return o.useEffect(()=>{const p=l.viewport;if(p){const f=()=>{if(d(),!u.current){const m=at(p,a);u.current=m,a()}};return a(),p.addEventListener("scroll",f),()=>p.removeEventListener("scroll",f)}},[l.viewport,d,a]),o.createElement(z.div,v({"data-state":s.hasThumb?"visible":"hidden"},r,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...c},onPointerDownCapture:A(e.onPointerDownCapture,p=>{const m=p.target.getBoundingClientRect(),b=p.clientX-m.left,g=p.clientY-m.top;s.onThumbPointerDown({x:b,y:g})}),onPointerUp:A(e.onPointerUp,s.onThumbPointerUp)}))}),ve="ScrollAreaCorner",ct=o.forwardRef((e,t)=>{const n=w(ve,e.__scopeScrollArea),c=Boolean(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&c?o.createElement(lt,v({},e,{ref:t})):null}),lt=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,...c}=e,r=w(ve,n),[l,s]=o.useState(0),[a,i]=o.useState(0),u=Boolean(l&&a);return D(r.scrollbarX,()=>{var d;const p=((d=r.scrollbarX)===null||d===void 0?void 0:d.offsetHeight)||0;r.onCornerHeightChange(p),i(p)}),D(r.scrollbarY,()=>{var d;const p=((d=r.scrollbarY)===null||d===void 0?void 0:d.offsetWidth)||0;r.onCornerWidthChange(p),s(p)}),u?o.createElement(z.div,v({},c,{ref:t,style:{width:l,height:a,position:"absolute",right:r.dir==="ltr"?0:void 0,left:r.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function X(e){return e?parseInt(e,10):0}function Se(e,t){const n=e/t;return isNaN(n)?0:n}function B(e){const t=Se(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,c=(e.scrollbar.size-n)*t;return Math.max(c,18)}function st(e,t,n,c="ltr"){const r=B(n),l=r/2,s=t||l,a=r-s,i=n.scrollbar.paddingStart+s,u=n.scrollbar.size-n.scrollbar.paddingEnd-a,d=n.content-n.viewport,p=c==="ltr"?[0,d]:[d*-1,0];return we([i,u],p)(e)}function ge(e,t,n="ltr"){const c=B(t),r=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-r,s=t.content-t.viewport,a=l-c,i=n==="ltr"?[0,s]:[s*-1,0],u=ke(e,i);return we([0,s],[0,a])(u)}function we(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const c=(t[1]-t[0])/(e[1]-e[0]);return t[0]+c*(n-e[0])}}function Ee(e,t){return e>0&&e<t}const at=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},c=0;return function r(){const l={left:e.scrollLeft,top:e.scrollTop},s=n.left!==l.left,a=n.top!==l.top;(s||a)&&t(),n=l,c=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(c)};function V(e,t){const n=T(e),c=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(c.current),[]),o.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(n,t)},[n,t])}function D(e,t){const n=T(t);te(()=>{let c=0;if(e){const r=new ResizeObserver(()=>{cancelAnimationFrame(c),c=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(c),r.unobserve(e)}}},[e,n])}const it=Je,dt=Qe,xe=Ze,Ce=ot,ut=ct;var L={group:"Nh",viewport:"GD",scrollbar:"_4Q",thumb:"_9B",corner:"cz"},re={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=se.default,pt=Symbol.for("react.element"),mt=Symbol.for("react.fragment"),ht=Object.prototype.hasOwnProperty,bt=ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vt={key:!0,ref:!0,__self:!0,__source:!0};function Pe(e,t,n){var c,r={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(c in t)ht.call(t,c)&&!vt.hasOwnProperty(c)&&(r[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps,t)r[c]===void 0&&(r[c]=t[c]);return{$$typeof:pt,type:e,key:l,ref:s,props:r,_owner:bt.current}}k.Fragment=mt,k.jsx=Pe,k.jsxs=Pe,re.exports=k;const M=re.exports.jsx,St=re.exports.jsxs;function gt(e){const{children:t,type:n="hover",dir:c="ltr",classNames:r,...l}=e,s=[L.group,r==null?void 0:r.group].filter(Boolean).join(" "),a=[L.viewport,r==null?void 0:r.viewport].filter(Boolean).join(" ");return St(it,{className:s,type:n,...l,children:[M(dt,{className:a,children:t}),M(xe,{orientation:"vertical",className:L.scrollbar,children:M(Ce,{className:L.thumb})}),M(xe,{orientation:"horizontal",className:L.scrollbar,children:M(Ce,{className:L.thumb})}),M(ut,{className:L.corner})]})}var wt={table:"IO"};function Et(e){const{label:t,th:n,tr:c,classNames:r={group:wt.table,viewport:"table-container"}}=e;return h(gt,{classNames:{group:r.group,viewport:r.viewport},children:N("table",{children:[h("caption",{className:"visually-hidden",children:t}),h("thead",{children:h("tr",{children:n.map((l,s)=>s===0?h("th",{scope:"col",className:"pin",children:l.label}):h("th",{scope:"col",children:l.label}))})}),h("tbody",{children:c.map((l,s)=>h("tr",{children:l.map((a,i)=>i===0?h("th",{scope:"row",className:"pin",children:a.label}):h("td",{scope:"col",children:a.label}))}))})]})})}var W={stepper:"HW",stepperItem:"ip",stepperCounter:"Lq",complete:"Wh",stepperLine:"W5"};function xt(e){const{items:t,classNames:n={group:W.stepper},id:c}=e;return h("ol",{className:n.group,children:t.map((r,l)=>{const s=[W.stepperItem,r.completed&&W.complete].filter(Boolean).join(" ");return N("li",{className:s,children:[h("span",{className:W.stepperCounter}),o.cloneElement(r.label,{key:`${c}-trigger`}),h("span",{className:W.stepperLine})]},l)})})}function Ct(e){const{label:t,items:n,height:c,min:r=0,max:l,value:s,className:a}=e,i=n.reduce((u,d)=>u+`${d.color} ${d.value},`,"");return N(o.Fragment,{children:[h("div",{"aria-hidden":"true",style:{width:"100%",height:c,backgroundImage:`repeating-linear-gradient(
            90deg,${i.slice(0,-1)})`,backgroundSize:"100% 100%"},...a!==void 0&&{className:a}}),h("meter",{className:"visually-hidden",value:s.toString(),min:r.toString(),max:l.toString(),title:t,children:t})]})}const Pt=({children:e,height:t="100%",style:n})=>h("svg",{width:"100%",height:t,...n!==void 0&&{style:n},children:e}),yt=({translate:e,children:t})=>h("g",{style:{transform:e},children:t}),_t=({x:e="0%",y:t="0%",fill:n="currentColor",width:c="10%",height:r="10%"})=>h("rect",{x:e,y:t,width:c,height:r,fill:n});function Nt(e){var i,u,d,p;const{colors:t,size:n,width:c="100%",height:r="100%",marker:l,className:s}=e,a=`
      ${(i=t==null?void 0:t.start)!=null?i:"currentColor"}, 
      ${(u=t==null?void 0:t.start)!=null?u:"currentColor"} ${n},
       ${(d=t==null?void 0:t.end)!=null?d:"transparent"} ${n},
       ${(p=t==null?void 0:t.end)!=null?p:"transparent"} ${Number(n.replace("%",""))*2}%`;return h(Pt,{height:r,style:{width:c,backgroundImage:`repeating-linear-gradient(
            90deg,${a})`},...s!==void 0&&{className:s},children:l!==void 0&&h(yt,{children:h(_t,{x:l==null?void 0:l.position,y:"0",width:l==null?void 0:l.width,height:l==null?void 0:l.height,fill:l==null?void 0:l.color})})})}var F={surface:"uB",interactive:"_8x",bg:"_7v",thumb:"vT"};const Rt=({initialValue:e=[0,0],onChange:t=n=>{}})=>{const n=o.useRef(),[c,r]=o.useState(e[0]),[l,s]=o.useState(e[1]),a=(f,m)=>{if(!n.current)return[0,0];const{height:b,width:g,x:O,y:C}=n.current.getBoundingClientRect();return[(f-O)/g*100,(m-C)/b*100]},i=(f,m)=>{const[b,g]=a(f,m);b>100?r(100):b<0?r(0):r(b),g>100?s(100):g<0?s(0):s(g)},u=f=>{i(f.clientX,f.clientY)},d=f=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",d)},p=f=>{window.addEventListener("pointermove",u),window.addEventListener("pointerup",d),i(f.clientX,f.clientY)};return o.useEffect(()=>{t([c,l])},[c,l]),h("div",{className:F.surface,children:N("div",{className:F.interactive,ref:n,onPointerDown:p,children:[h("div",{className:F.bg}),h("div",{className:F.thumb,style:{top:`${l}%`,left:`${c}%`}})]})})};function _(){return h(o.Fragment,{})}_.Periods=Nt,_.Meter=Ct,_.Surface=Rt,_.Table=Et,_.Steps=xt,_.Panel=ie,_.PanelTransparent=Me,E.Stat=_,Object.defineProperties(E,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
