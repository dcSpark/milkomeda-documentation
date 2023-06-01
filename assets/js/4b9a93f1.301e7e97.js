"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[5232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(5327),i=n(5078),s=n(8059),l=n(9581);const c={title:"Unwrapping Assets",sidebar_position:4},p="Unwrapping Assets",d={unversionedId:"cardano/for-end-users/unwrapping-assets",id:"cardano/for-end-users/unwrapping-assets",title:"Unwrapping Assets",description:"When it comes to unwrapping assets in the Milkomeda Cardano Sidechain (C1) ecosystem, there are two main options: using the Flint Wallet or the Milkomeda Cardano Unwrap Bridge. In this tutorial, we'll guide you through both options so you can choose the one that works best for you.",source:"@site/docs/cardano/for-end-users/unwrapping-assets.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/unwrapping-assets",permalink:"/cardano/for-end-users/unwrapping-assets",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Unwrapping Assets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Obtaining mADA",permalink:"/cardano/for-end-users/obtaining-milkada"},next:{title:"Cardano Bridge Supported Native Assets",permalink:"/cardano/for-end-users/cardano-bridge-supported-native-assets"}},m={},u=[{value:"Flint Wallet",id:"flint-wallet",level:2},{value:"Milkomeda Cardano Unwrap Bridge",id:"milkomeda-cardano-unwrap-bridge",level:2}],h={toc:u};function f(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unwrapping-assets"},"Unwrapping Assets"),(0,o.kt)("p",null,"When it comes to unwrapping assets in the Milkomeda Cardano Sidechain (C1) ecosystem, there are two main options: using the ",(0,o.kt)("a",{parentName:"p",href:"https://flint-wallet.com/"},"Flint Wallet")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://cardano-bridge.milkomeda.com/bridge"},"Milkomeda Cardano Unwrap Bridge"),". In this tutorial, we'll guide you through both options so you can choose the one that works best for you."),(0,o.kt)("h2",{id:"flint-wallet"},"Flint Wallet"),(0,o.kt)("p",null,"To perform the asset unwrapping, use the ",(0,o.kt)("strong",{parentName:"p"},"SEND")," function on the wallet screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flint Homescreen",src:n(7284).Z,width:"440",height:"400"})),(0,o.kt)("p",null,"To begin, toggle on the ",(0,o.kt)("strong",{parentName:"p"},"Milkomeda Mode (Beta)")," and choose Milkomeda C1 asset from the token select dropdown. Next, input the recipient's Cardano address in the designated box, followed by the desired amount. Lastly, click on the ",(0,o.kt)("strong",{parentName:"p"},"CONTINUE")," button to proceed to the confirmation screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flint Input",src:n(5385).Z,width:"689",height:"1034"})),(0,o.kt)("p",null,'The confirmation screen provides an opportunity to review critical details, including the "from" and "to" addresses, as well as the network fee. It\'s worth noting that the total fee comprises both the base fee and Milkomeda fee since the transaction occurs on both the Milkomeda C1 chain and Cardano. Take a moment to double-check the information before proceeding.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm Transaction",src:n(9940).Z,width:"685",height:"1051"})),(0,o.kt)("p",null,"After entering the wallet spending password and pressing the ",(0,o.kt)("strong",{parentName:"p"},"SEND")," button, the transaction(s) will be sent."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction Submitted",src:n(2033).Z,width:"685",height:"1051"})),(0,o.kt)("p",null,'If you need more information, there are two ways to access it. You can follow the link on the confirmation screen to view the transaction on Blockscount explorer or navigate to the "Activity" section in the footer to find the transaction on the list. Clicking on the transaction will provide two links, one for viewing the transaction on the Milkomeda chain explorer and the other for Cardano.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction List",src:n(4569).Z,width:"700",height:"1171"})),(0,o.kt)("h2",{id:"milkomeda-cardano-unwrap-bridge"},"Milkomeda Cardano Unwrap Bridge"),(0,o.kt)("p",null,"To move assets from Milkomeda C1 sidechain back to Cardano, you can also use the Milkomeda Cardano Unwrap Bridge. Follow the steps below to unwrap mADA and receive ADA in your Cardano mainnet wallet."," "),(0,o.kt)("p",null,"First, access the ",(0,o.kt)("a",{parentName:"p",href:"https://cardano-bridge.milkomeda.com/bridge"},"Milkomeda Cardano Unwrap Bridge")," and connect your MetaMask wallet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect metamask",src:n(7721).Z,width:"558",height:"228"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect Wallet",src:n(3884).Z,width:"558",height:"832"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click"),' "Next"'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect Milkomeda network",src:n(8198).Z,width:"572",height:"832"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Connect to the Milkomeda C1 Sidechain")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Remember to select the appropriate network in your wallet. ",(0,o.kt)("br",null),"\nOnly connect with sites you trust. Make sure the website URL is as follows: ",(0,o.kt)("a",{parentName:"p",href:"https://cardano-bridge.milkomeda.com"},"https://cardano-bridge.milkomeda.com"))),(0,o.kt)("p",null,'Next, enter the amount of mADA to unwrap or click the arrow to select a different asset to unwrap, and paste your Cardano wallet address in the "To" field. Then, click the "Next Step" button.'),(0,o.kt)("img",{className:"img-full",src:r.Z}),(0,o.kt)("p",null,'Sign the transaction for unwrapping the assets in MetaMask by clicking "Confirm".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm Metamask",src:n(5295).Z,width:"572",height:"1126"})),(0,o.kt)("p",null,"Next, wait for blockchain confirmation."),(0,o.kt)("img",{className:"img-full",src:i.Z,alt:"Blockchain confirmation"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can check the transaction details in ",(0,o.kt)("a",{parentName:"p",href:"https://cardanoscan.io"},"Cardanoscan")," explorer for more information.")),(0,o.kt)("p",null,"At this stage, the address bar of your browser will contain some information about the unwrapping transaction. An example is shown in the figure below."),(0,o.kt)("img",{className:"img-full",src:s.Z,alt:"Address bar link"}),(0,o.kt)("p",null,"The meaning of each of these elements in the address bar is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The EVM unwrapping transaction ID"),(0,o.kt)("li",{parentName:"ul"},"The unwrapped token amount"),(0,o.kt)("li",{parentName:"ul"},"The name of the token being unwrapped")),(0,o.kt)("p",null,"To look up more detailed information about the unwrapping transaction, go to ",(0,o.kt)("a",{parentName:"p",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/"},"Milkomeda Blockscout explorer")," and paste the EVM unwrapping transaction ID into the search box, as shown below."),(0,o.kt)("img",{className:"img-full",src:l.Z,alt:"Search box in Blockscout"}),(0,o.kt)("a",{href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/tx/0xf21f79d02f9af4935adbb913f915cf217ad8f3402ea1edf0af4e5913a58792ab/internal-transactions",target:"_blank",rel:"noreferrer noopener",className:"text-center block mb-4"},"Look up the example transaction"),(0,o.kt)("p",null,"The unwrapping process is now complete. After waiting for the necessary transaction confirmations, you should see the unwrapped asset in your Cardano Mainnet wallet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flint transactions page",src:n(173).Z,width:"494",height:"826"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To check the available list of tokens that can be unwrapped, go to ",(0,o.kt)("a",{parentName:"p",href:"https://bridge-explorer.milkomeda.com/cardano-mainnet/tokens"},(0,o.kt)("strong",{parentName:"a"},"Cardano Bridge Supported Native Assets"))," tab in Bridge Explorer.")))}f.isMDXComponent=!0},8059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/address-bar-link-e7b90e05d0ac0845af59b501227e5f94.png"},5078:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockchain-confirmation-6ff366844b3e1e1aa513721f716eb95b.png"},9581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-box-blockscout-786bb6ec66cba7c5d6e0a6e3603e8d5c.png"},5327:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-selection-90b1f391043322b1a5a9ed4e01f59512.png"},5295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/confirm-metamask-c34aba8a4666c8a51f201b58e0b4ce8e.png"},7721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-metamask-46f13fa3f800d82a097d88e4c05d176a.png"},8198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-milkomeda-aa4241c268279e290291e20f699c753c.png"},3884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wallet-0c825a1bff1fe8b2679be3b8859045ec.png"},7284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flint-home-screen-f5e25d8ac0667843ae7b1570ba68103c.png"},173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flint-transactions-2ef3e93c1a1674f17bdb1849804087a1.png"},9940:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unwrapping-confirm-transaction-1eb031366a52d77480f4e3036ee65df2.png"},4569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unwrapping-transaction-list-bb62a8e18e33803755bca9dff32fffab.png"},2033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unwrapping-transaction-submitted-746476022a90638acc7abafcce327251.png"},5385:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unwrappingflintinput-6ba5900e6e3c1a0b6117e0c33bf19c40.png"}}]);