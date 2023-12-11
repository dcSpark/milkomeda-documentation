"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[3701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="For End-users",l={unversionedId:"algorand/for-end-users/index",id:"algorand/for-end-users/index",title:"For End-users",description:"Milkomeda is a protocol designed to improve blockchain interoperability by delivering EVM capabilities to non-EVM blockchains. This is done by building layer 2 (L2) scaling solutions such as rollups, on which the EVM operates, and connecting these to the non-EVM blockchains, layer 1 (L1), via a permission-less bridge.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/algorand/for-end-users/index.md",sourceDirName:"algorand/for-end-users",slug:"/algorand/for-end-users/",permalink:"/zh/algorand/for-end-users/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorand",previous:{title:"Optimistic Rollup",permalink:"/zh/algorand/how-it-works/optimistic-rollup"},next:{title:"Configuring Algorand Wallet and obtaining Test ALGO",permalink:"/zh/algorand/for-end-users/obtaining-test-algo"}},s={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for-end-users"},"For End-users"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Milkomeda is a protocol designed to improve blockchain interoperability by delivering EVM capabilities to non-EVM blockchains.")," This is done by building layer 2 (L2) scaling solutions such as rollups, on which the EVM operates, and connecting these to the non-EVM blockchains, layer 1 (L1), via a permission-less bridge."),(0,a.kt)("p",null,"A rollup is described as a \u201clayer 2\u201d chain. A rollup is described as a \u201clayer 2\u201d chain. Layer 2 means that it lives on top of an existing blockchain, which is called the layer 1 or main chain, and thus is able to take advantage of the layer 1\u2019s native, built-in properties."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Milkomeda A1 Rollup uses MilkALGO as its base asset for paying fees and gas.")," To access the Rollup, you will need a Algorand native wallet with some $ALGO, as well as the MetaMask wallet."),(0,a.kt)("p",null,"In the following pages we will walk through the steps to create a MyAlgo wallet, configure MetaMask to get a Milkomeda A1 address, and, finally, to send ALGOs to be converted into MilkALGO on Milkomeda Algorand Rollup. In this tutorial, you will also learn how to transfer funds back to Algorand in a process called unwrapping. In addition, we'll talk about what Algorand Standard Assets (ASAs) are and what you need to do to prepare to move these assets between the mainchain (Algorand) and the Rollup (Milkomeda). In this tutorial, you will also learn how to transfer funds back to Algorand in a process called unwrapping. In addition, we'll talk about what Algorand Standard Assets (ASAs) are and what you need to do to prepare to move these assets between the mainchain (Algorand) and the Rollup (Milkomeda)."),(0,a.kt)("p",null,"The first step is to configure a native wallet on Algorand. The first step is to configure a native wallet on Algorand. In this tutorial we will use the MyAlgo wallet (you can also configure Pera Wallet, and with this you can interact with the dApp using a smartphone). \u524d\u5f80\u4e0b\u4e00\u9875\u5f00\u59cb\u3002 \u524d\u5f80\u4e0b\u4e00\u9875\u5f00\u59cb\u3002"))}u.isMDXComponent=!0}}]);