"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[5407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"\u83b7\u53d6\u6d4b\u8bd5ADA",sidebar_position:2},i="\u83b7\u53d6\u6d4b\u8bd5ADA",s={unversionedId:"cardano/for-developers/obtaining-test-ada",id:"cardano/for-developers/obtaining-test-ada",title:"\u83b7\u53d6\u6d4b\u8bd5ADA",description:"\u73b0\u5728\u6211\u4eec\u51c6\u5907\u4eceCardano\u6d4b\u8bd5\u7f51\u7684\u9f99\u5934\u83b7\u5f97\u4e00\u4e9b\u6d4b\u8bd5ADA\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cardano/for-developers/obtaining-test-ada.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/obtaining-test-ada",permalink:"/zh/cardano/for-developers/obtaining-test-ada",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u83b7\u53d6\u6d4b\u8bd5ADA",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eFlint\u94b1\u5305",permalink:"/zh/cardano/for-developers/configuring-flint-for-devs"},next:{title:"\u8bbe\u7f6eMetaMask",permalink:"/zh/cardano/for-developers/configuring-metamask-for-devs"}},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u83b7\u53d6\u6d4b\u8bd5ada"},"\u83b7\u53d6\u6d4b\u8bd5ADA"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u51c6\u5907\u4eceCardano\u6d4b\u8bd5\u7f51\u7684\u9f99\u5934\u83b7\u5f97\u4e00\u4e9b\u6d4b\u8bd5ADA\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u5c06\u5728Milkomeda C1\u7684\u4e3b\u7f51\u7248\u672c\u4e0a\u4f7f\u7528\u771f\u6b63\u7684ADA\uff0c\u8bf7\u8df3\u8fc7\u8fd9\u4e00\u6b65\uff0c\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"./configuring-metamask-for-devs"},"\u4e0b\u4e00\u9875"),"\u3002")),(0,a.kt)("p",null,'\u5728Flint\u94b1\u5305\u7a97\u53e3\u5185\uff0c\u70b9\u51fb"',(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536"),'"\u3002 \u5728\u63a5\u6536\u7a97\u53e3\uff0c\u70b9\u51fb \u300c',(0,a.kt)("strong",{parentName:"p"},"\u590d\u5236\u5730\u5740"),"\u300d\u5c06\u60a8\u7684 Cardano \u6d4b\u8bd5\u7f51\u94b1\u5305\u5730\u5740\u590d\u5236\u5230\u526a\u8d34\u677f\u3002 \u7136\u540e\u5355\u51fb\u300c",(0,a.kt)("strong",{parentName:"p"},"Testnet\u9f99\u5934(tADA)"),"\u300d\u5982\u5c4f\u5e55\u4e0b\u65b9\u663e\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7467).Z,width:"450",height:"675"}),"\u200b"),(0,a.kt)("p",null,"\u8fd9\u5c06\u5e26\u4f60\u5230\u4ee5\u4e0b\u94fe\u63a5: ",(0,a.kt)("a",{parentName:"p",href:"https://testnets.cardano.org/en/testnets/cardano/tools/faucet/"},"Cardano Testnet\u9f99\u5934"),"\u200b"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u300ctAda\u300d\uff0c\u5e76\u5c06\u4f60\u7684Cardano testnet\u94b1\u5305\u5730\u5740\u8d34\u4e0a\u300c\u5730\u5740\u300d\u680f\u3002 \u60a8\u53ef\u4ee5\u5c06 \u300cAPI \u5bc6\u94a5\u300d\u7559\u7a7a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5736).Z,width:"500",height:"480"})),(0,a.kt)("p",null,"\u5b8c\u6210\u9a8c\u8bc1\u7801\uff0c\u7136\u540e\u5355\u51fb\u300c",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u8d44\u91d1"),"\u300d\u3002"),(0,a.kt)("p",null,"\u7b49\u5f85\u51e0\u5206\u949f\u540e(\u901a\u5e385\u5206\u949f\u6216\u66f4\u77ed)\uff0c\u4f60\u5e94\u8be5\u80fd\u5728\u4f60\u7684Cardano Testnet\u94b1\u5305\u4e2d\u770b\u5230\u4e00\u4e9btADA\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8615).Z,width:"540",height:"840"})),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u8bbe\u7f6eMetaMask\uff0c\u5e76\u5728Milkomeda C1\u4fa7\u94fe\u83b7\u5f97\u4e00\u4e2a\u5730\u5740\u3002"))}d.isMDXComponent=!0},5736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cardano-testnet-faucet-911b2317702fbfb4cc40b5489c236241.png"},8615:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-confirm-tada-balance-f86e5804b9af69a9558ca583f025dba5.png"},7467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-copy-tada-receive-address-4f00a8a47ce585f06d5ae6e6c5bc22f7.png"}}]);