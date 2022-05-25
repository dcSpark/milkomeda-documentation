"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[625],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_label:"Wrapping Assets",sidebar_position:4},l="Wrapping Assets",d={unversionedId:"getting-started/for-developers/wrapping-assets-for-devs",id:"getting-started/for-developers/wrapping-assets-for-devs",title:"Wrapping Assets",description:'Open the Flint Wallet window and click "Send". At the next screen, enable the "Milkomeda mode" toggle, paste your Milkomeda C1 wallet address into the "Milkomeda Ethereum Address" field, and enter the amount to send (300 Test ADA in this example). Click "Continue".',source:"@site/docs/getting-started/for-developers/wrapping-assets-for-devs.md",sourceDirName:"getting-started/for-developers",slug:"/getting-started/for-developers/wrapping-assets-for-devs",permalink:"/milkomeda-documentation/docs/getting-started/for-developers/wrapping-assets-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Wrapping Assets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring MetaMask",permalink:"/milkomeda-documentation/docs/getting-started/for-developers/configuring-metamask-for-devs"},next:{title:"Unwrapping Assets",permalink:"/milkomeda-documentation/docs/getting-started/for-developers/unwrapping-assets-for-devs"}},p={},c=[],u={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wrapping-assets"},"Wrapping Assets"),(0,o.kt)("p",null,'Open the Flint Wallet window and click "',(0,o.kt)("strong",{parentName:"p"},"Send"),'". At the next screen, enable the "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda mode"),'" toggle, paste your Milkomeda C1 wallet address into the "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda Ethereum Address"),'" field, and enter the amount to send (300 Test ADA in this example). Click "',(0,o.kt)("strong",{parentName:"p"},"Continue"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7182).Z,width:"450",height:"685"})),(0,o.kt)("p",null,'At the confirmation screen, enter your wallet password and click "',(0,o.kt)("strong",{parentName:"p"},"Send"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1632).Z,width:"450",height:"680"})),(0,o.kt)("p",null,"The transfer will require 10 confirmations, which should take approximately ",(0,o.kt)("strong",{parentName:"p"},"5")," minutes. Once the transaction is confirmed, the transferred MilkTADA should be visible in your Milkomeda Cardano Testnet wallet in MetaMask."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A note on transaction fees")),(0,o.kt)("p",null,"For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers."),(0,o.kt)("p",null,"However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain."),(0,o.kt)("p",null,"For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you."),(0,o.kt)("p",null,'When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.'),(0,o.kt)("p",null,"Now that we have successfully wrapped Test ADA into MilkTADA for use on the Milkomeda Cardano Testnet sidechain, the next step is to deploy a sample smart contract."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MilkTADA and Wrapped Test ADA")),(0,o.kt)("p",null,"As we have seen, MilkTADA is the base asset used for paying fees and gas on the Milkomeda Cardano Testnet sidechain. When you move Test ADA to Milkomeda, you receive MilkTADA."),(0,o.kt)("p",null,'"Wrapped Test ADA" (wTADA) is a separate ERC20 token that functions the same as WETH on Ethereum.'),(0,o.kt)("p",null,"The contract address for wTADA can be found below. Note that although you can send milkTADA to this address to wrap it, you ",(0,o.kt)("strong",{parentName:"p"},"shouldn't")," send wTADA to this address to unwrap it but rather interact with it using the right method in the smart-contract. wTADA contract address: 0x65a51E52eCD17B641f8F0D1d56a6c9738951FDC9"),(0,o.kt)("p",null,"If using the Cardano mainnet, find the wADA contract address below. ",(0,o.kt)("strong",{parentName:"p"},"Do not directly")," send wADA to this address. For now, you will need to use a DEX to unwrap wADA (or interact directly with the smart contract). wADA contract address: 0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9"))}m.isMDXComponent=!0},1632:function(e,t,n){t.Z=n.p+"assets/images/flint-wrap-tada-confirm-be267431c1b43b62fbdabb2192ff6ab8.png"},7182:function(e,t,n){t.Z=n.p+"assets/images/flint-wrap-tada-5db83d110f1ddf3f2b2430905317eae5.png"}}]);