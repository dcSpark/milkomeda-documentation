"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,u=d["".concat(l,".").concat(k)]||d[k]||p[k]||r;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(6783);const i={sidebar_label:"Configuring MetaMask",sidebar_position:3},s="Configuring MetaMask",l={unversionedId:"cardano/for-developers/configuring-metamask-for-devs",id:"cardano/for-developers/configuring-metamask-for-devs",title:"Configuring MetaMask",description:"Now that we have a Cardano testnet wallet and some Test ADA, we need an address on the Milkomeda Cardano Testnet sidechain where we can receive our MilkTADA. For now, we recommend using MetaMask for this step.",source:"@site/docs/cardano/for-developers/configuring-metamask-for-devs.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/configuring-metamask-for-devs",permalink:"/milkomeda-documentation/cardano/for-developers/configuring-metamask-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Configuring MetaMask",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Obtaining Test ADA",permalink:"/milkomeda-documentation/cardano/for-developers/obtaining-test-ada"},next:{title:"Wrapping Assets",permalink:"/milkomeda-documentation/cardano/for-developers/wrapping-assets-for-devs"}},c={},m=[],p={toc:m};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-metamask"},"Configuring MetaMask"),(0,o.kt)("p",null,"Now that we have a Cardano testnet wallet and some Test ADA, we need an address on the Milkomeda Cardano Testnet sidechain where we can receive our MilkTADA. For now, we recommend using MetaMask for this step."),(0,o.kt)("p",null,"First, install ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),". Then, click the Chrome Extensions icon ",(0,o.kt)("img",{src:r.Z,className:"img-icon"}),' and select MetaMask. Within the MetaMask window, click "',(0,o.kt)("strong",{parentName:"p"},"Get Started"),'" and then "',(0,o.kt)("strong",{parentName:"p"},"Create a Wallet"),'". Set a wallet password and click through the rest of the setup screens. When finished, you should have a new empty wallet, as shown below. Select the network dropdown at the top right of the MetaMask screen.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(893).Z,width:"615",height:"646"})),(0,o.kt)("p",null,"From the dropdown list, select \u201c",(0,o.kt)("strong",{parentName:"p"},"Add Network"),"\u201d and enter the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Network Name: Milkomeda Cardano Testnet"),(0,o.kt)("p",{parentName:"blockquote"},"New RPC URL: ",(0,o.kt)("a",{parentName:"p",href:"https://rpc-devnet-cardano-evm.c1.milkomeda.com"},"https://rpc-devnet-cardano-evm.c1.milkomeda.com")),(0,o.kt)("p",{parentName:"blockquote"},"Chain ID: 200101"),(0,o.kt)("p",{parentName:"blockquote"},"Currency Symbol (Optional): milkTADA"),(0,o.kt)("p",{parentName:"blockquote"},"Block Explorer URL (Optional): ",(0,o.kt)("a",{parentName:"p",href:"https://explorer-devnet-cardano-evm.c1.milkomeda.com"},"https://explorer-devnet-cardano-evm.c1.milkomeda.com"))),(0,o.kt)("p",null,"If you need a WebSocket endpoint, use the following: wss://rpc-devnet-cardano-evm.c1.milkomeda.com"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use the mainnet version of Milkomeda C1, enter the following parameters instead:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Network Name: Milkomeda Cardano (C1)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",null,"New RPC URL: https://rpc-mainnet-cardano-evm.c1.milkomeda.com")),(0,o.kt)("li",{parentName:"ul"},"Chain ID: 2001"),(0,o.kt)("li",{parentName:"ul"},"Currency Symbol: milkADA"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",null," Block Explorer URL: https://explorer-mainnet-cardano-evm.c1.milkomeda.com "))),(0,o.kt)("p",{parentName:"admonition"},"If you need a WebSocket endpoint, use the following: wss://rpc-mainnet-cardano-evm.c1.milkomeda.com")),(0,o.kt)("p",null,"Click \u201c",(0,o.kt)("strong",{parentName:"p"},"Save"),'\u201d, and you should now see "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda Cardano Testnet"),'" in the network dropdown. Copy your Milkomeda Cardano Testnet wallet address to the clipboard by clicking on the account name, as shown.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Metamask copy address",src:n(509).Z,width:"440",height:"600"})),(0,o.kt)("p",null,"Next we will go back to Flint Wallet and send our test ADA to be wrapped."))}d.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask-change-network-7c90c9998f53157bf2f09d965e043735.png"},509:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask-copy-c1-testnet-address-cbb9830bb357843fc645606538deb5a3.png"}}]);