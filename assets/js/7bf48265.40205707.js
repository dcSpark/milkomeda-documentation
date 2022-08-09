"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Wrapping Assets",sidebar_position:4},s="Wrapping Assets",i={unversionedId:"cardano/for-developers/wrapping-assets-for-devs",id:"cardano/for-developers/wrapping-assets-for-devs",title:"Wrapping Assets",description:'Open the Flint Wallet window and click "Send". At the next screen, enable the "Milkomeda mode" toggle, paste your Milkomeda C1 wallet address into the "Milkomeda Ethereum Address" field, and enter the amount to send (300 Test ADA in this example). Click "Continue".',source:"@site/docs/cardano/for-developers/wrapping-assets-for-devs.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/wrapping-assets-for-devs",permalink:"/cardano/for-developers/wrapping-assets-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Wrapping Assets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring MetaMask",permalink:"/cardano/for-developers/configuring-metamask-for-devs"},next:{title:"Unwrapping Assets",permalink:"/cardano/for-developers/unwrapping-assets-for-devs"}},d={},p=[],l={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wrapping-assets"},"Wrapping Assets"),(0,r.kt)("p",null,'Open the Flint Wallet window and click "',(0,r.kt)("strong",{parentName:"p"},"Send"),'". At the next screen, enable the "',(0,r.kt)("strong",{parentName:"p"},"Milkomeda mode"),'" toggle, paste your Milkomeda C1 wallet address into the "',(0,r.kt)("strong",{parentName:"p"},"Milkomeda Ethereum Address"),'" field, and enter the amount to send (300 Test ADA in this example). Click "',(0,r.kt)("strong",{parentName:"p"},"Continue"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7182).Z,width:"450",height:"685"})),(0,r.kt)("p",null,'At the confirmation screen, enter your wallet password and click "',(0,r.kt)("strong",{parentName:"p"},"Send"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1632).Z,width:"450",height:"680"})),(0,r.kt)("p",null,"The transfer will require 10 confirmations, which should take approximately ",(0,r.kt)("strong",{parentName:"p"},"5")," minutes. Once the transaction is confirmed, the transferred MilkTADA should be visible in your Milkomeda Cardano Testnet wallet in MetaMask."),(0,r.kt)("admonition",{title:"A note on transaction fees",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers."),(0,r.kt)("p",{parentName:"admonition"},"However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain."),(0,r.kt)("p",{parentName:"admonition"},"For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you."),(0,r.kt)("p",{parentName:"admonition"},'When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.')),(0,r.kt)("p",null,"Now that we have successfully wrapped Test ADA into MilkTADA for use on the Milkomeda Cardano Testnet sidechain, the next step is to deploy a sample smart contract."),(0,r.kt)("admonition",{title:"MilkTADA and Wrapped Test ADA",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"As we have seen, MilkTADA is the base asset used for paying fees and gas on the Milkomeda Cardano Testnet sidechain. When you move Test ADA to Milkomeda, you receive MilkTADA."),(0,r.kt)("p",{parentName:"admonition"},'"Wrapped Test ADA" (wTADA) is a separate ERC20 token that functions the same as WETH on Ethereum.'),(0,r.kt)("p",{parentName:"admonition"},"The contract address for wTADA can be found below. Note that although you can send milkTADA to this address to wrap it, you ",(0,r.kt)("strong",{parentName:"p"},"shouldn't")," send wTADA to this address to unwrap it but rather interact with it using the right method in the smart-contract. wTADA contract address: 0x65a51E52eCD17B641f8F0D1d56a6c9738951FDC9"),(0,r.kt)("p",{parentName:"admonition"},"If using the Cardano mainnet, find the wADA contract address below."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Do not directly")," send wADA to this address. For now, you will need to use a DEX to unwrap wADA (or interact directly with the smart contract)."),(0,r.kt)("p",{parentName:"admonition"},"wADA contract address: 0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9")))}c.isMDXComponent=!0},1632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flint-wrap-tada-confirm-be267431c1b43b62fbdabb2192ff6ab8.png"},7182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flint-wrap-tada-5db83d110f1ddf3f2b2430905317eae5.png"}}]);