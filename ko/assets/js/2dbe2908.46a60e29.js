"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[9995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,slug:"/cardano/wrapped-smart-contracts"},i="Overview",s={unversionedId:"cardano/wrapped-smart-contracts/overview",id:"cardano/wrapped-smart-contracts/overview",title:"Overview",description:"Introduction",source:"@site/docs/cardano/wrapped-smart-contracts/overview.mdx",sourceDirName:"cardano/wrapped-smart-contracts",slug:"/cardano/wrapped-smart-contracts",permalink:"/ko/cardano/wrapped-smart-contracts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/cardano/wrapped-smart-contracts"},sidebar:"cardano",previous:{title:"Wrapped Smart Contracts",permalink:"/ko/category/wrapped-smart-contracts"},next:{title:"For Users",permalink:"/ko/cardano/wrapped-smart-contracts/for_users"}},c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"What are Wrapped Smart Contracts (WSC)?",id:"what-are-wrapped-smart-contracts-wsc",level:3},{value:"For Users",id:"for-users",level:3},{value:"For Developers",id:"for-developers",level:3},{value:"Driving the Blockchain Ecosystem Forward",id:"driving-the-blockchain-ecosystem-forward",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Migrating to new ecosystems can be challenging for both developers and users due to various factors. While Layer 2 (L2) technology offers faster speeds and lower costs, it often compromises security when compared to the Layer 1 (L1)."),(0,a.kt)("p",null,"To address this, ",(0,a.kt)("strong",{parentName:"p"},"Wrapped Smart Contracts (WSC)")," present an innovative concept, allowing users to interact with Dapps on L2 while retaining the security of their funds on the L1."),(0,a.kt)("h3",{id:"what-are-wrapped-smart-contracts-wsc"},"What are Wrapped Smart Contracts (WSC)?"),(0,a.kt)("p",null,"WSC present a way for seamless Cross-Layer interaction by acting as a bridge between L1 and L2 blockchains, and enabling users to execute smart contracts on L2 while keeping their funds securely stored on the L1 blockchain.\nThis approach ensures a user-friendly experience, eliminating the need for users to switch wallets or delve into complex technical details."),(0,a.kt)("p",null,"Providing such flexibility and power to end users will set a new standard for smart contract enabled blockchains and their ecosystems at large, pushing forward the ones which adopt this new technology with significant traction and interest."),(0,a.kt)("h3",{id:"for-users"},(0,a.kt)("a",{parentName:"h3",href:"/cardano/wrapped-smart-contracts/for_users"},"For Users")),(0,a.kt)("p",null,"For users, WSC simplifies the process of accessing L2 functionalities without the hassle of bridging L1 funds. By following the simple steps outlined in the ",(0,a.kt)("a",{parentName:"p",href:"/cardano/wrapped-smart-contracts/for_users"},"Users")," section, users can experience how to seamlessly interact with EVM Dapps from their Mainchain Wallets using WSC. The goal is to provide the most intuitive and frictionless user experience so that users can comfortably utilize the Sidechain with just their mainchain wallet."),(0,a.kt)("p",null,"We are working to provide the most seamless UX so that users can interact with the Sidechain with nothing more than their mainchain wallet installed."),(0,a.kt)("h3",{id:"for-developers"},(0,a.kt)("a",{parentName:"h3",href:"/cardano/wrapped-smart-contracts/developers/dev_overview"},"For Developers")),(0,a.kt)("p",null,"Developers working with the EVM Stack can leverage WSC to enable the entire L1 community to interact with their Dapps while enjoying an improved user experience.\nBy integrating WSC, developers can allow users to access their Dapps without the need to leave their Mainchain wallets behind.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/cardano/wrapped-smart-contracts/developers/dev_overview"},"Developers")," documentation and to ",(0,a.kt)("a",{parentName:"p",href:"/cardano/wrapped-smart-contracts/developers/how_to_integrate"},"How to integrate")," page provides comprehensive guidance on implementing WSC within projects."),(0,a.kt)("h3",{id:"driving-the-blockchain-ecosystem-forward"},"Driving the Blockchain Ecosystem Forward"),(0,a.kt)("p",null,"By introducing WSC, a new standard is set for smart contract-enabled blockchains and their ecosystems.\nThis technology is expected to gain significant traction and interest among platforms that adopt it, as it provides the necessary flexibility and power to end-users and developers alike."),(0,a.kt)("p",null,"WSC represent a pivotal advancement in facilitating cross-layer interaction for blockchain ecosystems.\nUsers can confidently explore L2 functionalities without compromising the security of their L1 funds, while developers can attract a broader audience by offering a seamless and user-friendly experience. Embracing this technology will undoubtedly drive the blockchain ecosystem towards greater efficiency and accessibility for all stakeholders."))}d.isMDXComponent=!0}}]);