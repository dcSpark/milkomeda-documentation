"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[1899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7",sidebar_position:5},i="\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7",s={unversionedId:"cardano/for-developers/unwrapping-assets-for-devs",id:"cardano/for-developers/unwrapping-assets-for-devs",title:"\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7",description:"Milkomeda Cardano Unwrap Bridge\u662f\u4e00\u4e2a\u5c06\u8d44\u4ea7\u4eceMilkomeda Cardano Testnet\u8f6c\u79fb\u5230Cardano\u4e3b\u7f51\u7684\u5de5\u5177\u3002 \u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u89e3\u5f00milkTADA\u7684\u5305\u88c5\uff0c\u5728\u4f60\u7684Cardano Testnet\u94b1\u5305\u4e2d\u6536\u5230tADA\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cardano/for-developers/unwrapping-assets-for-devs.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/unwrapping-assets-for-devs",permalink:"/zh/cardano/for-developers/unwrapping-assets-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5305\u88c5\u8d44\u4ea7",permalink:"/zh/cardano/for-developers/wrapping-assets-for-devs"},next:{title:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",permalink:"/zh/cardano/for-developers/deploying-a-smart-contract"}},c={},d=[],p={toc:d};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7"},"\u89e3\u5f00\u5305\u88c5\u8d44\u4ea7"),(0,a.kt)("p",null,"Milkomeda Cardano Unwrap Bridge\u662f\u4e00\u4e2a\u5c06\u8d44\u4ea7\u4eceMilkomeda Cardano Testnet\u8f6c\u79fb\u5230Cardano\u4e3b\u7f51\u7684\u5de5\u5177\u3002 \u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u89e3\u5f00milkTADA\u7684\u5305\u88c5\uff0c\u5728\u4f60\u7684Cardano Testnet\u94b1\u5305\u4e2d\u6536\u5230tADA\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://devnet-cardano-bridge.milkomeda.com/bridge"},"Milkomeda Cardano Unwrap Bridge for Devnet")," \u5e76\u8fde\u63a5\u60a8\u7684 MetaMask \u94b1\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8047).Z,width:"740",height:"300"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5128).Z,width:"420",height:"730"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4813).Z,width:"440",height:"749"})),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8f93\u5165\u8981\u89e3\u5f00\u7684milkADA\u7684\u6570\u91cf\uff0c\u5e76\u5728 \u300c\u6536\u4ef6\u4eba\u300d\u680f\u8d34\u4e0a\u4f60\u7684Cardano Testnet\u94b1\u5305\u5730\u5740\u3002 \u7136\u540e\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5693).Z,width:"770",height:"750"})),(0,a.kt)("p",null,"\u5728 MetaMask \u4e2d\u786e\u8ba4\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3339).Z,width:"425",height:"765"})),(0,a.kt)("p",null,"\u5728\u7b49\u5f85\u5fc5\u8981\u7684\u4ea4\u6613\u786e\u8ba4\u7ea63\u81f35\u5206\u949f\u540e\uff0c\u4f60\u5e94\u8be5\u5728\u4f60\u7684Cardano Testnet\u94b1\u5305\u4e2d\u770b\u5230\u672a\u5305\u88c5\u7684tADA\u3002"))}l.isMDXComponent=!0},5128:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-tada-confirm-1-52c009982568db0e2183559d2253ae48.png"},4813:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-tada-confirm-2-7106ebacffe1ab0f6e1d080051afd1b1.png"},8047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-c1db919660bc9e75e4d82576f6d93fb3.png"},5693:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-enter-tada-amount-3dd372d9f43d9c05f26f3c8c1c3c65d8.png"},3339:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-unwrap-tada-confirm-efbfc9eec52b402c2c42e85b190a9c0e.png"}}]);