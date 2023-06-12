"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[7127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="\u7ed9\u5f00\u53d1\u8005",l={unversionedId:"algorand/for-developers/index",id:"algorand/for-developers/index",title:"\u7ed9\u5f00\u53d1\u8005",description:"Milkomeda is a protocol designed to improve blockchain interoperability by delivering EVM capabilities to non-EVM blockchains. This is done by building layer 2 (L2) scaling solutions such as rollups, on which the EVM operates, and connecting these to the non-EVM blockchains, layer 1 (L1), via a permission-less bridge.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/algorand/for-developers/index.md",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/",permalink:"/zh/algorand/for-developers/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorand",previous:{title:"Using WAGMI with Milkomeda",permalink:"/zh/algorand/guides/using_wagmi_with_milkomeda"},next:{title:"Milkomeda A1 Overview",permalink:"/zh/algorand/for-developers/overview"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed9\u5f00\u53d1\u8005"},"\u7ed9\u5f00\u53d1\u8005"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Milkomeda is a protocol designed to improve blockchain interoperability by delivering EVM capabilities to non-EVM blockchains.")," This is done by building layer 2 (L2) scaling solutions such as rollups, on which the EVM operates, and connecting these to the non-EVM blockchains, layer 1 (L1), via a permission-less bridge."),(0,o.kt)("p",null,"A rollup is described as a \u201clayer 2\u201d chain. A rollup is described as a \u201clayer 2\u201d chain. Layer 2 means that it lives on top of an existing blockchain, which is called the layer 1 or main chain, and thus is able to take advantage of the layer 1\u2019s native, built-in properties. The Milkomeda A1 Rollup uses MilkALGO as its base asset for paying fees and gas. To access the Rollup, you will need a Algorand native wallet with some $ALGO, as well as the MetaMask wallet."),(0,o.kt)("p",null,"In the following pages we will walk through the steps to create a MyAlgo wallet, configure MetaMask to get a Milkomeda A1 address,  send ALGOs to be converted into MilkALGO on Milkomeda Algorand Rollup, and, finally, deploying a smart-contract."),(0,o.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5148\u4ecedevnet\u5f00\u59cb\uff0c\u4ee5\u4e86\u89e3\u5176\u65b9\u5411\u3002 Once you\u2019re familiar with the devnet, the operations for the mainnet are the same. Once you\u2019re familiar with the devnet, the operations for the mainnet are the same. The example steps that follow will show how to set up a connection to the both devnet and mainnet."))}d.isMDXComponent=!0}}]);