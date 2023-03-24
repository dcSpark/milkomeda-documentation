"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[3882],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(o),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4572:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=o(7462),a=(o(7294),o(3905)),r=o(4396),i=o(8168),s=o(7600),l=o(9272);const p={sidebar_position:3},d="Wrapping Assets",c={unversionedId:"algorand/for-developers/wrapping-assets",id:"algorand/for-developers/wrapping-assets",title:"Wrapping Assets",description:"In order to transfer assets from Algorand (mainchain) to the Milkomeda A1 Rollup, you need to use dedicated Bridge DApp.",source:"@site/docs/algorand/for-developers/wrapping-assets.mdx",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/wrapping-assets",permalink:"/milkomeda-documentation/algorand/for-developers/wrapping-assets",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring MetaMask",permalink:"/milkomeda-documentation/algorand/for-developers/configuring-metamask"},next:{title:"Deploying a Smart Contract",permalink:"/milkomeda-documentation/algorand/for-developers/deploying-a-smart-contract"}},m={},u=[],f={toc:u};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wrapping-assets"},"Wrapping Assets"),(0,a.kt)("p",null,"In order to ",(0,a.kt)("strong",{parentName:"p"},"transfer assets from Algorand (mainchain) to the Milkomeda A1 Rollup"),", you need to use dedicated Bridge DApp.\nTo wrap your assets onto the A1 Rollup go to the Milkomeda A1 bridge DApp at ",(0,a.kt)("a",{parentName:"p",href:"https://algorand-bridge.milkomeda.com/"},"https://algorand-bridge.milkomeda.com/"),"."),(0,a.kt)("p",null,"To start wrapping your assets, choose the ",(0,a.kt)("strong",{parentName:"p"},"Algorand to Milkomeda"),' direction from the "Network Origin" dropdown menu.\nThen select the token you want to wrap (in this tutorial, we will use ALGO) from the "Select Token" dropdown menu.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To facilitate the process of bridging testnet assets, first you need to switch the network in DApp's navbar to the desired network for bridging. Additionally, you also need to change the network in your Metamask to the same network as selected in the DApp.")),(0,a.kt)("img",{src:r.Z,className:"img-full",alt:"wrapping confirmation"}),(0,a.kt)("p",null,"The next step is to log in to your MyAlgo and MetaMask wallets."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click \u201cConnect Wallet\u201d on the Origin side and your MyAlgo wallet (we recently added support for Pera wallet too) will require you to enter your password and confirm which account to connect to the dApp. Your available ALGO balance will then be displayed below the "Select Token" field.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click \u201cConnect Wallet\u201d on the Destination side of the dApp and your Metamask wallet will ask you to confirm that you want to switch networks (if you are not already connected to it) to the Milkomeda A1 network."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enter how many ALGOs")," you want to transfer to the A1 Rollup (if you want to send your whole balance click \u201cMax\u201d to have the bridge calculate the maximum amount you can send minus the transaction fee)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click \u201cNext\u201d")," to view a transaction summary, complete with \u201cEstimated Fees\u201d and an \u201cEstimated Wrapping Confirmation Time\u201d."),(0,a.kt)("img",{src:i.Z,className:"img-full",alt:"wrapping summary"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click \u201cSign and Send\u201d"),", enter your wallet password, and hit confirm. Now watch as your tokens get sent to the bridge, wrapped, and sent to your MetaMask wallet on the Milkomeda Algorand A1 Rollup! The process should take around 20 seconds to confirm."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember that transactions from the Rollup are written to the Algorand blockchain itself. So one confirmation is for sending funds from the wallet to the bridge address and the second confirmation is for the rollup batch transaction on Algorand.")),(0,a.kt)("p",null,"The transfer only requires a total of 2 confirmations, which should take approximately 20 seconds (4.5 seconds for Algorand and around 14 seconds for the batch of the Rollup). Once the transaction is confirmed, the transferred mALGO should be visible in your Milkomeda Algorand wallet in MetaMask."),(0,a.kt)("img",{src:s.Z,className:"img-full",alt:"wrapping completed"}),(0,a.kt)("p",null,"You can now watch your transaction pass through the bridge."),(0,a.kt)("img",{src:l.Z,className:"img-full",alt:"wrapping success popup"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," You just wrapped your tokens onto on of the first rollups outside of the Ethereum ecosystem!"),(0,a.kt)("p",null,"Now that we have successfully wrapped ALGO into mALGO for use on the Milkomeda A1 Algorand Rollup, the next step is to deploy a simple smart contract."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to learn how to unwrap mALGOs, you can find out how to do that by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://dcspark.github.io/milkomeda-documentation/algorand/for-end-users/unwrapping-assets"},"Unwrapping Assets"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Moreover, if you want to wrap/unwrap ASA, go to: ",(0,a.kt)("a",{parentName:"p",href:"https://dcspark.github.io/milkomeda-documentation/algorand/for-end-users/algorand-bridge-supported-asa"},"Algorand Standard Assets Support"),".")))}g.isMDXComponent=!0},4396:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dappselectorigin-6a1408962125a03a771ee3cba19da981.png"},7600:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wrappingcompleted-0238b6476ac5dfb0d4d8e1589b048db4.png"},8168:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wrappingsummary-0c1a45ff586a368aefc11407bd0e8f20.png"},9272:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wrapsuccess-6d1354a54c9224664fdd3fcbff30e822.png"}}]);