"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[5995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664",sidebar_position:5},i="\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664",s={unversionedId:"cardano/for-developers/unwrapping-assets-for-devs",id:"cardano/for-developers/unwrapping-assets-for-devs",title:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664",description:"Milkomeda Cardano Unwrap Bridge\u306fMilkomeda Cardano Testnet\u304b\u3089Cardano\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306b\u8cc7\u7523\u3092\u79fb\u52d5\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002 \u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066milkTADA\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u3092\u89e3\u9664\u3057\u3001Cardano Testnet\u30a6\u30a9\u30ec\u30c3\u30c8\u3067tADA\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cardano/for-developers/unwrapping-assets-for-devs.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/unwrapping-assets-for-devs",permalink:"/milkomeda-documentation/ja/cardano/for-developers/unwrapping-assets-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0",permalink:"/milkomeda-documentation/ja/cardano/for-developers/wrapping-assets-for-devs"},next:{title:"\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",permalink:"/milkomeda-documentation/ja/cardano/for-developers/deploying-a-smart-contract"}},c={},d=[],p={toc:d};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664"},"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664"),(0,a.kt)("p",null,"Milkomeda Cardano Unwrap Bridge\u306fMilkomeda Cardano Testnet\u304b\u3089Cardano\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306b\u8cc7\u7523\u3092\u79fb\u52d5\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002 \u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066milkTADA\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u3092\u89e3\u9664\u3057\u3001Cardano Testnet\u30a6\u30a9\u30ec\u30c3\u30c8\u3067tADA\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001",(0,a.kt)("a",{parentName:"p",href:"https://devnet-cardano-bridge.milkomeda.com/bridge"},"Milkomeda Cardano Unwrap Bridge for Devnet"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066MetaMask\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8047).Z,width:"740",height:"300"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5128).Z,width:"420",height:"730"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4813).Z,width:"440",height:"749"})),(0,a.kt)("p",null,"\u30e9\u30c3\u30d4\u30f3\u30b0\u3092\u89e3\u9664\u3059\u308bmilkADA\u306e\u91d1\u984d\u3092\u5165\u529b\u3057\u3001\u300cTo\u300d\u6b04\u306b\u81ea\u5206\u306eCardano Testnet\u30a6\u30a9\u30ec\u30c3\u30c8\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002 \u300cNext Step\uff08\u6b21\u3078\uff09\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5693).Z,width:"770",height:"750"})),(0,a.kt)("p",null,"MetaMask\u3067\u64cd\u4f5c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3339).Z,width:"425",height:"765"})),(0,a.kt)("p",null,"\u7d043\uff5e5\u5206\u3067\u5fc5\u8981\u306a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u78ba\u8a8d\u3055\u308c\u308b\u3068\u3001Cardano Testnet\u30a6\u30a9\u30ec\u30c3\u30c8\u3067tADA\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u304c\u89e3\u9664\u3055\u308c\u305f\u306e\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}l.isMDXComponent=!0},5128:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-tada-confirm-1-52c009982568db0e2183559d2253ae48.png"},4813:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-tada-confirm-2-7106ebacffe1ab0f6e1d080051afd1b1.png"},8047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-connect-metamask-c1db919660bc9e75e4d82576f6d93fb3.png"},5693:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-enter-tada-amount-3dd372d9f43d9c05f26f3c8c1c3c65d8.png"},3339:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-unwrap-tada-confirm-efbfc9eec52b402c2c42e85b190a9c0e.png"}}]);