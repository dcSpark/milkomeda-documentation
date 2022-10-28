"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,s(s({ref:t},d),{},{components:n})):o.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),r=n(4396),s=n(8168),i=n(7600),l=n(9272);const p={sidebar_position:3},d="Wrapping Assets",c={unversionedId:"algorand/for-end-users/wrapping-assets",id:"algorand/for-end-users/wrapping-assets",title:"Wrapping Assets",description:"In order to transfer assets from Algorand (mainchain) to the Milkomeda A1 Rollup, you need to use our dedicated Bridge dApp.",source:"@site/docs/algorand/for-end-users/wrapping-assets.mdx",sourceDirName:"algorand/for-end-users",slug:"/algorand/for-end-users/wrapping-assets",permalink:"/milkomeda-documentation/algorand/for-end-users/wrapping-assets",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring MetaMask",permalink:"/milkomeda-documentation/algorand/for-end-users/configuring-metamask"},next:{title:"Unwrapping Assets",permalink:"/milkomeda-documentation/algorand/for-end-users/unwrapping-assets"}},u={},m=[],f={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wrapping-assets"},"Wrapping Assets"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("strong",{parentName:"p"},"transfer assets from Algorand (mainchain) to the Milkomeda A1 Rollup"),", you need to use our dedicated Bridge dApp.\nTo wrap your assets onto the A1 Rollup go to the Milkomeda A1 bridge dApp at ",(0,a.kt)("a",{parentName:"p",href:"https://algorand-bridge.milkomeda.com/"},"https://algorand-bridge.milkomeda.com/"),"."),(0,a.kt)("p",null,"To start wrapping your assets, choose the ",(0,a.kt)("strong",{parentName:"p"},"Algorand to Milkomeda"),' direction from the "Network Origin" dropdown menu.\nThen select the token you want to wrap (in this tutorial, we will use ALGO) from the "Select Token" dropdown menu.'),(0,a.kt)("img",{src:r.Z,className:"img-full",alt:"wrapping confirmation"}),(0,a.kt)("p",null,"The next step is to log in to your MyAlgo and MetaMask wallets."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click \u201cConnect Wallet\u201d on the Origin side and your MyAlgo wallet (we recently added support for Pera wallet too) will require you to enter your password and confirm which account to connect to the dApp. Your available ALGO balance will then be displayed below the "Select Token" field.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click \u201cConnect Wallet\u201d on the Destination side of the dApp and your Metamask wallet will ask you to confirm that you want to switch networks (if you are not already connected to it) to the Milkomeda A1 network."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enter how many ALGOs")," you want to transfer to the A1 rollup (if you want to send your whole balance click \u201cMax\u201d to have the bridge calculate the maximum amount you can send minus the transaction fee)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click \u201cNext\u201d")," to view a transaction summary, complete with \u201cEstimated Fees\u201d and an \u201cEstimated Wrapping Confirmation Time\u201d."),(0,a.kt)("img",{src:s.Z,className:"img-full",alt:"wrapping summary"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click \u201cSign and Send\u201d"),", enter your wallet password, and hit confirm. Now watch as your tokens get sent to the bridge, wrapped, and sent to your MetaMask wallet on the Milkomeda Algorand A1 Rollup! The process should take around 20 seconds to confirm."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember that transactions from the Rollup are written to the Algorand blockchain itself. So one confirmation is for sending funds from the wallet to the bridge address and the second confirmation is for the rollup batch transaction on Algorand.")),(0,a.kt)("p",null,"The transfer only requires a total of 2 confirmations, which should take approximately 20 seconds (4.5 seconds for Algorand and around 14 seconds for the batch of the Rollup). Once the transaction is confirmed, the transferred MilkALGO should be visible in your Milkomeda Algorand wallet in MetaMask."),(0,a.kt)("img",{src:i.Z,className:"img-full",alt:"wrapping completed"}),(0,a.kt)("p",null,"You can now watch your transaction pass through the bridge."),(0,a.kt)("img",{src:l.Z,className:"img-full",alt:"wrapping success popup"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," You just wrapped your tokens onto on of the first rollups outside of the Ethereum ecosystem!"),(0,a.kt)("p",null,"Now that we have successfully wrapped ALGO into MilkALGO, for use on the Milkomeda A1 Algorand Rollup, let's see how to move assets from Milkomeda A1 Rollup to Algorand."))}g.isMDXComponent=!0},4396:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dappselectorigin-6a1408962125a03a771ee3cba19da981.png"},7600:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wrappingcompleted-0238b6476ac5dfb0d4d8e1589b048db4.png"},8168:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wrappingsummary-0c1a45ff586a368aefc11407bd0e8f20.png"},9272:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wrapsuccess-6d1354a54c9224664fdd3fcbff30e822.png"}}]);