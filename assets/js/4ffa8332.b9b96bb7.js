"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[872],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Obtaining MilkADA",sidebar_position:3},l="Obtaining MilkADA",d={unversionedId:"getting-started/for-end-users/obtaining-milkada",id:"getting-started/for-end-users/obtaining-milkada",title:"Obtaining MilkADA",description:'Open the Flint Wallet window and click "Send". At the next screen, enable the "Milkomeda mode" toggle, paste the Milkomeda C1 wallet address currently in the clipboard into the "Milkomeda Ethereum Address" field, and enter the amount to send (1 ADA in this example). Then click "Continue".',source:"@site/docs/getting-started/for-end-users/obtaining-milkada.md",sourceDirName:"getting-started/for-end-users",slug:"/getting-started/for-end-users/obtaining-milkada",permalink:"/milkomeda-documentation/docs/getting-started/for-end-users/obtaining-milkada",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Obtaining MilkADA",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring MetaMask",permalink:"/milkomeda-documentation/docs/getting-started/for-end-users/configuring-metamask"},next:{title:"Unwrapping Assets",permalink:"/milkomeda-documentation/docs/getting-started/for-end-users/unwrapping-assets"}},c={},u=[],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obtaining-milkada"},"Obtaining MilkADA"),(0,o.kt)("p",null,'Open the Flint Wallet window and click "',(0,o.kt)("strong",{parentName:"p"},"Send"),'". At the next screen, enable the "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda mode"),'" toggle, paste the Milkomeda C1 wallet address currently in the clipboard into the "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda Ethereum Address"),'" field, and enter the amount to send (1 ADA in this example). Then click "',(0,o.kt)("strong",{parentName:"p"},"Continue"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6194).Z,width:"450",height:"685"})),(0,o.kt)("p",null,'At the confirmation screen, enter your wallet password and click "',(0,o.kt)("strong",{parentName:"p"},"Send"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(829).Z,width:"450",height:"685"})),(0,o.kt)("p",null,"The transfer will require 10 confirmations, which should take approximately ",(0,o.kt)("strong",{parentName:"p"},"5")," minutes. Once the transaction is confirmed, the transferred MilkADA should be visible in your C1 wallet in MetaMask."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A note on transaction fees")),(0,o.kt)("p",null,"For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers."),(0,o.kt)("p",null,"However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain."),(0,o.kt)("p",null,"For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you."),(0,o.kt)("p",null,'When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.'),(0,o.kt)("p",null,"Now you have successfully wrapped your ADA into MilkADA for use on the Milkomeda C1 sidechain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'About "MilkADA" vs. "Wrapped ADA"')),(0,o.kt)("p",null,"MilkADA is the base asset on the Milkomeda C1 sidechain. When you move ADA to Milkomeda, you receive MilkADA."),(0,o.kt)("p",null,'Apart from MilkADA, there is another token called "Wrapped ADA" or WADA. Wrapped ADA is an ERC20 token that functions the same as WETH on Ethereum. Be careful not to get these confused!'))}m.isMDXComponent=!0},829:function(e,t,n){t.Z=n.p+"assets/images/flint-wrap-ada-confirm-5a80f0dd5a282d797d432f021150ec8c.png"},6194:function(e,t,n){t.Z=n.p+"assets/images/flint-wrap-ada-5b8bfd728f97c57299008123b6fe12b2.png"}}]);