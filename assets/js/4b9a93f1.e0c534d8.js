"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Unwrapping Assets",sidebar_position:4},i="Unwrapping Assets",s={unversionedId:"cardano/for-end-users/unwrapping-assets",id:"cardano/for-end-users/unwrapping-assets",title:"Unwrapping Assets",description:"To move assets from Milkomeda C1 sidechain back to Cardano, use the Milkomeda Cardano Unwrap Bridge. Follow the steps below to unwrap milkADA and receive ADA in your Cardano mainnet wallet.&#x20;",source:"@site/docs/cardano/for-end-users/unwrapping-assets.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/unwrapping-assets",permalink:"/cardano/for-end-users/unwrapping-assets",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Unwrapping Assets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Obtaining MilkADA",permalink:"/cardano/for-end-users/obtaining-milkada"},next:{title:"Cardano Bridge Supported Native Assets",permalink:"/cardano/for-end-users/cardano-bridge-supported-native-assets"}},l={},c=[],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unwrapping-assets"},"Unwrapping Assets"),(0,r.kt)("p",null,"To move assets from Milkomeda C1 sidechain back to Cardano, use the Milkomeda Cardano Unwrap Bridge. Follow the steps below to unwrap milkADA and receive ADA in your Cardano mainnet wallet."," "),(0,r.kt)("p",null,"First, access the ",(0,r.kt)("a",{parentName:"p",href:"https://cardano-bridge.milkomeda.com/bridge"},"Milkomeda Cardano Unwrap Bridge")," and connect your MetaMask wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect metamask",src:n(7721).Z,width:"558",height:"228"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Wallet",src:n(3884).Z,width:"558",height:"832"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Click"),' "Next"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Milkomeda network",src:n(8198).Z,width:"572",height:"832"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Connect to the Milkomeda C1 Sidechain")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Remember to select the appropriate network in your wallet. ",(0,r.kt)("br",null),"\nOnly connect with sites you trust. Make sure the website URL is as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cardano-bridge.milkomeda.com"))),(0,r.kt)("p",null,'Next, enter the amount of milkADA to unwrap or click the arrow to select a different asset to unwrap, and paste your Cardano wallet address in the "To" field. Then, click the "Next Step" button.'),(0,r.kt)("img",{className:"img-full",src:"/img/token-selection.png"}),(0,r.kt)("p",null,'Sign the transaction for unwrapping the assets in MetaMask by clicking "Confirm".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Confirm Metamask",src:n(5295).Z,width:"572",height:"1126"})),(0,r.kt)("p",null,"Next, wait for blockchain confirmation."),(0,r.kt)("img",{className:"img-full",src:"/img/blockchain-confirmation.png",alt:"Blockchain confirmation"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can check the transaction details in ",(0,r.kt)("a",{parentName:"p",href:"https://cardanoscan.io"},"Cardanoscan")," explorer for more information.")),(0,r.kt)("p",null,"At this stage, the address bar of your browser will contain some information about the unwrapping transaction. An example is shown in the figure below."),(0,r.kt)("img",{className:"img-full",src:"/img/address-bar-link.png",alt:"Address bar link"}),(0,r.kt)("p",null,"The meaning of each of these elements in the address bar is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The EVM unwrapping transaction ID"),(0,r.kt)("li",{parentName:"ul"},"The unwrapped token amount"),(0,r.kt)("li",{parentName:"ul"},"The name of the token being unwrapped")),(0,r.kt)("p",null,"To look up more detailed information about the unwrapping transaction, go to ",(0,r.kt)("a",{parentName:"p",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/"},"Milkomeda Blockscout explorer")," and paste the EVM unwrapping transaction ID into the search box, as shown below."),(0,r.kt)("img",{className:"img-full",src:"/img/search-box-blockscout.png",alt:"Search box in Blockscout"}),(0,r.kt)("a",{href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/tx/0xf21f79d02f9af4935adbb913f915cf217ad8f3402ea1edf0af4e5913a58792ab/internal-transactions",target:"_blank",rel:"noreferrer noopener",className:"text-center block mb-4"},"Look up the example transaction"),(0,r.kt)("p",null,"The unwrapping process is now complete. After waiting for the necessary transaction confirmations, you should see the unwrapped asset in your Cardano Mainnet wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flint transactions page",src:n(173).Z,width:"494",height:"826"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To check the available list of tokens that can be unwrapped, go to ",(0,r.kt)("a",{parentName:"p",href:"./cardano-bridge-supported-native-assets"},(0,r.kt)("strong",{parentName:"a"},"Cardano Bridge Supported Native Assets"))," section.")))}m.isMDXComponent=!0},5295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/confirm-metamask-c34aba8a4666c8a51f201b58e0b4ce8e.png"},7721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-metamask-46f13fa3f800d82a097d88e4c05d176a.png"},8198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-milkomeda-aa4241c268279e290291e20f699c753c.png"},3884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wallet-0c825a1bff1fe8b2679be3b8859045ec.png"},173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flint-transactions-2ef3e93c1a1674f17bdb1849804087a1.png"}}]);