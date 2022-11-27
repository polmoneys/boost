(function(l,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(l=typeof globalThis!="undefined"?globalThis:l||self,n(l.Track={},l.React))})(this,function(l,n){"use strict";var P=Object.defineProperty;var W=(l,n,u)=>n in l?P(l,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[n]=u;var e=(l,n,u)=>(W(l,typeof n!="symbol"?n+"":n,u),u);function u(h){return h&&typeof h=="object"&&"default"in h?h:{default:h}}var b=u(n),w={root:"fy",scrolling:"VP",viewport:"AB"};const g=w.scrolling,_={hasTouchEvent:!0,dragSpeed:2,smoothAmount:.1};class S{constructor(t){e(this,"options");e(this,"containerTag");e(this,"sliderTag");e(this,"sliderTagLeft");e(this,"sliderTagRight");e(this,"dragSpeed");e(this,"smoothAmount");e(this,"down");e(this,"startX");e(this,"scrollLeft");e(this,"isAnimating");e(this,"x");e(this,"dist");e(this,"scrollAmount");e(this,"stopAnimation");e(this,"animationRef");e(this,"scrollWidth");e(this,"getScrollWidth",()=>this.sliderTag.scrollWidth-this.containerTag.offsetWidth+this.sliderTagLeft+this.sliderTagRight);e(this,"callCallback",(t,o)=>{var s,i,r,a,c,v,d,f,T,E,m,L;switch(t){case"mousedown":this.checkCallbackType((s=this.options)==null?void 0:s.mouseDown)&&((r=(i=this.options)==null?void 0:i.mouseDown)==null||r.call(i));break;case"mouseleave":this.checkCallbackType((a=this.options)==null?void 0:a.mouseLeave)&&((v=(c=this.options)==null?void 0:c.mouseLeave)==null||v.call(c));break;case"mouseup":this.checkCallbackType((d=this.options)==null?void 0:d.mouseUp)&&((T=(f=this.options)==null?void 0:f.mouseUp)==null||T.call(f));break;case"mousemove":this.checkCallbackType((E=this.options)==null?void 0:E.mouseEnter)&&((L=(m=this.options)==null?void 0:m.mouseEnter)==null||L.call(m));break;default:console.warn("No default callback");break}});e(this,"getEvent",t=>t.targetTouches?t.targetTouches[0]:t);e(this,"checkCallbackType",t=>!!(t&&typeof t=="function"));e(this,"mousedown",t=>{this.isAnimating||this.anime();const o=this.getEvent(t);this.down=!0,this.startX=o.pageX-this.sliderTag.offsetLeft,this.scrollLeft=this.scrollAmount,this.sliderTag.classList.add(g),this.callCallback("mousedown",null)});e(this,"mouseleave",()=>{this.down=!1,this.sliderTag.classList.remove(g),this.callCallback("mouseleave",null)});e(this,"mouseup",()=>{this.down=!1,this.sliderTag.classList.remove(g),this.callCallback("mouseup",null)});e(this,"mousemove",t=>{this.callCallback("mousemove",null);const o=this.getEvent(t);!this.down||(t.preventDefault(),this.x=o.pageX-this.sliderTag.offsetLeft,this.dist=this.scrollLeft-(this.x-this.startX)*this.dragSpeed)});e(this,"transformElement",()=>{const t=-this.scrollAmount.toFixed(3);this.sliderTag.style.transform=`translate3D(${t}px, 0, 0)`});e(this,"map",(t,o,s,i,r)=>(t-o)*(r-i)/(s-o)+i);e(this,"getFloatNumber",(t,o,s,i)=>{if(isNaN(+t))return+o.toFixed(3);const r=parseFloat((+t).toFixed(3));return r>i?+i.toFixed(3):r<s?+s.toFixed(3):r});e(this,"anime",()=>{this.isAnimating=!0,this.dist+this.scrollAmount<=0?this.dist=0:this.dist>=this.scrollWidth&&(this.dist=this.scrollWidth),this.scrollAmount=this.lerp(this.scrollAmount,this.dist,this.smoothAmount),this.transformElement(),this.stopAnimation?cancelAnimationFrame(this.animationRef):this.animationRef=requestAnimationFrame(this.anime)});e(this,"lerp",(t,o,s)=>t*(1-s)+o*s);e(this,"setRelativePosition",t=>{this.x=this.sliderTag.offsetLeft-t,this.startX=this.sliderTag.offsetLeft,this.scrollLeft=this.scrollAmount,this.dist=this.scrollLeft-(this.x-this.startX)*this.dragSpeed,!(this.dist+this.scrollAmount<=0)&&(this.dist>=this.scrollWidth||(this.sliderTag.classList.add(g),this.anime(),this.sliderTag.classList.remove(g)))});e(this,"init",()=>{this.isAnimating=!1,this.stopAnimation=!1,this.sliderTag.style.willChange="transform";const t="ontouchstart"in window||navigator.maxTouchPoints>0;t?t&&this.options.hasTouchEvent?(this.containerTag.addEventListener("touchstart",this.mousedown),this.containerTag.addEventListener("touchleave",this.mouseleave),this.containerTag.addEventListener("touchend",this.mouseup),this.containerTag.addEventListener("touchmove",this.mousemove)):t&&!this.options.hasTouchEvent&&(this.containerTag.style.overflowX="scroll"):(this.containerTag.addEventListener("mousedown",this.mousedown),this.containerTag.addEventListener("mouseleave",this.mouseleave),this.containerTag.addEventListener("mouseup",this.mouseup),this.containerTag.addEventListener("mousemove",this.mousemove))});e(this,"destroy",()=>{this.stopAnimation=!0,this.containerTag.removeEventListener("mousedown",this.mousedown),this.containerTag.removeEventListener("mouseleave",this.mouseleave),this.containerTag.removeEventListener("mouseup",this.mouseup),this.containerTag.removeEventListener("mousemove",this.mousemove),this.containerTag.removeEventListener("touchstart",this.mousedown),this.containerTag.removeEventListener("touchleave",this.mouseleave),this.containerTag.removeEventListener("touchend",this.mouseup),this.containerTag.removeEventListener("touchmove",this.mousemove,!1)});var i,r,a,c;this.options={..._,...t},this.containerTag=(i=this.options)==null?void 0:i.container,this.sliderTag=(r=this.options)==null?void 0:r.slider;const o=window.getComputedStyle(this.sliderTag).getPropertyValue("margin-left"),s=window.getComputedStyle(this.sliderTag).getPropertyValue("margin-right");this.sliderTagLeft=parseInt(o,10),this.sliderTagRight=parseInt(s,10),this.dragSpeed=this.getFloatNumber((a=this.options)==null?void 0:a.dragSpeed,1,1,100),this.smoothAmount=this.getFloatNumber((c=this.options)==null?void 0:c.smoothAmount,.15,.01,1),this.down=!1,this.startX=0,this.scrollLeft=0,this.isAnimating=!1,this.x=0,this.dist=0,this.scrollAmount=0,this.stopAnimation=!1,this.animationRef=null,this.scrollWidth=this.getScrollWidth(),this.init()}}var k={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=b.default,R=Symbol.for("react.element"),C=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,N=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function A(h,t,o){var s,i={},r=null,a=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)F.call(t,s)&&!O.hasOwnProperty(s)&&(i[s]=t[s]);if(h&&h.defaultProps)for(s in t=h.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:R,type:h,key:r,ref:a,props:i,_owner:N.current}}p.Fragment=C,p.jsx=A,p.jsxs=A,k.exports=p;const y=k.exports.jsx;function j(h){const{className:t,children:o,maskSize:s,gap:i="var(--gap-3)",as:r="div"}=h,[a,c]=n.useState(null),v=a!==null,d=n.useRef(null),f=m=>{if(m&&d.current!==null&&a===null){const L=new S({container:m,slider:d.current});c(L)}};n.useEffect(()=>()=>a==null?void 0:a.destroy(),[]);const T=[w.root,t].filter(Boolean).join(" ");return y(r,{ref:f,className:T,children:y("div",{ref:d,className:w.viewport,style:{width:s,gap:i},children:v&&y(n.Fragment,{children:o})})})}l.Track=j,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
