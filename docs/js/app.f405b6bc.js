(function(t){function e(e){for(var r,c,i=e[0],u=e[1],l=e[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d21af29":"5ef87de1"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var l=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/homepage/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"31f7":function(t,e,n){t.exports=n.p+"img/header.1e998671.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"background"},[r("v-main",{staticClass:"background"},[r("v-container",{staticClass:"pa-0 background"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",xl:"8"}},[r("v-img",{attrs:{src:n("31f7")}})],1)],1)],1),r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",xl:"8"}},[r("v-tabs",{attrs:{color:"secondary lighten-2","fixed-tabs":"",dark:""}},[r("v-tabs-slider",{attrs:{color:"secondary lighten-2"}}),r("v-tab",{attrs:{to:"/"}},[t._v("Home")]),r("v-tab",{attrs:{to:"/about"}},[t._v("About")]),r("v-tab",{attrs:{to:"/event"}},[t._v("Event")]),r("v-tab",{attrs:{to:"/contact"}},[t._v("Contact")]),r("v-tab",{attrs:{href:"https://hanehanehane.net/"}},[t._v(" Blog "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1),r("router-view")],1)],1)],1)],1),r("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"background"}},[n("v-card",{staticClass:"flex text-center",attrs:{elevation:"0",color:"background"}},[n("v-card-text",t._l(t.footerlist,(function(e,r){return n("v-btn",{key:r,staticClass:"mx-4",attrs:{icon:"",href:e.link}},[n("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),n("v-card-text",[t._v(" Copyright © Otakugatari 2022 All Rights Reserved. ")])],1)],1)},i=[],u={name:"FooterComp",data:function(){return{footerlist:[{icon:"mdi-home",link:"https://hanehanehane.net/"},{icon:"mdi-twitter",link:"https://twitter.com/barla_wings"},{icon:"mdi-github",link:"https://github.com/Otakugatari"}]}}},l=u,s=n("2877"),p=n("6544"),f=n.n(p),d=n("8336"),v=n("b0af"),m=n("99d9"),h=n("553a"),b=n("132d"),g=Object(s["a"])(l,c,i,!1,null,null,null),_=g.exports;f()(g,{VBtn:d["a"],VCard:v["a"],VCardText:m["a"],VFooter:h["a"],VIcon:b["a"]});var y={name:"App",components:{Footer:_},data:function(){return{}}},w=y,x=n("7496"),C=n("62ad"),k=n("a523"),j=n("adda"),O=n("f6c4"),V=n("0fd9"),E=n("71a3"),F=n("fe57"),P=n("9a96"),T=Object(s["a"])(w,a,o,!1,null,null,null),A=T.exports;f()(T,{VApp:x["a"],VCol:C["a"],VContainer:k["a"],VIcon:b["a"],VImg:j["a"],VMain:O["a"],VRow:V["a"],VTab:E["a"],VTabs:F["a"],VTabsSlider:P["a"]});n("d3b7"),n("3ca3"),n("ddb0");var $=n("8c4f"),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Home ")])},S=[],M={name:"FooterComp",data:function(){return{}}},H=M,I=Object(s["a"])(H,B,S,!1,null,null,null),R=I.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" About ")])},L=[],q={name:"FooterComp",data:function(){return{}}},z=q,D=Object(s["a"])(z,J,L,!1,null,null,null),N=D.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Event ")])},K=[],Q={name:"FooterComp",data:function(){return{}}},U=Q,W=Object(s["a"])(U,G,K,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Content ")])},Z=[],tt={name:"FooterComp",data:function(){return{}}},et=tt,nt=Object(s["a"])(et,Y,Z,!1,null,null,null),rt=nt.exports;r["a"].use($["a"]);var at=[{path:"/",name:"Home",component:R},{path:"/about",name:"Avent",component:N},{path:"/event",name:"Event",component:X},{path:"/contact",name:"Contact",component:rt},{path:"/*",name:"NotFound",component:function(){return n.e("chunk-2d21af29").then(n.bind(null,"be4d"))}}],ot=new $["a"]({mode:"hash",base:"/homepage/",routes:at}),ct=ot,it=n("f309");r["a"].use(it["a"]);var ut=new it["a"]({theme:{themes:{light:{primary:"#013D7A",secondary:"#BB3F00",accent:"#BB9000",background:"#e6ebf1"}}}});r["a"].config.productionTip=!1,new r["a"]({router:ct,vuetify:ut,render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.f405b6bc.js.map