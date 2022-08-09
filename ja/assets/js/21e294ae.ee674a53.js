"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Obtaining MilkADA",sidebar_position:3},i="Obtaining MilkADA",s={unversionedId:"cardano/for-end-users/obtaining-milkada",id:"cardano/for-end-users/obtaining-milkada",title:"Obtaining MilkADA",description:'Open the Flint Wallet window and click "Send". At the next screen, enable the "Milkomeda mode" toggle, paste the Milkomeda C1 wallet address currently in the clipboard into the "Milkomeda Ethereum Address" field, and enter the amount to send (1 ADA in this example). Then click "Continue".',source:"@site/docs/cardano/for-end-users/obtaining-milkada.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/obtaining-milkada",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/obtaining-milkada",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Obtaining MilkADA",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring Metamask",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/configuring-metamask"},next:{title:"Unwrapping Assets",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/unwrapping-assets"}},l={},d=[],p={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"obtaining-milkada"},"Obtaining MilkADA"),(0,r.kt)("p",null,'Open the Flint Wallet window and click "',(0,r.kt)("strong",{parentName:"p"},"Send"),'". At the next screen, enable the "',(0,r.kt)("strong",{parentName:"p"},"Milkomeda mode"),'" toggle, paste the Milkomeda C1 wallet address currently in the clipboard into the "',(0,r.kt)("strong",{parentName:"p"},"Milkomeda Ethereum Address"),'" field, and enter the amount to send (1 ADA in this example). Then click "',(0,r.kt)("strong",{parentName:"p"},"Continue"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapping ADA in flint wallet",src:n(7738).Z,width:"450",height:"685"})),(0,r.kt)("p",null,'At the confirmation screen, enter your wallet password and click "',(0,r.kt)("strong",{parentName:"p"},"Send"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapping ADA",src:n(2632).Z,width:"450",height:"685"})),(0,r.kt)("p",null,"The transfer will require 10 confirmations, which should take approximately ",(0,r.kt)("strong",{parentName:"p"},"5")," minutes. Once the transaction is confirmed, the transferred MilkADA should be visible in your C1 wallet in MetaMask."),(0,r.kt)("admonition",{title:"A note on transaction fees",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers."),(0,r.kt)("p",{parentName:"admonition"},"However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain."),(0,r.kt)("p",{parentName:"admonition"},"For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you."),(0,r.kt)("p",{parentName:"admonition"},'When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.')),(0,r.kt)("p",null,"Now you have successfully wrapped your ADA into MilkADA for use on the Milkomeda C1 sidechain."),(0,r.kt)("admonition",{title:'About "MilkADA" vs. "Wrapped ADA"\'',type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"MilkADA is the base asset on the Milkomeda C1 sidechain. When you move ADA to Milkomeda, you receive MilkADA."),(0,r.kt)("p",{parentName:"admonition"},'Apart from MilkADA, there is another token called "Wrapped ADA" or WADA. Wrapped ADA is an ERC20 token that functions the same as WETH on Ethereum. Be careful not to get these confused!')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To check the available list of tokens that can be wrapped, go to ",(0,r.kt)("a",{parentName:"p",href:"./cardano-bridge-supported-native-assets"},(0,r.kt)("strong",{parentName:"a"},"Cardano Bridge Supported Native Assets"))," section.")))}c.isMDXComponent=!0},2632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wrapping-ada-send-5a80f0dd5a282d797d432f021150ec8c.png"},7738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wrapping-send-flint-5b8bfd728f97c57299008123b6fe12b2.png"}}]);