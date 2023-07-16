"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[5945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},c="FAQs",i={unversionedId:"cardano/wrapped-smart-contracts/FAQs",id:"cardano/wrapped-smart-contracts/FAQs",title:"FAQs",description:"How do I control my WSC?",source:"@site/docs/cardano/wrapped-smart-contracts/FAQs.md",sourceDirName:"cardano/wrapped-smart-contracts",slug:"/cardano/wrapped-smart-contracts/FAQs",permalink:"/ko/cardano/wrapped-smart-contracts/FAQs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"cardano",previous:{title:"Example DApp",permalink:"/ko/cardano/wrapped-smart-contracts/example"},next:{title:"Get Help",permalink:"/ko/home/get-help"}},l={},s=[{value:"How do I control my WSC?",id:"how-do-i-control-my-wsc",level:3},{value:"Why can&#39;t I move all my ADA from the WSC back to the Layer 1?",id:"why-cant-i-move-all-my-ada-from-the-wsc-back-to-the-layer-1",level:3},{value:"What fees do I pay for using WSC?",id:"what-fees-do-i-pay-for-using-wsc",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faqs"},"FAQs"),(0,a.kt)("h3",{id:"how-do-i-control-my-wsc"},"How do I control my WSC?"),(0,a.kt)("p",null,"The Layer 1 (L1) blockchain acts as a robust coordination layer, allowing users to execute smart contracts on sidechains or L2 while remaining on the L1 blockchain. While you can have funds in the WSC and transfer them from the L1 to the L2 and from the L2 to the L1, the action is triggered by the Layer 1 address."),(0,a.kt)("h3",{id:"why-cant-i-move-all-my-ada-from-the-wsc-back-to-the-layer-1"},"Why can't I move all my ADA from the WSC back to the Layer 1?"),(0,a.kt)("h3",{id:"what-fees-do-i-pay-for-using-wsc"},"What fees do I pay for using WSC?"),(0,a.kt)("p",null,"The transaction costs can be broken down into these components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bridge Fee")," - a fee of 1.1 TADA is paid to the bridge",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0.1 TADA for wrapping"),(0,a.kt)("li",{parentName:"ul"},"1.0 TADA for unwrapping"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bridge Lock-up")," - a temporary deposit of 3 ADA is locked in the bridge. Upon unwrapping, you will receive back the 3 ADA deposit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"EVM fees")," - the gas for the transaction on the sidechain")))}m.isMDXComponent=!0}}]);